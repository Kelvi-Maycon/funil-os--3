import { useState, useEffect } from 'react'
import { Node, NodeData, Task } from '@/types'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import {
  X,
  Plus,
  Trash2,
  FileText,
  Link as LinkIcon,
  Image as ImageIcon,
} from 'lucide-react'
import { generateId } from '@/lib/generateId'
import { cn } from '@/lib/utils'
import useDocumentStore from '@/stores/useDocumentStore'
import useResourceStore from '@/stores/useResourceStore'
import useTaskStore from '@/stores/useTaskStore'
import useFunnelStore from '@/stores/useFunnelStore'

type NodeSettingsModalProps = {
  node: Node | null
  isOpen: boolean
  onClose: () => void
  onSave: (id: string, updates: Partial<NodeData>) => void
}

const COLORS = [
  '#C2714F',
  '#3D2B1F',
  '#E5B567',
  '#10B981',
  '#3B82F6',
  '#8B5CF6',
  '#EF4444',
  '#6B7280',
]

export function NodeSettingsModal({
  node,
  isOpen,
  onClose,
  onSave,
}: NodeSettingsModalProps) {
  const [name, setName] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [status, setStatus] = useState('Rascunho')
  const [description, setDescription] = useState('')
  const [metrics, setMetrics] = useState<{ label: string; value: string }[]>([])
  const [isTaskMode, setIsTaskMode] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [color, setColor] = useState('')
  const [linkedDocs, setLinkedDocs] = useState<string[]>([])
  const [linkedAssets, setLinkedAssets] = useState<string[]>([])

  const [docs] = useDocumentStore()
  const [resources] = useResourceStore()
  const [tasks, setTasks] = useTaskStore()
  const [funnels] = useFunnelStore()

  const currentFunnel = funnels.find((f) =>
    f.nodes.some((n) => n.id === node?.id),
  )
  const nodeTasks = tasks.filter(
    (t) => t.nodeId === node?.id || node?.data.linkedTaskIds?.includes(t.id),
  )

  useEffect(() => {
    if (isOpen && node) {
      setName(node.data.name || '')
      setSubtitle(node.data.subtitle || '')
      setStatus(node.data.status || 'Rascunho')
      setDescription(node.data.description || '')
      setMetrics(node.data.metrics || [])
      setIsTaskMode(node.data.isTaskMode || false)
      setIsCompleted(node.data.isCompleted || false)
      setColor(node.data.color || '')
      setLinkedDocs(node.data.linkedDocumentIds || [])
      setLinkedAssets(node.data.linkedAssetIds || [])
    }
  }, [isOpen, node])

  if (!node) return null

  const handleSave = () => {
    onSave(node.id, {
      name,
      subtitle,
      status,
      description,
      metrics,
      isTaskMode,
      isCompleted,
      linkedDocumentIds: linkedDocs,
      linkedAssetIds: linkedAssets,
      color,
    })
    onClose()
  }

  const handleNameChange = (val: string) => {
    setName(val)
    onSave(node.id, { name: val })
  }

  const addTask = () => {
    const newTask: Task = {
      id: generateId('t'),
      title: 'Nova Tarefa',
      nodeId: node.id,
      funnelId: currentFunnel?.id,
      priority: 'Média',
      status: 'Pendente',
    }
    setTasks([...tasks, newTask])
  }
  const updateTask = (id: string, updates: Partial<Task>) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)))
  const removeTask = (id: string) => setTasks(tasks.filter((t) => t.id !== id))
  const addMetric = () =>
    setMetrics([...metrics, { label: 'Nova Métrica', value: '0' }])
  const updateMetric = (i: number, k: 'label' | 'value', v: string) =>
    setMetrics(metrics.map((m, idx) => (idx === i ? { ...m, [k]: v } : m)))
  const removeMetric = (i: number) =>
    setMetrics(metrics.filter((_, idx) => idx !== i))

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[85vh] overflow-y-auto p-6 flex flex-col gap-6">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <DialogTitle className="text-xl font-bold text-slate-900">
              {name || 'Node'}
            </DialogTitle>
            <DialogDescription className="text-sm font-medium text-slate-500 mt-1">
              {node.type}
            </DialogDescription>
          </div>
          <Badge
            className={cn(
              'pointer-events-none',
              status === 'Ativo'
                ? 'bg-green-500'
                : status === 'Rascunho'
                  ? 'bg-slate-400'
                  : status === 'Pausado'
                    ? 'bg-amber-500'
                    : 'bg-blue-500',
            )}
          >
            {status}
          </Badge>
        </DialogHeader>

        <Tabs defaultValue="geral" className="w-full flex-1">
          <TabsList className="grid w-full grid-cols-5 bg-slate-100 rounded-xl p-1 mb-6">
            <TabsTrigger
              value="geral"
              className="rounded-lg text-xs font-semibold"
            >
              Geral
            </TabsTrigger>
            <TabsTrigger
              value="metricas"
              className="rounded-lg text-xs font-semibold"
            >
              Métricas
            </TabsTrigger>
            <TabsTrigger
              value="tarefas"
              className="rounded-lg text-xs font-semibold"
            >
              Tarefas
            </TabsTrigger>
            <TabsTrigger
              value="recursos"
              className="rounded-lg text-xs font-semibold"
            >
              Recursos
            </TabsTrigger>
            <TabsTrigger
              value="aparencia"
              className="rounded-lg text-xs font-semibold"
            >
              Aparência
            </TabsTrigger>
          </TabsList>

          <TabsContent value="geral" className="space-y-4 outline-none">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-slate-700">
                  Nome
                </Label>
                <Input
                  value={name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="h-10 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-slate-700">
                  Subtítulo
                </Label>
                <Input
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="h-10 rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-slate-700">
                Status
              </Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="h-10 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="Rascunho">Rascunho</SelectItem>
                  <SelectItem value="Ativo">Ativo</SelectItem>
                  <SelectItem value="Pausado">Pausado</SelectItem>
                  <SelectItem value="Concluído">Concluído</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-slate-700">
                Descrição Técnica
              </Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[100px] rounded-xl"
                placeholder="Anotações internas..."
              />
            </div>
          </TabsContent>

          <TabsContent value="metricas" className="space-y-4 outline-none">
            <div className="space-y-3">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  className="flex gap-2 items-center bg-slate-50 p-2 rounded-xl border border-slate-100"
                >
                  <Input
                    value={m.label}
                    onChange={(e) => updateMetric(i, 'label', e.target.value)}
                    className="h-9 rounded-lg bg-white"
                    placeholder="Label (ex: CTR)"
                  />
                  <Input
                    value={m.value}
                    onChange={(e) => updateMetric(i, 'value', e.target.value)}
                    className="h-9 rounded-lg bg-white"
                    placeholder="Valor (ex: 2.5%)"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeMetric(i)}
                    className="h-9 w-9 text-slate-400 hover:text-red-500 shrink-0"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              ))}
              {metrics.length === 0 && (
                <p className="text-sm text-slate-500 text-center py-4">
                  Nenhuma métrica configurada.
                </p>
              )}
            </div>
            <Button
              onClick={addMetric}
              variant="outline"
              className="w-full rounded-xl border-dashed h-10 gap-2"
            >
              <Plus size={16} /> Adicionar Métrica
            </Button>
          </TabsContent>

          <TabsContent value="tarefas" className="space-y-4 outline-none">
            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
              {nodeTasks.map((t) => (
                <div
                  key={t.id}
                  className="flex flex-col gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100"
                >
                  <div className="flex gap-3 items-center">
                    <Checkbox
                      checked={t.status === 'Concluído'}
                      onCheckedChange={(c) =>
                        updateTask(t.id, {
                          status: c ? 'Concluído' : 'Pendente',
                        })
                      }
                      className="w-5 h-5 rounded data-[state=checked]:bg-[#C2714F] data-[state=checked]:border-[#C2714F]"
                    />
                    <Input
                      value={t.title}
                      onChange={(e) =>
                        updateTask(t.id, { title: e.target.value })
                      }
                      className={cn(
                        'h-8 rounded-lg bg-white font-medium text-sm',
                        t.status === 'Concluído' &&
                          'line-through text-slate-400',
                      )}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeTask(t.id)}
                      className="h-8 w-8 text-slate-400 hover:text-red-500 shrink-0"
                    >
                      <Trash2 size={15} />
                    </Button>
                  </div>
                  <div className="flex gap-2 pl-8">
                    <Select
                      value={t.priority}
                      onValueChange={(v) =>
                        updateTask(t.id, { priority: v as any })
                      }
                    >
                      <SelectTrigger className="h-8 rounded-lg text-xs w-[120px] bg-white">
                        <SelectValue placeholder="Prioridade" />
                      </SelectTrigger>
                      <SelectContent className="rounded-lg">
                        <SelectItem value="Baixa">Baixa</SelectItem>
                        <SelectItem value="Média">Média</SelectItem>
                        <SelectItem value="Alta">Alta</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      type="date"
                      value={t.deadline ? t.deadline.split('T')[0] : ''}
                      onChange={(e) =>
                        updateTask(t.id, {
                          deadline: e.target.value
                            ? new Date(e.target.value).toISOString()
                            : undefined,
                        })
                      }
                      className="h-8 rounded-lg text-xs bg-white flex-1"
                    />
                  </div>
                </div>
              ))}
              {nodeTasks.length === 0 && (
                <p className="text-sm text-slate-500 text-center py-4">
                  Nenhuma tarefa vinculada.
                </p>
              )}
            </div>
            <Button
              onClick={addTask}
              variant="outline"
              className="w-full rounded-xl border-dashed h-10 gap-2"
            >
              <Plus size={16} /> Nova Tarefa
            </Button>
          </TabsContent>

          <TabsContent value="recursos" className="space-y-6 outline-none">
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-slate-700">
                Documentos Vinculados
              </Label>
              <Select
                onValueChange={(val) =>
                  !linkedDocs.includes(val) &&
                  setLinkedDocs([...linkedDocs, val])
                }
              >
                <SelectTrigger className="h-10 rounded-xl">
                  <SelectValue placeholder="Buscar documento..." />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  {docs
                    .filter((d) => !linkedDocs.includes(d.id))
                    .map((d) => (
                      <SelectItem key={d.id} value={d.id}>
                        {d.title}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <div className="flex flex-wrap gap-2">
                {linkedDocs.map((id) => {
                  const d = docs.find((doc) => doc.id === id)
                  if (!d) return null
                  return (
                    <Badge
                      key={id}
                      variant="outline"
                      className="pl-2 pr-1 py-1 bg-white border-slate-200 rounded-lg gap-1.5 flex items-center"
                    >
                      <FileText size={13} className="text-[#C2714F]" />{' '}
                      <span className="text-xs">{d.title}</span>
                      <button
                        onClick={() =>
                          setLinkedDocs(linkedDocs.filter((l) => l !== id))
                        }
                        className="text-slate-400 hover:text-slate-700 ml-1"
                      >
                        <X size={13} />
                      </button>
                    </Badge>
                  )
                })}
              </div>
            </div>
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-slate-700">
                Ativos da Biblioteca
              </Label>
              <Select
                onValueChange={(val) =>
                  !linkedAssets.includes(val) &&
                  setLinkedAssets([...linkedAssets, val])
                }
              >
                <SelectTrigger className="h-10 rounded-xl">
                  <SelectValue placeholder="Buscar ativo..." />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  {resources
                    .filter((a) => !linkedAssets.includes(a.id))
                    .map((a) => (
                      <SelectItem key={a.id} value={a.id}>
                        {a.title}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <div className="flex flex-wrap gap-2">
                {linkedAssets.map((id) => {
                  const a = resources.find((asset) => asset.id === id)
                  if (!a) return null
                  return (
                    <Badge
                      key={id}
                      variant="outline"
                      className="pl-2 pr-1 py-1 bg-white border-slate-200 rounded-lg gap-1.5 flex items-center"
                    >
                      {a.type === 'link' ? (
                        <LinkIcon size={13} className="text-blue-500" />
                      ) : (
                        <ImageIcon size={13} className="text-purple-500" />
                      )}
                      <span className="text-xs">{a.title}</span>
                      <button
                        onClick={() =>
                          setLinkedAssets(linkedAssets.filter((l) => l !== id))
                        }
                        className="text-slate-400 hover:text-slate-700 ml-1"
                      >
                        <X size={13} />
                      </button>
                    </Badge>
                  )
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="aparencia" className="space-y-6 outline-none">
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-slate-700">
                Cor de Destaque
              </Label>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setColor('')}
                  className={cn(
                    'w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center bg-slate-50 hover:bg-slate-100 transition-all',
                    !color && 'ring-2 ring-slate-400 ring-offset-2',
                  )}
                >
                  <X size={14} className="text-slate-400" />
                </button>
                {COLORS.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    style={{ backgroundColor: c }}
                    className={cn(
                      'w-8 h-8 rounded-full border border-black/10 hover:scale-110 transition-all shadow-sm',
                      color === c &&
                        'ring-2 ring-offset-2 ring-slate-400 scale-110',
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4">
              <div className="space-y-1">
                <Label className="text-sm font-bold text-slate-800">
                  Task Mode
                </Label>
                <p className="text-xs text-slate-500 font-medium">
                  Habilitar checklist direto no canvas.
                </p>
              </div>
              <Switch
                checked={isTaskMode}
                onCheckedChange={setIsTaskMode}
                className="data-[state=checked]:bg-[#f95015]"
              />
            </div>
            <div className="flex flex-row items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4">
              <div className="space-y-1">
                <Label className="text-sm font-bold text-slate-800">
                  Concluído
                </Label>
                <p className="text-xs text-slate-500 font-medium">
                  Aplica efeito visual de finalizado.
                </p>
              </div>
              <Switch
                checked={isCompleted}
                onCheckedChange={setIsCompleted}
                className="data-[state=checked]:bg-green-500"
              />
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-2 sm:justify-end gap-3">
          <Button
            variant="ghost"
            onClick={onClose}
            className="rounded-full px-6 font-semibold"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSave}
            className="rounded-full px-6 font-semibold bg-[#C2714F] hover:bg-[#a65d3f] text-white"
          >
            Salvar Alterações
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
