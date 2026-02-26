import { useState, useRef, useEffect } from 'react'
import { generateId } from '@/lib/generateId'
import { Node, Task } from '@/types'
import { cn } from '@/lib/utils'
import useTaskStore from '@/stores/useTaskStore'
import useFunnelStore from '@/stores/useFunnelStore'
import {
  Megaphone,
  LayoutTemplate,
  MessageCircle,
  Mail,
  DollarSign,
  HandHeart,
  CheckCircle,
  FileText,
  Settings,
  Trash2,
  Zap,
  MessageSquare,
  Clock,
  ExternalLink,
  Image as ImageIcon,
  CheckSquare,
  Plus,
  X,
  PlayCircle,
} from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Checkbox } from '@/components/ui/checkbox'

const icons: Record<string, any> = {
  Ad: Megaphone,
  LandingPage: LayoutTemplate,
  Email: Mail,
  Checkout: DollarSign,
  Upsell: HandHeart,
  Obrigado: CheckCircle,
  Form: FileText,
  Slack: MessageSquare,
  SMS: MessageCircle,
  WATI: MessageCircle,
  ManyChat: MessageCircle,
  WaitUntil: Clock,
  Default: Zap,
  VSL: PlayCircle,
  Traffic: Megaphone,
  Goal: CheckCircle,
}

type NodeItemProps = {
  node: Node
  selected: boolean
  isNodeDragging: boolean
  snapToGrid?: boolean
  activeTool: string
  taskProgress: { total: number; completed: number }
  onPointerDownAction: (shiftKey: boolean) => void
  onMove: (dx: number, dy: number) => void
  onMoveEnd: (dx: number, dy: number) => void
  onResize?: (x: number, y: number, w: number, h: number) => void
  onResizeEnd?: (x: number, y: number, w: number, h: number) => void
  scale: number
  onOpenRightPanel: (tab: string) => void
  onOpenSettings: () => void
  onToggleComplete: () => void
  onDelete: () => void
  onAddChild: () => void
  onTextChange: (text: string) => void
  onEdgeDragStart: (nodeId: string, e: React.PointerEvent) => void
  onDropResource: (type: string, id: string) => void
}

