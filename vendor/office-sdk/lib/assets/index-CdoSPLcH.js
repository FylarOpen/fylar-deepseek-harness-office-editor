import { C as z, i as G, V as Se, a as s, b as Z, T as kl, S as Ie, g as Ye, c as Xe, r as w, d as Ee, e as We, f as q, L as Cl, h as El, R as Oe, j as be, k as He, l as we, _ as le, m as il, n as Pe, o as je, p as Ae, q as ol, U as Ne, s as hl, t as Rl, u as W, v as ve, w as Re, x as Ve, P as Il, H as Te, N as ue, y as Hl } from "../mountPptxApp.js?t=1788405500779";
import { M as fa } from "../mountPptxApp.js?t=1788405500779";
import { d as N, a0 as D, k as L, o as f, c as C, au as me, ad as Le, a1 as e, a2 as l, q as h, a9 as K, at as Q, r as $, v as rl, aj as k, b3 as O, a4 as c, av as ae, aw as ne, ab as H, aP as ze, S as ee, aM as Al, a as I, aR as Fe, ax as Je, ay as Ke, a3 as fl, a7 as M, b1 as vl, b2 as _l, a6 as al, a8 as Ue, al as oe, cn as Bl, h as ie, aK as Qe, ak as he, am as J, ai as te, an as ke, as as fe, ao as de, b0 as Ce, ap as _e, aq as ge, ar as Me, aF as sl, aG as dl, aI as re, aH as cl, ac as Nl, aa as Ol, ae as Pl, af as Ll, aV as yl, ah as gl, cw as Fl } from "../ApiBase.js?t=1788405500779";
import { I as Ze } from "./IconTextButton-BpiFDMZq.js?t=1788405500779";
const Ml = /* @__PURE__ */ N({
  __name: "ViewBigIconTextButton",
  props: {
    cmd: {},
    label: {},
    showArrow: { type: Boolean },
    iconName: {},
    x: {},
    y: {},
    tooltip: {},
    clickHandler: { type: Function }
  },
  setup(i) {
    const o = D(), t = i, a = h(() => o == null ? void 0 : o.getters["command/can"](t.cmd)), d = L(z), n = h(() => o == null ? void 0 : o.getters["command/active"](t.cmd));
    function m() {
      t.clickHandler && t.clickHandler(t.cmd), d.run(t.cmd, { value: !0 });
    }
    return (g, r) => (f(), C("div", {
      onClick: Le(m, ["stop"]),
      class: me({ active: n.value })
    }, [
      e(l(Ze), {
        label: i.label,
        "resource-image": l(G).image,
        disabled: !a.value,
        showArrow: i.showArrow,
        x: i.x,
        y: i.y,
        "image-width": l(G).width,
        tooltip: i.tooltip,
        "icon-name": i.iconName
      }, null, 8, ["label", "resource-image", "disabled", "showArrow", "x", "y", "image-width", "tooltip", "icon-name"])
    ], 2));
  }
}), Be = /* @__PURE__ */ K(Ml, [["__scopeId", "data-v-61baad60"]]), Dl = { style: { display: "flex", gap: "8px" } }, na = /* @__PURE__ */ N({
  __name: "ViewGroup",
  setup(i) {
    const { t: o } = Q(), t = D(), a = L(z), d = h(() => t == null ? void 0 : t.getters["menu/activeTab"]), n = h(() => t == null ? void 0 : t.getters["command/getVal"](s.SetViewSetting)), m = $([
      { label: `${o("toolbar.view.gridlines")}`, key: Se.GRID_LINE, value: Se.GRID_LINE },
      { label: `${o("toolbar.view.taskWindow")}`, key: Se.TASK_WINDOW, value: Se.TASK_WINDOW },
      { label: `${o("toolbar.view.ruler")}`, key: Se.RULER_LINE, value: Se.RULER_LINE },
      { label: `${o("toolbar.view.guides")}`, key: Se.GUIDES_LINE, value: Se.GUIDES_LINE }
    ]);
    rl(() => {
      a.run(s.SetViewSetting, { type: Z.GET, value: 0 });
    });
    const g = h(() => m.value.filter((b) => !!(n.value & b.value)).map((b) => b.value));
    function r(b) {
      t.commit("menu/setTempTabs", { [b]: kl[b] }), Promise.resolve().then(() => {
        switch (t.commit("menu/setActiveTab", b), b) {
          case s.SlideMaster:
            t.commit("file/setShowType", Ie.SlideMaster);
            break;
          case s.HandoutMaster:
            t.commit("file/setShowType", Ie.Handout);
            break;
          case s.NotesMaster:
            t.commit("file/setShowType", Ie.NotesMaster);
            break;
          default:
            t.commit("file/setShowType", Ie.Slides);
            break;
        }
      });
    }
    function p(b) {
      t.commit("menu/setTempTabs", {}), Promise.resolve().then(() => {
        t.commit("menu/setActiveTab", d.value), b === s.NotesPage ? t.commit("file/setShowType", Ie.Notes) : t.commit("file/setShowType", Ie.Slides);
      });
    }
    function S(b, y) {
      let v = b.reduce((_, u) => _ | u, Se.None);
      t.commit("command/setState", { ui: { value: v }, cmd: s.SetViewSetting }), a.run(s.SetViewSetting, { type: Z.SET, value: v });
    }
    return (b, y) => {
      const v = k("n-checkbox"), _ = k("n-space"), u = k("n-checkbox-group");
      return f(), C("div", Dl, [
        e(Be, {
          cmd: l(s).NormalView,
          label: b.$t("toolbar.view.normal"),
          "icon-name": "Ribbon_ppt_normol_24__clip_cell",
          clickHandler: p
        }, null, 8, ["cmd", "label"]),
        e(Be, {
          cmd: l(s).SlideSorter,
          label: b.$t("toolbar.view.slideSorter"),
          "icon-name": "Ribbon_ppt_preview_24__clip_cell",
          clickHandler: p
        }, null, 8, ["cmd", "label"]),
        e(Be, {
          cmd: l(s).NotesPage,
          label: b.$t("toolbar.view.notesPage"),
          "icon-name": "Ribbon_ppt_comment_page_24__clip_cell",
          clickHandler: p
        }, null, 8, ["cmd", "label"]),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px 8px"
        }),
        e(Be, {
          cmd: l(s).SlideMaster,
          label: b.$t("toolbar.view.slideMaster"),
          "icon-name": "ppt_slide_master_24__clip_cell",
          clickHandler: r
        }, null, 8, ["cmd", "label"]),
        e(Be, {
          cmd: l(s).NotesMaster,
          label: b.$t("toolbar.view.notesMaster"),
          "icon-name": "Ribbon_ppt_notes_master__24__clip_cell",
          clickHandler: r
        }, null, 8, ["cmd", "label"]),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px 8px"
        }),
        e(u, {
          "onUpdate:value": S,
          value: g.value
        }, {
          default: c(() => [
            e(_, { horizontal: "" }, {
              default: c(() => [
                e(_, { vertical: "" }, {
                  default: c(() => [
                    (f(!0), C(ae, null, ne(m.value.slice(0, 2), (x) => (f(), H(v, {
                      key: x.key,
                      value: x.value,
                      label: x.label,
                      style: { "font-size": "12px" },
                      size: "small"
                    }, null, 8, ["value", "label"]))), 128))
                  ]),
                  _: 1
                }),
                e(_, { vertical: "" }, {
                  default: c(() => [
                    (f(!0), C(ae, null, ne(m.value.slice(2, 4), (x) => (f(), H(v, {
                      key: x.key,
                      value: x.value,
                      label: x.label,
                      style: { "font-size": "12px" },
                      size: "small"
                    }, null, 8, ["value", "label"]))), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["value"]),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px 8px"
        }),
        e(Be, {
          cmd: l(s).AutoZoom,
          label: b.$t("toolbar.view.fit"),
          "icon-name": "Ribbon_ppt_fit_window_24__clip_cell"
        }, null, 8, ["cmd", "label"])
      ]);
    };
  }
}), pe = /* @__PURE__ */ N({
  __name: "CommandBigIconDropDownButton",
  props: /* @__PURE__ */ Fe({
    cmd: {},
    label: {},
    iconName: {},
    x: {},
    y: {},
    isActiveOption: { type: Boolean },
    getValueCommand: {},
    commandHandler: { type: Function },
    dropdownOptions: {}
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(i) {
    const o = D(), t = ze(i, "modelValue"), a = i, d = h(() => o == null ? void 0 : o.getters["command/can"](a.cmd)), n = h(() => o == null ? void 0 : o.getters["command/active"](a.cmd)), m = h(() => o == null ? void 0 : o.getters["command/getVal"](a.cmd)), g = h(() => a.isActiveOption ? Ye(a.dropdownOptions, m, a.isActiveOption) : ({ node: y, option: v }) => y), r = L(z), p = Xe(h(() => a.dropdownOptions), t, m);
    function S(y, v) {
      b(y, v);
    }
    ee(() => t.value, (y) => {
      a.isActiveOption && r.run(a.cmd, { type: Z.GET, value: null });
    });
    function b(y, v) {
      v != null && v.param && (y = { value: y, ...v.param });
      const _ = { type: Z.SET, value: y };
      a.commandHandler ? a.commandHandler(_, a.cmd) : r.run(a.cmd, _);
    }
    return (y, v) => (f(), C("div", null, [
      e(l(Al), {
        trigger: "click",
        placement: "bottom-start",
        options: l(p),
        onSelect: S,
        show: t.value,
        "render-option": g.value,
        "onUpdate:show": v[0] || (v[0] = (_) => t.value = _)
      }, {
        default: c(() => [
          I("span", null, [
            e(l(Ze), {
              label: i.label,
              "resource-image": l(G).image,
              disabled: !d.value,
              active: n.value,
              showArrow: !0,
              x: i.x,
              y: i.y,
              "image-width": l(G).width,
              show: t.value,
              "icon-name": i.iconName
            }, null, 8, ["label", "resource-image", "disabled", "active", "x", "y", "image-width", "show", "icon-name"])
          ])
        ]),
        _: 1
      }, 8, ["options", "show", "render-option"])
    ]));
  }
}), zl = { style: { display: "flex" } }, Vl = /* @__PURE__ */ N({
  __name: "StartBarGroup",
  setup(i) {
    const o = D(), t = h(() => o == null ? void 0 : o.getters["command/groupState"]), a = h(() => o == null ? void 0 : o.getters["command/alignTarget"]), d = h(() => o == null ? void 0 : o.getters["command/shapeAlign"]), n = L(z), m = h(() => o.getters["menu/selectedElement"]), g = h(() => (o == null ? void 0 : o.getters["command/can"](s.ShapeRotate)) && (m.value & We.HiddenRotate) !== We.HiddenRotate), { t: r } = Q(), p = h(() => [
      {
        label: `${r("toolbar.shapeToolbar.align.left")}`,
        key: "left",
        disabled: !1,
        icon: w("ppt_drawing_tools_align_16__clip_cell"),
        noIcon: !1,
        param: { target: a.value }
      },
      {
        label: `${r("toolbar.shapeToolbar.align.center")}`,
        key: "center",
        disabled: !1,
        noIcon: !1,
        icon: w("ppt_drawing_tools_align_center_horizontally_16__clip_cell"),
        param: { target: a.value }
      },
      {
        label: `${r("toolbar.shapeToolbar.align.right")}`,
        key: "right",
        disabled: !1,
        noIcon: !1,
        icon: w("ppt_drawing_tools_align_right_16__clip_cell"),
        param: { target: a.value }
      },
      {
        label: `${r("toolbar.shapeToolbar.align.top")}`,
        key: "top",
        disabled: !1,
        noIcon: !1,
        icon: w(-1488, -56),
        param: { target: a.value }
      },
      {
        label: `${r("toolbar.shapeToolbar.align.middle")}`,
        key: "middle",
        disabled: !1,
        noIcon: !1,
        icon: w(-1520, -56),
        param: { target: a.value }
      },
      {
        label: `${r("toolbar.shapeToolbar.align.bottom")}`,
        key: "bottom",
        disabled: !1,
        noIcon: !1,
        icon: w(-1456, -56),
        param: { target: a.value }
      },
      {
        type: "divider",
        key: "divider1"
      },
      {
        label: `${r("toolbar.shapeToolbar.align.horizontal")}`,
        key: "horizontal",
        noIcon: !1,
        disabled: !(d.value === q.SINGLE || d.value === q.MULTIPLE),
        icon: w("ppt_drawing_tools_distribute_horizontally_16__clip_cell"),
        param: { target: a.value }
      },
      {
        label: `${r("toolbar.shapeToolbar.align.vertical")}`,
        key: "vertical",
        noIcon: !1,
        disabled: !(d.value === q.SINGLE || d.value === q.MULTIPLE),
        icon: w("ppt_drawing_tools_distribute_vertically_16__clip_cell"),
        param: { target: a.value }
      },
      {
        type: "divider",
        key: "divider1"
      },
      {
        label: `${r("toolbar.shapeToolbar.align.equalWidth")}`,
        key: "equalWidth",
        noIcon: !1,
        disabled: !(d.value === q.BETWEEN_RELATIVE || d.value === q.MULTIPLE),
        icon: w("ppt_drawing_tools_equal_height_16__clip_cell"),
        param: { target: a.value }
      },
      {
        label: `${r("toolbar.shapeToolbar.align.equalHeight")}`,
        key: "equalHeight",
        noIcon: !1,
        disabled: !(d.value === q.BETWEEN_RELATIVE || d.value === q.MULTIPLE),
        icon: w("ppt_drawing_tools_equal_width_16__clip_cell"),
        param: { target: a.value }
      },
      {
        label: `${r("toolbar.shapeToolbar.align.equalSize")}`,
        key: "equalSize",
        noIcon: !1,
        disabled: !(d.value === q.BETWEEN_RELATIVE || d.value === q.MULTIPLE),
        icon: w("ppt_drawing_tools_equal_size_16__clip_cell"),
        param: { target: a.value }
      },
      {
        type: "divider",
        key: "divider1"
      },
      {
        label: `${r("toolbar.shapeToolbar.align.alignSlide")}`,
        key: "alignSlide",
        disabled: !1,
        noTrigger: !0,
        noIcon: !0,
        props: {
          onClick: () => {
            o.commit("command/setAlignTarget", "alignSlide");
          },
          style: {}
        }
      },
      {
        label: `${r("toolbar.shapeToolbar.align.alignSelectedObject")}`,
        key: "alignSelectedObject",
        disabled: d.value === q.SINGLE,
        noTrigger: !0,
        noIcon: !0,
        props: {
          onClick: () => {
            o.commit("command/setAlignTarget", "alignSelectedObject");
          },
          style: {}
        }
      }
    ]), S = h(() => {
      let v = Xe(p, $(!0), a);
      return v.value.forEach((_) => {
        _.key === a.value ? _.props && (_.props.style = { backgroundColor: "var(--active-bg)" }) : _.props && (_.props.style = {});
      }), v.value;
    }), b = $([
      {
        label: `${r("toolbar.shapeToolbar.bringToFront.bringToFront")}`,
        key: "front",
        disabled: !1,
        icon: w("ppt_drawing_tools_bring_front_16__clip_cell")
      },
      {
        label: `${r("toolbar.shapeToolbar.sendBackward.sendToBack")}`,
        key: "behind",
        disabled: !1,
        icon: w("ppt_drawing_tools_send_back_16__clip_cell")
      },
      {
        label: `${r("toolbar.shapeToolbar.bringToFront.bringForward")}`,
        key: "up",
        disabled: !1,
        icon: w("ppt_drawing_tools_move_up_16__clip_cell")
      },
      {
        label: `${r("toolbar.shapeToolbar.sendBackward.sendBackward")}`,
        key: "down",
        disabled: !1,
        icon: w("ppt_drawing_tools_move_down_16__clip_cell")
      },
      {
        type: "divider",
        key: "divider1"
      },
      {
        label: `${r("toolbar.shapeToolbar.group.group")}`,
        key: "group",
        disabled: h(() => !(t.value === Ee.GROUP || t.value === Ee.GROUP_OR_UNGROUP)),
        icon: w("ppt_drawing_tools_group_16__clip_cell")
      },
      {
        label: `${r("toolbar.shapeToolbar.group.ungroup")}`,
        key: "ungroup",
        disabled: h(() => !(t.value === Ee.UNGROUP || t.value === Ee.GROUP_OR_UNGROUP)),
        icon: w("ppt_drawing_tools_ungroup_16__clip_cell")
      },
      {
        type: "divider",
        key: "divider1"
      },
      {
        label: `${r("toolbar.shapeToolbar.align.name")}`,
        key: "align",
        disabled: !1,
        icon: w("ppt_drawing_tools_ungroup_16__clip_cell"),
        children: h(() => S.value)
      },
      {
        label: `${r("toolbar.shapeToolbar.rotate.name")}`,
        key: "rotate",
        disabled: h(() => !g.value),
        icon: w("ppt_drawing_tools_align_right_16__clip_cell"),
        children: [
          {
            label: `${r("toolbar.shapeToolbar.rotate.rotateRight90")}`,
            key: "90",
            disabled: !1,
            icon: w("ppt_drawing_tools_rotate_left_16__clip_cell")
          },
          {
            label: `${r("toolbar.shapeToolbar.rotate.rotateLeft90")}`,
            key: "270",
            disabled: !1,
            icon: w("ppt_drawing_tools_rotate_16__clip_cell")
          },
          {
            label: `${r("toolbar.shapeToolbar.rotate.horizontal")}`,
            key: "flipH",
            disabled: !1,
            icon: w(-1376, -56)
          },
          {
            label: `${r("toolbar.shapeToolbar.rotate.vertical")}`,
            key: "flipV",
            disabled: !1,
            icon: w(-1408, -56)
          }
        ]
      }
    ]);
    function y(v, _) {
      /^front$|^up$/.test(v.value) ? n.run(s.ShapeBringToFront, { value: v }) : /^behind$|^down$/.test(v.value) ? n.run(s.ShapeSendToBack, { value: v }) : /^group$|^ungroup$/.test(v.value) ? n.run(s.ShapeGroup, v) : /^90$|^270$|^flipH$|^flipV$/.test(v.value) ? n.run(s.ShapeRotate, { value: v }) : n.run(s.ShapeAlign, v);
    }
    return (v, _) => (f(), C("div", zl, [
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px 8px"
      }),
      e(l(Yt)),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px 12px"
      }),
      e(l(Gt)),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px 12px"
      }),
      e(l(Dt)),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px 0px"
      }),
      e(l(Ot)),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px 0px"
      }),
      e(pe, {
        cmd: l(s).ArrangeGroupMenu,
        label: v.$t("toolbar.shapeToolbar.arrange"),
        "icon-name": "ppt_drawing_tools_bring_front_24__clip_cell",
        isActiveOption: !1,
        "command-handler": y,
        dropdownOptions: b.value,
        style: { "margin-left": "10px" }
      }, null, 8, ["cmd", "label", "dropdownOptions"])
    ]));
  }
}), ia = /* @__PURE__ */ K(Vl, [["__scopeId", "data-v-e90692b8"]]), Wl = { class: "trigger-wrapper" }, Ul = /* @__PURE__ */ N({
  __name: "CommandBigIconPopoverButton",
  props: {
    show: { type: Boolean },
    cmd: {},
    label: {},
    iconName: {},
    x: {},
    y: {},
    placement: { default: "bottom" }
  },
  emits: ["update:show"],
  setup(i, { emit: o }) {
    const t = D(), a = i, d = h(() => t == null ? void 0 : t.getters["command/can"](a.cmd)), n = h(() => t == null ? void 0 : t.getters["command/active"](a.cmd)), m = L(z), g = o;
    function r(S) {
      const b = { value: S };
      m.run(a.cmd, b);
    }
    function p(S) {
      g("update:show", S);
    }
    return (S, b) => (f(), C("div", null, [
      e(l(Je), {
        show: i.show,
        trigger: "click",
        placement: i.placement,
        "onUpdate:show": p
      }, {
        trigger: c(() => [
          I("div", Wl, [
            e(l(Ze), {
              label: i.label,
              "resource-image": l(G).image,
              disabled: !d.value,
              active: n.value,
              showArrow: !0,
              x: i.x,
              y: i.y,
              "image-width": l(G).width,
              show: i.show,
              "icon-name": i.iconName
            }, null, 8, ["label", "resource-image", "disabled", "active", "x", "y", "image-width", "show", "icon-name"])
          ])
        ]),
        default: c(() => [
          Ke(S.$slots, "popover", { runCommand: r }, void 0, !0)
        ]),
        _: 3
      }, 8, ["show", "placement"])
    ]));
  }
}), ul = /* @__PURE__ */ K(Ul, [["__scopeId", "data-v-34a18827"]]), Gl = /* @__PURE__ */ N({
  __name: "CommandBigIconNewSlidePopover",
  props: {
    cmd: {},
    label: {},
    iconName: {},
    x: {},
    y: {},
    tooltip: {},
    title: {}
  },
  setup(i) {
    const o = L(z), t = $(!1);
    return ee(() => t.value, (a) => {
      a && o.run(s.GetLayoutList, { value: !1 });
    }), (a, d) => (f(), C("div", null, [
      e(ul, {
        cmd: i.cmd,
        label: i.label,
        x: i.x,
        y: i.y,
        tooltip: i.tooltip,
        "icon-name": i.iconName,
        placement: "bottom-start",
        show: t.value,
        "onUpdate:show": d[1] || (d[1] = (n) => t.value = n)
      }, {
        popover: c(() => [
          e(Cl, {
            title: i.title,
            cmd: i.cmd,
            "onUpdate:show": d[0] || (d[0] = (n) => t.value = !1)
          }, null, 8, ["title", "cmd"])
        ]),
        _: 1
      }, 8, ["cmd", "label", "x", "y", "tooltip", "icon-name", "show"])
    ]));
  }
}), nl = /* @__PURE__ */ K(Gl, [["__scopeId", "data-v-b1436eab"]]), j = /* @__PURE__ */ N({
  __name: "CommandBigIconTextButton",
  props: {
    cmd: {},
    label: {},
    showArrow: { type: Boolean },
    iconName: {},
    x: {},
    y: {},
    active: { type: Boolean },
    tooltip: {},
    isActive: { type: Boolean, default: !0 },
    commandHandler: {},
    clickHandler: {}
  },
  setup(i) {
    const o = D(), t = i, a = h(() => o == null ? void 0 : o.getters["command/can"](t.cmd)), d = L(z), n = h(() => t.active || (o == null ? void 0 : o.getters["command/active"](t.cmd)));
    function m() {
      if (t.commandHandler) {
        t.commandHandler();
        return;
      }
      t.clickHandler && t.clickHandler(t.cmd), d.run(t.cmd, { value: !0 });
    }
    return (g, r) => (f(), C("div", {
      onClick: Le(m, ["stop"])
    }, [
      e(l(Ze), {
        label: i.label,
        "resource-image": l(G).image,
        disabled: !a.value,
        showArrow: i.showArrow,
        x: i.x,
        y: i.y,
        "image-width": l(G).width,
        active: i.isActive && n.value,
        tooltip: i.tooltip,
        "icon-name": i.iconName
      }, null, 8, ["label", "resource-image", "disabled", "showArrow", "x", "y", "image-width", "active", "tooltip", "icon-name"])
    ]));
  }
}), ql = { style: { display: "flex", gap: "8px" } }, wl = /* @__PURE__ */ N({
  __name: "InsertShape",
  setup(i) {
    const o = L(z), t = $(!1);
    return ee(() => t.value, (a) => {
      a && o.run(s.GetShapeTypeList, void 0);
    }), (a, d) => (f(), C("div", ql, [
      e(ul, {
        cmd: l(s).InsertShape,
        label: a.$t("toolbar.insert.shapes.name"),
        x: -240,
        y: -32,
        placement: "bottom-start",
        show: t.value,
        "onUpdate:show": d[1] || (d[1] = (n) => t.value = n)
      }, {
        popover: c(() => [
          e(El, {
            show: t.value,
            "onUpdate:show": d[0] || (d[0] = (n) => t.value = n),
            cmd: l(s).InsertShape,
            title: a.$t("toolbar.insert.shapes.title")
          }, null, 8, ["show", "cmd", "title"])
        ]),
        _: 1
      }, 8, ["cmd", "label", "show"])
    ]));
  }
}), xl = /* @__PURE__ */ N({
  __name: "InsertTextBox",
  setup(i) {
    const { t: o } = Q(), t = L(z), a = $([
      {
        label: `${o("toolbar.insert.textBox.horizontal")}`,
        key: "text",
        disabled: !1,
        icon: w(-752, -56)
      },
      {
        label: `${o("toolbar.insert.textBox.vertical")}`,
        key: "vertText",
        disabled: !1,
        icon: w(-768, -56)
      }
    ]);
    function d(n) {
      t.run(s.InsertTextBox, { value: n.value });
    }
    return (n, m) => (f(), H(pe, {
      cmd: l(s).InsertTextBox,
      label: n.$t("toolbar.insert.textBox.name"),
      "icon-name": "ppt_insert_text_24__clip_cell",
      "command-handler": d,
      dropdownOptions: a.value
    }, null, 8, ["cmd", "label", "dropdownOptions"]));
  }
}), Yl = { class: "custom-panel" }, Xl = { class: "custom-row" }, jl = { class: "global-basic-display-text text" }, Jl = { class: "custom-row" }, Kl = { class: "global-basic-display-text text" }, Ql = /* @__PURE__ */ N({
  __name: "InsertTableDialog",
  setup(i, { expose: o }) {
    const t = $(!1), a = $(!1), d = $(""), n = $(1), m = $(75), g = $(!1), r = $(""), p = $(1), S = $(75), b = $(0), y = $(0);
    let v;
    function _(B) {
      x(B, n.value, m.value) ? (a.value = !1, d.value = "") : (a.value = !0, d.value = "error");
    }
    function u(B) {
      x(B, p.value, S.value) ? (g.value = !1, r.value = "") : (g.value = !0, r.value = "error");
    }
    function x(B, P, Y) {
      const T = Number(B);
      return B === "" || !isNaN(T) && T >= P && T <= Y;
    }
    function E(B, P) {
      B && (b.value = B.row, y.value = B.column), a.value = !1, d.value = "", g.value = !1, r.value = "", v = P, t.value = !0;
    }
    function A() {
      b.value, y.value, !(b.value < n.value || b.value > m.value) && (y.value < p.value || y.value > S.value || (v && v({
        rows: b.value,
        cols: y.value
      }), t.value = !1));
    }
    function U() {
      t.value = !1;
    }
    return o({
      openPopover: E
    }), (B, P) => (f(), C("div", null, [
      e(l(fl), {
        show: t.value,
        "onUpdate:show": P[2] || (P[2] = (Y) => t.value = Y),
        title: B.$t("dialogs.insertTable.title"),
        width: 240
      }, {
        action: c(() => [
          e(l(Ue), {
            label: B.$t("common.cancel"),
            onClickButton: U,
            type: "standard"
          }, null, 8, ["label"]),
          e(l(Ue), {
            label: B.$t("common.confirm"),
            onClickButton: A
          }, null, 8, ["label"])
        ]),
        default: c(() => [
          I("div", Yl, [
            I("div", Xl, [
              I("span", jl, M(B.$t("dialogs.insertTable.row")), 1),
              e(l(vl), {
                "input-validation-status": d.value,
                "validation-status": d.value,
                feedback: a.value ? B.$t("dialogs.insertTable.rowErrorMessage") : ""
              }, {
                default: c(() => [
                  e(l(_l), {
                    value: b.value,
                    "onUpdate:value": P[0] || (P[0] = (Y) => b.value = Y),
                    step: 1,
                    class: "custom-input-num",
                    "show-step-button": !0,
                    precision: 0,
                    min: n.value,
                    max: m.value,
                    onKeydown: al(A, ["enter"]),
                    onInput: _
                  }, null, 8, ["value", "min", "max"])
                ]),
                _: 1
              }, 8, ["input-validation-status", "validation-status", "feedback"])
            ]),
            I("div", Jl, [
              I("span", Kl, M(B.$t("dialogs.insertTable.column")), 1),
              e(l(vl), {
                "input-validation-status": r.value,
                "validation-status": r.value,
                feedback: g.value ? B.$t("dialogs.insertTable.columnErrorMessage") : ""
              }, {
                default: c(() => [
                  e(l(_l), {
                    step: 1,
                    value: y.value,
                    "onUpdate:value": P[1] || (P[1] = (Y) => y.value = Y),
                    class: "custom-input-num",
                    "show-step-button": !0,
                    precision: 0,
                    min: p.value,
                    max: S.value,
                    onKeydown: al(A, ["enter"]),
                    onInput: u
                  }, null, 8, ["value", "min", "max"])
                ]),
                _: 1
              }, 8, ["input-validation-status", "validation-status", "feedback"])
            ])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}), Zl = /* @__PURE__ */ K(Ql, [["__scopeId", "data-v-6b747cb9"]]), et = { style: { display: "flex" } }, lt = { class: "insert-table-popover" }, tt = { class: "global-basic-display-text grid-label" }, ot = { key: 0 }, at = { key: 1 }, nt = ["onMouseenter", "onClick"], it = 10, rt = 10, st = /* @__PURE__ */ N({
  __name: "InsertNewTable",
  setup(i) {
    const o = $(!1), t = $(null), a = $(0), d = $(0);
    function n(g) {
      var r;
      o.value = !1, (r = t == null ? void 0 : t.value) == null || r.openPopover(
        {
          row: 3,
          column: 4
        },
        (p) => {
          g(p);
        }
      );
    }
    function m() {
      a.value = 0, d.value = 0;
    }
    return (g, r) => {
      const p = k("n-icon"), S = k("n-button");
      return f(), C("div", et, [
        e(ul, {
          cmd: l(s).InsertTable,
          label: g.$t("toolbar.insert.table.name"),
          "icon-name": "Ribbon_Word_insert_form_24__clip_cell",
          show: o.value,
          "onUpdate:show": r[0] || (r[0] = (b) => o.value = b)
        }, {
          popover: c(({ runCommand: b }) => [
            I("div", lt, [
              I("div", tt, [
                a.value + d.value != 0 ? (f(), C("span", ot, M(a.value + g.$t("toolbar.insert.table.row")) + " * " + M(d.value + g.$t("toolbar.insert.table.column")), 1)) : (f(), C("span", at, M(g.$t("toolbar.insert.table.optionName")), 1))
              ]),
              I("div", {
                class: "table-grid",
                onMouseleave: m
              }, [
                (f(), C(ae, null, ne(it, (y) => I("div", {
                  key: "row-" + y,
                  class: "grid-row"
                }, [
                  (f(), C(ae, null, ne(rt, (v) => I("div", {
                    key: "col-" + v,
                    class: me(["grid-cell", { selected: y <= a.value && v <= d.value }]),
                    onMouseenter: (_) => {
                      a.value = y, d.value = v;
                    },
                    onClick: () => {
                      b({ rows: y, cols: v }), o.value = !1;
                    }
                  }, null, 42, nt)), 64))
                ])), 64))
              ], 32),
              e(S, {
                text: "",
                onClick: (y) => n(b),
                class: "global-basic-display-text action-text more-button",
                "icon-placement": "right",
                color: "#131313"
              }, {
                icon: c(() => [
                  e(p, { size: "12" }, {
                    default: c(() => [
                      e(l(Bl))
                    ]),
                    _: 1
                  })
                ]),
                default: c(() => [
                  oe(" " + M(g.$t("toolbar.insert.table.moreRowColumn")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ]),
          _: 1
        }, 8, ["cmd", "label", "show"]),
        e(Zl, {
          ref_key: "InsertTableDialogRef",
          ref: t
        }, null, 512)
      ]);
    };
  }
}), dt = /* @__PURE__ */ K(st, [["__scopeId", "data-v-c5bb3025"]]), ct = /* @__PURE__ */ N({
  __name: "InsertSymbol",
  setup(i) {
    const o = D(), t = L(z), { t: a } = Q(), d = $(!1), n = h(() => (o == null ? void 0 : o.getters["file/recentSymbols"]) || []), m = h(() => {
      const v = y(S(), 10), _ = y(b(), 10);
      return [
        {
          key: "recentTitle",
          type: "render",
          render: () => ie("div", { class: "symbol-title" }, `${a("toolbar.insert.symbol.recent")}`)
        },
        {
          key: "recentPanel",
          type: "render",
          render: () => g(v, !1)
        },
        {
          key: "allTitle",
          type: "render",
          render: () => ie("div", { class: "symbol-title" }, `${a("toolbar.insert.symbol.all")}`)
        },
        {
          key: "allPanel",
          type: "render",
          render: () => g(_, !0)
        }
      ];
    });
    function g(v, _) {
      return ie(
        "div",
        {
          style: {
            padding: "2px 8px 8px"
          }
        },
        v.map(
          (u) => ie(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(10, 20px)",
                gap: "4px"
              }
            },
            u.map(
              (x) => ie(
                "span",
                {
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "20px",
                    height: "20px",
                    minWidth: "20px",
                    minHeight: "20px",
                    boxSizing: "border-box",
                    borderRadius: "3px",
                    cursor: "pointer",
                    userSelect: "none",
                    lineHeight: "1"
                  },
                  onClick: (E) => {
                    d.value = !1, E.stopPropagation(), p(x, _);
                  }
                },
                String.fromCodePoint(x)
              )
            )
          )
        )
      );
    }
    function r(v) {
      t.run(s.InsertSymbol, { value: v.value });
    }
    function p(v, _ = !0) {
      _ && o.commit("file/addRecentSymbols", v), t.run(s.InsertSymbol, { value: String(v) });
    }
    function S() {
      const v = [65291, 65293, 215, 247, 8800, 8776, 60, 62, 8804, 8805], _ = [...n.value, ...v], u = [];
      for (const x of _)
        u.includes(x) || u.push(x);
      return u.slice(0, 10);
    }
    function b() {
      return [
        65291,
        65293,
        215,
        247,
        13199,
        13212,
        13213,
        13217,
        593,
        609,
        945,
        946,
        952,
        8451,
        12310,
        65371,
        169,
        174,
        65312,
        65286,
        65290,
        65283,
        65285,
        8240,
        65284,
        65509,
        167,
        166,
        8251,
        9678,
        8776,
        8230,
        8804,
        8805,
        8806,
        8807
      ];
    }
    function y(v, _ = 10) {
      const u = [];
      for (let x = 0; x < v.length; x += _)
        u.push(v.slice(x, x + _));
      return u;
    }
    return (v, _) => (f(), H(pe, {
      cmd: l(s).InsertSymbol,
      label: v.$t("toolbar.insert.symbol.name"),
      "icon-name": "ppt_insert_symbol_24__clip_cell",
      "command-handler": r,
      dropdownOptions: m.value,
      modelValue: d.value,
      "onUpdate:modelValue": _[0] || (_[0] = (u) => d.value = u)
    }, null, 8, ["cmd", "label", "dropdownOptions", "modelValue"]));
  }
}), ut = /* @__PURE__ */ K(ct, [["__scopeId", "data-v-f8eeb78d"]]), pt = { style: { display: "flex", gap: "8px" } }, ra = /* @__PURE__ */ N({
  __name: "InsertGroup",
  setup(i) {
    const o = L(Qe, null), t = D(), a = L(z), { t: d } = Q();
    $([
      {
        label: `${d("toolbar.insert.audio.device")}`,
        key: "device",
        disabled: !1,
        icon: w(-784, -56)
      },
      {
        label: `${d("toolbar.insert.audio.link")}`,
        key: "link",
        disabled: !1,
        icon: w(-800, -56)
      },
      {
        label: `${d("toolbar.insert.audio.deviceBg")}`,
        key: "deviceBg",
        disabled: !1,
        icon: w(-816, -56)
      },
      {
        label: `${d("toolbar.insert.audio.linkBg")}`,
        key: "linkBg",
        disabled: !1,
        icon: w(-832, -56)
      }
    ]), $([
      {
        label: `${d("toolbar.insert.video.device")}`,
        key: "device",
        disabled: !1,
        icon: w(-848, -56)
      },
      {
        label: `${d("toolbar.insert.video.link")}`,
        key: "link",
        disabled: !1,
        icon: w(-864, -56)
      }
    ]);
    function n() {
      ((o == null ? void 0 : o.eventTarget) ?? window).dispatchEvent(new Event("HeaderFooter"));
    }
    function m() {
      t.commit("panel/openPanel", Oe.CommentPanel), t.commit("panel/setShowHideComment", !0);
    }
    function g() {
      ((o == null ? void 0 : o.eventTarget) ?? window).dispatchEvent(new Event("LinkSetting"));
    }
    function r() {
      a.run(s.InsertPicture, void 0);
    }
    function p(b) {
      a.run(s.InsertAudio, void 0);
    }
    function S(b) {
      a.run(s.InsertVideo, void 0);
    }
    return (b, y) => (f(), C("div", pt, [
      e(nl, {
        title: b.$t("toolbar.start.newFromLayout"),
        cmd: l(s).NewSlide,
        label: b.$t("toolbar.start.new"),
        "icon-name": "ppt_add_new_ppt_24__clip_cell",
        tooltip: b.$t("toolbar.start.new")
      }, null, 8, ["title", "cmd", "label", "tooltip"]),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px"
      }),
      e(dt),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px"
      }),
      e(j, {
        cmd: l(s).InsertPicture,
        label: b.$t("toolbar.insert.picture.name"),
        "icon-name": "ppt_insert_picture_24__clip_cell",
        active: !1,
        tooltip: b.$t("toolbar.insert.picture.title"),
        commandHandler: r
      }, null, 8, ["cmd", "label", "tooltip"]),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px"
      }),
      e(wl),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px"
      }),
      e(xl),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px"
      }),
      e(j, {
        cmd: l(s).InsertAudio,
        label: b.$t("toolbar.insert.audio.name"),
        "icon-name": "ppt_insert_redio_24__clip_cell",
        active: !1,
        tooltip: b.$t("toolbar.insert.audio.title"),
        commandHandler: p
      }, null, 8, ["cmd", "label", "tooltip"]),
      e(j, {
        cmd: l(s).InsertVideo,
        label: b.$t("toolbar.insert.video.name"),
        "icon-name": "ppt_insert_video_24__clip_cell",
        active: !1,
        tooltip: b.$t("toolbar.insert.video.title"),
        commandHandler: S
      }, null, 8, ["cmd", "label", "tooltip"]),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px"
      }),
      e(ut),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px"
      }),
      e(j, {
        cmd: l(s).InsertComment,
        label: b.$t("toolbar.insert.comment.name"),
        "icon-name": "ppt_insert_comment_24__clip_cell",
        active: !1,
        tooltip: b.$t("toolbar.insert.comment.title"),
        commandHandler: m
      }, null, 8, ["cmd", "label", "tooltip"]),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px"
      }),
      e(j, {
        cmd: l(s).InsertHeaderFooter,
        label: b.$t("toolbar.insert.headerAndFooter.name"),
        "icon-name": "ppt_insert_header_footer_24__clip_cell",
        tooltip: b.$t("toolbar.insert.headerAndFooter.title"),
        active: !1,
        commandHandler: n
      }, null, 8, ["cmd", "label", "tooltip"]),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px"
      }),
      e(j, {
        cmd: l(s).InsertLink,
        label: b.$t("toolbar.insert.link.name"),
        "icon-name": "ppt_insert_link_24__clip_cell",
        tooltip: b.$t("toolbar.insert.link.title"),
        active: !1,
        commandHandler: g
      }, null, 8, ["cmd", "label", "tooltip"])
    ]));
  }
}), mt = { class: "global-basic-display-text label-text" }, bt = { class: "global-basic-display-text label-text" }, vt = /* @__PURE__ */ N({
  __name: "SmallIconTextButton",
  props: {
    label: {},
    tooltip: {},
    disabled: { type: Boolean },
    iconName: {},
    resourceImage: {},
    imageWidth: {},
    x: {},
    y: {},
    showArrow: { type: Boolean },
    active: { type: Boolean },
    buttonWidth: { default: 50 },
    buttonHeight: { default: 20 },
    show: { type: Boolean },
    padding: { default: 0 }
  },
  setup(i) {
    const o = i, t = h(
      () => o.iconName ? { name: o.iconName } : {
        x: o.x,
        y: o.y,
        source: o.resourceImage,
        imageWidth: o.imageWidth
      }
    ), a = {
      Button: {
        // default
        color: "transparent",
        border: "",
        borderRadiusMedium: "4px",
        // focus
        borderFocus: "",
        textColorFocus: "",
        colorFocus: "transparent",
        // hover
        colorHover: "var(--hover-bg)",
        textColorHover: "",
        borderHover: "",
        rippleColor: "var(--hover-bg)",
        // active / pressed
        colorPressed: "var(--active-bg)",
        textColorPressed: "",
        borderPressed: "",
        // disabled
        borderDisabled: ""
      }
    }, d = {
      Button: {
        // default
        color: "var(--active-bg)",
        border: "",
        borderRadiusMedium: "4px",
        // focus
        borderFocus: "",
        textColorFocus: "",
        colorFocus: "var(--active-bg)",
        // hover
        colorHover: "var(--hover-bg)",
        textColorHover: "",
        borderHover: "",
        rippleColor: "var(--hover-bg)",
        // active / pressed
        colorPressed: "var(--active-bg)",
        textColorPressed: "",
        borderPressed: "",
        // disabled
        borderDisabled: ""
      }
    }, n = h(() => o.active ? d : a);
    return (m, g) => {
      const r = k("n-icon"), p = k("n-button"), S = k("n-config-provider");
      return f(), H(S, { "theme-overrides": n.value }, {
        default: c(() => [
          i.tooltip ? (f(), H(l(he), { key: 0 }, {
            trigger: c(() => [
              e(p, {
                class: "small-icon-btn button-content",
                disabled: i.disabled,
                style: J({ width: i.buttonWidth + "px", height: i.buttonHeight + "px", display: "flex", padding: i.padding + "px" })
              }, {
                default: c(() => [
                  e(l(te), ke(t.value, {
                    size: 16,
                    style: { "margin-right": "5px" }
                  }), null, 16),
                  I("span", mt, M(i.label), 1),
                  i.showArrow ? (f(), H(r, {
                    key: 0,
                    size: "12",
                    style: { "margin-left": "2px" },
                    class: me(i.show ? "rotate-180" : "")
                  }, {
                    default: c(() => [
                      e(l(fe))
                    ]),
                    _: 1
                  }, 8, ["class"])) : de("", !0)
                ]),
                _: 1
              }, 8, ["disabled", "style"])
            ]),
            default: c(() => [
              oe(" " + M(i.tooltip), 1)
            ]),
            _: 1
          })) : (f(), H(p, {
            key: 1,
            class: "small-icon-btn button-content",
            disabled: i.disabled,
            style: J({ width: i.buttonWidth + "px", height: i.buttonHeight + "px", padding: i.padding + "px" })
          }, {
            default: c(() => [
              e(l(te), ke(t.value, {
                size: 16,
                style: { "margin-right": "5px" }
              }), null, 16),
              I("span", bt, M(i.label), 1),
              i.showArrow ? (f(), H(r, {
                key: 0,
                size: "12",
                style: { "margin-left": "2px" },
                class: me(i.show ? "rotate-180" : "")
              }, {
                default: c(() => [
                  e(l(fe))
                ]),
                _: 1
              }, 8, ["class"])) : de("", !0)
            ]),
            _: 1
          }, 8, ["disabled", "style"]))
        ]),
        _: 1
      }, 8, ["theme-overrides"]);
    };
  }
}), _t = /* @__PURE__ */ K(vt, [["__scopeId", "data-v-6df189b4"]]), gt = /* @__PURE__ */ N({
  __name: "CommandSmallIconTextButton",
  props: {
    cmd: {},
    label: {},
    iconName: {},
    x: {},
    y: {},
    tooltip: {},
    showArrow: { type: Boolean },
    show: { type: Boolean },
    disabled: { type: Boolean },
    useDisabled: { type: Boolean, default: !1 },
    buttonWidth: {},
    padding: {},
    commandHandler: {}
  },
  setup(i) {
    const o = i, t = D(), a = h(() => t == null ? void 0 : t.getters["command/can"](o.cmd)), d = L(z);
    function n() {
      if (o.commandHandler) {
        o.commandHandler(o.cmd);
        return;
      }
      d.run(o.cmd, void 0);
    }
    return (m, g) => (f(), C("div", null, [
      e(_t, {
        label: i.label,
        "resource-image": l(G).image,
        "button-height": 24,
        "button-width": i.buttonWidth,
        "icon-name": i.iconName,
        disabled: i.useDisabled ? i.disabled : !a.value,
        showArrow: i.showArrow,
        x: i.x,
        y: i.y,
        tooltip: i.tooltip,
        show: i.show,
        padding: i.padding,
        "image-width": l(G).width,
        onClick: n
      }, null, 8, ["label", "resource-image", "button-width", "icon-name", "disabled", "showArrow", "x", "y", "tooltip", "show", "padding", "image-width"])
    ]));
  }
}), xe = /* @__PURE__ */ K(gt, [["__scopeId", "data-v-24dc19bd"]]), ht = { class: "global-basic-display-text label-text" }, ft = { class: "global-basic-display-text label-text" }, yt = /* @__PURE__ */ N({
  __name: "SmallIconDropDown",
  props: /* @__PURE__ */ Fe({
    cmd: {},
    label: {},
    iconName: {},
    x: {},
    y: {},
    tooltip: {},
    showArrow: { type: Boolean, default: !0 },
    buttonWidth: { default: 70 },
    buttonHeight: { default: 25 },
    resourceImage: {},
    imageWidth: {},
    padding: { default: 0 },
    menuItems: {},
    disabled: { type: Boolean },
    useDisabled: { type: Boolean, default: !1 },
    isActiveOption: { type: Boolean },
    getValueCommand: {}
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Fe(["update:show"], ["update:modelValue"]),
  setup(i, { emit: o }) {
    const t = D(), a = ze(i, "modelValue"), d = h(() => t == null ? void 0 : t.getters["command/can"](n.cmd)), n = i, m = h(
      () => n.iconName ? { name: n.iconName } : {
        x: n.x,
        y: n.y,
        source: n.resourceImage,
        imageWidth: n.imageWidth
      }
    ), g = {
      Button: {
        // default
        color: "transparent",
        border: "",
        borderRadiusMedium: "4px",
        // focus
        borderFocus: "",
        textColorFocus: "",
        colorFocus: "var(--active-bg)",
        // hover
        colorHover: "var(--hover-bg)",
        textColorHover: "",
        borderHover: "",
        rippleColor: "var(--hover-bg)",
        // active / pressed
        colorPressed: "var(--active-bg)",
        textColorPressed: "",
        borderPressed: "",
        // disabled
        borderDisabled: ""
      },
      Dropdown: {
        fontSizeSmall: "12px",
        optionTextColor: "var(--primary-text)",
        optionTextColorHover: "var(--primary-text)",
        optionTextColorActive: "var(--accent-button-text)",
        optionTextColorChildActive: "var(--accent-button-text)",
        optionColorHover: "transparent",
        optionColorActive: "transparent",
        boxShadow: "0px 6px 26px 0px #00000024",
        borderRadius: "8px",
        padding: "10px"
      }
    }, r = L(z), p = h(() => t == null ? void 0 : t.getters["command/getVal"](n.cmd)), S = Xe(h(() => n.menuItems), a, p), b = h(() => n.isActiveOption ? Ye(n.menuItems, p, n.isActiveOption) : ({ node: _, option: u }) => _);
    ee(() => a.value, (_) => {
      !n.isActiveOption || !n.getValueCommand || _ && r.run(n.getValueCommand, { value: void 0 });
    });
    function y(_, u) {
      if (u.noTrigger) return;
      const x = { value: { value: _, ...u.param ?? {} } };
      r.run(n.cmd, x);
    }
    function v(_) {
      a.value = _;
    }
    return (_, u) => {
      const x = k("n-icon"), E = k("n-button"), A = k("n-dropdown"), U = k("n-config-provider");
      return f(), H(U, { "theme-overrides": g }, {
        default: c(() => [
          i.tooltip ? (f(), H(l(he), { key: 0 }, {
            trigger: c(() => [
              I("div", null, [
                e(A, {
                  trigger: "click",
                  size: "small",
                  options: l(S),
                  onSelect: y,
                  "render-option": b.value,
                  "on-update:show": v
                }, {
                  default: c(() => [
                    e(E, {
                      class: "small-icon-btn button-content",
                      disabled: i.useDisabled ? i.disabled : !d.value,
                      style: J({ width: i.buttonWidth + "px", height: i.buttonHeight + "px", padding: i.padding + "px" })
                    }, {
                      default: c(() => [
                        e(l(te), ke(m.value, {
                          size: 16,
                          style: { "margin-right": "5px" }
                        }), null, 16),
                        I("span", ht, M(i.label), 1),
                        i.showArrow ? (f(), H(x, {
                          key: 0,
                          size: "12",
                          style: { "margin-left": "2px" },
                          class: me(a.value ? "rotate-180" : "")
                        }, {
                          default: c(() => [
                            e(l(fe))
                          ]),
                          _: 1
                        }, 8, ["class"])) : de("", !0)
                      ]),
                      _: 1
                    }, 8, ["disabled", "style"])
                  ]),
                  _: 1
                }, 8, ["options", "render-option"])
              ])
            ]),
            default: c(() => [
              oe(" " + M(i.tooltip), 1)
            ]),
            _: 1
          })) : (f(), H(A, {
            key: 1,
            trigger: "click",
            size: "small",
            options: l(S),
            onSelect: y,
            "render-option": b.value,
            "on-update:show": v
          }, {
            default: c(() => [
              e(E, {
                class: "small-icon-btn button-content",
                disabled: i.useDisabled ? i.disabled : !d.value,
                style: J({ width: i.buttonWidth + "px", height: i.buttonHeight + "px", padding: i.padding + "px" })
              }, {
                default: c(() => [
                  e(l(te), ke(m.value, {
                    size: 16,
                    style: { "margin-right": "5px" }
                  }), null, 16),
                  I("span", ft, M(i.label), 1),
                  i.showArrow ? (f(), H(x, {
                    key: 0,
                    size: "12",
                    style: { "margin-left": "2px" },
                    class: me(a.value ? "rotate-180" : "")
                  }, {
                    default: c(() => [
                      e(l(fe))
                    ]),
                    _: 1
                  }, 8, ["class"])) : de("", !0)
                ]),
                _: 1
              }, 8, ["disabled", "style"])
            ]),
            _: 1
          }, 8, ["options", "render-option"]))
        ]),
        _: 1
      });
    };
  }
}), $e = /* @__PURE__ */ K(yt, [["__scopeId", "data-v-05237709"]]), wt = { style: { display: "flex", gap: "8px" } }, sa = /* @__PURE__ */ N({
  __name: "ReviewGroup",
  setup(i) {
    const { t: o } = Q(), t = D(), a = h(() => t.getters["command/getVal"](s.DeleteComment)), d = L(z), n = $(!1), m = $(!1), g = h(() => t.getters["panel/showHideComment"]), r = h(() => [
      {
        label: `${o("toolbar.review.deleteCurrentComment")}`,
        key: be.DELETE_CURRENT_COMMENT,
        disabled: (a.value & be.DELETE_CURRENT_COMMENT) !== be.DELETE_CURRENT_COMMENT,
        icon: w("comment_delete"),
        noIcon: !1,
        noTrigger: !0,
        props: {
          onClick: () => {
            S({ type: Z.SET, value: be.DELETE_CURRENT_COMMENT });
          }
        }
      },
      {
        label: `${o("toolbar.review.deleteCurrentSlide")}`,
        key: be.DELETE_CURRENT_SLIDE,
        disabled: (a.value & be.DELETE_CURRENT_SLIDE) !== be.DELETE_CURRENT_SLIDE,
        icon: w("review_clearSlideMarkup"),
        noIcon: !1,
        noTrigger: !0,
        props: {
          onClick: () => {
            S({ type: Z.SET, value: be.DELETE_CURRENT_SLIDE });
          }
        }
      },
      {
        label: `${o("toolbar.review.deleteAllComments")}`,
        key: be.DELETE_ALL_COMMENTS,
        disabled: (a.value & be.DELETE_ALL_COMMENTS) !== be.DELETE_ALL_COMMENTS,
        icon: w("clearPresentationMarkup"),
        noIcon: !1,
        noTrigger: !0,
        props: {
          onClick: () => {
            S({ type: Z.SET, value: be.DELETE_ALL_COMMENTS });
          }
        }
      }
    ]);
    ee(() => n.value, (_) => {
      _ && d.run(s.DeleteComment, { type: Z.GET, value: 0 });
    });
    function p() {
      t.commit("panel/openPanel", Oe.CommentPanel), t.commit("panel/setShowHideComment", !0);
    }
    function S(_) {
      d.run(s.DeleteComment, _);
    }
    function b() {
      d.run(s.ShowHideComment, { type: Z.SET, value: !g.value }), y(!g.value);
    }
    function y(_) {
      t.commit("panel/setShowHideComment", _), _ ? t.commit("panel/openPanel", Oe.CommentPanel) : t.commit("panel/closePanel", Oe.CommentPanel);
    }
    function v() {
      d.run(s.ShowHideCommentFlag, { type: Z.SET, value: !m.value }), m.value = !m.value;
    }
    return (_, u) => {
      const x = k("n-space");
      return f(), C("div", wt, [
        e(x, {
          vertical: "",
          style: { gap: "8px", "margin-top": "5px" }
        }, {
          default: c(() => [
            e(xe, {
              cmd: l(s).InsertComment,
              label: _.$t("toolbar.review.insertComment"),
              "icon-name": "comment_add_16",
              "button-width": 90,
              tooltip: _.$t("toolbar.review.insertComment"),
              padding: 8,
              "command-handler": p
            }, null, 8, ["cmd", "label", "tooltip"]),
            e($e, {
              cmd: l(s).DeleteComment,
              label: _.$t("toolbar.review.deleteComment"),
              "icon-name": "comment_delete",
              "menu-items": r.value,
              "button-width": 100,
              modelValue: n.value,
              "onUpdate:modelValue": u[0] || (u[0] = (E) => n.value = E)
            }, null, 8, ["cmd", "label", "menu-items", "modelValue"])
          ]),
          _: 1
        }),
        e(x, {
          vertical: "",
          style: { gap: "8px", "margin-top": "5px" }
        }, {
          default: c(() => [
            e(xe, {
              cmd: l(s).PreviousComment,
              label: "",
              "icon-name": "comment_previous",
              "button-width": 30,
              tooltip: _.$t("toolbar.review.previousComment"),
              padding: 8
            }, null, 8, ["cmd", "tooltip"]),
            e(xe, {
              cmd: l(s).NextComment,
              label: "",
              "icon-name": "comment_next",
              "button-width": 30,
              tooltip: _.$t("toolbar.review.nextComment"),
              padding: 8
            }, null, 8, ["cmd", "tooltip"])
          ]),
          _: 1
        }),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px 10px"
        }),
        e(j, {
          cmd: l(s).ShowHideCommentFlag,
          label: _.$t("toolbar.review.showHideComment"),
          "icon-name": m.value ? "comment_hide" : "comment_show",
          active: m.value,
          tooltip: _.$t("toolbar.review.showHideComment"),
          commandHandler: v
        }, null, 8, ["cmd", "label", "icon-name", "active", "tooltip"]),
        e(j, {
          cmd: l(s).ShowHideComment,
          label: _.$t("toolbar.review.commentList"),
          "icon-name": "comment_list",
          active: g.value,
          tooltip: _.$t("toolbar.review.commentList"),
          commandHandler: b,
          "is-active": !0
        }, null, 8, ["cmd", "label", "active", "tooltip"])
      ]);
    };
  }
}), xt = { style: { display: "flex", gap: "8px" } }, da = /* @__PURE__ */ N({
  __name: "SlideShowGroup",
  setup(i) {
    const o = D(), t = L(z), a = h(() => o == null ? void 0 : o.getters["command/active"](s.ShowHideSlide));
    function d(m) {
      t.run(s.Play, { value: m });
    }
    function n() {
      t.run(s.ShowHideSlide, { value: !a.value });
    }
    return (m, g) => (f(), C("div", xt, [
      e(j, {
        cmd: l(s).Play,
        label: m.$t("toolbar.slideShow.playFromStart"),
        "icon-name": "startFromBeginning",
        active: !1,
        tooltip: m.$t("toolbar.slideShow.playFromStart"),
        commandHandler: () => d("playFromStart")
      }, null, 8, ["cmd", "label", "tooltip", "commandHandler"]),
      e(j, {
        cmd: l(s).Play,
        label: m.$t("toolbar.slideShow.playFromCurrent"),
        "icon-name": "playFromCurrentSlide",
        active: !1,
        tooltip: m.$t("toolbar.slideShow.playFromCurrent"),
        commandHandler: () => d("playFromCurrent")
      }, null, 8, ["cmd", "label", "tooltip", "commandHandler"]),
      e(j, {
        cmd: l(s).ShowHideSlide,
        label: m.$t("toolbar.slideShow.hideSlide"),
        "icon-name": a.value ? "showSlide" : "hideSlide",
        "is-active": !0,
        active: a.value,
        tooltip: m.$t("toolbar.slideShow.hideSlide"),
        commandHandler: n
      }, null, 8, ["cmd", "label", "icon-name", "active", "tooltip"])
    ]));
  }
}), Sl = /* @__PURE__ */ N({
  __name: "AlignHorizontalGroup",
  props: {
    cmd: {},
    showJustify: { type: Boolean, default: !0 },
    showDistribute: { type: Boolean, default: !0 }
  },
  setup(i) {
    const o = D(), t = i, a = h(() => o == null ? void 0 : o.getters["command/can"](t.cmd)), d = h(() => o == null ? void 0 : o.getters["command/getVal"](t.cmd)), n = L(z), m = {
      Right: 0,
      // 右对齐
      Left: 1,
      // 左对齐
      Center: 2,
      // 居中
      Justify: 3,
      // 两端对齐
      Distribute: 4
      // 分散对齐
    };
    function g(r) {
      const p = { value: r };
      n.run(t.cmd, p);
    }
    return (r, p) => {
      const S = k("n-space");
      return f(), H(S, null, {
        default: c(() => [
          e(l(Ce), {
            active: d.value === "left",
            disabled: !a.value,
            onClick: p[0] || (p[0] = (b) => g(m.Left)),
            "icon-name": "Ribbon_word_align_left_16__clip_cell",
            tooltip: r.$t("toolbar.start.horizontalAlignLeft"),
            class: "global-small-icon-button"
          }, null, 8, ["active", "disabled", "tooltip"]),
          e(l(Ce), {
            active: d.value === "center",
            disabled: !a.value,
            onClick: p[1] || (p[1] = (b) => g(m.Center)),
            "icon-name": "Ribbon_word_center_16__clip_cell",
            tooltip: r.$t("toolbar.start.horizontalAlignCenter"),
            class: "global-small-icon-button"
          }, null, 8, ["active", "disabled", "tooltip"]),
          e(l(Ce), {
            active: d.value === "right",
            disabled: !a.value,
            onClick: p[2] || (p[2] = (b) => g(m.Right)),
            "icon-name": "Ribbon_word_align_right_16__clip_cell",
            tooltip: r.$t("toolbar.start.horizontalAlignRight"),
            class: "global-small-icon-button"
          }, null, 8, ["active", "disabled", "tooltip"]),
          i.showJustify ? (f(), H(l(Ce), {
            key: 0,
            active: d.value === "justify",
            disabled: !a.value,
            onClick: p[3] || (p[3] = (b) => g(m.Justify)),
            "icon-name": "Ribbon_word_justify_16__clip_cell",
            tooltip: r.$t("toolbar.start.horizontalAlignJustify"),
            class: "global-small-icon-button"
          }, null, 8, ["active", "disabled", "tooltip"])) : de("", !0),
          i.showDistribute ? (f(), H(l(Ce), {
            key: 1,
            active: d.value === "distribute",
            disabled: !a.value,
            onClick: p[4] || (p[4] = (b) => g(m.Distribute)),
            "icon-name": "Ribbon_word_distributed_16__clip_cell",
            tooltip: r.$t("toolbar.start.horizontalAlignDistribute"),
            class: "global-small-icon-button"
          }, null, 8, ["active", "disabled", "tooltip"])) : de("", !0)
        ]),
        _: 1
      });
    };
  }
}), St = {
  key: 1,
  class: "list-item"
}, Tt = /* @__PURE__ */ N({
  __name: "ListSmallIconWithArrow",
  props: {
    cmd: {},
    iconName: {},
    x: {},
    y: {},
    space: { default: 0 },
    placement: { default: "bottom-start" },
    tooltip: {},
    customLabel: {}
  },
  setup(i) {
    const o = i, t = h(
      () => o.iconName ? { name: o.iconName } : {
        x: o.x,
        y: o.y,
        source: G.image,
        imageWidth: G.width
      }
    ), a = D(), d = $(!1), n = $("default"), m = L(z), g = h(() => a == null ? void 0 : a.getters["command/can"](o.cmd)), r = h(() => a == null ? void 0 : a.getters["command/bullet"](o.cmd)), p = {
      [s.Bullet]: { getCmd: s.GetBulletList, listName: "bulletList" },
      [s.Numbering]: { getCmd: s.GetNumberingList, listName: "numberingList" }
    }, S = h(() => a == null ? void 0 : a.getters["command/" + p[o.cmd].listName]);
    function b(T) {
      return r.value && S.value[T].tag == r.value.tag && (S.value[T].char == r.value.char || S.value[T].char == r.value.type) ? "active list-item" : "list-item";
    }
    function y(T) {
      return {
        fontFamily: T.typeface,
        display: "flex",
        width: o.cmd == s.Bullet ? "" : "25px",
        height: "25px",
        justifyContent: "flex-end",
        alignItems: "center"
      };
    }
    const v = h(() => {
      let T = {};
      return d.value ? (T = {
        backgroundColor: "var(--active-bg)"
      }, T) : (n.value === "hover" && (T = {
        backgroundColor: "var(--hover-bg)"
      }), T);
    });
    ee(d, (T) => {
      T && m.run(p[o.cmd].getCmd, void 0);
    }), ee(g, (T) => {
      T && m.run(p[o.cmd].getCmd, void 0);
    });
    const _ = {
      Button: {
        // default
        color: "transparent",
        border: "transparent",
        borderRadiusMedium: "4px",
        // focus
        borderFocus: "transparent",
        textColorFocus: "",
        colorFocus: "transparent",
        // hover
        colorHover: "transparent",
        textColorHover: "",
        borderHover: "transparent",
        rippleColor: "transparent",
        // active / pressed
        colorPressed: "transparent",
        textColorPressed: "",
        borderPressed: "transparent",
        // disabled
        borderDisabled: "transparent"
      }
    }, u = {
      Button: {
        // default
        color: "var(--primary-bg)",
        border: "1px solid var(--button-border)",
        borderRadiusMedium: "4px",
        // focus
        borderFocus: "1px solid var(--button-border)",
        textColorFocus: "",
        colorFocus: "var(--primary-bg)",
        // hover
        colorHover: "var(--primary-bg)",
        textColorHover: "",
        borderHover: "1px solid var(--button-border)",
        rippleColor: "var(--primary-bg)",
        // active / pressed
        colorPressed: "var(--primary-bg)",
        textColorPressed: "",
        borderPressed: "1px solid var(--button-border)",
        // disabled
        borderDisabled: "1px solid var(--button-border)"
      }
    }, x = {
      Button: {
        // default
        color: "var(--primary-bg)",
        border: "1px solid var(--button-border)",
        borderRadiusMedium: "4px",
        // focus
        borderFocus: "1px solid var(--button-border)",
        textColorFocus: "",
        colorFocus: "var(--primary-bg)",
        // hover
        colorHover: "var(--primary-bg)",
        textColorHover: "",
        borderHover: "1px solid var(--button-border)",
        rippleColor: "var(--primary-bg)",
        // active / pressed
        colorPressed: "var(--primary-bg)",
        textColorPressed: "",
        borderPressed: "1px solid var(--button-border)",
        // disabled
        borderDisabled: "1px solid var(--button-border)"
      }
    }, E = {
      Button: {
        // default
        color: "var(--active-bg)",
        border: "transparent",
        borderRadiusMedium: "4px",
        // focus
        borderFocus: "transparent",
        colorFocus: "transparent",
        // hover
        colorHover: "var(--hover-bg)",
        borderHover: "transparent",
        rippleColor: "var(--hover-bg)",
        // active / pressed
        colorPressed: "var(--active-bg)",
        borderPressed: "transparent",
        // disabled
        borderDisabled: "transparent"
      }
    }, A = h(() => r.value ? E : d.value ? x : n.value === "hover" ? u : _);
    function U(T) {
      d.value = T;
    }
    function B(T) {
      T || (T = { type: 0, typeface: "", tag: "", charlist: [], char: "", index: 0 }), d.value = !1, m.run(o.cmd, { value: T });
    }
    function P(T) {
    }
    function Y() {
      let T = null;
      r.value ? (T = { type: 0, typeface: "", tag: "", charlist: [], char: "", index: 0 }, m.run(o.cmd, { value: T })) : (T = S.value[0], m.run(o.cmd, { value: T }));
    }
    return (T, R) => {
      const F = k("n-button"), V = k("n-icon"), ce = k("n-grid-item"), se = k("n-grid"), ll = k("n-space"), X = k("n-button-group"), tl = k("n-config-provider");
      return f(), C("div", null, [
        e(tl, { "theme-overrides": A.value }, {
          default: c(() => [
            e(l(he), null, {
              trigger: c(() => [
                e(X, {
                  onMouseup: R[2] || (R[2] = (ye) => n.value = "hover"),
                  onMouseleave: R[3] || (R[3] = (ye) => n.value = "default"),
                  onMouseenter: R[4] || (R[4] = (ye) => n.value = "hover")
                }, {
                  default: c(() => [
                    e(F, {
                      class: "small-icon-btn",
                      disabled: !g.value
                    }, {
                      default: c(() => [
                        e(l(te), ke(t.value, {
                          size: 16,
                          onClick: Y
                        }), null, 16)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    e(l(Je), {
                      trigger: "click",
                      placement: i.placement,
                      show: d.value,
                      "onUpdate:show": [
                        R[1] || (R[1] = (ye) => d.value = ye),
                        U
                      ],
                      "show-arrow": !1,
                      space: i.space
                    }, {
                      trigger: c(() => [
                        e(F, {
                          class: "small-icon-btn-arrow",
                          disabled: !g.value,
                          style: J(v.value)
                        }, {
                          icon: c(() => [
                            e(V, { size: "12" }, {
                              default: c(() => [
                                _e(e(l(Me), null, null, 512), [
                                  [ge, d.value]
                                ]),
                                _e(e(l(fe), null, null, 512), [
                                  [ge, !d.value]
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["disabled", "style"])
                      ]),
                      default: c(() => [
                        I("div", null, [
                          e(se, {
                            "x-gap": 12,
                            "y-gap": 8,
                            cols: 3
                          }, {
                            default: c(() => [
                              e(ce, null, {
                                default: c(() => [
                                  e(l(he), null, {
                                    trigger: c(() => [
                                      I("div", {
                                        class: "list-item",
                                        onClick: R[0] || (R[0] = (ye) => B(null))
                                      }, M(T.$t(`toolbar.start.${i.cmd}.none`)), 1)
                                    ]),
                                    default: c(() => [
                                      oe(" " + M(T.$t(`toolbar.start.${i.cmd}.none`)), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              (f(!0), C(ae, null, ne(S.value, (ye, ml) => (f(), H(ce, {
                                key: ml.toString(),
                                onClick: (bl) => B(ye)
                              }, {
                                default: c(() => [
                                  e(l(he), null, {
                                    trigger: c(() => [
                                      ye.type === 1 ? (f(), C("div", {
                                        key: 0,
                                        class: me(b(Number(ml)))
                                      }, [
                                        (f(!0), C(ae, null, ne(ye.charlist, (bl, $l) => (f(), C("div", {
                                          style: { display: "flex", "align-items": "center" },
                                          key: $l.toString()
                                        }, [
                                          I("span", {
                                            style: J(y(ye))
                                          }, M(bl), 5),
                                          R[5] || (R[5] = I("div", { style: { width: "25px", height: "1px", border: "none", "border-top": "1px solid #000", margin: "0px 5px" } }, null, -1))
                                        ]))), 128))
                                      ], 2)) : (f(), C("div", St))
                                    ]),
                                    default: c(() => [
                                      oe(" " + M(T.$t(`toolbar.start.${i.cmd}.${ye.title}`)), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["onClick"]))), 128))
                            ]),
                            _: 1
                          }),
                          i.customLabel ? (f(), H(l(O), {
                            key: 0,
                            horizontal: ""
                          })) : de("", !0),
                          i.customLabel ? (f(), H(ll, {
                            key: 1,
                            class: "custom-label",
                            onClick: P
                          }, {
                            default: c(() => [
                              oe(M(i.customLabel), 1)
                            ]),
                            _: 1
                          })) : de("", !0)
                        ])
                      ]),
                      _: 1
                    }, 8, ["placement", "show", "space"])
                  ]),
                  _: 1
                })
              ]),
              default: c(() => [
                oe(" " + M(i.tooltip), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["theme-overrides"])
      ]);
    };
  }
}), Ge = /* @__PURE__ */ K(Tt, [["__scopeId", "data-v-3cdcbd3b"]]), $t = {
  key: 0,
  style: { margin: "0 4px", "font-size": "12px" }
}, kt = {
  key: 0,
  style: { margin: "0 4px" }
}, Ct = /* @__PURE__ */ N({
  __name: "CommandSmallDropDown",
  props: {
    cmd: {},
    iconName: {},
    x: {},
    y: {},
    tooltip: {},
    showArrow: { type: Boolean, default: !0 },
    buttonWidth: { default: 50 },
    buttonHeight: { default: 25 },
    menuItems: {},
    label: {},
    isActive: { type: Boolean, default: !1 },
    isActiveOption: { type: Boolean }
  },
  emits: ["update:show"],
  setup(i, { emit: o }) {
    const t = D(), a = i, d = h(
      () => a.iconName ? { name: a.iconName } : {
        x: a.x,
        y: a.y,
        source: G.image,
        imageWidth: G.width
      }
    ), n = $(!1), m = $("default"), g = h(() => t == null ? void 0 : t.getters["command/can"](a.cmd)), r = L(z), p = h(() => t == null ? void 0 : t.getters["command/getVal"](a.cmd)), S = Xe(h(() => a.menuItems), n, p), b = h(() => a.isActiveOption ? Ye(a.menuItems, p, a.isActiveOption) : ({ node: U, option: B }) => U), y = {
      Button: {
        // default
        color: "transparent",
        border: "transparent",
        borderRadiusMedium: "4px",
        // focus
        borderFocus: "transparent",
        textColorFocus: "",
        colorFocus: "transparent",
        // hover
        colorHover: "transparent",
        textColorHover: "",
        borderHover: "transparent",
        rippleColor: "transparent",
        // active / pressed
        colorPressed: "transparent",
        textColorPressed: "",
        borderPressed: "transparent",
        // disabled
        borderDisabled: "transparent"
      },
      Dropdown: {
        fontSizeSmall: "12px",
        optionTextColor: "var(--primary-text)",
        optionTextColorHover: "var(--primary-text)",
        optionTextColorActive: "var(--accent-button-text)",
        optionTextColorChildActive: "var(--accent-button-text)",
        optionColorHover: "transparent",
        optionColorActive: "transparent",
        boxShadow: "0px 6px 26px 0px #00000024",
        borderRadius: "8px",
        padding: "10px"
      }
    }, v = {
      Button: {
        // default
        color: "var(--primary-bg)",
        border: "1px solid var(--button-border)",
        borderRadiusMedium: "4px",
        // focus
        borderFocus: "1px solid var(--button-border)",
        textColorFocus: "",
        colorFocus: "var(--primary-bg)",
        // hover
        colorHover: "var(--primary-bg)",
        textColorHover: "",
        borderHover: "1px solid var(--button-border)",
        rippleColor: "var(--primary-bg)",
        // active / pressed
        colorPressed: "var(--primary-bg)",
        textColorPressed: "",
        borderPressed: "1px solid var(--button-border)",
        // disabled
        borderDisabled: "1px solid var(--button-border)"
      },
      Dropdown: {
        fontSizeSmall: "12px",
        optionTextColor: "var(--primary-text)",
        optionTextColorHover: "var(--primary-text)",
        optionTextColorActive: "var(--accent-button-text)",
        optionTextColorChildActive: "var(--accent-button-text)",
        optionColorHover: "transparent",
        optionColorActive: "transparent",
        boxShadow: "0px 6px 26px 0px #00000024",
        borderRadius: "8px",
        padding: "10px"
      }
    }, _ = {
      Button: {
        // default
        color: "var(--primary-bg)",
        border: "1px solid var(--button-border)",
        borderRadiusMedium: "4px",
        // focus
        borderFocus: "1px solid var(--button-border)",
        textColorFocus: "",
        colorFocus: "var(--primary-bg)",
        // hover
        colorHover: "var(--primary-bg)",
        textColorHover: "",
        borderHover: "1px solid var(--button-border)",
        rippleColor: "var(--primary-bg)",
        // active / pressed
        colorPressed: "var(--primary-bg)",
        textColorPressed: "",
        borderPressed: "1px solid var(--button-border)",
        // disabled
        borderDisabled: "1px solid var(--button-border)"
      },
      Dropdown: {
        fontSizeSmall: "12px",
        optionTextColor: "var(--primary-text)",
        optionTextColorHover: "var(--primary-text)",
        optionTextColorActive: "var(--accent-button-text)",
        optionTextColorChildActive: "var(--accent-button-text)",
        optionColorHover: "transparent",
        optionColorActive: "transparent",
        boxShadow: "0px 6px 26px 0px #00000024",
        borderRadius: "8px",
        padding: "10px"
      }
    }, u = h(() => n.value ? _ : m.value === "hover" ? v : y);
    function x(U, B) {
      if (B.noTrigger)
        return;
      const P = { value: U };
      r.run(a.cmd, P);
    }
    function E(U) {
      n.value = U;
    }
    const A = h(() => {
      let U = {};
      return n.value ? (U = {
        backgroundColor: "var(--active-bg)"
      }, U) : (m.value === "hover" && (U = {
        backgroundColor: "var(--hover-bg)"
      }), U);
    });
    return (U, B) => {
      const P = k("n-button"), Y = k("n-icon"), T = k("n-button-group"), R = k("n-dropdown"), F = k("n-config-provider");
      return f(), H(F, { "theme-overrides": u.value }, {
        default: c(() => [
          e(R, {
            trigger: "click",
            size: "small",
            options: l(S),
            onSelect: x,
            "render-option": b.value,
            "on-update:show": E
          }, {
            default: c(() => [
              i.tooltip ? (f(), H(l(he), { key: 0 }, {
                trigger: c(() => [
                  e(T, {
                    onMouseup: B[0] || (B[0] = (V) => m.value = "hover"),
                    onMouseleave: B[1] || (B[1] = (V) => m.value = "default")
                  }, {
                    default: c(() => [
                      e(P, {
                        class: "small-icon-btn",
                        disabled: !g.value,
                        style: J({ width: i.label ? "auto" : "22px" })
                      }, {
                        default: c(() => [
                          e(l(te), ke(d.value, { size: 16 }), null, 16),
                          i.label ? (f(), C("span", $t, M(i.label), 1)) : de("", !0)
                        ]),
                        _: 1
                      }, 8, ["disabled", "style"]),
                      e(P, {
                        class: "small-icon-btn-arrow",
                        disabled: !g.value,
                        style: J(A.value)
                      }, {
                        icon: c(() => [
                          e(Y, { size: "12" }, {
                            default: c(() => [
                              _e(e(l(Me), null, null, 512), [
                                [ge, n.value]
                              ]),
                              _e(e(l(fe), null, null, 512), [
                                [ge, !n.value]
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["disabled", "style"])
                    ]),
                    _: 1
                  })
                ]),
                default: c(() => [
                  oe(" " + M(i.tooltip), 1)
                ]),
                _: 1
              })) : (f(), H(T, {
                key: 1,
                onMouseup: B[2] || (B[2] = (V) => m.value = "hover"),
                onMouseleave: B[3] || (B[3] = (V) => m.value = "default")
              }, {
                default: c(() => [
                  e(P, {
                    class: "small-icon-btn",
                    disabled: !g.value,
                    style: J({ width: i.label ? "auto" : "22px" })
                  }, {
                    default: c(() => [
                      e(l(te), ke(d.value, { size: 16 }), null, 16),
                      i.label ? (f(), C("span", kt, M(i.label), 1)) : de("", !0)
                    ]),
                    _: 1
                  }, 8, ["disabled", "style"]),
                  e(P, {
                    class: "small-icon-btn-arrow",
                    disabled: !g.value,
                    style: J(A.value)
                  }, {
                    icon: c(() => [
                      e(Y, { size: "12" }, {
                        default: c(() => [
                          _e(e(l(Me), null, null, 512), [
                            [ge, n.value]
                          ]),
                          _e(e(l(fe), null, null, 512), [
                            [ge, !n.value]
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["disabled", "style"])
                ]),
                _: 1
              }))
            ]),
            _: 1
          }, 8, ["options", "render-option"])
        ]),
        _: 1
      }, 8, ["theme-overrides"]);
    };
  }
}), De = /* @__PURE__ */ K(Ct, [["__scopeId", "data-v-f8b51261"]]), Et = { style: { display: "flex", height: "100%" } }, Rt = { class: "setting-group" }, It = /* @__PURE__ */ N({
  __name: "SettingGroup",
  props: {
    command: {},
    disabled: {},
    defaultValue: {},
    label: {}
  },
  setup(i) {
    const o = L(Qe, null), t = D(), a = i;
    function d() {
      switch (a.command) {
        case He.Font:
        case He.Paragraph:
          var n = new Event(a.command);
          n.defaultValue = a.defaultValue, ((o == null ? void 0 : o.eventTarget) ?? window).dispatchEvent(n);
          break;
        case He.Shape:
          t.commit("panel/openPanel", Oe.SetShapeAndTextPanel);
          break;
      }
    }
    return (n, m) => {
      const g = k("n-button");
      return f(), C("div", Et, [
        Ke(n.$slots, "default", {}, void 0, !0),
        I("div", Rt, [
          e(l(he), null, {
            trigger: c(() => [
              e(g, {
                class: "setting-group-icon",
                disabled: i.disabled,
                onClick: d,
                style: { border: "none", padding: "0", outline: "none", height: "auto" }
              }, {
                default: c(() => [
                  e(l(te), {
                    x: 0,
                    y: -185,
                    size: 8,
                    source: l(G).image,
                    imageWidth: l(G).width
                  }, null, 8, ["source", "imageWidth"])
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            default: c(() => [
              oe(" " + M(i.label), 1)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), el = /* @__PURE__ */ K(It, [["__scopeId", "data-v-87dd6e64"]]), Ht = { class: "toolbar-group" }, At = { style: { display: "flex", gap: "8px" } }, Bt = { style: { display: "flex", gap: "8px" } }, Nt = /* @__PURE__ */ N({
  __name: "ParaStyleGroup",
  props: {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(i) {
    const o = L(z), t = D(), { t: a } = Q(), d = h(() => t == null ? void 0 : t.getters["command/can"](s.ParagraphSetting)), n = h(() => t == null ? void 0 : t.getters["command/paragraphData"]), m = h(() => t == null ? void 0 : t.getters["command/getVal"](s.TextDirection)), g = ze(i, "modelValue"), r = h(() => {
      let _ = "";
      n.value.spaceLineRule === null ? _ = null : n.value.spaceLineRule === 2 ? _ = "fixed" : [1, 1.5, 2].includes(n.value.spaceLine) ? _ = { 1: "single", 1.5: "oneHalf", 2: "double" }[n.value.spaceLine] || "" : n.value.spaceLine >= 0 && (_ = "multiple");
      let u = "none";
      return n.value.indFirstLine == null ? u = null : n.value.indFirstLine === 0 ? u = "none" : Number(n.value.indFirstLine) > 0 ? u = "firstLine" : u = "hang", {
        alignment: n.value.algn,
        indentBeforeText: n.value.indLeft,
        special: u,
        by: n.value.indFirstLine == null ? null : Math.abs(Number(n.value.indFirstLine)),
        spaceBefore: n.value.spaceBefore,
        spaceAfter: n.value.spaceAfter,
        lineSpace: _,
        at: _ === null ? null : /fixed|multiple/.test(_) ? n.value.spaceLine : 0
      };
    }), p = $([
      {
        label: `${a("toolbar.start.lineSpacing.one")}`,
        key: "one",
        disabled: !1
      },
      {
        label: `${a("toolbar.start.lineSpacing.oneHalf")}`,
        key: "oneHalf",
        disabled: !1
      },
      {
        label: `${a("toolbar.start.lineSpacing.two")}`,
        key: "two",
        disabled: !1
      },
      {
        label: `${a("toolbar.start.lineSpacing.twoHalf")}`,
        key: "twoHalf",
        disabled: !1
      },
      {
        label: `${a("toolbar.start.lineSpacing.three")}`,
        key: "three",
        disabled: !1
      },
      {
        label: `${a("toolbar.start.lineSpacing.option")}`,
        key: "option",
        disabled: !1,
        noTrigger: !0,
        props: {
          onClick: () => {
            g.value = !0;
          }
        }
      }
    ]), S = $([
      {
        label: `${a("toolbar.start.textDirection.horizontal")}`,
        key: we.HORIZONTAL,
        disabled: !1,
        icon: w("ppt_text_horizontal_16__clip_cell")
      },
      {
        label: `${a("toolbar.start.textDirection.vertical")}`,
        key: we.VERTICAL,
        disabled: !1,
        icon: w("ppt_text_direction_16__clip_cell")
      },
      {
        label: `${a("toolbar.start.textDirection.rotate90")}`,
        key: we.ROTATE_90,
        disabled: !1,
        icon: w("ppt_text__rotate_all_text_90_16__clip_cell")
      },
      {
        label: `${a("toolbar.start.textDirection.rotate270")}`,
        key: we.ROTATE_270,
        disabled: !1,
        icon: w("ppt_text_rotate_all_text_270_16__clip_cell")
      }
      // {
      //   label: `${t('toolbar.start.textDirection.stacked')}`,
      //   key: "stacked",
      //   disabled: false,
      //   icon: renderIcon("ppt_text_stacked_16__clip_cell"),
      // },
      // {
      //   type: 'divider',
      //   key: 'divider2'
      // },
      // {
      //   label: `${t('toolbar.start.textDirection.option')}`,
      //   key: "option",
      //   disabled: false,
      //   noTrigger: true,
      //   props: {
      //     onClick: () => {
      //       //  弹出菜单
      //     }
      //   }
      // },
    ]), b = h(() => m.value === we.HORIZONTAL ? [
      {
        label: `${a("toolbar.start.alignText.top")}`,
        key: 0,
        disabled: !1,
        icon: w("Ribbon_excle_align_top_16__clip_cell")
      },
      {
        label: `${a("toolbar.start.alignText.middle")}`,
        key: 1,
        disabled: !1,
        icon: w("Ribbon_excle_align_vertically_16__clip_cell")
      },
      {
        label: `${a("toolbar.start.alignText.bottom")}`,
        key: 2,
        disabled: !1,
        icon: w("Ribbon_excle_align_botton_16__clip_cell")
      }
    ] : m.value === we.ROTATE_270 ? [
      {
        label: `${a("toolbar.start.alignText.top")}`,
        key: 0,
        disabled: !1,
        icon: w("Ribbon_excle_align_top_16__clip_cell")
      },
      {
        label: `${a("toolbar.start.alignText.middle")}`,
        key: 1,
        disabled: !1,
        icon: w("Ribbon_excle_align_vertically_16__clip_cell")
      },
      {
        label: `${a("toolbar.start.alignText.bottom")}`,
        key: 2,
        disabled: !1,
        icon: w("Ribbon_excle_align_botton_16__clip_cell")
      }
    ] : [
      {
        label: `${a("toolbar.start.alignText.top")}`,
        key: 2,
        disabled: !1,
        icon: w("Ribbon_excle_align_top_16__clip_cell")
      },
      {
        label: `${a("toolbar.start.alignText.middle")}`,
        key: 1,
        disabled: !1,
        icon: w("Ribbon_excle_align_vertically_16__clip_cell")
      },
      {
        label: `${a("toolbar.start.alignText.bottom")}`,
        key: 0,
        disabled: !1,
        icon: w("Ribbon_excle_align_botton_16__clip_cell")
      }
    ]);
    function y() {
      o.run(s.DecreaseListLevel, { value: "decrease" });
    }
    function v() {
      o.run(s.IncreaseListLevel, { value: "increase" });
    }
    return (_, u) => {
      const x = k("n-space");
      return f(), C("div", Ht, [
        e(el, {
          command: l(He).Paragraph,
          disabled: !d.value,
          defaultValue: r.value,
          label: _.$t("toolbar.start.paragraph"),
          modelValue: g.value,
          "onUpdate:modelValue": u[0] || (u[0] = (E) => g.value = E)
        }, {
          default: c(() => [
            e(x, { vertical: "" }, {
              default: c(() => [
                I("div", At, [
                  e(Ge, {
                    cmd: l(s).Bullet,
                    "icon-name": "Ribbon_word_list_16__clip_cell",
                    tooltip: _.$t("toolbar.start.bullet.title"),
                    enabled: !1,
                    showArrow: !0
                  }, null, 8, ["cmd", "tooltip"]),
                  e(Ge, {
                    cmd: l(s).Numbering,
                    x: -656,
                    y: -56,
                    tooltip: _.$t("toolbar.start.numbering.title"),
                    enabled: !1,
                    showArrow: !0
                  }, null, 8, ["cmd", "tooltip"]),
                  e(l(O), {
                    vertical: !0,
                    height: 25,
                    style: { margin: "0px" }
                  }),
                  e(le, {
                    cmd: l(s).IncreaseListLevel,
                    "icon-name": "Ribbon_word_Decrease_Indent_16__clip_cell",
                    tooltip: _.$t("toolbar.start.increaseListLevel"),
                    class: "global-small-icon-button",
                    commandHandler: v
                  }, null, 8, ["cmd", "tooltip"]),
                  e(le, {
                    cmd: l(s).DecreaseListLevel,
                    "icon-name": "Ribbon_word_Increase_Indent_16__clip_cell",
                    tooltip: _.$t("toolbar.start.decreaseListLevel"),
                    class: "global-small-icon-button",
                    commandHandler: y
                  }, null, 8, ["cmd", "tooltip"]),
                  e(l(O), {
                    vertical: !0,
                    height: 25,
                    style: { margin: "0px" }
                  }),
                  e(De, {
                    cmd: l(s).AlignText,
                    "icon-name": "ppt_align_text_16__clip_cell",
                    isActiveOption: !0,
                    tooltip: _.$t("toolbar.start.alignText.title"),
                    menuItems: b.value,
                    isActive: !0
                  }, null, 8, ["cmd", "tooltip", "menuItems"]),
                  e(De, {
                    cmd: l(s).TextDirection,
                    "icon-name": "ppt_text_direction_16__clip_cell",
                    isActiveOption: !0,
                    tooltip: _.$t("toolbar.start.textDirection.title"),
                    menuItems: S.value,
                    isActive: !0
                  }, null, 8, ["cmd", "tooltip", "menuItems"])
                ]),
                I("div", Bt, [
                  e(Sl, {
                    cmd: l(s).AlignHorizontal
                  }, null, 8, ["cmd"]),
                  e(De, {
                    cmd: l(s).LineSpacing,
                    "icon-name": "Ribbon_word_line_spacing_16__clip_cell",
                    isActiveOption: !0,
                    tooltip: _.$t("toolbar.start.lineSpacing.title"),
                    menuItems: p.value,
                    isActive: !0
                  }, null, 8, ["cmd", "tooltip", "menuItems"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["command", "disabled", "defaultValue", "label", "modelValue"])
      ]);
    };
  }
}), Ot = /* @__PURE__ */ K(Nt, [["__scopeId", "data-v-a05331a2"]]), Pt = { class: "toolbar-group" }, Lt = { style: { display: "flex", gap: "8px" } }, Ft = { style: { display: "flex", gap: "8px" } }, Mt = /* @__PURE__ */ N({
  __name: "TextStyleGroup",
  setup(i) {
    const o = D(), t = $([]), a = sl("pptx", il), d = h(() => o == null ? void 0 : o.getters["command/can"](s.FontSetting)), n = h(() => o == null ? void 0 : o.getters["command/textPropertyData"]);
    async function m() {
      (re == null || re.length == 0) && await cl(), re && re.length !== t.value.length && (t.value = re.map(({ fullName: r }) => ({
        label: r,
        value: r
      })));
    }
    const g = h(() => ({
      latinFontName: n.value.latinFontName,
      fontStyle: n.value.fontStyle,
      size: n.value.fontSize || null,
      asianFontName: n.value.easianFontName,
      fontColor: n.value.fontColor,
      underline: n.value.underline,
      underlineColor: n.value.underlineColor,
      effect: {
        strikethrough: n.value.strike,
        smallCaps: n.value.smallCaps,
        allCaps: n.value.allCaps,
        equalize: !1
      },
      offset: n.value.offset,
      spacing: n.value.textSpace > 0 ? "expanded" : n.value.textSpace < 0 ? "condensed" : "normal",
      by: n.value.textSpace,
      kerning: !0,
      kerningValue: 12
    }));
    return (r, p) => {
      const S = k("n-space");
      return f(), C("div", Pt, [
        e(el, {
          command: l(He).Font,
          disabled: !d.value,
          defaultValue: g.value,
          label: r.$t("toolbar.start.font")
        }, {
          default: c(() => [
            e(S, { vertical: "" }, {
              default: c(() => [
                I("div", Lt, [
                  I("span", { onClick: m }, [
                    e(Pe, {
                      cmd: l(s).FontName,
                      options: t.value,
                      width: 140,
                      type: "font"
                    }, null, 8, ["cmd", "options"])
                  ]),
                  e(Pe, {
                    cmd: l(s).FontSize,
                    options: l(a),
                    width: 70,
                    "validate-input": l(dl)
                  }, null, 8, ["cmd", "options", "validate-input"])
                ]),
                I("div", Ft, [
                  e(le, {
                    cmd: l(s).Bold,
                    "icon-name": "Ribbon_word_bold_16__clip_cell",
                    tooltip: r.$t("toolbar.start.bold"),
                    class: "global-small-icon-button"
                  }, null, 8, ["cmd", "tooltip"]),
                  e(le, {
                    cmd: l(s).Italic,
                    "icon-name": "Ribbon_word_Italic_16__clip_cell",
                    tooltip: r.$t("toolbar.start.italic"),
                    class: "global-small-icon-button"
                  }, null, 8, ["cmd", "tooltip"]),
                  e(le, {
                    cmd: l(s).Underline,
                    "icon-name": "Ribbon_word_underline_16__clip_cell",
                    tooltip: r.$t("toolbar.start.underline"),
                    class: "global-small-icon-button"
                  }, null, 8, ["cmd", "tooltip"]),
                  e(le, {
                    cmd: l(s).Strikeout,
                    "icon-name": "Ribbon_word_strikethrough_16__clip_cell",
                    tooltip: r.$t("toolbar.start.strikeout"),
                    class: "global-small-icon-button"
                  }, null, 8, ["cmd", "tooltip"]),
                  e(le, {
                    cmd: l(s).Shadow,
                    x: -448,
                    y: -56,
                    tooltip: r.$t("toolbar.start.textShadow"),
                    class: "global-small-icon-button"
                  }, null, 8, ["cmd", "tooltip"]),
                  e(je, {
                    cmd: l(s).FontColor,
                    "icon-name": "Ribbon_word_text_color_16__clip_cell",
                    tooltip: r.$t("toolbar.start.fontClolor"),
                    class: "global-small-icon-dropdown-button"
                  }, null, 8, ["cmd", "tooltip"]),
                  e(le, {
                    cmd: l(s).ClearAllFormatting,
                    "icon-name": "Ribbon_word_clear_16__clip_cell",
                    tooltip: r.$t("toolbar.start.clearAllFormatting"),
                    class: "global-small-icon-button"
                  }, null, 8, ["cmd", "tooltip"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["command", "disabled", "defaultValue", "label"])
      ]);
    };
  }
}), Dt = /* @__PURE__ */ K(Mt, [["__scopeId", "data-v-52d79efd"]]), zt = { style: { display: "flex", gap: "8px" } }, ca = /* @__PURE__ */ N({
  __name: "UndoRedoGroup",
  setup(i) {
    return (o, t) => (f(), C("div", zt, [
      e(j, {
        cmd: l(s).Undo,
        label: o.$t("toolbar.start.undo"),
        "icon-name": "Ribbon_Word_undo_24__clip_cell"
      }, null, 8, ["cmd", "label"]),
      e(j, {
        cmd: l(s).Redo,
        label: o.$t("toolbar.start.redo"),
        "icon-name": "Ribbon_Word_redo_24__clip_cell"
      }, null, 8, ["cmd", "label"])
    ]));
  }
}), Vt = /* @__PURE__ */ N({
  __name: "Section",
  setup(i) {
    var p, S, b, y, v, _;
    const o = L(Qe, null), t = L(z), a = D(), { t: d } = Q(), n = h(() => a == null ? void 0 : a.getters["command/enabledList"](s.Section)), m = {
      add: {
        label: `${d("toolbar.start.section.add")}`,
        key: "add",
        disabled: !((p = n.value) != null && p.add),
        icon: w("ppt_part_16__clip_cell"),
        noTrigger: !0,
        props: {
          onClick: () => {
            var E;
            if (!((E = n.value) != null && E.add)) return;
            var u = new Event("Rename");
            u.callback = (A) => {
              t.run(s.Section, { value: { name: A, cmd: "add" } });
            }, u.options = { title: d("dialogs.section.add"), name: d("dialogs.section.name"), defaultValue: d("dialogs.section.defaultName"), confirmName: d("common.confirm") }, ((o == null ? void 0 : o.eventTarget) ?? window).dispatchEvent(u);
          }
        }
      },
      rename: {
        label: `${d("toolbar.start.section.rename")}`,
        key: "rename",
        disabled: !((S = n.value) != null && S.rename),
        icon: w("ppt_rename_part_16__clip_cell"),
        noTrigger: !0,
        props: {
          onClick: () => {
            var E;
            if (!((E = n.value) != null && E.rename)) return;
            var u = new Event("Rename");
            u.callback = (A) => {
              t.run(s.Section, { value: { name: A, cmd: "rename" } });
            }, u.options = { title: d("dialogs.section.title"), name: d("dialogs.section.name"), defaultValue: d("dialogs.section.defaultName"), confirmName: d("dialogs.rename") }, ((o == null ? void 0 : o.eventTarget) ?? window).dispatchEvent(u);
          }
        }
      },
      divider1: {
        type: "divider",
        key: "divider1"
      },
      remove: {
        label: `${d("toolbar.start.section.remove")}`,
        key: "remove",
        disabled: !((b = n.value) != null && b.remove),
        icon: w("ppt_delete_part_16__clip_cell"),
        noTrigger: !0,
        props: {
          onClick: () => {
            var u;
            (u = n.value) != null && u.remove && t.run(s.Section, { value: { cmd: "remove" } });
          }
        }
      },
      removeAll: {
        label: `${d("toolbar.start.section.removeAll")}`,
        key: "removeAll",
        disabled: !((y = n.value) != null && y.removeAll),
        icon: w("ppt_delete_all_part_16__clip_cell"),
        noTrigger: !0,
        props: {
          onClick: () => {
            var u;
            (u = n.value) != null && u.removeAll && t.run(s.Section, { value: { cmd: "removeAll" } });
          }
        }
      },
      divider2: {
        type: "divider",
        key: "divider2"
      },
      collapse: {
        label: `${d("toolbar.start.section.collapse")}`,
        key: "collapse",
        disabled: !((v = n.value) != null && v.collapse),
        icon: w("ppt_delete_hide_detail_16__clip_cell"),
        noTrigger: !0,
        props: {
          onClick: () => {
            var u;
            (u = n.value) != null && u.collapse && t.run(s.Section, { value: { cmd: "collapse" } });
          }
        }
      },
      expand: {
        label: `${d("toolbar.start.section.expand")}`,
        key: "expand",
        disabled: !((_ = n.value) != null && _.expand),
        icon: w("ppt_delete_show_detail_16__clip_cell"),
        noTrigger: !0,
        props: {
          onClick: () => {
            var u;
            (u = n.value) != null && u.expand && t.run(s.Section, { value: { cmd: "expand" } });
          }
        }
      }
    }, g = $(Object.values(m));
    ee(n, (u) => {
      for (let x in u) {
        let E = x;
        r(m[E]) && (m[E].disabled = !u[x]);
      }
      g.value = Object.values(m);
    }, { immediate: !0 });
    function r(u) {
      return u.disabled !== void 0;
    }
    return (u, x) => (f(), H(De, {
      cmd: l(s).Section,
      "icon-name": "ppt_part_16__clip_cell",
      tooltip: u.$t("toolbar.start.section.title"),
      menuItems: g.value,
      label: u.$t("toolbar.start.section.title")
    }, null, 8, ["cmd", "tooltip", "menuItems", "label"]));
  }
}), Wt = /* @__PURE__ */ K(Vt, [["__scopeId", "data-v-a45982da"]]), Ut = { style: { display: "flex", gap: "8px" } }, Gt = /* @__PURE__ */ N({
  __name: "SlidesGroup",
  setup(i) {
    return (o, t) => {
      const a = k("n-space");
      return f(), C("div", Ut, [
        e(nl, {
          title: o.$t("toolbar.start.newFromLayout"),
          cmd: l(s).NewSlide,
          label: o.$t("toolbar.start.new"),
          "icon-name": "ppt_add_new_ppt_24__clip_cell",
          tooltip: o.$t("toolbar.start.new")
        }, null, 8, ["title", "cmd", "label", "tooltip"]),
        e(nl, {
          title: o.$t("toolbar.start.layout"),
          cmd: l(s).InsertLayout,
          label: o.$t("toolbar.start.layout"),
          "icon-name": "ppt_layout_24__clip_cell",
          tooltip: o.$t("toolbar.start.layout")
        }, null, 8, ["title", "cmd", "label", "tooltip"]),
        e(a, {
          vertical: "",
          style: { gap: "8px", "margin-top": "5px" }
        }, {
          default: c(() => [
            e(xe, {
              cmd: l(s).ResetSlide,
              label: o.$t("toolbar.start.reset"),
              "icon-name": "ppt_reset_16__clip_cell",
              "button-width": 52,
              tooltip: o.$t("toolbar.start.reset")
            }, null, 8, ["cmd", "label", "tooltip"]),
            e(Wt)
          ]),
          _: 1
        })
      ]);
    };
  }
}), qt = {
  class: "toolbar-group",
  style: { display: "flex", gap: "8px" }
}, Yt = /* @__PURE__ */ N({
  __name: "ClipboardGroup",
  setup(i) {
    const o = D(), t = h(() => o.getters["command/cutAndCopyEndabled"](s.Cut)), a = h(() => o.getters["command/cutAndCopyEndabled"](s.Copy)), d = h(() => o.getters["command/formatPaintEndabled"]);
    return (n, m) => {
      const g = k("n-space");
      return f(), C("div", qt, [
        e(j, {
          cmd: l(s).FormatPaint,
          label: n.$t("toolbar.start.formatPainter"),
          "icon-name": "Ribbon_word_geshishua_24__clip_cell",
          disabled: !d.value
        }, null, 8, ["cmd", "label", "disabled"]),
        e(j, {
          cmd: l(s).Paste,
          label: n.$t("toolbar.start.paste.title"),
          "icon-name": "Ribbon_word_past_24__clip_cell"
        }, null, 8, ["cmd", "label"]),
        e(g, {
          vertical: "",
          style: { gap: "4px", "margin-top": "5px" }
        }, {
          default: c(() => [
            e(le, {
              cmd: l(s).Cut,
              label: n.$t("toolbar.start.cut"),
              "icon-name": "ribbon_word_cut_16__clip_cell",
              tooltip: n.$t("toolbar.start.cut"),
              disabled: !t.value
            }, null, 8, ["cmd", "label", "tooltip", "disabled"]),
            e(le, {
              cmd: l(s).Copy,
              label: n.$t("toolbar.start.copy.title"),
              "icon-name": "ribbon_word_copy_16__clip_cell",
              tooltip: n.$t("toolbar.start.copy.title"),
              disabled: !a.value
            }, null, 8, ["cmd", "label", "tooltip", "disabled"])
          ]),
          _: 1
        })
      ]);
    };
  }
}), Xt = { style: { display: "flex", gap: "8px" } }, jt = /* @__PURE__ */ N({
  __name: "TableInsertAndDelete",
  setup(i) {
    const o = D(), { t } = Q(), a = L(z), d = h(() => o.getters["command/getVal"](s.TableDelete)), n = h(() => [
      {
        label: `${t("toolbar.tableTools.deleteRow")}`,
        key: Ae.DELETE_ROW,
        disabled: (d.value & Ae.DELETE_ROW) !== Ae.DELETE_ROW,
        icon: w("delete_rows"),
        noIcon: !1
      },
      {
        label: `${t("toolbar.tableTools.deleteColumn")}`,
        key: Ae.DELETE_COLUMN,
        disabled: (d.value & Ae.DELETE_COLUMN) !== Ae.DELETE_COLUMN,
        icon: w("delete_columns"),
        noIcon: !1
      }
    ]);
    function m(p) {
      a.run(s.TableDelete, { type: Z.SET, value: p.value });
    }
    function g(p, S) {
      a.run(p, { value: S });
    }
    function r(p, S) {
      a.run(p, { value: S });
    }
    return (p, S) => {
      const b = k("n-space");
      return f(), C("div", Xt, [
        e(pe, {
          cmd: l(s).TableDelete,
          label: p.$t("toolbar.tableTools.delete"),
          "icon-name": "delete",
          "command-handler": m,
          dropdownOptions: n.value,
          isActiveOption: !0
        }, null, 8, ["cmd", "label", "dropdownOptions"]),
        e(b, {
          vertical: "",
          style: { "justify-content": "center" }
        }, {
          default: c(() => [
            e(xe, {
              cmd: l(s).InsertRow,
              label: p.$t("toolbar.tableTools.insertRowByTop"),
              "icon-name": "insert_rows_above",
              "button-width": 100,
              tooltip: p.$t("toolbar.tableTools.insertRowByTop"),
              commandHandler: (y) => g(y, "top")
            }, null, 8, ["cmd", "label", "tooltip", "commandHandler"]),
            e(xe, {
              cmd: l(s).InsertRow,
              label: p.$t("toolbar.tableTools.insertRowByBottom"),
              "icon-name": "insert_rows_below",
              "button-width": 100,
              tooltip: p.$t("toolbar.tableTools.insertRowByBottom"),
              commandHandler: (y) => g(y, "bottom")
            }, null, 8, ["cmd", "label", "tooltip", "commandHandler"])
          ]),
          _: 1
        }),
        e(b, {
          vertical: "",
          style: { "justify-content": "center" }
        }, {
          default: c(() => [
            e(xe, {
              cmd: l(s).InsertColumn,
              label: p.$t("toolbar.tableTools.insertColumnByLeft"),
              "icon-name": "insert_columns_left",
              "button-width": 100,
              tooltip: p.$t("toolbar.tableTools.insertColumnByLeft"),
              commandHandler: (y) => r(y, "left")
            }, null, 8, ["cmd", "label", "tooltip", "commandHandler"]),
            e(xe, {
              cmd: l(s).InsertColumn,
              label: p.$t("toolbar.tableTools.insertColumnByRight"),
              "icon-name": "insert_columns_right",
              "button-width": 100,
              tooltip: p.$t("toolbar.tableTools.insertColumnByRight"),
              commandHandler: (y) => r(y, "right")
            }, null, 8, ["cmd", "label", "tooltip", "commandHandler"])
          ]),
          _: 1
        })
      ]);
    };
  }
}), Jt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAOVJREFUeAHtljEOgyAUhh+Nl+jQBM7A0rE9uR3bAa5Qtl6iCYXBlCAY8D1Y5E9M1IDf90AFgJGjh8U3pJQW8DFKKbFcfG5X/mV29ueX+SXChidoEGv/NSxwVylPtZ1yD3EVMEAmhDslM1l2j9s0GYEc/Px4GughUApvIlADJxfYgruv6+2PuM8ERCmonKf6kYxA7bCTCmDgaAEsHCVAAd8tQAXfJUAJrxaghlcJtIAXC7SC+6z+hG4tN73gSQGttegF98lOQQ94VqAXPCnQE+6zege21nPILKmYJKcgVXm40x0ZocwPaUT2rDPmQ6sAAAAASUVORK5CYII=", Kt = { class: "text-highlight-color-panel-selector" }, Qt = { class: "global-basic-display-text action-text" }, Zt = { class: "standard-row" }, eo = ["onClick"], lo = /* @__PURE__ */ N({
  __name: "TextHighlightColorPalette",
  props: {
    customColors: { default: () => [
      "#FFFF00",
      "#00FF00",
      "#00FFFF",
      "#FF00FF",
      "#0000FF",
      "#FF0000",
      "#00008B",
      "#008B8B",
      "#006400",
      "#8B008B",
      "#8B0000",
      "#9B870C",
      "#A9A9A9",
      "#D3D3D3",
      "#000000"
    ] },
    val: {}
  },
  emits: ["select"],
  setup(i, { emit: o }) {
    const { t, te: a } = Q(), d = i, n = o, m = $(d.val || "");
    function g(u) {
      let x = {
        background: u.hex ? u.hex : u
      };
      return u === m.value && (x.border = "1px solid white", x.outline = "1px solid red", x.width = "12px", x.height = "12px"), x;
    }
    function r(u) {
      if (typeof u == "string") {
        if (u === m.value) {
          n("select", "noFill");
          return;
        }
        u = ol[u];
      }
      n("select", typeof u == "string" ? _(u) : u);
    }
    function p() {
      n("select", "noFill");
    }
    function S(u) {
      const x = "toolbar.start.textHighlight." + ol[u];
      return a(x) === !1 ? t("colorPalette.defaultToolTip") : t(x);
    }
    function b(u) {
      const x = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(u);
      return x ? {
        r: parseInt(x[1], 16),
        g: parseInt(x[2], 16),
        b: parseInt(x[3], 16)
      } : null;
    }
    function y(u, x, E) {
      const A = (U) => U.toString(16).padStart(2, "0");
      return `#${A(u)}${A(x)}${A(E)}`.toUpperCase();
    }
    function v(u) {
      const x = u.match(/\d+/g);
      return !x || x.length < 3 ? null : {
        r: Number(x[0]),
        g: Number(x[1]),
        b: Number(x[2])
      };
    }
    function _(u) {
      const x = b(u) || v(u);
      return x ? y(x.r, x.g, x.b) : u;
    }
    return (u, x) => {
      const E = k("n-space");
      return f(), C("div", null, [
        I("div", Kt, [
          I("div", {
            class: me(["none-fill", ["none-fill", { selected: m.value == "" }]]),
            onClick: p
          }, [
            e(E, { horizontal: "" }, {
              default: c(() => [
                I("div", {
                  class: "button-icon",
                  style: J({ backgroundImage: `url(${l(Jt)})` })
                }, null, 4),
                I("div", Qt, M(u.$t("toolbar.start.textHighlightNone")), 1)
              ]),
              _: 1
            })
          ], 2),
          I("div", Zt, [
            (f(!0), C(ae, null, ne(i.customColors, (A) => (f(), C("div", { key: A }, [
              e(l(he), null, {
                trigger: c(() => [
                  I("span", {
                    class: "color-cell",
                    style: J(g(A)),
                    onClick: (U) => r(A)
                  }, null, 12, eo)
                ]),
                default: c(() => [
                  oe(" " + M(S(A.hex ? A.hex : A)), 1)
                ]),
                _: 2
              }, 1024)
            ]))), 128))
          ])
        ])
      ]);
    };
  }
}), to = /* @__PURE__ */ K(lo, [["__scopeId", "data-v-6a708950"]]), oo = /* @__PURE__ */ N({
  __name: "TextHighlightColorPickerTrigger",
  props: {
    val: {},
    placement: { default: "bottom-start" },
    space: {},
    trigger: { default: "click" },
    to: { type: [Boolean, String], default: "body" }
  },
  emits: ["select", "show"],
  setup(i, { emit: o }) {
    const t = o, a = $(!1);
    function d(m) {
      t("show", !1), a.value = !1, t("select", m);
    }
    function n(m) {
      t("show", m);
    }
    return (m, g) => (f(), C("div", null, [
      e(l(Je), {
        trigger: i.trigger,
        placement: i.placement,
        show: a.value,
        "onUpdate:show": [
          g[0] || (g[0] = (r) => a.value = r),
          n
        ],
        "show-arrow": !1,
        space: i.space,
        to: i.to
      }, {
        trigger: c(() => [
          Ke(m.$slots, "default")
        ]),
        default: c(() => [
          e(to, {
            val: i.val,
            onSelect: d
          }, null, 8, ["val"])
        ]),
        _: 3
      }, 8, ["trigger", "placement", "show", "space", "to"])
    ]));
  }
}), ao = /* @__PURE__ */ N({
  __name: "CommandTextHighlightSmallButton",
  props: {
    cmd: {},
    tooltip: {},
    iconName: {},
    x: {},
    y: {},
    to: { type: [Boolean, String] }
  },
  setup(i) {
    const o = D(), t = L(z), a = $(!1), d = i, n = h(() => o == null ? void 0 : o.getters["command/can"](d.cmd)), m = h(() => o == null ? void 0 : o.getters["command/getVal"](d.cmd));
    function g(b, y) {
      return Object.keys(b).find((v) => b[v] === y);
    }
    const r = h(() => g(ol, m.value));
    function p(b) {
      const y = { value: b };
      t.run(d.cmd, y);
    }
    function S(b) {
      a.value = b;
    }
    return (b, y) => (f(), H(oo, {
      val: r.value,
      to: i.to,
      onSelect: p,
      onShow: S
    }, {
      default: c(() => [
        e(l(Nl), {
          "resource-image": l(G).image,
          disabled: !n.value,
          x: i.x,
          y: i.y,
          "image-width": l(G).width,
          tooltip: i.tooltip,
          "sub-showing": a.value,
          "show-color-cube": !0,
          color: r.value,
          "icon-name": i.iconName,
          onClick: y[0] || (y[0] = Le(() => {
          }, ["stop"]))
        }, null, 8, ["resource-image", "disabled", "x", "y", "image-width", "tooltip", "sub-showing", "color", "icon-name"])
      ]),
      _: 1
    }, 8, ["val", "to"]));
  }
}), no = { class: "toolbar-group" }, io = { style: { display: "flex", gap: "8px" } }, ro = { style: { display: "flex", gap: "8px" } }, so = /* @__PURE__ */ N({
  __name: "TableFontStyle",
  setup(i) {
    const o = D(), t = $([]), a = sl("pptx", il), d = h(() => o == null ? void 0 : o.getters["command/can"](s.FontSetting)), n = h(() => o == null ? void 0 : o.getters["command/textPropertyData"]);
    async function m() {
      (re == null || re.length == 0) && await cl(), re && re.length !== t.value.length && (t.value = re.map(({ fullName: r }) => ({
        label: r,
        value: r
      })));
    }
    const g = h(() => ({
      latinFontName: n.value.latinFontName,
      fontStyle: n.value.fontStyle,
      size: n.value.fontSize || null,
      asianFontName: n.value.easianFontName,
      fontColor: n.value.fontColor,
      underline: n.value.underline,
      underlineColor: n.value.underlineColor,
      effect: {
        strikethrough: n.value.strike,
        smallCaps: n.value.smallCaps,
        allCaps: n.value.allCaps,
        equalize: !1
      },
      offset: n.value.offset,
      spacing: n.value.textSpace > 0 ? "expanded" : n.value.textSpace < 0 ? "condensed" : "normal",
      by: n.value.textSpace,
      kerning: !0,
      kerningValue: 12
    }));
    return (r, p) => {
      const S = k("n-space");
      return f(), C("div", no, [
        e(el, {
          label: r.$t("toolbar.tableTools.fontStyle"),
          command: l(He).Font,
          disabled: !d.value,
          defaultValue: g.value
        }, {
          default: c(() => [
            e(S, {
              vertical: "",
              style: { "align-items": "center" }
            }, {
              default: c(() => [
                I("div", io, [
                  I("span", { onClick: m }, [
                    e(Pe, {
                      cmd: l(s).FontName,
                      options: t.value,
                      width: 140,
                      type: "font"
                    }, null, 8, ["cmd", "options"])
                  ]),
                  e(Pe, {
                    cmd: l(s).FontSize,
                    options: l(a),
                    width: 70,
                    "validate-input": l(dl)
                  }, null, 8, ["cmd", "options", "validate-input"])
                ]),
                I("div", ro, [
                  e(le, {
                    cmd: l(s).Bold,
                    "icon-name": "Ribbon_word_bold_16__clip_cell",
                    tooltip: r.$t("toolbar.start.bold"),
                    class: "global-small-icon-button"
                  }, null, 8, ["cmd", "tooltip"]),
                  e(le, {
                    cmd: l(s).Italic,
                    "icon-name": "Ribbon_word_Italic_16__clip_cell",
                    tooltip: r.$t("toolbar.start.italic"),
                    class: "global-small-icon-button"
                  }, null, 8, ["cmd", "tooltip"]),
                  e(le, {
                    cmd: l(s).Underline,
                    "icon-name": "Ribbon_word_underline_16__clip_cell",
                    tooltip: r.$t("toolbar.start.underline"),
                    class: "global-small-icon-button"
                  }, null, 8, ["cmd", "tooltip"]),
                  e(l(O), {
                    vertical: !0,
                    height: 25,
                    margin: "0px 12px"
                  }),
                  e(ao, {
                    cmd: l(s).HeightLightColor,
                    "icon-name": "Ribbon_word_text_color_16__clip_cell",
                    tooltip: r.$t("toolbar.start.highlightColor"),
                    class: "global-small-icon-dropdown-button"
                  }, null, 8, ["cmd", "tooltip"]),
                  e(je, {
                    cmd: l(s).FontColor,
                    "icon-name": "Ribbon_word_text_color_16__clip_cell",
                    tooltip: r.$t("toolbar.start.fontClolor"),
                    class: "global-small-icon-dropdown-button"
                  }, null, 8, ["cmd", "tooltip"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["label", "command", "disabled", "defaultValue"])
      ]);
    };
  }
}), co = /* @__PURE__ */ K(so, [["__scopeId", "data-v-b12ecbc1"]]), uo = /* @__PURE__ */ N({
  __name: "AlignVerticalGroup",
  props: {
    cmd: {}
  },
  setup(i) {
    const o = D(), t = i, a = h(() => o == null ? void 0 : o.getters["command/can"](t.cmd)), d = h(() => o == null ? void 0 : o.getters["command/getVal"](t.cmd)), n = L(z), m = {
      Top: 0,
      //0
      Center: 1,
      //1
      Bottom: 2,
      //2
      Justified: 3,
      //3
      Distributed: 4
      //4
    };
    function g(r) {
      const p = { value: r };
      n.run(t.cmd, p);
    }
    return (r, p) => {
      const S = k("n-space");
      return f(), H(S, null, {
        default: c(() => [
          e(l(Ce), {
            active: d.value == 0,
            disabled: !a.value,
            onClick: p[0] || (p[0] = (b) => g(m.Top)),
            "resource-image": l(G).image,
            x: -144,
            y: -56,
            "image-width": l(G).width,
            tooltip: r.$t("toolbar.start.verticalAlignTop"),
            class: "global-small-icon-button"
          }, null, 8, ["active", "disabled", "resource-image", "image-width", "tooltip"]),
          e(l(Ce), {
            active: d.value == 1,
            disabled: !a.value,
            onClick: p[1] || (p[1] = (b) => g(m.Center)),
            "resource-image": l(G).image,
            x: -160,
            y: -56,
            "image-width": l(G).width,
            tooltip: r.$t("toolbar.start.verticalAlignCenter"),
            class: "global-small-icon-button"
          }, null, 8, ["active", "disabled", "resource-image", "image-width", "tooltip"]),
          e(l(Ce), {
            active: d.value == 2,
            disabled: !a.value,
            onClick: p[2] || (p[2] = (b) => g(m.Bottom)),
            "resource-image": l(G).image,
            x: -176,
            y: -56,
            "image-width": l(G).width,
            tooltip: r.$t("toolbar.start.verticalAlignBottom"),
            class: "global-small-icon-button"
          }, null, 8, ["active", "disabled", "resource-image", "image-width", "tooltip"])
        ]),
        _: 1
      });
    };
  }
}), po = /* @__PURE__ */ N({
  __name: "TableParaStyle",
  setup(i) {
    const o = D(), { t } = Q(), a = $([
      {
        label: `${t("toolbar.start.textDirection.horizontal")}`,
        key: we.HORIZONTAL,
        disabled: !1,
        icon: w("ppt_text_horizontal_16__clip_cell")
      },
      {
        label: `${t("toolbar.start.textDirection.vertical")}`,
        key: we.VERTICAL,
        disabled: !1,
        icon: w("ppt_text_direction_16__clip_cell")
      },
      {
        label: `${t("toolbar.start.textDirection.rotate90")}`,
        key: we.ROTATE_90,
        disabled: !1,
        icon: w("ppt_text__rotate_all_text_90_16__clip_cell")
      },
      {
        label: `${t("toolbar.start.textDirection.rotate270")}`,
        key: we.ROTATE_270,
        disabled: !1,
        icon: w("ppt_text_rotate_all_text_270_16__clip_cell")
      }
      // {
      //   label: `${t('toolbar.start.textDirection.stacked')}`,
      //   key: "stacked",
      //   disabled: false,
      //   icon: renderIcon("ppt_text_stacked_16__clip_cell"),
      // },
      // {
      //   type: 'divider',
      //   key: 'divider2'
      // },
      // {
      //   label: `${t('toolbar.start.textDirection.option')}`,
      //   key: "option",
      //   disabled: false,
      //   noTrigger: true,
      //   props: {
      //     onClick: () => {
      //       //  弹出菜单
      //     }
      //   }
      // },
    ]), d = $([
      {
        label: `${t("toolbar.tableTools.normal")}`,
        key: 0,
        disabled: !1,
        noIcon: !0
      },
      {
        label: `${t("toolbar.tableTools.noMargin")}`,
        key: 1,
        disabled: !1,
        noIcon: !0
      },
      {
        label: `${t("toolbar.tableTools.thinMargin")}`,
        key: 2,
        disabled: !1,
        noIcon: !0
      },
      {
        label: `${t("toolbar.tableTools.thickMargin")}`,
        key: 3,
        disabled: !1,
        noIcon: !0
      },
      {
        label: `${t("toolbar.tableTools.customMargin")}`,
        key: 4,
        disabled: !1,
        noIcon: !0,
        noTrigger: !0,
        props: {
          onClick: () => {
            o.commit("panel/openPanel", Oe.SetShapeAndTextPanel);
          }
        }
      }
    ]);
    return (n, m) => {
      const g = k("n-space");
      return f(), H(g, null, {
        default: c(() => [
          e(g, { vertical: "" }, {
            default: c(() => [
              e(g, null, {
                default: c(() => [
                  e(Sl, {
                    cmd: l(s).AlignHorizontal,
                    showJustify: !1,
                    showDistribute: !1
                  }, null, 8, ["cmd"]),
                  e(l(O), {
                    vertical: !0,
                    height: 25,
                    margin: "0px 2px"
                  }),
                  e(le, {
                    cmd: l(s).IncreaseLineSpacing,
                    "icon-name": "Ribbon_word_line_spacing_16__clip_cell",
                    tooltip: n.$t("toolbar.start.increaseLineSpacing")
                  }, null, 8, ["cmd", "tooltip"]),
                  e(le, {
                    cmd: l(s).ReduceLineSpacing,
                    "icon-name": "Ribbon_word_line_spacing_16__clip_cell",
                    tooltip: n.$t("toolbar.start.reduceLineSpacing")
                  }, null, 8, ["cmd", "tooltip"])
                ]),
                _: 1
              }),
              e(g, null, {
                default: c(() => [
                  e(uo, {
                    cmd: l(s).AlignText
                  }, null, 8, ["cmd"]),
                  e(l(O), {
                    vertical: !0,
                    height: 25,
                    margin: "0px 2px"
                  }),
                  e(De, {
                    cmd: l(s).TextDirection,
                    "icon-name": "ppt_text_direction_16__clip_cell",
                    isActiveOption: !0,
                    tooltip: n.$t("toolbar.start.textDirection.title"),
                    menuItems: a.value,
                    isActive: !0
                  }, null, 8, ["cmd", "tooltip", "menuItems"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          e(pe, {
            cmd: l(s).CellMargin,
            "icon-name": "cell_margins",
            tooltip: n.$t("toolbar.tableTools.cellMargin"),
            dropdownOptions: d.value,
            "is-active-option": !0,
            label: n.$t("toolbar.tableTools.cellMargin")
          }, null, 8, ["cmd", "tooltip", "dropdownOptions", "label"])
        ]),
        _: 1
      });
    };
  }
}), mo = /* @__PURE__ */ N({
  __name: "IconInputNumber",
  props: {
    cmd: {},
    disabled: { type: Boolean },
    resourceImage: {},
    imageWidth: {},
    x: {},
    y: {},
    iconSize: { default: 16 },
    isInputCommand: { type: Boolean, default: !0 },
    min: {},
    max: {},
    iconName: {}
  },
  setup(i) {
    const o = L(z), t = D(), a = i, d = h(() => t == null ? void 0 : t.getters["command/getVal"](a.cmd)), n = $(d.value), m = $(0);
    ee(() => d.value, (r) => {
      r != n.value && (m.value++, n.value = r);
    });
    function g() {
      if (a.isInputCommand || n.value === null) {
        n.value === null && (n.value = d.value, m.value++);
        return;
      }
      o.run(a.cmd, { value: n.value });
    }
    return (r, p) => {
      const S = k("n-space");
      return f(), H(S, {
        horizontal: "",
        class: "icon-input-number"
      }, {
        default: c(() => [
          e(l(te), {
            name: i.iconName,
            x: i.x,
            y: i.y,
            size: i.iconSize,
            source: i.resourceImage,
            imageWidth: i.imageWidth,
            class: "icon"
          }, null, 8, ["name", "x", "y", "size", "source", "imageWidth"]),
          (f(), H(Ne, {
            max: i.max,
            unit: "厘米",
            step: 0.1,
            min: 0,
            modelValue: n.value,
            "onUpdate:modelValue": p[0] || (p[0] = (b) => n.value = b),
            key: m.value,
            onFocusout: g,
            onKeyup: al(g, ["enter"]),
            onBlur: g
          }, null, 8, ["max", "modelValue"]))
        ]),
        _: 1
      });
    };
  }
}), qe = /* @__PURE__ */ K(mo, [["__scopeId", "data-v-b611d3fc"]]), bo = /* @__PURE__ */ N({
  __name: "TableSizeGroup",
  setup(i) {
    const o = $(null);
    D();
    const { t } = Q();
    return L(z), hl(o), (a, d) => {
      const n = k("n-space"), m = k("n-form");
      return f(), H(m, {
        ref_key: "panelRoot",
        ref: o,
        style: { display: "flex", gap: "8px" }
      }, {
        default: c(() => [
          e(n, {
            vertical: "",
            style: { "margin-top": "-2px", "margin-right": "5px" }
          }, {
            default: c(() => [
              e(xe, {
                cmd: l(s).EqualRowHeight,
                label: a.$t("toolbar.tableTools.equalRowHeight"),
                "icon-name": "ppt_drawing_tools_equal_height_16__clip_cell",
                "button-width": 70,
                tooltip: a.$t("toolbar.tableTools.equalRowHeight")
              }, null, 8, ["cmd", "label", "tooltip"]),
              e(xe, {
                cmd: l(s).EqualColumnWidth,
                label: a.$t("toolbar.tableTools.equalColumnWidth"),
                "icon-name": "ppt_drawing_tools_equal_width_16__clip_cell",
                "button-width": 70,
                tooltip: a.$t("toolbar.tableTools.equalColumnWidth")
              }, null, 8, ["cmd", "label", "tooltip"])
            ]),
            _: 1
          }),
          e(n, {
            vertical: "",
            style: { gap: "0px 12px" }
          }, {
            default: c(() => [
              e(qe, {
                cmd: l(s).RowHeight,
                "icon-name": "Ribbon_excle_start_high_16__clip_cell",
                "is-input-command": !1,
                max: 5963.92
              }, null, 8, ["cmd"]),
              e(qe, {
                cmd: l(s).ColWidth,
                "icon-name": "Ribbon_excle_start_width_16__clip_cell",
                "is-input-command": !1,
                max: 5963.92,
                style: { "margin-top": "8px" }
              }, null, 8, ["cmd"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512);
    };
  }
}), vo = { style: { display: "flex", gap: "8px" } }, _o = /* @__PURE__ */ N({
  __name: "TableArrangeGroup",
  setup(i) {
    const o = D();
    L(z);
    const t = h(() => o == null ? void 0 : o.getters["command/shapeAlign"]), a = h(() => o == null ? void 0 : o.getters["command/alignTarget"]), { t: d } = Q(), n = $([
      {
        label: `${d("toolbar.tableTools.selectTable")}`,
        key: 0,
        disabled: !1,
        icon: w("select_table")
      },
      {
        label: `${d("toolbar.tableTools.selectColumn")}`,
        key: 1,
        disabled: !1,
        icon: w("select_column")
      },
      {
        label: `${d("toolbar.tableTools.selectRow")}`,
        key: 2,
        disabled: !1,
        icon: w("select_row")
      }
    ]), m = $([
      {
        label: `${d("toolbar.shapeToolbar.bringToFront.bringForward")}`,
        key: "up",
        disabled: !1,
        icon: w("ppt_drawing_tools_move_up_16__clip_cell")
      },
      {
        label: `${d("toolbar.shapeToolbar.bringToFront.bringToFront")}`,
        key: "front",
        disabled: !1,
        icon: w("ppt_drawing_tools_bring_front_16__clip_cell")
      }
    ]), g = $([
      {
        label: `${d("toolbar.shapeToolbar.sendBackward.sendBackward")}`,
        key: "down",
        disabled: !1,
        icon: w("ppt_drawing_tools_move_down_16__clip_cell")
      },
      {
        label: `${d("toolbar.shapeToolbar.sendBackward.sendToBack")}`,
        key: "behind",
        disabled: !1,
        icon: w("ppt_drawing_tools_send_back_16__clip_cell")
      }
    ]), r = h(() => [
      {
        label: `${d("toolbar.shapeToolbar.align.left")}`,
        key: "left",
        disabled: !1,
        icon: w("ppt_drawing_tools_align_16__clip_cell"),
        noIcon: !1,
        param: { target: a.value }
      },
      {
        label: `${d("toolbar.shapeToolbar.align.center")}`,
        key: "center",
        disabled: !1,
        noIcon: !1,
        icon: w("ppt_drawing_tools_align_center_horizontally_16__clip_cell"),
        param: { target: a.value }
      },
      {
        label: `${d("toolbar.shapeToolbar.align.right")}`,
        key: "right",
        disabled: !1,
        noIcon: !1,
        icon: w("ppt_drawing_tools_align_right_16__clip_cell"),
        param: { target: a.value }
      },
      {
        label: `${d("toolbar.shapeToolbar.align.top")}`,
        key: "top",
        disabled: !1,
        noIcon: !1,
        icon: w("ppt_drawing_tools_align_top_16__clip_cell"),
        param: { target: a.value }
      },
      {
        label: `${d("toolbar.shapeToolbar.align.middle")}`,
        key: "middle",
        disabled: !1,
        noIcon: !1,
        icon: w("ppt_drawing_tools_align_middle_vertically_16__clip_cell"),
        param: { target: a.value }
      },
      {
        label: `${d("toolbar.shapeToolbar.align.bottom")}`,
        key: "bottom",
        disabled: !1,
        noIcon: !1,
        icon: w("ppt_drawing_tools_align_bottom_16__clip_cell"),
        param: { target: a.value }
      },
      {
        type: "divider",
        key: "divider1"
      },
      {
        label: `${d("toolbar.shapeToolbar.align.horizontal")}`,
        key: "horizontal",
        noIcon: !1,
        disabled: !(t.value === q.SINGLE || t.value === q.MULTIPLE),
        icon: w("ppt_drawing_tools_distribute_horizontally_16__clip_cell"),
        param: { target: a.value }
      },
      {
        label: `${d("toolbar.shapeToolbar.align.vertical")}`,
        key: "vertical",
        noIcon: !1,
        disabled: !(t.value === q.SINGLE || t.value === q.MULTIPLE),
        icon: w("ppt_drawing_tools_distribute_vertically_16__clip_cell"),
        param: { target: a.value }
      },
      {
        type: "divider",
        key: "divider1"
      },
      {
        label: `${d("toolbar.shapeToolbar.align.equalWidth")}`,
        key: "equalWidth",
        noIcon: !1,
        disabled: !(t.value === q.BETWEEN_RELATIVE || t.value === q.MULTIPLE),
        icon: w("ppt_drawing_tools_equal_height_16__clip_cell"),
        param: { target: a.value }
      },
      {
        label: `${d("toolbar.shapeToolbar.align.equalHeight")}`,
        key: "equalHeight",
        noIcon: !1,
        disabled: !(t.value === q.BETWEEN_RELATIVE || t.value === q.MULTIPLE),
        icon: w("ppt_drawing_tools_equal_width_16__clip_cell"),
        param: { target: a.value }
      },
      {
        label: `${d("toolbar.shapeToolbar.align.equalSize")}`,
        key: "equalSize",
        noIcon: !1,
        disabled: !(t.value === q.BETWEEN_RELATIVE || t.value === q.MULTIPLE),
        icon: w("ppt_drawing_tools_equal_size_16__clip_cell"),
        param: { target: a.value }
      },
      {
        type: "divider",
        key: "divider1"
      },
      {
        label: `${d("toolbar.shapeToolbar.align.alignSlide")}`,
        key: "alignSlide",
        disabled: !1,
        noTrigger: !0,
        noIcon: !0,
        props: {
          onClick: () => {
            o.commit("command/setAlignTarget", "alignSlide");
          }
        }
      },
      {
        label: `${d("toolbar.shapeToolbar.align.alignSelectedObject")}`,
        key: "alignSelectedObject",
        disabled: t.value === q.SINGLE,
        noTrigger: !0,
        noIcon: !0,
        props: {
          onClick: () => {
            o.commit("command/setAlignTarget", "alignSelectedObject");
          }
        }
      }
    ]);
    return (p, S) => {
      const b = k("n-space");
      return f(), C("div", vo, [
        e(b, { vertical: "" }, {
          default: c(() => [
            e($e, {
              cmd: l(s).TableSelect,
              label: p.$t("toolbar.tableTools.select"),
              "icon-name": "select",
              "menu-items": n.value
            }, null, 8, ["cmd", "label", "menu-items"]),
            e($e, {
              cmd: l(s).ShapeAlign,
              label: p.$t("toolbar.shapeToolbar.align.name"),
              "icon-name": "ppt_drawing_tools_align_16__clip_cell",
              "menu-items": r.value,
              "is-active-option": !0,
              "get-value-command": l(s).GetShapeAlign
            }, null, 8, ["cmd", "label", "menu-items", "get-value-command"])
          ]),
          _: 1
        }),
        e(b, { vertical: "" }, {
          default: c(() => [
            e($e, {
              cmd: l(s).ShapeBringToFront,
              label: p.$t("toolbar.shapeToolbar.bringToFront.name"),
              "icon-name": "ppt_drawing_tools_move_up_16__clip_cell",
              "menu-items": m.value
            }, null, 8, ["cmd", "label", "menu-items"]),
            e($e, {
              cmd: l(s).ShapeSendToBack,
              label: p.$t("toolbar.shapeToolbar.sendBackward.name"),
              "icon-name": "ppt_drawing_tools_move_down_16__clip_cell",
              "menu-items": g.value
            }, null, 8, ["cmd", "label", "menu-items"])
          ]),
          _: 1
        })
      ]);
    };
  }
}), go = { style: { display: "flex", gap: "0px" } }, ua = /* @__PURE__ */ N({
  __name: "TableToolGroup",
  setup(i) {
    return (o, t) => (f(), C("div", go, [
      e(jt),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px 5px"
      }),
      e(co),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px 5px 0px 0px"
      }),
      e(po),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px 5px"
      }),
      e(j, {
        cmd: l(s).MergeCells,
        label: o.$t("toolbar.tableTools.mergeCells"),
        "icon-name": "merge_cells"
      }, null, 8, ["cmd", "label"]),
      e(j, {
        cmd: l(s).SplitCells,
        label: o.$t("toolbar.tableTools.splitCells"),
        "icon-name": "split_cells_24"
      }, null, 8, ["cmd", "label"]),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px 10px"
      }),
      e(bo),
      e(l(O), {
        vertical: !0,
        height: 65,
        margin: "0px 10px"
      }),
      e(_o)
    ]));
  }
}), ho = { class: "button-content" }, fo = { class: "icon-label" }, yo = { class: "label-area" }, wo = { class: "global-basic-display-text label-text" }, xo = { class: "button-content" }, So = { class: "icon-label" }, To = { class: "label-area" }, $o = { class: "global-basic-display-text label-text" }, ko = /* @__PURE__ */ N({
  __name: "IconTextButtonWithColor",
  props: {
    label: {},
    tooltip: {},
    disabled: { type: Boolean },
    resourceImage: {},
    imageWidth: {},
    x: {},
    y: {},
    showArrow: { type: Boolean },
    active: { type: Boolean },
    show: { type: Boolean },
    color: {},
    noFill: { type: Boolean },
    noFillX: { default: 0 },
    noFillY: { default: 0 }
  },
  setup(i) {
    const o = i, t = {
      Button: {
        // default
        color: "transparent",
        border: "",
        borderRadiusMedium: "4px",
        // focus
        borderFocus: "",
        textColorFocus: "",
        colorFocus: "transparent",
        // hover
        colorHover: "var(--hover-bg)",
        textColorHover: "",
        borderHover: "",
        rippleColor: "var(--hover-bg)",
        // active / pressed
        colorPressed: "var(--active-bg)",
        textColorPressed: "",
        borderPressed: "",
        // disabled
        borderDisabled: ""
      }
    }, a = {
      Button: {
        // default
        color: "var(--active-bg)",
        border: "",
        borderRadiusMedium: "4px",
        // focus
        borderFocus: "",
        textColorFocus: "",
        colorFocus: "var(--active-bg)",
        // hover
        colorHover: "var(--hover-bg)",
        textColorHover: "",
        borderHover: "",
        rippleColor: "var(--hover-bg)",
        // active / pressed
        colorPressed: "var(--active-bg)",
        textColorPressed: "",
        borderPressed: "",
        // disabled
        borderDisabled: ""
      }
    }, d = h(() => o.active ? a : t);
    return (n, m) => {
      const g = k("n-icon"), r = k("n-button"), p = k("n-config-provider");
      return f(), H(p, { "theme-overrides": d.value }, {
        default: c(() => [
          i.tooltip ? (f(), H(l(he), { key: 0 }, {
            trigger: c(() => [
              e(r, {
                class: "big-icon-text-btn",
                disabled: i.disabled
              }, {
                default: c(() => [
                  I("div", ho, [
                    I("div", fo, [
                      e(l(te), {
                        x: i.x,
                        y: i.y,
                        source: i.resourceImage,
                        imageWidth: i.imageWidth,
                        size: 24
                      }, null, 8, ["x", "y", "source", "imageWidth"]),
                      i.noFill ? (f(), H(l(te), {
                        key: 1,
                        x: i.noFillX,
                        y: i.noFillY,
                        source: i.resourceImage,
                        imageWidth: i.imageWidth,
                        size: 24,
                        style: { height: "4px", "margin-bottom": "4px", "margin-left": "0px" }
                      }, null, 8, ["x", "y", "source", "imageWidth"])) : (f(), C("div", {
                        key: 0,
                        class: "color-cube",
                        style: J({ backgroundColor: i.color })
                      }, null, 4)),
                      I("div", yo, [
                        I("span", wo, M(i.label), 1),
                        i.showArrow ? (f(), H(g, {
                          key: 0,
                          size: "12",
                          style: { "margin-left": "2px" },
                          class: me(i.show ? "rotate-180" : "")
                        }, {
                          default: c(() => [
                            e(l(fe))
                          ]),
                          _: 1
                        }, 8, ["class"])) : de("", !0)
                      ])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            default: c(() => [
              oe(" " + M(i.tooltip), 1)
            ]),
            _: 1
          })) : (f(), H(r, {
            key: 1,
            class: "big-icon-text-btn",
            disabled: i.disabled
          }, {
            default: c(() => [
              I("div", xo, [
                I("div", So, [
                  e(l(te), {
                    x: i.x,
                    y: i.y,
                    source: i.resourceImage,
                    imageWidth: i.imageWidth,
                    size: 24
                  }, null, 8, ["x", "y", "source", "imageWidth"]),
                  i.noFill ? (f(), H(l(te), {
                    key: 1,
                    x: i.noFillX,
                    y: i.noFillY,
                    source: i.resourceImage,
                    imageWidth: i.imageWidth,
                    size: 24,
                    style: { height: "4px", "margin-bottom": "4px", "margin-left": "0px" }
                  }, null, 8, ["x", "y", "source", "imageWidth"])) : (f(), C("div", {
                    key: 0,
                    class: "color-cube",
                    style: J({ backgroundColor: i.color })
                  }, null, 4)),
                  I("div", To, [
                    I("span", $o, M(i.label), 1),
                    i.showArrow ? (f(), H(g, {
                      key: 0,
                      size: "12",
                      style: { "margin-left": "2px" },
                      class: me(i.show ? "rotate-180" : "")
                    }, {
                      default: c(() => [
                        e(l(fe))
                      ]),
                      _: 1
                    }, 8, ["class"])) : de("", !0)
                  ])
                ])
              ])
            ]),
            _: 1
          }, 8, ["disabled"]))
        ]),
        _: 1
      }, 8, ["theme-overrides"]);
    };
  }
}), Co = /* @__PURE__ */ K(ko, [["__scopeId", "data-v-a6a37dac"]]), Tl = /* @__PURE__ */ N({
  __name: "CommandBigFillColor",
  props: {
    cmd: {},
    label: {},
    tooltip: {},
    x: {},
    y: {},
    showFill: { type: Boolean },
    defaultColor: {},
    noFillX: { default: 0 },
    noFillY: { default: 0 }
  },
  setup(i) {
    const o = D(), t = L(z), { standardColors: a, themeColors: d, ensureLoaded: n } = Ol(), m = $(!1), g = h(() => o == null ? void 0 : o.getters["command/can"](p.cmd)), r = $(!1), p = i, S = h(() => o == null ? void 0 : o.getters["file/recentColors"](p.cmd)), b = p.cmd ? h(() => o == null ? void 0 : o.getters["command/getVal"](p.cmd)) : h(() => p.defaultColor || ""), y = h(() => Ll(b.value)), v = $(void 0), _ = h(() => {
      let A = y.value || void 0;
      return p.showFill && A == null ? r.value = !0 : r.value = !1, A || "#000";
    });
    function u(A) {
      const U = { value: A };
      t.run(p.cmd, U), o.commit("file/addRecentColors", { cmd: p.cmd, recentColor: A });
    }
    function x(A) {
      m.value = A, b.value && b.value.args.length > 0 ? v.value = {
        colorType: b.value.type,
        args: b.value.args
      } : v.value = void 0, A && n();
    }
    function E() {
      t.run(p.cmd, { value: "noFill" }), r.value = !0;
    }
    return (A, U) => (f(), H(l(Pl), {
      val: y.value,
      "standard-colors": l(a),
      "theme-colors": l(d),
      "recent-colors": S.value,
      showFill: i.showFill,
      onSelect: u,
      onShow: x,
      onClearFill: E,
      "selected-color-pos": v.value
    }, {
      default: c(() => [
        e(Co, {
          label: i.label,
          x: i.x,
          y: i.y,
          color: i.showFill ? _.value || "" : _.value || "rgb(0, 0, 0)",
          tooltip: i.tooltip,
          resourceImage: l(G).image,
          imageWidth: l(G).width,
          showArrow: !0,
          onClick: U[0] || (U[0] = Le(() => {
          }, ["stop"])),
          disabled: !g.value,
          noFill: r.value,
          noFillX: i.noFillX,
          noFillY: i.noFillY
        }, null, 8, ["label", "x", "y", "color", "tooltip", "resourceImage", "imageWidth", "disabled", "noFill", "noFillX", "noFillY"])
      ]),
      _: 1
    }, 8, ["val", "standard-colors", "theme-colors", "recent-colors", "showFill", "selected-color-pos"]));
  }
}), Eo = { style: { display: "flex", "font-size": "12px" } }, Ro = { style: { "margin-right": "4px" } }, Io = {
  key: 0,
  style: { margin: "0 4px", "font-size": "12px" }
}, Ho = {
  key: 0,
  style: { margin: "0 4px", "font-size": "12px" }
}, Ao = /* @__PURE__ */ N({
  __name: "TableBorderTypeDropDown",
  props: {
    cmd: {},
    iconName: {},
    x: {},
    y: {},
    tooltip: {},
    showArrow: { type: Boolean, default: !0 },
    buttonWidth: { default: 50 },
    buttonHeight: { default: 25 },
    menuItems: {},
    label: {},
    isActive: { type: Boolean, default: !1 },
    isActiveOption: { type: Boolean }
  },
  emits: ["update:show"],
  setup(i, { emit: o }) {
    const t = D(), a = i, d = h(
      () => S.value && S.value.iconName ? { name: S.value.iconName } : {
        x: S.value.x,
        y: S.value.y,
        source: G.image,
        imageWidth: G.width
      }
    ), n = $(!1), m = $("default"), g = h(() => t == null ? void 0 : t.getters["command/can"](a.cmd)), r = L(z), p = h(() => t == null ? void 0 : t.getters["command/getVal"](a.cmd)), S = $(a.menuItems[1]), b = h(() => S.value && S.value.key && (p.value.active & S.value.key) === S.value.key), y = h(() => a.isActiveOption ? Ye(a.menuItems, p, a.isActiveOption, (P) => P.key && (p.value.active & P.key) === P.key || !1) : ({ node: P, option: Y }) => P), v = {
      Button: {
        // default
        color: "transparent",
        border: "transparent",
        borderRadiusMedium: "4px",
        // focus
        borderFocus: "transparent",
        textColorFocus: "",
        colorFocus: "transparent",
        // hover
        colorHover: "transparent",
        textColorHover: "",
        borderHover: "transparent",
        rippleColor: "transparent",
        // active / pressed
        colorPressed: "transparent",
        textColorPressed: "",
        borderPressed: "transparent",
        // disabled
        borderDisabled: "transparent"
      },
      Dropdown: {
        fontSizeSmall: "12px",
        optionTextColor: "var(--primary-text)",
        optionTextColorHover: "var(--primary-text)",
        optionTextColorActive: "var(--accent-button-text)",
        optionTextColorChildActive: "var(--accent-button-text)",
        optionColorHover: "transparent",
        optionColorActive: "transparent",
        boxShadow: "0px 6px 26px 0px #00000024",
        borderRadius: "8px",
        padding: "10px"
      }
    }, _ = {
      Button: {
        // default
        color: "var(--primary-bg)",
        border: "1px solid var(--button-border)",
        borderRadiusMedium: "4px",
        // focus
        borderFocus: "1px solid var(--button-border)",
        textColorFocus: "",
        colorFocus: "var(--primary-bg)",
        // hover
        colorHover: "var(--primary-bg)",
        textColorHover: "",
        borderHover: "1px solid var(--button-border)",
        rippleColor: "var(--primary-bg)",
        // active / pressed
        colorPressed: "var(--primary-bg)",
        textColorPressed: "",
        borderPressed: "1px solid var(--button-border)",
        // disabled
        borderDisabled: "1px solid var(--button-border)"
      },
      Dropdown: {
        fontSizeSmall: "12px",
        optionTextColor: "var(--primary-text)",
        optionTextColorHover: "var(--primary-text)",
        optionTextColorActive: "var(--accent-button-text)",
        optionTextColorChildActive: "var(--accent-button-text)",
        optionColorHover: "transparent",
        optionColorActive: "transparent",
        boxShadow: "0px 6px 26px 0px #00000024",
        borderRadius: "8px",
        padding: "10px"
      }
    }, u = {
      Button: {
        // default
        color: "var(--primary-bg)",
        border: "1px solid var(--button-border)",
        borderRadiusMedium: "4px",
        // focus
        borderFocus: "1px solid var(--button-border)",
        textColorFocus: "",
        colorFocus: "var(--primary-bg)",
        // hover
        colorHover: "var(--primary-bg)",
        textColorHover: "",
        borderHover: "1px solid var(--button-border)",
        rippleColor: "var(--primary-bg)",
        // active / pressed
        colorPressed: "var(--primary-bg)",
        textColorPressed: "",
        borderPressed: "1px solid var(--button-border)",
        // disabled
        borderDisabled: "1px solid var(--button-border)"
      },
      Dropdown: {
        fontSizeSmall: "12px",
        optionTextColor: "var(--primary-text)",
        optionTextColorHover: "var(--primary-text)",
        optionTextColorActive: "var(--accent-button-text)",
        optionTextColorChildActive: "var(--accent-button-text)",
        optionColorHover: "transparent",
        optionColorActive: "transparent",
        boxShadow: "0px 6px 26px 0px #00000024",
        borderRadius: "8px",
        padding: "10px"
      }
    }, x = h(() => n.value ? u : m.value === "hover" ? _ : v);
    function E(P, Y) {
      Y.noTrigger || (S.value = Y, r.run(a.cmd, { value: { value: Y.key, active: !0 } }));
    }
    function A(P) {
      n.value = P;
    }
    const U = h(() => {
      let P = {};
      return n.value ? (P = {
        backgroundColor: "var(--active-bg)"
      }, P) : (m.value === "hover" && (P = {
        backgroundColor: "var(--hover-bg)"
      }), P);
    });
    function B() {
      r.run(a.cmd, { value: { value: S.value.key, active: !b.value } });
    }
    return (P, Y) => {
      const T = k("n-button"), R = k("n-icon"), F = k("n-button-group"), V = k("n-dropdown"), ce = k("n-config-provider");
      return f(), H(ce, { "theme-overrides": x.value }, {
        default: c(() => [
          I("div", Eo, [
            I("span", Ro, M(P.$t("toolbar.tableStyle.applyTo")), 1),
            e(V, {
              trigger: "manual",
              size: "small",
              options: i.menuItems,
              onSelect: E,
              show: n.value,
              "render-option": y.value,
              "on-update:show": A,
              "on-clickoutside": () => n.value = !1
            }, {
              default: c(() => [
                i.tooltip ? (f(), H(l(he), { key: 0 }, {
                  trigger: c(() => [
                    e(F, {
                      onMouseup: Y[1] || (Y[1] = (se) => m.value = "hover"),
                      onMouseleave: Y[2] || (Y[2] = (se) => m.value = "default")
                    }, {
                      default: c(() => [
                        e(T, {
                          class: me(["small-icon-btn", { active: b.value }]),
                          disabled: !g.value,
                          style: J({ width: i.label ? "auto" : "22px" }),
                          onClick: B
                        }, {
                          default: c(() => [
                            e(l(te), ke(d.value, {
                              size: 16,
                              style: { marginLeft: i.label ? "4px" : "0px" }
                            }), null, 16, ["style"]),
                            i.label ? (f(), C("span", Io, M(i.label), 1)) : de("", !0)
                          ]),
                          _: 1
                        }, 8, ["disabled", "class", "style"]),
                        e(T, {
                          class: "small-icon-btn-arrow",
                          disabled: !g.value,
                          style: J(U.value),
                          onClick: Y[0] || (Y[0] = () => n.value = !n.value)
                        }, {
                          icon: c(() => [
                            e(R, { size: "12" }, {
                              default: c(() => [
                                _e(e(l(Me), null, null, 512), [
                                  [ge, n.value]
                                ]),
                                _e(e(l(fe), null, null, 512), [
                                  [ge, !n.value]
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["disabled", "style"])
                      ]),
                      _: 1
                    })
                  ]),
                  default: c(() => [
                    oe(" " + M(i.tooltip), 1)
                  ]),
                  _: 1
                })) : (f(), H(F, {
                  key: 1,
                  onMouseup: Y[4] || (Y[4] = (se) => m.value = "hover"),
                  onMouseleave: Y[5] || (Y[5] = (se) => m.value = "default")
                }, {
                  default: c(() => [
                    e(T, {
                      class: me(["small-icon-btn", { active: b.value }]),
                      disabled: !g.value,
                      style: J({ width: i.label ? "auto" : "22px" }),
                      onClick: B
                    }, {
                      default: c(() => [
                        e(l(te), ke(d.value, {
                          size: 16,
                          style: { marginLeft: i.label ? "4px" : "0px" }
                        }), null, 16, ["style"]),
                        i.label ? (f(), C("span", Ho, M(i.label), 1)) : de("", !0)
                      ]),
                      _: 1
                    }, 8, ["disabled", "style", "class"]),
                    e(T, {
                      class: "small-icon-btn-arrow",
                      disabled: !g.value,
                      style: J(U.value),
                      onClick: Y[3] || (Y[3] = () => n.value = !n.value)
                    }, {
                      icon: c(() => [
                        e(R, { size: "12" }, {
                          default: c(() => [
                            _e(e(l(Me), null, null, 512), [
                              [ge, n.value]
                            ]),
                            _e(e(l(fe), null, null, 512), [
                              [ge, !n.value]
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["disabled", "style"])
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            }, 8, ["options", "show", "render-option", "on-clickoutside"])
          ])
        ]),
        _: 1
      }, 8, ["theme-overrides"]);
    };
  }
}), Bo = /* @__PURE__ */ K(Ao, [["__scopeId", "data-v-93488b16"]]), No = ["onMousedown"], Oo = /* @__PURE__ */ N({
  __name: "SelectDropDown",
  props: /* @__PURE__ */ Fe({
    options: {},
    maxWidth: { default: 200 },
    maxHeight: { default: 200 },
    width: { default: 200 },
    disabled: { type: Boolean, default: !1 },
    showToolTips: { type: Boolean, default: !1 },
    otherWidth: { default: 0 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Fe(["change"], ["update:modelValue"]),
  setup(i, { emit: o }) {
    const t = i, a = ze(i, "modelValue"), d = o, n = $(!1), m = $(null), g = $(null), r = h(() => ({
      display: "flex",
      border: "1px solid var(--button-border)",
      borderRadius: "4px",
      alignItems: "center",
      justifyContent: "space-between",
      width: t.width ? typeof t.width == "number" ? `${t.width}px` : t.width : "auto"
    }));
    ee(
      () => n.value,
      (u, x) => {
        u && setTimeout(() => {
          m && m.value && g.value && m.value.scrollIntoView({ block: "nearest" });
        }, 100);
      }
    );
    const p = {
      Scrollbar: {
        scrollbarColor: "var(--active-bg)"
      }
    }, S = h(() => t.options.length === 0 ? !1 : n.value), b = h(() => S.value == !0 ? {
      backgroundColor: "var(--disable-button-border)"
    } : {
      backgroundColor: "transparent"
    });
    function y() {
      t.disabled || (n.value ? n.value = !1 : n.value = !0);
    }
    function v(u) {
      return u ? u.imgX === void 0 ? {
        width: `${(t.width || 60) - t.otherWidth}px`,
        height: "18px",
        margin: "0px 8px",
        fontSize: "12px",
        lineHeight: "18px",
        maxWidth: t.maxWidth + "px"
      } : {
        backgroundImage: `url(${G.image})`,
        width: `${(t.width || 60) - 40}px`,
        height: "18px",
        backgroundPosition: `${(u.imgX ?? 0) * 2}px ${(u.imgY ?? 0) * 2}px`,
        transform: "scale(1,0.5)",
        backgroundSize: `${G.width}px auto`,
        transformOrigin: "top left",
        margin: "0px 8px",
        fontSize: "12px",
        lineHeight: "18px",
        maxWidth: t.maxWidth + "px"
      } : {};
    }
    function _(u) {
      a.value = u.value, d("change", u.value), n.value = !1;
    }
    return (u, x) => {
      const E = k("n-ellipsis"), A = k("n-icon"), U = k("n-config-provider");
      return f(), C("div", null, [
        e(U, { "theme-overrides": p }, {
          default: c(() => [
            e(l(Je), {
              show: S.value,
              trigger: "manual",
              placement: "bottom-start",
              "show-arrow": !1,
              to: "body",
              style: J({ maxWidth: i.maxWidth + "px" }),
              onClickoutside: x[0] || (x[0] = (B) => n.value = !1)
            }, {
              trigger: c(() => [
                I("div", {
                  ref: "rootRef",
                  style: J(r.value)
                }, [
                  e(E, { style: { width: "calc(100% - 24px)", textAlign: "center", display: "block", fontSize: "12px" } }, {
                    default: c(() => {
                      var B;
                      return [
                        oe(M((B = i.options.find((P) => P.value === a.value)) == null ? void 0 : B.label), 1)
                      ];
                    }),
                    _: 1
                  }),
                  e(A, {
                    class: "arrow",
                    onMousedown: Le(y, ["prevent"]),
                    size: "12",
                    style: J(b.value)
                  }, {
                    default: c(() => [
                      _e(e(l(Me), null, null, 512), [
                        [ge, S.value]
                      ]),
                      _e(e(l(fe), null, null, 512), [
                        [ge, !S.value]
                      ])
                    ]),
                    _: 1
                  }, 8, ["style"])
                ], 4)
              ]),
              default: c(() => [
                e(l(yl), {
                  ref_key: "scrollbarRef",
                  ref: g,
                  "max-height": i.maxHeight
                }, {
                  default: c(() => [
                    (f(!0), C(ae, null, ne(i.options, (B) => (f(), C("div", {
                      key: B.value,
                      class: me(["global-basic-display-text global-menu-list-item item", { active: B.value === a.value }]),
                      onMousedown: Le((P) => _(B), ["prevent"]),
                      ref_for: !0,
                      ref: (P) => {
                        B.value === a.value && (m.value = P);
                      }
                    }, [
                      B.imgX == null ? (f(), H(E, {
                        key: 0,
                        style: J([{ "margin-left": "10px" }, v(B)])
                      }, {
                        default: c(() => [
                          oe(M(B.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["style"])) : (f(), C(ae, { key: 1 }, [
                        i.showToolTips ? (f(), H(l(he), { key: 0 }, {
                          trigger: c(() => [
                            I("div", {
                              class: "underline-img",
                              style: J(v(B))
                            }, null, 4)
                          ]),
                          default: c(() => [
                            oe(" " + M(B.label), 1)
                          ]),
                          _: 2
                        }, 1024)) : (f(), C("div", {
                          key: 1,
                          class: "underline-img",
                          style: J(v(B))
                        }, null, 4))
                      ], 64)),
                      Ke(u.$slots, "other", { item: B }, void 0, !0)
                    ], 42, No))), 128))
                  ]),
                  _: 3
                }, 8, ["max-height"])
              ]),
              _: 3
            }, 8, ["show", "style"])
          ]),
          _: 3
        })
      ]);
    };
  }
}), Po = /* @__PURE__ */ K(Oo, [["__scopeId", "data-v-5e140540"]]), Lo = /* @__PURE__ */ N({
  __name: "TableBorderGroup",
  setup(i) {
    const o = D(), t = L(z), { t: a } = Q(), d = $("none"), n = h(() => (o == null ? void 0 : o.getters["command/getVal"](s.TableBorderSize)) || 0.25), m = $(n.value), g = h(() => (o == null ? void 0 : o.getters["command/getVal"](s.TableBorderType)) || { disabled: 0, active: 0 }), r = $([
      {
        label: a("dialogs.font.font.alltext.underlineType.none"),
        value: "none"
      },
      {
        label: a("dialogs.font.font.alltext.underlineType.single"),
        value: "sng",
        imgX: 0,
        imgY: -193
      },
      {
        label: a("dialogs.font.font.alltext.underlineType.dotted"),
        value: "dotted",
        imgX: -480,
        imgY: -193
      },
      {
        label: a("dialogs.font.font.alltext.underlineType.dottedHeavy"),
        value: "dottedHeavy",
        imgX: -640,
        imgY: -193
      },
      {
        label: a("dialogs.font.font.alltext.underlineType.dash"),
        value: "dash",
        imgX: -800,
        imgY: -193
      },
      {
        label: a("dialogs.font.font.alltext.underlineType.dashHeavy"),
        value: "dashHeavy",
        imgX: -960,
        imgY: -193
      },
      {
        label: a("dialogs.font.font.alltext.underlineType.dashLong"),
        value: "dashLong",
        imgX: -1120,
        imgY: -193
      },
      {
        label: a("dialogs.font.font.alltext.underlineType.dashLongHeavy"),
        value: "dashLongHeavy",
        imgX: -1280,
        imgY: -193
      },
      {
        label: a("dialogs.font.font.alltext.underlineType.dotDash"),
        value: "dotDash",
        imgX: -1440,
        imgY: -193
      },
      {
        label: a("dialogs.font.font.alltext.underlineType.dotdotDash"),
        value: "dotDotDash",
        imgX: -1760,
        imgY: -193
      }
    ]), p = $([
      {
        label: 0.25 + a("unit.pt"),
        value: 0.25
      },
      {
        label: 0.5 + a("unit.pt"),
        value: 0.5
      },
      {
        label: 0.75 + a("unit.pt"),
        value: 0.75
      },
      {
        label: 1 + a("unit.pt"),
        value: 1
      },
      {
        label: 1.5 + a("unit.pt"),
        value: 1.5
      },
      {
        label: 2.25 + a("unit.pt"),
        value: 2.25
      },
      {
        label: 3 + a("unit.pt"),
        value: 3
      },
      {
        label: 4.5 + a("unit.pt"),
        value: 4.5
      },
      {
        label: 6 + a("unit.pt"),
        value: 6
      }
    ]), S = h(() => [
      {
        label: `${a("toolbar.tableStyle.noBorder")}`,
        key: W.NO_BORDER,
        disabled: (g.value.disabled & W.NO_BORDER) !== W.NO_BORDER,
        icon: ve("noBorder"),
        iconName: "noBorder",
        activeIcon: !0
      },
      {
        label: `${a("toolbar.tableStyle.allBorder")}`,
        key: W.ALL_BORDER,
        disabled: (g.value.disabled & W.ALL_BORDER) !== W.ALL_BORDER,
        icon: ve("allBorders"),
        iconName: "allBorders",
        activeIcon: !0
      },
      {
        label: `${a("toolbar.tableStyle.outerBorder")}`,
        key: W.OUTER_BORDER,
        disabled: (g.value.disabled & W.OUTER_BORDER) !== W.OUTER_BORDER,
        icon: ve("outsideBorders"),
        iconName: "outsideBorders",
        activeIcon: !0
      },
      {
        label: `${a("toolbar.tableStyle.innerBorder")}`,
        key: W.INNER_BORDER,
        disabled: (g.value.disabled & W.INNER_BORDER) !== W.INNER_BORDER,
        icon: ve("insideBorders"),
        iconName: "insideBorders",
        activeIcon: !0
      },
      {
        label: `${a("toolbar.tableStyle.topBorder")}`,
        key: W.TOP_BORDER,
        disabled: (g.value.disabled & W.TOP_BORDER) !== W.TOP_BORDER,
        icon: ve("topBorder"),
        iconName: "topBorder",
        activeIcon: !0
      },
      {
        label: `${a("toolbar.tableStyle.bottomBorder")}`,
        key: W.BOTTOM_BORDER,
        disabled: (g.value.disabled & W.BOTTOM_BORDER) !== W.BOTTOM_BORDER,
        icon: ve("bottomBorder"),
        iconName: "bottomBorder",
        activeIcon: !0
      },
      {
        label: `${a("toolbar.tableStyle.leftBorder")}`,
        key: W.LEFT_BORDER,
        disabled: (g.value.disabled & W.LEFT_BORDER) !== W.LEFT_BORDER,
        icon: ve("leftBorder"),
        iconName: "leftBorder",
        activeIcon: !0
      },
      {
        label: `${a("toolbar.tableStyle.rightBorder")}`,
        key: W.RIGHT_BORDER,
        disabled: (g.value.disabled & W.RIGHT_BORDER) !== W.RIGHT_BORDER,
        icon: ve("rightBorder"),
        iconName: "rightBorder",
        activeIcon: !0
      },
      {
        label: `${a("toolbar.tableStyle.innerHorizontalBorder")}`,
        key: W.INNER_HORIZONTAL_BORDER,
        disabled: (g.value.disabled & W.INNER_HORIZONTAL_BORDER) !== W.INNER_HORIZONTAL_BORDER,
        icon: ve("insideHorizontalBorder"),
        iconName: "insideHorizontalBorder",
        activeIcon: !0
      },
      {
        label: `${a("toolbar.tableStyle.innerVerticalBorder")}`,
        key: W.INNER_VERTICAL_BORDER,
        disabled: (g.value.disabled & W.INNER_VERTICAL_BORDER) !== W.INNER_VERTICAL_BORDER,
        icon: ve("insideVerticalBorder"),
        iconName: "insideVerticalBorder",
        activeIcon: !0
      },
      {
        label: `${a("toolbar.tableStyle.declineBorder")}`,
        key: W.DECLINE_BORDER,
        disabled: (g.value.disabled & W.DECLINE_BORDER) !== W.DECLINE_BORDER,
        icon: ve("diagonalDownBorder"),
        iconName: "diagonalDownBorder",
        activeIcon: !0
      },
      {
        label: `${a("toolbar.tableStyle.increaseBorder")}`,
        key: W.INCREASE_BORDER,
        disabled: (g.value.disabled & W.INCREASE_BORDER) !== W.INCREASE_BORDER,
        icon: ve("diagonalUpBorder"),
        iconName: "diagonalUpBorder",
        activeIcon: !0
      }
    ]);
    ee(() => n.value, (v) => {
      v !== m.value && (m.value = v);
    });
    function b(v) {
      d.value = String(v), t.run(s.TableBorderStroke, { value: String(v) });
    }
    function y(v) {
      t.run(s.TableBorderSize, { value: Number(v) });
    }
    return (v, _) => {
      const u = k("n-space");
      return f(), H(u, { vertical: "" }, {
        default: c(() => [
          e(u, null, {
            default: c(() => [
              e(Rl, {
                modelValue: d.value,
                "onUpdate:modelValue": [
                  _[0] || (_[0] = (x) => d.value = x),
                  b
                ],
                options: r.value,
                width: 183,
                maxWidth: 183,
                type: "font",
                size: "tiny",
                maxHeight: 200,
                showToolTips: !0,
                showText: !1
              }, null, 8, ["modelValue", "options"]),
              e(je, {
                cmd: l(s).TableStrokeColor,
                "icon-name": "Ribbon_word_text_color_16__clip_cell",
                tooltip: v.$t("toolbar.tableStyle.strokeColor"),
                class: "global-small-icon-dropdown-button"
              }, null, 8, ["cmd", "tooltip"])
            ]),
            _: 1
          }),
          e(u, null, {
            default: c(() => [
              e(Po, {
                modelValue: m.value,
                "onUpdate:modelValue": _[1] || (_[1] = (x) => m.value = x),
                options: p.value,
                width: 110,
                size: "tiny",
                otherWidth: 70,
                onChange: y
              }, {
                other: c(({ item: x }) => [
                  I("div", {
                    style: J({
                      width: "70px",
                      height: "1px",
                      borderTop: `${l(t).api.getUnitValue(Number(x.value), "pt", "px")}px solid #000`
                    })
                  }, null, 4)
                ]),
                _: 1
              }, 8, ["modelValue", "options"]),
              e(Bo, {
                cmd: l(s).TableBorderType,
                menuItems: S.value,
                label: v.$t("toolbar.tableStyle.border"),
                "is-active": !0,
                isActiveOption: !0
              }, null, 8, ["cmd", "menuItems", "label"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), Fo = { style: { display: "flex", gap: "8px" } }, pa = /* @__PURE__ */ N({
  __name: "TableStyleGroup",
  setup(i) {
    const { t: o } = Q(), t = D(), a = L(z), d = h(() => t == null ? void 0 : t.getters["command/getVal"](s.TableFill)), n = $([
      {
        title: o("toolbar.tableStyle.firstRowFill"),
        value: Re.FIRST_ROW_FILL
      },
      {
        title: o("toolbar.tableStyle.interleavingRowFill"),
        value: Re.INTERLEAVING_ROW_FILL
      },
      {
        title: o("toolbar.tableStyle.firstColumnFill"),
        value: Re.FIRST_COLUMN_FILL
      },
      {
        title: o("toolbar.tableStyle.lastRowFill"),
        value: Re.LAST_ROW_FILL
      },
      {
        title: o("toolbar.tableStyle.interleavingColumnFill"),
        value: Re.INTERLEAVING_COLUMN_FILL
      },
      {
        title: o("toolbar.tableStyle.lastColumnFill"),
        value: Re.LAST_COLUMN_FILL
      }
    ]), m = h(() => n.value.filter((r) => !!(d.value & r.value)).map((r) => r.value));
    function g(r = []) {
      let p = Re.NONE;
      p = r.reduce((S, b) => S | b, p), t.commit("command/setState", { ui: { value: p }, cmd: s.TableFill }), a.run(s.TableFill, { value: p });
    }
    return (r, p) => {
      const S = k("n-checkbox"), b = k("n-gi"), y = k("n-grid"), v = k("n-checkbox-group");
      return f(), C("div", Fo, [
        e(v, {
          "onUpdate:value": g,
          value: m.value
        }, {
          default: c(() => [
            e(y, {
              "y-gap": 8,
              cols: 3
            }, {
              default: c(() => [
                (f(!0), C(ae, null, ne(n.value, (_) => (f(), H(b, {
                  key: _.value
                }, {
                  default: c(() => [
                    (f(), H(S, {
                      label: _.title,
                      value: _.value,
                      key: _.value,
                      style: { "font-size": "12px" },
                      size: "small"
                    }, null, 8, ["label", "value"]))
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["value"]),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px 10px"
        }),
        e(Tl, {
          cmd: l(s).TableFillColor,
          x: -1128,
          y: -32,
          label: r.$t("toolbar.shapeToolbar.fill.name"),
          tooltip: r.$t("toolbar.shapeToolbar.fill.name"),
          showFill: !0,
          noFillX: 0,
          noFillY: -197
        }, null, 8, ["cmd", "label", "tooltip"]),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px 10px"
        }),
        e(Lo),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px 10px"
        }),
        e(j, {
          cmd: l(s).ClearTableStyle,
          label: r.$t("toolbar.tableStyle.clearTableStyle"),
          "icon-name": "styles_clear"
        }, null, 8, ["cmd", "label"])
      ]);
    };
  }
}), pl = /* @__PURE__ */ N({
  __name: "CloseViewButton",
  setup(i) {
    const o = D(), t = L(z), a = {
      [Ve.NormalView]: s.NormalView,
      [Ve.NotesPage]: s.NotesPage,
      [Ve.SlideSorter]: s.SlideSorter,
      [Ve.ReadingView]: s.ReadingView
    };
    function d() {
      o.commit("menu/setTempTabs", {}), Promise.resolve().then(() => {
        o.commit("menu/setActiveTab", Il.View);
        const n = o.getters["command/prevView"];
        t.run(a[n], { value: !0 }), o.commit("file/setShowType", Ie.Slides);
      });
    }
    return (n, m) => (f(), H(j, {
      cmd: l(s).Close,
      label: n.$t("toolbar.slideMaster.close"),
      "icon-name": "Ribbon_ppt_close_24__clip_cell",
      commandHandler: d
    }, null, 8, ["cmd", "label"]));
  }
}), Mo = { style: { display: "flex", gap: "8px" } }, ma = /* @__PURE__ */ N({
  __name: "HandoutMasterGroup",
  setup(i) {
    const o = D(), { t } = Q(), a = L(z), d = h(() => o == null ? void 0 : o.getters["command/getVal"](s.HandoutMasterSlidePlaceholder)), n = h(() => p.value.filter((v) => !!(d.value & v.value)).map((v) => v.value));
    rl(() => {
      a.run(s.HandoutMasterSlidePlaceholder, { type: Z.GET, value: 0 });
    });
    const m = $([
      {
        label: `${t("toolbar.handoutMaster.orientation.portrait")}`,
        key: "portrait",
        disabled: !1,
        icon: w(-960, -56)
      },
      {
        label: `${t("toolbar.handoutMaster.orientation.landscape")}`,
        key: "landscape",
        disabled: !1,
        icon: w(-944, -56)
      }
    ]), g = $([
      {
        label: `${t("toolbar.handoutMaster.slideSize.standard")}`,
        key: "standard",
        disabled: !1,
        icon: w(-976, -56)
      },
      {
        label: `${t("toolbar.handoutMaster.slideSize.widescreen")}`,
        key: "widescreen",
        disabled: !1,
        icon: w(-992, -56)
      },
      {
        type: "divider",
        key: "d1"
      },
      {
        label: `${t("toolbar.handoutMaster.slideSize.custom")}`,
        key: "custom",
        disabled: !1,
        props: {
          onClick: () => {
          }
        }
      }
    ]), r = $([
      {
        label: `${t("toolbar.handoutMaster.slidePerPage.onePer")}`,
        key: "onePer",
        disabled: !1,
        icon: w(-1008, -56)
      },
      {
        label: `${t("toolbar.handoutMaster.slidePerPage.twoPer")}`,
        key: "twoPer",
        disabled: !1,
        icon: w(-1024, -56)
      },
      {
        label: `${t("toolbar.handoutMaster.slidePerPage.threePer")}`,
        key: "threePer",
        disabled: !1,
        icon: w(-1040, -56)
      },
      {
        label: `${t("toolbar.handoutMaster.slidePerPage.fourPer")}`,
        key: "fourPer",
        disabled: !1,
        icon: w(-1056, -56)
      },
      {
        label: `${t("toolbar.handoutMaster.slidePerPage.sixPer")}`,
        key: "sixPer",
        disabled: !1,
        icon: w(-1072, -56)
      },
      {
        label: `${t("toolbar.handoutMaster.slidePerPage.ninePer")}`,
        key: "ninePer",
        disabled: !1,
        icon: w(-1088, -56)
      },
      {
        label: `${t("toolbar.handoutMaster.slidePerPage.slideOutline")}`,
        key: "slideOutline",
        disabled: !1,
        icon: w(-1104, -56)
      }
    ]), p = $([
      { label: `${t("toolbar.handoutMaster.header")}`, key: Te.HEADER, value: Te.HEADER },
      { label: `${t("toolbar.handoutMaster.footer")}`, key: Te.FOOTER, value: Te.FOOTER },
      { label: `${t("toolbar.handoutMaster.date")}`, key: Te.DATE, value: Te.DATE },
      { label: `${t("toolbar.handoutMaster.pageNumber")}`, key: Te.PAGE_NUMBER, value: Te.PAGE_NUMBER }
    ]);
    function S(v, _) {
      if (!(!v || !_) && v.value !== "custom")
        return a.run(_, v);
    }
    function b(v, _) {
      if (!(!v || !_) && v.value !== "slideOutline")
        return a.run(_, v);
    }
    function y(v, _) {
      let u = v.reduce((x, E) => x | E, Te.NONE);
      o.commit("command/setState", { ui: { value: u }, cmd: s.HandoutMasterSlidePlaceholder }), a.run(s.HandoutMasterSlidePlaceholder, { type: Z.SET, value: u });
    }
    return (v, _) => {
      const u = k("n-checkbox"), x = k("n-space"), E = k("n-checkbox-group");
      return f(), C("div", Mo, [
        e(pe, {
          cmd: l(s).HandoutMasterPageDirection,
          label: v.$t("toolbar.handoutMaster.orientation.name"),
          "icon-name": "Ribbon_ppt_handout_orientation_24__clip_cell",
          dropdownOptions: m.value
        }, null, 8, ["cmd", "label", "dropdownOptions"]),
        e(pe, {
          cmd: l(s).HandoutMasterSlideSize,
          label: v.$t("toolbar.handoutMaster.slideSize.name"),
          "icon-name": "Ribbon_ppt_size_24__clip_cell",
          dropdownOptions: g.value,
          commandHandler: S
        }, null, 8, ["cmd", "label", "dropdownOptions"]),
        e(pe, {
          cmd: l(s).HandoutSlidePerPage,
          label: v.$t("toolbar.handoutMaster.slidePerPage.name"),
          "icon-name": "Ribbon_ppt_handout_master__24__clip_cell",
          dropdownOptions: r.value,
          commandHandler: b
        }, null, 8, ["cmd", "label", "dropdownOptions"]),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px"
        }),
        e(E, {
          "onUpdate:value": y,
          value: n.value
        }, {
          default: c(() => [
            e(x, { horizontal: "" }, {
              default: c(() => [
                e(x, { vertical: "" }, {
                  default: c(() => [
                    (f(!0), C(ae, null, ne(p.value.slice(0, 2), (A) => (f(), H(u, {
                      key: A.key,
                      value: A.value,
                      label: A.label,
                      style: { "font-size": "12px" },
                      size: "small"
                    }, null, 8, ["value", "label"]))), 128))
                  ]),
                  _: 1
                }),
                e(x, { vertical: "" }, {
                  default: c(() => [
                    (f(!0), C(ae, null, ne(p.value.slice(2, 4), (A) => (f(), H(u, {
                      key: A.key,
                      value: A.value,
                      label: A.label,
                      style: { "font-size": "12px" },
                      size: "small"
                    }, null, 8, ["value", "label"]))), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["value"]),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px"
        }),
        e(pl)
      ]);
    };
  }
}), Do = { class: "custom-panel" }, zo = { class: "title" }, Vo = { class: "title" }, Wo = { class: "title" }, Uo = /* @__PURE__ */ N({
  __name: "PageSettingDialog",
  props: /* @__PURE__ */ Fe({
    cmd: {}
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(i, { expose: o }) {
    const { t } = Q(), a = D(), d = i, n = L(z), m = ze(i, "modelValue"), r = $({ ...{
      slideSize: "",
      slideWidth: 0,
      slideHeight: 0,
      numberBegin: 1,
      paperSize: "",
      paperWidth: 0,
      paperHeight: 0,
      directionSlide: "horizontal",
      directionNotesHandout: "horizontal"
    } }), p = h(() => (a == null ? void 0 : a.getters["command/getVal"](d.cmd)) || {}), S = h(() => {
      var T;
      return ((T = a == null ? void 0 : a.getters["command/getVal"](s.GetPaperSizeOption)) == null ? void 0 : T.paperSizeOption) || [];
    }), b = h(() => {
      var T;
      return ((T = a == null ? void 0 : a.getters["command/getVal"](s.GetPaperSizeOption)) == null ? void 0 : T.slideSizeOption) || [];
    }), y = $(!1), v = $(!1), _ = $(!1), u = h(() => [
      ...b.value.map((T) => ({
        value: T.name,
        label: t(`dialogs.pageSetting.slideSizeOption.${T.name}`)
      })),
      {
        value: "custom",
        label: "自定义"
      }
    ]), x = h(() => [
      ...S.value.map((T) => ({
        value: T.name,
        label: t(`dialog.paperSize.${T.name}`)
      })),
      {
        value: "custom",
        label: "自定义"
      }
    ]), E = $([
      {
        value: "horizontal",
        label: t("dialogs.pageSetting.horizontal")
      },
      {
        value: "vertical",
        label: t("dialogs.pageSetting.vertical")
      }
    ]);
    ee(p, (T) => {
      T && Object.assign(r.value, { ...T }, { paperWidth: T.paperWidth / 10, paperHeight: T.paperHeight / 10, slideWidth: T.slideWidth / 10, slideHeight: T.slideHeight / 10 });
    }), ee(() => r.value.slideSize, (T) => {
      if (T === "custom")
        y.value ? y.value = !1 : (r.value.slideWidth = 29.7, r.value.slideHeight = 21);
      else {
        let R = b.value.find((F) => F.name === T);
        if (y.value = !0, R) {
          let F = Number((R.size.width / 10).toFixed(2)), V = Number((R.size.height / 10).toFixed(2)), ce = Math.min(F, V), se = Math.max(F, V);
          _.value = !0, r.value.directionSlide === "vertical" ? (r.value.slideWidth = ce, r.value.slideHeight = se) : (r.value.slideWidth = se, r.value.slideHeight = ce);
        }
      }
    }), ee(() => [r.value.slideWidth, r.value.slideHeight], ([T, R]) => {
      if (v.value) {
        v.value = !1;
        return;
      }
      let F = b.value.find((V) => V.size.width === Number((T * 10).toFixed(2)) && V.size.height === Number((R * 10).toFixed(2)) || V.size.width === Number((R * 10).toFixed(2)) && V.size.height === Number((T * 10).toFixed(2)));
      r.value.slideSize !== "custom" && !y.value && !F ? (y.value = !0, r.value.slideSize = "custom") : (F && (r.value.slideSize = F.name), y.value = !1), r.value.directionSlide = R > T ? "vertical" : "horizontal";
    }), ee(() => r.value.directionSlide, (T) => {
      let R = Math.max(r.value.slideHeight, r.value.slideWidth), F = Math.min(r.value.slideHeight, r.value.slideWidth);
      v.value = !0, T === "vertical" ? (r.value.slideWidth = F, r.value.slideHeight = R) : (r.value.slideWidth = R, r.value.slideHeight = F);
    }), ee(() => r.value.paperSize, (T) => {
      if (T !== "custom") {
        let R = S.value.find((F) => F.name === T);
        if (R) {
          let F = Number((R.size.width / 10).toFixed(2)), V = Number((R.size.height / 10).toFixed(2)), ce = Math.min(F, V), se = Math.max(F, V);
          _.value = !0, r.value.directionNotesHandout === "vertical" ? (r.value.paperWidth = ce, r.value.paperHeight = se) : (r.value.paperWidth = se, r.value.paperHeight = ce);
        }
      }
    }), ee(() => [r.value.paperWidth, r.value.paperHeight], ([T, R]) => {
      if (_.value) {
        _.value = !1;
        return;
      }
      let F = S.value.find((V) => V.size.width === Number((T * 10).toFixed(2)) && V.size.height === Number((R * 10).toFixed(2)) || V.size.width === Number((R * 10).toFixed(2)) && V.size.height === Number((T * 10).toFixed(2)));
      F ? r.value.paperSize = F.name : r.value.paperSize = "custom", r.value.directionNotesHandout = R > T ? "vertical" : "horizontal";
    }), ee(() => r.value.directionNotesHandout, (T, R) => {
      let F = Math.max(r.value.paperHeight, r.value.paperWidth), V = Math.min(r.value.paperHeight, r.value.paperWidth);
      _.value = !0, T === "vertical" ? (r.value.paperWidth = V, r.value.paperHeight = F) : (r.value.paperWidth = F, r.value.paperHeight = V);
    });
    const A = Fl({});
    function U() {
      m.value = !0, n.run(s.GetPaperSizeOption, void 0), n.run(d.cmd, { type: Z.GET, value: {} });
    }
    function B() {
      m.value = !1;
      let T = P();
      n.run(d.cmd, { value: T, type: Z.SET });
    }
    function P() {
      return {
        slideWidth: Number((r.value.slideWidth * 10).toFixed(2)),
        slideHeight: Number((r.value.slideHeight * 10).toFixed(2)),
        numberBegin: Number(r.value.numberBegin),
        paperWidth: Number((r.value.paperWidth * 10).toFixed(2)),
        paperHeight: Number((r.value.paperHeight * 10).toFixed(2)),
        directionSlide: r.value.directionSlide,
        directionNotesHandout: r.value.directionNotesHandout
      };
    }
    function Y() {
      m.value = !1;
    }
    return o({
      openPopover: U
    }), (T, R) => {
      const F = k("n-space"), V = k("n-form-item"), ce = k("n-radio"), se = k("n-radio-group"), ll = k("n-form");
      return f(), C("div", null, [
        e(l(fl), {
          show: m.value,
          "onUpdate:show": R[9] || (R[9] = (X) => m.value = X),
          title: T.$t("dialogs.pageSetting.name"),
          width: 450
        }, {
          action: c(() => [
            e(l(Ue), {
              label: T.$t("common.cancel"),
              onClickButton: Y,
              type: "standard"
            }, null, 8, ["label"]),
            e(l(Ue), {
              label: T.$t("common.confirm"),
              onClickButton: B
            }, null, 8, ["label"])
          ]),
          default: c(() => [
            I("div", Do, [
              e(ll, {
                ref: "formRef",
                model: r.value,
                rules: A,
                "label-placement": "top",
                style: { maxWidth: "450px" }
              }, {
                default: c(() => [
                  e(F, { horizontal: "" }, {
                    default: c(() => [
                      e(F, { vertical: "" }, {
                        default: c(() => [
                          e(V, null, {
                            default: c(() => [
                              e(F, { vertical: "" }, {
                                default: c(() => [
                                  I("div", zo, M(T.$t("dialogs.pageSetting.pageSize")), 1),
                                  e(l(gl), {
                                    size: "tiny",
                                    options: u.value,
                                    "model-value": r.value.slideSize,
                                    width: 212,
                                    type: "font",
                                    valueIsNumber: !0,
                                    "max-height": 160,
                                    "onUpdate:modelValue": R[0] || (R[0] = (X) => r.value.slideSize = X)
                                  }, null, 8, ["options", "model-value"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          e(F, { horizontal: "" }, {
                            default: c(() => [
                              e(V, {
                                label: T.$t("dialogs.pageSetting.width")
                              }, {
                                default: c(() => [
                                  e(Ne, {
                                    modelValue: r.value.slideWidth,
                                    "onUpdate:modelValue": R[1] || (R[1] = (X) => r.value.slideWidth = X),
                                    unit: "厘米",
                                    width: 100,
                                    allowString: !0,
                                    min: 0,
                                    max: 9999
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              }, 8, ["label"]),
                              e(V, {
                                label: T.$t("dialogs.pageSetting.height")
                              }, {
                                default: c(() => [
                                  e(Ne, {
                                    modelValue: r.value.slideHeight,
                                    "onUpdate:modelValue": R[2] || (R[2] = (X) => r.value.slideHeight = X),
                                    unit: "厘米",
                                    width: 100,
                                    allowString: !0,
                                    min: 0,
                                    max: 9999
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              }, 8, ["label"])
                            ]),
                            _: 1
                          }),
                          e(V, {
                            label: T.$t("dialogs.pageSetting.numberBegin")
                          }, {
                            default: c(() => [
                              e(Ne, {
                                modelValue: r.value.numberBegin,
                                "onUpdate:modelValue": R[3] || (R[3] = (X) => r.value.numberBegin = X),
                                unit: "",
                                width: 100,
                                allowString: !0,
                                min: 0,
                                max: 9999
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          e(V, null, {
                            default: c(() => [
                              e(F, { vertical: "" }, {
                                default: c(() => [
                                  I("div", Vo, M(T.$t("dialogs.pageSetting.paperSize")), 1),
                                  e(l(gl), {
                                    size: "tiny",
                                    options: x.value,
                                    "model-value": r.value.paperSize,
                                    width: 212,
                                    type: "font",
                                    valueIsNumber: !0,
                                    "max-height": 160,
                                    "onUpdate:modelValue": R[4] || (R[4] = (X) => r.value.paperSize = X)
                                  }, null, 8, ["options", "model-value"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          e(F, { horizontal: "" }, {
                            default: c(() => [
                              e(V, {
                                label: T.$t("dialogs.pageSetting.width")
                              }, {
                                default: c(() => [
                                  e(Ne, {
                                    modelValue: r.value.paperWidth,
                                    "onUpdate:modelValue": R[5] || (R[5] = (X) => r.value.paperWidth = X),
                                    unit: "厘米",
                                    width: 100,
                                    allowString: !0,
                                    min: 0,
                                    max: 9999
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              }, 8, ["label"]),
                              e(V, {
                                label: T.$t("dialogs.pageSetting.height")
                              }, {
                                default: c(() => [
                                  e(Ne, {
                                    modelValue: r.value.paperHeight,
                                    "onUpdate:modelValue": R[6] || (R[6] = (X) => r.value.paperHeight = X),
                                    unit: "厘米",
                                    width: 100,
                                    allowString: !0,
                                    min: 0,
                                    max: 9999
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              }, 8, ["label"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      e(F, {
                        style: { "margin-left": "20px" },
                        vertical: ""
                      }, {
                        default: c(() => [
                          I("div", Wo, M(T.$t("dialogs.pageSetting.pageDirection")), 1),
                          e(V, {
                            label: T.$t("dialogs.pageSetting.directionSlide"),
                            style: { position: "relative", width: "140px" }
                          }, {
                            default: c(() => [
                              e(se, {
                                value: r.value.directionSlide,
                                "onUpdate:value": R[7] || (R[7] = (X) => r.value.directionSlide = X),
                                name: "radiogroup"
                              }, {
                                default: c(() => [
                                  e(F, { vertical: "" }, {
                                    default: c(() => [
                                      (f(!0), C(ae, null, ne(E.value, (X, tl) => (f(), H(ce, {
                                        key: X.value,
                                        value: X.value,
                                        size: "small",
                                        style: { "font-size": "12px" }
                                      }, {
                                        default: c(() => [
                                          oe(M(X.label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]))), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["value"]),
                              e(l(te), {
                                name: "Ribbon_ppt_landscape_24__clip_cell",
                                size: 24,
                                style: { position: "absolute", right: "0px", top: "0px" }
                              })
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          e(V, {
                            label: T.$t("dialogs.pageSetting.directionNotesHandout"),
                            style: { position: "relative", width: "140px" }
                          }, {
                            default: c(() => [
                              e(se, {
                                value: r.value.directionNotesHandout,
                                "onUpdate:value": R[8] || (R[8] = (X) => r.value.directionNotesHandout = X),
                                name: "radiogroup"
                              }, {
                                default: c(() => [
                                  e(F, { vertical: "" }, {
                                    default: c(() => [
                                      (f(!0), C(ae, null, ne(E.value, (X, tl) => (f(), H(ce, {
                                        key: X.value,
                                        value: X.value,
                                        size: "small",
                                        style: { "font-size": "12px" }
                                      }, {
                                        default: c(() => [
                                          oe(M(X.label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]))), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["value"]),
                              e(l(te), {
                                name: "Ribbon_ppt_portrait_24__clip_cell",
                                size: 24,
                                style: { position: "absolute", right: "0px", top: "0px" }
                              })
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
              }, 8, ["model", "rules"])
            ])
          ]),
          _: 1
        }, 8, ["show", "title"])
      ]);
    };
  }
}), Go = /* @__PURE__ */ K(Uo, [["__scopeId", "data-v-beaebe3c"]]), qo = { style: { display: "flex", gap: "8px" } }, ba = /* @__PURE__ */ N({
  __name: "NotesMasterGroup",
  setup(i) {
    const o = D(), { t } = Q(), a = L(z), d = h(() => o == null ? void 0 : o.getters["command/getVal"](s.NotesSlidePlaceholder)), n = $();
    rl(() => {
      a.run(s.NotesSlidePlaceholder, { type: Z.GET, value: 0 });
    });
    const m = h(() => p.value.filter((y) => !!(d.value & y.value)).map((y) => y.value)), g = $([
      {
        label: `${t("toolbar.notesMaster.orientation.portrait")}`,
        key: "portrait",
        disabled: !1,
        icon: w(-960, -56)
      },
      {
        label: `${t("toolbar.notesMaster.orientation.landscape")}`,
        key: "landscape",
        disabled: !1,
        icon: w(-944, -56)
      }
    ]), r = $([
      {
        label: `${t("toolbar.notesMaster.slideSize.standard")}`,
        key: "standard",
        disabled: !1,
        icon: w(-976, -56)
      },
      {
        label: `${t("toolbar.notesMaster.slideSize.widescreen")}`,
        key: "widescreen",
        disabled: !1,
        icon: w(-992, -56)
      },
      {
        type: "divider",
        key: "d1"
      },
      {
        label: `${t("toolbar.notesMaster.slideSize.custom")}`,
        key: "custom",
        disabled: !1,
        props: {
          onClick: () => {
            var y;
            (y = n.value) == null || y.openPopover();
          }
        }
      }
    ]), p = $([
      { label: `${t("toolbar.notesMaster.header")}`, key: ue.HEADER, value: ue.HEADER },
      { label: `${t("toolbar.notesMaster.slideImage")}`, key: ue.SLIDE_IMAGE, value: ue.SLIDE_IMAGE },
      { label: `${t("toolbar.notesMaster.footer")}`, key: ue.FOOTER, value: ue.FOOTER },
      { label: `${t("toolbar.notesMaster.date")}`, key: ue.DATE, value: ue.DATE },
      { label: `${t("toolbar.notesMaster.body")}`, key: ue.BODY, value: ue.BODY },
      { label: `${t("toolbar.notesMaster.pageNumber")}`, key: ue.PAGE_NUMBER, value: ue.PAGE_NUMBER }
    ]);
    function S(y, v) {
      if (!(!y || !v) && y.value !== "custom")
        return a.run(v, { type: Z.SET, value: y.value });
    }
    function b(y = []) {
      let v = ue.NONE;
      v = y.reduce((_, u) => _ | u, v), o.commit("command/setState", { ui: { value: v }, cmd: s.NotesSlidePlaceholder }), a.run(s.NotesSlidePlaceholder, { type: Z.SET, value: v });
    }
    return (y, v) => {
      const _ = k("n-checkbox"), u = k("n-space"), x = k("n-checkbox-group");
      return f(), C("div", qo, [
        e(pe, {
          cmd: l(s).NotesPageDirection,
          label: y.$t("toolbar.notesMaster.orientation.name"),
          "icon-name": "Ribbon_ppt_note_24__clip_cell",
          dropdownOptions: g.value,
          isActiveOption: !0
        }, null, 8, ["cmd", "label", "dropdownOptions"]),
        e(pe, {
          cmd: l(s).NotesSlideSize,
          label: y.$t("toolbar.notesMaster.slideSize.name"),
          "icon-name": "Ribbon_ppt_size_24__clip_cell",
          dropdownOptions: r.value,
          commandHandler: S,
          isActiveOption: !0
        }, null, 8, ["cmd", "label", "dropdownOptions"]),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px"
        }),
        e(x, {
          "onUpdate:value": b,
          value: m.value
        }, {
          default: c(() => [
            e(u, { horizontal: "" }, {
              default: c(() => [
                e(u, { vertical: "" }, {
                  default: c(() => [
                    (f(!0), C(ae, null, ne(p.value.slice(0, 2), (E) => (f(), H(_, {
                      key: E.key,
                      value: E.value,
                      label: E.label,
                      style: { "font-size": "12px" },
                      size: "small"
                    }, null, 8, ["value", "label"]))), 128))
                  ]),
                  _: 1
                }),
                e(u, { vertical: "" }, {
                  default: c(() => [
                    (f(!0), C(ae, null, ne(p.value.slice(2, 4), (E) => (f(), H(_, {
                      key: E.key,
                      value: E.value,
                      label: E.label,
                      style: { "font-size": "12px" },
                      size: "small"
                    }, null, 8, ["value", "label"]))), 128))
                  ]),
                  _: 1
                }),
                e(u, { vertical: "" }, {
                  default: c(() => [
                    (f(!0), C(ae, null, ne(p.value.slice(4, 6), (E) => (f(), H(_, {
                      key: E.key,
                      value: E.value,
                      label: E.label,
                      style: { "font-size": "12px" },
                      size: "small"
                    }, null, 8, ["value", "label"]))), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["value"]),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px"
        }),
        e(pl),
        e(Go, {
          ref_key: "pageSettingDialogRef",
          ref: n,
          cmd: l(s).SetNotesSlideSizeOption
        }, null, 8, ["cmd"])
      ]);
    };
  }
}), Yo = /* @__PURE__ */ N({
  __name: "EditShape",
  setup(i) {
    const o = D(), t = L(z), { t: a } = Q(), d = h(() => o == null ? void 0 : o.getters["command/shapeList"]), n = $(!1);
    ee(n, (b) => {
      b && t.run(s.GetShapeTypeList, void 0);
    });
    const m = $([
      {
        label: `${a("toolbar.shapeToolbar.editShape.changeShape")}`,
        key: "changeShape",
        disabled: !1,
        icon: w("ppt_drawing_tools_change_shape_16__clip_cell"),
        children: [
          {
            key: "insertShape",
            type: "render",
            render: r
          }
        ]
      },
      {
        label: `${a("toolbar.shapeToolbar.editShape.editVertex")}`,
        key: "editVertex",
        disabled: !1,
        icon: w("ppt_drawing_tools_edit_dian_16__clip_cell")
      }
    ]);
    function g(b) {
      t.run(s.ShapeEditVertex, void 0), n.value = !1;
    }
    function r() {
      return ie("div", { class: "shape-panel-title", style: "width:400px;font-size:12px;" }, [
        ie(yl, { maxHeight: 400 }, {
          default: () => [
            ie("div", { class: "global-basic-display-text panel-title shape-panel-title preset-title" }, a("toolbar.insert.shapes.title")),
            d.value.filter((b) => {
              var y;
              return ((y = b.elements) == null ? void 0 : y.length) > 0 && b.group !== Hl.Lines;
            }).map((b) => ie("div", { class: "shape-lines-container", style: "margin:2px 0px" }, [
              ie("div", { style: "display:flex;align-items:center;margin:2px 0px" }, [
                ie("span", {}, b.UIName),
                ie(O, { vertical: !1, style: "flex-grow: 1", margin: "0px 8px" })
              ]),
              ie("div", { style: "display:flex;flex-wrap: wrap;gap: 2px;" }, b.elements.filter((y) => y.presetType !== "text" && y.presetType !== "vertText").map((y) => ie(he, {}, {
                trigger: () => ie(te, { scope: "common", name: p(y, b), size: 18, style: "margin:4px", onClick: () => S(y) }),
                default: () => y.UIName
              })))
            ]))
          ]
        })
      ]);
    }
    function p(b, y) {
      var _;
      let v = y.group;
      return v = ((_ = v.match(/\S+/g)) == null ? void 0 : _.map((u) => u[0].toUpperCase() + u.slice(1)).join("")) + "", v = v[0].toLowerCase() + v.slice(1), v + "--" + b.id;
    }
    function S(b) {
      t.run(s.ShapeEditShape, { value: JSON.parse(JSON.stringify({ ...b })) }), n.value = !1;
    }
    return (b, y) => (f(), H(pe, {
      cmd: l(s).ShapeEditShape,
      label: b.$t("toolbar.shapeToolbar.editShape.name"),
      "icon-name": "ppt_drawing_tools_edit_shape_24__clip_cell",
      "command-handler": g,
      dropdownOptions: m.value,
      modelValue: n.value,
      "onUpdate:modelValue": y[0] || (y[0] = (v) => n.value = v)
    }, null, 8, ["cmd", "label", "dropdownOptions", "modelValue"]));
  }
}), Xo = { style: { display: "flex" } }, jo = { class: "toolbar-group" }, Jo = /* @__PURE__ */ N({
  __name: "ShapeToolGroup",
  setup(i) {
    const o = D(), t = L(z), a = h(() => o == null ? void 0 : o.getters["command/groupState"]), d = h(() => o == null ? void 0 : o.getters["command/shapeAlign"]), n = h(() => o == null ? void 0 : o.getters["command/alignTarget"]), m = $(null), g = h(() => o.getters["menu/selectedElement"]), r = h(() => (o == null ? void 0 : o.getters["command/can"](s.ShapeRotate)) && (g.value & We.HiddenRotate) !== We.HiddenRotate), { t: p } = Q();
    hl(m);
    const S = h(() => [
      {
        label: `${p("toolbar.shapeToolbar.group.group")}`,
        key: "group",
        disabled: !(a.value === Ee.GROUP || a.value === Ee.GROUP_OR_UNGROUP),
        icon: w("ppt_drawing_tools_group_16__clip_cell")
      },
      {
        label: `${p("toolbar.shapeToolbar.group.ungroup")}`,
        key: "ungroup",
        disabled: !(a.value === Ee.UNGROUP || a.value === Ee.GROUP_OR_UNGROUP),
        icon: w("ppt_drawing_tools_ungroup_16__clip_cell")
      }
    ]), b = $([
      {
        label: `${p("toolbar.shapeToolbar.rotate.rotateRight90")}`,
        key: "90",
        disabled: !1,
        icon: w("ppt_drawing_tools_rotate_left_16__clip_cell")
      },
      {
        label: `${p("toolbar.shapeToolbar.rotate.rotateLeft90")}`,
        key: "270",
        disabled: !1,
        icon: w("ppt_drawing_tools_rotate_16__clip_cell")
      },
      {
        label: `${p("toolbar.shapeToolbar.rotate.horizontal")}`,
        key: "flipH",
        disabled: !1,
        icon: w(-1376, -56)
      },
      {
        label: `${p("toolbar.shapeToolbar.rotate.vertical")}`,
        key: "flipV",
        disabled: !1,
        icon: w(-1408, -56)
      }
    ]), y = $([
      {
        label: `${p("toolbar.shapeToolbar.bringToFront.bringForward")}`,
        key: "up",
        disabled: !1,
        icon: w("ppt_drawing_tools_move_up_16__clip_cell")
      },
      {
        label: `${p("toolbar.shapeToolbar.bringToFront.bringToFront")}`,
        key: "front",
        disabled: !1,
        icon: w("ppt_drawing_tools_bring_front_16__clip_cell")
      }
    ]), v = $([
      {
        label: `${p("toolbar.shapeToolbar.sendBackward.sendBackward")}`,
        key: "down",
        disabled: !1,
        icon: w("ppt_drawing_tools_move_down_16__clip_cell")
      },
      {
        label: `${p("toolbar.shapeToolbar.sendBackward.sendToBack")}`,
        key: "behind",
        disabled: !1,
        icon: w("ppt_drawing_tools_send_back_16__clip_cell")
      }
    ]), _ = h(() => [
      {
        label: `${p("toolbar.shapeToolbar.align.left")}`,
        key: "left",
        disabled: !1,
        icon: w("ppt_drawing_tools_align_16__clip_cell"),
        noIcon: !1,
        param: { target: n.value }
      },
      {
        label: `${p("toolbar.shapeToolbar.align.center")}`,
        key: "center",
        disabled: !1,
        noIcon: !1,
        icon: w("ppt_drawing_tools_align_center_horizontally_16__clip_cell"),
        param: { target: n.value }
      },
      {
        label: `${p("toolbar.shapeToolbar.align.right")}`,
        key: "right",
        disabled: !1,
        noIcon: !1,
        icon: w("ppt_drawing_tools_align_right_16__clip_cell"),
        param: { target: n.value }
      },
      {
        label: `${p("toolbar.shapeToolbar.align.top")}`,
        key: "top",
        disabled: !1,
        noIcon: !1,
        icon: w(-1488, -56),
        param: { target: n.value }
      },
      {
        label: `${p("toolbar.shapeToolbar.align.middle")}`,
        key: "middle",
        disabled: !1,
        noIcon: !1,
        icon: w(-1520, -56),
        param: { target: n.value }
      },
      {
        label: `${p("toolbar.shapeToolbar.align.bottom")}`,
        key: "bottom",
        disabled: !1,
        noIcon: !1,
        icon: w(-1456, -56),
        param: { target: n.value }
      },
      {
        type: "divider",
        key: "divider1"
      },
      {
        label: `${p("toolbar.shapeToolbar.align.horizontal")}`,
        key: "horizontal",
        noIcon: !1,
        disabled: !(d.value === q.SINGLE || d.value === q.MULTIPLE),
        icon: w("ppt_drawing_tools_distribute_horizontally_16__clip_cell"),
        param: { target: n.value }
      },
      {
        label: `${p("toolbar.shapeToolbar.align.vertical")}`,
        key: "vertical",
        noIcon: !1,
        disabled: !(d.value === q.SINGLE || d.value === q.MULTIPLE),
        icon: w("ppt_drawing_tools_distribute_vertically_16__clip_cell"),
        param: { target: n.value }
      },
      {
        type: "divider",
        key: "divider1"
      },
      {
        label: `${p("toolbar.shapeToolbar.align.equalWidth")}`,
        key: "equalWidth",
        noIcon: !1,
        disabled: !(d.value === q.BETWEEN_RELATIVE || d.value === q.MULTIPLE),
        icon: w("ppt_drawing_tools_equal_height_16__clip_cell"),
        param: { target: n.value }
      },
      {
        label: `${p("toolbar.shapeToolbar.align.equalHeight")}`,
        key: "equalHeight",
        noIcon: !1,
        disabled: !(d.value === q.BETWEEN_RELATIVE || d.value === q.MULTIPLE),
        icon: w("ppt_drawing_tools_equal_width_16__clip_cell"),
        param: { target: n.value }
      },
      {
        label: `${p("toolbar.shapeToolbar.align.equalSize")}`,
        key: "equalSize",
        noIcon: !1,
        disabled: !(d.value === q.BETWEEN_RELATIVE || d.value === q.MULTIPLE),
        icon: w("ppt_drawing_tools_equal_size_16__clip_cell"),
        param: { target: n.value }
      },
      {
        type: "divider",
        key: "divider1"
      },
      {
        label: `${p("toolbar.shapeToolbar.align.alignSlide")}`,
        key: "alignSlide",
        disabled: !1,
        noTrigger: !0,
        noIcon: !0,
        props: {
          onClick: () => {
            o.commit("command/setAlignTarget", "alignSlide");
          }
        }
      },
      {
        label: `${p("toolbar.shapeToolbar.align.alignSelectedObject")}`,
        key: "alignSelectedObject",
        disabled: d.value === q.SINGLE,
        noTrigger: !0,
        noIcon: !0,
        props: {
          onClick: () => {
            o.commit("command/setAlignTarget", "alignSelectedObject");
          }
        }
      }
    ]);
    function u(x, E) {
      E && x && t.run(E, { value: x.value });
    }
    return (x, E) => {
      const A = k("n-space"), U = k("n-form");
      return f(), C("div", Xo, [
        e(j, {
          cmd: l(s).FormatPaint,
          label: x.$t("toolbar.shapeToolbar.formatPainter"),
          "icon-name": "Ribbon_word_geshishua_24__clip_cell",
          active: !1,
          tooltip: x.$t("toolbar.shapeToolbar.formatPainter")
        }, null, 8, ["cmd", "label", "tooltip"]),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px 8px"
        }),
        e(xl),
        e(wl),
        e(Yo),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px 8px"
        }),
        e(Tl, {
          cmd: l(s).ShapeFill,
          x: -1128,
          y: -32,
          label: x.$t("toolbar.shapeToolbar.fill.name"),
          tooltip: x.$t("toolbar.shapeToolbar.fill.name"),
          showFill: !0,
          noFillX: 0,
          noFillY: -197
        }, null, 8, ["cmd", "label", "tooltip"]),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px 8px"
        }),
        e(pe, {
          cmd: l(s).ShapeGroup,
          label: x.$t("toolbar.shapeToolbar.group.name"),
          "icon-name": "ppt_drawing_tools_group_24__clip_cell",
          "command-handler": u,
          dropdownOptions: S.value
        }, null, 8, ["cmd", "label", "dropdownOptions"]),
        e(A, {
          vertical: "",
          style: { gap: "4px" }
        }, {
          default: c(() => [
            e(A, null, {
              default: c(() => [
                e($e, {
                  cmd: l(s).ShapeRotate,
                  label: x.$t("toolbar.shapeToolbar.rotate.name"),
                  "icon-name": "ppt_drawing_tools_rotate_16__clip_cell",
                  "menu-items": b.value,
                  disabled: !r.value,
                  "use-disabled": !0
                }, null, 8, ["cmd", "label", "menu-items", "disabled"]),
                e($e, {
                  cmd: l(s).ShapeBringToFront,
                  label: x.$t("toolbar.shapeToolbar.bringToFront.name"),
                  "icon-name": "ppt_drawing_tools_move_up_16__clip_cell",
                  "menu-items": y.value
                }, null, 8, ["cmd", "label", "menu-items"])
              ]),
              _: 1
            }),
            e(A, null, {
              default: c(() => [
                e($e, {
                  cmd: l(s).ShapeAlign,
                  label: x.$t("toolbar.shapeToolbar.align.name"),
                  "icon-name": "ppt_drawing_tools_align_16__clip_cell",
                  "menu-items": _.value,
                  "is-active-option": !0,
                  "get-value-command": l(s).GetShapeAlign
                }, null, 8, ["cmd", "label", "menu-items", "get-value-command"]),
                e($e, {
                  cmd: l(s).ShapeSendToBack,
                  label: x.$t("toolbar.shapeToolbar.sendBackward.name"),
                  "icon-name": "ppt_drawing_tools_move_down_16__clip_cell",
                  "menu-items": v.value
                }, null, 8, ["cmd", "label", "menu-items"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px 8px"
        }),
        I("div", jo, [
          e(el, {
            command: l(He).Shape,
            disabled: !1,
            defaultValue: {},
            label: x.$t("rightPanel.title")
          }, {
            default: c(() => [
              e(A, {
                vertical: "",
                style: { gap: "8px 0px" }
              }, {
                default: c(() => [
                  e(U, {
                    ref_key: "panelRoot",
                    ref: m
                  }, {
                    default: c(() => [
                      e(qe, {
                        cmd: l(s).ShapeSetHeight,
                        x: -1632,
                        y: -56,
                        "resource-image": l(G).image,
                        "image-width": l(G).width,
                        "is-input-command": !1,
                        max: 5963.92
                      }, null, 8, ["cmd", "resource-image", "image-width"]),
                      e(qe, {
                        cmd: l(s).ShapeSetWidth,
                        x: -1648,
                        y: -56,
                        "resource-image": l(G).image,
                        "image-width": l(G).width,
                        "is-input-command": !1,
                        max: 5963.92,
                        style: { "margin-top": "8px" }
                      }, null, 8, ["cmd", "resource-image", "image-width"])
                    ]),
                    _: 1
                  }, 512)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["command", "label"])
        ])
      ]);
    };
  }
}), va = /* @__PURE__ */ K(Jo, [["__scopeId", "data-v-7b7c5fc7"]]), Ko = /* @__PURE__ */ N({
  __name: "InsertPlaceHolder",
  setup(i) {
    const o = L(z), { t } = Q(), a = $([
      {
        label: `${t("toolbar.slideMaster.placeHolder.content")}`,
        key: "content",
        disabled: !1
      },
      {
        label: `${t("toolbar.slideMaster.placeHolder.contentVertical")}`,
        key: "vertical",
        disabled: !1
      },
      {
        label: `${t("toolbar.slideMaster.placeHolder.text")}`,
        key: "text",
        disabled: !1
      },
      {
        label: `${t("toolbar.slideMaster.placeHolder.textVertical")}`,
        key: "textVertical",
        disabled: !1
      },
      {
        label: `${t("toolbar.slideMaster.placeHolder.pictureFill")}`,
        key: "pictureFill",
        disabled: !1
      },
      {
        label: `${t("toolbar.slideMaster.placeHolder.chart")}`,
        key: "chart",
        disabled: !1
      },
      {
        label: `${t("toolbar.slideMaster.placeHolder.table")}`,
        key: "table",
        disabled: !1
      },
      {
        label: `${t("toolbar.slideMaster.placeHolder.video")}`,
        key: "video",
        disabled: !1
      },
      {
        label: `${t("toolbar.slideMaster.placeHolder.smartArt")}`,
        key: "smartArt",
        disabled: !1
      }
    ]);
    function d(n) {
      o.run(s.SlideMasterInsertPlaceHolder, { value: n.value });
    }
    return (n, m) => (f(), H(pe, {
      cmd: l(s).SlideMasterInsertPlaceHolder,
      label: n.$t("toolbar.slideMaster.placeHolder.name"),
      "icon-name": "Ribbon_ppt_placeholder_24__clip_cell",
      "command-handler": d,
      dropdownOptions: a.value
    }, null, 8, ["cmd", "label", "dropdownOptions"]));
  }
}), Qo = { style: { display: "flex", gap: "8px" } }, Zo = { class: "toolbar-group" }, ea = { style: { display: "flex", gap: "8px" } }, la = { style: { display: "flex", gap: "8px" } }, _a = /* @__PURE__ */ N({
  __name: "SlideMasterGroup",
  setup(i) {
    const o = L(Qe, null), { t } = Q(), a = D(), d = $([]), n = sl("pptx", il), m = L(z), g = h(() => a == null ? void 0 : a.getters["command/getVal"](s.SlideMasterRename)), r = h(() => a == null ? void 0 : a.getters["command/getVal"](s.SlideMasterPreserve)), p = h(() => {
      var u;
      return (u = r.value) == null ? void 0 : u.isPreserve;
    }), S = h(() => {
      var u;
      return (u = r.value) == null ? void 0 : u.isReference;
    });
    function b() {
      m.run(s.SlideMasterRename, { value: { name: "", cmd: "" }, type: Z.GET });
      var u = new Event("Rename");
      u.callback = (E) => {
        m.run(s.SlideMasterRename, { value: { name: E, cmd: "rename" }, type: Z.SET });
      }, u.options = { title: t("dialogs.layoutRename.title"), name: t("dialogs.layoutRename.name"), defaultValue: g.value, confirmName: t("common.confirm") }, ((o == null ? void 0 : o.eventTarget) ?? window).dispatchEvent(u);
    }
    function y() {
      const u = (o == null ? void 0 : o.eventTarget) ?? window, x = new Event("LayoutPlaceHolder");
      u.dispatchEvent(x);
    }
    async function v() {
      (re == null || re.length == 0) && await cl(), re && re.length !== d.value.length && (d.value = re.map(({ fullName: u }) => ({
        label: u,
        value: u
      })));
    }
    function _() {
      if (S.value || !p.value)
        m.run(s.SlideMasterPreserve, { value: { isPreserve: !p.value, isDelete: !1 } });
      else {
        const u = (o == null ? void 0 : o.eventTarget) ?? window, x = new Event("MasterPreserve");
        x.callback = (E) => {
          m.run(s.SlideMasterPreserve, { value: { isPreserve: !p.value, isDelete: E } });
        }, u.dispatchEvent(x);
      }
    }
    return (u, x) => {
      const E = k("n-space");
      return f(), C("div", Qo, [
        e(j, {
          cmd: l(s).SlideMasterInsert,
          label: u.$t("toolbar.slideMaster.insert"),
          "icon-name": "Ribbon_ppt_master_24__clip_cell",
          "is-active": !1
        }, null, 8, ["cmd", "label"]),
        e(j, {
          cmd: l(s).SlideMasterInsertLayout,
          label: u.$t("toolbar.slideMaster.insertLayout"),
          "icon-name": "Ribbon_ppt_layout_24__clip_cell",
          "is-active": !1
        }, null, 8, ["cmd", "label"]),
        e(Ko),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px"
        }),
        e(j, {
          cmd: l(s).SlideMasterDelete,
          label: u.$t("toolbar.slideMaster.delete"),
          "icon-name": "Ribbon_ppt_delete_24__clip_cell",
          "is-active": !1
        }, null, 8, ["cmd", "label"]),
        e(j, {
          cmd: l(s).SlideMasterPreserve,
          label: u.$t("toolbar.slideMaster.preserve"),
          "icon-name": "Ribbon_ppt_protect_master_24__clip_cell",
          commandHandler: _,
          active: p.value
        }, null, 8, ["cmd", "label", "active"]),
        e(j, {
          cmd: l(s).SlideMasterRename,
          label: u.$t("toolbar.slideMaster.rename"),
          "icon-name": "Ribbon_ppt_rename_master_24__clip_cell",
          commandHandler: b,
          "is-active": !1
        }, null, 8, ["cmd", "label"]),
        e(j, {
          cmd: l(s).SlideMasterLayout,
          label: u.$t("toolbar.slideMaster.masterLayout"),
          "icon-name": "Ribbon_ppt_master_layout_24__clip_cell",
          commandHandler: y,
          "is-active": !1
        }, null, 8, ["cmd", "label"]),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px"
        }),
        I("div", Zo, [
          e(E, { vertical: "" }, {
            default: c(() => [
              I("div", ea, [
                I("span", { onClick: v }, [
                  e(Pe, {
                    cmd: l(s).FontName,
                    options: d.value,
                    width: 140,
                    type: "font"
                  }, null, 8, ["cmd", "options"])
                ]),
                e(Pe, {
                  cmd: l(s).FontSize,
                  options: l(n),
                  width: 70,
                  "validate-input": l(dl)
                }, null, 8, ["cmd", "options", "validate-input"])
              ]),
              I("div", la, [
                e(le, {
                  cmd: l(s).Bold,
                  "icon-name": "Ribbon_word_bold_16__clip_cell",
                  tooltip: u.$t("toolbar.start.bold"),
                  class: "global-small-icon-button"
                }, null, 8, ["cmd", "tooltip"]),
                e(le, {
                  cmd: l(s).Italic,
                  "icon-name": "Ribbon_word_Italic_16__clip_cell",
                  tooltip: u.$t("toolbar.start.italic"),
                  class: "global-small-icon-button"
                }, null, 8, ["cmd", "tooltip"]),
                e(le, {
                  cmd: l(s).Underline,
                  "icon-name": "Ribbon_word_underline_16__clip_cell",
                  tooltip: u.$t("toolbar.start.underline"),
                  class: "global-small-icon-button"
                }, null, 8, ["cmd", "tooltip"]),
                e(je, {
                  cmd: l(s).FontColor,
                  "icon-name": "Ribbon_word_text_color_16__clip_cell",
                  tooltip: u.$t("toolbar.start.fontClolor"),
                  class: "global-small-icon-dropdown-button"
                }, null, 8, ["cmd", "tooltip"]),
                e(Ge, {
                  cmd: l(s).Bullet,
                  "icon-name": "Ribbon_word_list_16__clip_cell",
                  tooltip: u.$t("toolbar.start.bullet.title"),
                  enabled: !1,
                  showArrow: !0,
                  customLabel: u.$t("toolbar.start.bullet.option")
                }, null, 8, ["cmd", "tooltip", "customLabel"]),
                e(Ge, {
                  cmd: l(s).Numbering,
                  "icon-name": "Ribbon_word_number_16__clip_cell",
                  tooltip: u.$t("toolbar.start.numbering.title"),
                  enabled: !1,
                  showArrow: !0,
                  customLabel: u.$t("toolbar.start.numbering.option")
                }, null, 8, ["cmd", "tooltip", "customLabel"])
              ])
            ]),
            _: 1
          })
        ]),
        e(l(O), {
          vertical: !0,
          height: 65,
          margin: "0px"
        }),
        e(pl)
      ]);
    };
  }
});
export {
  Yt as ClipboardGroup,
  xe as CommandSmallIconTextButton,
  ma as HandoutMasterGroup,
  ra as InsertGroup,
  fa as MenuNavTab,
  ba as NotesMasterGroup,
  Ot as ParaStyleGroup,
  sa as ReviewGroup,
  va as ShapeToolGroup,
  _a as SlideMasterGroup,
  da as SlideShowGroup,
  Gt as SlidesGroup,
  ia as StartBarGroup,
  pa as TableStyleGroup,
  ua as TableToolGroup,
  Dt as TextStyleGroup,
  ca as UndoRedoGroup,
  na as ViewGroup
};
