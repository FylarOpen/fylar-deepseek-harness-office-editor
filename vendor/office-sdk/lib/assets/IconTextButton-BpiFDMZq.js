import { d as _, aj as c, o as s, ab as r, a4 as a, a2 as l, ak as P, al as I, a7 as d, a1 as i, a as o, ai as g, an as h, au as x, as as f, ao as C, q as y, a9 as N } from "../ApiBase.js?t=1788405500779";
const F = { class: "button-content" }, H = { class: "icon-label" }, D = { class: "label-area" }, S = { class: "global-basic-display-text label-text" }, $ = { class: "button-content" }, A = { class: "icon-label" }, V = { class: "label-area" }, T = { class: "global-basic-display-text label-text" }, W = /* @__PURE__ */ _({
  __name: "IconTextButton",
  props: {
    label: {},
    tooltip: {},
    disabled: { type: Boolean },
    active: { type: Boolean },
    showArrow: { type: Boolean },
    show: { type: Boolean },
    iconName: {},
    iconColor: {},
    iconSize: {},
    resourceImage: {},
    imageWidth: {},
    x: {},
    y: {}
  },
  emits: ["click"],
  setup(e) {
    const t = e, b = y(
      () => t.iconName ? { name: t.iconName } : {
        x: t.x,
        y: t.y,
        source: t.resourceImage,
        imageWidth: t.imageWidth
      }
    ), p = {
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
    }, k = {
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
    }, w = y(() => t.active ? k : p);
    return (v, n) => {
      const u = c("n-icon"), m = c("n-button"), B = c("n-config-provider");
      return s(), r(B, { "theme-overrides": w.value }, {
        default: a(() => [
          e.tooltip ? (s(), r(l(P), { key: 0 }, {
            trigger: a(() => [
              i(m, {
                class: "big-icon-text-btn",
                onClick: n[0] || (n[0] = (z) => v.$emit("click")),
                disabled: e.disabled
              }, {
                default: a(() => [
                  o("div", F, [
                    o("div", H, [
                      i(l(g), h(b.value, {
                        "icon-color": e.iconColor,
                        size: e.iconSize || 24
                      }), null, 16, ["icon-color", "size"]),
                      o("div", D, [
                        o("span", S, d(e.label), 1),
                        e.showArrow ? (s(), r(u, {
                          key: 0,
                          size: "12",
                          style: { "margin-left": "2px" },
                          class: x(e.show ? "rotate-180" : "")
                        }, {
                          default: a(() => [
                            i(l(f))
                          ]),
                          _: 1
                        }, 8, ["class"])) : C("", !0)
                      ])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            default: a(() => [
              I(" " + d(e.tooltip), 1)
            ]),
            _: 1
          })) : (s(), r(m, {
            key: 1,
            class: "big-icon-text-btn",
            onClick: n[1] || (n[1] = (z) => v.$emit("click")),
            disabled: e.disabled
          }, {
            default: a(() => [
              o("div", $, [
                o("div", A, [
                  i(l(g), h(b.value, {
                    "icon-color": e.iconColor,
                    size: e.iconSize || 24
                  }), null, 16, ["icon-color", "size"]),
                  o("div", V, [
                    o("span", T, d(e.label), 1),
                    e.showArrow ? (s(), r(u, {
                      key: 0,
                      size: "12",
                      style: { "margin-left": "2px" },
                      class: x(e.show ? "rotate-180" : "")
                    }, {
                      default: a(() => [
                        i(l(f))
                      ]),
                      _: 1
                    }, 8, ["class"])) : C("", !0)
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
}), O = /* @__PURE__ */ N(W, [["__scopeId", "data-v-e58d3f49"]]);
export {
  O as I
};
