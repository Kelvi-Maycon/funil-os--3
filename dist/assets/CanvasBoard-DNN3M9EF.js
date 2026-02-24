import { d as Clock, t as format } from "./format-CrKBELYm.js";
import { i as ExternalLink, n as Image, r as Grid3x3, t as useResourceStore_default } from "./useResourceStore-BA_lUeW6.js";
import { a as Checkbox, i as TabsTrigger, n as TabsContent, o as MessageSquare, r as TabsList, t as Tabs } from "./tabs-CipUNgWk.js";
import { n as Plus, t as Badge } from "./badge-HzaBX_Qx.js";
import { t as Trash2 } from "./trash-2-BxxcPCFu.js";
import { $ as TooltipContent, A as useFunnelStore_default, At as require_jsx_runtime, Ct as useControllableState, Dt as Primitive, E as Button, F as DialogDescription, Ht as __toESM, I as DialogFooter, It as useNavigate, L as DialogHeader, Mt as composeEventHandlers, N as Dialog, Nt as useToast, O as useDocumentStore_default, P as DialogContent, Q as Tooltip, R as DialogTitle, Rt as useSearchParams, at as X, bt as createLucideIcon, c as Label, d as SelectContent, et as TooltipTrigger, f as SelectItem, h as usePrevious, ht as Circle, it as Zap, jt as useComposedRefs, k as useTaskStore_default, kt as createContextScope, l as Textarea, m as SelectValue, ot as SquareCheckBig, p as SelectTrigger, pt as FileText, rt as cn, tt as useSize, u as Select, ut as LayoutTemplate, v as generateId, zt as require_react } from "./index-CT82mUT4.js";
import { t as ConfirmDialog } from "./ConfirmDialog-BFUyZ4s4.js";
var ArrowLeft = createLucideIcon("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]);
var CircleArrowUp = createLucideIcon("circle-arrow-up", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m16 12-4-4-4 4",
		key: "177agl"
	}],
	["path", {
		d: "M12 16V8",
		key: "1sbj14"
	}]
]);
var CircleCheckBig = createLucideIcon("circle-check-big", [["path", {
	d: "M21.801 10A10 10 0 1 1 17 3.335",
	key: "yps3ct"
}], ["path", {
	d: "m9 11 3 3L22 4",
	key: "1pflzl"
}]]);
var CreditCard = createLucideIcon("credit-card", [["rect", {
	width: "20",
	height: "14",
	x: "2",
	y: "5",
	rx: "2",
	key: "ynyp8z"
}], ["line", {
	x1: "2",
	x2: "22",
	y1: "10",
	y2: "10",
	key: "1b3vmo"
}]]);
var Diamond = createLucideIcon("diamond", [["path", {
	d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",
	key: "1f1r0c"
}]]);
var DollarSign = createLucideIcon("dollar-sign", [["line", {
	x1: "12",
	x2: "12",
	y1: "2",
	y2: "22",
	key: "7eqyqh"
}], ["path", {
	d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
	key: "1b0p4s"
}]]);
var HandHeart = createLucideIcon("hand-heart", [
	["path", {
		d: "M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",
		key: "1v1a37"
	}],
	["path", {
		d: "m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95",
		key: "fhfbnt"
	}],
	["path", {
		d: "m2 15 6 6",
		key: "10dquu"
	}],
	["path", {
		d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91",
		key: "1x6kdw"
	}]
]);
var Hand = createLucideIcon("hand", [
	["path", {
		d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",
		key: "1fvzgz"
	}],
	["path", {
		d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",
		key: "1kc0my"
	}],
	["path", {
		d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",
		key: "10h0bg"
	}],
	["path", {
		d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
		key: "1s1gnw"
	}]
]);
var Mail = createLucideIcon("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]);
var Map = createLucideIcon("map", [
	["path", {
		d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
		key: "169xi5"
	}],
	["path", {
		d: "M15 5.764v15",
		key: "1pn4in"
	}],
	["path", {
		d: "M9 3.236v15",
		key: "1uimfh"
	}]
]);
var Megaphone = createLucideIcon("megaphone", [
	["path", {
		d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
		key: "q8bfy3"
	}],
	["path", {
		d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",
		key: "1853fq"
	}],
	["path", {
		d: "M8 6v8",
		key: "15ugcq"
	}]
]);
var MessageCircle = createLucideIcon("message-circle", [["path", {
	d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
	key: "1sd12s"
}]]);
var Minus = createLucideIcon("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]);
var MousePointer2 = createLucideIcon("mouse-pointer-2", [["path", {
	d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
	key: "edeuup"
}]]);
var Pen = createLucideIcon("pen", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}]]);
var Phone = createLucideIcon("phone", [["path", {
	d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
	key: "9njp5v"
}]]);
var Settings = createLucideIcon("settings", [["path", {
	d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
	key: "1i5ecw"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
var Smartphone = createLucideIcon("smartphone", [["rect", {
	width: "14",
	height: "20",
	x: "5",
	y: "2",
	rx: "2",
	ry: "2",
	key: "1yt0o3"
}], ["path", {
	d: "M12 18h.01",
	key: "mhygvu"
}]]);
var Square = createLucideIcon("square", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}]]);
var Type = createLucideIcon("type", [
	["path", {
		d: "M12 4v16",
		key: "1654pz"
	}],
	["path", {
		d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",
		key: "e0r10z"
	}],
	["path", {
		d: "M9 20h6",
		key: "s66wpe"
	}]
]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var BLOCK_CATEGORIES = [
	{
		title: "MESSAGES",
		iconColor: "text-purple-500",
		blocks: [
			{
				type: "Email",
				icon: Mail,
				label: "Email"
			},
			{
				type: "Slack",
				icon: MessageSquare,
				label: "Slack"
			},
			{
				type: "SMS",
				icon: MessageCircle,
				label: "SMS"
			},
			{
				type: "WhatsApp",
				icon: Phone,
				label: "WATI (WhatsApp)"
			},
			{
				type: "ManyChat",
				icon: Smartphone,
				label: "ManyChat (WhatsApp)"
			}
		]
	},
	{
		title: "DELAYS",
		iconColor: "text-purple-500",
		blocks: [{
			type: "Wait",
			icon: Clock,
			label: "Wait Until"
		}]
	},
	{
		title: "PAGES",
		iconColor: "text-purple-500",
		blocks: [
			{
				type: "LandingPage",
				icon: LayoutTemplate,
				label: "Landing Page"
			},
			{
				type: "Checkout",
				icon: CreditCard,
				label: "Checkout"
			},
			{
				type: "Upsell",
				icon: CircleArrowUp,
				label: "Upsell"
			},
			{
				type: "ThankYou",
				icon: CircleCheckBig,
				label: "Thank You"
			},
			{
				type: "Form",
				icon: FileText,
				label: "Form"
			},
			{
				type: "Ad",
				icon: Megaphone,
				label: "Ad Campaign"
			}
		]
	}
];
function BlockPalette({ funnel }) {
	const onDragStart = (e, type) => {
		e.dataTransfer.setData("blockType", type);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-[260px] h-[calc(100%-2rem)] bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col overflow-hidden my-4 ml-4 z-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 overflow-y-auto p-5 no-scrollbar space-y-8",
			children: BLOCK_CATEGORIES.map((cat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 px-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-2 h-2 rotate-45 bg-current ${cat.iconColor}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-[11px] font-bold text-slate-500 tracking-widest uppercase",
						children: cat.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-1",
					children: cat.blocks.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						draggable: true,
						onDragStart: (e) => onDragStart(e, block.type),
						className: "flex items-center gap-4 p-3 hover:bg-slate-50 rounded-2xl cursor-grab active:cursor-grabbing transition-colors text-slate-700 border border-transparent hover:border-slate-100",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(block.icon, {
							size: 18,
							className: "text-slate-400 shrink-0",
							strokeWidth: 1.5
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[13px] font-medium truncate",
							children: block.label
						})]
					}, block.type))
				})]
			}, idx))
		})
	});
}
var icons = {
	Ad: Megaphone,
	LandingPage: LayoutTemplate,
	Email: Mail,
	Checkout: DollarSign,
	Upsell: HandHeart,
	Obrigado: CircleCheckBig,
	Form: FileText,
	Slack: MessageSquare,
	SMS: MessageCircle,
	WATI: MessageCircle,
	ManyChat: MessageCircle,
	WaitUntil: Clock,
	Default: Zap
};
function NodeItem({ node, selected, snapToGrid, activeTool, taskProgress, onPointerDownAction, onMove, onMoveEnd, onResize, onResizeEnd, scale, onOpenRightPanel, onOpenSettings, onToggleComplete, onDelete, onAddChild, onTextChange, onEdgeDragStart, onDropResource }) {
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const [isResizing, setIsResizing] = (0, import_react.useState)(false);
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
	const [isEditingText, setIsEditingText] = (0, import_react.useState)(false);
	const textRef = (0, import_react.useRef)(null);
	const hasAutoSelected = (0, import_react.useRef)(false);
	const [tasks, setTasks] = useTaskStore_default();
	const [funnels] = useFunnelStore_default();
	const [newTaskTitle, setNewTaskTitle] = (0, import_react.useState)("");
	const [isAddingTask, setIsAddingTask] = (0, import_react.useState)(false);
	const callbacksRef = (0, import_react.useRef)({
		onPointerDownAction,
		onMove,
		onMoveEnd,
		onResize,
		onResizeEnd
	});
	callbacksRef.current = {
		onPointerDownAction,
		onMove,
		onMoveEnd,
		onResize,
		onResizeEnd
	};
	const funnel = funnels.find((f) => f.nodes.some((n) => n.id === node.id));
	const linkedTasks = tasks.filter((t) => t.nodeId === node.id || node.data.linkedTaskIds?.includes(t.id));
	const isPanMode = activeTool === "Pan";
	const isSelectMode = activeTool === "Select";
	(0, import_react.useEffect)(() => {
		if (node.type === "FloatingText" && node.data.name === "New Text" && !hasAutoSelected.current) {
			hasAutoSelected.current = true;
			setIsEditingText(true);
			setTimeout(() => {
				if (textRef.current) {
					textRef.current.focus();
					document.execCommand("selectAll", false, void 0);
				}
			}, 0);
		}
	}, [node.type, node.data.name]);
	const handleToggleTask = (task) => {
		const newStatus = task.status === "Concluído" ? "A Fazer" : "Concluído";
		setTasks(tasks.map((t) => t.id === task.id ? {
			...t,
			status: newStatus
		} : t));
	};
	const handleDeleteTask = (taskId) => {
		setTasks(tasks.filter((t) => t.id !== taskId));
	};
	const handleAddTask = () => {
		if (!newTaskTitle.trim()) {
			setIsAddingTask(false);
			return;
		}
		const newTask = {
			id: generateId("t"),
			title: newTaskTitle.trim(),
			projectId: funnel?.projectId || null,
			funnelId: funnel?.id,
			nodeId: node.id,
			priority: "Média",
			status: "A Fazer",
			deadline: new Date(Date.now() + 864e5).toISOString()
		};
		setTasks([...tasks, newTask]);
		setNewTaskTitle("");
		setIsAddingTask(false);
	};
	const handlePointerDown = (e) => {
		if (e.button !== 0) return;
		const target = e.target;
		if (isPanMode || target.closest("button") || target.closest(".interactive-icon") || target.closest("[role=\"checkbox\"]") || target.closest("input") || target.closest(".resize-handle") || !isSelectMode) return;
		e.stopPropagation();
		target.setPointerCapture(e.pointerId);
		setIsDragging(true);
		callbacksRef.current.onPointerDownAction(e.shiftKey);
		document.body.style.userSelect = "none";
		const startX = e.clientX;
		const startY = e.clientY;
		const initialNodeX = node.x;
		const initialNodeY = node.y;
		const handlePointerMove = (moveEv) => {
			let dx = (moveEv.clientX - startX) / scale;
			let dy = (moveEv.clientY - startY) / scale;
			if (snapToGrid) {
				const snappedX = Math.round((initialNodeX + dx) / 28) * 28;
				const snappedY = Math.round((initialNodeY + dy) / 28) * 28;
				dx = snappedX - initialNodeX;
				dy = snappedY - initialNodeY;
			}
			callbacksRef.current.onMove(dx, dy);
		};
		const handlePointerUp = (upEv) => {
			try {
				target.releasePointerCapture(upEv.pointerId);
			} catch (err) {}
			setIsDragging(false);
			document.body.style.userSelect = "";
			let dx = (upEv.clientX - startX) / scale;
			let dy = (upEv.clientY - startY) / scale;
			if (snapToGrid) {
				const snappedX = Math.round((initialNodeX + dx) / 28) * 28;
				const snappedY = Math.round((initialNodeY + dy) / 28) * 28;
				dx = snappedX - initialNodeX;
				dy = snappedY - initialNodeY;
			}
			callbacksRef.current.onMoveEnd(dx, dy);
			window.removeEventListener("pointermove", handlePointerMove);
			window.removeEventListener("pointerup", handlePointerUp);
			window.removeEventListener("pointercancel", handlePointerUp);
		};
		window.addEventListener("pointermove", handlePointerMove);
		window.addEventListener("pointerup", handlePointerUp);
		window.addEventListener("pointercancel", handlePointerUp);
	};
	const handleResizeStart = (e, corner) => {
		if (e.button !== 0) return;
		e.stopPropagation();
		const target = e.target;
		target.setPointerCapture(e.pointerId);
		setIsResizing(true);
		callbacksRef.current.onPointerDownAction(e.shiftKey);
		document.body.style.userSelect = "none";
		const startX = e.clientX;
		const startY = e.clientY;
		const initialX = node.x;
		const initialY = node.y;
		const initialW = node.width || 120;
		const initialH = node.height || 120;
		const isSquare = e.shiftKey;
		const handlePointerMove = (moveEv) => {
			let dx = (moveEv.clientX - startX) / scale;
			let dy = (moveEv.clientY - startY) / scale;
			let newX = initialX;
			let newY = initialY;
			let newW = initialW;
			let newH = initialH;
			if (corner.includes("e")) newW = Math.max(20, initialW + dx);
			if (corner.includes("s")) newH = Math.max(20, initialH + dy);
			if (corner.includes("w")) {
				const mw = Math.max(20, initialW - dx);
				newX = initialX + (initialW - mw);
				newW = mw;
			}
			if (corner.includes("n")) {
				const mh = Math.max(20, initialH - dy);
				newY = initialY + (initialH - mh);
				newH = mh;
			}
			if (isSquare) {
				const size = Math.max(newW, newH);
				newW = size;
				newH = size;
			}
			if (snapToGrid) {
				newX = Math.round(newX / 28) * 28;
				newY = Math.round(newY / 28) * 28;
				newW = Math.round(newW / 28) * 28;
				newH = Math.round(newH / 28) * 28;
			}
			callbacksRef.current.onResize?.(newX, newY, newW, newH);
		};
		const handlePointerUp = (upEv) => {
			try {
				target.releasePointerCapture(upEv.pointerId);
			} catch (err) {}
			setIsResizing(false);
			document.body.style.userSelect = "";
			let dx = (upEv.clientX - startX) / scale;
			let dy = (upEv.clientY - startY) / scale;
			let newX = initialX;
			let newY = initialY;
			let newW = initialW;
			let newH = initialH;
			if (corner.includes("e")) newW = Math.max(20, initialW + dx);
			if (corner.includes("s")) newH = Math.max(20, initialH + dy);
			if (corner.includes("w")) {
				const mw = Math.max(20, initialW - dx);
				newX = initialX + (initialW - mw);
				newW = mw;
			}
			if (corner.includes("n")) {
				const mh = Math.max(20, initialH - dy);
				newY = initialY + (initialH - mh);
				newH = mh;
			}
			if (isSquare) {
				const size = Math.max(newW, newH);
				newW = size;
				newH = size;
			}
			if (snapToGrid) {
				newX = Math.round(newX / 28) * 28;
				newY = Math.round(newY / 28) * 28;
				newW = Math.round(newW / 28) * 28;
				newH = Math.round(newH / 28) * 28;
			}
			callbacksRef.current.onResizeEnd?.(newX, newY, newW, newH);
			window.removeEventListener("pointermove", handlePointerMove);
			window.removeEventListener("pointerup", handlePointerUp);
			window.removeEventListener("pointercancel", handlePointerUp);
		};
		window.addEventListener("pointermove", handlePointerMove);
		window.addEventListener("pointerup", handlePointerUp);
		window.addEventListener("pointercancel", handlePointerUp);
	};
	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const resType = e.dataTransfer.getData("resourceType");
		const resId = e.dataTransfer.getData("resourceId");
		if (resType && resId) onDropResource(resType, resId);
	};
	const getBackgroundColor = () => {
		if (node.data.isTaskMode && node.data.isCompleted) return void 0;
		const fill = node.style?.fill;
		const opacity = node.style?.opacity ?? 1;
		if (!fill || fill === "transparent") {
			if (opacity < 1) return `rgba(255, 255, 255, ${opacity})`;
			return;
		}
		if (fill.startsWith("#")) {
			let r, g, b;
			if (fill.length === 4) {
				r = parseInt(fill[1] + fill[1], 16);
				g = parseInt(fill[2] + fill[2], 16);
				b = parseInt(fill[3] + fill[3], 16);
			} else {
				r = parseInt(fill.slice(1, 3), 16);
				g = parseInt(fill.slice(3, 5), 16);
				b = parseInt(fill.slice(5, 7), 16);
			}
			return `rgba(${r}, ${g}, ${b}, ${opacity})`;
		}
		return fill;
	};
	if (node.type === "FloatingText") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("absolute top-0 left-0 pointer-events-auto min-w-[50px] p-2 z-10 group outline-none", selected && "ring-2 ring-purple-500/60 shadow-lg rounded-md", isDragging ? "opacity-95 scale-[1.02] z-50 cursor-grabbing shadow-xl ring-2 ring-purple-500/30 rounded-md" : isPanMode ? "cursor-grab" : isSelectMode ? isEditingText ? "cursor-text" : "cursor-pointer" : ""),
		style: {
			transform: `translate3d(${node.x}px, ${node.y}px, 0)`,
			color: node.style?.color || "#1e293b",
			transition: isDragging ? "none" : "transform 0.15s cubic-bezier(0.2, 0, 0, 1)"
		},
		onPointerDown: (e) => {
			if (isEditingText) {
				e.stopPropagation();
				return;
			}
			handlePointerDown(e);
		},
		onDoubleClick: (e) => {
			if (!isPanMode && isSelectMode) {
				e.stopPropagation();
				setIsEditingText(true);
				setTimeout(() => {
					textRef.current?.focus();
					const selection = window.getSelection();
					const range = document.createRange();
					range.selectNodeContents(textRef.current);
					selection?.removeAllRanges();
					selection?.addRange(range);
				}, 0);
			}
		},
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		"data-node-id": node.id,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: textRef,
				className: "font-medium text-[15px] whitespace-pre-wrap outline-none min-h-[24px] min-w-[20px]",
				contentEditable: isEditingText,
				suppressContentEditableWarning: true,
				onPointerDown: (e) => {
					if (isEditingText) e.stopPropagation();
				},
				onBlur: (e) => {
					setIsEditingText(false);
					onTextChange(e.currentTarget.textContent || "Text");
				},
				children: node.data.name
			}),
			!isPanMode && isSelectMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center cursor-crosshair z-20 group/port interactive-icon opacity-0 group-hover:opacity-100 transition-opacity",
				onPointerDown: (e) => {
					e.stopPropagation();
					onEdgeDragStart(node.id, e);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-white border-2 border-slate-200 group-hover/port:border-purple-500 group-hover/port:scale-125 transition-all shadow-sm" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("absolute -top-3 -right-3 flex items-center gap-1.5 z-20 transition-opacity", selected || isHovered ? "opacity-100" : "opacity-0 pointer-events-none"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							onDelete();
						},
						className: "interactive-icon w-7 h-7 bg-white border border-slate-100 rounded-full flex items-center justify-center text-red-400 hover:text-red-600 shadow-sm transition-transform hover:scale-110",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
							size: 13,
							strokeWidth: 2.5
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Excluir" })] })
			})
		]
	});
	if ([
		"Square",
		"Diamond",
		"Circle"
	].includes(node.type)) {
		const w = node.width || 120;
		const h = node.height || 120;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("absolute top-0 left-0 pointer-events-auto flex items-center justify-center z-10 group text-slate-700", selected && "shadow-md", isDragging || isResizing ? "opacity-95 z-50 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] cursor-grabbing scale-[1.02]" : isPanMode ? "cursor-grab" : isSelectMode ? "cursor-pointer" : ""),
			style: {
				transform: `translate3d(${node.x}px, ${node.y}px, 0)`,
				width: w,
				height: h,
				transition: isDragging || isResizing ? "none" : "transform 0.15s cubic-bezier(0.2, 0, 0, 1), width 0.15s, height 0.15s"
			},
			onPointerDown: handlePointerDown,
			onMouseEnter: () => setIsHovered(true),
			onMouseLeave: () => setIsHovered(false),
			"data-node-id": node.id,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "absolute inset-0 w-full h-full overflow-visible pointer-events-none",
					viewBox: `0 0 ${w} ${h}`,
					children: [
						node.type === "Square" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "0",
							y: "0",
							width: w,
							height: h,
							rx: 8,
							fill: node.style?.fill || "transparent",
							fillOpacity: node.style?.opacity ?? 1,
							stroke: node.style?.stroke || "#1e293b",
							strokeWidth: node.style?.strokeWidth ?? 2,
							strokeDasharray: node.style?.strokeDasharray === "none" ? void 0 : node.style?.strokeDasharray,
							className: cn("pointer-events-auto", selected && "stroke-purple-400 drop-shadow-md"),
							style: { transition: isResizing ? "none" : "all 0.15s" }
						}),
						node.type === "Circle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
							cx: w / 2,
							cy: h / 2,
							rx: w / 2,
							ry: h / 2,
							fill: node.style?.fill || "transparent",
							fillOpacity: node.style?.opacity ?? 1,
							stroke: node.style?.stroke || "#1e293b",
							strokeWidth: node.style?.strokeWidth ?? 2,
							strokeDasharray: node.style?.strokeDasharray === "none" ? void 0 : node.style?.strokeDasharray,
							className: cn("pointer-events-auto", selected && "stroke-purple-400 drop-shadow-md"),
							style: { transition: isResizing ? "none" : "all 0.15s" }
						}),
						node.type === "Diamond" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
							points: `${w / 2},0 ${w},${h / 2} ${w / 2},${h} 0,${h / 2}`,
							fill: node.style?.fill || "transparent",
							fillOpacity: node.style?.opacity ?? 1,
							stroke: node.style?.stroke || "#1e293b",
							strokeWidth: node.style?.strokeWidth ?? 2,
							strokeDasharray: node.style?.strokeDasharray === "none" ? void 0 : node.style?.strokeDasharray,
							strokeLinejoin: "round",
							className: cn("pointer-events-auto", selected && "stroke-purple-400 drop-shadow-md"),
							style: { transition: isResizing ? "none" : "all 0.15s" }
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("absolute -top-6 -right-6 flex items-center gap-1.5 z-20 transition-opacity", selected || isHovered ? "opacity-100" : "opacity-0 pointer-events-none"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: (e) => {
								e.stopPropagation();
								onDelete();
							},
							className: "interactive-icon w-7 h-7 bg-white border border-slate-100 rounded-full flex items-center justify-center text-red-400 hover:text-red-600 shadow-sm transition-transform hover:scale-110",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
								size: 13,
								strokeWidth: 2.5
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Excluir" })] })
				}),
				!isPanMode && isSelectMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center cursor-crosshair z-20 group/port interactive-icon opacity-0 group-hover:opacity-100 transition-opacity",
					onPointerDown: (e) => {
						e.stopPropagation();
						onEdgeDragStart(node.id, e);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-white border-2 border-slate-200 group-hover/port:border-purple-500 group-hover/port:scale-125 transition-all shadow-sm" })
				}),
				selected && !isPanMode && isSelectMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 w-full h-full border border-purple-500/50 pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "resize-handle nw-resize absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-purple-500 rounded-sm cursor-nwse-resize z-30",
						onPointerDown: (e) => handleResizeStart(e, "nw")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "resize-handle ne-resize absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-purple-500 rounded-sm cursor-nesw-resize z-30",
						onPointerDown: (e) => handleResizeStart(e, "ne")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "resize-handle sw-resize absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-purple-500 rounded-sm cursor-nesw-resize z-30",
						onPointerDown: (e) => handleResizeStart(e, "sw")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "resize-handle se-resize absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-purple-500 rounded-sm cursor-nwse-resize z-30",
						onPointerDown: (e) => handleResizeStart(e, "se")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "resize-handle n-resize absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border border-purple-500 rounded-sm cursor-ns-resize z-30",
						onPointerDown: (e) => handleResizeStart(e, "n")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "resize-handle s-resize absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border border-purple-500 rounded-sm cursor-ns-resize z-30",
						onPointerDown: (e) => handleResizeStart(e, "s")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "resize-handle e-resize absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border border-purple-500 rounded-sm cursor-ew-resize z-30",
						onPointerDown: (e) => handleResizeStart(e, "e")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "resize-handle w-resize absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-white border border-purple-500 rounded-sm cursor-ew-resize z-30",
						onPointerDown: (e) => handleResizeStart(e, "w")
					})
				] })
			]
		});
	}
	if (node.type === "Text") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("absolute top-0 left-0 pointer-events-auto min-w-[150px] max-w-[400px] p-4 bg-yellow-50/90 backdrop-blur-sm rounded-xl shadow-sm border border-yellow-200 text-slate-800 z-10 group", selected && "ring-2 ring-purple-500/60 shadow-md", isDragging ? "opacity-95 scale-[1.02] z-50 cursor-grabbing shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] ring-2 ring-purple-500/50" : isPanMode ? "cursor-grab" : isSelectMode ? isEditingText ? "cursor-text" : "cursor-pointer" : ""),
		style: {
			transform: `translate3d(${node.x}px, ${node.y}px, 0)`,
			transition: isDragging ? "none" : "transform 0.15s cubic-bezier(0.2, 0, 0, 1)"
		},
		onPointerDown: (e) => {
			if (isEditingText) {
				e.stopPropagation();
				return;
			}
			handlePointerDown(e);
		},
		onDoubleClick: (e) => {
			if (!isPanMode && isSelectMode) {
				e.stopPropagation();
				setIsEditingText(true);
				setTimeout(() => {
					textRef.current?.focus();
				}, 0);
			}
		},
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		"data-node-id": node.id,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: textRef,
			className: "font-medium text-[15px] whitespace-pre-wrap outline-none cursor-text",
			contentEditable: isEditingText,
			suppressContentEditableWarning: true,
			onPointerDown: (e) => {
				if (isEditingText) e.stopPropagation();
			},
			onBlur: (e) => {
				setIsEditingText(false);
				onTextChange(e.currentTarget.textContent || "Text");
			},
			children: node.data.name
		}), !isPanMode && isSelectMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center cursor-crosshair z-20 group/port interactive-icon opacity-0 group-hover:opacity-100 transition-opacity",
			onPointerDown: (e) => {
				e.stopPropagation();
				onEdgeDragStart(node.id, e);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-white border-2 border-slate-200 group-hover/port:border-purple-500 group-hover/port:scale-125 transition-all shadow-sm" })
		})]
	});
	if (node.type === "Image") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("absolute top-0 left-0 pointer-events-auto w-[300px] rounded-2xl shadow-sm border border-slate-200 bg-white z-10 overflow-hidden group", selected && "ring-4 ring-purple-500/40 border-purple-500/50 shadow-md", isDragging ? "opacity-95 scale-[1.02] z-50 cursor-grabbing shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] ring-4 ring-purple-500/50" : isPanMode ? "cursor-grab" : isSelectMode ? "cursor-pointer" : ""),
		style: {
			transform: `translate3d(${node.x}px, ${node.y}px, 0)`,
			transition: isDragging ? "none" : "transform 0.15s cubic-bezier(0.2, 0, 0, 1)"
		},
		onPointerDown: handlePointerDown,
		onDoubleClick: (e) => {
			if (!isPanMode && isSelectMode) {
				e.stopPropagation();
				onOpenRightPanel("assets");
			}
		},
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		"data-node-id": node.id,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: node.data.name,
			alt: "Canvas",
			className: "w-full h-auto object-cover pointer-events-none select-none"
		}), !isPanMode && isSelectMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center cursor-crosshair z-20 group/port interactive-icon opacity-0 group-hover:opacity-100 transition-opacity",
			onPointerDown: (e) => {
				e.stopPropagation();
				onEdgeDragStart(node.id, e);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-white border-2 border-slate-200 group-hover/port:border-purple-500 group-hover/port:scale-125 transition-all shadow-sm" })
		})]
	});
	const Icon = icons[node.type] || icons.Default;
	const circumference = 2 * Math.PI * 6;
	const strokeDashoffset = circumference - (taskProgress.total > 0 ? taskProgress.completed / taskProgress.total : 0) * circumference;
	const showTaskIcon = taskProgress.total > 0 || node.data.isTaskMode;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("absolute top-0 left-0 pointer-events-auto w-[260px] rounded-[1.25rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border p-5 z-10 flex flex-col gap-2 group select-none", isHovered && !selected && "shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-4 ring-slate-50", selected && "shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-2 ring-purple-500/40 border-purple-500/50", isDragging && "opacity-95 scale-[1.03] z-50 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] ring-2 ring-purple-500/50 border-purple-500/50", node.data.isTaskMode && node.data.isCompleted ? "bg-[#ecfdf5] border-[#bbf7d0]" : node.style?.fill && node.style.fill !== "transparent" || (node.style?.opacity ?? 1) < 1 ? "border-slate-100" : "bg-white border-slate-100"),
		style: {
			transform: `translate3d(${node.x}px, ${node.y}px, 0)`,
			transition: isDragging ? "none" : "transform 0.15s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.2s, background-color 0.3s",
			cursor: isPanMode ? "grab" : isDragging ? "grabbing" : isSelectMode ? "pointer" : "",
			backgroundColor: getBackgroundColor()
		},
		onPointerDown: handlePointerDown,
		onDoubleClick: (e) => {
			if (!isPanMode && isSelectMode) {
				e.stopPropagation();
				onOpenRightPanel("details");
			}
		},
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		onDragOver: (e) => {
			e.preventDefault();
			e.stopPropagation();
		},
		onDrop: handleDrop,
		"data-node-id": node.id,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute -top-3.5 left-4 flex items-center gap-1.5 z-20",
				children: [(node.data.linkedDocumentIds?.length ?? 0) > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "interactive-icon w-7 h-7 rounded-full bg-white border border-slate-100 text-blue-500 flex items-center justify-center shadow-sm cursor-pointer hover:scale-110 transition-transform",
						onClick: (e) => {
							e.stopPropagation();
							onOpenRightPanel("content");
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
							size: 13,
							strokeWidth: 2.5
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Ver Documentos" })] }), (node.data.linkedAssetIds?.length ?? 0) > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "interactive-icon w-7 h-7 rounded-full bg-white border border-slate-100 text-purple-500 flex items-center justify-center shadow-sm cursor-pointer hover:scale-110 transition-transform",
						onClick: (e) => {
							e.stopPropagation();
							onOpenRightPanel("assets");
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
							size: 13,
							strokeWidth: 2.5
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Ver Assets" })] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute -top-3.5 right-4 flex items-center gap-1.5 z-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex items-center gap-1.5 transition-opacity", selected || isHovered ? "opacity-100" : "opacity-0 pointer-events-none"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: (e) => {
								e.stopPropagation();
								onOpenSettings();
							},
							className: "interactive-icon w-7 h-7 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 shadow-sm transition-transform hover:scale-110",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
								size: 13,
								strokeWidth: 2.5
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Configurações" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: (e) => {
								e.stopPropagation();
								onDelete();
							},
							className: "interactive-icon w-7 h-7 bg-white border border-slate-100 rounded-full flex items-center justify-center text-red-400 hover:text-red-600 shadow-sm transition-transform hover:scale-110",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
								size: 13,
								strokeWidth: 2.5
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Excluir" })] })]
				}), showTaskIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "interactive-icon w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-100 cursor-pointer hover:scale-110 transition-transform",
						onClick: (e) => {
							e.stopPropagation();
							onOpenRightPanel("tasks");
						},
						children: taskProgress.total > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							width: "16",
							height: "16",
							className: "transform -rotate-90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "8",
								cy: "8",
								r: "6",
								stroke: "currentColor",
								strokeWidth: "2.5",
								fill: "transparent",
								className: "text-slate-100"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "8",
								cy: "8",
								r: "6",
								stroke: "currentColor",
								strokeWidth: "2.5",
								fill: "transparent",
								strokeDasharray: circumference,
								strokeDashoffset,
								className: "text-blue-500 transition-all duration-500"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, {
							size: 13,
							className: "text-slate-400",
							strokeWidth: 2.5
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Tarefas" })] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-slate-500 mb-0.5 mt-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					size: 15,
					strokeWidth: 2,
					className: "text-slate-400"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[13px] font-semibold tracking-wide text-slate-600",
					children: node.type
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-2.5",
					children: [node.data.isTaskMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-0.5",
						onPointerDown: (e) => e.stopPropagation(),
						onClick: (e) => {
							e.stopPropagation();
							onToggleComplete();
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
							checked: node.data.isCompleted,
							className: cn("rounded-[4px] border-slate-300 w-4 h-4 shadow-none", node.data.isCompleted && "data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500")
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: cn("font-bold text-slate-800 text-[15px] truncate leading-tight", node.data.isTaskMode && node.data.isCompleted && "text-slate-600 line-through decoration-slate-300"),
							children: node.data.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[13px] text-slate-400 mt-1 truncate font-medium",
							children: node.data.subtitle || "+1 filter"
						})]
					})]
				})
			}),
			node.data.isTaskMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-col gap-1.5",
				children: [
					linkedTasks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-slate-100 w-full my-1 rounded-full" }),
					linkedTasks.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-2 group/task relative pr-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								checked: task.status === "Concluído",
								onCheckedChange: () => handleToggleTask(task),
								className: "mt-0.5 w-3.5 h-3.5 rounded-[4px] border-slate-300 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-[12px] leading-tight font-medium flex-1 transition-all break-words", task.status === "Concluído" ? "text-slate-400 line-through" : "text-slate-600 group-hover/task:text-slate-800"),
								children: task.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "absolute right-0 top-0 opacity-0 group-hover/task:opacity-100 text-slate-300 hover:text-red-500 transition-opacity",
								onClick: (e) => {
									e.stopPropagation();
									handleDeleteTask(task.id);
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
							})
						]
					}, task.id)),
					isAddingTask ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1.5 mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							autoFocus: true,
							type: "text",
							value: newTaskTitle,
							onChange: (e) => setNewTaskTitle(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter") {
									e.preventDefault();
									handleAddTask();
								}
								if (e.key === "Escape") {
									setIsAddingTask(false);
									setNewTaskTitle("");
								}
							},
							onBlur: () => {
								if (newTaskTitle.trim()) handleAddTask();
								else setIsAddingTask(false);
							},
							placeholder: "Nome da tarefa...",
							className: "flex-1 text-[12px] bg-slate-50 border border-slate-200 rounded px-2 py-1 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 transition-all text-slate-700 w-full"
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: (e) => {
							e.stopPropagation();
							setIsAddingTask(true);
						},
						className: "flex items-center gap-1.5 mt-1 text-[12px] font-medium text-slate-400 hover:text-blue-500 transition-colors w-full text-left py-0.5 rounded-sm interactive-icon",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							size: 12,
							strokeWidth: 2.5
						}), "Adicionar tarefa"]
					})
				]
			}),
			!isPanMode && isSelectMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center cursor-crosshair z-20 group/port interactive-icon opacity-0 group-hover:opacity-100 transition-opacity",
				onPointerDown: (e) => {
					e.stopPropagation();
					onEdgeDragStart(node.id, e);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-white border-2 border-slate-200 group-hover/port:border-purple-500 group-hover/port:scale-125 transition-all shadow-sm" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -bottom-4 left-1/2 -translate-x-1/2 z-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: (e) => {
						e.stopPropagation();
						onAddChild();
					},
					className: "interactive-icon h-8 px-4 bg-white border border-slate-100 rounded-full shadow-sm flex items-center justify-center gap-1.5 text-slate-500 hover:text-slate-800 hover:border-slate-200 transition-all font-medium text-[12px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
						size: 12,
						strokeWidth: 2
					}), " Exit"]
				})
			})
		]
	});
}
function RightPanel({ node, funnel, defaultTab = "details", onChange, onClose }) {
	const [docs, setDocs] = useDocumentStore_default();
	const [tasks, setTasks] = useTaskStore_default();
	const [resources, setResources] = useResourceStore_default();
	const [activeTab, setActiveTab] = (0, import_react.useState)(defaultTab);
	const [inspectResource, setInspectResource] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setActiveTab(defaultTab);
	}, [defaultTab, node.id]);
	const linkedDocs = docs.filter((d) => node.data.linkedDocumentIds?.includes(d.id));
	const linkedTasks = tasks.filter((t) => t.nodeId === node.id || node.data.linkedTaskIds?.includes(t.id));
	const linkedResources = resources.filter((a) => node.data.linkedAssetIds?.includes(a.id));
	const projDocs = docs.filter((d) => d.projectId === funnel.projectId && !node.data.linkedDocumentIds?.includes(d.id));
	const projTasks = tasks.filter((t) => t.projectId === funnel.projectId && t.nodeId !== node.id && !node.data.linkedTaskIds?.includes(t.id));
	const projResources = resources.filter((a) => a.projectId === funnel.projectId && !node.data.linkedAssetIds?.includes(a.id));
	const linkResource = (type, id) => {
		const key = type === "doc" ? "linkedDocumentIds" : type === "task" ? "linkedTaskIds" : "linkedAssetIds";
		onChange({
			...node,
			data: {
				...node.data,
				[key]: [...node.data[key] || [], id]
			}
		});
		if (type === "doc") setDocs(docs.map((d) => d.id === id ? {
			...d,
			funnelId: funnel.id,
			nodeId: node.id
		} : d));
		if (type === "task") setTasks(tasks.map((t) => t.id === id ? {
			...t,
			funnelId: funnel.id,
			nodeId: node.id
		} : t));
	};
	const handleCreateTask = () => {
		const newTask = {
			id: generateId("t"),
			title: "Nova Tarefa do Nó",
			projectId: funnel.projectId,
			funnelId: funnel.id,
			nodeId: node.id,
			priority: "Média",
			status: "A Fazer",
			deadline: new Date(Date.now() + 864e5).toISOString()
		};
		setTasks([...tasks, newTask]);
		onChange({
			...node,
			data: {
				...node.data,
				linkedTaskIds: [...node.data.linkedTaskIds || [], newTask.id]
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-[500px] bg-white border-l border-slate-100 h-full flex flex-col shadow-[-10px_0_40px_rgba(0,0,0,0.05)] z-30 shrink-0 absolute right-0 top-0 bottom-0 rounded-l-[2rem]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-8 py-5 flex items-center justify-between border-b border-slate-50 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "bg-transparent text-[22px] font-bold tracking-tight text-slate-800 outline-none border-none px-0 focus:ring-0 truncate max-w-[300px]",
					value: node.data.name,
					onChange: (e) => onChange({
						...node,
						data: {
							...node.data,
							name: e.target.value
						}
					}),
					placeholder: "Node Title"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					onClick: onClose,
					className: "text-slate-400 hover:bg-slate-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				value: activeTab,
				onValueChange: setActiveTab,
				className: "flex-1 flex flex-col min-h-0 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "mx-8 mt-4 grid grid-cols-4 bg-slate-50/50 p-1 rounded-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "details",
								className: "text-xs rounded-lg",
								children: "Detalhes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "content",
								className: "text-xs rounded-lg",
								children: "Conteúdo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "tasks",
								className: "text-xs rounded-lg",
								children: "Tarefas"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "resources",
								className: "text-xs rounded-lg",
								children: "Recursos"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "details",
						className: "flex-1 overflow-auto p-8 space-y-6 m-0 border-none outline-none no-scrollbar",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-slate-50 rounded-2xl p-4 border border-slate-100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2",
								children: "Subtítulo / Lógica"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "w-full bg-transparent text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400",
								value: node.data.subtitle || "",
								onChange: (e) => onChange({
									...node,
									data: {
										...node.data,
										subtitle: e.target.value
									}
								}),
								placeholder: "+1 filter"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] font-bold text-slate-400 uppercase tracking-widest block",
								children: "Notas"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: node.data.notes || "",
								onChange: (e) => onChange({
									...node,
									data: {
										...node.data,
										notes: e.target.value
									}
								}),
								placeholder: "Adicione contexto ou notas lógicas aqui...",
								className: "min-h-[240px] bg-slate-50/50 rounded-2xl p-4 resize-none text-sm"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "content",
						className: "flex-1 overflow-auto p-8 space-y-6 m-0 border-none outline-none no-scrollbar",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									onValueChange: (val) => linkResource("doc", val),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "flex-1 bg-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Vincular Documento..." })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [projDocs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: d.id,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 14 }), d.title]
										})
									}, d.id)), projDocs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-2 text-sm text-muted-foreground text-center",
										children: "Nenhum documento"
									})] })]
								})
							}),
							linkedDocs.map((doc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 border rounded-xl p-4 bg-white shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-semibold text-slate-800 flex items-center gap-2 border-b pb-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
											size: 16,
											className: "text-blue-500"
										}),
										" ",
										doc.title
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									contentEditable: true,
									className: "min-h-[150px] outline-none text-sm text-slate-600 prose prose-sm max-w-none",
									dangerouslySetInnerHTML: { __html: doc.content },
									onBlur: (e) => setDocs(docs.map((d) => d.id === doc.id ? {
										...d,
										content: e.currentTarget.innerHTML
									} : d))
								})]
							}, doc.id)),
							linkedDocs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-center text-sm text-slate-400 py-8",
								children: "Nenhum documento vinculado."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "tasks",
						className: "flex-1 overflow-auto p-8 space-y-6 m-0 border-none outline-none no-scrollbar",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								onValueChange: (val) => linkResource("task", val),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "flex-1 bg-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Importar Tarefa..." })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [projTasks.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: t.id,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { size: 14 }), t.title]
									})
								}, t.id)), projTasks.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-2 text-sm text-muted-foreground text-center",
									children: "Nenhuma tarefa disponível"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "icon",
								onClick: handleCreateTask,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [linkedTasks.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 border rounded-xl bg-white shadow-sm flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-start",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-sm",
										children: t.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										children: t.status
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-slate-500",
									children: ["Prioridade: ", t.priority]
								})]
							}, t.id)), linkedTasks.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-center text-sm text-slate-400 py-8",
								children: "Nenhuma tarefa vinculada."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "resources",
						className: "flex-1 overflow-auto p-8 space-y-6 m-0 border-none outline-none no-scrollbar",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									onValueChange: (val) => linkResource("asset", val),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "flex-1 bg-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Vincular Recurso..." })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [projResources.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: a.id,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { size: 14 }), a.title]
										})
									}, a.id)), projResources.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-2 text-sm text-muted-foreground text-center",
										children: "Nenhum recurso disponível"
									})] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-4",
								children: linkedResources.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl overflow-hidden border bg-white shadow-sm group relative cursor-pointer",
									onClick: () => a.type === "image" && setInspectResource(a),
									children: [a.type === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: a.content,
										alt: a.title,
										className: "w-full aspect-video object-cover"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-3 text-sm text-muted-foreground line-clamp-3 aspect-video flex items-center",
										children: a.content
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-2 text-xs font-medium truncate border-t",
										children: a.title
									})]
								}, a.id))
							}),
							linkedResources.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-center text-sm text-slate-400 py-8",
								children: "Nenhum recurso vinculado."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!inspectResource,
				onOpenChange: (open) => !open && setInspectResource(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none shadow-2xl flex flex-col overflow-hidden rounded-none sm:rounded-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "sr-only",
							children: "Inspeção de Recurso"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-6 left-6 text-white font-bold text-xl z-10 drop-shadow-md",
							children: inspectResource?.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 flex items-center justify-center p-8 overflow-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: inspectResource?.content,
								alt: inspectResource?.title,
								className: "max-w-full max-h-full object-contain"
							})
						})
					]
				})
			})
		]
	});
}
var SWITCH_NAME = "Switch";
var [createSwitchContext, createSwitchScope] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSwitch, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, form, ...switchProps } = props;
	const [button, setButton] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const isFormControl = button ? form || !!button.closest("form") : true;
	const [checked, setChecked] = useControllableState({
		prop: checkedProp,
		defaultProp: defaultChecked ?? false,
		onChange: onCheckedChange,
		caller: SWITCH_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SwitchProvider, {
		scope: __scopeSwitch,
		checked,
		disabled,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "switch",
			"aria-checked": checked,
			"aria-required": required,
			"data-state": getState(checked),
			"data-disabled": disabled ? "" : void 0,
			disabled,
			value,
			...switchProps,
			ref: composedRefs,
			onClick: composeEventHandlers(props.onClick, (event) => {
				setChecked((prevChecked) => !prevChecked);
				if (isFormControl) {
					hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
					if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
				}
			})
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchBubbleInput, {
			control: button,
			bubbles: !hasConsumerStoppedPropagationRef.current,
			name,
			value,
			checked,
			required,
			disabled,
			form,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSwitch, ...thumbProps } = props;
	const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-state": getState(context.checked),
		"data-disabled": context.disabled ? "" : void 0,
		...thumbProps,
		ref: forwardedRef
	});
});
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = import_react.forwardRef(({ __scopeSwitch, control, checked, bubbles = true, ...props }, forwardedRef) => {
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(ref, forwardedRef);
	const prevChecked = usePrevious(checked);
	const controlSize = useSize(control);
	import_react.useEffect(() => {
		const input = ref.current;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
		if (prevChecked !== checked && setChecked) {
			const event = new Event("click", { bubbles });
			setChecked.call(input, checked);
			input.dispatchEvent(event);
		}
	}, [
		prevChecked,
		checked,
		bubbles
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "checkbox",
		"aria-hidden": true,
		defaultChecked: checked,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		style: {
			...props.style,
			...controlSize,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0
		}
	});
});
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
	return checked ? "checked" : "unchecked";
}
var Root = Switch$1;
var Thumb = SwitchThumb;
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	className: cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, { className: cn("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Root.displayName;
function NodeSettingsModal({ node, isOpen, onClose, onSave }) {
	const [description, setDescription] = (0, import_react.useState)("");
	const [isTaskMode, setIsTaskMode] = (0, import_react.useState)(false);
	const [docs] = useDocumentStore_default();
	const [resources] = useResourceStore_default();
	const [linkedDocs, setLinkedDocs] = (0, import_react.useState)([]);
	const [linkedAssets, setLinkedAssets] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		if (isOpen && node) {
			setDescription(node.data.description || "");
			setIsTaskMode(node.data.isTaskMode || false);
			setLinkedDocs(node.data.linkedDocumentIds || []);
			setLinkedAssets(node.data.linkedAssetIds || []);
		}
	}, [isOpen, node]);
	const handleSave = () => {
		if (node) onSave(node.id, {
			description,
			isTaskMode,
			linkedDocumentIds: linkedDocs,
			linkedAssetIds: linkedAssets
		});
	};
	if (!node) return null;
	const availableDocs = docs.filter((d) => !linkedDocs.includes(d.id));
	const availableAssets = resources.filter((a) => !linkedAssets.includes(a.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: (open) => !open && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-[480px] p-8 gap-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-xl font-bold text-slate-900 tracking-tight",
						children: "Advanced Settings"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-sm font-medium text-slate-500 mt-1",
						children: "Configure underlying logic for this node."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "description",
								className: "text-sm font-semibold text-slate-700",
								children: "Technical Description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "description",
								value: description,
								onChange: (e) => setDescription(e.target.value),
								className: "min-h-[110px] rounded-xl shadow-sm bg-white border-slate-200 focus-visible:ring-[#f95015] focus-visible:border-[#f95015] text-sm",
								placeholder: "Internal notes or technical details..."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-sm font-semibold text-slate-700",
										children: "Link Documents"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										onValueChange: (val) => setLinkedDocs([...linkedDocs, val]),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "bg-white rounded-xl border-slate-200 shadow-sm text-slate-500 h-11",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Search and select a document..." })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
											className: "rounded-xl",
											children: [availableDocs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: d.id,
												children: d.title
											}, d.id)), availableDocs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "p-3 text-sm text-muted-foreground text-center",
												children: "No documents available"
											})]
										})]
									}),
									linkedDocs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2 pt-1",
										children: linkedDocs.map((id) => {
											const d = docs.find((doc) => doc.id === id);
											if (!d) return null;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
												variant: "outline",
												className: "flex items-center gap-1.5 pl-3 pr-2 py-1.5 bg-white border-slate-200 shadow-sm rounded-full text-[13px] font-medium text-slate-600 hover:bg-slate-50 transition-colors",
												children: [d.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setLinkedDocs(linkedDocs.filter((l) => l !== id)),
													className: "text-slate-400 hover:text-slate-600 rounded-full transition-colors outline-none",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
												})]
											}, id);
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-sm font-semibold text-slate-700",
										children: "Link Assets"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										onValueChange: (val) => setLinkedAssets([...linkedAssets, val]),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "bg-white rounded-xl border-slate-200 shadow-sm text-slate-500 h-11",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Search and select an asset..." })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
											className: "rounded-xl",
											children: [availableAssets.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: a.id,
												children: a.title
											}, a.id)), availableAssets.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "p-3 text-sm text-muted-foreground text-center",
												children: "No assets available"
											})]
										})]
									}),
									linkedAssets.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2 pt-1",
										children: linkedAssets.map((id) => {
											const a = resources.find((asset) => asset.id === id);
											if (!a) return null;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
												variant: "outline",
												className: "flex items-center gap-1.5 pl-3 pr-2 py-1.5 bg-white border-slate-200 shadow-sm rounded-full text-[13px] font-medium text-slate-600 hover:bg-slate-50 transition-colors",
												children: [a.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setLinkedAssets(linkedAssets.filter((l) => l !== id)),
													className: "text-slate-400 hover:text-slate-600 rounded-full transition-colors outline-none",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
												})]
											}, id);
										})
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-row items-center justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-[15px] font-bold text-slate-800",
									children: "Task Mode"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13.5px] text-slate-500 font-medium",
									children: "Enable checklist functionality on canvas."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								checked: isTaskMode,
								onCheckedChange: setIsTaskMode,
								className: "data-[state=checked]:bg-[#f95015] shadow-sm"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "mt-8 sm:justify-end gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: onClose,
						className: "rounded-full px-6 font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: handleSave,
						className: "rounded-full px-6 font-semibold bg-[#f95015] hover:bg-[#e04812] text-white shadow-sm border-none",
						children: "Save Changes"
					})]
				})
			]
		})
	});
}
var MAX_HISTORY = 50;
function useCanvasHistory(initialFunnel) {
	const pastRef = (0, import_react.useRef)([]);
	const futureRef = (0, import_react.useRef)([]);
	const [, forceUpdate] = (0, import_react.useState)(0);
	return {
		pushState: (0, import_react.useCallback)((funnel) => {
			const snapshot = JSON.stringify({
				nodes: funnel.nodes,
				edges: funnel.edges
			});
			pastRef.current.push(snapshot);
			if (pastRef.current.length > MAX_HISTORY) pastRef.current.shift();
			futureRef.current = [];
			forceUpdate((c) => c + 1);
		}, []),
		undo: (0, import_react.useCallback)((currentFunnel, onChange) => {
			if (pastRef.current.length === 0) return;
			const currentSnapshot = JSON.stringify({
				nodes: currentFunnel.nodes,
				edges: currentFunnel.edges
			});
			futureRef.current.push(currentSnapshot);
			const prev = pastRef.current.pop();
			const parsed = JSON.parse(prev);
			onChange({
				...currentFunnel,
				nodes: parsed.nodes,
				edges: parsed.edges
			});
			forceUpdate((c) => c + 1);
		}, []),
		redo: (0, import_react.useCallback)((currentFunnel, onChange) => {
			if (futureRef.current.length === 0) return;
			const currentSnapshot = JSON.stringify({
				nodes: currentFunnel.nodes,
				edges: currentFunnel.edges
			});
			pastRef.current.push(currentSnapshot);
			const next = futureRef.current.pop();
			const parsed = JSON.parse(next);
			onChange({
				...currentFunnel,
				nodes: parsed.nodes,
				edges: parsed.edges
			});
			forceUpdate((c) => c + 1);
		}, []),
		canUndo: pastRef.current.length > 0,
		canRedo: futureRef.current.length > 0
	};
}
function useCanvasTransform(initialScale = 1, hideHeader = false) {
	const [transform, setTransform] = (0, import_react.useState)({
		x: hideHeader ? 300 : 400,
		y: 150,
		scale: initialScale
	});
	const [isPanning, setIsPanning] = (0, import_react.useState)(false);
	const lastPan = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const zoomIn = () => setTransform((p) => ({
		...p,
		scale: Math.min(3, p.scale + .1)
	}));
	const zoomOut = () => setTransform((p) => ({
		...p,
		scale: Math.max(.1, p.scale - .1)
	}));
	const resetZoom = () => setTransform({
		x: 400,
		y: 150,
		scale: 1
	});
	return {
		transform,
		setTransform,
		isPanning,
		setIsPanning,
		lastPan,
		zoomIn,
		zoomOut,
		resetZoom
	};
}
function useCanvasSelection() {
	const [selectedNodes, setSelectedNodes] = (0, import_react.useState)([]);
	const [selectedEdge, setSelectedEdge] = (0, import_react.useState)(null);
	const [selectionBox, setSelectionBox] = (0, import_react.useState)(null);
	return {
		selectedNodes,
		setSelectedNodes,
		selectedEdge,
		setSelectedEdge,
		selectionBox,
		setSelectionBox
	};
}
var getRightPortCoords = (node, x, y) => {
	const w = node.width || 120;
	const h = node.height || 120;
	if ([
		"Square",
		"Diamond",
		"Circle"
	].includes(node.type)) return {
		x: x + w,
		y: y + h / 2
	};
	if (node.type === "FloatingText") {
		const textLen = (node.data.name || "").length;
		return {
			x: x + Math.max(40, textLen * 8.5 + 16),
			y: y + 20
		};
	}
	if (node.type === "Image") return {
		x: x + 300,
		y: y + 100
	};
	if (node.type === "Text") return {
		x: x + 150,
		y: y + 30
	};
	return {
		x: x + 260,
		y: y + 44
	};
};
var getLeftPortCoords = (node, x, y) => {
	const h = node.height || 120;
	if ([
		"Square",
		"Diamond",
		"Circle"
	].includes(node.type)) return {
		x,
		y: y + h / 2
	};
	if (node.type === "FloatingText") return {
		x,
		y: y + 20
	};
	if (node.type === "Image") return {
		x,
		y: y + 100
	};
	if (node.type === "Text") return {
		x,
		y: y + 30
	};
	return {
		x,
		y: y + 44
	};
};
var getApproxBounds = (n) => {
	let w = n.width || 260;
	let h = n.height || 120;
	if (n.type === "FloatingText") {
		w = 150;
		h = 40;
	} else if (n.type === "Text") {
		w = 200;
		h = 80;
	} else if (n.type === "Image") {
		w = 300;
		h = 200;
	} else if ([
		"Square",
		"Diamond",
		"Circle"
	].includes(n.type)) {
		w = n.width || 120;
		h = n.height || 120;
	}
	return {
		x: n.x,
		y: n.y,
		w,
		h
	};
};
function CanvasBoard({ funnel, onChange, hideHeader, onBack }) {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const [tasks, setTasks] = useTaskStore_default();
	const [docs, setDocs] = useDocumentStore_default();
	const [resources, setResources] = useResourceStore_default();
	const { toast } = useToast();
	const { pushState, undo, redo } = useCanvasHistory(funnel);
	const [nodeToDelete, setNodeToDelete] = (0, import_react.useState)(null);
	const onChangeWithHistory = (0, import_react.useCallback)((newFunnel) => {
		pushState(funnel);
		onChange(newFunnel);
	}, [
		funnel,
		onChange,
		pushState
	]);
	const { selectedNodes, setSelectedNodes, selectedEdge, setSelectedEdge, selectionBox, setSelectionBox } = useCanvasSelection();
	const { transform, setTransform, isPanning, setIsPanning, lastPan, zoomIn, zoomOut, resetZoom } = useCanvasTransform(1, hideHeader);
	const [rightPanelState, setRightPanelState] = (0, import_react.useState)(null);
	const [isSpacePressed, setIsSpacePressed] = (0, import_react.useState)(false);
	const [activeTool, setActiveTool] = (0, import_react.useState)("Select");
	const [showMinimap, setShowMinimap] = (0, import_react.useState)(false);
	const [snapToGrid, setSnapToGrid] = (0, import_react.useState)(false);
	const [dragState, setDragState] = (0, import_react.useState)(null);
	const [resizingNode, setResizingNode] = (0, import_react.useState)(null);
	const [drawingEdge, setDrawingEdge] = (0, import_react.useState)(null);
	const [creatingShape, setCreatingShape] = (0, import_react.useState)(null);
	const [settingsNodeId, setSettingsNodeId] = (0, import_react.useState)(null);
	const boardRef = (0, import_react.useRef)(null);
	const targetNodeId = searchParams.get("nodeId");
	(0, import_react.useEffect)(() => {
		if (targetNodeId && funnel.nodes.length > 0) {
			const node = funnel.nodes.find((n) => n.id === targetNodeId);
			if (node && boardRef.current) {
				const rect = boardRef.current.getBoundingClientRect();
				setTransform({
					x: rect.width / 2 - node.x * 1.5 - 195,
					y: rect.height / 2 - node.y * 1.5 - 60,
					scale: 1.5
				});
				setSelectedNodes([node.id]);
				setRightPanelState({
					nodeId: node.id,
					tab: "details"
				});
				searchParams.delete("nodeId");
				setSearchParams(searchParams, { replace: true });
			}
		}
	}, [
		targetNodeId,
		funnel.nodes,
		searchParams,
		setSearchParams,
		setSelectedNodes,
		setTransform
	]);
	const handleGroupSelected = (0, import_react.useCallback)(() => {
		if (selectedNodes.length < 2) return;
		const groupId = generateId("g");
		onChangeWithHistory({
			...funnel,
			nodes: funnel.nodes.map((n) => selectedNodes.includes(n.id) ? {
				...n,
				groupId
			} : n)
		});
		toast({ title: "Elementos agrupados." });
	}, [
		funnel,
		selectedNodes,
		onChangeWithHistory,
		toast
	]);
	const handleDeleteSelected = (0, import_react.useCallback)(() => {
		if (selectedNodes.length === 0) return;
		onChangeWithHistory({
			...funnel,
			nodes: funnel.nodes.filter((n) => !selectedNodes.includes(n.id)),
			edges: funnel.edges.filter((e) => !selectedNodes.includes(e.source) && !selectedNodes.includes(e.target))
		});
		setSelectedNodes([]);
		if (rightPanelState && selectedNodes.includes(rightPanelState.nodeId)) setRightPanelState(null);
		if (settingsNodeId && selectedNodes.includes(settingsNodeId)) setSettingsNodeId(null);
	}, [
		funnel,
		selectedNodes,
		onChangeWithHistory,
		rightPanelState,
		settingsNodeId,
		setSelectedNodes
	]);
	const handleConfirmDelete = (0, import_react.useCallback)(() => {
		if (nodeToDelete === "selected") handleDeleteSelected();
		else if (nodeToDelete && nodeToDelete !== "selected") {
			onChangeWithHistory({
				...funnel,
				nodes: funnel.nodes.filter((x) => x.id !== nodeToDelete),
				edges: funnel.edges.filter((e) => e.source !== nodeToDelete && e.target !== nodeToDelete)
			});
			if (rightPanelState?.nodeId === nodeToDelete) setRightPanelState(null);
			if (settingsNodeId === nodeToDelete) setSettingsNodeId(null);
		}
		setNodeToDelete(null);
	}, [
		nodeToDelete,
		handleDeleteSelected,
		funnel,
		onChangeWithHistory,
		rightPanelState,
		settingsNodeId
	]);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target.isContentEditable) return;
			if (e.code === "Space") {
				e.preventDefault();
				setIsSpacePressed(true);
				return;
			}
			switch (e.key.toLowerCase()) {
				case "1":
				case "v":
					setActiveTool("Select");
					break;
				case "2":
					setActiveTool("Square");
					break;
				case "3":
					setActiveTool("Diamond");
					break;
				case "4":
					setActiveTool("Circle");
					break;
				case "h":
					setActiveTool("Pan");
					break;
				case "delete":
				case "backspace":
					if (selectedNodes.length > 0) setNodeToDelete("selected");
					break;
				case "g":
					if (e.ctrlKey || e.metaKey) {
						e.preventDefault();
						handleGroupSelected();
					}
					break;
				case "z":
					if (e.ctrlKey || e.metaKey) {
						e.preventDefault();
						if (e.shiftKey) redo(funnel, onChange);
						else undo(funnel, onChange);
					}
					break;
			}
		};
		const handleKeyUp = (e) => {
			if (e.code === "Space") setIsSpacePressed(false);
		};
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [
		handleDeleteSelected,
		handleGroupSelected,
		selectedNodes.length,
		undo,
		redo,
		funnel,
		onChange
	]);
	(0, import_react.useEffect)(() => {
		const handlePaste = (e) => {
			const items = e.clipboardData?.items;
			if (!items) return;
			for (let i = 0; i < items.length; i++) if (items[i].type.indexOf("image") !== -1) {
				const newAsset = {
					id: generateId("a"),
					projectId: funnel.projectId,
					title: "Pasted Image " + format(/* @__PURE__ */ new Date(), "HH:mm:ss"),
					content: "https://img.usecurling.com/p/800/600?q=wireframe&color=gray",
					type: "image",
					tags: ["pasted", "canvas"],
					folderId: null,
					isPinned: false,
					createdAt: (/* @__PURE__ */ new Date()).toISOString()
				};
				setResources((prev) => [newAsset, ...prev]);
				const newNode = {
					id: generateId("n"),
					type: "Image",
					x: -transform.x / transform.scale + 400,
					y: -transform.y / transform.scale + 200,
					data: {
						name: newAsset.content,
						status: "",
						subtitle: "",
						linkedAssetIds: [newAsset.id]
					}
				};
				onChangeWithHistory({
					...funnel,
					nodes: [...funnel.nodes, newNode]
				});
				setSelectedNodes([newNode.id]);
				toast({ title: "Imagem colada no canvas!" });
			}
		};
		window.addEventListener("paste", handlePaste);
		return () => window.removeEventListener("paste", handlePaste);
	}, [
		funnel,
		setResources,
		transform,
		onChangeWithHistory,
		setSelectedNodes,
		toast
	]);
	(0, import_react.useEffect)(() => {
		const el = boardRef.current;
		if (!el) return;
		const onWheel = (e) => {
			e.preventDefault();
			if (e.ctrlKey || e.metaKey) setTransform((prev) => {
				let newScale = prev.scale * Math.exp(e.deltaY * -.005);
				newScale = Math.min(Math.max(.1, newScale), 3);
				const rect = el.getBoundingClientRect();
				const mouseX = e.clientX - rect.left, mouseY = e.clientY - rect.top;
				return {
					x: mouseX - (mouseX - prev.x) * (newScale / prev.scale),
					y: mouseY - (mouseY - prev.y) * (newScale / prev.scale),
					scale: newScale
				};
			});
			else setTransform((prev) => ({
				...prev,
				x: prev.x - e.deltaX,
				y: prev.y - e.deltaY
			}));
		};
		el.addEventListener("wheel", onWheel, { passive: false });
		return () => el.removeEventListener("wheel", onWheel);
	}, [setTransform]);
	const handlePointerDown = (e) => {
		const isCanvasBg = e.target === boardRef.current || e.target.classList.contains("canvas-container") || e.target.tagName === "svg";
		const rect = boardRef.current?.getBoundingClientRect();
		if (!rect) return;
		const isMiddleClick = e.button === 1;
		const isSpaceRightClick = isSpacePressed && e.button === 2;
		if (activeTool === "Pan" || isMiddleClick || isSpaceRightClick) {
			setIsPanning(true);
			lastPan.current = {
				x: e.clientX,
				y: e.clientY
			};
			e.target.setPointerCapture(e.pointerId);
			document.body.style.userSelect = "none";
			return;
		}
		if (isCanvasBg && e.button === 0) {
			if ([
				"Square",
				"Diamond",
				"Circle"
			].includes(activeTool)) {
				let x = (e.clientX - rect.left - transform.x) / transform.scale;
				let y = (e.clientY - rect.top - transform.y) / transform.scale;
				if (snapToGrid) {
					x = Math.round(x / 28) * 28;
					y = Math.round(y / 28) * 28;
				}
				setCreatingShape({
					type: activeTool,
					startX: x,
					startY: y,
					currentX: x,
					currentY: y
				});
				e.target.setPointerCapture(e.pointerId);
				e.stopPropagation();
				return;
			}
			if (activeTool === "Select") {
				setSelectedNodes([]);
				setSelectedEdge(null);
				let x = (e.clientX - rect.left - transform.x) / transform.scale;
				let y = (e.clientY - rect.top - transform.y) / transform.scale;
				setSelectionBox({
					startX: x,
					startY: y,
					currentX: x,
					currentY: y
				});
				e.target.setPointerCapture(e.pointerId);
			}
		}
	};
	const handlePointerMove = (e) => {
		const rect = boardRef.current?.getBoundingClientRect();
		if (!rect) return;
		if (creatingShape) {
			let x = (e.clientX - rect.left - transform.x) / transform.scale;
			let y = (e.clientY - rect.top - transform.y) / transform.scale;
			if (snapToGrid) {
				x = Math.round(x / 28) * 28;
				y = Math.round(y / 28) * 28;
			}
			setCreatingShape((prev) => prev ? {
				...prev,
				currentX: x,
				currentY: y
			} : null);
			return;
		}
		if (selectionBox) {
			let x = (e.clientX - rect.left - transform.x) / transform.scale;
			let y = (e.clientY - rect.top - transform.y) / transform.scale;
			setSelectionBox((prev) => prev ? {
				...prev,
				currentX: x,
				currentY: y
			} : null);
			const minX = Math.min(selectionBox.startX, x);
			const maxX = Math.max(selectionBox.startX, x);
			const minY = Math.min(selectionBox.startY, y);
			const maxY = Math.max(selectionBox.startY, y);
			setSelectedNodes(funnel.nodes.filter((n) => {
				const bounds = getApproxBounds(n);
				return bounds.x < maxX && bounds.x + bounds.w > minX && bounds.y < maxY && bounds.y + bounds.h > minY;
			}).map((n) => n.id));
			return;
		}
		if (isPanning) {
			setTransform((prev) => ({
				...prev,
				x: prev.x + (e.clientX - lastPan.current.x),
				y: prev.y + (e.clientY - lastPan.current.y)
			}));
			lastPan.current = {
				x: e.clientX,
				y: e.clientY
			};
		}
	};
	const handlePointerUp = (e) => {
		if (creatingShape) {
			const width = Math.abs(creatingShape.currentX - creatingShape.startX);
			const height = Math.abs(creatingShape.currentY - creatingShape.startY);
			const x = Math.min(creatingShape.startX, creatingShape.currentX);
			const y = Math.min(creatingShape.startY, creatingShape.currentY);
			if (width > 10 && height > 10) {
				const newNodeId = generateId("n");
				onChangeWithHistory({
					...funnel,
					nodes: [...funnel.nodes, {
						id: newNodeId,
						type: creatingShape.type,
						x,
						y,
						width,
						height,
						data: {
							name: "",
							status: "",
							subtitle: ""
						},
						style: {
							fill: "transparent",
							opacity: 1,
							stroke: "#1e293b",
							strokeWidth: 2,
							strokeDasharray: "none"
						}
					}]
				});
				setSelectedNodes([newNodeId]);
			}
			setCreatingShape(null);
			setActiveTool("Select");
			try {
				e.target.releasePointerCapture(e.pointerId);
			} catch (err) {}
			return;
		}
		if (selectionBox) {
			setSelectionBox(null);
			try {
				e.target.releasePointerCapture(e.pointerId);
			} catch (err) {}
			return;
		}
		if (isPanning) {
			setIsPanning(false);
			try {
				e.target.releasePointerCapture(e.pointerId);
			} catch (err) {}
			document.body.style.userSelect = "";
		}
	};
	const handleDrop = (e) => {
		e.preventDefault();
		const type = e.dataTransfer.getData("blockType");
		if (!type) return;
		const rect = boardRef.current?.getBoundingClientRect();
		if (!rect) return;
		let x = (e.clientX - rect.left - transform.x) / transform.scale - 130;
		let y = (e.clientY - rect.top - transform.y) / transform.scale - 40;
		if (snapToGrid) {
			x = Math.round(x / 28) * 28;
			y = Math.round(y / 28) * 28;
		}
		const newNodeId = generateId("n");
		onChangeWithHistory({
			...funnel,
			nodes: [...funnel.nodes, {
				id: newNodeId,
				type,
				x,
				y,
				data: {
					name: type,
					status: "A Fazer",
					subtitle: "+1 filter"
				}
			}]
		});
		setSelectedNodes([newNodeId]);
	};
	const handleEdgeDragStart = (nodeId, e) => {
		if (e.button !== 0) return;
		const rect = boardRef.current?.getBoundingClientRect();
		if (!rect) return;
		const getCoords = (cx, cy) => ({
			x: (cx - rect.left - transform.x) / transform.scale,
			y: (cy - rect.top - transform.y) / transform.scale
		});
		const coords = getCoords(e.clientX, e.clientY);
		setDrawingEdge({
			source: nodeId,
			currentX: coords.x,
			currentY: coords.y
		});
		const onMove = (ev) => {
			const coords$1 = getCoords(ev.clientX, ev.clientY);
			setDrawingEdge((prev) => prev ? {
				...prev,
				currentX: coords$1.x,
				currentY: coords$1.y
			} : null);
		};
		const onUp = (ev) => {
			const targetNodeEl = document.elementFromPoint(ev.clientX, ev.clientY)?.closest("[data-node-id]");
			if (targetNodeEl) {
				const targetId = targetNodeEl.getAttribute("data-node-id");
				if (targetId && targetId !== nodeId && !funnel.edges.some((edge) => edge.source === nodeId && edge.target === targetId)) onChangeWithHistory({
					...funnel,
					edges: [...funnel.edges, {
						id: generateId("e"),
						source: nodeId,
						target: targetId
					}]
				});
			}
			setDrawingEdge(null);
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerup", onUp);
			window.removeEventListener("pointercancel", onUp);
		};
		window.addEventListener("pointermove", onMove);
		window.addEventListener("pointerup", onUp);
		window.addEventListener("pointercancel", onUp);
	};
	const handleAddChild = (parentId) => {
		const parent = funnel.nodes.find((n) => n.id === parentId);
		if (!parent) return;
		const newId = generateId("n");
		let newX = parent.x + 350, newY = parent.y;
		if (snapToGrid) {
			newX = Math.round(newX / 28) * 28;
			newY = Math.round(newY / 28) * 28;
		}
		onChangeWithHistory({
			...funnel,
			nodes: [...funnel.nodes, {
				id: newId,
				type: "Default",
				x: newX,
				y: newY,
				data: {
					name: "New Step",
					status: "A Fazer",
					subtitle: "+1 filter"
				}
			}],
			edges: [...funnel.edges, {
				id: generateId("e"),
				source: parentId,
				target: newId
			}]
		});
	};
	const handleAddAnnotation = (type, name) => {
		const newNodeId = generateId("n");
		onChangeWithHistory({
			...funnel,
			nodes: [...funnel.nodes, {
				id: newNodeId,
				type,
				x: -transform.x / transform.scale + 400,
				y: -transform.y / transform.scale + 200,
				data: {
					name,
					status: "",
					subtitle: ""
				},
				style: type === "Text" ? { color: "#1e293b" } : void 0
			}]
		});
		setSelectedNodes([newNodeId]);
	};
	const handleDropResource = (nodeId, type, id) => {
		const updatedNodes = funnel.nodes.map((n) => {
			if (n.id === nodeId) {
				const key = type === "document" ? "linkedDocumentIds" : type === "task" ? "linkedTaskIds" : "linkedAssetIds";
				const currentIds = n.data[key] || [];
				if (!currentIds.includes(id)) return {
					...n,
					data: {
						...n.data,
						[key]: [...currentIds, id]
					}
				};
			}
			return n;
		});
		onChangeWithHistory({
			...funnel,
			nodes: updatedNodes
		});
		if (type === "document") setDocs(docs.map((d) => d.id === id ? {
			...d,
			funnelId: funnel.id,
			nodeId
		} : d));
		else if (type === "task") setTasks(tasks.map((t) => t.id === id ? {
			...t,
			funnelId: funnel.id,
			nodeId
		} : t));
		else if (type === "asset") setResources(resources.map((a) => a.id === id ? {
			...a,
			projectId: funnel.projectId
		} : a));
	};
	const updateEdgeStyle = (styleUpdates) => {
		if (selectedEdge) onChangeWithHistory({
			...funnel,
			edges: funnel.edges.map((e) => e.id === selectedEdge ? {
				...e,
				style: {
					...e.style,
					...styleUpdates
				}
			} : e)
		});
	};
	const updateNodeStyle = (updates) => {
		if (selectedNodes.length > 0) onChangeWithHistory({
			...funnel,
			nodes: funnel.nodes.map((n) => selectedNodes.includes(n.id) ? {
				...n,
				style: {
					...n.style,
					...updates
				}
			} : n)
		});
	};
	const handleNodePointerDown = (id, shiftKey) => {
		const n = funnel.nodes.find((x) => x.id === id);
		if (!n) return;
		const groupMembers = n.groupId ? funnel.nodes.filter((x) => x.groupId === n.groupId).map((x) => x.id) : [id];
		if (!selectedNodes.includes(id)) {
			if (shiftKey) setSelectedNodes([...new Set([...selectedNodes, ...groupMembers])]);
			else setSelectedNodes(groupMembers);
			setSelectedEdge(null);
		} else if (shiftKey) setSelectedNodes(selectedNodes.filter((x) => !groupMembers.includes(x)));
	};
	const rightOffset = rightPanelState ? "right-[540px]" : "right-6";
	const canvasTools = [
		{
			id: "Select",
			icon: MousePointer2,
			label: "Select (1)",
			key: "1"
		},
		{
			id: "Pan",
			icon: Hand,
			label: "Pan (H)",
			key: "H"
		},
		{ id: "divider" },
		{
			id: "Square",
			icon: Square,
			label: "Square (2)",
			key: "2"
		},
		{
			id: "Diamond",
			icon: Diamond,
			label: "Diamond (3)",
			key: "3"
		},
		{
			id: "Circle",
			icon: Circle,
			label: "Circle (4)",
			key: "4"
		}
	];
	const isMultiSelect = selectedNodes.length > 1;
	const selectedNodeObj = selectedNodes.length > 0 ? funnel.nodes.find((n) => n.id === selectedNodes[0]) : void 0;
	const selectedEdgeObj = funnel.edges.find((e) => e.id === selectedEdge);
	const getEffectiveNode = (n) => {
		if (!n) return void 0;
		if (resizingNode?.id === n.id) return {
			...n,
			x: resizingNode.x,
			y: resizingNode.y,
			width: resizingNode.width,
			height: resizingNode.height
		};
		if (selectedNodes.includes(n.id) && dragState) return {
			...n,
			x: n.x + dragState.dx,
			y: n.y + dragState.dy
		};
		return n;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex-1 flex relative overflow-hidden bg-[#f8fafc]",
		children: [
			!hideHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-6 left-[300px] flex items-center gap-3 text-[14px] z-30 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-slate-500 font-medium cursor-pointer hover:text-slate-800 transition-colors",
						onClick: () => navigate("/canvas"),
						children: "Campaigns"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-slate-300",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-slate-800",
						children: funnel.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-slate-400 hover:text-purple-600 transition-colors ml-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, {
							size: 14,
							strokeWidth: 2
						})
					})
				]
			}),
			onBack && !hideHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				size: "sm",
				className: "absolute top-6 left-6 z-30 bg-white/90 backdrop-blur-md shadow-sm border border-slate-100 rounded-full px-4 hover:bg-white text-slate-600 hover:text-slate-900",
				onClick: onBack,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					size: 16,
					className: "mr-2"
				}), " Voltar"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("absolute left-1/2 -translate-x-1/2 flex items-center p-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-200 z-30 gap-1", hideHeader ? "top-4" : "top-6"),
				children: [
					canvasTools.map((t) => {
						if (t.id === "divider") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-6 bg-slate-200 mx-1" }, t.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "icon",
								className: cn("w-10 h-10 rounded-full transition-all relative", activeTool === t.id ? "bg-primary/10 text-primary shadow-sm" : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"),
								onClick: () => setActiveTool(t.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { size: 18 }), t.key && t.id !== "Pan" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute bottom-1 right-1.5 text-[9px] font-bold opacity-60",
									children: t.key
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: t.label })] }, t.id);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-6 bg-slate-200 mx-1" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "w-10 h-10 rounded-full text-slate-500 hover:text-slate-700",
							onClick: () => handleAddAnnotation("Text", "Add text here..."),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, { size: 18 })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Add Note" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "w-10 h-10 rounded-full text-slate-500 hover:text-slate-700",
							onClick: () => handleAddAnnotation("Image", "https://img.usecurling.com/p/400/300?q=marketing"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { size: 18 })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Add Image" })] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("absolute flex items-center p-1 bg-white/90 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-200 z-30 gap-1 transition-all duration-300", rightOffset, hideHeader ? "top-4" : "top-6"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "w-8 h-8 rounded-full text-slate-500 hover:text-slate-700 hover:bg-slate-100",
						onClick: zoomOut,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 16 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: resetZoom,
						className: "text-[13px] font-semibold text-slate-600 px-3 min-w-[3.5rem] hover:text-primary transition-colors text-center",
						children: [Math.round(transform.scale * 100), "%"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "w-8 h-8 rounded-full text-slate-500 hover:text-slate-700 hover:bg-slate-100",
						onClick: zoomIn,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("absolute bottom-6 flex items-center gap-2 z-30 transition-all duration-300", rightOffset),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setSnapToGrid(!snapToGrid),
						className: cn("w-10 h-10 flex items-center justify-center bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-full text-slate-500 hover:text-slate-700 transition-all", snapToGrid && "bg-primary/10 text-primary border-primary/20"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3x3, { size: 16 })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Snap to Grid" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setShowMinimap(!showMinimap),
						className: cn("w-10 h-10 flex items-center justify-center bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-full text-slate-500 hover:text-slate-700 transition-all", showMinimap && "bg-primary/10 text-primary border-primary/20"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map, { size: 16 })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Minimap" })] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("absolute left-0 z-20 bottom-0 flex pointer-events-none transition-all", hideHeader ? "top-0" : onBack ? "top-[72px]" : "top-6"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-auto flex h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockPalette, { funnel })
				})
			}),
			showMinimap && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("absolute bottom-20 transition-all duration-300 w-48 h-32 bg-white/90 backdrop-blur-md border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden z-30", rightOffset),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full h-full relative bg-slate-50/50",
					style: {
						transform: "scale(0.08)",
						transformOrigin: "top left"
					},
					children: [funnel.nodes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bg-slate-300 rounded-xl",
						style: {
							left: n.x,
							top: n.y,
							width: n.width || (n.type === "Text" || n.type === "Image" ? 200 : 260),
							height: n.height || 100
						}
					}, n.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute border-4 border-primary bg-primary/10 rounded-xl",
						style: {
							left: -transform.x / transform.scale,
							top: -transform.y / transform.scale,
							width: (boardRef.current?.clientWidth || 1e3) / transform.scale,
							height: (boardRef.current?.clientHeight || 800) / transform.scale
						}
					})]
				})
			}),
			(selectedNodeObj || selectedEdgeObj) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("absolute top-6 bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-slate-100 p-5 w-[280px] flex flex-col gap-6 z-40 transition-all max-h-[85vh] overflow-y-auto", rightPanelState ? "right-[540px]" : "right-6"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-between items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-[12px] font-bold text-slate-800 tracking-widest uppercase",
							children: isMultiSelect ? "MULTIPLE SELECTED" : selectedNodeObj ? selectedNodeObj.type === "FloatingText" ? "Text Style" : [
								"Square",
								"Diamond",
								"Circle"
							].includes(selectedNodeObj.type) ? "SHAPE STYLE" : "NODE STYLE" : "Line Style"
						})
					}),
					selectedNodeObj && [
						"Square",
						"Diamond",
						"Circle"
					].includes(selectedNodeObj.type) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider block",
								children: "Background Opacity"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4 items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: "0",
									max: "1",
									step: "0.05",
									className: "flex-1 accent-primary h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer",
									value: selectedNodeObj.style?.opacity ?? 1,
									onChange: (e) => updateNodeStyle({ opacity: parseFloat(e.target.value) })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[13px] font-medium text-slate-600 w-8 text-right",
									children: [Math.round((selectedNodeObj.style?.opacity ?? 1) * 100), "%"]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider block",
								children: "Fill Color"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									"transparent",
									"#f8fafc",
									"#fce7f3",
									"#f3e8ff",
									"#e0e7ff",
									"#dbeafe",
									"#d1fae5",
									"#dcfce7",
									"#fef9c3",
									"#fef08a",
									"#ffedd5",
									"#fee2e2",
									"#1e293b",
									"#64748b",
									"#ef4444",
									"#f97316",
									"#f59e0b",
									"#84cc16",
									"#10b981",
									"#06b6d4",
									"#3b82f6",
									"#6366f1",
									"#a855f7",
									"#ec4899"
								].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: cn("w-7 h-7 rounded-lg border-2 transition-transform", selectedNodeObj.style?.fill === c || c === "transparent" && !selectedNodeObj.style?.fill ? "border-slate-800 scale-110" : "border-slate-200 hover:scale-110"),
									style: {
										backgroundColor: c === "transparent" ? "#fff" : c,
										backgroundImage: c === "transparent" ? "radial-gradient(#e2e8f0 1px, transparent 0)" : "none",
										backgroundSize: "4px 4px"
									},
									onClick: () => updateNodeStyle({ fill: c })
								}, c))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider block",
								children: "Stroke Color"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									"#1e293b",
									"#64748b",
									"#ef4444",
									"#f97316",
									"#f59e0b",
									"#84cc16",
									"#10b981",
									"#06b6d4",
									"#3b82f6",
									"#6366f1",
									"#a855f7",
									"#ec4899"
								].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: cn("w-7 h-7 rounded-lg border-2 transition-transform", selectedNodeObj.style?.stroke === c || c === "#1e293b" && !selectedNodeObj.style?.stroke ? "border-slate-800 scale-110" : "border-transparent hover:scale-110"),
									style: { backgroundColor: c },
									onClick: () => updateNodeStyle({ stroke: c })
								}, c))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider block",
								children: "Stroke Width"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4 items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: "1",
									max: "8",
									step: "1",
									className: "flex-1 accent-primary h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer",
									value: selectedNodeObj.style?.strokeWidth || 2,
									onChange: (e) => updateNodeStyle({ strokeWidth: parseInt(e.target.value) })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[13px] font-medium text-slate-600 w-4 text-center",
									children: selectedNodeObj.style?.strokeWidth || 2
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider block",
								children: "Border Style"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: cn("flex-1 h-9 rounded-lg border-2 flex items-center justify-center transition-colors", selectedNodeObj.style?.strokeDasharray === "none" || !selectedNodeObj.style?.strokeDasharray ? "border-primary bg-primary/10 text-primary" : "border-slate-100 bg-white hover:bg-slate-50 text-slate-400"),
										onClick: () => updateNodeStyle({ strokeDasharray: "none" }),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "24",
											height: "2",
											className: "overflow-visible",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
												x1: "0",
												y1: "1",
												x2: "24",
												y2: "1",
												stroke: "currentColor",
												strokeWidth: "2.5"
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: cn("flex-1 h-9 rounded-lg border-2 flex items-center justify-center transition-colors", selectedNodeObj.style?.strokeDasharray === "8 8" ? "border-primary bg-primary/10 text-primary" : "border-slate-100 bg-white hover:bg-slate-50 text-slate-400"),
										onClick: () => updateNodeStyle({ strokeDasharray: "8 8" }),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "24",
											height: "2",
											className: "overflow-visible",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
												x1: "0",
												y1: "1",
												x2: "24",
												y2: "1",
												stroke: "currentColor",
												strokeWidth: "2.5",
												strokeDasharray: "6 6"
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: cn("flex-1 h-9 rounded-lg border-2 flex items-center justify-center transition-colors", selectedNodeObj.style?.strokeDasharray === "4 4" ? "border-primary bg-primary/10 text-primary" : "border-slate-100 bg-white hover:bg-slate-50 text-slate-400"),
										onClick: () => updateNodeStyle({ strokeDasharray: "4 4" }),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "24",
											height: "2",
											className: "overflow-visible",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
												x1: "0",
												y1: "1",
												x2: "24",
												y2: "1",
												stroke: "currentColor",
												strokeWidth: "2.5",
												strokeDasharray: "2 4",
												strokeLinecap: "round"
											})
										})
									})
								]
							})]
						})
					] }),
					selectedNodeObj && ![
						"FloatingText",
						"Text",
						"Image",
						"Square",
						"Diamond",
						"Circle"
					].includes(selectedNodeObj.type) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider block",
							children: "Background Opacity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: "0",
								max: "1",
								step: "0.05",
								className: "flex-1 accent-primary h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer",
								value: selectedNodeObj.style?.opacity ?? 1,
								onChange: (e) => updateNodeStyle({ opacity: parseFloat(e.target.value) })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[13px] font-medium text-slate-600 w-8 text-right",
								children: [Math.round((selectedNodeObj.style?.opacity ?? 1) * 100), "%"]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider block",
							children: "Background Color"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								"transparent",
								"#f8fafc",
								"#fce7f3",
								"#f3e8ff",
								"#e0e7ff",
								"#dbeafe",
								"#d1fae5",
								"#dcfce7",
								"#fef9c3",
								"#fef08a",
								"#ffedd5",
								"#fee2e2",
								"#1e293b",
								"#64748b",
								"#ef4444",
								"#f97316",
								"#f59e0b",
								"#84cc16",
								"#10b981",
								"#06b6d4",
								"#3b82f6",
								"#6366f1",
								"#a855f7",
								"#ec4899"
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: cn("w-7 h-7 rounded-lg border-2 transition-transform", selectedNodeObj.style?.fill === c || c === "transparent" && !selectedNodeObj.style?.fill ? "border-slate-800 scale-110" : "border-slate-200 hover:scale-110"),
								style: {
									backgroundColor: c === "transparent" ? "#fff" : c,
									backgroundImage: c === "transparent" ? "radial-gradient(#e2e8f0 1px, transparent 0)" : "none",
									backgroundSize: "4px 4px"
								},
								onClick: () => updateNodeStyle({ fill: c })
							}, c))
						})]
					})] }),
					selectedNodeObj && selectedNodeObj.type === "FloatingText" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider block",
							children: "Text Color"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								"#1e293b",
								"#64748b",
								"#ef4444",
								"#f97316",
								"#f59e0b",
								"#84cc16",
								"#10b981",
								"#06b6d4",
								"#3b82f6",
								"#6366f1",
								"#a855f7",
								"#ec4899"
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: cn("w-7 h-7 rounded-lg border-2 transition-transform", selectedNodeObj.style?.color === c || c === "#1e293b" && !selectedNodeObj.style?.color ? "border-slate-800 scale-110" : "border-transparent hover:scale-110"),
								style: { backgroundColor: c },
								onClick: () => updateNodeStyle({ color: c })
							}, c))
						})]
					}),
					selectedEdgeObj && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider block",
								children: "Stroke Style"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: cn("flex-1 h-9 rounded-lg border-2 flex items-center justify-center transition-colors", selectedEdgeObj.style?.strokeDasharray === "none" || !selectedEdgeObj.style?.strokeDasharray ? "border-primary bg-primary/10 text-primary" : "border-slate-100 bg-white hover:bg-slate-50 text-slate-400"),
										onClick: () => updateEdgeStyle({ strokeDasharray: "none" }),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "24",
											height: "2",
											className: "overflow-visible",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
												x1: "0",
												y1: "1",
												x2: "24",
												y2: "1",
												stroke: "currentColor",
												strokeWidth: "2.5"
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: cn("flex-1 h-9 rounded-lg border-2 flex items-center justify-center transition-colors", selectedEdgeObj.style?.strokeDasharray === "8 8" ? "border-primary bg-primary/10 text-primary" : "border-slate-100 bg-white hover:bg-slate-50 text-slate-400"),
										onClick: () => updateEdgeStyle({ strokeDasharray: "8 8" }),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "24",
											height: "2",
											className: "overflow-visible",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
												x1: "0",
												y1: "1",
												x2: "24",
												y2: "1",
												stroke: "currentColor",
												strokeWidth: "2.5",
												strokeDasharray: "6 6"
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: cn("flex-1 h-9 rounded-lg border-2 flex items-center justify-center transition-colors", selectedEdgeObj.style?.strokeDasharray === "4 4" ? "border-primary bg-primary/10 text-primary" : "border-slate-100 bg-white hover:bg-slate-50 text-slate-400"),
										onClick: () => updateEdgeStyle({ strokeDasharray: "4 4" }),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "24",
											height: "2",
											className: "overflow-visible",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
												x1: "0",
												y1: "1",
												x2: "24",
												y2: "1",
												stroke: "currentColor",
												strokeWidth: "2.5",
												strokeDasharray: "2 4",
												strokeLinecap: "round"
											})
										})
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider block",
								children: "Line Thickness"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4 items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: "1",
									max: "8",
									step: "1",
									className: "flex-1 accent-primary h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer",
									value: selectedEdgeObj.style?.strokeWidth || 2,
									onChange: (e) => updateEdgeStyle({ strokeWidth: parseInt(e.target.value) })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[13px] font-medium text-slate-600 w-4 text-center",
									children: selectedEdgeObj.style?.strokeWidth || 2
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider block",
								children: "Color"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									"#cbd5e1",
									"#a855f7",
									"#3b82f6",
									"#10b981",
									"#f59e0b",
									"#ef4444",
									"#1e293b"
								].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: cn("w-7 h-7 rounded-lg border-2 transition-transform", selectedEdgeObj.style?.stroke === c || c === "#cbd5e1" && !selectedEdgeObj.style?.stroke ? "border-slate-800 scale-110" : "border-transparent hover:scale-110"),
									style: { backgroundColor: c },
									onClick: () => updateEdgeStyle({ stroke: c })
								}, c))
							})]
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: boardRef,
				className: cn("flex-1 relative canvas-container overflow-hidden", isPanning ? "cursor-grabbing" : isSpacePressed || activeTool === "Pan" ? "cursor-grab" : activeTool !== "Select" ? "cursor-crosshair" : ""),
				style: {
					backgroundPosition: `${transform.x}px ${transform.y}px`,
					backgroundSize: `${28 * transform.scale}px ${28 * transform.scale}px`
				},
				onContextMenu: (e) => e.preventDefault(),
				onPointerDown: handlePointerDown,
				onPointerMove: handlePointerMove,
				onPointerUp: handlePointerUp,
				onPointerCancel: handlePointerUp,
				onPointerLeave: handlePointerUp,
				onDragOver: (e) => e.preventDefault(),
				onDrop: handleDrop,
				onDoubleClick: (e) => {
					const target = e.target;
					if ((target === boardRef.current || target.classList.contains("canvas-container") || target.tagName === "svg") && activeTool === "Select") {
						const rect = boardRef.current?.getBoundingClientRect();
						if (!rect) return;
						let x = (e.clientX - rect.left - transform.x) / transform.scale - 50;
						let y = (e.clientY - rect.top - transform.y) / transform.scale - 15;
						if (snapToGrid) {
							x = Math.round(x / 28) * 28;
							y = Math.round(y / 28) * 28;
						}
						const newNodeId = generateId("n");
						onChangeWithHistory({
							...funnel,
							nodes: [...funnel.nodes, {
								id: newNodeId,
								type: "FloatingText",
								x,
								y,
								data: {
									name: "New Text",
									status: "",
									subtitle: ""
								},
								style: { color: "#1e293b" }
							}]
						});
						setSelectedNodes([newNodeId]);
					}
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(${transform.scale})`,
						transformOrigin: "0 0"
					},
					className: "absolute inset-0 w-full h-full pointer-events-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "absolute inset-0 w-full h-full overflow-visible z-0 pointer-events-none",
						children: [
							funnel.edges.map((e) => {
								const sourceNode = getEffectiveNode(funnel.nodes.find((n) => n.id === e.source));
								const targetNode = getEffectiveNode(funnel.nodes.find((n) => n.id === e.target));
								if (!sourceNode || !targetNode) return null;
								const isSelected = selectedEdge === e.id;
								const sourceCoords = getRightPortCoords(sourceNode, sourceNode.x, sourceNode.y);
								const targetCoords = getLeftPortCoords(targetNode, targetNode.x, targetNode.y);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: `M ${sourceCoords.x} ${sourceCoords.y} C ${sourceCoords.x + 50} ${sourceCoords.y}, ${targetCoords.x - 50} ${targetCoords.y}, ${targetCoords.x} ${targetCoords.y}`,
									stroke: e.style?.stroke || (isSelected ? "#a855f7" : "#cbd5e1"),
									strokeWidth: e.style?.strokeWidth || (isSelected ? 3 : 2),
									strokeDasharray: e.style?.strokeDasharray || "none",
									fill: "none",
									className: "transition-colors cursor-pointer hover:stroke-slate-400 pointer-events-auto",
									onClick: (ev) => {
										ev.stopPropagation();
										if (activeTool === "Select") {
											setSelectedEdge(e.id);
											setSelectedNodes([]);
										}
									}
								}, e.id);
							}),
							drawingEdge && (() => {
								const sNode = funnel.nodes.find((n) => n.id === drawingEdge.source);
								if (!sNode) return null;
								const sourceCoords = getRightPortCoords(sNode, sNode.x, sNode.y);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: `M ${sourceCoords.x} ${sourceCoords.y} C ${sourceCoords.x + 50} ${sourceCoords.y}, ${drawingEdge.currentX - 50} ${drawingEdge.currentY}, ${drawingEdge.currentX} ${drawingEdge.currentY}`,
									stroke: "#a855f7",
									strokeWidth: "2",
									strokeDasharray: "4 4",
									fill: "none"
								});
							})(),
							creatingShape && (() => {
								const w = Math.abs(creatingShape.currentX - creatingShape.startX);
								const h = Math.abs(creatingShape.currentY - creatingShape.startY);
								const x = Math.min(creatingShape.startX, creatingShape.currentX);
								const y = Math.min(creatingShape.startY, creatingShape.currentY);
								if (creatingShape.type === "Square") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x,
									y,
									width: w,
									height: h,
									rx: 8,
									fill: "rgba(244, 81, 11, 0.1)",
									stroke: "#f4510b",
									strokeWidth: 2 / transform.scale,
									strokeDasharray: "4 4"
								});
								if (creatingShape.type === "Circle") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
									cx: x + w / 2,
									cy: y + h / 2,
									rx: w / 2,
									ry: h / 2,
									fill: "rgba(244, 81, 11, 0.1)",
									stroke: "#f4510b",
									strokeWidth: 2 / transform.scale,
									strokeDasharray: "4 4"
								});
								if (creatingShape.type === "Diamond") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
									points: `${x + w / 2},${y} ${x + w},${y + h / 2} ${x + w / 2},${y + h} ${x},${y + h / 2}`,
									fill: "rgba(244, 81, 11, 0.1)",
									stroke: "#f4510b",
									strokeWidth: 2 / transform.scale,
									strokeDasharray: "4 4",
									strokeLinejoin: "round"
								});
							})(),
							selectionBox && (() => {
								const w = Math.abs(selectionBox.currentX - selectionBox.startX);
								const h = Math.abs(selectionBox.currentY - selectionBox.startY);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: Math.min(selectionBox.startX, selectionBox.currentX),
									y: Math.min(selectionBox.startY, selectionBox.currentY),
									width: w,
									height: h,
									fill: "rgba(244, 81, 11, 0.08)",
									stroke: "#f4510b",
									strokeWidth: 1 / transform.scale
								});
							})()
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 w-full h-full pointer-events-none",
						children: funnel.nodes.map((n) => {
							const nodeTasks = tasks.filter((t) => n.data.linkedTaskIds?.includes(t.id));
							let total = 0;
							let completed = 0;
							nodeTasks.forEach((t) => {
								if (t.subtasks && t.subtasks.length > 0) {
									total += t.subtasks.length;
									completed += t.subtasks.filter((s) => s.isCompleted).length;
								} else {
									total += 1;
									if (t.status === "Concluído") completed += 1;
								}
							});
							const taskProgress = {
								total,
								completed
							};
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeItem, {
								node: getEffectiveNode(n),
								selected: selectedNodes.includes(n.id),
								snapToGrid,
								activeTool,
								taskProgress,
								onPointerDownAction: (shiftKey) => handleNodePointerDown(n.id, shiftKey),
								onMove: (dx, dy) => setDragState({
									isDragging: true,
									dx,
									dy
								}),
								onMoveEnd: (dx, dy) => {
									setDragState(null);
									if (dx === 0 && dy === 0) return;
									onChangeWithHistory({
										...funnel,
										nodes: funnel.nodes.map((node) => selectedNodes.includes(node.id) || node.id === n.id ? {
											...node,
											x: node.x + dx,
											y: node.y + dy
										} : node)
									});
								},
								onResize: (x, y, w, h) => setResizingNode({
									id: n.id,
									x,
									y,
									width: w,
									height: h
								}),
								onResizeEnd: (x, y, w, h) => {
									setResizingNode(null);
									onChangeWithHistory({
										...funnel,
										nodes: funnel.nodes.map((node) => node.id === n.id ? {
											...node,
											x,
											y,
											width: w,
											height: h
										} : node)
									});
								},
								onAddChild: () => handleAddChild(n.id),
								onDelete: () => {
									if (selectedNodes.includes(n.id)) setNodeToDelete("selected");
									else setNodeToDelete(n.id);
								},
								onOpenRightPanel: (tab) => setRightPanelState({
									nodeId: n.id,
									tab
								}),
								onOpenSettings: () => setSettingsNodeId(n.id),
								onToggleComplete: () => onChangeWithHistory({
									...funnel,
									nodes: funnel.nodes.map((node) => node.id === n.id ? {
										...node,
										data: {
											...node.data,
											isCompleted: !node.data.isCompleted
										}
									} : node)
								}),
								scale: transform.scale,
								onTextChange: (text) => onChangeWithHistory({
									...funnel,
									nodes: funnel.nodes.map((node) => node.id === n.id ? {
										...node,
										data: {
											...node.data,
											name: text
										}
									} : node)
								}),
								onEdgeDragStart: handleEdgeDragStart,
								onDropResource: (type, id) => handleDropResource(n.id, type, id)
							}, n.id);
						})
					})]
				})
			}),
			rightPanelState && funnel.nodes.find((n) => n.id === rightPanelState.nodeId) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RightPanel, {
				node: funnel.nodes.find((n) => n.id === rightPanelState.nodeId),
				funnel,
				defaultTab: rightPanelState.tab,
				onChange: (n) => onChangeWithHistory({
					...funnel,
					nodes: funnel.nodes.map((node) => node.id === n.id ? n : node)
				}),
				onClose: () => setRightPanelState(null)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeSettingsModal, {
				node: settingsNodeId ? funnel.nodes.find((n) => n.id === settingsNodeId) || null : null,
				isOpen: !!settingsNodeId,
				onClose: () => setSettingsNodeId(null),
				onSave: (id, updates) => {
					onChangeWithHistory({
						...funnel,
						nodes: funnel.nodes.map((n) => n.id === id ? {
							...n,
							data: {
								...n.data,
								...updates
							}
						} : n)
					});
					setSettingsNodeId(null);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				open: !!nodeToDelete,
				onOpenChange: (open) => !open && setNodeToDelete(null),
				title: "Excluir Elementos?",
				description: "Esta ação removerá os elementos selecionados do canvas. Deseja continuar?",
				confirmLabel: "Excluir",
				variant: "destructive",
				onConfirm: handleConfirmDelete
			})
		]
	});
}
export { CanvasBoard as t };

//# sourceMappingURL=CanvasBoard-DNN3M9EF.js.map