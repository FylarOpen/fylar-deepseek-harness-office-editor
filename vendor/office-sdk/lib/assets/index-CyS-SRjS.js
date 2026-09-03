import { C as G, i as P, a as b, b as ae, _ as Ue, r as Q, R as ve, c as Te, d as Ve, e as He, g as Le, f as je, p as it, h as st, u as rt, D as ct, U as dt } from "../mountDocxApp.js?t=1788405500779";
import { M as ja } from "../mountDocxApp.js?t=1788405500779";
import { d as x, o as g, c as w, bY as ut, a as y, a0 as N, k as V, ab as q, a2 as t, b0 as Z, q as S, ad as Ie, a1 as e, aJ as Ee, at as j, aj as I, a4 as c, b3 as L, ay as fe, cI as mt, al as K, a7 as B, r as f, a9 as H, ak as he, ai as le, an as ke, ax as Se, av as oe, aw as de, ao as $e, am as se, ap as ge, aq as _e, ar as Me, as as pe, ac as Ke, S as re, aa as Ye, ae as Xe, cn as Oe, af as pt, ag as bt, co as vt, au as ie, aF as qe, aG as Je, aH as Qe, aI as ce, aP as Ze, aM as Pe, aR as De, a3 as xe, b1 as we, b2 as ye, a6 as be, a8 as ue, h as Ce, v as gt, cw as _t } from "../ApiBase.js?t=1788405500779";
import { I as Re } from "./IconTextButton-BpiFDMZq.js?t=1788405500779";
import { _ as et } from "../DropdownPopoverList.js?t=1788405500779";
const ht = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, ft = x({
  name: "BackspaceOutline",
  render: function(l, o) {
    return g(), w("svg", ht, o[0] || (o[0] = [ut('<path d="M135.19 390.14a28.79 28.79 0 0 0 21.68 9.86h246.26A29 29 0 0 0 432 371.13V140.87A29 29 0 0 0 403.13 112H156.87a28.84 28.84 0 0 0-21.67 9.84v0L46.33 256l88.86 134.11z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336.67 192.33L206.66 322.34"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336.67 322.34L206.66 192.33"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336.67 192.33L206.66 322.34"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336.67 322.34L206.66 192.33"></path>', 5)]));
  }
}), wt = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, yt = x({
  name: "GridOutline",
  render: function(l, o) {
    return g(), w(
      "svg",
      wt,
      o[0] || (o[0] = [
        y(
          "rect",
          {
            x: "48",
            y: "48",
            width: "176",
            height: "176",
            rx: "20",
            ry: "20",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        ),
        y(
          "rect",
          {
            x: "288",
            y: "48",
            width: "176",
            height: "176",
            rx: "20",
            ry: "20",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        ),
        y(
          "rect",
          {
            x: "48",
            y: "288",
            width: "176",
            height: "176",
            rx: "20",
            ry: "20",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        ),
        y(
          "rect",
          {
            x: "288",
            y: "288",
            width: "176",
            height: "176",
            rx: "20",
            ry: "20",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
}), X = /* @__PURE__ */ x({
  __name: "CommandSmallButton",
  props: {
    cmd: {},
    iconName: {},
    x: {},
    y: {},
    tooltip: {}
  },
  setup(s) {
    const l = N(), o = s, a = S(() => l == null ? void 0 : l.getters["command/can"](o.cmd)), n = S(() => l == null ? void 0 : l.getters["command/active"](o.cmd)), u = V(G);
    function r() {
      const i = { value: !n.value };
      u.run(o.cmd, i);
    }
    return (d, i) => (g(), q(t(Z), {
      onClick: r,
      "resource-image": t(P).image,
      disabled: !a.value,
      x: s.x,
      y: s.y,
      "image-width": t(P).width,
      tooltip: s.tooltip,
      active: n.value,
      "icon-name": s.iconName
    }, null, 8, ["resource-image", "disabled", "x", "y", "image-width", "tooltip", "active", "icon-name"]));
  }
}), ee = /* @__PURE__ */ x({
  __name: "CommandBigIconTextButton",
  props: {
    cmd: {},
    label: {},
    showArrow: { type: Boolean },
    iconName: {},
    x: {},
    y: {}
  },
  setup(s) {
    const l = N(), o = s, a = S(() => l == null ? void 0 : l.getters["command/can"](o.cmd)), n = S(() => l == null ? void 0 : l.getters["command/active"](o.cmd)), u = V(G);
    function r() {
      const d = !n.value, i = o.cmd == "searchReplaceWord" ? null : { value: d };
      u.run(o.cmd, i);
    }
    return (d, i) => (g(), w("div", {
      onClick: Ie(r, ["stop"])
    }, [
      e(t(Re), {
        label: s.label,
        "resource-image": t(P).image,
        disabled: !a.value,
        showArrow: s.showArrow,
        active: n.value,
        x: s.x,
        y: s.y,
        "image-width": t(P).width,
        "icon-name": s.iconName
      }, null, 8, ["label", "resource-image", "disabled", "showArrow", "active", "x", "y", "image-width", "icon-name"])
    ]));
  }
}), Ct = { style: { display: "flex", gap: "8px" } }, kt = /* @__PURE__ */ x({
  __name: "ClipboardGroup",
  setup(s) {
    const l = Ee(), { t: o } = j();
    N();
    function a(n) {
      location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1" || (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), l.warning(o("common.httpsOnly")));
    }
    return (n, u) => {
      const r = I("n-space");
      return g(), w("div", Ct, [
        e(ee, {
          cmd: t(b).FormatPainter,
          label: n.$t("toolbar.start.formatPainter"),
          "icon-name": "Ribbon_word_geshishua_24__clip_cell"
        }, null, 8, ["cmd", "label"]),
        e(ee, {
          cmd: t(b).Paste,
          label: n.$t("toolbar.start.paste"),
          "icon-name": "Ribbon_word_past_24__clip_cell",
          onClickCapture: a
        }, null, 8, ["cmd", "label"]),
        e(r, {
          vertical: "",
          style: { gap: "4px", "margin-top": "5px" }
        }, {
          default: c(() => [
            e(X, {
              cmd: t(b).Cut,
              label: n.$t("toolbar.start.cut"),
              "icon-name": "ribbon_word_cut_16__clip_cell",
              tooltip: n.$t("toolbar.start.cut")
            }, null, 8, ["cmd", "label", "tooltip"]),
            e(X, {
              cmd: t(b).Copy,
              label: n.$t("toolbar.start.copy"),
              "icon-name": "ribbon_word_copy_16__clip_cell",
              tooltip: n.$t("toolbar.start.copy")
            }, null, 8, ["cmd", "label", "tooltip"])
          ]),
          _: 1
        })
      ]);
    };
  }
}), $t = { style: { display: "flex", gap: "8px" } }, St = /* @__PURE__ */ x({
  __name: "FileButtonGroup",
  setup(s) {
    const l = Ee(), { t: o } = j();
    function a(n) {
      location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1" || (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), l.warning(o("common.httpsOnly")));
    }
    return (n, u) => (g(), w("div", $t, [
      e(ee, {
        cmd: t(b).Open,
        label: n.$t("toolbar.file.open"),
        "icon-name": "Ribbon_Word_Open_24__clip_cell"
      }, null, 8, ["cmd", "label"]),
      e(t(L), {
        vertical: !0,
        height: 65,
        margin: "0px"
      }),
      e(ee, {
        cmd: t(b).Export,
        label: n.$t("toolbar.file.exportDocument"),
        "icon-name": "Ribbon_Word_export_24__clip_cell"
      }, null, 8, ["cmd", "label"]),
      e(ee, {
        cmd: t(b).ExportPDF,
        label: n.$t("toolbar.file.exportPDF"),
        "icon-name": "Ribbon_Word_export_pdf_24__clip_cell",
        onClickCapture: a
      }, null, 8, ["cmd", "label"])
    ]));
  }
}), ze = /* @__PURE__ */ x({
  __name: "CommandDropdownPopoverBigButton",
  props: {
    show: { type: Boolean },
    cmd: {},
    label: {},
    iconName: {},
    x: {},
    y: {},
    dropdownOptions: {}
  },
  emits: ["update:show"],
  setup(s, { emit: l }) {
    const o = N(), a = s, n = l, u = S(() => o == null ? void 0 : o.getters["command/can"](a.cmd)), r = S(() => o == null ? void 0 : o.getters["command/active"](a.cmd)), d = V(G);
    function i(_) {
      p(_);
    }
    function p(_) {
      const v = { value: _ };
      d.run(a.cmd, v);
    }
    function m(_) {
      n("update:show", _);
    }
    return (_, v) => (g(), w("div", null, [
      e(t(et), {
        show: s.show,
        options: s.dropdownOptions,
        disabled: !u.value,
        onSelect: i,
        "onUpdate:show": m
      }, {
        option: c(({ item: h, checked: z }) => [
          fe(_.$slots, "option", {
            item: h,
            checked: z
          })
        ]),
        footer: c(() => [
          fe(_.$slots, "footer", { runCommand: p })
        ]),
        default: c(() => [
          y("span", null, [
            e(t(Re), {
              label: s.label,
              "resource-image": t(P).image,
              disabled: !u.value,
              active: r.value,
              showArrow: !0,
              x: s.x,
              y: s.y,
              "image-width": t(P).width,
              "icon-name": s.iconName
            }, null, 8, ["label", "resource-image", "disabled", "active", "x", "y", "image-width", "icon-name"])
          ])
        ]),
        _: 3
      }, 8, ["show", "options", "disabled"])
    ]));
  }
}), xt = { style: { display: "flex", gap: "8px" } }, Tt = /* @__PURE__ */ x({
  __name: "TrackChangeGroup",
  setup(s) {
    let l = f(!1);
    return (o, a) => {
      const n = I("n-ellipsis");
      return g(), w("div", xt, [
        e(ee, {
          cmd: t(b).TrackChange,
          label: o.$t("toolbar.file.trackchange"),
          x: -192,
          y: -30
        }, null, 8, ["cmd", "label"]),
        e(ze, {
          show: t(l),
          "onUpdate:show": a[0] || (a[0] = (u) => mt(l) ? l.value = u : l = u),
          cmd: t(b).RevisionDisplayMode,
          label: o.$t("toolbar.file.revisionDisplayMode"),
          x: -192,
          y: -30,
          "dropdown-options": [
            {
              value: "original",
              label: o.$t("toolbar.file.revisionDisplayModeItems.original")
            },
            {
              value: "allMarkUp",
              label: o.$t("toolbar.file.revisionDisplayModeItems.allMarkUp")
            },
            { value: "noMarkUp", label: o.$t("toolbar.file.revisionDisplayModeItems.noMarkUp") },
            { value: "simple", label: o.$t("toolbar.file.revisionDisplayModeItems.simple") }
          ]
        }, {
          option: c(({ item: u }) => [
            e(n, { style: { "max-width": "200px" } }, {
              default: c(() => [
                K(B(u.label), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["show", "cmd", "label", "dropdown-options"])
      ]);
    };
  }
}), It = { style: { display: "flex", gap: "8px" } }, za = /* @__PURE__ */ x({
  __name: "FileGroup",
  setup(s) {
    return (l, o) => (g(), w("div", It, [
      e(St),
      e(t(L), {
        vertical: !0,
        height: 65,
        margin: "0px 8px"
      }),
      e(Tt)
    ]));
  }
}), Rt = { style: { display: "flex" } }, At = /* @__PURE__ */ x({
  __name: "StartBarGroup",
  setup(s) {
    return (l, o) => (g(), w("div", Rt, [
      e(t(kt)),
      e(t(L), {
        vertical: !0,
        height: 65,
        margin: "0px 8px"
      }),
      e(t(al)),
      e(t(L), {
        vertical: !0,
        height: 65,
        margin: "0px 8px"
      }),
      e(t(Ht)),
      e(t(L), {
        vertical: !0,
        height: 65,
        margin: "0px 8px"
      }),
      e(t(Zl)),
      e(t(L), {
        vertical: !0,
        height: 65,
        margin: "0px 8px"
      }),
      e(t(Il))
    ]));
  }
}), Ua = /* @__PURE__ */ H(At, [["__scopeId", "data-v-8e01ce59"]]), Bt = { style: { display: "flex", gap: "8px" } }, Oa = /* @__PURE__ */ x({
  __name: "InsertGroup",
  setup(s) {
    return (l, o) => (g(), w("div", Bt, [
      e(t(il)),
      e(t(L), {
        vertical: !0,
        height: 65,
        margin: "0px 8px"
      }),
      e(t(xl))
    ]));
  }
}), Mt = { style: { display: "flex", gap: "8px" } }, Wa = /* @__PURE__ */ x({
  __name: "LayoutGroup",
  setup(s) {
    return (l, o) => (g(), w("div", Mt, [
      e(t(Nl))
    ]));
  }
}), Pt = ["src", "alt"], Dt = /* @__PURE__ */ x({
  __name: "BulletListSmallIconWithArrow",
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
  setup(s) {
    const { locale: l, t: o, te: a } = j(), n = s, u = S(
      () => n.iconName ? { name: n.iconName } : {
        x: n.x,
        y: n.y,
        source: P.image,
        imageWidth: P.width
      }
    ), r = N(), d = f(!1), i = f("default"), p = V(G), m = S(() => r == null ? void 0 : r.getters["command/can"](n.cmd)), _ = [], v = f(_), h = S(() => {
      let R = {};
      return d.value ? (R = {
        backgroundColor: "var(--active-bg)"
      }, R) : (i.value === "hover" && (R = {
        backgroundColor: "var(--hover-bg)"
      }), R);
    }), z = (R) => l.value !== "zh-CN" ? R.name : R.name.trim().split(/\s+/).map((Y) => {
      const A = `toolbar.start.style.${Y}`;
      return a(A) ? o(A) : Y;
    }).join("") || R.name;
    function C(R) {
      return R.map((T, D) => ({
        id: String(T.id ?? D),
        name: String(T.name ?? ""),
        image: T.texture || ""
      })).filter((T) => T.name);
    }
    function M() {
      "" + n.cmd;
    }
    function O() {
      try {
        const D = "AaBbCc";
        let Y = M();
        Y === void 0 && (Y = p.api.getStyles(78, 27, D));
        const A = Array.isArray(Y) ? C(Y) : [];
        A.length && (v.value = A);
      } catch {
        v.value = _;
      }
    }
    function U(R) {
      d.value = R, R && O();
    }
    function F(R) {
      return {
        color: R.color || "var(--primary-text)",
        fontFamily: R.fontFamily,
        fontSize: `${Math.min(R.fontSize || 20, 28)}px`,
        fontWeight: R.fontWeight,
        fontStyle: R.fontStyle
      };
    }
    function k(R) {
      d.value = !1, p.run(n.cmd, { value: R });
    }
    function W(R) {
    }
    function $() {
    }
    return (R, T) => {
      const D = I("n-button"), Y = I("n-icon"), A = I("n-grid-item"), ne = I("n-grid"), Ae = I("n-space"), E = I("n-button-group"), te = I("n-config-provider");
      return g(), w("div", null, [
        e(te, null, {
          default: c(() => [
            e(t(he), null, {
              trigger: c(() => [
                e(E, {
                  onMouseup: T[2] || (T[2] = (J) => i.value = "hover"),
                  onMouseleave: T[3] || (T[3] = (J) => i.value = "default"),
                  onMouseenter: T[4] || (T[4] = (J) => i.value = "hover")
                }, {
                  default: c(() => [
                    e(D, {
                      class: "small-icon-btn",
                      disabled: !m.value
                    }, {
                      default: c(() => [
                        e(t(le), ke(u.value, {
                          size: 16,
                          onClick: $
                        }), null, 16)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    e(t(Se), {
                      trigger: "click",
                      placement: s.placement,
                      show: d.value,
                      "onUpdate:show": [
                        T[1] || (T[1] = (J) => d.value = J),
                        U
                      ],
                      "show-arrow": !1,
                      space: s.space
                    }, {
                      trigger: c(() => [
                        e(D, {
                          class: "small-icon-btn-arrow",
                          disabled: !m.value,
                          style: se(h.value)
                        }, {
                          icon: c(() => [
                            e(Y, { size: "12" }, {
                              default: c(() => [
                                ge(e(t(Me), null, null, 512), [
                                  [_e, d.value]
                                ]),
                                ge(e(t(pe), null, null, 512), [
                                  [_e, !d.value]
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["disabled", "style"])
                      ]),
                      default: c(() => [
                        y("div", null, [
                          e(ne, {
                            "x-gap": 12,
                            "y-gap": 8,
                            cols: 3
                          }, {
                            default: c(() => [
                              e(A, null, {
                                default: c(() => [
                                  e(t(he), null, {
                                    trigger: c(() => [
                                      y("div", {
                                        class: "list-item",
                                        onClick: T[0] || (T[0] = (J) => k(null))
                                      }, B(R.$t(`toolbar.start.${s.cmd}.none`)), 1)
                                    ]),
                                    default: c(() => [
                                      K(" " + B(R.$t(`toolbar.start.${s.cmd}.none`)), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              (g(!0), w(oe, null, de(v.value, (J) => (g(), q(A, {
                                key: J.id,
                                onClick: (Fe) => k(J.id)
                              }, {
                                default: c(() => [
                                  e(t(he), null, {
                                    trigger: c(() => [
                                      y("div", null, [
                                        J.image ? (g(), w("img", {
                                          key: 0,
                                          src: J.image,
                                          alt: J.name,
                                          class: "style-image"
                                        }, null, 8, Pt)) : (g(), w("span", {
                                          key: 1,
                                          class: "style-preview",
                                          style: se(F(J))
                                        }, null, 4))
                                      ])
                                    ]),
                                    default: c(() => [
                                      K(" " + B(z(J)), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["onClick"]))), 128))
                            ]),
                            _: 1
                          }),
                          s.customLabel ? (g(), q(t(L), {
                            key: 0,
                            horizontal: ""
                          })) : $e("", !0),
                          s.customLabel ? (g(), q(Ae, {
                            key: 1,
                            class: "custom-label",
                            onClick: W
                          }, {
                            default: c(() => [
                              K(B(s.customLabel), 1)
                            ]),
                            _: 1
                          })) : $e("", !0)
                        ])
                      ]),
                      _: 1
                    }, 8, ["placement", "show", "space"])
                  ]),
                  _: 1
                })
              ]),
              default: c(() => [
                K(" " + B(s.tooltip), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
}), Be = /* @__PURE__ */ H(Dt, [["__scopeId", "data-v-ff7b9516"]]), zt = /* @__PURE__ */ x({
  __name: "CommandDropdownPopoverSmallButton",
  props: {
    show: { type: Boolean },
    cmd: {},
    tooltip: {},
    iconName: {},
    x: {},
    y: {},
    dropdownOptions: {},
    showChecked: { type: Boolean }
  },
  emits: ["update:show"],
  setup(s, { emit: l }) {
    const o = N(), a = s, n = l, u = S(() => o == null ? void 0 : o.getters["command/can"](a.cmd)), r = V(G), d = f(!1);
    function i(_) {
      p(_);
    }
    function p(_) {
      const v = { value: _ };
      r.run(a.cmd, v);
    }
    function m(_) {
      n("update:show", _);
    }
    return (_, v) => (g(), w("div", null, [
      e(t(et), {
        show: s.show,
        options: s.dropdownOptions,
        disabled: !u.value,
        onSelect: i,
        "onUpdate:show": m,
        "show-checked": s.showChecked
      }, {
        option: c(({ item: h }) => [
          fe(_.$slots, "option", { item: h })
        ]),
        default: c(() => [
          y("span", null, [
            e(t(Ke), {
              "resource-image": t(P).image,
              disabled: !u.value,
              x: s.x,
              y: s.y,
              "image-width": t(P).width,
              tooltip: s.tooltip,
              "sub-showing": d.value,
              "icon-name": s.iconName
            }, null, 8, ["resource-image", "disabled", "x", "y", "image-width", "tooltip", "sub-showing", "icon-name"])
          ])
        ]),
        _: 3
      }, 8, ["show", "options", "disabled", "show-checked"])
    ]));
  }
}), Ut = /* @__PURE__ */ x({
  __name: "CommandAlignParaGroup",
  props: {
    cmd: {}
  },
  setup(s) {
    const l = N(), o = s, a = S(() => l == null ? void 0 : l.getters["command/can"](o.cmd)), n = S(() => l == null ? void 0 : l.getters["command/getVal"](o.cmd)), u = V(G);
    function r(v) {
      const h = { value: v };
      u.run(o.cmd, h);
    }
    const { t: d } = j(), i = f([
      { key: 1, label: "1.0", disabled: !1 },
      { key: 1.15, label: "1.15", disabled: !1 },
      { key: 1.5, label: "1.5", disabled: !1 },
      { key: 2, label: "2.0", disabled: !1 },
      { key: 2.5, label: "2.5", disabled: !1 },
      { key: 3, label: "3.0", disabled: !1 },
      {
        label: `${d("toolbar.start.lineSpacingOptions")}`,
        key: "paragraphSettingsPanel",
        disabled: !1
      }
    ]), p = f(!1), m = S(
      () => l == null ? void 0 : l.getters["command/getVal"](b.ParaSymbol)
    ), _ = S(() => {
      var v, h, z;
      return [
        {
          value: "ParagraphMarks",
          label: d("toolbar.start.paraSymbolParagraphMarks"),
          checked: ((v = m == null ? void 0 : m.value) == null ? void 0 : v.ParagraphMarks) || !1,
          multiCheck: !0
        },
        {
          value: "PageBreak",
          label: d("toolbar.start.paraSymbolPageBreak"),
          checked: ((h = m == null ? void 0 : m.value) == null ? void 0 : h.PageBreak) || !1,
          multiCheck: !0
        },
        {
          value: "SectionBreak",
          label: d("toolbar.start.paraSymbolSectionBreak"),
          checked: ((z = m == null ? void 0 : m.value) == null ? void 0 : z.SectionBreak) || !1,
          multiCheck: !0
        }
      ];
    });
    return (v, h) => {
      const z = I("n-ellipsis"), C = I("n-space");
      return g(), w("div", null, [
        e(C, { vertical: "" }, {
          default: c(() => [
            e(C, null, {
              default: c(() => [
                e(Be, {
                  cmd: t(b).Bullet,
                  "icon-name": "Ribbon_word_list_16__clip_cell",
                  tooltip: v.$t("toolbar.start.bullet.title"),
                  enabled: !1,
                  showArrow: !0
                }, null, 8, ["cmd", "tooltip"]),
                e(Be, {
                  cmd: t(b).Numbering,
                  x: -208,
                  y: -56,
                  tooltip: v.$t("toolbar.start.numbering.title"),
                  enabled: !1,
                  showArrow: !0
                }, null, 8, ["cmd", "tooltip"]),
                e(Be, {
                  cmd: t(b).MultilevelList,
                  x: -208,
                  y: -56,
                  tooltip: v.$t("toolbar.start.multilevelList.title"),
                  enabled: !1,
                  showArrow: !0
                }, null, 8, ["cmd", "tooltip"]),
                e(X, {
                  cmd: t(b).DecreaseIndent,
                  "icon-name": "Ribbon_word_Decrease_Indent_16__clip_cell",
                  tooltip: v.$t("toolbar.start.decreaseIndent"),
                  class: "global-small-icon-button"
                }, null, 8, ["cmd", "tooltip"]),
                e(X, {
                  cmd: t(b).IncreaseIndent,
                  "icon-name": "Ribbon_word_Increase_Indent_16__clip_cell",
                  tooltip: v.$t("toolbar.start.increaseIndent"),
                  class: "global-small-icon-button"
                }, null, 8, ["cmd", "tooltip"]),
                e(zt, {
                  show: p.value,
                  "onUpdate:show": h[0] || (h[0] = (M) => p.value = M),
                  cmd: t(b).ParaSymbol,
                  "icon-name": "Ribbon_word_paragraph_mark_16__clip_cell",
                  tooltip: v.$t("toolbar.start.paraSymbol"),
                  dropdownOptions: _.value,
                  "show-checked": !0,
                  class: "global-small-icon-dropdown-button"
                }, {
                  option: c(({ item: M }) => [
                    e(z, { style: { "max-width": "200px" } }, {
                      default: c(() => [
                        K(B(M.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                }, 8, ["show", "cmd", "tooltip", "dropdownOptions"])
              ]),
              _: 1
            }),
            e(C, null, {
              default: c(() => [
                e(t(Z), {
                  active: n.value === "left",
                  disabled: !a.value,
                  onClick: h[1] || (h[1] = (M) => r("left")),
                  "icon-name": "Ribbon_word_align_left_16__clip_cell",
                  tooltip: v.$t("toolbar.start.horizontalAlignLeft"),
                  class: "global-small-icon-button"
                }, null, 8, ["active", "disabled", "tooltip"]),
                e(t(Z), {
                  active: n.value === "center",
                  disabled: !a.value,
                  onClick: h[2] || (h[2] = (M) => r("center")),
                  "icon-name": "Ribbon_word_center_16__clip_cell",
                  tooltip: v.$t("toolbar.start.horizontalAlignCenter"),
                  class: "global-small-icon-button"
                }, null, 8, ["active", "disabled", "tooltip"]),
                e(t(Z), {
                  active: n.value === "right",
                  disabled: !a.value,
                  onClick: h[3] || (h[3] = (M) => r("right")),
                  "icon-name": "Ribbon_word_align_right_16__clip_cell",
                  tooltip: v.$t("toolbar.start.horizontalAlignRight"),
                  class: "global-small-icon-button"
                }, null, 8, ["active", "disabled", "tooltip"]),
                e(t(Z), {
                  active: n.value === "justify",
                  disabled: !a.value,
                  onClick: h[4] || (h[4] = (M) => r("justify")),
                  "icon-name": "Ribbon_word_justify_16__clip_cell",
                  tooltip: v.$t("toolbar.start.horizontalAlignJustify"),
                  class: "global-small-icon-button"
                }, null, 8, ["active", "disabled", "tooltip"]),
                e(t(Z), {
                  active: n.value === "distribute",
                  disabled: !a.value,
                  onClick: h[5] || (h[5] = (M) => r("distribute")),
                  "icon-name": "Ribbon_word_distributed_16__clip_cell",
                  tooltip: v.$t("toolbar.start.horizontalAlignDistribute"),
                  class: "global-small-icon-button"
                }, null, 8, ["active", "disabled", "tooltip"]),
                e(ae, {
                  cmd: t(b).LineSpace,
                  "icon-name": "Ribbon_word_line_spacing_16__clip_cell",
                  isActiveOption: !0,
                  tooltip: v.$t("toolbar.start.lineSpace"),
                  menuItems: i.value,
                  isActive: !0
                }, null, 8, ["cmd", "tooltip", "menuItems"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
}), Ot = /* @__PURE__ */ H(Ut, [["__scopeId", "data-v-9d0e0ddc"]]), Wt = { style: { display: "flex", height: "100%" } }, Ft = { class: "setting-group" }, Nt = /* @__PURE__ */ x({
  __name: "SettingGroup",
  props: {
    command: {},
    disabled: {},
    tooltip: {}
  },
  setup(s) {
    N();
    const l = s, o = V(G);
    function a() {
      const n = {};
      o.run(l.command, n);
    }
    return (n, u) => {
      const r = I("n-button");
      return g(), w("div", Wt, [
        fe(n.$slots, "default", {}, void 0, !0),
        y("div", Ft, [
          e(t(he), null, {
            trigger: c(() => [
              e(r, {
                class: "setting-group-icon",
                disabled: s.disabled,
                onClick: a,
                style: { border: "none", padding: "0", outline: "none", height: "auto" }
              }, {
                default: c(() => [
                  e(t(le), {
                    x: 0,
                    y: -90,
                    size: 8,
                    source: t(P).image,
                    imageWidth: t(P).width
                  }, null, 8, ["source", "imageWidth"])
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            default: c(() => [
              K(" " + B(s.tooltip), 1)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), tt = /* @__PURE__ */ H(Nt, [["__scopeId", "data-v-b08c8d6f"]]), Gt = { class: "toolbar-group" }, Vt = /* @__PURE__ */ x({
  __name: "ParaStyleGroup",
  setup(s) {
    var d, i;
    V(G);
    const l = N(), { t: o } = j(), a = S(() => l == null ? void 0 : l.getters["command/enabledList"](b.ParagraphBorder)), n = {
      bottom: {
        label: `${o("toolbar.start.border.type.bottom")}`,
        key: "bottom",
        disabled: !1,
        icon: Q(-768, -56),
        noTrigger: !1
      },
      top: {
        label: `${o("toolbar.start.border.type.top")}`,
        key: "top",
        disabled: !1,
        icon: Q(-752, -56),
        noTrigger: !1
      },
      left: {
        label: `${o("toolbar.start.border.type.left")}`,
        key: "left",
        disabled: !1,
        icon: Q(-800, -56),
        noTrigger: !1
      },
      right: {
        label: `${o("toolbar.start.border.type.right")}`,
        key: "right",
        disabled: !1,
        icon: Q(-784, -56),
        noTrigger: !1
      },
      divider1: {
        type: "divider",
        key: "divider1"
      },
      none: {
        label: `${o("toolbar.start.border.type.no")}`,
        key: "none",
        disabled: !1,
        icon: Q(-720, -56),
        noTrigger: !1
      },
      all: {
        label: `${o("toolbar.start.border.type.all")}`,
        key: "all",
        disabled: !1,
        icon: Q(-656, -56),
        noTrigger: !1
      },
      outer: {
        label: `${o("toolbar.start.border.type.outside")}`,
        key: "outer",
        disabled: !1,
        icon: Q(-672, -56),
        noTrigger: !1
      },
      inner: {
        label: `${o("toolbar.start.border.type.inside")}`,
        key: "inner",
        disabled: !1,
        icon: Q(-640, -56),
        noTrigger: !1
      },
      divider2: {
        type: "divider",
        key: "divider2"
      },
      horizontalInner: {
        label: `${o("toolbar.start.border.type.insideHorizontal")}`,
        key: "horizontalInner",
        disabled: !1,
        icon: Q(-736, -56),
        noTrigger: !1
      },
      verticalInner: {
        label: `${o("toolbar.start.border.type.insideVertical")}`,
        key: "verticalInner",
        disabled: !1,
        icon: Q(-816, -56),
        noTrigger: !1
      },
      diagonalDown: {
        label: `${o("toolbar.start.border.type.diagonalDown")}`,
        key: "diagonalDown",
        disabled: !((d = a.value) != null && d.diagonalDown),
        icon: Q(-704, -56),
        noTrigger: !1
      },
      diagonalUp: {
        label: `${o("toolbar.start.border.type.diagonalUp")}`,
        key: "diagonalUp",
        disabled: !((i = a.value) != null && i.diagonalUp),
        icon: Q(-688, -56),
        noTrigger: !1
      }
    }, u = f(Object.values(n));
    re(a, (p) => {
      for (let m in p) {
        let _ = m;
        r(n[_]) && (n[_].disabled = !p[m]);
      }
      u.value = Object.values(n);
    }, { immediate: !0 });
    function r(p) {
      return p.disabled !== void 0;
    }
    return (p, m) => {
      const _ = I("n-space");
      return g(), w("div", Gt, [
        e(tt, {
          command: t(b).OpenParagraphSettingsPanel,
          disabled: !1,
          tooltip: p.$t("panels.paragraphSettings.title")
        }, {
          default: c(() => [
            e(_, { align: "center" }, {
              default: c(() => [
                e(Ot, {
                  cmd: t(b).ParaAlignHorizontal
                }, null, 8, ["cmd"]),
                e(_, { vertical: "" }, {
                  default: c(() => [
                    e(Ue, {
                      cmd: t(b).ParagraphShading,
                      "icon-name": "Ribbon_excle_no_fill_color_16__clip_cell",
                      tooltip: p.$t("toolbar.start.paragraphShading"),
                      "show-fill": !0,
                      class: "global-small-icon-dropdown-button"
                    }, null, 8, ["cmd", "tooltip"]),
                    e(ae, {
                      cmd: t(b).ParagraphBorder,
                      "icon-name": "Ribbon_word_line_border_16__clip_cell",
                      tooltip: p.$t("toolbar.start.border.title"),
                      menuItems: u.value
                    }, null, 8, ["cmd", "tooltip", "menuItems"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["command", "tooltip"])
      ]);
    };
  }
}), Ht = /* @__PURE__ */ H(Vt, [["__scopeId", "data-v-98e7b67c"]]), Lt = { class: "trigger-wrapper" }, jt = /* @__PURE__ */ x({
  __name: "CommandSmallIconPopoverButton",
  props: {
    cmd: {},
    tooltip: {},
    iconName: {},
    x: {},
    y: {}
  },
  emits: ["close", "open", "clickoutside"],
  setup(s, { emit: l }) {
    const o = N(), a = s, n = S(() => o == null ? void 0 : o.getters["command/can"](a.cmd)), u = V(G), r = f(!1), d = f(!1), i = l;
    re(r, (v) => {
      d.value = v, i(v ? "open" : "close", m);
    });
    function p() {
      i("clickoutside", _);
    }
    function m(v) {
      const h = { value: v };
      u.run(a.cmd, h);
    }
    function _() {
      r.value = !1;
    }
    return (v, h) => (g(), w("div", null, [
      e(t(Se), {
        trigger: "manual",
        show: r.value,
        "onUpdate:show": h[1] || (h[1] = (z) => r.value = z),
        onClickoutside: p
      }, {
        trigger: c(() => [
          y("div", Lt, [
            e(t(Ke), {
              "resource-image": t(P).image,
              disabled: !n.value,
              x: s.x,
              y: s.y,
              "image-width": t(P).width,
              tooltip: s.tooltip,
              "sub-showing": d.value,
              "icon-name": s.iconName,
              onClick: h[0] || (h[0] = (z) => r.value = !r.value)
            }, null, 8, ["resource-image", "disabled", "x", "y", "image-width", "tooltip", "sub-showing", "icon-name"])
          ])
        ]),
        default: c(() => [
          fe(v.$slots, "popover", {
            runCommand: m,
            close: _
          }, void 0, !0)
        ]),
        _: 3
      }, 8, ["show"])
    ]));
  }
}), Et = /* @__PURE__ */ H(jt, [["__scopeId", "data-v-a630c5bb"]]), Kt = { class: "menu-item" }, Yt = { class: "menu-item-label" }, Xt = /* @__PURE__ */ x({
  __name: "CommandColorPaletteMenuText",
  props: {
    cmd: {},
    text: {},
    val: {},
    space: {},
    iconName: {},
    x: {},
    y: {}
  },
  emits: ["select", "show"],
  setup(s, { emit: l }) {
    const o = N(), { standardColors: a, themeColors: n, ensureLoaded: u } = Ye(), r = s;
    r.cmd ? S(() => o == null ? void 0 : o.getters["command/can"](r.cmd)) : f(!0);
    const d = r.cmd ? S(() => o == null ? void 0 : o.getters["command/getVal"](r.cmd)) : S(() => r.defaultColor || ""), i = S(() => pt(d.value)), p = S(() => o == null ? void 0 : o.getters["file/recentColors"](r.cmd)), m = S(
      () => bt(d.value) ?? void 0
    ), _ = f(r.val), v = l;
    function h(C) {
      typeof C != "string" && C.hex ? _.value = vt(C.hex) : _.value = C, v("select", C);
    }
    function z(C) {
      v("show", C), C && u();
    }
    return (C, M) => {
      const O = I("n-icon");
      return g(), q(t(Xe), {
        val: i.value,
        "standard-colors": t(a),
        "theme-colors": t(n),
        "recent-colors": p.value,
        placement: "right",
        onSelect: h,
        onShow: z,
        "selected-color-pos": m.value
      }, {
        default: c(() => [
          y("div", Kt, [
            y("span", Yt, B(s.text), 1),
            e(O, { size: "12" }, {
              default: c(() => [
                e(t(Oe))
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["val", "standard-colors", "theme-colors", "recent-colors", "selected-color-pos"]);
    };
  }
}), qt = /* @__PURE__ */ H(Xt, [["__scopeId", "data-v-b990b68f"]]), Jt = ["onClick"], Qt = {
  key: 0,
  class: "border-style-sample"
}, Zt = { key: 1 }, el = ["onClick"], tl = /* @__PURE__ */ x({
  __name: "UnderlineDropdownMenu",
  setup(s) {
    const l = V(G), { t: o } = j(), a = N(), n = f(!1), u = S(() => a == null ? void 0 : a.getters["command/getVal"](b.Underline)), r = [
      {
        label: o("panels.fontSettings.alltext.underlineType.single"),
        value: "single",
        imgX: -160,
        imgY: -193
      },
      {
        label: o("panels.fontSettings.alltext.underlineType.double"),
        value: "double",
        imgX: -3040,
        imgY: -193
      },
      {
        label: o("panels.fontSettings.alltext.underlineType.heavy"),
        value: "thick",
        imgX: 0,
        imgY: -193
      },
      {
        label: o("panels.fontSettings.alltext.underlineType.dotted"),
        value: "dotted",
        imgX: -480,
        imgY: -193
      },
      {
        label: o("panels.fontSettings.alltext.underlineType.dash"),
        value: "dash",
        imgX: -800,
        imgY: -193
      },
      {
        label: o("panels.fontSettings.alltext.underlineType.dotDash"),
        value: "dotDash",
        imgX: -2080,
        imgY: -193
      },
      {
        label: o("panels.fontSettings.alltext.underlineType.dotdotDash"),
        value: "dotDotDash",
        imgX: -2400,
        imgY: -193
      },
      {
        label: o("panels.fontSettings.alltext.underlineType.wavy"),
        value: "wave",
        imgX: -1600,
        imgY: -193
      },
      {
        label: o("panels.fontSettings.alltext.none"),
        value: "none"
      }
    ], d = S(() => {
      for (var C = 0; C < r.length - 1; C++)
        if (u.value === r[C].value)
          return !0;
      return !1;
    });
    function i(C) {
      "" + n.value, n.value === !1 && C && C(), setTimeout(() => {
        C && C();
      }, 200);
    }
    function p() {
      "" + u.value;
    }
    function m(C, M, O) {
      "" + C.value, l.api.setUnderline(C.value), O && O();
    }
    function _(C) {
      a.commit("panel/openPanel", ve.FontSettings), C && C();
    }
    function v(C) {
      l.api.setUnderlineColor(C);
    }
    function h(C) {
      setTimeout(() => {
        n.value = C;
      }, 200);
    }
    function z(C, M) {
      return {
        backgroundRepeat: "no-repeat",
        display: "inline-block",
        backgroundImage: `url("${P.image}")`,
        backgroundPosition: `${C * 2}px ${M * 2}px`,
        backgroundSize: `${P.width}px auto`,
        transform: "scale(1, 0.5)",
        transformOrigin: "top left",
        width: "160px",
        height: "8px"
      };
    }
    return (C, M) => (g(), q(Et, {
      cmd: t(b).Underline,
      class: ie(["btn", ["btn", { selected: d.value }]]),
      "icon-name": "Ribbon_word_underline_16__clip_cell",
      tooltip: C.$t("toolbar.start.underline.title"),
      onOpen: p,
      onClickoutside: i
    }, {
      popover: c(({ runCommand: O, close: U }) => [
        (g(), w(oe, null, de(r, (F) => y("div", {
          key: F.value,
          class: ie(["global-menu-list-item menu-text", { active: F.value === u.value }]),
          onClick: (k) => m(F, O, U)
        }, [
          F.imgY ? (g(), w("div", Qt, [
            y("span", {
              style: se(z(F.imgX, F.imgY))
            }, null, 4)
          ])) : (g(), w("span", Zt, B(F.label), 1))
        ], 10, Jt)), 64)),
        e(t(L), { margin: "8px 0" }),
        y("div", {
          onClick: (F) => _(U),
          class: "global-menu-list-item menu-text"
        }, [
          y("span", null, B(C.$t("toolbar.start.underline.moreUnderlines")), 1)
        ], 8, el),
        e(qt, {
          text: C.$t("panels.fontSettings.alltext.underlineColor"),
          onSelect: v,
          cmd: t(b).UnderlineColor,
          onShow: h,
          class: "global-menu-list-item menu-text",
          space: 23,
          "icon-name": "Ribbon_excle_no_fill_color_16__clip_cell"
        }, null, 8, ["text", "cmd"])
      ]),
      _: 1
    }, 8, ["cmd", "class", "tooltip"]));
  }
}), lt = /* @__PURE__ */ H(tl, [["__scopeId", "data-v-0aceb01b"]]), ll = { class: "toolbar-group" }, ol = /* @__PURE__ */ x({
  __name: "TextStyleGroup",
  setup(s) {
    const l = f([]), o = qe("docx", He);
    V(G);
    const { t: a } = j(), n = f([
      {
        label: `${a("toolbar.start.changeCase.Sentence")}`,
        key: "sentenceCase",
        disabled: !1
      },
      {
        label: `${a("toolbar.start.changeCase.Lowercase")}`,
        key: "lowercase",
        disabled: !1
      },
      {
        label: `${a("toolbar.start.changeCase.Uppercase")}`,
        key: "uppercase",
        disabled: !1
      },
      {
        label: `${a("toolbar.start.changeCase.CapitalizeEachWord")}`,
        key: "capitalizeEachWord",
        disabled: !1
      },
      {
        label: `${a("toolbar.start.changeCase.Toggle")}`,
        key: "toggleCase",
        disabled: !1
      },
      {
        label: `${a("toolbar.start.changeCase.HalfWidth")}`,
        key: "halfWidth",
        disabled: !1
      },
      {
        label: `${a("toolbar.start.changeCase.FullWidth")}`,
        key: "fullWidth",
        disabled: !1
      }
    ]);
    async function u() {
      (ce == null || ce.length == 0) && await Qe(), ce && ce.length !== l.value.length && (l.value = ce.map(({ fullName: r }) => ({
        label: r,
        value: r
      })));
    }
    return (r, d) => {
      const i = I("n-space");
      return g(), w("div", ll, [
        e(tt, {
          command: t(b).OpenFontSettingsPanel,
          tooltip: r.$t("panels.fontSettings.title")
        }, {
          default: c(() => [
            e(i, { vertical: "" }, {
              default: c(() => [
                e(i, null, {
                  default: c(() => [
                    y("span", { onClick: u }, [
                      e(Te, {
                        cmd: t(b).FontName,
                        options: l.value,
                        width: 140,
                        type: "font"
                      }, null, 8, ["cmd", "options"])
                    ]),
                    e(Te, {
                      cmd: t(b).FontSize,
                      options: t(o),
                      width: 70,
                      menuWidth: 40,
                      "validate-input": t(Je)
                    }, null, 8, ["cmd", "options", "validate-input"]),
                    e(X, {
                      cmd: t(b).IncreaseFontSize,
                      "icon-name": "Ribbon_word_text_add_16__clip_cell",
                      tooltip: r.$t("toolbar.start.increaseFontSize"),
                      class: "global-small-icon-button"
                    }, null, 8, ["cmd", "tooltip"]),
                    e(X, {
                      cmd: t(b).DecreaseFontSize,
                      "icon-name": "Ribbon_word_text_jian_16__clip_cell",
                      tooltip: r.$t("toolbar.start.decreaseFontSize"),
                      class: "global-small-icon-button"
                    }, null, 8, ["cmd", "tooltip"]),
                    e(ae, {
                      cmd: t(b).ChangeCase,
                      "icon-name": "Ribbon_word_text_a_16__clip_cell",
                      isActiveOption: !0,
                      tooltip: r.$t("toolbar.start.changeCase.title"),
                      menuItems: n.value,
                      isActive: !0
                    }, null, 8, ["cmd", "tooltip", "menuItems"]),
                    e(X, {
                      cmd: t(b).ClearFormatting,
                      "icon-name": "Ribbon_word_clear_16__clip_cell",
                      tooltip: r.$t("toolbar.start.clearFormatting"),
                      class: "global-small-icon-button"
                    }, null, 8, ["cmd", "tooltip"]),
                    e(X, {
                      cmd: t(b).CharacterBorder,
                      "icon-name": "Ribbon_word_border_16__clip_cell",
                      tooltip: r.$t("toolbar.start.characterBorder"),
                      class: "global-small-icon-button"
                    }, null, 8, ["cmd", "tooltip"])
                  ]),
                  _: 1
                }),
                e(i, null, {
                  default: c(() => [
                    e(X, {
                      cmd: t(b).Bold,
                      "icon-name": "Ribbon_word_bold_16__clip_cell",
                      tooltip: r.$t("toolbar.start.bold"),
                      class: "global-small-icon-button"
                    }, null, 8, ["cmd", "tooltip"]),
                    e(X, {
                      cmd: t(b).Italic,
                      "icon-name": "Ribbon_word_Italic_16__clip_cell",
                      tooltip: r.$t("toolbar.start.italic"),
                      class: "global-small-icon-button"
                    }, null, 8, ["cmd", "tooltip"]),
                    e(lt),
                    e(X, {
                      cmd: t(b).StrikeThrough,
                      "icon-name": "Ribbon_word_strikethrough_16__clip_cell",
                      tooltip: r.$t("toolbar.start.strikeThrough"),
                      class: "global-small-icon-button"
                    }, null, 8, ["cmd", "tooltip"]),
                    e(X, {
                      cmd: t(b).Superscript,
                      "icon-name": "Ribbon_word_up2_16__clip_cell",
                      tooltip: r.$t("toolbar.start.superscript"),
                      class: "global-small-icon-button"
                    }, null, 8, ["cmd", "tooltip"]),
                    e(X, {
                      cmd: t(b).Subscript,
                      "icon-name": "Ribbon_word_down2_16__clip_cell",
                      tooltip: r.$t("toolbar.start.subscript"),
                      class: "global-small-icon-button"
                    }, null, 8, ["cmd", "tooltip"]),
                    e(Ve, {
                      cmd: t(b).TextHighlight,
                      "icon-name": "Ribbon_word_fill_color_16__clip_cell",
                      tooltip: r.$t("toolbar.start.textHighlight.title"),
                      "show-fill": !0,
                      class: "global-small-icon-dropdown-button"
                    }, null, 8, ["cmd", "tooltip"]),
                    e(Ue, {
                      cmd: t(b).FontColor,
                      "show-auto": !0,
                      "icon-name": "Ribbon_word_text_color_16__clip_cell",
                      tooltip: r.$t("toolbar.start.fontClolor"),
                      class: "global-small-icon-dropdown-button"
                    }, null, 8, ["cmd", "tooltip"]),
                    e(X, {
                      cmd: t(b).CharacterShading,
                      "icon-name": "Ribbon_word_Character_Shading_16__clip_cell",
                      tooltip: r.$t("toolbar.start.characterShading"),
                      class: "global-small-icon-button"
                    }, null, 8, ["cmd", "tooltip"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["command", "tooltip"])
      ]);
    };
  }
}), al = /* @__PURE__ */ H(ol, [["__scopeId", "data-v-4bd807c7"]]), We = /* @__PURE__ */ x({
  __name: "CommandBigIconDropDownButton",
  props: /* @__PURE__ */ De({
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
  setup(s) {
    const l = N(), o = Ze(s, "modelValue"), a = s, n = S(() => l == null ? void 0 : l.getters["command/can"](a.cmd)), u = S(() => l == null ? void 0 : l.getters["command/active"](a.cmd)), r = S(() => l == null ? void 0 : l.getters["command/getVal"](a.cmd)), d = S(() => a.isActiveOption ? Le(a.dropdownOptions, r, a.isActiveOption) : ({ node: v, option: h }) => v), i = V(G), p = je(S(() => a.dropdownOptions), o, r);
    function m(v) {
      _(v);
    }
    re(() => o.value, (v) => {
      !a.isActiveOption || !a.getValueCommand || v && i.run(a.getValueCommand, { value: void 0 });
    });
    function _(v) {
      const h = { value: v };
      a.commandHandler ? a.commandHandler(h, a.cmd) : i.run(a.cmd, h);
    }
    return (v, h) => (g(), w("div", null, [
      e(t(Pe), {
        trigger: "click",
        placement: "bottom-start",
        options: t(p),
        onSelect: m,
        show: o.value,
        "render-option": d.value,
        "onUpdate:show": h[0] || (h[0] = (z) => o.value = z)
      }, {
        default: c(() => [
          y("span", null, [
            e(t(Re), {
              label: s.label,
              "resource-image": t(P).image,
              disabled: !n.value,
              active: u.value,
              showArrow: !0,
              x: s.x,
              y: s.y,
              "image-width": t(P).width,
              show: o.value,
              "icon-name": s.iconName
            }, null, 8, ["label", "resource-image", "disabled", "active", "x", "y", "image-width", "show", "icon-name"])
          ])
        ]),
        _: 1
      }, 8, ["options", "show", "render-option"])
    ]));
  }
}), nl = { style: { display: "flex", gap: "8px" } }, il = /* @__PURE__ */ x({
  __name: "InsertSeparatorGroup",
  setup(s) {
    return (l, o) => (g(), w("div", nl, [
      e(We, {
        cmd: t(b).InsertSeparator,
        label: l.$t("toolbar.insert.separator"),
        "icon-name": "Ribbon_Word_insert_page_break_24__clip_cell",
        "dropdown-options": [
          { key: "pageSeparator", label: l.$t("toolbar.insert.insertPageSeparator") },
          {
            key: "sectionSeparator",
            label: l.$t("toolbar.insert.insertSectionSeparator"),
            children: [
              {
                label: l.$t("toolbar.insert.nextPage"),
                key: "nextPage"
              },
              {
                label: l.$t("toolbar.insert.continuousPage"),
                key: "continuousPage"
              },
              {
                label: l.$t("toolbar.insert.evenPage"),
                key: "evenPage"
              },
              {
                label: l.$t("toolbar.insert.oddPage"),
                key: "oddPage"
              }
            ]
          }
        ]
      }, null, 8, ["cmd", "label", "dropdown-options"])
    ]));
  }
}), sl = { class: "trigger-wrapper" }, rl = /* @__PURE__ */ x({
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
  setup(s, { emit: l }) {
    const o = N(), a = s, n = S(() => o == null ? void 0 : o.getters["command/can"](a.cmd)), u = S(() => o == null ? void 0 : o.getters["command/active"](a.cmd)), r = V(G), d = l;
    function i(m) {
      const _ = { value: m };
      r.run(a.cmd, _);
    }
    function p(m) {
      d("update:show", m);
    }
    return (m, _) => (g(), w("div", null, [
      e(t(Se), {
        show: s.show,
        trigger: "click",
        placement: s.placement,
        "onUpdate:show": p
      }, {
        trigger: c(() => [
          y("div", sl, [
            e(t(Re), {
              label: s.label,
              "resource-image": t(P).image,
              disabled: !n.value,
              active: u.value,
              showArrow: !0,
              x: s.x,
              y: s.y,
              "image-width": t(P).width,
              "icon-name": s.iconName
            }, null, 8, ["label", "resource-image", "disabled", "active", "x", "y", "image-width", "icon-name"])
          ])
        ]),
        default: c(() => [
          fe(m.$slots, "popover", { runCommand: i }, void 0, !0)
        ]),
        _: 3
      }, 8, ["show", "placement"])
    ]));
  }
}), cl = /* @__PURE__ */ H(rl, [["__scopeId", "data-v-b8cf0051"]]), dl = { class: "custom-panel" }, ul = { class: "custom-row" }, ml = { class: "global-basic-display-text text" }, pl = { class: "custom-row" }, bl = { class: "global-basic-display-text text" }, vl = /* @__PURE__ */ x({
  __name: "InsertTableDialog",
  setup(s, { expose: l }) {
    const o = f(!1), a = f(!1), n = f(""), u = f(1), r = f(32767), d = f(!1), i = f(""), p = f(1), m = f(63), _ = f(0), v = f(0);
    let h = null;
    function z(k) {
      M(k, u.value, r.value) ? (a.value = !1, n.value = "") : (a.value = !0, n.value = "error");
    }
    function C(k) {
      M(k, p.value, m.value) ? (d.value = !1, i.value = "") : (d.value = !0, i.value = "error");
    }
    function M(k, W, $) {
      const R = Number(k);
      return k === "" || !isNaN(R) && R >= W && R <= $;
    }
    function O(k, W) {
      k && (_.value = k.row, v.value = k.column), a.value = !1, n.value = "", d.value = !1, i.value = "", h = W, o.value = !0;
    }
    function U() {
      _.value < u.value || _.value > r.value || v.value < p.value || v.value > m.value || (h && h({
        rows: _.value,
        cols: v.value
      }), o.value = !1);
    }
    function F() {
      o.value = !1;
    }
    return l({
      openPopover: O
    }), (k, W) => (g(), w("div", null, [
      e(t(xe), {
        show: o.value,
        "onUpdate:show": W[2] || (W[2] = ($) => o.value = $),
        title: k.$t("dialogs.insertTable.title"),
        width: 240
      }, {
        action: c(() => [
          e(t(ue), {
            label: k.$t("common.cancel"),
            onClickButton: F,
            type: "standard"
          }, null, 8, ["label"]),
          e(t(ue), {
            label: k.$t("common.confirm"),
            onClickButton: U
          }, null, 8, ["label"])
        ]),
        default: c(() => [
          y("div", dl, [
            y("div", ul, [
              y("span", ml, B(k.$t("dialogs.insertTable.row")), 1),
              e(t(we), {
                "validation-status": n.value,
                feedback: a.value ? k.$t("dialogs.insertTable.rowErrorMessage") : ""
              }, {
                default: c(() => [
                  e(t(ye), {
                    value: _.value,
                    "onUpdate:value": W[0] || (W[0] = ($) => _.value = $),
                    class: "custom-input-num",
                    "show-step-button": !0,
                    precision: 0,
                    min: u.value,
                    max: r.value,
                    onKeydown: be(U, ["enter"]),
                    onInput: z
                  }, null, 8, ["value", "min", "max"])
                ]),
                _: 1
              }, 8, ["validation-status", "feedback"])
            ]),
            y("div", pl, [
              y("span", bl, B(k.$t("dialogs.insertTable.column")), 1),
              e(t(we), {
                "validation-status": i.value,
                feedback: d.value ? k.$t("dialogs.insertTable.columnErrorMessage") : ""
              }, {
                default: c(() => [
                  e(t(ye), {
                    value: v.value,
                    "onUpdate:value": W[1] || (W[1] = ($) => v.value = $),
                    class: "custom-input-num",
                    "show-step-button": !0,
                    precision: 0,
                    min: p.value,
                    max: m.value,
                    onKeydown: be(U, ["enter"]),
                    onInput: C
                  }, null, 8, ["value", "min", "max"])
                ]),
                _: 1
              }, 8, ["validation-status", "feedback"])
            ])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}), gl = /* @__PURE__ */ H(vl, [["__scopeId", "data-v-648bce50"]]), _l = { style: { display: "flex", gap: "8px" } }, hl = { class: "insert-table-popover" }, fl = { class: "global-basic-display-text grid-label" }, wl = { key: 0 }, yl = { key: 1 }, Cl = ["onMouseenter", "onClick"], kl = 10, $l = 10, Sl = /* @__PURE__ */ x({
  __name: "InsertTableButton",
  setup(s) {
    const l = f(!1), o = f(null), a = f(0), n = f(0);
    function u(d) {
      var i;
      l.value = !1, (i = o == null ? void 0 : o.value) == null || i.openPopover(
        {
          row: 3,
          column: 4
        },
        (p) => {
          d(p);
        }
      );
    }
    function r() {
      a.value = 0, n.value = 0;
    }
    return (d, i) => {
      const p = I("n-icon"), m = I("n-button");
      return g(), w("div", _l, [
        e(cl, {
          cmd: t(b).InsertTable,
          label: d.$t("toolbar.insert.table"),
          x: -216,
          y: -30,
          show: l.value,
          "onUpdate:show": i[0] || (i[0] = (_) => l.value = _)
        }, {
          popover: c(({ runCommand: _ }) => [
            y("div", hl, [
              y("div", fl, [
                a.value + n.value != 0 ? (g(), w("span", wl, B(a.value + d.$t("toolbar.insert.row")) + " * " + B(n.value + d.$t("toolbar.insert.column")), 1)) : (g(), w("span", yl, B(d.$t("toolbar.insert.insertTable")), 1))
              ]),
              y("div", {
                class: "table-grid",
                onMouseleave: r
              }, [
                (g(), w(oe, null, de(kl, (v) => y("div", {
                  key: "row-" + v,
                  class: "grid-row"
                }, [
                  (g(), w(oe, null, de($l, (h) => y("div", {
                    key: "col-" + h,
                    class: ie(["grid-cell", { selected: v <= a.value && h <= n.value }]),
                    onMouseenter: (z) => {
                      a.value = v, n.value = h;
                    },
                    onClick: () => {
                      _({ rows: v, cols: h }), l.value = !1;
                    }
                  }, null, 42, Cl)), 64))
                ])), 64))
              ], 32),
              e(m, {
                text: "",
                onClick: (v) => u(_),
                class: "global-basic-display-text action-text more-button",
                "icon-placement": "right",
                color: "#131313"
              }, {
                icon: c(() => [
                  e(p, { size: "12" }, {
                    default: c(() => [
                      e(t(Oe))
                    ]),
                    _: 1
                  })
                ]),
                default: c(() => [
                  K(" " + B(d.$t("toolbar.insert.moreRowColumn")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ]),
          _: 1
        }, 8, ["cmd", "label", "show"]),
        e(gl, {
          ref_key: "InsertTableDialogRef",
          ref: o
        }, null, 512)
      ]);
    };
  }
}), xl = /* @__PURE__ */ H(Sl, [["__scopeId", "data-v-4816f8d5"]]), Tl = { style: { display: "flex", gap: "8px" } }, Il = /* @__PURE__ */ x({
  __name: "SearchWordButton",
  setup(s) {
    return (l, o) => (g(), w("div", Tl, [
      e(ee, {
        cmd: t(b).SearchReplaceWord,
        label: l.$t("toolbar.start.search"),
        x: -120,
        y: -30
      }, null, 8, ["cmd", "label"])
    ]));
  }
}), Rl = { class: "custom-panel" }, Al = { class: "custom-row" }, Bl = { class: "global-basic-display-text text" }, Ml = { class: "custom-row" }, Pl = { class: "global-basic-display-text text" }, Dl = /* @__PURE__ */ x({
  __name: "PaperSizeSettingDialog",
  setup(s, { expose: l }) {
    const o = f(!1), a = f(!1), n = f(""), u = f(!1), r = f(""), d = f(0.26), i = f(55.87), p = f(0), m = f(0);
    let _ = null;
    function v(U) {
      z(U, d.value, i.value) ? (a.value = !1, n.value = "") : (a.value = !0, n.value = "error");
    }
    function h(U) {
      z(U, d.value, i.value) ? (u.value = !1, r.value = "") : (u.value = !0, r.value = "error");
    }
    function z(U, F, k) {
      const W = Number(U);
      return U === "" || !isNaN(W) && W >= F && W <= k;
    }
    function C(U, F) {
      U && (p.value = U.width, m.value = U.height), a.value = !1, n.value = "", u.value = !1, r.value = "", _ = F, o.value = !0;
    }
    function M() {
      p.value < d.value || p.value > i.value || m.value < d.value || m.value > i.value || (_ && _({
        width: p.value,
        height: m.value
      }), o.value = !1);
    }
    function O() {
      o.value = !1;
    }
    return l({
      openPopover: C
    }), (U, F) => (g(), w("div", null, [
      e(t(xe), {
        show: o.value,
        "onUpdate:show": F[2] || (F[2] = (k) => o.value = k),
        title: U.$t("dialogs.paperSizeSet.title"),
        width: 260
      }, {
        action: c(() => [
          e(t(ue), {
            label: U.$t("common.cancel"),
            onClickButton: O,
            type: "standard"
          }, null, 8, ["label"]),
          e(t(ue), {
            label: U.$t("common.confirm"),
            onClickButton: M
          }, null, 8, ["label"])
        ]),
        default: c(() => [
          y("div", Rl, [
            y("div", Al, [
              y("span", Bl, B(U.$t("dialogs.paperSizeSet.width")), 1),
              e(t(we), {
                "validation-status": n.value,
                feedback: a.value ? U.$t("dialogs.paperSizeSet.errorMessage") : "",
                class: "custom-input-num"
              }, {
                default: c(() => [
                  e(t(ye), {
                    value: p.value,
                    "onUpdate:value": F[0] || (F[0] = (k) => p.value = k),
                    min: d.value,
                    max: i.value,
                    onKeydown: be(M, ["enter"]),
                    onInput: v
                  }, {
                    suffix: c(() => [
                      K(B(U.$t("common.unit.CM")), 1)
                    ]),
                    _: 1
                  }, 8, ["value", "min", "max"])
                ]),
                _: 1
              }, 8, ["validation-status", "feedback"])
            ]),
            y("div", Ml, [
              y("span", Pl, B(U.$t("dialogs.paperSizeSet.height")), 1),
              e(t(we), {
                "validation-status": r.value,
                feedback: u.value ? U.$t("dialogs.paperSizeSet.errorMessage") : "",
                class: "custom-input-num"
              }, {
                default: c(() => [
                  e(t(ye), {
                    value: m.value,
                    "onUpdate:value": F[1] || (F[1] = (k) => m.value = k),
                    min: d.value,
                    max: i.value,
                    onKeydown: be(M, ["enter"]),
                    onInput: h
                  }, {
                    suffix: c(() => [
                      K(B(U.$t("common.unit.CM")), 1)
                    ]),
                    _: 1
                  }, 8, ["value", "min", "max"])
                ]),
                _: 1
              }, 8, ["validation-status", "feedback"])
            ])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}), zl = /* @__PURE__ */ H(Dl, [["__scopeId", "data-v-573783a2"]]), Ul = { style: { display: "flex", gap: "8px" } }, Ol = { class: "paper-size-option" }, Wl = { style: { padding: "0px 5px" } }, Fl = /* @__PURE__ */ x({
  __name: "PageSettingGroup",
  setup(s) {
    const l = f(null), o = f(!1), a = f(!1);
    function n(u) {
      var r;
      a.value = !1, (r = l == null ? void 0 : l.value) == null || r.openPopover(
        {
          width: 21,
          height: 29.7
        },
        (d) => {
          u(d);
        }
      );
    }
    return (u, r) => {
      const d = I("n-ellipsis"), i = I("n-icon"), p = I("n-button");
      return g(), w("div", Ul, [
        e(ze, {
          show: o.value,
          "onUpdate:show": r[0] || (r[0] = (m) => o.value = m),
          cmd: t(b).PaperOrientation,
          label: u.$t("toolbar.layout.paperOrientation"),
          "icon-name": "Ribbon_Word_paper_orientation_24__clip_cell",
          "dropdown-options": [
            {
              value: "paperHorizontal",
              label: u.$t("toolbar.layout.paperHorizontal")
            },
            { value: "paperVertical", label: u.$t("toolbar.layout.paperVertical") }
          ]
        }, {
          option: c(({ item: m }) => [
            e(d, { style: { "max-width": "200px" } }, {
              default: c(() => [
                K(B(m.label), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["show", "cmd", "label", "dropdown-options"]),
        e(t(L), {
          vertical: !0,
          height: 65,
          margin: "0px"
        }),
        e(ze, {
          cmd: t(b).PaperSize,
          label: u.$t("toolbar.layout.paperSize"),
          "icon-name": "Ribbon_Word_paper_size_24__clip_cell",
          "dropdown-options": t(it),
          show: a.value,
          "onUpdate:show": r[1] || (r[1] = (m) => a.value = m)
        }, {
          option: c(({ item: m, checked: _ }) => [
            y("div", Ol, [
              y("div", {
                class: "global-basic-display-text paper-label",
                style: se(_ ? { color: "white" } : {})
              }, B(u.$t("toolbar.layout.paperSizeLabel." + m.value)), 5),
              y("div", {
                class: "global-basic-display-text paper-desp",
                style: se(_ ? { color: "white" } : {})
              }, B(m.width + u.$t("common.unit.CM")) + " x " + B(m.height + u.$t("common.unit.CM")), 5)
            ])
          ]),
          footer: c(({ runCommand: m }) => [
            e(t(L), { margin: 5 }),
            y("div", Wl, [
              e(p, {
                text: "",
                class: "global-basic-display-text action-text paper-setting-button",
                "icon-placement": "right",
                onClick: (_) => n(m),
                color: "#131313"
              }, {
                icon: c(() => [
                  e(i, { size: "12" }, {
                    default: c(() => [
                      e(t(Oe))
                    ]),
                    _: 1
                  })
                ]),
                default: c(() => [
                  K(" " + B(u.$t("toolbar.layout.paperSetting")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ]),
          _: 1
        }, 8, ["cmd", "label", "dropdown-options", "show"]),
        e(zl, {
          ref_key: "PaperSizeSettingDialogRef",
          ref: l
        }, null, 512)
      ]);
    };
  }
}), Nl = /* @__PURE__ */ H(Fl, [["__scopeId", "data-v-2cd2be5d"]]), Gl = { class: "style-group" }, Vl = { class: "style-strip" }, Hl = ["disabled", "title", "onClick"], Ll = ["src", "alt"], jl = { class: "style-name" }, El = { class: "style-gallery" }, Kl = { class: "gallery-grid" }, Yl = ["title", "onClick"], Xl = ["src", "alt"], ql = { class: "style-name" }, Jl = { class: "group-label" }, Ql = /* @__PURE__ */ x({
  __name: "StyleGroup",
  setup(s) {
    const { locale: l, t: o, te: a } = j(), n = [
      // { id: "style1", name: "样式1", previewText: "AaBbCcDd", color: "#ed6a2c", fontWeight: 600 },
      // { id: "normal", name: "正文", previewText: "AaBbCcDd", color: "#222222" },
      // { id: "heading1", name: "标题 1", previewText: "AaBb", color: "#2f75b5", fontSize: 26 },
      // { id: "heading2", name: "标题 2", previewText: "AaBb", color: "#4472c4", fontSize: 22 },
      // { id: "title", name: "标题", previewText: "AaB", color: "#111111", fontSize: 28 },
      // { id: "subtitle", name: "副标题", previewText: "AaBbCc", color: "#7f7f7f", fontSize: 18 },
      // { id: "subtleEmphasis", name: "不明显强调", previewText: "AaBbCc", color: "#595959", fontStyle: "italic" },
      // { id: "emphasis", name: "强调", previewText: "AaBbCc", color: "#222222", fontStyle: "italic", fontWeight: 600 },
      // { id: "intenseEmphasis", name: "明显强调", previewText: "AaBbCc", color: "#4472c4", fontStyle: "italic" },
      // { id: "strong", name: "要点", previewText: "AaBbCc", color: "#111111", fontWeight: 700 },
      // { id: "quote", name: "引用", previewText: "AaBbCc", color: "#595959", fontStyle: "italic" },
      // { id: "intenseQuote", name: "明显引用", previewText: "AaBbCc", color: "#4472c4", fontStyle: "italic" },
    ], u = N(), r = V(G), d = f(n), i = f(!1), p = S(
      () => u.getters["command/can"](b.ApplyStyle)
    ), m = S(
      () => u.getters["file/paraStyleId"]
    ), _ = S(() => u.state.file.isReady), v = S(() => {
      const k = d.value, W = m.value, $ = k.slice(0, 4), R = k.find((D) => D.id === W);
      return !R || $.some((D) => D.id === W) || ($[3] = R), $;
    });
    re(
      _,
      (k) => {
        k && C();
      },
      { immediate: !0 }
    );
    const h = (k) => l.value !== "zh-CN" ? k.name : k.name.trim().split(/\s+/).map((R) => {
      const T = `toolbar.start.style.${R}`;
      return a(T) ? o(T) : R;
    }).join("") || k.name;
    function z(k) {
      return k.map((W, $) => ({
        id: String(W.id ?? $),
        name: String(W.name ?? ""),
        image: W.texture || ""
      })).filter((W) => W.name);
    }
    function C() {
      try {
        const R = r.api.getStyles(78, 27, "AaBbCc"), T = Array.isArray(R) ? z(R) : [];
        T.length && (d.value = T);
      } catch {
        d.value = n;
      }
    }
    function M(k) {
      i.value = k, k && C();
    }
    function O(k) {
      return {
        color: k.color || "var(--primary-text)",
        fontFamily: k.fontFamily,
        fontSize: `${Math.min(k.fontSize || 20, 28)}px`,
        fontWeight: k.fontWeight,
        fontStyle: k.fontStyle
      };
    }
    function U(k) {
      r.run(b.ApplyStyle, { value: k }), u.commit("command/setState", {
        cmd: b.ApplyStyle,
        ui: { value: k }
      }), i.value = !1;
    }
    function F() {
      r.api.clearStyle(), i.value = !1;
    }
    return (k, W) => {
      const $ = I("n-icon"), R = I("n-button"), T = I("n-scrollbar");
      return g(), w("div", Gl, [
        y("div", Vl, [
          (g(!0), w(oe, null, de(v.value, (D) => (g(), w("button", {
            key: D.id,
            type: "button",
            class: ie(["style-tile", { active: m.value === D.id }]),
            disabled: !p.value,
            title: h(D),
            onClick: (Y) => U(D.id)
          }, [
            D.image ? (g(), w("img", {
              key: 0,
              src: D.image,
              alt: D.name,
              class: "style-image"
            }, null, 8, Ll)) : (g(), w("span", {
              key: 1,
              class: "style-preview",
              style: se(O(D))
            }, B(D.previewText), 5)),
            y("span", jl, B(h(D)), 1)
          ], 10, Hl))), 128)),
          e(t(Se), {
            show: i.value,
            trigger: "click",
            placement: "bottom-end",
            space: 4,
            "onUpdate:show": M,
            onClickoutside: W[2] || (W[2] = (D) => i.value = !1)
          }, {
            trigger: c(() => [
              e(R, {
                class: "gallery-trigger",
                disabled: !p.value,
                title: k.$t("toolbar.start.styleGallery")
              }, {
                icon: c(() => [
                  e($, { size: "14" }, {
                    default: c(() => [
                      e(t(pe))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["disabled", "title"])
            ]),
            default: c(() => [
              y("div", El, [
                e(T, { class: "gallery-scroll" }, {
                  default: c(() => [
                    y("div", Kl, [
                      (g(!0), w(oe, null, de(d.value, (D) => (g(), w("button", {
                        key: D.id,
                        type: "button",
                        class: ie(["style-tile gallery-tile", { active: m.value === D.id }]),
                        title: h(D),
                        onMousedown: W[0] || (W[0] = Ie(() => {
                        }, ["prevent"])),
                        onClick: (Y) => U(D.id)
                      }, [
                        D.image ? (g(), w("img", {
                          key: 0,
                          src: D.image,
                          alt: D.name,
                          class: "style-image"
                        }, null, 8, Xl)) : (g(), w("span", {
                          key: 1,
                          class: "style-preview",
                          style: se(O(D))
                        }, B(D.previewText), 5)),
                        y("span", ql, B(h(D)), 1)
                      ], 42, Yl))), 128))
                    ])
                  ]),
                  _: 1
                }),
                y("button", {
                  type: "button",
                  class: "clear-formatting",
                  onMousedown: W[1] || (W[1] = Ie(() => {
                  }, ["prevent"])),
                  onClick: F
                }, [
                  e($, { size: "16" }, {
                    default: c(() => [
                      e(t(ft))
                    ]),
                    _: 1
                  }),
                  y("span", null, B(k.$t("toolbar.start.clearFormattingFromStyles")), 1)
                ], 32)
              ])
            ]),
            _: 1
          }, 8, ["show"])
        ]),
        y("div", Jl, B(k.$t("toolbar.start.styles")), 1)
      ]);
    };
  }
}), Zl = /* @__PURE__ */ H(Ql, [["__scopeId", "data-v-55e34bbd"]]), eo = { class: "global-basic-display-text label-text" }, to = { class: "global-basic-display-text label-text" }, lo = /* @__PURE__ */ x({
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
    show: { type: Boolean }
  },
  setup(s) {
    const l = s, o = S(
      () => l.iconName ? { name: l.iconName } : {
        x: l.x,
        y: l.y,
        source: l.resourceImage,
        imageWidth: l.imageWidth
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
    }, n = {
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
    }, u = S(() => l.active ? n : a);
    return (r, d) => {
      const i = I("n-icon"), p = I("n-button"), m = I("n-config-provider");
      return g(), q(m, { "theme-overrides": u.value }, {
        default: c(() => [
          s.tooltip ? (g(), q(t(he), { key: 0 }, {
            trigger: c(() => [
              e(p, {
                class: "small-icon-btn button-content",
                disabled: s.disabled,
                style: se({ width: s.buttonWidth + "px", height: s.buttonHeight + "px", display: "flex" })
              }, {
                default: c(() => [
                  e(t(le), ke(o.value, {
                    size: 16,
                    style: { "margin-right": "5px" }
                  }), null, 16),
                  y("span", eo, B(s.label), 1),
                  s.showArrow ? (g(), q(i, {
                    key: 0,
                    size: "12",
                    style: { "margin-left": "2px" },
                    class: ie(s.show ? "rotate-180" : "")
                  }, {
                    default: c(() => [
                      e(t(pe))
                    ]),
                    _: 1
                  }, 8, ["class"])) : $e("", !0)
                ]),
                _: 1
              }, 8, ["disabled", "style"])
            ]),
            default: c(() => [
              K(" " + B(s.tooltip), 1)
            ]),
            _: 1
          })) : (g(), q(p, {
            key: 1,
            class: "small-icon-btn button-content",
            disabled: s.disabled,
            style: se({ width: s.buttonWidth + "px", height: s.buttonHeight + "px" })
          }, {
            default: c(() => [
              e(t(le), ke(o.value, {
                size: 16,
                style: { "margin-right": "5px" }
              }), null, 16),
              y("span", to, B(s.label), 1),
              s.showArrow ? (g(), q(i, {
                key: 0,
                size: "12",
                style: { "margin-left": "2px" },
                class: ie(s.show ? "rotate-180" : "")
              }, {
                default: c(() => [
                  e(t(pe))
                ]),
                _: 1
              }, 8, ["class"])) : $e("", !0)
            ]),
            _: 1
          }, 8, ["disabled", "style"]))
        ]),
        _: 1
      }, 8, ["theme-overrides"]);
    };
  }
}), ot = /* @__PURE__ */ H(lo, [["__scopeId", "data-v-54499bc4"]]), oo = /* @__PURE__ */ x({
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
  setup(s) {
    const l = s, o = N(), a = S(() => o == null ? void 0 : o.getters["command/can"](l.cmd)), n = V(G);
    function u() {
      if (l.commandHandler) {
        l.commandHandler(l.cmd);
        return;
      }
      n.run(l.cmd, void 0);
    }
    return (r, d) => (g(), w("div", null, [
      e(ot, {
        label: s.label,
        "resource-image": t(P).image,
        "button-height": 24,
        "button-width": s.buttonWidth,
        "icon-name": s.iconName,
        disabled: s.useDisabled ? s.disabled : !a.value,
        showArrow: s.showArrow,
        x: s.x,
        y: s.y,
        tooltip: s.tooltip,
        show: s.show,
        padding: s.padding,
        "image-width": t(P).width,
        onClick: u
      }, null, 8, ["label", "resource-image", "button-width", "icon-name", "disabled", "showArrow", "x", "y", "tooltip", "show", "padding", "image-width"])
    ]));
  }
}), ao = /* @__PURE__ */ H(oo, [["__scopeId", "data-v-16190658"]]), no = { class: "global-basic-display-text label-text" }, io = { class: "global-basic-display-text label-text" }, so = /* @__PURE__ */ x({
  __name: "CommandBigIconDropDownGroupButton",
  props: /* @__PURE__ */ De({
    cmd: {},
    label: {},
    iconName: {},
    x: {},
    y: {},
    tooltip: {},
    isActiveOption: { type: Boolean },
    getValueCommand: {},
    showArrow: { type: Boolean },
    iconSize: {},
    active: { type: Boolean },
    commandHandler: { type: Function },
    dropdownOptions: {}
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ De(["changeActive"], ["update:modelValue"]),
  setup(s, { emit: l }) {
    const o = N(), a = Ze(s, "modelValue"), n = s, u = S(() => o == null ? void 0 : o.getters["command/can"](n.cmd)), r = S(() => o == null ? void 0 : o.getters["command/getVal"](n.cmd)), d = S(() => r.value != ""), i = S(() => n.isActiveOption ? Le(n.dropdownOptions, r, n.isActiveOption) : ({ node: M, option: O }) => M), p = V(G), m = n.isActiveOption ? je(S(() => n.dropdownOptions), a, r) : S(() => n.dropdownOptions), _ = S(
      () => n.iconName ? { name: n.iconName } : {
        x: n.x,
        y: n.y,
        source: P.image,
        imageWidth: P.width
      }
    ), v = {
      Button: {
        // default
        color: "transparent",
        border: "1px solid #e5e5e5",
        borderRadiusMedium: "4px",
        // focus
        borderFocus: "1px solid #e5e5e5",
        textColorFocus: "",
        colorFocus: "transparent",
        // hover
        colorHover: "var(--hover-bg)",
        textColorHover: "",
        borderHover: "1px solid #e5e5e5",
        rippleColor: "var(--hover-bg)",
        // active / pressed
        colorPressed: "var(--active-bg)",
        textColorPressed: "",
        borderPressed: "1px solid #e5e5e5",
        // disabled
        borderDisabled: "1px solid #e5e5e5"
      }
    };
    re(
      () => o.getters["panel/activePanel"],
      (M) => {
        M != ve.CommentPanel && r.value === "list" && (o.commit("panel/closePanel", ve.CommentPanel), z(""));
      },
      { immediate: !0 }
    );
    function h(M) {
      "" + M + r.value, M === "list" && M != r.value ? o.commit("panel/openPanel", ve.CommentPanel) : o.commit("panel/closePanel", ve.CommentPanel);
      let O = M === r.value ? "" : M;
      z(O);
    }
    function z(M) {
      const O = { type: st.SET, value: M };
      n.commandHandler ? n.commandHandler(O, n.cmd) : ("" + n.cmd, p.run(n.cmd, O));
    }
    function C() {
      "" + r.value, r.value === "" ? h("list") : (r.value === "list" && o.commit("panel/closePanel", ve.CommentPanel), z(""));
    }
    return (M, O) => {
      const U = I("n-button"), F = I("n-icon"), k = I("n-button-group"), W = I("n-config-provider");
      return g(), q(W, { "theme-overrides": v }, {
        default: c(() => [
          s.tooltip ? (g(), q(t(he), { key: 0 }, {
            trigger: c(() => [
              e(k, {
                vertical: "",
                disabled: !u.value,
                size: "small"
              }, {
                default: c(() => [
                  e(U, {
                    onClick: C,
                    style: se([{ width: "100%" }, { backgroundColor: d.value ? "var(--active-bg)" : "transparent" }])
                  }, {
                    default: c(() => [
                      e(t(le), ke(_.value, {
                        size: s.iconSize || 24
                      }), null, 16, ["size"])
                    ]),
                    _: 1
                  }, 8, ["style"]),
                  e(t(Pe), {
                    placement: "bottom-start",
                    options: t(m),
                    onSelect: h,
                    show: a.value,
                    "render-option": i.value,
                    "onUpdate:show": O[1] || (O[1] = ($) => a.value = $)
                  }, {
                    default: c(() => [
                      e(U, {
                        "icon-placement": "right",
                        onClick: O[0] || (O[0] = ($) => a.value = !a.value),
                        class: "show-button"
                      }, {
                        icon: c(() => [
                          e(F, { size: "12" }, {
                            default: c(() => [
                              ge(e(t(Me), null, null, 512), [
                                [_e, a.value]
                              ]),
                              ge(e(t(pe), null, null, 512), [
                                [_e, !a.value]
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        default: c(() => [
                          y("span", no, B(s.label), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["options", "show", "render-option"])
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            default: c(() => [
              K(" " + B(s.tooltip), 1)
            ]),
            _: 1
          })) : $e("", !0),
          e(k, {
            vertical: "",
            disabled: !u.value,
            size: "small"
          }, {
            default: c(() => [
              e(U, {
                onClick: C,
                style: se([{ width: "100%" }, { backgroundColor: d.value ? "var(--active-bg)" : "transparent" }])
              }, {
                default: c(() => [
                  e(t(le), ke(_.value, {
                    size: s.iconSize || 24
                  }), null, 16, ["size"])
                ]),
                _: 1
              }, 8, ["style"]),
              e(t(Pe), {
                placement: "bottom-start",
                options: t(m),
                onSelect: h,
                show: a.value,
                "render-option": i.value,
                "onUpdate:show": O[3] || (O[3] = ($) => a.value = $)
              }, {
                default: c(() => [
                  e(U, {
                    "icon-placement": "right",
                    onClick: O[2] || (O[2] = ($) => a.value = !a.value),
                    class: "show-button"
                  }, {
                    icon: c(() => [
                      e(F, { size: "12" }, {
                        default: c(() => [
                          ge(e(t(Me), null, null, 512), [
                            [_e, a.value]
                          ]),
                          ge(e(t(pe), null, null, 512), [
                            [_e, !a.value]
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    default: c(() => [
                      y("span", io, B(s.label), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["options", "show", "render-option"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        _: 1
      });
    };
  }
}), ro = /* @__PURE__ */ x({
  __name: "CommentGroup",
  setup(s) {
    const { t: l } = j();
    N();
    const o = V(G), a = f(!1), n = {
      delete: {
        label: `${l("toolbar.review.comment.delete")}`,
        key: "delete",
        disabled: !1,
        icon: Q(-960, -56),
        noTrigger: !1
      },
      deleteAllInDocument: {
        label: `${l("toolbar.review.comment.deleteAllInDocument")}`,
        key: "deleteAllInDocument",
        disabled: !1,
        icon: Q(-976, -56),
        noTrigger: !1
      }
    }, u = f(Object.values(n)), r = [
      {
        label: `${l("toolbar.review.comment.contextual")}`,
        key: "contextual",
        disabled: !1
      },
      {
        label: `${l("toolbar.review.comment.commentPanel")}`,
        key: "list",
        disabled: !1
      }
    ];
    function d(i) {
      o.run(b.DeleteComment, i);
    }
    return (i, p) => {
      const m = I("n-space");
      return g(), w("div", null, [
        e(m, null, {
          default: c(() => [
            e(m, {
              vertical: "",
              justify: "center"
            }, {
              default: c(() => [
                e(ao, {
                  cmd: t(b).InsertComment,
                  label: i.$t("toolbar.review.comment.insert"),
                  x: -944,
                  y: -56,
                  "button-width": 80,
                  tooltip: i.$t("toolbar.review.comment.insert")
                }, null, 8, ["cmd", "label", "tooltip"]),
                e(ae, {
                  cmd: t(b).DeleteComment,
                  x: -960,
                  y: -56,
                  tooltip: i.$t("toolbar.review.comment.delete"),
                  "command-handler": d,
                  menuItems: u.value,
                  label: i.$t("toolbar.review.comment.delete")
                }, null, 8, ["cmd", "tooltip", "menuItems", "label"])
              ]),
              _: 1
            }),
            e(m, {
              vertical: "",
              justify: "center"
            }, {
              default: c(() => [
                e(X, {
                  cmd: t(b).PreviousComment,
                  x: -992,
                  y: -56,
                  tooltip: i.$t("toolbar.review.comment.previous"),
                  class: "global-small-icon-button"
                }, null, 8, ["cmd", "tooltip"]),
                e(X, {
                  cmd: t(b).NextComment,
                  x: -1008,
                  y: -56,
                  tooltip: i.$t("toolbar.review.comment.next"),
                  class: "global-small-icon-button"
                }, null, 8, ["cmd", "tooltip"])
              ]),
              _: 1
            }),
            e(so, {
              cmd: t(b).ShowHideComment,
              label: i.$t("toolbar.review.comment.showHideComment"),
              x: -312,
              y: -32,
              dropdownOptions: r,
              modelValue: a.value,
              "onUpdate:modelValue": p[0] || (p[0] = (_) => a.value = _),
              style: { "margin-left": "5px" }
            }, null, 8, ["cmd", "label", "modelValue"])
          ]),
          _: 1
        })
      ]);
    };
  }
}), co = /* @__PURE__ */ H(ro, [["__scopeId", "data-v-76ea0692"]]), uo = { style: { display: "flex", gap: "8px" } }, mo = /* @__PURE__ */ x({
  __name: "ReviewMiddleGroup",
  setup(s) {
    const { t: l } = j(), o = f("simple"), a = [
      { label: `${l("toolbar.review.markUpStatus.simple")}`, value: "simple" },
      { label: `${l("toolbar.review.markUpStatus.all")}`, value: "all" },
      { label: `${l("toolbar.review.markUpStatus.no")}`, value: "no" },
      { label: `${l("toolbar.review.markUpStatus.original")}`, value: "original" }
    ], n = f([
      {
        label: `${l("toolbar.review.showMarkUpType.Annotation")}`,
        key: "Annotation",
        disabled: !1
      },
      {
        label: `${l("toolbar.review.showMarkUpType.InsertionsAndDeletions")}`,
        key: "InsertionsAndDeletions",
        disabled: !1
      },
      {
        label: `${l("toolbar.review.showMarkUpType.Formatting")}`,
        key: "Formatting",
        disabled: !1
      },
      {
        label: `${l("toolbar.review.showMarkUpType.Balloons.title")}`,
        key: "Balloons",
        disabled: !1,
        children: [
          { key: "showRevisonsInBallons", label: `${l("toolbar.review.showMarkUpType.Balloons.showRevisonsInBallons")}` },
          { key: "showAllRevisonsInline", label: `${l("toolbar.review.showMarkUpType.Balloons.showAllRevisonsInline")}` },
          { key: "showOnlyFormattingInBallons", label: `${l("toolbar.review.showMarkUpType.Balloons.showOnlyFormattingInBallons")}` }
        ]
      },
      {
        label: `${l("toolbar.review.showMarkUpType.SpecificPeople")}`,
        key: "SpecificPeople",
        disabled: !1,
        children: [
          { key: "AllReviewers", label: `${l("toolbar.review.showMarkUpType.AllReviewers")}` }
        ]
      }
    ]), u = f([
      {
        label: `${l("toolbar.review.AcceptChange.AcceptAndMoveToNext")}`,
        key: "AcceptAndMoveToNext",
        disabled: !1
      },
      {
        label: `${l("toolbar.review.AcceptChange.AcceptThisChange")}`,
        key: "AcceptThisChange",
        disabled: !1
      },
      {
        label: `${l("toolbar.review.AcceptChange.AcceptAllChangesShown")}`,
        key: "AcceptAllChangesShown",
        disabled: !1
      },
      {
        label: `${l("toolbar.review.AcceptChange.AcceptAllChanges")}`,
        key: "AcceptAllChanges",
        disabled: !1
      },
      {
        label: `${l("toolbar.review.AcceptChange.AcceptAllChangesAndStopTracking")}`,
        key: "AcceptAllChangesAndStopTracking",
        disabled: !1
      }
    ]), r = f([
      {
        label: `${l("toolbar.review.RejectChange.RejectAndMoveToNext")}`,
        key: "RejectAndMoveToNext",
        disabled: !1
      },
      {
        label: `${l("toolbar.review.RejectChange.RejectThisChange")}`,
        key: "RejectThisChange",
        disabled: !1
      },
      {
        label: `${l("toolbar.review.RejectChange.RejectAllChangesShown")}`,
        key: "RejectAllChangesShown",
        disabled: !1
      },
      {
        label: `${l("toolbar.review.RejectChange.RejectAllChanges")}`,
        key: "RejectAllChanges",
        disabled: !1
      },
      {
        label: `${l("toolbar.review.RejectChange.RejectAllChangesAndStopTracking")}`,
        key: "RejectAllChangesAndStopTracking",
        disabled: !1
      }
    ]);
    function d() {
    }
    function i() {
    }
    return (p, m) => {
      const _ = I("n-select"), v = I("n-space");
      return g(), w("div", uo, [
        e(v, {
          vertical: "",
          justify: "space-around"
        }, {
          default: c(() => [
            e(_, {
              value: o.value,
              "onUpdate:value": m[0] || (m[0] = (h) => o.value = h),
              options: a,
              style: { width: "120px" },
              size: "tiny"
            }, null, 8, ["value"]),
            e(ae, {
              cmd: t(b).ShowMarkUpType,
              x: -1024,
              y: -56,
              tooltip: p.$t("toolbar.review.showMarkUpType.title"),
              menuItems: n.value,
              label: p.$t("toolbar.review.showMarkUpType.title")
            }, null, 8, ["cmd", "tooltip", "menuItems", "label"])
          ]),
          _: 1
        }),
        e(t(L), {
          vertical: !0,
          height: 65,
          margin: "0px"
        }),
        e(ee, {
          cmd: t(b).TrackChange,
          label: p.$t("toolbar.review.trackChanges.title"),
          x: -312,
          y: -30
        }, null, 8, ["cmd", "label"]),
        e(v, {
          vertical: "",
          justify: "center"
        }, {
          default: c(() => [
            e(ae, {
              cmd: t(b).AcceptChange,
              x: -1040,
              y: -56,
              tooltip: p.$t("toolbar.review.AcceptChange.title"),
              menuItems: u.value,
              label: p.$t("toolbar.review.AcceptChange.title")
            }, null, 8, ["cmd", "tooltip", "menuItems", "label"]),
            e(ae, {
              cmd: t(b).RejectChange,
              x: -1056,
              y: -56,
              tooltip: p.$t("toolbar.review.RejectChange.title"),
              menuItems: r.value,
              label: p.$t("toolbar.review.RejectChange.title")
            }, null, 8, ["cmd", "tooltip", "menuItems", "label"])
          ]),
          _: 1
        }),
        e(v, {
          vertical: "",
          justify: "center"
        }, {
          default: c(() => [
            e(t(Z), {
              disabled: !1,
              onClick: d,
              "resource-image": t(P).image,
              x: -1072,
              y: -56,
              tooltip: p.$t("toolbar.review.trackChanges.previous"),
              "image-width": t(P).width,
              class: "global-small-icon-button"
            }, null, 8, ["resource-image", "tooltip", "image-width"]),
            e(t(Z), {
              disabled: !1,
              onClick: i,
              "resource-image": t(P).image,
              x: -1088,
              y: -56,
              tooltip: p.$t("toolbar.review.trackChanges.next"),
              "image-width": t(P).width,
              class: "global-small-icon-button"
            }, null, 8, ["resource-image", "tooltip", "image-width"])
          ]),
          _: 1
        })
      ]);
    };
  }
}), po = { style: { display: "flex", gap: "8px" } }, bo = /* @__PURE__ */ x({
  __name: "ReviewRightGroup",
  setup(s) {
    const { t: l } = j();
    return (o, a) => (g(), w("div", po, [
      e(ee, {
        cmd: t(b).SimplifiedToTraditional,
        label: o.$t("toolbar.review.simplifiedToTraditional"),
        x: -360,
        y: -30
      }, null, 8, ["cmd", "label"]),
      e(t(L), {
        vertical: !0,
        height: 65,
        margin: "0px"
      }),
      e(ee, {
        cmd: t(b).DocumentEncryption,
        label: o.$t("toolbar.review.documentEncryption"),
        x: -336,
        y: -30
      }, null, 8, ["cmd", "label"])
    ]));
  }
}), vo = { style: { display: "flex", gap: "8px" } }, Fa = /* @__PURE__ */ x({
  __name: "ReviewGroup",
  setup(s) {
    return (l, o) => (g(), w("div", vo, [
      e(co),
      e(t(L), {
        vertical: !0,
        height: 65,
        margin: "0px 8px"
      }),
      e(mo),
      e(t(L), {
        vertical: !0,
        height: 65,
        margin: "0px 8px"
      }),
      e(bo)
    ]));
  }
}), go = /* @__PURE__ */ x({
  __name: "NavigationGroup",
  setup(s) {
    const { t: l } = j(), o = N(), a = V(G), n = S(() => o == null ? void 0 : o.getters["command/getVal"](b.Ruler)), u = S(() => o == null ? void 0 : o.getters["command/getVal"](b.NavigationPanel));
    function r(i) {
      "" + i + n.value, a.run(b.Ruler, { value: i });
    }
    function d(i) {
      "" + i + u.value, a.run(b.NavigationPanel, { value: i });
    }
    return (i, p) => {
      const m = I("n-checkbox"), _ = I("n-space");
      return g(), w("div", null, [
        e(_, { vertical: "" }, {
          default: c(() => [
            e(m, {
              checked: n.value,
              "on-update:checked": r,
              label: i.$t("toolbar.view.ruler")
            }, null, 8, ["checked", "label"]),
            e(m, {
              checked: u.value,
              "on-update:checked": d,
              label: i.$t("toolbar.view.navigationPane")
            }, null, 8, ["checked", "label"])
          ]),
          _: 1
        })
      ]);
    };
  }
}), _o = /* @__PURE__ */ H(go, [["__scopeId", "data-v-98e0b494"]]), ho = { style: { display: "flex", gap: "8px" } }, Na = /* @__PURE__ */ x({
  __name: "ViewGroup",
  setup(s) {
    return (l, o) => (g(), w("div", ho, [
      e(_o),
      e(t(L), {
        vertical: !0,
        height: 65,
        margin: "0px 8px"
      })
    ]));
  }
}), fo = { class: "btn-vertical-group" }, wo = /* @__PURE__ */ x({
  __name: "TableStyleBorderAndShading",
  setup(s) {
    const { t: l } = j(), o = V(G), { standardColors: a, themeColors: n, ensureLoaded: u } = Ye();
    function r(h) {
      const z = { value: h };
      o.run(b.TableShading, z);
    }
    function d(h) {
      h && u();
    }
    function i() {
      o.run(b.TableShading, { value: null });
    }
    function p(h, z) {
      return () => Ce(le, { size: 16, x: h, y: z, source: P.image, imageWidth: P.width });
    }
    const m = [
      {
        key: "left",
        label: l("toolbar.table.borderLeft"),
        icon: p(-800, -56),
        props: { onClick: () => v("left") }
      },
      {
        key: "right",
        label: l("toolbar.table.borderRight"),
        icon: p(-784, -56),
        props: { onClick: () => v("right") }
      },
      {
        key: "top",
        label: l("toolbar.table.borderTop"),
        icon: p(-752, -56),
        props: { onClick: () => v("top") }
      },
      {
        key: "bottom",
        label: l("toolbar.table.borderBottom"),
        icon: p(-768, -56),
        props: { onClick: () => v("bottom") }
      },
      {
        key: "all",
        label: l("toolbar.table.borderAll"),
        icon: p(-656, -56),
        props: { onClick: () => v("all") }
      },
      {
        key: "none",
        label: l("toolbar.table.borderNone"),
        icon: p(-720, -56),
        props: { onClick: () => v("none") }
      },
      {
        key: "outside",
        label: l("toolbar.table.borderOutside"),
        icon: p(-672, -56),
        props: { onClick: () => v("outside") }
      },
      {
        key: "inside",
        label: l("toolbar.table.borderInside"),
        icon: p(-640, -56),
        props: { onClick: () => v("inside") }
      },
      {
        key: "insideH",
        label: l("toolbar.table.borderInsideHorizontal"),
        icon: p(-736, -56),
        props: { onClick: () => v("insideH") }
      },
      {
        key: "insideV",
        label: l("toolbar.table.borderInsideVertical"),
        icon: p(-816, -56),
        props: { onClick: () => v("insideV") }
      },
      {
        key: "DiagonalUp",
        label: l("toolbar.table.borderDiagonalUp"),
        icon: p(-688, -56),
        props: { onClick: () => v("DiagonalUp") }
      },
      {
        key: "DiagonalDown",
        label: l("toolbar.table.borderDiagonalDown"),
        icon: p(-704, -56),
        props: { onClick: () => v("DiagonalDown") }
      }
    ], _ = f(m);
    function v(h) {
      o.run(b.TableBorder, { value: h });
    }
    return (h, z) => (g(), w("div", fo, [
      e(t(Xe), {
        "standard-colors": t(a),
        "theme-colors": t(n),
        showFill: !0,
        onSelect: r,
        onShow: d,
        onClearFill: i
      }, {
        default: c(() => [
          e(ae, {
            cmd: t(b).TableShading,
            "icon-name": "Ribbon_excle_no_fill_color_16__clip_cell",
            tooltip: h.$t("toolbar.table.shading"),
            menuItems: [],
            label: h.$t("toolbar.table.shading")
          }, null, 8, ["cmd", "tooltip", "label"])
        ]),
        _: 1
      }, 8, ["standard-colors", "theme-colors"]),
      e(ae, {
        cmd: t(b).SplitTable,
        "icon-name": "Ribbon_word_line_border_16__clip_cell",
        tooltip: h.$t("toolbar.table.border"),
        menuItems: _.value,
        label: h.$t("toolbar.table.border")
      }, null, 8, ["cmd", "tooltip", "menuItems", "label"])
    ]));
  }
}), yo = /* @__PURE__ */ H(wo, [["__scopeId", "data-v-14fd3176"]]), Co = { class: "table-style-check-group" }, ko = /* @__PURE__ */ x({
  __name: "TableStyleCheckbox",
  setup(s) {
    const l = N(), o = V(G), a = _t({
      headerRow: !1,
      firstCol: !1,
      totalRow: !1,
      lastCol: !1,
      bandedRow: !1,
      bandedCol: !1
    });
    function n() {
      const d = o.api.getTableStyleCheckStatus();
      Object.assign(a, d);
    }
    gt(() => {
      n();
    });
    const u = S(
      () => l.getters["file/refreshTableStylePanel"]
    );
    re(
      u,
      (d) => {
        d && n();
      }
    );
    const r = (d, i) => {
      o.api.setTableStyleCheckStatus({
        [d]: i
      }), rt(l);
    };
    return (d, i) => {
      const p = I("n-checkbox");
      return g(), w("div", Co, [
        e(p, {
          checked: a.headerRow,
          "onUpdate:checked": [
            i[0] || (i[0] = (m) => a.headerRow = m),
            i[1] || (i[1] = (m) => r("headerRow", m))
          ],
          label: d.$t("toolbar.table.headerRow")
        }, null, 8, ["checked", "label"]),
        e(p, {
          checked: a.firstCol,
          "onUpdate:checked": [
            i[2] || (i[2] = (m) => a.firstCol = m),
            i[3] || (i[3] = (m) => r("firstCol", m))
          ],
          label: d.$t("toolbar.table.firstColumn")
        }, null, 8, ["checked", "label"]),
        e(p, {
          checked: a.totalRow,
          "onUpdate:checked": [
            i[4] || (i[4] = (m) => a.totalRow = m),
            i[5] || (i[5] = (m) => r("totalRow", m))
          ],
          label: d.$t("toolbar.table.totalRow")
        }, null, 8, ["checked", "label"]),
        e(p, {
          checked: a.lastCol,
          "onUpdate:checked": [
            i[6] || (i[6] = (m) => a.lastCol = m),
            i[7] || (i[7] = (m) => r("lastCol", m))
          ],
          label: d.$t("toolbar.table.lastColumn")
        }, null, 8, ["checked", "label"]),
        e(p, {
          checked: a.bandedRow,
          "onUpdate:checked": [
            i[8] || (i[8] = (m) => a.bandedRow = m),
            i[9] || (i[9] = (m) => r("bandedRow", m))
          ],
          label: d.$t("toolbar.table.bandedRow")
        }, null, 8, ["checked", "label"]),
        e(p, {
          checked: a.bandedCol,
          "onUpdate:checked": [
            i[10] || (i[10] = (m) => a.bandedCol = m),
            i[11] || (i[11] = (m) => r("bandedCol", m))
          ],
          label: d.$t("toolbar.table.bandedColumn")
        }, null, 8, ["checked", "label"])
      ]);
    };
  }
}), $o = /* @__PURE__ */ H(ko, [["__scopeId", "data-v-c4d67168"]]), So = { class: "table-style-group" }, xo = { class: "table-style-strip" }, To = ["disabled", "title", "onClick"], Io = ["src", "alt"], Ro = {
  key: 1,
  class: "table-style-preview table-preview-grid"
}, Ao = { class: "table-style-name" }, Bo = { class: "table-gallery-section" }, Mo = { class: "table-section-title" }, Po = { class: "table-gallery-grid" }, Do = ["title", "onClick"], zo = ["src", "alt"], Uo = {
  key: 1,
  class: "table-style-preview table-preview-grid"
}, Oo = { class: "table-style-name" }, Wo = { class: "table-gallery-section" }, Fo = { class: "table-section-title" }, No = { class: "table-gallery-grid" }, Go = ["title", "onClick"], Vo = ["src", "alt"], Ho = {
  key: 1,
  class: "table-style-preview table-preview-grid"
}, Lo = { class: "table-style-name" }, jo = { class: "table-gallery-section" }, Eo = { class: "table-section-title" }, Ko = { class: "table-gallery-grid" }, Yo = ["title", "onClick"], Xo = ["src", "alt"], qo = {
  key: 1,
  class: "table-style-preview table-preview-grid"
}, Jo = { class: "table-style-name" }, Qo = /* @__PURE__ */ x({
  __name: "TableStyleGroup",
  setup(s) {
    const { locale: l, t: o, te: a } = j(), n = ($) => l.value !== "zh-CN" ? $.name : $.name.trim().split(/\s+/).map((D) => {
      const A = `toolbar.table.style.${D.charAt(0).toUpperCase() + D.slice(1).toLowerCase()}`;
      return a(A) ? o(A) : D;
    }).join("") || $.name, u = N(), r = V(G), d = f([]), i = f(!1), p = S(
      () => u.getters["command/can"](b.ApplyTableStyle)
    ), m = S(
      () => u.getters["file/tableStyleId"]
    ), _ = S(() => u.state.file.isReady), v = S(
      () => u.getters["file/refreshTableStylePanel"]
    ), h = S(
      () => d.value.filter(($) => $.category === "plain")
    ), z = S(
      () => d.value.filter(($) => $.category === "grid")
    ), C = S(
      () => d.value.filter(($) => $.category === "list")
    ), M = S(() => {
      const $ = h.value, R = m.value, T = $.findIndex((A) => A.id === R);
      if (T >= 0 && T < 4)
        return $.slice(0, 4);
      const D = $.slice(0, 3), Y = d.value.find((A) => A.id === R);
      if (Y)
        D.push(Y);
      else
        return $.slice(0, 4);
      return D;
    });
    re(
      _,
      ($) => {
        $ && U();
      },
      { immediate: !0 }
    ), re(
      v,
      ($) => {
        $ && U();
      }
    );
    function O($, R = "grid") {
      return $.map((T, D) => ({
        id: String(T.id ?? D),
        name: String(T.name ?? ""),
        image: T.texture || "",
        category: R
      })).filter((T) => T.name && T.id);
    }
    function U() {
      try {
        const T = r.api.getTableStyles(78, 38), D = Array.isArray(T == null ? void 0 : T.plain) ? T.plain : [], Y = Array.isArray(T == null ? void 0 : T.grid) ? T.grid : [], A = Array.isArray(T == null ? void 0 : T.list) ? T.list : [], ne = [
          ...O(D, "plain"),
          ...O(Y, "grid"),
          ...O(A, "list")
        ];
        ne.length && (d.value = ne);
      } catch {
      }
    }
    function F($) {
      i.value = $, $ && U();
    }
    function k($) {
      r.run(b.ApplyTableStyle, { value: $ }), u.commit("command/setState", {
        cmd: b.ApplyTableStyle,
        ui: { value: $ }
      }), i.value = !1;
    }
    function W() {
      r.run(b.ClearTableStyle, void 0), i.value = !1;
    }
    return ($, R) => {
      const T = I("n-icon"), D = I("n-button"), Y = I("n-scrollbar");
      return g(), w("div", So, [
        y("div", xo, [
          (g(!0), w(oe, null, de(M.value, (A) => (g(), w("button", {
            key: A.id,
            type: "button",
            class: ie(["table-style-tile", { active: m.value === A.id }]),
            disabled: !p.value,
            title: n(A),
            onClick: (ne) => k(A.id)
          }, [
            A.image ? (g(), w("img", {
              key: 0,
              src: A.image,
              alt: A.name,
              class: "table-style-image"
            }, null, 8, Io)) : (g(), w("div", Ro)),
            y("span", Ao, B(n(A)), 1)
          ], 10, To))), 128)),
          e(t(Se), {
            show: i.value,
            trigger: "click",
            placement: "bottom-end",
            space: 4,
            "onUpdate:show": F,
            onClickoutside: R[1] || (R[1] = (A) => i.value = !1)
          }, {
            trigger: c(() => [
              e(D, {
                class: "table-gallery-trigger",
                disabled: !p.value,
                title: $.$t("toolbar.table.tableStyleGallery")
              }, {
                icon: c(() => [
                  e(T, { size: "14" }, {
                    default: c(() => [
                      e(t(pe))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["disabled", "title"])
            ]),
            default: c(() => [
              y("div", {
                class: "table-style-gallery",
                onClick: R[0] || (R[0] = Ie(() => {
                }, ["stop"]))
              }, [
                e(Y, { class: "table-gallery-scroll" }, {
                  default: c(() => [
                    y("div", Bo, [
                      y("h4", Mo, B($.$t("toolbar.table.plainTables")), 1),
                      y("div", Po, [
                        (g(!0), w(oe, null, de(h.value, (A) => (g(), w("button", {
                          key: A.id,
                          type: "button",
                          class: ie(["table-style-tile table-gallery-tile", { active: m.value === A.id }]),
                          title: n(A),
                          onClick: (ne) => k(A.id)
                        }, [
                          A.image ? (g(), w("img", {
                            key: 0,
                            src: A.image,
                            alt: A.name,
                            class: "table-style-image"
                          }, null, 8, zo)) : (g(), w("div", Uo)),
                          y("span", Oo, B(n(A)), 1)
                        ], 10, Do))), 128))
                      ])
                    ]),
                    y("div", Wo, [
                      y("h4", Fo, B($.$t("toolbar.table.gridTables")), 1),
                      y("div", No, [
                        (g(!0), w(oe, null, de(z.value, (A) => (g(), w("button", {
                          key: A.id,
                          type: "button",
                          class: ie(["table-style-tile table-gallery-tile", { active: m.value === A.id }]),
                          title: n(A),
                          onClick: (ne) => k(A.id)
                        }, [
                          A.image ? (g(), w("img", {
                            key: 0,
                            src: A.image,
                            alt: A.name,
                            class: "table-style-image"
                          }, null, 8, Vo)) : (g(), w("div", Ho)),
                          y("span", Lo, B(n(A)), 1)
                        ], 10, Go))), 128))
                      ])
                    ]),
                    y("div", jo, [
                      y("h4", Eo, B($.$t("toolbar.table.listTables")), 1),
                      y("div", Ko, [
                        (g(!0), w(oe, null, de(C.value, (A) => (g(), w("button", {
                          key: A.id,
                          type: "button",
                          class: ie(["table-style-tile table-gallery-tile", { active: m.value === A.id }]),
                          title: n(A),
                          onClick: (ne) => k(A.id)
                        }, [
                          A.image ? (g(), w("img", {
                            key: 0,
                            src: A.image,
                            alt: A.name,
                            class: "table-style-image"
                          }, null, 8, Xo)) : (g(), w("div", qo)),
                          y("span", Jo, B(n(A)), 1)
                        ], 10, Yo))), 128))
                      ])
                    ])
                  ]),
                  _: 1
                }),
                y("button", {
                  type: "button",
                  class: "clear-table-style",
                  onClick: W
                }, [
                  e(T, { size: "16" }, {
                    default: c(() => [
                      e(t(yt))
                    ]),
                    _: 1
                  }),
                  y("span", null, B($.$t("toolbar.table.clearTableStyle")), 1)
                ])
              ])
            ]),
            _: 1
          }, 8, ["show"])
        ])
      ]);
    };
  }
}), Zo = /* @__PURE__ */ H(Qo, [["__scopeId", "data-v-90cd0bd2"]]), ea = { style: { display: "flex", gap: "8px" } }, ta = /* @__PURE__ */ x({
  __name: "TableClearStyleBtn",
  setup(s) {
    return (l, o) => (g(), w("div", ea, [
      e(ee, {
        cmd: t(b).ClearTableStyle,
        label: l.$t("toolbar.table.clearTableStyle"),
        "icon-name": "Ribbon_Word_form_clear_24__clip_cell"
      }, null, 8, ["cmd", "label"])
    ]));
  }
}), la = { style: { display: "flex", gap: "8px" } }, Ga = /* @__PURE__ */ x({
  __name: "TableStyleBarGroup",
  setup(s) {
    return (l, o) => (g(), w("div", la, [
      e($o),
      e(t(L), {
        vertical: !0,
        height: 65,
        margin: "0px 8px"
      }),
      e(Zo),
      e(t(L), {
        vertical: !0,
        height: 65,
        margin: "0px 8px"
      }),
      e(yo),
      e(t(L), {
        vertical: !0,
        height: 65,
        margin: "0px 8px"
      }),
      e(ta),
      e(t(L), {
        vertical: !0,
        height: 65,
        margin: "0px 8px"
      })
    ]));
  }
}), oa = /* @__PURE__ */ x({
  __name: "DeleteTableCellsDialog",
  setup(s, { expose: l }) {
    N(), V(G);
    const { t: o } = j(), a = f(!1), n = f("shiftCellsLeft");
    f(ct.ShiftCellsLeft);
    let u = null;
    function r(p) {
      u = p, a.value = !0, n.value = "shiftCellsLeft";
    }
    function d() {
      "" + n.value, u && u({
        deleteType: n.value
      }), a.value = !1;
    }
    function i() {
      a.value = !1;
    }
    return l({
      openPopover: r
    }), (p, m) => {
      const _ = I("n-radio"), v = I("n-space"), h = I("n-radio-group");
      return g(), w("div", null, [
        e(t(xe), {
          show: a.value,
          "onUpdate:show": m[1] || (m[1] = (z) => a.value = z),
          title: p.$t("dialogs.deleteTableCells.title"),
          width: 220
        }, {
          action: c(() => [
            e(t(ue), {
              label: p.$t("common.cancel"),
              onClickButton: i,
              type: "standard"
            }, null, 8, ["label"]),
            e(t(ue), {
              label: p.$t("common.confirm"),
              onClickButton: d
            }, null, 8, ["label"])
          ]),
          default: c(() => [
            e(h, {
              value: n.value,
              "onUpdate:value": m[0] || (m[0] = (z) => n.value = z)
            }, {
              default: c(() => [
                e(v, { vertical: "" }, {
                  default: c(() => [
                    e(_, { value: "shiftCellsLeft" }, {
                      default: c(() => [
                        K(B(p.$t("dialogs.deleteTableCells.shiftCellsLeft")), 1)
                      ]),
                      _: 1
                    }),
                    e(_, { value: "shiftCellsUp" }, {
                      default: c(() => [
                        K(B(p.$t("dialogs.deleteTableCells.shiftCellsUp")), 1)
                      ]),
                      _: 1
                    }),
                    e(_, { value: "deleteEntireRow" }, {
                      default: c(() => [
                        K(B(p.$t("dialogs.deleteTableCells.deleteEntireRow")), 1)
                      ]),
                      _: 1
                    }),
                    e(_, { value: "deleteEntireColumn" }, {
                      default: c(() => [
                        K(B(p.$t("dialogs.deleteTableCells.deleteEntireColumn")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["show", "title"])
      ]);
    };
  }
}), aa = /* @__PURE__ */ H(oa, [["__scopeId", "data-v-035cbcb6"]]), na = /* @__PURE__ */ x({
  __name: "TableDeleteButton",
  setup(s) {
    const l = V(G);
    N();
    const { t: o } = j(), a = f();
    function n(d, i) {
      return () => Ce(le, { size: 16, x: d, y: i, source: P.image, imageWidth: P.width });
    }
    const u = {
      cell: {
        label: `${o("toolbar.table.delete.cell")}`,
        key: "cell",
        icon: n(-1168, -56),
        noTrigger: !0,
        props: {
          onClick: () => {
            var d;
            (d = a.value) == null || d.openPopover((i) => {
              l.run(b.TableDeleteOperations, { value: { input: i, cmd: "deleteCells" } });
            });
          }
        }
      },
      column: {
        label: `${o("toolbar.table.delete.column")}`,
        key: "column",
        icon: n(-1360, -56),
        noTrigger: !0,
        props: {
          onClick: () => {
            l.run(b.TableDeleteOperations, { value: { cmd: "deleteColumns" } });
          }
        }
      },
      row: {
        label: `${o("toolbar.table.delete.row")}`,
        key: "row",
        icon: n(-1376, -56),
        noTrigger: !0,
        props: {
          onClick: () => {
            l.run(b.TableDeleteOperations, { value: { cmd: "deleteRows" } });
          }
        }
      },
      table: {
        label: `${o("toolbar.table.delete.table")}`,
        key: "table",
        icon: n(-1184, -56),
        noTrigger: !0,
        props: {
          onClick: () => {
            l.run(b.TableDeleteOperations, { value: { cmd: "deleteTable" } });
          }
        }
      }
    }, r = f(Object.values(u));
    return (d, i) => (g(), w(oe, null, [
      e(ae, {
        cmd: t(b).TableDeleteOperations,
        x: -1184,
        y: -56,
        tooltip: d.$t("toolbar.table.delete.title"),
        menuItems: r.value,
        label: d.$t("toolbar.table.delete.title")
      }, null, 8, ["cmd", "tooltip", "menuItems", "label"]),
      e(aa, {
        ref_key: "DeleteTableCellsDialogRef",
        ref: a
      }, null, 512)
    ], 64));
  }
}), ia = /* @__PURE__ */ H(na, [["__scopeId", "data-v-e1a4a10a"]]), sa = /* @__PURE__ */ x({
  __name: "InsertTableCellsDialog",
  setup(s, { expose: l }) {
    const { t: o } = j(), a = f(!1), n = f("shiftCellsDown");
    let u = null;
    function r(m) {
      u = m, n.value = "shiftCellsDown", a.value = !0;
    }
    function d() {
      "" + n.value, u && u({
        insertType: n.value
      }), a.value = !1;
    }
    function i() {
      a.value = !1;
    }
    l({
      openPopover: r
    });
    const p = {
      Radio: {
        dotColorActive: "var(--blue-60)",
        boxShadowActive: "inset 0 0 0 1px var(--blue-60)",
        boxShadowFocus: "inset 0 0 0 1px var(--blue-60), 0 0 0 2px rgba(0, 0, 0, 0.2)",
        boxShadowHover: "inset 0 0 0 1px var(--blue-60)",
        textColor: "var(--primary-text)"
      }
    };
    return (m, _) => {
      const v = I("n-radio"), h = I("n-space"), z = I("n-radio-group"), C = I("n-config-provider");
      return g(), w("div", null, [
        e(C, { "theme-overrides": p }, {
          default: c(() => [
            e(t(xe), {
              show: a.value,
              "onUpdate:show": _[1] || (_[1] = (M) => a.value = M),
              title: m.$t("dialogs.insertTableCells.title"),
              width: 240
            }, {
              action: c(() => [
                e(t(ue), {
                  label: m.$t("common.cancel"),
                  onClickButton: i,
                  type: "standard"
                }, null, 8, ["label"]),
                e(t(ue), {
                  label: m.$t("common.confirm"),
                  onClickButton: d
                }, null, 8, ["label"])
              ]),
              default: c(() => [
                e(z, {
                  value: n.value,
                  "onUpdate:value": _[0] || (_[0] = (M) => n.value = M),
                  vertical: ""
                }, {
                  default: c(() => [
                    e(h, { vertical: "" }, {
                      default: c(() => [
                        e(v, {
                          value: "shiftCellsRight",
                          class: "global-basic-display-text label-text"
                        }, {
                          default: c(() => [
                            K(B(m.$t("dialogs.insertTableCells.shiftCellsRight")), 1)
                          ]),
                          _: 1
                        }),
                        e(v, {
                          value: "shiftCellsDown",
                          class: "global-basic-display-text label-text"
                        }, {
                          default: c(() => [
                            K(B(m.$t("dialogs.insertTableCells.shiftCellsDown")), 1)
                          ]),
                          _: 1
                        }),
                        e(v, {
                          value: "insertEntireRow",
                          class: "global-basic-display-text label-text"
                        }, {
                          default: c(() => [
                            K(B(m.$t("dialogs.insertTableCells.insertEntireRow")), 1)
                          ]),
                          _: 1
                        }),
                        e(v, {
                          value: "insertEntireColumn",
                          class: "global-basic-display-text label-text"
                        }, {
                          default: c(() => [
                            K(B(m.$t("dialogs.insertTableCells.insertEntireColumn")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }, 8, ["show", "title"])
          ]),
          _: 1
        })
      ]);
    };
  }
}), ra = /* @__PURE__ */ H(sa, [["__scopeId", "data-v-878fa96b"]]), ca = /* @__PURE__ */ x({
  __name: "TableInsertButton",
  setup(s) {
    const l = V(G);
    N();
    const { t: o } = j(), a = f();
    function n(d, i) {
      return () => Ce(le, { size: 16, x: d, y: i, source: P.image, imageWidth: P.width });
    }
    const u = {
      above: {
        label: `${o("toolbar.table.insert.above")}`,
        key: "row",
        icon: n(-1440, -56),
        noTrigger: !0,
        props: {
          onClick: () => {
            l.run(b.TableInsertOperations, { value: { cmd: "above" } });
          }
        }
      },
      below: {
        label: `${o("toolbar.table.insert.below")}`,
        key: "row",
        icon: n(-1456, -56),
        noTrigger: !0,
        props: {
          onClick: () => {
            l.run(b.TableInsertOperations, { value: { cmd: "below" } });
          }
        }
      },
      left: {
        label: `${o("toolbar.table.insert.left")}`,
        key: "row",
        icon: n(-1392, -56),
        noTrigger: !0,
        props: {
          onClick: () => {
            l.run(b.TableInsertOperations, { value: { cmd: "left" } });
          }
        }
      },
      right: {
        label: `${o("toolbar.table.insert.right")}`,
        key: "row",
        icon: n(-1408, -56),
        noTrigger: !0,
        props: {
          onClick: () => {
            l.run(b.TableInsertOperations, { value: { cmd: "right" } });
          }
        }
      },
      insertCells: {
        label: `${o("toolbar.table.insert.insertCells")}`,
        key: "row",
        icon: n(-1424, -56),
        noTrigger: !0,
        props: {
          onClick: () => {
            var d;
            (d = a.value) == null || d.openPopover((i) => {
              l.run(b.TableInsertOperations, { value: { input: i, cmd: "insertCells" } });
            });
          }
        }
      }
    }, r = f(Object.values(u));
    return (d, i) => (g(), w(oe, null, [
      e(ae, {
        cmd: t(b).TableInsertOperations,
        x: -1200,
        y: -56,
        tooltip: d.$t("toolbar.table.insert.title"),
        menuItems: r.value,
        label: d.$t("toolbar.table.insert.title")
      }, null, 8, ["cmd", "tooltip", "menuItems", "label"]),
      e(ra, {
        ref_key: "InsertTableCellsDialogRef",
        ref: a
      }, null, 512)
    ], 64));
  }
}), da = /* @__PURE__ */ H(ca, [["__scopeId", "data-v-51115ce0"]]), ua = /* @__PURE__ */ x({
  __name: "SplitTableButton",
  setup(s) {
    var p, m;
    const l = V(G), o = N(), { t: a } = j(), n = S(() => o == null ? void 0 : o.getters["command/enabledList"](b.SplitTable));
    function u(_, v) {
      return () => Ce(le, { size: 16, x: _, y: v, source: P.image, imageWidth: P.width });
    }
    const r = {
      splitTableWithRow: {
        label: `${a("toolbar.table.splitTable.row")}`,
        key: "splitTableWithRow",
        disabled: !((p = n.value) != null && p.splitTableWithRow),
        icon: u(-1216, -56),
        noTrigger: !0,
        props: {
          onClick: () => {
            l.run(b.SplitTable, { value: "row" });
          }
        }
      },
      splitTableWithCol: {
        label: `${a("toolbar.table.splitTable.column")}`,
        key: "splitTableWithCol",
        disabled: !((m = n.value) != null && m.splitTableWithCol),
        icon: u(-1232, -56),
        noTrigger: !0,
        props: {
          onClick: () => {
            l.run(b.SplitTable, { value: "col" });
          }
        }
      }
    }, d = f(Object.values(r));
    re(n, (_) => {
      for (let v in _) {
        let h = v;
        i(r[h]) && (r[h].disabled = !_[v]);
      }
      d.value = Object.values(r);
    }, { immediate: !0 });
    function i(_) {
      return _.disabled !== void 0;
    }
    return (_, v) => (g(), q(ae, {
      cmd: t(b).SplitTable,
      x: -1216,
      y: -56,
      tooltip: _.$t("toolbar.table.splitTable.title"),
      menuItems: d.value,
      label: _.$t("toolbar.table.splitTable.title")
    }, null, 8, ["cmd", "tooltip", "menuItems", "label"]));
  }
}), ma = /* @__PURE__ */ H(ua, [["__scopeId", "data-v-d31b5212"]]), pa = { class: "global-basic-display-text text" }, ba = { class: "global-basic-display-text text" }, va = /* @__PURE__ */ x({
  __name: "SplitCellsDialog",
  setup(s, { expose: l }) {
    const { t: o } = j(), a = f(!1), n = f(!1), u = f(""), r = f(1), d = f(31), i = f(1), p = f(1), m = f(!1), _ = f(!1), v = f(""), h = f(1), z = f(63), C = f(0), M = f(0), O = f(!1), U = f(!1);
    let F = null;
    const k = {
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
      }
    };
    function W(E) {
      E === !1 ? (M.value = 2, i.value > 1 && (C.value = 1, m.value = !0)) : (M.value = p.value * 2, m.value = !1, i.value > 1 && (C.value = i.value));
    }
    function $(E) {
      return n.value === !1 ? "" : i.value > 1 && i.value % E != 0 ? o("dialogs.splitCells.rowErrorMessage_pre") + i.value + o("dialogs.splitCells.rowErrorMessage") : "";
    }
    const R = S(() => $(C.value));
    function T(E) {
      E > d.value && (n.value = !0, u.value = "error");
    }
    function D(E) {
    }
    function Y(E, te) {
      E && (i.value = E.row, p.value = E.col, C.value = E.row, E.canMergeCell === !0 ? (M.value = E.col * 2, O.value = !0, U.value = !1) : (M.value = 2, O.value = !1, U.value = !0), i.value > 1 && (d.value = i.value)), n.value = !1, u.value = "", _.value = !1, v.value = "", F = te, a.value = !0;
    }
    function A() {
      if ("" + C.value, i.value > 1 && i.value % C.value != 0) {
        n.value = !0, u.value = "error";
        return;
      }
    }
    function ne() {
      if ("" + C.value, i.value > 1 && i.value % C.value != 0) {
        n.value = !0, u.value = "error";
        return;
      }
      C.value < r.value || C.value > d.value || M.value < h.value || M.value > z.value || (F && F({
        rows: C.value,
        cols: M.value,
        splitBeforeMerge: O.value
      }), a.value = !1);
    }
    function Ae() {
      a.value = !1;
    }
    return l({
      openPopover: Y
    }), (E, te) => {
      const J = I("n-gi"), Fe = I("n-grid"), at = I("n-checkbox"), Ne = I("n-space"), nt = I("n-config-provider");
      return g(), q(nt, { "theme-overrides": k }, {
        default: c(() => [
          e(t(xe), {
            show: a.value,
            "onUpdate:show": te[3] || (te[3] = (me) => a.value = me),
            title: E.$t("toolbar.table.splitCells"),
            width: 290
          }, {
            action: c(() => [
              e(t(ue), {
                label: E.$t("common.cancel"),
                onClickButton: Ae,
                type: "standard"
              }, null, 8, ["label"]),
              e(t(ue), {
                label: E.$t("common.confirm"),
                onClickButton: ne
              }, null, 8, ["label"])
            ]),
            default: c(() => [
              e(Ne, { vertical: "" }, {
                default: c(() => [
                  e(Fe, {
                    "y-gap": 8,
                    cols: 2,
                    class: "checkbox-grid"
                  }, {
                    default: c(() => [
                      e(J, null, {
                        default: c(() => [
                          y("span", pa, B(E.$t("dialogs.splitCells.colsCount")), 1)
                        ]),
                        _: 1
                      }),
                      e(J, null, {
                        default: c(() => [
                          e(t(we), {
                            "validation-status": v.value,
                            feedback: _.value ? E.$t("dialogs.splitCells.columnErrorMessage") : ""
                          }, {
                            default: c(() => [
                              e(t(ye), {
                                value: M.value,
                                "onUpdate:value": te[0] || (te[0] = (me) => M.value = me),
                                class: "custom-input-num",
                                "show-step-button": !0,
                                precision: 0,
                                min: h.value,
                                max: z.value,
                                onKeydown: be(ne, ["enter"]),
                                onInput: D
                              }, null, 8, ["value", "min", "max"])
                            ]),
                            _: 1
                          }, 8, ["validation-status", "feedback"])
                        ]),
                        _: 1
                      }),
                      e(J, null, {
                        default: c(() => [
                          y("span", ba, B(E.$t("dialogs.splitCells.rowsCount")), 1)
                        ]),
                        _: 1
                      }),
                      e(J, null, {
                        default: c(() => [
                          e(t(we), {
                            "validation-status": u.value,
                            feedback: R.value
                          }, {
                            default: c(() => [
                              e(t(ye), {
                                value: C.value,
                                "onUpdate:value": te[1] || (te[1] = (me) => C.value = me),
                                class: "custom-input-num",
                                "show-step-button": !0,
                                precision: 0,
                                min: r.value,
                                max: d.value,
                                disabled: m.value,
                                onKeydown: be(A, ["enter"]),
                                onInput: T
                              }, null, 8, ["value", "min", "max", "disabled"])
                            ]),
                            _: 1
                          }, 8, ["validation-status", "feedback"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  e(Ne, null, {
                    default: c(() => [
                      e(at, {
                        size: "small",
                        label: E.$t("dialogs.splitCells.mergeCellsBeforeSplit"),
                        checked: O.value,
                        "onUpdate:checked": [
                          te[2] || (te[2] = (me) => O.value = me),
                          W
                        ],
                        disabled: U.value,
                        class: "global-basic-display-text text"
                      }, null, 8, ["label", "checked", "disabled"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["show", "title"])
        ]),
        _: 1
      });
    };
  }
}), ga = /* @__PURE__ */ H(va, [["__scopeId", "data-v-7f75360d"]]), _a = /* @__PURE__ */ x({
  __name: "SplitCellsButton",
  setup(s) {
    const l = N(), o = V(G), a = f();
    function n() {
      var u;
      (u = a == null ? void 0 : a.value) == null || u.openPopover(
        {
          row: l.getters["file/tableSplitCellNSelectRow"],
          col: l.getters["file/tableSplitCellNSelectCol"],
          maxRow: l.getters["file/TableSplitCellMaxRow"],
          canMergeCell: l.getters["file/tableCanMergeCell"]
        },
        (r) => {
          o.run(b.SplitCells, { value: r });
        }
      ), o.api.focusEditor();
    }
    return (u, r) => (g(), w("div", null, [
      e(ot, {
        label: u.$t("toolbar.table.splitCells"),
        "resource-image": t(P).image,
        "button-height": 24,
        "button-width": 90,
        showArrow: !1,
        x: -1248,
        y: -56,
        tooltip: u.$t("toolbar.table.splitCells"),
        show: !0,
        cmd: t(b).SplitCells,
        "image-width": t(P).width,
        onClick: r[0] || (r[0] = (d) => n())
      }, null, 8, ["label", "resource-image", "tooltip", "cmd", "image-width"]),
      e(ga, {
        ref_key: "SplitCellsDialogRef",
        ref: a
      }, null, 512)
    ]));
  }
}), ha = { style: { display: "flex", gap: "8px" } }, fa = /* @__PURE__ */ x({
  __name: "AutoFitButton",
  setup(s) {
    N();
    const { t: l } = j();
    function o(n, u) {
      return () => Ce(le, { size: 16, x: n, y: u, source: P.image, imageWidth: P.width });
    }
    const a = f([
      {
        label: `${l("toolbar.table.autoFit.windows")}`,
        key: "windows",
        disabled: !1,
        icon: o(-1552, -56)
      },
      {
        label: `${l("toolbar.table.autoFit.contents")}`,
        key: "contents",
        disabled: !1,
        icon: o(-1568, -56)
      },
      {
        label: `${l("toolbar.table.autoFit.fixedColumnWidth")}`,
        key: "fixedColumnWidth",
        disabled: !1,
        icon: o(-1584, -56)
      },
      {
        label: `${l("toolbar.table.autoFit.distributeRows")}`,
        key: "distributeRows",
        disabled: !1,
        icon: o(-1600, -56)
      },
      {
        label: `${l("toolbar.table.autoFit.distributeCols")}`,
        key: "distributeCols",
        disabled: !1,
        icon: o(-1616, -56)
      }
    ]);
    return (n, u) => (g(), w("div", ha, [
      e(We, {
        cmd: t(b).AutoFit,
        label: n.$t("toolbar.table.autoFit.title"),
        "icon-name": "Ribbon_Word_form_autofit_24__clip_cell",
        "dropdown-options": a.value
      }, null, 8, ["cmd", "label", "dropdown-options"])
    ]));
  }
}), wa = /* @__PURE__ */ x({
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
    max: {}
  },
  setup(s) {
    const l = V(G), o = N(), a = s, n = S(() => o == null ? void 0 : o.getters["command/getVal"](a.cmd)), u = f(n.value), r = f(0);
    let d = null;
    re(() => n.value, (p) => {
      p != u.value && (r.value++, u.value = p);
    }), re(u, (p) => {
      a.isInputCommand && (d || p == n.value || (d = setTimeout(() => {
        l.run(a.cmd, { value: u.value }), clearTimeout(d), d = null;
      }, 500)));
    });
    function i() {
      a.isInputCommand || l.run(a.cmd, { value: u.value });
    }
    return (p, m) => {
      const _ = I("n-space");
      return g(), q(_, {
        horizontal: "",
        class: "icon-input-number"
      }, {
        default: c(() => [
          e(t(le), {
            x: s.x,
            y: s.y,
            size: s.iconSize,
            source: s.resourceImage,
            imageWidth: s.imageWidth,
            class: "icon"
          }, null, 8, ["x", "y", "size", "source", "imageWidth"]),
          (g(), q(dt, {
            max: s.max,
            unit: "厘米",
            step: 0.1,
            min: 0,
            modelValue: u.value,
            "onUpdate:modelValue": m[0] || (m[0] = (v) => u.value = v),
            key: r.value,
            onFocusout: i,
            onKeyup: be(i, ["enter"])
          }, null, 8, ["max", "modelValue"]))
        ]),
        _: 1
      });
    };
  }
}), Ge = /* @__PURE__ */ H(wa, [["__scopeId", "data-v-00ddfe2b"]]), ya = { style: { display: "flex", gap: "8px" } }, Ca = /* @__PURE__ */ x({
  __name: "TableLayoutLeftGroup",
  setup(s) {
    return (l, o) => {
      const a = I("n-space");
      return g(), w("div", ya, [
        e(ee, {
          cmd: t(b).ShowTableDashedGrid,
          label: l.$t("toolbar.table.showTableDashedGrid"),
          "icon-name": "Ribbon_Word_form_Show_Grid_Guides_24__clip_cell"
        }, null, 8, ["cmd", "label"]),
        e(t(L), {
          vertical: !0,
          height: 65,
          margin: "0px"
        }),
        e(a, {
          vertical: "",
          style: { gap: "8px", "margin-top": "5px" }
        }, {
          default: c(() => [
            e(ia),
            e(da)
          ]),
          _: 1
        }),
        e(t(L), {
          vertical: !0,
          height: 65,
          margin: "0px"
        }),
        e(ee, {
          cmd: t(b).MergeCells,
          label: l.$t("toolbar.table.mergeCells"),
          "icon-name": "Ribbon_Word_form_Merge_Cells_24__clip_cell"
        }, null, 8, ["cmd", "label"]),
        e(a, {
          vertical: "",
          style: { gap: "8px", "margin-top": "5px" }
        }, {
          default: c(() => [
            e(ma),
            e(_a)
          ]),
          _: 1
        }),
        e(t(L), {
          vertical: !0,
          height: 65,
          margin: "0px"
        }),
        e(fa),
        e(a, {
          vertical: "",
          style: { gap: "8px", "margin-top": "5px" }
        }, {
          default: c(() => [
            e(Ge, {
              cmd: t(b).CellHeight,
              x: -1264,
              y: -56,
              "resource-image": t(P).image,
              "image-width": t(P).width,
              "is-input-command": !1,
              max: 55.88
            }, null, 8, ["cmd", "resource-image", "image-width"]),
            e(Ge, {
              cmd: t(b).CellWidth,
              x: -1280,
              y: -56,
              "resource-image": t(P).image,
              "image-width": t(P).width,
              "is-input-command": !1,
              max: 55.88
            }, null, 8, ["cmd", "resource-image", "image-width"])
          ]),
          _: 1
        })
      ]);
    };
  }
}), ka = { class: "toolbar-group" }, $a = /* @__PURE__ */ x({
  __name: "TableTextStyleGroup",
  setup(s) {
    const l = f([]), o = qe("docx", He);
    V(G);
    const { t: a } = j();
    async function n() {
      (ce == null || ce.length == 0) && await Qe(), ce && ce.length !== l.value.length && (l.value = ce.map(({ fullName: u }) => ({
        label: u,
        value: u
      })));
    }
    return (u, r) => {
      const d = I("n-space");
      return g(), w("div", ka, [
        e(d, { vertical: "" }, {
          default: c(() => [
            e(d, null, {
              default: c(() => [
                y("span", { onClick: n }, [
                  e(Te, {
                    cmd: t(b).FontName,
                    options: l.value,
                    width: 140,
                    type: "font"
                  }, null, 8, ["cmd", "options"])
                ]),
                e(Te, {
                  cmd: t(b).FontSize,
                  options: t(o),
                  width: 70,
                  menuWidth: 40,
                  "validate-input": t(Je)
                }, null, 8, ["cmd", "options", "validate-input"])
              ]),
              _: 1
            }),
            e(d, null, {
              default: c(() => [
                e(X, {
                  cmd: t(b).Bold,
                  "icon-name": "Ribbon_word_bold_16__clip_cell",
                  tooltip: u.$t("toolbar.start.bold"),
                  class: "global-small-icon-button"
                }, null, 8, ["cmd", "tooltip"]),
                e(X, {
                  cmd: t(b).Italic,
                  "icon-name": "Ribbon_word_Italic_16__clip_cell",
                  tooltip: u.$t("toolbar.start.italic"),
                  class: "global-small-icon-button"
                }, null, 8, ["cmd", "tooltip"]),
                e(lt),
                e(Ve, {
                  cmd: t(b).TextHighlight,
                  "icon-name": "Ribbon_word_fill_color_16__clip_cell",
                  tooltip: u.$t("toolbar.start.textHighlight.title"),
                  "show-fill": !0,
                  class: "global-small-icon-dropdown-button"
                }, null, 8, ["cmd", "tooltip"]),
                e(Ue, {
                  cmd: t(b).FontColor,
                  "show-auto": !0,
                  "icon-name": "Ribbon_word_text_color_16__clip_cell",
                  tooltip: u.$t("toolbar.start.fontClolor"),
                  class: "global-small-icon-dropdown-button"
                }, null, 8, ["cmd", "tooltip"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e(X, {
          cmd: t(b).OpenFontSettingsPanel,
          tooltip: u.$t("toolbar.start.fontSettings"),
          class: "font-panel-launcher",
          "icon-name": "Ribbon_word_text_color_16__clip_cell"
        }, null, 8, ["cmd", "tooltip"])
      ]);
    };
  }
}), Sa = /* @__PURE__ */ H($a, [["__scopeId", "data-v-483bf717"]]), xa = /* @__PURE__ */ x({
  __name: "CellAlignVerticalGroup",
  props: {
    cmd: {}
  },
  setup(s) {
    const l = N(), o = s, a = S(() => l == null ? void 0 : l.getters["command/can"](o.cmd)), n = S(() => l == null ? void 0 : l.getters["command/getVal"](o.cmd)), u = V(G);
    function r(d) {
      const i = { value: d };
      u.run(o.cmd, i);
    }
    return (d, i) => {
      const p = I("n-space");
      return g(), q(p, null, {
        default: c(() => [
          e(t(Z), {
            active: n.value === "top",
            disabled: !a.value,
            onClick: i[0] || (i[0] = (m) => r("top")),
            "resource-image": t(P).image,
            x: -1296,
            y: -56,
            tooltip: d.$t("toolbar.table.align.top"),
            "image-width": t(P).width,
            class: "global-small-icon-button"
          }, null, 8, ["active", "disabled", "resource-image", "tooltip", "image-width"]),
          e(t(Z), {
            active: n.value === "center",
            disabled: !a.value,
            onClick: i[1] || (i[1] = (m) => r("center")),
            "resource-image": t(P).image,
            x: -1312,
            y: -56,
            tooltip: d.$t("toolbar.table.align.center"),
            "image-width": t(P).width,
            class: "global-small-icon-button"
          }, null, 8, ["active", "disabled", "resource-image", "tooltip", "image-width"]),
          e(t(Z), {
            active: n.value === "bottom",
            disabled: !a.value,
            onClick: i[2] || (i[2] = (m) => r("bottom")),
            "resource-image": t(P).image,
            x: -1328,
            y: -56,
            tooltip: d.$t("toolbar.table.align.bottom"),
            "image-width": t(P).width,
            class: "global-small-icon-button"
          }, null, 8, ["active", "disabled", "resource-image", "tooltip", "image-width"])
        ]),
        _: 1
      });
    };
  }
}), Ta = /* @__PURE__ */ x({
  __name: "CellAlignHorizontalGroup",
  props: {
    cmd: {}
  },
  setup(s) {
    const l = N(), o = s, a = S(() => l == null ? void 0 : l.getters["command/can"](o.cmd)), n = S(() => l == null ? void 0 : l.getters["command/getVal"](o.cmd)), u = V(G);
    function r(d) {
      const i = { value: d };
      u.run(o.cmd, i);
    }
    return (d, i) => {
      const p = I("n-space");
      return g(), q(p, null, {
        default: c(() => [
          e(t(Z), {
            active: n.value === "left",
            disabled: !a.value,
            onClick: i[0] || (i[0] = (m) => r("left")),
            "icon-name": "Ribbon_word_align_left_16__clip_cell",
            tooltip: d.$t("toolbar.start.horizontalAlignLeft"),
            class: "global-small-icon-button"
          }, null, 8, ["active", "disabled", "tooltip"]),
          e(t(Z), {
            active: n.value === "center",
            disabled: !a.value,
            onClick: i[1] || (i[1] = (m) => r("center")),
            "icon-name": "Ribbon_word_center_16__clip_cell",
            tooltip: d.$t("toolbar.start.horizontalAlignCenter"),
            class: "global-small-icon-button"
          }, null, 8, ["active", "disabled", "tooltip"]),
          e(t(Z), {
            active: n.value === "right",
            disabled: !a.value,
            onClick: i[2] || (i[2] = (m) => r("right")),
            "icon-name": "Ribbon_word_align_right_16__clip_cell",
            tooltip: d.$t("toolbar.start.horizontalAlignRight"),
            class: "global-small-icon-button"
          }, null, 8, ["active", "disabled", "tooltip"])
        ]),
        _: 1
      });
    };
  }
}), Ia = { style: { display: "flex", gap: "8px" } }, Ra = /* @__PURE__ */ x({
  __name: "TableSelectButton",
  setup(s) {
    N();
    const { t: l } = j();
    function o(n, u) {
      return () => Ce(le, { size: 16, x: n, y: u, source: P.image, imageWidth: P.width });
    }
    const a = f([
      {
        label: `${l("toolbar.table.select.cell")}`,
        key: "cell",
        disabled: !1,
        icon: o(-1472, -56)
      },
      {
        label: `${l("toolbar.table.select.column")}`,
        key: "column",
        disabled: !1,
        icon: o(-1488, -56)
      },
      {
        label: `${l("toolbar.table.select.row")}`,
        key: "row",
        disabled: !1,
        icon: o(-1504, -56)
      },
      {
        label: `${l("toolbar.table.select.table")}`,
        key: "table",
        disabled: !1,
        icon: o(-1520, -56)
      }
    ]);
    return (n, u) => (g(), w("div", Ia, [
      e(We, {
        cmd: t(b).TableSelect,
        label: n.$t("toolbar.table.select.title"),
        "icon-name": "Ribbon_Word_form_selected_24__clip_cell",
        "dropdown-options": a.value
      }, null, 8, ["cmd", "label", "dropdown-options"])
    ]));
  }
}), Aa = { style: { display: "flex", gap: "8px" } }, Va = /* @__PURE__ */ x({
  __name: "TableLayoutBarGroup",
  setup(s) {
    const { t: l } = j();
    return (o, a) => {
      const n = I("n-space");
      return g(), w("div", Aa, [
        e(Ca),
        e(t(L), {
          vertical: !0,
          height: 65,
          margin: "0px 8px"
        }),
        e(Sa),
        e(t(L), {
          vertical: !0,
          height: 65,
          margin: "0px 8px"
        }),
        e(n, { vertical: "" }, {
          default: c(() => [
            e(xa, {
              cmd: t(b).CellAlignVertical
            }, null, 8, ["cmd"]),
            e(Ta, {
              cmd: t(b).ParaAlignHorizontal
            }, null, 8, ["cmd"])
          ]),
          _: 1
        }),
        e(t(L), {
          vertical: !0,
          height: 65,
          margin: "0px"
        }),
        e(ee, {
          cmd: t(b).OpenCellMarginsSettingsPanel,
          label: o.$t("toolbar.table.cellMarginsSettings"),
          "icon-name": "Ribbon_Word_form_Cell_Margins_24__clip_cell"
        }, null, 8, ["cmd", "label"]),
        e(t(L), {
          vertical: !0,
          height: 65,
          margin: "0px 8px"
        }),
        e(Ra)
      ]);
    };
  }
});
export {
  kt as ClipboardGroup,
  za as FileGroup,
  Oa as InsertGroup,
  il as InsertSeparatorGroup,
  xl as InsertTableButton,
  Wa as LayoutGroup,
  ja as MenuNavTab,
  Nl as PageSettingGroup,
  Ht as ParaStyleGroup,
  Fa as ReviewGroup,
  Il as SearchWordButton,
  Ua as StartBarGroup,
  Zl as StyleGroup,
  ta as TableClearStyleBtn,
  Va as TableLayoutBarGroup,
  Ga as TableStyleBarGroup,
  yo as TableStyleBorderAndShading,
  $o as TableStyleCheckbox,
  Zo as TableStyleGroup,
  al as TextStyleGroup,
  Tt as TrackChangeGroup,
  Na as ViewGroup
};
