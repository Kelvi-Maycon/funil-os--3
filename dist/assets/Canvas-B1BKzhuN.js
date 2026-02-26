import { t as CanvasBoard } from "./CanvasBoard-w-y7lHr1.js";
import "./useResourceStore-CWr9M5sK.js";
import "./tabs-sUkDpIZp.js";
import { Qt as useParams, Wt as require_jsx_runtime, k as useFunnelStore_default, nn as __toESM } from "./index-CiLgJcGn.js";
import "./badge-CS60hV8p.js";
import "./ConfirmDialog-C_45wnbZ.js";
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function Canvas() {
	const { id } = useParams();
	const [funnels, setFunnels] = useFunnelStore_default();
	const funnel = funnels.find((f) => f.id === id);
	if (!funnel) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-8 text-center text-[#8C7B6C] font-bold",
		children: "Funil não encontrado."
	});
	const updateFunnel = (updated) => {
		setFunnels((prev) => prev.map((f) => f.id === id ? updated : f));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-full flex flex-col overflow-hidden animate-fade-in bg-[#FAF7F2] relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 relative flex overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CanvasBoard, {
				funnel,
				onChange: updateFunnel
			})
		})
	});
}
export { Canvas as default };

//# sourceMappingURL=Canvas-B1BKzhuN.js.map