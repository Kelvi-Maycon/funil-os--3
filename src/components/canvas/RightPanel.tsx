import { Node, Funnel, Task, Resource } from '@/types'
import { generateId } from '@/lib/generateId'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  X,
  FileText,
  CheckSquare,
  Image as ImageIcon,
  Plus,
  ArrowUpCircle,
  ArrowDownCircle,
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import useDocumentStore from '@/stores/useDocumentStore'
import useTaskStore from '@/stores/useTaskStore'
import useResourceStore from '@/stores/useResourceStore'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'

export default function RightPanel({
  node,
  funnel,
  defaultTab = 'details',
  onChange,
  onClose,
}: {
  node: Node
  funnel: Funnel
  defaultTab?: string
  onChange: (n: Node) => void
  onClose: () => void
}) {
  const [docs, setDocs] = useDocumentStore()
  const [tasks, setTasks] = useTaskStore()
  const [resources, setResources] = useResourceStore()
  const [activeTab, setActiveTab] = useState(defaultTab)
  const [inspectResource, setInspectResource] = useState<Resource | null>(null)

  useEffect(() => {
    setActiveTab(defaultTab)
  }, [defaultTab, node.id])

  const linkedDocs = docs.filter((d) =>
    node.data.linkedDocumentIds?.includes(d.id),
  )
  const linkedTasks = tasks.filter(
    (t) => t.nodeId === node.id || node.data.linkedTaskIds?.includes(t.id),
  )
  const linkedResources = resources.filter((a) =>
    node.data.linkedAssetIds?.includes(a.id),
  )

  const projDocs = docs.filter(
    (d) =>
      d.projectId === funnel.projectId &&
      !node.data.linkedDocumentIds?.includes(d.id),
  )
  const projTasks = tasks.filter(
    (t) =>
      t.projectId === funnel.projectId &&
      t.nodeId !== node.id &&
      !node.data.linkedTaskIds?.includes(t.id),
  )
  const projResources = resources.filter(
    (a) =>
      a.projectId === funnel.projectId &&
      !node.data.linkedAssetIds?.includes(a.id),
  )

  const linkResource = (type: 'doc' | 'task' | 'asset', id: string) => {
    const key =
      type === 'doc'
        ? 'linkedDocumentIds'
        : type === 'task'
          ? 'linkedTaskIds'
          : 'linkedAssetIds'
    onChange({
      ...node,
      data: {
        ...node.data,
        [key]: [
          ...((node.data[key as keyof typeof node.data] as string[]) || []),
          id,
        ],
      },
    })
    if (type === 'doc')
      setDocs(
        docs.map((d) =>
          d.id === id ? { ...d, funnelId: funnel.id, nodeId: node.id } : d,
        ),
      )
    if (type === 'task')
      setTasks(
        tasks.map((t) =>
          t.id === id ? { ...t, funnelId: funnel.id, nodeId: node.id } : t,
        ),
      )
  }

  const handleCreateTask = () => {
    const newTask: Task = {
      id: generateId('t'),
      title: 'Nova Tarefa do Nó',
      projectId: funnel.projectId,
      funnelId: funnel.id,
      nodeId: node.id,
      priority: 'Média',
      status: 'A Fazer',
      deadline: new Date(Date.now() + 86400000).toISOString(),
    }
    setTasks([...tasks, newTask])
    onChange({
      ...node,
      data: {
        ...node.data,
        linkedTaskIds: [...(node.data.linkedTaskIds || []), newTask.id],
      },
    })
  }

  return (
    <div className="w-80 bg-white border-l border-[#E8E2D9] h-full flex flex-col shadow-2xl z-30 shrink-0 absolute right-0 top-0 bottom-0 rounded-l-2xl">
      <div className="px-6 py-6 border-b border-[#E8E2D9] shrink-0">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-bold text-[#8C7B6C] uppercase tracking-widest">
            Propriedades do Nó
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-[#8C7B6C] hover:text-[#3D2B1F] hover:bg-[#FAF7F2] w-8 h-8 rounded-full"
          >
            <X size={16} />
          </Button>
        </div>
        <input
          className="w-full bg-transparent text-xl font-black text-[#3D2B1F] outline-none placeholder:text-[#8C7B6C]"
          value={node.data.name}
          onChange={(e) =>
            onChange({ ...node, data: { ...node.data, name: e.target.value } })
          }
          placeholder="Nome do Nó"
        />
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="flex-1 flex flex-col min-h-0 overflow-hidden"
      >
        <TabsList className="mx-6 mt-6 grid grid-cols-4 bg-[#FAF7F2] p-1 rounded-xl border border-[#E8E2D9]">
          <TabsTrigger
            value="details"
            className="text-[11px] font-bold rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#C2714F] data-[state=active]:shadow-sm"
          >
            Conf
          </TabsTrigger>
          <TabsTrigger
            value="content"
            className="text-[11px] font-bold rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#C2714F] data-[state=active]:shadow-sm"
          >
            Docs
          </TabsTrigger>
          <TabsTrigger
            value="tasks"
            className="text-[11px] font-bold rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#C2714F] data-[state=active]:shadow-sm"
          >
            Tasks
          </TabsTrigger>
          <TabsTrigger
            value="resources"
            className="text-[11px] font-bold rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#C2714F] data-[state=active]:shadow-sm"
          >
            Assets
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="details"
          className="flex-1 overflow-auto p-6 space-y-6 m-0 border-none outline-none no-scrollbar"
        >
          <div className="grid grid-cols-2 gap-3 mb-2">
            <div className="bg-[#FAF7F2] p-3.5 rounded-xl border border-[#E8E2D9]">
              <span className="text-[10px] font-bold text-[#8C7B6C] uppercase tracking-wider">
                Receita
              </span>
              <div className="text-lg font-black text-[#3D2B1F] mt-1 flex items-center justify-between">
                14k
                <ArrowUpCircle size={16} className="text-[#10b981]" />
              </div>
            </div>
            <div className="bg-[#FAF7F2] p-3.5 rounded-xl border border-[#E8E2D9]">
              <span className="text-[10px] font-bold text-[#8C7B6C] uppercase tracking-wider">
                Conversão
              </span>
              <div className="text-lg font-black text-[#3D2B1F] mt-1 flex items-center justify-between">
                2.4%
                <ArrowDownCircle size={16} className="text-red-500" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold text-[#8C7B6C] uppercase tracking-widest block">
              Subtítulo
            </label>
            <input
              className="w-full bg-[#FAF7F2] border border-[#E8E2D9] rounded-xl px-4 py-2.5 text-sm font-bold text-[#3D2B1F] outline-none focus:border-[#C2714F] transition-colors"
              value={node.data.subtitle || ''}
              onChange={(e) =>
                onChange({
                  ...node,
                  data: { ...node.data, subtitle: e.target.value },
                })
              }
              placeholder="+1 filter"
            />
          </div>

          <div className="flex items-center justify-between p-4 bg-[#FAF7F2] border border-[#E8E2D9] rounded-xl">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#3D2B1F]">
                Modo Tarefa
              </span>
              <span className="text-[11px] font-medium text-[#8C7B6C]">
                Habilitar checklist
              </span>
            </div>
            <Switch
              checked={node.data.isTaskMode || false}
              onCheckedChange={(val) =>
                onChange({ ...node, data: { ...node.data, isTaskMode: val } })
              }
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold text-[#8C7B6C] uppercase tracking-widest block">
              Notas Adicionais
            </label>
            <Textarea
              value={node.data.notes || ''}
              onChange={(e) =>
                onChange({
                  ...node,
                  data: { ...node.data, notes: e.target.value },
                })
              }
              placeholder="Adicione contexto aqui..."
              className="min-h-[160px] bg-[#FAF7F2] border border-[#E8E2D9] focus:border-[#C2714F] rounded-xl p-4 resize-none text-sm font-medium text-[#3D2B1F]"
            />
          </div>
        </TabsContent>

        <TabsContent
          value="content"
          className="flex-1 overflow-auto p-6 space-y-6 m-0 border-none outline-none no-scrollbar"
        >
          <div className="flex items-center gap-2">
            <Select onValueChange={(val) => linkResource('doc', val)}>
              <SelectTrigger className="flex-1 bg-[#FAF7F2] border-[#E8E2D9] rounded-xl text-[#3D2B1F] font-bold">
                <SelectValue placeholder="Vincular Documento..." />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-[#E8E2D9]">
                {projDocs.map((d) => (
                  <SelectItem
                    key={d.id}
                    value={d.id}
                    className="font-bold text-[#3D2B1F]"
                  >
                    <div className="flex items-center gap-2">
                      <FileText size={14} className="text-[#8C7B6C]" />
                      {d.title}
                    </div>
                  </SelectItem>
                ))}
                {projDocs.length === 0 && (
                  <div className="p-2 text-sm text-[#8C7B6C] text-center font-bold">
                    Nenhum documento
                  </div>
                )}
              </SelectContent>
            </Select>
          </div>
          {linkedDocs.map((doc) => (
            <div
              key={doc.id}
              className="space-y-3 border border-[#E8E2D9] rounded-xl p-4 bg-white shadow-sm"
            >
              <div className="font-black text-[#3D2B1F] flex items-center gap-2 border-b border-[#E8E2D9] pb-3">
                <FileText size={16} className="text-[#C2714F]" /> {doc.title}
              </div>
              <div
                contentEditable
                className="min-h-[150px] outline-none text-sm text-[#8C7B6C] font-medium"
                dangerouslySetInnerHTML={{ __html: doc.content }}
                onBlur={(e) =>
                  setDocs(
                    docs.map((d) =>
                      d.id === doc.id
                        ? { ...d, content: e.currentTarget.innerHTML }
                        : d,
                    ),
                  )
                }
              />
            </div>
          ))}
        </TabsContent>

        <TabsContent
          value="tasks"
          className="flex-1 overflow-auto p-6 space-y-6 m-0 border-none outline-none no-scrollbar"
        >
          <div className="flex items-center gap-2">
            <Select onValueChange={(val) => linkResource('task', val)}>
              <SelectTrigger className="flex-1 bg-[#FAF7F2] border-[#E8E2D9] rounded-xl text-[#3D2B1F] font-bold">
                <SelectValue placeholder="Importar Tarefa..." />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-[#E8E2D9]">
                {projTasks.map((t) => (
                  <SelectItem
                    key={t.id}
                    value={t.id}
                    className="font-bold text-[#3D2B1F]"
                  >
                    <div className="flex items-center gap-2">
                      <CheckSquare size={14} className="text-[#8C7B6C]" />
                      {t.title}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              className="bg-[#FAF7F2] text-[#3D2B1F] hover:bg-[#E8E2D9] border border-[#E8E2D9] rounded-xl w-10 h-10 p-0"
              onClick={handleCreateTask}
            >
              <Plus size={16} />
            </Button>
          </div>
          <div className="space-y-3">
            {linkedTasks.map((t) => (
              <div
                key={t.id}
                className="p-4 border border-[#E8E2D9] rounded-xl bg-[#FAF7F2] flex flex-col gap-3"
              >
                <div className="flex justify-between items-start">
                  <span className="font-bold text-sm text-[#3D2B1F] leading-tight">
                    {t.title}
                  </span>
                  <Badge
                    variant="outline"
                    className="border-[#C2714F] text-[#C2714F] shrink-0 ml-2"
                  >
                    {t.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent
          value="resources"
          className="flex-1 overflow-auto p-6 space-y-6 m-0 border-none outline-none no-scrollbar"
        >
          <div className="flex items-center gap-2">
            <Select onValueChange={(val) => linkResource('asset', val)}>
              <SelectTrigger className="flex-1 bg-[#FAF7F2] border-[#E8E2D9] rounded-xl text-[#3D2B1F] font-bold">
                <SelectValue placeholder="Vincular Recurso..." />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-[#E8E2D9]">
                {projResources.map((a) => (
                  <SelectItem
                    key={a.id}
                    value={a.id}
                    className="font-bold text-[#3D2B1F]"
                  >
                    <div className="flex items-center gap-2">
                      <ImageIcon size={14} className="text-[#8C7B6C]" />
                      {a.title}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-4">
            {linkedResources.map((a) => (
              <div
                key={a.id}
                className="rounded-xl overflow-hidden border border-[#E8E2D9] bg-white cursor-pointer hover:border-[#C2714F] transition-colors"
                onClick={() => a.type === 'image' && setInspectResource(a)}
              >
                {a.type === 'image' ? (
                  <img
                    src={a.content}
                    alt={a.title}
                    className="w-full aspect-video object-cover"
                  />
                ) : (
                  <div className="p-4 text-sm font-medium text-[#8C7B6C] bg-[#FAF7F2]">
                    {a.content}
                  </div>
                )}
                <div className="p-3 text-[13px] font-bold text-[#3D2B1F] border-t border-[#E8E2D9]">
                  {a.title}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="p-6 border-t border-[#E8E2D9] shrink-0 bg-white">
        <Button
          className="w-full bg-[#C2714F] hover:bg-[#C2714F]/90 text-white rounded-xl h-12 font-bold shadow-md"
          onClick={onClose}
        >
          Salvar Alterações
        </Button>
      </div>

      <Dialog
        open={!!inspectResource}
        onOpenChange={(open) => !open && setInspectResource(null)}
      >
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none shadow-2xl flex flex-col overflow-hidden rounded-none sm:rounded-none">
          <DialogTitle className="sr-only">Inspeção de Recurso</DialogTitle>
          <div className="absolute top-6 left-6 text-white font-bold text-xl z-10 drop-shadow-md">
            {inspectResource?.title}
          </div>
          <div className="flex-1 flex items-center justify-center p-8 overflow-auto">
            <img
              src={inspectResource?.content}
              alt={inspectResource?.title}
              className="max-w-full max-h-full object-contain rounded-xl"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