export default function NodeItem({
  node,
  selected,
  isNodeDragging,
  snapToGrid,
  activeTool,
  taskProgress,
  onPointerDownAction,
  onMove,
  onMoveEnd,
  onResize,
  onResizeEnd,
  scale,
  onOpenRightPanel,
  onOpenSettings,
  onToggleComplete,
  onDelete,
  onAddChild,
  onTextChange,
  onEdgeDragStart,
  onDropResource,
}: NodeItemProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isEditingText, setIsEditingText] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)
  const hasAutoSelected = useRef(false)

  const [tasks, setTasks] = useTaskStore()
  const [funnels] = useFunnelStore()
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [isAddingTask, setIsAddingTask] = useState(false)

  const callbacksRef = useRef({
    onPointerDownAction,
    onMove,
    onMoveEnd,
    onResize,
    onResizeEnd,
  })
  callbacksRef.current = {
    onPointerDownAction,
    onMove,
    onMoveEnd,
    onResize,
    onResizeEnd,
  }

  const funnel = funnels.find((f) => f.nodes.some((n) => n.id === node.id))
  const linkedTasks = tasks.filter(
    (t) => t.nodeId === node.id || node.data.linkedTaskIds?.includes(t.id),
  )

  const isPanMode = activeTool === 'Pan'
  const isSelectMode = activeTool === 'Select'
  const currentlyDragging = isDragging || isNodeDragging

  useEffect(() => {
    if (
      node.type === 'FloatingText' &&
      node.data.name === 'New Text' &&
      !hasAutoSelected.current
    ) {
      hasAutoSelected.current = true
      setIsEditingText(true)
      setTimeout(() => {
        if (textRef.current) {
          textRef.current.focus()
          document.execCommand('selectAll', false, undefined)
        }
      }, 0)
    }
  }, [node.type, node.data.name])

  const handleToggleTask = (task: Task) => {
    const newStatus = task.status === 'Concluído' ? 'A Fazer' : 'Concluído'
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, status: newStatus } : t)),
    )
  }

  const handleAddTask = () => {
    if (!newTaskTitle.trim()) {
      setIsAddingTask(false)
      return
    }
    const newTask: Task = {
      id: generateId('t'),
      title: newTaskTitle.trim(),
      projectId: funnel?.projectId || null,
      funnelId: funnel?.id,
      nodeId: node.id,
      priority: 'Média',
      status: 'A Fazer',
      deadline: new Date(Date.now() + 86400000).toISOString(),
    }
    setTasks([...tasks, newTask])
    setNewTaskTitle('')
    setIsAddingTask(false)
  }

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return
    const target = e.target as HTMLElement
    if (
      isPanMode ||
      target.closest('button') ||
      target.closest('.interactive-icon') ||
      target.closest('[role="checkbox"]') ||
      target.closest('input') ||
      target.closest('.resize-handle') ||
      !isSelectMode
    )
      return
    e.stopPropagation()
    target.setPointerCapture(e.pointerId)
    setIsDragging(true)
    callbacksRef.current.onPointerDownAction(e.shiftKey)
    document.body.style.userSelect = 'none'

    const startX = e.clientX,
      startY = e.clientY,
      initialNodeX = node.x,
      initialNodeY = node.y
    const handlePointerMove = (moveEv: PointerEvent) => {
      let dx = (moveEv.clientX - startX) / scale,
        dy = (moveEv.clientY - startY) / scale
      if (snapToGrid) {
        const snappedX = Math.round((initialNodeX + dx) / 28) * 28,
          snappedY = Math.round((initialNodeY + dy) / 28) * 28
        dx = snappedX - initialNodeX
        dy = snappedY - initialNodeY
      }
      callbacksRef.current.onMove(dx, dy)
    }
    const handlePointerUp = (upEv: PointerEvent) => {
      try {
        target.releasePointerCapture(upEv.pointerId)
      } catch (err) {
        /* ignore */
      }
      setIsDragging(false)
      document.body.style.userSelect = ''
      let dx = (upEv.clientX - startX) / scale,
        dy = (upEv.clientY - startY) / scale
      if (snapToGrid) {
        const snappedX = Math.round((initialNodeX + dx) / 28) * 28,
          snappedY = Math.round((initialNodeY + dy) / 28) * 28
        dx = snappedX - initialNodeX
        dy = snappedY - initialNodeY
      }
      callbacksRef.current.onMoveEnd(dx, dy)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointercancel', handlePointerUp)
    }
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointercancel', handlePointerUp)
  }

  const handleResizeStart = (e: React.PointerEvent, corner: string) => {
    if (e.button !== 0) return
    e.stopPropagation()
    const target = e.target as HTMLElement
    target.setPointerCapture(e.pointerId)
    setIsResizing(true)
    callbacksRef.current.onPointerDownAction(e.shiftKey)
    document.body.style.userSelect = 'none'

    const startX = e.clientX,
      startY = e.clientY,
      initialX = node.x,
      initialY = node.y,
      initialW = node.width || 120,
      initialH = node.height || 120
    const isSquare = e.shiftKey

    const handlePointerMove = (moveEv: PointerEvent) => {
      let dx = (moveEv.clientX - startX) / scale,
        dy = (moveEv.clientY - startY) / scale
      let newX = initialX,
        newY = initialY,
        newW = initialW,
        newH = initialH

      if (corner.includes('e')) newW = Math.max(20, initialW + dx)
      if (corner.includes('s')) newH = Math.max(20, initialH + dy)
      if (corner.includes('w')) {
        const mw = Math.max(20, initialW - dx)
        newX = initialX + (initialW - mw)
        newW = mw
      }
      if (corner.includes('n')) {
        const mh = Math.max(20, initialH - dy)
        newY = initialY + (initialH - mh)
        newH = mh
      }

      if (isSquare) {
        const size = Math.max(newW, newH)
        newW = size
        newH = size
      }
      if (snapToGrid) {
        newX = Math.round(newX / 28) * 28
        newY = Math.round(newY / 28) * 28
        newW = Math.round(newW / 28) * 28
        newH = Math.round(newH / 28) * 28
      }
      callbacksRef.current.onResize?.(newX, newY, newW, newH)
    }

    const handlePointerUp = (upEv: PointerEvent) => {
      try {
        target.releasePointerCapture(upEv.pointerId)
      } catch (err) {
        /* ignore */
      }
      setIsResizing(false)
      document.body.style.userSelect = ''

      let dx = (upEv.clientX - startX) / scale,
        dy = (upEv.clientY - startY) / scale
      let newX = initialX,
        newY = initialY,
        newW = initialW,
        newH = initialH

      if (corner.includes('e')) newW = Math.max(20, initialW + dx)
      if (corner.includes('s')) newH = Math.max(20, initialH + dy)
      if (corner.includes('w')) {
        const mw = Math.max(20, initialW - dx)
        newX = initialX + (initialW - mw)
        newW = mw
      }
      if (corner.includes('n')) {
        const mh = Math.max(20, initialH - dy)
        newY = initialY + (initialH - mh)
        newH = mh
      }

      if (isSquare) {
        const size = Math.max(newW, newH)
        newW = size
        newH = size
      }
      if (snapToGrid) {
        newX = Math.round(newX / 28) * 28
        newY = Math.round(newY / 28) * 28
        newW = Math.round(newW / 28) * 28
        newH = Math.round(newH / 28) * 28
      }
      callbacksRef.current.onResizeEnd?.(newX, newY, newW, newH)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointercancel', handlePointerUp)
    }
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointercancel', handlePointerUp)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const resType = e.dataTransfer.getData('resourceType'),
      resId = e.dataTransfer.getData('resourceId')
    if (resType && resId) onDropResource(resType, resId)
  }

  if (node.type === 'FloatingText') {
    return (
      <div
        className={cn(
          'absolute top-0 left-0 pointer-events-auto min-w-[50px] p-2 z-10 group outline-none',
          selected && 'ring-2 ring-[#C2714F]/60 shadow-lg rounded-md',
          !currentlyDragging && 'transition-transform duration-150',
          currentlyDragging
            ? 'opacity-95 z-50 cursor-grabbing shadow-xl ring-2 ring-[#C2714F]/30 rounded-md'
            : isPanMode
              ? 'cursor-grab'
              : isSelectMode
                ? isEditingText
                  ? 'cursor-text'
                  : 'cursor-pointer'
                : '',
        )}
        style={{
          transform: `translate3d(${node.x}px, ${node.y}px, 0) scale(${currentlyDragging ? 1.02 : 1})`,
          color: node.style?.color || '#3D2B1F',
          transformOrigin: 'center center',
        }}
        onPointerDown={(e) => {
          if (isEditingText) {
            e.stopPropagation()
            return
          }
          handlePointerDown(e)
        }}
        onDoubleClick={(e) => {
          if (!isPanMode && isSelectMode) {
            e.stopPropagation()
            setIsEditingText(true)
            setTimeout(() => {
              textRef.current?.focus()
              const selection = window.getSelection()
              const range = document.createRange()
              range.selectNodeContents(textRef.current!)
              selection?.removeAllRanges()
              selection?.addRange(range)
            }, 0)
          }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-node-id={node.id}
      >
        <div
          ref={textRef}
          className="font-bold text-[15px] whitespace-pre-wrap outline-none min-h-[24px] min-w-[20px]"
          contentEditable={isEditingText}
          suppressContentEditableWarning
          onPointerDown={(e) => {
            if (isEditingText) e.stopPropagation()
          }}
          onBlur={(e) => {
            setIsEditingText(false)
            onTextChange(e.currentTarget.textContent || 'Text')
          }}
        >
          {node.data.name}
        </div>
      </div>
    )
  }

  if (['Square', 'Diamond', 'Circle'].includes(node.type)) {
    const w = node.width || 120,
      h = node.height || 120
    return (
      <div
        className={cn(
          'absolute top-0 left-0 pointer-events-auto flex items-center justify-center z-10 group text-[#3D2B1F]',
          selected && 'shadow-md',
          !(currentlyDragging || isResizing) &&
            'transition-transform duration-150',
          currentlyDragging || isResizing
            ? 'opacity-95 z-50 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] cursor-grabbing'
            : isPanMode
              ? 'cursor-grab'
              : isSelectMode
                ? 'cursor-pointer'
                : '',
        )}
        style={{
          transform: `translate3d(${node.x}px, ${node.y}px, 0) scale(${currentlyDragging || isResizing ? 1.02 : 1})`,
          width: w,
          height: h,
          transformOrigin: 'center center',
        }}
        onPointerDown={handlePointerDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-node-id={node.id}
      >
        <svg
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
          viewBox={`0 0 ${w} ${h}`}
        >
          {node.type === 'Square' && (
            <rect
              x="0"
              y="0"
              width={w}
              height={h}
              rx={8}
              fill={node.style?.fill || 'transparent'}
              fillOpacity={node.style?.opacity ?? 1}
              stroke={node.style?.stroke || '#3D2B1F'}
              strokeWidth={node.style?.strokeWidth ?? 2}
              strokeDasharray={
                node.style?.strokeDasharray === 'none'
                  ? undefined
                  : node.style?.strokeDasharray
              }
              className={cn(
                'pointer-events-auto',
                selected && 'stroke-[#C2714F] drop-shadow-md',
              )}
              style={{ transition: isResizing ? 'none' : 'all 0.15s' }}
            />
          )}
          {node.type === 'Circle' && (
            <ellipse
              cx={w / 2}
              cy={h / 2}
              rx={w / 2}
              ry={h / 2}
              fill={node.style?.fill || 'transparent'}
              fillOpacity={node.style?.opacity ?? 1}
              stroke={node.style?.stroke || '#3D2B1F'}
              strokeWidth={node.style?.strokeWidth ?? 2}
              strokeDasharray={
                node.style?.strokeDasharray === 'none'
                  ? undefined
                  : node.style?.strokeDasharray
              }
              className={cn(
                'pointer-events-auto',
                selected && 'stroke-[#C2714F] drop-shadow-md',
              )}
              style={{ transition: isResizing ? 'none' : 'all 0.15s' }}
            />
          )}
          {node.type === 'Diamond' && (
            <polygon
              points={`${w / 2},0 ${w},${h / 2} ${w / 2},${h} 0,${h / 2}`}
              fill={node.style?.fill || 'transparent'}
              fillOpacity={node.style?.opacity ?? 1}
              stroke={node.style?.stroke || '#3D2B1F'}
              strokeWidth={node.style?.strokeWidth ?? 2}
              strokeDasharray={
                node.style?.strokeDasharray === 'none'
                  ? undefined
                  : node.style?.strokeDasharray
              }
              strokeLinejoin="round"
              className={cn(
                'pointer-events-auto',
                selected && 'stroke-[#C2714F] drop-shadow-md',
              )}
              style={{ transition: isResizing ? 'none' : 'all 0.15s' }}
            />
          )}
        </svg>
        {selected && !isPanMode && isSelectMode && (
          <>
            <div className="absolute top-0 left-0 w-full h-full border border-[#C2714F]/50 pointer-events-none" />
            {['nw', 'ne', 'sw', 'se', 'n', 's', 'e', 'w'].map((corner) => (
              <div
                key={corner}
                className={`resize-handle ${corner}-resize absolute w-3 h-3 bg-white border border-[#C2714F] rounded-sm z-30`}
                style={{
                  top: corner.includes('n')
                    ? '-6px'
                    : corner.includes('s')
                      ? 'auto'
                      : '50%',
                  bottom: corner.includes('s') ? '-6px' : 'auto',
                  left: corner.includes('w')
                    ? '-6px'
                    : corner.includes('e')
                      ? 'auto'
                      : '50%',
                  right: corner.includes('e') ? '-6px' : 'auto',
                  transform:
                    corner.length === 1 ? 'translate(-50%, -50%)' : 'none',
                  cursor: `${corner}-resize`,
                }}
                onPointerDown={(e) => handleResizeStart(e, corner)}
              />
            ))}
          </>
        )}
      </div>
    )
  }

  if (node.type === 'Text') {
    return (
      <div
        className={cn(
          'absolute top-0 left-0 pointer-events-auto min-w-[150px] max-w-[400px] p-4 bg-[#FAF7F2] rounded-xl shadow-sm border border-[#E8E2D9] text-[#3D2B1F] z-10 group',
          selected && 'ring-2 ring-[#C2714F]/60 shadow-md',
          !currentlyDragging && 'transition-transform duration-150',
          currentlyDragging
            ? 'opacity-95 z-50 cursor-grabbing shadow-xl ring-2 ring-[#C2714F]/50'
            : isPanMode
              ? 'cursor-grab'
              : isSelectMode
                ? isEditingText
                  ? 'cursor-text'
                  : 'cursor-pointer'
                : '',
        )}
        style={{
          transform: `translate3d(${node.x}px, ${node.y}px, 0) scale(${currentlyDragging ? 1.02 : 1})`,
          transformOrigin: 'center center',
        }}
        onPointerDown={(e) => {
          if (isEditingText) {
            e.stopPropagation()
            return
          }
          handlePointerDown(e)
        }}
        onDoubleClick={(e) => {
          if (!isPanMode && isSelectMode) {
            e.stopPropagation()
            setIsEditingText(true)
            setTimeout(() => textRef.current?.focus(), 0)
          }
        }}
      >
        <div
          ref={textRef}
          className="font-bold text-[15px] whitespace-pre-wrap outline-none cursor-text"
          contentEditable={isEditingText}
          suppressContentEditableWarning
          onPointerDown={(e) => {
            if (isEditingText) e.stopPropagation()
          }}
          onBlur={(e) => {
            setIsEditingText(false)
            onTextChange(e.currentTarget.textContent || 'Text')
          }}
        >
          {node.data.name}
        </div>
      </div>
    )
  }

  if (node.type === 'Image') {
    return (
      <div
        className={cn(
          'absolute top-0 left-0 pointer-events-auto w-[300px] rounded-2xl shadow-sm border border-[#E8E2D9] bg-white z-10 overflow-hidden group',
          selected && 'ring-4 ring-[#C2714F]/40 border-[#C2714F] shadow-md',
          !currentlyDragging && 'transition-transform duration-150',
          currentlyDragging
            ? 'opacity-95 z-50 cursor-grabbing shadow-xl ring-4 ring-[#C2714F]/50'
            : isPanMode
              ? 'cursor-grab'
              : isSelectMode
                ? 'cursor-pointer'
                : '',
        )}
        style={{
          transform: `translate3d(${node.x}px, ${node.y}px, 0) scale(${currentlyDragging ? 1.02 : 1})`,
          transformOrigin: 'center center',
        }}
        onPointerDown={handlePointerDown}
        onDoubleClick={(e) => {
          if (!isPanMode && isSelectMode) {
            e.stopPropagation()
            onOpenRightPanel('assets')
          }
        }}
      >
        <img
          src={node.data.name}
          alt="Canvas"
          className="w-full h-auto object-cover pointer-events-none select-none"
        />
      </div>
    )
  }

  const isTraffic = ['Ad', 'Traffic', 'Goal', 'Email'].includes(node.type)
  const isFeatured = ['VSL', 'Webinar'].includes(node.type)
  const isStandard = !isTraffic && !isFeatured
  const customColor = node.data.color
  const Icon = icons[node.type] || icons.Default

  return (
    <div
      className={cn(
        'absolute top-0 left-0 pointer-events-auto w-[280px] rounded-[1.25rem] p-5 z-10 flex flex-col gap-3 group select-none duration-200',
        !currentlyDragging
          ? 'transition-[box-shadow,background-color,border-color,opacity,transform]'
          : 'transition-[box-shadow,background-color,border-color,opacity]',
        !customColor &&
          isTraffic &&
          'bg-[#3D2B1F] border border-[#3D2B1F] shadow-lg',
        !customColor &&
          isFeatured &&
          'bg-white border-2 border-[#C2714F] shadow-2xl',
        !customColor &&
          isStandard &&
          'bg-white border border-[#E8E2D9] shadow-sm',
        customColor && 'bg-white border shadow-md',
        isHovered && !selected && !isFeatured && !customColor && 'shadow-md',
        selected && 'ring-4 ring-[#C2714F]/20 border-[#C2714F] shadow-xl',
        currentlyDragging && 'opacity-95 z-50 shadow-2xl',
        node.data.isCompleted && 'opacity-70 grayscale-[30%]',
      )}
      style={{
        transform: `translate3d(${node.x}px, ${node.y}px, 0) scale(${currentlyDragging ? 1.03 : 1})`,
        cursor: isPanMode
          ? 'grab'
          : currentlyDragging
            ? 'grabbing'
            : isSelectMode
              ? 'pointer'
              : '',
        transformOrigin: 'center center',
        borderColor: customColor && !selected ? customColor : undefined,
        borderWidth: customColor && !selected ? '2px' : undefined,
      }}
      onPointerDown={handlePointerDown}
      onDoubleClick={(e) => {
        if (!isPanMode && isSelectMode) {
          e.stopPropagation()
          onOpenRightPanel('details')
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDragOver={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
      onDrop={handleDrop}
      data-node-id={node.id}
    >
      <div className="absolute -top-3.5 right-4 flex items-center gap-1.5 z-20">
        <div
          className={cn(
            'flex items-center gap-1.5 transition-opacity',
            selected || isHovered
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none',
          )}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onOpenSettings()
                }}
                className="interactive-icon w-7 h-7 bg-white border border-[#E8E2D9] rounded-full flex items-center justify-center text-[#8C7B6C] hover:text-[#3D2B1F] shadow-sm transition-transform hover:scale-110"
              >
                <Settings size={13} strokeWidth={2.5} />
              </button>
            </TooltipTrigger>
            <TooltipContent>Configurações</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onDelete()
                }}
                className="interactive-icon w-7 h-7 bg-white border border-[#E8E2D9] rounded-full flex items-center justify-center text-red-500 hover:text-red-700 shadow-sm transition-transform hover:scale-110"
              >
                <Trash2 size={13} strokeWidth={2.5} />
              </button>
            </TooltipTrigger>
            <TooltipContent>Excluir</TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div
          className={cn(
            'w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm',
            !customColor &&
              (isTraffic
                ? 'bg-[#C2714F] text-white'
                : 'bg-[#FAF7F2] text-[#C2714F] border border-[#E8E2D9]'),
          )}
          style={
            customColor
              ? { backgroundColor: customColor, color: '#fff' }
              : undefined
          }
        >
          <Icon size={20} strokeWidth={2} />
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <h4
            className={cn(
              'font-bold text-[15px] truncate leading-tight transition-all',
              isTraffic && !customColor ? 'text-white' : 'text-[#3D2B1F]',
              node.data.isCompleted && 'line-through opacity-70',
            )}
          >
            {node.data.name}
          </h4>
          <span
            className={cn(
              'text-[12px] mt-0.5 truncate font-medium',
              isTraffic && !customColor ? 'text-white/70' : 'text-[#8C7B6C]',
            )}
          >
            {node.data.subtitle || node.type}
          </span>
        </div>
      </div>

      {isFeatured && (
        <div className="mt-2 flex flex-col gap-1.5 pt-3 border-t border-[#E8E2D9]">
          <div className="flex justify-between items-center text-[11px] font-bold">
            <span className="text-[#8C7B6C] uppercase tracking-wider">
              Retenção
            </span>
            <span className="text-[#C2714F]">
              {node.data.retention || '42%'}
            </span>
          </div>
          <div className="h-2 w-full bg-[#FAF7F2] rounded-full overflow-hidden border border-[#E8E2D9]/50">
            <div
              className="h-full bg-gradient-to-r from-[#C2714F] to-[#d68563] rounded-full"
              style={{ width: node.data.retention || '42%' }}
            />
          </div>
        </div>
      )}

      {node.data.isTaskMode && (
        <div className="mt-2 flex flex-col gap-1.5">
          {linkedTasks.length > 0 && (
            <div
              className={cn(
                'h-px w-full my-1 rounded-full',
                isTraffic && !customColor ? 'bg-white/10' : 'bg-[#E8E2D9]',
              )}
            />
          )}
          {linkedTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-start gap-2 group/task relative pr-4"
            >
              <Checkbox
                checked={task.status === 'Concluído'}
                onCheckedChange={() => handleToggleTask(task)}
                className={cn(
                  'mt-0.5 w-3.5 h-3.5 rounded-[4px] border',
                  isTraffic && !customColor
                    ? 'border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-[#3D2B1F]'
                    : 'border-[#E8E2D9] data-[state=checked]:bg-[#C2714F] data-[state=checked]:border-[#C2714F]',
                )}
              />
              <span
                className={cn(
                  'text-[12px] leading-tight font-bold flex-1 transition-all break-words',
                  task.status === 'Concluído'
                    ? isTraffic && !customColor
                      ? 'text-white/40 line-through'
                      : 'text-[#8C7B6C] line-through'
                    : isTraffic && !customColor
                      ? 'text-white'
                      : 'text-[#3D2B1F]',
                )}
              >
                {task.title}
              </span>
            </div>
          ))}
          {isAddingTask ? (
            <div className="flex items-center gap-1.5 mt-1">
              <input
                autoFocus
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    handleAddTask()
                  }
                  if (e.key === 'Escape') {
                    setIsAddingTask(false)
                    setNewTaskTitle('')
                  }
                }}
                onBlur={() =>
                  newTaskTitle.trim() ? handleAddTask() : setIsAddingTask(false)
                }
                placeholder="Nome da tarefa..."
                className={cn(
                  'flex-1 text-[12px] border rounded px-2 py-1 outline-none transition-all w-full font-bold',
                  isTraffic && !customColor
                    ? 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white/50'
                    : 'bg-[#FAF7F2] border-[#E8E2D9] text-[#3D2B1F] placeholder:text-[#8C7B6C] focus:border-[#C2714F]',
                )}
              />
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsAddingTask(true)
              }}
              className={cn(
                'flex items-center gap-1.5 mt-1 text-[12px] font-bold transition-colors w-full text-left py-0.5 rounded-sm interactive-icon',
                isTraffic && !customColor
                  ? 'text-white/50 hover:text-white'
                  : 'text-[#8C7B6C] hover:text-[#C2714F]',
              )}
            >
              <Plus size={12} strokeWidth={2.5} /> Adicionar tarefa
            </button>
          )}
        </div>
      )}

      {!isPanMode && isSelectMode && (
        <div
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center cursor-crosshair z-20 group/port interactive-icon opacity-0 group-hover:opacity-100 transition-opacity"
          onPointerDown={(e) => {
            e.stopPropagation()
            onEdgeDragStart(node.id, e)
          }}
        >
          <div className="w-3 h-3 rounded-full bg-white border-2 border-[#E8E2D9] group-hover/port:border-[#C2714F] group-hover/port:bg-[#C2714F] group-hover/port:scale-125 transition-all shadow-sm" />
        </div>
      )}

      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation()
            onAddChild()
          }}
          className="interactive-icon w-8 h-8 bg-white border border-[#E8E2D9] rounded-full shadow-sm flex items-center justify-center text-[#8C7B6C] hover:text-[#C2714F] hover:border-[#C2714F] transition-all"
        >
          <Plus size={14} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  )
}
