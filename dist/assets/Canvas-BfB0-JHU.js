import { t as CanvasBoard } from "./CanvasBoard-B1vAhLKY.js";
import "./useResourceStore-Wdz8_GLU.js";
import "./tabs-B_dzZeoH.js";
import "./badge-DQMkV7Mu.js";
import { A as useFunnelStore_default, At as require_jsx_runtime, Ht as __toESM, Lt as useParams } from "./index-DIapPH61.js";
import "./ConfirmDialog-elp3wNew.js";
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function Canvas() {
	const { id } = useParams();
	const [funnels, setFunnels] = useFunnelStore_default();
	const funnel = funnels.find((f) => f.id === id);
	if (!funnel) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-8 text-center text-slate-500",
		children: "Funil não encontrado."
	});
	const updateFunnel = (updated) => {
		setFunnels((prev) => prev.map((f) => f.id === id ? updated : f));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-full flex flex-col overflow-hidden animate-fade-in bg-[#f8fafc] relative",
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

//# sourceMappingURL=Canvas-BfB0-JHU.js.map