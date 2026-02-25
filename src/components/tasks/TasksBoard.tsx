import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Task } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  MoreHorizontal,
  Paperclip,
  MessageSquare,
  Plus,
  Network,
} from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

const columnsConfig = [
  { id: 'A Fazer', label: 'To Do', dot: 'bg-pink-500', bg: 'bg-[#FAF7F2]' },
  {
    id: 'Em Progresso',
    label: 'In Progress',
    dot: 'bg-amber-500',
    bg: 'bg-[#FAF7F2]',
  },
  {
    id: 'Em Revisão',
    label: 'In Review',
    dot: 'bg-blue-500',
    bg: 'bg-[#FAF7F2]',
  },
  { id: 'Concluído', label: 'Done', dot: 'bg-green-500', bg: 'bg-[#FAF7F2]' },
]

const priorityConfig = {
  Baixa: {
    label: 'Low',
    color: 'bg-secondary text-muted-foreground border-transparent',
  },
  Média: {
    label: 'Medium',
    color: 'bg-warning-bg text-warning border-transparent',
  },
  Alta: { label: 'High', color: 'bg-danger-bg text-danger border-transparent' },
}

export default function TasksBoard({
  tasks,
  updateTask,
  onCardClick,
}: {
  tasks: Task[]
  updateTask: (id: string, updates: Partial<Task>) => void
  onCardClick: (t: Task) => void
}) {
  const navigate = useNavigate()
  const [draggingId, setDraggingId] = useState<string | null>(null)
  const [dragOverCol, setDragOverCol] = useState<string | null>(null)

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('taskId', id)
    e.dataTransfer.effectAllowed = 'move'

    const target = e.currentTarget as HTMLElement
    const clone = target.cloneNode(true) as HTMLElement
    clone.style.width = `${target.offsetWidth}px`
    clone.style.height = `${target.offsetHeight}px`
    clone.style.position = 'absolute'
    clone.style.top = '-9999px'
    clone.style.left = '-9999px'
    clone.style.opacity = '1'
    clone.style.transform = 'none'
    clone.style.pointerEvents = 'none'
    document.body.appendChild(clone)

    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    e.dataTransfer.setDragImage(clone, x, y)

    setTimeout(() => {
      document.body.removeChild(clone)
      setDraggingId(id)
    }, 0)
  }

  const handleDragEnd = () => {
    setDraggingId(null)
    setDragOverCol(null)
  }

  const handleDrop = (e: React.DragEvent, status: string) => {
    e.preventDefault()
    const id = e.dataTransfer.getData('taskId')
    if (id) updateTask(id, { status: status as Task['status'] })
    setDraggingId(null)
    setDragOverCol(null)
  }

  return (
    <div className="flex gap-6 overflow-x-auto pb-4 h-full min-h-[500px] items-start no-scrollbar">
      {columnsConfig.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col.id)
        const isDragOver = dragOverCol === col.id

        return (
          <div
            key={col.id}
            className={cn(
              'w-80 shrink-0 flex flex-col rounded-2xl p-4 transition-all duration-200 relative border border-transparent',
              col.bg,
              isDragOver && 'border-primary/30 shadow-sm bg-opacity-80',
            )}
            onDragOver={(e) => {
              e.preventDefault()
              e.dataTransfer.dropEffect = 'move'
              if (!isDragOver) setDragOverCol(col.id)
            }}
            onDrop={(e) => handleDrop(e, col.id)}
          >
            <div className="flex justify-between items-center mb-4 px-1">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${col.dot}`} />
                <h3 className="font-bold text-sm text-foreground">
                  {col.label}
                </h3>
                <span className="text-xs font-semibold text-muted-foreground bg-white/60 rounded-full px-2 py-0.5">
                  {colTasks.length}
                </span>
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                <MoreHorizontal size={16} />
              </button>
            </div>
            <div className="flex flex-col gap-3 flex-1 overflow-y-auto min-h-[100px] pb-4 no-scrollbar">
              {colTasks.map((t) => {
                const pc = priorityConfig[t.priority]
                const completedSubtasks =
                  t.subtasks?.filter((s) => s.isCompleted).length || 0
                const totalSubtasks = t.subtasks?.length || 0
                const progress =
                  totalSubtasks > 0
                    ? Math.round((completedSubtasks / totalSubtasks) * 100)
                    : 0
                const isDragging = draggingId === t.id

                return (
                  <Card
                    key={t.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, t.id)}
                    onDragEnd={handleDragEnd}
                    onClick={() => onCardClick(t)}
                    className={cn(
                      'cursor-grab active:cursor-grabbing shadow-sm rounded-2xl bg-white relative overflow-hidden',
                      isDragging
                        ? 'opacity-40 border-primary/40 border-dashed shadow-none ring-0'
                        : 'opacity-100 border-border hover:shadow-md hover:border-primary/40 transition-all',
                    )}
                  >
                    <div
                      className={cn(
                        'absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl',
                        t.priority === 'Alta' && 'bg-danger',
                        t.priority === 'Média' && 'bg-warning',
                        t.priority === 'Baixa' && 'bg-border',
                      )}
                    />
                    <CardContent className="p-4 flex flex-col gap-3 pl-5">
                      <div className="flex justify-between items-start">
                        <Badge
                          variant="outline"
                          className={`font-medium px-2 py-0.5 text-[10px] ${pc.color}`}
                        >
                          {pc.label}
                        </Badge>
                        <button className="text-muted-foreground hover:text-foreground">
                          <MoreHorizontal size={14} />
                        </button>
                      </div>

                      <span className="font-bold text-foreground text-sm leading-snug">
                        {t.title}
                      </span>

                      <div className="space-y-1.5 mt-2">
                        <div className="flex justify-between text-[11px] font-medium text-muted-foreground">
                          <span>Progress</span>
                          <span>{progress}%</span>
                        </div>
                        <Progress
                          value={progress}
                          className="h-1.5 bg-secondary"
                        />
                      </div>

                      <div className="flex justify-between items-center mt-3 pt-3 border-t border-border/50">
                        <div className="flex -space-x-2">
                          <Avatar className="w-6 h-6 border-2 border-white">
                            <AvatarImage src={t.avatar} />
                            <AvatarFallback className="text-[10px] bg-secondary text-primary">
                              {t.assignee?.[0] || 'U'}
                            </AvatarFallback>
                          </Avatar>
                          <div className="w-6 h-6 rounded-full border-2 border-white bg-white flex items-center justify-center text-muted-foreground border-dashed">
                            <Plus size={10} />
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                          {t.funnelId && t.nodeId && (
                            <button
                              className="text-primary hover:text-primary/80 bg-secondary p-1.5 rounded-md transition-colors"
                              onClick={(e) => {
                                e.stopPropagation()
                                navigate(
                                  `/canvas/${t.funnelId}?nodeId=${t.nodeId}`,
                                )
                              }}
                              title="Ver no Canvas"
                            >
                              <Network size={12} />
                            </button>
                          )}
                          <div className="flex items-center gap-1">
                            <Paperclip size={12} />
                            {t.attachmentCount || 0}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare size={12} />
                            {t.comments?.length || 0}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
              {isDragOver &&
                draggingId &&
                !colTasks.find((t) => t.id === draggingId) && (
                  <div className="h-32 rounded-2xl border-2 border-dashed border-primary/40 bg-primary/5 animate-fade-in transition-all flex items-center justify-center">
                    <span className="text-xs font-medium text-primary/50">
                      Drop task here
                    </span>
                  </div>
                )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
