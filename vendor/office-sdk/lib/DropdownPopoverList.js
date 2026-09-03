import { d as w, o as n, c as r, a as k, aj as m, a1 as i, a4 as s, a2 as c, ax as C, am as B, aV as S, av as $, aw as M, ad as V, au as z, ab as h, ao as f, ay as d } from "./ApiBase.js?t=1788405500779";
const L = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, N = w({
  name: "Checkmark",
  render: function(u, o) {
    return n(), r(
      "svg",
      L,
      o[0] || (o[0] = [
        k(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M416 128L192 384l-96-96"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
}), W = ["onMousedown"], U = /* @__PURE__ */ w({
  __name: "DropdownPopoverList",
  props: {
    options: {},
    disabled: { type: Boolean, default: !1 },
    show: { type: Boolean },
    placement: { default: "bottom-start" },
    trigger: { default: "click" },
    to: { type: [Boolean, String], default: "body" },
    maxHeight: { default: 300 },
    maxWidth: { default: 200 },
    showChecked: { type: Boolean, default: !1 },
    space: {}
  },
  emits: ["update:show", "select", "clickoutside"],
  setup(e, { emit: u }) {
    const o = e, l = u, g = {
      Scrollbar: {
        scrollbarColor: "var(--active-bg)"
      }
    };
    function v(t) {
      o.disabled || l("update:show", t);
    }
    function p() {
      o.disabled || l("clickoutside");
    }
    function x(t) {
      o.disabled || (l("select", t.value), l("update:show", !1));
    }
    return (t, j) => {
      const b = m("n-icon"), y = m("n-config-provider");
      return n(), r("div", null, [
        i(y, { "theme-overrides": g }, {
          default: s(() => [
            i(c(C), {
              show: e.show && !e.disabled,
              trigger: e.trigger,
              placement: e.placement,
              "show-arrow": !1,
              style: B({ maxWidth: e.maxWidth + "px" }),
              "onUpdate:show": v,
              onClickoutside: p,
              to: e.to,
              space: e.space
            }, {
              trigger: s(() => [
                d(t.$slots, "default")
              ]),
              default: s(() => [
                i(c(S), { "max-height": e.maxHeight }, {
                  default: s(() => [
                    (n(!0), r($, null, M(e.options, (a) => (n(), r("div", {
                      key: a.value,
                      class: z(["global-basic-display-text global-menu-list-item", { active: a.checked && !a.multiCheck }]),
                      onMousedown: V((H) => x(a), ["prevent"])
                    }, [
                      e.showChecked ? (n(), h(b, {
                        key: 0,
                        size: "16"
                      }, {
                        default: s(() => [
                          a.checked ? (n(), h(c(N), { key: 0 })) : f("", !0)
                        ]),
                        _: 2
                      }, 1024)) : f("", !0),
                      k("span", null, [
                        d(t.$slots, "option", {
                          item: a,
                          checked: a.checked
                        })
                      ])
                    ], 42, W))), 128))
                  ]),
                  _: 3
                }, 8, ["max-height"]),
                d(t.$slots, "footer")
              ]),
              _: 3
            }, 8, ["show", "trigger", "placement", "style", "to", "space"])
          ]),
          _: 3
        })
      ]);
    };
  }
});
export {
  U as _
};
