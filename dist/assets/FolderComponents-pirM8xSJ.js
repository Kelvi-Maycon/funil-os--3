import { t as FolderPlus } from "./folder-plus-CWegSSUO.js";
import { s as LayoutGrid } from "./table-BvwpgQEA.js";
import { t as List } from "./list-CYoUqN1x.js";
import { At as composeEventHandlers, Bt as __toESM, C as Input, Dt as createContextScope, F as DialogHeader, I as DialogTitle, L as DialogTrigger, Lt as require_react, M as DialogContent, Ot as require_jsx_runtime, Tt as Primitive, a as Item, d as SelectContent, f as SelectItem, g as useDirection, j as Dialog, m as SelectValue, o as Root$1, p as SelectTrigger, s as createRovingFocusGroupScope, tt as cn, u as Select, vt as createLucideIcon, w as Button, xt as useControllableState, yt as cva } from "./index-CQZM-FFL.js";
import { a as BreadcrumbPage, i as BreadcrumbList, n as BreadcrumbItem, o as BreadcrumbSeparator, r as BreadcrumbLink, t as Breadcrumb } from "./breadcrumb-nX78nA8v.js";
var Move = createLucideIcon("move", [
	["path", {
		d: "M12 2v20",
		key: "t6zp3m"
	}],
	["path", {
		d: "m15 19-3 3-3-3",
		key: "11eu04"
	}],
	["path", {
		d: "m19 9 3 3-3 3",
		key: "1mg7y2"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}],
	["path", {
		d: "m5 9-3 3 3 3",
		key: "j64kie"
	}],
	["path", {
		d: "m9 5 3-3 3 3",
		key: "l8vdw6"
	}]
]);
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var NAME = "Toggle";
var Toggle$1 = import_react.forwardRef((props, forwardedRef) => {
	const { pressed: pressedProp, defaultPressed, onPressedChange, ...buttonProps } = props;
	const [pressed, setPressed] = useControllableState({
		prop: pressedProp,
		onChange: onPressedChange,
		defaultProp: defaultPressed ?? false,
		caller: NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-pressed": pressed,
		"data-state": pressed ? "on" : "off",
		"data-disabled": props.disabled ? "" : void 0,
		...buttonProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, () => {
			if (!props.disabled) setPressed(!pressed);
		})
	});
});
Toggle$1.displayName = NAME;
var Root = Toggle$1;
var TOGGLE_GROUP_NAME = "ToggleGroup";
var [createToggleGroupContext, createToggleGroupScope] = createContextScope(TOGGLE_GROUP_NAME, [createRovingFocusGroupScope]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var ToggleGroup$1 = import_react.forwardRef((props, forwardedRef) => {
	const { type, ...toggleGroupProps } = props;
	if (type === "single") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupImplSingle, {
		...toggleGroupProps,
		ref: forwardedRef
	});
	if (type === "multiple") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupImplMultiple, {
		...toggleGroupProps,
		ref: forwardedRef
	});
	throw new Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
});
ToggleGroup$1.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupValueProvider, useToggleGroupValueContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImplSingle = import_react.forwardRef((props, forwardedRef) => {
	const { value: valueProp, defaultValue, onValueChange = () => {}, ...toggleGroupSingleProps } = props;
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange,
		caller: TOGGLE_GROUP_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupValueProvider, {
		scope: props.__scopeToggleGroup,
		type: "single",
		value: import_react.useMemo(() => value ? [value] : [], [value]),
		onItemActivate: setValue,
		onItemDeactivate: import_react.useCallback(() => setValue(""), [setValue]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupImpl, {
			...toggleGroupSingleProps,
			ref: forwardedRef
		})
	});
});
var ToggleGroupImplMultiple = import_react.forwardRef((props, forwardedRef) => {
	const { value: valueProp, defaultValue, onValueChange = () => {}, ...toggleGroupMultipleProps } = props;
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? [],
		onChange: onValueChange,
		caller: TOGGLE_GROUP_NAME
	});
	const handleButtonActivate = import_react.useCallback((itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]), [setValue]);
	const handleButtonDeactivate = import_react.useCallback((itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)), [setValue]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupValueProvider, {
		scope: props.__scopeToggleGroup,
		type: "multiple",
		value,
		onItemActivate: handleButtonActivate,
		onItemDeactivate: handleButtonDeactivate,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupImpl, {
			...toggleGroupMultipleProps,
			ref: forwardedRef
		})
	});
});
ToggleGroup$1.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupContext$1, useToggleGroupContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeToggleGroup, disabled = false, rovingFocus = true, orientation, dir, loop = true, ...toggleGroupProps } = props;
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeToggleGroup);
	const direction = useDirection(dir);
	const commonProps = {
		role: "group",
		dir: direction,
		...toggleGroupProps
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupContext$1, {
		scope: __scopeToggleGroup,
		rovingFocus,
		disabled,
		children: rovingFocus ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
			asChild: true,
			...rovingFocusGroupScope,
			orientation,
			dir: direction,
			loop,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				...commonProps,
				ref: forwardedRef
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			...commonProps,
			ref: forwardedRef
		})
	});
});
var ITEM_NAME = "ToggleGroupItem";
var ToggleGroupItem$1 = import_react.forwardRef((props, forwardedRef) => {
	const valueContext = useToggleGroupValueContext(ITEM_NAME, props.__scopeToggleGroup);
	const context = useToggleGroupContext(ITEM_NAME, props.__scopeToggleGroup);
	const rovingFocusGroupScope = useRovingFocusGroupScope(props.__scopeToggleGroup);
	const pressed = valueContext.value.includes(props.value);
	const disabled = context.disabled || props.disabled;
	const commonProps = {
		...props,
		pressed,
		disabled
	};
	const ref = import_react.useRef(null);
	return context.rovingFocus ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		asChild: true,
		...rovingFocusGroupScope,
		focusable: !disabled,
		active: pressed,
		ref,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItemImpl, {
			...commonProps,
			ref: forwardedRef
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItemImpl, {
		...commonProps,
		ref: forwardedRef
	});
});
ToggleGroupItem$1.displayName = ITEM_NAME;
var ToggleGroupItemImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeToggleGroup, value, ...itemProps } = props;
	const valueContext = useToggleGroupValueContext(ITEM_NAME, __scopeToggleGroup);
	const singleProps = {
		role: "radio",
		"aria-checked": props.pressed,
		"aria-pressed": void 0
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle$1, {
		...valueContext.type === "single" ? singleProps : void 0,
		...itemProps,
		ref: forwardedRef,
		onPressedChange: (pressed) => {
			if (pressed) valueContext.onItemActivate(value);
			else valueContext.onItemDeactivate(value);
		}
	});
});
var Root2 = ToggleGroup$1;
var Item2 = ToggleGroupItem$1;
var toggleVariants = cva("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2", {
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
		},
		size: {
			default: "h-10 px-3 min-w-10",
			sm: "h-9 px-2.5 min-w-9",
			lg: "h-11 px-5 min-w-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Toggle = import_react.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(toggleVariants({
		variant,
		size,
		className
	})),
	...props
}));
Toggle.displayName = Root.displayName;
var ToggleGroupContext = import_react.createContext({
	size: "default",
	variant: "default"
});
var ToggleGroup = import_react.forwardRef(({ className, variant, size, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
	ref,
	className: cn("flex items-center justify-center gap-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupContext.Provider, {
		value: {
			variant,
			size
		},
		children
	})
}));
ToggleGroup.displayName = Root2.displayName;
var ToggleGroupItem = import_react.forwardRef(({ className, children, variant, size, ...props }, ref) => {
	const context = import_react.useContext(ToggleGroupContext);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		ref,
		className: cn(toggleVariants({
			variant: context.variant || variant,
			size: context.size || size
		}), className),
		...props,
		children
	});
});
ToggleGroupItem.displayName = Item2.displayName;
function ViewToggle({ view, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToggleGroup, {
		type: "single",
		value: view,
		onValueChange: (v) => v && onChange(v),
		className: "bg-card border border-border p-1 rounded-full shadow-sm h-10 gap-0 inline-flex items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem, {
			value: "grid",
			"aria-label": "Grid view",
			className: "rounded-full w-8 h-8 p-0 data-[state=on]:bg-foreground data-[state=on]:text-background text-muted-foreground hover:text-foreground transition-all",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { size: 16 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem, {
			value: "list",
			"aria-label": "List view",
			className: "rounded-full w-8 h-8 p-0 data-[state=on]:bg-foreground data-[state=on]:text-background text-muted-foreground hover:text-foreground transition-all",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { size: 16 })
		})]
	});
}
function FolderBreadcrumbs({ currentFolderId, folders, onNavigate, rootName }) {
	const path = (0, import_react.useMemo)(() => {
		const result = [];
		let current = folders.find((f) => f.id === currentFolderId);
		while (current) {
			result.unshift(current);
			current = folders.find((f) => f.id === current?.parentId);
		}
		return result;
	}, [currentFolderId, folders]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BreadcrumbList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, { children: currentFolderId === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbPage, {
		className: "font-medium text-muted-foreground",
		children: rootName
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbLink, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => onNavigate(null),
			className: "font-medium cursor-pointer text-muted-foreground",
			children: rootName
		})
	}) }), path.map((folder, index) => {
		const isLast = index === path.length - 1;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "contents",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbSeparator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, { children: isLast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbPage, { children: folder.name }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbLink, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onNavigate(folder.id),
					className: "cursor-pointer",
					children: folder.name
				})
			}) })]
		}, folder.id);
	})] }) });
}
function CreateFolderDialog({ onConfirm }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const handleSave = (e) => {
		e.preventDefault();
		if (name.trim()) {
			onConfirm(name);
			setName("");
			setOpen(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderPlus, {
					size: 16,
					className: "mr-2"
				}), " Nova Pasta"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Criar Nova Pasta" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSave,
			className: "space-y-4 pt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				placeholder: "Nome da pasta",
				value: name,
				onChange: (e) => setName(e.target.value),
				autoFocus: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "w-full",
				children: "Criar Pasta"
			})]
		})] })]
	});
}
function MoveDialog({ folders, currentFolderId, onMove }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [selected, setSelected] = (0, import_react.useState)(currentFolderId || "root");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "secondary",
				size: "icon",
				className: "h-8 w-8 hover:bg-secondary/80",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Move, {
					size: 14,
					className: "text-foreground"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Mover Item" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: selected,
					onValueChange: setSelected,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Selecione o destino" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "root",
						children: "Raiz"
					}), folders.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: f.id,
						children: f.name
					}, f.id))] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						onMove(selected === "root" ? null : selected);
						setOpen(false);
					},
					className: "w-full",
					children: "Confirmar Movimentação"
				})]
			})]
		})]
	});
}
export { ViewToggle as i, FolderBreadcrumbs as n, MoveDialog as r, CreateFolderDialog as t };

//# sourceMappingURL=FolderComponents-pirM8xSJ.js.map