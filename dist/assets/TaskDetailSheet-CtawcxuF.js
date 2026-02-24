import { t as format } from "./format-BaHVpoJF.js";
import { t as Ellipsis } from "./ellipsis-DfsZpBZR.js";
import { a as Checkbox, o as MessageSquare } from "./tabs-CAtJuMJx.js";
import { n as Plus, t as Badge } from "./badge-aWjYUw5E.js";
import { t as Trash2 } from "./trash-2-D7TQI2nh.js";
import { At as require_jsx_runtime, B as Primitive, Bt as __commonJSMin, C as SheetTitle, E as Button, Et as useCallbackRef, Ht as __toESM, It as useNavigate, S as SheetHeader, T as Input, Tt as useLayoutEffect2, b as Sheet, bt as createLucideIcon, d as SelectContent, f as SelectItem, ft as Folder, j as useProjectStore_default, l as Textarea, lt as Network, m as SelectValue, ot as SquareCheckBig, p as SelectTrigger, rt as cn, u as Select, v as generateId, x as SheetContent, zt as require_react } from "./index-CDA2Uori.js";
import { n as CardContent, t as Card } from "./card-CenMEb18.js";
var Calendar = createLucideIcon("calendar", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}]
]);
var Paperclip = createLucideIcon("paperclip", [["path", {
	d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
	key: "1miecu"
}]]);
var TextAlignStart = createLucideIcon("text-align-start", [
	["path", {
		d: "M21 5H3",
		key: "1fi0y6"
	}],
	["path", {
		d: "M15 12H3",
		key: "6jk70r"
	}],
	["path", {
		d: "M17 19H3",
		key: "z6ezky"
	}]
]);
var User = createLucideIcon("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function createContextScope(scopeName, createContextScopeDeps = []) {
	let defaultContexts = [];
	function createContext3(rootComponentName, defaultContext) {
		const BaseContext = import_react.createContext(defaultContext);
		BaseContext.displayName = rootComponentName + "Context";
		const index = defaultContexts.length;
		defaultContexts = [...defaultContexts, defaultContext];
		const Provider = (props) => {
			const { scope, children, ...context } = props;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const value = import_react.useMemo(() => context, Object.values(context));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
				value,
				children
			});
		};
		Provider.displayName = rootComponentName + "Provider";
		function useContext2(consumerName, scope) {
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const context = import_react.useContext(Context);
			if (context) return context;
			if (defaultContext !== void 0) return defaultContext;
			throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
		}
		return [Provider, useContext2];
	}
	const createScope = () => {
		const scopeContexts = defaultContexts.map((defaultContext) => {
			return import_react.createContext(defaultContext);
		});
		return function useScope(scope) {
			const contexts = scope?.[scopeName] || scopeContexts;
			return import_react.useMemo(() => ({ [`__scope${scopeName}`]: {
				...scope,
				[scopeName]: contexts
			} }), [scope, contexts]);
		};
	};
	createScope.scopeName = scopeName;
	return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
	const baseScope = scopes[0];
	if (scopes.length === 1) return baseScope;
	const createScope = () => {
		const scopeHooks = scopes.map((createScope2) => ({
			useScope: createScope2(),
			scopeName: createScope2.scopeName
		}));
		return function useComposedScopes(overrideScopes) {
			const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
				const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
				return {
					...nextScopes2,
					...currentScope
				};
			}, {});
			return import_react.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
		};
	};
	createScope.scopeName = baseScope.scopeName;
	return createScope;
}
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext, createProgressScope] = createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeProgress, value: valueProp = null, max: maxProp, getValueLabel = defaultGetValueLabel, ...progressProps } = props;
	if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
	const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
	if (valueProp !== null && !isValidValueNumber(valueProp, max)) console.error(getInvalidValueError(`${valueProp}`, "Progress"));
	const value = isValidValueNumber(valueProp, max) ? valueProp : null;
	const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressProvider, {
		scope: __scopeProgress,
		value,
		max,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"aria-valuemax": max,
			"aria-valuemin": 0,
			"aria-valuenow": isNumber(value) ? value : void 0,
			"aria-valuetext": valueLabel,
			role: "progressbar",
			"data-state": getProgressState(value, max),
			"data-value": value ?? void 0,
			"data-max": max,
			...progressProps,
			ref: forwardedRef
		})
	});
});
Progress$1.displayName = PROGRESS_NAME;
var INDICATOR_NAME = "ProgressIndicator";
var ProgressIndicator = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeProgress, ...indicatorProps } = props;
	const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": getProgressState(context.value, context.max),
		"data-value": context.value ?? void 0,
		"data-max": context.max,
		...indicatorProps,
		ref: forwardedRef
	});
});
ProgressIndicator.displayName = INDICATOR_NAME;
function defaultGetValueLabel(value, max) {
	return `${Math.round(value / max * 100)}%`;
}
function getProgressState(value, maxValue) {
	return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
	return typeof value === "number";
}
function isValidMaxNumber(max) {
	return isNumber(max) && !isNaN(max) && max > 0;
}
function isValidValueNumber(value, max) {
	return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
function getInvalidMaxError(propValue, componentName) {
	return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
function getInvalidValueError(propValue, componentName) {
	return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Root$1 = Progress$1;
var Indicator = ProgressIndicator;
var Progress = import_react.forwardRef(({ className, value, indicatorColor = "bg-primary", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
	ref,
	className: cn("relative h-[8px] w-full overflow-hidden rounded-full bg-border", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: cn("h-full w-full flex-1 transition-all", indicatorColor),
		style: { transform: `translateX(-${100 - (value || 0)}%)` }
	})
}));
Progress.displayName = Root$1.displayName;
/**
* @license React
* use-sync-external-store-shim.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_shim_development = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		function is(x, y) {
			return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
		}
		function useSyncExternalStore$2(subscribe$1, getSnapshot) {
			didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var value = getSnapshot();
			if (!didWarnUncachedGetSnapshot) {
				var cachedValue = getSnapshot();
				objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
			}
			cachedValue = useState$2({ inst: {
				value,
				getSnapshot
			} });
			var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
			useLayoutEffect(function() {
				inst.value = value;
				inst.getSnapshot = getSnapshot;
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			}, [
				subscribe$1,
				value,
				getSnapshot
			]);
			useEffect$1(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
				return subscribe$1(function() {
					checkIfSnapshotChanged(inst) && forceUpdate({ inst });
				});
			}, [subscribe$1]);
			useDebugValue(value);
			return value;
		}
		function checkIfSnapshotChanged(inst) {
			var latestGetSnapshot = inst.getSnapshot;
			inst = inst.value;
			try {
				var nextValue = latestGetSnapshot();
				return !objectIs(inst, nextValue);
			} catch (error) {
				return !0;
			}
		}
		function useSyncExternalStore$1(subscribe$1, getSnapshot) {
			return getSnapshot();
		}
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var React = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is, useState$2 = React.useState, useEffect$1 = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
		exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
}));
var import_shim = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_use_sync_external_store_shim_development();
})))();
function useIsHydrated() {
	return (0, import_shim.useSyncExternalStore)(subscribe, () => true, () => false);
}
function subscribe() {
	return () => {};
}
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = createContextScope(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAvatar, ...avatarProps } = props;
	const [imageLoadingStatus, setImageLoadingStatus] = import_react.useState("idle");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarProvider, {
		scope: __scopeAvatar,
		imageLoadingStatus,
		onImageLoadingStatusChange: setImageLoadingStatus,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			...avatarProps,
			ref: forwardedRef
		})
	});
});
Avatar$1.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage";
var AvatarImage$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAvatar, src, onLoadingStatusChange = () => {}, ...imageProps } = props;
	const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
	const imageLoadingStatus = useImageLoadingStatus(src, imageProps);
	const handleLoadingStatusChange = useCallbackRef((status) => {
		onLoadingStatusChange(status);
		context.onImageLoadingStatusChange(status);
	});
	useLayoutEffect2(() => {
		if (imageLoadingStatus !== "idle") handleLoadingStatusChange(imageLoadingStatus);
	}, [imageLoadingStatus, handleLoadingStatusChange]);
	return imageLoadingStatus === "loaded" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.img, {
		...imageProps,
		ref: forwardedRef,
		src
	}) : null;
});
AvatarImage$1.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAvatar, delayMs, ...fallbackProps } = props;
	const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
	const [canRender, setCanRender] = import_react.useState(delayMs === void 0);
	import_react.useEffect(() => {
		if (delayMs !== void 0) {
			const timerId = window.setTimeout(() => setCanRender(true), delayMs);
			return () => window.clearTimeout(timerId);
		}
	}, [delayMs]);
	return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...fallbackProps,
		ref: forwardedRef
	}) : null;
});
AvatarFallback$1.displayName = FALLBACK_NAME;
function resolveLoadingStatus(image, src) {
	if (!image) return "idle";
	if (!src) return "error";
	if (image.src !== src) image.src = src;
	return image.complete && image.naturalWidth > 0 ? "loaded" : "loading";
}
function useImageLoadingStatus(src, { referrerPolicy, crossOrigin }) {
	const isHydrated = useIsHydrated();
	const imageRef = import_react.useRef(null);
	const image = (() => {
		if (!isHydrated) return null;
		if (!imageRef.current) imageRef.current = new window.Image();
		return imageRef.current;
	})();
	const [loadingStatus, setLoadingStatus] = import_react.useState(() => resolveLoadingStatus(image, src));
	useLayoutEffect2(() => {
		setLoadingStatus(resolveLoadingStatus(image, src));
	}, [image, src]);
	useLayoutEffect2(() => {
		const updateStatus = (status) => () => {
			setLoadingStatus(status);
		};
		if (!image) return;
		const handleLoad = updateStatus("loaded");
		const handleError = updateStatus("error");
		image.addEventListener("load", handleLoad);
		image.addEventListener("error", handleError);
		if (referrerPolicy) image.referrerPolicy = referrerPolicy;
		if (typeof crossOrigin === "string") image.crossOrigin = crossOrigin;
		return () => {
			image.removeEventListener("load", handleLoad);
			image.removeEventListener("error", handleError);
		};
	}, [
		image,
		crossOrigin,
		referrerPolicy
	]);
	return loadingStatus;
}
var Root = Avatar$1;
var Image = AvatarImage$1;
var Fallback = AvatarFallback$1;
var Avatar = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}));
Avatar.displayName = Root.displayName;
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}));
AvatarImage.displayName = Image.displayName;
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fallback, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}));
AvatarFallback.displayName = Fallback.displayName;
var columnsConfig = [
	{
		id: "A Fazer",
		label: "To Do",
		dot: "bg-pink-500",
		bg: "bg-[#fff5f8]"
	},
	{
		id: "Em Progresso",
		label: "In Progress",
		dot: "bg-amber-500",
		bg: "bg-[#fffcf0]"
	},
	{
		id: "Em Revisão",
		label: "In Review",
		dot: "bg-blue-500",
		bg: "bg-[#f4faff]"
	},
	{
		id: "Concluído",
		label: "Done",
		dot: "bg-green-500",
		bg: "bg-[#f0fdf4]"
	}
];
var priorityConfig = {
	Baixa: {
		label: "Low",
		color: "bg-slate-100 text-slate-600 border-transparent"
	},
	Média: {
		label: "Medium",
		color: "bg-amber-100 text-amber-700 border-transparent"
	},
	Alta: {
		label: "High",
		color: "bg-red-100 text-red-700 border-transparent"
	}
};
function TasksBoard({ tasks, updateTask, onCardClick }) {
	const navigate = useNavigate();
	const [draggingId, setDraggingId] = (0, import_react.useState)(null);
	const [dragOverCol, setDragOverCol] = (0, import_react.useState)(null);
	const handleDragStart = (e, id) => {
		e.dataTransfer.setData("taskId", id);
		e.dataTransfer.effectAllowed = "move";
		const target = e.currentTarget;
		const clone = target.cloneNode(true);
		clone.style.width = `${target.offsetWidth}px`;
		clone.style.height = `${target.offsetHeight}px`;
		clone.style.position = "absolute";
		clone.style.top = "-9999px";
		clone.style.left = "-9999px";
		clone.style.opacity = "1";
		clone.style.transform = "none";
		clone.style.pointerEvents = "none";
		document.body.appendChild(clone);
		const rect = target.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		e.dataTransfer.setDragImage(clone, x, y);
		setTimeout(() => {
			document.body.removeChild(clone);
			setDraggingId(id);
		}, 0);
	};
	const handleDragEnd = () => {
		setDraggingId(null);
		setDragOverCol(null);
	};
	const handleDrop = (e, status) => {
		e.preventDefault();
		const id = e.dataTransfer.getData("taskId");
		if (id) updateTask(id, { status });
		setDraggingId(null);
		setDragOverCol(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-6 overflow-x-auto pb-4 h-full min-h-[500px] items-start no-scrollbar",
		children: columnsConfig.map((col) => {
			const colTasks = tasks.filter((t) => t.status === col.id);
			const isDragOver = dragOverCol === col.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("w-80 shrink-0 flex flex-col rounded-2xl p-4 transition-all duration-200 relative", col.bg, isDragOver && "ring-2 ring-primary/30 shadow-sm bg-opacity-80"),
				onDragOver: (e) => {
					e.preventDefault();
					e.dataTransfer.dropEffect = "move";
					if (!isDragOver) setDragOverCol(col.id);
				},
				onDrop: (e) => handleDrop(e, col.id),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-center mb-4 px-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-2 h-2 rounded-full ${col.dot}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-sm text-slate-800",
								children: col.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-slate-400 bg-white/60 rounded-full px-2 py-0.5",
								children: colTasks.length
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-slate-400 hover:text-slate-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { size: 16 })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 flex-1 overflow-y-auto min-h-[100px] pb-4 no-scrollbar",
					children: [colTasks.map((t) => {
						const pc = priorityConfig[t.priority];
						const completedSubtasks = t.subtasks?.filter((s) => s.isCompleted).length || 0;
						const totalSubtasks = t.subtasks?.length || 0;
						const progress = totalSubtasks > 0 ? Math.round(completedSubtasks / totalSubtasks * 100) : 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							draggable: true,
							onDragStart: (e) => handleDragStart(e, t.id),
							onDragEnd: handleDragEnd,
							onClick: () => onCardClick(t),
							className: cn("cursor-grab active:cursor-grabbing shadow-sm rounded-xl bg-card relative overflow-hidden", draggingId === t.id ? "opacity-40 border-primary/40 border-dashed shadow-none ring-0" : "opacity-100 border-transparent hover:shadow-md hover:border-primary/20 transition-shadow transition-colors"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute left-0 top-0 bottom-0 w-1 rounded-l-xl", t.priority === "Alta" && "bg-red-500", t.priority === "Média" && "bg-amber-500", t.priority === "Baixa" && "bg-slate-300") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "p-4 flex flex-col gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-start",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: `font-medium ${pc.color}`,
											children: pc.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "text-slate-300 hover:text-slate-500",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { size: 14 })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-slate-800 text-sm leading-snug",
										children: t.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 mt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-[11px] font-medium text-slate-400",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Progress" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [progress, "%"] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
											value: progress,
											className: "h-1.5 bg-slate-100"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center mt-3 pt-3 border-t border-slate-50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex -space-x-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar, {
												className: "w-6 h-6 border-2 border-white",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, { src: t.avatar }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
													className: "text-[10px] bg-slate-200 text-slate-600",
													children: t.assignee?.[0] || "U"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-6 h-6 rounded-full border-2 border-white bg-white flex items-center justify-center text-slate-400 border-dashed",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 10 })
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3 text-xs text-slate-400 font-medium",
											children: [
												t.funnelId && t.nodeId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "text-purple-600 hover:text-purple-700 bg-purple-50 p-1.5 rounded-md transition-colors",
													onClick: (e) => {
														e.stopPropagation();
														navigate(`/canvas/${t.funnelId}?nodeId=${t.nodeId}`);
													},
													title: "Ver no Canvas",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { size: 12 })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { size: 12 }), t.attachmentCount || 0]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { size: 12 }), t.comments?.length || 0]
												})
											]
										})]
									})
								]
							})]
						}, t.id);
					}), isDragOver && draggingId && !colTasks.find((t) => t.id === draggingId) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-32 rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 animate-fade-in transition-all flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium text-primary/50",
							children: "Drop task here"
						})
					})]
				})]
			}, col.id);
		})
	});
}
function TaskDetailSheet({ task, onClose, onUpdate }) {
	const [localTask, setLocalTask] = (0, import_react.useState)(null);
	const [projects] = useProjectStore_default();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (task) setLocalTask(task);
	}, [task]);
	if (!localTask) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: !!task,
		onOpenChange: () => onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
			className: "w-full sm:max-w-xl p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {})
		})
	});
	const handleUpdate = (updates) => {
		setLocalTask({
			...localTask,
			...updates
		});
		onUpdate(localTask.id, updates);
	};
	const addSubtask = () => {
		const newSt = {
			id: generateId("st"),
			title: "",
			isCompleted: false
		};
		handleUpdate({ subtasks: [...localTask.subtasks || [], newSt] });
	};
	const toggleSubtask = (id) => {
		handleUpdate({ subtasks: localTask.subtasks?.map((st) => st.id === id ? {
			...st,
			isCompleted: !st.isCompleted
		} : st) });
	};
	const updateSubtaskTitle = (id, title) => {
		handleUpdate({ subtasks: localTask.subtasks?.map((st) => st.id === id ? {
			...st,
			title
		} : st) });
	};
	const removeSubtask = (id) => {
		handleUpdate({ subtasks: localTask.subtasks?.filter((st) => st.id !== id) });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: !!task,
		onOpenChange: (open) => !open && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			className: "w-full sm:max-w-xl p-0 flex flex-col gap-0 border-l",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
				className: "px-6 py-4 border-b flex flex-row items-center justify-between gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
						className: "sr-only",
						children: "Task Details"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: localTask.title,
						onChange: (e) => handleUpdate({ title: e.target.value }),
						className: "text-xl font-bold border-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none -ml-2 flex-1"
					}),
					localTask.funnelId && localTask.nodeId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => {
							onClose();
							navigate(`/canvas/${localTask.funnelId}?nodeId=${localTask.nodeId}`);
						},
						className: "text-purple-600 border-purple-200 bg-purple-50 hover:bg-purple-100 shrink-0 mr-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, {
							size: 14,
							className: "mr-1.5"
						}), " Ver no Canvas"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-medium text-muted-foreground flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 14 }), " Assignee"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 mt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar, {
										className: "w-6 h-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, { src: localTask.avatar }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: localTask.assignee?.[0] || "U" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: localTask.assignee || "",
										onChange: (e) => handleUpdate({ assignee: e.target.value }),
										placeholder: "Assign someone",
										className: "h-8 border-transparent px-1 focus-visible:ring-1"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-medium text-muted-foreground flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 14 }), " Deadline"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "date",
									value: localTask.deadline ? format(new Date(localTask.deadline), "yyyy-MM-dd") : "",
									onChange: (e) => handleUpdate({ deadline: new Date(e.target.value).toISOString() }),
									className: "h-8 border-transparent px-1 focus-visible:ring-1"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground",
									children: "Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: localTask.status,
									onValueChange: (val) => handleUpdate({ status: val }),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "h-8",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Status" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "A Fazer",
											children: "To Do"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Em Progresso",
											children: "In Progress"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Em Revisão",
											children: "In Review"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Concluído",
											children: "Done"
										})
									] })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground",
									children: "Priority"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: localTask.priority,
									onValueChange: (val) => handleUpdate({ priority: val }),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "h-8",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Priority" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Baixa",
											children: "Low"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Média",
											children: "Medium"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Alta",
											children: "High"
										})
									] })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1 col-span-2 mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-medium text-muted-foreground flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { size: 14 }), " Project"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: localTask.projectId || "none",
									onValueChange: (val) => handleUpdate({ projectId: val === "none" ? null : val }),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "h-8",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Assign to Project" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "none",
										children: "None (Draft)"
									}), projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: p.id,
										children: p.name
									}, p.id))] })]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "text-sm font-semibold flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAlignStart, { size: 16 }), " Description"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: localTask.description || "",
							onChange: (e) => handleUpdate({ description: e.target.value }),
							placeholder: "Add a more detailed description...",
							className: "min-h-[100px] resize-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "text-sm font-semibold flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { size: 16 }), " Subtasks"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: addSubtask,
								className: "h-8 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
									size: 14,
									className: "mr-1"
								}), " Add"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [localTask.subtasks?.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3 group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										checked: st.isCompleted,
										onCheckedChange: () => toggleSubtask(st.id),
										className: "mt-1.5"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: st.title,
										onChange: (e) => updateSubtaskTitle(st.id, e.target.value),
										placeholder: "Subtask title",
										className: `h-8 border-transparent focus-visible:ring-1 ${st.isCompleted ? "line-through text-muted-foreground" : ""}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon",
										className: "h-8 w-8 opacity-0 group-hover:opacity-100 shrink-0 text-destructive",
										onClick: () => removeSubtask(st.id),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 14 })
									})
								]
							}, st.id)), (!localTask.subtasks || localTask.subtasks.length === 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground italic",
								children: "No subtasks added yet."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 pt-4 border-t",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "text-sm font-semibold flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { size: 16 }), " Activity"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4",
								children: localTask.comments?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar, {
										className: "w-8 h-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, { src: c.avatar }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: c.author[0] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-sm",
												children: c.author
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-muted-foreground",
												children: format(new Date(c.createdAt), "MMM dd, HH:mm")
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm bg-muted/50 p-3 rounded-xl rounded-tl-none",
											children: c.content
										})]
									})]
								}, c.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
									className: "w-8 h-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "Me" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										placeholder: "Write a comment...",
										className: "min-h-[80px] resize-none pb-12"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										className: "absolute bottom-2 right-2 h-8",
										children: "Save"
									})]
								})]
							})
						]
					})
				]
			})]
		})
	});
}
export { AvatarImage as a, AvatarFallback as i, TasksBoard as n, Paperclip as o, Avatar as r, TaskDetailSheet as t };

//# sourceMappingURL=TaskDetailSheet-CtawcxuF.js.map