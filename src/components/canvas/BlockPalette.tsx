import React from 'react'
import {
  Mail,
  MessageSquare,
  MessageCircle,
  Phone,
  Smartphone,
  Clock,
  LayoutTemplate,
  CreditCard,
  ArrowUpCircle,
  CheckCircle,
  FileText,
  Megaphone,
  PlayCircle,
} from 'lucide-react'
import { Funnel } from '@/types'

const BLOCK_CATEGORIES = [
  {
    title: 'MESSAGES',
    iconColor: 'text-[#C2714F]',
    blocks: [
      { type: 'Email', icon: Mail, label: 'Email' },
      { type: 'Slack', icon: MessageSquare, label: 'Slack' },
      { type: 'SMS', icon: MessageCircle, label: 'SMS' },
      { type: 'WhatsApp', icon: Phone, label: 'WATI (WhatsApp)' },
      { type: 'ManyChat', icon: Smartphone, label: 'ManyChat (WhatsApp)' },
    ],
  },
  {
    title: 'DELAYS',
    iconColor: 'text-[#C2714F]',
    blocks: [{ type: 'Wait', icon: Clock, label: 'Wait Until' }],
  },
  {
    title: 'PAGES',
    iconColor: 'text-[#C2714F]',
    blocks: [
      { type: 'LandingPage', icon: LayoutTemplate, label: 'Landing Page' },
      { type: 'VSL', icon: PlayCircle, label: 'VSL Page' },
      { type: 'Checkout', icon: CreditCard, label: 'Checkout' },
      { type: 'Upsell', icon: ArrowUpCircle, label: 'Upsell' },
      { type: 'ThankYou', icon: CheckCircle, label: 'Thank You' },
      { type: 'Form', icon: FileText, label: 'Form' },
      { type: 'Ad', icon: Megaphone, label: 'Ad Campaign' },
    ],
  },
]

export default function BlockPalette({ funnel }: { funnel: Funnel }) {
  const onDragStart = (e: React.DragEvent, type: string) => {
    e.dataTransfer.setData('blockType', type)
  }

  return (
    <div className="w-[260px] max-h-[calc(100vh-140px)] bg-white rounded-2xl border border-[#E8E2D9] shadow-xl flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto p-5 no-scrollbar space-y-8">
        {BLOCK_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="space-y-4">
            <div className="flex items-center gap-2 px-1">
              <div
                className={`w-2 h-2 rotate-45 bg-current ${cat.iconColor}`}
              />
              <h4 className="text-[11px] font-bold text-[#8C7B6C] tracking-widest uppercase">
                {cat.title}
              </h4>
            </div>
            <div className="flex flex-col gap-1">
              {cat.blocks.map((block) => (
                <div
                  key={block.type}
                  draggable
                  onDragStart={(e) => onDragStart(e, block.type)}
                  className="flex items-center gap-4 p-3 hover:bg-[#FAF7F2] rounded-2xl cursor-grab active:cursor-grabbing transition-colors text-[#3D2B1F] border border-transparent hover:border-[#E8E2D9]"
                >
                  <block.icon
                    size={18}
                    className="text-[#8C7B6C] shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-[13px] font-bold truncate">
                    {block.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
