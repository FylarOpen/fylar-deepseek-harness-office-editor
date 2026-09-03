var Ml = Object.defineProperty;
var Pl = (e, t, l) => t in e ? Ml(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l;
var ge = (e, t, l) => Pl(e, typeof t != "symbol" ? t + "" : t, l);
import { d as Y, k as ie, a0 as re, S as G, o as T, c as E, a1 as i, a2 as v, a3 as Le, a4 as c, a5 as Hl, a6 as me, a as O, a7 as W, a8 as ne, r as N, q as F, a9 as oe, aO as kl, aP as Re, aV as ut, av as fe, aw as Se, al as $, b3 as Bt, ab as K, ai as ce, ak as kt, aR as Ye, aD as Ie, az as Al, aA as zl, aB as Ll, aC as Nl, aa as Tl, ac as Vl, ad as Oe, ae as Cl, af as Rl, ag as Zl, ah as be, aF as Dl, aG as _l, aI as Ce, aH as sl, aj as B, am as ue, au as zt, ao as se, aK as Lt, at as Me, aE as Bl, aJ as Fl, v as Ft, aL as Ol, aN as Il, aZ as dl, h as Ge, T as Qe, b0 as Ot, as as It, ar as Xt, aQ as yt, ax as pl, ap as St, aq as Mt, aS as Xl, aT as El, aU as qe, b4 as jl, b5 as Wl, aM as Ul, b1 as ql, b2 as Gl, a_ as Ql, a$ as Yl, b6 as Kl, b7 as Jl, b8 as $l, b9 as ea, ba as ta, bb as la, bc as aa, bd as na, be as ia, bf as ra, bg as oa, bh as Aa, bi as sa, bj as da, bk as pa, bl as ca, bm as ua, bn as ma, bo as ha, bp as fa, bq as va, br as ga, bs as ba, bt as wa, bu as xa, bv as ya, bw as Sa, aY as Ma, bx as Pa, by as Ha, bz as ka, bA as za, bB as La, bC as Na, bD as Ta, bE as Va, bG as Ca, bF as Ra, N as Za, bH as Da, bI as Qt, cw as he, bJ as _a, bK as Ba, bL as Fa, bM as Oa, bN as Ia, bO as Xa, bP as Yt, bQ as Ea, bR as ja, bS as Wa, bT as Ua, bU as qa, bV as Ga, bW as Qa, bX as Ya } from "./ApiBase.js?t=1788405500779";
import { a as Ka, O as Kt, c as Jt, d as $t } from "./UI.runtime.js?t=1788405500779";
import { N as Ja, a as $a, b as en, c as tn } from "./assets/Form-nD5OzkSv.js?t=1788405500779";
const z = {
  Init: "init",
  // 文档初始化时
  SelectionChange: "selectionChange",
  // selection改变时
  UndoRedoChange: "UndoRedoChange",
  // undo redo 操作列表发生改变时
  ExportReady: "ExportReady",
  // 文档准备好导出时
  ZoomChange: "ZoomChange",
  // zoom 改变
  ViewChange: "ViewChange",
  // 页面视图模式改变
  LayoutSetChange: "LayoutSetChange"
  // 允许使用新建版式和重建
}, a = {
  SearchReplaceWord: "searchReplaceWord",
  //styles
  Bold: "bold",
  Underline: "underline",
  Strikeout: "strikeout",
  Italic: "italic",
  FontSize: "fontSize",
  FontColor: "fontColor",
  FontName: "fontName",
  Color: "color",
  HeightLightColor: "highlightColor",
  UnderlineColor: "underlineColor",
  AlignHorizontal: "alignHorizontal",
  AlignVertical: "alignVertical",
  Shadow: "shadow",
  FontSetting: "fontSetting",
  ParagraphSetting: "paragraphSetting",
  ExitTextEdit: "exitTextEdit",
  // editor
  Undo: "undo",
  Redo: "redo",
  // 粘贴
  Paste: "paste",
  // 剪切
  Cut: "cut",
  // 复制
  Copy: "copy",
  // 格式刷
  FormatPaint: "formatPaint",
  NewSlide: "newSlide",
  DeleteSlide: "deleteSlide",
  // 版式
  InsertLayout: "insertLayout",
  // 重置
  ResetSlide: "resetSlide",
  // 节
  Section: "section",
  // 清除所有格式
  ClearAllFormatting: "clearAllFormatting",
  // 符号列表
  Bullet: "bullet",
  // 有序列表
  Numbering: "numbering",
  // 行距
  LineSpacing: "lineSpacing",
  // 文本方向
  TextDirection: "textDirection",
  // 列表左缩进
  DecreaseListLevel: "decreaseListLevel",
  // 列表右缩进
  IncreaseListLevel: "increaseListLevel",
  // 文本垂直对齐
  AlignText: "alignText",
  IncreaseLineSpacing: "increaseLineSpacing",
  ReduceLineSpacing: "reduceLineSpacing",
  Zoom: "zoom",
  AutoZoom: "autoZoom",
  Export: "export",
  ExportPDF: "exportPDF",
  Open: "open",
  Play: "play",
  GoToPage: "goToPage",
  GetLayoutList: "getLayoutList",
  GetBulletList: "getBulletList",
  GetShapeTypeList: "getShapeTypeList",
  GetNumberingList: "getNumberingList",
  ArrangeGroupMenu: "arrangeGroupMenu",
  Close: "close",
  // view
  // OutlineView: "outlineView",
  NormalView: "normalView",
  SlideSorter: "slideSorter",
  NotesPage: "notesPage",
  ReadingView: "readingView",
  SlideMaster: "slideMaster",
  HandoutMaster: "handoutMaster",
  NotesMaster: "notesMaster",
  SetViewSetting: "setViewSetting",
  // dropdown
  SlideOptions: "slideOptions",
  // insert 插入菜单
  InsertTable: "insertTable",
  // 插入表格
  InsertPicture: "insertPicture",
  // 插入图片
  InsertShape: "insertShape",
  // 插入形状
  InsertTextBox: "insertTextBox",
  // 插入文本框
  InsertVideo: "insertVideo",
  // 插入视频
  InsertAudio: "insertAudio",
  // 插入音频
  InsertFormula: "insertFormula",
  // 插入公式
  InsertSymbol: "insertSymbol",
  // 插入符号
  InsertHeaderFooter: "insertHeaderFooter",
  // 插入页眉页脚
  InsertComment: "insertComment",
  // 插入批注
  InsertLink: "insertLink",
  // 插入链接
  InsertAccessory: "insertAccessory",
  // 插入附件
  // 幻灯片母版菜单
  SlideMasterInsert: "slideMasterInsert",
  // 插入母版
  SlideMasterInsertLayout: "slideMasterInsertLayout",
  // 插入版式
  SlideMasterDelete: "slideMasterDelete",
  // 删除母版
  SlideMasterRename: "slideMasterRename",
  // 重命名母版
  SlideMasterPreserve: "slideMasterPreserve",
  // 保护母版
  SlideMasterInsertPlaceHolder: "slideMasterInsertPlaceHolder",
  // 插入占位符
  SlideMasterLayout: "slideMasterLayout",
  // 母版版式
  SlideGetPlaceholder: "slideGetPlaceholder",
  // 获取占位符位置
  GetPaperSizeOption: "getPaperSizeOption",
  // 获取纸张大小选项
  // 备注母版菜单
  NotesPageDirection: "notesPageDirection",
  // 备注方向
  NotesSlideSize: "notesSlideSize",
  // 备注幻灯片大小
  NotesSlidePlaceholder: "notesSlidePlaceholder",
  // 备注幻灯片占位符
  SetNotesSlideSizeOption: "setNotesSlideSizeOption",
  // 设置备注幻灯片大小选项
  // 讲义母版菜单
  HandoutMasterPageDirection: "handoutMasterPageDirection",
  // 讲义方向
  HandoutMasterSlideSize: "handoutMasterSlideSize",
  // 讲义幻灯片大小
  HandoutSlidePerPage: "handoutSlidePerPage",
  // 每页幻灯片数
  HandoutMasterSlidePlaceholder: "handoutMasterSlidePlaceholder",
  // 讲义幻灯片占位符
  // 绘图工具菜单
  ShapeEditShape: "shapeEditShape",
  // 编辑形状
  ShapeEditVertex: "shapeEditVertex",
  // 编辑形状顶点
  ShapeMerge: "shapeMerge",
  // 合并形状
  ShapeFill: "shapeFill",
  // 填充形状
  ShapeGroup: "shapeGroup",
  // 组合形状
  ShapeRotate: "shapeRotate",
  // 旋转形状
  ShapeAlign: "shapeAlign",
  // 对齐形状
  ShapeBringToFront: "shapeBringToFront",
  // 前置形状
  ShapeSendToBack: "shapeSendToBack",
  // 后置形状
  ShapeSetWidth: "shapeSetWidth",
  // 设置形状宽度
  ShapeSetHeight: "shapeSetHeight",
  // 设置形状高度
  ShapeFontFill: "shapeFontFill",
  // 设置形状字体颜色
  GetShapeAlign: "getShapeAlign",
  // 获取形状对齐方式
  // 右侧菜单
  RightShapeSetSize: "rightShapeSetSize",
  // 设置形状大小
  RightShapeSetPosition: "rightShapeSetPosition",
  // 设置形状位置
  RightShapeSetTextBox: "rightShapeSetTextBox",
  // 设置形状文本框
  RightResetPictureSize: "rightResetPictureSize",
  //重置图片大小
  // 弹窗
  GetDateTimeList: "getDateTimeList",
  // 获取日期时间列表
  GetSlideLayoutData: "getSlideLayoutData",
  // 获取幻灯片版式数据
  GetNotesHandoutData: "getNotesHandoutData",
  // 获取备注讲义数据
  GetPixelRatio: "getPixelRatio",
  // 获取像素比
  SetHeaderFooter: "setHeaderFooter",
  // 设置页眉页脚
  // 批注
  CommentUpdate: "commentUpdate",
  // 更新批注
  DeleteComment: "deleteComment",
  // 删除批注
  NextComment: "nextComment",
  // 下一个批注
  PreviousComment: "previousComment",
  // 上一个批注
  ShowHideComment: "showHideComment",
  // 显示隐藏批注
  ShowHideCommentFlag: "showHideCommentFlag",
  // 显示隐藏批注标志
  // 放映
  ShowHideSlide: "showHideSlide",
  // 显示隐藏幻灯片
  // 表格工具
  TableDelete: "tableDelete",
  // 删除表格
  InsertRow: "insertRow",
  // 插入行
  InsertColumn: "insertColumn",
  // 插入列
  CellMargin: "cellMargin",
  // 单元格边距
  MergeCells: "mergeCells",
  // 合并单元格
  SplitCells: "splitCells",
  // 分裂单元格
  EqualRowHeight: "equalRowHeight",
  // 等高行
  EqualColumnWidth: "equalColumnWidth",
  // 等宽列
  ColWidth: "colWidth",
  // 设置列宽度
  RowHeight: "rowHeight",
  // 设置行高度
  TableSelect: "tableSelect",
  // 选择表格
  // 表格样式
  TableFill: "tableFill",
  // 表格填充
  TableFillColor: "tableFillColor",
  // 表格填充颜色
  TableBorderStroke: "tableBorderStroke",
  // 表格边框
  TableStrokeColor: "tableStrokeColor",
  // 表格边框颜色
  TableBorderSize: "tableBorderSize",
  // 表格边框粗细
  TableBorderType: "tableBorderType",
  // 表格边框类型
  ClearTableStyle: "clearTableStyle",
  // 清除表格样式
  // 右侧菜单
  ShapeDelete: "shapeDelete",
  // 删除形状
  ShapeEditText: "shapeEditText",
  // 编辑文字
  PlaySlideShow: "playSlideShow",
  // 播放幻灯片
  SetScreen: "setScreen",
  //黑白屏
  EndSlideShow: "endSlideShow"
  // 结束放映
}, ln = /* @__PURE__ */ new Set([
  a.NormalView,
  // Commands.OutlineView,
  a.SlideSorter,
  a.NotesPage,
  a.ReadingView,
  a.SlideMaster,
  a.HandoutMaster,
  a.NotesMaster
]), Pt = /* @__PURE__ */ new Set([
  a.Open,
  a.Export,
  a.ExportPDF,
  a.Copy,
  a.Play,
  a.GoToPage,
  a.GetLayoutList,
  a.Zoom,
  a.AutoZoom,
  a.SlideGetPlaceholder,
  ...ln
]);
var Ze = /* @__PURE__ */ ((e) => (e.ADD_SECTION_ONLY = "add_section_only", e.UNADD_SECTION = "unAdd_section", e.UNREMOVE_CURRENT_SECTION = "unRemove_current_section", e.UNREMOVE_ALL_SECTION = "unRemove_all_section", e.UNREMOVE_AND_UNRENAME_CURRENT = "unRemove_and_unRename_current", e.UNADD_AND_UNREMOVE_CURRENT = "unAdd_and_unRemove_current", e.UNAVAILABLE_SECTION = "unavailable_section", e))(Ze || {}), Ue = /* @__PURE__ */ ((e) => (e.ALL_INSERT_LAYOUT = "all_insert_layout", e.INSERT_AND_RENAME = "insert_and_rename", e.INSERT_AND_RENAME_AND_PRESERVE = "insert_rename_and_preserve", e.INSERT_AND_REMOVE_AND_RENAME = "insert_remove_and_rename", e.ALL_ENABLED = "all_enabled", e.ONLY_INSERT_MASTER = "only_insert_master", e))(Ue || {}), De = /* @__PURE__ */ ((e) => (e[e.ALL_DISABLED = 0] = "ALL_DISABLED", e[e.INSERT_MASTER = 1] = "INSERT_MASTER", e[e.INSERT_LAYOUT = 2] = "INSERT_LAYOUT", e[e.INSERT_PLACEHOLDER = 4] = "INSERT_PLACEHOLDER", e[e.DELETE_LAYOUT_OR_MASTER = 8] = "DELETE_LAYOUT_OR_MASTER", e[e.PRESERVE_MASTER = 16] = "PRESERVE_MASTER", e[e.RENAME_MASTER_OR_LAYOUT = 32] = "RENAME_MASTER_OR_LAYOUT", e[e.SET_MASTER_PLACEHOLDER = 64] = "SET_MASTER_PLACEHOLDER", e))(De || {}), an = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.HEADER = 1] = "HEADER", e[e.SLIDE_IMAGE = 2] = "SLIDE_IMAGE", e[e.FOOTER = 4] = "FOOTER", e[e.DATE = 8] = "DATE", e[e.BODY = 16] = "BODY", e[e.PAGE_NUMBER = 32] = "PAGE_NUMBER", e))(an || {}), nn = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.HEADER = 1] = "HEADER", e[e.FOOTER = 2] = "FOOTER", e[e.DATE = 4] = "DATE", e[e.PAGE_NUMBER = 8] = "PAGE_NUMBER", e))(nn || {}), p = /* @__PURE__ */ ((e) => (e[e.Nil = 0] = "Nil", e[e.Table = 1] = "Table", e[e.Shape = 2] = "Shape", e[e.Text = 4] = "Text", e[e.SmartArt = 8] = "SmartArt", e[e.Chart = 16] = "Chart", e[e.Picture = 32] = "Picture", e[e.Notes = 64] = "Notes", e[e.Connector = 128] = "Connector", e[e.GroupAllConnector = 256] = "GroupAllConnector", e[e.HiddenRotate = 512] = "HiddenRotate", e[e.Placeholder = 1024] = "Placeholder", e[e.GroupShape = 2048] = "GroupShape", e[e.TableCell = 4096] = "TableCell", e))(p || {}), rn = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.GRID_LINE = 1] = "GRID_LINE", e[e.TASK_WINDOW = 2] = "TASK_WINDOW", e[e.RULER_LINE = 4] = "RULER_LINE", e[e.GUIDES_LINE = 8] = "GUIDES_LINE", e))(rn || {}), ve = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.TITLE = 1] = "TITLE", e[e.TEXT = 2] = "TEXT", e[e.DATE = 4] = "DATE", e[e.SLIDE_NUMBER = 8] = "SLIDE_NUMBER", e[e.FOOTER = 16] = "FOOTER", e))(ve || {}), on = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.DELETE_CURRENT_COMMENT = 1] = "DELETE_CURRENT_COMMENT", e[e.DELETE_CURRENT_SLIDE = 2] = "DELETE_CURRENT_SLIDE", e[e.DELETE_ALL_COMMENTS = 4] = "DELETE_ALL_COMMENTS", e))(on || {}), Je = /* @__PURE__ */ ((e) => (e.Start = "start", e.Insert = "insert", e.View = "view", e.Review = "review", e.SlideShow = "slideShow", e))(Je || {}), pe = /* @__PURE__ */ ((e) => (e.SlideMaster = "slideMaster", e.HandoutMaster = "handoutMaster", e.NotesMaster = "notesMaster", e.Shape = "shape", e.TableTools = "tableTools", e.TableStyle = "tableStyle", e))(pe || {}), An = /* @__PURE__ */ ((e) => (e.Font = "FontSetting", e.Paragraph = "ParagraphSetting", e.Shape = "shape", e))(An || {});
const Tt = {
  start: {
    name: "start",
    label: "toolbar.start.title",
    component: "StartBarGroup"
  },
  insert: {
    name: "insert",
    label: "toolbar.insert.title",
    component: "InsertGroup"
  },
  view: {
    name: "view",
    label: "toolbar.view.title",
    component: "ViewGroup"
  },
  review: {
    name: "review",
    label: "toolbar.review.title",
    component: "ReviewGroup"
  },
  slideShow: {
    name: "slideShow",
    label: "toolbar.slideShow.title",
    component: "SlideShowGroup"
  }
}, ft = {
  slideMaster: {
    name: "slideMaster",
    label: "toolbar.slideMaster.title",
    component: "SlideMasterGroup"
  },
  handoutMaster: {
    name: "handoutMaster",
    label: "toolbar.handoutMaster.title",
    component: "HandoutMasterGroup"
  },
  notesMaster: {
    name: "notesMaster",
    label: "toolbar.notesMaster.title",
    component: "NotesMasterGroup"
  },
  shape: {
    name: "shape",
    label: "toolbar.shapeToolbar.title",
    component: "ShapeToolGroup"
  },
  tableTools: {
    name: "tableTools",
    label: "toolbar.tableTools.title",
    component: "TableToolGroup"
  },
  tableStyle: {
    name: "tableStyle",
    label: "toolbar.tableStyle.title",
    component: "TableStyleGroup"
  }
};
var sn = /* @__PURE__ */ ((e) => (e.Lines = "Lines", e.Rectangles = "Rectangles", e.Basic = "Basic Shapes", e.Arrows = "Block Arrows", e.Equation = "Equation Shpae", e.Chart = "Flowchart", e.Stars = "Stars and Banners", e.Callouts = "Callouts", e.Action = "Action Buttons", e))(sn || {}), Et = /* @__PURE__ */ ((e) => (e.SINGLE = "Single", e.BETWEEN_RELATIVE = "Between_Relative", e.MULTIPLE = "Multiple", e.NONE = "None", e))(Et || {}), Ke = /* @__PURE__ */ ((e) => (e.NONE = "None", e.GROUP = "Group", e.UNGROUP = "UnGroup", e.GROUP_OR_UNGROUP = "Group_Or_UnGroup", e))(Ke || {}), R = /* @__PURE__ */ ((e) => (e.NormalView = "Normal_View", e.SlideSorter = "Slide_Sorter", e.NotesPage = "Notes_Page", e.ReadingView = "Reading_View", e.SlideMaster = "Slide_Master", e.HandoutMaster = "Handout_Master", e.NotesMaster = "Notes_Master", e))(R || {}), Pe = /* @__PURE__ */ ((e) => (e.INTERNAL = "Internal", e.EXTERNAL = "External", e))(Pe || {}), ke = /* @__PURE__ */ ((e) => (e.COMMENT_CREATE = "comment_create", e.COMMENT_DELETE = "comment_delete", e.COMMENT_UPDATE = "comment_update", e.COMMENT_ADD_REPLY = "comment_add_reply", e.COMMENT_ACTIVE_CHANGE = "comment_active_change", e))(ke || {}), Q = /* @__PURE__ */ ((e) => (e.GET = "get", e.SET = "set", e))(Q || {}), At = /* @__PURE__ */ ((e) => (e.SEARCH = "search", e.NEXT = "next", e.PREV = "prev", e.FOCUS_EDITOR = "focusEditor", e))(At || {}), Be = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.DELETE_ROW = 1] = "DELETE_ROW", e[e.DELETE_COLUMN = 2] = "DELETE_COLUMN", e))(Be || {}), dn = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.FIRST_ROW_FILL = 1] = "FIRST_ROW_FILL", e[e.INTERLEAVING_ROW_FILL = 2] = "INTERLEAVING_ROW_FILL", e[e.FIRST_COLUMN_FILL = 4] = "FIRST_COLUMN_FILL", e[e.LAST_ROW_FILL = 8] = "LAST_ROW_FILL", e[e.INTERLEAVING_COLUMN_FILL = 16] = "INTERLEAVING_COLUMN_FILL", e[e.LAST_COLUMN_FILL = 32] = "LAST_COLUMN_FILL", e))(dn || {}), pn = /* @__PURE__ */ ((e) => (e[e.NO_BORDER = 0] = "NO_BORDER", e[e.ALL_BORDER = 1] = "ALL_BORDER", e[e.OUTER_BORDER = 2] = "OUTER_BORDER", e[e.INNER_BORDER = 4] = "INNER_BORDER", e[e.TOP_BORDER = 8] = "TOP_BORDER", e[e.BOTTOM_BORDER = 16] = "BOTTOM_BORDER", e[e.LEFT_BORDER = 32] = "LEFT_BORDER", e[e.RIGHT_BORDER = 64] = "RIGHT_BORDER", e[e.INNER_HORIZONTAL_BORDER = 128] = "INNER_HORIZONTAL_BORDER", e[e.INNER_VERTICAL_BORDER = 256] = "INNER_VERTICAL_BORDER", e[e.DECLINE_BORDER = 512] = "DECLINE_BORDER", e[e.INCREASE_BORDER = 1024] = "INCREASE_BORDER", e))(pn || {});
function el(e) {
  return Object.values({
    Start: "start",
    Insert: "insert",
    View: "view",
    Review: "review",
    SlideShow: "slideShow"
  }).includes(e);
}
var Te = /* @__PURE__ */ ((e) => (e.None = "", e.THUMBNAIL = "Thumbnail", e.THUMBNAIL_GAP_LINE = "ThumbnailGapLine", e.SORTER_THUMBNAIL = "SorterThumbnail", e.SORTER_THUMBNAIL_GAP_LINE = "SorterThumbnailGapLine", e.SECTION = "Section", e.SLIDE_MAIN = "SlideMain", e.NOTES_VIEW = "NotesView", e.SLIDE_SORTER = "SlideSorter", e.NOTES_PAGE = "NotesPage", e.SLIDE_MASTER_THUMBNAIL = "SlideMasterThumbnail", e.SLIDE_LAYOUT_THUMBNAIL = "SlideLayoutThumbnail", e.SLIDE_MASTER_THUMBNAIL_TOPGAP = "SlideMasterThumbnailTopGapLine", e.SLIDE_LAYOUT_THUMBNAIL_GAP_LINE = "SlideLayoutThumbnailGapLine", e.SLIDE_MASTER_MAIN = "SlideMasterMain", e.NOTES_MASTER = "NotesMaster", e.PLAY_MAIN = "PlayMain", e))(Te || {}), st = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.MARGE = 1] = "MARGE", e[e.SPLIT = 2] = "SPLIT", e))(st || {});
function cn(e, t, l = window) {
  let n = null;
  const r = () => {
    n && (clearInterval(n), n = null);
  }, A = (Z) => {
    e.dispatch("file/onError", Z);
  };
  l.addEventListener("FileError", A);
  const o = (Z) => {
    e.dispatch("file/onReady", Z), e.dispatch("file/onLoadPageEnd", Z), e.commit("command/setLoadEnd", !0), t.refresh(z.Init);
  };
  l.addEventListener("DocumentReady", o);
  const u = (Z) => {
    t.refresh(z.ZoomChange);
  };
  l.addEventListener("ZoomChange", u);
  const d = (Z) => {
    e.dispatch("file/onExportReady", Z), t.refresh(z.ExportReady);
  };
  l.addEventListener("ExportReady", d);
  const f = (Z) => {
    t.refresh(z.UndoRedoChange);
  };
  l.addEventListener("UndoRedoChange", f);
  const m = (Z) => {
    const { currentPage: P } = (Z == null ? void 0 : Z.detail) || {};
    e.commit("file/setCurrentPage", P);
  };
  l.addEventListener("CurrentPage", m);
  const s = (Z) => {
    const { totalPages: P, slideShow: S } = (Z == null ? void 0 : Z.detail) || {};
    e.commit("file/setPageCount", P), e.commit("command/setEnabled", {
      cmd: a.Play,
      enabled: P > 0
    }), e.commit("command/setEnabled", {
      cmd: a.ShowHideSlide,
      enabled: P > 0
    }), e.commit("command/setActive", { ui: { value: !S }, cmd: a.ShowHideSlide }), t.refresh(z.SelectionChange);
  };
  l.addEventListener("PageCount", s);
  const y = (Z) => {
    let P = Z == null ? void 0 : Z.detail;
    un(e, P), mn(e, P), vn(e, P), gn(e, P), bn(e, P, t.api), t.refresh(z.SelectionChange);
  };
  l.addEventListener("SelectionChange", y);
  const b = (Z) => {
    xn(e, Z.detail), t.refresh(z.ViewChange);
  };
  l.addEventListener("ViewChange", b);
  const x = (Z) => {
    yn(e, Z.detail);
  };
  l.addEventListener("LayoutSetChange", x);
  const M = (Z) => {
    Sn(e, Z.detail);
  };
  l.addEventListener("SectionSetChange", M);
  const w = (Z) => {
    Mn(e, Z.detail);
  };
  l.addEventListener("SlideMasterStateChange", w);
  const H = (Z) => {
    e.commit("command/setState", { ui: { value: Z.detail }, cmd: a.SlideMasterPreserve });
  };
  l.addEventListener("SlideMasterUpdatePreserve", H);
  const h = (Z) => {
    Pn(e, Z.detail);
  };
  l.addEventListener("CommentUpdate", h);
  const g = (Z) => {
    var P, S, X;
    e.commit("command/setEnabled", {
      cmd: a.PreviousComment,
      enabled: (P = Z.detail) == null ? void 0 : P.info
    }), e.commit("command/setEnabled", {
      cmd: a.NextComment,
      enabled: (S = Z.detail) == null ? void 0 : S.info
    }), e.commit("command/setEnabled", {
      cmd: a.ShowHideCommentFlag,
      enabled: (X = Z.detail) == null ? void 0 : X.info
    });
  };
  l.addEventListener("CheckAllComments", g);
  const I = (Z) => {
    e.dispatch("file/onReady", Z), r();
    function P(le, j) {
      return Math.floor(Math.random() * (j - le + 1)) + le;
    }
    let S = 0, X = 50;
    const q = () => {
      const le = P(S, X);
      e.commit("file/setLoadingStepTime", le), S = X, X = Math.min(X + P(20, 50), 100), S >= 100 && (S = 0, X = 50);
    };
    n = window.setInterval(() => {
      if ((e == null ? void 0 : e.getters["file/loadingRatio"]) === 100) {
        r(), e.commit("file/setLoadingStepTime", 1e3);
        return;
      }
      q();
    }, 3e3), q();
  };
  l.addEventListener("FirstPageLoaded", I);
  const _ = () => {
    t.enableEditor();
  };
  l.addEventListener("EditorEnable", _);
  const L = (Z) => {
    e.commit("file/setShowFindDialog", !0);
  };
  l.addEventListener("OpenFindDialog", L);
  const V = () => {
    t.disableEditor();
  };
  l.addEventListener("EditorDisable", V);
  const k = (Z) => {
    var P;
    t.notifySecurityError(((P = Z.detail) == null ? void 0 : P.action) || "");
  };
  l.addEventListener("SecurityError", k);
  const C = (Z) => {
    var le, j;
    (le = Z.detail) != null && le.info;
    let { info: P, resolve: S, reject: X } = Z.detail || {}, q = (P == null ? void 0 : P.join(",")) || "";
    (j = t.api.uploadLocalImage(q)) == null || j.then((Ne) => {
      S(Ne);
    }).catch((Ne) => {
      X(Ne);
    });
  };
  return l.addEventListener("UploadImage", C), () => {
    l.removeEventListener("FileError", A), l.removeEventListener("DocumentReady", o), l.removeEventListener("Zoom_Changed", u), l.removeEventListener("ExportReady", d), l.removeEventListener("UndoRedoChange", f), l.removeEventListener("CurrentPage", m), l.removeEventListener("PageCount", s), l.removeEventListener("FirstPageLoaded", I), l.removeEventListener("EditorEnable", _), l.removeEventListener("EditorDisable", V), l.removeEventListener("SecurityError", k), l.removeEventListener("UploadImage", C), l.removeEventListener("OpenFindDialog", L), l.removeEventListener("CommentUpdate", h), l.removeEventListener("SlideMasterUpdatePreserve", H), l.removeEventListener("SlideMasterStateChange", w), l.removeEventListener("SectionSetChange", M), l.removeEventListener("LayoutSetChange", x), l.removeEventListener("ViewChange", b), l.removeEventListener("SelectionChange", y), l.removeEventListener("CheckAllComments", g), r();
  };
}
function un(e, t) {
  t && fl(e, t);
}
function mn(e, t) {
  if (!hl(t)) return;
  const l = t.tableMergeSplitType;
  e.commit("command/setEnabled", {
    cmd: a.MergeCells,
    enabled: (l & st.MARGE) === st.MARGE
  }), e.commit("command/setEnabled", {
    cmd: a.SplitCells,
    enabled: (l & st.SPLIT) === st.SPLIT
  });
}
function hn(e) {
  return (Number(e.selectType) & p.Notes) === p.Notes;
}
function jt(e) {
  return (Number(e.selectType) & p.Text) === p.Text;
}
function fn(e) {
  return (Number(e.selectType) & p.Shape) === p.Shape;
}
function cl(e) {
  return Number(e.selectType) === p.Connector;
}
function ul(e) {
  return (Number(e.selectType) & p.Picture) === p.Picture;
}
function ml(e) {
  return Number(e.selectType) === p.GroupAllConnector;
}
function hl(e) {
  return (Number(e.selectType) & p.Table) === p.Table;
}
function vn(e, t) {
  if (fn(t) || ul(t) || ml(t) || cl(t) || jt(t) || hl(t))
    e.dispatch("menu/setSelectedElement", { value: Number(t.selectType) }), t.commentId && e.commit("panel/setCommentId", t.commentId);
  else {
    if (e.getters["command/active"](a.NotesPage)) return;
    e.dispatch("menu/setSelectedElement", { value: p.Nil });
  }
  t.shapeAlign === Et.SINGLE && e.commit("command/setAlignTarget", "alignSlide"), e.commit("command/setGroupState", t.groupState), e.commit("command/setShapeAlign", t.shapeAlign);
  let l = typeof t.shapeSize.width == "string" ? "" : Number((t.shapeSize.width / 10).toFixed(2)), n = typeof t.shapeSize.height == "string" ? "" : Number((t.shapeSize.height / 10).toFixed(2));
  e.commit("command/setState", {
    cmd: a.ShapeSetWidth,
    ui: {
      value: l
    }
  }), e.commit("command/setState", {
    cmd: a.ShapeSetHeight,
    ui: {
      value: n
    }
  });
}
function gn(e, t) {
  t && ((jt(t) || hn(t)) && t.isOnlyCursor || t.selectType === p.Nil ? e.commit("command/setCutAndCopyEndabled", !1) : e.commit("command/setCutAndCopyEndabled", !0), e.commit("command/setFormatPaintEndabled", t.selectType !== p.Nil));
}
function bn(e, t, l) {
  if (!t || cl(t) || ul(t) || t.selectType === p.Nil || ml(t)) return;
  let n = Number(t.listLevel);
  e.commit("command/setListLevel", n), jt(t) && (e.commit("command/setEnabled", {
    cmd: a.IncreaseListLevel,
    enabled: n >= 1 && n <= 8
  }), e.commit("command/setEnabled", {
    cmd: a.DecreaseListLevel,
    enabled: n < 8 && n >= 0
  }));
  let r = {
    algn: t.paragraphData.algn,
    bullet: t.paragraphData.bullet,
    indFirstLine: ot(t.paragraphData.indFirstLine) ? t.paragraphData.indFirstLine : Number(((t.paragraphData.indFirstLine || 0) / 10).toFixed(2)),
    //转cm
    indLeft: ot(t.paragraphData.indLeft) ? t.paragraphData.indLeft : Number(((t.paragraphData.indLeft || 0) / 10).toFixed(2)),
    //转cm
    spaceBefore: ot(t.paragraphData.spaceBefore) ? t.paragraphData.spaceBefore : Number(l.getUnitValue(t.paragraphData.spaceBefore ?? 0, "mm", "pt").toFixed(2)),
    //转磅
    spaceAfter: ot(t.paragraphData.spaceAfter) ? t.paragraphData.spaceAfter : Number(l.getUnitValue(t.paragraphData.spaceAfter ?? 0, "mm", "pt").toFixed(2)),
    //转磅
    spaceLineRule: t.paragraphData.spaceLineRule,
    spaceLine: ot(t.paragraphData.spaceLine) ? t.paragraphData.spaceLine : t.paragraphData.spaceLineRule === 2 ? Number(l.getUnitValue(t.paragraphData.spaceLine ?? 0, "mm", "pt").toFixed(2)) : t.paragraphData.spaceLine,
    lvl: t.paragraphData.lvl
  };
  e.commit("command/setParagraphData", r), e.commit("command/setTextPropertyData", t.textPropertyData), e.commit("command/setState", {
    cmd: a.UnderlineColor,
    ui: {
      value: t.textPropertyData.underlineColor || ""
    }
  }), e.commit("command/setEnabled", {
    cmd: a.UnderlineColor,
    enabled: t.textPropertyData.underline !== "none" && t.textPropertyData.underline !== ""
  }), wn(e, t, r);
}
function ot(e) {
  return e === null || e === -1 || e === "";
}
function wn(e, t, l) {
  var r;
  const n = {
    [a.AlignText]: { value: ["top", "center", "bottom"].indexOf(t.alignVertical) },
    [a.LineSpacing]: { value: { 1: "one", 1.5: "oneHalf", 2: "two", 2.5: "twoHalf", 3: "three" }[l.spaceLine] },
    [a.TextDirection]: { value: t.textDirection }
  };
  for (let A in n)
    e.commit("command/setState", {
      cmd: A,
      ui: {
        value: ((r = n[A]) == null ? void 0 : r.value) ?? ""
      }
    });
}
function xn(e, t, l) {
  [
    { cmd: a.NormalView, key: "viewName", name: R.NormalView },
    { cmd: a.SlideSorter, key: "viewName", name: R.SlideSorter },
    { cmd: a.NotesPage, key: "viewName", name: R.NotesPage },
    { cmd: a.ReadingView, key: "viewName", name: R.ReadingView },
    { cmd: a.SlideMaster, key: "viewName", name: R.SlideMaster },
    { cmd: a.HandoutMaster, key: "viewName", name: R.HandoutMaster },
    { cmd: a.NotesMaster, key: "viewName", name: R.NotesMaster }
  ].forEach(({ cmd: r, key: A, name: o }) => {
    e.commit("command/setActive", {
      cmd: r,
      ui: {
        value: t[A] === o
      }
    });
  }), e.commit("command/setViewName", t.viewName), t.viewName === R.NotesMaster ? e.commit("menu/setHideMenu", { tabs: Je.SlideShow, hide: !0 }) : e.commit("menu/setHideMenu", { tabs: Je.SlideShow, hide: !1 }), fl(e, t);
}
function yn(e, t) {
  if (!t) return;
  [
    { cmd: a.InsertLayout, key: "enabled" },
    { cmd: a.ResetSlide, key: "enabled" }
  ].forEach(({ cmd: n, key: r }) => {
    e.commit("command/setEnabled", {
      cmd: n,
      enabled: t[r]
    });
  }), e.commit("command/setCutAndCopyEndabled", t.enabled), e.commit("command/setFormatPaintEndabled", t.enabled);
}
function Sn(e, t) {
  if (!t) return;
  let l = { add: !1, rename: !1, remove: !1, removeAll: !1, collapse: !1, expand: !1 };
  switch (t.state) {
    case Ze.ADD_SECTION_ONLY:
      l = { add: !0, rename: !1, remove: !1, removeAll: !1, collapse: !1, expand: !1 };
      break;
    case Ze.UNADD_SECTION:
      l = { add: !1, rename: !0, remove: !0, removeAll: !0, collapse: !0, expand: !0 };
      break;
    case Ze.UNREMOVE_CURRENT_SECTION:
      l = { add: !0, rename: !0, remove: !1, removeAll: !0, collapse: !0, expand: !0 };
      break;
    case Ze.UNREMOVE_ALL_SECTION:
      l = { add: !0, rename: !0, remove: !1, removeAll: !1, collapse: !0, expand: !0 };
      break;
    case Ze.UNREMOVE_AND_UNRENAME_CURRENT:
      l = { add: !0, rename: !1, remove: !1, removeAll: !0, collapse: !0, expand: !0 };
      break;
    case Ze.UNADD_AND_UNREMOVE_CURRENT:
      l = { add: !1, rename: !0, remove: !1, removeAll: !0, collapse: !0, expand: !0 };
      break;
    case Ze.UNAVAILABLE_SECTION:
      e.commit("command/setEnabled", {
        cmd: a.Section,
        enabled: !1
      });
      return;
  }
  e.commit("command/setEnabledList", {
    cmd: a.Section,
    enabledList: l
  }), e.commit("command/setEnabled", {
    cmd: a.Section,
    enabled: !0
  });
}
function Mn(e, t) {
  if (!t) return;
  if (typeof t.state == "number") {
    [
      { cmd: a.SlideMasterInsert, key: De.INSERT_MASTER },
      { cmd: a.SlideMasterInsertLayout, key: De.INSERT_LAYOUT },
      { cmd: a.SlideMasterInsertPlaceHolder, key: De.INSERT_PLACEHOLDER },
      { cmd: a.SlideMasterDelete, key: De.DELETE_LAYOUT_OR_MASTER },
      { cmd: a.SlideMasterPreserve, key: De.PRESERVE_MASTER },
      { cmd: a.SlideMasterRename, key: De.RENAME_MASTER_OR_LAYOUT },
      { cmd: a.SlideMasterLayout, key: De.SET_MASTER_PLACEHOLDER }
    ].forEach((A) => {
      e.commit("command/setEnabled", {
        cmd: A.cmd,
        enabled: (t.state & A.key) === A.key
      });
    });
    return;
  }
  let l = [], n = [
    a.SlideMasterInsertLayout,
    a.SlideMasterDelete,
    a.SlideMasterPreserve,
    a.SlideMasterRename,
    a.SlideMasterInsertPlaceHolder,
    a.SlideMasterLayout
  ];
  switch (t.state) {
    case Ue.ALL_INSERT_LAYOUT:
      l = [a.SlideMasterInsertLayout];
      break;
    case Ue.INSERT_AND_RENAME:
      l = [a.SlideMasterInsertLayout, a.SlideMasterRename, a.SlideMasterInsertPlaceHolder];
      break;
    case Ue.INSERT_AND_RENAME_AND_PRESERVE:
      l = [a.SlideMasterInsertLayout, a.SlideMasterRename, a.SlideMasterPreserve, a.SlideMasterLayout];
      break;
    case Ue.INSERT_AND_REMOVE_AND_RENAME:
      l = [a.SlideMasterInsertLayout, a.SlideMasterDelete, a.SlideMasterRename, a.SlideMasterInsertPlaceHolder];
      break;
    case Ue.ALL_ENABLED:
      l = [a.SlideMasterInsertLayout, a.SlideMasterDelete, a.SlideMasterPreserve, a.SlideMasterRename, a.SlideMasterLayout];
      break;
    case Ue.ONLY_INSERT_MASTER:
      l = [];
      break;
    default:
      l = [];
      break;
  }
  n.forEach((r) => {
    e.commit("command/setEnabled", {
      cmd: r,
      enabled: l.includes(r)
    });
  });
}
function Pn(e, t) {
  t && (e.commit("command/setUserId", t.userId), e.commit("command/setState", {
    cmd: a.CommentUpdate,
    ui: {
      value: t.comments
    }
  }));
}
function fl(e, t) {
  if (!t) return;
  const l = e.getters["command/map"];
  Object.keys(l).forEach((n) => {
    const r = l[n];
    if (r.special)
      tl(e, n, t, r);
    else {
      let A = !1;
      if (r.enabledElement.length > 0 ? A = r.enabledElement.some((o) => (Number(t.selectType) & o) === o) : A = !0, A)
        if (r.disabledView.length > 0) {
          let o = t.viewName;
          o || (o = e.getters["command/viewName"]), A = !r.disabledView.some((u) => o === u);
        } else A = !0;
      e.commit("command/setEnabled", {
        cmd: n,
        enabled: A
      }), A ? tl(e, n, t, r) : e.commit("command/clearState", { cmd: n });
    }
  });
}
function tl(e, t, l, n) {
  if (l[t] === void 0) return;
  let r;
  n.getVal ? r = n.getVal(l[t]) : r = l[t], e.commit("command/setState", { cmd: t, ui: { value: r } });
}
const Ae = Symbol("CommandService");
class Hn {
  constructor(t) {
    ge(this, "store");
    ge(this, "api");
    ge(this, "pptReady");
    ge(this, "eventTarget");
    ge(this, "removeListeners");
    ge(this, "handlers");
    ge(this, "refreshers");
    ge(this, "securityErrorHandler");
    ge(this, "modeController");
    ge(this, "removeModeListener");
    this.store = t.store, this.api = t.api, this.pptReady = !1, this.eventTarget = t.eventTarget ?? window, this.removeListeners = () => {
    }, this.handlers = {}, this.refreshers = {}, this.securityErrorHandler = () => {
    }, this.modeController = null, this.removeModeListener = () => {
    };
  }
  initApi(t) {
    var l, n;
    this.pptReady = !1, this.store.commit("command/resetCommandState"), (l = this.removeListeners) == null || l.call(this), (n = this.removeModeListener) == null || n.call(this), this.api.initApi(t), this.bindDocumentMode(t), this.syncReadOnlyState(), this.removeListeners = cn(this.store, this, this.eventTarget);
  }
  initApp(t) {
    this.initApi(t);
  }
  destroy() {
    var t, l;
    (t = this.removeListeners) == null || t.call(this), (l = this.removeModeListener) == null || l.call(this), this.modeController = null, this.removeListeners = () => {
    }, this.removeModeListener = () => {
    };
  }
  dispose() {
    this.destroy();
  }
  setSecurityErrorHandler(t) {
    this.securityErrorHandler = t || (() => {
    });
  }
  notifySecurityError(t) {
    this.securityErrorHandler(t);
  }
  enableEditor() {
    this.pptReady = !0, this.refresh(z.Init);
  }
  disableEditor() {
    this.pptReady = !1, this.refresh(z.Init);
  }
  canRefreshCommand(t) {
    return this.pptReady ? !0 : this.isReadOnly() && this.store.getters["command/loadEnd"] === !0 && Pt.has(t);
  }
  //refresheres
  registerHandler(t, l) {
    this.handlers[t], this.handlers[t] = l;
  }
  registerRefresher(t, l) {
    this.refreshers[t] = l;
  }
  refreshAll() {
    this.syncReadOnlyState(), this.refreshSome(Object.values(a));
  }
  refresh(t) {
    var n, r, A;
    this.syncReadOnlyState();
    const l = Object.values(a);
    for (const o of l) {
      const u = this.handlers[o];
      u && ((n = u.refresh) != null && n.has(t)) && ((A = (r = this.refreshers)[o]) == null || A.call(r, this));
    }
  }
  refreshSome(t) {
    var l, n;
    this.syncReadOnlyState();
    for (const r of t)
      (n = (l = this.refreshers)[r]) == null || n.call(l, this);
  }
  bindDocumentMode(t) {
    var l;
    this.modeController = Ka(t), this.removeModeListener = ((l = this.modeController) == null ? void 0 : l.onChange((n) => {
      this.store.commit("command/setReadOnly", n), n && this.disableEditor();
    })) ?? (() => {
    });
  }
  isReadOnly() {
    var t;
    return ((t = this.modeController) == null ? void 0 : t.isReadOnly()) ?? !1;
  }
  syncReadOnlyState() {
    this.store.commit("command/setReadOnly", this.isReadOnly());
  }
  canRunInReadOnly(t) {
    return Pt.has(t);
  }
  /** 执行命令：统一入口 */
  async run(t, l) {
    this.syncReadOnlyState();
    const n = this.handlers[t];
    if (!n) {
      console.error(`[CommandService] no handler registered for "${t}"`);
      return;
    }
    this.isReadOnly() && !this.canRunInReadOnly(t) || await this.store.dispatch("command/run", {
      cmd: t,
      param: l,
      fn: async (r) => {
        await n.run(this.api, r);
      }
    });
  }
}
const kn = { class: "global-basic-display-text count" }, zn = /* @__PURE__ */ Y({
  __name: "SearchContentDialog",
  emits: ["update:show"],
  setup(e, { emit: t }) {
    const l = ie(Ae), n = re(), r = N(""), A = N(0), o = N(0), u = N(null), d = F(() => n == null ? void 0 : n.getters["file/showFindDialog"]);
    G(d, (h) => {
      h && x();
    });
    function f(h) {
      const g = { value: h };
      l.run(a.SearchReplaceWord, g);
    }
    function m() {
      if (!r.value) {
        o.value = 0, A.value = 0;
        return;
      }
      f({
        action: "search",
        val: r.value
      }), b();
    }
    function s() {
      f({
        action: "next"
      }), b();
    }
    function y() {
      f({
        action: "prev"
      }), b();
    }
    function b() {
      var h, g;
      A.value = ((h = n == null ? void 0 : n.getters["command/getVal"](a.SearchReplaceWord)) == null ? void 0 : h.countNum) || 0, o.value = ((g = n == null ? void 0 : n.getters["command/getVal"](a.SearchReplaceWord)) == null ? void 0 : g.totalCount) || 0;
    }
    function x() {
      r.value = l.api.getSearchSelectedWord() || "", setTimeout(w, 100), m();
    }
    function M() {
      f({
        action: "focusEditor"
      }), r.value = "", o.value = 0, A.value = 0, n.commit("file/setShowFindDialog", !1);
    }
    function w() {
      var h;
      (h = u == null ? void 0 : u.value) == null || h.focus();
    }
    function H(h) {
      h || M();
    }
    return (h, g) => (T(), E("div", null, [
      i(v(Le), {
        show: d.value,
        "onUpdate:show": H,
        title: h.$t("dialogs.search.name"),
        width: 300,
        "show-mask": !1,
        draggable: !0
      }, {
        action: c(() => [
          i(v(ne), {
            label: h.$t("dialogs.search.prev"),
            onClickButton: g[2] || (g[2] = (I) => y()),
            type: "standard"
          }, null, 8, ["label"]),
          i(v(ne), {
            label: h.$t("dialogs.search.next"),
            onClickButton: g[3] || (g[3] = (I) => s())
          }, null, 8, ["label"])
        ]),
        default: c(() => [
          i(v(Hl), {
            value: r.value,
            "onUpdate:value": g[0] || (g[0] = (I) => r.value = I),
            placeholder: h.$t("dialogs.search.findPlaceHolder"),
            onInput: g[1] || (g[1] = (I) => m()),
            onKeydown: me(s, ["enter"]),
            ref_key: "inputInstRef",
            ref: u
          }, {
            suffix: c(() => [
              O("span", kn, W(A.value) + "/" + W(o.value), 1)
            ]),
            _: 1
          }, 8, ["value", "placeholder"])
        ]),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}), Ln = /* @__PURE__ */ oe(zn, [["__scopeId", "data-v-a2ada18d"]]);
function ll(e) {
  const t = e.Paragraph.callFun("getSingleTextSelection");
  return (t == null ? void 0 : t.bCollapsed) === !1;
}
function Nn(e) {
  return e.Selection.callFun("updateSelectionType");
}
const Tn = "data:image/png;base64,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Y3Ctqdx/fzfbij+5PPTRHtM8UEzTM1AyAAAAAAAA0N1y1w/e/b608pufTON4/Y8/lW6+/u00adFB+Wc/+9kd791NomNq3gena7Va82bT8z/+8Y830hzt7OxE8LpKflRv3rx5IjGKaXbK0pmqj24jkU5IdVFHAB3ze0/te424XYu2PU1dt2vKx13f9U9Js8PU8S9+8YvVNEHRKaVedAYpgqpMSzU/KtGha9jvEMEbcv48VFCKRUt/io5sa/lldKBZ7dchKsolS0tL8R0aASqm/NvMVPF7bsbr6IiVv1ujY3n+npUiANK5PM3LEfBj0GWWSulK3HBYPtwox20MMMta/Mnlq800ojzvufwbxfbqoNTFhM/Diae7Uzwv6/nx5i/8wi988/vf//6/+PM///N/W6lU/sujR4+u5fnvzcf9rQlbX7colcvl9xw+fPje/Pi1PN/jR44c+X/95V/+5X/3i7/4i9/M58lP8nwDBy1/+fEjt03bHPl+0PdHNe9y2qIff0xWPdXXO7wbHcc2Wt+Z0HHR9XiYdLrywLPXeh53zU7OOV8dOIhz5L05HYny35MPPvhgNaczW+1ls+ikWE57Afyik2Lz/Zagfo2ghI33BpyuVQx2cO3atafytqyPs/399k837fONe37nbTofZZj827cG+bowqeUPoVKUlzt2uJzmdqw++0aU5wYOFvTyE0efysdIY/pauX6iU4DLQbe39XhNPQJmDmrav9c86uX5uIhgePHyC63vF2nWHelIBNrL03+hPVhgL5He5TTteAT/S28FATxedO6P9rPVvNxY3pPtddsIhJDTwEYw1CIIYAQwbBzHUScolhtBFNbzZy9H0Lx+25O/T7Pz8Faxfdt5/fEdn8rreaT5/rTE71xvCYIagR8iIEUEIlzE4EzDHl/5+02kvNg0anrOGN7M7dpv23uZKwHvSjO2srKyna997K2/VJro+sdKx28P/lct3m0GATyeNleraXFV4k/+/rdVMovzdWUC0/fUEtB6I41hUssZVZH3bba/P+l0b1Ii4Ebk8RFwY5TgSz3a1xfy+85bt+NjVoYJhjwN437/ee8/Jq9T8L54v6gT9L2mNXTwv7R45cZiMKOon0z6foRqfmzkdHrg9pK7Ud7/UberpL06862gCNG+lj+rxmezuL7WVv+L+t6FnEdvDnONaxIaQcZquxvxutE2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", de = {
  width: 5120,
  image: Tn
}, ct = {
  SetShapeAndTextPanel: "SetShapeAndTextPanel",
  CommentPanel: "CommentPanel"
}, vt = kl(), Vn = {
  namespaced: vt.namespaced,
  state: () => ({
    ...vt.state,
    commentId: null,
    showHideComment: !1
  }),
  getters: {
    ...vt.getters,
    commentId: (e) => e.commentId,
    showHideComment: (e) => e.showHideComment
  },
  mutations: {
    ...vt.mutations,
    setCommentId(e, t) {
      e.commentId = t;
    },
    setShowHideComment(e, t) {
      e.showHideComment = t;
    }
  }
}, Cn = { style: { width: "400px", "font-size": "12px" } }, Rn = { class: "global-basic-display-text panel-title shape-panel-title" }, Zn = { class: "shape-lines-container" }, Dn = { style: { display: "flex", "align-items": "center" } }, _n = { class: "shape-item" }, Bn = /* @__PURE__ */ Y({
  __name: "ShapePopupContent",
  props: /* @__PURE__ */ Ye({
    cmd: {},
    title: {},
    iconSize: { default: 18 },
    iconColor: { default: "var(--icon-primary)" }
  }, {
    show: {
      default: !1,
      type: Boolean
    },
    showModifiers: {}
  }),
  emits: /* @__PURE__ */ Ye(["trigger"], ["update:show"]),
  setup(e, { emit: t }) {
    const l = ie(Ae), n = re(), r = e, A = t, o = Re(e, "show"), u = F(() => n == null ? void 0 : n.getters["command/shapeList"]);
    function d(m, s) {
      A("trigger"), o.value = !1, m = JSON.parse(JSON.stringify({ ...m })), l.run(r.cmd, { value: { ...m, group: s.group } });
    }
    function f(m, s) {
      var b;
      let y = s.group;
      return y = ((b = y.match(/\S+/g)) == null ? void 0 : b.map((x) => x[0].toUpperCase() + x.slice(1)).join("")) + "", y = y[0].toLowerCase() + y.slice(1), y + "--" + m.id;
    }
    return (m, s) => (T(), E("div", Cn, [
      i(v(ut), { "max-height": 400 }, {
        default: c(() => [
          O("div", Rn, W(e.title), 1),
          (T(!0), E(fe, null, Se(u.value, (y) => (T(), E("div", {
            key: y.group
          }, [
            O("div", Zn, [
              O("div", Dn, [
                $(W(y.UIName) + " ", 1),
                i(v(Bt), {
                  vertical: !1,
                  margin: "0px 8px",
                  style: { "flex-grow": "1" }
                })
              ]),
              O("div", _n, [
                (T(!0), E(fe, null, Se(y.elements, (b) => (T(), K(v(kt), {
                  key: b.id || b.presetType,
                  onClick: (x) => d(b, y)
                }, {
                  trigger: c(() => [
                    i(v(ce), {
                      scope: "common",
                      name: f(b, y),
                      "icon-color": e.iconColor,
                      size: e.iconSize || 18,
                      style: { margin: "4px" }
                    }, null, 8, ["name", "icon-color", "size"])
                  ]),
                  default: c(() => [
                    $(" " + W(b.UIName), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"]))), 128))
              ])
            ])
          ]))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), Fn = /* @__PURE__ */ oe(Bn, [["__scopeId", "data-v-87a6e289"]]), On = typeof navigator < "u" && /Mac|iPhone|iPad|iPod/i.test(navigator.platform), Wt = (e) => On ? `⌘${e}` : `Ctrl+${e}`;
function In(e) {
  return {
    component: Ie(ce),
    props: e.iconName ? { name: e.iconName, size: e.size ?? 16 } : {
      x: e.x,
      y: e.y,
      size: e.size ?? 16,
      source: de.image,
      imageWidth: de.width
    }
  };
}
function Xn(e, t) {
  function l(o) {
    return e.getters["command/active"](o) === !0;
  }
  function n(o) {
    return e.getters["command/can"](o) === !0;
  }
  function r(o) {
    return e.getters["command/getVal"](o);
  }
  function A(o, u) {
    return t.run(o, u);
  }
  return function(o) {
    const u = o.active ?? (o.toggle ? l(o.command) : o.activeValue !== void 0 ? r(o.command) === o.activeValue : void 0);
    return {
      id: o.id,
      label: o.label,
      tooltip: o.label,
      icon: In(o),
      shortcut: o.shortcut,
      disabled: o.disabled ?? !n(o.command),
      active: u,
      loading: e.getters["command/isRunning"](o.command) === !0,
      onTrigger: () => {
        if (o.triggrHeandler) {
          o.triggrHeandler();
          return;
        }
        A(o.command, {
          value: o.toggle ? !l(o.command) : o.value
        });
      }
    };
  };
}
function En(e) {
  return {
    latinFontName: e.latinFontName,
    fontStyle: e.fontStyle,
    size: e.fontSize || null,
    asianFontName: e.easianFontName,
    fontColor: e.fontColor,
    underline: e.underline,
    underlineColor: e.underlineColor,
    effect: {
      strikethrough: e.strike,
      smallCaps: e.smallCaps,
      allCaps: e.allCaps,
      equalize: !1
    },
    offset: e.offset,
    spacing: e.textSpace > 0 ? "expanded" : e.textSpace < 0 ? "condensed" : "normal",
    by: e.textSpace,
    kerning: !0,
    kerningValue: 12
  };
}
function jn(e) {
  let t = "";
  e.spaceLineRule === null ? t = null : e.spaceLineRule === 2 ? t = "fixed" : [1, 1.5, 2].includes(e.spaceLine) ? t = { 1: "single", 1.5: "oneHalf", 2: "double" }[e.spaceLine] || "" : e.spaceLine >= 0 && (t = "multiple");
  let l = "none";
  return e.indFirstLine == null ? l = null : e.indFirstLine === 0 ? l = "none" : Number(e.indFirstLine) > 0 ? l = "firstLine" : l = "hang", {
    alignment: e.algn,
    indentBeforeText: e.indLeft,
    special: l,
    by: e.indFirstLine == null ? null : Math.abs(Number(e.indFirstLine)),
    spaceBefore: e.spaceBefore,
    spaceAfter: e.spaceAfter,
    lineSpace: t,
    at: t === null ? null : /fixed|multiple/.test(t) ? e.spaceLine : 0
  };
}
function we(e) {
  const t = e.action;
  return t({ id: "copy", label: e.t("toolbar.start.copy.title"), command: a.Copy, iconName: "ribbon_word_copy_16__clip_cell", value: !0, shortcut: Wt("C") });
}
function xe(e) {
  const t = e.action;
  return t({ id: "paste", label: e.t("toolbar.start.paste.title"), command: a.Paste, iconName: "Ribbon_word_past_24__clip_cell", size: 24, value: !0, shortcut: Wt("V") });
}
function ye(e) {
  const t = e.action;
  return t({ id: "cut", label: e.t("toolbar.start.cut"), command: a.Cut, iconName: "ribbon_word_cut_16__clip_cell", value: !0, shortcut: Wt("X") });
}
function mt(e) {
  const t = e.action;
  return t({ id: "delete", label: e.t("contextMenu.delete"), command: a.ShapeDelete, iconName: "R_word_delete_16__clip_cell", value: !0, shortcut: "Delete" });
}
function vl(e) {
  const t = e.action;
  return t({ id: "editVertex", label: e.t("toolbar.shapeToolbar.editShape.editVertex"), command: a.ShapeEditVertex, iconName: "R_word_delete_16__clip_cell", value: !0 });
}
function et(e) {
  const t = e.store.getters["command/groupState"], l = e.action;
  return {
    ...l({
      id: "group-1",
      label: e.t("toolbar.shapeToolbar.group.name"),
      command: a.ShapeGroup,
      iconName: "ribbon_word_copy_16__clip_cell",
      value: !0,
      disabled: t == Ke.NONE || t == Ke.UNGROUP,
      triggrHeandler: () => {
        e.commandService.run(a.ShapeGroup, { value: "group" });
      }
    }),
    kind: "split-action",
    secondaryAction: l({
      id: "group-2",
      label: "",
      command: a.ShapeGroup,
      iconName: "ribbon_word_cut_16__clip_cell",
      value: !0,
      disabled: t == Ke.NONE || t == Ke.GROUP,
      triggrHeandler: () => {
        e.commandService.run(a.ShapeGroup, { value: "ungroup" });
      }
    })
  };
}
function tt(e) {
  const t = e.action;
  return {
    ...t({
      id: "bringToFront-1",
      label: e.t("toolbar.shapeToolbar.bringToFront.bringToFront"),
      command: a.ShapeBringToFront,
      iconName: "ppt_drawing_tools_bring_front_16__clip_cell",
      value: !0,
      triggrHeandler: () => {
        e.commandService.run(a.ShapeBringToFront, { value: { value: "front" } });
      }
    }),
    kind: "split-action",
    secondaryAction: t({
      id: "bringToFront-2",
      label: "",
      command: a.ShapeBringToFront,
      iconName: "ppt_drawing_tools_move_up_16__clip_cell",
      value: !0,
      triggrHeandler: () => {
        e.commandService.run(a.ShapeBringToFront, { value: { value: "up" } });
      }
    })
  };
}
function lt(e) {
  const t = e.action;
  return {
    ...t({
      id: "sendToBack-1",
      label: e.t("toolbar.shapeToolbar.sendBackward.sendToBack"),
      command: a.ShapeSendToBack,
      iconName: "ppt_drawing_tools_send_back_16__clip_cell",
      value: !0,
      triggrHeandler: () => {
        e.commandService.run(a.ShapeSendToBack, { value: { value: "behind" } });
      }
    }),
    kind: "split-action",
    secondaryAction: t({
      id: "sendToBack-2",
      label: "",
      command: a.ShapeSendToBack,
      iconName: "ppt_drawing_tools_move_down_16__clip_cell",
      value: !0,
      triggrHeandler: () => {
        e.commandService.run(a.ShapeSendToBack, { value: { value: "down" } });
      }
    })
  };
}
function Nt(e) {
  const t = e.action, l = e.store.getters["command/textPropertyData"];
  return t({
    id: "font",
    label: e.t("toolbar.start.font") + "...",
    command: a.FontSetting,
    iconName: "ribbon_word_copy_16__clip_cell",
    triggrHeandler: () => {
      var r;
      let n = new Event("FontSetting");
      n.defaultValue = En(l), (r = e.eventTarget) == null || r.dispatchEvent(n);
    }
  });
}
function Ut(e) {
  const t = e.action, l = e.store.getters["command/paragraphData"];
  return t({
    id: "paragraph",
    label: e.t("toolbar.start.paragraph") + "...",
    command: a.ParagraphSetting,
    iconName: "ribbon_word_copy_16__clip_cell",
    triggrHeandler: () => {
      var r;
      let n = new Event("ParagraphSetting");
      n.defaultValue = jn(l), (r = e.eventTarget) == null || r.dispatchEvent(n);
    }
  });
}
function at(e) {
  const t = e.action;
  return t({
    id: "link-1",
    label: e.t("toolbar.insert.link.name") + "...",
    command: a.InsertLink,
    iconName: "ribbon_word_copy_16__clip_cell",
    triggrHeandler: () => {
      var n;
      let l = new Event("LinkSetting");
      (n = e.eventTarget) == null || n.dispatchEvent(l);
    }
  });
}
function Xe(e) {
  const t = e.action;
  return t({
    id: "object-1",
    label: e.t("toolbar.shapeToolbar.setFormatObject") + "...",
    command: a.RightShapeSetSize,
    iconName: "ribbon_word_copy_16__clip_cell",
    triggrHeandler: () => {
      e.store.commit("panel/openPanel", ct.SetShapeAndTextPanel);
    }
  });
}
function gl(e) {
  e.commandService.run(a.GetShapeTypeList, void 0);
  const t = e.action;
  return {
    ...t({
      id: "editShape",
      label: e.t("toolbar.shapeToolbar.editShape.changeShape"),
      command: a.ShapeEditShape,
      iconName: "ppt_drawing_tools_change_shape_16__clip_cell"
    }),
    kind: "submenu",
    menu: {
      width: 600,
      groups: [
        {
          id: "editShape-1",
          items: [
            {
              kind: "control",
              id: "from-editor-change",
              closeOnTrigger: "popup",
              control: {
                component: Ie(Fn),
                props: {
                  title: e.t("toolbar.shapeToolbar.editShape.changeShape"),
                  cmd: a.ShapeEditShape
                }
              }
            }
          ]
        }
      ]
    }
  };
}
const Wn = {
  common: {
    httpsOnly: "Please use this feature in an HTTPS environment",
    clipboardShortcutTip: "Browser security restrictions blocked this button action. Please use the {shortcut} keyboard shortcut.",
    allApply: "Apply to All",
    tooltipBegin: "Input from",
    tooltipTo: "to",
    tooltipEnd: "value"
  },
  editorPopup: {
    miniToolbar: "Selection mini toolbar",
    contextMenu: "Selection context menu"
  },
  unit: {
    pt: "pt",
    cm: "cm"
  },
  toolbar: {
    file: {
      title: "FILE",
      export: "Export",
      exportDocument: "Export",
      exportPDF: "Export PDF",
      open: "Open"
    },
    start: {
      title: "START",
      font: "Font",
      paragraph: "Paragraph",
      undo: "Undo",
      redo: "Redo",
      exitTextEdit: "Exit Text Edit",
      paste: {
        title: "Paste",
        option: "Paste Option",
        theme: "Use Destination Theme",
        format: "Keep Source Formatting",
        text: "Keep Text Only",
        special: "Paste Special..."
      },
      cut: "Cut",
      copy: {
        title: "Copy",
        copy: "Copy",
        duplicate: "Duplicate"
      },
      formatPainter: "Format Painter",
      new: "New",
      layout: "Layout",
      reset: "Reset",
      newSlide: "New Slide",
      copySlide: "Copy Slide",
      deleteSlide: "Delete Slide",
      hideSlide: "Hide Slide",
      newBlankSlide: "New Blank Slide",
      section: {
        title: "Section",
        add: "Add Section",
        rename: "Rename Section",
        remove: "Remove Section",
        removeAll: "Remove All Sections",
        collapse: "Collapse Section",
        expand: "Expand Section"
      },
      textShadow: "Text Shadow",
      characterSpacing: {
        title: "Character Spacing",
        veryTight: "Very Tight",
        tight: "Tight",
        medium: "Medium",
        loose: "Loose",
        veryLoose: "Very Loose",
        other: "Other Spacing"
      },
      changeCase: {
        title: "Change Case",
        sentence: "Sentence case",
        lower: "lowercase",
        upper: "UPPERCASE",
        capitalize: "Capitalize Each Word",
        toggle: "tOGGLE cASE"
      },
      increaseFontSize: "Increase Font Size",
      decreaseFontSize: "Decrease Font Size",
      clearAllFormatting: "Clear All Formatting",
      textHeightLightColor: "Text Highlight Color",
      bullet: {
        title: "Bullets",
        none: "None",
        round: "Large Filled Round Bullets",
        square: "Large Filled Square Bullets",
        diamond: "Filled Diamond Bullets",
        hollowSquare: "Bold Hollow Square Bullets",
        checkmark: "Checkmark Bullets",
        arrow: "Arrow Bullets",
        filledRound: "Filled Round Bullets",
        option: "Bullet And Numbering"
      },
      numbering: {
        title: "Numbering",
        none: "None",
        number: "1.2.3.",
        circled: "Circled Numbers",
        roman: "Ⅰ.Ⅱ.Ⅲ.",
        upper: "A.B.C.",
        lowerBracket: "a) b) c).",
        lower: "a.b.c.",
        ideographic: "Ideographic Numbers,wide period"
      },
      increaseListLevel: "Increase List Level",
      decreaseListLevel: "Decrease List Level",
      lineSpacing: {
        title: "Line Spacing",
        one: "1.0",
        oneHalf: "1.5",
        two: "2.0",
        twoHalf: "2.5",
        three: "3.0",
        option: "Line Spacing Option"
      },
      addOrRemoveColumns: {
        title: "Add or Remove Columns",
        one: "One Column",
        two: "Two Columns",
        three: "Three Columns",
        more: "More Columns"
      },
      textDirection: {
        title: "Text Direction",
        horizontal: "Horizontal",
        vertical: "Vertical",
        rotate90: "Rotate all text 90°",
        rotate270: "Rotate all text 270°",
        stacked: "Stacked",
        option: "More Option"
      },
      alignText: {
        title: "Align Text",
        top: "Top",
        middle: "Middle",
        bottom: "Bottom",
        option: "More Option"
      },
      convertToSmartArtGraphic: "Convert to Smart Art Graphic",
      newFromLayout: "New from Layout",
      bold: "Bold",
      italic: "Italic",
      underline: "Underline",
      strikeout: "Strikeout",
      fontClolor: "Font Clolor",
      highlightColor: "Highlight Color",
      textHighlightNone: "None",
      verticalAlignTop: "Align Top",
      verticalAlignCenter: "Align Center",
      verticalAlignBottom: "Align Bottom",
      horizontalAlignLeft: "Align Left",
      horizontalAlignCenter: "Align Center",
      horizontalAlignRight: "Align Right",
      horizontalAlignJustify: "Align Justify",
      horizontalAlignDistribute: "Align Distribute"
    },
    insert: {
      title: "INSERT",
      new: "New",
      table: {
        name: "Table",
        title: "Add a Table",
        optionName: "Insert Table",
        insert: "Insert Table",
        draw: "Draw Table",
        excel: "Excel Spreadsheet",
        row: "Row",
        column: "Column",
        moreRowColumn: "More Rows Columns"
      },
      picture: {
        name: "Pictures",
        title: "Insert Pictures",
        optionName: "Insert Pictures From",
        device: "This Device...",
        stock: "Stock Images...",
        online: "Online Pictures..."
      },
      shapes: {
        name: "Shapes",
        title: "Shapes",
        recently: "Recently Used Shapes",
        lines: "Lines",
        rectangles: "Rectangles",
        basic: "Basic Shapes",
        arrows: "Block Arrows",
        equation: "Equation",
        chart: "Flowchart",
        stars: "Stars and Banners",
        callouts: "Callouts",
        action: "Action Buttons"
      },
      textBox: {
        name: "Text Box",
        title: "Draw Horizontal Text Box",
        horizontal: "Draw Horizontal Text Box",
        vertical: "Vertical Text Box"
      },
      video: {
        name: "Video",
        title: "Insert Video",
        optionName: "Insert Video From",
        device: "Insert Video",
        link: "Link to Video"
      },
      audio: {
        name: "Audio",
        title: "Insert Audio",
        device: "Insert Audio",
        link: "Link to Audio",
        deviceBg: "Insert Background Music",
        linkBg: "Link Background Music"
      },
      // 公式
      equation: {
        name: "Equation",
        title: "Insert Equation",
        area: "Area Of Circle",
        binomial: "Binomial Theorem",
        expansion: "Expansion of a Sum",
        fourier: "Fourier Series",
        pythagorean: "Pythagorean Theorem",
        quadratic: "Quadratic Equation",
        taylor: "Taylor Expansion",
        trig1: "Trig Identity 1",
        trig2: "Trig Identity 2",
        insert: "Insert New Equation",
        lnk: "lnk Equation"
      },
      symbol: {
        name: "Symbol",
        title: "Insert Symbol",
        recent: "Recently Used Symbols",
        current: "Current Symbol",
        all: "All Symbols",
        other: "Other Symbols"
      },
      comment: {
        name: "Comment",
        title: "Insert Comment"
      },
      headerAndFooter: {
        name: "Header and Footer",
        title: "Header & Footer",
        slideNumber: "Slide Number",
        date: "Date And Time"
      },
      link: {
        name: "Link",
        title: "Add a hyperlink"
      },
      accessory: {
        name: "Accessory",
        title: "Insert Accessory",
        accessory: "Insert Accessory",
        object: "Insert Object"
      }
    },
    view: {
      title: "VIEW",
      normal: "Normal",
      outlineView: "Outline View",
      slideSorter: "Slide Sorter",
      notesPage: "Notes Page",
      readingView: "Reading View",
      slideMaster: "Slide Master",
      handoutMaster: "Handout Master",
      notesMaster: "Notes Master",
      ruler: "Ruler",
      gridlines: "Gridlines",
      guides: "Guides",
      taskWindow: "Task Window",
      fit: "Fit to Window"
    },
    review: {
      title: "Review",
      insertComment: "New Comment",
      deleteComment: "Delete",
      deleteCurrentComment: "Delete Current Comment",
      deleteCurrentSlide: "Delete Current Slide Comments",
      deleteAllComments: "Delete All Comments",
      nextComment: "Next",
      previousComment: "Previous",
      showHideComment: "Show/Hide Comments",
      commentPanel: "Comment Panel",
      showMarkup: "Show Markup",
      showAdvanceMarkup: "Show Advanced Markup",
      commentList: "Comment List"
    },
    slideShow: {
      title: "Slide Show",
      playFromStart: "Play From Start",
      playFromCurrent: "Play From Current Slide",
      hideSlide: "Hide Slide",
      showSlide: "Show Slide"
    },
    slideMaster: {
      title: "Slide Master",
      insert: "Insert Slide Master",
      insertLayout: "Insert Layout",
      delete: "Delete",
      rename: {
        name: "Rename",
        dialogTitle: "Rename Laout",
        dialogName: "Layout Name",
        defalutName: "Title Slide"
      },
      preserve: "Preserve",
      masterLayout: "Master Layout",
      placeHolder: {
        name: "Insert Placeholder",
        content: "Content",
        contentVertical: "Content (Vertical)",
        text: "Text",
        textVertical: "Text (Vertical)",
        pictureFill: "Picture (Fill)",
        pictureFit: "Picture (Fit)",
        chart: "Chart",
        table: "Table",
        smartArt: "SmartArt",
        video: "Video",
        cameo: "Cameo"
      },
      close: "Close Master View"
    },
    notesMaster: {
      title: "Notes Master",
      orientation: {
        name: "Notes Page Orientation",
        title: "Notes Page Orientation",
        portrait: "Portrait",
        landscape: "Landscape"
      },
      slideSize: {
        name: "Slide Size",
        title: "Slide Size",
        standard: "Standard (4:3)",
        widescreen: "Widescreen (16:9)",
        custom: "Custom Side Size..."
      },
      header: "Header",
      slideImage: "Slide Image",
      footer: "Footer",
      date: "Date",
      body: "Body",
      pageNumber: "Page Number",
      close: "Close Master View"
    },
    handoutMaster: {
      title: "Handout Master",
      orientation: {
        name: "Handout Orientation",
        title: "Handout Orientation",
        landscape: "Landscape",
        portrait: "Portrait"
      },
      slideSize: {
        name: "Slide Size",
        title: "Slide Size",
        standard: "Standard (4:3)",
        widescreen: "Widescreen (16:9)",
        custom: "Custom Side Size..."
      },
      slidePerPage: {
        name: "Slides Per Page",
        onePer: "1 Slide",
        twoPer: "2 Slides",
        threePer: "3 Slides",
        fourPer: "4 Slides",
        sixPer: "6 Slides",
        ninePer: "9 Slides",
        slideOutline: "Slide Outline"
      },
      header: "Header",
      footer: "Footer",
      date: "Date",
      pageNumber: "Page Number",
      close: "Close"
    },
    shapeToolbar: {
      title: "Shape Toolbar",
      formatPainter: "Format Painter",
      selectAll: "Select All",
      arrange: "Arrange",
      setFormatObject: "Set Format Object",
      textBox: {
        name: "Text Box",
        horizontal: "Draw Horizontal Text Box",
        vertical: "Vertical Text Box"
      },
      shapes: {
        name: "Shapes",
        title: "Presets",
        recently: "Recent Shapes",
        lines: "Lines",
        rectangles: "Rectangles",
        basic: "Basic Shapes",
        arrows: "Arrows",
        equation: "Equation",
        chart: "Chart",
        stars: "Stars",
        callouts: "Callouts",
        action: "Action Buttons"
      },
      editShape: {
        name: "Edit Shape",
        changeShape: "Change Shape",
        editVertex: "Edit Point"
      },
      mergeShapes: {
        name: "Merge Shapes",
        union: "Union",
        combine: "Combine",
        fragment: "Fragment",
        intersect: "Intersect",
        subtract: "Subtract"
      },
      fill: {
        name: "Shape Fill",
        noFill: "No Fill",
        theme: "Theme",
        standard: "Standard",
        more: "More"
      },
      group: {
        name: "Group",
        group: "Group",
        ungroup: "Ungroup"
      },
      rotate: {
        name: "Rotate",
        rotateRight90: "Rotate Right 90°",
        rotateLeft90: "Rotate Left 90°",
        horizontal: "Horizontal",
        vertical: "Vertical"
      },
      align: {
        name: "Align",
        left: "Left",
        center: "Center",
        right: "Right",
        top: "Top",
        bottom: "Bottom",
        middle: "Middle",
        horizontal: "Horizontal",
        vertical: "Vertical",
        equalWidth: "Equal Width",
        equalHeight: "Equal Height",
        equalSize: "Equal Size",
        alignSlide: "Align Slide",
        alignSelectedObject: "Align Selected Object"
      },
      bringToFront: {
        name: "Bring To Front",
        bringForward: "Bring Forward One Layer",
        bringToFront: "Bring To Front"
      },
      sendBackward: {
        name: "Send Backward",
        sendBackward: "Send Backward One Layer",
        sendToBack: "Send To Back"
      },
      fontColor: {
        name: "Font Color",
        theme: "Theme",
        standard: "Standard",
        more: "More"
      }
    },
    tableTools: {
      title: "Table Tools",
      delete: "Delete",
      deleteColumn: "Delete Column",
      deleteRow: "Delete Row",
      insert: "Insert",
      insertRowByTop: "Insert Row By Top",
      insertRowByBottom: "Insert Row By Bottom",
      insertColumnByLeft: "Insert Column By Left",
      insertColumnByRight: "Insert Column By Right",
      cellMargin: "Cell Margin",
      normal: "Normal",
      noMargin: "No Margin",
      thinMargin: "Thin Margin",
      thickMargin: "Thick Margin",
      customMargin: "Custom Margin",
      mergeCells: "Merge Cells",
      splitCells: "Split Cells",
      equalRowHeight: "Equal Row Height",
      equalColumnWidth: "Equal Column Width",
      select: "Select",
      selectTable: "Select Table",
      selectColumn: "Select Column",
      selectRow: "Select Row"
    },
    tableStyle: {
      title: "Table Style",
      firstRowFill: "First Row Fill",
      interleavingRowFill: "Interleaving Row Fill",
      firstColumnFill: "First Column Fill",
      lastRowFill: "Last Row Fill",
      interleavingColumnFill: "Interleaving Column Fill",
      lastColumnFill: "Last Column Fill",
      border: "Border",
      noBorder: "No Border",
      allBorder: "All Border",
      outerBorder: "Outer Border",
      innerBorder: "Inner Border",
      topBorder: "Top Border",
      bottomBorder: "Bottom Border",
      leftBorder: "Left Border",
      rightBorder: "Right Border",
      innerHorizontalBorder: "Inner Horizontal Border",
      innerVerticalBorder: "Inner Vertical Border",
      declineBorder: "Decline Border",
      increaseBorder: "Increase Border",
      clearTableStyle: "Clear Table Style",
      applyTo: "Apply To:"
    }
  },
  statusBar: {
    fullscreen: "Full Screen",
    play: "Play",
    playFromStart: "Play From Start",
    playFromCurrent: "Play From Current",
    autoZoom: "Auto Zoom",
    slides: "Slides",
    notes: "Notes",
    slideMaster: "Slide Master",
    handout: "Handout",
    notesMaster: "Notes Master"
  },
  dropDown: {
    slide: {
      new: "New Slide",
      delete: "Delete Slide"
    }
  },
  dialogs: {
    rename: "Rename",
    pageSelector: {
      title: "Jump To",
      jumpTo: "Jump to the specified page",
      pageCountError: "Page number is incorrect, please re-enter it."
    },
    insertTable: {
      title: "Insert Table",
      row: "Row",
      column: "Column",
      rowErrorMessage: "The number must be between 1 and 75",
      columnErrorMessage: "The number must be between 1 and 75"
    },
    section: {
      title: "Rename Section",
      name: "Section Name",
      defaultName: "Untitled Section"
    },
    paragraph: {
      name: "Paragraph",
      indent: {
        name: "Indent and Spacing",
        common: {
          name: "General",
          align: "Alignment:",
          left: "Left",
          center: "Centered",
          right: "Right",
          justify: "Justify",
          distribute: "Distributed"
        },
        indent: {
          name: "Indentation",
          before: "Before Text:",
          uint: "cm",
          special: "Special:",
          none: "(None)",
          firstLine: "First Line",
          hang: "Hanging",
          metric: "By:"
        },
        spacing: {
          name: "Spacing",
          uint: "pt",
          paragraphBefore: "Before:",
          paragraphAfter: "After:",
          lineSpacing: "Line Spacing:",
          single: "Single",
          oneHalf: "1.5 lines",
          double: "Double",
          fixed: "Exactly",
          multiple: "Multiple",
          metric: "At:"
        }
      },
      chineseFormat: {
        name: "Asian Typography",
        common: {
          name: "General",
          firstAndLastCharacters: "Use Asian rules for controlling first and last characters",
          latinLineFeed: "Allow Latin text to wrap in the middle of a word",
          excessivePunctuationMarks: "Allow hanging punctuation",
          align: "Text alignment",
          top: "Top",
          middle: "Center",
          base: "Baseline",
          bottom: "Bottom",
          auto: "Auto"
        }
      }
    },
    font: {
      font: {
        name: "Font",
        latinFontName: "Latin text font:",
        fontStyle: {
          name: "Font style:",
          regular: "Regular",
          italic: "Italic",
          bold: "Bold",
          boldItalic: "Bold Italic"
        },
        size: "Size:",
        asianFontName: "Asian text font:",
        alltext: {
          title: "All text",
          fontColor: "Font color:",
          underline: "Underline style:",
          underlineColor: "Underline color:",
          underlineType: {
            none: "(none)",
            single: "Single line",
            double: "Double line",
            heavy: "Heavy line",
            dotted: "Dotted line",
            dottedHeavy: "Dotted heavy line ",
            dash: "Dash line",
            dashHeavy: "Dash heavy line ",
            dashLong: "Dash long line",
            dashLongHeavy: "Dash long heavy line",
            dotDash: "Dot dash line",
            dotDashHeavy: "Dot dash heavy line ",
            dotdotDash: "Dot dot dash line",
            dotdotDashHeavy: "Dot dot dash heavy line ",
            wavy: "Wavy line",
            wavyHeavy: "Wavy heavy line ",
            wavyDouble: "Wavy double line"
          }
        },
        effect: {
          title: "Effect",
          strikethrough: "Strikethrough",
          doubleStrike: "Double Strikethrough",
          superscript: "Superscript",
          subscript: "Subscript",
          offset: "Offset:",
          smallCaps: "Small Caps",
          allCaps: "All Caps",
          equalize: "Equalize Character Height"
        }
      },
      character: {
        name: "Character Spacing",
        spacing: {
          name: "Spacing:",
          normal: "Normal",
          expanded: "Expanded",
          condensed: "Condensed"
        },
        by: {
          name: "By:",
          unit: "points"
        },
        kerning: {
          name: "Kerning for fonts:",
          unit: "Points and above"
        }
      }
    },
    layoutRename: {
      title: "Rename Layout",
      name: "Layout Name",
      defalutName: "Title Slide"
    },
    layoutPlaceHolder: {
      title: "Layout Placeholder",
      name: "Placeholder",
      placeHolderTitle: "Title",
      placeHolderText: "Text",
      placeHolderDate: "Date",
      placeHolderSlideNumber: "Slide Number",
      placeHolderFooter: "Footer"
    },
    insertLink: {
      title: "Link Settings",
      linkType: "Link Type",
      deleteLink: "Delete Link",
      internal: {
        name: "Internal Link",
        nextSlide: "Next Slide",
        previousSlide: "Previous Slide",
        firstSlide: "First Slide",
        lastSlide: "Last Slide",
        toSlide: "Slide",
        show: "Show",
        screenHintInfo: "Screen Hint Info"
      },
      external: {
        name: "External Link",
        url: "URL",
        show: "Show",
        screenHintInfo: "Screen Hint Info"
      }
    },
    headerFooter: {
      name: "Header Footer Settings",
      preview: "Preview",
      cn: "Chinese(China)",
      en: "English(USA)",
      slide: {
        name: "Slide",
        title: "Slide Content",
        date: "Date and Time",
        autoUpdate: "Auto Update",
        language: "Language",
        fixed: "Fixed",
        slideNumber: "Slide Number",
        footer: "Footer",
        blank: "Title and slides not displayed"
      },
      notesHandout: {
        name: "Notes and Handout",
        title: "Page Content",
        date: "Date and Time",
        autoUpdate: "Auto Update",
        language: "Language",
        fixed: "Fixed",
        header: "Header",
        pagination: "Pagination",
        footer: "Footer"
      },
      warningText: 'You cannot use a date format that is inconsistent with the slide master language. The current master uses the Chinese (China) date format. To change the master, use "Apply to All" instead of "Apply".'
    },
    pageSetting: {
      name: "Page Settings",
      pageSize: "Page Size",
      pageDirection: "Page Direction",
      width: "Width",
      height: "Height",
      cm: "Centimeters",
      numberBegin: "Slide Number Begin",
      paperSize: "Paper Size",
      directionSlide: "Slide",
      directionNotesHandout: "Notes and Handout",
      horizontal: "Horizontal",
      vertical: "Vertical",
      slideSizeOption: {
        fullScreen1: "Fullscreen (4:3)",
        fullScreen2: "Fullscreen (16:9)",
        fullScreen3: "Fullscreen (16:10)",
        letterPaper: "Letter Paper (8.5×11 英寸)",
        legalPaper: "Legal Paper (11×17 英寸)",
        a3: "A3 Paper (297×420 毫米)",
        a4: "A4 Paper (210×297 毫米)",
        b4: "B4 (ISO) Paper (250×353 毫米)",
        b5: "B5 (ISO) Paper (176×250 毫米)",
        "35mm": "35mm Slide",
        overhead: "Overhead Slide",
        banner: "Banner",
        wideScreen: "Wide Screen"
      }
    },
    preserveMaster: {
      name: "Cancel Master Protection",
      content: "The selected master slides are not used by any slides. Do you want to delete them?"
    }
  },
  rightPanel: {
    title: "Object Properties",
    shape: {
      title: "Shape Options",
      sizeProperty: "Size Property",
      size: {
        name: "Size",
        height: "Height",
        width: "Width",
        rotate: "Rotate",
        scaleHeight: "Scale Height",
        scaleWidth: "Scale Width",
        lockAspectRatio: "Lock Aspect Ratio",
        relativeImageOriginSize: "Relative Image Origin Size",
        slideOptimalProportion: "Slide Optimal Proportion",
        dpi: "Resolution",
        reset: "Reset"
      },
      position: {
        name: "Position",
        horizontal: "Horizontal Position",
        relativeTo: "Relative To",
        vertical: "Vertical Position",
        leftTop: "Left Top",
        center: "Center"
      },
      textBox: {
        name: "Text Box",
        verticalAlign: "Vertical Alignment",
        top: "Top Alignment",
        middle: "Middle Alignment",
        bottom: "Bottom Alignment",
        topCenter: "Top Center Alignment",
        middleCenter: "Middle Center Alignment",
        bottomCenter: "Bottom Center Alignment",
        textDirection: "Text Direction",
        horizontal: "Horizontal",
        vertical: "Vertical",
        verticalRToL: "Vertical Right to Left",
        verticalLToR: "Vertical Left to Right",
        rotate90: "90°",
        rotate270: "270°",
        stacked: "Stacked",
        textMargin: "Text Margin",
        noMargin: "No Margin",
        narrowMargin: "Narrow Margin",
        normalMargin: "Normal Margin",
        wideMargin: "Wide Margin",
        increaseMargin: "Increase Margin",
        customMargin: "Custom Margin",
        leftMargin: "Left Margin",
        topMargin: "Top Margin",
        rightMargin: "Right Margin",
        bottomMargin: "Bottom Margin",
        textAutoFit: "Text Auto Fit",
        noAutoFit: "No Auto Fit",
        overflowTextIndent: "Overflow Text Indent",
        shapeForTextSize: "Text Size",
        shapeAutoWrap: "Shape Auto Wrap",
        column: "Column",
        left: "Left Alignment",
        center: "Center Alignment",
        right: "Right Alignment",
        middleRight: "Middle Right Alignment",
        middleMiddle: "Middle Center Alignment",
        middleLeft: "Middle Left Alignment"
      }
    },
    text: {
      title: "Text Options",
      textBox: {
        name: "Text Box",
        textBox: {
          name: "Text Box",
          verticalAlign: "Vertical Alignment",
          top: "Top Alignment",
          middle: "Middle Alignment",
          bottom: "Bottom Alignment",
          topCenter: "Top Center Alignment",
          middleCenter: "Middle Center Alignment",
          bottomCenter: "Bottom Center Alignment",
          textDirection: "Text Direction",
          horizontal: "Horizontal",
          verticalRToL: "Vertical Right to Left",
          verticalLToR: "Vertical Left to Right",
          rotate90: "90°",
          rotate270: "270°",
          stacked: "Stacked",
          textMargin: "Text Margin",
          noMargin: "No Margin",
          narrowMargin: "Narrow Margin",
          normalMargin: "Normal Margin",
          wideMargin: "Wide Margin",
          increaseMargin: "Increase Margin",
          customMargin: "Custom Margin",
          leftMargin: "Left Margin",
          topMargin: "Top Margin",
          rightMargin: "Right Margin",
          bottomMargin: "Bottom Margin",
          textAutoFit: "Text Auto Fit",
          noAutoFit: "No Auto Fit",
          overflowTextIndent: "Overflow Text Indent",
          shapeForTextSize: "Text Size",
          shapeAutoWrap: "Shape Auto Wrap",
          column: "Column"
        }
      }
    },
    comment: {
      title: "Comment",
      placeholder: "Enter comment content",
      send: "Send",
      cancel: "Cancel",
      reply: "Reply"
    }
  },
  contextMenu: {
    delete: "Delete",
    editText: "Edit Text",
    nextPage: "Next Page",
    firstPage: "First Page",
    prevPage: "Previous Page",
    lastPage: "Last Page",
    screen: "Screen",
    blackScreen: "Black Screen",
    whiteScreen: "White Screen",
    endSlideShow: "End Slide Show"
  }
}, Un = Al(zl, Wn), bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Un
}, Symbol.toStringTag, { value: "Module" })), qn = {
  common: {
    httpsOnly: "请在https环境下使用该功能",
    clipboardShortcutTip: "受浏览器安全限制，无法通过按钮完成该操作，请使用快捷键 {shortcut}。",
    allApply: "全部应用",
    apply: "应用",
    tooltipBegin: "输入从",
    tooltipTo: "到",
    tooltipEnd: "的值"
  },
  editorPopup: {
    miniToolbar: "所选内容快捷工具栏",
    contextMenu: "所选内容上下文菜单"
  },
  unit: {
    pt: "磅",
    cm: "厘米"
  },
  toolbar: {
    file: {
      title: "文件",
      export: "导出",
      exportDocument: "导出",
      exportPDF: "导出PDF",
      open: "打开"
    },
    start: {
      title: "开始",
      font: "字体",
      paragraph: "段落",
      undo: "撤销",
      redo: "重做",
      exitTextEdit: "退出文本编辑",
      paste: {
        title: "粘贴",
        option: "粘贴选项",
        theme: "使用目标主题",
        format: "保持源格式",
        text: "只保持文本",
        special: "选择性粘贴..."
      },
      cut: "剪切",
      copy: {
        title: "复制",
        copy: "复制",
        duplicate: "复制为图片"
      },
      formatPainter: "格式刷",
      new: "新建",
      layout: "版式",
      reset: "重置",
      newSlide: "新建幻灯片",
      copySlide: "复制幻灯片",
      deleteSlide: "删除幻灯片",
      hideSlide: "隐藏幻灯片",
      newBlankSlide: "新建空白页",
      fromLayout: "从版式新建",
      resetSlide: "重设幻灯片",
      section: {
        title: "节",
        add: "新增节",
        rename: "重命名节",
        remove: "删除节",
        removeAll: "删除所有节",
        collapse: "全部折叠",
        expand: "全部展开"
      },
      textShadow: "文本阴影",
      characterSpacing: {
        title: "字符间距",
        veryTight: "很紧",
        tight: "紧密",
        medium: "常规",
        loose: "稀疏",
        veryLoose: "很松",
        other: "其他间距"
      },
      changeCase: {
        title: "更改大小写",
        sentence: "句首字母大写",
        lower: "小写母",
        upper: "大写母",
        capitalize: "每个单词首字母大写",
        toggle: "切换大小写"
      },
      increaseFontSize: "增大字号",
      decreaseFontSize: "减小字号",
      clearAllFormatting: "清除所有格式",
      textHeightLightColor: "文本突出显示颜色",
      bullet: {
        title: "项目符号",
        none: "无",
        round: "带填充效果大圆形项目符号",
        square: "带填充效果大方形项目符号",
        diamond: "带填充效果钻石形项目符号",
        hollowSquare: "加粗空心方形项目符号",
        checkmark: "选中标记项目符号",
        arrow: "箭头项目符号",
        filledRound: "带填充效果圆形项目符号",
        option: "其它项目符号"
      },
      numbering: {
        title: "编号",
        none: "无",
        number: "1.2.3.",
        circled: "带圆圈编号",
        roman: "Ⅰ.Ⅱ.Ⅲ.",
        upper: "A.B.C.",
        lowerBracket: "a) b) c).",
        lower: "a.b.c.",
        ideographic: "象形符号，宽句号",
        option: "其它编号"
      },
      increaseListLevel: "提升列表级别",
      decreaseListLevel: "降低列表级别",
      lineSpacing: {
        title: "行距",
        one: "1.0",
        oneHalf: "1.5",
        two: "2.0",
        twoHalf: "2.5",
        three: "3.0",
        option: "行距选项"
      },
      addOrRemoveColumns: {
        title: "添加或删除栏",
        one: "一栏",
        two: "两栏",
        three: "三栏",
        more: "更多栏..."
      },
      textDirection: {
        title: "文本方向",
        horizontal: "横排",
        vertical: "竖排",
        rotate90: "所有文字旋转90°",
        rotate270: "所有文字旋转270°",
        stacked: "堆积",
        option: "其他选项..."
      },
      alignText: {
        title: "文本对齐",
        top: "顶端对齐",
        middle: "中部对齐",
        bottom: "底端对齐",
        left: "左对齐",
        right: "右对齐",
        option: "其他选项..."
      },
      convertToSmartArtGraphic: "转换为SmartArt",
      newFromLayout: "从版式新建",
      bold: "粗体",
      italic: "斜体",
      underline: "下划线",
      strikeout: "删除线",
      fontClolor: "字体颜色",
      highlightColor: "突出显示",
      textHighlightNone: "无",
      increaseLineSpacing: "增大段落行距",
      reduceLineSpacing: "减小段落行距",
      verticalAlignTop: "顶端对齐",
      verticalAlignCenter: "垂直居中",
      verticalAlignBottom: "底部对齐",
      horizontalAlignLeft: "左对齐",
      horizontalAlignCenter: "居中对齐",
      horizontalAlignRight: "右对齐",
      horizontalAlignJustify: "两端对齐",
      horizontalAlignDistribute: "分散对齐"
    },
    insert: {
      title: "插入",
      new: "新建幻灯片",
      table: {
        name: "表格",
        title: "添加表格",
        optionName: "插入表格",
        insert: "插入表格",
        draw: "绘制表格",
        excel: "Excel 电子表格",
        row: "行",
        column: "列",
        moreRowColumn: "更多行列"
      },
      picture: {
        name: "图片",
        title: "插入图片",
        optionName: "插入图片来自",
        device: "此设备...",
        stock: "图像集...",
        online: "联机图片..."
      },
      shapes: {
        name: "形状",
        title: "预设",
        recently: "最近使用的形状",
        lines: "线条",
        rectangles: "矩形",
        basic: "基本形状",
        arrows: "箭头汇总",
        equation: "公式形状",
        chart: "流程图",
        stars: "星和旗帜",
        callouts: "标注",
        action: "动作按钮"
      },
      textBox: {
        name: "文本框",
        title: "绘制横排文本框",
        horizontal: "横向文本框",
        vertical: "竖向文本框"
      },
      video: {
        name: "视频",
        title: "插入视频",
        device: "嵌入视频",
        link: "链接到视频"
      },
      audio: {
        name: "音频",
        title: "插入音频",
        device: "嵌入音频",
        link: "链接到音频",
        deviceBg: "嵌入背景音乐",
        linkBg: "链接背景音乐"
      },
      // 公式
      equation: {
        name: "公式",
        title: "插入公式",
        area: "圆的面积",
        binomial: "二项式定理",
        expansion: "和的展开式",
        fourier: "傅里叶级数",
        pythagorean: "勾股定理",
        quadratic: "二次公式",
        taylor: "泰勒展开式",
        trig1: "三角恒等式1",
        trig2: "三角恒等式2",
        insert: "插入新公式",
        lnk: "墨迹公式"
      },
      symbol: {
        name: "符号",
        title: "插入符号",
        recent: "近期使用的符号",
        current: "当前符号",
        all: "符号大全",
        other: "其他符号"
      },
      comment: {
        name: "批注",
        title: "插入批注"
      },
      headerAndFooter: {
        name: "页眉页脚",
        title: "页眉页脚",
        slideNumber: "幻灯片编号",
        date: "日期和时间"
      },
      link: {
        name: "超链接",
        title: "添加超链接"
      },
      accessory: {
        name: "附件",
        title: "插入附件",
        accessory: "插入附件",
        object: "插入对象"
      }
    },
    view: {
      title: "视图",
      normal: "普通",
      outlineView: "视图大纲",
      slideSorter: "幻灯片浏览",
      notesPage: "备注页",
      readingView: "阅读视图",
      slideMaster: "幻灯片母版",
      handoutMaster: "讲义母版",
      notesMaster: "备注母版",
      ruler: "标尺",
      gridlines: "网格线",
      guides: "参考线",
      taskWindow: "任务窗口",
      fit: "适应窗口大小"
    },
    review: {
      title: "审阅",
      insertComment: "插入批注",
      deleteComment: "删除批注",
      deleteCurrentComment: "删除批注",
      deleteCurrentSlide: "删除当前幻灯片中所有标记",
      deleteAllComments: "删除演示文稿中所有标记",
      nextComment: "下一条",
      previousComment: "上一条",
      showHideComment: "显示/隐藏",
      commentPanel: "批注窗格",
      showMarkup: "显示标记",
      showAdvanceMarkup: "显示高级标记",
      commentList: "批注列表"
    },
    slideShow: {
      title: "放映",
      playFromStart: "从头开始",
      playFromCurrent: "当页开始",
      hideSlide: "隐藏幻灯片",
      showSlide: "显示幻灯片"
    },
    slideMaster: {
      title: "幻灯片母版",
      insert: "插入母版",
      insertLayout: "插入版式",
      delete: "删除",
      rename: "重命名",
      preserve: "保护母版",
      masterLayout: "母版版式",
      placeHolder: {
        name: "插入占位符",
        content: "内容",
        contentVertical: "内容 (竖排)",
        text: "文本",
        textVertical: "文本 (竖排)",
        pictureFill: "图片",
        pictureFit: "联机图像",
        chart: "图表",
        table: "表格",
        smartArt: "SmartArt图形",
        video: "媒体",
        cameo: "浮雕"
      },
      close: "关闭"
    },
    notesMaster: {
      title: "备注母版",
      orientation: {
        name: "备注页方向",
        title: "备注页方向",
        portrait: "纵向",
        landscape: "横向"
      },
      slideSize: {
        name: "幻灯片大小",
        title: "幻灯片大小",
        standard: "标准 (4:3)",
        widescreen: "宽屏 (16:9)",
        custom: "自定义..."
      },
      header: "页眉",
      slideImage: "幻灯片图像",
      footer: "页脚",
      date: "日期",
      body: "正文",
      pageNumber: "页码",
      close: "关闭"
    },
    handoutMaster: {
      title: "讲义母版",
      orientation: {
        name: "讲义方向",
        title: "讲义方向",
        landscape: "横向",
        portrait: "纵向"
      },
      slideSize: {
        name: "幻灯片大小",
        title: "幻灯片大小",
        standard: "标准 (4:3)",
        widescreen: "宽屏 (16:9)",
        custom: "自定义大小..."
      },
      slidePerPage: {
        name: "每页张数",
        onePer: "1张幻灯片",
        twoPer: "2张幻灯片",
        threePer: "3张幻灯片",
        fourPer: "4张幻灯片",
        sixPer: "6张幻灯片",
        ninePer: "9张幻灯片",
        slideOutline: "幻灯片大纲"
      },
      header: "页眉",
      footer: "页脚",
      date: "日期",
      pageNumber: "页码",
      close: "关闭"
    },
    shapeToolbar: {
      title: "绘图工具",
      formatPainter: "格式刷",
      selectAll: "全选",
      arrange: "排列",
      setFormatObject: "设置对象格式",
      textBox: {
        name: "文本框",
        horizontal: "绘制横排文本框",
        vertical: "竖排文本框"
      },
      shapes: {
        name: "形状",
        title: "预设",
        recently: "最近使用的形状",
        lines: "线条",
        rectangles: "矩形",
        basic: "基本形状",
        arrows: "箭头汇总",
        equation: "公式形状",
        chart: "流程图",
        stars: "星和旗帜",
        callouts: "标注",
        action: "动作按钮"
      },
      editShape: {
        name: "编辑形状",
        changeShape: "更改形状",
        editVertex: "编辑顶点"
      },
      mergeShapes: {
        name: "合并形状",
        union: "结合",
        combine: "组合",
        fragment: "拆分",
        intersect: "相交",
        subtract: "剪除"
      },
      fill: {
        name: "填充",
        noFill: "无填充颜色",
        theme: "主题颜色",
        standard: "标准颜色",
        more: "更多颜色"
      },
      group: {
        name: "组合",
        group: "组合",
        ungroup: "取消组合"
      },
      rotate: {
        name: "旋转",
        rotateRight90: "向右旋转90°",
        rotateLeft90: "向左旋转90°",
        horizontal: "水平翻转",
        vertical: "垂直翻转"
      },
      align: {
        name: "对齐",
        left: "左对齐",
        center: "水平居中",
        right: "右对齐",
        top: "顶端对齐",
        bottom: "底端对齐",
        middle: "垂直居中",
        horizontal: "横向分布",
        vertical: "纵向分布",
        equalWidth: "等宽",
        equalHeight: "等高",
        equalSize: "等尺寸",
        alignSlide: "对齐幻灯片",
        alignSelectedObject: "对齐所选对象"
      },
      bringToFront: {
        name: "上移",
        bringForward: "上移一层",
        bringToFront: "置于顶部"
      },
      sendBackward: {
        name: "下移",
        sendBackward: "下移一层",
        sendToBack: "置于底部"
      },
      fontColor: {
        name: "文本填充",
        theme: "主题颜色",
        standard: "标准颜色",
        more: "更多颜色"
      }
    },
    tableTools: {
      title: "表格工具",
      delete: "删除",
      deleteColumn: "删除列",
      deleteRow: "删除行",
      insert: "插入",
      insertRowByTop: "在上方插入行",
      insertRowByBottom: "在下方插入行",
      insertColumnByLeft: "在左侧插入列",
      insertColumnByRight: "在右侧插入列",
      cellMargin: "单元格边距",
      normal: "正常",
      noMargin: "无边距",
      thinMargin: "窄边距",
      thickMargin: "宽边距",
      customMargin: "自定义边距",
      mergeCells: "合并单元格",
      splitCells: "拆分单元格",
      equalRowHeight: "均分行高",
      equalColumnWidth: "均分列宽",
      select: "选择",
      selectTable: "选择表格",
      selectColumn: "选择列",
      selectRow: "选择行"
    },
    tableStyle: {
      title: "表格样式",
      firstRowFill: "首行填充",
      interleavingRowFill: "隔行填充",
      firstColumnFill: "首列填充",
      lastRowFill: "末行填充",
      interleavingColumnFill: "隔列填充",
      lastColumnFill: "末列填充",
      strokeColor: "笔触颜色",
      border: "边框",
      noBorder: "无边框",
      allBorder: "所有边框",
      outerBorder: "外侧边框",
      innerBorder: "内部边框",
      topBorder: "上边框",
      bottomBorder: "下边框",
      leftBorder: "左边框",
      rightBorder: "右边框",
      innerHorizontalBorder: "内部横框线",
      innerVerticalBorder: "内部竖框线",
      declineBorder: "斜下框线",
      increaseBorder: "斜上框线",
      clearTableStyle: "清除表格样式",
      applyTo: "应用至:"
    }
  },
  statusBar: {
    fullscreen: "全屏",
    play: "播放",
    playFromStart: "从首页开始",
    playFromCurrent: "从当前页开始",
    autoZoom: "最佳显示比例",
    slides: "幻灯片",
    notes: "备注",
    slideMaster: "幻灯片母版",
    handout: "讲义母版",
    notesMaster: "备注母版"
  },
  dropDown: {
    slide: {
      new: "新建幻灯片",
      delete: "删除幻灯片"
    }
  },
  dialogs: {
    rename: "重命名",
    pageSelector: {
      title: "跳转",
      jumpTo: "跳转到指定页码",
      pageCountError: "当前页码有误，请重新输入"
    },
    insertTable: {
      title: "插入表格",
      row: "行",
      column: "列",
      rowErrorMessage: "数字必须介于1和75之间",
      columnErrorMessage: "数字必须介于1和75之间"
    },
    section: {
      add: "新增节",
      title: "重命名节",
      name: "节名",
      defaultName: "无标题节"
    },
    paragraph: {
      name: "段落",
      indent: {
        name: "缩进和间距",
        common: {
          name: "常规",
          align: "对齐方式:",
          left: "左对齐",
          center: "居中",
          right: "右对齐",
          justify: "两端对齐",
          distribute: "分散对齐"
        },
        indent: {
          name: "缩进",
          before: "文本之前:",
          uint: "厘米",
          special: "特殊:",
          none: "(无)",
          firstLine: "首行",
          hang: "悬挂",
          metric: "度量值:"
        },
        spacing: {
          name: "间距",
          uint: "磅",
          paragraphBefore: "段前:",
          paragraphAfter: "段后:",
          lineSpacing: "行距:",
          single: "单倍行距",
          oneHalf: "1.5倍行距",
          double: "2倍行距",
          fixed: "固定行距",
          multiple: "多倍行距",
          metric: "设置值:"
        }
      },
      chineseFormat: {
        name: "中文版式",
        common: {
          name: "常规",
          firstAndLastCharacters: "按中文习惯控制首尾字符",
          latinLineFeed: "允许西文在单词中间换行",
          excessivePunctuationMarks: "允许标点溢出边界",
          align: "文本对齐方式",
          top: "顶端",
          middle: "居中",
          base: "基线",
          bottom: "底部",
          auto: "自动"
        }
      }
    },
    font: {
      name: "字体",
      font: {
        name: "字体",
        latinFontName: "西文字体:",
        fontStyle: {
          name: "字体样式:",
          regular: "常规",
          italic: "倾斜",
          bold: "加粗",
          boldItalic: "加粗 倾斜"
        },
        size: "大小:",
        asianFontName: "中文字体:",
        alltext: {
          title: "所有文本",
          fontColor: "字体颜色:",
          underline: "下划线线型:",
          underlineColor: "下划线颜色:",
          underlineType: {
            none: "(无)",
            single: "单线",
            double: "双线",
            heavy: "粗线",
            dotted: "点虚线",
            dottedHeavy: "粗点虚线",
            dash: "划线",
            dashHeavy: "粗划线",
            dashLong: "长划线",
            dashLongHeavy: "粗长划线",
            dotDash: "点划线",
            dotDashHeavy: "粗点划线",
            dotdotDash: "双点划线",
            dotdotDashHeavy: "粗双点划线",
            wavy: "波浪线",
            wavyHeavy: "粗波浪线",
            wavyDouble: "双波浪线"
          }
        },
        effect: {
          title: "效果",
          strikethrough: "删除线",
          doubleStrike: "双删除线",
          superscript: "上标",
          subscript: "下标",
          offset: "偏移量:",
          smallCaps: "小型大写字母",
          allCaps: "全部大写字母",
          equalize: "等高字符"
        }
      },
      character: {
        name: "字符间距",
        spacing: {
          name: "间距:",
          normal: "普通",
          expanded: "加宽",
          condensed: "紧缩"
        },
        by: {
          name: "度量值:",
          unit: "磅"
        },
        kerning: {
          name: "为字体调整字间距:",
          unit: "大于或等于(磅)"
        }
      }
    },
    layoutRename: {
      title: "重命名版式",
      name: "版式名称",
      defalutName: "标题幻灯片"
    },
    laoutPlaceHolder: {
      title: "母版版式",
      name: "占位符",
      placeHolderTitle: "标题",
      placeHolderText: "文本",
      placeHolderDate: "日期",
      placeHolderSlideNumber: "幻灯片编号",
      placeHolderFooter: "页脚"
    },
    insertLink: {
      title: "超链接设置",
      linkType: "链接类型",
      deleteLink: "删除超链接",
      internal: {
        name: "内部链接",
        nextSlide: "下一张幻灯片",
        previousSlide: "上一张幻灯片",
        firstSlide: "第一张幻灯片",
        lastSlide: "最后一张幻灯片",
        toSlide: "幻灯片",
        show: "展示",
        screenHintInfo: "屏幕提示文字"
      },
      external: {
        name: "外部链接",
        url: "链接到*",
        show: "展示",
        screenHintInfo: "屏幕提示文字"
      }
    },
    headerFooter: {
      name: "页眉和页脚",
      preview: "预览",
      cn: "中文(中国)",
      en: "英文(美国)",
      slide: {
        name: "幻灯片",
        title: "幻灯片包含内容",
        date: "日期和时间",
        autoUpdate: "自动更新",
        language: "语言（国家/地区）",
        fixed: "固定",
        slideNumber: "幻灯片编号",
        footer: "页脚",
        blank: "标题和幻灯片不显示"
      },
      notesHandout: {
        name: "备注和讲义",
        title: "页面包含内容",
        date: "日期和时间",
        autoUpdate: "自动更新",
        language: "语言（国家/地区）",
        fixed: "固定",
        header: "页眉",
        pagination: "页码",
        footer: "页脚"
      },
      warningText: "您不能使用与幻灯片母版语言不一致的日期格式。当前母版的日期是中文(中国)的格式。要改变母版，请用“全部应用”而不是“应用”。"
    },
    pageSetting: {
      name: "页面设置",
      pageSize: "幻灯片大小",
      pageDirection: "方向",
      width: "宽度",
      height: "高度",
      cm: "厘米",
      numberBegin: "幻灯片编号起始值",
      paperSize: "纸张大小",
      directionSlide: "幻灯片",
      directionNotesHandout: "备注、讲义和大纲",
      horizontal: "横向",
      vertical: "纵向",
      slideSizeOption: {
        fullScreen1: "全屏显示 (4:3)",
        fullScreen2: "全屏显示 (16:9)",
        fullScreen3: "全屏显示 (16:10)",
        letterPaper: "Letter 纸张 (8.5×11 英寸)",
        legalPaper: "分类账纸张 (11×17 英寸)",
        a3: "A3 纸张 (297×420 毫米)",
        a4: "A4 纸张 (210×297 毫米)",
        b4: "B4 (ISO) 纸张 (250×353 毫米)",
        b5: "B5 (ISO) 纸张 (176×250 毫米)",
        "35mm": "35 毫米幻灯片",
        overhead: "顶置",
        banner: "横幅",
        wideScreen: "宽屏"
      }
    },
    preserveMaster: {
      name: "取消母版保护",
      content: "您选中不保留的母版未被幻灯片所用，您是否希望删除这些母版？"
    },
    search: {
      name: "搜索",
      findPlaceHolder: "请输入查找内容",
      next: "下一个",
      prev: "上一个"
    }
  },
  rightPanel: {
    title: "对象属性",
    shape: {
      title: "形状选项",
      sizeProperty: "大小属性",
      size: {
        name: "大小",
        height: "高度",
        width: "宽度",
        rotate: "旋转",
        scaleHeight: "缩放高度",
        scaleWidth: "缩放宽度",
        lockAspectRatio: "锁定纵横比",
        relativeImageOriginSize: "相对于图片原始尺寸",
        slideOptimalProportion: "幻灯片最佳比例",
        dpi: "分辨率",
        reset: "重设"
      },
      position: {
        name: "位置",
        horizontal: "水平位置",
        relativeTo: "相对于",
        vertical: "垂直位置",
        leftTop: "左上角",
        center: "居中"
      },
      textBox: {
        name: "文本框",
        verticalAlign: "垂直对齐方式",
        top: "顶端对齐",
        middle: "中部对齐",
        bottom: "底端对齐",
        topCenter: "顶部居中",
        middleCenter: "中部居中",
        bottomCenter: "底部居中",
        textDirection: "文本方向",
        horizontal: "横排",
        vertical: "竖排",
        verticalRToL: "竖排(从右向左)",
        verticalLToR: "竖排(从左向右)",
        rotate90: "所有文字旋转90°",
        rotate270: "所有文字旋转270°",
        stacked: "堆积",
        textMargin: "文本边距",
        noMargin: "无边距",
        narrowMargin: "窄边距",
        normalMargin: "标准边距",
        wideMargin: "宽边距",
        increaseMargin: "加宽边距",
        customMargin: "自定义边距",
        leftMargin: "左边距",
        topMargin: "上边距",
        rightMargin: "右边距",
        bottomMargin: "下边距",
        textAutoFit: "文字自动调整",
        noAutoFit: "不自动调整",
        overflowTextIndent: "溢出时缩排文字",
        shapeForTextSize: "根据文字调整形状大小",
        shapeAutoWrap: "形状中的文字自动换行",
        column: "分栏",
        left: "左对齐",
        center: "居中",
        right: "右对齐",
        middleRight: "中部靠右",
        middleMiddle: "中部居中",
        middleLeft: "中部靠左"
      }
    },
    text: {
      title: "文本选项",
      textBox: {
        name: "文本框",
        textBox: {
          name: "文本框",
          verticalAlign: "垂直对齐方式",
          top: "顶部对齐",
          middle: "中部对齐",
          bottom: "底部对齐",
          topCenter: "顶部居中",
          middleCenter: "中部居中",
          bottomCenter: "底部居中",
          textDirection: "文本方向",
          horizontal: "横排",
          verticalRToL: "竖排(从右向左)",
          verticalLToR: "竖排(从左向右)",
          rotate90: "所有文字旋转90°",
          rotate270: "所有文字旋转270°",
          stacked: "堆积",
          textMargin: "文本边距",
          noMargin: "无边距",
          narrowMargin: "窄边距",
          normalMargin: "标准边距",
          wideMargin: "宽边距",
          increaseMargin: "加宽边距",
          customMargin: "自定义边距",
          leftMargin: "左边距",
          topMargin: "上边距",
          rightMargin: "右边距",
          bottomMargin: "下边距",
          textAutoFit: "文字自动调整",
          noAutoFit: "不自动调整",
          overflowTextIndent: "溢出时缩排文字",
          shapeForTextSize: "根据文字调整形状大小",
          shapeAutoWrap: "形状中的文字自动换行",
          column: "分栏"
        }
      }
    },
    comment: {
      title: "批注",
      placeholder: "请输入批注内容",
      send: "发送",
      cancel: "取消",
      reply: "回复"
    }
  },
  contextMenu: {
    delete: "删除",
    editText: "编辑文字",
    nextPage: "下一页",
    firstPage: "第一页",
    prevPage: "上一页",
    lastPage: "最后一页",
    screen: "屏幕",
    blackScreen: "黑屏",
    whiteScreen: "白屏",
    endSlideShow: "结束放映",
    createSlideMaster: "新建幻灯片母版",
    insertSlideLayout: "新建幻灯片版式",
    deleteSlideMaster: "删除母版",
    renameSlideMaster: "重命名母版",
    preserveSlideMaster: "保护母版",
    masterLayout: "母版版式",
    deleteSlideLayout: "删除版式",
    renameSlideLayout: "重命名版式"
  }
}, Gn = Al(Ll, qn), wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gn
}, Symbol.toStringTag, { value: "Module" })), Qn = /* @__PURE__ */ Object.assign({ "./en-US.ts": bl, "./zh-CN.ts": wl }), Yn = /* @__PURE__ */ Object.assign({ "./en-US.ts": bl, "./zh-CN.ts": wl });
function Kn() {
  let e = {};
  return al(Qn, e), al(Yn, e), e;
}
function al(e, t) {
  for (let l in e)
    if (e[l].default) {
      let n = l.substr(l.lastIndexOf("/") + 1, 5);
      t[n] ? t[n] = {
        ...e[n],
        ...e[l].default
      } : t[n] = e[l].default;
    }
}
let pt = "zh-CN";
function Jn(e) {
  return pt = e || pt, Nl({
    legacy: !1,
    locale: pt,
    messages: Kn(),
    globalInjection: !0
  });
}
const Ct = /* @__PURE__ */ Y({
  __name: "CommandColorPaletteSmallButton",
  props: {
    cmd: {},
    tooltip: {},
    iconName: {},
    x: {},
    y: {},
    showFill: { type: Boolean },
    showAuto: { type: Boolean },
    defaultColor: {},
    recentColors: {},
    showTheme: { type: Boolean, default: !0 },
    showMoreColor: { type: Boolean, default: !0 },
    isSelectEvent: { type: Boolean },
    to: { type: [Boolean, String] }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const l = re(), n = ie(Ae), { standardColors: r, themeColors: A, ensureLoaded: o } = Tl(), u = N(!1), d = t, f = e, m = f.cmd ? F(() => l == null ? void 0 : l.getters["command/can"](f.cmd)) : N(!0), s = f.cmd ? F(() => l == null ? void 0 : l.getters["command/getVal"](f.cmd)) : F(() => f.defaultColor || ""), y = F(() => Rl(s.value)), b = F(() => l == null ? void 0 : l.getters["file/recentColors"](f.cmd)), x = F(
      () => Zl(s.value) ?? void 0
    );
    function M(H) {
      if (l.commit("file/addRecentColors", { cmd: f.cmd, recentColor: H }), f.isSelectEvent) {
        d("select", H), f.cmd && l.commit("command/setState", { cmd: f.cmd, ui: { value: H } });
        return;
      }
      const h = { value: H };
      f.cmd && n.run(f.cmd, h);
    }
    function w(H) {
      u.value = H, H && o();
    }
    return (H, h) => (T(), K(v(Cl), {
      val: y.value,
      "standard-colors": v(r),
      "theme-colors": v(A),
      "recent-colors": b.value,
      showFill: e.showFill,
      "show-auto": e.showAuto,
      onSelect: M,
      onShow: w,
      "selected-color-pos": x.value,
      to: e.to,
      "show-theme": e.showTheme,
      "show-more-color": e.showMoreColor
    }, {
      default: c(() => [
        i(v(Vl), {
          "resource-image": v(de).image,
          disabled: !v(m),
          x: e.x,
          y: e.y,
          "image-width": v(de).width,
          tooltip: e.tooltip,
          "sub-showing": u.value,
          "show-color-cube": !0,
          color: e.showFill ? y.value : y.value || "rgb(0, 0, 0)",
          "icon-name": e.iconName,
          onClick: h[0] || (h[0] = Oe(() => {
          }, ["stop"]))
        }, null, 8, ["resource-image", "disabled", "x", "y", "image-width", "tooltip", "sub-showing", "color", "icon-name"])
      ]),
      _: 1
    }, 8, ["val", "standard-colors", "theme-colors", "recent-colors", "showFill", "show-auto", "selected-color-pos", "to", "show-theme", "show-more-color"]));
  }
}), $n = /* @__PURE__ */ Y({
  __name: "CommandEditableSelect",
  props: {
    cmd: {},
    options: {},
    width: {},
    type: {},
    validateInput: { type: Function }
  },
  setup(e) {
    const t = re(), l = e, n = F(() => t == null ? void 0 : t.getters["command/can"](l.cmd)), r = F(() => t == null ? void 0 : t.getters["command/getVal"](l.cmd)), A = ie(Ae);
    function o(u) {
      const d = { value: u };
      A.run(l.cmd, d), t.commit("command/setState", {
        cmd: l.cmd,
        ui: { value: u }
      });
    }
    return (u, d) => (T(), K(v(be), {
      "model-value": r.value,
      "onUpdate:modelValue": o,
      options: e.options,
      disabled: !n.value,
      width: e.width,
      "validate-input": e.validateInput,
      type: e.type
    }, null, 8, ["model-value", "options", "disabled", "width", "validate-input", "type"]));
  }
}), nl = Ie($n), ei = Ie(Ct), Rt = N([]), ti = Dl("pptx", pt);
async function li() {
  var e;
  (e = Ce) != null && e.length || await sl(), Ce && Ce.length !== Rt.value.length && (Rt.value = Ce.map(({ fullName: t }) => ({
    label: t,
    value: t
  })));
}
function il(e) {
  const t = e.action;
  return {
    ariaLabel: e.t("editorPopup.miniToolbar"),
    rows: [
      {
        id: "font-row",
        groups: [
          {
            id: "font-controls",
            gap: 4,
            items: [
              {
                kind: "control",
                id: "font-name",
                class: "pptx-popup-font-name",
                control: {
                  component: nl,
                  props: {
                    cmd: a.FontName,
                    options: Rt.value,
                    width: 150,
                    type: "font",
                    onClick: li
                  }
                }
              },
              {
                kind: "control",
                id: "font-size",
                control: {
                  component: nl,
                  props: {
                    cmd: a.FontSize,
                    options: ti,
                    width: 64,
                    validateInput: _l
                  }
                }
              }
            ]
          }
        ]
      },
      {
        id: "format-row",
        groups: [
          {
            id: "text-style",
            gap: 2,
            divider: !0,
            items: [
              t({ id: "bold", label: e.t("toolbar.start.bold"), command: a.Bold, iconName: "Ribbon_word_bold_16__clip_cell", toggle: !0 }),
              t({ id: "italic", label: e.t("toolbar.start.italic"), command: a.Italic, iconName: "Ribbon_word_Italic_16__clip_cell", toggle: !0 }),
              t({ id: "underline", label: e.t("toolbar.start.underline"), command: a.Underline, x: -289, y: -56, toggle: !0 }),
              t({ id: "strikeout", label: e.t("toolbar.start.strikeout"), command: a.Strikeout, iconName: "Ribbon_word_strikethrough_16__clip_cell", toggle: !0 })
            ]
          },
          {
            id: "color",
            gap: 2,
            divider: !0,
            items: [
              {
                kind: "control",
                id: "font-color",
                control: {
                  component: ei,
                  props: {
                    cmd: a.FontColor,
                    x: -320.5,
                    y: -56,
                    tooltip: e.t("toolbar.start.fontClolor"),
                    to: !1
                  }
                }
              }
            ]
          },
          {
            id: "paragraph",
            gap: 2,
            divider: !0,
            items: [
              t({ id: "align-left", label: e.t("toolbar.start.horizontalAlignLeft"), command: a.AlignHorizontal, iconName: "Ribbon_word_align_left_16__clip_cell", value: 1, activeValue: "left" }),
              t({ id: "align-center", label: e.t("toolbar.start.horizontalAlignCenter"), command: a.AlignHorizontal, iconName: "Ribbon_word_center_16__clip_cell", value: 2, activeValue: "center" }),
              t({ id: "align-right", label: e.t("toolbar.start.horizontalAlignRight"), command: a.AlignHorizontal, iconName: "Ribbon_word_align_right_16__clip_cell", value: 0, activeValue: "right" })
            ]
          },
          {
            id: "cleanup",
            items: [
              t({ id: "clear-formatting", label: e.t("toolbar.start.clearAllFormatting"), command: a.ClearAllFormatting, iconName: "Ribbon_word_clear_16__clip_cell", value: !0 })
            ]
          }
        ]
      }
    ]
  };
}
function ai(e) {
  const t = e.action;
  return {
    ariaLabel: e.t("editorPopup.contextMenu"),
    width: 246,
    quickActions: [
      we(e),
      ye(e),
      xe(e)
    ],
    groups: [
      {
        id: "edit",
        items: [
          Nt(e),
          Ut(e),
          t({ id: "exit-text-edit", label: e.t("toolbar.start.exitTextEdit"), command: a.ExitTextEdit, iconName: "Ribbon_word_bold_16__clip_cell", value: !0 })
        ]
      },
      {
        id: "link",
        items: [
          at(e)
        ]
      },
      {
        id: "object",
        items: [
          Xe(e)
        ]
      }
    ]
  };
}
function ni(e) {
  return {
    ariaLabel: e.t("editorPopup.contextMenu"),
    width: 246,
    quickActions: [
      we(e),
      ye(e),
      xe(e)
    ],
    groups: [
      {
        id: "delete",
        items: [
          mt(e)
        ]
      },
      {
        id: "arrange",
        items: [
          et(e),
          tt(e),
          lt(e)
        ]
      },
      {
        id: "edit",
        items: [
          Nt(e),
          Ut(e)
        ]
      },
      {
        id: "link",
        items: [
          at(e)
        ]
      },
      {
        id: "object",
        items: [
          Xe(e)
        ]
      }
    ]
  };
}
const ii = { class: "global-basic-display-text panel-title" }, ri = { class: "master-title" }, oi = ["onClick"], Ai = ["src"], si = /* @__PURE__ */ Y({
  __name: "LayoutPopupContent",
  props: {
    title: {},
    cmd: {},
    maxWidth: { default: 400 }
  },
  emits: ["update:show", "close-popup"],
  setup(e, { emit: t }) {
    const l = re(), n = ie(Ae), r = F(() => l == null ? void 0 : l.getters["file/slideLayoutList"]), A = t, o = e, u = F(() => ({
      gridTemplateColumns: "repeat(4, 1fr)"
      // 每行4模板
    }));
    function d(m) {
      A("update:show", !1), A("close-popup");
      let s = {};
      s.masterIndex = m.slideMasterIndex, s.layoutIndex = m.layoutIndex, n.run(o.cmd, { value: s });
    }
    function f(m, s) {
      return s < 1 ? !1 : m < s - 1;
    }
    return (m, s) => {
      const y = B("n-ellipsis");
      return T(), E("div", {
        style: ue({ maxWidth: e.maxWidth + "px" })
      }, [
        O("div", ii, W(e.title), 1),
        i(v(ut), { "max-height": 400 }, {
          default: c(() => [
            (T(!0), E(fe, null, Se(r.value.list, (b, x) => (T(), E("div", { key: x }, [
              i(v(kt), null, {
                trigger: c(() => [
                  O("div", ri, W(b.name || ""), 1)
                ]),
                default: c(() => [
                  $(" " + W(b.name || ""), 1)
                ]),
                _: 2
              }, 1024),
              O("div", {
                class: "grid",
                style: ue(u.value)
              }, [
                (T(!0), E(fe, null, Se(b.layoutlist, (M, w) => (T(), E("div", {
                  key: M.id,
                  class: zt(["layout", { active: w === r.value.layoutIndex && x === r.value.masterIndex && e.cmd === v(a).InsertLayout }]),
                  onClick: (H) => d(M)
                }, [
                  O("img", {
                    src: M.img,
                    class: "layout-img"
                  }, null, 8, Ai),
                  i(y, {
                    class: "global-basic-display-text",
                    style: {
                      color: "var(--primary-text)",
                      lineHeight: "normal",
                      maxWidth: "70px"
                    }
                  }, {
                    default: c(() => [
                      $(W(M.name || ""), 1)
                    ]),
                    _: 2
                  }, 1024)
                ], 10, oi))), 128))
              ], 4),
              f(Number(x), r.value.list.length) ? (T(), K(v(Bt), {
                key: 0,
                margin: "15px 0px"
              })) : se("", !0)
            ]))), 128))
          ]),
          _: 1
        })
      ], 4);
    };
  }
}), Ht = /* @__PURE__ */ oe(si, [["__scopeId", "data-v-e937231d"]]), di = typeof navigator < "u" && /Mac|iPhone|iPad|iPod/i.test(navigator.platform), $e = (e) => di ? `⌘${e}` : `Ctrl+${e}`;
function pi(e) {
  const t = e.action;
  e.commandService.run(a.GetLayoutList, { value: !1 });
  const l = t({
    id: "create-slide-1",
    label: e.t("toolbar.start.newSlide"),
    command: a.NewSlide,
    iconName: "Ribbon_word_bold_16__clip_cell",
    toggle: !0,
    shortcut: $e("M")
  }), n = t({
    id: "create-slide-layout",
    label: e.t("toolbar.start.fromLayout"),
    command: a.InsertLayout,
    iconName: "Ribbon_word_bold_16__clip_cell"
  });
  return {
    ariaLabel: e.t("editorPopup.contextMenu"),
    width: 200,
    quickActions: [
      we(e),
      ye(e),
      xe(e)
    ],
    groups: [
      {
        id: "editor-slide",
        items: [
          {
            ...l,
            kind: "split-submenu",
            menu: {
              width: 200,
              groups: [
                {
                  id: "create-blank-slide",
                  items: [
                    t({ id: "create-slide", label: e.t("toolbar.start.newBlankSlide"), command: a.NewSlide, iconName: "Ribbon_word_bold_16__clip_cell", toggle: !0, shortcut: $e("M") }),
                    {
                      id: "create-slide-layout",
                      label: e.t("toolbar.start.fromLayout"),
                      kind: "submenu",
                      menu: {
                        width: 600,
                        groups: [
                          {
                            id: "create-from-layout-1",
                            items: [
                              {
                                kind: "control",
                                id: "from-layout-create",
                                class: "pptx-popup-font-name",
                                control: {
                                  component: Ie(Ht),
                                  props: {
                                    title: e.t("toolbar.start.fromLayout"),
                                    cmd: a.NewSlide
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          },
          t({ id: "copy-slide", label: e.t("toolbar.start.copySlide"), command: a.Copy, iconName: "Ribbon_word_bold_16__clip_cell", toggle: !0, shortcut: $e("C") }),
          t({ id: "delete-slide", label: e.t("toolbar.start.deleteSlide"), command: a.DeleteSlide, iconName: "Ribbon_word_bold_16__clip_cell", toggle: !0, shortcut: "Delete" }),
          t({ id: "hide-slide", label: e.t("toolbar.start.hideSlide"), command: a.ShowHideSlide, iconName: "Ribbon_word_bold_16__clip_cell", toggle: !0 }),
          t({
            id: "new-section",
            label: e.t("toolbar.start.section.add"),
            command: a.Section,
            iconName: "Ribbon_word_bold_16__clip_cell",
            triggrHeandler: () => {
              var A;
              let r = new Event("Rename");
              r.callback = (o) => {
                e.commandService.run(a.Section, { value: { name: o, cmd: "add" } });
              }, r.options = {
                name: e.t("dialogs.section.name"),
                defaultValue: e.t("dialogs.section.defaultName"),
                confirmName: e.t("common.confirm"),
                title: e.t("toolbar.start.section.add")
              }, (A = e.eventTarget) == null || A.dispatchEvent(r);
            }
          })
        ]
      },
      {
        id: "layout",
        items: [
          {
            ...n,
            kind: "submenu",
            menu: {
              width: 600,
              groups: [
                {
                  id: "create-from-layout-2",
                  items: [
                    {
                      kind: "control",
                      id: "from-layout-change",
                      class: "pptx-popup-font-name",
                      control: {
                        component: Ie(Ht),
                        props: {
                          title: e.t("toolbar.start.layout"),
                          cmd: a.InsertLayout
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  };
}
function ci(e) {
  const t = e.action;
  e.commandService.run(a.GetLayoutList, { value: !1 });
  const l = t({
    id: "create-slide-1",
    label: e.t("toolbar.start.newSlide"),
    command: a.NewSlide,
    iconName: "Ribbon_word_bold_16__clip_cell",
    toggle: !0,
    shortcut: $e("M")
  });
  return t({
    id: "create-slide-layout",
    label: e.t("toolbar.start.fromLayout"),
    command: a.InsertLayout,
    iconName: "Ribbon_word_bold_16__clip_cell"
  }), {
    ariaLabel: e.t("editorPopup.contextMenu"),
    width: 200,
    quickActions: [
      t({ id: "paste", label: e.t("toolbar.start.paste.title"), command: a.Paste, iconName: "Ribbon_word_past_24__clip_cell", size: 24, value: !0, shortcut: $e("V") })
    ],
    groups: [
      {
        id: "editor-slide",
        items: [
          {
            ...l,
            kind: "split-submenu",
            menu: {
              width: 200,
              groups: [
                {
                  id: "create-blank-slide",
                  items: [
                    t({ id: "create-slide", label: e.t("toolbar.start.newBlankSlide"), command: a.NewSlide, iconName: "Ribbon_word_bold_16__clip_cell", toggle: !0, shortcut: $e("M") }),
                    {
                      id: "create-slide-layout",
                      label: e.t("toolbar.start.fromLayout"),
                      kind: "submenu",
                      menu: {
                        width: 600,
                        groups: [
                          {
                            id: "create-from-layout-1",
                            items: [
                              {
                                kind: "control",
                                id: "from-layout-create",
                                class: "pptx-popup-font-name",
                                control: {
                                  component: Ie(Ht),
                                  props: {
                                    title: e.t("toolbar.start.fromLayout"),
                                    cmd: a.NewSlide
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          },
          t({
            id: "new-section",
            label: e.t("toolbar.start.section.add"),
            command: a.Section,
            iconName: "Ribbon_word_bold_16__clip_cell",
            triggrHeandler: () => {
              var r;
              let n = new Event("Rename");
              n.callback = (A) => {
                e.commandService.run(a.Section, { value: { name: A, cmd: "add" } });
              }, n.options = {
                name: e.t("dialogs.section.name"),
                defaultValue: e.t("dialogs.section.defaultName"),
                confirmName: e.t("common.confirm"),
                title: e.t("toolbar.start.section.add")
              }, (r = e.eventTarget) == null || r.dispatchEvent(n);
            }
          })
        ]
      }
    ]
  };
}
function ui(e) {
  return {
    ariaLabel: e.t("editorPopup.contextMenu"),
    width: 246,
    quickActions: [
      we(e),
      ye(e),
      xe(e)
    ],
    groups: [
      {
        id: "delete",
        items: [
          mt(e)
        ]
      },
      {
        id: "arrange",
        items: [
          et(e),
          tt(e),
          lt(e)
        ]
      },
      {
        id: "link",
        items: [
          at(e)
        ]
      },
      {
        id: "object",
        items: [
          Xe(e)
        ]
      }
    ]
  };
}
const mi = typeof navigator < "u" && /Mac|iPhone|iPad|iPod/i.test(navigator.platform), hi = (e) => mi ? `⌘${e}` : `Ctrl+${e}`;
function fi(e) {
  const t = e.action;
  e.commandService.run(a.GetLayoutList, { value: !1 });
  const l = t({
    id: "create-slide-layout",
    label: e.t("toolbar.start.layout"),
    command: a.InsertLayout,
    iconName: "Ribbon_word_bold_16__clip_cell"
  });
  return {
    ariaLabel: e.t("editorPopup.contextMenu"),
    width: 200,
    quickActions: [
      t({ id: "paste", label: e.t("toolbar.start.paste.title"), command: a.Paste, iconName: "Ribbon_word_past_24__clip_cell", size: 24, value: !0, shortcut: hi("V") })
    ],
    groups: [
      {
        id: "layout",
        items: [
          {
            ...l,
            kind: "submenu",
            menu: {
              width: 600,
              groups: [
                {
                  id: "create-from-layout-2",
                  items: [
                    {
                      kind: "control",
                      id: "from-layout-change",
                      class: "pptx-popup-font-name",
                      control: {
                        component: Ie(Ht),
                        props: {
                          title: e.t("toolbar.start.layout"),
                          cmd: a.InsertLayout
                        }
                      }
                    }
                  ]
                }
              ]
            }
          },
          t({ id: "reset-slide", label: e.t("toolbar.start.resetSlide"), command: a.ResetSlide, iconName: "Ribbon_word_bold_16__clip_cell" })
        ]
      },
      {
        id: "comment",
        items: [
          t({ id: "insert-comment", label: e.t("toolbar.insert.comment.title"), command: a.InsertComment, iconName: "Ribbon_word_bold_16__clip_cell", triggrHeandler: () => {
            e.store.commit("panel/openPanel", ct.CommentPanel), e.store.commit("panel/setShowHideComment", !0);
          } })
        ]
      }
    ]
  };
}
function vi(e) {
  const t = e.action;
  return {
    ariaLabel: e.t("editorPopup.contextMenu"),
    width: 246,
    quickActions: [
      we(e),
      ye(e),
      xe(e)
    ],
    groups: [
      {
        id: "delete",
        items: [
          mt(e)
        ]
      },
      {
        id: "arrange",
        items: [
          et(e),
          tt(e),
          lt(e)
        ]
      },
      {
        id: "edit",
        items: [
          t({ id: "editText", label: e.t("contextMenu.editText"), command: a.ShapeEditText, iconName: "R_word_delete_16__clip_cell", value: !0 }),
          vl(e),
          gl(e)
        ]
      },
      {
        id: "link",
        items: [
          at(e)
        ]
      },
      {
        id: "object",
        items: [
          Xe(e)
        ]
      }
    ]
  };
}
function gi(e) {
  return e.action, {
    ariaLabel: e.t("editorPopup.contextMenu"),
    width: 246,
    quickActions: [
      we(e),
      ye(e),
      xe(e)
    ],
    groups: [
      {
        id: "delete",
        items: [
          mt(e)
        ]
      },
      {
        id: "arrange",
        items: [
          et(e),
          tt(e),
          lt(e)
        ]
      },
      {
        id: "edit",
        items: [
          vl(e),
          gl(e)
        ]
      },
      {
        id: "link",
        items: [
          at(e)
        ]
      },
      {
        id: "object",
        items: [
          Xe(e)
        ]
      }
    ]
  };
}
function bi(e) {
  return e.action, {
    ariaLabel: e.t("editorPopup.contextMenu"),
    width: 246,
    quickActions: [
      we(e),
      ye(e),
      xe(e)
    ],
    groups: [
      {
        id: "delete",
        items: [
          mt(e)
        ]
      },
      {
        id: "arrange",
        items: [
          et(e),
          tt(e),
          lt(e)
        ]
      },
      {
        id: "link",
        items: [
          at(e)
        ]
      },
      {
        id: "object",
        items: [
          Xe(e)
        ]
      }
    ]
  };
}
function wi(e) {
  const t = e.action;
  e.commandService.run(a.CellMargin, { type: Q.GET, value: 0 });
  const l = t({ id: "cellMargin-1", label: e.t("toolbar.tableTools.cellMargin"), command: a.CellMargin, iconName: "Ribbon_word_bold_16__clip_cell" });
  return {
    ariaLabel: e.t("editorPopup.contextMenu"),
    width: 246,
    quickActions: [
      we(e),
      ye(e),
      xe(e)
    ],
    groups: [
      {
        id: "arrange",
        items: [
          et(e),
          tt(e),
          lt(e)
        ]
      },
      {
        id: "table-size",
        items: [
          t({ id: "equalRowHeight", label: e.t("toolbar.tableTools.equalRowHeight"), command: a.EqualRowHeight, iconName: "Ribbon_word_bold_16__clip_cell" }),
          t({ id: "equalColumnWidth", label: e.t("toolbar.tableTools.equalColumnWidth"), command: a.EqualColumnWidth, iconName: "Ribbon_word_bold_16__clip_cell" })
        ]
      },
      {
        id: "col-margin",
        items: [
          {
            ...l,
            kind: "submenu",
            menu: {
              width: 200,
              groups: [
                {
                  id: "col-margin-1-1",
                  items: [
                    t({ id: "colMargin-1-1", label: e.t("toolbar.tableTools.normal"), command: a.CellMargin, iconName: "Ribbon_word_bold_16__clip_cell", activeValue: 0, toggle: !1, triggrHeandler: () => e.commandService.run(a.CellMargin, { type: Q.SET, value: 0 }) }),
                    t({ id: "colMargin-1-2", label: e.t("toolbar.tableTools.noMargin"), command: a.CellMargin, iconName: "Ribbon_word_bold_16__clip_cell", activeValue: 1, toggle: !1, triggrHeandler: () => e.commandService.run(a.CellMargin, { type: Q.SET, value: 1 }) }),
                    t({ id: "colMargin-1-3", label: e.t("toolbar.tableTools.thinMargin"), command: a.CellMargin, iconName: "Ribbon_word_bold_16__clip_cell", activeValue: 2, toggle: !1, triggrHeandler: () => e.commandService.run(a.CellMargin, { type: Q.SET, value: 2 }) }),
                    t({ id: "colMargin-1-4", label: e.t("toolbar.tableTools.thickMargin"), command: a.CellMargin, iconName: "Ribbon_word_bold_16__clip_cell", activeValue: 3, toggle: !1, triggrHeandler: () => e.commandService.run(a.CellMargin, { type: Q.SET, value: 3 }) }),
                    t({ id: "colMargin-1-5", label: e.t("toolbar.tableTools.customMargin"), command: a.CellMargin, iconName: "Ribbon_word_bold_16__clip_cell", triggrHeandler: () => e.store.commit("panel/openPanel", ct.SetShapeAndTextPanel) })
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        id: "edit",
        items: [
          Nt(e)
        ]
      },
      {
        id: "object",
        items: [
          Xe(e)
        ]
      }
    ]
  };
}
function xi(e) {
  const t = e.action;
  e.commandService.run(a.TableDelete, { type: Q.GET, value: 0 });
  const l = e.store.getters["command/getVal"](a.TableDelete), n = t({ id: "insertCell", label: e.t("toolbar.tableTools.insert"), command: a.InsertRow, iconName: "Ribbon_word_bold_16__clip_cell" });
  return {
    ariaLabel: e.t("editorPopup.contextMenu"),
    width: 246,
    quickActions: [
      we(e),
      ye(e),
      xe(e)
    ],
    groups: [
      {
        id: "insert-delete",
        items: [
          {
            ...n,
            kind: "submenu",
            menu: {
              width: 200,
              groups: [
                {
                  id: "insertCell-1-1",
                  items: [
                    t({ id: "insertRowByTop", label: e.t("toolbar.tableTools.insertRowByTop"), command: a.InsertRow, iconName: "Ribbon_word_bold_16__clip_cell", value: "top" }),
                    t({ id: "insertRowByBottom", label: e.t("toolbar.tableTools.insertRowByBottom"), command: a.InsertRow, iconName: "Ribbon_word_bold_16__clip_cell", value: "bottom" }),
                    t({ id: "insertColumnByLeft", label: e.t("toolbar.tableTools.insertColumnByLeft"), command: a.InsertColumn, iconName: "Ribbon_word_bold_16__clip_cell", value: "left" }),
                    t({ id: "insertColumnByRight", label: e.t("toolbar.tableTools.insertColumnByRight"), command: a.InsertColumn, iconName: "Ribbon_word_bold_16__clip_cell", value: "right" })
                  ]
                }
              ]
            }
          },
          t({ id: "deleteRow", label: e.t("toolbar.tableTools.deleteRow"), command: a.TableDelete, iconName: "Ribbon_word_bold_16__clip_cell", disabled: (l & Be.DELETE_ROW) !== Be.DELETE_ROW, triggrHeandler: () => e.commandService.run(a.TableDelete, { type: Q.SET, value: Be.DELETE_ROW }) }),
          t({ id: "deleteColumn", label: e.t("toolbar.tableTools.deleteColumn"), command: a.TableDelete, iconName: "Ribbon_word_bold_16__clip_cell", disabled: (l & Be.DELETE_COLUMN) !== Be.DELETE_COLUMN, triggrHeandler: () => e.commandService.run(a.TableDelete, { type: Q.SET, value: Be.DELETE_COLUMN }) })
        ]
      },
      {
        id: "mergeAndSplit",
        items: [
          t({ id: "mergeCells", label: e.t("toolbar.tableTools.mergeCells"), command: a.MergeCells, iconName: "Ribbon_word_bold_16__clip_cell" }),
          t({ id: "splitCells", label: e.t("toolbar.tableTools.splitCells"), command: a.SplitCells, iconName: "Ribbon_word_bold_16__clip_cell" })
        ]
      },
      {
        id: "edit",
        items: [
          Nt(e),
          Ut(e)
        ]
      },
      {
        id: "object",
        items: [
          t({ id: "selectTable", label: e.t("toolbar.tableTools.selectTable"), command: a.TableSelect, iconName: "Ribbon_word_bold_16__clip_cell", value: { value: 0 } }),
          Xe(e)
        ]
      }
    ]
  };
}
function yi(e) {
  var A, o;
  const t = e.action, l = (A = e.store) == null ? void 0 : A.getters["file/currentPage"], n = (o = e.store) == null ? void 0 : o.getters["file/pageCount"], r = t({ id: "screen", label: e.t("contextMenu.screen"), command: a.SetScreen, iconName: "Ribbon_word_bold_16__clip_cell" });
  return {
    ariaLabel: e.t("editorPopup.contextMenu"),
    width: 246,
    quickActions: [],
    groups: [
      {
        id: "next",
        items: [
          t({ id: "nextPage", label: e.t("contextMenu.nextPage"), command: a.PlaySlideShow, iconName: "Ribbon_word_bold_16__clip_cell", value: "nextPage", disabled: l >= n }),
          t({ id: "prevPage", label: e.t("contextMenu.prevPage"), command: a.PlaySlideShow, iconName: "Ribbon_word_bold_16__clip_cell", value: "prevPage", disabled: l <= 1 }),
          t({ id: "firstPage", label: e.t("contextMenu.firstPage"), command: a.PlaySlideShow, iconName: "Ribbon_word_bold_16__clip_cell", value: "firstPage", disabled: l <= 1 }),
          t({ id: "lastPage", label: e.t("contextMenu.lastPage"), command: a.PlaySlideShow, iconName: "Ribbon_word_bold_16__clip_cell", value: "lastPage", disabled: l >= n })
        ]
      },
      {
        id: "col-margin",
        items: [
          {
            ...r,
            kind: "submenu",
            menu: {
              width: 200,
              groups: [
                {
                  id: "blackWhiteScreen",
                  items: [
                    t({ id: "whiteScreen", label: e.t("contextMenu.whiteScreen"), command: a.SetScreen, iconName: "Ribbon_word_bold_16__clip_cell", value: "white" }),
                    t({ id: "blackScreen", label: e.t("contextMenu.blackScreen"), command: a.SetScreen, iconName: "Ribbon_word_bold_16__clip_cell", value: "black" })
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        id: "endSlideShow",
        items: [
          t({ id: "endSlideShow", label: e.t("contextMenu.endSlideShow"), command: a.EndSlideShow, iconName: "Ribbon_word_bold_16__clip_cell" })
        ]
      }
    ]
  };
}
const Si = typeof navigator < "u" && /Mac|iPhone|iPad|iPod/i.test(navigator.platform), Mi = (e) => Si ? `⌘${e}` : `Ctrl+${e}`;
function Pi(e) {
  const t = e.action;
  e.commandService.run(a.GetLayoutList, { value: !1 });
  const l = t({
    id: "create-slide-1",
    label: e.t("toolbar.start.newSlide"),
    command: a.NewSlide,
    iconName: "Ribbon_word_bold_16__clip_cell",
    toggle: !0,
    shortcut: Mi("M")
  });
  return {
    ariaLabel: e.t("editorPopup.contextMenu"),
    width: 200,
    quickActions: [
      we(e),
      ye(e),
      xe(e)
    ],
    groups: [
      {
        id: "editor-slide",
        items: [
          l,
          t({ id: "delete-slide", label: e.t("toolbar.start.deleteSlide"), command: a.DeleteSlide, iconName: "Ribbon_word_bold_16__clip_cell", toggle: !0, shortcut: "Delete" }),
          t({ id: "hide-slide", label: e.t("toolbar.start.hideSlide"), command: a.ShowHideSlide, iconName: "Ribbon_word_bold_16__clip_cell", toggle: !0 }),
          t({
            id: "new-section",
            label: e.t("toolbar.start.section.add"),
            command: a.Section,
            iconName: "Ribbon_word_bold_16__clip_cell",
            triggrHeandler: () => {
              var r;
              let n = new Event("Rename");
              n.callback = (A) => {
                e.commandService.run(a.Section, { value: { name: A, cmd: "add" } });
              }, n.options = {
                name: e.t("dialogs.section.name"),
                defaultValue: e.t("dialogs.section.defaultName"),
                confirmName: e.t("common.confirm"),
                title: e.t("toolbar.start.section.add")
              }, (r = e.eventTarget) == null || r.dispatchEvent(n);
            }
          })
        ]
      }
    ]
  };
}
function Hi(e) {
  var r, A;
  const t = e.action;
  e.commandService.run(a.SlideMasterRename, { type: Q.GET, value: { name: "", cmd: a.SlideMasterRename } });
  const l = (r = e.store) == null ? void 0 : r.getters["command/getVal"](a.SlideMasterRename), n = (A = e.store) == null ? void 0 : A.getters["command/getVal"](a.SlideMasterPreserve);
  return {
    ariaLabel: e.t("editorPopup.contextMenu"),
    width: 200,
    quickActions: [
      we(e),
      ye(e),
      xe(e)
    ],
    groups: [
      {
        id: "editor-slide",
        items: [
          t({ id: "create-master", label: e.t("contextMenu.createSlideMaster"), command: a.SlideMasterInsert, iconName: "Ribbon_ppt_master_24__clip_cell", toggle: !0 }),
          t({ id: "create-layout", label: e.t("contextMenu.insertSlideLayout"), command: a.SlideMasterInsertLayout, iconName: "Ribbon_ppt_layout_24__clip_cell", toggle: !0 }),
          t({ id: "delete-master", label: e.t("contextMenu.deleteSlideMaster"), command: a.SlideMasterDelete, iconName: "Ribbon_ppt_delete_24__clip_cell", toggle: !0 }),
          t({
            id: "preserve-master",
            label: e.t("contextMenu.preserveSlideMaster"),
            command: a.SlideMasterPreserve,
            iconName: "Ribbon_ppt_protect_master_24__clip_cell",
            toggle: !1,
            active: n.isPreserve,
            triggrHeandler: () => {
              var o;
              if (n.isReference || !n.isPreserve)
                e.commandService.run(a.SlideMasterPreserve, { value: { isPreserve: !n.isPreserve, isDelete: !1 } });
              else {
                const u = new Event("MasterPreserve");
                u.callback = (d) => {
                  e.commandService.run(a.SlideMasterPreserve, { value: { isPreserve: !n.isPreserve, isDelete: d } });
                }, (o = e.eventTarget) == null || o.dispatchEvent(u);
              }
            }
          }),
          t({
            id: "rename-master",
            label: e.t("contextMenu.renameSlideMaster"),
            command: a.SlideMasterRename,
            iconName: "Ribbon_ppt_rename_master_24__clip_cell",
            triggrHeandler: () => {
              var u;
              let o = new Event("Rename");
              o.callback = (d) => {
                e.commandService.run(a.SlideMasterRename, { value: { name: d, cmd: "rename" }, type: Q.SET });
              }, o.options = { title: e.t("dialogs.layoutRename.title"), name: e.t("dialogs.layoutRename.name"), defaultValue: l, confirmName: e.t("common.confirm") }, (u = e.eventTarget) == null || u.dispatchEvent(o);
            }
          })
        ]
      },
      {
        id: "master-option",
        items: [
          t({
            id: "master-layout",
            label: e.t("contextMenu.masterLayout"),
            command: a.SlideMasterLayout,
            iconName: "Ribbon_ppt_master_layout_24__clip_cell",
            triggrHeandler: () => {
              var u;
              const o = new Event("LayoutPlaceHolder");
              (u = e.eventTarget) == null || u.dispatchEvent(o);
            }
          })
        ]
      }
    ]
  };
}
function ki(e) {
  var n;
  const t = e.action;
  e.commandService.run(a.SlideMasterRename, { type: Q.GET, value: { name: "", cmd: a.SlideMasterRename } });
  const l = (n = e.store) == null ? void 0 : n.getters["command/getVal"](a.SlideMasterRename);
  return {
    ariaLabel: e.t("editorPopup.contextMenu"),
    width: 200,
    quickActions: [
      we(e),
      ye(e),
      xe(e)
    ],
    groups: [
      {
        id: "editor-slide",
        items: [
          t({ id: "create-master", label: e.t("contextMenu.createSlideMaster"), command: a.SlideMasterInsert, iconName: "Ribbon_ppt_master_24__clip_cell", toggle: !0 }),
          t({ id: "create-layout", label: e.t("contextMenu.insertSlideLayout"), command: a.SlideMasterInsertLayout, iconName: "Ribbon_ppt_layout_24__clip_cell", toggle: !0 }),
          t({ id: "delete-layout", label: e.t("contextMenu.deleteSlideLayout"), command: a.SlideMasterDelete, iconName: "Ribbon_ppt_delete_24__clip_cell", toggle: !0 }),
          t({
            id: "rename-layout",
            label: e.t("contextMenu.renameSlideLayout"),
            command: a.SlideMasterRename,
            iconName: "Ribbon_ppt_rename_master_24__clip_cell",
            triggrHeandler: () => {
              var A;
              let r = new Event("Rename");
              r.callback = (o) => {
                e.commandService.run(a.SlideMasterRename, { value: { name: o, cmd: "rename" }, type: Q.SET });
              }, r.options = { title: e.t("dialogs.layoutRename.title"), name: e.t("dialogs.layoutRename.name"), defaultValue: l, confirmName: e.t("common.confirm") }, (A = e.eventTarget) == null || A.dispatchEvent(r);
            }
          })
        ]
      },
      {
        id: "master-option",
        items: [
          t({
            id: "master-layout",
            label: e.t("contextMenu.masterLayout"),
            command: a.SlideMasterLayout,
            iconName: "Ribbon_ppt_master_layout_24__clip_cell",
            triggrHeandler: () => {
              var A;
              const r = new Event("LayoutPlaceHolder");
              (A = e.eventTarget) == null || A.dispatchEvent(r);
            }
          })
        ]
      }
    ]
  };
}
function zi(e) {
  const t = e.action;
  return {
    ariaLabel: e.t("editorPopup.contextMenu"),
    width: 200,
    quickActions: [
      we(e),
      ye(e),
      xe(e)
    ],
    groups: [
      {
        id: "editor-slide",
        items: [
          t({ id: "create-master", label: e.t("contextMenu.createSlideMaster"), command: a.SlideMasterInsert, iconName: "Ribbon_ppt_master_24__clip_cell", toggle: !0 }),
          t({ id: "create-layout", label: e.t("contextMenu.insertSlideLayout"), command: a.SlideMasterInsertLayout, iconName: "Ribbon_ppt_layout_24__clip_cell", toggle: !0 })
        ]
      }
    ]
  };
}
const Li = /* @__PURE__ */ Y({
  __name: "PptxEditorPopup",
  props: {
    eventTarget: {}
  },
  setup(e) {
    const t = ie(Lt, null), l = ie(Ae), n = re(), { t: r } = Me(), A = F(() => n.getters["command/loadEnd"]), o = N(), u = N(null), d = N(null), f = N("body"), m = Xn(n, l);
    function s() {
      return !0;
    }
    function y(x) {
      if (o.value = l.api.getCursorTargetType(), !A.value) return null;
      switch (f.value = "body", u.value = null, d.value = null, o.value) {
        case Te.THUMBNAIL:
          d.value = pi({ action: m, t: r, commandService: l, eventTarget: (t == null ? void 0 : t.eventTarget) ?? window, store: n });
          break;
        case Te.THUMBNAIL_GAP_LINE:
        case Te.SORTER_THUMBNAIL_GAP_LINE:
          d.value = ci({ action: m, t: r, commandService: l, eventTarget: (t == null ? void 0 : t.eventTarget) ?? window, store: n });
          break;
        case Te.SORTER_THUMBNAIL:
          d.value = Pi({ action: m, t: r, commandService: l, eventTarget: (t == null ? void 0 : t.eventTarget) ?? window, store: n });
          break;
        case Te.SLIDE_MASTER_THUMBNAIL:
          d.value = Hi({ action: m, t: r, commandService: l, eventTarget: (t == null ? void 0 : t.eventTarget) ?? window, store: n });
          break;
        case Te.SLIDE_LAYOUT_THUMBNAIL:
          d.value = ki({ action: m, t: r, commandService: l, eventTarget: (t == null ? void 0 : t.eventTarget) ?? window, store: n });
          break;
        case Te.SLIDE_LAYOUT_THUMBNAIL_GAP_LINE:
          d.value = zi({ action: m, t: r, commandService: l, eventTarget: (t == null ? void 0 : t.eventTarget) ?? window, store: n });
          break;
        case Te.PLAY_MAIN:
          f.value = "#playContainer", d.value = yi({ action: m, t: r, commandService: l, eventTarget: (t == null ? void 0 : t.eventTarget) ?? window, store: n });
          break;
        default:
          b(x.trigger);
      }
    }
    function b(x) {
      const M = Nn(l.api);
      M === p.Nil && x === "contextMenu" ? d.value = fi({ action: m, t: r, commandService: l, store: n }) : (M & p.Text) === p.Text ? ((ll(l.api) || x === "contextMenu") && (u.value = il({ action: m, t: r, commandService: l, store: n })), d.value = ai({ action: m, t: r, commandService: l, store: n, eventTarget: (t == null ? void 0 : t.eventTarget) ?? window })) : (M & p.Placeholder) === p.Placeholder ? d.value = ni({ action: m, t: r, commandService: l, store: n, eventTarget: (t == null ? void 0 : t.eventTarget) ?? window }) : (M & p.Picture) === p.Picture ? d.value = ui({ action: m, t: r, commandService: l, store: n, eventTarget: (t == null ? void 0 : t.eventTarget) ?? window }) : (M & p.Connector) === p.Connector || (M & p.GroupAllConnector) === p.GroupAllConnector ? d.value = bi({ action: m, t: r, commandService: l, store: n, eventTarget: (t == null ? void 0 : t.eventTarget) ?? window }) : (M & p.TableCell) === p.TableCell ? (d.value = xi({ action: m, t: r, commandService: l, store: n, eventTarget: (t == null ? void 0 : t.eventTarget) ?? window }), (ll(l.api) || x === "contextMenu") && (u.value = il({ action: m, t: r, commandService: l, store: n }))) : (M & p.Table) === p.Table ? d.value = wi({ action: m, t: r, commandService: l, store: n, eventTarget: (t == null ? void 0 : t.eventTarget) ?? window }) : (M & p.GroupShape) === p.GroupShape ? d.value = gi({ action: m, t: r, commandService: l, store: n, eventTarget: (t == null ? void 0 : t.eventTarget) ?? window }) : (M & p.Shape) === p.Shape && (d.value = vi({ action: m, t: r, commandService: l, store: n, eventTarget: (t == null ? void 0 : t.eventTarget) ?? window }));
    }
    return (x, M) => (T(), K(v(Bl), {
      "event-target": e.eventTarget,
      "is-selection-expanded": s,
      "mini-toolbar": u.value,
      "context-menu": d.value,
      onInteractionChanged: y,
      to: f.value
    }, null, 8, ["event-target", "mini-toolbar", "context-menu", "to"]));
  }
}), Ni = /* @__PURE__ */ oe(Li, [["__scopeId", "data-v-34818039"]]), Ti = ".pptx", Vi = /* @__PURE__ */ Y({
  __name: "edit",
  setup(e) {
    const t = re(), l = ie(Ae), n = ie(Lt, null), r = N(null), A = (n == null ? void 0 : n.eventTarget) || null, { t: o } = Me(), u = Fl();
    function d() {
      var M, w;
      try {
        (w = (M = l.api.docApp) == null ? void 0 : M.destroy) == null || w.call(M);
      } catch {
      }
    }
    function f(M) {
      M.preventDefault();
    }
    function m(M) {
      const w = {
        copy: "C",
        paste: "V",
        cut: "X"
      };
      return `${/Mac|iPhone|iPad|iPod/i.test(navigator.platform) ? "Command" : "Ctrl"}+${w[M] || "C/V/X"}`;
    }
    function s(M) {
      if (M === "https") {
        u.warning(o("common.httpsOnly"));
        return;
      }
      (M === "copy" || M === "paste" || M === "cut") && u.warning(
        o("common.clipboardShortcutTip", {
          shortcut: m(M)
        })
      );
    }
    function y(M) {
      return new Promise((w) => {
        const H = document.createElement("input");
        H.type = "file", H.accept = !M || M.length == 0 ? Ti : M, H.style.display = "none", H.addEventListener(
          "change",
          () => {
            var g;
            const h = ((g = H.files) == null ? void 0 : g[0]) || null;
            if (H.remove(), h && !Il(h, H.accept)) {
              u.warning("不支持打开该文件类型"), w(null);
              return;
            }
            if (h && h.size <= 0) {
              u.warning(o("common.emptyFileUnsupported")), w(null);
              return;
            }
            w(h);
          },
          { once: !0 }
        ), H.addEventListener(
          "cancel",
          () => {
            H.remove(), w(null);
          },
          { once: !0 }
        ), document.body.appendChild(H), H.click();
      });
    }
    async function b() {
      var w;
      const M = await y();
      if (!(!M || !r.value))
        try {
          t.dispatch("file/onOpening"), d(), (w = l.destroy) == null || w.call(l), r.value.innerHTML = "";
          const H = await Kt({
            docId: `local-${Date.now()}`,
            file: M,
            fileName: M.name,
            user: n == null ? void 0 : n.user,
            widgetMode: n == null ? void 0 : n.widgetMode,
            mainDom: r.value,
            eventTarget: n == null ? void 0 : n.eventTarget,
            [Jt]: {
              beforeRender: (h) => {
                l.initApi(h);
              }
            }
          });
          t.dispatch("file/onConnected", {
            title: document.title,
            docId: H.docId
          });
        } catch (H) {
          console.error("OpenDocument failed:", H), t.commit("file/setReady"), $t(
            "OpenDocumentFailed",
            void 0,
            n == null ? void 0 : n.eventTarget
          );
        }
    }
    async function x(M) {
      const w = await y(M);
      return w ? {
        fileData: typeof w.arrayBuffer == "function" ? await w.arrayBuffer() : w,
        imageName: w.name
      } : {
        fileData: null,
        imageName: null
      };
    }
    return Ft(() => {
      l.setSecurityErrorHandler(s), l.api.setOpenFileHandler(b), l.api.setUploadImageHandler(x), n != null && n.mainDom && (n.mainDom.value = r.value), Kt({
        docId: n == null ? void 0 : n.docId,
        file: n == null ? void 0 : n.file,
        fileUrl: n == null ? void 0 : n.fileUrl,
        fileName: n == null ? void 0 : n.fileName,
        user: n == null ? void 0 : n.user,
        widgetMode: n == null ? void 0 : n.widgetMode,
        mainDom: r.value,
        eventTarget: n == null ? void 0 : n.eventTarget,
        [Jt]: {
          beforeRender: (M) => {
            l.initApi(M);
          }
        }
      }).then(({ docId: M, app: w }) => {
        t.dispatch("file/onConnected", {
          title: document.title,
          docId: M
        });
      }).catch((M) => {
        console.error("OpenDocument failed:", M), t.dispatch("file/onError", M), $t(
          "OpenDocumentFailed",
          void 0,
          n == null ? void 0 : n.eventTarget
        );
      });
    }), Ol(() => {
      l.setSecurityErrorHandler(null);
    }), (M, w) => (T(), E("div", {
      class: "main-container",
      onContextmenu: Oe(f, ["prevent"])
    }, [
      i(Ln),
      O("div", {
        ref_key: "mainRef",
        ref: r,
        class: "main"
      }, null, 512),
      i(Ni, { "event-target": v(A) }, null, 8, ["event-target"])
    ], 32));
  }
}), xl = Symbol("LayoutRefs");
function Ci() {
  const e = ie(xl);
  if (!e) throw new Error("LayoutRefs not provided");
  return e;
}
const Ri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAq9JREFUeAHFV01oE0EUfrOGkKZNmygi25M2YA/tQd3cVGhBb41HkVzqRXIUwfZok5uUCj0aT3rpQW+NtxYq6DEVLxUqNC2IyaHYTU1/Qii7vrdhwzY7s38t3Q82WWZ35vvem/czywCxPaM815lWwNskXAx2GLD3N+a/F9n27J05HfQChADkfSHhz1MICeiFOQn/r0N4SEoQMiK9AwNKFiKpYeGEVrWC1zr4RWwkA7G0Ao2VkrOAE7UGVx8XhQtpxzn4/XoKtFYT3ECGxMcmoB8vEtCub7oLIOtaWxVUm+EuKvUlYPB+zraQSRgbUSA6PGqQ9nrycOOLfQ6PRF0tgcwRQFbvf12Cf9+WumNkWUKZgvj4JEixBIhAnuWK5r1MXmhWypDIZE+N7X58hQvVDaLUwzwM3ss5klrJ66Vn3GcR0aS9zwvQPz5hEJBHTPVDSJpEci/EhH30Fs0VxYxQgHbccTepP1gvG4TXpt8YLveCdm0T/pYXXDMm4vSwsdqxmoJJzr9zTE+bAIx4CkbaqpO9Gux+KoBvAUHJCQPKI7w692q1JHzPtRIGIbdCFP2eBKQe5M9EThBFv6sAIqZoPwsoeyhtAwk4D3In15vgBiFZn1CyEBSUftZq6VsA1fMgoJxXV9766pZcAfGxSQhK7LVCOgroS7t7gIKrWVnung+s/UHFvQ+8BVH5ptAKIjrcWIMjvMzo5jUmSt8DbGaezgy2gcun897agq0L0smJuiWvNzidGWzv9g5E5dHuPVn8Z/GJ0RN6raFa79SYhu7mMJtk8C3ArHyUx1TFRIWkXftltFrhwuiFK9mX4AbbFhz9XMP2u+wplcgzl1yinrzgVA1Zdfa2DiEi9O8CEtCA8LAj6ZpehJCg6/oHRjdbM7cKjLFpuLjvxAZ+FBfT8z8W/wMSbCotUS3t0QAAAABJRU5ErkJggg==";
var Zt = /* @__PURE__ */ ((e) => (e.Slides = "slides", e.Notes = "notes", e.SlideMaster = "slideMaster", e.Handout = "handout", e.NotesMaster = "notesMaster", e))(Zt || {});
const Zi = {
  namespaced: !0,
  state: () => ({
    hasError: !1,
    isReady: !1,
    connected: !1,
    message: null,
    rawEvent: null,
    fileInfo: { title: "", docId: "" },
    currentPage: 0,
    pageCount: 0,
    showType: "slides",
    recentColors: {
      [a.FontColor]: [],
      [a.ShapeFill]: [],
      [a.UnderlineColor]: [],
      [a.HeightLightColor]: [],
      [a.TableFillColor]: [],
      [a.TableStrokeColor]: []
    },
    recentSymbols: [],
    slideLayoutList: [],
    loadingRatio: 0,
    loadingStepTime: 1e3,
    showLoadingProgressBar: !0,
    showFindDialog: !1
  }),
  getters: {
    title: (e) => e.fileInfo.title,
    currentPage: (e) => e.currentPage,
    pageCount: (e) => e.pageCount,
    recentColors: (e) => (t) => e.recentColors[t],
    recentSymbols: (e) => e.recentSymbols,
    slideLayoutList: (e) => e.slideLayoutList,
    loadingRatio: (e) => e.loadingRatio,
    loadingStepTime: (e) => e.loadingStepTime,
    showLoadingProgressBar: (e) => e.showLoadingProgressBar,
    showType: (e) => e.showType,
    showFindDialog: (e) => e.showFindDialog
  },
  mutations: {
    setError(e, t) {
      e.hasError = !0, e.message = t.message, e.rawEvent = t.event ?? null;
    },
    clearError(e) {
      e.hasError = !1, e.message = null, e.rawEvent = null;
    },
    setReady(e, t = !0) {
      e.isReady = t;
    },
    setConnected(e, t) {
      e.connected = t;
    },
    setFileInfo(e, t) {
      e.fileInfo.title = t.title, e.fileInfo.docId = t.docId;
    },
    setCurrentPage(e, t) {
      e.currentPage = t;
    },
    setPageCount(e, t) {
      e.pageCount = t;
    },
    setShowType(e, t) {
      e.showType = t;
    },
    addRecentColors(e, t) {
      typeof t.recentColor != "string" && (t.recentColor = t.recentColor.hex);
      let l = t.cmd;
      const n = e.recentColors[l].findIndex(
        (r) => r === t.recentColor
      );
      n !== -1 && e.recentColors[l].splice(n, 1), e.recentColors[l].unshift(t.recentColor), e.recentColors[l].length > 10 && (e.recentColors[l].length = 10);
    },
    addRecentSymbols(e, t) {
      const l = e.recentSymbols.findIndex((n) => n === t);
      l !== -1 && e.recentSymbols.splice(l, 1), e.recentSymbols.unshift(t), e.recentSymbols.length > 10 && (e.recentSymbols.length = 10);
    },
    setSlideLayoutList(e, t) {
      e.slideLayoutList = t;
    },
    setLoadingRatio(e, t) {
      e.loadingRatio = t;
    },
    setLoadingStepTime(e, t) {
      e.loadingStepTime = t;
    },
    setShowLoadingProgressBar(e, t) {
      e.showLoadingProgressBar = t;
    },
    setShowFindDialog(e, t) {
      e.showFindDialog = t;
    }
  },
  actions: {
    onError({ commit: e }, t) {
      e("setError", {
        message: "文件处理失败",
        event: t
      });
    },
    onOpening({ commit: e }) {
      e("clearError"), e("setReady", !1), e("setConnected", !1), e("setLoadingRatio", 0), e("setShowLoadingProgressBar", !0);
    },
    onReady({ commit: e }, t) {
      e("setReady");
    },
    onConnected({ commit: e }, t) {
      e("setConnected", !0), e("setFileInfo", t);
    },
    onLoadPageEnd({ commit: e }, t) {
      e("setLoadingRatio", 100), setTimeout(() => {
        e("setShowLoadingProgressBar", !1);
      }, 1e3);
    },
    onExportReady({ commit: e }, t) {
    },
    onFilePassWord({ commit: e }, t) {
    }
  }
};
function NA(e, t, l, n) {
  return function({ node: r, option: A }) {
    if (!l) return r;
    if (r.props = r.props || {}, n ? n(A) : A.key === t.value)
      if (A.activeIcon) {
        const o = Dt(r);
        o && (o.props || (o.props = {}), o.props.style = {
          ...o.props.style || {},
          backgroundColor: "var(--active-bg)"
        });
      } else
        r.props.style = {
          ...r.props.style || {},
          backgroundColor: "var(--active-bg)"
        };
    else if (A.activeIcon) {
      const o = Dt(r);
      if (o)
        return o.props || (o.props = {}), o.props.style = {
          ...o.props.style || {},
          backgroundColor: ""
        }, r;
    } else
      r.props.style = {
        ...r.props.style || {},
        backgroundColor: ""
      };
    return r;
  };
}
function Dt(e) {
  var t, l;
  if (e && ((l = (t = e.props) == null ? void 0 : t.class) != null && l.includes("icon-container")))
    return e;
  if (e && e.children && Array.isArray(e.children))
    for (let n = 0; n < e.children.length; n++) {
      const r = Dt(e.children[n]);
      if (r)
        return r;
    }
  return null;
}
function TA(e, t, l) {
  return F(() => t.value ? e.value.map((n) => (n.key === l.value && n.noIcon && !n.icon ? n.icon = () => Ge(ce, { name: "Ribbon_word_right_16__clip_cell", size: 16 }) : n.key !== l.value && n.noIcon && n.icon && delete n.icon, n)) : [...e.value]);
}
function VA(e, t, l = 16) {
  return () => typeof e == "string" ? Ge(ce, { name: e, size: t ?? 16 }) : Ge(ce, { size: l, x: e, y: t, source: de.image, imageWidth: de.width });
}
function CA(e, t, l = 16) {
  return () => typeof e == "string" ? Ge("div", { class: "icon-container", style: { width: "20px", height: "20px", display: "flex", justifyContent: "center", alignItems: "center" } }, [
    Ge(ce, { name: e, size: 16 })
  ]) : Ge("div", { class: "icon-container", style: { width: (Number(t) ?? 16) + 4 + "px", height: (Number(l) ?? 16) + 4 + "px", display: "flex", justifyContent: "center", alignItems: "center" } }, [
    Ge(ce, { size: Number(l) ?? 16, x: e, y: t, source: de.image, imageWidth: de.width })
  ]);
}
function qt(e) {
  Ft(() => {
    document.addEventListener("pointerdown", t, !0);
  }), dl(() => {
    document.removeEventListener("pointerdown", t, !0);
  });
  function t(l) {
    var o;
    const n = l.target, r = (o = e.value) == null ? void 0 : o.$el, A = document.activeElement;
    !(n instanceof Node) || !(r instanceof HTMLElement) || !(A instanceof HTMLElement) || !r.contains(A) || r.contains(n) || A.blur();
  }
}
const Di = /* @__PURE__ */ Y({
  __name: "MenuNavTab",
  props: {
    modelValue: {},
    tabs: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, n = N(null), r = t, A = F({
      get: () => l.modelValue,
      set: (o) => r("update:modelValue", o)
    });
    return G(() => l.tabs, () => {
      Qe(() => {
        n.value && n.value.syncBarPosition();
      });
    }), (o, u) => {
      const d = B("n-tab-pane"), f = B("n-tabs");
      return T(), K(f, {
        value: A.value,
        "onUpdate:value": u[0] || (u[0] = (m) => A.value = m),
        ref_key: "tabsRef",
        ref: n,
        "justify-content": "center",
        type: "bar",
        size: "small",
        class: "toolbar-tabs"
      }, {
        default: c(() => [
          (T(!0), E(fe, null, Se(e.tabs, (m) => (T(), K(d, {
            key: m.name,
            name: m.name,
            tab: o.$t(m.label)
          }, null, 8, ["name", "tab"]))), 128))
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}), _i = /* @__PURE__ */ oe(Di, [["__scopeId", "data-v-54018f74"]]), Bi = /* @__PURE__ */ Y({
  __name: "CommandSmallButton",
  props: {
    cmd: {},
    iconName: {},
    x: {},
    y: {},
    tooltip: {},
    commandHandler: { type: Function }
  },
  setup(e) {
    const t = re(), l = e, n = F(() => t == null ? void 0 : t.getters["command/can"](l.cmd)), r = F(() => t == null ? void 0 : t.getters["command/active"](l.cmd)), A = ie(Ae);
    function o() {
      if (l.commandHandler) {
        l.commandHandler();
        return;
      }
      const d = { value: !r.value };
      A.run(l.cmd, d);
    }
    return (u, d) => (T(), K(v(Ot), {
      onClick: o,
      "resource-image": v(de).image,
      disabled: !n.value,
      x: e.x,
      y: e.y,
      "image-width": v(de).width,
      tooltip: e.tooltip,
      active: r.value,
      "icon-name": e.iconName
    }, null, 8, ["resource-image", "disabled", "x", "y", "image-width", "tooltip", "active", "icon-name"]));
  }
});
var ae = /* @__PURE__ */ ((e) => (e[e.NONE = 1] = "NONE", e[e.SINGLE_STRIKE = 2] = "SINGLE_STRIKE", e[e.DOUBLE_STRIKE = 4] = "DOUBLE_STRIKE", e))(ae || {}), He = /* @__PURE__ */ ((e) => (e.LEFT_TOP = "leftTop", e.CENTER_MIDDLE = "centerMiddle", e))(He || {}), _e = /* @__PURE__ */ ((e) => (e.HORIZONTAL = "horizontal", e.VERTICAL = "vertical", e.ROTATE_90 = "rotate90", e.ROTATE_270 = "rotate270", e.STACKED = "stacked", e))(_e || {}), Ve = /* @__PURE__ */ ((e) => (e.NONE = "none", e.NARROW_MARGIN = "narrowMargin", e.NORMAL_MARGIN = "normalMargin", e.WIDE_MARGIN = "wideMargin", e.INCREASE_MARGIN = "increaseMargin", e.CUSTOM_MARGIN = "customMargin", e))(Ve || {}), dt = /* @__PURE__ */ ((e) => (e.PHTYPE_BODY = "body", e.PHTYPE_CHART = "chart", e.PHTYPE_CLIPART = "clipArt", e.PHTYPE_CTRTITLE = "ctrTitle", e.PHTYPE_DGM = "dgm", e.PHTYPE_DT = "dt", e.PHTYPE_FTR = "ftr", e.PHTYPE_HDR = "hdr", e.PHTYPE_MEDIA = "media", e.PHTYPE_OBJ = "obj", e.PHTYPE_PIC = "pic", e.PHTYPE_SLDIMG = "sldImg", e.PHTYPE_SLDNUM = "sldNum", e.PHTYPE_SUBTITLE = "subTitle", e.PHTYPE_TBL = "tbl", e.PHTYPE_TITLE = "title", e))(dt || {});
const gt = {
  none: { leftMargin: 0, rightMargin: 0, topMargin: 0, bottomMargin: 0 },
  narrowMargin: { leftMargin: 0.13, rightMargin: 0.13, topMargin: 0.13, bottomMargin: 0.13 },
  normalMargin: { leftMargin: 0.25, rightMargin: 0.25, topMargin: 0.13, bottomMargin: 0.13 },
  wideMargin: { leftMargin: 0.38, rightMargin: 0.38, topMargin: 0.38, bottomMargin: 0.38 },
  increaseMargin: { leftMargin: 0.75, rightMargin: 0.75, topMargin: 0.38, bottomMargin: 0.38 },
  customMargin: null
}, RA = {
  "#000000": "black",
  "#0000FF": "blue",
  "#00FFFF": "cyan",
  "#00FF00": "green",
  "#FF00FF": "magenta",
  "#FF0000": "red",
  "#FFFF00": "yellow",
  "#FFFFFF": "white",
  "#00008B": "darkBlue",
  "#008B8B": "darkCyan",
  "#006400": "darkGreen",
  "#8B008B": "darkMagenta",
  "#8B0000": "darkRed",
  "#9B870C": "darkYellow",
  "#A9A9A9": "darkGray",
  "#D3D3D3": "lightGray",
  "#00000000": "none"
}, Fi = { style: { position: "relative" } }, Oi = /* @__PURE__ */ Y({
  __name: "UnitNumberInput",
  props: /* @__PURE__ */ Ye({
    unit: { default: "%" },
    width: { default: 120 },
    step: { default: 1 },
    disabled: { type: Boolean, default: !1 },
    min: { default: void 0 },
    max: { default: void 0 },
    precision: {},
    allowString: { type: Boolean, default: !1 }
  }, {
    modelValue: {
      default: 0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ye(["blur"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const l = t, n = Re(e, "modelValue"), r = N(0), A = N(!1), o = e;
    G(() => n.value, (f) => {
      setTimeout(() => {
        if (A.value) {
          A.value = !1;
          return;
        }
        r.value++;
      }, 0);
    }), G(() => o.unit, (f, m) => {
      f != m && r.value++;
    });
    function u(f) {
      const m = f.replace(new RegExp(`,|${o.unit}|\\s`, "g"), "").trim();
      return /^(\d|\-)+(\.(\d+)?)?$/.test(m) ? o.min !== void 0 && Number(m) <= o.min ? (n.value = o.min, o.min) : o.max !== void 0 && Number(m) >= o.max ? (n.value = o.max, o.max) : (n.value = Number(m), Number(m)) : (o.allowString || (n.value = null), m === "" ? null : Number.NaN);
    }
    function d(f) {
      return f === null ? "" : `${f.toLocaleString("en-US")}${o.allowString && typeof n.value == "string" ? "" : o.unit}`;
    }
    return (f, m) => {
      const s = B("n-icon");
      return T(), E("div", Fi, [
        (T(), K(v(yt), {
          "default-value": n.value === null || n.value === "" ? null : Number(n.value),
          parse: u,
          class: "unit-input",
          format: d,
          disabled: e.disabled,
          size: "tiny",
          "button-placement": "right",
          step: e.step,
          min: e.min,
          max: e.max,
          precision: e.precision,
          key: r.value,
          onInput: m[0] || (m[0] = () => A.value = !0),
          style: ue({ width: e.width + "px" }),
          "on-update:value": () => {
            A.value || l("blur");
          }
        }, {
          "add-icon": c(() => [
            i(s, { size: 10 }, {
              default: c(() => [
                i(v(Xt))
              ]),
              _: 1
            })
          ]),
          "minus-icon": c(() => [
            i(s, { size: 10 }, {
              default: c(() => [
                i(v(It))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["default-value", "disabled", "step", "min", "max", "precision", "style", "on-update:value"]))
      ]);
    };
  }
}), Fe = /* @__PURE__ */ oe(Oi, [["__scopeId", "data-v-44eb0525"]]), Ii = ["onMousedown"], Xi = /* @__PURE__ */ Y({
  __name: "UnderlineMenu",
  props: {
    options: {},
    modelValue: {},
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    width: {},
    validateInput: {},
    type: { default: "" },
    size: { default: "medium" },
    maxHeight: {},
    showToolTips: { type: Boolean, default: !1 },
    showText: { type: Boolean, default: !0 },
    maxWidth: { default: 200 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const { t: l } = Me(), n = e, r = t, A = N(!1), o = N(null), u = N(null), d = N(null), f = {
      Input: {
        // default
        border: "1px solid var(--button-border)",
        borderRadiusMedium: "4px",
        heightMedium: "24px",
        fontSizeMedium: "12px",
        color: "var(--input-bg)",
        // 背景色
        textColor: "var(--button-text-standard)",
        iconColor: "var(--icon-secondary)",
        iconColorPressed: "var(--icon-secondary)",
        // hover
        borderHover: "1px solid var(--split-view-border)",
        iconColorHover: "var(--icon-secondary)",
        // focus
        borderFocus: "1px solid var(--accent-color-blue)",
        boxShadowFocus: "transparent",
        // disabled
        borderDisabled: "1px solid var(--disable-button-border)",
        textColorDisabled: "var(--disable-button-text)",
        iconColorDisabled: "var(--icon-disabled)"
      },
      Scrollbar: {
        scrollbarColor: "var(--active-bg)"
      }
    }, m = N("default"), s = F(() => m.value == "focus" || M.value == !0 ? {
      backgroundColor: "var(--disable-button-border)"
    } : {
      backgroundColor: "transparent"
    });
    G(
      () => n.modelValue,
      (V) => {
        if (V == null || V == null) o.value = null;
        else {
          const k = n.options.find((C) => C.value === String(V));
          o.value = k || null;
        }
      },
      { immediate: !0 }
    ), G(
      () => n.options,
      (V, k) => {
        k.length == 0 && setTimeout(() => {
          u && u.value && d.value && u.value.scrollIntoView({ block: "nearest" });
        }, 100);
      }
    );
    const y = F(() => ({
      display: "flex",
      border: "1px solid var(--button-border)",
      borderRadius: "4px",
      alignItems: "center",
      justifyContent: "space-between",
      width: n.width ? typeof n.width == "number" ? `${n.width}px` : n.width : "auto"
    })), b = N(null), x = N(null), M = F(() => n.options.length === 0 ? !1 : A.value);
    function w() {
      var V;
      n.disabled || (A.value ? (A.value = !1, (V = x.value) == null || V.blur()) : (A.value = !0, g()));
    }
    function H(V) {
      var k;
      o.value = V, I(), A.value = !1, (k = x.value) == null || k.blur();
    }
    function h(V) {
      var C;
      const k = V.relatedTarget;
      (C = b.value) != null && C.contains(k) || (A.value = !1);
    }
    function g() {
      Qe(() => {
        var k, C, Z;
        (k = x.value) == null || k.focus();
        const V = (C = x.value) == null ? void 0 : C.inputElRef;
        (Z = V == null ? void 0 : V.select) == null || Z.call(V), u && u.value && d.value && u.value.scrollIntoView({ block: "nearest" });
      });
    }
    function I() {
      var Z;
      const V = (Z = o.value) == null ? void 0 : Z.value, k = n.options.find((P) => P.value === V), C = k ? k.value : V;
      r("update:modelValue", C), r("change", C);
    }
    function _(V, k = !1) {
      return V ? V.imgX === void 0 ? {} : {
        backgroundImage: `url(${de.image})`,
        width: `${k ? 20 : (n.width || 60) - 40}px`,
        height: "8px",
        backgroundPosition: `${(V.imgX ?? 0) * 2}px ${(V.imgY ?? 0) * 2}px`,
        transform: "scale(1,0.5)",
        backgroundSize: `${de.width}px auto`,
        transformOrigin: "top left",
        margin: k ? "0 4px" : "0px 8px",
        maxWidth: n.maxWidth + "px"
      } : {};
    }
    function L(V) {
      return V ? V.imgX !== void 0 ? { maxWidth: "60px" } : {
        width: "calc(100% - 24px)",
        textAlign: "center",
        display: "block",
        fontSize: "12px"
      } : {};
    }
    return (V, k) => {
      const C = B("n-ellipsis"), Z = B("n-icon"), P = B("n-config-provider");
      return T(), E("div", null, [
        i(P, { "theme-overrides": f }, {
          default: c(() => [
            i(v(pl), {
              show: M.value,
              trigger: "manual",
              placement: "bottom-start",
              "show-arrow": !1,
              to: "body",
              size: e.size,
              style: ue({ maxWidth: e.maxWidth + "px" }),
              onClickoutside: k[0] || (k[0] = (S) => A.value = !1)
            }, {
              trigger: c(() => {
                var S, X;
                return [
                  O("div", {
                    ref_key: "rootRef",
                    ref: b,
                    style: ue(y.value),
                    onFocusout: h,
                    onFocusin: g
                  }, [
                    ((S = o.value) == null ? void 0 : S.imgX) !== void 0 ? (T(), E("div", {
                      key: 0,
                      style: ue(_(o.value, e.showText))
                    }, null, 4)) : se("", !0),
                    e.showText || ((X = o.value) == null ? void 0 : X.imgX) === void 0 ? (T(), K(C, {
                      key: 1,
                      style: ue(L(o.value))
                    }, {
                      default: c(() => {
                        var q;
                        return [
                          $(W((q = o.value) == null ? void 0 : q.label), 1)
                        ];
                      }),
                      _: 1
                    }, 8, ["style"])) : se("", !0),
                    i(Z, {
                      class: "arrow",
                      onMousedown: Oe(w, ["prevent"]),
                      size: "12",
                      style: ue(s.value)
                    }, {
                      default: c(() => [
                        St(i(v(Xt), null, null, 512), [
                          [Mt, M.value]
                        ]),
                        St(i(v(It), null, null, 512), [
                          [Mt, !M.value]
                        ])
                      ]),
                      _: 1
                    }, 8, ["style"])
                  ], 36)
                ];
              }),
              default: c(() => [
                i(v(ut), {
                  ref_key: "scrollbarRef",
                  ref: d,
                  "max-height": e.maxHeight
                }, {
                  default: c(() => [
                    (T(!0), E(fe, null, Se(e.options, (S) => {
                      var X;
                      return T(), E("div", {
                        key: S.value,
                        class: zt(["global-basic-display-text global-menu-list-item item", { active: S.value === ((X = o.value) == null ? void 0 : X.value) }]),
                        onMousedown: Oe((q) => H(S), ["prevent"]),
                        ref_for: !0,
                        ref: (q) => {
                          var le;
                          S.value === ((le = o.value) == null ? void 0 : le.value) && (u.value = q);
                        }
                      }, [
                        S.imgX == null ? (T(), K(C, {
                          key: 0,
                          style: ue([{ "margin-left": "10px" }, _(S)])
                        }, {
                          default: c(() => [
                            $(W(S.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["style"])) : (T(), E(fe, { key: 1 }, [
                          e.showToolTips ? (T(), K(v(kt), { key: 0 }, {
                            trigger: c(() => [
                              O("div", {
                                class: "underline-img",
                                style: ue(_(S))
                              }, null, 4)
                            ]),
                            default: c(() => [
                              $(" " + W(S.label), 1)
                            ]),
                            _: 2
                          }, 1024)) : (T(), E("div", {
                            key: 1,
                            class: "underline-img",
                            style: ue(_(S))
                          }, null, 4))
                        ], 64))
                      ], 42, Ii);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["max-height"])
              ]),
              _: 1
            }, 8, ["show", "size", "style"])
          ]),
          _: 1
        })
      ]);
    };
  }
}), Ei = /* @__PURE__ */ oe(Xi, [["__scopeId", "data-v-853ab384"]]), ji = /* @__PURE__ */ Y({
  __name: "PptRibbon",
  setup(e) {
    const t = re(), l = ie(Ae), n = F(() => t == null ? void 0 : t.getters["file/title"]), r = F(() => t == null ? void 0 : t.getters["menu/activeTab"]), A = F(() => (t == null ? void 0 : t.getters["menu/tempTabs"]) || {}), o = F(() => (t == null ? void 0 : t.getters["menu/hideMenu"]) || []), u = qe(null), d = F(() => [...Object.values(Tt), ...Object.values(A.value)].reduce((b, x) => (o.value.includes(x.name) || b.push(x), b), []));
    G(
      () => r.value,
      async (y) => {
        if (!y) {
          u.value = null;
          return;
        }
        let b = "";
        if (f(y) ? b = Tt[y].component : A.value[y] && (b = A.value[y].component), !b) return;
        const x = await import("./assets/index-CdoSPLcH.js?t=1788405500779");
        u.value = x[b];
      },
      { immediate: !0 }
    );
    function f(y) {
      return y in Tt;
    }
    function m(y) {
      if (f(y)) {
        let b = s();
        b ? t.commit("menu/setTempTabs", { ...b }) : t.commit("menu/setTempTabs", {});
      }
      Promise.resolve().then(() => {
        t.commit("menu/setActiveTab", y);
      });
    }
    function s() {
      return A.value || null;
    }
    return (y, b) => (T(), E("div", null, [
      i(v(Xl), {
        "document-title": n.value,
        "logo-src": v(Ri),
        "command-service": v(l),
        "file-icon-names": {
          open: "Ribbon_ppt_Open_24__clip_cell",
          export: "Ribbon_ppt_export_24__clip_cell",
          pdf: "Ribbon_ppt_export_pdf_24__clip_cell"
        },
        "undo-icon-name": "TopQuickToolbar_Undo_16__clip_cell",
        "redo-icon-name": "TopQuickToolbar_Redo_16__clip_cell",
        "show-export-pdf": !1
      }, {
        default: c(() => [
          i(v(_i), {
            modelValue: r.value,
            "onUpdate:modelValue": m,
            tabs: d.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        _: 1
      }, 8, ["document-title", "logo-src", "command-service"]),
      O("div", null, [
        (T(), K(El(u.value), { class: "ribbon-content-container" }))
      ])
    ]));
  }
}), Wi = { class: "status-bar" }, Ui = { class: "left" }, qi = { class: "spacer" }, Gi = { class: "right" }, Qi = /* @__PURE__ */ Y({
  __name: "StatusBar",
  setup(e) {
    const t = re(), l = F(() => t == null ? void 0 : t.getters["file/loadingRatio"]), n = F(() => t == null ? void 0 : t.getters["file/loadingStepTime"]), r = F(
      () => t == null ? void 0 : t.getters["file/showLoadingProgressBar"]
    ), A = N(null), o = F(() => t == null ? void 0 : t.getters["command/loadEnd"]);
    function u(f) {
      var m;
      (m = A == null ? void 0 : A.value) == null || m.openPopover(
        {
          currentPage: f.info.currentPage,
          maxPage: f.info.maxPage
        },
        (s) => {
          f.callback(s.jumpePage);
        }
      );
    }
    function d() {
      Wl(document.getElementById("main"));
    }
    return (f, m) => (T(), E("div", Wi, [
      O("div", Ui, [
        i(v(Ji), {
          cmd: v(a).GoToPage,
          onOpen: u
        }, null, 8, ["cmd"])
      ]),
      O("div", qi, [
        r.value ? (T(), K(v(jl), {
          key: 0,
          percentage: l.value,
          loadingStepTime: n.value,
          class: "progress-bar"
        }, null, 8, ["percentage", "loadingStepTime"])) : se("", !0)
      ]),
      O("div", Gi, [
        i(v(Bi), {
          cmd: v(a).AutoZoom,
          tooltip: f.$t("statusBar.autoZoom"),
          "icon-name": "statusbar_fit_width_16__clip_cell",
          class: "global-medium-icon-button"
        }, null, 8, ["cmd", "tooltip"]),
        i(v($i), {
          cmd: v(a).Play,
          tooltip: f.$t("statusBar.play"),
          "icon-name": "statusbar_start_16__clip_cell",
          placement: "top",
          class: "global-medium-icon-button",
          dropdownOptions: [
            {
              key: "playFromStart",
              label: f.$t("statusBar.playFromStart")
            },
            {
              key: "playFromCurrent",
              label: f.$t("statusBar.playFromCurrent")
            }
          ]
        }, null, 8, ["cmd", "tooltip", "dropdownOptions"]),
        i(v(Bt), {
          vertical: !0,
          height: 12,
          margin: "0px"
        }),
        i(v(rr), {
          cmd: v(a).Zoom,
          step: 1
        }, null, 8, ["cmd"]),
        i(v(Ot), {
          onClick: d,
          "icon-name": "statusbar_full_screen_16__clip_cell",
          "button-size": 24,
          tooltip: f.$t("statusBar.fullscreen"),
          class: "global-medium-icon-button",
          disabled: !o.value
        }, null, 8, ["tooltip", "disabled"])
      ]),
      i(v(ar), {
        ref_key: "PageSelectorDialogRef",
        ref: A
      }, null, 512)
    ]));
  }
}), Yi = /* @__PURE__ */ oe(Qi, [["__scopeId", "data-v-b7f4697b"]]), Ki = /* @__PURE__ */ Y({
  __name: "CommandPageSelectorButton",
  props: {
    disabled: { type: Boolean },
    cmd: {}
  },
  emits: ["open"],
  setup(e, { emit: t }) {
    const l = re(), n = e, r = F(() => l == null ? void 0 : l.getters["file/currentPage"]), A = F(() => l == null ? void 0 : l.getters["file/showType"]), o = F(() => l == null ? void 0 : l.getters["file/pageCount"]), u = F(() => l == null ? void 0 : l.getters["command/can"](n.cmd));
    return ie(Ae), (d, f) => (T(), E("div", null, [
      i(v(ne), {
        type: "quaternary",
        disabled: !u.value,
        class: "page-info-label",
        label: d.$t(`statusBar.${A.value}`) + ((A.value === v(Zt).Slides || A.value === v(Zt).Notes) && o.value > 0 ? " : " + r.value + "/" + o.value : "")
      }, null, 8, ["disabled", "label"])
    ]));
  }
}), Ji = /* @__PURE__ */ oe(Ki, [["__scopeId", "data-v-da7440bd"]]), $i = /* @__PURE__ */ Y({
  __name: "CommandSmallIconDropDownButton",
  props: /* @__PURE__ */ Ye({
    cmd: {},
    tooltip: {},
    placement: {},
    iconName: {},
    x: {},
    y: {},
    commandHandler: { type: Function },
    dropdownOptions: {}
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = re(), l = Re(e, "modelValue"), n = e, r = F(() => t == null ? void 0 : t.getters["command/can"](n.cmd)), A = ie(Ae);
    function o(d) {
      u(d), l.value = !1;
    }
    function u(d) {
      const f = { value: d };
      n.commandHandler ? n.commandHandler(f) : A.run(n.cmd, f);
    }
    return (d, f) => (T(), E("div", null, [
      i(v(Ul), {
        trigger: "click",
        placement: e.placement,
        options: e.dropdownOptions,
        onSelect: o,
        show: l.value,
        onClickoutside: f[1] || (f[1] = (m) => l.value = !1)
      }, {
        default: c(() => [
          O("span", null, [
            i(v(Ot), {
              tooltip: e.tooltip,
              "resource-image": v(de).image,
              disabled: !r.value,
              showArrow: !0,
              x: e.x,
              y: e.y,
              "image-width": v(de).width,
              "icon-name": e.iconName,
              onClick: f[0] || (f[0] = (m) => l.value = !0)
            }, null, 8, ["tooltip", "resource-image", "disabled", "x", "y", "image-width", "icon-name"])
          ])
        ]),
        _: 1
      }, 8, ["placement", "options", "show"])
    ]));
  }
}), er = { class: "custom-panel" }, tr = { class: "global-basic-display-text text" }, lr = /* @__PURE__ */ Y({
  __name: "PageSelectorDialog",
  setup(e, { expose: t }) {
    const l = N(!1), n = N(!1), r = N(""), A = N(0), o = N(0), u = N(0);
    let d;
    function f(b) {
      const x = Number(b);
      if (b === "") {
        n.value = !1, r.value = "";
        return;
      }
      !isNaN(x) && x > 0 && x <= o.value ? (n.value = !1, r.value = "") : (n.value = !0, r.value = "error");
    }
    function m(b, x) {
      b && (A.value = b.currentPage, o.value = b.maxPage, u.value = b.currentPage), n.value = !1, r.value = "", d = x, l.value = !0;
    }
    function s() {
      u.value && (d && d({
        jumpePage: u.value
      }), l.value = !1);
    }
    function y() {
      l.value = !1;
    }
    return t({
      openPopover: m
    }), (b, x) => (T(), E("div", null, [
      i(v(Le), {
        show: l.value,
        "onUpdate:show": x[1] || (x[1] = (M) => l.value = M),
        title: b.$t("dialogs.pageSelector.title"),
        width: 240
      }, {
        action: c(() => [
          i(v(ne), {
            label: b.$t("common.cancel"),
            onClickButton: y,
            type: "standard"
          }, null, 8, ["label"]),
          i(v(ne), {
            label: b.$t("common.confirm"),
            onClickButton: s
          }, null, 8, ["label"])
        ]),
        default: c(() => [
          O("div", er, [
            O("div", tr, W(b.$t("dialogs.pageSelector.jumpTo")), 1),
            i(v(ql), {
              inputValidationStatus: r.value,
              feedback: n.value ? b.$t("dialogs.pageSelector.pageCountError") : ""
            }, {
              default: c(() => [
                i(v(Gl), {
                  value: u.value,
                  "onUpdate:value": x[0] || (x[0] = (M) => u.value = M),
                  class: "custom-input-num",
                  precision: 0,
                  max: o.value,
                  onInput: f,
                  onKeydown: me(Oe(s, ["prevent"]), ["enter"])
                }, null, 8, ["value", "max", "onKeydown"])
              ]),
              _: 1
            }, 8, ["inputValidationStatus", "feedback"])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}), ar = /* @__PURE__ */ oe(lr, [["__scopeId", "data-v-5530f71f"]]), nr = { class: "zoom-wrapper" }, ir = /* @__PURE__ */ Y({
  __name: "CommandZoom",
  props: {
    cmd: {},
    modelValue: {},
    min: { default: 10 },
    max: { default: 400 },
    step: {},
    disabled: { type: Boolean },
    width: { default: 200 }
  },
  setup(e) {
    const t = re(), l = e, n = F(() => t == null ? void 0 : t.getters["command/can"](l.cmd)), r = F(() => t == null ? void 0 : t.getters["command/getVal"](l.cmd)), A = ie(Ae);
    function o(u) {
      const d = { value: u };
      A.run(l.cmd, d), t.commit("command/setState", {
        cmd: a.Zoom,
        ui: {
          value: u
        }
      });
    }
    return (u, d) => (T(), E("div", nr, [
      i(v(Ql), {
        modelValue: r.value,
        "onUpdate:modelValue": d[0] || (d[0] = (f) => r.value = f),
        onChange: o,
        min: e.min,
        max: e.max,
        width: e.width,
        disabled: !n.value
      }, null, 8, ["modelValue", "min", "max", "width", "disabled"]),
      i(v(Yl), {
        modelValue: r.value,
        "onUpdate:modelValue": [
          d[1] || (d[1] = (f) => r.value = f),
          o
        ],
        disabled: !n.value,
        min: e.min,
        max: e.max
      }, null, 8, ["modelValue", "disabled", "min", "max"])
    ]));
  }
}), rr = /* @__PURE__ */ oe(ir, [["__scopeId", "data-v-b04570bc"]]), or = Kl({
  components: [
    Jl,
    $l,
    ea,
    ta,
    la,
    yt,
    aa,
    na,
    ia,
    ra,
    oa,
    Aa,
    sa,
    da,
    pa,
    ca,
    ua,
    ma,
    ha,
    fa,
    va,
    ga,
    ba,
    wa,
    xa,
    ya,
    Sa,
    Ma,
    Pa,
    Ha,
    ka,
    za,
    La,
    Na,
    Ta,
    Va,
    Ca,
    Ra,
    Za,
    Ja,
    $a,
    en,
    tn
  ]
});
function Ar(e) {
  e.use(or);
}
function sr() {
  switch (pt) {
    case "zh-CN":
      return Qt;
    case "en-US":
      return Da;
  }
  return Qt;
}
function dr() {
  return {
    common: {
      primaryColor: "#D1560D",
      // 主色
      primaryColorHover: "#D1560D",
      // hover 主色
      primaryColorPressed: "#D1560D",
      // 按下色
      primaryColorSuppl: "#D1560D"
      // 补充主色
    }
  };
}
function pr(e) {
  e.registerHandler(a.Export, {
    run: async (t, l) => {
      await t.doExport("exportDocument");
    },
    refresh: /* @__PURE__ */ new Set([z.Init, z.ExportReady])
  }), e.registerHandler(a.ExportPDF, {
    run: async (t, l) => {
      await t.doExport("exportPDF");
    },
    refresh: /* @__PURE__ */ new Set([z.ExportReady])
  }), e.registerRefresher(a.Export, (t) => {
    t.canRefreshCommand(a.Export) && t.store.commit("command/setEnabled", {
      cmd: a.Export,
      enabled: !0
    });
  }), e.registerRefresher(a.ExportPDF, (t) => {
    t.canRefreshCommand(a.ExportPDF) && t.store.commit("command/setEnabled", {
      cmd: a.ExportPDF,
      enabled: !1
    });
  });
}
function cr(e) {
  e.registerHandler(a.Open, {
    run: (t, l) => t.openFile(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.Open, (t) => {
    t.canRefreshCommand(a.Open) && t.store.commit("command/setEnabled", {
      cmd: a.Open,
      enabled: !0
    });
  });
}
function ur(e) {
  e.registerHandler(a.Zoom, {
    run: (t, l) => t.setZoom(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init, z.ZoomChange])
  }), e.registerRefresher(a.Zoom, (t) => {
    t.canRefreshCommand(a.Zoom) && (t.store.commit("command/setState", {
      cmd: a.Zoom,
      ui: {
        value: t.api.getZoom()
      }
    }), t.store.commit("command/setEnabled", {
      cmd: a.Zoom,
      enabled: !0
    }));
  });
}
function mr(e) {
  e.registerHandler(a.AutoZoom, {
    run: (t, l) => t.autoZoom(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.AutoZoom, (t) => {
    t.canRefreshCommand(a.AutoZoom) && t.store.commit("command/setEnabled", {
      cmd: a.AutoZoom,
      enabled: !0
    });
  });
}
function hr(e) {
  e.registerHandler(a.Play, {
    run: (t, l) => t.doPlay(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function fr(e) {
  e.registerHandler(a.ShowHideSlide, {
    run: (t, l) => t.doShowHideSlide(l.value),
    refresh: /* @__PURE__ */ new Set([z.SelectionChange])
  });
}
function vr(e) {
  e.registerHandler(a.PlaySlideShow, {
    run: (t, l) => t.playSlideShow(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function gr(e) {
  e.registerHandler(a.SetScreen, {
    run: (t, l) => t.setScreen(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function br(e) {
  e.registerHandler(a.EndSlideShow, {
    run: (t, l) => t.endSlideShow(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function wr(e) {
  e.registerHandler(a.GoToPage, {
    run: (t, l) => t.goToPage(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.GoToPage, (t) => {
    t.canRefreshCommand(a.GoToPage) && t.store.commit("command/setEnabled", {
      cmd: a.GoToPage,
      enabled: !0
    });
  });
}
function xr(e) {
  e.registerHandler(a.NewSlide, {
    run: (t, l) => t.newSlide(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.NewSlide, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.NewSlide,
      enabled: !0
    });
  });
}
function yr(e) {
  e.registerHandler(a.DeleteSlide, {
    run: (t, l) => t.deleteSlide(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.DeleteSlide, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.DeleteSlide,
      enabled: !0
    });
  });
}
function Sr(e) {
  e.registerHandler(a.InsertLayout, {
    run: (t, l) => t.insertLayout(l.value),
    refresh: /* @__PURE__ */ new Set([z.LayoutSetChange])
  });
}
function Mr(e) {
  e.registerHandler(a.ResetSlide, {
    run: (t, l) => t.resetSlide(),
    refresh: /* @__PURE__ */ new Set([z.LayoutSetChange])
  });
}
function Pr(e) {
  e.registerHandler(a.Section, {
    run: (t, l) => t.setSection(l.value)
  });
}
function Hr(e) {
  e.registerHandler(a.Bold, {
    run: (t, l) => t.setBold(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function kr(e) {
  e.registerHandler(a.Underline, {
    run: (t, l) => t.setUnderline(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function zr(e) {
  e.registerHandler(a.Strikeout, {
    run: (t, l) => {
      t.setStrikeThrough(!!l.value);
    },
    refresh: /* @__PURE__ */ new Set([])
  });
}
function Lr(e) {
  e.registerHandler(a.Italic, {
    run: (t, l) => t.setItalic(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function Nr(e) {
  e.registerHandler(a.FontSize, {
    run: (t, l) => t.setFontSize(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function Tr(e) {
  e.registerHandler(a.FontColor, {
    run: (t, l) => t.setFontColor(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function Vr(e) {
  e.registerHandler(a.HeightLightColor, {
    run: (t, l) => t.setHighlightColor(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function Cr(e) {
  e.registerHandler(a.AlignHorizontal, {
    run: (t, l) => t.setAlignHorizontalUI(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function Rr(e) {
  e.registerHandler(a.AlignVertical, {
    run: (t, l) => t.setAlignVerticalUI(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function Zr(e) {
  e.registerHandler(a.AlignText, {
    run: (t, l) => t.setAlignTextUI(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function Dr(e) {
  e.registerHandler(a.LineSpacing, {
    run: (t, l) => t.setLineSpacingUI(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function _r(e) {
  e.registerHandler(a.TextDirection, {
    run: (t, l) => t.setTextDirectionUI(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function Br(e) {
  e.registerHandler(a.ParagraphSetting, {
    run: (t, l) => t.setParagraphSetting(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function Fr(e) {
  e.registerHandler(a.FontName, {
    run: (t, l) => t.setFontName(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function Or(e) {
  e.registerHandler(a.Undo, {
    run: (t) => t.undo(),
    refresh: /* @__PURE__ */ new Set([z.UndoRedoChange])
  }), e.registerRefresher(a.Undo, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.Undo,
      enabled: t.api.canUndo()
    });
  });
}
function Ir(e) {
  e.registerHandler(a.Redo, {
    run: (t) => t.redo(),
    refresh: /* @__PURE__ */ new Set([z.UndoRedoChange])
  }), e.registerRefresher(a.Redo, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.Redo,
      enabled: t.api.canRedo()
    });
  });
}
function Xr(e) {
  e.registerHandler(a.GetLayoutList, {
    run: (t, l) => {
      Er(e, l.value);
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.GetLayoutList, (t) => {
    t.canRefreshCommand(a.GetLayoutList) && t.store.commit("command/setEnabled", {
      cmd: a.GetLayoutList,
      enabled: !0
    });
  });
}
function Er(e, t) {
  const l = e.api.getLayoutList(t);
  e.store.commit("file/setSlideLayoutList", l);
}
function jr(e) {
  e.registerHandler(a.SlideOptions, {
    run: (t, l) => t.doSlideOperations(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.SlideOptions, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.SlideOptions,
      enabled: !0
    });
  });
}
function Wr(e) {
  e.registerHandler(a.NormalView, {
    run: (t, l) => t.setChangeView(R.NormalView),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function Ur(e) {
  e.registerHandler(a.SlideSorter, {
    run: (t, l) => t.setChangeView(R.SlideSorter),
    refresh: /* @__PURE__ */ new Set(["ViewChange"])
  });
}
function qr(e) {
  e.registerHandler(a.NotesPage, {
    run: (t, l) => t.setChangeView(R.NotesPage),
    refresh: /* @__PURE__ */ new Set(["ViewChange"])
  });
}
function Gr(e) {
  e.registerHandler(a.ReadingView, {
    run: (t, l) => t.setChangeView(R.ReadingView),
    refresh: /* @__PURE__ */ new Set(["ViewChange"])
  });
}
function Qr(e) {
  e.registerHandler(a.SlideMaster, {
    run: (t, l) => t.setChangeView(R.SlideMaster),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function Yr(e) {
  e.registerHandler(a.HandoutMaster, {
    run: (t, l) => t.setChangeView(R.HandoutMaster),
    refresh: /* @__PURE__ */ new Set(["ViewChange"])
  });
}
function Kr(e) {
  e.registerHandler(a.NotesMaster, {
    run: (t, l) => t.setChangeView(R.NotesMaster),
    refresh: /* @__PURE__ */ new Set(["ViewChange"])
  });
}
function Jr(e) {
  e.registerHandler(a.SetViewSetting, {
    run: (t, l) => {
      if (l.type === Q.SET)
        t.setViewSetting(l.value);
      else if (l.type === Q.GET) {
        const n = e.api.getViewSetting();
        e.store.commit("command/setState", { ui: { value: n }, cmd: a.SetViewSetting });
      }
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.SetViewSetting, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.SetViewSetting,
      enabled: !0
    });
  });
}
function $r(e) {
  e.registerHandler(a.GetPaperSizeOption, {
    run: (t, l) => {
      const n = t.getPaperSizeOption();
      e.store.commit("command/setState", { ui: { value: n }, cmd: a.GetPaperSizeOption });
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.SetViewSetting, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.GetPaperSizeOption,
      enabled: !0
    });
  });
}
function eo(e) {
  e.registerHandler(a.Paste, {
    run: (t, l) => t.setPaste(l.value)
  });
}
function to(e) {
  e.registerHandler(a.Cut, {
    run: (t, l) => t.setCut(),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function lo(e) {
  e.registerHandler(a.Copy, {
    run: (t, l) => t.setCopy(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function ao(e) {
  e.registerHandler(a.FormatPaint, {
    run: (t, l) => t.setFormatPaint(),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function no(e) {
  e.registerHandler(a.ClearAllFormatting, {
    run: (t, l) => t.clearAllFormatting(),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function io(e) {
  e.registerHandler(a.Bullet, {
    run: (t, l) => t.setBullet(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function ro(e) {
  e.registerHandler(a.Numbering, {
    run: (t, l) => t.setNumbering(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function oo(e) {
  e.registerHandler(a.GetBulletList, {
    run: (t, l) => {
      Ao(e);
    },
    refresh: /* @__PURE__ */ new Set([])
  }), e.registerRefresher(a.GetBulletList, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.GetBulletList,
      enabled: !0
    });
  });
}
function Ao(e) {
  const t = e.api.getBulletList();
  e.store.commit("command/setBulletList", t);
}
function so(e) {
  e.registerHandler(a.GetNumberingList, {
    run: (t, l) => {
      po(e);
    },
    refresh: /* @__PURE__ */ new Set([])
  }), e.registerRefresher(a.GetNumberingList, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.GetNumberingList,
      enabled: !0
    });
  });
}
function po(e) {
  const t = e.api.getNumberingList();
  e.store.commit("command/setNumberingList", t);
}
function co(e) {
  e.registerHandler(a.DecreaseListLevel, {
    run: (t, l) => t.setListLevelUI(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function uo(e) {
  e.registerHandler(a.IncreaseListLevel, {
    run: (t, l) => t.setListLevelUI(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function mo(e) {
  e.registerHandler(a.GetShapeTypeList, {
    run: (t, l) => {
      const n = e.api.getShapeTypeList();
      e.store.commit("command/setShapeTypeList", n);
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.GetShapeTypeList, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.GetShapeTypeList,
      enabled: !0
    });
  });
}
function ho(e) {
  e.registerHandler(a.InsertShape, {
    run: (t, l) => t.insertShape(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function fo(e) {
  e.registerHandler(a.InsertTextBox, {
    run: (t, l) => t.insertTextBox(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function vo(e) {
  e.registerHandler(a.InsertPicture, {
    run: (t, l) => t.insertPicture(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function go(e) {
  e.registerHandler(a.InsertTable, {
    run: (t, l) => t.insertTable(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function bo(e) {
  e.registerHandler(a.InsertVideo, {
    run: (t, l) => t.insertVideo(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function wo(e) {
  e.registerHandler(a.InsertAudio, {
    run: (t, l) => t.insertAudio(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function xo(e) {
  e.registerHandler(a.InsertFormula, {
    run: (t, l) => t.insertFormula(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function yo(e) {
  e.registerHandler(a.InsertSymbol, {
    run: (t, l) => t.insertSymbol(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function So(e) {
  e.registerHandler(a.InsertHeaderFooter, {
    run: (t, l) => t.insertHeaderFooter(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.InsertHeaderFooter, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.InsertHeaderFooter,
      enabled: !0
    });
  });
}
function Mo(e) {
  e.registerHandler(a.InsertComment, {
    run: (t, l) => t.insertComment(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.InsertComment, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.InsertComment,
      enabled: !0
    });
  });
}
function Po(e) {
  e.registerHandler(a.InsertLink, {
    run: (t, l) => t.insertLink(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function Ho(e) {
  e.registerHandler(a.InsertAccessory, {
    run: (t, l) => t.insertAccessory(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.InsertAccessory, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.InsertAccessory,
      enabled: !0
    });
  });
}
function ko(e) {
  e.registerHandler(a.SlideMasterInsert, {
    run: (t, l) => t.slideMasterInsert(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.SlideMasterInsert, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.SlideMasterInsert,
      enabled: !0
    });
  });
}
function zo(e) {
  e.registerHandler(a.SlideMasterInsertLayout, {
    run: (t, l) => t.slideMasterInsertLayout(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function Lo(e) {
  e.registerHandler(a.SlideMasterInsertPlaceHolder, {
    run: (t, l) => t.slideMasterInsertPlaceHolder(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function No(e) {
  e.registerHandler(a.SlideMasterDelete, {
    run: (t, l) => t.slideMasterDelete(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function To(e) {
  e.registerHandler(a.SlideMasterRename, {
    run: (t, l) => {
      if (l.type === Q.GET) {
        const n = t.getCurrentLayoutAndMasterName();
        e.store.commit("command/setState", { ui: { value: n }, cmd: a.SlideMasterRename }), e.store.commit("command/setRunning", { cmd: a.SlideMasterRename, running: !1 });
      } else l.type === Q.SET && t.slideMasterRename(l.value.name);
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function Vo(e) {
  e.registerHandler(a.SlideMasterPreserve, {
    run: (t, l) => t.slideMasterPreserve(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function Co(e) {
  e.registerHandler(a.SlideMasterLayout, {
    run: (t, l) => t.slideMasterLayout(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function Ro(e) {
  e.registerHandler(a.SlideGetPlaceholder, {
    run: (t, l) => {
      const n = e.api.slideGetPlaceholder();
      e.store.commit("command/setState", { ui: { value: n }, cmd: a.SlideGetPlaceholder });
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.SlideGetPlaceholder, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.SlideGetPlaceholder,
      enabled: !0
    });
  });
}
function Zo(e) {
  e.registerHandler(a.Close, {
    run: (t, l) => {
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.SlideMasterInsert, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.Close,
      enabled: !0
    });
  });
}
function Do(e) {
  e.registerHandler(a.NotesPageDirection, {
    run: (t, l) => {
      if (l.type === Q.SET)
        t.notesPageDirection(l.value);
      else if (l.type === Q.GET) {
        const n = e.api.getNotesPageDirection();
        e.store.commit("command/setState", { ui: { value: n }, cmd: a.NotesPageDirection });
      }
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.NotesPageDirection, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.NotesPageDirection,
      enabled: !0
    });
  });
}
function _o(e) {
  e.registerHandler(a.NotesSlideSize, {
    run: (t, l) => {
      if (l.type === Q.GET) {
        const n = e.api.getNotesSlideSize();
        e.store.commit("command/setState", { ui: { value: n.oldSizeType }, cmd: a.NotesSlideSize });
      } else l.type === Q.SET && t.notesSlideSize(l.value);
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.NotesSlideSize, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.NotesSlideSize,
      enabled: !0
    });
  });
}
function Bo(e) {
  e.registerHandler(a.NotesSlidePlaceholder, {
    run: (t, l) => {
      if (l.type === Q.SET)
        t.notesSlidePlaceholder(l.value);
      else if (l.type === Q.GET) {
        const n = e.api.getNotesSlidePlaceholder();
        e.store.commit("command/setState", { ui: { value: n }, cmd: a.NotesSlidePlaceholder });
      }
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.NotesSlidePlaceholder, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.NotesSlidePlaceholder,
      enabled: !0
    });
  });
}
function Fo(e) {
  e.registerHandler(a.SetNotesSlideSizeOption, {
    run: (t, l) => {
      if (l.type === Q.SET)
        t.setNotesSlideSizeSetting(l.value);
      else if (l.type === Q.GET) {
        const n = e.api.getNotesSlideSizeSetting();
        e.store.commit("command/setState", { ui: { value: n }, cmd: a.SetNotesSlideSizeOption });
      }
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.SetNotesSlideSizeOption, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.SetNotesSlideSizeOption,
      enabled: !0
    });
  });
}
function Oo(e) {
  e.registerHandler(a.HandoutMasterPageDirection, {
    run: (t, l) => t.handoutMasterPageDirection(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.HandoutMasterPageDirection, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.HandoutMasterPageDirection,
      enabled: !0
    });
  });
}
function Io(e) {
  e.registerHandler(a.HandoutMasterSlideSize, {
    run: (t, l) => t.handoutMasterSlideSize(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.HandoutMasterSlideSize, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.HandoutMasterSlideSize,
      enabled: !0
    });
  });
}
function Xo(e) {
  e.registerHandler(a.HandoutSlidePerPage, {
    run: (t, l) => t.handoutSlidePerPage(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.HandoutSlidePerPage, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.HandoutSlidePerPage,
      enabled: !0
    });
  });
}
function Eo(e) {
  e.registerHandler(a.HandoutMasterSlidePlaceholder, {
    run: (t, l) => {
      if (l.type === Q.SET)
        t.handoutMasterSlidePlaceholder(l.value);
      else if (l.type === Q.GET) {
        const n = e.api.getHandoutMasterSlidePlaceholder();
        e.store.commit("command/setState", { ui: { value: n }, cmd: a.HandoutMasterSlidePlaceholder });
      }
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.HandoutMasterSlidePlaceholder, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.HandoutMasterSlidePlaceholder,
      enabled: !0
    });
  });
}
function jo(e) {
  e.registerHandler(a.ShapeEditShape, {
    run: (t, l) => t.editShape(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.ShapeEditShape, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.ShapeEditShape,
      enabled: !0
    });
  });
}
function Wo(e) {
  e.registerHandler(a.ShapeEditVertex, {
    run: (t, l) => t.editVertex(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.ShapeEditVertex, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.ShapeEditVertex,
      enabled: !0
    });
  });
}
function Uo(e) {
  e.registerHandler(a.ShapeMerge, {
    run: (t, l) => t.mergeShape(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function qo(e) {
  e.registerHandler(a.ShapeFill, {
    run: (t, l) => t.setShapeFill(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.ShapeFill, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.ShapeFill,
      enabled: !0
    });
  });
}
function Go(e) {
  e.registerHandler(a.ShapeSetWidth, {
    run: (t, l) => t.setShapeWidth(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.ShapeSetWidth, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.ShapeSetWidth,
      enabled: !0
    });
  });
}
function Qo(e) {
  e.registerHandler(a.ShapeSetHeight, {
    run: (t, l) => t.setShapeHeight(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.ShapeSetHeight, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.ShapeSetHeight,
      enabled: !0
    });
  });
}
function Yo(e) {
  e.registerHandler(a.ShapeGroup, {
    run: (t, l) => t.groupShape(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.ShapeGroup, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.ShapeGroup,
      enabled: !0
    });
  });
}
function Ko(e) {
  e.registerHandler(a.ShapeRotate, {
    run: (t, l) => t.rotateShape(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.ShapeRotate, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.ShapeRotate,
      enabled: !0
    });
  });
}
function Jo(e) {
  e.registerHandler(a.ShapeAlign, {
    run: (t, l) => t.alignShape(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.ShapeAlign, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.ShapeAlign,
      enabled: !0
    });
  });
}
function $o(e) {
  e.registerHandler(a.GetShapeAlign, {
    run: (t, l) => {
      const n = e.store.getters["command/alignTarget"];
      e.store.commit("command/setState", { ui: { value: n }, cmd: a.ShapeAlign });
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.GetShapeAlign, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.GetShapeAlign,
      enabled: !0
    });
  });
}
function e1(e) {
  e.registerHandler(a.ShapeBringToFront, {
    run: (t, l) => {
      t.bringToFront(l.value);
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.ShapeBringToFront, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.ShapeBringToFront,
      enabled: !0
    });
  });
}
function t1(e) {
  e.registerHandler(a.ShapeSendToBack, {
    run: (t, l) => t.sendToBack(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.ShapeSendToBack, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.ShapeSendToBack,
      enabled: !0
    });
  });
}
function l1(e) {
  e.registerHandler(a.ArrangeGroupMenu, {
    run: (t, l) => {
      t.selectAll();
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function a1(e) {
  e.registerHandler(a.Shadow, {
    run: (t, l) => t.setShadow(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function n1(e) {
  e.registerHandler(a.FontSetting, {
    run: (t, l) => t.setFontSetting(l.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function i1(e) {
  e.registerHandler(a.RightShapeSetSize, {
    run: (t, l) => t.setShapeSizeProperty(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.RightShapeSetSize, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.RightShapeSetSize,
      enabled: !0
    });
  });
}
function r1(e) {
  e.registerHandler(a.RightShapeSetPosition, {
    run: (t, l) => t.setShapePositionProperty(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.RightShapeSetPosition, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.RightShapeSetPosition,
      enabled: !0
    });
  });
}
function o1(e) {
  e.registerHandler(a.RightShapeSetTextBox, {
    run: (t, l) => t.setTextBoxProperty(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.RightShapeSetTextBox, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.RightShapeSetTextBox,
      enabled: !0
    });
  });
}
function A1(e) {
  e.registerHandler(a.RightResetPictureSize, {
    run: (t, l) => t.resetPictureSize(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.RightResetPictureSize, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.RightResetPictureSize,
      enabled: !0
    });
  });
}
function s1(e) {
  e.registerHandler(a.GetDateTimeList, {
    run: (t, l) => {
      let n = t.getDateTimeList(l.value || "zh-CN");
      n = n.reduce((r, A) => {
        let o = r.find((u) => u.label == A.label);
        return o ? o.keys.push(A.value) : r.push({ ...A, keys: [A.value] }), r;
      }, []), e.store.commit("command/setState", {
        cmd: a.GetDateTimeList,
        ui: { value: n }
      });
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.GetDateTimeList, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.GetDateTimeList,
      enabled: !0
    });
  });
}
function d1(e) {
  e.registerHandler(a.GetSlideLayoutData, {
    run: (t, l) => {
      let n = t.getSlideLayoutData();
      e.store.commit("command/setState", {
        cmd: a.GetSlideLayoutData,
        ui: { value: n }
      });
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.GetSlideLayoutData, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.GetSlideLayoutData,
      enabled: !0
    });
  });
}
function p1(e) {
  e.registerHandler(a.GetNotesHandoutData, {
    run: (t, l) => {
      let n = t.getNotesHandoutData();
      e.store.commit("command/setState", {
        cmd: a.GetNotesHandoutData,
        ui: { value: n }
      });
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.GetNotesHandoutData, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.GetNotesHandoutData,
      enabled: !0
    });
  });
}
function c1(e) {
  e.registerHandler(a.GetPixelRatio, {
    run: (t, l) => {
      let n = t.getPixelRatio();
      e.store.commit("command/setState", {
        cmd: a.GetPixelRatio,
        ui: { value: n }
      });
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.GetPixelRatio, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.GetPixelRatio,
      enabled: !0
    });
  });
}
function u1(e) {
  e.registerHandler(a.SetHeaderFooter, {
    run: (t, l) => {
      if (l.type === Q.SET)
        return t.setHeaderFooter(l.value);
      if (l.type === Q.GET) {
        let n = t.getHeaderFooter();
        e.store.commit("command/setState", {
          cmd: a.SetHeaderFooter,
          ui: { value: n }
        });
      }
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.SetHeaderFooter, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.SetHeaderFooter,
      enabled: !0
    });
  });
}
function m1(e) {
  e.registerHandler(a.CommentUpdate, {
    run: (t, l) => t.commentUpdate(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.CommentUpdate, (t) => {
    t.canRefreshCommand(a.CommentUpdate) && t.store.commit("command/setEnabled", {
      cmd: a.CommentUpdate,
      enabled: !0
    });
  });
}
function h1(e) {
  e.registerHandler(a.DeleteComment, {
    run: (t, l) => {
      if (l.type === Q.GET) {
        let n = t.getDeleteCommentDisabled();
        e.store.commit("command/setState", {
          cmd: a.DeleteComment,
          ui: { value: n }
        });
      } else l.type === Q.SET && t.deleteComment(l.value);
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.DeleteComment, (t) => {
    t.canRefreshCommand(a.DeleteComment) && t.store.commit("command/setEnabled", {
      cmd: a.DeleteComment,
      enabled: !0
    });
  });
}
function f1(e) {
  e.registerHandler(a.NextComment, {
    run: (t, l) => t.nextComment(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function v1(e) {
  e.registerHandler(a.PreviousComment, {
    run: (t, l) => t.previousComment(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function g1(e) {
  e.registerHandler(a.ShowHideComment, {
    run: (t, l) => {
      l.type === Q.GET || l.type === Q.SET && t.showHideComment(l.value);
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.ShowHideComment, (t) => {
    t.canRefreshCommand(a.ShowHideComment) && t.store.commit("command/setEnabled", {
      cmd: a.ShowHideComment,
      enabled: !0
    });
  });
}
function b1(e) {
  e.registerHandler(a.ShowHideCommentFlag, {
    run: (t, l) => {
      l.type === Q.GET || l.type === Q.SET && t.showHideCommentFlag(l.value);
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.ShowHideCommentFlag, (t) => {
    t.canRefreshCommand(a.ShowHideCommentFlag) && t.store.commit("command/setEnabled", {
      cmd: a.ShowHideCommentFlag,
      enabled: !0
    });
  });
}
function w1(e) {
  e.registerHandler(a.SearchReplaceWord, {
    run: (t, l) => {
      if (!l) {
        e.store.commit("file/setShowFindDialog", !0);
        return;
      }
      const n = l.value;
      if (!n) return;
      switch (n.action) {
        case At.SEARCH:
          t.searchWord(n.val), t.searchNext();
          break;
        case At.NEXT:
          t.searchNext();
          break;
        case At.PREV:
          t.searchPrevious();
          break;
        case At.FOCUS_EDITOR:
          t.focusEditor();
          break;
      }
      const r = t.searchStatusInfo();
      e.store.commit("command/setState", {
        cmd: a.SearchReplaceWord,
        ui: {
          value: {
            countNum: r.countNum,
            totalCount: r.totalCount
          }
        }
      });
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.SearchReplaceWord, (t) => {
    t.canRefreshCommand(a.SearchReplaceWord) && t.store.commit("command/setEnabled", {
      cmd: a.SearchReplaceWord,
      enabled: !0
    });
  });
}
function x1(e) {
  e.registerHandler(a.TableDelete, {
    run: (t, l) => {
      if (l.type === Q.GET) {
        let n = t.getTableDeleteType();
        e.store.commit("command/setRunning", {
          cmd: a.TableDelete,
          running: !1
        }), e.store.commit("command/setState", {
          cmd: a.TableDelete,
          ui: {
            value: n
          }
        });
      } else l.type === Q.SET && t.deleteTable(l);
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.TableDelete, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.TableDelete,
      enabled: !0
    });
  });
}
function y1(e) {
  e.registerHandler(a.InsertRow, {
    run: (t, l) => t.insertRow(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function S1(e) {
  e.registerHandler(a.InsertColumn, {
    run: (t, l) => t.insertColumn(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function M1(e) {
  e.registerHandler(a.IncreaseLineSpacing, {
    run: (t, l) => t.setIncreaseLineSpacing(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function P1(e) {
  e.registerHandler(a.ReduceLineSpacing, {
    run: (t, l) => t.setReduceLineSpacing(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function H1(e) {
  e.registerHandler(a.CellMargin, {
    run: (t, l) => {
      if (l.type === Q.GET) {
        let n = t.getCellMargin();
        e.store.commit("command/setRunning", {
          cmd: a.CellMargin,
          running: !1
        }), e.store.commit("command/setState", {
          cmd: a.CellMargin,
          ui: {
            value: n
          }
        });
      } else l.type === Q.SET && t.setCellMargin(l.value);
    },
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.CellMargin, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.CellMargin,
      enabled: !0
    });
  });
}
function k1(e) {
  e.registerHandler(a.MergeCells, {
    run: (t, l) => t.mergeCells(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function z1(e) {
  e.registerHandler(a.SplitCells, {
    run: (t, l) => t.splitCells(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function L1(e) {
  e.registerHandler(a.EqualRowHeight, {
    run: (t, l) => t.equalRowHeight(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function N1(e) {
  e.registerHandler(a.EqualColumnWidth, {
    run: (t, l) => t.equalColumnWidth(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function T1(e) {
  e.registerHandler(a.ColWidth, {
    run: (t, l) => t.setColWidth(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.ColWidth, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.ColWidth,
      enabled: !0
    });
  });
}
function V1(e) {
  e.registerHandler(a.RowHeight, {
    run: (t, l) => t.setRowHeight(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.RowHeight, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.RowHeight,
      enabled: !0
    });
  });
}
function C1(e) {
  e.registerHandler(a.TableSelect, {
    run: (t, l) => t.setTableSelect(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.TableSelect, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.TableSelect,
      enabled: !0
    });
  });
}
function R1(e) {
  e.registerHandler(a.TableFill, {
    run: (t, l) => t.setTableFill(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.TableFill, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.TableFill,
      enabled: !0
    });
  });
}
function Z1(e) {
  e.registerHandler(a.TableFillColor, {
    run: (t, l) => t.setTableFillColor(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  }), e.registerRefresher(a.TableFillColor, (t) => {
    t.pptReady && t.store.commit("command/setEnabled", {
      cmd: a.TableFillColor,
      enabled: !0
    });
  });
}
function D1(e) {
  e.registerHandler(a.TableBorderStroke, {
    run: (t, l) => t.setTableBorderStroke(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function _1(e) {
  e.registerHandler(a.TableStrokeColor, {
    run: (t, l) => t.setTableStrokeColor(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function B1(e) {
  e.registerHandler(a.TableBorderSize, {
    run: (t, l) => t.setTableBorderSize(l.value),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function F1(e) {
  e.registerHandler(a.TableBorderType, {
    run: (t, l) => t.setTableBorderType(l),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function O1(e) {
  e.registerHandler(a.ClearTableStyle, {
    run: (t, l) => t.clearTableStyle(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function I1(e) {
  e.registerHandler(a.ExitTextEdit, {
    run: (t, l) => t.exitTextEdit(),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function X1(e) {
  e.registerHandler(a.ShapeEditText, {
    run: (t, l) => t.shapeEditText(),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function E1(e) {
  e.registerHandler(a.ShapeDelete, {
    run: (t, l) => t.deleteShape(),
    refresh: /* @__PURE__ */ new Set([z.Init])
  });
}
function j1() {
  const e = ie(Ae);
  Zo(e), cr(e), pr(e), ur(e), mr(e), hr(e), wr(e), xr(e), yr(e), Or(e), Ir(e), Hr(e), a1(e), kr(e), zr(e), Lr(e), Nr(e), Tr(e), Vr(e), Cr(e), Rr(e), Zr(e), Dr(e), _r(e), uo(e), co(e), Fr(e), Xr(e), jr(e), Wr(e), Ur(e), qr(e), Gr(e), Qr(e), Yr(e), Kr(e), Sr(e), Mr(e), Pr(e), eo(e), to(e), lo(e), ao(e), no(e), io(e), ro(e), oo(e), so(e), n1(e), Br(e), l1(e), I1(e), xo(e), yo(e), bo(e), wo(e), go(e), vo(e), ho(e), fo(e), So(e), Mo(e), Po(e), Ho(e), ko(e), zo(e), Lo(e), Vo(e), No(e), To(e), Ro(e), Co(e), Jr(e), $r(e), Do(e), _o(e), Bo(e), Fo(e), Oo(e), Io(e), Xo(e), Eo(e), jo(e), Wo(e), Uo(e), qo(e), Yo(e), Ko(e), Jo(e), e1(e), t1(e), Go(e), Qo(e), mo(e), $o(e), i1(e), r1(e), o1(e), A1(e), s1(e), d1(e), p1(e), c1(e), u1(e), m1(e), h1(e), f1(e), v1(e), g1(e), b1(e), w1(e), fr(e), x1(e), y1(e), S1(e), M1(e), P1(e), H1(e), k1(e), z1(e), L1(e), N1(e), V1(e), T1(e), C1(e), R1(e), Z1(e), D1(e), _1(e), B1(e), F1(e), O1(e), E1(e), X1(e), vr(e), gr(e), br(e);
}
var ee = /* @__PURE__ */ ((e) => (e.MM_TO_CM = "mm_TO_cm", e.NUMBER_TO_PERCENT = "number_TO_percent", e.CM_TO_MM = "cm_TO_mm", e.PERCENT_TO_NUMBER = "percent_TO_number", e))(ee || {});
function te(e, t) {
  switch (t) {
    case "mm_TO_cm":
      return rl(e, 1);
    case "percent_TO_number":
      return rl(e, 2);
    case "cm_TO_mm":
      return ol(e, 1);
    case "number_TO_percent":
      return ol(e, 2);
    default:
      return e;
  }
}
function rl(e, t) {
  let l = String(e), n = "";
  if (l.startsWith("-") && (n = "-", l = l.slice(1)), l.indexOf(".") !== -1) {
    let [A, o] = l.split(".");
    return A === void 0 && (A = ""), A.length < t && (A = "0".repeat(t - A.length) + A), A = A.slice(0, -t) + "." + A.slice(-t), Number(n + A + o);
  } else
    return l.length < t && (l = "0".repeat(t - l.length) + l), +(n + l.slice(0, -t) + "." + l.slice(-t));
}
function ol(e, t) {
  let l = String(e), n = "";
  if (l.startsWith("-") && (n = "-", l = l.slice(1)), l.indexOf(".") !== -1) {
    let [A, o] = l.split(".");
    return o === void 0 && (o = ""), o.length < t && (o += "0".repeat(t - o.length)), o = o.slice(0, t) + "." + o.slice(t), Number(n + A + o);
  } else
    return Number(n + l + "0".repeat(t));
}
const W1 = { style: { position: "relative" } }, ze = /* @__PURE__ */ Y({
  __name: "NumberInput",
  props: /* @__PURE__ */ Ye({
    width: { default: 120 },
    step: { default: 1 },
    disabled: { type: Boolean, default: !1 },
    min: { default: void 0 },
    max: { default: void 0 },
    precision: { default: 0 },
    allowString: { type: Boolean, default: !1 },
    unit: { default: "%" },
    tooltip: {}
  }, {
    modelValue: { default: 0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ye(["blur"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const l = Re(e, "modelValue"), n = t, r = N(!1), A = N(void 0), o = e, u = N(null), d = F({
      get() {
        return u.value !== null ? u.value : l.value;
      },
      set(b) {
        typeof b == "string" ? u.value = b === "" ? null : b : typeof b == "number" && !isNaN(b) && m(b);
      }
    });
    function f() {
      r.value = !0;
    }
    function m(b) {
      if (r.value) {
        l.value = s(b), u.value = null, r.value = !1, n("blur");
        return;
      }
      const x = l.value ?? 0, M = b < x, w = Math.round(x / o.step) * o.step;
      if (Math.abs(x - w) > 1e-10) {
        const H = M ? Math.floor(x / o.step) * o.step : Math.ceil(x / o.step) * o.step;
        l.value = s(H);
      } else
        l.value = s(b);
      u.value = null, n("blur");
    }
    function s(b) {
      return o.min !== void 0 && b < o.min ? o.min : o.max !== void 0 && b >= o.max ? (A.value = o.max, o.max) : (A.value = void 0, b);
    }
    function y(b) {
      return b === null ? "" : `${b.toFixed(o.precision)}`;
    }
    return G(l, () => {
      u.value = null;
    }), (b, x) => (T(), E("div", W1, [
      e.tooltip ? (T(), K(v(kt), { key: 0 }, {
        trigger: c(() => [
          i(v(yt), {
            value: d.value,
            "onUpdate:value": x[0] || (x[0] = (M) => d.value = M),
            class: "unit-input",
            format: y,
            disabled: e.disabled,
            size: "small",
            "button-placement": "both",
            step: e.step,
            min: e.min,
            max: A.value,
            precision: e.precision,
            onInput: f,
            style: ue({ width: e.width + "px" })
          }, {
            suffix: c(() => [
              $(W(e.unit), 1)
            ]),
            _: 1
          }, 8, ["value", "disabled", "step", "min", "max", "precision", "style"])
        ]),
        default: c(() => [
          $(" " + W(e.tooltip), 1)
        ]),
        _: 1
      })) : (T(), K(v(yt), {
        key: 1,
        value: d.value,
        "onUpdate:value": x[1] || (x[1] = (M) => d.value = M),
        class: "unit-input",
        format: y,
        disabled: e.disabled,
        size: "small",
        "button-placement": "both",
        step: e.step,
        min: e.min,
        max: A.value,
        precision: e.precision,
        onInput: f,
        style: ue({ width: e.width + "px" })
      }, {
        suffix: c(() => [
          $(W(e.unit), 1)
        ]),
        _: 1
      }, 8, ["value", "disabled", "step", "min", "max", "precision", "style"]))
    ]));
  }
}), U1 = /* @__PURE__ */ Y({
  __name: "ShapeSizeProperty",
  setup(e) {
    const t = re(), l = ie(Ae), n = F(() => t.getters["menu/selectedElement"]), r = F(() => (n.value & p.Connector) === p.Connector || n.value === p.Nil || (n.value & p.HiddenRotate) === p.HiddenRotate), A = F(() => (t == null ? void 0 : t.getters["command/getVal"](a.RightShapeSetSize)) || {}), o = N(null), u = he({
      height: null,
      width: null,
      rotate: null,
      scaleHeight: null,
      scaleWidth: null,
      lockAspectRatio: !1,
      relativeImageOriginSize: !1,
      slideOptimalProportion: !1,
      dpi: 0
    });
    qt(o), G(() => A.value, (m) => {
      m && Object.assign(u, {
        width: typeof m.width == "number" ? te(m.width, ee.MM_TO_CM) : null,
        height: typeof m.height == "number" ? te(m.height, ee.MM_TO_CM) : null,
        rotate: typeof m.rotate == "number" ? Number(m.rotate) : null,
        scaleHeight: typeof m.scaleHeight == "number" ? te(m.scaleHeight, ee.NUMBER_TO_PERCENT) : null,
        scaleWidth: typeof m.scaleWidth == "number" ? te(m.scaleWidth, ee.NUMBER_TO_PERCENT) : null,
        lockAspectRatio: m.lockAspectRatio
      });
    }, { immediate: !0 });
    const d = he({
      height: [{ type: "number", message: "请输入一个数值", trigger: "input" }],
      width: [{ type: "number", message: "请输入一个数值", trigger: "input" }],
      rotate: [{ type: "number", message: "请输入一个数值", trigger: "input" }],
      scaleHeight: [{ type: "number", message: "请输入一个数值", trigger: "input" }],
      scaleWidth: [{ type: "number", message: "请输入一个数值", trigger: "input" }]
    });
    function f(m) {
      let s = {};
      if (m === "rotate" && u.rotate != null) {
        let y = u.rotate;
        y = Number((u.rotate % 360).toFixed(2)), y < 0 && (y += 360), u.rotate = y, y !== A.value.rotate && (s.rotate = u.rotate);
      } else m === "lockAspectRatio" ? u.lockAspectRatio !== A.value.lockAspectRatio && (s.lockAspectRatio = u.lockAspectRatio) : m === "scaleHeight" || m === "scaleWidth" ? u[m] !== te(A.value[m], ee.PERCENT_TO_NUMBER) && (m === "scaleHeight" && (s.scaleHeight = u[m] != null ? te(u[m], ee.PERCENT_TO_NUMBER) : null), m === "scaleWidth" && (s.scaleWidth = u[m] != null ? te(u[m], ee.PERCENT_TO_NUMBER) : null)) : (m === "width" || m === "height") && u[m] !== null && te(u[m], ee.CM_TO_MM) !== A.value[m] && (m === "width" && (s.width = u[m] != null ? te(u[m], ee.CM_TO_MM) : null), m === "height" && (s.height = u[m] != null ? te(u[m], ee.CM_TO_MM) : null));
      Object.keys(s).length !== 0 && (s.originShapeSize = A.value.originShapeSize.map((y) => ({ bsId: y.bsId, width: y.width, height: y.height })), l.run(a.RightShapeSetSize, { value: s }));
    }
    return (m, s) => {
      const y = B("n-form-item"), b = B("n-checkbox"), x = B("n-space"), M = B("n-form");
      return T(), E(fe, null, [
        i(M, {
          ref_key: "panelRoot",
          ref: o,
          model: u,
          "label-placement": "left",
          "label-width": "auto",
          "label-align": "left",
          size: "small",
          style: { width: "90%" },
          rules: d,
          disabled: n.value === v(p).Nil
        }, {
          default: c(() => [
            i(y, {
              label: m.$t("rightPanel.shape.size.height"),
              path: "height"
            }, {
              default: c(() => [
                i(ze, {
                  modelValue: u.height,
                  "onUpdate:modelValue": s[0] || (s[0] = (w) => u.height = w),
                  min: 0,
                  max: 5963.92,
                  step: 0.1,
                  width: 170,
                  disabled: n.value === v(p).Nil,
                  onBlur: s[1] || (s[1] = () => f("height")),
                  precision: 2,
                  onKeyup: s[2] || (s[2] = me(() => f("height"), ["enter"])),
                  unit: m.$t("unit.cm"),
                  tooltip: m.$t("common.tooltipBegin") + 0 + m.$t("unit.cm") + m.$t("common.tooltipTo") + 5963.92 + m.$t("unit.cm") + m.$t("common.tooltipEnd")
                }, null, 8, ["modelValue", "disabled", "unit", "tooltip"])
              ]),
              _: 1
            }, 8, ["label"]),
            i(y, {
              label: m.$t("rightPanel.shape.size.width"),
              path: "width"
            }, {
              default: c(() => [
                i(ze, {
                  modelValue: u.width,
                  "onUpdate:modelValue": s[3] || (s[3] = (w) => u.width = w),
                  min: 0,
                  max: 5963.92,
                  step: 0.1,
                  width: 170,
                  disabled: n.value === v(p).Nil,
                  onBlur: s[4] || (s[4] = () => f("width")),
                  precision: 2,
                  onKeyup: s[5] || (s[5] = me(() => f("width"), ["enter"])),
                  unit: m.$t("unit.cm"),
                  tooltip: m.$t("common.tooltipBegin") + 0 + m.$t("unit.cm") + m.$t("common.tooltipTo") + 5963.92 + m.$t("unit.cm") + m.$t("common.tooltipEnd")
                }, null, 8, ["modelValue", "disabled", "unit", "tooltip"])
              ]),
              _: 1
            }, 8, ["label"]),
            i(y, {
              label: m.$t("rightPanel.shape.size.rotate"),
              path: "rotate"
            }, {
              default: c(() => [
                i(ze, {
                  modelValue: u.rotate,
                  "onUpdate:modelValue": s[6] || (s[6] = (w) => u.rotate = w),
                  step: 1,
                  width: 170,
                  onBlur: s[7] || (s[7] = () => f("rotate")),
                  onKeyup: s[8] || (s[8] = me(() => f("rotate"), ["enter"])),
                  disabled: r.value,
                  min: -3600,
                  max: 3600,
                  unit: "°",
                  tooltip: m.$t("common.tooltipBegin") + -3600 + "°" + m.$t("common.tooltipTo") + 3600 + "°" + m.$t("common.tooltipEnd")
                }, null, 8, ["modelValue", "disabled", "tooltip"])
              ]),
              _: 1
            }, 8, ["label"]),
            i(y, {
              label: m.$t("rightPanel.shape.size.scaleHeight"),
              path: "scaleHeight"
            }, {
              default: c(() => [
                i(ze, {
                  modelValue: u.scaleHeight,
                  "onUpdate:modelValue": s[9] || (s[9] = (w) => u.scaleHeight = w),
                  min: 1,
                  step: 1,
                  width: 170,
                  disabled: n.value === v(p).Nil || u.width === 0 || u.height === 0,
                  onBlur: s[10] || (s[10] = () => f("scaleHeight")),
                  onKeyup: s[11] || (s[11] = me(() => f("scaleHeight"), ["enter"])),
                  unit: "%",
                  max: 23480,
                  tooltip: m.$t("common.tooltipBegin") + 1 + "%" + m.$t("common.tooltipTo") + 23480 + "%" + m.$t("common.tooltipEnd")
                }, null, 8, ["modelValue", "disabled", "tooltip"])
              ]),
              _: 1
            }, 8, ["label"]),
            i(y, {
              label: m.$t("rightPanel.shape.size.scaleWidth"),
              path: "scaleWidth"
            }, {
              default: c(() => [
                i(ze, {
                  modelValue: u.scaleWidth,
                  "onUpdate:modelValue": s[12] || (s[12] = (w) => u.scaleWidth = w),
                  min: 1,
                  step: 1,
                  width: 170,
                  disabled: n.value === v(p).Nil || u.width === 0 || u.height === 0,
                  onBlur: s[13] || (s[13] = () => f("scaleWidth")),
                  onKeyup: s[14] || (s[14] = me(() => f("scaleWidth"), ["enter"])),
                  unit: "%",
                  max: 23480,
                  tooltip: m.$t("common.tooltipBegin") + 1 + "%" + m.$t("common.tooltipTo") + 23480 + "%" + m.$t("common.tooltipEnd")
                }, null, 8, ["modelValue", "disabled", "tooltip"])
              ]),
              _: 1
            }, 8, ["label"]),
            i(x, { vertical: "" }, {
              default: c(() => [
                i(b, {
                  size: "small",
                  label: m.$t("rightPanel.shape.size.lockAspectRatio"),
                  indeterminate: u.lockAspectRatio === null,
                  disabled: n.value === v(p).Nil || u.width === 0 || u.height === 0,
                  checked: u.lockAspectRatio,
                  "on-update:checked": (w) => {
                    u.lockAspectRatio = w, f("lockAspectRatio");
                  }
                }, null, 8, ["label", "indeterminate", "disabled", "checked", "on-update:checked"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model", "rules", "disabled"]),
        s[15] || (s[15] = O("div", { style: { "margin-top": "12px", display: "flex", "justify-content": "left", width: "100%", "margin-left": "30px" } }, null, -1))
      ], 64);
    };
  }
}), q1 = /* @__PURE__ */ Y({
  __name: "ShapePositionProperty",
  setup(e) {
    const t = N(null), l = re(), n = ie(Ae), { t: r } = Me(), A = F(() => (l == null ? void 0 : l.getters["command/getVal"](a.RightShapeSetPosition)) || {}), o = F(() => l.getters["menu/selectedElement"]);
    qt(t);
    const u = he({
      x: 0,
      y: 0
    }), d = he({
      horizontal: 0,
      horizontalRelativeTo: He.LEFT_TOP,
      vertical: 0,
      verticalRelativeTo: He.LEFT_TOP
    }), f = he({
      horizontal: [{ type: "number", message: "请输入一个数值", trigger: "input" }],
      vertical: [{ type: "number", message: "请输入一个数值", trigger: "input" }]
    }), m = N([
      {
        label: r("rightPanel.shape.position.leftTop"),
        value: He.LEFT_TOP
      },
      {
        label: r("rightPanel.shape.position.center"),
        value: He.CENTER_MIDDLE
      }
    ]), s = N([
      {
        label: r("rightPanel.shape.position.leftTop"),
        value: He.LEFT_TOP
      },
      {
        label: r("rightPanel.shape.position.center"),
        value: He.CENTER_MIDDLE
      }
    ]);
    G(() => A.value, (b) => {
      if (b) {
        let x = typeof b.x == "number" ? te(b.x, ee.MM_TO_CM) : null, M = typeof b.y == "number" ? te(b.y, ee.MM_TO_CM) : null, w = typeof b.centerX == "number" ? te(b.centerX, ee.MM_TO_CM) : 0, H = typeof b.centerY == "number" ? te(b.centerY, ee.MM_TO_CM) : 0;
        u.x = w, u.y = H, d.horizontalRelativeTo === He.CENTER_MIDDLE && x !== null && (x = Number((x - w).toFixed(2))), d.verticalRelativeTo === He.CENTER_MIDDLE && M !== null && (M = Number((M - H).toFixed(2))), Object.assign(d, {
          horizontal: x,
          vertical: M
        });
      }
    }, { immediate: !0 }), G(() => d.horizontalRelativeTo, (b, x) => {
      b !== x && y("x");
    }), G(() => d.verticalRelativeTo, (b, x) => {
      b !== x && y("y");
    });
    function y(b) {
      let x = {};
      if (b === "horizontal" || b === "x") {
        if (b === "x" || d[b] !== null && te(d[b], ee.CM_TO_MM) !== A.value.x) {
          let M = d.horizontal;
          d.horizontalRelativeTo === He.CENTER_MIDDLE && (M = Number((M + u.x).toFixed(2))), x.x = te(M, ee.CM_TO_MM);
        }
      } else if ((b === "vertical" || b === "y") && (b === "y" || d[b] !== null && te(d[b], ee.CM_TO_MM) !== A.value.y)) {
        let M = d.vertical;
        d.verticalRelativeTo === He.CENTER_MIDDLE && (M = Number((M + u.y).toFixed(2))), x.y = te(M, ee.CM_TO_MM);
      }
      Object.keys(x).length !== 0 && n.run(a.RightShapeSetPosition, { value: x });
    }
    return (b, x) => {
      const M = B("n-form-item"), w = B("n-form");
      return T(), K(w, {
        ref_key: "panelRoot",
        ref: t,
        model: d,
        "label-placement": "left",
        "label-width": "auto",
        "label-align": "left",
        size: "small",
        style: { width: "90%" },
        rules: f,
        disabled: o.value === v(p).Nil
      }, {
        default: c(() => [
          i(M, {
            label: b.$t("rightPanel.shape.position.horizontal"),
            path: "horizontal"
          }, {
            default: c(() => [
              i(ze, {
                modelValue: d.horizontal,
                "onUpdate:modelValue": x[0] || (x[0] = (H) => d.horizontal = H),
                width: 170,
                step: 0.1,
                disabled: o.value === v(p).Nil,
                onBlur: x[1] || (x[1] = () => y("horizontal")),
                precision: 2,
                onKeyup: x[2] || (x[2] = me(() => y("horizontal"), ["enter"])),
                min: -5963.92,
                max: 5963.92,
                unit: b.$t("unit.cm"),
                tooltip: b.$t("common.tooltipBegin") + -5963.92 + b.$t("unit.cm") + b.$t("common.tooltipTo") + 5963.92 + b.$t("unit.cm") + b.$t("common.tooltipEnd")
              }, null, 8, ["modelValue", "disabled", "unit", "tooltip"])
            ]),
            _: 1
          }, 8, ["label"]),
          i(M, {
            label: b.$t("rightPanel.shape.position.relativeTo"),
            path: "horizontalRelativeTo"
          }, {
            default: c(() => [
              i(v(be), {
                size: "tiny",
                options: m.value,
                "model-value": d.horizontalRelativeTo,
                textAlign: "center",
                "min-width": 130,
                type: "font",
                valueIsNumber: !0,
                disabled: o.value === v(p).Nil,
                "onUpdate:modelValue": x[3] || (x[3] = (H) => d.horizontalRelativeTo = String(H)),
                "max-height": 200,
                activeBgColor: "var(--active-bg)",
                activeTextColor: "#000000"
              }, null, 8, ["options", "model-value", "disabled"])
            ]),
            _: 1
          }, 8, ["label"]),
          i(M, {
            label: b.$t("rightPanel.shape.position.vertical"),
            path: "vertical"
          }, {
            default: c(() => [
              i(ze, {
                modelValue: d.vertical,
                "onUpdate:modelValue": x[4] || (x[4] = (H) => d.vertical = H),
                step: 0.1,
                width: 170,
                disabled: o.value === v(p).Nil,
                onBlur: x[5] || (x[5] = () => y("vertical")),
                precision: 2,
                onKeyup: x[6] || (x[6] = me(() => y("vertical"), ["enter"])),
                min: -5963.92,
                max: 5963.92,
                unit: b.$t("unit.cm"),
                tooltip: b.$t("common.tooltipBegin") + -5963.92 + b.$t("unit.cm") + b.$t("common.tooltipTo") + 5963.92 + b.$t("unit.cm") + b.$t("common.tooltipEnd")
              }, null, 8, ["modelValue", "disabled", "unit", "tooltip"])
            ]),
            _: 1
          }, 8, ["label"]),
          i(M, {
            label: b.$t("rightPanel.shape.position.relativeTo"),
            path: "verticalRelativeTo"
          }, {
            default: c(() => [
              i(v(be), {
                size: "tiny",
                options: s.value,
                "model-value": d.verticalRelativeTo,
                textAlign: "center",
                "min-width": 130,
                type: "font",
                valueIsNumber: !0,
                disabled: o.value === v(p).Nil,
                "onUpdate:modelValue": x[7] || (x[7] = (H) => d.verticalRelativeTo = String(H)),
                "max-height": 200,
                activeBgColor: "var(--active-bg)",
                activeTextColor: "#000000"
              }, null, 8, ["options", "model-value", "disabled"])
            ]),
            _: 1
          }, 8, ["label"])
        ]),
        _: 1
      }, 8, ["model", "rules", "disabled"]);
    };
  }
}), yl = /* @__PURE__ */ Y({
  __name: "ShapeTextBoxProperty",
  setup(e) {
    const t = re(), l = ie(Ae), { t: n } = Me(), r = F(() => t.getters["menu/selectedElement"]), A = F(() => (t == null ? void 0 : t.getters["command/getVal"](a.RightShapeSetTextBox)) || {}), o = N(null), u = N(0), d = F(() => (r.value & p.Shape) !== p.Shape && (r.value & p.Text) !== p.Text), f = he({
      verticalAlign: 0,
      textDirection: _e.HORIZONTAL,
      textMargin: Ve.NORMAL_MARGIN,
      leftMargin: 0,
      rightMargin: 0,
      topMargin: 0,
      bottomMargin: 0,
      textAutoFit: 0,
      shapeAutoWrap: !0
    }), m = he({
      leftMargin: [{ type: "number", message: "请输入一个数值", trigger: "input" }],
      rightMargin: [{ type: "number", message: "请输入一个数值", trigger: "input" }],
      topMargin: [{ type: "number", message: "请输入一个数值", trigger: "input" }],
      bottomMargin: [{ type: "number", message: "请输入一个数值", trigger: "input" }]
    }), s = N([
      {
        label: n("rightPanel.shape.textBox.noMargin"),
        value: Ve.NONE
      },
      {
        label: n("rightPanel.shape.textBox.narrowMargin"),
        value: Ve.NARROW_MARGIN
      },
      {
        label: n("rightPanel.shape.textBox.normalMargin"),
        value: Ve.NORMAL_MARGIN
      },
      {
        label: n("rightPanel.shape.textBox.wideMargin"),
        value: Ve.WIDE_MARGIN
      },
      {
        label: n("rightPanel.shape.textBox.increaseMargin"),
        value: Ve.INCREASE_MARGIN
      },
      {
        label: n("rightPanel.shape.textBox.customMargin"),
        value: Ve.CUSTOM_MARGIN
      }
    ]), y = F(() => f.textDirection === _e.HORIZONTAL ? [
      {
        label: n("rightPanel.shape.textBox.top"),
        value: 0
      },
      {
        label: n("rightPanel.shape.textBox.middle"),
        value: 1
      },
      {
        label: n("rightPanel.shape.textBox.bottom"),
        value: 2
      },
      {
        label: n("rightPanel.shape.textBox.topCenter"),
        value: 3
      },
      {
        label: n("rightPanel.shape.textBox.middleCenter"),
        value: 4
      },
      {
        label: n("rightPanel.shape.textBox.bottomCenter"),
        value: 5
      }
    ] : f.textDirection === _e.ROTATE_270 ? [
      {
        label: n("rightPanel.shape.textBox.left"),
        value: 0
      },
      {
        label: n("rightPanel.shape.textBox.middle"),
        value: 1
      },
      {
        label: n("rightPanel.shape.textBox.right"),
        value: 2
      },
      {
        label: n("rightPanel.shape.textBox.middleLeft"),
        value: 3
      },
      {
        label: n("rightPanel.shape.textBox.middleMiddle"),
        value: 4
      },
      {
        label: n("rightPanel.shape.textBox.middleRight"),
        value: 5
      }
    ] : [
      {
        label: n("rightPanel.shape.textBox.right"),
        value: 0
      },
      {
        label: n("rightPanel.shape.textBox.middle"),
        value: 1
      },
      {
        label: n("rightPanel.shape.textBox.left"),
        value: 2
      },
      {
        label: n("rightPanel.shape.textBox.middleRight"),
        value: 3
      },
      {
        label: n("rightPanel.shape.textBox.middleMiddle"),
        value: 4
      },
      {
        label: n("rightPanel.shape.textBox.middleLeft"),
        value: 5
      }
    ]), b = N([
      {
        label: n("rightPanel.shape.textBox.horizontal"),
        value: _e.HORIZONTAL
      },
      {
        label: n("rightPanel.shape.textBox.vertical"),
        value: _e.VERTICAL
      },
      {
        label: n("rightPanel.shape.textBox.rotate90"),
        value: _e.ROTATE_90
      },
      {
        label: n("rightPanel.shape.textBox.rotate270"),
        value: _e.ROTATE_270
      }
    ]), x = N([
      {
        label: n("rightPanel.shape.textBox.noAutoFit"),
        value: 0
      },
      {
        label: n("rightPanel.shape.textBox.overflowTextIndent"),
        value: 1
      },
      {
        label: n("rightPanel.shape.textBox.shapeForTextSize"),
        value: 2
      }
    ]);
    qt(o), G(() => A.value, (w) => {
      u.value++, w && Object.assign(f, {
        verticalAlign: w.verticalAlign,
        textDirection: w.textDirection,
        leftMargin: typeof w.leftMargin == "number" ? te(w.leftMargin, ee.MM_TO_CM) : null,
        rightMargin: typeof w.rightMargin == "number" ? te(w.rightMargin, ee.MM_TO_CM) : null,
        topMargin: typeof w.topMargin == "number" ? te(w.topMargin, ee.MM_TO_CM) : null,
        bottomMargin: typeof w.bottomMargin == "number" ? te(w.bottomMargin, ee.MM_TO_CM) : null,
        textAutoFit: w.textAutoFit,
        shapeAutoWrap: w.shapeAutoWrap
      });
    }, { immediate: !0 }), G(() => f.textMargin, (w) => {
      w && Object.assign(f, gt[w] || {}), M("textMargin");
    }), G(() => [f.leftMargin, f.rightMargin, f.topMargin, f.bottomMargin], ([w, H, h, g]) => {
      let I = f.textMargin;
      f.textMargin = Object.keys(gt).reduce((_, L) => {
        if (gt[L] != null) {
          let { leftMargin: V, rightMargin: k, topMargin: C, bottomMargin: Z } = gt[L];
          if (V === w && k === H && C === h && Z === g)
            return L;
        }
        return _;
      }, Ve.CUSTOM_MARGIN), w === null && H === null && h === null && g === null && (f.textMargin = ""), I !== f.textMargin && M("textMargin");
    });
    function M(w) {
      let H = {};
      w === "verticalAlign" || w === "textDirection" || w === "textAutoFit" || w === "shapeAutoWrap" ? f[w] !== A.value[w] && (w === "verticalAlign" ? H.verticalAlign = f[w] : w === "textDirection" ? H.textDirection = f[w] : w === "textAutoFit" ? H.textAutoFit = f[w] : w === "shapeAutoWrap" && (H.shapeAutoWrap = f[w])) : (f.leftMargin !== null && te(f.leftMargin, ee.CM_TO_MM) !== A.value.leftMargin && (H.leftMargin = te(f.leftMargin, ee.CM_TO_MM)), f.rightMargin !== null && te(f.rightMargin, ee.CM_TO_MM) !== A.value.rightMargin && (H.rightMargin = te(f.rightMargin, ee.CM_TO_MM)), f.topMargin !== null && te(f.topMargin, ee.CM_TO_MM) !== A.value.topMargin && (H.topMargin = te(f.topMargin, ee.CM_TO_MM)), f.bottomMargin !== null && te(f.bottomMargin, ee.CM_TO_MM) !== A.value.bottomMargin && (H.bottomMargin = te(f.bottomMargin, ee.CM_TO_MM))), Object.keys(H).length !== 0 && l.run(a.RightShapeSetTextBox, { value: H });
    }
    return (w, H) => {
      const h = B("n-form-item"), g = B("n-radio"), I = B("n-space"), _ = B("n-radio-group"), L = B("n-checkbox"), V = B("n-form");
      return T(), K(V, {
        ref_key: "panelRoot",
        ref: o,
        model: f,
        "label-placement": "left",
        "label-width": "auto",
        "label-align": "left",
        size: "small",
        disabled: d.value,
        style: { width: "90%", "margin-bottom": "10px" },
        rules: m
      }, {
        default: c(() => [
          i(h, {
            label: w.$t("rightPanel.shape.textBox.verticalAlign"),
            path: "verticalAlign"
          }, {
            default: c(() => [
              (T(), K(v(be), {
                size: "tiny",
                options: y.value,
                "model-value": f.verticalAlign,
                textAlign: "center",
                "min-width": 130,
                type: "font",
                valueIsNumber: !0,
                disabled: d.value,
                key: u.value,
                "onUpdate:modelValue": H[0] || (H[0] = (k) => {
                  f.verticalAlign = Number(k), M("verticalAlign");
                }),
                "max-height": 200,
                activeBgColor: "var(--active-bg)",
                activeTextColor: "#000000"
              }, null, 8, ["options", "model-value", "disabled"]))
            ]),
            _: 1
          }, 8, ["label"]),
          i(h, {
            label: w.$t("rightPanel.shape.textBox.textDirection"),
            path: "textDirection"
          }, {
            default: c(() => [
              i(v(be), {
                size: "tiny",
                options: b.value,
                "model-value": f.textDirection,
                textAlign: "center",
                "min-width": 130,
                type: "font",
                valueIsNumber: !0,
                disabled: d.value,
                "onUpdate:modelValue": H[1] || (H[1] = (k) => {
                  f.textDirection = String(k), M("textDirection");
                }),
                "max-height": 200,
                activeBgColor: "var(--active-bg)",
                activeTextColor: "#000000"
              }, null, 8, ["options", "model-value", "disabled"])
            ]),
            _: 1
          }, 8, ["label"]),
          i(h, {
            label: w.$t("rightPanel.shape.textBox.textMargin"),
            path: "textMargin"
          }, {
            default: c(() => [
              i(v(be), {
                size: "tiny",
                options: s.value,
                "model-value": f.textMargin,
                textAlign: "center",
                "min-width": 130,
                type: "font",
                valueIsNumber: !0,
                disabled: d.value,
                "onUpdate:modelValue": H[2] || (H[2] = (k) => f.textMargin = String(k)),
                "max-height": 200,
                activeBgColor: "var(--active-bg)",
                activeTextColor: "#000000"
              }, null, 8, ["options", "model-value", "disabled"])
            ]),
            _: 1
          }, 8, ["label"]),
          i(h, {
            label: w.$t("rightPanel.shape.textBox.leftMargin"),
            path: "leftMargin"
          }, {
            default: c(() => [
              i(ze, {
                modelValue: f.leftMargin,
                "onUpdate:modelValue": H[3] || (H[3] = (k) => f.leftMargin = k),
                min: 0,
                max: 55.88,
                disabled: d.value,
                width: 170,
                step: 0.1,
                onBlur: H[4] || (H[4] = () => M("leftMargin")),
                onKeyup: H[5] || (H[5] = me(() => M("leftMargin"), ["enter"])),
                precision: 2,
                unit: w.$t("unit.cm"),
                tooltip: w.$t("common.tooltipBegin") + 0 + w.$t("unit.cm") + w.$t("common.tooltipTo") + 55.88 + w.$t("unit.cm") + w.$t("common.tooltipEnd")
              }, null, 8, ["modelValue", "disabled", "unit", "tooltip"])
            ]),
            _: 1
          }, 8, ["label"]),
          i(h, {
            label: w.$t("rightPanel.shape.textBox.rightMargin"),
            path: "rightMargin"
          }, {
            default: c(() => [
              i(ze, {
                modelValue: f.rightMargin,
                "onUpdate:modelValue": H[6] || (H[6] = (k) => f.rightMargin = k),
                min: 0,
                max: 55.88,
                disabled: d.value,
                width: 170,
                step: 0.1,
                onBlur: H[7] || (H[7] = () => M("rightMargin")),
                onKeyup: H[8] || (H[8] = me(() => M("rightMargin"), ["enter"])),
                precision: 2,
                unit: w.$t("unit.cm"),
                tooltip: w.$t("common.tooltipBegin") + 0 + w.$t("unit.cm") + w.$t("common.tooltipTo") + 55.88 + w.$t("unit.cm") + w.$t("common.tooltipEnd")
              }, null, 8, ["modelValue", "disabled", "unit", "tooltip"])
            ]),
            _: 1
          }, 8, ["label"]),
          i(h, {
            label: w.$t("rightPanel.shape.textBox.topMargin"),
            path: "topMargin"
          }, {
            default: c(() => [
              i(ze, {
                modelValue: f.topMargin,
                "onUpdate:modelValue": H[9] || (H[9] = (k) => f.topMargin = k),
                min: 0,
                max: 55.88,
                disabled: d.value,
                width: 170,
                step: 0.1,
                onBlur: H[10] || (H[10] = () => M("topMargin")),
                onKeyup: H[11] || (H[11] = me(() => M("topMargin"), ["enter"])),
                precision: 2,
                unit: w.$t("unit.cm"),
                tooltip: w.$t("common.tooltipBegin") + 0 + w.$t("unit.cm") + w.$t("common.tooltipTo") + 55.88 + w.$t("unit.cm") + w.$t("common.tooltipEnd")
              }, null, 8, ["modelValue", "disabled", "unit", "tooltip"])
            ]),
            _: 1
          }, 8, ["label"]),
          i(h, {
            label: w.$t("rightPanel.shape.textBox.bottomMargin"),
            path: "bottomMargin"
          }, {
            default: c(() => [
              i(ze, {
                modelValue: f.bottomMargin,
                "onUpdate:modelValue": H[12] || (H[12] = (k) => f.bottomMargin = k),
                min: 0,
                max: 55.88,
                disabled: d.value,
                width: 170,
                step: 0.1,
                onBlur: H[13] || (H[13] = () => M("bottomMargin")),
                precision: 2,
                onKeyup: H[14] || (H[14] = me(() => M("bottomMargin"), ["enter"])),
                unit: w.$t("unit.cm"),
                tooltip: w.$t("common.tooltipBegin") + 0 + w.$t("unit.cm") + w.$t("common.tooltipTo") + 55.88 + w.$t("unit.cm") + w.$t("common.tooltipEnd")
              }, null, 8, ["modelValue", "disabled", "unit", "tooltip"])
            ]),
            _: 1
          }, 8, ["label"]),
          i(I, { vertical: "" }, {
            default: c(() => [
              O("div", null, W(w.$t("rightPanel.shape.textBox.textAutoFit")), 1),
              i(_, {
                value: f.textAutoFit,
                "onUpdate:value": H[15] || (H[15] = (k) => f.textAutoFit = k),
                name: "radiogroup",
                size: "small",
                disabled: d.value,
                onChange: H[16] || (H[16] = () => M("textAutoFit"))
              }, {
                default: c(() => [
                  i(I, { vertical: "" }, {
                    default: c(() => [
                      (T(!0), E(fe, null, Se(x.value, (k) => (T(), K(g, {
                        key: k.value,
                        value: k.value,
                        size: "small",
                        class: "radio-item"
                      }, {
                        default: c(() => [
                          $(W(k.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value", "disabled"]),
              i(L, {
                class: "checkbox-item",
                size: "small",
                label: w.$t("rightPanel.shape.textBox.shapeAutoWrap"),
                indeterminate: f.shapeAutoWrap === null,
                checked: f.shapeAutoWrap,
                "on-update:checked": (k) => {
                  f.shapeAutoWrap = k, M("shapeAutoWrap");
                },
                disabled: d.value
              }, null, 8, ["label", "indeterminate", "checked", "on-update:checked", "disabled"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model", "disabled", "rules"]);
    };
  }
}), G1 = /* @__PURE__ */ Y({
  __name: "ShapeSizePropertyTab",
  setup(e) {
    return (t, l) => {
      const n = B("n-collapse-item"), r = B("n-scrollbar"), A = B("n-collapse");
      return T(), K(A, {
        "default-expanded-names": ["size", "position", "textbox"],
        style: { height: "100%" }
      }, {
        default: c(() => [
          i(r, null, {
            default: c(() => [
              i(n, {
                title: t.$t("rightPanel.shape.size.name"),
                name: "size",
                class: "collapse-item"
              }, {
                default: c(() => [
                  i(U1)
                ]),
                _: 1
              }, 8, ["title"]),
              i(n, {
                title: t.$t("rightPanel.shape.position.name"),
                name: "position",
                style: { border: "none" },
                class: "collapse-item"
              }, {
                default: c(() => [
                  i(q1)
                ]),
                _: 1
              }, 8, ["title"]),
              i(n, {
                title: t.$t("rightPanel.text.textBox.name"),
                name: "textbox",
                style: { border: "none" },
                class: "collapse-item"
              }, {
                default: c(() => [
                  i(yl)
                ]),
                _: 1
              }, 8, ["title"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), Q1 = /* @__PURE__ */ oe(G1, [["__scopeId", "data-v-fca4ebe0"]]), Y1 = /* @__PURE__ */ Y({
  __name: "TextBoxPropertyTab",
  setup(e) {
    return (t, l) => {
      const n = B("n-collapse-item"), r = B("n-scrollbar"), A = B("n-collapse");
      return T(), K(A, {
        "default-expanded-names": ["textbox"],
        style: { height: "100%" }
      }, {
        default: c(() => [
          i(r, null, {
            default: c(() => [
              i(n, {
                title: t.$t("rightPanel.text.textBox.name"),
                name: "textbox",
                style: { border: "none" },
                class: "collapse-item"
              }, {
                default: c(() => [
                  i(yl)
                ]),
                _: 1
              }, 8, ["title"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), K1 = /* @__PURE__ */ oe(Y1, [["__scopeId", "data-v-05d395fc"]]), J1 = { style: { padding: "10px", height: "100%", position: "relative" } }, $1 = /* @__PURE__ */ Y({
  __name: "SetShapeAndTextPanel",
  setup(e) {
    const t = re();
    function l() {
      t.commit("panel/closePanel");
    }
    return (n, r) => {
      const A = B("n-tab-pane"), o = B("n-tabs");
      return T(), E("div", J1, [
        i(o, {
          type: "card",
          animated: "",
          class: "tabs",
          style: { height: "100%" }
        }, {
          default: c(() => [
            i(A, {
              name: "shape",
              tab: n.$t("rightPanel.shape.title"),
              style: { height: "calc(100% - 30px)" }
            }, {
              default: c(() => [
                i(Q1)
              ]),
              _: 1
            }, 8, ["tab"]),
            i(A, {
              name: "textBox",
              tab: n.$t("rightPanel.text.title"),
              style: { height: "calc(100% - 30px)" }
            }, {
              default: c(() => [
                i(K1)
              ]),
              _: 1
            }, 8, ["tab"])
          ]),
          _: 1
        }),
        i(v(ce), {
          style: { position: "absolute", right: "10px", top: "10px" },
          name: "Dialog_close_16__clip_cell",
          size: 14,
          class: "close-icon",
          onClick: l
        })
      ]);
    };
  }
}), e0 = /* @__PURE__ */ oe($1, [["__scopeId", "data-v-4be4632c"]]), t0 = { style: { padding: "10px", height: "100%", position: "relative" } }, l0 = ["onClick"], a0 = { class: "comment-content" }, n0 = {
  key: 0,
  style: { margin: "5px 0px" }
}, i0 = {
  key: 1,
  style: { margin: "5px 0px" }
}, r0 = {
  key: 0,
  style: { margin: "5px 0px" }
}, o0 = {
  key: 1,
  style: { margin: "5px 0px" }
}, A0 = {
  key: 0,
  class: "comment-actions"
}, s0 = {
  key: 3,
  style: { margin: "5px 0px" }
}, d0 = ["onClick"], p0 = {
  key: 0,
  style: { margin: "5px 0px" }
}, c0 = {
  key: 1,
  style: { margin: "5px 0px" }
}, u0 = {
  key: 0,
  class: "comment-actions"
}, m0 = {
  key: 0,
  class: "comment-actions"
}, h0 = { class: "comment-input" }, f0 = /* @__PURE__ */ Y({
  __name: "CommentPanel",
  setup(e) {
    const t = re(), l = N(""), n = ie(Ae), r = F(() => t == null ? void 0 : t.getters["command/getVal"](a.CommentUpdate)), A = F(() => t == null ? void 0 : t.getters["panel/commentId"]), o = F(() => t == null ? void 0 : t.getters["command/userId"]), u = N(""), d = N(""), f = N(""), m = N("#757575"), s = N({}), y = N({});
    G(() => A.value, (I) => {
      f.value = I;
    }), G(() => r.value, (I) => {
      s.value = {}, y.value = {}, I.forEach((_) => {
        s.value[_.commentId] = "", y.value[_.commentId] = !1;
      });
    });
    function b() {
      t.commit("panel/closePanel"), t.commit("panel/setShowHideComment", !1);
    }
    function x() {
      l.value = "";
    }
    function M() {
      l.value.trim() !== "" && (n.run(a.CommentUpdate, { value: { message: l.value, type: ke.COMMENT_CREATE, replyCommentId: null, commentId: null } }), l.value = "");
    }
    function w(I, _) {
      n.run(a.CommentUpdate, { value: { message: "", type: ke.COMMENT_DELETE, replyCommentId: _, commentId: I } });
    }
    function H(I, _, L) {
      L.trim() !== "" && (n.run(a.CommentUpdate, { value: { message: L, type: ke.COMMENT_UPDATE, replyCommentId: _, commentId: I } }), u.value = "");
    }
    function h(I) {
      s.value[I].trim() !== "" && (n.run(a.CommentUpdate, { value: { message: s.value[I], type: ke.COMMENT_ADD_REPLY, replyCommentId: null, commentId: I } }), s.value[I] = "");
    }
    function g(I) {
      I != f.value && (y.value[f.value] = !1, f.value = I, n.run(a.CommentUpdate, { value: { message: "", type: ke.COMMENT_ACTIVE_CHANGE, replyCommentId: null, commentId: I } }));
    }
    return (I, _) => {
      const L = B("n-ellipsis"), V = B("n-input"), k = B("n-space"), C = B("n-collapse-transition"), Z = B("n-tab-pane"), P = B("n-tabs");
      return T(), E("div", t0, [
        i(P, {
          type: "card",
          animated: "",
          class: "tabs",
          style: { height: "100%" }
        }, {
          default: c(() => [
            i(Z, {
              name: "shape",
              tab: I.$t("rightPanel.comment.title"),
              class: "comment-pane"
            }, {
              default: c(() => [
                i(v(ut), {
                  class: "scrollbar",
                  "max-height": 700
                }, {
                  default: c(() => [
                    (T(!0), E(fe, null, Se(r.value, (S) => (T(), E("div", {
                      key: S.commentId,
                      class: zt(["comment-item", { active: f.value === S.commentId }]),
                      onClick: (X) => g(S.commentId)
                    }, [
                      O("div", a0, [
                        O("div", null, [
                          i(L, { style: { "font-weight": "700", "max-width": "240px" } }, {
                            default: c(() => [
                              $(W(S.author), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        u.value !== S.commentId ? (T(), E("div", n0, [
                          O("div", null, [
                            i(L, { style: { "max-width": "240px" } }, {
                              default: c(() => [
                                $(W(S.message), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          O("div", null, W(S.date), 1)
                        ])) : (T(), E("div", i0, [
                          i(V, {
                            type: "text",
                            size: "tiny",
                            "default-value": S.message,
                            value: d.value,
                            "onUpdate:value": _[0] || (_[0] = (X) => d.value = X)
                          }, null, 8, ["default-value", "value"]),
                          i(k, {
                            horizontal: "",
                            style: { display: "flex", "justify-content": "flex-end", margin: "5px 0px" }
                          }, {
                            default: c(() => [
                              i(v(ne), {
                                label: I.$t("rightPanel.comment.cancel"),
                                onClickButton: _[1] || (_[1] = (X) => {
                                  u.value = "", d.value = "";
                                }),
                                type: "standard"
                              }, null, 8, ["label"]),
                              i(v(ne), {
                                label: I.$t("rightPanel.comment.send"),
                                onClickButton: (X) => H(S.commentId, null, d.value)
                              }, null, 8, ["label", "onClickButton"])
                            ]),
                            _: 2
                          }, 1024)
                        ])),
                        S.replyLst.length > 0 ? (T(), E("div", {
                          key: S.replyLst[0].id,
                          style: { "margin-left": "20px", position: "relative" }
                        }, [
                          O("div", null, [
                            O("div", null, [
                              i(L, { style: { "font-weight": "700", "max-width": "200px" } }, {
                                default: c(() => [
                                  $(W(S.replyLst[0].author), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            u.value !== S.replyLst[0].commentId ? (T(), E("div", r0, [
                              O("div", null, [
                                i(L, { style: { "max-width": "200px" } }, {
                                  default: c(() => [
                                    $(W(S.replyLst[0].message), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              O("div", null, W(S.replyLst[0].date), 1)
                            ])) : (T(), E("div", o0, [
                              i(V, {
                                type: "text",
                                size: "tiny",
                                "default-value": S.replyLst[0].message,
                                value: d.value,
                                "onUpdate:value": _[2] || (_[2] = (X) => d.value = X)
                              }, null, 8, ["default-value", "value"]),
                              i(k, {
                                horizontal: "",
                                style: { display: "flex", "justify-content": "flex-end", margin: "5px 0px" }
                              }, {
                                default: c(() => [
                                  i(v(ne), {
                                    label: I.$t("rightPanel.comment.cancel"),
                                    onClickButton: _[3] || (_[3] = (X) => {
                                      u.value = "", d.value = "";
                                    }),
                                    type: "standard"
                                  }, null, 8, ["label"]),
                                  i(v(ne), {
                                    label: I.$t("rightPanel.comment.send"),
                                    onClickButton: (X) => H(S.commentId, S.replyLst[0].commentId, d.value)
                                  }, null, 8, ["label", "onClickButton"])
                                ]),
                                _: 2
                              }, 1024)
                            ]))
                          ]),
                          S.replyLst[0].authorId === o.value ? (T(), E("div", A0, [
                            i(v(ce), {
                              x: -880,
                              y: -56,
                              size: 16,
                              class: "edit-icon",
                              source: v(de).image,
                              imageWidth: v(de).width,
                              onClick: (X) => {
                                u.value = S.replyLst[0].commentId, d.value = S.replyLst[0].message;
                              }
                            }, null, 8, ["source", "imageWidth", "onClick"]),
                            i(v(ce), {
                              name: "Dialog_close_16__clip_cell",
                              size: 16,
                              class: "close-icon",
                              onClick: (X) => w(S.commentId, S.replyLst[0].commentId),
                              style: { "margin-left": "5px" }
                            }, null, 8, ["onClick"])
                          ])) : se("", !0)
                        ])) : se("", !0),
                        S.replyLst.length > 1 ? (T(), E("div", s0, [
                          y.value[S.commentId] ? se("", !0) : (T(), E("div", {
                            key: 0,
                            class: "reply-count",
                            onClick: (X) => y.value[S.commentId] = !0
                          }, "还有" + W(S.replyLst.length - 1) + "个回复 ", 9, d0))
                        ])) : se("", !0),
                        S.replyLst.length > 1 ? (T(), K(C, {
                          key: 4,
                          show: !!y.value[S.commentId]
                        }, {
                          default: c(() => [
                            (T(!0), E(fe, null, Se(S.replyLst.slice(1), (X) => (T(), E("div", {
                              key: X.id,
                              style: { "margin-left": "20px", position: "relative" }
                            }, [
                              O("div", null, [
                                O("div", null, [
                                  i(L, { style: { "font-weight": "700", "max-width": "200px" } }, {
                                    default: c(() => [
                                      $(W(X.author), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                u.value !== X.commentId ? (T(), E("div", p0, [
                                  O("div", null, [
                                    i(L, { style: { "max-width": "200px" } }, {
                                      default: c(() => [
                                        $(W(X.message), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  O("div", null, W(X.date), 1)
                                ])) : (T(), E("div", c0, [
                                  i(V, {
                                    type: "text",
                                    size: "tiny",
                                    "default-value": X.message,
                                    value: d.value,
                                    "onUpdate:value": _[4] || (_[4] = (q) => d.value = q)
                                  }, null, 8, ["default-value", "value"]),
                                  i(k, {
                                    horizontal: "",
                                    style: { display: "flex", "justify-content": "flex-end", margin: "5px 0px" }
                                  }, {
                                    default: c(() => [
                                      i(v(ne), {
                                        label: I.$t("rightPanel.comment.cancel"),
                                        onClickButton: _[5] || (_[5] = (q) => {
                                          u.value = "", d.value = "";
                                        }),
                                        type: "standard"
                                      }, null, 8, ["label"]),
                                      i(v(ne), {
                                        label: I.$t("rightPanel.comment.send"),
                                        onClickButton: (q) => H(S.commentId, X.commentId, d.value)
                                      }, null, 8, ["label", "onClickButton"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]))
                              ]),
                              X.authorId === o.value ? (T(), E("div", u0, [
                                i(v(ce), {
                                  x: -880,
                                  y: -56,
                                  size: 16,
                                  class: "edit-icon",
                                  source: v(de).image,
                                  imageWidth: v(de).width,
                                  onClick: (q) => {
                                    u.value = X.commentId, d.value = X.message;
                                  }
                                }, null, 8, ["source", "imageWidth", "onClick"]),
                                i(v(ce), {
                                  name: "Dialog_close_16__clip_cell",
                                  size: 16,
                                  class: "close-icon",
                                  onClick: (q) => w(S.commentId, X.commentId),
                                  style: { "margin-left": "5px" }
                                }, null, 8, ["onClick"])
                              ])) : se("", !0)
                            ]))), 128))
                          ]),
                          _: 2
                        }, 1032, ["show"])) : se("", !0)
                      ]),
                      S.authorId === o.value ? (T(), E("div", m0, [
                        i(v(ce), {
                          x: -880,
                          y: -56,
                          size: 16,
                          class: "edit-icon",
                          source: v(de).image,
                          imageWidth: v(de).width,
                          onClick: (X) => {
                            u.value = S.commentId, d.value = S.message;
                          }
                        }, null, 8, ["source", "imageWidth", "onClick"]),
                        i(v(ce), {
                          name: "Dialog_close_16__clip_cell",
                          size: 16,
                          class: "close-icon",
                          onClick: (X) => w(S.commentId, null),
                          style: { "margin-left": "5px" }
                        }, null, 8, ["onClick"])
                      ])) : se("", !0),
                      i(V, {
                        type: "text",
                        size: "tiny",
                        placeholder: I.$t("rightPanel.comment.reply"),
                        value: s.value[S.commentId],
                        "onUpdate:value": (X) => s.value[S.commentId] = X,
                        class: "reply-input",
                        onKeyup: me((X) => h(S.commentId), ["enter"])
                      }, null, 8, ["placeholder", "value", "onUpdate:value", "onKeyup"])
                    ], 10, l0))), 128))
                  ]),
                  _: 1
                }),
                O("div", h0, [
                  i(V, {
                    value: l.value,
                    "onUpdate:value": _[10] || (_[10] = (S) => l.value = S),
                    placeholder: I.$t("rightPanel.comment.placeholder"),
                    size: "small",
                    type: "textarea",
                    "on-input": (S) => l.value = S,
                    autosize: { minRows: 1, maxRows: 3 }
                  }, {
                    suffix: c(() => [
                      i(v(ce), {
                        name: "clear_all",
                        size: 16,
                        onClick: x,
                        class: "clear-button"
                      }),
                      i(v(ce), {
                        name: "send",
                        size: 16,
                        class: "send-button",
                        onClick: M,
                        iconColor: m.value,
                        onMouseover: _[6] || (_[6] = (S) => m.value = "#0061CE"),
                        onMouseout: _[7] || (_[7] = (S) => m.value = "#757575"),
                        onMousedown: _[8] || (_[8] = (S) => m.value = "#0049A8"),
                        onMouseup: _[9] || (_[9] = (S) => m.value = "#757575")
                      }, null, 8, ["iconColor"])
                    ]),
                    _: 1
                  }, 8, ["value", "placeholder", "on-input"])
                ])
              ]),
              _: 1
            }, 8, ["tab"])
          ]),
          _: 1
        }),
        i(v(ce), {
          name: "Dialog_close_16__clip_cell",
          style: { position: "absolute", right: "10px", top: "10px" },
          size: 14,
          class: "close-icon",
          onClick: b
        })
      ]);
    };
  }
}), v0 = /* @__PURE__ */ oe(f0, [["__scopeId", "data-v-52186c7e"]]), g0 = /* @__PURE__ */ Y({
  __name: "RightPanelContent",
  setup(e) {
    const t = re(), l = F(() => t.getters["panel/activePanel"]);
    return (n, r) => (T(), E(fe, null, [
      l.value === v(ct).SetShapeAndTextPanel ? (T(), K(e0, { key: 0 })) : se("", !0),
      l.value === v(ct).CommentPanel ? (T(), K(v0, { key: 1 })) : se("", !0)
    ], 64));
  }
}), b0 = { class: "custom-panel" }, w0 = { style: { "font-size": "12px", "font-weight": "700" } }, x0 = { style: { "font-size": "12px", "font-weight": "700" } }, y0 = /* @__PURE__ */ Y({
  __name: "FontSettingDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t }) {
    const { t: l } = Me(), n = re(), r = ie(Ae), A = Re(e, "modelValue"), o = N([]), u = N([
      {
        label: l("dialogs.font.font.fontStyle.regular"),
        value: "regular"
      },
      {
        label: l("dialogs.font.font.fontStyle.italic"),
        value: "italic"
      },
      {
        label: l("dialogs.font.font.fontStyle.bold"),
        value: "bold"
      },
      {
        label: l("dialogs.font.font.fontStyle.boldItalic"),
        value: "boldItalic"
      }
    ]), d = N([
      {
        label: l("dialogs.font.character.spacing.normal"),
        value: "normal"
      },
      {
        label: l("dialogs.font.character.spacing.expanded"),
        value: "expanded"
      },
      {
        label: l("dialogs.font.character.spacing.condensed"),
        value: "condensed"
      }
    ]), f = N([
      {
        label: l("dialogs.font.font.alltext.underlineType.none"),
        value: "none"
      },
      {
        label: l("dialogs.font.font.alltext.underlineType.single"),
        value: "sng",
        imgX: 0,
        imgY: -193
      },
      // {
      //   label: t('dialogs.font.font.alltext.underlineType.double'),
      //   value: 'dbl',
      //   imgX: -160,
      //   imgY: -193,
      // },
      // {
      //   label: t('dialogs.font.font.alltext.underlineType.heavy'),
      //   value: 'heavy',
      //   imgX: -320,
      //   imgY: -193,
      // },
      {
        label: l("dialogs.font.font.alltext.underlineType.dotted"),
        value: "dotted",
        imgX: -480,
        imgY: -193
      },
      {
        label: l("dialogs.font.font.alltext.underlineType.dottedHeavy"),
        value: "dottedHeavy",
        imgX: -640,
        imgY: -193
      },
      {
        label: l("dialogs.font.font.alltext.underlineType.dash"),
        value: "dash",
        imgX: -800,
        imgY: -193
      },
      {
        label: l("dialogs.font.font.alltext.underlineType.dashHeavy"),
        value: "dashHeavy",
        imgX: -960,
        imgY: -193
      },
      {
        label: l("dialogs.font.font.alltext.underlineType.dashLong"),
        value: "dashLong",
        imgX: -1120,
        imgY: -193
      },
      {
        label: l("dialogs.font.font.alltext.underlineType.dashLongHeavy"),
        value: "dashLongHeavy",
        imgX: -1280,
        imgY: -193
      },
      {
        label: l("dialogs.font.font.alltext.underlineType.dotDash"),
        value: "dotDash",
        imgX: -1440,
        imgY: -193
      },
      // {
      //   label: t('dialogs.font.font.alltext.underlineType.dotDashHeavy'),
      //   value: 'dotDashHeavy',
      //   imgX: -1600,
      //   imgY: -193,
      // },
      {
        label: l("dialogs.font.font.alltext.underlineType.dotdotDash"),
        value: "dotDotDash",
        imgX: -1760,
        imgY: -193
      }
      // {
      //   label: t('dialogs.font.font.alltext.underlineType.dotdotDashHeavy'),
      //   value: 'dotDotDashHeavy',
      //   imgX: -1920,
      //   imgY: -193,
      // },
      // {
      //   label: t('dialogs.font.font.alltext.underlineType.wavy'),
      //   value: 'wavy',
      //   imgX: -2080,
      //   imgY: -193,
      // },
      // {
      //   label: t('dialogs.font.font.alltext.underlineType.wavyHeavy'),
      //   value: 'wavyHeavy',
      //   imgX: -2240,
      //   imgY: -193,
      // },
      // {
      //   label: t('dialogs.font.font.alltext.underlineType.wavyDouble'),
      //   value: 'wavyDbl',
      //   imgX: -2400,
      //   imgY: -193,
      // },
    ]), m = N({ effect: { strikethrough: -1 } }), s = he({});
    let y;
    const b = N(!1);
    G(() => s.offset, (L) => {
      L < 0 ? s.effect.subscript = !0 : L > 0 ? s.effect.superscript = !0 : L === 0 && (s.effect.superscript = !1, s.effect.subscript = !1);
    }), G(() => {
      var L, V;
      return [(L = s.effect) == null ? void 0 : L.subscript, (V = s.effect) == null ? void 0 : V.superscript];
    }, ([L, V]) => {
      !L && !V && (b.value && (s.offset = 0, b.value = !1), s.effect.superscript = !1, s.effect.subscript = !1);
    }), G(() => {
      var L;
      return (L = s.effect) == null ? void 0 : L.subscript;
    }, (L) => {
      L && (b.value && (s.offset = -25, b.value = !1), s.effect.superscript = !1);
    }), G(() => {
      var L;
      return (L = s.effect) == null ? void 0 : L.superscript;
    }, (L) => {
      L && (b.value && (s.offset = 30, b.value = !1), s.effect.subscript = !1);
    }), G(() => {
      var L;
      return (L = s.effect) == null ? void 0 : L.smallCaps;
    }, (L) => {
      L && (s.effect.allCaps = !1);
    }), G(() => {
      var L;
      return (L = s.effect) == null ? void 0 : L.allCaps;
    }, (L) => {
      L && (s.effect.smallCaps = !1);
    }), G(() => s.spacing, (L, V) => {
      V == "normal" && L !== "normal" && s.by === 0 ? s.by = 1 : L === "normal" && V !== "normal" && (s.by = 0);
    });
    function x(L, V) {
      m.value = L, y = V, A.value = !0, m.value && (Object.assign(s, m.value), s.effect = { ...m.value.effect });
    }
    function M() {
      if (A.value = !1, y)
        return y();
      let L = w();
      r.run(a.FontSetting, { value: L });
    }
    function w() {
      let L = {};
      for (let V in s)
        if (V === "effect") {
          L.effect || (L.effect = {});
          for (let k in s.effect)
            s.effect[k] !== m.value.effect[k] && (L.effect[k] = typeof s.effect[k] == "object" ? JSON.parse(JSON.stringify(s.effect[k])) : s.effect[k]);
        } else s[V] !== m.value[V] && (L[V] = typeof s[V] == "object" ? JSON.parse(JSON.stringify(s[V])) : s[V]);
      return L;
    }
    function H() {
      A.value = !1;
    }
    async function h() {
      (Ce == null || Ce.length == 0) && await sl(), Ce && Ce.length !== o.value.length && (o.value = Ce.map(({ fullName: L }) => ({
        label: L,
        value: L
      })));
    }
    function g(L) {
      s.fontColor = L || "", n.commit("file/addRecentColors", { cmd: a.FontColor, recentColor: L });
    }
    function I(L) {
      s.underlineColor = L, n.commit("file/addRecentColors", { cmd: a.UnderlineColor, recentColor: L });
    }
    function _(L) {
      s.underline = String(L), n.commit("command/setEnabled", {
        cmd: a.UnderlineColor,
        enabled: s.underline !== "none" && s.underline !== ""
      });
    }
    return t({
      openPopover: x
    }), (L, V) => {
      const k = B("n-form-item"), C = B("n-space"), Z = B("n-form"), P = B("n-checkbox"), S = B("n-gi"), X = B("n-grid"), q = B("n-tab-pane"), le = B("n-tabs");
      return T(), E("div", null, [
        i(v(Le), {
          show: A.value,
          "onUpdate:show": V[10] || (V[10] = (j) => A.value = j),
          title: L.$t("dialogs.font.name"),
          width: 480
        }, {
          action: c(() => [
            i(v(ne), {
              label: L.$t("common.cancel"),
              onClickButton: H,
              type: "standard"
            }, null, 8, ["label"]),
            i(v(ne), {
              label: L.$t("common.confirm"),
              onClickButton: M
            }, null, 8, ["label"])
          ]),
          default: c(() => [
            O("div", b0, [
              i(le, {
                class: "card-tabs",
                "default-value": "font",
                size: "small",
                animated: "",
                "pane-wrapper-style": "margin: 0 -2px",
                "pane-style": "padding-left: 2px; padding-right: 2px; box-sizing: border-box",
                type: "line"
              }, {
                default: c(() => [
                  i(q, {
                    class: "tab-pane",
                    name: "font",
                    tab: L.$t("dialogs.font.font.name")
                  }, {
                    default: c(() => [
                      i(Z, {
                        size: "small",
                        style: { "font-size": "12px" }
                      }, {
                        default: c(() => [
                          i(C, { horizontal: "" }, {
                            default: c(() => [
                              i(k, {
                                label: L.$t("dialogs.font.font.latinFontName"),
                                onClick: h,
                                width: 140,
                                class: "no-label-style"
                              }, {
                                default: c(() => [
                                  i(v(be), {
                                    size: "tiny",
                                    options: o.value,
                                    "model-value": s.latinFontName,
                                    width: 140,
                                    type: "font",
                                    "onUpdate:modelValue": V[0] || (V[0] = (j) => s.latinFontName = String(j)),
                                    maxHeight: 200
                                  }, null, 8, ["options", "model-value"])
                                ]),
                                _: 1
                              }, 8, ["label"]),
                              i(k, {
                                label: L.$t("dialogs.font.font.fontStyle.name")
                              }, {
                                default: c(() => [
                                  i(v(be), {
                                    size: "tiny",
                                    options: u.value,
                                    "model-value": s.fontStyle,
                                    width: 120,
                                    type: "font",
                                    "onUpdate:modelValue": V[1] || (V[1] = (j) => s.fontStyle = String(j))
                                  }, null, 8, ["options", "model-value"])
                                ]),
                                _: 1
                              }, 8, ["label"]),
                              i(k, {
                                label: L.$t("dialogs.font.font.size")
                              }, {
                                default: c(() => [
                                  i(Fe, {
                                    modelValue: s.size,
                                    "onUpdate:modelValue": V[2] || (V[2] = (j) => s.size = j),
                                    unit: "",
                                    min: 0,
                                    max: 4e3,
                                    precision: 1,
                                    size: "tiny",
                                    style: { width: "160px" },
                                    step: 0.1,
                                    allowString: !0
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              }, 8, ["label"])
                            ]),
                            _: 1
                          }),
                          i(C, { horizontal: "" }, {
                            default: c(() => [
                              i(k, {
                                label: L.$t("dialogs.font.font.asianFontName"),
                                onClick: h
                              }, {
                                default: c(() => [
                                  i(v(be), {
                                    options: o.value,
                                    "model-value": s.asianFontName,
                                    width: 140,
                                    type: "font",
                                    "onUpdate:modelValue": V[3] || (V[3] = (j) => s.asianFontName = String(j)),
                                    size: "tiny",
                                    maxHeight: 160
                                  }, null, 8, ["options", "model-value"])
                                ]),
                                _: 1
                              }, 8, ["label"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      i(Z, {
                        "label-placement": "left",
                        size: "small"
                      }, {
                        default: c(() => [
                          i(C, {
                            horizontal: "",
                            style: { "margin-bottom": "8px" }
                          }, {
                            default: c(() => [
                              O("label", w0, W(L.$t("dialogs.font.font.alltext.title")), 1)
                            ]),
                            _: 1
                          }),
                          i(C, { horizontal: "" }, {
                            default: c(() => [
                              i(k, {
                                label: L.$t("dialogs.font.font.alltext.fontColor")
                              }, {
                                default: c(() => [
                                  i(Ct, {
                                    x: -320.5,
                                    y: -56,
                                    "default-color": s.fontColor,
                                    "is-select-event": !0,
                                    tooltip: L.$t("toolbar.start.fontClolor"),
                                    class: "global-small-icon-dropdown-button",
                                    cmd: v(a).FontColor,
                                    to: "body",
                                    onSelect: V[4] || (V[4] = (j) => g(j))
                                  }, null, 8, ["default-color", "tooltip", "cmd"])
                                ]),
                                _: 1
                              }, 8, ["label"]),
                              i(k, {
                                label: L.$t("dialogs.font.font.alltext.underline")
                              }, {
                                default: c(() => [
                                  i(Ei, {
                                    modelValue: s.underline,
                                    "onUpdate:modelValue": [
                                      V[5] || (V[5] = (j) => s.underline = j),
                                      _
                                    ],
                                    options: f.value,
                                    width: 120,
                                    type: "font",
                                    size: "tiny",
                                    maxHeight: 200,
                                    showToolTips: !0
                                  }, null, 8, ["modelValue", "options"])
                                ]),
                                _: 1
                              }, 8, ["label"]),
                              i(k, {
                                label: L.$t("dialogs.font.font.alltext.underlineColor")
                              }, {
                                default: c(() => [
                                  i(Ct, {
                                    x: -320.5,
                                    y: -56,
                                    "default-color": s.underlineColor,
                                    "is-select-event": !0,
                                    tooltip: L.$t("toolbar.start.fontClolor"),
                                    class: "global-small-icon-dropdown-button",
                                    cmd: v(a).UnderlineColor,
                                    to: "body",
                                    onSelect: V[6] || (V[6] = (j) => I(j)),
                                    "show-auto": !0
                                  }, null, 8, ["default-color", "tooltip", "cmd"])
                                ]),
                                _: 1
                              }, 8, ["label"])
                            ]),
                            _: 1
                          }),
                          i(C, { horizontal: "" }, {
                            default: c(() => [
                              O("label", x0, W(L.$t("dialogs.font.font.effect.title")), 1)
                            ]),
                            _: 1
                          }),
                          i(C, {
                            horizontal: "",
                            style: { "margin-bottom": "8px" }
                          }, {
                            default: c(() => [
                              i(X, {
                                "y-gap": 8,
                                cols: 2,
                                class: "checkbox-grid",
                                style: { width: "400px" }
                              }, {
                                default: c(() => [
                                  i(S, null, {
                                    default: c(() => [
                                      i(P, {
                                        checked: (s.effect.strikethrough & v(ae).SINGLE_STRIKE) == v(ae).SINGLE_STRIKE,
                                        "on-update:checked": (j) => {
                                          if (s.effect.strikethrough === v(ae).NONE || s.effect.strikethrough === v(ae).DOUBLE_STRIKE && j) {
                                            s.effect.strikethrough = v(ae).SINGLE_STRIKE;
                                            return;
                                          }
                                          if (s.effect.strikethrough === m.value.effect.strikethrough && s.effect.strikethrough === (v(ae).DOUBLE_STRIKE | v(ae).SINGLE_STRIKE)) {
                                            s.effect.strikethrough = v(ae).NONE;
                                            return;
                                          }
                                          s.effect.strikethrough = j ? s.effect.strikethrough | v(ae).SINGLE_STRIKE : s.effect.strikethrough & ~v(ae).SINGLE_STRIKE;
                                        },
                                        indeterminate: s.effect.strikethrough != v(ae).SINGLE_STRIKE && (s.effect.strikethrough & v(ae).SINGLE_STRIKE) == v(ae).SINGLE_STRIKE,
                                        label: L.$t("dialogs.font.font.effect.strikethrough")
                                      }, null, 8, ["checked", "on-update:checked", "indeterminate", "label"])
                                    ]),
                                    _: 1
                                  }),
                                  i(S, null, {
                                    default: c(() => [
                                      i(P, {
                                        checked: s.effect.smallCaps,
                                        "on-update:checked": (j) => s.effect.smallCaps = j,
                                        label: L.$t("dialogs.font.font.effect.smallCaps")
                                      }, null, 8, ["checked", "on-update:checked", "label"])
                                    ]),
                                    _: 1
                                  }),
                                  i(S, null, {
                                    default: c(() => [
                                      i(P, {
                                        checked: (s.effect.strikethrough & v(ae).DOUBLE_STRIKE) == v(ae).DOUBLE_STRIKE,
                                        "on-update:checked": (j) => {
                                          if (s.effect.strikethrough === v(ae).NONE || s.effect.strikethrough === v(ae).SINGLE_STRIKE && j) {
                                            s.effect.strikethrough = v(ae).DOUBLE_STRIKE;
                                            return;
                                          }
                                          if (s.effect.strikethrough === m.value.effect.strikethrough && s.effect.strikethrough === (v(ae).DOUBLE_STRIKE | v(ae).SINGLE_STRIKE)) {
                                            s.effect.strikethrough = v(ae).NONE;
                                            return;
                                          }
                                          s.effect.strikethrough = j ? s.effect.strikethrough | v(ae).DOUBLE_STRIKE : s.effect.strikethrough & ~v(ae).DOUBLE_STRIKE;
                                        },
                                        indeterminate: s.effect.strikethrough != v(ae).DOUBLE_STRIKE && (s.effect.strikethrough & v(ae).DOUBLE_STRIKE) == v(ae).DOUBLE_STRIKE,
                                        label: L.$t("dialogs.font.font.effect.doubleStrike")
                                      }, null, 8, ["checked", "on-update:checked", "indeterminate", "label"])
                                    ]),
                                    _: 1
                                  }),
                                  i(S, null, {
                                    default: c(() => [
                                      i(P, {
                                        checked: s.effect.allCaps,
                                        "on-update:checked": (j) => s.effect.allCaps = j,
                                        label: L.$t("dialogs.font.font.effect.allCaps")
                                      }, null, 8, ["checked", "on-update:checked", "label"])
                                    ]),
                                    _: 1
                                  }),
                                  i(S, { style: { position: "relative" } }, {
                                    default: c(() => [
                                      i(P, {
                                        checked: s.effect.superscript,
                                        indeterminate: typeof s.offset == "string",
                                        "on-update:checked": (j) => {
                                          s.effect.superscript = j, b.value = !0;
                                        },
                                        label: L.$t("dialogs.font.font.effect.superscript")
                                      }, null, 8, ["checked", "indeterminate", "on-update:checked", "label"]),
                                      i(k, {
                                        label: L.$t("dialogs.font.font.effect.offset"),
                                        class: "offset-item"
                                      }, {
                                        default: c(() => [
                                          i(Fe, {
                                            modelValue: s.offset,
                                            "onUpdate:modelValue": V[7] || (V[7] = (j) => s.offset = j),
                                            unit: "%",
                                            min: -100,
                                            max: 100,
                                            precision: 0,
                                            width: 80,
                                            allowString: !0
                                          }, null, 8, ["modelValue"])
                                        ]),
                                        _: 1
                                      }, 8, ["label"])
                                    ]),
                                    _: 1
                                  }),
                                  i(S),
                                  i(S, null, {
                                    default: c(() => [
                                      i(P, {
                                        checked: s.effect.subscript,
                                        indeterminate: typeof s.offset == "string",
                                        "on-update:checked": (j) => {
                                          s.effect.subscript = j, b.value = !0;
                                        },
                                        label: L.$t("dialogs.font.font.effect.subscript")
                                      }, null, 8, ["checked", "indeterminate", "on-update:checked", "label"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["tab"]),
                  i(q, {
                    class: "tab-pane",
                    name: "character",
                    tab: L.$t("dialogs.font.character.name")
                  }, {
                    default: c(() => [
                      i(Z, {
                        "label-placement": "left",
                        size: "small"
                      }, {
                        default: c(() => [
                          i(C, { horizontal: "" }, {
                            default: c(() => [
                              i(k, {
                                label: L.$t("dialogs.font.character.spacing.name")
                              }, {
                                default: c(() => [
                                  i(v(be), {
                                    size: "tiny",
                                    "model-value": s.spacing,
                                    options: d.value,
                                    "onUpdate:modelValue": V[8] || (V[8] = (j) => s.spacing = String(j)),
                                    width: 100
                                  }, null, 8, ["model-value", "options"])
                                ]),
                                _: 1
                              }, 8, ["label"]),
                              i(k, {
                                label: L.$t("dialogs.font.character.by.name")
                              }, {
                                default: c(() => [
                                  i(Fe, {
                                    modelValue: s.by,
                                    "onUpdate:modelValue": V[9] || (V[9] = (j) => s.by = j),
                                    unit: "",
                                    width: 120,
                                    allowString: !0,
                                    class: "by-input"
                                  }, null, 8, ["modelValue"]),
                                  O("span", null, W(L.$t("dialogs.font.character.by.unit")), 1)
                                ]),
                                _: 1
                              }, 8, ["label"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["tab"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["show", "title"])
      ]);
    };
  }
}), S0 = /* @__PURE__ */ oe(y0, [["__scopeId", "data-v-66da701b"]]), M0 = { class: "custom-panel" }, P0 = { class: "title" }, H0 = { class: "title" }, k0 = { class: "title" }, z0 = /* @__PURE__ */ Y({
  __name: "ParagraphSettingDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t }) {
    const l = ie(Ae), { t: n } = Me(), r = re();
    let A;
    const o = F(() => {
      var h;
      return ((h = r == null ? void 0 : r.getters["command/textPropertyData"]) == null ? void 0 : h.fontSize) || 0;
    }), u = Re(e, "modelValue"), d = N([
      {
        label: n("dialogs.paragraph.indent.common.left"),
        value: 1
      },
      {
        label: n("dialogs.paragraph.indent.common.center"),
        value: 2
      },
      {
        label: n("dialogs.paragraph.indent.common.right"),
        value: 0
      },
      {
        label: n("dialogs.paragraph.indent.common.justify"),
        value: 3
      },
      {
        label: n("dialogs.paragraph.indent.common.distribute"),
        value: 4
      }
    ]), f = N([
      {
        label: n("dialogs.paragraph.indent.indent.none"),
        value: "none"
      },
      {
        label: n("dialogs.paragraph.indent.indent.firstLine"),
        value: "firstLine"
      },
      {
        label: n("dialogs.paragraph.indent.indent.hang"),
        value: "hang"
      }
    ]), m = N([
      {
        label: n("dialogs.paragraph.indent.spacing.single"),
        value: "single"
      },
      {
        label: n("dialogs.paragraph.indent.spacing.oneHalf"),
        value: "oneHalf"
      },
      {
        label: n("dialogs.paragraph.indent.spacing.double"),
        value: "double"
      },
      {
        label: n("dialogs.paragraph.indent.spacing.fixed"),
        value: "fixed"
      },
      {
        label: n("dialogs.paragraph.indent.spacing.multiple"),
        value: "multiple"
      }
    ]), s = N({}), y = he({
      alignment: 2,
      indentBeforeText: 0,
      special: "none",
      by: 0,
      spaceBefore: 10,
      spaceAfter: 0,
      lineSpace: "single",
      at: 0.9
    }), b = F(() => y.lineSpace === "fixed" ? n("unit.pt") : "");
    G(() => y.special, (h, g) => {
      g == "none" && h !== "none" && h !== null && !y.by ? y.by = 1.27 : g !== "none" && h == "none" && (y.by = 0);
    }), G(() => y.lineSpace, (h, g) => {
      ["single", "oneHalf", "double"].includes(h) && (y.at = 0), g !== "multiple" && h === "multiple" && y.at === 0 ? y.at = 3 : h === "fixed" && (y.at = Number((o.value * 1.2).toFixed(2)));
    });
    function x(h, g) {
      s.value = h, A = g, u.value = !0, s.value && Object.assign(y, s.value), (y.alignment > 4 || y.alignment < 0) && (y.alignment = null);
    }
    function M() {
      if (A)
        return A();
      let h = w();
      l.run(a.ParagraphSetting, { value: h }), u.value = !1;
    }
    function w() {
      let h = {};
      for (let g in y)
        y[g] !== s.value[g] && (h[g] = y[g]);
      return h.by && (h.special = y.special), h.at && (h.lineSpace = y.lineSpace), h;
    }
    function H() {
      u.value = !1;
    }
    return t({
      openPopover: x
    }), (h, g) => {
      const I = B("n-form-item"), _ = B("n-space"), L = B("n-form"), V = B("n-tab-pane"), k = B("n-tabs");
      return T(), E("div", null, [
        i(v(Le), {
          show: u.value,
          "onUpdate:show": g[8] || (g[8] = (C) => u.value = C),
          title: h.$t("dialogs.paragraph.name"),
          width: 480
        }, {
          action: c(() => [
            i(v(ne), {
              label: h.$t("common.cancel"),
              onClickButton: H,
              type: "standard"
            }, null, 8, ["label"]),
            i(v(ne), {
              label: h.$t("common.confirm"),
              onClickButton: M
            }, null, 8, ["label"])
          ]),
          default: c(() => [
            O("div", M0, [
              i(k, {
                class: "card-tabs",
                "default-value": "indent",
                size: "small",
                animated: "",
                "pane-wrapper-style": "margin: 0 -2px",
                "pane-style": "padding-left: 2px; padding-right: 2px; box-sizing: border-box",
                type: "line"
              }, {
                default: c(() => [
                  i(V, {
                    class: "tab-pane",
                    name: "indent",
                    tab: h.$t("dialogs.paragraph.indent.name")
                  }, {
                    default: c(() => [
                      i(L, {
                        "label-placement": "left",
                        size: "small"
                      }, {
                        default: c(() => [
                          i(_, { vertical: "" }, {
                            default: c(() => [
                              O("label", P0, W(h.$t("dialogs.paragraph.indent.common.name")), 1),
                              i(_, { horizontal: "" }, {
                                default: c(() => [
                                  i(I, {
                                    label: h.$t("dialogs.paragraph.indent.common.align")
                                  }, {
                                    default: c(() => [
                                      i(v(be), {
                                        size: "tiny",
                                        options: d.value,
                                        "model-value": y.alignment,
                                        width: 120,
                                        type: "font",
                                        valueIsNumber: !0,
                                        "onUpdate:modelValue": g[0] || (g[0] = (C) => y.alignment = C)
                                      }, null, 8, ["options", "model-value"])
                                    ]),
                                    _: 1
                                  }, 8, ["label"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          i(_, { vertical: "" }, {
                            default: c(() => [
                              O("label", H0, W(h.$t("dialogs.paragraph.indent.indent.name")), 1),
                              i(_, { horizontal: "" }, {
                                default: c(() => [
                                  i(I, {
                                    label: h.$t("dialogs.paragraph.indent.indent.before")
                                  }, {
                                    default: c(() => [
                                      i(Fe, {
                                        modelValue: y.indentBeforeText,
                                        "onUpdate:modelValue": g[1] || (g[1] = (C) => y.indentBeforeText = C),
                                        unit: h.$t("unit.cm"),
                                        width: 100,
                                        precision: 2,
                                        step: 0.1,
                                        max: 142.24,
                                        min: 0
                                      }, null, 8, ["modelValue", "unit"])
                                    ]),
                                    _: 1
                                  }, 8, ["label"]),
                                  i(I, {
                                    label: h.$t("dialogs.paragraph.indent.indent.special")
                                  }, {
                                    default: c(() => [
                                      i(v(be), {
                                        size: "tiny",
                                        options: f.value,
                                        "model-value": y.special,
                                        width: 80,
                                        type: "font",
                                        "onUpdate:modelValue": g[2] || (g[2] = (C) => y.special = String(C))
                                      }, null, 8, ["options", "model-value"])
                                    ]),
                                    _: 1
                                  }, 8, ["label"]),
                                  i(I, {
                                    label: h.$t("dialogs.paragraph.indent.indent.metric")
                                  }, {
                                    default: c(() => [
                                      i(Fe, {
                                        modelValue: y.by,
                                        "onUpdate:modelValue": g[3] || (g[3] = (C) => y.by = C),
                                        unit: h.$t("unit.cm"),
                                        width: 100,
                                        precision: 2,
                                        disabled: y.special === "none" || y.special === "",
                                        step: 0.1,
                                        min: 0,
                                        max: 142.24
                                      }, null, 8, ["modelValue", "unit", "disabled"])
                                    ]),
                                    _: 1
                                  }, 8, ["label"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          i(_, { vertical: "" }, {
                            default: c(() => [
                              O("label", k0, W(h.$t("dialogs.paragraph.indent.spacing.name")), 1),
                              i(_, { horizontal: "" }, {
                                default: c(() => [
                                  i(I, {
                                    label: h.$t("dialogs.paragraph.indent.spacing.paragraphBefore")
                                  }, {
                                    default: c(() => [
                                      i(Fe, {
                                        modelValue: y.spaceBefore,
                                        "onUpdate:modelValue": g[4] || (g[4] = (C) => y.spaceBefore = C),
                                        unit: h.$t("unit.pt"),
                                        width: 100,
                                        step: 6,
                                        min: 0,
                                        max: 1584,
                                        precision: 2
                                      }, null, 8, ["modelValue", "unit"])
                                    ]),
                                    _: 1
                                  }, 8, ["label"]),
                                  i(I, {
                                    label: h.$t("dialogs.paragraph.indent.spacing.lineSpacing")
                                  }, {
                                    default: c(() => [
                                      i(v(be), {
                                        size: "tiny",
                                        options: m.value,
                                        "model-value": y.lineSpace,
                                        width: 100,
                                        type: "font",
                                        maxHeight: 80,
                                        "onUpdate:modelValue": g[5] || (g[5] = (C) => y.lineSpace = String(C))
                                      }, null, 8, ["options", "model-value"])
                                    ]),
                                    _: 1
                                  }, 8, ["label"]),
                                  i(I, {
                                    label: h.$t("dialogs.paragraph.indent.spacing.metric")
                                  }, {
                                    default: c(() => [
                                      i(Fe, {
                                        modelValue: y.at,
                                        "onUpdate:modelValue": g[6] || (g[6] = (C) => y.at = C),
                                        unit: b.value,
                                        width: 100,
                                        step: 0.5,
                                        min: 0,
                                        max: y.lineSpace === "fixed" ? 1584 : 9.99,
                                        precision: 2,
                                        disabled: !/fixed|multiple/.test(y.lineSpace)
                                      }, null, 8, ["modelValue", "unit", "max", "disabled"])
                                    ]),
                                    _: 1
                                  }, 8, ["label"]),
                                  i(I, {
                                    label: h.$t("dialogs.paragraph.indent.spacing.paragraphAfter")
                                  }, {
                                    default: c(() => [
                                      i(Fe, {
                                        modelValue: y.spaceAfter,
                                        "onUpdate:modelValue": g[7] || (g[7] = (C) => y.spaceAfter = C),
                                        unit: h.$t("unit.pt"),
                                        width: 100,
                                        step: 6,
                                        min: 0,
                                        max: 1584,
                                        precision: 2
                                      }, null, 8, ["modelValue", "unit"])
                                    ]),
                                    _: 1
                                  }, 8, ["label"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["tab"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["show", "title"])
      ]);
    };
  }
}), L0 = /* @__PURE__ */ oe(z0, [["__scopeId", "data-v-f63cb6e4"]]), N0 = { class: "custom-panel" }, T0 = { key: 0 }, V0 = { style: { position: "relative", "margin-left": "15px" } }, C0 = { key: 1 }, R0 = /* @__PURE__ */ Y({
  __name: "LinkSettingDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t }) {
    const { t: l } = Me(), n = re(), r = ie(Ae), A = Re(e, "modelValue"), o = F(() => {
      var g;
      let h = ((g = n == null ? void 0 : n.getters) == null ? void 0 : g["file/pageCount"]) || 1;
      return Array.from({ length: h }).map((I, _) => ({
        label: `${_ + 1}`,
        value: _ + 1
      }));
    }), u = {
      linkType: Pe.INTERNAL,
      targetSlide: "nextslide",
      slideNumber: 1,
      show: "",
      screenHintInfo: "",
      url: ""
    }, d = he({ ...u }), f = F(() => {
      let h = (n == null ? void 0 : n.getters["command/getVal"](a.InsertLink)) || {};
      return Object.assign(d, h), h;
    });
    G(f, (h) => {
      h && Object.assign(d, h);
    });
    const m = he({}), s = [
      {
        label: l("dialogs.insertLink.internal.name"),
        key: Pe.INTERNAL,
        value: Pe.INTERNAL,
        style: {
          fontSize: "12px"
        }
      },
      {
        label: l("dialogs.insertLink.external.name"),
        key: Pe.EXTERNAL,
        value: Pe.EXTERNAL,
        style: {
          fontSize: "12px"
        }
      }
    ], y = he([
      {
        label: l("dialogs.insertLink.internal.nextSlide"),
        value: "nextslide"
      },
      {
        label: l("dialogs.insertLink.internal.previousSlide"),
        value: "previousslide"
      },
      {
        label: l("dialogs.insertLink.internal.firstSlide"),
        value: "firstslide"
      },
      {
        label: l("dialogs.insertLink.internal.lastSlide"),
        value: "lastslide"
      },
      {
        label: l("dialogs.insertLink.internal.toSlide"),
        value: "toslide"
      }
    ]);
    function b() {
      A.value = !0;
    }
    function x() {
      A.value = !1;
      let h = w();
      r.run(a.InsertLink, { value: h });
    }
    function M() {
      Object.assign(d, u), r.run(a.InsertLink, { value: null }), A.value = !1;
    }
    function w() {
      if (d.linkType == Pe.INTERNAL) {
        let h = {
          linkType: Pe.INTERNAL,
          targetSlide: d.targetSlide,
          show: d.show,
          screenHintInfo: d.screenHintInfo
        };
        return d.targetSlide == "toslide" && (h.slideNumber = d.slideNumber), h;
      } else
        return {
          linkType: Pe.EXTERNAL,
          url: d.url,
          show: d.show,
          screenHintInfo: d.screenHintInfo
        };
    }
    function H() {
      A.value = !1;
    }
    return t({
      openPopover: b
    }), (h, g) => {
      const I = B("n-select"), _ = B("n-form-item"), L = B("n-radio"), V = B("n-space"), k = B("n-radio-group"), C = B("n-input"), Z = B("n-form");
      return T(), E("div", null, [
        i(v(Le), {
          show: A.value,
          "onUpdate:show": g[8] || (g[8] = (P) => A.value = P),
          title: h.$t("dialogs.insertLink.title"),
          width: 394
        }, {
          action: c(() => [
            i(v(ne), {
              label: h.$t("dialogs.insertLink.deleteLink"),
              onClickButton: M,
              type: "accent"
            }, null, 8, ["label"]),
            i(v(ne), {
              label: h.$t("common.cancel"),
              onClickButton: H,
              type: "standard"
            }, null, 8, ["label"]),
            i(v(ne), {
              label: h.$t("common.confirm"),
              onClickButton: x
            }, null, 8, ["label"])
          ]),
          default: c(() => [
            O("div", N0, [
              i(Z, {
                ref: "formRef",
                model: d,
                rules: m,
                "label-placement": "top",
                style: { maxWidth: "394px" }
              }, {
                default: c(() => [
                  i(_, null, {
                    default: c(() => [
                      O("span", null, W(h.$t("dialogs.insertLink.linkType")), 1),
                      i(I, {
                        value: d.linkType,
                        "onUpdate:value": g[0] || (g[0] = (P) => d.linkType = P),
                        options: s,
                        size: "tiny",
                        style: { width: "280px", "margin-left": "10px" }
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }),
                  d.linkType == v(Pe).INTERNAL ? (T(), E("div", T0, [
                    O("div", V0, [
                      i(k, {
                        value: d.targetSlide,
                        "onUpdate:value": g[1] || (g[1] = (P) => d.targetSlide = P),
                        name: "radiogroup"
                      }, {
                        default: c(() => [
                          i(V, { vertical: "" }, {
                            default: c(() => [
                              (T(!0), E(fe, null, Se(y, (P, S) => (T(), K(L, {
                                key: P.value,
                                value: P.value,
                                size: "small",
                                style: { "font-size": "12px" }
                              }, {
                                default: c(() => [
                                  $(W(P.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]))), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["value"]),
                      i(I, {
                        value: d.slideNumber,
                        "onUpdate:value": g[2] || (g[2] = (P) => d.slideNumber = P),
                        options: o.value,
                        size: "tiny",
                        style: { position: "absolute", bottom: "0px", left: "80px", width: "60px" },
                        disabled: d.targetSlide != "toslide"
                      }, null, 8, ["value", "options", "disabled"])
                    ]),
                    i(_, {
                      label: h.$t("dialogs.insertLink.internal.show"),
                      style: { "margin-top": "10px" }
                    }, {
                      default: c(() => [
                        i(C, {
                          value: d.show,
                          "onUpdate:value": g[3] || (g[3] = (P) => d.show = P),
                          type: "text",
                          size: "tiny"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    i(_, {
                      label: h.$t("dialogs.insertLink.internal.screenHintInfo"),
                      style: { "margin-top": "10px" }
                    }, {
                      default: c(() => [
                        i(C, {
                          value: d.screenHintInfo,
                          "onUpdate:value": g[4] || (g[4] = (P) => d.screenHintInfo = P),
                          type: "text",
                          size: "tiny"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ])) : d.linkType == v(Pe).EXTERNAL ? (T(), E("div", C0, [
                    i(_, null, {
                      default: c(() => [
                        O("span", null, W(h.$t("dialogs.insertLink.external.url")), 1),
                        i(C, {
                          value: d.url,
                          "onUpdate:value": g[5] || (g[5] = (P) => d.url = P),
                          type: "text",
                          size: "tiny",
                          style: { width: "280px", "margin-left": "17px" }
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    i(_, {
                      label: h.$t("dialogs.insertLink.external.show"),
                      style: { "margin-top": "10px" }
                    }, {
                      default: c(() => [
                        i(C, {
                          value: d.show,
                          "onUpdate:value": g[6] || (g[6] = (P) => d.show = P),
                          type: "text",
                          size: "tiny"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    i(_, {
                      label: h.$t("dialogs.insertLink.external.screenHintInfo"),
                      style: { "margin-top": "10px" }
                    }, {
                      default: c(() => [
                        i(C, {
                          value: d.screenHintInfo,
                          "onUpdate:value": g[7] || (g[7] = (P) => d.screenHintInfo = P),
                          type: "text",
                          size: "tiny"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ])) : se("", !0)
                ]),
                _: 1
              }, 8, ["model", "rules"])
            ])
          ]),
          _: 1
        }, 8, ["show", "title"])
      ]);
    };
  }
}), Z0 = /* @__PURE__ */ oe(R0, [["__scopeId", "data-v-4baa2897"]]), D0 = ["onMousedown"], _0 = /* @__PURE__ */ Y({
  __name: "EditableSelect",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    width: {},
    menuWidth: { default: 0 },
    validateInput: {},
    type: { default: "" },
    size: { default: "medium" },
    maxHeight: {},
    valueIsNumber: { type: Boolean, default: !1 },
    minWidth: {},
    textAlign: { default: "left" },
    activeBgColor: {},
    activeTextColor: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const l = e, n = t, r = N(!1), A = N(""), o = N(null), u = N(null), d = {
      Input: {
        // default
        border: "1px solid var(--button-border)",
        borderRadiusMedium: "4px",
        heightMedium: "24px",
        fontSizeMedium: "12px",
        color: "var(--input-bg)",
        // 背景色
        textColor: "var(--button-text-standard)",
        iconColor: "var(--icon-secondary)",
        iconColorPressed: "var(--icon-secondary)",
        // hover
        borderHover: "1px solid var(--split-view-border)",
        iconColorHover: "var(--icon-secondary)",
        // focus
        borderFocus: "1px solid var(--accent-color-blue)",
        boxShadowFocus: "transparent",
        // disabled
        borderDisabled: "1px solid var(--disable-button-border)",
        textColorDisabled: "var(--disable-button-text)",
        iconColorDisabled: "var(--icon-disabled)"
      },
      Scrollbar: {
        scrollbarColor: "var(--active-bg)"
      }
    }, f = N("default"), m = N(void 0), s = F(() => f.value == "focus" || M.value == !0 ? {
      backgroundColor: "var(--disable-button-border)"
    } : {
      backgroundColor: "transparent"
    });
    G(
      () => l.modelValue,
      (k) => {
        k == null || k == null ? A.value = "" : (m.value = l.options.find((C) => l.valueIsNumber ? C.value == k || C.keys && C.keys.includes(k) : C.value == String(k) || C.keys && C.keys.includes(String(k))), A.value = m.value ? m.value.label : String(k));
      },
      { immediate: !0 }
    ), G(
      () => l.options,
      (k, C) => {
        C.length == 0 && setTimeout(() => {
          o && o.value && u.value && o.value.scrollIntoView({ block: "nearest" });
        }, 100);
      }
    );
    const y = F(() => ({
      width: l.width ? typeof l.width == "number" ? `${l.width}px` : l.width : "auto"
    })), b = N(null), x = N(null), M = F(() => l.options.length === 0 ? !1 : r.value);
    function w() {
      var k;
      l.disabled || (r.value ? (r.value = !1, (k = x.value) == null || k.blur()) : (r.value = !0, g()));
    }
    function H(k) {
      var C;
      A.value = k.label, m.value = k, I(), r.value = !1, (C = x.value) == null || C.blur();
    }
    function h(k) {
      var Z;
      const C = k.relatedTarget;
      (Z = b.value) != null && Z.contains(C) || (r.value = !1);
    }
    function g() {
      Qe(() => {
        var C, Z, P;
        (C = x.value) == null || C.focus();
        const k = (Z = x.value) == null ? void 0 : Z.inputElRef;
        (P = k == null ? void 0 : k.select) == null || P.call(k), o && o.value && u.value && o.value.scrollIntoView({ block: "nearest" });
      });
    }
    function I() {
      var k, C;
      l.validateInput && !l.validateInput(A.value) || (n("update:modelValue", ((k = m.value) == null ? void 0 : k.value) || ""), n("change", ((C = m.value) == null ? void 0 : C.value) || ""));
    }
    function _(k) {
      if (l.type !== "font" && l.menuWidth > 0)
        return {
          width: l.menuWidth + "px"
        };
      if (l.type !== "font") return {};
      let C = {
        fontFamily: V(k.value),
        lineHeight: "20px",
        fontWeight: "normal",
        textAlign: l.textAlign
      };
      return l.minWidth ? C.width = l.minWidth + "px" : l.width && (C.width = l.width + "px"), l.textAlign === "left" && (C.paddingLeft = "5px"), l.textAlign === "right" && (C.paddingRight = "5px"), C;
    }
    function L(k) {
      var Z, P;
      let C = {};
      return l.activeBgColor && k.value === ((Z = m.value) == null ? void 0 : Z.value) && (C.backgroundColor = l.activeBgColor), l.activeTextColor && k.value === ((P = m.value) == null ? void 0 : P.value) && (C.color = l.activeTextColor), C;
    }
    function V(k) {
      return `"${k}", "Segoe UI", "Microsoft YaHei", Helvetica, Arial, sans-serif`;
    }
    return (k, C) => {
      const Z = B("n-icon"), P = B("n-input"), S = B("n-ellipsis"), X = B("n-config-provider");
      return T(), E("div", null, [
        i(X, { "theme-overrides": d }, {
          default: c(() => [
            i(v(pl), {
              show: M.value,
              trigger: "manual",
              placement: "bottom-start",
              "show-arrow": !1,
              to: !1,
              style: { "max-width": "200px" }
            }, {
              trigger: c(() => [
                O("div", {
                  ref_key: "rootRef",
                  ref: b,
                  style: ue(y.value),
                  onFocusout: h,
                  onFocusin: g
                }, [
                  i(P, {
                    ref_key: "inputRef",
                    ref: x,
                    value: A.value,
                    "onUpdate:value": C[0] || (C[0] = (q) => A.value = q),
                    placeholder: e.placeholder,
                    disabled: e.disabled,
                    size: e.size,
                    onKeydown: me(Oe(I, ["prevent"]), ["enter"]),
                    onFocus: C[1] || (C[1] = (q) => f.value = "focus"),
                    onBlur: C[2] || (C[2] = (q) => f.value = "default")
                  }, {
                    suffix: c(() => [
                      i(Z, {
                        class: "arrow",
                        onMousedown: Oe(w, ["prevent"]),
                        size: "12",
                        style: ue(s.value)
                      }, {
                        default: c(() => [
                          St(i(v(Xt), null, null, 512), [
                            [Mt, M.value]
                          ]),
                          St(i(v(It), null, null, 512), [
                            [Mt, !M.value]
                          ])
                        ]),
                        _: 1
                      }, 8, ["style"])
                    ]),
                    _: 1
                  }, 8, ["value", "placeholder", "disabled", "size", "onKeydown"])
                ], 36)
              ]),
              default: c(() => [
                i(v(ut), {
                  ref_key: "scrollbarRef",
                  ref: u,
                  "max-height": e.maxHeight
                }, {
                  default: c(() => [
                    (T(!0), E(fe, null, Se(e.options, (q) => {
                      var le;
                      return T(), E("div", {
                        key: q.value,
                        class: zt(["global-basic-display-text global-menu-list-item item", { active: q.value === ((le = m.value) == null ? void 0 : le.value) }]),
                        style: ue(L(q)),
                        onMousedown: Oe((j) => H(q), ["prevent"]),
                        ref_for: !0,
                        ref: (j) => {
                          q.label === A.value && (o.value = j);
                        }
                      }, [
                        i(S, {
                          style: ue(_(q))
                        }, {
                          default: c(() => [
                            $(W(q.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["style"])
                      ], 46, D0);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["max-height"])
              ]),
              _: 1
            }, 8, ["show"])
          ]),
          _: 1
        })
      ]);
    };
  }
}), bt = /* @__PURE__ */ oe(_0, [["__scopeId", "data-v-9ecf97e4"]]), B0 = { class: "custom-panel" }, F0 = { class: "content" }, O0 = /* @__PURE__ */ Y({
  __name: "WarningDialog",
  setup(e, { expose: t }) {
    const l = N(!1), n = N(""), r = N(""), A = N("");
    let o;
    function u(f, { title: m, warningContent: s, confirmName: y }) {
      o = f, n.value = m, r.value = s, A.value = y, l.value = !0;
    }
    function d() {
      o && o(), l.value = !1;
    }
    return t({
      openPopover: u
    }), (f, m) => (T(), E("div", null, [
      i(v(Le), {
        show: l.value,
        "onUpdate:show": m[0] || (m[0] = (s) => l.value = s),
        title: n.value,
        width: 350
      }, {
        action: c(() => [
          i(v(ne), {
            label: A.value,
            onClickButton: d
          }, null, 8, ["label"])
        ]),
        default: c(() => [
          O("div", B0, [
            O("div", F0, W(r.value), 1)
          ])
        ]),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}), I0 = /* @__PURE__ */ oe(O0, [["__scopeId", "data-v-18137746"]]), X0 = { class: "custom-panel" }, E0 = { class: "title" }, j0 = { style: { "font-size": "12px" } }, W0 = { class: "title" }, U0 = ["width", "height"], q0 = { class: "title" }, G0 = { style: { "font-size": "12px" } }, Q0 = { class: "title" }, Y0 = ["width", "height"], wt = 260, xt = 345, K0 = /* @__PURE__ */ Y({
  __name: "HeaderFooterDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t }) {
    const l = re(), n = ie(Ae), r = N(null), A = N(null), o = N(null), { t: u } = Me(), d = F(() => l.getters["command/getVal"](a.GetDateTimeList)), f = F(() => l.getters["command/getVal"](a.GetSlideLayoutData)), m = F(() => l.getters["command/getVal"](a.GetNotesHandoutData)), s = F(() => l.getters["command/getVal"](a.SetHeaderFooter)), y = he([
      {
        label: u("dialogs.headerFooter.cn"),
        value: "zh-CN"
      },
      {
        label: u("dialogs.headerFooter.en"),
        value: "en"
      }
    ]), b = Re(e, "modelValue"), x = N(""), M = N(""), w = N(1), H = F(() => l.getters["command/getVal"](a.GetPixelRatio)), h = he({
      dt: !1,
      update: 0,
      date: "",
      language: "",
      dateFormat: "",
      sldNum: !1,
      ftr: !1,
      footerText: "",
      blank: !1
    }), g = he({
      dt: !1,
      update: 0,
      date: "",
      language: "",
      dateFormat: "",
      hdr: !1,
      headerText: "",
      sldNum: !1,
      ftr: !1,
      footerText: ""
    });
    window.addEventListener("resize", () => {
      n.run(a.GetPixelRatio, void 0);
    }), G(() => s.value, (P) => {
      Object.assign(h, P.slide), Object.assign(g, P.notesHandout), x.value = P.slideShow ? "slide" : "notesHandout", M.value = P.slide.masterLanguage, I();
    }), G(() => h.language, (P) => {
      n.run(a.GetDateTimeList, { value: P });
    }), G(() => g.language, (P) => {
      n.run(a.GetDateTimeList, { value: P });
    }), G(() => [h.sldNum, h.ftr, h.dt], (P) => {
      r.value && f.value && _(r.value.getContext("2d"), f.value, h);
    }), G(() => [g.hdr, g.ftr, g.dt, g.sldNum], (P) => {
      A.value && m.value && _(A.value.getContext("2d"), m.value, g);
    }), G(() => d.value, (P) => {
      P.length !== 0 && (x.value === "slide" ? (h.date || (h.date = P[0].value), h.dateFormat || (h.dateFormat = P[0].label)) : x.value === "notesHandout" && (g.date || (g.date = P[0].value), g.dateFormat || (g.dateFormat = P[0].label)), w.value++);
    }), G(() => x.value, (P) => {
      I();
    }), G(() => H.value, (P) => {
      r.value && f.value ? _(r.value.getContext("2d"), f.value, h) : A.value && m.value && _(A.value.getContext("2d"), m.value, g);
    });
    function I() {
      x.value === "slide" ? (d.value.length > 0 && (h.date || (h.date = d.value[0].value), h.dateFormat || (h.dateFormat = d.value[0].label)), h.language || (h.language = y[0].value), Qe(() => {
        r.value && f.value && _(r.value.getContext("2d"), f.value, h);
      })) : x.value === "notesHandout" && (d.value.length > 0 && (g.date || (g.date = d.value[0].value), g.dateFormat || (g.dateFormat = d.value[0].label)), g.language || (g.language = y[0].value), Qe(() => {
        A.value && m.value && _(A.value.getContext("2d"), m.value, g);
      }));
    }
    function _(P, S, X) {
      let q = wt / S.width * H.value, le = xt / S.height * H.value;
      P.clearRect(0, 0, wt * H.value, xt * H.value), S.list.forEach((j) => {
        P.save(), P.lineWidth = 1, [dt.PHTYPE_SLDNUM, dt.PHTYPE_FTR, dt.PHTYPE_DT, dt.PHTYPE_HDR].includes(j.type) && (X[j.type] ? P.lineWidth = 2 : P.setLineDash([4, 2])), P.translate(j.x * q, j.y * le), P.strokeRect(0, 0, j.width * q, j.height * le), P.restore();
      });
    }
    function L() {
      b.value = !0, n.run(a.SetHeaderFooter, { type: Q.GET, value: { all: !1, value: {} } }), x.value = "slide", n.run(a.GetPixelRatio, void 0), n.run(a.GetSlideLayoutData, void 0), n.run(a.GetNotesHandoutData, void 0), Qe(() => {
        r.value && _(r.value.getContext("2d"), f.value, h);
      });
    }
    function V() {
      var S;
      if (h.language !== M.value) {
        (S = o.value) == null || S.openPopover(() => {
        }, { title: u("common.warning"), warningContent: u("dialogs.headerFooter.warningText"), confirmName: u("common.confirm") });
        return;
      }
      let P = k();
      x.value = "", b.value = !1, n.run(a.SetHeaderFooter, { type: Q.SET, value: { all: !1, value: P } });
    }
    function k(P = !1) {
      return {
        slide: {
          dt: h.dt,
          update: h.update,
          date: h.date,
          language: h.language,
          dateFormat: h.dateFormat,
          sldNum: h.sldNum,
          ftr: h.ftr,
          footerText: h.footerText,
          blank: h.blank
        },
        notesHandout: {
          dt: g.dt,
          update: g.update,
          date: g.date,
          language: g.language,
          dateFormat: g.dateFormat,
          hdr: g.hdr,
          headerText: g.headerText,
          sldNum: g.sldNum,
          ftr: g.ftr,
          footerText: g.footerText
        },
        slideShow: x.value === "slide"
      };
    }
    function C() {
      b.value = !1;
      let P = k(!0);
      x.value = "", n.run(a.SetHeaderFooter, { type: Q.SET, value: { all: !0, value: P } });
    }
    function Z() {
      b.value = !1, x.value = "";
    }
    return t({
      openPopover: L
    }), (P, S) => {
      const X = B("n-checkbox"), q = B("n-radio"), le = B("n-input"), j = B("n-space"), Ne = B("n-radio-group"), nt = B("n-form"), it = B("n-tab-pane"), ht = B("n-tabs");
      return T(), E("div", null, [
        i(v(Le), {
          show: b.value,
          "onUpdate:show": S[20] || (S[20] = (U) => b.value = U),
          title: P.$t("dialogs.headerFooter.name"),
          width: 600
        }, {
          action: c(() => [
            i(v(ne), {
              label: P.$t("common.allApply"),
              onClickButton: C,
              type: "primary"
            }, null, 8, ["label"]),
            x.value === "slide" ? (T(), K(v(ne), {
              key: 0,
              label: P.$t("common.apply"),
              onClickButton: V,
              type: "standard"
            }, null, 8, ["label"])) : se("", !0),
            i(v(ne), {
              label: P.$t("common.cancel"),
              onClickButton: Z,
              type: "standard"
            }, null, 8, ["label"])
          ]),
          default: c(() => [
            O("div", X0, [
              i(ht, {
                type: "card",
                class: "card-tabs",
                value: x.value,
                "onUpdate:value": S[19] || (S[19] = (U) => x.value = U),
                size: "small",
                "pane-wrapper-style": "margin: 0 0px",
                "pane-style": "padding-left: 2px; padding-right: 2px; box-sizing: border-box"
              }, {
                default: c(() => [
                  i(it, {
                    class: "tab-pane",
                    name: "slide",
                    tab: P.$t("dialogs.headerFooter.slide.name")
                  }, {
                    default: c(() => [
                      i(j, {
                        horizontal: "",
                        style: { position: "relative", height: "100%" }
                      }, {
                        default: c(() => [
                          i(nt, {
                            "label-placement": "left",
                            size: "small",
                            model: h,
                            class: "form"
                          }, {
                            default: c(() => [
                              O("div", E0, W(P.$t("dialogs.headerFooter.slide.title")), 1),
                              i(j, { vertical: "" }, {
                                default: c(() => [
                                  i(X, {
                                    checked: h.dt,
                                    "onUpdate:checked": S[0] || (S[0] = (U) => h.dt = U),
                                    indeterminate: h.dt === null
                                  }, {
                                    default: c(() => [
                                      $(W(P.$t("dialogs.headerFooter.slide.date")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["checked", "indeterminate"]),
                                  i(Ne, {
                                    value: h.update,
                                    "onUpdate:value": S[4] || (S[4] = (U) => h.update = U),
                                    name: "radiogroup",
                                    disabled: h.dt === !1,
                                    class: "radio-group"
                                  }, {
                                    default: c(() => [
                                      i(j, { vertical: "" }, {
                                        default: c(() => [
                                          i(q, { value: 0 }, {
                                            default: c(() => [
                                              $(W(P.$t("dialogs.headerFooter.slide.autoUpdate")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          (T(), K(bt, {
                                            size: "tiny",
                                            options: d.value,
                                            style: { "margin-left": "5px" },
                                            "model-value": h.date,
                                            textAlign: "center",
                                            "min-width": 130,
                                            type: "font",
                                            disabled: h.update !== 0 || !h.dt,
                                            "onUpdate:modelValue": S[1] || (S[1] = (U) => h.date = String(U)),
                                            "max-height": 200,
                                            key: w.value.toString()
                                          }, null, 8, ["options", "model-value", "disabled"])),
                                          O("div", j0, W(P.$t("dialogs.headerFooter.slide.language")), 1),
                                          i(bt, {
                                            size: "tiny",
                                            options: y,
                                            "model-value": h.language,
                                            textAlign: "center",
                                            "min-width": 130,
                                            type: "font",
                                            style: { "margin-left": "5px" },
                                            disabled: h.update !== 0 || !h.dt,
                                            "onUpdate:modelValue": S[2] || (S[2] = (U) => h.language = String(U)),
                                            "max-height": 200,
                                            activeBgColor: "var(--active-bg)",
                                            activeTextColor: "#000000"
                                          }, null, 8, ["options", "model-value", "disabled"]),
                                          i(q, { value: 1 }, {
                                            default: c(() => [
                                              $(W(P.$t("dialogs.headerFooter.slide.fixed")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          i(le, {
                                            type: "text",
                                            size: "tiny",
                                            placeholder: "请输入日期格式",
                                            value: h.dateFormat,
                                            "onUpdate:value": S[3] || (S[3] = (U) => h.dateFormat = U),
                                            style: { "margin-left": "5px" },
                                            "on-update:value": (U) => h.dateFormat = U,
                                            disabled: h.update !== 1
                                          }, null, 8, ["value", "on-update:value", "disabled"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["value", "disabled"]),
                                  i(X, {
                                    checked: h.sldNum,
                                    "onUpdate:checked": S[5] || (S[5] = (U) => h.sldNum = U),
                                    indeterminate: h.sldNum === null
                                  }, {
                                    default: c(() => [
                                      $(W(P.$t("dialogs.headerFooter.slide.slideNumber")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["checked", "indeterminate"]),
                                  i(X, {
                                    checked: h.ftr,
                                    "onUpdate:checked": S[6] || (S[6] = (U) => h.ftr = U),
                                    indeterminate: h.ftr === null
                                  }, {
                                    default: c(() => [
                                      $(W(P.$t("dialogs.headerFooter.slide.footer")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["checked", "indeterminate"]),
                                  i(le, {
                                    type: "text",
                                    size: "tiny",
                                    placeholder: "请输入页脚内容",
                                    value: h.footerText,
                                    "onUpdate:value": S[7] || (S[7] = (U) => h.footerText = U),
                                    style: { "margin-left": "5px", width: "186px" },
                                    "on-update:value": (U) => h.footerText = U,
                                    disabled: !h.ftr
                                  }, null, 8, ["value", "on-update:value", "disabled"])
                                ]),
                                _: 1
                              }),
                              i(X, {
                                checked: h.blank,
                                "onUpdate:checked": S[8] || (S[8] = (U) => h.blank = U),
                                class: "blank"
                              }, {
                                default: c(() => [
                                  $(W(P.$t("dialogs.headerFooter.slide.blank")), 1)
                                ]),
                                _: 1
                              }, 8, ["checked"])
                            ]),
                            _: 1
                          }, 8, ["model"]),
                          i(j, { vertical: "" }, {
                            default: c(() => [
                              O("div", W0, W(P.$t("dialogs.headerFooter.preview")), 1),
                              O("canvas", {
                                ref_key: "slidePreview",
                                ref: r,
                                class: "preview",
                                width: wt * H.value,
                                height: xt * H.value
                              }, null, 8, U0)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["tab"]),
                  i(it, {
                    class: "tab-pane",
                    name: "notesHandout",
                    tab: P.$t("dialogs.headerFooter.notesHandout.name")
                  }, {
                    default: c(() => [
                      i(j, {
                        horizontal: "",
                        style: { position: "relative", height: "100%" }
                      }, {
                        default: c(() => [
                          i(nt, {
                            "label-placement": "left",
                            size: "small",
                            model: g,
                            class: "form"
                          }, {
                            default: c(() => [
                              O("div", q0, W(P.$t("dialogs.headerFooter.notesHandout.title")), 1),
                              i(j, { vertical: "" }, {
                                default: c(() => [
                                  i(X, {
                                    checked: g.dt,
                                    "onUpdate:checked": S[9] || (S[9] = (U) => g.dt = U),
                                    indeterminate: g.dt === null
                                  }, {
                                    default: c(() => [
                                      $(W(P.$t("dialogs.headerFooter.notesHandout.date")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["checked", "indeterminate"]),
                                  i(Ne, {
                                    value: g.update,
                                    "onUpdate:value": S[13] || (S[13] = (U) => g.update = U),
                                    name: "radiogroup",
                                    disabled: g.dt === !1,
                                    class: "radio-group"
                                  }, {
                                    default: c(() => [
                                      i(j, { vertical: "" }, {
                                        default: c(() => [
                                          i(q, { value: 0 }, {
                                            default: c(() => [
                                              $(W(P.$t("dialogs.headerFooter.notesHandout.autoUpdate")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          (T(), K(bt, {
                                            size: "tiny",
                                            options: d.value,
                                            style: { "margin-left": "5px" },
                                            "model-value": g.date,
                                            textAlign: "center",
                                            "min-width": 130,
                                            type: "font",
                                            disabled: g.update !== 0 || !g.dt,
                                            "onUpdate:modelValue": S[10] || (S[10] = (U) => g.date = String(U)),
                                            "max-height": 200,
                                            activeBgColor: "var(--active-bg)",
                                            activeTextColor: "#000000",
                                            key: w.value.toString()
                                          }, null, 8, ["options", "model-value", "disabled"])),
                                          O("div", G0, W(P.$t("dialogs.headerFooter.notesHandout.language")), 1),
                                          i(bt, {
                                            size: "tiny",
                                            options: y,
                                            "model-value": g.language,
                                            textAlign: "center",
                                            "min-width": 130,
                                            type: "font",
                                            style: { "margin-left": "5px" },
                                            disabled: g.update !== 0 || !g.dt,
                                            "onUpdate:modelValue": S[11] || (S[11] = (U) => g.language = String(U)),
                                            "max-height": 200,
                                            activeBgColor: "var(--active-bg)",
                                            activeTextColor: "#000000"
                                          }, null, 8, ["options", "model-value", "disabled"]),
                                          i(q, { value: 1 }, {
                                            default: c(() => [
                                              $(W(P.$t("dialogs.headerFooter.notesHandout.fixed")), 1)
                                            ]),
                                            _: 1
                                          }),
                                          i(le, {
                                            type: "text",
                                            size: "tiny",
                                            placeholder: "请输入日期格式",
                                            value: g.dateFormat,
                                            "onUpdate:value": S[12] || (S[12] = (U) => g.dateFormat = U),
                                            style: { "margin-left": "5px" },
                                            "on-update:value": (U) => g.dateFormat = U,
                                            disabled: g.update !== 1
                                          }, null, 8, ["value", "on-update:value", "disabled"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["value", "disabled"]),
                                  i(X, {
                                    checked: g.hdr,
                                    "onUpdate:checked": S[14] || (S[14] = (U) => g.hdr = U),
                                    indeterminate: g.hdr === null
                                  }, {
                                    default: c(() => [
                                      $(W(P.$t("dialogs.headerFooter.notesHandout.header")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["checked", "indeterminate"]),
                                  i(le, {
                                    type: "text",
                                    size: "tiny",
                                    placeholder: "请输入页眉内容",
                                    value: g.headerText,
                                    "onUpdate:value": S[15] || (S[15] = (U) => g.headerText = U),
                                    style: { "margin-left": "5px", width: "186px" },
                                    "on-update:value": (U) => g.headerText = U,
                                    disabled: !g.hdr
                                  }, null, 8, ["value", "on-update:value", "disabled"]),
                                  i(X, {
                                    checked: g.sldNum,
                                    "onUpdate:checked": S[16] || (S[16] = (U) => g.sldNum = U),
                                    indeterminate: g.sldNum === null
                                  }, {
                                    default: c(() => [
                                      $(W(P.$t("dialogs.headerFooter.notesHandout.pagination")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["checked", "indeterminate"]),
                                  i(X, {
                                    checked: g.ftr,
                                    "onUpdate:checked": S[17] || (S[17] = (U) => g.ftr = U),
                                    indeterminate: g.ftr === null
                                  }, {
                                    default: c(() => [
                                      $(W(P.$t("dialogs.headerFooter.notesHandout.footer")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["checked", "indeterminate"]),
                                  i(le, {
                                    type: "text",
                                    size: "tiny",
                                    placeholder: "请输入页脚内容",
                                    value: g.footerText,
                                    "onUpdate:value": S[18] || (S[18] = (U) => g.footerText = U),
                                    style: { "margin-left": "5px", width: "186px" },
                                    "on-update:value": (U) => g.footerText = U,
                                    disabled: !g.ftr
                                  }, null, 8, ["value", "on-update:value", "disabled"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["model"]),
                          i(j, { vertical: "" }, {
                            default: c(() => [
                              O("div", Q0, W(P.$t("dialogs.headerFooter.preview")), 1),
                              O("canvas", {
                                ref_key: "notesHandoutPreview",
                                ref: A,
                                class: "preview",
                                width: wt * H.value,
                                height: xt * H.value
                              }, null, 8, Y0)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["tab"])
                ]),
                _: 1
              }, 8, ["value"])
            ])
          ]),
          _: 1
        }, 8, ["show", "title"]),
        i(I0, {
          ref_key: "warningDialog",
          ref: o
        }, null, 512)
      ]);
    };
  }
}), J0 = /* @__PURE__ */ oe(K0, [["__scopeId", "data-v-15a850bd"]]), $0 = { class: "custom-panel" }, eA = { class: "title" }, tA = /* @__PURE__ */ Y({
  __name: "LayoutPlaceHolderDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t }) {
    const l = re(), n = ie(Ae), { t: r } = Me(), A = F(() => l == null ? void 0 : l.getters["command/getVal"](a.SlideGetPlaceholder)), o = N(ve.NONE), u = F(() => f.value.filter((x) => !!(A.value & x.value)).map((x) => x.value)), d = Re(e, "modelValue"), f = N([
      { label: `${r("dialogs.laoutPlaceHolder.placeHolderTitle")}`, key: ve.TITLE, value: ve.TITLE },
      { label: `${r("dialogs.laoutPlaceHolder.placeHolderText")}`, key: ve.TEXT, value: ve.TEXT },
      { label: `${r("dialogs.laoutPlaceHolder.placeHolderDate")}`, key: ve.DATE, value: ve.DATE },
      { label: `${r("dialogs.laoutPlaceHolder.placeHolderSlideNumber")}`, key: ve.SLIDE_NUMBER, value: ve.SLIDE_NUMBER },
      { label: `${r("dialogs.laoutPlaceHolder.placeHolderFooter")}`, key: ve.FOOTER, value: ve.FOOTER }
    ]);
    function m() {
      d.value = !0, n.run(a.SlideGetPlaceholder, { value: 0 }), o.value = u.value.reduce((x, M) => x | M, ve.NONE);
    }
    function s(x) {
      o.value = x.reduce((M, w) => M | w, ve.NONE), l.commit("command/setState", { ui: { value: o.value }, cmd: a.SlideGetPlaceholder });
    }
    function y() {
      n.run(a.SlideMasterLayout, { value: o.value }), d.value = !1;
    }
    function b() {
      d.value = !1;
    }
    return t({
      openPopover: m
    }), (x, M) => {
      const w = B("n-checkbox"), H = B("n-checkbox-group"), h = B("n-space");
      return T(), E("div", null, [
        i(v(Le), {
          show: d.value,
          "onUpdate:show": M[0] || (M[0] = (g) => d.value = g),
          title: x.$t("dialogs.laoutPlaceHolder.title"),
          width: 200
        }, {
          action: c(() => [
            i(v(ne), {
              label: x.$t("common.cancel"),
              onClickButton: b,
              type: "standard"
            }, null, 8, ["label"]),
            i(v(ne), {
              label: x.$t("common.confirm"),
              onClickButton: y
            }, null, 8, ["label"])
          ]),
          default: c(() => [
            O("div", $0, [
              O("div", eA, W(x.$t("dialogs.laoutPlaceHolder.name")), 1),
              i(h, {
                vertical: "",
                style: { "margin-top": "10px" }
              }, {
                default: c(() => [
                  i(H, {
                    "onUpdate:value": s,
                    value: u.value
                  }, {
                    default: c(() => [
                      (T(!0), E(fe, null, Se(f.value, (g) => (T(), K(w, {
                        key: g.key,
                        value: g.value,
                        size: "small",
                        label: g.label,
                        style: { fontSize: "12px" }
                      }, null, 8, ["value", "label"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["show", "title"])
      ]);
    };
  }
}), lA = /* @__PURE__ */ oe(tA, [["__scopeId", "data-v-2a39c6bc"]]), aA = { class: "custom-panel" }, nA = /* @__PURE__ */ Y({
  __name: "MasterPreserveDialog",
  setup(e, { expose: t }) {
    const { t: l } = Me(), n = N(!1);
    let r;
    function A(d) {
      r = d, n.value = !0;
    }
    function o() {
      r && r(!0), n.value = !1;
    }
    function u() {
      r && r(!1), n.value = !1;
    }
    return t({
      openPopover: A
    }), (d, f) => (T(), E("div", null, [
      i(v(Le), {
        show: n.value,
        "onUpdate:show": f[0] || (f[0] = (m) => n.value = m),
        title: d.$t("dialogs.preserveMaster.name"),
        width: 350
      }, {
        action: c(() => [
          i(v(ne), {
            label: d.$t("common.confirm"),
            onClickButton: o
          }, null, 8, ["label"]),
          i(v(ne), {
            label: d.$t("common.cancel"),
            onClickButton: u,
            type: "standard"
          }, null, 8, ["label"])
        ]),
        default: c(() => [
          O("div", aA, [
            O("div", null, W(v(l)("dialogs.preserveMaster.content")), 1)
          ])
        ]),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}), iA = /* @__PURE__ */ oe(nA, [["__scopeId", "data-v-d77a2676"]]), rA = { class: "custom-panel" }, oA = /* @__PURE__ */ Y({
  __name: "RenameDialog",
  setup(e, { expose: t }) {
    const { t: l } = Me(), n = N(!1), r = N(""), A = N(null), o = N(""), u = N(""), d = N("");
    let f;
    G(() => n.value, (b) => {
      b && Promise.resolve().then(() => {
        var x;
        (x = A.value) == null || x.select();
      });
    });
    function m(b, { title: x, name: M, defaultValue: w, confirmName: H }) {
      f = b, o.value = x, u.value = M, r.value = w, d.value = H, n.value = !0;
    }
    function s() {
      f && f(r.value), n.value = !1;
    }
    function y() {
      n.value = !1;
    }
    return t({
      openPopover: m
    }), (b, x) => {
      const M = B("n-input");
      return T(), E("div", null, [
        i(v(Le), {
          show: n.value,
          "onUpdate:show": x[1] || (x[1] = (w) => n.value = w),
          title: o.value,
          width: 240
        }, {
          action: c(() => [
            i(v(ne), {
              label: d.value,
              onClickButton: s
            }, null, 8, ["label"]),
            i(v(ne), {
              label: b.$t("common.cancel"),
              onClickButton: y,
              type: "standard"
            }, null, 8, ["label"])
          ]),
          default: c(() => [
            O("div", rA, [
              O("div", null, W(u.value), 1),
              i(M, {
                value: r.value,
                "onUpdate:value": x[0] || (x[0] = (w) => r.value = w),
                size: "tiny",
                ref_key: "inputRef",
                ref: A
              }, null, 8, ["value"])
            ])
          ]),
          _: 1
        }, 8, ["show", "title"])
      ]);
    };
  }
}), AA = /* @__PURE__ */ oe(oA, [["__scopeId", "data-v-621681af"]]), sA = { class: "app-shell" }, dA = { class: "app-stage" }, pA = /* @__PURE__ */ Y({
  __name: "App",
  setup(e) {
    const t = re(), l = Ci(), n = N(null), r = N(null), A = N(null), o = N(!0), u = N(null), d = N(null), f = N(null), m = N(null), s = N(null), y = N(null), b = N(null), x = N(null), M = N(null), w = N(!1), H = N(null), h = ie(Lt, null), g = F(
      () => {
        var D;
        return ((D = h == null ? void 0 : h.uiOptions) == null ? void 0 : D.showTopBar) !== !1;
      }
    ), I = F(
      () => {
        var D;
        return ((D = h == null ? void 0 : h.uiOptions) == null ? void 0 : D.showBottomBar) !== !1;
      }
    ), _ = F(() => t.getters["panel/isOpen"]), L = F(() => t.getters["panel/width"]), V = F(() => t.state.file.isReady);
    G(V, (D) => {
      o.value = !D, D || (w.value = !1, H.value = null);
    });
    const k = F(() => t == null ? void 0 : t.state.file.hasError);
    G(k, (D) => {
      D && (o.value = !1);
    });
    const C = F(
      () => (t == null ? void 0 : t.getters["command/isRunning"](a.Export)) || (t == null ? void 0 : t.getters["command/isRunning"](a.ExportPDF))
    ), Z = (D) => {
      var Ee, je, We;
      let J = (Ee = D == null ? void 0 : D.detail) == null ? void 0 : Ee.resolve, rt = (je = D == null ? void 0 : D.detail) == null ? void 0 : je.reject;
      J && ((We = u == null ? void 0 : u.value) != null && We.openPopover) && u.value.openPopover(J, rt, !0);
    }, P = (D) => {
      var J;
      (J = u == null ? void 0 : u.value) == null || J.closePopover();
    }, S = () => {
      var D;
      (D = d == null ? void 0 : d.value) == null || D.openPopover();
    }, X = (D) => {
      var J;
      H.value = ((J = D == null ? void 0 : D.detail) == null ? void 0 : J.error) ?? (D == null ? void 0 : D.detail) ?? D, w.value = !0;
    }, q = (D) => {
      var Ee, je, We;
      let J = (Ee = D == null ? void 0 : D.detail) == null ? void 0 : Ee.resolve, rt = (je = D == null ? void 0 : D.detail) == null ? void 0 : je.reject;
      J && ((We = u == null ? void 0 : u.value) != null && We.openPopover) && u.value.openPopover(J, rt);
    }, le = (D) => {
      var J;
      (J = f.value) == null || J.openPopover(D.callback, D.options);
    }, j = (D) => {
      var J;
      (J = m.value) == null || J.openPopover(D.defaultValue);
    }, Ne = (D) => {
      var J;
      (J = s.value) == null || J.openPopover(D.defaultValue);
    }, nt = (D) => {
      var J;
      (J = y.value) == null || J.openPopover();
    }, it = (D) => {
      var J;
      (J = b.value) == null || J.openPopover();
    }, ht = (D) => {
      var J;
      (J = x.value) == null || J.openPopover();
    }, U = (D) => {
      var J;
      (J = M.value) == null || J.openPopover(D.callback);
    };
    _a(() => {
      const D = (h == null ? void 0 : h.eventTarget) ?? window;
      j1(), D.addEventListener("FilePassWordError", Z), D.addEventListener("FilePassWordOK", P), D.addEventListener("OpenDocumentFailed", S), D.addEventListener("LicenseVerifyError", X), D.addEventListener("AskFilePassword", q), D.addEventListener("Rename", le), D.addEventListener("FontSetting", j), D.addEventListener("ParagraphSetting", Ne), D.addEventListener("LinkSetting", nt), D.addEventListener("HeaderFooter", it), D.addEventListener("LayoutPlaceHolder", ht), D.addEventListener("MasterPreserve", U);
    }), dl(() => {
      const D = (h == null ? void 0 : h.eventTarget) ?? window;
      t.commit("file/clearError"), D.removeEventListener(
        "FilePassWordError",
        Z
      ), D.removeEventListener("FilePassWordOK", P), D.removeEventListener(
        "OpenDocumentFailed",
        S
      ), D.removeEventListener(
        "LicenseVerifyError",
        X
      ), D.removeEventListener(
        "AskFilePassword",
        q
      ), D.removeEventListener(
        "Rename",
        le
      ), D.removeEventListener("FontSetting", j), D.removeEventListener("ParagraphSetting", Ne), D.removeEventListener("LinkSetting", nt), D.removeEventListener("HeaderFooter", it), D.removeEventListener("LayoutPlaceHolder", ht), D.removeEventListener("MasterPreserve", U);
    }), Ft(() => {
      l.toolBarElm.value = n.value, l.editorElm.value = r.value, l.rightPanelElm.value = A.value;
    }), G(_, () => {
      Gt();
    }, { flush: "post" }), G(A, (D) => {
      l.rightPanelElm.value = D, Gt();
    });
    function Gt() {
      Qe(() => {
        typeof window > "u" || window.requestAnimationFrame(() => {
          window.dispatchEvent(new Event("resize"));
        });
      });
    }
    return (D, J) => {
      const rt = B("n-spin"), Ee = B("n-message-provider"), je = B("n-modal-provider"), We = B("n-config-provider");
      return T(), E("div", sA, [
        i(We, {
          class: "app-provider",
          locale: v(sr)(),
          "theme-overrides": v(dr)()
        }, {
          default: c(() => [
            i(je, null, {
              default: c(() => [
                i(Ee, null, {
                  default: c(() => [
                    i(v(Ba), {
                      ref_key: "dialogOpenFailedRef",
                      ref: d
                    }, null, 512),
                    i(v(Fa), {
                      ref_key: "dialogCypherRef",
                      ref: u
                    }, null, 512),
                    i(AA, {
                      ref_key: "renameDialogRef",
                      ref: f
                    }, null, 512),
                    i(S0, {
                      ref_key: "fontSettingDialogRef",
                      ref: m
                    }, null, 512),
                    i(L0, {
                      ref_key: "paragraphSettingDialogRef",
                      ref: s
                    }, null, 512),
                    i(Z0, {
                      ref_key: "linkSettingDialogRef",
                      ref: y
                    }, null, 512),
                    i(J0, {
                      ref_key: "headerFooterDialogRef",
                      ref: b
                    }, null, 512),
                    i(lA, {
                      ref_key: "layoutPlaceHolderDialogRef",
                      ref: x
                    }, null, 512),
                    i(iA, {
                      ref_key: "masterPreserveDialogRef",
                      ref: M
                    }, null, 512),
                    O("div", dA, [
                      i(rt, {
                        class: "app-spin",
                        show: o.value || C.value,
                        fullscreen: "",
                        style: {
                          backgroundColor: "rgba(255, 255, 255, 0.5)"
                        }
                      }, {
                        default: c(() => [
                          i(v(Oa), { id: "appContainer" }, {
                            top: c(() => [
                              g.value ? (T(), K(ji, {
                                key: 0,
                                ref_key: "toolbarRef",
                                ref: n
                              }, null, 512)) : se("", !0),
                              w.value ? (T(), K(v(Xa), {
                                key: 1,
                                error: H.value
                              }, null, 8, ["error"])) : se("", !0)
                            ]),
                            rightPanel: c(() => [
                              _.value ? (T(), K(v(Ia), {
                                key: 0,
                                width: L.value
                              }, {
                                default: c(() => [
                                  O("div", {
                                    ref_key: "rightPanelRef",
                                    ref: A,
                                    class: "right-panel-content"
                                  }, [
                                    i(g0)
                                  ], 512)
                                ]),
                                _: 1
                              }, 8, ["width"])) : se("", !0)
                            ]),
                            bottom: c(() => [
                              I.value ? (T(), K(v(Yi), {
                                key: 0,
                                class: "status-bar"
                              })) : se("", !0)
                            ]),
                            default: c(() => [
                              k.value ? se("", !0) : (T(), K(Vi, {
                                key: 0,
                                ref_key: "editorRef",
                                ref: r,
                                class: "editor"
                              }, null, 512))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["show"])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["locale", "theme-overrides"])
      ]);
    };
  }
}), cA = '<svg style="position:absolute"><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Dialog_close_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-bba)"><path d="m4 4 8 8m0-8-8 8" stroke="#333" stroke-linecap="round"/></g><defs><clipPath id="pptx-bba"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 32 32" id="pptx-icon-Dialog_warning" xmlns="http://www.w3.org/2000/svg"><path d="M3.118 26.904 15.456 4.287a.665.665 0 0 1 .229-.211.602.602 0 0 1 .582 0c.09.05.169.122.229.21l12.387 22.618a.748.748 0 0 1 .046.722.672.672 0 0 1-.235.274c-.1.066-.215.1-.331.1H3.637a.593.593 0 0 1-.33-.1.672.672 0 0 1-.236-.274.749.749 0 0 1 .047-.722Z" fill="#F6B04A"/><path d="M17.5 24.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.099 20.4c.038.225.15.428.313.574.164.146.371.226.585.226.213 0 .42-.08.584-.226a.992.992 0 0 0 .314-.574l.599-7.8c-.001-.424-.16-.83-.44-1.13-.28-.3-.66-.47-1.057-.47a1.458 1.458 0 0 0-.602.148 1.55 1.55 0 0 0-.499.39c-.14.164-.247.357-.315.567-.068.21-.096.433-.081.655l.599 7.64Z" fill="#fff"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Edit_add_sheet_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-bda)" fill="#333"><path d="M9 3.333C9 2.597 8.552 2 8 2s-1 .597-1 1.333v9.334C7 13.403 7.448 14 8 14s1-.597 1-1.333V3.333Z"/><path d="M12.667 7C13.403 7 14 7.448 14 8s-.597 1-1.333 1H3.333C2.597 9 2 8.552 2 8s.597-1 1.333-1h9.334Z"/></g><defs><clipPath id="pptx-bda"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 192 16" id="pptx-icon-Frame_1000007354" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-bfa)"><g clip-path="url(#pptx-bfb)" fill-rule="evenodd" clip-rule="evenodd" fill="#333"><path d="M13.498 13.393c.67-.668.67-1.755 0-2.425l-1.961-1.96a.5.5 0 1 1 .707-.708l1.96 1.961a2.714 2.714 0 1 1-3.838 3.84l-3.822-3.823a2.714 2.714 0 0 1 0-3.839.5.5 0 1 1 .707.708c-.67.67-.67 1.755 0 2.424l3.822 3.822c.668.67 1.755.67 2.425 0Z"/><path d="M8.982 8.25c.67-.67.67-1.757 0-2.426L5.16 2.002a1.715 1.715 0 0 0-2.425 2.425l1.96 1.961a.5.5 0 0 1-.706.707l-1.961-1.96a2.714 2.714 0 0 1 0-3.84m0 0a2.715 2.715 0 0 1 3.839 0l3.821 3.822a2.715 2.715 0 0 1 0 3.84.5.5 0 0 1-.706-.708"/></g></g><g clip-path="url(#pptx-bfc)"><path d="m23.963 1.645 6.4 6.318a3.788 3.788 0 0 1 0 5.415c-.36.356-.787.638-1.258.83a3.925 3.925 0 0 1-4.228-.83l-7.62-7.521a2.536 2.536 0 0 1-.757-1.805c0-.677.272-1.326.757-1.805a2.603 2.603 0 0 1 1.829-.747c.685 0 1.343.269 1.828.747l7.62 7.52a1.268 1.268 0 0 1 0 1.805 1.302 1.302 0 0 1-1.828 0l-6.401-6.318" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><g clip-path="url(#pptx-bfd)"><g clip-path="url(#pptx-bfe)"><path fill="#333" d="M32 0h2v2h-2zM46 0h2v2h-2zM32 14h2v2h-2zM46 14h2v2h-2z"/><path d="M35.5 11.5 38 5l2.5 6.5M36.5 9.5h3" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><path stroke="#333" d="M35 1.5h10"/><path stroke="#D1560D" stroke-linecap="round" d="M42.5 6.5h2M42.5 9.5h2"/><path stroke="#333" d="M35 14.5h10M32.5 3v10M47.5 3v10"/></g></g><g clip-path="url(#pptx-bff)"><g clip-path="url(#pptx-bfg)"><path fill="#333" d="M48 0h2v2h-2zM62 0h2v2h-2zM48 14h2v2h-2zM62 14h2v2h-2z"/><path d="M52.5 3.5 59 6l-6.5 2.5m2-4v3" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><path stroke="#333" d="M51 1.5h10"/><path stroke="#D1560D" stroke-linecap="round" d="M54.5 10.5v2M57.5 10.5v2"/><path stroke="#333" d="M51 14.5h10M48.5 3v10M63.5 3v10"/></g></g><g clip-path="url(#pptx-bfh)"><g clip-path="url(#pptx-bfi)"><path d="M74.5 3.5 76 2 77.5.5M74.5 7.5h5" stroke="#333" stroke-linecap="round"/><path d="M73.773 12.5H72a1.5 1.5 0 0 0 0 3h1.773m2.454-3H78a1.5 1.5 0 0 1 0 3h-1.773M72.954 14h4.092" stroke="#D1560D" stroke-linecap="round" stroke-linejoin="round"/><path d="M70.563 1.409C71.544.624 73 1.323 73 2.581V10.8l-1 .3V2.58a.5.5 0 0 0-.813-.39l-3.374 2.7A.5.5 0 0 1 67.5 5h-2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h2a.5.5 0 0 1 .313.11l2.95 2.36-1.164.35L67.324 10H65.5A1.5 1.5 0 0 1 64 8.5v-3A1.5 1.5 0 0 1 65.5 4h1.824l3.239-2.591Z" fill="#333"/></g></g><g clip-path="url(#pptx-bfj)" stroke-linecap="round"><path d="M90.5 3.5 92 2 93.5.5M90.5 7.5h5M90.5 11.5 92 13l1.5 1.5" stroke="#D1560D"/><path d="M80.5 8.5v-3a1 1 0 0 1 1-1h2l3.375-2.7a1 1 0 0 1 1.625.78v8.84a1 1 0 0 1-1.625.78L83.5 9.5h-2a1 1 0 0 1-1-1Z" stroke="#333" stroke-linejoin="round"/></g><g clip-path="url(#pptx-bfk)"><circle cx="98.5" cy="14.5" r="1" stroke="#333"/><circle cx="109.5" cy="13.5" r="1" stroke="#333"/><path d="m100.321 2.35.09.493-.09-.492Zm9-1.636.09.492-.09-.492ZM110 13.5a.5.5 0 0 0 1 0h-1Zm-9.679-11.15.09.493 9-1.637-.09-.492-.089-.492-9 1.637.089.492Zm10.179-.652h-.5V13.5h1V1.698h-.5ZM99.5 14.5h.5V3.335h-1V14.5h.5ZM109.321.714l.09.492a.5.5 0 0 1 .589.492h1a1.5 1.5 0 0 0-1.768-1.476l.089.492Zm-9 1.637-.089-.492A1.5 1.5 0 0 0 99 3.335h1a.5.5 0 0 1 .411-.492l-.09-.492Z" fill="#333"/><path d="m101.5 4.5 7-1.5" stroke="#D1560D" stroke-linecap="round"/></g><g clip-path="url(#pptx-bfl)"><g clip-path="url(#pptx-bfm)"><circle cx="113.5" cy="14.5" r="1" stroke="#333"/><path d="m115.321 2.35.09.493-.09-.492Zm9-1.636.09.492-.09-.492ZM125 10.5a.5.5 0 0 0 1 0h-1Zm-9.679-8.15.09.493 9-1.637-.09-.492-.089-.492-9 1.637.089.492Zm10.179-.652h-.5V10.5h1V1.698h-.5Zm-11 12.802h.5V3.335h-1V14.5h.5ZM124.321.714l.09.492a.5.5 0 0 1 .589.492h1a1.5 1.5 0 0 0-1.768-1.476l.089.492Zm-9 1.637-.089-.492A1.5 1.5 0 0 0 114 3.335h1a.5.5 0 0 1 .411-.492l-.09-.492Z" fill="#333"/><path d="m116.5 4.5 7-1.5" stroke="#D1560D" stroke-linecap="round"/><path d="M121.773 12.5H120a1.5 1.5 0 0 0 0 3h1.773m2.454-3H126a1.5 1.5 0 0 1 0 3h-1.773m-3.272-1.5h4.09" stroke="#D1560D" stroke-linecap="round" stroke-linejoin="round"/></g></g><g clip-path="url(#pptx-bfn)"><rect x="128.5" y="1.5" width="15" height="13" rx=".5" stroke="#333"/><path d="M134.5 6.081a.5.5 0 0 1 .812-.39l2.4 1.918a.5.5 0 0 1 0 .782l-2.4 1.919a.5.5 0 0 1-.812-.391V6.081Z" stroke="#D1560D"/><path d="M131.5 7.5v1M131.5 11.5v1M131.5 3.5v1M140.5 3.5v1M140.5 7.5v1M140.5 11.5v1" stroke="#333" stroke-linecap="round"/></g><g clip-path="url(#pptx-bfo)"><path d="M159.5 10.5v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h3" stroke="#333" stroke-linecap="round"/><path d="M150.5 6.081a.5.5 0 0 1 .812-.39l2.4 1.918a.5.5 0 0 1 0 .782l-2.4 1.919a.5.5 0 0 1-.812-.391V6.081Z" stroke="#333"/><path d="M153.773 12.5H152a1.5 1.5 0 0 0 0 3h1.773m2.454-3H158a1.5 1.5 0 0 1 0 3h-1.773m-3.272-1.5h4.09" stroke="#D1560D" stroke-linecap="round" stroke-linejoin="round"/></g><g clip-path="url(#pptx-bfp)" stroke-linecap="round"><path d="m168.5 12.5 5-5 2 2-5 5m-2-2-1 1v2h2l1-1m-2-2 2 2" stroke="#0061CE" stroke-linejoin="round"/><path d="m166 13.5-.75.75a.732.732 0 0 1-1.25-.518.732.732 0 0 0-.732-.732h-1.018a1.75 1.75 0 0 1-1.75-1.75V2.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M164.5 4.5h6M164.5 7.5h5" stroke="#333"/></g><g clip-path="url(#pptx-bfq)"><g clip-path="url(#pptx-bfr)"><path d="M179 1.5h10a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-8.672c-.709 0-1.34.454-1.564 1.127-.233.698-1.264.53-1.264-.205V3a1.5 1.5 0 0 1 1.5-1.5Z" stroke="#333"/></g></g><defs><clipPath id="pptx-bfa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bfb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bfc"><path fill="#fff" transform="translate(16)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bfd"><path fill="#fff" transform="translate(32)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bfe"><path fill="#fff" transform="translate(32)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bff"><path fill="#fff" transform="translate(48)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bfg"><path fill="#fff" transform="translate(48)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bfh"><path fill="#fff" transform="translate(64)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bfi"><path fill="#fff" transform="translate(64)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bfj"><path fill="#fff" transform="translate(80)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bfk"><path fill="#fff" transform="translate(96)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bfl"><path fill="#fff" transform="translate(112)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bfm"><path fill="#fff" transform="translate(112)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bfn"><path fill="#fff" transform="translate(128)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bfo"><path fill="#fff" transform="translate(144)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bfp"><path fill="#fff" transform="translate(160)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bfq"><path fill="#fff" transform="translate(176)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bfr"><path fill="#fff" transform="translate(176)" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 208 16" id="pptx-icon-Frame_1000007355" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-bga)" stroke="#333"><rect x="1.5" y=".5" width="13" height="15" rx="1.5"/><rect x="3.5" y="2.5" width="3" height="3" rx=".5"/><rect x="9.5" y="2.5" width="3" height="3" rx=".5"/><rect x="3.5" y="7.5" width="3" height="2" rx=".5"/><rect x="9.5" y="7.5" width="3" height="2" rx=".5"/><rect x="3.5" y="11.5" width="3" height="2" rx=".5"/><rect x="9.5" y="11.5" width="3" height="2" rx=".5"/></g><g clip-path="url(#pptx-bgb)" stroke="#333"><rect x="17.5" y=".5" width="13" height="15" rx="1.5"/><rect x="19.5" y="3.5" width="9" height="6" rx=".5" stroke-dasharray="2 2"/><path stroke-linecap="round" d="M19.5 12.5h9"/></g><g clip-path="url(#pptx-bgc)" stroke="#333"><path d="M34 2.5h9.04a1.5 1.5 0 0 1 1.17.563l3.18 3.975a.5.5 0 0 1 .11.313V13a1.5 1.5 0 0 1-1.5 1.5H34a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 34 2.5Z"/><path d="M43.5 2.5v3a2 2 0 0 0 2 2h2"/></g><g clip-path="url(#pptx-bgd)" stroke="#333"><path d="M62.5 14V4.96a1.5 1.5 0 0 0-.563-1.17L57.962.61a.5.5 0 0 0-.313-.11H52A1.5 1.5 0 0 0 50.5 2v12a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5Z"/><path d="M62.5 4.5h-3a2 2 0 0 1-2-2v-2"/></g><g clip-path="url(#pptx-bge)"><rect x="64.5" y="1.5" width="15" height="13" rx="1.5" stroke="#333"/><path d="m69.5 4.5-2.7 3.375a1 1 0 0 0 .78 1.625h2.92M69.5 6.5v5" stroke="#333" stroke-linecap="round"/><path d="M74.5 7a.5.5 0 0 0 0 1V7Zm0 .5V8H77V7h-2.5v.5Z" fill="#333"/><path d="M74.5 4.5h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2" stroke="#333" stroke-linecap="round"/><circle cx="72.5" cy="6.5" r=".5" fill="#D1560D"/><circle cx="72.5" cy="9.5" r=".5" fill="#D1560D"/></g><g clip-path="url(#pptx-bgf)"><rect x="80.5" y="1.5" width="15" height="13" rx="1.5" stroke="#333"/><path stroke="#D1560D" stroke-linecap="round" d="M82.5 3.5h11M82.5 12.5h11"/></g><g clip-path="url(#pptx-bgg)"><rect x="96.5" y="1.5" width="15" height="14" rx="1.5" stroke="#333"/></g><g clip-path="url(#pptx-bgh)" stroke="#333"><rect x="112.5" y="1.5" width="15" height="6" rx=".5"/><rect x="112.5" y="9.5" width="15" height="6" rx=".5"/></g><g clip-path="url(#pptx-bgi)" stroke="#333"><rect x="128.5" y="1.5" width="15" height="3" rx=".5"/><rect x="128.5" y="6.5" width="15" height="3" rx=".5"/><rect x="128.5" y="11.5" width="15" height="3" rx=".5"/></g><g clip-path="url(#pptx-bgj)" stroke="#333"><rect x="144.5" y="1.5" width="6" height="6" rx=".5"/><rect x="152.5" y="1.5" width="6" height="6" rx=".5"/><rect x="144.5" y="9.5" width="6" height="6" rx=".5"/><rect x="152.5" y="9.5" width="6" height="6" rx=".5"/></g><g clip-path="url(#pptx-bgk)" stroke="#333"><rect x="160.5" y="1.5" width="6" height="3" rx=".5"/><rect x="160.5" y="6.5" width="6" height="3" rx=".5"/><rect x="160.5" y="11.5" width="6" height="3" rx=".5"/><rect x="168.5" y="1.5" width="6" height="3" rx=".5"/><rect x="168.5" y="6.5" width="6" height="3" rx=".5"/><rect x="168.5" y="11.5" width="6" height="3" rx=".5"/></g><g clip-path="url(#pptx-bgl)" stroke="#333"><rect x="177.5" y="1.5" width="3" height="3" rx=".5"/><rect x="182.5" y="1.5" width="3" height="3" rx=".5"/><rect x="187.5" y="1.5" width="3" height="3" rx=".5"/><rect x="177.5" y="6.5" width="3" height="3" rx=".5"/><rect x="182.5" y="6.5" width="3" height="3" rx=".5"/><rect x="187.5" y="6.5" width="3" height="3" rx=".5"/><rect x="177.5" y="11.5" width="3" height="3" rx=".5"/><rect x="182.5" y="11.5" width="3" height="3" rx=".5"/><rect x="187.5" y="11.5" width="3" height="3" rx=".5"/></g><g clip-path="url(#pptx-bgm)"><rect x="192.5" y="1.5" width="15" height="14" rx="1.5" stroke="#333"/><rect x="195.5" y="4.5" width="2" height="2" rx=".5" stroke="#D1560D"/><rect x="195.5" y="10.5" width="2" height="2" rx=".5" stroke="#D1560D"/><path d="M199.5 4.507h5" stroke="#333" stroke-linecap="round"/><path d="M199.48 6.003a.477.477 0 0 0-.476.504.525.525 0 0 0 .517.503l-.021-.503-.02-.504Zm3.04 1.007a.477.477 0 0 0 .476-.504.524.524 0 0 0-.516-.503l.02.503.02.504Zm-3.02-.503.021.503h2.999l-.02-.504-.02-.503h-3l.02.503Z" fill="#333"/><path d="M199.5 10.507h5" stroke="#333" stroke-linecap="round"/><path d="M199.48 12.003a.477.477 0 0 0-.476.504.525.525 0 0 0 .517.503l-.021-.503-.02-.504Zm3.04 1.007a.477.477 0 0 0 .476-.504.524.524 0 0 0-.516-.503l.02.503.02.504Zm-3.02-.503.021.503h2.999l-.02-.504-.02-.503h-3l.02.504Z" fill="#333"/></g><defs><clipPath id="pptx-bga"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bgb"><path fill="#fff" transform="translate(16)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bgc"><path fill="#fff" transform="translate(32)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bgd"><path fill="#fff" transform="translate(48)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bge"><path fill="#fff" transform="translate(64)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bgf"><path fill="#fff" transform="translate(80)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bgg"><path fill="#fff" transform="translate(96)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bgh"><path fill="#fff" transform="translate(112)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bgi"><path fill="#fff" transform="translate(128)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bgj"><path fill="#fff" transform="translate(144)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bgk"><path fill="#fff" transform="translate(160)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bgl"><path fill="#fff" transform="translate(176)" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-bgm"><path fill="#fff" transform="translate(192)" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-LeftFunction__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-bra)"><g clip-path="url(#pptx-brb)"><path d="M14.399 0h-12.8a1.6 1.6 0 0 0-1.6 1.6v12.8a1.6 1.6 0 0 0 1.6 1.6h12.8a1.6 1.6 0 0 0 1.6-1.6V1.6a1.6 1.6 0 0 0-1.6-1.6Z" fill="#DE7631"/><path d="M7.62 11.658a62.4 62.4 0 0 0-.459.128l.85 1.506h4.125l-1.652-2.93c-.695.435-1.597.864-2.813 1.28l-.05.016ZM6.866 3.95l-.692-1.225H2.05l1.857 3.291c.791-.824 1.806-1.531 2.96-2.066ZM2.193 12.842s.15-2.72 1.331-4.685c.992-2.07 3.615-3.803 6.59-4.301 0 0 2.5-.58 3.274-1.03 0 0 .843-.547.462.723 0 0-.504 1.228-2.06 2.026-.367.184-.64.226-.582.576.104.357.7.086.78.045.142-.117 1.521-.495.602.823-.924 1.364-1.484 2.602-5.071 3.83-2.391.655-3.343 1.024-4.728 2.28-.693.492-.598-.287-.598-.287Z" fill="#fff"/></g></g><defs><clipPath id="pptx-bra"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-brb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_Word_insert_form_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-haa)"><path d="M4 2.5h17A1.5 1.5 0 0 1 22.5 4v16a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20V4A1.5 1.5 0 0 1 4 2.5ZM3 7.5h19" stroke="#333"/><path d="M5.5 14.5h14M8.5 11.5v6M16.5 11.5v6" stroke="#D1560D" stroke-linecap="round"/></g><defs><clipPath id="pptx-haa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_Word_redo_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-hha)"><path d="M16 7.5 18.5 5 16 2.5M18.5 5h-6.75a8.25 8.25 0 1 0 0 16.5h5.75" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pptx-hha"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_Word_undo_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-hma)"><path d="M8 7.5 5.5 5 8 2.5M5.5 5h6.75a8.25 8.25 0 0 1 0 16.5H6.5" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pptx-hma"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_excle_align_botton_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fka)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 12.5h-11M11.5 9.5h-7"/></g><defs><clipPath id="pptx-fka"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_excle_align_top_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fla)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5h-11M11.5 6.5h-7"/></g><defs><clipPath id="pptx-fla"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_excle_align_vertically_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fma)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 8.5h-11M11.5 11.5h-7M11.5 5.5h-7"/></g><defs><clipPath id="pptx-fma"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_excle_start_high_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><path d="M6 .5h9a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V1A.5.5 0 0 1 6 .5Z" stroke="#333"/><path stroke="#D1560D" d="M1 .5h3M1 15.5h3"/><path stroke="#D1560D" stroke-dasharray="2 2" d="M2.5 1v14"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_excle_start_width_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 6v9a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5Z" stroke="#333"/><path stroke="#D1560D" d="M15.5 1v3M.5 1v3"/><path stroke="#D1560D" stroke-dasharray="2 2" d="M15 2.5H1"/></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_Open_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gea)"><path d="M19.5 9.5v-3a2 2 0 0 0-2-2H11a1 1 0 0 0-1-1H5.5a1 1 0 0 0-1 1 2 2 0 0 0-2 2v12a2 2 0 0 0 2 2H19" stroke="#333"/><path d="m5.799 10.237-2.455 9A1 1 0 0 0 4.31 20.5h14.893a1 1 0 0 0 .975-.778l2.045-9a1 1 0 0 0-.975-1.222H6.764a1 1 0 0 0-.965.737Z" fill="#FFF3E6" stroke="#D1560D" stroke-linecap="round"/></g><defs><clipPath id="pptx-gea"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_close_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fpa)"><rect x="3.5" y="2.5" width="18" height="18" rx="1.5" stroke="#333"/><path d="M16.39 8.318a.5.5 0 0 0-.708-.707l-7.071 7.071a.5.5 0 1 0 .707.707l7.071-7.07Z" fill="#D1560D"/><path d="M9.318 7.611a.5.5 0 0 0-.707.707l7.071 7.071a.5.5 0 1 0 .707-.707l-7.071-7.07Z" fill="#D1560D"/></g><defs><clipPath id="pptx-fpa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_comment_page_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fqa)" stroke="#333"><rect x="2.5" y="2.5" width="19" height="19" rx="1.5"/><path stroke-linecap="round" d="M5.5 7.5h13M5.5 10.5h6"/><path d="M6 14.5h12a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Z"/></g><defs><clipPath id="pptx-fqa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_delete_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fra)"><path d="M10.5 19.5h-6a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v7" stroke="#333" stroke-linecap="round"/><path d="M10 5.5h4M10 9.5h4M16 9.5h1.5a1 1 0 0 0 1-1V8M5.5 8v.5a1 1 0 0 0 1 1H8M16 5.5h1.5a1 1 0 0 1 1 1V7M5.5 7v-.5a1 1 0 0 1 1-1H8" stroke="#333"/><path d="M5 13.5h6.5M5 15.5h4.5" stroke="#333" stroke-linecap="round"/><path d="m15.072 18.928 3.857-3.857m-3.857 0 3.857 3.857" stroke="#D1560D" stroke-linecap="round"/><circle cx="17" cy="17" r="4.5" stroke="#D1560D"/></g><defs><clipPath id="pptx-fra"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_export_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fta)" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 11.5v-6a2 2 0 0 0-2-2h-2m-4 17h-7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h2m0 0v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4m-9 0h9m-7 3h5" stroke="#333"/><path d="M13.502 16.5h7.999m-4.001 4 4-4-4-4" stroke="#D1560D"/></g><defs><clipPath id="pptx-fta"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_export_pdf_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fsa)"><path d="M7.5 11a.5.5 0 1 1 0 1h-5a.5.5 0 0 1 0-1h5Z" fill="#D1560D"/><path d="M5.146 9.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.707l-2-2a.5.5 0 0 1 0-.707Z" fill="#D1560D"/><path d="M7.146 11.146a.5.5 0 0 1 .708.707l-2 2a.5.5 0 0 1-.708-.707l2-2Z" fill="#D1560D"/><path d="M12.5 18.113a.613.613 0 0 0-.613-.613H10.5v1.227h1.387a.613.613 0 0 0 .613-.614Zm1 0c0 .891-.722 1.614-1.613 1.614H10.5V21a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5h1.887c.89 0 1.613.722 1.613 1.613ZM17.5 19a1.5 1.5 0 0 0-1.5-1.5h-.5v3h.5a1.5 1.5 0 0 0 1.5-1.5Zm1 0a2.5 2.5 0 0 1-2.5 2.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a2.5 2.5 0 0 1 2.5 2.5ZM19.5 21v-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-1.5v1H22a.5.5 0 0 1 0 1h-1.5V21a.5.5 0 0 1-1 0ZM3 8.5v-4A2.5 2.5 0 0 1 5.5 2H15a.5.5 0 0 1 .354.146l4.5 4.5A.5.5 0 0 1 20 7v7.5a.5.5 0 0 1-1 0V7.207L14.793 3H5.5A1.5 1.5 0 0 0 4 4.5v4a.5.5 0 0 1-1 0Z" fill="#333"/><path d="M14 5.5v-3a.5.5 0 0 1 1 0v3A1.5 1.5 0 0 0 16.5 7h3a.5.5 0 0 1 0 1h-3A2.5 2.5 0 0 1 14 5.5ZM3 18.5v-4a.5.5 0 0 1 1 0v4A1.5 1.5 0 0 0 5.5 20h2a.5.5 0 0 1 0 1h-2A2.5 2.5 0 0 1 3 18.5Z" fill="#333"/></g><defs><clipPath id="pptx-fsa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_fit_window_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fua)" stroke="#333"><path d="M6 5.5h12A1.5 1.5 0 0 1 19.5 7v10a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 17V7A1.5 1.5 0 0 1 6 5.5ZM5 9.5h14"/><path d="M6.5 2.5h-3a1 1 0 0 0-1 1v3M17.5 2.5h3a1 1 0 0 1 1 1v3M6.5 21.5h-3a1 1 0 0 1-1-1v-3M17.5 21.5h3a1 1 0 0 0 1-1v-3" stroke-linecap="round"/></g><defs><clipPath id="pptx-fua"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_handout_master__24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fva)" stroke="#333"><rect x="3.5" y="2.5" width="17" height="19" rx="1.5"/><rect x="6.5" y="5.5" width="4" height="3" rx=".5"/><rect x="13.5" y="5.5" width="4" height="3" rx=".5"/><rect x="6.5" y="10.5" width="4" height="3" rx=".5"/><rect x="13.5" y="10.5" width="4" height="3" rx=".5"/><rect x="6.5" y="15.5" width="4" height="3" rx=".5"/><rect x="13.5" y="15.5" width="4" height="3" rx=".5"/></g><defs><clipPath id="pptx-fva"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_handout_orientation_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fwa)"><path d="M15.5 9V4.5a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2H5" stroke="#333"/><path d="M8 10.5h12a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 20v-8A1.5 1.5 0 0 1 8 10.5Z" stroke="#333"/><rect x="4.5" y="4.5" width="3" height="4" rx=".5" stroke="#333"/><rect x="10.5" y="4.5" width="3" height="4" rx=".5" stroke="#333"/><path d="M9 13.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5ZM16 13.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5ZM9 17.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z" stroke="#333"/><path d="M16 17.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z" stroke="#D1560D"/></g><defs><clipPath id="pptx-fwa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_landscape_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fxa)" stroke="#333"><path d="M3 3.5h14.124c.419 0 .819.175 1.103.482l5.14 5.57a.5.5 0 0 1 .133.339V20a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 20V5l.008-.153A1.5 1.5 0 0 1 3 3.5Z"/><path d="M17.5 4v3.5a2 2 0 0 0 2 2H23"/><path d="m6.5 17.5 4.5-10 4.5 10M8.5 13.5h5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pptx-fxa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_layout_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fya)"><rect x="2.5" y="2.5" width="19" height="19" rx="1.5" stroke="#333"/><rect x="5.5" y="5.5" width="13" height="4" rx=".5" stroke="#D1560D"/><path d="M5.5 11v6.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V11" stroke="#333" stroke-dasharray="2 2"/><path d="M8.5 13.5h7M8.5 15.5h5" stroke="#333" stroke-linecap="round"/></g><defs><clipPath id="pptx-fya"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_master_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fza)"><path d="M10.5 19.5h-6a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v8" stroke="#333" stroke-linecap="round"/><path d="M10 5.5h4M10 9.5h4M16 9.5h1.5a1 1 0 0 0 1-1V8M5.5 8v.5a1 1 0 0 0 1 1H8M16 5.5h1.5a1 1 0 0 1 1 1V7M5.5 7v-.5a1 1 0 0 1 1-1H8" stroke="#333"/><path d="M5 13.5h6.5M5 15.5h5.5" stroke="#333" stroke-linecap="round"/><path d="M15 17h4M17 15v4" stroke="#D1560D" stroke-linecap="round"/><circle cx="17" cy="17" r="4.5" stroke="#D1560D"/></g><defs><clipPath id="pptx-fza"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_master_layout_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gaa)"><rect x="2.5" y="2.5" width="19" height="19" rx="1.5" stroke="#333"/><rect x="5.5" y="5.5" width="13" height="4" rx=".5" stroke="#D1560D"/><rect x="5.5" y="11.5" width="3" height="2" rx=".5" stroke="#333"/><rect x="5.5" y="16.5" width="3" height="2" rx=".5" stroke="#333"/><rect x="10.5" y="11.5" width="8" height="7" rx=".5" stroke="#333" stroke-dasharray="2 2"/></g><defs><clipPath id="pptx-gaa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_normol_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gba)"><rect x="2.5" y="2.5" width="19" height="19" rx="1.5" stroke="#333"/><path stroke="#D1560D" stroke-linecap="round" d="M8.5 5.5v13"/></g><defs><clipPath id="pptx-gba"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_note_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gca)"><path d="M4 2.5h16A1.5 1.5 0 0 1 21.5 4v12.793L16.793 21.5H4A1.5 1.5 0 0 1 2.5 20V4A1.5 1.5 0 0 1 4 2.5Z" stroke="#333"/><path d="M21.5 16.5h-4a1 1 0 0 0-1 1v4" stroke="#333"/><path d="M6.5 7.5h11M6.5 10.5h11M6.5 13.5h6" stroke="#D1560D" stroke-linecap="round"/></g><defs><clipPath id="pptx-gca"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_notes_master__24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gda)"><rect x="2.5" y="2.5" width="19" height="19" rx="1.5" stroke="#333"/><rect x="5.5" y="5.5" width="13" height="9" rx=".5" stroke="#D1560D" stroke-dasharray="2 2"/><path d="M5.5 18.5h13" stroke="#333" stroke-linecap="round"/></g><defs><clipPath id="pptx-gda"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 23 24" id="pptx-icon-Ribbon_ppt_page_number_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gfa)"><path d="m15.5 2.5 5 5v12a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V4.536a2 2 0 0 1 1.993-2L15.5 2.5Zm5 5-4.009-.035a1 1 0 0 1-.991-1V2.5" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5ZM14 16.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5ZM8 16.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5Z" stroke="#333"/><path stroke="#D1560D" stroke-linecap="round" d="M7.5 11.5v3M7.5 11.5l3 3M10.5 11.5v3"/></g><defs><clipPath id="pptx-gfa"><path fill="#fff" d="M0 0h23v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_placeholder_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gga)" stroke="#333"><rect x="2.5" y="2.5" width="19" height="19" rx="1.5"/><rect x="5.5" y="5.5" width="13" height="3" rx=".5"/><rect x="5.5" y="10.5" width="3" height="8" rx=".5"/><rect x="10.5" y="10.5" width="3" height="3" rx=".5"/><rect x="15.5" y="10.5" width="3" height="3" rx=".5"/><rect x="10.5" y="15.5" width="3" height="3" rx=".5"/><rect x="15.5" y="15.5" width="3" height="3" rx=".5"/></g><defs><clipPath id="pptx-gga"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_portrait_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gha)" stroke="#333"><path d="M21.5 22V6.724a1.5 1.5 0 0 0-.348-.96L16.916.68a.501.501 0 0 0-.385-.18H4A1.5 1.5 0 0 0 2.5 2v20A1.5 1.5 0 0 0 4 23.5h16a1.5 1.5 0 0 0 1.5-1.5Z"/><path d="M21 6.5h-2.5a2 2 0 0 1-2-2V1"/><path d="m7.5 18.5 4.5-10 4.5 10M9.5 14.5h5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pptx-gha"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_preview_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gia)"><path d="M4 2.5h16A1.5 1.5 0 0 1 21.5 4v16a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20V4A1.5 1.5 0 0 1 4 2.5Z" stroke="#333"/><path d="M5 5.5h5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5ZM14 5.5h5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5ZM5 13.5h5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Z" stroke="#333"/><path d="M14 13.5h5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Z" stroke="#D1560D"/></g><defs><clipPath id="pptx-gia"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_protect_master_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gja)"><path d="M13.5 19.5h-9a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v9" stroke="#333" stroke-linecap="round"/><path d="M10 5.5h4M10 9.5h4M16 9.5h1.5a1 1 0 0 0 1-1V8M5.5 8v.5a1 1 0 0 0 1 1H8M16 5.5h1.5a1 1 0 0 1 1 1V7M5.5 7v-.5a1 1 0 0 1 1-1H8" stroke="#333"/><path d="M5 13.5h9.5M5 15.5h8.5" stroke="#333" stroke-linecap="round"/><rect x="15.5" y="17.5" width="6" height="4" rx=".5" stroke="#D1560D"/><path d="M21 16.5a2.5 2.5 0 0 0-5 0" stroke="#D1560D"/></g><defs><clipPath id="pptx-gja"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_read_mode_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gka)" stroke-linecap="round"><path d="m12.5 21.5-3.789-1.894a1 1 0 0 0-.447-.106H4.5a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h5a3 3 0 0 1 3 3v14M12.5 21.5l3.789-1.894a.999.999 0 0 1 .447-.106H20.5a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2h-5a3 3 0 0 0-3 3V21" stroke="#333"/><path d="M4.5 7.5h6M20.5 7.5h-6M4.5 10.5h6M20.5 10.5h-6" stroke="#D1560D"/></g><defs><clipPath id="pptx-gka"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_rename_master_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gla)"><path d="M11.5 19.5h-7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v8" stroke="#333" stroke-linecap="round"/><path d="M10 5.5h4M10 9.5h4M16 9.5h1.5a1 1 0 0 0 1-1V8M5.5 8v.5a1 1 0 0 0 1 1H8M16 5.5h1.5a1 1 0 0 1 1 1V7M5.5 7v-.5a1 1 0 0 1 1-1H8" stroke="#333"/><path d="M5 13.5h10.5M5 15.5h8.5" stroke="#333" stroke-linecap="round"/><path opacity=".9" d="m20.257 16.257-4 4-3 1 1-3 4-4 1-1 2 2-1 1Zm-2-2 2 2" stroke="#D1560D" stroke-linejoin="round"/></g><defs><clipPath id="pptx-gla"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_ppt_select_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gma)"><g clip-path="url(#pptx-gmb)"><path d="M8.5 14.5h-7a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v9" stroke="#333" stroke-linecap="round"/><path d="M14.696 13H12.76l-.15.188-1.11 1.386v-4.451L14.696 13Z" stroke="#D1560D"/></g></g><defs><clipPath id="pptx-gma"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-gmb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_ppt_size_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gna)"><path d="M4.5 21a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1h2ZM4.5 5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1h2Z" fill="#D1560D"/><path d="M3 21.5v-16a.5.5 0 0 1 1 0v16a.5.5 0 0 1-1 0ZM20 1.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2ZM6 1.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Z" fill="#D1560D"/><path d="M20.5 3h-14a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1Z" fill="#D1560D"/><rect x="6.5" y="5.5" width="15" height="16" rx="1.5" stroke="#333"/></g><defs><clipPath id="pptx-gna"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_three_arrow_left_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-goa)"><path d="M5.2 4.9a.5.5 0 0 1 .6-.8l4 3a.5.5 0 1 1-.6.8l-4-3Z" fill="#666"/><path d="M5.2 4.9a.5.5 0 0 1 .6-.8l4 3a.5.5 0 1 1-.6.8l-4-3Z" fill="#000" fill-opacity=".2"/><path d="M5.2 4.9a.5.5 0 0 1 .6-.8l4 3a.5.5 0 1 1-.6.8l-4-3Z" fill="#000" fill-opacity=".2"/><path d="M5.2 4.9a.5.5 0 0 1 .6-.8l4 3a.5.5 0 1 1-.6.8l-4-3Z" fill="#000" fill-opacity=".2"/><path d="M5.2 4.9a.5.5 0 0 1 .6-.8l4 3a.5.5 0 1 1-.6.8l-4-3Z" fill="#000" fill-opacity=".2"/><path d="M5.2 10.1a.5.5 0 0 0 .6.8l4-3a.5.5 0 1 0-.6-.8l-4 3Z" fill="#666"/><path d="M5.2 10.1a.5.5 0 0 0 .6.8l4-3a.5.5 0 1 0-.6-.8l-4 3Z" fill="#000" fill-opacity=".2"/><path d="M5.2 10.1a.5.5 0 0 0 .6.8l4-3a.5.5 0 1 0-.6-.8l-4 3Z" fill="#000" fill-opacity=".2"/><path d="M5.2 10.1a.5.5 0 0 0 .6.8l4-3a.5.5 0 1 0-.6-.8l-4 3Z" fill="#000" fill-opacity=".2"/><path d="M5.2 10.1a.5.5 0 0 0 .6.8l4-3a.5.5 0 1 0-.6-.8l-4 3Z" fill="#000" fill-opacity=".2"/></g><defs><clipPath id="pptx-goa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_word_Decrease_Indent_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gwa)" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 1.5h-12" stroke="#333"/><path d="M8.5 7.5h-7M4.5 4.5l-3 3M4.5 10.5 1.499 7.502" stroke="#D1560D"/><path d="M13.5 7.5h-2M13.5 13.5h-12" stroke="#333"/></g><defs><clipPath id="pptx-gwa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_word_Increase_Indent_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gza)" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 1.5h-12M14.5 7.5h-2M14.5 13.5h-12" stroke="#333"/><path d="M2.147 7.5h7M6.5 4.5l2.647 3M6.5 10.5c.781-.781 1.866-2.219 2.647-3" stroke="#D1560D"/></g><defs><clipPath id="pptx-gza"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_word_Italic_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-hba)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M12.667 2.667h-6M9.333 13.333h-6M10 2.667 6 13.333"/></g><defs><clipPath id="pptx-hba"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_word_align_left_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gpa)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5h-12M8.5 8.5h-7M13.5 13.5h-12"/></g><defs><clipPath id="pptx-gpa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_word_align_right_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gqa)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5h-12M13.5 8.5h-7M13.5 13.5h-12"/></g><defs><clipPath id="pptx-gqa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_word_bold_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gra)"><path d="M4 8h6a2.667 2.667 0 0 1 0 5.333H4.667A.666.666 0 0 1 4 12.667V3.333a.667.667 0 0 1 .667-.666h4.666a2.667 2.667 0 1 1 0 5.333" stroke="#333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pptx-gra"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_word_center_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gsa)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5h-12M10.5 8.5h-6M13.5 13.5h-12"/></g><defs><clipPath id="pptx-gsa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_word_clear_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gta)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M4.999 7 2.206 9.793a1 1 0 0 0 0 1.414L4.5 13.5h2l2.5-2.5m-4-4 6.5-6.5 4 4-6.5 6.5m-4-4 4 4M.499 15.5h15"/></g><defs><clipPath id="pptx-gta"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_word_distributed_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gxa)" stroke-linecap="round"><path d="M1.5 1.5v13M14.5 1.5v13M11.5 13.5h-7M11.5 9.5h-7" stroke="#333" stroke-linejoin="round"/><path d="m6.5 2.5-2 2 2 2M9.5 2.5l2 2-2 2" stroke="#D1560D"/></g><defs><clipPath id="pptx-gxa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_word_geshishua_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gya)"><path d="M11.04 6.955c-.904-.349-1.54-1.175-1.54-2.14C9.5 3.538 10.62 2.5 12 2.5s2.5 1.037 2.5 2.316c0 1.008-.529 1.821-1.5 2.139M4.5 11.5s1 3 .04 5c-.474.988-1.466 2.22-2.349 3.215-.595.67-.128 1.785.769 1.785h13.257c.517 0 1.037-.095 1.446-.413.765-.595 1.964-1.929 2.305-4.587.513-4-.468-5-.468-5" stroke="#333"/><path d="M10.5 6.5a.5.5 0 0 1 .5.5v2H3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H7v1H3.5A1.5 1.5 0 0 1 2 10.5v-1A1.5 1.5 0 0 1 3.5 8H10V7a.5.5 0 0 1 .5-.5Zm3 0a.5.5 0 0 1 .5.5v1h6.5A1.5 1.5 0 0 1 22 9.5v1a1.5 1.5 0 0 1-1.5 1.5H17v-1h3.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H13V7a.5.5 0 0 1 .5-.5Z" fill="#333"/><path d="M15 16s.5 1.625-1 3.5-2.5 2-2.5 2" stroke="#666" stroke-linecap="round"/><path d="M15 16s.5 1.625-1 3.5-2.5 2-2.5 2" stroke="#000" stroke-opacity=".2" stroke-linecap="round"/><path d="M15 16s.5 1.625-1 3.5-2.5 2-2.5 2" stroke="#000" stroke-opacity=".2" stroke-linecap="round"/><path d="M15 16s.5 1.625-1 3.5-2.5 2-2.5 2" stroke="#000" stroke-opacity=".2" stroke-linecap="round"/><path d="M15 16s.5 1.625-1 3.5-2.5 2-2.5 2" stroke="#000" stroke-opacity=".2" stroke-linecap="round"/><path stroke="#D1560D" d="M8 11.5h8"/></g><defs><clipPath id="pptx-gya"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_word_justify_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-hca)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5h-12M13.5 8.5h-12M13.5 13.5h-12"/></g><defs><clipPath id="pptx-hca"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_word_line_spacing_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-hda)" stroke-linecap="round"><path d="M13.5 13.5h-6M13.5 8.5h-6M13.5 3.5h-6" stroke="#333" stroke-linejoin="round"/><path d="m5.5 3.5-2-2-2 2M5.5 12.5l-2 2-2-2M3.5 13.5v-11" stroke="#D1560D"/></g><defs><clipPath id="pptx-hda"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_word_list_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-hea)" stroke="#333"><path d="M5.5 7.5h8M5.5 12.5h8M5.5 2.5h8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="2.5" cy="2.5" r="1"/><circle cx="2.5" cy="7.5" r="1"/><circle cx="2.5" cy="12.5" r="1"/></g><defs><clipPath id="pptx-hea"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_word_number_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-hfa)"><path d="M6.5 7.5h8M6.5 12.5h8M6.5 2.5h8" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.143 11c.472 0 .857.308.857.688v1.718c0 .38-.385.688-.857.688H2.107c-.059 0-.107-.039-.107-.086v-.516c0-.047.048-.086.107-.086H3.93c.118 0 .214-.077.214-.172v-.171c0-.095-.096-.172-.214-.172H2.107c-.059 0-.107-.039-.107-.086v-.516c0-.047.048-.086.107-.086H3.93c.118 0 .214-.077.214-.172v-.172c0-.094-.096-.171-.214-.171H2.107c-.059 0-.107-.04-.107-.086v-.516c0-.047.048-.086.107-.086h2.036Zm0-5c.472 0 .857.308.857.688v.515c0 .38-.385.688-.857.688H3.07c-.118 0-.214.077-.214.171v.172c0 .095.096.172.214.172h1.822c.059 0 .107.039.107.086v.516c0 .047-.048.086-.107.086H2.857c-.472 0-.857-.309-.857-.688v-.515c0-.38.385-.688.857-.688H3.93c.118 0 .214-.077.214-.172V6.86c0-.094-.096-.171-.214-.171H2.107c-.059 0-.107-.04-.107-.086v-.516C2 6.039 2.048 6 2.107 6h2.036ZM3.07.906c.473 0 .858.309.858.688v2.32c0 .047-.049.086-.108.086H3.18c-.06 0-.108-.039-.108-.086V1.766c0-.095-.096-.172-.214-.172h-.536c-.059 0-.107-.039-.107-.086V.992c0-.047.048-.086.107-.086h.75Z" fill="#333"/><path d="M4.143 11c.472 0 .857.308.857.688v1.718c0 .38-.385.688-.857.688H2.107c-.059 0-.107-.039-.107-.086v-.516c0-.047.048-.086.107-.086H3.93c.118 0 .214-.077.214-.172v-.171c0-.095-.096-.172-.214-.172H2.107c-.059 0-.107-.039-.107-.086v-.516c0-.047.048-.086.107-.086H3.93c.118 0 .214-.077.214-.172v-.172c0-.094-.096-.171-.214-.171H2.107c-.059 0-.107-.04-.107-.086v-.516c0-.047.048-.086.107-.086h2.036Zm0-5c.472 0 .857.308.857.688v.515c0 .38-.385.688-.857.688H3.07c-.118 0-.214.077-.214.171v.172c0 .095.096.172.214.172h1.822c.059 0 .107.039.107.086v.516c0 .047-.048.086-.107.086H2.857c-.472 0-.857-.309-.857-.688v-.515c0-.38.385-.688.857-.688H3.93c.118 0 .214-.077.214-.172V6.86c0-.094-.096-.171-.214-.171H2.107c-.059 0-.107-.04-.107-.086v-.516C2 6.039 2.048 6 2.107 6h2.036ZM3.07.906c.473 0 .858.309.858.688v2.32c0 .047-.049.086-.108.086H3.18c-.06 0-.108-.039-.108-.086V1.766c0-.095-.096-.172-.214-.172h-.536c-.059 0-.107-.039-.107-.086V.992c0-.047.048-.086.107-.086h.75Z" stroke="#333"/></g><defs><clipPath id="pptx-hfa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Ribbon_word_past_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-hga)"><path d="M5.5 4.5h.8a2 2 0 0 1 2-2h3.4a2 2 0 0 1 2 2h.8a2 2 0 0 1 2 2v3h-3a2 2 0 0 0-2 2v8h-6a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2Z" fill="#FFF3E6"/><path d="M6.3 4.5h-.8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h6v-8a2 2 0 0 1 2-2h3v-3a2 2 0 0 0-2-2h-.8m-7.4 0c0 .43.348.778.778.778h5.844c.43 0 .778-.348.778-.778m-7.4 0a2 2 0 0 1 2-2h3.4a2 2 0 0 1 2 2" stroke="#D1560D" stroke-linecap="round" stroke-linejoin="round"/><path d="m21.5 12.5-3-3h-5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7Zm-3-3v3h3" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pptx-hga"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_word_right_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-hia)"><path d="m4.5 9.5 3 2 6-7" stroke="#333" stroke-linecap="round"/></g><defs><clipPath id="pptx-hia"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_word_strikethrough_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-hja)"><path d="M2.5 8.5h11" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.96 14.694a.5.5 0 0 1-.921-.389L3.86 10h1.087l-1.986 4.694Zm11-.389a.5.5 0 0 1-.921.39L11.053 10h1.087l1.82 4.305ZM8 1c.2 0 .383.12.46.305L10.87 7H9.784L8 2.783 6.216 7H5.13l2.409-5.695A.502.502 0 0 1 7.999 1Z" fill="#333"/></g><defs><clipPath id="pptx-hja"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_word_text_color_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-hka)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 11.5 8 1.5l4.5 10M5.5 7.5h5"/></g><defs><clipPath id="pptx-hka"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-Ribbon_word_underline_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-hla)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 2.5v5a4 4 0 1 0 8 0v-5M3.5 14.5h10"/></g><defs><clipPath id="pptx-hla"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-RotatedTextAlignBottom" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 2.5v11M9.5 4.5v7" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-RotatedTextAlignCenter" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.5v11M11 4.5v7M5 4.5v7" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-RotatedTextAlignTop" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 2.5v11M6.5 4.5v7" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-Show_Hide" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.73a.5.5 0 0 0 1 0h-1ZM2.5 17H2h.5Zm0 3.5H2a.5.5 0 0 0 .83.376L2.5 20.5Zm4-3.5v-.5h-.188l-.141.124L6.5 17Zm3 .5a.5.5 0 0 0 0-1v1Zm-5-14V4h15V3h-15v.5Zm17 2H21v6.23h1V5.5h-.5Zm-19 0H2V17h1V5.5h-.5Zm0 11.5H2v3.5h1V17h-.5Zm0 3.5.33.376 4-3.5L6.5 17l-.33-.376-3.999 3.5.33.376Zm4-3.5v.5h3v-1h-3v.5Zm13-13.5V4A1.5 1.5 0 0 1 21 5.5h1A2.5 2.5 0 0 0 19.5 3v.5Zm-15 0V3A2.5 2.5 0 0 0 2 5.5h1A1.5 1.5 0 0 1 4.5 4v-.5Z" fill="#333"/><path d="M16.5 13.5c2.049 0 3.296.808 4.036 1.593.375.397.625.796.78 1.093.067.126.114.234.148.314-.034.08-.081.188-.148.314a4.962 4.962 0 0 1-.78 1.093c-.74.785-1.988 1.593-4.036 1.593-2.049 0-3.296-.808-4.036-1.593a4.962 4.962 0 0 1-.78-1.093 4.04 4.04 0 0 1-.149-.314 4.04 4.04 0 0 1 .149-.314c.155-.297.405-.696.78-1.093.74-.785 1.987-1.593 4.036-1.593Z" stroke="#D1560D"/><circle cx="16.5" cy="16.5" r="1.5" fill="#D1560D"/></symbol><symbol fill="none" viewBox="0 0 10 10" id="pptx-icon-Status_bar_add_10__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-iba)"><path d="M8 6a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2h7Z" fill="#666"/><path d="M8 6a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2h7Z" fill="#000" fill-opacity=".2"/><path d="M8 6a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2h7Z" fill="#000" fill-opacity=".2"/><path d="M8 6a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2h7Z" fill="#000" fill-opacity=".2"/><path d="M8 6a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2h7Z" fill="#000" fill-opacity=".2"/><path d="M5.5 1.5a1 1 0 0 0-2 0v7a1 1 0 1 0 2 0v-7Z" fill="#666"/><path d="M5.5 1.5a1 1 0 0 0-2 0v7a1 1 0 1 0 2 0v-7Z" fill="#000" fill-opacity=".2"/><path d="M5.5 1.5a1 1 0 0 0-2 0v7a1 1 0 1 0 2 0v-7Z" fill="#000" fill-opacity=".2"/><path d="M5.5 1.5a1 1 0 0 0-2 0v7a1 1 0 1 0 2 0v-7Z" fill="#000" fill-opacity=".2"/><path d="M5.5 1.5a1 1 0 0 0-2 0v7a1 1 0 1 0 2 0v-7Z" fill="#000" fill-opacity=".2"/></g><defs><clipPath id="pptx-iba"><path fill="#fff" d="M0 0h10v10H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 10 10" id="pptx-icon-Status_bar_minus_10__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-ica)"><path d="M7 6a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2h4Z" fill="#666"/><path d="M7 6a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2h4Z" fill="#000" fill-opacity=".2"/><path d="M7 6a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2h4Z" fill="#000" fill-opacity=".2"/><path d="M7 6a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2h4Z" fill="#000" fill-opacity=".2"/><path d="M7 6a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2h4Z" fill="#000" fill-opacity=".2"/></g><defs><clipPath id="pptx-ica"><path fill="#fff" d="M0 0h10v10H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-TopQuickToolbar_Redo_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-ija)"><path d="m11.499 4.5 2-2-2-2m2 2h-5.5a6.5 6.5 0 0 0 0 13h4.5" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pptx-ija"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-TopQuickToolbar_Undo_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-ika)"><path d="m2.499 4.5-2-2 2-2m-2 2h5.5a6.5 6.5 0 0 1 0 13h-4.5" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pptx-ika"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-allBorders" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="14" height="14" rx=".5" stroke="#333"/><path stroke="#333" d="M0 7.5h15M7.5 15V0"/></symbol><symbol fill="none" viewBox="0 0 8 8" id="pptx-icon-arrow__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-aba)" stroke="#ACACAC" stroke-linecap="round"><path d="M6.5 1.5v5M6.496 6.503 1.5 1.5M1.5 6.5h5"/></g><defs><clipPath id="pptx-aba"><path fill="#fff" d="M0 0h8v8H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-borderColor" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="13" width="14" height="3" rx="1" fill="#333"/><path d="M14.5 12V3.5a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2V12" stroke="#333"/><path d="M12.5 12V4.5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1V12" stroke="#333"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-bottomBorder" xmlns="http://www.w3.org/2000/svg"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M.5.5h14v14H.5zM0 7.5h15M7.5 15V0"/><path stroke="#333" d="M0 14.5h15"/></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-cell_margins" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="2.5" width="19" height="19" rx="1.5" stroke="#333"/><path d="M3 17.5h18M3 6.5h18M7.5 21V3M16.5 21V3" stroke="#D1560D"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-clearPresentationMarkup" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-aga)"><path d="m11.121 15.364 4.243-4.243m0 4.242-4.243-4.242" stroke="#D1560D" stroke-linecap="round"/><path d="M3.5 4.5h6a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-6A.5.5 0 0 1 3 7V5a.5.5 0 0 1 .5-.5Z" stroke="#333"/><path d="M12.5 9.5v-6a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7" stroke="#333" stroke-linecap="round"/><path d="M2.5.5h11a1 1 0 0 1 1 1v8M3.5 10.5h4M3.5 13h4" stroke="#333" stroke-linecap="round"/></g><defs><clipPath id="pptx-aga"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-clear_all" xmlns="http://www.w3.org/2000/svg"><path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm2.646 3.354a.5.5 0 0 0-.707 0L8 7.292 6.06 5.354a.5.5 0 1 0-.706.707l1.939 1.938-1.94 1.94a.5.5 0 0 0 .708.707L8 8.706l1.94 1.94a.5.5 0 1 0 .707-.708L8.707 8l1.94-1.938a.5.5 0 0 0 0-.707Z" fill="#757575"/></symbol><symbol fill="none" viewBox="0 0 24 4" id="pptx-icon-color_4__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-aha)"><path d="M17 0 7.5 4" stroke="red" stroke-linecap="round"/><rect x=".25" y=".25" width="23.5" height="3.5" rx=".75" stroke="#C7CCD9" stroke-width=".5"/></g><defs><clipPath id="pptx-aha"><path fill="#fff" d="M0 0h24v4H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-comment_add_16" xmlns="http://www.w3.org/2000/svg"><path d="M14 6.5a.5.5 0 0 0 1 0h-1Zm-13.5 7H0a.5.5 0 0 0 .854.354L.5 13.5Zm3-3V10h-.207l-.147.146.354.354Zm4 .5a.5.5 0 0 0 0-1v1ZM2.5.5V1h10V0h-10v.5Zm12 2H14v4h1v-4h-.5Zm-14 0H0v8h1v-8H.5Zm0 8H0v3h1v-3H.5Zm0 3 .354.354 3-3L3.5 10.5l-.354-.354-3 3L.5 13.5Zm3-3v.5h4v-1h-4v.5Zm9-10V1A1.5 1.5 0 0 1 14 2.5h1A2.5 2.5 0 0 0 12.5 0v.5Zm-10 0V0A2.5 2.5 0 0 0 0 2.5h1A1.5 1.5 0 0 1 2.5 1V.5Z" fill="#333"/><path d="M9.5 11.5h6M12.5 14.5v-6" stroke="#D1560D" stroke-linecap="round"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-comment_delete" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-aja)"><path d="M14 7.5a.5.5 0 0 0 1 0h-1Zm-13.5 6H0a.5.5 0 0 0 .854.354L.5 13.5Zm3-3V10h-.207l-.147.146.354.354Zm5 .5a.5.5 0 0 0 0-1v1ZM2.5.5V1h10V0h-10v.5Zm12 2H14v5h1v-5h-.5Zm-14 0H0v8h1v-8H.5Zm0 8H0v3h1v-3H.5Zm0 3 .354.354 3-3L3.5 10.5l-.354-.354-3 3L.5 13.5Zm3-3v.5h5v-1h-5v.5Zm9-10V1A1.5 1.5 0 0 1 14 2.5h1A2.5 2.5 0 0 0 12.5 0v.5Zm-10 0V0A2.5 2.5 0 0 0 0 2.5h1A1.5 1.5 0 0 1 2.5 1V.5Z" fill="#333"/><path d="M10.379 13.621 14.62 9.38m0 4.242L10.38 9.38" stroke="#D1560D" stroke-linecap="round"/></g><defs><clipPath id="pptx-aja"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-comment_hide" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.73a.5.5 0 0 0 1 0h-1ZM2.5 17H2h.5Zm0 3.5H2a.5.5 0 0 0 .83.376L2.5 20.5Zm4-3.5v-.5h-.188l-.141.124L6.5 17Zm3 .5a.5.5 0 0 0 0-1v1Zm-5-14V4h15V3h-15v.5Zm17 2H21v6.23h1V5.5h-.5Zm-19 0H2V17h1V5.5h-.5Zm0 11.5H2v3.5h1V17h-.5Zm0 3.5.33.376 4-3.5L6.5 17l-.33-.376-3.999 3.5.33.376Zm4-3.5v.5h3v-1h-3v.5Zm13-13.5V4A1.5 1.5 0 0 1 21 5.5h1A2.5 2.5 0 0 0 19.5 3v.5Zm-15 0V3A2.5 2.5 0 0 0 2 5.5h1A1.5 1.5 0 0 1 4.5 4v-.5Z" fill="#333"/><path d="m20 12-6.5 9" stroke="#D1560D" stroke-linecap="round"/><path d="M19.863 13.898C21.507 14.934 22 16.5 22 16.5S20.9 20 16.5 20a7.52 7.52 0 0 1-.996-.067l.68-.942c.103.005.208.009.316.009 1.897 0 3.017-.74 3.673-1.436.337-.357.562-.716.701-.981l.04-.083-.04-.083a4.464 4.464 0 0 0-.701-.982 4.321 4.321 0 0 0-.897-.726l.587-.811ZM16.5 13c.527 0 1.006.051 1.442.14l-.655.907A6.603 6.603 0 0 0 16.5 14c-1.897 0-3.017.74-3.673 1.435a4.464 4.464 0 0 0-.701.982l-.041.083.041.083c.139.265.364.624.701.982.306.324.714.657 1.254.921l-.593.82C11.562 18.287 11 16.5 11 16.5s1.1-3.5 5.5-3.5Zm-4.549 3.808.002-.004v-.002l.001-.001V16.8l-.003.008Zm.002-.609h.001v-.003l-.002-.002.001.005Z" fill="#D1560D"/><path d="M18 16.5a1.5 1.5 0 0 1-1.05 1.43l1.048-1.451.002.021Zm-1.404-1.495-1.487 2.056A1.5 1.5 0 0 1 16.5 15c.033 0 .065.003.097.005Z" fill="#D1560D"/></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-comment_list" xmlns="http://www.w3.org/2000/svg"><path d="M17 14h4.5M17 17h4.5M17 20h4.5" stroke="#D1560D" stroke-linecap="round"/><path d="M21 11.73a.5.5 0 0 0 1 0h-1ZM2.5 17H2h.5Zm0 3.5H2a.5.5 0 0 0 .83.376L2.5 20.5Zm4-3.5v-.5h-.188l-.141.124L6.5 17Zm6 .5a.5.5 0 0 0 0-1v1Zm-8-14V4h15V3h-15v.5Zm17 2H21v6.23h1V5.5h-.5Zm-19 0H2V17h1V5.5h-.5Zm0 11.5H2v3.5h1V17h-.5Zm0 3.5.33.376 4-3.5L6.5 17l-.33-.376-3.999 3.5.33.376Zm4-3.5v.5h6v-1h-6v.5Zm13-13.5V4A1.5 1.5 0 0 1 21 5.5h1A2.5 2.5 0 0 0 19.5 3v.5Zm-15 0V3A2.5 2.5 0 0 0 2 5.5h1A1.5 1.5 0 0 1 4.5 4v-.5Z" fill="#333"/><circle cx="14.5" cy="14" r="1" fill="#D1560D"/><circle cx="14.5" cy="17" r="1" fill="#D1560D"/><circle cx="14.5" cy="20" r="1" fill="#D1560D"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-comment_next" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-ama)"><path d="M14 7.5a.5.5 0 0 0 1 0h-1Zm-13.5 6H0a.5.5 0 0 0 .854.354L.5 13.5Zm3-3V10h-.207l-.147.146.354.354Zm3 .5a.5.5 0 0 0 0-1v1ZM2.5.5V1h10V0h-10v.5Zm12 2H14v5h1v-5h-.5Zm-14 0H0v8h1v-8H.5Zm0 8H0v3h1v-3H.5Zm0 3 .354.354 3-3L3.5 10.5l-.354-.354-3 3L.5 13.5Zm3-3v.5h3v-1h-3v.5Zm9-10V1A1.5 1.5 0 0 1 14 2.5h1A2.5 2.5 0 0 0 12.5 0v.5Zm-10 0V0A2.5 2.5 0 0 0 0 2.5h1A1.5 1.5 0 0 1 2.5 1V.5Z" fill="#333"/><path d="M15.5 12.5h-7m4 3 3-3-3-3" stroke="#D1560D" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pptx-ama"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-comment_previous" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-ana)"><path d="M14 7.5a.5.5 0 0 0 1 0h-1Zm-13.5 6H0a.5.5 0 0 0 .854.354L.5 13.5Zm3-3V10h-.207l-.147.146.354.354Zm3 .5a.5.5 0 0 0 0-1v1ZM2.5.5V1h10V0h-10v.5Zm12 2H14v5h1v-5h-.5Zm-14 0H0v8h1v-8H.5Zm0 8H0v3h1v-3H.5Zm0 3 .354.354 3-3L3.5 10.5l-.354-.354-3 3L.5 13.5Zm3-3v.5h3v-1h-3v.5Zm9-10V1A1.5 1.5 0 0 1 14 2.5h1A2.5 2.5 0 0 0 12.5 0v.5Zm-10 0V0A2.5 2.5 0 0 0 0 2.5h1A1.5 1.5 0 0 1 2.5 1V.5Z" fill="#333"/><path d="M8.5 12.5h7m-4 3-3-3 3-3" stroke="#D1560D" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pptx-ana"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-comment_show" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.73a.5.5 0 0 0 1 0h-1ZM2.5 17H2h.5Zm0 3.5H2a.5.5 0 0 0 .83.376L2.5 20.5Zm4-3.5v-.5h-.188l-.141.124L6.5 17Zm3 .5a.5.5 0 0 0 0-1v1Zm-5-14V4h15V3h-15v.5Zm17 2H21v6.23h1V5.5h-.5Zm-19 0H2V17h1V5.5h-.5Zm0 11.5H2v3.5h1V17h-.5Zm0 3.5.33.376 4-3.5L6.5 17l-.33-.376-3.999 3.5.33.376Zm4-3.5v.5h3v-1h-3v.5Zm13-13.5V4A1.5 1.5 0 0 1 21 5.5h1A2.5 2.5 0 0 0 19.5 3v.5Zm-15 0V3A2.5 2.5 0 0 0 2 5.5h1A1.5 1.5 0 0 1 4.5 4v-.5Z" fill="#333"/><path d="M16.5 13.5c2.049 0 3.296.808 4.036 1.593.375.397.625.796.78 1.093.067.126.114.234.148.314-.034.08-.081.188-.148.314a4.962 4.962 0 0 1-.78 1.093c-.74.785-1.988 1.593-4.036 1.593-2.049 0-3.296-.808-4.036-1.593a4.962 4.962 0 0 1-.78-1.093 4.04 4.04 0 0 1-.149-.314 4.04 4.04 0 0 1 .149-.314c.155-.297.405-.696.78-1.093.74-.785 1.987-1.593 4.036-1.593Z" stroke="#D1560D"/><circle cx="16.5" cy="16.5" r="1.5" fill="#D1560D"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-comment_tag_hover" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 1.5h-9a2 2 0 0 0-2 2v11l3-3h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z" fill="#E6F6FF"/><path d="M1.5 14.5h-.25a.25.25 0 0 0 .427.177L1.5 14.5Zm3-3v-.25h-.104l-.073.073.177.177Zm-1-10v.25h9v-.5h-9v.25Zm11 2h-.25v4h.5v-4h-.25Zm-13 0h-.25v8h.5v-8H1.5Zm0 8h-.25v3h.5v-3H1.5Zm0 3 .177.177 3-3L4.5 11.5l-.177-.177-3 3 .177.177Zm3-3v.25h8v-.5h-8v.25Zm10-2h.25v-2h-.5v2h.25Zm-2 2v.25a2.25 2.25 0 0 0 2.25-2.25h-.5a1.75 1.75 0 0 1-1.75 1.75v.25Zm0-10v.25c.966 0 1.75.784 1.75 1.75h.5a2.25 2.25 0 0 0-2.25-2.25v.25Zm-9 0v-.25A2.25 2.25 0 0 0 1.25 3.5h.5c0-.966.784-1.75 1.75-1.75V1.5Z" fill="#0061CE"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-comment_tag_resolved" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 1.5h-9a2 2 0 0 0-2 2v11l3-3h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z" fill="#F0F1F5"/><path d="M1.5 14.5h-.25a.25.25 0 0 0 .427.177L1.5 14.5Zm3-3v-.25h-.104l-.073.073.177.177Zm-1-10v.25h9v-.5h-9v.25Zm11 2h-.25v4h.5v-4h-.25Zm-13 0h-.25v8h.5v-8H1.5Zm0 8h-.25v3h.5v-3H1.5Zm0 3 .177.177 3-3L4.5 11.5l-.177-.177-3 3 .177.177Zm3-3v.25h8v-.5h-8v.25Zm10-2h.25v-2h-.5v2h.25Zm-2 2v.25a2.25 2.25 0 0 0 2.25-2.25h-.5a1.75 1.75 0 0 1-1.75 1.75v.25Zm0-10v.25c.966 0 1.75.784 1.75 1.75h.5a2.25 2.25 0 0 0-2.25-2.25v.25Zm-9 0v-.25A2.25 2.25 0 0 0 1.25 3.5h.5c0-.966.784-1.75 1.75-1.75V1.5Z" fill="#ACACAC"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-comment_tag_unresolved_indicator" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 1.5h-9a2 2 0 0 0-2 2v11l3-3h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z" fill="#FFF3E6"/><path d="M1.5 14.5h-.25a.25.25 0 0 0 .427.177L1.5 14.5Zm3-3v-.25h-.104l-.073.073.177.177Zm-1-10v.25h9v-.5h-9v.25Zm11 2h-.25v4h.5v-4h-.25Zm-13 0h-.25v8h.5v-8H1.5Zm0 8h-.25v3h.5v-3H1.5Zm0 3 .177.177 3-3L4.5 11.5l-.177-.177-3 3 .177.177Zm3-3v.25h8v-.5h-8v.25Zm10-2h.25v-2h-.5v2h.25Zm-2 2v.25a2.25 2.25 0 0 0 2.25-2.25h-.5a1.75 1.75 0 0 1-1.75 1.75v.25Zm0-10v.25c.966 0 1.75.784 1.75 1.75h.5a2.25 2.25 0 0 0-2.25-2.25v.25Zm-9 0v-.25A2.25 2.25 0 0 0 1.25 3.5h.5c0-.966.784-1.75 1.75-1.75V1.5Z" fill="#D1560D"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-comment_tag_unsolved" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 1.5h-9a2 2 0 0 0-2 2v11l3-3h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z" fill="#E6E9F0"/><path d="M1.5 14.5h-.25a.25.25 0 0 0 .427.177L1.5 14.5Zm3-3v-.25h-.104l-.073.073.177.177Zm-1-10v.25h9v-.5h-9v.25Zm11 2h-.25v4h.5v-4h-.25Zm-13 0h-.25v8h.5v-8H1.5Zm0 8h-.25v3h.5v-3H1.5Zm0 3 .177.177 3-3L4.5 11.5l-.177-.177-3 3 .177.177Zm3-3v.25h8v-.5h-8v.25Zm10-2h.25v-2h-.5v2h.25Zm-2 2v.25a2.25 2.25 0 0 0 2.25-2.25h-.5a1.75 1.75 0 0 1-1.75 1.75v.25Zm0-10v.25c.966 0 1.75.784 1.75 1.75h.5a2.25 2.25 0 0 0-2.25-2.25v.25Zm-9 0v-.25A2.25 2.25 0 0 0 1.25 3.5h.5c0-.966.784-1.75 1.75-1.75V1.5Z" fill="#333"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-decrease_spacing" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 13.5h-6M13.5 6.5h-6M13.5 10.5h-6M13.5 3.5h-6" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><path d="m5.5 3.508-2 2-2-2M5.5 12.492l-2-2-2 2M3.5 14.5V11M3.5 5V1.5" stroke="#D1560D" stroke-linecap="round"/></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-delete" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-axa)"><path d="M2.5 13.5h18" stroke="#333" stroke-linecap="round"/><path d="M2 8h19" stroke="#333"/><path d="M8 19V8M15 13V8" stroke="#333" stroke-linecap="round"/><path d="m15.5 21.5 6-6m0 6-6-6" stroke="#D1560D" stroke-linecap="round"/><path d="M14 19.5H4.5a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9" stroke="#333" stroke-linecap="round"/></g><defs><clipPath id="pptx-axa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-deleteCommentRibbonIcon" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 16.5h-3l-1.08 2.522c-.43 1-1.92.694-1.92-.394V4.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v6" stroke="#333" stroke-linecap="round"/><path d="m15.071 18.928 3.857-3.857m-3.857 0 3.857 3.857" stroke="#D1560D" stroke-linecap="round"/><circle cx="17" cy="17" r="4.5" stroke="#D1560D"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-delete_columns" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-aua)"><path d="m5.5 15.5 4-4m0 4-4-4" stroke="#D1560D" stroke-linecap="round"/><path d="M.5 14.5v-11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11M12.5 14.5v-11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11" stroke="#333" stroke-linecap="round"/><rect x="6.5" y=".5" width="3" height="9" rx=".5" stroke="#333"/></g><defs><clipPath id="pptx-aua"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-delete_comment" xmlns="http://www.w3.org/2000/svg"><path d="M9.64 2c.581 0 1.055.482 1.055 1.073v.905h2.776a.52.52 0 0 1 .374.159.545.545 0 0 1 .115.592.545.545 0 0 1-.287.292.52.52 0 0 1-.202.042h-.926v7.316c-.002.43-.17.844-.469 1.147a1.57 1.57 0 0 1-1.123.474H5.05a1.57 1.57 0 0 1-1.124-.473 1.65 1.65 0 0 1-.47-1.148V5.063h-.927a.519.519 0 0 1-.374-.159.545.545 0 0 1-.115-.591.545.545 0 0 1 .287-.293.518.518 0 0 1 .202-.042h2.776v-.905C5.305 2.482 5.778 2 6.358 2H9.64ZM4.516 12.379c0 .295.24.535.534.535h5.903a.522.522 0 0 0 .374-.155c.1-.1.158-.237.16-.38V5.063H4.515v7.316Zm2.147-6.182c.14 0 .276.057.375.158.1.102.154.24.154.384v4.548a.549.549 0 0 1-.154.383.523.523 0 0 1-.749 0 .549.549 0 0 1-.155-.383V6.74a.55.55 0 0 1 .155-.384.523.523 0 0 1 .374-.158Zm2.675 0c.14 0 .275.057.374.158.1.102.155.24.155.384v4.548a.554.554 0 0 1-.327.501.519.519 0 0 1-.577-.118.55.55 0 0 1-.155-.383V6.74a.55.55 0 0 1 .155-.384.524.524 0 0 1 .375-.158Zm-2.98-3.112.003.893h3.276v-.905l-3.279.012Z" fill="#757575"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-delete_rows" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-awa)"><path d="m15.5 10.5-4-4m4 0-4 4" stroke="#D1560D" stroke-linecap="round"/><path d="M14.5 15.5h-11a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h11M14.5 3.5h-11a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h11" stroke="#333" stroke-linecap="round"/><rect x=".5" y="9.5" width="3" height="9" rx=".5" transform="rotate(-90 .5 9.5)" stroke="#333"/></g><defs><clipPath id="pptx-awa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-diagonalDownBorder" xmlns="http://www.w3.org/2000/svg"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M.5.5h14v14H.5z"/><path stroke="#333" stroke-linecap="round" d="m1.404.66 13.435 13.435"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-diagonalUpBorder" xmlns="http://www.w3.org/2000/svg"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M.5.5h14v14H.5z"/><path stroke="#333" stroke-linecap="round" d="M.697 14.096 14.132.661"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-filter" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-bea)" stroke="#757575"><path d="M5.5 7.833 5.4 7.7.6 1.3A.5.5 0 0 1 1 .5h14a.5.5 0 0 1 .4.8l-4.8 6.4-.1.133v4.857l-4.276 2.14a.5.5 0 0 1-.724-.448V7.833Z"/><path d="M5.5 3.5h5" stroke-linecap="round"/></g><defs><clipPath id="pptx-bea"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-hideSlide" xmlns="http://www.w3.org/2000/svg"><path d="m21 14-6.5 9" stroke="#D1560D" stroke-linecap="round"/><path d="M20.863 15.898C22.507 16.934 23 18.5 23 18.5S21.9 22 17.5 22a7.52 7.52 0 0 1-.996-.067l.68-.942c.103.005.208.009.316.009 1.897 0 3.017-.74 3.673-1.436.337-.357.562-.716.701-.981l.04-.083-.04-.083a4.464 4.464 0 0 0-.701-.982 4.321 4.321 0 0 0-.897-.726l.587-.811ZM17.5 15c.527 0 1.006.051 1.442.14l-.655.907A6.603 6.603 0 0 0 17.5 16c-1.897 0-3.017.74-3.673 1.436a4.464 4.464 0 0 0-.701.981l-.041.083.041.083c.139.265.364.624.701.982.306.324.714.657 1.254.921l-.593.82C12.562 20.287 12 18.5 12 18.5s1.1-3.5 5.5-3.5Zm-4.549 3.808.002-.004v-.002l.001-.001V18.8l-.003.008Zm.002-.609h.001v-.003l-.002-.002.001.005Z" fill="#D1560D"/><path d="M19 18.5a1.5 1.5 0 0 1-1.05 1.43l1.048-1.451.002.021Zm-1.404-1.495-1.487 2.056A1.5 1.5 0 0 1 17.5 17c.033 0 .065.003.097.005Z" fill="#D1560D"/><path d="M5 4.5h14a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5Z" stroke="#333"/><path d="M16.5 13.5h-11a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4" stroke="#333" stroke-linecap="round"/><path d="M21.5 12.5v-8a2 2 0 0 0-2-2h-15a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h7" stroke="#333" stroke-linecap="round"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-increase_spacing" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 13.5h-6M13.5 6.5h-6M13.5 10.5h-6M13.5 3.5h-6" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><path d="m5.5 3.5-2-2-2 2M5.5 12.5l-2 2-2-2M3.5 13.5V10M3.5 6V2.5" stroke="#D1560D" stroke-linecap="round"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-insert_columns_left" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-bja)"><path d="M7.5 15.5v-11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11M12.5 15.5v-11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11" stroke="#333" stroke-linecap="round"/><rect x=".5" y=".5" width="4" height="7" rx=".5" stroke="#333"/><path d="M2.5 15.5v-6m-2 4 2 2 2-2" stroke="#D1560D" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pptx-bja"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-insert_columns_right" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-bka)"><path d="M.5 15.5v-11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11M5.5 15.5v-11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11" stroke="#333" stroke-linecap="round"/><rect x="11.5" y=".5" width="4" height="7" rx=".5" stroke="#333"/><path d="M13.5 15.5v-6m-2 4 2 2 2-2" stroke="#D1560D" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pptx-bka"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-insert_rows_above" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-bla)"><path d="M14.5 15.5h-11a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h11M14.5 10.5h-11a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h11" stroke="#333" stroke-linecap="round"/><rect x=".5" y="4.5" width="4" height="7" rx=".5" transform="rotate(-90 .5 4.5)" stroke="#333"/><path d="M15.5 2.5h-6m4 2 2-2-2-2" stroke="#D1560D" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pptx-bla"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-insert_rows_below" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-bma)"><path d="M14.5 8.5h-11a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h11M14.5 3.5h-11a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h11" stroke="#333" stroke-linecap="round"/><rect x=".5" y="15.5" width="4" height="7" rx=".5" transform="rotate(-90 .5 15.5)" stroke="#333"/><path d="M15.5 13.5h-6m4 2 2-2-2-2" stroke="#D1560D" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pptx-bma"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-insideBorders" xmlns="http://www.w3.org/2000/svg"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M.5.5h14v14H.5z"/><path stroke="#333" d="M0 7.5h15M7.5 15V0"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-insideHorizontalBorder" xmlns="http://www.w3.org/2000/svg"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M.5.5h14v14H.5z"/><path stroke="#333" d="M0 7.5h15"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-insideVerticalBorder" xmlns="http://www.w3.org/2000/svg"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M.5.5h14v14H.5zM7.5 15V0"/><path stroke="#333" d="M7.5 15V0"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-leftBorder" xmlns="http://www.w3.org/2000/svg"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M.5.5h14v14H.5zM0 7.5h15M7.5 15V0"/><path stroke="#333" d="M.5 15V0"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-like" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.89h1.228v6.61H3a.5.5 0 0 1-.5-.5V7.39a.5.5 0 0 1 .5-.5Zm4.056-4.026c.303-.272.727-.442 1.408-.329.445.074.753.245.969.461.219.22.37.512.457.863.178.717.072 1.613-.182 2.372l-.22.66h2.522a1 1 0 0 1 .96 1.275l-1.425 4.972a.5.5 0 0 1-.48.362H5.228V6.725c.1-.074.184-.162.248-.25.141-.196.24-.445.32-.68.083-.24.16-.517.237-.787.079-.277.16-.556.256-.828.197-.555.436-1.019.767-1.316Z" stroke="#757575"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-liked" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.89h1.228v6.61H3a.5.5 0 0 1-.5-.5V7.39a.5.5 0 0 1 .5-.5Zm4.056-4.026c.303-.272.727-.442 1.408-.329.445.074.753.245.969.461.219.22.37.512.457.863.178.717.072 1.613-.182 2.372l-.22.66h2.522a1 1 0 0 1 .96 1.275l-1.425 4.972a.5.5 0 0 1-.48.362H5.228V6.725c.1-.074.184-.162.248-.25.141-.196.24-.445.32-.68.083-.24.16-.517.237-.787.079-.277.16-.556.256-.828.197-.555.436-1.019.767-1.316Z" fill="#E6F6FF" stroke="#0061CE"/></symbol><symbol fill="none" viewBox="0 0 160 3" id="pptx-icon-line" xmlns="http://www.w3.org/2000/svg"><path d="M160 0v1H0V0h160ZM160 2v1H0V2h160Z" fill="#000"/></symbol><symbol fill="none" viewBox="0 0 159 3" id="pptx-icon-line-1" xmlns="http://www.w3.org/2000/svg"><path d="M3 0v3H0V0h3ZM9 0v3H6V0h3ZM15 0v3h-3V0h3ZM21 0v3h-3V0h3ZM27 0v3h-3V0h3ZM33 0v3h-3V0h3ZM39 0v3h-3V0h3ZM45 0v3h-3V0h3ZM51 0v3h-3V0h3ZM57 0v3h-3V0h3ZM63 0v3h-3V0h3ZM69 0v3h-3V0h3ZM75 0v3h-3V0h3ZM81 0v3h-3V0h3ZM87 0v3h-3V0h3ZM93 0v3h-3V0h3ZM99 0v3h-3V0h3ZM105 0v3h-3V0h3ZM111 0v3h-3V0h3ZM117 0v3h-3V0h3ZM123 0v3h-3V0h3ZM129 0v3h-3V0h3ZM135 0v3h-3V0h3ZM141 0v3h-3V0h3ZM147 0v3h-3V0h3ZM153 0v3h-3V0h3ZM159 0v3h-3V0h3Z" fill="#000"/></symbol><symbol fill="none" viewBox="0 0 154 2" id="pptx-icon-line-2" xmlns="http://www.w3.org/2000/svg"><path d="M10 0v2H0V0h10ZM28 0v2H18V0h10ZM46 0v2H36V0h10ZM64 0v2H54V0h10ZM82 0v2H72V0h10ZM100 0v2H90V0h10ZM118 0v2h-10V0h10ZM136 0v2h-10V0h10ZM154 0v2h-10V0h10Z" fill="#000"/></symbol><symbol fill="none" viewBox="0 0 154 3" id="pptx-icon-line-3" xmlns="http://www.w3.org/2000/svg"><path d="M10 0v3H0V0h10ZM28 0v3H18V0h10ZM46 0v3H36V0h10ZM64 0v3H54V0h10ZM82 0v3H72V0h10ZM100 0v3H90V0h10ZM118 0v3h-10V0h10ZM136 0v3h-10V0h10ZM154 0v3h-10V0h10Z" fill="#000"/></symbol><symbol fill="none" viewBox="0 0 154 4" id="pptx-icon-line-4" xmlns="http://www.w3.org/2000/svg"><path d="M10 0v4H0V0h10ZM28 0v4H18V0h10ZM46 0v4H36V0h10ZM64 0v4H54V0h10ZM82 0v4H72V0h10ZM100 0v4H90V0h10ZM118 0v4h-10V0h10ZM136 0v4h-10V0h10ZM154 0v4h-10V0h10Z" fill="#000"/></symbol><symbol fill="none" viewBox="0 0 154 3" id="pptx-icon-line-5" xmlns="http://www.w3.org/2000/svg"><path d="M16 0v3H0V0h16ZM42 0v3H26V0h16ZM68 0v3H52V0h16ZM94 0v3H78V0h16ZM120 0v3h-16V0h16ZM146 0v3h-16V0h16Z" fill="#000"/></symbol><symbol fill="none" viewBox="0 0 158 4" id="pptx-icon-line-6" xmlns="http://www.w3.org/2000/svg"><path d="M18 0v4H0V0h18ZM46 0v4H28V0h18ZM74 0v4H56V0h18ZM102 0v4H84V0h18ZM130 0v4h-18V0h18ZM158 0v4h-18V0h18Z" fill="#000"/></symbol><symbol fill="none" viewBox="0 0 158 3" id="pptx-icon-line-7" xmlns="http://www.w3.org/2000/svg"><path d="M10 0v3H0V0h10ZM15 0v3h-2V0h2ZM20 0v3h-2V0h2ZM33 0v3H23V0h10ZM38 0v3h-2V0h2ZM43 0v3h-2V0h2ZM56 0v3H46V0h10ZM61 0v3h-2V0h2ZM66 0v3h-2V0h2ZM79 0v3H69V0h10ZM84 0v3h-2V0h2ZM89 0v3h-2V0h2ZM102 0v3H92V0h10ZM107 0v3h-2V0h2ZM112 0v3h-2V0h2ZM125 0v3h-10V0h10ZM130 0v3h-2V0h2ZM135 0v3h-2V0h2ZM148 0v3h-10V0h10ZM153 0v3h-2V0h2ZM158 0v3h-2V0h2Z" fill="#000"/></symbol><symbol fill="none" viewBox="0 0 160 2" id="pptx-icon-line__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-cba)"><path d="M160 0v1H0V0h160Z" fill="#000"/></g><defs><clipPath id="pptx-cba"><path fill="#fff" d="M0 0h160v2H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 160 3" id="pptx-icon-line__clip_cell-1" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-bua)"><path d="M160 0v2H0V0h160Z" fill="#000"/></g><defs><clipPath id="pptx-bua"><path fill="#fff" d="M0 0h160v3H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 160 2" id="pptx-icon-line__clip_cell-2" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-bva)"><path d="M1 0v2H0V0h1Zm4 0v2H3V0h2Zm4 0v2H7V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm3 0v2h-1V0h1Z" fill="#000"/></g><defs><clipPath id="pptx-bva"><path fill="#fff" d="M0 0h160v2H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 158 2" id="pptx-icon-line__clip_cell-3" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-bwa)" fill="#000"><path d="M10 0v2H0V0h10ZM15 0v2h-2V0h2ZM20 0v2h-2V0h2ZM33 0v2H23V0h10ZM38 0v2h-2V0h2ZM43 0v2h-2V0h2ZM56 0v2H46V0h10ZM61 0v2h-2V0h2ZM66 0v2h-2V0h2ZM79 0v2H69V0h10ZM84 0v2h-2V0h2ZM89 0v2h-2V0h2ZM102 0v2H92V0h10ZM107 0v2h-2V0h2ZM112 0v2h-2V0h2ZM125 0v2h-10V0h10ZM130 0v2h-2V0h2ZM135 0v2h-2V0h2ZM148 0v2h-10V0h10ZM153 0v2h-2V0h2ZM158 0v2h-2V0h2Z"/></g><defs><clipPath id="pptx-bwa"><path fill="#fff" d="M0 0h158v2H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 160 3" id="pptx-icon-line__clip_cell-4" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-bxa)" fill="#000"><path d="M10 0v3H0V0h10ZM18 0v3h-4V0h4ZM32 0v3H22V0h10ZM40 0v3h-4V0h4ZM54 0v3H44V0h10ZM62 0v3h-4V0h4ZM76 0v3H66V0h10ZM84 0v3h-4V0h4ZM98 0v3H88V0h10ZM106 0v3h-4V0h4ZM120 0v3h-10V0h10ZM128 0v3h-4V0h4ZM142 0v3h-10V0h10ZM150 0v3h-4V0h4ZM160 0v3h-6V0h6Z"/></g><defs><clipPath id="pptx-bxa"><path fill="#fff" d="M0 0h160v3H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 159 2" id="pptx-icon-line__clip_cell-5" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-bya)" fill="#000"><path d="M3.193 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42C7.272.331 7.78 0 8.506 0c.73 0 1.227.334 1.604.581.388.253.658.419 1.057.419.4 0 .673-.166 1.065-.42.38-.246.88-.58 1.608-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581C9.176 1.166 8.906 1 8.506 1c-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C1.058.413 2.092.023 3.162 0h.031Z"/><path d="M19.033 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.064.42-.38.246-.88.58-1.609.58-.73 0-1.226-.335-1.603-.581-.389-.253-.658-.419-1.058-.419-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C16.898.413 17.932.023 19.002 0h.031Z"/><path d="M34.873 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C32.738.413 33.772.023 34.842 0h.031Z"/><path d="M50.713 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.065-.42.38-.246.88-.58 1.608-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581-.389-.253-.658-.419-1.058-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.353.89a.5.5 0 0 1-.625-.782C48.578.413 49.612.023 50.681 0h.031Z"/><path d="M66.553 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.201-.345-1.545-.596C77.814 1.155 77.588 1 77.2 1c-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581-.389-.253-.659-.419-1.058-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.626-.782C64.42.413 65.453.023 66.522 0h.031Z"/><path d="M82.393 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.385-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.626-.782C80.26.413 81.293.023 82.362 0h.031Z"/><path d="M98.233 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.381-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782C96.1.413 97.132.023 98.202 0h.031Z"/><path d="M114.073 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z"/><path d="M129.913 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z"/><path d="M145.753 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.342-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.871-.696 1.905-1.086 2.975-1.109h.031Z"/></g><defs><clipPath id="pptx-bya"><path fill="#fff" d="M0 0h159v2H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 161 4" id="pptx-icon-line__clip_cell-6" xmlns="http://www.w3.org/2000/svg"><path d="M3.934.75c.77.03 1.26.35 1.64.6.38.25.615.4.993.4.379 0 .649-.164 1.05-.421C8 1.082 8.508.75 9.233.75c.727 0 1.224.334 1.6.581.387.253.655.419 1.054.419.4 0 .671-.166 1.062-.42.38-.246.877-.58 1.604-.58.74 0 1.198.345 1.541.596.34.249.566.404.953.404a.5.5 0 0 1 0 1c-.74 0-1.198-.345-1.541-.596-.34-.249-.566-.404-.953-.404-.4 0-.67.166-1.062.42-.379.246-.877.58-1.604.58-.727 0-1.223-.335-1.6-.581-.386-.254-.656-.42-1.054-.42-.402.001-.684.169-1.079.422-.378.242-.878.579-1.587.579-.711 0-1.177-.325-1.54-.564-.357-.235-.648-.413-1.12-.435-.83.022-1.644.325-2.348.89a.498.498 0 1 1-.624-.782c.87-.696 1.9-1.086 2.967-1.109h.032Z" fill="#000"/><path d="M19.734.75c.77.03 1.26.35 1.641.6.379.25.614.4.992.4.38 0 .649-.164 1.05-.421.385-.247.891-.579 1.616-.579.728 0 1.224.334 1.6.581.387.253.656.419 1.054.419.4 0 .672-.166 1.062-.42.38-.246.878-.58 1.605-.58.739 0 1.197.345 1.54.596.341.249.566.404.953.404a.5.5 0 0 1 0 1c-.739 0-1.198-.345-1.54-.596-.341-.249-.566-.404-.953-.404-.4 0-.672.166-1.062.42-.38.246-.878.58-1.605.58s-1.223-.335-1.6-.581c-.386-.254-.655-.42-1.054-.42-.401.001-.684.169-1.078.422-.379.242-.88.579-1.588.579-.71 0-1.177-.325-1.54-.564-.357-.235-.648-.413-1.12-.435-.829.022-1.644.325-2.348.89a.499.499 0 1 1-.624-.782c.87-.696 1.9-1.086 2.968-1.109h.03Z" fill="#000"/><path d="M35.534.75c.77.03 1.26.35 1.641.6.38.25.614.4.992.4.38 0 .65-.164 1.05-.421.385-.247.892-.579 1.616-.579.728 0 1.224.334 1.6.581.388.253.656.419 1.055.419.399 0 .67-.166 1.061-.42.38-.246.878-.58 1.605-.58.739 0 1.198.345 1.54.596.341.249.566.404.953.404a.5.5 0 0 1 0 1c-.739 0-1.197-.345-1.54-.596-.34-.249-.566-.404-.953-.404-.4 0-.671.166-1.062.42-.38.246-.878.58-1.604.58-.728 0-1.223-.335-1.6-.581-.387-.254-.656-.42-1.055-.42-.401.001-.684.169-1.078.422-.378.242-.879.579-1.588.579-.71 0-1.177-.325-1.54-.564-.357-.235-.648-.413-1.12-.435-.829.022-1.644.325-2.348.89a.498.498 0 0 1-.701-.079.501.501 0 0 1 .078-.703c.869-.696 1.9-1.086 2.967-1.109h.031Z" fill="#000"/><path d="M51.334.75c.771.03 1.26.35 1.642.6.379.25.614.4.991.4.38 0 .65-.164 1.05-.421.385-.247.892-.579 1.616-.579.728 0 1.224.334 1.6.581.388.253.656.419 1.055.419.4 0 .671-.166 1.062-.42.379-.246.877-.58 1.604-.58.74 0 1.198.345 1.541.596.34.249.566.404.953.404a.5.5 0 0 1 0 1c-.74 0-1.198-.345-1.541-.596-.34-.249-.566-.404-.953-.404-.4 0-.671.166-1.062.42-.379.246-.877.58-1.604.58-.728 0-1.223-.335-1.6-.581-.387-.254-.656-.42-1.055-.42-.4.001-.684.169-1.078.422-.378.242-.879.579-1.588.579-.71 0-1.176-.325-1.539-.564-.357-.235-.648-.413-1.121-.435-.829.022-1.643.325-2.348.89a.499.499 0 1 1-.623-.782c.869-.696 1.9-1.086 2.967-1.109h.031Z" fill="#000"/><path d="M67.135.75c.77.03 1.26.35 1.64.6.38.25.615.4.993.4.379 0 .649-.164 1.05-.421.384-.247.891-.579 1.616-.579.728 0 1.224.334 1.6.581.387.253.655.419 1.054.419.4 0 .671-.166 1.062-.42.38-.246.877-.58 1.604-.58.74 0 1.198.345 1.541.596.34.249.566.404.953.404a.5.5 0 0 1 0 1c-.74 0-1.198-.345-1.541-.596-.34-.249-.566-.404-.953-.404-.4 0-.67.166-1.062.42-.379.246-.877.58-1.604.58-.727 0-1.223-.335-1.6-.581-.386-.254-.656-.42-1.054-.42-.402.001-.684.169-1.079.422-.378.242-.878.579-1.587.579-.711 0-1.177-.325-1.54-.564-.357-.235-.648-.413-1.12-.435-.83.022-1.644.325-2.348.89a.498.498 0 0 1-.702-.079.501.501 0 0 1 .078-.703c.87-.696 1.9-1.086 2.967-1.109h.032Z" fill="#000"/><path d="M82.935.75c.77.03 1.26.35 1.641.6.379.25.614.4.992.4.38 0 .649-.164 1.05-.421.385-.247.891-.579 1.616-.579.728 0 1.224.334 1.6.581.387.253.656.419 1.054.419.4 0 .672-.166 1.062-.42.38-.246.878-.58 1.605-.58.739 0 1.197.345 1.54.596.341.249.566.404.953.404a.5.5 0 0 1 0 1c-.739 0-1.198-.345-1.54-.596-.341-.249-.566-.404-.953-.404-.4 0-.672.166-1.062.42-.38.246-.878.58-1.605.58s-1.223-.335-1.6-.581c-.386-.254-.655-.42-1.054-.42-.401.001-.684.169-1.078.422-.379.242-.88.579-1.588.579-.71 0-1.177-.325-1.54-.564-.357-.235-.648-.413-1.12-.435-.829.022-1.644.325-2.348.89a.499.499 0 1 1-.624-.782c.87-.696 1.9-1.086 2.968-1.109h.03Z" fill="#000"/><path d="M98.735.75c.77.03 1.26.35 1.641.6.379.25.614.4.992.4.38 0 .649-.164 1.05-.421.385-.247.892-.579 1.616-.579.728 0 1.224.334 1.601.581.387.253.655.419 1.054.419s.671-.166 1.061-.42c.38-.246.878-.58 1.605-.58.739 0 1.198.345 1.541.596.34.249.565.404.953.404a.499.499 0 0 1 0 1c-.74 0-1.198-.345-1.541-.596-.341-.249-.566-.404-.953-.404-.4 0-.671.166-1.062.42-.379.246-.878.58-1.604.58-.728 0-1.223-.335-1.6-.581-.387-.254-.656-.42-1.055-.42-.401.001-.684.169-1.078.422-.378.242-.879.579-1.588.579-.711 0-1.176-.325-1.539-.564-.357-.235-.649-.413-1.121-.435-.829.022-1.644.325-2.348.89a.498.498 0 0 1-.701-.079.501.501 0 0 1 .078-.703c.869-.696 1.9-1.086 2.967-1.109h.031Z" fill="#000"/><path d="M114.535.75c.771.03 1.261.35 1.642.6.379.25.614.4.991.4.38 0 .649-.164 1.05-.421.385-.247.892-.579 1.616-.579.728 0 1.224.334 1.601.581.387.253.655.419 1.054.419s.671-.166 1.062-.42c.379-.246.877-.58 1.604-.58.739 0 1.198.345 1.541.596.341.249.566.404.953.404a.5.5 0 0 1 0 1c-.739 0-1.198-.345-1.541-.596-.341-.249-.566-.404-.953-.404-.399 0-.671.166-1.062.42-.379.246-.877.58-1.604.58-.728 0-1.223-.335-1.6-.581-.387-.254-.656-.42-1.055-.42-.401.001-.684.169-1.078.422-.378.242-.879.579-1.588.579-.71 0-1.176-.325-1.539-.564-.357-.235-.648-.413-1.121-.435-.829.022-1.643.325-2.348.89a.498.498 0 0 1-.701-.079.501.501 0 0 1 .078-.703c.869-.696 1.899-1.086 2.967-1.109h.031Z" fill="#000"/><path d="M130.336.75c.77.03 1.26.35 1.641.6.379.25.614.4.992.4.379 0 .649-.164 1.05-.421.384-.247.891-.579 1.616-.579.728 0 1.224.334 1.6.581.387.253.656.419 1.054.419.4 0 .671-.166 1.062-.42.379-.246.878-.58 1.604-.58.74 0 1.198.345 1.541.596.341.249.566.404.953.404a.5.5 0 0 1 0 1c-.739 0-1.198-.345-1.541-.596-.34-.249-.566-.404-.953-.404-.399 0-.671.166-1.061.42-.38.246-.878.58-1.605.58s-1.223-.335-1.599-.581c-.387-.254-.657-.42-1.055-.42-.402.001-.684.169-1.079.422-.378.242-.878.579-1.587.579-.711 0-1.177-.325-1.54-.564-.357-.235-.648-.413-1.121-.435-.828.022-1.643.325-2.347.89a.5.5 0 1 1-.624-.782c.869-.696 1.9-1.086 2.967-1.109h.032Z" fill="#000"/><path d="M146.136.75c.771.03 1.26.35 1.641.6.379.25.614.4.992.4.379 0 .649-.164 1.05-.421.385-.247.891-.579 1.616-.579.728 0 1.224.334 1.6.581.387.253.656.419 1.054.419.4 0 .672-.166 1.062-.42.379-.246.878-.58 1.605-.58.739 0 1.197.345 1.541.596.34.249.565.404.952.404a.5.5 0 0 1 0 1c-.739 0-1.197-.345-1.541-.596-.34-.249-.565-.404-.952-.404-.4 0-.672.166-1.062.42-.379.246-.878.58-1.605.58s-1.223-.335-1.599-.581c-.387-.254-.656-.42-1.055-.42-.401.001-.684.169-1.078.422-.379.242-.879.579-1.588.579-.711 0-1.177-.325-1.539-.564-.358-.235-.649-.413-1.121-.435-.829.022-1.644.325-2.348.89a.498.498 0 0 1-.701-.079.501.501 0 0 1 .077-.703c.869-.696 1.9-1.086 2.968-1.109h.031Z" fill="#000"/><path d="M160.496 2.25c0 .69-.558 1.25-1.247 1.25-1.002 0-1.634-.487-1.981-.74a2.354 2.354 0 0 0-.339-.224.365.365 0 0 0-.174-.036c-.152 0-.252.038-.654.3-.373.242-1.041.7-2.012.7-.973 0-1.638-.46-2.008-.703-.398-.26-.496-.297-.646-.297-.158 0-.272.044-.675.303-.363.232-1.036.697-1.991.697-.96 0-1.598-.455-1.95-.687-.329-.216-.476-.295-.716-.311-.647.022-1.297.262-1.875.724-.018.015-.037.026-.055.04l-.034.024-.059.036a1.235 1.235 0 0 1-.24.11l-.033.01c-.022.007-.045.012-.068.018-.018.004-.035.009-.053.012-.028.006-.056.01-.084.013l-.032.004a1.259 1.259 0 0 1-.094.005l-.027.002-.01-.001-.025-.001c-.982-.011-1.603-.488-1.946-.738a2.354 2.354 0 0 0-.339-.224.364.364 0 0 0-.174-.036c-.152 0-.252.038-.654.3-.373.242-1.041.7-2.012.7-.973 0-1.638-.46-2.009-.703-.397-.26-.495-.297-.645-.297-.158 0-.272.044-.675.303-.363.232-1.036.697-1.992.697-.959 0-1.597-.455-1.949-.687-.329-.216-.477-.295-.716-.311-.647.022-1.297.262-1.875.724-.014.012-.03.02-.045.032a1.002 1.002 0 0 1-.05.036l-.041.025a1.147 1.147 0 0 1-.253.116l-.032.011c-.022.007-.045.012-.068.018-.018.004-.035.009-.053.012-.028.006-.056.01-.084.013l-.032.004a1.26 1.26 0 0 1-.093.005l-.028.002-.01-.001-.026-.001c-.982-.012-1.604-.488-1.947-.738a2.272 2.272 0 0 0-.338-.224.342.342 0 0 0-.075-.026l-.098-.01c-.152 0-.252.038-.655.3-.372.242-1.04.7-2.011.7-.973 0-1.638-.46-2.009-.703-.397-.26-.495-.297-.646-.297-.158 0-.271.044-.675.303-.362.232-1.035.697-1.991.697-.959 0-1.597-.455-1.949-.687-.329-.216-.477-.295-.716-.311-.647.022-1.297.262-1.875.724-.014.012-.03.021-.045.032l-.05.036-.041.025-.062.035a1.002 1.002 0 0 1-.187.08l-.036.012c-.022.007-.045.012-.068.018l-.054.012c-.027.006-.055.01-.083.013l-.033.004c-.03.003-.061.004-.092.005l-.028.002-.01-.001-.026-.001c-.982-.012-1.604-.488-1.947-.738a2.269 2.269 0 0 0-.338-.224.357.357 0 0 0-.173-.036c-.153 0-.253.038-.656.3-.372.242-1.039.7-2.01.7-.973 0-1.638-.46-2.009-.703-.298-.196-.428-.265-.538-.287l-.108-.01c-.158 0-.271.044-.675.303-.363.232-1.036.697-1.991.697-.959 0-1.597-.455-1.949-.687-.33-.216-.477-.295-.716-.311-.647.022-1.298.261-1.876.724l-.02.014a1.215 1.215 0 0 1-.124.084l-.053.03a1.216 1.216 0 0 1-.084.04l-.017.008c-.031.013-.062.024-.094.034l-.025.01-.074.019-.05.011c-.029.006-.056.01-.085.013l-.032.004c-.03.003-.061.004-.092.005l-.028.002-.01-.001-.026-.001c-.982-.012-1.604-.488-1.947-.738a2.348 2.348 0 0 0-.338-.224.36.36 0 0 0-.173-.036c-.153 0-.253.038-.656.3-.373.242-1.04.7-2.01.7-.974 0-1.638-.46-2.009-.703-.397-.26-.495-.297-.646-.297-.158 0-.271.044-.675.303-.363.232-1.036.697-1.99.697-.96 0-1.598-.455-1.95-.687-.33-.216-.477-.295-.716-.311-.648.022-1.299.261-1.876.724l-.02.014a1.248 1.248 0 0 1-.124.084l-.053.03a1.261 1.261 0 0 1-.084.04l-.017.008a1.23 1.23 0 0 1-.089.032c-.011.004-.022.009-.034.012a1.244 1.244 0 0 1-.209.043l-.028.004a1.243 1.243 0 0 1-.093.005l-.028.002-.01-.001-.027-.001c-.98-.012-1.602-.488-1.945-.738a2.35 2.35 0 0 0-.338-.224.36.36 0 0 0-.173-.036c-.153 0-.254.038-.656.3-.373.242-1.04.7-2.01.7-.974 0-1.638-.46-2.01-.703-.396-.26-.494-.297-.645-.297-.158 0-.272.044-.675.303-.363.232-1.036.697-1.991.697-.96 0-1.597-.455-1.95-.687-.329-.216-.476-.295-.715-.311-.648.022-1.298.261-1.876.724l-.02.014a1.254 1.254 0 0 1-.125.084l-.052.03a1.24 1.24 0 0 1-.084.04l-.017.008c-.03.012-.06.022-.09.032l-.033.012-.068.018-.054.012c-.03.006-.058.01-.088.013l-.027.004a1.246 1.246 0 0 1-.093.005l-.028.002-.01-.001-.027-.001c-.981-.012-1.602-.488-1.945-.738a2.35 2.35 0 0 0-.338-.224.363.363 0 0 0-.174-.036c-.153 0-.253.039-.655.3-.373.242-1.04.7-2.01.7-.974 0-1.639-.46-2.01-.703-.396-.26-.495-.297-.645-.297-.158 0-.273.044-.676.303-.363.232-1.035.697-1.99.697-.96 0-1.599-.455-1.95-.687-.33-.216-.477-.295-.715-.311-.648.022-1.299.261-1.877.724l-.019.014a1.22 1.22 0 0 1-.24.146l-.04.016a1.23 1.23 0 0 1-.087.032l-.034.012-.069.018c-.017.004-.035.009-.053.012-.03.006-.059.01-.088.013l-.027.004a1.249 1.249 0 0 1-.096.005l-.026.002-.01-.001-.025-.001c-.982-.011-1.603-.488-1.946-.738a2.328 2.328 0 0 0-.34-.224.36.36 0 0 0-.173-.036c-.152 0-.252.039-.654.3-.373.242-1.04.7-2.012.7-.973 0-1.638-.46-2.008-.703-.398-.26-.495-.297-.646-.297-.158 0-.272.044-.675.303-.363.232-1.036.697-1.991.697-.96 0-1.598-.455-1.95-.687-.329-.216-.476-.295-.715-.311-.648.022-1.298.262-1.876.724-.017.015-.037.026-.055.04l-.034.024-.059.036a1.235 1.235 0 0 1-.24.11l-.032.01-.069.018c-.017.004-.035.009-.053.012-.03.006-.059.01-.088.013l-.027.004a1.244 1.244 0 0 1-.096.005l-.026.002-.01-.001-.025-.001c-.982-.011-1.603-.488-1.946-.738a2.337 2.337 0 0 0-.34-.224.36.36 0 0 0-.173-.036c-.152 0-.252.038-.654.3-.373.242-1.04.7-2.012.7-.973 0-1.638-.46-2.009-.703-.397-.26-.495-.297-.645-.297-.158 0-.272.044-.675.303-.363.232-1.036.697-1.991.697-.96 0-1.598-.455-1.95-.687-.33-.216-.476-.295-.716-.311-.647.022-1.297.262-1.875.724-.018.015-.037.026-.055.04l-.034.024-.059.036a1.228 1.228 0 0 1-.24.11l-.033.01c-.022.007-.045.012-.068.018-.018.004-.035.009-.053.012a1.24 1.24 0 0 1-.084.013l-.032.004c-.031.003-.062.004-.093.005l-.028.002-.01-.001-.027-.001c-.981-.012-1.602-.488-1.944-.738a2.337 2.337 0 0 0-.34-.224.36.36 0 0 0-.173-.036c-.152 0-.252.038-.654.3-.373.242-1.04.7-2.012.7-.973 0-1.638-.46-2.009-.703-.397-.26-.495-.297-.645-.297-.158 0-.272.044-.675.303-.363.232-1.036.697-1.992.697-.96 0-1.597-.455-1.949-.687-.33-.216-.477-.295-.716-.311-.647.022-1.297.262-1.875.724a1.246 1.246 0 0 1-1.753-.195 1.254 1.254 0 0 1 .195-1.758C1.458.481 2.644.027 3.887 0h.046l.03.001c.99.04 1.626.462 2.022.723.2.132.303.195.391.235a.417.417 0 0 0 .19.04c.131 0 .226-.032.647-.302C7.593.454 8.266 0 9.233 0l.179.005c.876.051 1.482.47 1.83.698.398.26.495.297.645.297l.11-.01c.112-.023.244-.094.546-.29.372-.242 1.04-.7 2.01-.7 1.003 0 1.635.486 1.982.74.109.08.184.13.242.167A5.578 5.578 0 0 1 19.687 0h.046l.03.001c.99.04 1.626.462 2.022.723.2.132.303.195.392.235a.418.418 0 0 0 .19.04c.13 0 .226-.032.646-.302.38-.243 1.053-.697 2.02-.697.973 0 1.638.46 2.01.703.397.26.494.297.644.297.153 0 .254-.039.656-.3.372-.242 1.04-.7 2.01-.7 1.003 0 1.635.486 1.983.74.108.08.183.13.241.167A5.578 5.578 0 0 1 35.487 0h.047l.03.001c.988.04 1.625.462 2.021.723.2.132.303.195.392.235.064.029.114.04.19.04.13 0 .226-.032.646-.302.38-.243 1.054-.697 2.02-.697.973 0 1.638.46 2.01.703.397.26.494.297.644.297.153 0 .254-.039.656-.3.373-.242 1.04-.7 2.01-.7 1.003 0 1.636.486 1.983.74.108.08.183.13.241.167A5.578 5.578 0 0 1 51.287 0h.048l.029.001c.989.04 1.626.462 2.022.723.2.131.302.195.39.235a.42.42 0 0 0 .192.04c.13 0 .226-.032.647-.302C54.994.454 55.667 0 56.633 0c.973 0 1.639.46 2.01.703.397.26.494.296.644.296.153 0 .254-.038.656-.299.373-.242 1.04-.7 2.012-.7l.183.006c.896.054 1.473.496 1.798.734.109.08.184.13.242.167A5.577 5.577 0 0 1 67.088 0h.047l.03.001c.988.04 1.625.462 2.021.723.201.131.304.195.392.235a.417.417 0 0 0 .19.04c.13 0 .226-.032.647-.302C70.794.454 71.467 0 72.433 0c.973 0 1.64.46 2.01.703.398.26.495.296.645.296.152 0 .253-.038.655-.299.373-.242 1.04-.7 2.012-.7 1.002 0 1.634.486 1.981.74.109.08.184.13.243.167A5.577 5.577 0 0 1 82.887 0h.048l.03.001c.988.04 1.625.462 2.022.723.2.131.303.195.391.235a.417.417 0 0 0 .19.04c.13 0 .226-.032.647-.302C86.594.454 87.268 0 88.235 0c.972 0 1.638.46 2.009.703.398.26.494.297.645.297.152 0 .252-.039.654-.3.373-.242 1.04-.7 2.012-.7 1.002 0 1.634.486 1.981.74.109.08.185.13.243.167A5.58 5.58 0 0 1 98.689 0h.046l.03.001c.989.04 1.625.462 2.022.723.2.132.303.195.391.235a.418.418 0 0 0 .19.04l.098-.009c.101-.022.234-.09.549-.293.379-.243 1.053-.697 2.019-.697.974 0 1.639.46 2.01.703.398.26.495.297.645.297.152 0 .253-.039.654-.3.373-.242 1.041-.7 2.012-.7 1.002 0 1.634.486 1.981.74.109.08.185.13.243.167a5.58 5.58 0 0 1 2.91-.907h.046l.03.001c.989.04 1.626.462 2.022.723.201.132.303.195.391.235a.418.418 0 0 0 .19.04c.131 0 .226-.032.647-.302.379-.243 1.053-.697 2.019-.697.974 0 1.639.46 2.01.703.398.26.495.297.645.297l.11-.01c.111-.023.243-.094.545-.29.372-.242 1.04-.7 2.011-.7 1.002 0 1.635.486 1.982.74.109.08.184.13.242.167a5.58 5.58 0 0 1 2.91-.907h.046l.031.001c.988.04 1.625.462 2.021.723.201.132.303.195.391.235a.421.421 0 0 0 .19.04c.131 0 .226-.032.647-.302.379-.243 1.053-.697 2.02-.697l.179.005c.876.051 1.482.47 1.83.698.398.26.495.297.645.297l.11-.01c.112-.023.244-.094.546-.29.372-.242 1.039-.7 2.01-.7 1.003 0 1.635.486 1.983.74.108.08.183.13.241.167a5.579 5.579 0 0 1 2.91-.907h.047l.03.001c.988.04 1.625.462 2.021.723.201.132.303.195.392.235a.416.416 0 0 0 .19.04c.131 0 .225-.032.646-.302.379-.243 1.054-.697 2.02-.697.973 0 1.638.46 2.009.703.398.26.495.297.645.297.153 0 .254-.039.656-.3.372-.242 1.039-.7 2.01-.7 1.003 0 1.636.486 1.983.74.179.131.264.189.338.224a.357.357 0 0 0 .173.036c.689 0 1.247.56 1.247 1.25Z" fill="#000"/></symbol><symbol fill="none" viewBox="0 0 159 4" id="pptx-icon-line__clip_cell-7" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-caa)"><g clip-path="url(#pptx-cab)" fill="#000"><path d="M3.193 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42C7.272.331 7.78 0 8.506 0c.73 0 1.227.334 1.604.581.388.253.658.419 1.057.419.4 0 .673-.166 1.065-.42.38-.246.88-.58 1.608-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581C9.176 1.166 8.906 1 8.506 1c-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C1.058.413 2.092.023 3.162 0h.031Z"/><path d="M19.033 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.064.42-.38.246-.88.58-1.609.58-.73 0-1.226-.335-1.603-.581-.389-.253-.658-.419-1.058-.419-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C16.898.413 17.932.023 19.002 0h.031Z"/><path d="M34.873 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C32.738.413 33.772.023 34.842 0h.031Z"/><path d="M50.713 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.065-.42.38-.246.88-.58 1.608-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581-.389-.253-.658-.419-1.058-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.353.89a.5.5 0 0 1-.625-.782C48.578.413 49.612.023 50.681 0h.031Z"/><path d="M66.553 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.201-.345-1.545-.596C77.814 1.155 77.588 1 77.2 1c-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581-.389-.253-.659-.419-1.058-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.626-.782C64.42.413 65.453.023 66.522 0h.031Z"/><path d="M82.393 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.385-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.626-.782C80.26.413 81.293.023 82.362 0h.031Z"/><path d="M98.233 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.381-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782C96.1.413 97.132.023 98.202 0h.031Z"/><path d="M114.073 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z"/><path d="M129.913 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z"/><path d="M145.753 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.342-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.871-.696 1.905-1.086 2.975-1.109h.031ZM3.193 2c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.894-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.658.419 1.057.419.4 0 .673-.166 1.065-.42.38-.246.88-.58 1.608-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581C9.176 3.166 8.906 3 8.506 3c-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C1.058 2.413 2.092 2.023 3.162 2h.031Z"/><path d="M19.033 2c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.064.42-.38.246-.88.58-1.609.58-.73 0-1.226-.335-1.603-.581-.389-.253-.658-.419-1.058-.419-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782c.87-.696 1.904-1.086 2.974-1.109h.031Z"/><path d="M34.873 2c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782c.87-.696 1.904-1.086 2.974-1.109h.031Z"/><path d="M50.713 2c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.065-.42.38-.246.88-.58 1.608-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581-.389-.253-.658-.419-1.058-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.353.89a.5.5 0 0 1-.625-.782c.87-.696 1.904-1.086 2.974-1.109h.031Z"/><path d="M66.553 2c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.201-.345-1.545-.596C77.814 3.155 77.588 3 77.2 3c-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581-.389-.253-.659-.419-1.058-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.626-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z"/><path d="M82.393 2c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.385-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.626-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z"/><path d="M98.233 2c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.381-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782C96.1 2.413 97.132 2.023 98.202 2h.031Z"/><path d="M114.073 2c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z"/><path d="M129.913 2c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z"/><path d="M145.753 2c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.342-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.871-.696 1.905-1.086 2.975-1.109h.031Z"/></g></g><defs><clipPath id="pptx-caa"><path fill="#fff" d="M0 0h159v4H0z"/></clipPath><clipPath id="pptx-cab"><path fill="#fff" d="M0 0h159v4H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-merge_cells" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 2.5h-6a2 2 0 0 0-2 2v5m11-7h6a2 2 0 0 1 2 2v5m-11 12h-6a2 2 0 0 1-2-2v-6m11 8h6a2 2 0 0 0 2-2v-6" stroke="#333" stroke-linecap="round"/><path d="M14.5 11.5h7m-4 3-3-3 3-3M9.5 11.5h-7m4 3 3-3-3-3" stroke="#D1560D" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-more" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="8" r="1" fill="#757575"/><circle cx="8" cy="8" r="1" fill="#757575"/><circle cx="12" cy="8" r="1" fill="#757575"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-noBorder" xmlns="http://www.w3.org/2000/svg"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M.5.5h14v14H.5zM0 7.5h15M7.5 15V0"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-other_arrow_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-cna)" stroke="#fff" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12.667 3.333 8 8 3.333M12.667 8H3.333"/></g><defs><clipPath id="pptx-cna"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 96 96" id="pptx-icon-others_404_96" xmlns="http://www.w3.org/2000/svg"><path d="M60 8H24a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V28L60 8Z" stroke="#ACACAC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M57 8v15a8 8 0 0 0 8 8h15" stroke="#ACACAC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M58 50 38 70M38 50l20 20" stroke="#ACACAC" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-outsideBorders" xmlns="http://www.w3.org/2000/svg"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M0 7.5h15M7.5 15V0"/><rect x=".5" y=".5" width="14" height="14" rx=".5" stroke="#333"/></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-playFromCurrentSlide" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 9.5h-19v9a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-9Z" stroke="#333"/><path d="M10.5 12.621a.5.5 0 0 1 .818-.386l3.331 2.75a.5.5 0 0 1-.038.8l-3.332 2.248a.5.5 0 0 1-.779-.415v-4.997Z" stroke="#D1560D"/><path d="M20 3.5A1.5 1.5 0 0 1 21.5 5v2.5h-5.117l2.4-4H20Zm-2.383 0-2.4 4h-3.834l2.4-4h3.834Zm-5 0-2.4 4H6.383l2.4-4h3.834ZM4 3.5h3.617l-2.4 4H2.5V5A1.5 1.5 0 0 1 4 3.5Z" stroke="#333"/></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_add_new_ppt_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-cra)"><path d="M5 4.5h14a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5Z" stroke="#333"/><path d="M18.5 13.5h-13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8" stroke="#333" stroke-linecap="round"/><path stroke="#D1560D" stroke-linecap="round" d="M15.5 18.5h6M18.5 21.5v-6"/><path d="M21.5 15.5v-11a2 2 0 0 0-2-2h-15a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10" stroke="#333" stroke-linecap="round"/></g><defs><clipPath id="pptx-cra"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_align_text_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-csa)"><g clip-path="url(#pptx-csb)" stroke="#333"><path d="M3 1.5H1.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1H3M13 1.5h1.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H13"/><path stroke-linecap="round" d="M3.5 6.5h9M3.5 9.5h9M5.5 3.5 7.846.684a.2.2 0 0 1 .308 0L10.5 3.5M5.5 12.5l2.346 2.816a.2.2 0 0 0 .308 0L10.5 12.5"/></g></g><defs><clipPath id="pptx-csa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-csb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_delete_all_part_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-cta)"><path d="m11.5 11.5 4 4M11.5 15.5l4-4" stroke="#D1560D" stroke-linecap="round"/><path d="m5.5 3.5-.795-.786L3.5 1.5M5.497 3.499l2.003-2M5.5 11.5l-.795-.786L3.5 9.5M5.497 11.499l2.003-2" stroke="#333" stroke-linecap="round"/><path d="M2 1.5h-.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9" stroke="#333"/><path d="M14.5 10a.5.5 0 0 0 0-1v1Zm-14 2.5H1v-2H0v2h.5Zm1-3v.5H2V9h-.5v.5Zm7.5 0v.5h5.5V9H9v.5Zm2 4V13H1.5v1H11v-.5Zm-10.5-1H0A1.5 1.5 0 0 0 1.5 14v-1a.5.5 0 0 1-.5-.5H.5Zm0-2H1a.5.5 0 0 1 .5-.5V9A1.5 1.5 0 0 0 0 10.5h.5Z" fill="#333"/></g><defs><clipPath id="pptx-cta"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_delete_hide_detail_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-cua)"><g clip-path="url(#pptx-cub)"><path d="M.147 14.145a.5.5 0 0 0 .705.71l1.214-1.206.79-.797a.5.5 0 0 0-.711-.704l-.787.795-1.21 1.202Z" fill="#D1560D"/><path d="M.853 10.146a.5.5 0 0 0-.707.708l1.998 2.003a.501.501 0 0 0 .708-.707L.853 10.146ZM.147 6.145a.5.5 0 0 0 .705.71l1.214-1.206.79-.797a.5.5 0 0 0-.711-.704l-.787.795-1.21 1.202Z" fill="#D1560D"/><path d="M.853 2.146a.5.5 0 0 0-.707.708l1.998 2.003a.5.5 0 0 0 .708-.707L.853 2.146Z" fill="#D1560D"/><rect x="4.5" y="1.5" width="11" height="5" rx=".5" stroke="#333"/><rect x="4.5" y="9.5" width="11" height="5" rx=".5" stroke="#333"/></g></g><defs><clipPath id="pptx-cua"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-cub"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_delete_part_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-cva)"><path d="M8.5 2a.5.5 0 0 0 0 1V2ZM1 3.5a.5.5 0 0 0-1 0h1Zm10-1V3h3.5V2H11v.5Zm-2.5 0V3H11V2H8.5v.5Zm-8 12H1v-11H0v11h.5Zm15-11H15V10h1V3.5h-.5Zm-5.5 12V15H1.5v1H10v-.5Zm4.5-13V3a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 14.5 2v.5Zm-14 12H0A1.5 1.5 0 0 0 1.5 16v-1a.5.5 0 0 1-.5-.5H.5Z" fill="#333"/><path d="M3.5 11.5h6M3.5 8.5h9M4.5 3.5l-.795-.786L2.5 1.5M4.497 3.499l2.003-2" stroke="#333" stroke-linecap="round"/><path d="m11.5 11.5 4 4M11.5 15.5l4-4" stroke="#D1560D" stroke-linecap="round"/></g><defs><clipPath id="pptx-cva"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_delete_show_detail_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-cwa)"><g clip-path="url(#pptx-cwb)"><path d="M.855 11.148a.5.5 0 0 0-.71.704l1.206 1.214.797.79a.5.5 0 0 0 .704-.711l-.795-.786-1.202-1.211Z" fill="#D1560D"/><path d="M4.854 11.854a.5.5 0 0 0-.708-.708l-2.003 1.998a.5.5 0 0 0 .707.708l2.004-1.998ZM.855 3.148a.5.5 0 0 0-.71.704l1.206 1.214.797.79a.5.5 0 0 0 .704-.711l-.795-.786L.855 3.148Z" fill="#D1560D"/><path d="M4.854 3.854a.5.5 0 0 0-.708-.708L2.143 5.144a.5.5 0 0 0 .707.709l2.004-2Z" fill="#D1560D"/><rect x="6.5" y=".5" width="9" height="6" rx=".5" stroke="#333"/><rect x="6.5" y="9.5" width="9" height="6" rx=".5" stroke="#333"/><path d="M8.5 3.5h5M8.5 12.5h5" stroke="#333" stroke-linecap="round"/></g></g><defs><clipPath id="pptx-cwa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-cwb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_align_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-cxa)" stroke="#333"><path d="M1.5.5v14" stroke-linecap="round"/><rect x="3.5" y="1.5" width="7" height="4" rx=".5"/><path d="M4 8.5h10a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V9a.5.5 0 0 1 .5-.5Z"/></g><defs><clipPath id="pptx-cxa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_align_bottom_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-cya)"><path d="M14.5 14.5H.5" stroke="#333" stroke-linecap="round"/><rect x="13.5" y="5.5" width="7" height="4" rx=".5" transform="rotate(90 13.5 5.5)" stroke="#333"/><path d="M6.5 2v10a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5Z" stroke="#D1560D"/></g><defs><clipPath id="pptx-cya"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_align_center_horizontally_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-cza)"><path d="M7 8.5H2.5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1H7m3-5h4.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H10" stroke="#D1560D"/><path d="M7 6.5H4.5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H7m3 4h2.5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H10" stroke="#333"/><path d="M8.5.5v14" stroke="#333" stroke-linecap="round"/></g><defs><clipPath id="pptx-cza"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_align_middle_vertically_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-daa)"><path d="M14.5 8.5H.5" stroke="#333" stroke-linecap="round"/><path d="M9.5 7V5.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V7m-4 3v1.5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V10" stroke="#333"/><path d="M1.5 7V2.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V7m-5 3v4.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V10" stroke="#D1560D"/></g><defs><clipPath id="pptx-daa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_align_right_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dba)"><path d="M14.5.5v14" stroke="#333" stroke-linecap="round"/><rect x="5.5" y="1.5" width="7" height="4" rx=".5" stroke="#333"/><path d="M2 8.5h10a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V9a.5.5 0 0 1 .5-.5Z" stroke="#D1560D"/></g><defs><clipPath id="pptx-dba"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_align_top_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dca)"><path d="M14.5 1.5H.5" stroke="#333" stroke-linecap="round"/><rect x="-.5" y="-.5" width="7" height="4" rx=".5" transform="matrix(0 -1 -1 0 13 10)" stroke="#333"/><path d="M6.5 14V4a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" stroke="#D1560D"/></g><defs><clipPath id="pptx-dca"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_bring_front_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dda)"><g clip-path="url(#pptx-ddb)"><path d="M3 5.5H1.5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V3M10.5 13v1.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H13" stroke="#333"/><rect x="3.5" y="3.5" width="9" height="9" rx=".5" stroke="#D1560D"/></g></g><defs><clipPath id="pptx-dda"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-ddb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_drawing_tools_bring_front_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dea)"><path d="M7 8.5H3.5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V6M15.5 17.5v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3" stroke="#333"/><path d="M7 6.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5Z" stroke="#D1560D"/></g><defs><clipPath id="pptx-dea"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_change_shape_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dfa)"><g clip-path="url(#pptx-dfb)"><path d="M10.5 4V1.5a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H4" stroke="#333"/><path d="M12 5.208A5.502 5.502 0 0 1 10.5 16a5.502 5.502 0 0 1-5.292-4h1.05A4.5 4.5 0 1 0 12 6.257V5.208Z" fill="#333"/><path d="M10.5 5.5v5h-5" stroke="#D1560D" stroke-linecap="round"/><path d="M5.5 10.5a5 5 0 0 1 5-5" stroke="#D1560D"/></g></g><defs><clipPath id="pptx-dfa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-dfb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_drawing_tools_color_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dga)"><path d="m17.5 18.5-9.072 2.786" stroke="red" stroke-linecap="round"/><rect x="2.25" y="18.25" width="19.5" height="3.5" rx=".75" stroke="#C7CCD9" stroke-width=".5"/><path d="M18 8.047 11.944 2 5.433 8.5a1.51 1.51 0 0 0 0 2.116l3.937 3.93c.605.605 1.514.605 2.12 0l6.51-6.5ZM7.5 3.5l2 2M5.5 8.5h12M21.06 13.922c0 .405-.157.792-.439 1.078a1.488 1.488 0 0 1-1.06.446c-.398 0-.78-.16-1.061-.446a1.536 1.536 0 0 1-.44-1.078c0-1.219 1.276-1.257 1.5-2.476.226 1.22 1.5 1.258 1.5 2.476Z" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pptx-dga"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_drawing_tools_colorful_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dha)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M17 11.046 10.944 5l-6.511 6.5a1.51 1.51 0 0 0 0 2.116l3.937 3.93c.605.605 1.514.605 2.12 0l6.51-6.5ZM6.5 6.5l2 2M4.5 11.5h12M20.06 16.922c0 .405-.157.792-.439 1.078a1.488 1.488 0 0 1-1.06.446c-.398 0-.78-.16-1.061-.446a1.536 1.536 0 0 1-.44-1.078c0-1.219 1.276-1.257 1.5-2.476.226 1.22 1.5 1.258 1.5 2.476Z"/></g><defs><clipPath id="pptx-dha"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_combine_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dia)"><g clip-path="url(#pptx-dib)" stroke="#333"><rect x=".5" y=".5" width="12" height="12" rx=".5"/><rect x="3.5" y="3.5" width="12" height="12" rx=".5"/></g></g><defs><clipPath id="pptx-dia"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-dib"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_distribute_horizontally_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dja)"><path d="M14.5.5v14M1.5.5v14" stroke="#333" stroke-linecap="round"/><path d="M10.5 3v9a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5Z" stroke="#D1560D"/></g><defs><clipPath id="pptx-dja"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_distribute_vertically_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dka)"><path d="M15.5 14.5H.5M15.5 1.5H.5" stroke="#333" stroke-linecap="round"/><path d="M13 10.5H3a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5Z" stroke="#D1560D"/></g><defs><clipPath id="pptx-dka"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_edit_dian_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dla)"><g clip-path="url(#pptx-dlb)" stroke="#333"><circle cx="5" cy="2" r="1.5"/><circle cx="14" cy="2" r="1.5"/><circle cx="2" cy="8" r="1.5"/><circle cx="10" cy="8" r="1.5"/><circle cx="5" cy="14" r="1.5"/><circle cx="14" cy="14" r="1.5"/><path d="M6.5 14.5h6M6.5 2.5h6M4.5 3.5l-2 3M13 3.5l-2.5 3M2.5 9.5l2 3M10.5 9l3 3.5"/></g></g><defs><clipPath id="pptx-dla"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-dlb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_drawing_tools_edit_shape_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dma)" stroke="#333"><circle cx="11" cy="4" r="1.5"/><circle cx="20" cy="4" r="1.5"/><circle cx="4" cy="12" r="1.5"/><circle cx="13" cy="12" r="1.5"/><circle cx="11" cy="20" r="1.5"/><circle cx="20" cy="20" r="1.5"/><path d="M12.5 3.5H19M12 20.5h6.5"/><path d="m10 5.5-5 5M19 5.5l-5 5M14 13.5l5.5 5M4 13.5 9.5 19" stroke-linecap="round"/></g><defs><clipPath id="pptx-dma"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_equal_height_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dna)"><path d="M1.5 1.5v5M2.5 1.5h-2M2.5 6.5h-2M1.5 9.5v5m1-5h-2m2 5h-2" stroke="#333" stroke-linecap="round"/><rect x="4.5" y="1.5" width="9" height="5" rx=".5" stroke="#333"/><path d="M5 9.5h10a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Z" stroke="#D1560D"/></g><defs><clipPath id="pptx-dna"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_equal_size_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-doa)" stroke="#333"><rect x="1.5" y="1.5" width="14" height="14" rx=".5"/><path stroke-linecap="round" d="M7.5 3.5h2M7.5 13.5h2M13.5 7.5v2M3.5 7.5v2M3.5 8.5h10M8.5 3.5v10"/></g><defs><clipPath id="pptx-doa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_equal_width_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dpa)"><path d="M14.5 1.5h-5M14.5 2.5v-2M9.5 2.5v-2M6.5 1.5h-5m5 1v-2m-5 2v-2" stroke="#333" stroke-linecap="round"/><rect x="14.5" y="4.5" width="9" height="5" rx=".5" transform="rotate(90 14.5 4.5)" stroke="#333"/><path d="M6.5 5v10a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5Z" stroke="#D1560D"/></g><defs><clipPath id="pptx-dpa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_flip_horizontal_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dqa)"><path stroke="#D1560D" d="M8.5 1v2M8.5 4v2M8.5 7v2M8.5 10v2M8.5 13v2"/><path d="M6.5 14.5H1.759L6.5 3.437V14.5ZM10.5 14.5h4.741L10.5 3.437V14.5Z" stroke="#333"/></g><defs><clipPath id="pptx-dqa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_flip_vertical_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dra)"><path stroke="#D1560D" d="M15 8.5h-2M12 8.5h-2M9 8.5H7M6 8.5H4M3 8.5H1"/><path d="M1.5 6.5V1.759L12.563 6.5H1.5ZM1.5 10.5v4.741L12.563 10.5H1.5Z" stroke="#333"/></g><defs><clipPath id="pptx-dra"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_grid_lines_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dsa)"><path d="m11.046 14.864-.637.636H8.5v-1.909l.636-.636L13.591 8.5l1.909 1.91-4.454 4.454Zm-1.91-1.91 1.91 1.91" stroke="#D1560D" stroke-linejoin="round"/><path d="M11.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H12v4H8v4H4v1.5a.5.5 0 0 1-1 0V12H1.5a.5.5 0 0 1 0-1H3V8H1.5a.5.5 0 0 1 0-1H3V4H1.5a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 1 0V3h3V1.5a.5.5 0 0 1 1 0V3h3V1.5a.5.5 0 0 1 .5-.5ZM4 11h3V8H4v3Zm0-4h3V4H4v3Zm4 0h3V4H8v3Z" fill="#000"/></g><defs><clipPath id="pptx-dsa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_group_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dta)"><g clip-path="url(#pptx-dtb)"><rect x=".5" y=".5" width="10" height="10" rx=".5" stroke="#333"/><rect x="5.5" y="5.5" width="10" height="10" rx=".5" stroke="#333"/><circle cx="2" cy="14" r="1" fill="#333"/><circle cx="14" cy="2" r="1" fill="#333"/></g></g><defs><clipPath id="pptx-dta"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-dtb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_drawing_tools_group_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dua)" stroke="#333"><rect x="2.5" y="2.5" width="13" height="13" rx="1.5"/><rect x="8.5" y="8.5" width="13" height="13" rx="1.5"/><circle cx="4.5" cy="19.5" r="1"/><circle cx="19.5" cy="4.5" r="1"/></g><defs><clipPath id="pptx-dua"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_horizontal_text_box_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dva)"><path fill="#333" d="M0 0h2v2H0zM13 0h2v2h-2zM0 14h2v2H0zM13 14h2v2h-2z"/><path stroke="#333" d="M3 1.5h9M3 14.5h9M.5 3v10M14.5 3v10"/><path d="m5.5 4.5-3 7M5.5 4.5l3 7M3.5 9.5h4" stroke="#333" stroke-linecap="round"/><path stroke="#D1560D" stroke-linecap="round" d="M9.5 6.5h3M9.5 9.5h3"/></g><defs><clipPath id="pptx-dva"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_intersect_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dwa)"><g clip-path="url(#pptx-dwb)"><path stroke="#333" d="M5.5 5.5h5v5h-5z"/><path d="M2 .5h-.5a1 1 0 0 0-1 1V2M3 .5h2m1 0h2m1 0h.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9M.5 5V3m0 3v2m0 1v.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9m0-4V3.5H5M3.5 6v2M6 3.5h2M14 15.5h.5a1 1 0 0 0 1-1V14M13 15.5h-2m-1 0H8m-1 0h-.5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1H7m8.5-1.5v2m0-3V8m0-1v-.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1V7m0 4v1.5H11m1.5-2.5V8M10 12.5H8" stroke="#D1560D"/></g></g><defs><clipPath id="pptx-dwa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-dwb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_drawing_tools_merge_shape_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dxa)" stroke="#333"><rect x="2.5" y="2.5" width="14" height="14" rx="1.5"/><rect x="7.5" y="7.5" width="14" height="14" rx="1.5"/><path d="m12 7.5 4.5 4M7.312 12.61l5 4"/><path d="m8 8 8 8" stroke-linecap="round"/></g><defs><clipPath id="pptx-dxa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_move_down_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dya)"><rect x="1.5" y=".5" width="14" height="4" rx=".5" stroke="#333"/><path d="M6.5 10.5h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2m4 4h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2" stroke="#333" stroke-linecap="round"/><path d="M9 6.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9Z" fill="#333"/><path d="M6.854 13.147a.5.5 0 1 0-.708.707l2 2a.5.5 0 0 0 .707-.708l-2-2Z" fill="#333"/><path d="M10.146 13.147a.5.5 0 1 1 .707.707l-2 2a.5.5 0 0 1-.707-.708l2-2Z" fill="#333"/></g><defs><clipPath id="pptx-dya"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_move_up_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-dza)"><rect x="1.5" y="11.5" width="14" height="4" rx=".5" stroke="#333"/><path d="M6.5 5.5h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2m4-4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2" stroke="#333" stroke-linecap="round"/><path d="M9 9.5a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 1 0v9Z" fill="#333"/><path d="M6.854 2.853a.5.5 0 0 1-.707-.707l2-2a.5.5 0 1 1 .707.708l-2 2Z" fill="#333"/><path d="M10.146 2.853a.5.5 0 1 0 .707-.707l-2-2a.5.5 0 1 0-.707.708l2 2Z" fill="#333"/></g><defs><clipPath id="pptx-dza"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_rotate_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-eba)"><path d="M7 5.5h7A1.5 1.5 0 0 1 15.5 7v7a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 14V7A1.5 1.5 0 0 1 7 5.5Z" stroke="#333"/><path d="M1 7.5v-2A3.5 3.5 0 0 1 4.5 2h4a.5.5 0 0 1 0 1h-4A2.5 2.5 0 0 0 2 5.5v2a.5.5 0 0 1-1 0Z" fill="#D1560D"/><path d="M6.147.854a.5.5 0 0 1 .707-.707l2 2a.5.5 0 1 1-.708.707l-2-2Z" fill="#D1560D"/><path d="M6.147 4.146a.5.5 0 0 0 .707.707l2-2a.5.5 0 1 0-.708-.707l-2 2Z" fill="#D1560D"/></g><defs><clipPath id="pptx-eba"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_rotate_left_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-eaa)"><path d="M2 5.5h7A1.5 1.5 0 0 1 10.5 7v7A1.5 1.5 0 0 1 9 15.5H2A1.5 1.5 0 0 1 .5 14V7A1.5 1.5 0 0 1 2 5.5Z" stroke="#333"/><path d="M15 7.5v-2A3.5 3.5 0 0 0 11.5 2h-4a.5.5 0 0 0 0 1h4A2.5 2.5 0 0 1 14 5.5v2a.5.5 0 0 0 1 0Z" fill="#D1560D"/><path d="M9.853.854a.5.5 0 0 0-.707-.707l-2 2a.5.5 0 1 0 .708.707l2-2Z" fill="#D1560D"/><path d="M9.853 4.146a.5.5 0 0 1-.707.707l-2-2a.5.5 0 1 1 .708-.707l2 2Z" fill="#D1560D"/></g><defs><clipPath id="pptx-eaa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_send_back_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-eca)"><g clip-path="url(#pptx-ecb)"><path d="M3.5 5.5v6a1 1 0 0 0 1 1h6m-5-9h6a1 1 0 0 1 1 1v6" stroke="#D1560D"/><rect x=".5" y=".5" width="5" height="5" rx=".5" stroke="#333"/><rect x="10.5" y="10.5" width="5" height="5" rx=".5" stroke="#333"/></g></g><defs><clipPath id="pptx-eca"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-ecb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_drawing_tools_send_back_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-eda)"><path d="M6.5 9.5v8a1 1 0 0 0 1 1h7.833M9 6.5h8.5a1 1 0 0 1 1 1v7.833" stroke="#D1560D"/><rect x="2.5" y="2.5" width="7" height="7" rx="1.5" stroke="#333"/><rect x="15.5" y="15.5" width="6" height="6" rx="1.5" stroke="#333"/></g><defs><clipPath id="pptx-eda"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_split_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-eea)"><g clip-path="url(#pptx-eeb)" stroke="#333"><rect x="5.5" y="5.5" width="5" height="5" rx=".5"/><path d="M1 .5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H3.5V10a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5V1A.5.5 0 0 1 1 .5ZM15 15.5H7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h5.5V6a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5Z"/></g></g><defs><clipPath id="pptx-eea"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-eeb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_subtract_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-efa)"><g clip-path="url(#pptx-efb)"><path d="M8 5.5H6.5a1 1 0 0 0-1 1V8M13 5.5h1.5a1 1 0 0 1 1 1V8M9 5.5h3M5.5 13v1.5a1 1 0 0 0 1 1H8M5.5 12V9M9 15.5h3m1 0h1.5a1 1 0 0 0 1-1V13m0-4v3" stroke="#D1560D"/><path d="M1 .5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H3.5V10a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5V1A.5.5 0 0 1 1 .5Z" stroke="#333"/></g></g><defs><clipPath id="pptx-efa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-efb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_drawing_tools_text_color_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-ega)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="m5.5 18.5 7-13 7 13M8.5 13.5h8"/></g><defs><clipPath id="pptx-ega"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_ungroup_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-eha)"><g clip-path="url(#pptx-ehb)"><path d="M1 2.414V10h4V6.414l1 1V10h2.586l1 1H6v4h7.586l1 1H6l-.103-.005a1 1 0 0 1-.892-.893L5 15v-4H1l-.103-.005a1 1 0 0 1-.892-.893L0 10V1.414l1 1ZM10 0a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v8.586l-1-1V6h-4v3.586l-1-1V6H7.414l-1-1H10V1H2.414l-1-1H10Z" fill="#333"/><path d="m.5.5 15 15" stroke="#D1560D" stroke-linecap="round"/></g></g><defs><clipPath id="pptx-eha"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-ehb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_union_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-eia)"><g clip-path="url(#pptx-eib)" stroke="#333"><path d="M5 11.5H1.5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1V5"/><path d="M11 4.5h3.5a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-3"/></g></g><defs><clipPath id="pptx-eia"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-eib"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_drawing_tools_vertical_text_box_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-eja)"><path fill="#333" d="M16 0v2h-2V0zM16 13v2h-2v-2zM2 0v2H0V0zM2 13v2H0v-2z"/><path stroke="#333" d="M14.5 3v9M1.5 3v9M13 .5H3M13 14.5H3"/><path d="m11.5 5.5-7-3M11.5 5.5l-7 3M6.5 3.5v4" stroke="#333" stroke-linecap="round"/><path stroke="#D1560D" stroke-linecap="round" d="M9.5 9.5v3M6.5 9.5v3"/></g><defs><clipPath id="pptx-eja"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_insert_attachments_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-eka)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 11.5v-4l-5-5h-9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6m3-18v3a2 2 0 0 0 2 2h3"/><path d="m17.225 14.31-3.232 3.772a2.09 2.09 0 0 0-.404.72 2.037 2.037 0 0 0 .15 1.597c.131.242.312.457.53.632.218.175.47.307.74.387a2.226 2.226 0 0 0 1.65-.154 2.17 2.17 0 0 0 .656-.517l3.848-4.491c.245-.286.363-.654.329-1.023a1.374 1.374 0 0 0-.513-.943 1.467 1.467 0 0 0-1.053-.312c-.38.035-.732.216-.977.502l-3.848 4.49a.687.687 0 0 0-.164.511c.017.184.109.354.256.472a.734.734 0 0 0 .526.156.733.733 0 0 0 .489-.25l3.232-3.773" stroke-width=".8"/></g><defs><clipPath id="pptx-eka"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_insert_comment_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-ela)"><path d="M9.5 16.5h-3l-1.08 2.522c-.43 1-1.92.694-1.92-.394V4.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v6" stroke="#333" stroke-linecap="round"/><path d="M14.5 16.5h4M16.5 14.5v4" stroke="#D1560D" stroke-linecap="round"/><circle cx="16.5" cy="16.5" r="5" stroke="#D1560D"/></g><defs><clipPath id="pptx-ela"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_insert_formula_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-ema)" stroke="#333" stroke-linecap="round"><path d="M20.5 10.5s-.391-1.297-1.654-.455c-1.262.841-3.786 8.693-5.468 9.255-1.683.56-1.683-.841-1.683-.841"/><path d="M12 10.5s.613-1.297 1.875-.455c1.262.842 3.786 8.693 5.469 9.255 1.683.561 1.683-.841 1.683-.841"/><path d="M22 3.5H8L5.183 19.932a.5.5 0 0 1-.877.235L2.93 18.514a.5.5 0 0 0-.8.043L1.5 19.5"/></g><defs><clipPath id="pptx-ema"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_insert_header_footer_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-ena)"><rect x="4.5" y="2.5" width="16" height="19" rx="1.5" stroke="#333"/><rect x="7.5" y="5.5" width="10" height="3" rx=".5" fill="#FFF3E6" stroke="#D1560D"/><rect x="7.5" y="15.5" width="10" height="3" rx=".5" fill="#FFF3E6" stroke="#D1560D"/></g><defs><clipPath id="pptx-ena"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_insert_link_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-eoa)"><path d="M19.5 11.5v-4l-5-5h-9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6m3-18v3a2 2 0 0 0 2 2h3" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><mask id="pptx-eob" maskUnits="userSpaceOnUse" x="12.558" y="12.962" width="10" height="10" fill="#000"><path fill="#fff" d="M12.558 12.962h10v10h-10z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.393 21.09a.924.924 0 0 0 1.348 0l1.09-1.14a.27.27 0 0 1 .392 0 .3.3 0 0 1 0 .41l-1.09 1.14a1.462 1.462 0 0 1-2.133 0 1.629 1.629 0 0 1 0-2.23l2.124-2.221a1.462 1.462 0 0 1 2.134 0 .3.3 0 0 1 0 .41.27.27 0 0 1-.393 0 .924.924 0 0 0-1.348 0l-2.124 2.221a1.029 1.029 0 0 0 0 1.41Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.252 18.465c.372.39.976.39 1.347 0l2.124-2.22a1.029 1.029 0 0 0 0-1.41.924.924 0 0 0-1.347 0l-1.09 1.14a.27.27 0 0 1-.393 0 .3.3 0 0 1 0-.411l1.09-1.14a1.462 1.462 0 0 1 2.133 0m0 0c.59.616.59 1.616 0 2.231l-2.123 2.22a1.462 1.462 0 0 1-2.134 0 .3.3 0 0 1 0-.41.27.27 0 0 1 .393 0"/></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M14.393 21.09a.924.924 0 0 0 1.348 0l1.09-1.14a.27.27 0 0 1 .392 0 .3.3 0 0 1 0 .41l-1.09 1.14a1.462 1.462 0 0 1-2.133 0 1.629 1.629 0 0 1 0-2.23l2.124-2.221a1.462 1.462 0 0 1 2.134 0 .3.3 0 0 1 0 .41.27.27 0 0 1-.393 0 .924.924 0 0 0-1.348 0l-2.124 2.221a1.029 1.029 0 0 0 0 1.41Z" fill="#333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.252 18.465c.372.39.976.39 1.347 0l2.124-2.22a1.029 1.029 0 0 0 0-1.41.924.924 0 0 0-1.347 0l-1.09 1.14a.27.27 0 0 1-.393 0 .3.3 0 0 1 0-.411l1.09-1.14a1.462 1.462 0 0 1 2.133 0m0 0c.59.616.59 1.616 0 2.231l-2.123 2.22a1.462 1.462 0 0 1-2.134 0 .3.3 0 0 1 0-.41.27.27 0 0 1 .393 0" fill="#333"/><path d="m14.197 21.295-.073-.07-.196.206.072.069.072.07.197-.206-.072-.07ZM14 19.269l-.072.07.196.205.072-.07.073-.069-.197-.205-.072.07Zm6.92-2.82-.072.07.196.205.072-.069.073-.069-.197-.205-.072.069Zm-1.928 2.427.073-.07-.197-.205-.072.07-.072.069.196.205.072-.07Zm-3.251 2.213.144.139-.144-.139Zm-1.348 0 .145-.138-.145.138Zm2.437-1.14-.144-.138.144.139Zm.393 0-.144.139.144-.138Zm0 .412-.144-.139.144.139Zm-1.09 1.14.145.137-.144-.138ZM14 21.5l.145-.138L14 21.5Zm0-2.23.145.138-.145-.139Zm2.124-2.221.145.138-.145-.139Zm2.134 0-.145.138.145-.139Zm0 .41-.145-.138.145.138Zm-.393 0 .144-.138-.144.138Zm-1.348 0-.145-.138.145.138Zm-2.124 2.221.144.139-.144-.139Zm4.206-1.215-.144-.138.144.138Zm-1.347 0-.145.138.145-.138Zm3.471-2.22-.144-.14.144.14Zm0-1.41-.144.138.144-.138Zm-1.347 0-.145-.138.145.138Zm-1.09 1.14-.145-.139.145.139Zm-.393 0 .145-.139-.145.139Zm0-.411.145.138-.145-.138Zm1.09-1.14.144.139-.144-.139Zm2.133 0-.144.138.144-.138Zm0 2.231-.144-.138.144.138Zm-2.123 2.22-.145-.137.145.138Zm-2.134 0 .144-.137-.144.138Zm0-.41.144.138-.144-.138Zm-1.118 2.624-.145-.138a.724.724 0 0 1-1.058 0l-.145.138-.144.139c.45.471 1.185.471 1.636 0l-.144-.139Zm1.09-1.14-.145-.138-1.09 1.14.145.138.144.139 1.09-1.14-.145-.138Zm.392 0 .145-.138a.47.47 0 0 0-.682 0l.144.139.145.138a.07.07 0 0 1 .104 0l.144-.138Zm0 .412.145.138a.5.5 0 0 0 0-.688l-.145.139-.144.138a.1.1 0 0 1 0 .134l.144.139Zm-1.09 1.14.145.137 1.09-1.14-.145-.137-.144-.139-1.09 1.14.145.138ZM14 21.5l-.145.138a1.662 1.662 0 0 0 2.423 0l-.144-.138-.145-.138a1.262 1.262 0 0 1-1.844 0L14 21.5Zm0-2.23-.144-.139a1.829 1.829 0 0 0 0 2.507L14 21.5l.145-.138a1.429 1.429 0 0 1 0-1.954L14 19.269Zm2.124-2.221-.144-.139-2.124 2.221.144.138.145.139 2.124-2.221-.145-.139Zm2.134 0 .144-.139a1.662 1.662 0 0 0-2.423 0l.145.139.145.138a1.262 1.262 0 0 1 1.844 0l.145-.139Zm0 .41.144.139a.5.5 0 0 0 0-.688l-.145.139-.144.138a.1.1 0 0 1 0 .134l.145.138Zm-.393 0-.145.139a.47.47 0 0 0 .682 0l-.145-.139-.144-.138a.07.07 0 0 1-.104 0l-.144.138Zm-1.348 0 .145.139a.724.724 0 0 1 1.058 0l.145-.139.144-.138a1.124 1.124 0 0 0-1.637 0l.145.138Zm-2.124 3.63.145-.138a.829.829 0 0 1 0-1.133l-.145-.138-.144-.138a1.229 1.229 0 0 0 0 1.686l.144-.139Zm0-1.409.145.138 2.124-2.22-.145-.139-.145-.138-2.123 2.221.144.138Zm4.206-1.215-.144-.138a.724.724 0 0 1-1.059 0l-.144.138-.145.138a1.124 1.124 0 0 0 1.637 0l-.145-.138Zm2.124-3.63-.144.138a.829.829 0 0 1 0 1.133l.144.138.145.139a1.229 1.229 0 0 0 0-1.686l-.145.138Zm-1.347 0 .144.138a.724.724 0 0 1 1.059 0l.144-.138.145-.138a1.124 1.124 0 0 0-1.637 0l.145.138Zm-1.09 1.14.145.138 1.09-1.14-.145-.138-.145-.138-1.09 1.14.145.138Zm-.393 0-.144.138a.47.47 0 0 0 .682 0l-.145-.138-.145-.139a.07.07 0 0 1-.103 0l-.145.139Zm0-.411-.144-.139a.5.5 0 0 0 0 .688l.144-.138.145-.139a.1.1 0 0 1 0-.134l-.145-.138Zm1.09-1.14-.145-.138-1.09 1.14.145.138.145.138 1.09-1.14-.145-.138Zm2.133 0 .145-.138a1.662 1.662 0 0 0-2.423 0l.145.138.144.139a1.262 1.262 0 0 1 1.845 0l.144-.139Zm0 2.231.145.139a1.829 1.829 0 0 0 0-2.508l-.145.138-.144.139a1.429 1.429 0 0 1 0 1.954l.144.138Zm-2.123 2.22.144.139 2.124-2.22-.145-.139-.144-.138-2.124 2.22.145.139Zm-2.134 0-.145.14a1.662 1.662 0 0 0 2.423-.001l-.145-.138-.144-.138a1.262 1.262 0 0 1-1.845 0l-.144.138Zm0-.41-.145-.138a.5.5 0 0 0 0 .687l.145-.138.144-.138a.1.1 0 0 1 0-.135l-.144-.138Zm.393 0 .144-.138a.47.47 0 0 0-.682 0l.145.138.144.138a.07.07 0 0 1 .104 0l.145-.138Zm3.471-2.22-.144-.14-2.124 2.222.144.138.145.138 2.124-2.22-.145-.139Z" fill="#333" mask="url(#pptx-eob)"/></g><defs><clipPath id="pptx-eoa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_insert_picture_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-epa)"><g clip-path="url(#pptx-epb)"><path d="m3.5 21.5 10.817-11.287a1 1 0 0 1 1.405-.04L22.5 16.5" stroke="#D1560D"/><path d="M3 2.5h18A1.5 1.5 0 0 1 22.5 4v16a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 20V4A1.5 1.5 0 0 1 3 2.5Z" stroke="#333"/><circle cx="6.5" cy="7.5" r="2" stroke="#D1560D"/></g></g><defs><clipPath id="pptx-epa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath><clipPath id="pptx-epb"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_insert_redio_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-eqa)" stroke-linecap="round"><path d="M7.5 8.5h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2l5.35 4.585a1 1 0 0 0 1.65-.76V4.676a1 1 0 0 0-1.65-.76L7.5 8.5Z" stroke="#333"/><path d="M16.5 12h5M16.5 15.5l3 3M16.5 8.5l3-3" stroke="#D1560D"/></g><defs><clipPath id="pptx-eqa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_insert_shape_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-era)"><path d="M14.5 6V3.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1H6" stroke="#333"/><path d="M14.5 8v6.5H8" stroke="#D1560D" stroke-linecap="round"/><path d="M8 14.5A6.5 6.5 0 0 1 14.5 8" stroke="#D1560D"/><mask id="pptx-erb" fill="#fff"><path d="M16 9.02A6.5 6.5 0 1 1 9.021 16h1.002A5.5 5.5 0 1 0 16 10.023V9.021Z"/></mask><path d="M16 9.02A6.5 6.5 0 1 1 9.021 16h1.002A5.5 5.5 0 1 0 16 10.023V9.021Z" fill="#D9D9D9"/><path d="m16 9.02.076-.997L15 7.942V9.02h1ZM9.021 16v-1H7.942l.082 1.076.997-.076Zm1.002 0 .996-.09-.082-.91h-.914v1ZM16 10.023h-1v.914l.91.082.09-.996Zm0-1.002-.076.997A5.5 5.5 0 0 1 21 15.5h2a7.5 7.5 0 0 0-6.924-7.477L16 9.021Zm6 6.479h-1a5.5 5.5 0 0 1-5.5 5.5v2a7.5 7.5 0 0 0 7.5-7.5h-1ZM15.5 22v-1a5.498 5.498 0 0 1-5.481-5.076L9.02 16l-.997.076A7.498 7.498 0 0 0 15.5 23v-1Zm-6.479-6v1h1.002v-2H9.021v1Zm1.002 0-.996.09A6.5 6.5 0 0 0 15.5 22v-2a4.5 4.5 0 0 1-4.48-4.09l-.997.09Zm5.477 5v1a6.5 6.5 0 0 0 6.5-6.5h-2a4.5 4.5 0 0 1-4.5 4.5v1Zm5.5-5.5h1a6.5 6.5 0 0 0-5.91-6.473l-.09.996-.09.996A4.5 4.5 0 0 1 20 15.5h1Zm-5-5.477h1V9.021h-2v1.002h1Z" fill="#333" mask="url(#pptx-erb)"/></g><defs><clipPath id="pptx-era"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_insert_symbol_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-esa)" fill="#333"><path d="M4 19.5a.5.5 0 0 0-1 0h1Zm18 0a.5.5 0 0 0-1 0h1Zm-12 1V20H4.5v1H10v-.5Zm10.5 0V20H15v1h5.5v-.5Zm-17-1H3A1.5 1.5 0 0 0 4.5 21v-1a.5.5 0 0 1-.5-.5h-.5Zm18 0H21a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-.5Z"/><path d="M12.5 2A9.5 9.5 0 0 1 15 20.665v-1.04a8.5 8.5 0 1 0-5 0v1.04A9.5 9.5 0 0 1 12.5 2Z"/></g><defs><clipPath id="pptx-esa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_insert_text_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-eta)"><path d="m7.5 16.5 4.5-10 4.5 10M9.5 12.5h5" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><rect x="2.5" y="2.5" width="2" height="2" rx=".5" stroke="#D1560D"/><rect x="19.5" y="2.5" width="2" height="2" rx=".5" stroke="#D1560D"/><rect x="2.5" y="19.5" width="2" height="2" rx=".5" stroke="#D1560D"/><rect x="19.5" y="19.5" width="2" height="2" rx=".5" stroke="#D1560D"/><path stroke="#333" stroke-linecap="round" d="M6.5 3.5h11M6.5 20.5h11M3.5 17.5v-11M20.5 17.5v-11"/></g><defs><clipPath id="pptx-eta"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_insert_video_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-eua)"><rect x="2.5" y="3.5" width="19" height="17" rx="1.5" stroke="#333"/><path d="M9.5 9.058a.5.5 0 0 1 .809-.394l4.278 3.361a.5.5 0 0 1-.04.814l-4.277 2.75a.5.5 0 0 1-.77-.421v-6.11Z" stroke="#D1560D"/></g><defs><clipPath id="pptx-eua"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_layout_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-eva)" stroke="#333"><rect x="2.5" y="3.5" width="19" height="17" rx="1.5"/><rect x="5.5" y="6.5" width="13" height="5" rx=".5"/><rect x="5.5" y="13.5" width="7" height="4" rx=".5"/></g><defs><clipPath id="pptx-eva"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_list_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-ewa)"><circle cx="2.5" cy="3.5" r="1.5" fill="#D1560D"/><circle cx="2.5" cy="8.5" r="1.5" fill="#D1560D"/><circle cx="2.5" cy="13.5" r="1.5" fill="#D1560D"/><path d="M6.5 3.5h8M6.5 8.5h8M6.5 13.5h8" stroke="#333" stroke-linecap="round"/></g><defs><clipPath id="pptx-ewa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_new_from_layout_ppt_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-exa)"><rect x=".5" y="1.5" width="15" height="13" rx="1.5" stroke="#333"/><path fill="#D1560D" d="M3 4h3v1H3zM7 4h2v1H7zM7 8h2v1H7zM10 4h3v1h-3zM3 5h1v1H3zM12 5h1v1h-1zM10 8h3v1h-3zM12 7h1v1h-1zM3 8h3v1H3zM3 7h1v1H3z"/><path fill="#333" d="M3 11h10v1H3z"/></g><defs><clipPath id="pptx-exa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_part_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-eya)" stroke="#333" stroke-linecap="round"><path d="M8.5 2.5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-11M3.5 11.5h9M3.5 8.5h9"/><path d="m4.5 3.5-.795-.786L2.5 1.5M4.497 3.499l2.003-2"/></g><defs><clipPath id="pptx-eya"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_rename_part_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-eza)"><g clip-path="url(#pptx-ezb)"><path d="M1 3.5a.5.5 0 0 0-1 0h1ZM8.5 2a.5.5 0 0 0 0 1V2Zm7 1.5H15v9h1v-9h-.5Zm-15 9H1v-9H0v9h.5ZM14 2.5V3h.5V2H14v.5Zm-5.5 0V3H11V2H8.5v.5Zm2.5 11V13H1.5v1H11v-.5Zm3.5 0V13H14v1h.5v-.5Zm1-10h.5A1.5 1.5 0 0 0 14.5 2v1a.5.5 0 0 1 .5.5h.5Zm-15 9H0A1.5 1.5 0 0 0 1.5 14v-1a.5.5 0 0 1-.5-.5H.5Zm15 0H15a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-.5Z" fill="#333"/><path d="M3.5 10.5h5M3.5 7.5h6M4.5 3.5l-.795-.786L2.5 1.5M4.497 3.499l2.003-2" stroke="#333" stroke-linecap="round"/><path stroke="#333" d="M12.5 1v15"/><path stroke="#333" stroke-linecap="round" d="M10.5.5h4M10.5 15.5h4"/></g></g><defs><clipPath id="pptx-eza"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-ezb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_reset_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-faa)" stroke="#333" stroke-linecap="round"><path d="M8.5 13.5h-7a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v10M3.5 5.5h9M9.31 11.573l1.574 1.59M9.311 11.573 10.901 10"/><path d="M9.312 11.57s2.24-.555 3.688.43c1.448.985 1.5 2.5 1.5 2.5"/></g><defs><clipPath id="pptx-faa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_shadow_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g filter="url(#pptx-fbb)" fill="#333" clip-path="url(#pptx-fba)"><path d="M2.522 5.23C2.522 3.447 4.157 2 6.174 2H12.5c.288 0 .522.207.522.462 0 .254-.234.461-.522.461H6.174c-1.44 0-2.609 1.033-2.609 2.308 0 1.274 1.168 2.307 2.609 2.307h4.174v.924H6.174c-2.017 0-3.652-1.447-3.652-3.231Z"/><path d="M14 10.77c0-1.785-1.635-3.232-3.652-3.232h-3.13v.924h3.13c1.44 0 2.608 1.033 2.608 2.307 0 1.275-1.167 2.308-2.608 2.308H3.5c-.288 0-.522.207-.522.462 0 .254.234.461.522.461h6.848C12.365 14 14 12.553 14 10.77Z"/></g><defs><clipPath id="pptx-fba"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><filter id="pptx-fbb" x="1.522" y="1" width="13.478" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation=".5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1581_74642"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_1581_74642" result="shape"/></filter></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-ppt_slide_master_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fca)"><path d="M9.5 19.5h-5a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v6" stroke="#333" stroke-linecap="round"/><path d="m16.136 20.727-.909.819H12.5V19.09l.91-.818 6.363-5.727L22.5 15l-6.364 5.727Zm-2.727-2.454 2.727 2.454" stroke="#D1560D" stroke-linejoin="round"/><path d="M10 5.5h4M10 9.5h4M16 9.5h1.5a1 1 0 0 0 1-1V8M5.5 8v.5a1 1 0 0 0 1 1H8M16 5.5h1.5a1 1 0 0 1 1 1V7M5.5 7v-.5a1 1 0 0 1 1-1H8" stroke="#333"/><path d="M5 12.5h11M5 15.5h7.5" stroke="#333" stroke-linecap="round"/></g><defs><clipPath id="pptx-fca"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_text__rotate_all_text_90_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fda)"><g clip-path="url(#pptx-fdb)" stroke-linecap="round"><path d="m15.5 7.5-2 2-2-2" stroke="#D1560D"/><path d="M.5 8.5 4 .5l3.5 8M2 5.5h4M7.5 8.5l8 3.5-8 3.5m3-5.5v4" stroke="#333" stroke-linejoin="round"/><path d="M7.5 2.5h2a4 4 0 0 1 4 4v3" stroke="#D1560D"/></g></g><defs><clipPath id="pptx-fda"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-fdb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_text_direction_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fea)"><g clip-path="url(#pptx-feb)" stroke-linecap="round"><path d="m4.5 12.5-2 2-2-2M2.5 13.5V.5" stroke="#333"/><path d="m12.5 12.5-2 2-2-2M10.5 13.5v-3" stroke="#D1560D"/><path d="m6.5 11.5 4.5-10 4.5 10M8.5 7.5h5" stroke="#333" stroke-linejoin="round"/></g></g><defs><clipPath id="pptx-fea"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-feb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_text_horizontal_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-ffa)" stroke-linecap="round"><path d="m12.5 15.5 2-2-2-2m1 2H.5" stroke="#333"/><path d="m12.5 7.5 2-2-2-2m1 2h-4" stroke="#D1560D"/><path d="M1.5 11.5 6 1.5l4.5 10M3.5 7.5h5" stroke="#333" stroke-linejoin="round"/></g><defs><clipPath id="pptx-ffa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_text_rotate_all_text_270_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fga)"><g clip-path="url(#pptx-fgb)" stroke-linecap="round"><path d="m4.5 7.5-2 2-2-2" stroke="#D1560D"/><path d="m8.5 8.5 3.5-8 3.5 8m-5.5-3h4M8.5 8.5.5 12l8 3.5m-3-5.5v4" stroke="#333" stroke-linejoin="round"/><path d="M8.5 2.5h-2a4 4 0 0 0-4 4v3" stroke="#D1560D"/></g></g><defs><clipPath id="pptx-fga"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-fgb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ppt_text_stacked_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fha)"><g clip-path="url(#pptx-fhb)"><path d="M.5 7.5 4 .5l3.5 7M2 4.5h4" stroke="#D1560D" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5.5v7" stroke="#333" stroke-linecap="round"/><path d="M9.5.5H12a1.5 1.5 0 0 1 0 3H9M9 3.5h4.5a2 2 0 1 1 0 4h-4M10 9.5h2.5a3 3 0 1 1 0 6H10a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5Z" stroke="#333"/><path d="M6.5 9.5h-3a3 3 0 1 0 0 6h3" stroke="#333" stroke-linecap="round"/></g></g><defs><clipPath id="pptx-fha"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-fhb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-resolved" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6.5" stroke="#757575"/><path d="m4 7.95 2.828 2.828 4.95-4.95" stroke="#757575" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-review_clearSlideMarkup" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-fja)"><path d="m11.121 15.364 4.243-4.243m0 4.242-4.243-4.242" stroke="#D1560D" stroke-linecap="round"/><path d="M3.5 3h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5Z" stroke="#333"/><path d="M13.5 7.5v-6a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7M3.5 9h6M3.5 11.5h4" stroke="#333" stroke-linecap="round"/></g><defs><clipPath id="pptx-fja"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ribbon_word_copy_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gua)" stroke-linecap="round"><path d="M6.5 8.5v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2Z" stroke="#333"/><path d="M9.5 4.5v-2a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2" stroke="#D1560D" stroke-linejoin="round"/></g><defs><clipPath id="pptx-gua"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-ribbon_word_cut_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-gva)"><circle cx="3.5" cy="12.5" r="3" stroke="#D1560D"/><circle cx="12.5" cy="12.5" r="3" stroke="#D1560D"/><path d="M13.873.833a.5.5 0 1 0-.746-.666L13.5.5l.373.333Zm-11-.666a.5.5 0 1 0-.746.666L2.5.5l.373-.333ZM5 10l.373.333 8.5-9.5L13.5.5l-.373-.333-8.5 9.5L5 10Zm6 0 .373-.333-8.5-9.5L2.5.5l-.373.333 8.5 9.5L11 10Z" fill="#333"/></g><defs><clipPath id="pptx-gva"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-rightBorder" xmlns="http://www.w3.org/2000/svg"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M.5.5h14v14H.5zM0 7.5h15M7.5 15V0"/><path stroke="#333" d="M14.5 15V0"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-select" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-hua)"><path d="M3 11.872V1.643A1 1 0 0 1 4.581.83l8.29 5.922a1 1 0 0 1-.12 1.701L10 9.882l1.68 3.49a1 1 0 0 1-.44 1.32l-1.025.533a1 1 0 0 1-1.362-.454L7.2 11.336 4.461 12.76A1 1 0 0 1 3 11.872Z" stroke="#333" stroke-linejoin="round"/></g><defs><clipPath id="pptx-hua"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-select_column" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.5H1.5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1H4M12 1.5h2.5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H12M1 6.5h3M1 10.5h3" stroke="#333"/><path stroke="#D1560D" d="M6 6.5h4M6 10.5h4"/><path stroke="#333" d="M12 6.5h3M12 10.5h3"/><rect x="5.5" y="1.5" width="5" height="14" rx=".5" stroke="#D1560D"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-select_row" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-hsa)"><path d="M.5 12v2.5a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V12M.5 4V1.5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1V4M5.5 15v-3M10.5 15v-3" stroke="#333"/><path stroke="#D1560D" d="M5.5 10V6M10.5 10V6"/><path stroke="#333" d="M5.5 4V1M10.5 4V1"/><path d="M.5 10V6a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.49-.4L.5 10Z" stroke="#D1560D"/></g><defs><clipPath id="pptx-hsa"><path fill="#fff" transform="rotate(-90 8 8)" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-select_table" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-hta)"><path d="M8.5 14.5h-7a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v9" stroke="#333" stroke-linecap="round"/><path d="M0 4.5h15M4.5 14V1" stroke="#333"/><path d="M11 7.5a.5.5 0 0 0 1 0h-1Zm.5 0h.5V1h-1v6.5h.5Z" fill="#333"/><path d="M0 10.5h8.5" stroke="#333" stroke-linecap="round"/><path d="M14.696 13H12.76l-.15.188-1.11 1.386v-4.451L14.696 13Z" stroke="#D1560D"/></g><defs><clipPath id="pptx-hta"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-selected" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-hva)"><path d="M3 11.872V1.643A1 1 0 0 1 4.581.83l8.29 5.922a1 1 0 0 1-.12 1.701L10 9.882l1.68 3.49a1 1 0 0 1-.44 1.32l-1.025.533a1 1 0 0 1-1.362-.454L7.2 11.336 4.461 12.76A1 1 0 0 1 3 11.872Z" stroke="#333" stroke-linejoin="round"/></g><defs><clipPath id="pptx-hva"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-send" xmlns="http://www.w3.org/2000/svg"><path d="m5.528 9.51 5.07-4.452-6.703 3.14-3.686-2.96a.557.557 0 0 1-.177-.255.585.585 0 0 1 .128-.588.524.524 0 0 1 .264-.148L15.362 1.01a.506.506 0 0 1 .488.159.586.586 0 0 1 .135.518L13.059 14.57a.569.569 0 0 1-.121.244.53.53 0 0 1-.217.153.507.507 0 0 1-.501-.083L5.528 9.51Zm-1.392 4.449.73-3.593 2.864 2.323-2.79 1.857a.512.512 0 0 1-.589-.013.555.555 0 0 1-.19-.253.583.583 0 0 1-.025-.321Z" fill="currentColor"/></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-showSlide" xmlns="http://www.w3.org/2000/svg"><path d="M5 4.5h14a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5Z" stroke="#333"/><path d="M16.5 13.5h-11a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4" stroke="#333" stroke-linecap="round"/><path d="M21.5 12.5v-8a2 2 0 0 0-2-2h-15a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h7" stroke="#333" stroke-linecap="round"/><path d="M17.5 15.5c2.049 0 3.296.808 4.036 1.593.375.397.625.796.78 1.093.067.126.114.234.148.314-.034.08-.081.188-.148.314a4.962 4.962 0 0 1-.78 1.093c-.74.785-1.988 1.593-4.036 1.593-2.049 0-3.296-.808-4.036-1.593a4.962 4.962 0 0 1-.78-1.093 4.04 4.04 0 0 1-.149-.314 4.04 4.04 0 0 1 .149-.314c.155-.297.405-.696.78-1.093.74-.785 1.987-1.593 4.036-1.593Z" stroke="#D1560D"/><circle cx="17.5" cy="18.5" r="1.5" fill="#D1560D"/></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-split_cells_24" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 12.5h-6m3 3 3-3-3-3M2.5 12.5h6m-3 3-3-3 3-3" stroke="#D1560D" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 8.833V3.5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4.067M21.5 8.833V3.5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.067" stroke="#333" stroke-linecap="round"/></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-startFromBeginning" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 11v8.5A1.5 1.5 0 0 1 18 21H4a1.5 1.5 0 0 1-1.5-1.5V11h17ZM18 5a1.5 1.5 0 0 1 1.5 1.5V9h-4.117l2.4-4H18Zm-1.383 0-2.4 4h-3.834l2.4-4h3.834Zm-5 0-2.4 4H5.383l2.4-4h3.834ZM4 5h2.617l-2.4 4H2.5V6.5A1.5 1.5 0 0 1 4 5Z" stroke="#333"/><path d="M9.5 13.621a.5.5 0 0 1 .818-.386l3.331 2.75a.5.5 0 0 1-.038.8l-3.332 2.248a.5.5 0 0 1-.779-.415v-4.997Z" stroke="#D1560D"/><path d="M5 4.8a.5.5 0 0 1-1 0h1ZM19.5 19a.5.5 0 0 1 0-1v1Zm2-11.5h.5V8h-.5v-.5Zm-.5 2V9h1v.5h-1ZM20 8a.5.5 0 0 1 0-1v1Zm-.5-5v.5h-14v-1h14V3Zm-15 1H5v.8H4V4h.5Zm16 14.5v.5h-1v-1h1v.5Zm1-11H21V5h1v2.5h-.5Zm0 10H21v-8h1v8h-.5Zm0-10V8H20V7h1.5v.5Zm-1 11V18a.5.5 0 0 0 .5-.5h1a1.5 1.5 0 0 1-1.5 1.5v-.5ZM5.5 3v.5A.5.5 0 0 0 5 4H4a1.5 1.5 0 0 1 1.5-1.5V3Zm14 0v-.5A2.5 2.5 0 0 1 22 5h-1a1.5 1.5 0 0 0-1.5-1.5V3Z" fill="#333"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-statusbar_fit_width_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-ida)"><path d="M9 6H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z" fill="#333"/><path d="M4.5 1.5h-3v3m10-3h3v3m0 7v3h-3m-7 0h-3v-3" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pptx-ida"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-statusbar_full_screen_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-iea)"><path d="m5.5 5.5-4-4m0 3v-3h3m10 3v-3h-3m3 0-4 4m0 5 4 4m-3 0h3v-3m-13 0v3h3m-3 0 4-4" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="pptx-iea"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-statusbar_start_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-ifa)"><g clip-path="url(#pptx-ifb)"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm-.584 5.742a1 1 0 0 0-1.43.92l.048 2.824a1 1 0 0 0 1.463.868l2.799-1.46a1 1 0 0 0-.031-1.789L7.416 5.742Z" fill="#D1560D"/></g></g><defs><clipPath id="pptx-ifa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="pptx-ifb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="pptx-icon-styles_clear" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="2.5" width="19" height="5" rx=".5" stroke="#333"/><path d="M2.5 21V3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v18a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5Z" stroke="#333"/><path d="m16.643 19.192 4.94-5.32a1 1 0 0 0 0-1.36l-2.064-2.223a1 1 0 0 0-1.466 0L13.214 15.5l-2.368 2.55a1 1 0 0 0 0 1.361l1.94 2.09H14.5l2.143-2.309ZM13.214 15.5l3.429 3.692M10.5 21.5h11" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 14.5h6.5" stroke="#333"/><path stroke="#D1560D" stroke-linecap="round" d="M4.5 11.5h2M4.5 17.5h2"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-textHighlight" xmlns="http://www.w3.org/2000/svg"><path d="m11 13.5-5.5 2" stroke="red" stroke-linecap="round"/><rect x="1.25" y="13.25" width="13.5" height="2.5" rx=".75" stroke="#C7CCD9" stroke-width=".5"/><path d="m7 7.001 3 1.5m-3-1.5-.664-.499a2 2 0 0 1-.59-2.494L7.5.5M7 7l-2.5 4.5h4l1.5-3m0 0 .498.15a2 2 0 0 0 2.317-.934l.686-1.216" stroke="#333" stroke-linecap="round"/></symbol><symbol fill="none" viewBox="0 0 16 16" id="pptx-icon-topBorder" xmlns="http://www.w3.org/2000/svg"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M.5.5h14v14H.5zM0 7.5h15M7.5 15V0"/><path stroke="#333" d="M0 .5h15"/></symbol><symbol fill="none" viewBox="0 0 8 4" id="pptx-icon-word_vector_down__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-ima)" stroke-linecap="round"><path d="M8 0 4 4 0 0" stroke="#666"/><path d="M8 0 4 4 0 0" stroke="#000" stroke-opacity=".2"/><path d="M8 0 4 4 0 0" stroke="#000" stroke-opacity=".2"/><path d="M8 0 4 4 0 0" stroke="#000" stroke-opacity=".2"/><path d="M8 0 4 4 0 0" stroke="#000" stroke-opacity=".2"/></g><defs><clipPath id="pptx-ima"><path fill="#fff" d="M0 0h8v4H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 8 4" id="pptx-icon-word_vector_down__clip_cell-1" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#pptx-ila)" stroke-linecap="round"><path d="M8 4 4 0 0 4" stroke="#666"/><path d="M8 4 4 0 0 4" stroke="#000" stroke-opacity=".2"/><path d="M8 4 4 0 0 4" stroke="#000" stroke-opacity=".2"/><path d="M8 4 4 0 0 4" stroke="#000" stroke-opacity=".2"/><path d="M8 4 4 0 0 4" stroke="#000" stroke-opacity=".2"/></g><defs><clipPath id="pptx-ila"><path fill="#fff" d="M0 0h8v4H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 6 3" id="pptx-icon-多边形_40" xmlns="http://www.w3.org/2000/svg"><path d="M3 3 0 0h6L3 3Z" fill="#666"/><path d="M3 3 0 0h6L3 3Z" fill="#000" fill-opacity=".2"/><path d="M3 3 0 0h6L3 3Z" fill="#000" fill-opacity=".2"/><path d="M3 3 0 0h6L3 3Z" fill="#000" fill-opacity=".2"/><path d="M3 3 0 0h6L3 3Z" fill="#000" fill-opacity=".2"/></symbol><symbol fill="none" viewBox="0 0 6 3" id="pptx-icon-多边形_41" xmlns="http://www.w3.org/2000/svg"><path d="M3 0 0 3h6L3 0Z" fill="#666"/><path d="M3 0 0 3h6L3 0Z" fill="#000" fill-opacity=".2"/><path d="M3 0 0 3h6L3 0Z" fill="#000" fill-opacity=".2"/><path d="M3 0 0 3h6L3 0Z" fill="#000" fill-opacity=".2"/><path d="M3 0 0 3h6L3 0Z" fill="#000" fill-opacity=".2"/></symbol></svg>';
function uA(e) {
  Yt("common", Wa), Yt("pptx", cA);
  let t = Jn(e);
  const l = Ea(pA);
  return l.use(ja({ appName: "pptx" })), l.use(t), { app: l };
}
class mA extends Ua {
  get Document() {
    return this.getAPIComponent("Document");
  }
  get Player() {
    return this.getAPIComponent("Player");
  }
  get UndoRedo() {
    return this.getAPIComponent("UndoRedo");
  }
  get Selection() {
    return this.getAPIComponent("Selection");
  }
  get Paragraph() {
    return this.getAPIComponent("Paragraph");
  }
  get TextBox() {
    return this.getAPIComponent("TextBox");
  }
  get Viewer() {
    return this.getAPIComponent("Viewer");
  }
  get View() {
    return this.getAPIComponent("View");
  }
  get Master() {
    return this.getAPIComponent("Master");
  }
  get Shape() {
    return this.getAPIComponent("Shape");
  }
  get Comment() {
    return this.getAPIComponent("Comment");
  }
  get Constant() {
    return this.getAPIComponent("Constant");
  }
  get Finder() {
    return this.getAPIComponent("Finder");
  }
  get Table() {
    return this.getAPIComponent("Table");
  }
}
class hA extends mA {
}
class fA extends hA {
  constructor() {
    super();
    ge(this, "openFileHandler");
    ge(this, "uploadImageHandler");
  }
  setOpenFileHandler(l) {
    this.openFileHandler = l;
  }
  openFile() {
    var l;
    return (l = this.openFileHandler) == null ? void 0 : l.call(this);
  }
  setUploadImageHandler(l) {
    this.uploadImageHandler = l;
  }
  uploadLocalImage(l) {
    var n;
    return (n = this.uploadImageHandler) == null ? void 0 : n.call(this, l);
  }
  // 新增幻灯片
  newSlide(l) {
    this.Document.callFun("addSlide", l);
  }
  // 删除幻灯片
  deleteSlide(l) {
    this.Document.callFun("deleteSlides");
  }
  // 新建版式
  insertLayout(l) {
    this.Document.callFun("insertLayout", l);
  }
  // 获取版式列表
  getLayoutList(l) {
    return this.Document.callFun("getSlideLayouts", l);
  }
  // 获取项目符号列表
  getBulletList() {
    return this.Document.callFun("getBulletList");
  }
  // 获取编号列表
  getNumberingList() {
    return this.Document.callFun("getNumberingList");
  }
  // 获取形状类型列表（插入形状时使用）
  getShapeTypeList() {
    return this.Document.callFun("getShapeTypeList");
  }
  // 获取备注母版中占位符（页眉、页脚、日期、幻灯片图片、正文、页码）
  getNotesSlidePlaceholder() {
    return this.Master.callFun("getNotesSlidePlaceholder");
  }
  // 获取讲义母版中占位符（页眉、页脚、日期、幻灯片图片、正文、页码）
  getHandoutMasterSlidePlaceholder() {
    return this.Master.callFun("getHandoutMasterSlidePlaceholder");
  }
  // 获取视图界面的设置（网格线、标尺、任务窗口、参考线）
  getViewSetting() {
    return this.View.callFun("getViewSetting");
  }
  // 设置视图界面的设置（网格线、标尺、任务窗口、参考线）
  setViewSetting(l) {
    return this.View.callFun("setViewSetting", l);
  }
  // 导出文档（文档、PDF）
  async doExport(l) {
    switch (l) {
      case "exportDocument":
        await this.Document.callFun("exportDocument");
        break;
      case "exportPDF":
        console.error("missing api");
        break;
    }
  }
  // 导出PDF文档
  doExportPDF() {
    return this.Document.callFun("exportPdf");
  }
  // 播放幻灯片
  doPlay(l) {
    l == "playFromStart" ? this.Player.callFun("play", 1) : l == "playFromCurrent" && this.Player.callFun("play", 2);
  }
  // 设置缩放比例
  setZoom(l) {
    this.Document.callFun("setZoom", l);
  }
  // 获取当前缩放比例
  getZoom() {
    return Math.round(this.Document.callFun("getZoom") || 100);
  }
  // 自动缩放
  autoZoom() {
    this.Document.callFun("autoZoom");
  }
  // 跳转到指定幻灯片
  goToPage(l) {
    return this.Document.callFun("goToSlide", l || 1);
  }
  // 撤销操作
  undo() {
    return this.UndoRedo.callFun("undo");
  }
  // 重做操作
  redo() {
    return this.UndoRedo.callFun("redo");
  }
  // 检查是否可以撤销操作
  canUndo() {
    return this.UndoRedo.callFun("canUndo");
  }
  // 检查是否可以重做操作
  canRedo() {
    return this.UndoRedo.callFun("canRedo");
  }
  // 设置下划线 布尔值
  setUnderline(l = !0) {
    return this.Paragraph.callFun("setUnderline", l);
  }
  // 设置删除线 布尔值
  setStrikeThrough(l = !0) {
    return this.Paragraph.callFun("setStrikeThrough", l);
  }
  // 设置加粗 布尔值
  setBold(l = !0) {
    return this.Paragraph.callFun("setBold", l);
  }
  // 设置阴影 布尔值
  setShadow(l = !0) {
    return this.Paragraph.callFun("setShadow", l);
  }
  // 设置斜体 布尔值
  setItalic(l = !0) {
    return this.Paragraph.callFun("setItalic", l);
  }
  // 设置字体大小
  // @param val 字体大小（单位：磅）
  setFontSize(l) {
    return this.Paragraph.callFun("setFontSize", l);
  }
  // 退出文本编辑
  exitTextEdit() {
    return this.Selection.callFun("exitTextEdit");
  }
  // 设置水平对齐
  // @param val 对齐方式（left、center、right）
  setAlignHorizontalUI(l) {
    this.Paragraph.callFun("setAlignment", l);
  }
  // 设置垂直对齐
  // @param val 对齐方式（top、middle、bottom）
  setAlignVerticalUI(l) {
    this.TextBox.callFun("setVerticalAlignment", l);
  }
  // 设置字体颜色
  // @param val 颜色值（RGB格式）
  setFontColor(l) {
    return this.Paragraph.callFun("setFontColor", this.resolveColor(l));
  }
  // 设置行高颜色
  // @param val 颜色值（RGB格式）
  setHighlightColor(l) {
    return this.Paragraph.callFun("setHighlightColor", this.resolveColor(l));
  }
  // 设置字体名称
  // @param val 字体名称
  setFontName(l) {
    return this.Paragraph.callFun("setFontName", l);
  }
  // 执行幻灯片操作（新增、删除）
  doSlideOperations(l) {
    const { action: n } = l;
    switch (n) {
      case "newSlide":
        this.Document.callFun("addSlide");
        break;
      case "deleteSlide":
        this.Document.callFun("deleteSlides");
        break;
    }
  }
  // 获取当前鼠标操作的目标类型，这里暂时用于幻灯片列表中右键菜单的判断
  getCursorTargetType() {
    var l;
    return (l = this.Viewer) == null ? void 0 : l.callFun("getActiveZoom");
  }
  // 设置视图模式
  setChangeView(l) {
    this.View.callFun("setChangeView", l);
  }
  // 重置幻灯片
  resetSlide() {
    this.Document.callFun("setResetSlide");
  }
  // 设置节，这里的param是操作节的方式，包括新增、删除、折叠、展开等等
  setSection(l = "") {
    this.Document.callFun("setSection", l);
  }
  // 设置执行格式刷
  setFormatPaint() {
    this.Selection.callFun("setFormatPaint");
  }
  // 设置剪切
  setCut() {
    this.Selection.callFun("setCut");
  }
  // 设置复制
  setCopy(l) {
    this.Selection.callFun("setCopy", l);
  }
  // 设置粘贴
  setPaste(l) {
    this.Selection.callFun("setPaste", l);
  }
  // 清除所有格式
  clearAllFormatting() {
    this.Selection.callFun("clearAllFormatting");
  }
  // 设置项目符号
  // @param value 项目符号的配置对象
  setBullet(l) {
    this.Paragraph.callFun("setBullet", l);
  }
  // 设置编号
  // @param value 编号的配置对象
  setNumbering(l) {
    this.Paragraph.callFun("setNumbering", l);
  }
  // 设置文本对齐
  // @param val 对齐方式（left、center、right）
  setAlignTextUI(l) {
    this.TextBox.callFun("setVerticalAlignment", l);
  }
  // 设置行高
  // @param val 行高（单位：磅）
  setLineSpacingUI(l) {
    this.Paragraph.callFun("setLineSpacing", l);
  }
  // 设置文本方向
  // @param val 文本方向（横排、竖排、所有文字旋转90度、所有文字旋转270度）
  setTextDirectionUI(l) {
    this.TextBox.callFun("setTextDirection", l);
  }
  // 设置列表级别
  // @param val 列表级别（1-9）
  setListLevelUI(l) {
    this.Paragraph.callFun("setListLevel", l);
  }
  // 插入表格
  // @param param 表格的配置对象 {rows: 3, cols: 2}
  insertTable(l) {
    this.Document.callFun("insertTable", l);
  }
  // 插入图片
  // @param param 图片的配置对象 {url: 'https://example.com/image.jpg'}
  insertPicture() {
    this.Document.callFun("insertImage");
  }
  // 插入形状
  insertShape(l) {
    const n = this.Status, r = n.Constant;
    n.callFun("StartAction", r.InsertShape, l);
  }
  // 插入文本框 text  vertText
  insertTextBox(l) {
    const n = this.Status, r = n.Constant;
    n.callFun("StartAction", r.InsertShape, { presetType: l });
  }
  // 插入公式 未实现
  insertFormula(l) {
    this.Document.callFun("insertFormula", l);
  }
  // 插入符号 数值字符串
  insertSymbol(l) {
    this.Selection.callFun("insertSymbol", l);
  }
  // 插入视频 未实现
  insertVideo() {
    this.Document.callFun("insertVideo");
  }
  // 插入音频 未实现
  insertAudio() {
    this.Document.callFun("insertAudio");
  }
  // 插入页眉页脚 未实现
  insertHeaderFooter(l) {
    this.Document.callFun("insertHeaderFooter", l);
  }
  // 插入备注 未实现
  insertComment(l) {
    this.Document.callFun("insertComment", l);
  }
  // 插入链接 
  insertLink(l) {
    this.Selection.callFun("insertLink", l);
  }
  // 插入附件 未实现
  insertAccessory(l) {
    this.Document.callFun("insertAccessory", l);
  }
  // 幻灯片母版视图中 ，插入母版
  slideMasterInsert() {
    this.Master.callFun("slideMasterInsert");
  }
  // 幻灯片母版视图中 ，插入版式
  slideMasterInsertLayout() {
    this.Master.callFun("slideMasterInsertLayout");
  }
  // 幻灯片母版视图中 ，插入占位符 param 占位符类型 字符串
  slideMasterInsertPlaceHolder(l) {
    this.Master.callFun("slideMasterInsertPlaceHolder", l);
  }
  // 幻灯片母版视图中 ，保留母版
  slideMasterPreserve(l) {
    this.Master.callFun("slideMasterPreserve", l.isPreserve, l.isDelete);
  }
  // 幻灯片母版视图中 ，删除母版
  slideMasterDelete() {
    this.Master.callFun("slideMasterDelete");
  }
  // 幻灯片母版视图中 ，重命名母版 param 新名称
  slideMasterRename(l) {
    this.Master.callFun("slideMasterRename", l);
  }
  getCurrentLayoutAndMasterName() {
    return this.Master.callFun("getCurrentLayoutAndMasterName");
  }
  // 幻灯片母版视图中 ，设置母版版式 主要是占位符（标题、内容、日期、页码等等） 数值型
  slideMasterLayout(l) {
    this.Master.callFun("slideMasterLayout", l);
  }
  // 备注母版菜单 param 页面方向
  notesPageDirection(l) {
    this.Master.callFun("setNotesPageDirection", l);
  }
  // 备注母版菜单 param 幻灯片尺寸
  notesSlideSize(l) {
    this.Master.callFun("setNotesSlideSize", l);
  }
  // 备注母版菜单 param 占位符类型 数值型
  notesSlidePlaceholder(l) {
    this.Master.callFun("setNotesSlidePlaceholder", l);
  }
  // 讲义母版菜单 设置页面方向
  handoutMasterPageDirection(l) {
    this.Master.callFun("setHandoutMasterPageDirection", l);
  }
  // 讲义母版菜单 设置幻灯片尺寸
  handoutMasterSlideSize(l) {
    this.Master.callFun("setHandoutMasterSlideSize", l);
  }
  // 讲义母版菜单 设置每页幻灯片数量
  handoutSlidePerPage(l) {
    this.Master.callFun("setHandoutSlidePerPage", l);
  }
  // 讲义母版菜单 设置占位符类型 数值型
  handoutMasterSlidePlaceholder(l) {
    this.Master.callFun("setHandoutMasterSlidePlaceholder", l);
  }
  // 形状菜单
  editShape(l) {
    this.Selection.callFun("editShape", l);
  }
  editVertex() {
    this.Selection.callFun("editVertex");
  }
  // 合并形状 未实现
  mergeShape(l) {
    this.Selection.callFun("setMergeShape", l);
  }
  // 设置形状填充
  setShapeFill(l) {
    this.Selection.callFun("setShapeFill", this.resolveColor(l));
  }
  // 组合形状 
  groupShape(l) {
    this.Selection.callFun("setGroupShape", l);
  }
  // 旋转形状
  rotateShape(l) {
    this.Selection.callFun("setShapeRotate", l.value);
  }
  // 对齐形状
  alignShape(l) {
    this.Selection.callFun("setShapeAlign", l);
  }
  // 上移形状
  bringToFront(l) {
    this.Selection.callFun("changeShapeLayer", l.value);
  }
  // 下移形状
  sendToBack(l) {
    this.Selection.callFun("changeShapeLayer", l.value);
  }
  // 设置字体设置
  setFontSetting(l) {
    const n = { ...l };
    Object.prototype.hasOwnProperty.call(n, "fontColor") && (n.fontColor = this.resolveColor(n.fontColor)), Object.prototype.hasOwnProperty.call(n, "underlineColor") && (n.underlineColor = this.resolveColor(n.underlineColor)), this.Paragraph.callFun("setFontSetting", n);
  }
  setParagraphSetting(l) {
    let n = { ...l };
    n.indentBeforeText && (n.indentBeforeText = n.indentBeforeText * 10), n.by && (n.by = n.by * 10), n.spaceBefore && (n.spaceBefore = this.getUnitValue(n.spaceBefore, "pt", "mm")), n.spaceAfter && (n.spaceAfter = this.getUnitValue(n.spaceAfter, "pt", "mm")), n.lineSpace === "fixed" && n.at && (n.at = this.getUnitValue(n.at, "pt", "mm")), this.Paragraph.callFun("setParagraphSetting", n);
  }
  setShapeWidth(l) {
    let n = l * 10;
    this.Shape.callFun("setShapeWidth", n);
  }
  setShapeHeight(l) {
    let n = l * 10;
    this.Shape.callFun("setShapeHeight", n);
  }
  slideGetPlaceholder() {
    return this.Master.callFun("slideGetPlaceholder");
  }
  getUnitValue(l, n, r) {
    return this.Document.callFun("getUnitValue", l, n, r);
  }
  getNotesPageDirection() {
    return this.View.callFun("getNotesPageDirection");
  }
  getNotesSlideSize() {
    return this.View.callFun("getNotesSlideSize");
  }
  getPixelRatio() {
    return this.Document.callFun("getPixelRatio");
  }
  // 右侧菜单
  setShapeSizeProperty(l) {
    this.Shape.callFun("setShapeSizeProperty", l);
  }
  setShapePositionProperty(l) {
    this.Shape.callFun("setShapePositionProperty", l);
  }
  setTextBoxProperty(l) {
    this.TextBox.callFun("setTextBoxProperty", l);
  }
  resetPictureSize() {
    this.Shape.callFun("resetPictureSize");
  }
  getDateTimeList(l) {
    return this.Document.callFun("getDateTimeList", l);
  }
  getSlideLayoutData() {
    let l = this.Document.callFun("getCurrentLayoutData");
    return {
      width: this.getUnitValue(l.width, "mm", "px"),
      height: this.getUnitValue(l.height, "mm", "px"),
      list: l.list.map((n) => ({
        x: this.getUnitValue(n.x, "mm", "px"),
        y: this.getUnitValue(n.y, "mm", "px"),
        width: this.getUnitValue(n.width, "mm", "px"),
        height: this.getUnitValue(n.height, "mm", "px"),
        type: n.type
      }))
    };
  }
  getNotesHandoutData() {
    let l = this.Document.callFun("getNotesHandoutData");
    return {
      width: this.getUnitValue(l.width, "mm", "px"),
      height: this.getUnitValue(l.height, "mm", "px"),
      list: l.list.map((n) => ({
        x: this.getUnitValue(n.x, "mm", "px"),
        y: this.getUnitValue(n.y, "mm", "px"),
        width: this.getUnitValue(n.width, "mm", "px"),
        height: this.getUnitValue(n.height, "mm", "px"),
        type: n.type
      }))
    };
  }
  setHeaderFooter(l) {
    this.Document.callFun("setHeaderFooter", l.value, l.all);
  }
  getHeaderFooter() {
    return this.Document.callFun("getHeaderFooter");
  }
  // 批注
  commentUpdate(l) {
    l.type === ke.COMMENT_CREATE ? this.Comment.callFun("commentCreate", l.message) : l.type === ke.COMMENT_DELETE ? this.Comment.callFun("commentDelete", l.commentId, l.replyCommentId) : l.type === ke.COMMENT_UPDATE ? this.Comment.callFun("commentUpdate", l.commentId, l.replyCommentId, l.message) : l.type === ke.COMMENT_ADD_REPLY ? this.Comment.callFun("commentAddReply", l.commentId, l.message) : l.type === ke.COMMENT_ACTIVE_CHANGE && this.Comment.callFun("commentActiveChange", l.commentId);
  }
  setNotesSlideSizeSetting(l) {
    this.View.callFun("setNotesSlideSizeSetting", l);
  }
  getNotesSlideSizeSetting() {
    return this.View.callFun("getNotesSlideSizeSetting");
  }
  getPaperSizeOption() {
    return this.Constant.callFun("getSlideAndPaperSizeOption");
  }
  selectAll() {
    this.Document.callFun("selectAll");
  }
  searchWord(l) {
    this.Finder.callFun("search", l);
  }
  searchNext() {
    this.Finder.callFun("selectNext");
  }
  searchPrevious() {
    this.Finder.callFun("selectPrevious");
  }
  focusEditor() {
    this.Document.callFun("focusEditor");
  }
  getSearchSelectedWord() {
    return this.Finder.callFun("getSelectText");
  }
  searchStatusInfo() {
    return this.Finder.callFun("getSearchStatus");
  }
  getDeleteCommentDisabled() {
    return this.Comment.callFun("getDeleteCommentDisabled");
  }
  deleteComment(l) {
    this.Comment.callFun("deleteComment", l);
  }
  nextComment() {
    this.Comment.callFun("nextComment");
  }
  previousComment() {
    this.Comment.callFun("previousComment");
  }
  showHideComment(l) {
    this.Comment.callFun("showHideComment", l);
  }
  showHideCommentFlag(l) {
    this.Comment.callFun("showHideCommentFlag", l);
  }
  getShowHideComment() {
    return this.Comment.callFun("getShowHideComment");
  }
  getShowHideCommentFlag() {
    return this.Comment.callFun("getShowHideCommentFlag");
  }
  doShowHideSlide(l) {
    this.Player.callFun("showHideSlide", l);
  }
  deleteTable(l) {
    this.Table.callFun("deleteTable", l.value);
  }
  getTableDeleteType() {
    return this.Table.callFun("getTableDeleteType");
  }
  insertRow(l) {
    this.Table.callFun("insertRow", l);
  }
  insertColumn(l) {
    this.Table.callFun("insertColumn", l);
  }
  setIncreaseLineSpacing() {
    this.Paragraph.callFun("setIncreaseLineSpacing");
  }
  setReduceLineSpacing() {
    this.Paragraph.callFun("setReduceLineSpacing");
  }
  getCellMargin() {
    return this.Table.callFun("getCellMargin");
  }
  setCellMargin(l) {
    this.Table.callFun("setCellMargin", l);
  }
  mergeCells() {
    this.Table.callFun("mergeCells");
  }
  splitCells() {
    this.Table.callFun("splitCells");
  }
  equalRowHeight() {
    this.Table.callFun("equalRowHeight");
  }
  equalColumnWidth() {
    this.Table.callFun("equalColumnWidth");
  }
  setColWidth(l) {
    this.Table.callFun("setColWidth", l);
  }
  setRowHeight(l) {
    this.Table.callFun("setRowHeight", l);
  }
  setTableSelect(l) {
    this.Table.callFun("setTableSelect", l);
  }
  setTableFill(l) {
    this.Table.callFun("setTableFill", l);
  }
  setTableFillColor(l) {
    this.Table.callFun("setTableFillColor", l);
  }
  setTableBorderStroke(l) {
    this.Table.callFun("setTableBorderStroke", l);
  }
  setTableStrokeColor(l) {
    this.Table.callFun("setTableStrokeColor", l);
  }
  setTableBorderSize(l) {
    this.Table.callFun("setTableBorderSize", l);
  }
  setTableBorderType(l) {
    this.Table.callFun("setTableBorderType", l);
  }
  clearTableStyle() {
    this.Table.callFun("clearTableStyle");
  }
  deleteShape() {
    this.Selection.callFun("deleteShape");
  }
  shapeEditText() {
    this.Selection.callFun("shapeEditText");
  }
  playSlideShow(l) {
    this.Player.callFun("playSlideShow", l);
  }
  setScreen(l) {
    this.Player.callFun("setScreen", l);
  }
  endSlideShow() {
    this.Player.callFun("exitFullScreen");
  }
}
function Vt() {
  return {
    [a.SearchReplaceWord]: {
      enabled: !0,
      running: !1,
      disabledView: [],
      enabledElement: [],
      special: !0,
      ui: {
        value: {
          keyword: "",
          allFounds: !0,
          currentIndex: 0,
          totalCount: 0,
          loop: !0,
          currentSelect: !0,
          countNum: 0
        }
      }
    },
    [a.Close]: { enabled: !0, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.Undo]: { enabled: !1, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.Redo]: { enabled: !1, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.Paste]: { enabled: !0, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.Cut]: { enabled: !1, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.Copy]: {
      enabled: !1,
      running: !1,
      ui: {
        value: {
          copy: !1,
          duplicate: !1
        }
      },
      disabledView: [],
      enabledElement: [],
      special: !0
    },
    [a.FormatPaint]: { enabled: !1, running: !1, disabledView: [R.SlideSorter], enabledElement: [], special: !0 },
    [a.InsertLayout]: { enabled: !0, running: !1, disabledView: [R.SlideMaster, R.NotesMaster], enabledElement: [] },
    [a.DeleteSlide]: { enabled: !0, running: !1, disabledView: [R.SlideMaster, R.NotesMaster], enabledElement: [] },
    [a.ResetSlide]: { enabled: !0, running: !1, disabledView: [R.SlideSorter], enabledElement: [] },
    [a.ParagraphSetting]: { enabled: !1, running: !1, disabledView: [R.SlideSorter], enabledElement: [p.Text, p.Shape, p.Notes, p.TableCell] },
    [a.Section]: {
      enabled: !0,
      running: !1,
      ui: {
        value: {
          add: !0,
          rename: !1,
          remove: !1,
          removeAll: !1,
          collapse: !1,
          expand: !1
        }
      },
      disabledView: [R.SlideMaster],
      enabledElement: []
    },
    [a.ClearAllFormatting]: { enabled: !1, running: !1, disabledView: [R.SlideSorter], enabledElement: [p.Text, p.Shape, p.Notes] },
    [a.Bullet]: { enabled: !1, running: !1, ui: { value: null }, disabledView: [R.SlideSorter], enabledElement: [p.Text, p.Shape, p.Notes] },
    [a.Numbering]: { enabled: !1, running: !1, ui: { value: null }, disabledView: [R.SlideSorter], enabledElement: [p.Text, p.Shape, p.Notes] },
    [a.DecreaseListLevel]: {
      enabled: !1,
      running: !1,
      ui: {
        value: 0
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Notes]
    },
    [a.IncreaseListLevel]: {
      enabled: !1,
      running: !1,
      ui: {
        value: 0
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Notes]
    },
    [a.LineSpacing]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Shape, p.Notes]
    },
    [a.TextDirection]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Shape]
    },
    [a.AlignText]: {
      enabled: !1,
      running: !1,
      ui: {
        value: 0
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Shape, p.Notes]
    },
    [a.Bold]: {
      enabled: !1,
      running: !1,
      ui: {
        value: !1
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Shape, p.Notes]
    },
    [a.Shadow]: {
      enabled: !1,
      running: !1,
      ui: {
        value: !1
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Shape, p.Notes]
    },
    [a.Underline]: {
      enabled: !1,
      running: !1,
      ui: {
        value: !1
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Shape, p.Notes]
    },
    [a.Strikeout]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ae.NONE
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Shape, p.Notes]
    },
    [a.FontSetting]: {
      enabled: !1,
      running: !1,
      ui: {
        value: {}
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Shape, p.Notes, p.Table]
    },
    [a.ExitTextEdit]: { enabled: !1, running: !1, disabledView: [R.SlideSorter], enabledElement: [p.Text, p.Notes] },
    [a.Italic]: {
      enabled: !1,
      running: !1,
      ui: {
        value: !1
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Shape, p.Notes]
    },
    [a.FontSize]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      },
      getVal: (e) => {
        const t = e ? String(e) : "";
        return t != "0" ? t : "";
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Shape, p.Notes]
    },
    [a.FontColor]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Shape, p.Notes]
    },
    [a.UnderlineColor]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Shape, p.Notes]
    },
    [a.FontName]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Shape, p.Notes]
    },
    [a.AlignHorizontal]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Shape, p.Notes]
    },
    [a.AlignVertical]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Shape]
    },
    [a.Color]: {
      enabled: !1,
      running: !1,
      ui: {
        value: "0xFFFFFF"
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Shape, p.Notes]
    },
    [a.HeightLightColor]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      },
      disabledView: [R.SlideSorter],
      enabledElement: [p.Text, p.Shape, p.Notes]
    },
    [a.ArrangeGroupMenu]: {
      enabled: !1,
      running: !1,
      disabledView: [R.SlideSorter],
      enabledElement: [p.Shape, p.Chart, p.Connector, p.GroupAllConnector, p.Picture, p.SmartArt, p.Table]
    },
    [a.Zoom]: {
      enabled: !1,
      running: !1,
      ui: {
        value: 100
      },
      disabledView: [],
      enabledElement: []
    },
    [a.AutoZoom]: {
      enabled: !1,
      running: !1,
      disabledView: [],
      enabledElement: [],
      special: !0
    },
    [a.Export]: {
      enabled: !1,
      running: !1,
      disabledView: [],
      enabledElement: [],
      special: !0
    },
    [a.ExportPDF]: {
      enabled: !1,
      running: !1,
      disabledView: [],
      enabledElement: [],
      special: !0
    },
    [a.Open]: {
      enabled: !1,
      running: !1,
      disabledView: [],
      enabledElement: [],
      special: !0
    },
    [a.Play]: {
      enabled: !1,
      running: !1,
      disabledView: [],
      enabledElement: [],
      special: !0
    },
    [a.NewSlide]: {
      enabled: !1,
      running: !1,
      disabledView: [R.SlideMaster, R.NotesMaster],
      enabledElement: []
    },
    [a.GoToPage]: {
      enabled: !1,
      running: !1,
      disabledView: [],
      enabledElement: [],
      special: !0
    },
    [a.GetLayoutList]: {
      running: !1,
      enabled: !1,
      disabledView: [],
      enabledElement: [],
      special: !0
    },
    // 讲义母版菜单
    [a.GetBulletList]: {
      running: !1,
      enabled: !0,
      disabledView: [],
      enabledElement: [],
      special: !0
    },
    [a.GetNumberingList]: {
      running: !1,
      enabled: !0,
      disabledView: [],
      enabledElement: [],
      special: !0
    },
    [a.SlideOptions]: {
      running: !1,
      enabled: !1,
      disabledView: [],
      enabledElement: [],
      special: !0
    },
    [a.NormalView]: { enabled: !0, running: !0, ui: { value: !0 }, disabledView: [], enabledElement: [], special: !0 },
    // [Commands.OutlineView]: { enabled: true, running: false , ui:{value: false}},
    [a.SlideSorter]: { enabled: !0, running: !1, ui: { value: !1 }, disabledView: [], enabledElement: [], special: !0 },
    [a.NotesPage]: { enabled: !0, running: !1, ui: { value: !1 }, disabledView: [], enabledElement: [], special: !0 },
    [a.ReadingView]: { enabled: !0, running: !1, ui: { value: !1 }, disabledView: [], enabledElement: [], special: !0 },
    [a.SlideMaster]: { enabled: !0, running: !1, ui: { value: !1 }, disabledView: [], enabledElement: [], special: !0 },
    [a.HandoutMaster]: { enabled: !0, running: !1, ui: { value: !1 }, disabledView: [], enabledElement: [], special: !0 },
    [a.NotesMaster]: { enabled: !0, running: !1, ui: { value: !1 }, disabledView: [], enabledElement: [], special: !0 },
    [a.SetViewSetting]: { enabled: !0, running: !1, ui: { value: 0 }, disabledView: [], enabledElement: [], special: !0 },
    [a.GetPaperSizeOption]: { enabled: !0, running: !1, ui: { value: { slideSizeOption: [], paperSizeOption: [] } }, disabledView: [], enabledElement: [], special: !0 },
    // 插入菜单的内
    [a.InsertFormula]: { enabled: !1, running: !1, disabledView: [R.SlideSorter], enabledElement: [] },
    [a.InsertSymbol]: { enabled: !1, running: !1, disabledView: [R.SlideSorter], enabledElement: [] },
    [a.InsertVideo]: { enabled: !1, running: !1, disabledView: [R.SlideMaster, R.NotesMaster, R.SlideSorter], enabledElement: [] },
    [a.InsertAudio]: { enabled: !1, running: !1, disabledView: [R.SlideMaster, R.NotesMaster, R.SlideSorter], enabledElement: [] },
    [a.InsertTable]: { enabled: !1, running: !1, disabledView: [R.SlideSorter], enabledElement: [] },
    [a.InsertPicture]: { enabled: !1, running: !1, disabledView: [R.SlideSorter], enabledElement: [] },
    [a.InsertShape]: { enabled: !1, running: !1, disabledView: [R.SlideSorter], enabledElement: [] },
    [a.InsertTextBox]: { enabled: !1, running: !1, disabledView: [R.SlideSorter], enabledElement: [] },
    [a.InsertHeaderFooter]: { enabled: !1, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.InsertComment]: { enabled: !1, running: !1, disabledView: [R.SlideSorter, R.NotesPage, R.NotesMaster, R.SlideMaster], enabledElement: [] },
    [a.InsertLink]: { enabled: !1, running: !1, ui: { value: {} }, disabledView: [R.SlideSorter, R.NotesPage, R.NotesMaster, R.SlideMaster], enabledElement: [p.Shape, p.Text, p.Picture, p.Connector] },
    [a.InsertAccessory]: { enabled: !1, running: !1, disabledView: [R.SlideSorter], enabledElement: [] },
    // 幻灯片母版
    [a.SlideMasterInsert]: { enabled: !1, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.SlideMasterInsertLayout]: { enabled: !1, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.SlideMasterInsertPlaceHolder]: { enabled: !1, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.SlideMasterDelete]: { enabled: !1, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.SlideMasterRename]: { enabled: !1, running: !1, ui: { value: "" }, disabledView: [], enabledElement: [], special: !0 },
    [a.SlideMasterPreserve]: { enabled: !1, running: !1, ui: { value: !1 }, disabledView: [], enabledElement: [], special: !0 },
    [a.SlideMasterLayout]: { enabled: !1, running: !1, ui: { value: 0 }, disabledView: [], enabledElement: [], special: !0 },
    [a.SlideGetPlaceholder]: { enabled: !1, running: !1, ui: { value: 0 }, disabledView: [], enabledElement: [], special: !0 },
    // 备注母版菜单
    [a.NotesPageDirection]: { enabled: !0, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.NotesSlideSize]: { enabled: !0, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.NotesSlidePlaceholder]: { enabled: !0, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.SetNotesSlideSizeOption]: { enabled: !1, running: !1, ui: { value: {} }, disabledView: [], enabledElement: [], special: !0 },
    // 讲义母版菜单
    [a.HandoutMasterPageDirection]: { enabled: !0, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.HandoutMasterSlideSize]: { enabled: !0, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.HandoutSlidePerPage]: { enabled: !0, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.HandoutMasterSlidePlaceholder]: { enabled: !0, running: !1, disabledView: [], enabledElement: [], special: !0 },
    // 绘图工具菜单
    [a.ShapeEditShape]: { enabled: !1, running: !1, disabledView: [], enabledElement: [p.Shape, p.Connector, p.GroupAllConnector] },
    [a.ShapeEditVertex]: { enabled: !1, running: !1, disabledView: [], enabledElement: [p.Shape, p.Connector, p.GroupAllConnector] },
    [a.ShapeMerge]: { enabled: !1, running: !1, disabledView: [], enabledElement: [] },
    [a.ShapeFill]: { enabled: !1, running: !1, disabledView: [], enabledElement: [p.Shape] },
    [a.ShapeGroup]: { enabled: !1, running: !1, disabledView: [], enabledElement: [p.Shape, p.Connector, p.GroupAllConnector] },
    [a.ShapeRotate]: { enabled: !1, running: !1, disabledView: [], enabledElement: [p.Shape, p.Picture, p.Table] },
    [a.ShapeAlign]: { enabled: !1, running: !1, disabledView: [], enabledElement: [p.Shape, p.Connector, p.GroupAllConnector, p.Picture, p.Table] },
    [a.ShapeBringToFront]: { enabled: !1, running: !1, disabledView: [], enabledElement: [p.Shape, p.Connector, p.GroupAllConnector, p.Picture, p.Table] },
    [a.ShapeSendToBack]: { enabled: !1, running: !1, disabledView: [], enabledElement: [p.Shape, p.Connector, p.GroupAllConnector, p.Picture, p.Table] },
    [a.ShapeFontFill]: { enabled: !1, running: !1, disabledView: [], enabledElement: [p.Shape, p.Text] },
    [a.ShapeSetWidth]: { enabled: !1, running: !1, ui: { value: "" }, disabledView: [], enabledElement: [p.Shape, p.Connector, p.GroupAllConnector, p.Picture, p.Table] },
    [a.ShapeSetHeight]: { enabled: !1, running: !1, ui: { value: "" }, disabledView: [], enabledElement: [p.Shape, p.Connector, p.GroupAllConnector, p.Picture, p.Table] },
    [a.GetShapeTypeList]: { enabled: !1, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.GetShapeAlign]: { enabled: !1, running: !1, disabledView: [], enabledElement: [], special: !0 },
    // 右侧栏
    [a.RightShapeSetTextBox]: { enabled: !1, running: !1, ui: { value: {} }, disabledView: [], enabledElement: [], special: !0 },
    [a.RightShapeSetSize]: { enabled: !1, running: !1, ui: { value: {} }, disabledView: [], enabledElement: [], special: !0 },
    [a.RightShapeSetPosition]: { enabled: !1, running: !1, ui: { value: {} }, disabledView: [], enabledElement: [], special: !0 },
    [a.RightResetPictureSize]: { enabled: !1, running: !1, ui: { value: !1 }, disabledView: [], enabledElement: [], special: !0 },
    // 弹窗
    [a.GetDateTimeList]: { enabled: !1, running: !1, ui: { value: [] }, disabledView: [], enabledElement: [], special: !0 },
    [a.GetSlideLayoutData]: { enabled: !1, running: !1, ui: { value: {} }, disabledView: [], enabledElement: [], special: !0 },
    [a.GetNotesHandoutData]: { enabled: !1, running: !1, ui: { value: {} }, disabledView: [], enabledElement: [], special: !0 },
    [a.GetPixelRatio]: { enabled: !1, running: !1, ui: { value: 1 }, disabledView: [], enabledElement: [], special: !0 },
    [a.SetHeaderFooter]: { enabled: !1, running: !1, disabledView: [], enabledElement: [], special: !0 },
    // 批注
    [a.CommentUpdate]: { enabled: !1, running: !1, ui: { value: [] }, disabledView: [R.SlideSorter, R.NotesPage, R.NotesMaster, R.SlideMaster], enabledElement: [] },
    [a.DeleteComment]: { enabled: !1, running: !1, ui: { value: 0 }, disabledView: [], enabledElement: [], special: !0 },
    [a.NextComment]: { enabled: !1, running: !1, disabledView: [R.SlideSorter, R.NotesPage, R.NotesMaster, R.SlideMaster], enabledElement: [] },
    [a.PreviousComment]: { enabled: !1, running: !1, disabledView: [R.SlideSorter, R.NotesPage, R.NotesMaster, R.SlideMaster], enabledElement: [] },
    [a.ShowHideComment]: { enabled: !1, running: !1, ui: { value: !1 }, disabledView: [], enabledElement: [], special: !0 },
    [a.ShowHideCommentFlag]: { enabled: !1, running: !1, ui: { value: !1 }, disabledView: [], enabledElement: [], special: !0 },
    // 放映
    [a.ShowHideSlide]: { enabled: !1, running: !1, ui: { value: !1 }, disabledView: [R.SlideMaster, R.NotesMaster], enabledElement: [] },
    // 表格工具
    [a.TableDelete]: { enabled: !1, running: !1, ui: { value: Be.NONE }, disabledView: [], enabledElement: [], special: !0 },
    [a.InsertRow]: { enabled: !1, running: !1, disabledView: [], enabledElement: [] },
    //选中单元格时
    [a.InsertColumn]: { enabled: !1, running: !1, disabledView: [], enabledElement: [] },
    //选中单元格时
    [a.IncreaseLineSpacing]: { enabled: !1, running: !1, disabledView: [R.SlideSorter], enabledElement: [p.Text, p.Shape] },
    [a.ReduceLineSpacing]: { enabled: !1, running: !1, disabledView: [R.SlideSorter], enabledElement: [p.Text, p.Shape] },
    [a.CellMargin]: { enabled: !0, running: !1, ui: { value: 0 }, disabledView: [], enabledElement: [], special: !0 },
    [a.MergeCells]: { enabled: !1, running: !1, disabledView: [], enabledElement: [p.Table] },
    //选中单元格时
    [a.SplitCells]: { enabled: !1, running: !1, disabledView: [], enabledElement: [p.Table] },
    //选中单元格时
    [a.EqualRowHeight]: { enabled: !1, running: !1, disabledView: [], enabledElement: [p.Table] },
    //选中单元格时
    [a.EqualColumnWidth]: { enabled: !1, running: !1, disabledView: [], enabledElement: [p.Table] },
    //选中单元格时
    [a.ColWidth]: { enabled: !0, running: !1, ui: { value: 0 }, disabledView: [], enabledElement: [p.Table] },
    //选中单元格时
    [a.RowHeight]: { enabled: !0, running: !1, ui: { value: 0 }, disabledView: [], enabledElement: [p.Table] },
    //选中单元格时
    [a.TableSelect]: { enabled: !0, running: !1, disabledView: [], enabledElement: [p.Table] },
    //选中单元格时
    [a.TableFill]: { enabled: !0, running: !1, ui: { value: 0 }, disabledView: [], enabledElement: [p.Table] },
    //选中单元格时
    [a.TableFillColor]: { enabled: !0, running: !1, disabledView: [], enabledElement: [p.Table] },
    //选中单元格时
    [a.TableBorderStroke]: { enabled: !0, running: !1, ui: { value: "none" }, disabledView: [], enabledElement: [p.Table] },
    //选中单元格时
    [a.TableStrokeColor]: { enabled: !0, running: !1, disabledView: [], enabledElement: [p.Table] },
    //选中单元格时
    [a.TableBorderSize]: { enabled: !0, running: !1, disabledView: [], enabledElement: [p.Table] },
    //选中单元格时
    [a.TableBorderType]: { enabled: !0, running: !1, ui: { value: { disabled: 0, active: 0 } }, disabledView: [], enabledElement: [p.Table] },
    //选中单元格时
    [a.ClearTableStyle]: { enabled: !0, running: !1, disabledView: [], enabledElement: [p.Table] },
    //选中单元格时
    // 右侧菜单
    [a.ShapeDelete]: { enabled: !0, running: !1, disabledView: [], enabledElement: [], special: !0 },
    //选中形状时
    [a.ShapeEditText]: { enabled: !0, running: !1, disabledView: [], enabledElement: [p.Shape, p.Table] },
    //选中形状时
    [a.PlaySlideShow]: { enabled: !0, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.SetScreen]: { enabled: !0, running: !1, disabledView: [], enabledElement: [], special: !0 },
    [a.EndSlideShow]: { enabled: !0, running: !1, disabledView: [], enabledElement: [], special: !0 }
  };
}
const vA = {
  namespaced: !0,
  state: () => ({
    map: Vt(),
    readOnly: !1,
    loadEnd: !1,
    bulletList: [],
    numberingList: [],
    groupState: Ke.NONE,
    shapeAlign: Et.SINGLE,
    cutAndCopyEndabled: !1,
    formatPaintEndabled: !1,
    listLevel: 0,
    viewName: R.NormalView,
    paragraphData: {
      algn: 1,
      //默认左对齐
      bullet: null,
      indFirstLine: 0,
      indLeft: 0,
      spaceBefore: 0,
      spaceAfter: 0,
      spaceLine: 0,
      spaceLineRule: 1,
      lvl: 0
    },
    textPropertyData: {
      latinFontName: "",
      easianFontName: "",
      fontSize: "",
      fontStyle: "",
      fontColor: "",
      underline: "none",
      underlineColor: "",
      strike: 0,
      smallCaps: !1,
      allCaps: !1,
      offset: 0,
      textSpace: 0
    },
    shapeList: [],
    alignTarget: "alignSlide",
    prevView: R.NormalView,
    userId: ""
  }),
  getters: {
    map: (e) => e.map,
    can: (e) => (t) => {
      var l;
      return ((l = e.map[t]) == null ? void 0 : l.enabled) !== !0 ? !1 : e.readOnly ? e.loadEnd && Pt.has(t) : !0;
    },
    isRunning: (e) => (t) => {
      var l;
      return ((l = e.map[t]) == null ? void 0 : l.running) === !0;
    },
    active: (e) => (t) => {
      var n;
      const l = (n = e.map[t]) == null ? void 0 : n.ui;
      return !!l && l.value === !0;
    },
    enabledList: (e) => (t) => {
      var n;
      const l = (n = e.map[t]) == null ? void 0 : n.ui;
      return !!l && l.value;
    },
    getVal: (e) => (t) => {
      var n;
      const l = (n = e.map[t]) == null ? void 0 : n.ui;
      return !!l && l.value;
    },
    loadEnd: (e) => e.loadEnd,
    bullet: (e) => (t) => {
      var l, n;
      return (n = (l = e.map[t]) == null ? void 0 : l.ui) == null ? void 0 : n.value;
    },
    shapeList: (e) => e.shapeList,
    shapeAlign: (e) => e.shapeAlign,
    groupState: (e) => e.groupState,
    bulletList: (e) => e.bulletList,
    numberingList: (e) => e.numberingList,
    cutAndCopyEndabled: (e) => (t) => e.readOnly && !Pt.has(t) ? !1 : e.cutAndCopyEndabled,
    formatPaintEndabled: (e) => e.readOnly ? !1 : e.formatPaintEndabled,
    listLevel: (e) => e.listLevel,
    paragraphData: (e) => e.paragraphData,
    textPropertyData: (e) => e.textPropertyData,
    alignTarget: (e) => e.alignTarget,
    prevView: (e) => e.prevView,
    userId: (e) => e.userId,
    viewName: (e) => e.viewName
  },
  mutations: {
    resetCommandState(e) {
      e.map = Vt(), e.readOnly = !1, e.loadEnd = !1;
    },
    setLoadEnd(e, t) {
      e.loadEnd = t;
    },
    setReadOnly(e, t) {
      e.readOnly = t;
    },
    setEnabled(e, t) {
      e.loadEnd == !1 && (t.enabled = !1), e.map[t.cmd].enabled = t.enabled;
    },
    setEnabledList(e, t) {
      e.loadEnd == !1 && (t.enabledList = t.enabledList), e.map[t.cmd].ui = {
        value: t.enabledList
      };
    },
    setRunning(e, t) {
      e.map[t.cmd].running = t.running;
    },
    setState(e, t) {
      const l = e.map[t.cmd];
      if (!l) return;
      const n = t.ui;
      if (n === void 0) {
        l.ui = void 0;
        return;
      }
      l.ui = { ...l.ui ?? {}, ...n };
    },
    clearState(e, t) {
      const l = Vt()[t.cmd];
      l && (e.map[t.cmd] = JSON.parse(JSON.stringify(l)));
    },
    setBulletList(e, t) {
      e.bulletList = t;
    },
    setNumberingList(e, t) {
      e.numberingList = t;
    },
    setActive(e, t) {
      e.map[t.cmd].ui = { value: t.ui.value };
    },
    setShapeAlign(e, t) {
      e.shapeAlign = t;
    },
    setGroupState(e, t) {
      e.groupState = t;
    },
    setCutAndCopyEndabled(e, t) {
      e.cutAndCopyEndabled = t, e.map[a.Cut].enabled = t, e.map[a.Copy].enabled = t;
    },
    setFormatPaintEndabled(e, t) {
      e.formatPaintEndabled = t, e.map[a.FormatPaint].enabled = t;
    },
    setListLevel(e, t) {
      e.listLevel = t;
    },
    setParagraphData(e, t) {
      e.paragraphData = t;
    },
    setTextPropertyData(e, t) {
      e.textPropertyData = t;
    },
    setShapeTypeList(e, t) {
      e.shapeList = t;
    },
    setAlignTarget(e, t) {
      e.alignTarget = t;
    },
    setPrevView(e, t) {
      e.prevView = t;
    },
    setUserId(e, t) {
      e.userId = t;
    },
    setViewName(e, t) {
      e.viewName = t;
    }
  },
  actions: {
    async run({ commit: e, getters: t }, l) {
      const { cmd: n, fn: r, param: A } = l;
      if (t.can(n)) {
        e("setRunning", { cmd: n, running: !0 });
        try {
          await r(A);
        } catch (o) {
          console.error(o);
        } finally {
          e("setRunning", { cmd: n, running: !1 });
        }
      }
    }
  }
}, gA = {
  namespaced: !0,
  state: () => ({
    activeTab: Je.Start,
    selectedElement: p.Nil,
    prevTabs: Je.Start,
    hideMenu: [],
    tempTabs: {}
  }),
  getters: {
    activeTab(e) {
      return e.activeTab;
    },
    tempTabs(e) {
      return e.tempTabs;
    },
    selectedElement(e) {
      return e.selectedElement;
    },
    prevTabs(e) {
      return e.prevTabs;
    },
    hideMenu(e) {
      return e.hideMenu;
    }
  },
  mutations: {
    setActiveTab(e, t) {
      e.activeTab = t, el(t) && (e.prevTabs = t);
    },
    setTempTabs(e, t) {
      e.tempTabs = t;
    },
    setPrevTabs(e, t) {
      e.prevTabs = t;
    },
    setHideMenu(e, t) {
      !e.hideMenu.includes(t.tabs) && t.hide ? e.hideMenu.push(t.tabs) : e.hideMenu.includes(t.tabs) && !t.hide && (e.hideMenu = e.hideMenu.filter((l) => l !== t.tabs));
    }
  },
  actions: {
    setSelectedElement({ commit: e, state: t }, l) {
      t.selectedElement = l.value;
      let n = null;
      switch (!0) {
        case l.value === p.Text:
          t.tempTabs[pe.Shape] || (e("setPrevTabs", t.activeTab), e("setTempTabs", { ...t.tempTabs, [pe.Shape]: ft[pe.Shape] }));
          break;
        case (l.value & p.Table) === p.Table:
          t.tempTabs[pe.TableTools] || (e("setPrevTabs", t.activeTab), e("setTempTabs", { ...t.tempTabs, [pe.TableTools]: ft[pe.TableTools], [pe.TableStyle]: ft[pe.TableStyle] }), n = pe.TableTools);
          break;
        case l.value === p.Nil:
          n = null;
          let r = t.tempTabs[pe.SlideMaster] || t.tempTabs[pe.HandoutMaster] || t.tempTabs[pe.NotesMaster] || null;
          r ? (n = r.name, e("setTempTabs", { [r.name]: r })) : (e("setTempTabs", {}), el(t.prevTabs) ? n = t.prevTabs : n = Je.Start);
          break;
        default:
          t.tempTabs[pe.Shape] || (e("setPrevTabs", t.activeTab), n = pe.Shape, e("setTempTabs", { ...t.tempTabs, [pe.Shape]: ft[pe.Shape] }));
          break;
      }
      n && Promise.resolve().then(() => {
        e("setActiveTab", n);
      });
    }
  }
};
function Sl() {
  return qa({
    modules: {
      file: Zi,
      menu: gA,
      command: vA,
      panel: Vn
    }
  });
}
Sl();
function bA(e) {
  return typeof e == "object" && e !== null && typeof e.addEventListener == "function" && typeof e.removeEventListener == "function" && typeof e.dispatchEvent == "function";
}
function wA(e) {
  var l;
  const t = (l = e.widgetMountContext) == null ? void 0 : l.eventTarget;
  return e.eventTarget ?? (bA(t) ? t : void 0);
}
function xA(e) {
  var t;
  return (t = e.widgetMountContext) == null ? void 0 : t.uiOptions;
}
function yA(e) {
  const t = Sl();
  t.commit("panel/initPanel", Ga(xA(e)));
  const { app: l } = uA(e.lang);
  Ar(l), l.use(t);
  const n = new fA(), r = new Ya(n);
  l.provide(Qa, r);
  const A = new Hn({
    store: t,
    api: n,
    eventTarget: wA(e)
  });
  return l.provide(Ae, A), l.provide(xl, {
    toolBarElm: qe(null),
    navigateBarElm: qe(null),
    editorElm: qe(null),
    rightPanelElm: qe(null),
    bottomBarElm: qe(null)
  }), e.widgetMountContext && l.provide(Lt, e.widgetMountContext), {
    app: l,
    api: n,
    commandService: A,
    store: t
  };
}
function SA(e) {
  return e ?? window.lang ?? window.navigator.language;
}
function MA(e) {
  return new Promise((t, l) => {
    var A;
    const n = (A = e.state) == null ? void 0 : A.file;
    if (n != null && n.isReady) {
      t();
      return;
    }
    if (n != null && n.hasError) {
      l(new Error(n.message ?? "document load failed"));
      return;
    }
    const r = e.watch(
      (o) => {
        var u, d, f;
        return {
          isReady: !!((u = o.file) != null && u.isReady),
          hasError: !!((d = o.file) != null && d.hasError),
          message: ((f = o.file) == null ? void 0 : f.message) ?? null
        };
      },
      (o) => {
        if (o.isReady) {
          r(), t();
          return;
        }
        o.hasError && (r(), l(new Error(o.message ?? "document load failed")));
      }
    );
  });
}
function _t(e, t, l) {
  const n = {
    docId: (l == null ? void 0 : l.docId) ?? "",
    file: l == null ? void 0 : l.file,
    fileUrl: l == null ? void 0 : l.fileUrl,
    fileName: l == null ? void 0 : l.fileName,
    user: l == null ? void 0 : l.user,
    uiOptions: l == null ? void 0 : l.uiOptions,
    widgetMode: l == null ? void 0 : l.widgetMode,
    mainDom: qe(null),
    eventTarget: (l == null ? void 0 : l.eventTarget) ?? window
  }, { app: r, api: A, commandService: o, store: u } = yA({
    lang: SA(t),
    eventTarget: l == null ? void 0 : l.eventTarget,
    widgetMountContext: n
  }), d = MA(u);
  r.mount(e);
  async function f() {
    var m, s;
    await ((s = (m = A.docApp) == null ? void 0 : m.destroy) == null ? void 0 : s.call(m)), o.destroy(), r.unmount();
  }
  return {
    app: r,
    api: A,
    commandService: o,
    store: u,
    ready: d,
    destroy: f,
    close: f,
    unmount: f
  };
}
const PA = _t, ZA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _t,
  mount: PA,
  mountPptxApp: _t
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ae as C,
  nn as H,
  Ht as L,
  _i as M,
  an as N,
  Je as P,
  ct as R,
  Zt as S,
  ft as T,
  Fe as U,
  rn as V,
  Bi as _,
  a,
  Q as b,
  TA as c,
  Ke as d,
  p as e,
  Et as f,
  NA as g,
  Fn as h,
  de as i,
  on as j,
  An as k,
  _e as l,
  pt as m,
  $n as n,
  Ct as o,
  Be as p,
  RA as q,
  VA as r,
  qt as s,
  Ei as t,
  pn as u,
  CA as v,
  dn as w,
  R as x,
  sn as y,
  ZA as z
};
