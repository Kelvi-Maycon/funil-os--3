import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Funnel, Node, Edge, NodeData, Resource } from '@/types'
import { generateId } from '@/lib/generateId'
import BlockPalette from './BlockPalette'
import NodeItem from './NodeItem'
import RightPanel from './RightPanel'
import { NodeSettingsModal } from './NodeSettingsModal'
import { useCanvasHistory } from '@/hooks/useCanvasHistory'
import { useCanvasTransform } from '@/hooks/useCanvasTransform'
import { useCanvasSelection } from '@/hooks/useCanvasSelection'
import { ConfirmDialog } from '@/components/ConfirmDialog'
import {
  Plus,
  Minus,
  Map,
  Grid,
  Image as ImageIcon,
  MousePointer2,
  Hand,
  Type,
  ArrowLeft,
  MessageCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import useTaskStore from '@/stores/useTaskStore'
import useDocumentStore from '@/stores/useDocumentStore'
import useResourceStore from '@/stores/useResourceStore'
import { useToast } from '@/hooks/use-toast'
import { format } from 'date-fns'

const getRightPortCoords = (node: Node, x: number, y: number) => {
  const w = node.width || 120
  const h = node.height || 120
  if (['Square', 'Diamond', 'Circle'].includes(node.type))
    return { x: x + w, y: y + h / 2 }
  if (node.type === 'FloatingText') {
    const textLen = (node.data.name || '').length
    const approxW = Math.max(40, textLen * 8.5 + 16)
    return { x: x + approxW, y: y + 20 }
  }
  if (node.type === 'Image') return { x: x + 300, y: y + 100 }
  if (node.type === 'Text') return { x: x + 150, y: y + 30 }
  return { x: x + 280, y: y + 44 }
}

const getLeftPortCoords = (node: Node, x: number, y: number) => {
  const h = node.height || 120
  if (['Square', 'Diamond', 'Circle'].includes(node.type))
    return { x, y: y + h / 2 }
  if (node.type === 'FloatingText') return { x, y: y + 20 }
  if (node.type === 'Image') return { x, y: y + 100 }
  if (node.type === 'Text') return { x, y: y + 30 }
  return { x, y: y + 44 }
}

const getApproxBounds = (n: Node) => {
  let w = n.width || 280
  let h = n.height || 120
  if (n.type === 'FloatingText') {
    w = 150
    h = 40
  } else if (n.type === 'Text') {
    w = 200
    h = 80
  } else if (n.type === 'Image') {
    w = 300
    h = 200
  } else if (['Square', 'Diamond', 'Circle'].includes(n.type)) {
    w = n.width || 120
    h = n.height || 120
  }
  return { x: n.x, y: n.y, w, h }
}

export default function CanvasBoard({
  funnel,
  onChange,
  hideHeader,
  onBack,
}: {
  funnel: Funnel
  onChange: (f: Funnel) => void
  hideHeader?: boolean
  onBack?: () => void
}) {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [tasks, setTasks] = useTaskStore()
  const [docs, setDocs] = useDocumentStore()
  const [resources, setResources] = useResourceStore()
  const { toast } = useToast()
  const { pushState, undo, redo } = useCanvasHistory(funnel)
  const [nodeToDelete, setNodeToDelete] = useState<string | 'selected' | null>(
    null,
  )

  const onChangeWithHistory = useCallback(
    (newFunnel: Funnel) => {
      pushState(funnel)
      onChange(newFunnel)
    },
    [funnel, onChange, pushState],
  )

  const {
    selectedNodes,
    setSelectedNodes,
    selectedEdge,
    setSelectedEdge,
    selectionBox,
    setSelectionBox,
  } = useCanvasSelection()

  const {
    transform,
    setTransform,
    isPanning,
    setIsPanning,
    lastPan,
    zoomIn,
    zoomOut,
    resetZoom,
  } = useCanvasTransform(1, hideHeader)

  const [rightPanelState, setRightPanelState] = useState<{
    nodeId: string
    tab: string
  } | null>(null)
  const [isSpacePressed, setIsSpacePressed] = useState(false)
  const [activeTool, setActiveTool] = useState<
    'Select' | 'Pan' | 'Square' | 'Diamond' | 'Circle'
  >('Select')
  const [showMinimap, setShowMinimap] = useState(false)
  const [snapToGrid, setSnapToGrid] = useState(false)

  const [dragState, setDragState] = useState<{
    isDragging: boolean
    dx: number
    dy: number
  } | null>(null)
  const [resizingNode, setResizingNode] = useState<{
    id: string
    x: number
    y: number
    width?: number
    height?: number
  } | null>(null)
  const [drawingEdge, setDrawingEdge] = useState<{
    source: string
    currentX: number
    currentY: number
  } | null>(null)
  const [creatingShape, setCreatingShape] = useState<{
    type: string
    startX: number
    startY: number
    currentX: number
    currentY: number
  } | null>(null)

  const [settingsNodeId, setSettingsNodeId] = useState<string | null>(null)
  const boardRef = useRef<HTMLDivElement>(null)

  const targetNodeId = searchParams.get('nodeId')
  useEffect(() => {
    if (targetNodeId && funnel.nodes.length > 0) {
      const node = funnel.nodes.find((n) => n.id === targetNodeId)
      if (node && boardRef.current) {
        const rect = boardRef.current.getBoundingClientRect()
        setTransform({
          x: rect.width / 2 - node.x * 1.5 - 195,
          y: rect.height / 2 - node.y * 1.5 - 60,
          scale: 1.5,
        })
        setSelectedNodes([node.id])
        setRightPanelState({ nodeId: node.id, tab: 'details' })
        searchParams.delete('nodeId')
        setSearchParams(searchParams, { replace: true })
      }
    }
  }, [
    targetNodeId,
    funnel.nodes,
    searchParams,
    setSearchParams,
    setSelectedNodes,
    setTransform,
  ])

  const handleGroupSelected = useCallback(() => {
    if (selectedNodes.length < 2) return
    const groupId = generateId('g')
    onChangeWithHistory({
      ...funnel,
      nodes: funnel.nodes.map((n) =>
        selectedNodes.includes(n.id) ? { ...n, groupId } : n,
      ),
    })
    toast({ title: 'Elementos agrupados.' })
  }, [funnel, selectedNodes, onChangeWithHistory, toast])

  const handleDeleteSelected = useCallback(() => {
    if (selectedNodes.length === 0) return
    onChangeWithHistory({
      ...funnel,
      nodes: funnel.nodes.filter((n) => !selectedNodes.includes(n.id)),
      edges: funnel.edges.filter(
        (e) =>
          !selectedNodes.includes(e.source) &&
          !selectedNodes.includes(e.target),
      ),
    })
    setSelectedNodes([])
    if (rightPanelState && selectedNodes.includes(rightPanelState.nodeId))
      setRightPanelState(null)
    if (settingsNodeId && selectedNodes.includes(settingsNodeId))
      setSettingsNodeId(null)
  }, [
    funnel,
    selectedNodes,
    onChangeWithHistory,
    rightPanelState,
    settingsNodeId,
    setSelectedNodes,
  ])

  const handleConfirmDelete = useCallback(() => {
    if (nodeToDelete === 'selected') {
      handleDeleteSelected()
    } else if (nodeToDelete && nodeToDelete !== 'selected') {
      onChangeWithHistory({
        ...funnel,
        nodes: funnel.nodes.filter((x) => x.id !== nodeToDelete),
        edges: funnel.edges.filter(
          (e) => e.source !== nodeToDelete && e.target !== nodeToDelete,
        ),
      })
      if (rightPanelState?.nodeId === nodeToDelete) setRightPanelState(null)
      if (settingsNodeId === nodeToDelete) setSettingsNodeId(null)
    }
    setNodeToDelete(null)
  }, [
    nodeToDelete,
    handleDeleteSelected,
    funnel,
    onChangeWithHistory,
    rightPanelState,
    settingsNodeId,
  ])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement).isContentEditable
      )
        return
      if (e.code === 'Space') {
        e.preventDefault()
        setIsSpacePressed(true)
        return
      }
      switch (e.key.toLowerCase()) {
        case '1':
        case 'v':
          setActiveTool('Select')
          break
        case '2':
          setActiveTool('Square')
          break
        case '3':
          setActiveTool('Diamond')
          break
        case '4':
          setActiveTool('Circle')
          break
        case 'h':
          setActiveTool('Pan')
          break
        case 'delete':
        case 'backspace':
          if (selectedNodes.length > 0) setNodeToDelete('selected')
          break
        case 'g':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault()
            handleGroupSelected()
          }
          break
        case 'z':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault()
            if (e.shiftKey) {
              redo(funnel, onChange)
            } else {
              undo(funnel, onChange)
            }
          }
          break
      }
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        setIsSpacePressed(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [
    handleDeleteSelected,
    handleGroupSelected,
    selectedNodes.length,
    undo,
    redo,
    funnel,
    onChange,
  ])

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items
      if (!items) return
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const newAsset: Resource = {
            id: generateId('a'),
            projectId: funnel.projectId,
            title: 'Pasted Image ' + format(new Date(), 'HH:mm:ss'),
            content:
              'https://img.usecurling.com/p/800/600?q=wireframe&color=gray',
            type: 'image',
            tags: ['pasted', 'canvas'],
            folderId: null,
            isPinned: false,
            createdAt: new Date().toISOString(),
          }
          setResources((prev) => [newAsset, ...prev])

          const newNode: Node = {
            id: generateId('n'),
            type: 'Image',
            x: -transform.x / transform.scale + 400,
            y: -transform.y / transform.scale + 200,
            data: {
              name: newAsset.content,
              status: '',
              subtitle: '',
              linkedAssetIds: [newAsset.id],
            },
          }
          onChangeWithHistory({ ...funnel, nodes: [...funnel.nodes, newNode] })
          setSelectedNodes([newNode.id])
          toast({ title: 'Imagem colada no canvas!' })
        }
      }
    }
    window.addEventListener('paste', handlePaste)
    return () => window.removeEventListener('paste', handlePaste)
  }, [
    funnel,
    setResources,
    transform,
    onChangeWithHistory,
    setSelectedNodes,
    toast,
  ])

  useEffect(() => {
    const el = boardRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (e.ctrlKey || e.metaKey) {
        setTransform((prev) => {
          let newScale = prev.scale * Math.exp(e.deltaY * -0.005)
          newScale = Math.min(Math.max(0.1, newScale), 3)
          const rect = el.getBoundingClientRect()
          const mouseX = e.clientX - rect.left,
            mouseY = e.clientY - rect.top
          return {
            x: mouseX - (mouseX - prev.x) * (newScale / prev.scale),
            y: mouseY - (mouseY - prev.y) * (newScale / prev.scale),
            scale: newScale,
          }
        })
      } else {
        setTransform((prev) => ({
          ...prev,
          x: prev.x - e.deltaX,
          y: prev.y - e.deltaY,
        }))
      }
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [setTransform])

  const handlePointerDown = (e: React.PointerEvent) => {
    const isCanvasBg =
      e.target === boardRef.current ||
      (e.target as HTMLElement).classList.contains('canvas-container') ||
      (e.target as HTMLElement).tagName === 'svg'
    const rect = boardRef.current?.getBoundingClientRect()
    if (!rect) return

    const isMiddleClick = e.button === 1
    const isSpaceRightClick = isSpacePressed && e.button === 2

    if (activeTool === 'Pan' || isMiddleClick || isSpaceRightClick) {
      setIsPanning(true)
      lastPan.current = { x: e.clientX, y: e.clientY }
      ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
      document.body.style.userSelect = 'none'
      return
    }

    if (isCanvasBg && e.button === 0) {
      if (['Square', 'Diamond', 'Circle'].includes(activeTool)) {
        let x = (e.clientX - rect.left - transform.x) / transform.scale
        let y = (e.clientY - rect.top - transform.y) / transform.scale
        if (snapToGrid) {
          x = Math.round(x / 28) * 28
          y = Math.round(y / 28) * 28
        }
        setCreatingShape({
          type: activeTool,
          startX: x,
          startY: y,
          currentX: x,
          currentY: y,
        })
        ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
        e.stopPropagation()
        return
      }

      if (activeTool === 'Select') {
        setSelectedNodes([])
        setSelectedEdge(null)
        let x = (e.clientX - rect.left - transform.x) / transform.scale
        let y = (e.clientY - rect.top - transform.y) / transform.scale
        setSelectionBox({ startX: x, startY: y, currentX: x, currentY: y })
        ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
      }
    }
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    const rect = boardRef.current?.getBoundingClientRect()
    if (!rect) return

    if (creatingShape) {
      let x = (e.clientX - rect.left - transform.x) / transform.scale
      let y = (e.clientY - rect.top - transform.y) / transform.scale
      if (snapToGrid) {
        x = Math.round(x / 28) * 28
        y = Math.round(y / 28) * 28
      }
      setCreatingShape((prev) =>
        prev ? { ...prev, currentX: x, currentY: y } : null,
      )
      return
    }

    if (selectionBox) {
      let x = (e.clientX - rect.left - transform.x) / transform.scale
      let y = (e.clientY - rect.top - transform.y) / transform.scale
      setSelectionBox((prev) =>
        prev ? { ...prev, currentX: x, currentY: y } : null,
      )

      const minX = Math.min(selectionBox.startX, x)
      const maxX = Math.max(selectionBox.startX, x)
      const minY = Math.min(selectionBox.startY, y)
      const maxY = Math.max(selectionBox.startY, y)

      const newSelected = funnel.nodes
        .filter((n) => {
          const bounds = getApproxBounds(n)
          return (
            bounds.x < maxX &&
            bounds.x + bounds.w > minX &&
            bounds.y < maxY &&
            bounds.y + bounds.h > minY
          )
        })
        .map((n) => n.id)
      setSelectedNodes(newSelected)
      return
    }

    if (isPanning) {
      setTransform((prev) => ({
        ...prev,
        x: prev.x + (e.clientX - lastPan.current.x),
        y: prev.y + (e.clientY - lastPan.current.y),
      }))
      lastPan.current = { x: e.clientX, y: e.clientY }
    }
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    if (creatingShape) {
      const width = Math.abs(creatingShape.currentX - creatingShape.startX)
      const height = Math.abs(creatingShape.currentY - creatingShape.startY)
      const x = Math.min(creatingShape.startX, creatingShape.currentX)
      const y = Math.min(creatingShape.startY, creatingShape.currentY)

      if (width > 10 && height > 10) {
        const newNodeId = generateId('n')
        onChangeWithHistory({
          ...funnel,
          nodes: [
            ...funnel.nodes,
            {
              id: newNodeId,
              type: creatingShape.type,
              x,
              y,
              width,
              height,
              data: { name: '', status: '', subtitle: '' },
              style: {
                fill: 'transparent',
                opacity: 1,
                stroke: '#1e293b',
                strokeWidth: 2,
                strokeDasharray: 'none',
              },
            },
          ],
        })
        setSelectedNodes([newNodeId])
      }
      setCreatingShape(null)
      setActiveTool('Select')
      try {
        ;(e.target as HTMLElement).releasePointerCapture(e.pointerId)
      } catch (err) {
        /* ignore */
      }
      return
    }

    if (selectionBox) {
      setSelectionBox(null)
      try {
        ;(e.target as HTMLElement).releasePointerCapture(e.pointerId)
      } catch (err) {
        /* ignore */
      }
      return
    }

    if (isPanning) {
      setIsPanning(false)
      try {
        ;(e.target as HTMLElement).releasePointerCapture(e.pointerId)
      } catch (err) {
        /* ignore */
      }
      document.body.style.userSelect = ''
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const type = e.dataTransfer.getData('blockType')
    if (!type) return
    const rect = boardRef.current?.getBoundingClientRect()
    if (!rect) return
    let x = (e.clientX - rect.left - transform.x) / transform.scale - 130
    let y = (e.clientY - rect.top - transform.y) / transform.scale - 40
    if (snapToGrid) {
      x = Math.round(x / 28) * 28
      y = Math.round(y / 28) * 28
    }
    const newNodeId = generateId('n')
    onChangeWithHistory({
      ...funnel,
      nodes: [
        ...funnel.nodes,
        {
          id: newNodeId,
          type,
          x,
          y,
          data: { name: type, status: 'A Fazer', subtitle: '+1 filter' },
        },
      ],
    })
    setSelectedNodes([newNodeId])
  }

  const handleEdgeDragStart = (nodeId: string, e: React.PointerEvent) => {
    if (e.button !== 0) return
    const rect = boardRef.current?.getBoundingClientRect()
    if (!rect) return
    const getCoords = (cx: number, cy: number) => ({
      x: (cx - rect.left - transform.x) / transform.scale,
      y: (cy - rect.top - transform.y) / transform.scale,
    })
    const coords = getCoords(e.clientX, e.clientY)
    setDrawingEdge({ source: nodeId, currentX: coords.x, currentY: coords.y })

    const onMove = (ev: PointerEvent) => {
      const coords = getCoords(ev.clientX, ev.clientY)
      setDrawingEdge((prev) =>
        prev ? { ...prev, currentX: coords.x, currentY: coords.y } : null,
      )
    }
    const onUp = (ev: PointerEvent) => {
      const targetNodeEl = document
        .elementFromPoint(ev.clientX, ev.clientY)
        ?.closest('[data-node-id]')
      if (targetNodeEl) {
        const targetId = targetNodeEl.getAttribute('data-node-id')
        if (
          targetId &&
          targetId !== nodeId &&
          !funnel.edges.some(
            (edge) => edge.source === nodeId && edge.target === targetId,
          )
        ) {
          onChangeWithHistory({
            ...funnel,
            edges: [
              ...funnel.edges,
              { id: generateId('e'), source: nodeId, target: targetId },
            ],
          })
        }
      }
      setDrawingEdge(null)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)
  }

  const handleAddChild = (parentId: string) => {
    const parent = funnel.nodes.find((n) => n.id === parentId)
    if (!parent) return
    const newId = generateId('n')
    let newX = parent.x + 350,
      newY = parent.y
    if (snapToGrid) {
      newX = Math.round(newX / 28) * 28
      newY = Math.round(newY / 28) * 28
    }
    onChangeWithHistory({
      ...funnel,
      nodes: [
        ...funnel.nodes,
        {
          id: newId,
          type: 'Default',
          x: newX,
          y: newY,
          data: { name: 'New Step', status: 'A Fazer', subtitle: '+1 filter' },
        },
      ],
      edges: [
        ...funnel.edges,
        { id: generateId('e'), source: parentId, target: newId },
      ],
    })
  }

  const handleAddAnnotation = (type: 'Text' | 'Image', name: string) => {
    const newNodeId = generateId('n')
    onChangeWithHistory({
      ...funnel,
      nodes: [
        ...funnel.nodes,
        {
          id: newNodeId,
          type,
          x: -transform.x / transform.scale + 400,
          y: -transform.y / transform.scale + 200,
          data: { name, status: '', subtitle: '' },
          style: type === 'Text' ? { color: '#3D2B1F' } : undefined,
        },
      ],
    })
    setSelectedNodes([newNodeId])
  }

  const handleDropResource = (nodeId: string, type: string, id: string) => {
    const updatedNodes = funnel.nodes.map((n) => {
      if (n.id === nodeId) {
        const key =
          type === 'document'
            ? 'linkedDocumentIds'
            : type === 'task'
              ? 'linkedTaskIds'
              : 'linkedAssetIds'
        const currentIds = (n.data[key as keyof NodeData] as string[]) || []
        if (!currentIds.includes(id))
          return { ...n, data: { ...n.data, [key]: [...currentIds, id] } }
      }
      return n
    })
    onChangeWithHistory({ ...funnel, nodes: updatedNodes })

    if (type === 'document')
      setDocs(
        docs.map((d) =>
          d.id === id ? { ...d, funnelId: funnel.id, nodeId } : d,
        ),
      )
    else if (type === 'task')
      setTasks(
        tasks.map((t) =>
          t.id === id ? { ...t, funnelId: funnel.id, nodeId } : t,
        ),
      )
    else if (type === 'asset')
      setResources(
        resources.map((a) =>
          a.id === id ? { ...a, projectId: funnel.projectId } : a,
        ),
      )
  }

  const updateEdgeStyle = (styleUpdates: Partial<Edge['style']>) => {
    if (selectedEdge) {
      onChangeWithHistory({
        ...funnel,
        edges: funnel.edges.map((e) =>
          e.id === selectedEdge
            ? { ...e, style: { ...e.style, ...styleUpdates } }
            : e,
        ),
      })
    }
  }

  const updateNodeStyle = (updates: Partial<Node['style']>) => {
    if (selectedNodes.length > 0) {
      onChangeWithHistory({
        ...funnel,
        nodes: funnel.nodes.map((n) =>
          selectedNodes.includes(n.id)
            ? { ...n, style: { ...n.style, ...updates } }
            : n,
        ),
      })
    }
  }

  const handleNodePointerDown = (id: string, shiftKey: boolean) => {
    const n = funnel.nodes.find((x) => x.id === id)
    if (!n) return
    const groupMembers = n.groupId
      ? funnel.nodes.filter((x) => x.groupId === n.groupId).map((x) => x.id)
      : [id]
    if (!selectedNodes.includes(id)) {
      if (shiftKey)
        setSelectedNodes([...new Set([...selectedNodes, ...groupMembers])])
      else setSelectedNodes(groupMembers)
      setSelectedEdge(null)
    } else if (shiftKey) {
      setSelectedNodes(selectedNodes.filter((x) => !groupMembers.includes(x)))
    }
  }

  const rightOffset = rightPanelState ? 'right-80' : 'right-6'
  const canvasTools = [
    { id: 'Select', icon: MousePointer2, label: 'Cursor (1)', key: '1' },
    { id: 'Pan', icon: Hand, label: 'Hand (H)', key: 'H' },
    { id: 'divider' },
    {
      id: 'Text',
      icon: Type,
      label: 'Text',
      action: () => handleAddAnnotation('Text', 'Add text here...'),
    },
    {
      id: 'Image',
      icon: ImageIcon,
      label: 'Image',
      action: () =>
        handleAddAnnotation(
          'Image',
          'https://img.usecurling.com/p/400/300?q=marketing',
        ),
    },
    { id: 'Chat', icon: MessageCircle, label: 'Comment' },
  ]

  const isMultiSelect = selectedNodes.length > 1
  const selectedNodeObj =
    selectedNodes.length > 0
      ? funnel.nodes.find((n) => n.id === selectedNodes[0])
      : undefined
  const selectedEdgeObj = funnel.edges.find((e) => e.id === selectedEdge)

  const getEffectiveNode = (n: Node | undefined) => {
    if (!n) return undefined
    if (resizingNode?.id === n.id) {
      return {
        ...n,
        x: resizingNode.x,
        y: resizingNode.y,
        width: resizingNode.width,
        height: resizingNode.height,
      }
    }
    if (selectedNodes.includes(n.id) && dragState) {
      return { ...n, x: n.x + dragState.dx, y: n.y + dragState.dy }
    }
    return n
  }

  return (
    <div className="flex-1 flex relative overflow-hidden bg-transparent">
      {!hideHeader && (
        <header className="absolute top-0 left-0 right-0 h-20 bg-white border-b border-[#E8E2D9] px-6 flex items-center justify-between z-40">
          <div className="flex items-center gap-4">
            {onBack && (
              <Button
                variant="ghost"
                size="icon"
                className="text-[#8C7B6C] hover:text-[#3D2B1F]"
                onClick={onBack}
              >
                <ArrowLeft size={18} />
              </Button>
            )}
            <h1 className="font-bold text-lg text-[#3D2B1F]">{funnel.name}</h1>
            <span className="bg-[#FAF7F2] text-[#C2714F] px-2.5 py-1 rounded-md text-xs font-bold border border-[#E8E2D9]">
              Publicado
            </span>
          </div>

          <div className="flex bg-[#FAF7F2] p-1 rounded-lg border border-[#E8E2D9]">
            <button className="px-4 py-1.5 rounded-md bg-white text-[#C2714F] text-sm font-bold shadow-sm">
              Editar
            </button>
            <button className="px-4 py-1.5 rounded-md text-[#8C7B6C] text-sm font-bold hover:text-[#3D2B1F] transition-colors">
              Analytics
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <img
                src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1"
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                alt="Team 1"
              />
              <img
                src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2"
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                alt="Team 2"
              />
            </div>
            <Button className="bg-[#3D2B1F] hover:bg-[#3D2B1F]/90 text-white rounded-full font-bold shadow-md">
              Exportar
            </Button>
          </div>
        </header>
      )}

      {/* Left Toolbar */}
      <div
        className={cn(
          'absolute left-6 flex flex-col items-center p-1.5 bg-white rounded-2xl shadow-sm border border-[#E8E2D9] z-30 gap-1.5',
          hideHeader ? 'top-6' : 'top-28',
        )}
      >
        {canvasTools.map((t) => {
          if (t.id === 'divider')
            return <div key={t.id} className="w-6 h-px bg-[#E8E2D9] my-1" />
          return (
            <Tooltip key={t.id}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    'w-10 h-10 rounded-xl transition-all relative',
                    activeTool === t.id &&
                      t.id !== 'Text' &&
                      t.id !== 'Image' &&
                      t.id !== 'Chat'
                      ? 'bg-[#C2714F]/10 text-[#C2714F] shadow-sm'
                      : 'text-[#8C7B6C] hover:text-[#3D2B1F] hover:bg-[#FAF7F2]',
                  )}
                  onClick={() =>
                    t.action ? t.action() : setActiveTool(t.id as any)
                  }
                >
                  <t.icon size={20} strokeWidth={2} />
                  {t.key && t.id !== 'Pan' && (
                    <span className="absolute bottom-1 right-1.5 text-[9px] font-bold opacity-60">
                      {t.key}
                    </span>
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">{t.label}</TooltipContent>
            </Tooltip>
          )
        })}
      </div>

      {/* Zoom and Minimap */}
      <div className="absolute left-6 bottom-6 flex flex-col items-center p-1.5 bg-white rounded-2xl shadow-sm border border-[#E8E2D9] z-30 gap-1.5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-xl text-[#8C7B6C] hover:text-[#3D2B1F] hover:bg-[#FAF7F2]"
              onClick={zoomIn}
            >
              <Plus size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">Zoom In</TooltipContent>
        </Tooltip>

        <button
          onClick={resetZoom}
          className="text-[11px] font-bold text-[#3D2B1F] h-8 min-w-[2.5rem] hover:text-[#C2714F] transition-colors text-center"
        >
          {Math.round(transform.scale * 100)}%
        </button>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-xl text-[#8C7B6C] hover:text-[#3D2B1F] hover:bg-[#FAF7F2]"
              onClick={zoomOut}
            >
              <Minus size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">Zoom Out</TooltipContent>
        </Tooltip>

        <div className="w-6 h-px bg-[#E8E2D9] my-1" />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                'w-10 h-10 rounded-xl text-[#8C7B6C] hover:text-[#3D2B1F] hover:bg-[#FAF7F2] transition-colors',
                showMinimap && 'bg-[#C2714F]/10 text-[#C2714F]',
              )}
              onClick={() => setShowMinimap(!showMinimap)}
            >
              <Map size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">Minimap</TooltipContent>
        </Tooltip>
      </div>

      {/* Live Insights Pill */}
      <div className="absolute left-28 bottom-6 bg-white border border-[#E8E2D9] rounded-full px-5 py-2.5 flex items-center gap-2.5 shadow-sm z-30 cursor-pointer hover:shadow-md transition-shadow">
        <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
        <span className="text-[13px] font-bold text-[#3D2B1F]">
          Live Insights Ativos
        </span>
      </div>

      <div
        className={cn(
          'absolute left-[88px] z-20 bottom-6 flex pointer-events-none transition-all',
          hideHeader ? 'top-6' : 'top-28',
        )}
      >
        <div className="pointer-events-auto flex h-full">
          <BlockPalette funnel={funnel} />
        </div>
      </div>

      {showMinimap && (
        <div className="absolute left-28 bottom-20 transition-all duration-300 w-56 h-36 bg-white border border-[#E8E2D9] shadow-lg rounded-2xl overflow-hidden z-30">
          <div
            className="w-full h-full relative bg-[#FAF7F2]"
            style={{ transform: 'scale(0.08)', transformOrigin: 'top left' }}
          >
            {funnel.nodes.map((n) => (
              <div
                key={n.id}
                className="absolute bg-[#8C7B6C] rounded-xl opacity-50"
                style={{
                  left: n.x,
                  top: n.y,
                  width:
                    n.width ||
                    (n.type === 'Text' || n.type === 'Image' ? 200 : 280),
                  height: n.height || 100,
                }}
              />
            ))}
            <div
              className="absolute border-[6px] border-[#C2714F] bg-[#C2714F]/10 rounded-xl"
              style={{
                left: -transform.x / transform.scale,
                top: -transform.y / transform.scale,
                width:
                  (boardRef.current?.clientWidth || 1000) / transform.scale,
                height:
                  (boardRef.current?.clientHeight || 800) / transform.scale,
              }}
            />
          </div>
        </div>
      )}

      {(selectedNodeObj || selectedEdgeObj) && (
        <div
          className={cn(
            'absolute top-24 bg-white rounded-3xl shadow-xl border border-[#E8E2D9] p-5 w-[280px] flex flex-col gap-6 z-40 transition-all max-h-[80vh] overflow-y-auto',
            rightPanelState ? 'right-80' : 'right-6',
          )}
        >
          <div className="flex justify-between items-center">
            <h4 className="text-[11px] font-bold text-[#8C7B6C] tracking-widest uppercase">
              {isMultiSelect
                ? 'MÚLTIPLOS SELECIONADOS'
                : selectedNodeObj
                  ? selectedNodeObj.type === 'FloatingText'
                    ? 'ESTILO DE TEXTO'
                    : ['Square', 'Diamond', 'Circle'].includes(
                          selectedNodeObj.type,
                        )
                      ? 'ESTILO DE FORMA'
                      : 'ESTILO DE NÓ'
                  : 'ESTILO DE LINHA'}
            </h4>
          </div>

          {selectedNodeObj &&
            ['Square', 'Diamond', 'Circle'].includes(selectedNodeObj.type) && (
              <>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-[#8C7B6C] uppercase tracking-wider block">
                    Cor de Preenchimento
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'transparent',
                      '#FAF7F2',
                      '#3D2B1F',
                      '#C2714F',
                      '#E8E2D9',
                      '#8C7B6C',
                      '#10b981',
                      '#f59e0b',
                      '#ef4444',
                      '#3b82f6',
                      '#a855f7',
                    ].map((c) => (
                      <button
                        key={c}
                        className={cn(
                          'w-7 h-7 rounded-lg border-2 transition-transform',
                          selectedNodeObj.style?.fill === c ||
                            (c === 'transparent' &&
                              !selectedNodeObj.style?.fill)
                            ? 'border-[#3D2B1F] scale-110'
                            : 'border-transparent hover:scale-110',
                        )}
                        style={{
                          backgroundColor: c === 'transparent' ? '#fff' : c,
                          backgroundImage:
                            c === 'transparent'
                              ? 'radial-gradient(#E8E2D9 1px, transparent 0)'
                              : 'none',
                          backgroundSize: '4px 4px',
                        }}
                        onClick={() => updateNodeStyle({ fill: c })}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}

          {selectedEdgeObj && (
            <>
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-[#8C7B6C] uppercase tracking-wider block">
                  Estilo da Linha
                </label>
                <div className="flex gap-2">
                  <button
                    className={cn(
                      'flex-1 h-9 rounded-lg border-2 flex items-center justify-center transition-colors',
                      selectedEdgeObj.style?.strokeDasharray === 'none' ||
                        !selectedEdgeObj.style?.strokeDasharray
                        ? 'border-[#C2714F] bg-[#C2714F]/10 text-[#C2714F]'
                        : 'border-[#E8E2D9] bg-white hover:bg-[#FAF7F2] text-[#8C7B6C]',
                    )}
                    onClick={() => updateEdgeStyle({ strokeDasharray: 'none' })}
                  >
                    <svg width="24" height="2" className="overflow-visible">
                      <line
                        x1="0"
                        y1="1"
                        x2="24"
                        y2="1"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </button>
                  <button
                    className={cn(
                      'flex-1 h-9 rounded-lg border-2 flex items-center justify-center transition-colors',
                      selectedEdgeObj.style?.strokeDasharray === '8 8'
                        ? 'border-[#C2714F] bg-[#C2714F]/10 text-[#C2714F]'
                        : 'border-[#E8E2D9] bg-white hover:bg-[#FAF7F2] text-[#8C7B6C]',
                    )}
                    onClick={() => updateEdgeStyle({ strokeDasharray: '8 8' })}
                  >
                    <svg width="24" height="2" className="overflow-visible">
                      <line
                        x1="0"
                        y1="1"
                        x2="24"
                        y2="1"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeDasharray="6 6"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-bold text-[#8C7B6C] uppercase tracking-wider block">
                  Espessura
                </label>
                <div className="flex gap-4 items-center">
                  <input
                    type="range"
                    min="1"
                    max="8"
                    step="1"
                    className="flex-1 accent-[#C2714F] h-1.5 bg-[#E8E2D9] rounded-full appearance-none cursor-pointer"
                    value={selectedEdgeObj.style?.strokeWidth || 2}
                    onChange={(e) =>
                      updateEdgeStyle({ strokeWidth: parseInt(e.target.value) })
                    }
                  />
                  <span className="text-[13px] font-bold text-[#3D2B1F] w-4 text-center">
                    {selectedEdgeObj.style?.strokeWidth || 2}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <div
        ref={boardRef}
        className={cn(
          'flex-1 relative canvas-container overflow-hidden canvas-grid',
          isPanning
            ? 'cursor-grabbing'
            : isSpacePressed || activeTool === 'Pan'
              ? 'cursor-grab'
              : activeTool !== 'Select'
                ? 'cursor-crosshair'
                : '',
        )}
        style={{
          backgroundPosition: `${transform.x}px ${transform.y}px`,
          backgroundSize: `${24 * transform.scale}px ${24 * transform.scale}px`,
        }}
        onContextMenu={(e) => e.preventDefault()}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onDoubleClick={(e) => {
          const target = e.target as HTMLElement
          const isBg =
            target === boardRef.current ||
            target.classList.contains('canvas-container') ||
            target.tagName === 'svg'

          if (isBg && activeTool === 'Select') {
            const rect = boardRef.current?.getBoundingClientRect()
            if (!rect) return
            let x = (e.clientX - rect.left - transform.x) / transform.scale - 50
            let y = (e.clientY - rect.top - transform.y) / transform.scale - 15
            if (snapToGrid) {
              x = Math.round(x / 28) * 28
              y = Math.round(y / 28) * 28
            }
            const newNodeId = generateId('n')
            onChangeWithHistory({
              ...funnel,
              nodes: [
                ...funnel.nodes,
                {
                  id: newNodeId,
                  type: 'FloatingText',
                  x,
                  y,
                  data: { name: 'New Text', status: '', subtitle: '' },
                  style: { color: '#3D2B1F' },
                },
              ],
            })
            setSelectedNodes([newNodeId])
          }
        }}
      >
        <div
          style={{
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(${transform.scale})`,
            transformOrigin: '0 0',
          }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <svg className="absolute inset-0 w-full h-full overflow-visible z-0 pointer-events-none">
            <defs>
              <linearGradient
                id="edge-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#C2714F" />
                <stop offset="100%" stopColor="#8C7B6C" />
              </linearGradient>
            </defs>
            {funnel.edges.map((e) => {
              const sourceNode = getEffectiveNode(
                funnel.nodes.find((n) => n.id === e.source),
              )
              const targetNode = getEffectiveNode(
                funnel.nodes.find((n) => n.id === e.target),
              )
              if (!sourceNode || !targetNode) return null
              const isSelected = selectedEdge === e.id

              const sourceCoords = getRightPortCoords(
                sourceNode,
                sourceNode.x,
                sourceNode.y,
              )
              const targetCoords = getLeftPortCoords(
                targetNode,
                targetNode.x,
                targetNode.y,
              )

              const d = `M ${sourceCoords.x} ${sourceCoords.y} C ${sourceCoords.x + 80} ${sourceCoords.y}, ${targetCoords.x - 80} ${targetCoords.y}, ${targetCoords.x} ${targetCoords.y}`

              const strokeColor =
                e.style?.stroke ||
                (isSelected ? '#C2714F' : 'url(#edge-gradient)')
              const strokeWidth = e.style?.strokeWidth || (isSelected ? 4 : 3)
              const strokeDasharray = e.style?.strokeDasharray || 'none'

              return (
                <path
                  key={e.id}
                  d={d}
                  stroke={strokeColor}
                  strokeWidth={strokeWidth}
                  strokeDasharray={strokeDasharray}
                  fill="none"
                  strokeLinecap="round"
                  className={cn(
                    'transition-colors cursor-pointer pointer-events-auto',
                    !isSelected && 'hover:stroke-[#C2714F]/70',
                  )}
                  onClick={(ev) => {
                    ev.stopPropagation()
                    if (activeTool === 'Select') {
                      setSelectedEdge(e.id)
                      setSelectedNodes([])
                    }
                  }}
                />
              )
            })}
            {drawingEdge &&
              (() => {
                const sNode = funnel.nodes.find(
                  (n) => n.id === drawingEdge.source,
                )
                if (!sNode) return null
                const sourceCoords = getRightPortCoords(sNode, sNode.x, sNode.y)
                return (
                  <path
                    d={`M ${sourceCoords.x} ${sourceCoords.y} C ${sourceCoords.x + 80} ${sourceCoords.y}, ${drawingEdge.currentX - 80} ${drawingEdge.currentY}, ${drawingEdge.currentX} ${drawingEdge.currentY}`}
                    stroke="#C2714F"
                    strokeWidth="3"
                    strokeDasharray="4 4"
                    fill="none"
                    strokeLinecap="round"
                  />
                )
              })()}
            {selectionBox &&
              (() => {
                const w = Math.abs(selectionBox.currentX - selectionBox.startX)
                const h = Math.abs(selectionBox.currentY - selectionBox.startY)
                const x = Math.min(selectionBox.startX, selectionBox.currentX)
                const y = Math.min(selectionBox.startY, selectionBox.currentY)
                return (
                  <rect
                    x={x}
                    y={y}
                    width={w}
                    height={h}
                    fill="rgba(194, 113, 79, 0.1)"
                    stroke="#C2714F"
                    strokeWidth={2 / transform.scale}
                    rx={8}
                  />
                )
              })()}
          </svg>

          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {funnel.nodes.map((n) => {
              const nodeTasks = tasks.filter((t) =>
                n.data.linkedTaskIds?.includes(t.id),
              )
              let total = 0
              let completed = 0
              nodeTasks.forEach((t) => {
                if (t.subtasks && t.subtasks.length > 0) {
                  total += t.subtasks.length
                  completed += t.subtasks.filter((s) => s.isCompleted).length
                } else {
                  total += 1
                  if (t.status === 'Concluído') completed += 1
                }
              })
              const taskProgress = { total, completed }

              return (
                <NodeItem
                  key={n.id}
                  node={getEffectiveNode(n)!}
                  selected={selectedNodes.includes(n.id)}
                  snapToGrid={snapToGrid}
                  activeTool={activeTool}
                  taskProgress={taskProgress}
                  onPointerDownAction={(shiftKey) =>
                    handleNodePointerDown(n.id, shiftKey)
                  }
                  onMove={(dx, dy) =>
                    setDragState({ isDragging: true, dx, dy })
                  }
                  onMoveEnd={(dx, dy) => {
                    setDragState(null)
                    if (dx === 0 && dy === 0) return
                    onChangeWithHistory({
                      ...funnel,
                      nodes: funnel.nodes.map((node) =>
                        selectedNodes.includes(node.id) || node.id === n.id
                          ? { ...node, x: node.x + dx, y: node.y + dy }
                          : node,
                      ),
                    })
                  }}
                  onResize={(x, y, w, h) =>
                    setResizingNode({ id: n.id, x, y, width: w, height: h })
                  }
                  onResizeEnd={(x, y, w, h) => {
                    setResizingNode(null)
                    onChangeWithHistory({
                      ...funnel,
                      nodes: funnel.nodes.map((node) =>
                        node.id === n.id
                          ? { ...node, x, y, width: w, height: h }
                          : node,
                      ),
                    })
                  }}
                  onAddChild={() => handleAddChild(n.id)}
                  onDelete={() => {
                    if (selectedNodes.includes(n.id))
                      setNodeToDelete('selected')
                    else setNodeToDelete(n.id)
                  }}
                  onOpenRightPanel={(tab) =>
                    setRightPanelState({ nodeId: n.id, tab })
                  }
                  onOpenSettings={() => setSettingsNodeId(n.id)}
                  onToggleComplete={() =>
                    onChangeWithHistory({
                      ...funnel,
                      nodes: funnel.nodes.map((node) =>
                        node.id === n.id
                          ? {
                              ...node,
                              data: {
                                ...node.data,
                                isCompleted: !node.data.isCompleted,
                              },
                            }
                          : node,
                      ),
                    })
                  }
                  scale={transform.scale}
                  onTextChange={(text) =>
                    onChangeWithHistory({
                      ...funnel,
                      nodes: funnel.nodes.map((node) =>
                        node.id === n.id
                          ? { ...node, data: { ...node.data, name: text } }
                          : node,
                      ),
                    })
                  }
                  onEdgeDragStart={handleEdgeDragStart}
                  onDropResource={(type, id) =>
                    handleDropResource(n.id, type, id)
                  }
                />
              )
            })}
          </div>
        </div>
      </div>

      {rightPanelState &&
        funnel.nodes.find((n) => n.id === rightPanelState.nodeId) && (
          <RightPanel
            node={funnel.nodes.find((n) => n.id === rightPanelState.nodeId)!}
            funnel={funnel}
            defaultTab={rightPanelState.tab}
            onChange={(n) =>
              onChangeWithHistory({
                ...funnel,
                nodes: funnel.nodes.map((node) =>
                  node.id === n.id ? n : node,
                ),
              })
            }
            onClose={() => setRightPanelState(null)}
          />
        )}
      <NodeSettingsModal
        node={
          settingsNodeId
            ? funnel.nodes.find((n) => n.id === settingsNodeId) || null
            : null
        }
        isOpen={!!settingsNodeId}
        onClose={() => setSettingsNodeId(null)}
        onSave={(id, updates) => {
          onChangeWithHistory({
            ...funnel,
            nodes: funnel.nodes.map((n) =>
              n.id === id ? { ...n, data: { ...n.data, ...updates } } : n,
            ),
          })
          setSettingsNodeId(null)
        }}
      />

      <ConfirmDialog
        open={!!nodeToDelete}
        onOpenChange={(open) => !open && setNodeToDelete(null)}
        title="Excluir Elementos?"
        description="Esta ação removerá os elementos selecionados do canvas. Deseja continuar?"
        confirmLabel="Excluir"
        variant="destructive"
        onConfirm={handleConfirmDelete}
      />
    </div>
  )
}
