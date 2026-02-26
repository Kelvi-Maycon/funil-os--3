import { useState, useEffect } from 'react'
import { Node, NodeData, Task } from '@/types'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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

export function NodeSettingsModal({
  node,
  isOpen,
  onClose,
  onSave,
}: NodeSettingsModalProps) {
  const [name, setName] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [description, setDescription] = useState('')
  const [isTaskMode, setIsTaskMode] = useState(false)
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
      setDescription(node.data.description || '')
      setIsTaskMode(node.data.isTaskMode || false)
      setLinkedDocs(node.data.linkedDocumentIds || [])
      setLinkedAssets(node.data.linkedAssetIds || [])
    }
  }, [isOpen, node])

  if (!node) return null

  const handleSave = () => {
    onSave(node.id, {
      subtitle,
      description,
      isTaskMode,
      linkedDocumentIds: linkedDocs,
      linkedAssetIds: linkedAssets,
    })
    onClose()
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

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[85vh] overflow-y-auto p-6 flex flex-col gap-6 bg-white border-[#E8E2D9] shadow-xl sm:rounded-[2rem]">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <DialogTitle className="text-[28px] font-black tracking-tight text-[#3D2B1F]">
            {name || 'Node'}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="conf" className="w-full flex-1">
          <TabsList className="flex w-full bg-[#FAF7F2] rounded-full p-1.5 mb-6 h-auto">
            <TabsTrigger
              value="conf"
              className="flex-1 rounded-full text-xs py-2 font-bold text-[#8C7B6C] data-[state=active]:bg-white data-[state=active]:text-[#3D2B1F] data-[state=active]:shadow-sm transition-all"
            >
              Conf
            </TabsTrigger>
            <TabsTrigger
              value="docs"
              className="flex-1 rounded-full text-xs py-2 font-bold text-[#8C7B6C] data-[state=active]:bg-white data-[state=active]:text-[#3D2B1F] data-[state=active]:shadow-sm transition-all"
            >
              Docs
            </TabsTrigger>
            <TabsTrigger
              value="tasks"
              className="flex-1 rounded-full text-xs py-2 font-bold text-[#8C7B6C] data-[state=active]:bg-white data-[state=active]:text-[#3D2B1F] data-[state=active]:shadow-sm transition-all"
            >
              Tasks
            </TabsTrigger>
            <TabsTrigger
              value="assets"
              className="flex-1 rounded-full text-xs py-2 font-bold text-[#8C7B6C] data-[state=active]:bg-white data-[state=active]:text-[#3D2B1F] data-[state=active]:shadow-sm transition-all"
            >
              Assets
            </TabsTrigger>
          </TabsList>

          <TabsContent value="conf" className="space-y-6 outline-none">
            <div className="space-y-2">
              <Label className="text-[11px] font-bold text-[#8C7B6C] tracking-widest uppercase">
                SUBTÍTULO
              </Label>
              <Input
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="h-12 rounded-xl bg-[#FAF7F2] border-[#E8E2D9] font-bold text-[#3D2B1F] px-4 shadow-none focus-visible:ring-[#C2714F]/20"
                placeholder="+1 filter"
              />
            </div>

            <div className="flex flex-row items-center justify-between rounded-2xl border border-[#E8E2D9] bg-[#FAF7F2] p-4">
              <div className="space-y-0.5">
                <Label className="text-[15px] font-bold text-[#3D2B1F]">
                  Modo Tarefa
                </Label>
                <p className="text-[13px] text-[#8C7B6C] font-medium">
                  Habilitar checklist
                </p>
              </div>
              <Switch checked={isTaskMode} onCheckedChange={setIsTaskMode} />
            </div>

            <div className="space-y-2">
              <Label className="text-[11px] font-bold text-[#8C7B6C] tracking-widest uppercase">
                NOTAS ADICIONAIS
              </Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[120px] rounded-xl bg-[#FAF7F2] border-[#E8E2D9] font-medium text-[#3D2B1F] resize-none p-4 shadow-none focus-visible:ring-[#C2714F]/20"
                placeholder="Adicione contexto aqui..."
              />
            </div>
          </TabsContent>

          <TabsContent value="docs" className="space-y-4 outline-none">
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-[#3D2B1F]">
                Documentos Vinculados
              </Label>
              <Select
                onValueChange={(val) =>
                  !linkedDocs.includes(val) &&
                  setLinkedDocs([...linkedDocs, val])
                }
              >
                <SelectTrigger className="h-11 rounded-xl bg-[#FAF7F2] border-[#E8E2D9] font-medium">
                  <SelectValue placeholder="Buscar documento..." />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-[#E8E2D9] shadow-lg">
                  {docs
                    .filter((d) => !linkedDocs.includes(d.id))
                    .map((d) => (
                      <SelectItem
                        key={d.id}
                        value={d.id}
                        className="font-medium"
                      >
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
                      className="pl-2 pr-1.5 py-1.5 bg-white border-[#E8E2D9] rounded-lg gap-1.5 flex items-center shadow-sm"
                    >
                      <FileText size={14} className="text-[#C2714F]" />{' '}
                      <span className="text-xs font-semibold text-[#3D2B1F]">
                        {d.title}
                      </span>
                      <button
                        onClick={() =>
                          setLinkedDocs(linkedDocs.filter((l) => l !== id))
                        }
                        className="text-[#8C7B6C] hover:text-[#C2714F] ml-1 transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </Badge>
                  )
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="assets" className="space-y-4 outline-none">
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-[#3D2B1F]">
                Ativos da Biblioteca
              </Label>
              <Select
                onValueChange={(val) =>
                  !linkedAssets.includes(val) &&
                  setLinkedAssets([...linkedAssets, val])
                }
              >
                <SelectTrigger className="h-11 rounded-xl bg-[#FAF7F2] border-[#E8E2D9] font-medium">
                  <SelectValue placeholder="Buscar ativo..." />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-[#E8E2D9] shadow-lg">
                  {resources
                    .filter((a) => !linkedAssets.includes(a.id))
                    .map((a) => (
                      <SelectItem
                        key={a.id}
                        value={a.id}
                        className="font-medium"
                      >
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
                      className="pl-2 pr-1.5 py-1.5 bg-white border-[#E8E2D9] rounded-lg gap-1.5 flex items-center shadow-sm"
                    >
                      {a.type === 'link' ? (
                        <LinkIcon size={14} className="text-[#C2714F]" />
                      ) : (
                        <ImageIcon size={14} className="text-[#C2714F]" />
                      )}
                      <span className="text-xs font-semibold text-[#3D2B1F]">
                        {a.title}
                      </span>
                      <button
                        onClick={() =>
                          setLinkedAssets(linkedAssets.filter((l) => l !== id))
                        }
                        className="text-[#8C7B6C] hover:text-[#C2714F] ml-1 transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </Badge>
                  )
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-4 outline-none">
            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#E8E2D9]">
              {nodeTasks.map((t) => (
                <div
                  key={t.id}
                  className="flex flex-col gap-3 bg-[#FAF7F2] p-3.5 rounded-xl border border-[#E8E2D9]"
                >
                  <div className="flex gap-3 items-center">
                    <Checkbox
                      checked={t.status === 'Concluído'}
                      onCheckedChange={(c) =>
                        updateTask(t.id, {
                          status: c ? 'Concluído' : 'Pendente',
                        })
                      }
                      className="w-5 h-5 rounded-[6px] border-[#8C7B6C]/30 data-[state=checked]:bg-[#C2714F] data-[state=checked]:border-[#C2714F]"
                    />
                    <Input
                      value={t.title}
                      onChange={(e) =>
                        updateTask(t.id, { title: e.target.value })
                      }
                      className={cn(
                        'h-9 rounded-lg bg-white font-semibold text-[13px] border-[#E8E2D9] text-[#3D2B1F] shadow-sm focus-visible:ring-[#C2714F]/20',
                        t.status === 'Concluído' &&
                          'line-through text-[#8C7B6C] opacity-70',
                      )}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeTask(t.id)}
                      className="h-9 w-9 text-[#8C7B6C] hover:text-red-500 hover:bg-white shrink-0 rounded-lg"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                  <div className="flex gap-2 pl-8">
                    <Select
                      value={t.priority}
                      onValueChange={(v) =>
                        updateTask(t.id, { priority: v as any })
                      }
                    >
                      <SelectTrigger className="h-8 rounded-lg text-xs w-[110px] bg-white border-[#E8E2D9] text-[#3D2B1F] font-semibold shadow-sm">
                        <SelectValue placeholder="Prioridade" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-[#E8E2D9] shadow-lg">
                        <SelectItem value="Baixa" className="font-medium">
                          Baixa
                        </SelectItem>
                        <SelectItem value="Média" className="font-medium">
                          Média
                        </SelectItem>
                        <SelectItem value="Alta" className="font-medium">
                          Alta
                        </SelectItem>
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
                      className="h-8 rounded-lg text-xs bg-white border-[#E8E2D9] text-[#3D2B1F] font-semibold flex-1 shadow-sm focus-visible:ring-[#C2714F]/20"
                    />
                  </div>
                </div>
              ))}
              {nodeTasks.length === 0 && (
                <div className="text-sm text-[#8C7B6C] text-center py-8 font-medium bg-[#FAF7F2] rounded-xl border border-dashed border-[#E8E2D9]">
                  Nenhuma tarefa vinculada.
                </div>
              )}
            </div>
            <Button
              onClick={addTask}
              variant="outline"
              className="w-full rounded-xl border-dashed border-[#E8E2D9] bg-white text-[#3D2B1F] font-bold hover:text-[#C2714F] hover:border-[#C2714F] h-12 gap-2 hover:bg-[#FAF7F2] transition-colors"
            >
              <Plus size={18} /> Nova Tarefa
            </Button>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-4 sm:justify-end gap-3 pt-4 border-t border-[#E8E2D9]/60">
          <Button
            onClick={handleSave}
            className="w-full rounded-full h-12 text-[15px] font-bold bg-[#C2714F] hover:bg-[#a65d3f] text-white shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Salvar Alterações
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
