var ue = Object.defineProperty;
var fe = (e, n, o) => n in e ? ue(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o;
var D = (e, n, o) => fe(e, typeof n != "symbol" ? n + "" : n, o);
import { appendBuildTimestamp as p, preloadManifest as z } from "./manifestLoader.js?t=1788405500779";
const A = {
  WORD: 1,
  EXCEL: 2,
  PPT: 3
}, de = "FILE_READ_ERROR", Ee = "FILE_TYPE_ERROR", _e = "FILE_UNKNOWN_ERROR", V = "ASK_FILE_PASSWORD", q = "FILE_PASSWORD_ERROR", Z = "FILE_PASSWORD_OK", me = "LE", X = "DOCUMENT_EXPORT_READY", b = "UNDO_REDO_STATE_CHANGE", g = "DOCUMENT_EDITING_ENABLED", F = "DOCUMENT_EDITING_DISABLED", R = "SEE", j = "ASK_UPLOAD_BINARY", Oe = "DOCX_PAGE_POSITION_CHANGE", De = "DOCX_FIRST_PART_LOADING", he = "DOCX_PART_LOADING", Ce = "DOCX_END_LOADING", ye = "DOCX_ZOOM_CHANGE", Ne = "DOCX_OPEN_FIND_UI", Se = "DOCX_OUTLINE_CHANGE", Ie = "DOCX_OUTLINE_SELECTION_CHANGE", Le = "DOCX_PAGE_THUMBNAIL_CHANGE", Re = "XLSX_WORKSHEET_LOADED", Pe = "XLSX_WORKSHEET_CHANGE", Ae = "XLSX_END_LOADING", Te = "XLSX_EDITING_STATUS_CHANGE", we = "XLSX_ZOOM_CHANGE", Ue = "XLSX_OPEN_FIND_UI", Xe = "XLSX_WORKSHEET_LOADING_RATIO", be = "XLSX_FIRST_PART_LOADING", ge = "ASK_XLSX_SHEET_DELETE", Fe = "XLSX_FILTER_COLUMN_CLICK", Ge = "XLSX_FILL_RANGE_INFO", Me = "XLSX_TABLE_PROPERTY_UNDO_REDO_CHANGED", ke = "XLSX_TABLE_STYLE_PROPERTY_UNDO_REDO_CHANGED", Be = "PPTX_LAYOUT_SET_CHANGE", He = "PPTX_SECTION_SET_CHANGE", We = "PPTX_SLIDE_MASTER_STATE_CHANGE", $e = "PPTX_SLIDE_MASTER_UPDATE_PRESERVE", ve = "PPTX_OPEN_FIND_UI", G = "SELECTION_CHANGE", M = "EDITOR_INTERACTION", Ke = "Drawing_Selection_Changed", Ye = "VIEW_CHANGE", xe = "DOCUMENT_READY", pe = "PPTX_SLIDES_CHANGED", ze = "PPTX_ZOOM_CHANGE", Ve = "PPTX_START_LOADING", qe = "PPTX_FIRST_PAGE_LOADED", Ze = "COMMENT_UPDATE", je = "PPTX_CHECKALL_COMMENT";
function Je(e, n) {
  const o = [], t = (d, f, E) => {
    d.addEventListener(f, E), o.push(() => d.removeEventListener(f, E));
  };
  let r = e.Document;
  t(r, X, () => {
    a("ExportReady", void 0, n);
  }), t(r, Oe, () => {
    a("PagePositionChange", void 0, n);
  }), t(r, De, () => {
    a("DocumentReady", void 0, n);
  }), t(r, Ce, (d) => {
    a("LoadAllPageEnd", { count: d }, n);
  }), t(r, ye, () => {
    a("ZoomChange", void 0, n);
  }), t(r, he, (d, f) => {
    const E = Math.trunc(f * 100);
    a("DocumentLoading", { pageIndex: d, formatRatio: E }, n);
  }), t(r, g, () => {
    a("EditorEnable", void 0, n);
  }), t(r, F, () => {
    a("EditorDisable", void 0, n);
  }), t(r, R, (d) => {
    a("SecurityError", { action: d }, n);
  }), t(r, R, (d) => {
    a("SecurityError", { action: d }, n);
  }), t(r, M, (d, f, E) => {
    a("EditorInteraction", { trigger: d, x: f, y: E }, n);
  });
  let u = e.Finder;
  t(u, Ne, () => {
    a("OpenFindDialog", void 0, n);
  });
  let s = e.Selection;
  t(s, G, (d) => {
    a("SelectionChange", d, n);
  });
  let c = e.UndoRedo;
  t(c, b, () => {
    a("UndoRedoChange", void 0, n);
  });
  let l = e.Outline;
  t(l, Se, (d) => {
    a("OutlineChange", { action: d }, n);
  }), t(l, Ie, (d) => {
    a("OutlineSelectionChange", { currentParaId: d }, n);
  });
  let i = e.Thumbnail;
  return t(i, Le, (d) => {
    a("ThumbnailChange", { action: d }, n);
  }), () => o.forEach((d) => d());
}
function Qe(e, n) {
  const o = [], t = (f, E, O) => {
    f.addEventListener(E, O), o.push(() => f.removeEventListener(E, O));
  };
  let r = e.Document;
  t(r, xe, () => {
    a("DocumentReady", void 0, n);
  }), t(r, X, () => {
    a("ExportReady", void 0, n);
  }), t(r, ze, (f) => {
    a("ZoomChange", void 0, n);
  }), t(r, pe, (f, E, O) => {
    a("CurrentPage", { currentPage: f }, n), a("PageCount", { totalPages: E, slideShow: O }, n);
  }), t(r, Ve, () => {
  }), t(r, qe, () => {
    a("FirstPageLoaded", void 0, n);
  }), t(r, g, () => {
    a("EditorEnable", void 0, n);
  }), t(r, F, () => {
    a("EditorDisable", void 0, n);
  }), t(r, R, (f) => {
    a("SecurityError", { action: f }, n);
  }), t(r, Be, (f) => {
    a("LayoutSetChange", { enabled: f }, n);
  }), t(r, He, (f) => {
    a("SectionSetChange", { state: f }, n);
  }), t(r, M, (f, E, O) => {
    a("EditorInteraction", { trigger: f, x: E, y: O }, n);
  });
  let u = e.UndoRedo;
  t(u, b, () => {
    a("UndoRedoChange", void 0, n);
  });
  let s = e.Selection;
  t(s, G, (f) => {
    a("SelectionChange", f, n);
  });
  let c = e.View;
  t(c, Ye, (f) => {
    a("ViewChange", f, n);
  });
  let l = e.Master;
  t(l, We, (f) => {
    a("SlideMasterStateChange", f, n);
  }), t(l, $e, (f) => {
    a("SlideMasterUpdatePreserve", f, n);
  });
  let i = e.Comment;
  t(i, Ze, (f) => {
    a("CommentUpdate", f, n);
  }), t(i, je, (f) => {
    a("CheckAllComments", { info: f }, n);
  }), t(r, j, (f) => new Promise((E, O) => {
    a("UploadImage", { info: f, resolve: E, reject: O }, n);
  }));
  let d = e.Finder;
  return t(d, ve, () => {
    a("OpenFindDialog", void 0, n);
  }), () => o.forEach((f) => f());
}
function en(e, n) {
  const o = [], t = (l, i, d) => {
    l.addEventListener(i, d), o.push(() => l.removeEventListener(i, d));
  };
  let r = e.Document;
  t(r, X, () => {
    a("ExportReady", void 0, n);
  }), t(r, Re, () => {
    a("WorksheetLoaded", void 0, n);
  }), t(r, Ae, () => {
    a("EndLoading", void 0, n);
  }), t(r, Te, (l) => {
    a("EditingStatusChange", { status: l }, n);
  }), t(r, we, () => {
    a("ZoomChange", void 0, n);
  }), t(r, Xe, (l) => {
    const i = Math.trunc(l * 100);
    a("DocumentLoading", { formatRatio: i }, n);
  }), t(r, be, () => {
    a("DocumentReady", void 0, n);
  }), t(r, Pe, (l) => {
    a("SheetChange", l, n);
  }), t(r, Fe, (l) => {
    a("FilterColumnClick", l, n);
  }), t(r, Ge, (l) => {
    a("FillRange", l, n);
  }), t(r, Me, (l, i) => {
    a("XLSX_TABLE_PROPERTY_UNDO_REDO_CHANGED", i, n);
  }), t(r, ke, (l, i) => {
    a("XLSX_TABLE_STYLE_PROPERTY_UNDO_REDO_CHANGED", i, n);
  }), t(r, g, () => {
    a("EditorEnable", void 0, n);
  }), t(r, F, () => {
    a("EditorDisable", void 0, n);
  }), t(r, R, (l) => {
    a("SecurityError", { action: l }, n);
  }), t(r, ge, (l) => new Promise((i) => {
    a("AskDeleteSheet", { resolve: i }, n);
  })), t(r, M, (l, i, d) => {
    a("EditorInteraction", { trigger: l, x: i, y: d }, n);
  }), t(r, Ke, (l, i) => {
    a("DrawingSelectionChanged", { selected: l, types: i }, n);
  }), t(r, j, (l) => new Promise((i, d) => {
    a("UploadImage", { info: l, resolve: i, reject: d }, n);
  }));
  let u = e.Selection;
  t(u, G, (l) => {
    a("SelectionChange", l, n);
  });
  let s = e.UndoRedo;
  t(s, b, () => {
    a("UndoRedoChange", void 0, n);
  });
  let c = e.Finder;
  return t(c, Ue, () => {
    a("OpenFindDialog", void 0, n);
  }), () => o.forEach((l) => l());
}
function nn(e) {
  return e ?? window;
}
function a(e, n, o) {
  let t = new CustomEvent(e, {
    detail: {
      ...n
    }
  });
  nn(o).dispatchEvent(t);
}
function on(e, n, o) {
  let t = e.Document, r = e.License;
  const u = [], s = (c, l, i) => {
    c.addEventListener(l, i), u.push(() => c.removeEventListener(l, i));
  };
  return s(t, V, (c) => new Promise((l, i) => {
    a("AskFilePassword", { resolve: l, reject: i }, o);
  })), s(t, q, (c) => new Promise((l, i) => {
    a("FilePassWordError", { resolve: l, reject: i }, o);
  })), s(t, Z, (c) => {
    a("FilePassWordOK", null, o);
  }), s(r, me, (c) => {
    var l;
    Promise.resolve((l = e.setReadOnly) == null ? void 0 : l.call(e, !0)).catch((i) => {
    }), a("LicenseVerifyError", { error: c }, o);
  }), () => u.forEach((c) => c());
}
function tn(e, n, o, t) {
  switch (o && typeof o.dispatchEvent == "function" && !t && (t = o, o = void 0), e) {
    case Ee:
    case de:
    case _e:
      a("FileError", { callback: n, type: e }, t);
      break;
    case V:
      a("AskFilePassWord", { callback: n, cancel: o, type: e }, t);
      break;
    case q:
      a("FilePassWordError", { callback: n, cancel: o, type: e }, t);
      break;
    case Z:
      a("FilePassWordOK", void 0, t);
      break;
  }
}
const y = {
  addInitEvent: on,
  addXLSEvent: en,
  addDocEvent: Je,
  addPPTEvent: Qe,
  beforeMiddleware: tn
}, rn = {
  loadBrowser: () => import("./index_browser.js?t=1788405500779"),
  loadLocale: () => import("./office.locale.js?t=1788405500779")
};
let P = { ...rn };
async function J(e) {
  const n = await e();
  return {
    ...n,
    default: await (n.default ?? n)
  };
}
function cn(e = {}) {
  P = {
    ...P,
    ...e
  };
}
function ln() {
  return J(P.loadBrowser);
}
function sn() {
  return J(P.loadLocale);
}
async function Q(e = {}) {
  const [n, o] = await Promise.all([
    sn(),
    ln()
  ]), t = n.default, r = o.default, u = an(e.user), s = await fn(e), c = un(e.coreExt), { app: l, docType: i } = await r.openFile(s, u, t, c, (d, f, E) => {
    y.beforeMiddleware(d, f, E, e.eventTarget);
  });
  return (e.title ?? s.fileName) && (document.title = e.title ?? s.fileName), {
    app: l,
    docType: i,
    docId: s.docId,
    fileData: s,
    userData: u
  };
}
function an(e) {
  return {
    ...e,
    commonName: (e == null ? void 0 : e.commonName) ?? "Local User",
    avatar: (e == null ? void 0 : e.avatar) ?? "",
    opts: (e == null ? void 0 : e.opts) ?? { color: "#2F80ED" }
  };
}
function un(e) {
  let n = {};
  !e || !e.coediting ? n = {
    enableCoEditing: !1
  } : n = {
    ...e.coediting,
    enableCoEditing: !0
  };
  let o = (e == null ? void 0 : e.license) || {};
  return {
    coediting: n,
    license: o,
    watermark: e == null ? void 0 : e.watermark
  };
}
async function fn(e = {}) {
  const n = e.fileName;
  if (!n)
    throw new Error("bootup requires fileName");
  if (!e.docId)
    throw new Error("bootup requires docId");
  const o = e.file ?? e.fileUrl;
  if (!o)
    throw new Error("bootup requires file/fileUrl");
  const t = typeof o.arrayBuffer == "function" ? await o.arrayBuffer() : o;
  return {
    docId: e.docId,
    fileName: n,
    file: t,
    opts: {
      isLocal: !0
    }
  };
}
const ee = "__documentModeController";
function B(e) {
  return !!e && typeof e.then == "function";
}
function dn(e) {
  if (!e || typeof e != "object")
    return !1;
  const n = e;
  return typeof n.setReadOnly == "function" && typeof n.isReadOnly == "function" && typeof n.onChange == "function";
}
class En {
  constructor(n) {
    D(this, "app");
    D(this, "readOnly", !1);
    D(this, "operationId", 0);
    D(this, "listeners", /* @__PURE__ */ new Set());
    D(this, "setReadOnlyAlias", (n) => this.setReadOnly(n));
    D(this, "isReadOnlyAlias", () => this.isReadOnly());
    this.app = n, this.installAliases(n), this.readOnly = this.readFromCore(!1);
  }
  onChange(n) {
    return this.listeners.add(n), () => {
      this.listeners.delete(n);
    };
  }
  isReadOnly() {
    return this.readOnly = this.readFromCore(this.readOnly), this.readOnly;
  }
  async setReadOnly(n) {
    const o = ++this.operationId, t = this.readOnly, r = !!n, u = this.getDocumentCallFun();
    if (!u)
      return this.readOnly;
    const s = u(r ? "startReadOnly" : "endReadOnly");
    return B(s) && await s, o !== this.operationId ? this.readOnly : (this.readOnly = this.readFromCore(r), this.readOnly !== t && this.emitChange(), this.readOnly);
  }
  installAliases(n) {
    try {
      Object.defineProperty(n, ee, {
        value: this,
        enumerable: !1,
        configurable: !0
      }), n.setReadOnly = this.setReadOnlyAlias, n.isReadOnly = this.isReadOnlyAlias;
    } catch {
    }
  }
  getDocumentCallFun() {
    var o, t, r;
    const n = (t = (o = this.app) == null ? void 0 : o.Document) == null ? void 0 : t.callFun;
    return typeof n == "function" ? n.bind((r = this.app) == null ? void 0 : r.Document) : null;
  }
  readFromCore(n = this.readOnly) {
    const o = this.getDocumentCallFun();
    if (!o)
      return n;
    const t = o("isReadOnly");
    return typeof t == "boolean" ? t : (B(t), n);
  }
  emitChange() {
    this.listeners.forEach((n) => {
      try {
        n(this.readOnly);
      } catch {
      }
    });
  }
}
function _n(e) {
  if (!e || typeof e != "object")
    return null;
  const n = e, o = n[ee];
  return dn(o) ? o : new En(n);
}
const mn = Symbol(), N = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new WeakMap();
function On(e) {
  return e ?? window;
}
function w(e) {
  const n = T.get(e);
  n && (n(), T.delete(e));
}
function Dn(e) {
  if (!e || e.__officeSdkDocumentEventsDisposePatched)
    return;
  const n = e.dispose, o = e.destroy;
  typeof n == "function" && (e.dispose = function(...t) {
    return w(e), n.apply(this, t);
  }), typeof o == "function" && o !== n && (e.destroy = function(...t) {
    return w(e), o.apply(this, t);
  }), Object.defineProperty(e, "__officeSdkDocumentEventsDisposePatched", {
    value: !0,
    enumerable: !1,
    configurable: !1,
    writable: !1
  });
}
function I(e) {
  var n, o, t;
  return !!((n = e == null ? void 0 : e.isDisposed) != null && n.call(e) || (t = (o = e == null ? void 0 : e.__internalApp) == null ? void 0 : o.isDisposed) != null && t.call(o));
}
function hn(e) {
  if (document.visibilityState === "hidden" || I(e))
    return;
  const n = e.Document || e.Viewer;
  typeof (n == null ? void 0 : n.updateVisibleArea) == "function" && requestAnimationFrame(() => {
    if (!(document.visibilityState === "hidden" || I(e)))
      try {
        Promise.resolve(n.updateVisibleArea()).catch((o) => {
          I(e);
        });
      } catch (o) {
        I(e);
      }
  });
}
function Cn(e, n, o, t) {
  w(e);
  const r = [], u = (c) => {
    typeof c == "function" && r.push(c);
  };
  switch (u(y.addInitEvent(e, o, t)), n) {
    case A.WORD: {
      u(y.addDocEvent(e, t));
      break;
    }
    case A.EXCEL: {
      u(y.addXLSEvent(e, t));
      break;
    }
    case A.PPT: {
      u(y.addPPTEvent(e, t));
      break;
    }
  }
  const s = () => {
    hn(e);
  };
  document.addEventListener("visibilitychange", s), T.set(e, () => {
    document.removeEventListener("visibilitychange", s), r.forEach((c) => {
      try {
        c();
      } catch (l) {
      }
    });
  }), Dn(e);
}
function yn(e = {}) {
  return {
    docId: e.docId,
    mainDom: e.mainDom,
    eventTarget: On(e.eventTarget)
  };
}
function Nn(e) {
  e != null && e.docId && N.set(e.docId, e);
}
function Sn(e, n) {
  !e || !n || (C.set(e, n), n.finally(() => {
    C.get(e) === n && C.delete(e);
  }).catch(() => {
  }));
}
function In(e) {
  if (!e || !N.has(e))
    return null;
  const n = N.get(e);
  return N.delete(e), n;
}
async function Ln(e) {
  if (!e || !C.has(e))
    return null;
  const n = C.get(e);
  try {
    const o = await n;
    return o != null && o.docId && N.delete(o.docId), o;
  } catch {
    return null;
  }
}
function ne(e = {}) {
  return {
    docId: e.docId,
    eventTarget: e.eventTarget,
    title: e.title,
    user: e.user,
    file: e.file,
    fileUrl: e.fileUrl,
    fileName: e.fileName,
    coreExt: e.coreExt
  };
}
async function Rn(e, n) {
  !e || !n || !Object.prototype.hasOwnProperty.call(n, "readOnly") || await e.setReadOnly(!!n.readOnly);
}
function Pn(e) {
  return e == null ? void 0 : e[mn];
}
async function An(e = {}) {
  const n = C.get(e.docId);
  if (n)
    return n;
  const o = Q(ne(e)).then((t) => (Nn(t), t));
  return Sn(e.docId, o), o;
}
async function oe(e = {}) {
  const { docId: n, mainDom: o, eventTarget: t } = yn(e);
  if (e.probeOnly) {
    const i = await An({
      ...e,
      eventTarget: t
    });
    return {
      docId: i.docId,
      docType: i.docType
    };
  }
  if (!o)
    throw new Error("OpenDocument requires a mount element");
  let r = In(n);
  r || (r = await Ln(n)), r || (r = await Q(ne({
    ...e,
    docId: n,
    eventTarget: t
  })));
  const { app: u, docType: s } = r, c = _n(u);
  u.mount(o), Cn(u, s, o, t);
  const l = Pn(e);
  return typeof (l == null ? void 0 : l.beforeRender) == "function" && await l.beforeRender(u, {
    docId: r.docId ?? n,
    docType: s
  }), await Rn(c, e.widgetMode), await u.render(), {
    docId: r.docId ?? n,
    docType: s,
    app: u
  };
}
const _ = {
  WORD: 1,
  EXCEL: 2,
  PPT: 3,
  PDF: 4,
  OFD: 5,
  TXT: 6
};
function Tn() {
  return {
    docx: () => import("./mountDocxApp.js?t=1788405500779").then((e) => e.m),
    xlsx: () => import("./mountXlsxApp.js?t=1788405500779"),
    pptx: () => import("./mountPptxApp.js?t=1788405500779").then((e) => e.z)
  };
}
function wn(e) {
  return {
    ...Tn(),
    ...e
  };
}
function Un(e) {
  switch (e) {
    case _.WORD:
      return "docx";
    case _.EXCEL:
      return "xlsx";
    case _.PPT:
      return "pptx";
    default:
      throw new Error(`office sdk does not support docType ${e}`);
  }
}
async function Xn(e, n, o, t, r) {
  const u = Un(e), s = t[u];
  if (typeof s != "function")
    throw new Error(`office sdk app loader is not configured for ${u}`);
  const c = await s();
  if (typeof c.mount != "function")
    throw new Error(`office sdk app module for ${u} does not export mount(...)`);
  return c.mount(n, o, r);
}
const bn = "Local User", gn = "#2F80ED";
function te(e) {
  return {
    ...e,
    commonName: (e == null ? void 0 : e.commonName) ?? bn,
    avatar: (e == null ? void 0 : e.avatar) ?? "",
    opts: (e == null ? void 0 : e.opts) ?? { color: gn }
  };
}
let U = null, m = null;
function re(e) {
  return e.replace(/\/$/, "");
}
function Fn(e) {
  const n = new URL(e, window.location.href), o = new URL("./sharedWorkerStorage.worker.js", n);
  return o.search = n.search, o.href;
}
function ie() {
  if (!U)
    throw new Error(
      "Office SDK runtime is not ready. Please verify the SDK assets are deployed correctly and retry opening the document."
    );
  return U;
}
function Gn(e) {
  const n = ie();
  return {
    ...e,
    user: te(e.user),
    lang: e.lang ?? n.lang,
    assetBaseUrl: e.assetBaseUrl ?? n.assetBaseUrl,
    workerUrl: e.workerUrl ?? n.workerUrl,
    localeAssetRoot: e.localeAssetRoot ?? n.localeAssetRoot
  };
}
function Mn(e) {
  U = {
    ...e,
    appLoaders: wn(e.appLoaders)
  }, cn({
    loadBrowser: async () => ({ default: e.core }),
    loadLocale: async () => ({ default: e.locale })
  });
}
function kn(e) {
  return {
    core: e.core,
    locale: e.locale,
    mount(n) {
      return Mn(e), uo(n);
    }
  };
}
function Bn(e) {
  if (e.target instanceof HTMLElement)
    return e.target;
  if (typeof e.target == "string") {
    const n = document.querySelector(e.target);
    if (!n)
      throw new Error(`mount target "${e.target}" not found`);
    return n;
  }
  if (e.domId) {
    const n = document.getElementById(e.domId);
    if (!n)
      throw new Error(`mount target #${e.domId} not found`);
    return n;
  }
  throw new Error("mount target is required");
}
function Hn(e) {
  e.replaceChildren();
  const n = document.createElement("div");
  return n.className = "office-sdk-root", e.appendChild(n), n;
}
function Wn() {
  const e = import.meta.url;
  return re(new URL("./", e).href);
}
function $n(e) {
  const n = re(e.assetBaseUrl ?? Wn()), o = e.workerUrl ?? `${n}/worker/index.js`;
  return {
    apibase: e.apibase ?? window.location.origin,
    uriprefix: e.uriprefix ?? "",
    lang: e.lang ?? window.navigator.language,
    assetBaseUrl: n,
    localeAssetRoot: e.localeAssetRoot ?? `${n}/locale-assets`,
    workerUrl: p(o)
  };
}
function ce(e, n) {
  const o = window;
  Fn(e.workerUrl), o.apibase = e.apibase, o.uriprefix = e.uriprefix, o.lang = e.lang, o.__OFFICE_SDK_RUNTIME__ = {
    // assetBaseUrl: config.assetBaseUrl,
    // localeAssetRoot: config.localeAssetRoot,
    // workerUrl: config.workerUrl,
    // storageWorkerUrl
  }, o.__OFFICE_SDK_MOUNT__ = !0, o.__OFFICE_SDK_MOUNT_COUNT__ = (m == null ? void 0 : m.mountCount) ?? 0, n && (document.title = n);
}
function vn(e, n) {
  return e.apibase === n.apibase && e.uriprefix === n.uriprefix && e.lang === n.lang && e.assetBaseUrl === n.assetBaseUrl && e.localeAssetRoot === n.localeAssetRoot && e.workerUrl === n.workerUrl;
}
function Kn(e, n) {
  const o = $n(n);
  if (m) {
    if (m.core !== e.core || m.locale !== e.locale || !vn(m.config, o))
      throw new Error(
        "office sdk can mount multiple active instances only when they share the same runtime and page-level config (apibase, uriprefix, lang, worker and asset roots)"
      );
  } else
    m = {
      config: o,
      core: e.core,
      locale: e.locale,
      mountCount: 0
    };
  m.mountCount += 1, ce(o, n.title);
}
function H() {
  if (!m)
    return;
  if (m.mountCount -= 1, m.mountCount > 0) {
    ce(m.config);
    return;
  }
  const e = window;
  delete e.__OFFICE_SDK_RUNTIME__, delete e.__OFFICE_SDK_MOUNT__, delete e.__OFFICE_SDK_MOUNT_COUNT__, m = null;
}
function Yn(e) {
  var o;
  const n = e.includes(".") ? ((o = e.split(".").pop()) == null ? void 0 : o.toLowerCase()) ?? "" : "";
  if (["xls", "xlsx"].includes(n))
    return "xlsx";
  if (["pptx"].includes(n))
    return "pptx";
  if (["doc", "docx"].includes(n))
    return "docx";
}
function xn(e) {
  switch (e) {
    case "docx":
      return _.WORD;
    case "xlsx":
      return _.EXCEL;
    case "pptx":
      return _.PPT;
    default:
      return null;
  }
}
function pn(e) {
  let n = 0;
  for (let o = 0; o < e.length; o += 1)
    n = (n << 5) - n + e.charCodeAt(o), n |= 0;
  return `widget-${Math.abs(n)}`;
}
function zn(e, n, o) {
  return typeof o == "string" && o ? `${e}:${o}` : typeof File < "u" && n instanceof File ? `${e}:${n.size}:${n.lastModified}:${n.type}` : typeof Blob < "u" && n instanceof Blob ? `${e}:${n.size}:${n.type}` : n instanceof ArrayBuffer ? `${e}:${n.byteLength}:arraybuffer` : ArrayBuffer.isView(n) ? `${e}:${n.byteLength}:view` : typeof n == "string" ? `${e}:${n}` : `${e}:local`;
}
function Vn(e) {
  return e instanceof ArrayBuffer ? e.slice(0) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength).slice().buffer : e;
}
function qn(e, n, o) {
  oe({
    probeOnly: !0,
    docId: o.docId,
    file: Vn(o.file),
    fileUrl: o.fileUrl,
    fileName: o.fileName,
    user: e.user,
    eventTarget: n == null ? void 0 : n.eventTarget,
    title: e.title,
    coreExt: e.coreExt
  }).catch((t) => {
  });
}
async function Zn(e, n) {
  var c;
  if (!e.fileUrl && !e.file)
    throw new Error('mount option "file" or "fileUrl" is required');
  const o = e.fileUrl ? new URL(e.fileUrl, window.location.href).href : void 0, t = (c = e.fileName) == null ? void 0 : c.trim();
  if (!t)
    throw new Error('mount option "fileName" is required');
  const r = Yn(t), u = xn(r), s = e.docId ?? pn(zn(t, e.file, o));
  return u ? (qn(e, n, {
    docId: s,
    file: e.file,
    fileUrl: o,
    fileName: t
  }), {
    docId: s,
    docType: u,
    file: e.file,
    fileUrl: o,
    fileName: t
  }) : oe({
    probeOnly: !0,
    docId: s,
    file: e.file,
    fileUrl: o,
    fileName: t,
    user: e.user,
    eventTarget: n == null ? void 0 : n.eventTarget,
    title: e.title
  });
}
async function jn(e, n, o, t, r) {
  if ([_.PDF, _.OFD, _.TXT].includes(e))
    throw new Error(`office sdk does not support docType ${e}`);
  return Xn(e, n, o, t, r);
}
function Jn(e) {
  const n = Object.entries(_).find(([, o]) => o === e);
  return n ? n[0] : null;
}
function Qn(e, n) {
  var o, t;
  return ((t = (o = e.store.state.file) == null ? void 0 : o.fileInfo) == null ? void 0 : t.docId) ?? n.docId ?? "";
}
const W = /* @__PURE__ */ new WeakMap();
function eo(e) {
  return !!(e && typeof e.then == "function");
}
function no(e) {
  return !!(e && typeof e == "object" && (typeof e.callFun == "function" || typeof e.addEventListener == "function"));
}
function $(e, n, o) {
  var t, r;
  try {
    (r = (t = e.store) == null ? void 0 : t.commit) == null || r.call(t, n, o);
  } catch {
  }
}
function oo(e, n) {
  var o, t;
  try {
    (t = (o = e.commandService) == null ? void 0 : o.refreshSome) == null || t.call(o, n);
  } catch {
  }
}
function to(e, n) {
  var t, r;
  const o = (r = (t = e.store) == null ? void 0 : t.getters) == null ? void 0 : r["command/getVal"];
  return typeof o == "function" ? o(n) : void 0;
}
function k(e, n, o) {
  $(e, "command/setState", {
    cmd: n,
    ui: { value: o }
  }), $(e, "command/setEnabled", {
    cmd: n,
    enabled: !0
  });
}
function ro(e, n) {
  return e === "callFun" && typeof n[0] == "string" ? {
    methodName: n[0],
    args: n.slice(1)
  } : {
    methodName: String(e),
    args: n
  };
}
function v(e, n) {
  var t, r;
  const o = (r = (t = e == null ? void 0 : e.Document) == null ? void 0 : t.getZoom) == null ? void 0 : r.call(t);
  if (typeof o == "number" && Number.isFinite(o)) {
    k(n, "zoom", Math.round(o));
    return;
  }
  oo(n, ["zoom"]);
}
function io(e, n) {
  var u, s, c;
  const o = e == null ? void 0 : e.Document, t = to(n, "paraSymbol"), r = {
    ...t && typeof t == "object" ? t : {},
    ParagraphMarks: !!((u = o == null ? void 0 : o.getShowParagraphMarks) != null && u.call(o)),
    PageBreak: !!((s = o == null ? void 0 : o.getShowPageBreak) != null && s.call(o)),
    SectionBreak: !!((c = o == null ? void 0 : o.getShowSectionBreak) != null && c.call(o))
  };
  k(n, "paraSymbol", r);
}
function co(e, n, o, t, r, u) {
  const { methodName: s, args: c } = ro(r, u), l = n;
  if (t === "Document")
    switch (s) {
      case "setZoom":
        v(l, o);
        break;
      case "setPageView": {
        if (e !== _.WORD)
          break;
        const i = c[0];
        (i === "single" || i === "multi" || i === "wide") && k(o, "pageViewSwitch", i), v(l, o);
        break;
      }
      case "setShowParagraphMarks":
      case "setShowPageBreak":
      case "setShowSectionBreak":
        e === _.WORD && io(l, o);
        break;
    }
}
function K(e, n, o, t, r, u) {
  var c;
  const s = () => co(
    e,
    n,
    o,
    t,
    r,
    u
  );
  s(), typeof queueMicrotask == "function" ? queueMicrotask(s) : Promise.resolve().then(s), (c = window.requestAnimationFrame) == null || c.call(window, s), window.setTimeout(s, 0);
}
function lo(e, n, o, t) {
  return new Proxy(
    {},
    {
      get(r, u) {
        const s = n == null ? void 0 : n[t], c = s == null ? void 0 : s[u];
        return typeof c != "function" ? c : (...l) => {
          const i = n == null ? void 0 : n[t], d = i == null ? void 0 : i[u];
          if (typeof d != "function")
            throw new Error(`component method ${String(u)} is not available`);
          const f = Reflect.apply(d, i, l);
          return eo(f) ? Promise.resolve(f).finally(() => {
            K(e, n, o, t, u, l);
          }) : (K(e, n, o, t, u, l), f);
        };
      },
      has(r, u) {
        return u in ((n == null ? void 0 : n[t]) ?? {});
      }
    }
  );
}
function so(e, n, o) {
  const t = W.get(o);
  if ((t == null ? void 0 : t.rawApp) === n)
    return t.facade;
  if (!n || typeof n != "object")
    return n ?? null;
  const r = /* @__PURE__ */ new Map(), u = new Proxy(n, {
    get(s, c, l) {
      const i = Reflect.get(s, c, l);
      return no(i) ? (r.has(c) || r.set(
        c,
        lo(e, s, o, c)
      ), r.get(c)) : i;
    }
  });
  return W.set(o, { rawApp: n, facade: u }), u;
}
function ao(e, n) {
  var o;
  return so(n, (o = e.api) == null ? void 0 : o.docApp, e);
}
async function uo(e) {
  const n = Gn(e), o = ie(), t = {
    eventTarget: new EventTarget(),
    uiOptions: n.uiOptions,
    widgetMode: n.widgetMode,
    coreExt: n.coreExt
  };
  Kn(o, n);
  const r = Bn(n), u = Hn(r);
  try {
    const s = await Zn(n, t), c = (s == null ? void 0 : s.docId) ?? n.docId;
    t.docId = c, t.file = n.file, t.user = n.user, t.fileUrl = s && "fileUrl" in s ? s.fileUrl : n.fileUrl, t.fileName = s && "fileName" in s ? s.fileName : n.fileName, t.widgetMode = n.widgetMode;
    const { docType: l } = s, i = await jn(
      l,
      u,
      n.lang,
      o.appLoaders,
      t
    );
    let d = !1;
    async function f() {
      if (!d) {
        d = !0;
        try {
          const E = i.destroy ?? i.close ?? i.unmount;
          await (E == null ? void 0 : E.call(i));
        } finally {
          u.replaceChildren(), H();
        }
      }
    }
    return {
      get docId() {
        return Qn(i, {
          ...n,
          docId: c
        });
      },
      docType: l,
      docTypeName: Jn(l),
      root: u,
      core: o.core,
      get app() {
        return ao(i, l);
      },
      api: i.api,
      eventTarget: t.eventTarget,
      ready: i.ready,
      destroy: f,
      close: f,
      unmount: f
    };
  } catch (s) {
    throw u.replaceChildren(), H(), s;
  }
}
function fo(e) {
  return e ? {
    ...e
  } : null;
}
function Eo(e) {
  var t;
  const n = e != null && e.mode ? { ...e.mode } : void 0, o = ((t = n == null ? void 0 : n.lang) == null ? void 0 : t.trim()) || void 0;
  return n && delete n.lang, {
    userData: te(e == null ? void 0 : e.userData),
    uiOptions: e == null ? void 0 : e.uiOptions,
    mode: n && Object.keys(n).length > 0 ? n : void 0,
    lang: o,
    coreExt: fo(e == null ? void 0 : e.coreExt)
  };
}
let L = null, h = null, Y = 0;
function _o() {
  return typeof document < "u";
}
function mo(e) {
  const n = import.meta.url, o = new URL(`./${e}`, n).href;
  return p(o);
}
function Oo(e) {
  return Array.from(document.querySelectorAll("link")).some((n) => n.href === e && n.relList.contains("stylesheet"));
}
async function Do() {
  if (!_o())
    return Promise.resolve();
  if (h)
    return h;
  await z();
  const e = mo("style.css");
  return Oo(e) ? (h = Promise.resolve(), h) : (h = new Promise((n, o) => {
    const t = document.createElement("link");
    t.rel = "stylesheet", t.href = e, t.dataset.officeSdkStyle = "true", t.onload = () => n(), t.onerror = () => o(new Error("Failed to load office-sdk stylesheet")), (document.head ?? document.documentElement).appendChild(t);
  }), h);
}
function le(e) {
  var o;
  const n = (o = e.fileName) == null ? void 0 : o.trim();
  if (n)
    return n;
  throw new Error("office sdk openfile requires fileData.fileName");
}
function ho(e) {
  let n = 0;
  for (let o = 0; o < e.length; o += 1)
    n = (n << 5) - n + e.charCodeAt(o), n |= 0;
  return `widget-${Math.abs(n)}`;
}
function Co(e, n) {
  return typeof File < "u" && n instanceof File ? `${e}:${n.size}:${n.lastModified}:${n.type}` : typeof Blob < "u" && n instanceof Blob ? `${e}:${n.size}:${n.type}` : n instanceof ArrayBuffer ? `${e}:${n.byteLength}:arraybuffer` : ArrayBuffer.isView(n) ? `${e}:${n.byteLength}:view` : typeof n == "string" ? `${e}:${n}` : `${e}:local`;
}
function yo(e, n) {
  var t;
  const o = (t = e.docId) == null ? void 0 : t.trim();
  return o || ho(Co(n, e.file));
}
function No(e) {
  var o;
  switch (e.includes(".") ? ((o = e.split(".").pop()) == null ? void 0 : o.toLowerCase()) ?? "" : "") {
    case "doc":
    case "wps":
    case "docx":
      return _.WORD;
    case "xls":
    case "es":
    case "xlsx":
      return _.EXCEL;
    case "ppt":
    case "pptx":
      return _.PPT;
    default:
      throw new Error(`office sdk openfile does not support file "${e || "(unknown)"}"`);
  }
}
function So(e) {
  switch (e) {
    case _.WORD:
      return "blank.docx";
    case _.EXCEL:
      return "blank.xlsx";
    case _.PPT:
      return "blank.pptx";
    default:
      throw new Error(`office sdk createfile does not support docType ${e}`);
  }
}
function Io(e) {
  return Y += 1, `new-${e}-${Date.now()}-${Y}`;
}
function Lo(e = { fallback: "zh-CN", onlyMain: !1 }) {
  var r;
  const { fallback: n = "zh-CN", onlyMain: o = !1 } = e;
  let t = ((r = navigator.languages) == null ? void 0 : r[0]) || navigator.language || n;
  return typeof t != "string" ? n : (t = t.trim(), o ? t.split(/[-_]/)[0] || n : t.replace(/^([a-z]{2})-([a-z]{2})$/i, (u, s, c) => s.toLowerCase() + "-" + c.toUpperCase()));
}
function Ro(e) {
  return /^(blob:|data:|https?:\/\/|file:|\/|\.\/|\.\.\/)/i.test(e);
}
function Po(e) {
  return typeof Blob < "u" && e instanceof Blob ? e : e instanceof ArrayBuffer ? new Blob([e]) : ArrayBuffer.isView(e) ? new Blob([e]) : typeof e == "string" ? new Blob([e]) : null;
}
function Ao(e) {
  if (typeof e == "string" && Ro(e))
    return {
      fileUrl: e,
      file: void 0,
      revoke: null
    };
  if (typeof Blob < "u" && e instanceof Blob || e instanceof ArrayBuffer || ArrayBuffer.isView(e))
    return {
      file: e,
      fileUrl: void 0,
      revoke: null
    };
  const n = typeof e == "string" ? new Blob([e]) : Po(e);
  if (!n)
    throw new Error("office sdk openfile requires fileData.file to be a URL, Blob, ArrayBuffer, or TypedArray");
  return {
    file: n,
    fileUrl: void 0,
    revoke: null
  };
}
function To(e) {
  if (typeof HTMLElement < "u" && e instanceof HTMLElement)
    return { target: e };
  if (typeof e != "string" || !e.trim())
    throw new Error("office sdk widget.mount(...) requires a target dom id or HTMLElement");
  const n = e.trim();
  return n.startsWith("#") || n.startsWith(".") || n.startsWith("[") ? { target: n } : { domId: n };
}
async function x(e) {
  return e.default ?? e;
}
async function se() {
  return L || (L = (async () => (await z(), Promise.all([
    import("./index_browser.js?t=1788405500779"),
    import("./office.locale.js?t=1788405500779")
  ]).then(async ([e, n]) => ({
    core: await x(e),
    locale: await x(n)
  })).catch((e) => {
    throw L = null, e;
  })))()), L;
}
function wo(e, n, o, t, r, u, s) {
  const c = {
    handle: null,
    handlePromise: null,
    mountTarget: null,
    revokeFileUrl: null
  };
  async function l() {
    const i = c.handle ?? (c.handlePromise ? await c.handlePromise.catch(() => null) : null);
    c.handle = null, c.handlePromise = null;
    try {
      const d = (i == null ? void 0 : i.destroy) ?? (i == null ? void 0 : i.close) ?? (i == null ? void 0 : i.unmount);
      await (d == null ? void 0 : d.call(i));
    } finally {
      c.revokeFileUrl && (c.revokeFileUrl(), c.revokeFileUrl = null);
    }
  }
  return {
    mount(i) {
      return c.mountTarget = i, this;
    },
    async render() {
      if (!c.mountTarget)
        throw new Error("office sdk widget.render() requires widget.mount(...) to be called first");
      if (await Do(), !c.handlePromise) {
        const d = le(n), { file: f, fileUrl: E, revoke: O } = Ao(n.file);
        c.revokeFileUrl = O, c.handlePromise = e.mount({
          ...To(c.mountTarget),
          docId: n.docId,
          file: f,
          fileUrl: E,
          fileName: d,
          user: o,
          coreExt: s,
          uiOptions: r,
          widgetMode: u
        }).then((S) => (c.handle = S, S)).catch((S) => {
          throw c.handlePromise = null, c.revokeFileUrl && (c.revokeFileUrl(), c.revokeFileUrl = null), S;
        });
      }
      const i = await c.handlePromise;
      return await i.ready, i.app;
    },
    async destroy() {
      await l();
    },
    async close() {
      await l();
    },
    async unmount() {
      await l();
    },
    get docId() {
      var i;
      return ((i = c.handle) == null ? void 0 : i.docId) ?? n.docId ?? "";
    },
    get docType() {
      var i;
      return ((i = c.handle) == null ? void 0 : i.docType) ?? t;
    },
    get docTypeName() {
      var i;
      return ((i = c.handle) == null ? void 0 : i.docTypeName) ?? null;
    }
  };
}
async function ae(e, n) {
  const o = le(e), t = yo(e, o), { core: r, locale: u } = await se(), {
    userData: s,
    uiOptions: c,
    mode: l,
    lang: i,
    coreExt: d
  } = Eo(n), f = kn({
    core: r,
    locale: u,
    lang: i ?? Lo()
  }), E = No(o);
  return {
    docType: E,
    widget: wo(
      f,
      { ...e, docId: t, fileName: o },
      s,
      E,
      c,
      l,
      d
    )
  };
}
async function Uo(e, n) {
  const o = So(e), { locale: t } = await se(), r = t == null ? void 0 : t.loadSample;
  if (typeof r != "function")
    throw new Error("office sdk createfile requires locale.loadSample(docType)");
  const u = await r.call(t, e);
  if (typeof u != "string" || !u.trim())
    throw new Error(`office sdk createfile did not receive a sample URL for docType ${e}`);
  return ae(
    {
      docId: Io(e),
      fileName: o,
      file: u.trim()
    },
    n
  );
}
const go = {
  openfile: ae,
  createfile: Uo
};
export {
  oe as O,
  _n as a,
  Uo as b,
  mn as c,
  a as d,
  ae as e,
  go as o
};
