import { Kt as __toESM, Nt as require_jsx_runtime, Ut as require_react, rt as cn, yt as cva } from "./index-Cnt5-p5e.js";
require_react();
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
		secondary: "border-transparent bg-muted text-muted-foreground hover:bg-muted/80",
		destructive: "border-transparent bg-danger-bg text-danger-foreground hover:bg-danger-bg/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
export { Badge as t };

//# sourceMappingURL=badge-BCThWnOt.js.map