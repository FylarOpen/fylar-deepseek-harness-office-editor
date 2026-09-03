var zl = Object.defineProperty;
var Dl = (e, t, a) => t in e ? zl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var Le = (e, t, a) => Dl(e, typeof t != "symbol" ? t + "" : t, a);
import { d as J, o as V, c as Y, a as ae, h as le, b as Fl, e as El, s as Vl, f as Ll, g as Zl, i as Il, j as Ta, k as Ae, r as y, N as Ha, l as Ut, m as _l, n as Bl, p as Ol, q as F, t as Nl, u as Me, v as Lt, w as Xl, x as zt, y as jl, z as Ra, A as fe, B as _e, C as ye, D as da, E as Qe, F as st, G as Ul, H as za, I as Wt, J as ca, K as ua, V as Wl, L as ft, X as ha, M as Kl, O as ql, P as pa, Q as mt, R as Dt, S as ne, T as Oe, U as ce, W as fa, Y as He, Z as Gl, _ as Ql, $ as Yl, a0 as ie, a1 as r, a2 as M, a3 as Da, a4 as h, a5 as Jl, a6 as We, a7 as ee, a8 as Be, a9 as be, aa as Fa, ab as $, ac as Ea, ad as Pt, ae as Va, af as La, ag as Za, ah as Qt, ai as Ne, aj as _, ak as ct, al as Pe, am as we, an as ma, ao as Se, ap as je, aq as Ue, ar as xt, as as $e, at as ke, au as Ct, av as et, aw as ut, ax as Ia, ay as $l, az as _a, aA as en, aB as tn, aC as an, aD as gt, aE as ln, aF as Ba, aG as Oa, aH as Na, aI as Xe, aJ as Xa, aK as aa, aL as nn, aM as An, aN as on, aO as rn, aP as ja, aQ as Et, aR as Yt, aS as sn, aT as dn, aU as Je, aV as Zt, aW as cn, aX as Ua, aY as Jt, aZ as Wa, a_ as un, a$ as hn, b0 as Ft, b1 as pn, b2 as fn, b3 as mn, b4 as gn, b5 as vn, b6 as bn, b7 as yn, b8 as wn, b9 as xn, ba as Cn, bb as Pn, bc as Sn, bd as kn, be as Mn, bf as Tn, bg as Hn, bh as Rn, bi as zn, bj as Dn, bk as Fn, bl as En, bm as Vn, bn as Ln, bo as Zn, bp as In, bq as _n, br as Bn, bs as On, bt as Nn, bu as Xn, bv as jn, bw as Un, bx as Wn, by as Kn, bz as qn, bA as Gn, bB as Qn, bC as Yn, bD as Jn, bE as $n, bF as eA, bG as tA, bH as aA, bI as ga, bJ as lA, bK as nA, bL as AA, bM as oA, bN as rA, bO as iA, bP as va, bQ as sA, bR as dA, bS as cA, bT as uA, bU as hA, bV as pA, bW as fA, bX as mA } from "./ApiBase.js?t=1788405500779";
import { a as gA, O as ba, c as ya, d as wa } from "./UI.runtime.js?t=1788405500779";
import { N as vA, a as bA, b as yA, c as wA } from "./assets/Form-nD5OzkSv.js?t=1788405500779";
const xA = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, CA = J({
  name: "Heart",
  render: function(t, a) {
    return V(), Y(
      "svg",
      xA,
      a[0] || (a[0] = [
        ae(
          "path",
          {
            d: "M256 448a32 32 0 0 1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8c-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 0 0 9.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64c.54 54.21-18.63 104.26-58.61 153c-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 0 1-18 5.56z",
            fill: "currentColor"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
function Ka(e) {
  return typeof e == "string" ? `s-${e}` : `n-${e}`;
}
const PA = J({
  name: "Switcher",
  render() {
    return le("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, le("path", {
      d: "M12 8l10 8l-10 8z"
    }));
  }
});
function SA(e) {
  const {
    borderRadiusSmall: t,
    dividerColor: a,
    hoverColor: n,
    pressedColor: o,
    primaryColor: A,
    textColor3: c,
    textColor2: s,
    textColorDisabled: i,
    fontSize: d
  } = e;
  return {
    fontSize: d,
    lineHeight: "1.5",
    nodeHeight: "30px",
    nodeWrapperPadding: "3px 0",
    nodeBorderRadius: t,
    nodeColorHover: n,
    nodeColorPressed: o,
    nodeColorActive: Il(A, {
      alpha: 0.1
    }),
    arrowColor: c,
    nodeTextColor: s,
    nodeTextColorDisabled: i,
    loadingColor: A,
    dropMarkColor: A,
    lineColor: a
  };
}
const kA = Fl({
  name: "Tree",
  common: Zl,
  peers: {
    Checkbox: Ll,
    Scrollbar: Vl,
    Empty: El
  },
  self: SA
}), qa = Ta("n-tree-select");
function xa({
  position: e,
  offsetLevel: t,
  indent: a,
  el: n
}) {
  const o = {
    position: "absolute",
    boxSizing: "border-box",
    right: 0
  };
  if (e === "inside")
    o.left = 0, o.top = 0, o.bottom = 0, o.borderRadius = "inherit", o.boxShadow = "inset 0 0 0 2px var(--n-drop-mark-color)";
  else {
    const A = e === "before" ? "top" : "bottom";
    o[A] = 0, o.left = `${n.offsetLeft + 6 - t * a}px`, o.height = "2px", o.backgroundColor = "var(--n-drop-mark-color)", o.transformOrigin = A, o.borderRadius = "1px", o.transform = e === "before" ? "translateY(-4px)" : "translateY(4px)";
  }
  return le("div", {
    style: o
  });
}
function MA({
  dropPosition: e,
  node: t
}) {
  return t.isLeaf === !1 || t.children ? !0 : e !== "inside";
}
const St = Ta("n-tree");
function TA({
  props: e,
  fNodesRef: t,
  mergedExpandedKeysRef: a,
  mergedSelectedKeysRef: n,
  mergedCheckedKeysRef: o,
  handleCheck: A,
  handleSelect: c,
  handleSwitcherClick: s
}) {
  const {
    value: i
  } = n, d = Ae(qa, null), m = d ? d.pendingNodeKeyRef : y(i.length ? i[i.length - 1] : null);
  function p(w) {
    var H;
    if (!e.keyboard) return {
      enterBehavior: null
    };
    const {
      value: v
    } = m;
    let x = null;
    if (v === null) {
      if ((w.key === "ArrowDown" || w.key === "ArrowUp") && w.preventDefault(), ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(w.key) && v === null) {
        const {
          value: T
        } = t;
        let S = 0;
        for (; S < T.length; ) {
          if (!T[S].disabled) {
            m.value = T[S].key;
            break;
          }
          S += 1;
        }
      }
    } else {
      const {
        value: T
      } = t;
      let S = T.findIndex((C) => C.key === v);
      if (!~S) return {
        enterBehavior: null
      };
      if (w.key === "Enter") {
        const C = T[S];
        switch (x = ((H = e.overrideDefaultNodeClickBehavior) === null || H === void 0 ? void 0 : H.call(e, {
          option: C.rawNode
        })) || null, x) {
          case "toggleCheck":
            A(C, !o.value.includes(C.key));
            break;
          case "toggleSelect":
            c(C);
            break;
          case "toggleExpand":
            s(C);
            break;
          case "none":
            break;
          case "default":
          default:
            x = "default", c(C);
        }
      } else if (w.key === "ArrowDown")
        for (w.preventDefault(), S += 1; S < T.length; ) {
          if (!T[S].disabled) {
            m.value = T[S].key;
            break;
          }
          S += 1;
        }
      else if (w.key === "ArrowUp")
        for (w.preventDefault(), S -= 1; S >= 0; ) {
          if (!T[S].disabled) {
            m.value = T[S].key;
            break;
          }
          S -= 1;
        }
      else if (w.key === "ArrowLeft") {
        const C = T[S];
        if (C.isLeaf || !a.value.includes(v)) {
          const u = C.getParent();
          u && (m.value = u.key);
        } else
          s(C);
      } else if (w.key === "ArrowRight") {
        const C = T[S];
        if (C.isLeaf) return {
          enterBehavior: null
        };
        if (!a.value.includes(v))
          s(C);
        else
          for (S += 1; S < T.length; ) {
            if (!T[S].disabled) {
              m.value = T[S].key;
              break;
            }
            S += 1;
          }
      }
    }
    return {
      enterBehavior: x
    };
  }
  return {
    pendingNodeKeyRef: m,
    handleKeydown: p
  };
}
const HA = J({
  name: "NTreeNodeCheckbox",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    indent: {
      type: Number,
      required: !0
    },
    right: Boolean,
    focusable: Boolean,
    disabled: Boolean,
    checked: Boolean,
    indeterminate: Boolean,
    onCheck: Function
  },
  setup(e) {
    const t = Ae(St);
    function a(o) {
      const {
        onCheck: A
      } = e;
      A && A(o);
    }
    function n(o) {
      a(o);
    }
    return {
      handleUpdateValue: n,
      mergedTheme: t.mergedThemeRef
    };
  },
  render() {
    const {
      clsPrefix: e,
      mergedTheme: t,
      checked: a,
      indeterminate: n,
      disabled: o,
      focusable: A,
      indent: c,
      handleUpdateValue: s
    } = this;
    return le("span", {
      class: [`${e}-tree-node-checkbox`, this.right && `${e}-tree-node-checkbox--right`],
      style: {
        width: `${c}px`
      },
      "data-checkbox": !0
    }, le(Ha, {
      focusable: A,
      disabled: o,
      theme: t.peers.Checkbox,
      themeOverrides: t.peerOverrides.Checkbox,
      checked: a,
      indeterminate: n,
      onUpdateChecked: s
    }));
  }
}), RA = J({
  name: "TreeNodeContent",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    disabled: Boolean,
    checked: Boolean,
    selected: Boolean,
    onClick: Function,
    onDragstart: Function,
    tmNode: {
      type: Object,
      required: !0
    },
    nodeProps: Object
  },
  setup(e) {
    const {
      renderLabelRef: t,
      renderPrefixRef: a,
      renderSuffixRef: n,
      labelFieldRef: o
    } = Ae(St), A = y(null);
    function c(i) {
      const {
        onClick: d
      } = e;
      d && d(i);
    }
    function s(i) {
      c(i);
    }
    return {
      selfRef: A,
      renderLabel: t,
      renderPrefix: a,
      renderSuffix: n,
      labelField: o,
      handleClick: s
    };
  },
  render() {
    const {
      clsPrefix: e,
      labelField: t,
      nodeProps: a,
      checked: n = !1,
      selected: o = !1,
      renderLabel: A,
      renderPrefix: c,
      renderSuffix: s,
      handleClick: i,
      onDragstart: d,
      tmNode: {
        rawNode: m,
        rawNode: {
          prefix: p,
          suffix: w,
          [t]: H
        }
      }
    } = this;
    return le("span", Object.assign({}, a, {
      ref: "selfRef",
      class: [`${e}-tree-node-content`, a == null ? void 0 : a.class],
      onClick: i,
      draggable: d === void 0 ? void 0 : !0,
      onDragstart: d
    }), c || p ? le("div", {
      class: `${e}-tree-node-content__prefix`
    }, c ? c({
      option: m,
      selected: o,
      checked: n
    }) : Ut(p)) : null, le("div", {
      class: `${e}-tree-node-content__text`
    }, A ? A({
      option: m,
      selected: o,
      checked: n
    }) : Ut(H)), s || w ? le("div", {
      class: `${e}-tree-node-content__suffix`
    }, s ? s({
      option: m,
      selected: o,
      checked: n
    }) : Ut(w)) : null);
  }
}), zA = J({
  name: "NTreeSwitcher",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    indent: {
      type: Number,
      required: !0
    },
    expanded: Boolean,
    selected: Boolean,
    hide: Boolean,
    loading: Boolean,
    onClick: Function,
    tmNode: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const {
      renderSwitcherIconRef: t,
      spinPropsRef: a
    } = Ae(St, null);
    return () => {
      const {
        clsPrefix: n,
        expanded: o,
        hide: A,
        indent: c,
        onClick: s
      } = e;
      return le("span", {
        "data-switcher": !0,
        class: [`${n}-tree-node-switcher`, o && `${n}-tree-node-switcher--expanded`, A && `${n}-tree-node-switcher--hide`],
        style: {
          width: `${c}px`
        },
        onClick: s
      }, le("div", {
        class: `${n}-tree-node-switcher__icon`
      }, le(_l, null, {
        default: () => {
          if (e.loading)
            return le(Bl, Object.assign({
              clsPrefix: n,
              key: "loading",
              radius: 85,
              strokeWidth: 20
            }, a == null ? void 0 : a.value));
          const {
            value: i
          } = t;
          return i ? i({
            expanded: e.expanded,
            selected: e.selected,
            option: e.tmNode.rawNode
          }) : le(Ol, {
            clsPrefix: n,
            key: "switcher"
          }, {
            default: () => le(PA, null)
          });
        }
      })));
    };
  }
});
function DA(e) {
  return F(() => e.leafOnly ? "child" : e.checkStrategy);
}
function qe(e, t) {
  return !!e.rawNode[t];
}
function Ga(e, t, a, n) {
  e == null || e.forEach((o) => {
    a(o), Ga(o[t], t, a, n), n(o);
  });
}
function FA(e, t, a, n, o) {
  const A = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), s = [];
  return Ga(e, n, (i) => {
    if (s.push(i), o(t, i)) {
      c.add(i[a]);
      for (let d = s.length - 2; d >= 0; --d)
        if (!A.has(s[d][a]))
          A.add(s[d][a]);
        else
          return;
    }
  }, () => {
    s.pop();
  }), {
    expandedKeys: Array.from(A),
    highlightKeySet: c
  };
}
if (Nl && Image) {
  const e = new Image();
  e.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
}
function EA(e, t, a, n, o) {
  const A = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), i = [], d = [], m = [];
  function p(H) {
    H.forEach((v) => {
      if (m.push(v), t(a, v)) {
        A.add(v[n]), s.add(v[n]);
        for (let T = m.length - 2; T >= 0; --T) {
          const S = m[T][n];
          if (!c.has(S))
            c.add(S), A.has(S) && A.delete(S);
          else
            break;
        }
      }
      const x = v[o];
      x && p(x), m.pop();
    });
  }
  p(e);
  function w(H, v) {
    H.forEach((x) => {
      const T = x[n], S = A.has(T), C = c.has(T);
      if (!S && !C) return;
      const u = x[o];
      if (u)
        if (S)
          v.push(x);
        else {
          i.push(T);
          const z = Object.assign(Object.assign({}, x), {
            [o]: []
          });
          v.push(z), w(u, z[o]);
        }
      else
        v.push(x);
    });
  }
  return w(e, d), {
    filteredTree: d,
    highlightKeySet: s,
    expandedKeys: i
  };
}
const Qa = J({
  name: "TreeNode",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    tmNode: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = Ae(St), {
      droppingNodeParentRef: a,
      droppingMouseNodeRef: n,
      draggingNodeRef: o,
      droppingPositionRef: A,
      droppingOffsetLevelRef: c,
      nodePropsRef: s,
      indentRef: i,
      blockLineRef: d,
      checkboxPlacementRef: m,
      checkOnClickRef: p,
      disabledFieldRef: w,
      showLineRef: H,
      renderSwitcherIconRef: v,
      overrideDefaultNodeClickBehaviorRef: x
    } = t, T = Me(() => !!e.tmNode.rawNode.checkboxDisabled), S = Me(() => qe(e.tmNode, w.value)), C = Me(() => t.disabledRef.value || S.value), u = F(() => {
      const {
        value: D
      } = s;
      if (D)
        return D({
          option: e.tmNode.rawNode
        });
    }), z = y(null), k = {
      value: null
    };
    Lt(() => {
      k.value = z.value.$el;
    });
    function Z() {
      const D = () => {
        const {
          tmNode: O
        } = e;
        if (!O.isLeaf && !O.shallowLoaded) {
          if (!t.loadingKeysRef.value.has(O.key))
            t.loadingKeysRef.value.add(O.key);
          else
            return;
          const {
            onLoadRef: {
              value: X
            }
          } = t;
          X && X(O.rawNode).then((G) => {
            G !== !1 && t.handleSwitcherClick(O);
          }).finally(() => {
            t.loadingKeysRef.value.delete(O.key);
          });
        } else
          t.handleSwitcherClick(O);
      };
      v.value ? setTimeout(D, 0) : D();
    }
    const j = Me(() => !S.value && t.selectableRef.value && (t.internalTreeSelect ? t.mergedCheckStrategyRef.value !== "child" || t.multipleRef.value && t.cascadeRef.value || e.tmNode.isLeaf : !0)), L = Me(() => t.checkableRef.value && (t.cascadeRef.value || t.mergedCheckStrategyRef.value !== "child" || e.tmNode.isLeaf)), b = Me(() => t.displayedCheckedKeysRef.value.includes(e.tmNode.key)), P = Me(() => {
      const {
        value: D
      } = L;
      if (!D) return !1;
      const {
        value: O
      } = p, {
        tmNode: X
      } = e;
      return typeof O == "boolean" ? !X.disabled && O : O(e.tmNode.rawNode);
    });
    function E(D) {
      const {
        value: O
      } = t.expandOnClickRef, {
        value: X
      } = j, {
        value: G
      } = P;
      if (!X && !O && !G || zt(D, "checkbox") || zt(D, "switcher")) return;
      const {
        tmNode: me
      } = e;
      X && t.handleSelect(me), O && !me.isLeaf && Z(), G && se(!b.value);
    }
    function W(D) {
      var O, X;
      if (!(zt(D, "checkbox") || zt(D, "switcher"))) {
        if (!C.value) {
          const G = x.value;
          let me = !1;
          if (G)
            switch (G({
              option: e.tmNode.rawNode
            })) {
              case "toggleCheck":
                me = !0, se(!b.value);
                break;
              case "toggleSelect":
                me = !0, t.handleSelect(e.tmNode);
                break;
              case "toggleExpand":
                me = !0, Z(), me = !0;
                break;
              case "none":
                me = !0, me = !0;
                return;
            }
          me || E(D);
        }
        (X = (O = u.value) === null || O === void 0 ? void 0 : O.onClick) === null || X === void 0 || X.call(O, D);
      }
    }
    function te(D) {
      d.value || W(D);
    }
    function q(D) {
      d.value && W(D);
    }
    function se(D) {
      t.handleCheck(e.tmNode, D);
    }
    function re(D) {
      t.handleDragStart({
        event: D,
        node: e.tmNode
      });
    }
    function pe(D) {
      D.currentTarget === D.target && t.handleDragEnter({
        event: D,
        node: e.tmNode
      });
    }
    function N(D) {
      D.preventDefault(), t.handleDragOver({
        event: D,
        node: e.tmNode
      });
    }
    function I(D) {
      t.handleDragEnd({
        event: D,
        node: e.tmNode
      });
    }
    function Q(D) {
      D.currentTarget === D.target && t.handleDragLeave({
        event: D,
        node: e.tmNode
      });
    }
    function xe(D) {
      D.preventDefault(), A.value !== null && t.handleDrop({
        event: D,
        node: e.tmNode,
        dropPosition: A.value
      });
    }
    const Fe = F(() => {
      const {
        clsPrefix: D
      } = e, {
        value: O
      } = i;
      if (H.value) {
        const X = [];
        let G = e.tmNode.parent;
        for (; G; )
          G.isLastChild ? X.push(le("div", {
            class: `${D}-tree-node-indent`
          }, le("div", {
            style: {
              width: `${O}px`
            }
          }))) : X.push(le("div", {
            class: [`${D}-tree-node-indent`, `${D}-tree-node-indent--show-line`]
          }, le("div", {
            style: {
              width: `${O}px`
            }
          }))), G = G.parent;
        return X.reverse();
      } else
        return Xl(e.tmNode.level, le("div", {
          class: `${e.clsPrefix}-tree-node-indent`
        }, le("div", {
          style: {
            width: `${O}px`
          }
        })));
    });
    return {
      showDropMark: Me(() => {
        const {
          value: D
        } = o;
        if (!D) return;
        const {
          value: O
        } = A;
        if (!O) return;
        const {
          value: X
        } = n;
        if (!X)
          return;
        const {
          tmNode: G
        } = e;
        return G.key === X.key;
      }),
      showDropMarkAsParent: Me(() => {
        const {
          value: D
        } = a;
        if (!D) return !1;
        const {
          tmNode: O
        } = e, {
          value: X
        } = A;
        return X === "before" || X === "after" ? D.key === O.key : !1;
      }),
      pending: Me(() => t.pendingNodeKeyRef.value === e.tmNode.key),
      loading: Me(() => t.loadingKeysRef.value.has(e.tmNode.key)),
      highlight: Me(() => {
        var D;
        return (D = t.highlightKeySetRef.value) === null || D === void 0 ? void 0 : D.has(e.tmNode.key);
      }),
      checked: b,
      indeterminate: Me(() => t.displayedIndeterminateKeysRef.value.includes(e.tmNode.key)),
      selected: Me(() => t.mergedSelectedKeysRef.value.includes(e.tmNode.key)),
      expanded: Me(() => t.mergedExpandedKeysRef.value.includes(e.tmNode.key)),
      disabled: C,
      checkable: L,
      mergedCheckOnClick: P,
      checkboxDisabled: T,
      selectable: j,
      expandOnClick: t.expandOnClickRef,
      internalScrollable: t.internalScrollableRef,
      draggable: t.draggableRef,
      blockLine: d,
      nodeProps: u,
      checkboxFocusable: t.internalCheckboxFocusableRef,
      droppingPosition: A,
      droppingOffsetLevel: c,
      indent: i,
      checkboxPlacement: m,
      showLine: H,
      contentInstRef: z,
      contentElRef: k,
      indentNodes: Fe,
      handleCheck: se,
      handleDrop: xe,
      handleDragStart: re,
      handleDragEnter: pe,
      handleDragOver: N,
      handleDragEnd: I,
      handleDragLeave: Q,
      handleLineClick: q,
      handleContentClick: te,
      handleSwitcherClick: Z
    };
  },
  render() {
    const {
      tmNode: e,
      clsPrefix: t,
      checkable: a,
      expandOnClick: n,
      selectable: o,
      selected: A,
      checked: c,
      highlight: s,
      draggable: i,
      blockLine: d,
      indent: m,
      indentNodes: p,
      disabled: w,
      pending: H,
      internalScrollable: v,
      nodeProps: x,
      checkboxPlacement: T
    } = this, S = i && !w ? {
      onDragenter: this.handleDragEnter,
      onDragleave: this.handleDragLeave,
      onDragend: this.handleDragEnd,
      onDrop: this.handleDrop,
      onDragover: this.handleDragOver
    } : void 0, C = v ? Ka(e.key) : void 0, u = T === "right", z = a ? le(HA, {
      indent: m,
      right: u,
      focusable: this.checkboxFocusable,
      disabled: w || this.checkboxDisabled,
      clsPrefix: t,
      checked: this.checked,
      indeterminate: this.indeterminate,
      onCheck: this.handleCheck
    }) : null;
    return le("div", Object.assign({
      class: `${t}-tree-node-wrapper`
    }, S), le("div", Object.assign({}, d ? x : void 0, {
      class: [`${t}-tree-node`, {
        [`${t}-tree-node--selected`]: A,
        [`${t}-tree-node--checkable`]: a,
        [`${t}-tree-node--highlight`]: s,
        [`${t}-tree-node--pending`]: H,
        [`${t}-tree-node--disabled`]: w,
        [`${t}-tree-node--selectable`]: o,
        [`${t}-tree-node--clickable`]: o || n || this.mergedCheckOnClick
      }, x == null ? void 0 : x.class],
      "data-key": C,
      draggable: i && d,
      onClick: this.handleLineClick,
      onDragstart: i && d && !w ? this.handleDragStart : void 0
    }), p, e.isLeaf && this.showLine ? le("div", {
      class: [`${t}-tree-node-indent`, `${t}-tree-node-indent--show-line`, e.isLeaf && `${t}-tree-node-indent--is-leaf`, e.isLastChild && `${t}-tree-node-indent--last-child`]
    }, le("div", {
      style: {
        width: `${m}px`
      }
    })) : le(zA, {
      clsPrefix: t,
      expanded: this.expanded,
      selected: A,
      loading: this.loading,
      hide: e.isLeaf,
      tmNode: this.tmNode,
      indent: m,
      onClick: this.handleSwitcherClick
    }), u ? null : z, le(RA, {
      ref: "contentInstRef",
      clsPrefix: t,
      checked: c,
      selected: A,
      onClick: this.handleContentClick,
      nodeProps: d ? void 0 : x,
      onDragstart: i && !d && !w ? this.handleDragStart : void 0,
      tmNode: e
    }), i ? this.showDropMark ? xa({
      el: this.contentElRef.value,
      position: this.droppingPosition,
      offsetLevel: this.droppingOffsetLevel,
      indent: m
    }) : this.showDropMarkAsParent ? xa({
      el: this.contentElRef.value,
      position: "inside",
      offsetLevel: this.droppingOffsetLevel,
      indent: m
    }) : null : null, u ? z : null));
  }
}), VA = J({
  name: "TreeMotionWrapper",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    height: Number,
    nodes: {
      type: Array,
      required: !0
    },
    mode: {
      type: String,
      required: !0
    },
    onAfterEnter: {
      type: Function,
      required: !0
    }
  },
  render() {
    const {
      clsPrefix: e
    } = this;
    return le(jl, {
      onAfterEnter: this.onAfterEnter,
      appear: !0,
      reverse: this.mode === "collapse"
    }, {
      default: () => le("div", {
        class: [`${e}-tree-motion-wrapper`, `${e}-tree-motion-wrapper--${this.mode}`],
        style: {
          height: Ra(this.height)
        }
      }, this.nodes.map((t) => le(Qa, {
        clsPrefix: e,
        tmNode: t
      })))
    });
  }
}), Kt = Ul(), LA = fe("tree", `
 font-size: var(--n-font-size);
 outline: none;
`, [_e("ul, li", `
 margin: 0;
 padding: 0;
 list-style: none;
 `), _e(">", [fe("tree-node", [_e("&:first-child", "margin-top: 0;")])]), fe("tree-motion-wrapper", [ye("expand", [da({
  duration: "0.2s"
})]), ye("collapse", [da({
  duration: "0.2s",
  reverse: !0
})])]), fe("tree-node-wrapper", `
 box-sizing: border-box;
 padding: var(--n-node-wrapper-padding);
 `), fe("tree-node", `
 position: relative;
 display: flex;
 border-radius: var(--n-node-border-radius);
 transition: background-color .3s var(--n-bezier);
 `, [ye("highlight", [fe("tree-node-content", [Qe("text", "border-bottom-color: var(--n-node-text-color-disabled);")])]), ye("disabled", [fe("tree-node-content", `
 color: var(--n-node-text-color-disabled);
 cursor: not-allowed;
 `)]), st("disabled", [ye("clickable", [fe("tree-node-content", `
 cursor: pointer;
 `)])])]), ye("block-node", [fe("tree-node-content", `
 flex: 1;
 min-width: 0;
 `)]), st("block-line", [fe("tree-node", [st("disabled", [fe("tree-node-content", [_e("&:hover", "background: var(--n-node-color-hover);")]), ye("selectable", [fe("tree-node-content", [_e("&:active", "background: var(--n-node-color-pressed);")])]), ye("pending", [fe("tree-node-content", `
 background: var(--n-node-color-hover);
 `)]), ye("selected", [fe("tree-node-content", "background: var(--n-node-color-active);")])]), ye("selected", [fe("tree-node-content", "background: var(--n-node-color-active);")])])]), ye("block-line", [fe("tree-node", [st("disabled", [_e("&:hover", "background: var(--n-node-color-hover);"), ye("pending", `
 background: var(--n-node-color-hover);
 `), ye("selectable", [st("selected", [_e("&:active", "background: var(--n-node-color-pressed);")])]), ye("selected", "background: var(--n-node-color-active);")]), ye("selected", "background: var(--n-node-color-active);"), ye("disabled", `
 cursor: not-allowed;
 `)])]), ye("ellipsis", [fe("tree-node", [fe("tree-node-content", `
 overflow: hidden;
 `, [Qe("text", `
 text-overflow: ellipsis;
 white-space: nowrap;
 overflow: hidden;
 `)])])]), fe("tree-node-indent", `
 flex-grow: 0;
 flex-shrink: 0;
 `, [ye("show-line", "position: relative", [_e("&::before", `
 position: absolute;
 left: 50%;
 border-left: 1px solid var(--n-line-color);
 transition: border-color .3s var(--n-bezier);
 transform: translate(-50%);
 content: "";
 top: var(--n-line-offset-top);
 bottom: var(--n-line-offset-bottom);
 `), ye("last-child", [_e("&::before", `
 bottom: 50%;
 `)]), ye("is-leaf", [_e("&::after", `
 position: absolute;
 content: "";
 left: calc(50% + 0.5px);
 right: 0;
 bottom: 50%;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-line-color);
 `)])]), st("show-line", "height: 0;")]), fe("tree-node-switcher", `
 cursor: pointer;
 display: inline-flex;
 flex-shrink: 0;
 height: var(--n-node-content-height);
 align-items: center;
 justify-content: center;
 transition: transform .15s var(--n-bezier);
 vertical-align: bottom;
 `, [Qe("icon", `
 position: relative;
 height: 14px;
 width: 14px;
 display: flex;
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 font-size: 14px;
 `, [fe("icon", [Kt]), fe("base-loading", `
 color: var(--n-loading-color);
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [Kt]), fe("base-icon", [Kt])]), ye("hide", "visibility: hidden;"), ye("expanded", "transform: rotate(90deg);")]), fe("tree-node-checkbox", `
 display: inline-flex;
 height: var(--n-node-content-height);
 vertical-align: bottom;
 align-items: center;
 justify-content: center;
 `), fe("tree-node-content", `
 user-select: none;
 position: relative;
 display: inline-flex;
 align-items: center;
 min-height: var(--n-node-content-height);
 box-sizing: border-box;
 line-height: var(--n-line-height);
 vertical-align: bottom;
 padding: 0 6px 0 4px;
 cursor: default;
 border-radius: var(--n-node-border-radius);
 color: var(--n-node-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [_e("&:last-child", "margin-bottom: 0;"), Qe("prefix", `
 display: inline-flex;
 margin-right: 8px;
 `), Qe("text", `
 border-bottom: 1px solid #0000;
 transition: border-color .3s var(--n-bezier);
 flex-grow: 1;
 max-width: 100%;
 `), Qe("suffix", `
 display: inline-flex;
 `)]), Qe("empty", "margin: auto;")]);
var ZA = function(e, t, a, n) {
  function o(A) {
    return A instanceof a ? A : new a(function(c) {
      c(A);
    });
  }
  return new (a || (a = Promise))(function(A, c) {
    function s(m) {
      try {
        d(n.next(m));
      } catch (p) {
        c(p);
      }
    }
    function i(m) {
      try {
        d(n.throw(m));
      } catch (p) {
        c(p);
      }
    }
    function d(m) {
      m.done ? A(m.value) : o(m.value).then(s, i);
    }
    d((n = n.apply(e, [])).next());
  });
};
function Ca(e, t, a, n) {
  return {
    getIsGroup() {
      return !1;
    },
    getKey(A) {
      return A[e];
    },
    getChildren: n || ((A) => A[t]),
    getDisabled(A) {
      return !!(A[a] || A.checkboxDisabled);
    }
  };
}
const IA = {
  allowCheckingNotLoaded: Boolean,
  filter: Function,
  defaultExpandAll: Boolean,
  expandedKeys: Array,
  keyField: {
    type: String,
    default: "key"
  },
  labelField: {
    type: String,
    default: "label"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  disabledField: {
    type: String,
    default: "disabled"
  },
  defaultExpandedKeys: {
    type: Array,
    default: () => []
  },
  indent: {
    type: Number,
    default: 24
  },
  indeterminateKeys: Array,
  renderSwitcherIcon: Function,
  onUpdateIndeterminateKeys: [Function, Array],
  "onUpdate:indeterminateKeys": [Function, Array],
  onUpdateExpandedKeys: [Function, Array],
  "onUpdate:expandedKeys": [Function, Array],
  overrideDefaultNodeClickBehavior: Function
}, _A = Object.assign(Object.assign(Object.assign(Object.assign({}, za.props), {
  accordion: Boolean,
  showIrrelevantNodes: {
    type: Boolean,
    default: !0
  },
  data: {
    type: Array,
    default: () => []
  },
  expandOnDragenter: {
    type: Boolean,
    default: !0
  },
  expandOnClick: Boolean,
  checkOnClick: {
    type: [Boolean, Function],
    default: !1
  },
  cancelable: {
    type: Boolean,
    default: !0
  },
  checkable: Boolean,
  draggable: Boolean,
  blockNode: Boolean,
  blockLine: Boolean,
  showLine: Boolean,
  disabled: Boolean,
  checkedKeys: Array,
  defaultCheckedKeys: {
    type: Array,
    default: () => []
  },
  selectedKeys: Array,
  defaultSelectedKeys: {
    type: Array,
    default: () => []
  },
  multiple: Boolean,
  pattern: {
    type: String,
    default: ""
  },
  onLoad: Function,
  cascade: Boolean,
  selectable: {
    type: Boolean,
    default: !0
  },
  scrollbarProps: Object,
  allowDrop: {
    type: Function,
    default: MA
  },
  animated: {
    type: Boolean,
    default: !0
  },
  ellipsis: Boolean,
  checkboxPlacement: {
    type: String,
    default: "left"
  },
  virtualScroll: Boolean,
  watchProps: Array,
  renderLabel: Function,
  renderPrefix: Function,
  renderSuffix: Function,
  nodeProps: Function,
  keyboard: {
    type: Boolean,
    default: !0
  },
  getChildren: Function,
  onDragenter: [Function, Array],
  onDragleave: [Function, Array],
  onDragend: [Function, Array],
  onDragstart: [Function, Array],
  onDragover: [Function, Array],
  onDrop: [Function, Array],
  onUpdateCheckedKeys: [Function, Array],
  "onUpdate:checkedKeys": [Function, Array],
  onUpdateSelectedKeys: [Function, Array],
  "onUpdate:selectedKeys": [Function, Array]
}), IA), {
  // internal props for tree-select
  internalTreeSelect: Boolean,
  internalScrollable: Boolean,
  internalScrollablePadding: String,
  // use it to display
  internalRenderEmpty: Function,
  internalHighlightKeySet: Object,
  internalUnifySelectCheck: Boolean,
  internalCheckboxFocusable: {
    type: Boolean,
    default: !0
  },
  internalFocusable: {
    // Make tree-select take over keyboard operations
    type: Boolean,
    default: !0
  },
  checkStrategy: {
    type: String,
    default: "all"
  },
  spinProps: Object,
  /**
   * @deprecated
   */
  leafOnly: Boolean
}), BA = J({
  name: "Tree",
  props: _A,
  slots: Object,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: a,
      mergedRtlRef: n,
      mergedComponentPropsRef: o
    } = Kl(e), A = ql("Tree", n, t), c = za("Tree", "-tree", LA, kA, e, t), s = F(() => {
      var f, R;
      return (R = (f = o == null ? void 0 : o.value) === null || f === void 0 ? void 0 : f.Tree) === null || R === void 0 ? void 0 : R.renderEmpty;
    }), i = y(null), d = y(null), m = y(null);
    function p() {
      var f;
      return (f = m.value) === null || f === void 0 ? void 0 : f.listElRef;
    }
    function w() {
      var f;
      return (f = m.value) === null || f === void 0 ? void 0 : f.itemsElRef;
    }
    const H = F(() => {
      const {
        filter: f
      } = e;
      if (f) return f;
      const {
        labelField: R
      } = e;
      return (B, U) => {
        if (!B.length) return !0;
        const K = U[R];
        return typeof K == "string" ? K.toLowerCase().includes(B.toLowerCase()) : !1;
      };
    }), v = F(() => {
      const {
        pattern: f
      } = e;
      return f ? !f.length || !H.value ? {
        filteredTree: e.data,
        highlightKeySet: null,
        expandedKeys: void 0
      } : EA(e.data, H.value, f, e.keyField, e.childrenField) : {
        filteredTree: e.data,
        highlightKeySet: null,
        expandedKeys: void 0
      };
    }), x = F(() => pa(e.showIrrelevantNodes ? e.data : v.value.filteredTree, Ca(e.keyField, e.childrenField, e.disabledField, e.getChildren))), T = Ae(qa, null), S = e.internalTreeSelect ? T.dataTreeMate : F(() => e.showIrrelevantNodes ? x.value : pa(e.data, Ca(e.keyField, e.childrenField, e.disabledField, e.getChildren))), {
      watchProps: C
    } = e, u = y([]);
    C != null && C.includes("defaultCheckedKeys") ? mt(() => {
      u.value = e.defaultCheckedKeys;
    }) : u.value = e.defaultCheckedKeys;
    const z = ce(e, "checkedKeys"), k = Dt(z, u), Z = F(() => S.value.getCheckedKeys(k.value, {
      cascade: e.cascade,
      allowNotLoaded: e.allowCheckingNotLoaded
    })), j = DA(e), L = F(() => Z.value.checkedKeys), b = F(() => {
      const {
        indeterminateKeys: f
      } = e;
      return f !== void 0 ? f : Z.value.indeterminateKeys;
    }), P = y([]);
    C != null && C.includes("defaultSelectedKeys") ? mt(() => {
      P.value = e.defaultSelectedKeys;
    }) : P.value = e.defaultSelectedKeys;
    const E = ce(e, "selectedKeys"), W = Dt(E, P), te = y([]), q = (f) => {
      te.value = e.defaultExpandAll ? S.value.getNonLeafKeys() : f === void 0 ? e.defaultExpandedKeys : f;
    };
    C != null && C.includes("defaultExpandedKeys") ? mt(() => {
      q(void 0);
    }) : mt(() => {
      q(e.defaultExpandedKeys);
    });
    const se = ce(e, "expandedKeys"), re = Dt(se, te), pe = F(() => x.value.getFlattenedNodes(re.value)), {
      pendingNodeKeyRef: N,
      handleKeydown: I
    } = TA({
      props: e,
      mergedCheckedKeysRef: k,
      mergedSelectedKeysRef: W,
      fNodesRef: pe,
      mergedExpandedKeysRef: re,
      handleCheck: Nt,
      handleSelect: Xt,
      handleSwitcherClick: Aa
    });
    let Q = null, xe = null;
    const Fe = y(/* @__PURE__ */ new Set()), D = F(() => e.internalHighlightKeySet || v.value.highlightKeySet), O = Dt(D, Fe), X = y(/* @__PURE__ */ new Set()), G = F(() => re.value.filter((f) => !X.value.has(f)));
    let me = 0;
    const Ze = y(null), tt = y(null), kt = y(null), Mt = y(null), Tt = y(0), ol = F(() => {
      const {
        value: f
      } = tt;
      return f ? f.parent : null;
    });
    let It = !1;
    ne(ce(e, "data"), () => {
      It = !0, Oe(() => {
        It = !1;
      }), X.value.clear(), N.value = null, pt();
    }, {
      deep: !1
    });
    let _t = !1;
    const Bt = () => {
      _t = !0, Oe(() => {
        _t = !1;
      });
    };
    let ht;
    ne(ce(e, "pattern"), (f, R) => {
      if (e.showIrrelevantNodes)
        if (ht = void 0, f) {
          const {
            expandedKeys: B,
            highlightKeySet: U
          } = FA(e.data, e.pattern, e.keyField, e.childrenField, H.value);
          Fe.value = U, Bt(), lt(B, ze(B), {
            node: null,
            action: "filter"
          });
        } else
          Fe.value = /* @__PURE__ */ new Set();
      else if (!f.length)
        ht !== void 0 && (Bt(), lt(ht, ze(ht), {
          node: null,
          action: "filter"
        }));
      else {
        R.length || (ht = re.value);
        const {
          expandedKeys: B
        } = v.value;
        B !== void 0 && (Bt(), lt(B, ze(B), {
          node: null,
          action: "filter"
        }));
      }
    });
    function la(f) {
      return ZA(this, void 0, void 0, function* () {
        const {
          onLoad: R
        } = e;
        if (!R) {
          yield Promise.resolve();
          return;
        }
        const {
          value: B
        } = X;
        if (!B.has(f.key)) {
          B.add(f.key);
          try {
            (yield R(f.rawNode)) === !1 && nt();
          } catch (U) {
            console.error(U), nt();
          }
          B.delete(f.key);
        }
      });
    }
    mt(() => {
      var f;
      const {
        value: R
      } = x;
      if (!R) return;
      const {
        getNode: B
      } = R;
      (f = re.value) === null || f === void 0 || f.forEach((U) => {
        const K = B(U);
        K && !K.shallowLoaded && la(K);
      });
    });
    const at = y(!1), Ke = y([]);
    ne(G, (f, R) => {
      if (!e.animated || _t) {
        Oe(Ht);
        return;
      }
      if (It)
        return;
      const B = ft(c.value.self.nodeHeight), U = new Set(R);
      let K = null, ge = null;
      for (const he of f)
        if (!U.has(he)) {
          if (K !== null) return;
          K = he;
        }
      const Te = new Set(f);
      for (const he of R)
        if (!Te.has(he)) {
          if (ge !== null) return;
          ge = he;
        }
      if (K === null && ge === null)
        return;
      const {
        virtualScroll: De
      } = e, ot = (De ? m.value.listElRef : i.value).offsetHeight, rt = Math.ceil(ot / B) + 1;
      let Ee;
      if (K !== null && (Ee = R), ge !== null && (Ee === void 0 ? Ee = f : Ee = Ee.filter((he) => he !== ge)), at.value = !0, Ke.value = x.value.getFlattenedNodes(Ee), K !== null) {
        const he = Ke.value.findIndex((Ve) => Ve.key === K);
        if (~he) {
          const Ve = Ke.value[he].children;
          if (Ve) {
            const Ie = fa(Ve, f);
            Ke.value.splice(he + 1, 0, {
              __motion: !0,
              mode: "expand",
              height: De ? Ie.length * B : void 0,
              nodes: De ? Ie.slice(0, rt) : Ie
            });
          }
        }
      }
      if (ge !== null) {
        const he = Ke.value.findIndex((Ve) => Ve.key === ge);
        if (~he) {
          const Ve = Ke.value[he].children;
          if (!Ve) return;
          at.value = !0;
          const Ie = fa(Ve, f);
          Ke.value.splice(he + 1, 0, {
            __motion: !0,
            mode: "collapse",
            height: De ? Ie.length * B : void 0,
            nodes: De ? Ie.slice(0, rt) : Ie
          });
        }
      }
    });
    const rl = F(() => Yl(pe.value)), il = F(() => at.value ? Ke.value : pe.value);
    function Ht() {
      const {
        value: f
      } = d;
      f && f.sync();
    }
    function sl() {
      at.value = !1, e.virtualScroll && Oe(Ht);
    }
    function ze(f) {
      const {
        getNode: R
      } = S.value;
      return f.map((B) => {
        var U;
        return ((U = R(B)) === null || U === void 0 ? void 0 : U.rawNode) || null;
      });
    }
    function lt(f, R, B) {
      const {
        "onUpdate:expandedKeys": U,
        onUpdateExpandedKeys: K
      } = e;
      te.value = f, U && He(U, f, R, B), K && He(K, f, R, B);
    }
    function na(f, R, B) {
      const {
        "onUpdate:checkedKeys": U,
        onUpdateCheckedKeys: K
      } = e;
      u.value = f, K && He(K, f, R, B), U && He(U, f, R, B);
    }
    function dl(f, R) {
      const {
        "onUpdate:indeterminateKeys": B,
        onUpdateIndeterminateKeys: U
      } = e;
      B && He(B, f, R), U && He(U, f, R);
    }
    function Ot(f, R, B) {
      const {
        "onUpdate:selectedKeys": U,
        onUpdateSelectedKeys: K
      } = e;
      P.value = f, K && He(K, f, R, B), U && He(U, f, R, B);
    }
    function cl(f) {
      const {
        onDragenter: R
      } = e;
      R && He(R, f);
    }
    function ul(f) {
      const {
        onDragleave: R
      } = e;
      R && He(R, f);
    }
    function hl(f) {
      const {
        onDragend: R
      } = e;
      R && He(R, f);
    }
    function pl(f) {
      const {
        onDragstart: R
      } = e;
      R && He(R, f);
    }
    function fl(f) {
      const {
        onDragover: R
      } = e;
      R && He(R, f);
    }
    function ml(f) {
      const {
        onDrop: R
      } = e;
      R && He(R, f);
    }
    function pt() {
      gl(), Ge();
    }
    function gl() {
      Ze.value = null;
    }
    function Ge() {
      Tt.value = 0, tt.value = null, kt.value = null, Mt.value = null, nt();
    }
    function nt() {
      Q && (window.clearTimeout(Q), Q = null), xe = null;
    }
    function Nt(f, R) {
      if (e.disabled || qe(f, e.disabledField))
        return;
      if (e.internalUnifySelectCheck && !e.multiple) {
        Xt(f);
        return;
      }
      const B = R ? "check" : "uncheck", {
        checkedKeys: U,
        indeterminateKeys: K
      } = S.value[B](f.key, L.value, {
        cascade: e.cascade,
        checkStrategy: j.value,
        allowNotLoaded: e.allowCheckingNotLoaded
      });
      na(U, ze(U), {
        node: f.rawNode,
        action: B
      }), dl(K, ze(K));
    }
    function vl(f) {
      if (e.disabled) return;
      const {
        key: R
      } = f, {
        value: B
      } = re, U = B.findIndex((K) => K === R);
      if (~U) {
        const K = Array.from(B);
        K.splice(U, 1), lt(K, ze(K), {
          node: f.rawNode,
          action: "collapse"
        });
      } else {
        const K = x.value.getNode(R);
        if (!K || K.isLeaf)
          return;
        let ge;
        if (e.accordion) {
          const Te = new Set(f.siblings.map(({
            key: De
          }) => De));
          ge = B.filter((De) => !Te.has(De)), ge.push(R);
        } else
          ge = B.concat(R);
        lt(ge, ze(ge), {
          node: f.rawNode,
          action: "expand"
        });
      }
    }
    function Aa(f) {
      e.disabled || at.value || vl(f);
    }
    function Xt(f) {
      if (!(e.disabled || !e.selectable)) {
        if (N.value = f.key, e.internalUnifySelectCheck) {
          const {
            value: {
              checkedKeys: R,
              indeterminateKeys: B
            }
          } = Z;
          e.multiple ? Nt(f, !(R.includes(f.key) || B.includes(f.key))) : na([f.key], ze([f.key]), {
            node: f.rawNode,
            action: "check"
          });
        }
        if (e.multiple) {
          const R = Array.from(W.value), B = R.findIndex((U) => U === f.key);
          ~B ? e.cancelable && R.splice(B, 1) : ~B || R.push(f.key), Ot(R, ze(R), {
            node: f.rawNode,
            action: ~B ? "unselect" : "select"
          });
        } else
          W.value.includes(f.key) ? e.cancelable && Ot([], [], {
            node: f.rawNode,
            action: "unselect"
          }) : Ot([f.key], ze([f.key]), {
            node: f.rawNode,
            action: "select"
          });
      }
    }
    function bl(f) {
      if (Q && (window.clearTimeout(Q), Q = null), f.isLeaf) return;
      xe = f.key;
      const R = () => {
        if (xe !== f.key) return;
        const {
          value: B
        } = kt;
        if (B && B.key === f.key && !re.value.includes(f.key)) {
          const U = re.value.concat(f.key);
          lt(U, ze(U), {
            node: f.rawNode,
            action: "expand"
          });
        }
        Q = null, xe = null;
      };
      f.shallowLoaded ? Q = window.setTimeout(() => {
        R();
      }, 1e3) : Q = window.setTimeout(() => {
        la(f).then(() => {
          R();
        });
      }, 1e3);
    }
    function yl({
      event: f,
      node: R
    }) {
      !e.draggable || e.disabled || qe(R, e.disabledField) || (oa({
        event: f,
        node: R
      }, !1), cl({
        event: f,
        node: R.rawNode
      }));
    }
    function wl({
      event: f,
      node: R
    }) {
      !e.draggable || e.disabled || qe(R, e.disabledField) || ul({
        event: f,
        node: R.rawNode
      });
    }
    function xl(f) {
      f.target === f.currentTarget && Ge();
    }
    function Cl({
      event: f,
      node: R
    }) {
      pt(), !(!e.draggable || e.disabled || qe(R, e.disabledField)) && hl({
        event: f,
        node: R.rawNode
      });
    }
    function Pl({
      event: f,
      node: R
    }) {
      !e.draggable || e.disabled || qe(R, e.disabledField) || (me = f.clientX, Ze.value = R, pl({
        event: f,
        node: R.rawNode
      }));
    }
    function oa({
      event: f,
      node: R
    }, B = !0) {
      var U;
      if (!e.draggable || e.disabled || qe(R, e.disabledField))
        return;
      const {
        value: K
      } = Ze;
      if (!K) return;
      const {
        allowDrop: ge,
        indent: Te
      } = e;
      B && fl({
        event: f,
        node: R.rawNode
      });
      const De = f.currentTarget, {
        height: ot,
        top: rt
      } = De.getBoundingClientRect(), Ee = f.clientY - rt;
      let he;
      ge({
        node: R.rawNode,
        dropPosition: "inside",
        phase: "drag"
      }) ? Ee <= 8 ? he = "before" : Ee >= ot - 8 ? he = "after" : he = "inside" : Ee <= ot / 2 ? he = "before" : he = "after";
      const {
        value: Ie
      } = rl;
      let de, Ce;
      const it = Ie(R.key);
      if (it === null) {
        Ge();
        return;
      }
      let Rt = !1;
      he === "inside" ? (de = R, Ce = "inside") : he === "before" ? R.isFirstChild ? (de = R, Ce = "before") : (de = pe.value[it - 1], Ce = "after") : (de = R, Ce = "after"), !de.isLeaf && re.value.includes(de.key) && (Rt = !0, Ce === "after" && (de = pe.value[it + 1], de ? Ce = "before" : (de = R, Ce = "inside")));
      const ia = de;
      if (kt.value = ia, !Rt && K.isLastChild && K.key === de.key && (Ce = "after"), Ce === "after") {
        let sa = me - f.clientX, jt = 0;
        for (; sa >= Te / 2 && de.parent !== null && de.isLastChild && jt < 1; )
          sa -= Te, jt += 1, de = de.parent;
        Tt.value = jt;
      } else
        Tt.value = 0;
      if ((K.contains(de) || Ce === "inside" && ((U = K.parent) === null || U === void 0 ? void 0 : U.key) === de.key) && !(K.key === ia.key && K.key === de.key)) {
        Ge();
        return;
      }
      if (!ge({
        node: de.rawNode,
        dropPosition: Ce,
        phase: "drag"
      })) {
        Ge();
        return;
      }
      if (K.key === de.key)
        nt();
      else if (xe !== de.key)
        if (Ce === "inside") {
          if (e.expandOnDragenter) {
            if (bl(de), !de.shallowLoaded && xe !== de.key) {
              pt();
              return;
            }
          } else if (!de.shallowLoaded) {
            pt();
            return;
          }
        } else
          nt();
      else
        Ce !== "inside" && nt();
      Mt.value = Ce, tt.value = de;
    }
    function Sl({
      event: f,
      node: R,
      dropPosition: B
    }) {
      if (!e.draggable || e.disabled || qe(R, e.disabledField))
        return;
      const {
        value: U
      } = Ze, {
        value: K
      } = tt, {
        value: ge
      } = Mt;
      if (!(!U || !K || !ge) && e.allowDrop({
        node: K.rawNode,
        dropPosition: ge,
        phase: "drag"
      }) && U.key !== K.key) {
        if (ge === "before") {
          const Te = U.getNext({
            includeDisabled: !0
          });
          if (Te && Te.key === K.key) {
            Ge();
            return;
          }
        }
        if (ge === "after") {
          const Te = U.getPrev({
            includeDisabled: !0
          });
          if (Te && Te.key === K.key) {
            Ge();
            return;
          }
        }
        ml({
          event: f,
          node: K.rawNode,
          dragNode: U.rawNode,
          dropPosition: B
        }), pt();
      }
    }
    function kl() {
      Ht();
    }
    function Ml() {
      Ht();
    }
    function Tl(f) {
      var R;
      if (e.virtualScroll || e.internalScrollable) {
        const {
          value: B
        } = d;
        if (!((R = B == null ? void 0 : B.containerRef) === null || R === void 0) && R.contains(f.relatedTarget))
          return;
        N.value = null;
      } else {
        const {
          value: B
        } = i;
        if (B != null && B.contains(f.relatedTarget)) return;
        N.value = null;
      }
    }
    ne(N, (f) => {
      var R, B;
      if (f !== null) {
        if (e.virtualScroll)
          (R = m.value) === null || R === void 0 || R.scrollTo({
            key: f
          });
        else if (e.internalScrollable) {
          const {
            value: U
          } = d;
          if (U === null) return;
          const K = (B = U.contentRef) === null || B === void 0 ? void 0 : B.querySelector(`[data-key="${Ka(f)}"]`);
          if (!K) return;
          U.scrollTo({
            el: K
          });
        }
      }
    }), Gl(St, {
      loadingKeysRef: X,
      highlightKeySetRef: O,
      displayedCheckedKeysRef: L,
      displayedIndeterminateKeysRef: b,
      mergedSelectedKeysRef: W,
      mergedExpandedKeysRef: re,
      mergedThemeRef: c,
      mergedCheckStrategyRef: j,
      nodePropsRef: ce(e, "nodeProps"),
      disabledRef: ce(e, "disabled"),
      checkableRef: ce(e, "checkable"),
      selectableRef: ce(e, "selectable"),
      expandOnClickRef: ce(e, "expandOnClick"),
      onLoadRef: ce(e, "onLoad"),
      draggableRef: ce(e, "draggable"),
      blockLineRef: ce(e, "blockLine"),
      indentRef: ce(e, "indent"),
      cascadeRef: ce(e, "cascade"),
      checkOnClickRef: ce(e, "checkOnClick"),
      checkboxPlacementRef: e.checkboxPlacement,
      droppingMouseNodeRef: kt,
      droppingNodeParentRef: ol,
      draggingNodeRef: Ze,
      droppingPositionRef: Mt,
      droppingOffsetLevelRef: Tt,
      fNodesRef: pe,
      pendingNodeKeyRef: N,
      showLineRef: ce(e, "showLine"),
      disabledFieldRef: ce(e, "disabledField"),
      internalScrollableRef: ce(e, "internalScrollable"),
      internalCheckboxFocusableRef: ce(e, "internalCheckboxFocusable"),
      internalTreeSelect: e.internalTreeSelect,
      renderLabelRef: ce(e, "renderLabel"),
      renderPrefixRef: ce(e, "renderPrefix"),
      renderSuffixRef: ce(e, "renderSuffix"),
      renderSwitcherIconRef: ce(e, "renderSwitcherIcon"),
      labelFieldRef: ce(e, "labelField"),
      multipleRef: ce(e, "multiple"),
      overrideDefaultNodeClickBehaviorRef: ce(e, "overrideDefaultNodeClickBehavior"),
      spinPropsRef: ce(e, "spinProps"),
      handleSwitcherClick: Aa,
      handleDragEnd: Cl,
      handleDragEnter: yl,
      handleDragLeave: wl,
      handleDragStart: Pl,
      handleDrop: Sl,
      handleDragOver: oa,
      handleSelect: Xt,
      handleCheck: Nt
    });
    function Hl(f, R) {
      var B, U;
      typeof f == "number" ? (B = m.value) === null || B === void 0 || B.scrollTo(f, R || 0) : (U = m.value) === null || U === void 0 || U.scrollTo(f);
    }
    const Rl = {
      handleKeydown: I,
      scrollTo: Hl,
      getCheckedData: () => {
        if (!e.checkable) return {
          keys: [],
          options: []
        };
        const {
          checkedKeys: f
        } = Z.value;
        return {
          keys: f,
          options: ze(f)
        };
      },
      getIndeterminateData: () => {
        if (!e.checkable) return {
          keys: [],
          options: []
        };
        const {
          indeterminateKeys: f
        } = Z.value;
        return {
          keys: f,
          options: ze(f)
        };
      }
    }, ra = F(() => {
      const {
        common: {
          cubicBezierEaseInOut: f
        },
        self: {
          fontSize: R,
          nodeBorderRadius: B,
          nodeColorHover: U,
          nodeColorPressed: K,
          nodeColorActive: ge,
          arrowColor: Te,
          loadingColor: De,
          nodeTextColor: ot,
          nodeTextColorDisabled: rt,
          dropMarkColor: Ee,
          nodeWrapperPadding: he,
          nodeHeight: Ve,
          lineHeight: Ie,
          lineColor: de
        }
      } = c.value, Ce = Wt(he, "top"), it = Wt(he, "bottom"), Rt = Ra(ft(Ve) - ft(Ce) - ft(it));
      return {
        "--n-arrow-color": Te,
        "--n-loading-color": De,
        "--n-bezier": f,
        "--n-font-size": R,
        "--n-node-border-radius": B,
        "--n-node-color-active": ge,
        "--n-node-color-hover": U,
        "--n-node-color-pressed": K,
        "--n-node-text-color": ot,
        "--n-node-text-color-disabled": rt,
        "--n-drop-mark-color": Ee,
        "--n-node-wrapper-padding": he,
        "--n-line-offset-top": `-${Ce}`,
        "--n-line-offset-bottom": `-${it}`,
        "--n-node-content-height": Rt,
        "--n-line-height": Ie,
        "--n-line-color": de
      };
    }), At = a ? Ql("tree", void 0, ra, e) : void 0;
    return Object.assign(Object.assign({}, Rl), {
      mergedClsPrefix: t,
      mergedTheme: c,
      mergedRenderEmpty: s,
      rtlEnabled: A,
      fNodes: il,
      aip: at,
      selfElRef: i,
      virtualListInstRef: m,
      scrollbarInstRef: d,
      handleFocusout: Tl,
      handleDragLeaveTree: xl,
      handleScroll: kl,
      getScrollContainer: p,
      getScrollContent: w,
      handleAfterEnter: sl,
      handleResize: Ml,
      cssVars: a ? void 0 : ra,
      themeClass: At == null ? void 0 : At.themeClass,
      onRender: At == null ? void 0 : At.onRender
    });
  },
  render() {
    var e;
    const {
      fNodes: t,
      internalRenderEmpty: a
    } = this;
    if (!t.length && a)
      return a();
    const {
      mergedClsPrefix: n,
      blockNode: o,
      blockLine: A,
      draggable: c,
      disabled: s,
      ellipsis: i,
      internalFocusable: d,
      checkable: m,
      handleKeydown: p,
      rtlEnabled: w,
      handleFocusout: H,
      scrollbarProps: v
    } = this, x = d && !s, T = x ? "0" : void 0, S = [`${n}-tree`, w && `${n}-tree--rtl`, m && `${n}-tree--checkable`, (A || o) && `${n}-tree--block-node`, A && `${n}-tree--block-line`, i && `${n}-tree--ellipsis`], C = (z) => "__motion" in z ? le(VA, {
      height: z.height,
      nodes: z.nodes,
      clsPrefix: n,
      mode: z.mode,
      onAfterEnter: this.handleAfterEnter
    }) : le(Qa, {
      key: z.key,
      tmNode: z,
      clsPrefix: n
    });
    if (this.virtualScroll) {
      const {
        mergedTheme: z,
        internalScrollablePadding: k
      } = this, Z = Wt(k || "0");
      return le(ha, Object.assign({}, v, {
        ref: "scrollbarInstRef",
        onDragleave: c ? this.handleDragLeaveTree : void 0,
        container: this.getScrollContainer,
        content: this.getScrollContent,
        class: S,
        theme: z.peers.Scrollbar,
        themeOverrides: z.peerOverrides.Scrollbar,
        tabindex: T,
        onKeydown: x ? p : void 0,
        onFocusout: x ? H : void 0
      }), {
        default: () => {
          var j;
          return (j = this.onRender) === null || j === void 0 || j.call(this), t.length ? le(Wl, {
            ref: "virtualListInstRef",
            items: this.fNodes,
            itemSize: ft(z.self.nodeHeight),
            ignoreItemResize: this.aip,
            paddingTop: Z.top,
            paddingBottom: Z.bottom,
            class: this.themeClass,
            style: [this.cssVars, {
              paddingLeft: Z.left,
              paddingRight: Z.right
            }],
            onScroll: this.handleScroll,
            onResize: this.handleResize,
            showScrollbar: !1,
            itemResizable: !0
          }, {
            default: ({
              item: L
            }) => C(L)
          }) : ca(this.$slots.empty, () => {
            var L;
            return [((L = this.mergedRenderEmpty) === null || L === void 0 ? void 0 : L.call(this)) || le(ua, {
              class: `${n}-tree__empty`,
              theme: this.mergedTheme.peers.Empty,
              themeOverrides: this.mergedTheme.peerOverrides.Empty
            })];
          });
        }
      });
    }
    const {
      internalScrollable: u
    } = this;
    return S.push(this.themeClass), (e = this.onRender) === null || e === void 0 || e.call(this), u ? le(ha, Object.assign({}, v, {
      class: S,
      tabindex: T,
      onKeydown: x ? p : void 0,
      onFocusout: x ? H : void 0,
      style: this.cssVars,
      contentStyle: {
        padding: this.internalScrollablePadding
      }
    }), {
      default: () => le("div", {
        onDragleave: c ? this.handleDragLeaveTree : void 0,
        ref: "selfElRef"
      }, this.fNodes.map(C))
    }) : le("div", {
      class: S,
      tabindex: T,
      ref: "selfElRef",
      style: this.cssVars,
      onKeydown: x ? p : void 0,
      onFocusout: x ? H : void 0,
      onDragleave: c ? this.handleDragLeaveTree : void 0
    }, t.length ? t.map(C) : ca(this.$slots.empty, () => {
      var z;
      return [((z = this.mergedRenderEmpty) === null || z === void 0 ? void 0 : z.call(this)) || le(ua, {
        class: `${n}-tree__empty`,
        theme: this.mergedTheme.peers.Empty,
        themeOverrides: this.mergedTheme.peerOverrides.Empty
      })];
    }));
  }
}), g = {
  Init: "init",
  // 文档初始化时
  SelectionChange: "selectionChange",
  // selection改变时
  UndoRedoChange: "UndoRedoChange",
  // undo redo 操作列表发生改变时
  ExportReady: "ExportReady",
  // 文档准备好导出时
  PagePositionChange: "pagePositionChange",
  // 页面位置改变
  LoadPageEnd: "loadPageEnd",
  // 页面load结束
  ZoomChange: "zoomChange"
  // 页面zoom改变
}, l = {
  //styles
  Bold: "bold",
  Underline: "underline",
  UnderlineColor: "underlineColor",
  StrikeThrough: "strikeThrough",
  Italic: "italic",
  FontSize: "fontSize",
  DecreaseIndent: "decreaseIndent",
  IncreaseIndent: "increaseIndent",
  DecreaseFontSize: "decreaseFontSize",
  IncreaseFontSize: "increaseFontSize",
  ChangeCase: "changeCase",
  Superscript: "superscript",
  Subscript: "subscript",
  TextHighlight: "textHighlight",
  CharacterShading: "characterShading",
  FontColor: "fontColor",
  FontName: "fontName",
  Color: "color",
  ParaAlignHorizontal: "paraAlignHorizontal",
  Bullet: "bullet",
  Numbering: "numbering",
  MultilevelList: "multilevelList",
  ParagraphShading: "paragraphShading",
  ParagraphBorder: "paragraphBorder",
  TableShading: "tableShading",
  TableBorder: "tableBorder",
  ApplyStyle: "applyStyle",
  ApplyTableStyle: "applyTableStyle",
  LineSpace: "lineSpace",
  ParaSymbol: "paraSymbol",
  FormatPainter: "formatPainter",
  OpenFontSettingsPanel: "openFontSettingsPanel",
  OpenParagraphSettingsPanel: "openParagraphSettingsPanel",
  ApplyParagraphSettings: "applyParagraphSettings",
  CharacterBorder: "CharacterBorder",
  ClearFormatting: "clearFormatting",
  // editor
  Undo: "undo",
  Redo: "redo",
  Zoom: "zoom",
  Export: "export",
  ExportPDF: "exportPDF",
  Open: "open",
  Copy: "copy",
  Paste: "paste",
  GoToPage: "goToPage",
  PagePositionChange: "pagePositionChange",
  PageViewSwitch: "pageViewSwitch",
  InsertTable: "insertTable",
  InsertSeparator: "insertSeparator",
  SearchReplaceWord: "searchReplaceWord",
  TableOperations: "tableOperations",
  TableCellOperations: "tableCellOperations",
  PaperOrientation: "paperOrientation",
  PaperSize: "paperSize",
  TrackChange: "trackChange",
  RevisionDisplayMode: "revisionDisplayMode",
  Cut: "cut",
  // 修订
  MarkUpStatus: "markUpStatus",
  ShowMarkUpType: "showMarkUpType",
  AcceptChange: "acceptChange",
  RejectChange: "rejectChange",
  PreviousChange: "previousChange",
  NextChange: "nextChange",
  SimplifiedToTraditional: "simplifiedToTraditional",
  DocumentEncryption: "documentEncryption",
  // view
  Ruler: "ruler",
  NavigationPanel: "navigationPanel",
  // table
  ClearTableStyle: "clearTableStyle",
  ShowTableDashedGrid: "showTableDashedGrid",
  TableDeleteOperations: "tableDeleteOperations",
  TableInsertOperations: "tableInsertOperations",
  MergeCells: "mergeCells",
  SplitTable: "splitTable",
  SplitCells: "splitCells",
  AutoFit: "autoFit",
  CellWidth: "cellWidth",
  CellHeight: "cellHeight",
  CellAlignVertical: "cellAlignVertical",
  OpenCellMarginsSettingsPanel: "openCellMarginsSettingsPanel",
  CellMarginTop: "cellMarginTop",
  CellMarginBottom: "cellMarginBottom",
  CellMarginLeft: "cellMarginLeft",
  CellMarginRight: "cellMarginRight",
  CellSpacing: "cellSpacing",
  TableSelect: "tableSelect",
  // 批注
  InsertComment: "insertComment",
  CommentUpdate: "commentUpdate",
  // 更新批注
  DeleteComment: "deleteComment",
  // 删除批注
  PreviousComment: "previousComment",
  // 上一个批注
  NextComment: "nextComment",
  // 下一个批注
  ShowHideComment: "showHideComment"
  // 显示隐藏批注
}, Vt = /* @__PURE__ */ new Set([
  l.Open,
  l.Export,
  l.ExportPDF,
  l.Copy,
  l.GoToPage,
  l.PagePositionChange,
  l.PageViewSwitch,
  l.Zoom,
  l.ParaSymbol,
  l.SearchReplaceWord,
  l.RevisionDisplayMode
]);
var Ya = /* @__PURE__ */ ((e) => (e[e.Nil = 0] = "Nil", e[e.Table = 1] = "Table", e[e.Shape = 2] = "Shape", e[e.Text = 4] = "Text", e[e.SmartArt = 8] = "SmartArt", e[e.Chart = 16] = "Chart", e[e.Picture = 32] = "Picture", e[e.Notes = 64] = "Notes", e))(Ya || {}), OA = /* @__PURE__ */ ((e) => (e[e.ShiftCellsLeft = 0] = "ShiftCellsLeft", e[e.ShiftCellsUp = 1] = "ShiftCellsUp", e[e.DeleteEntireRow = 2] = "DeleteEntireRow", e[e.DeleteCols = 4] = "DeleteCols", e))(OA || {}), $t = /* @__PURE__ */ ((e) => (e.File = "file", e.Start = "start", e.Insert = "insert", e.Layout = "layout", e.Review = "review", e.View = "view", e))($t || {}), vt = /* @__PURE__ */ ((e) => (e.TableLayout = "tableLayout", e.TableStyle = "tableStyle", e))(vt || {});
const qt = {
  file: {
    name: "file",
    label: "toolbar.file.title",
    component: "FileGroup"
  },
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
  layout: {
    name: "layout",
    label: "toolbar.layout.title",
    component: "LayoutGroup"
  },
  review: {
    name: "review",
    label: "toolbar.review.title",
    component: "ReviewGroup"
  },
  view: {
    name: "view",
    label: "toolbar.view.title",
    component: "ViewGroup"
  }
}, Pa = {
  tableLayout: {
    name: "tableLayout",
    label: "toolbar.table.tableLayoutitle",
    component: "TableLayoutBarGroup"
  },
  tableStyle: {
    name: "tableStyle",
    label: "toolbar.table.tableStyleTitle",
    component: "TableStyleBarGroup"
  }
}, NA = { tableLayout: Pa.tableLayout, tableStyle: Pa.tableStyle };
var bt = /* @__PURE__ */ ((e) => (e.COMMENT_CREATE = "comment_create", e.COMMENT_DELETE = "comment_delete", e.COMMENT_UPDATE = "comment_update", e.COMMENT_ADD_REPLY = "comment_add_reply", e.COMMENT_ACTIVE_CHANGE = "comment_active_change", e))(bt || {}), Ja = /* @__PURE__ */ ((e) => (e.GET = "get", e.SET = "set", e))(Ja || {}), oe = /* @__PURE__ */ ((e) => (e[e.IsParaInTable = 1] = "IsParaInTable", e[e.IsParaInTextBox = 2] = "IsParaInTextBox", e[e.IsDrawingSelect = 4] = "IsDrawingSelect", e[e.IsHaveTextShading = 8] = "IsHaveTextShading", e[e.IsCanCopy = 16] = "IsCanCopy", e[e.DrawingIsAnchor = 32] = "DrawingIsAnchor", e[e.DrawingIsInline = 64] = "DrawingIsInline", e[e.DrawingIsGroupShape = 128] = "DrawingIsGroupShape", e[e.DrawingIsPicture = 256] = "DrawingIsPicture", e[e.DrawingIsTextbox = 512] = "DrawingIsTextbox", e[e.DrawingIsShape = 1024] = "DrawingIsShape", e[e.DrawingIsChartShape = 2048] = "DrawingIsChartShape", e[e.DrawingIsDiagramsDrawing = 4096] = "DrawingIsDiagramsDrawing", e))(oe || {});
const ea = {
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
};
function XA(e, t, a = window) {
  const n = (u) => {
    e.dispatch("file/onError", u);
  };
  a.addEventListener("FileError", n);
  const o = (u) => {
    e.dispatch("file/onReady", u), t.docReady = !0, t.refresh(g.Init);
  };
  a.addEventListener("DocumentReady", o);
  const A = () => {
    t.enableEditor();
  };
  a.addEventListener("EditorEnable", A);
  const c = () => {
    t.disableEditor();
  };
  a.addEventListener("EditorDisable", c);
  const s = (u) => {
    e.commit("command/setLoadEnd", !0), t.refresh(g.Init), t.refresh(g.LoadPageEnd), e.dispatch("file/onLoadPageEnd", u);
  };
  a.addEventListener("LoadAllPageEnd", s);
  const i = (u) => {
    e.dispatch("file/onExportReady", u), t.refresh(g.ExportReady);
  };
  a.addEventListener("ExportReady", i);
  const d = (u) => {
    jA(e, u.detail), KA(e, u == null ? void 0 : u.detail), qA(e, u.detail), t.refresh(g.SelectionChange);
  };
  a.addEventListener("SelectionChange", d);
  const m = (u) => {
    t.refresh(g.UndoRedoChange);
  };
  a.addEventListener("UndoRedoChange", m);
  const p = (u) => {
    t.refresh(g.PagePositionChange);
  };
  a.addEventListener("PagePositionChange", p);
  const w = (u) => {
    t.refresh(g.ZoomChange);
  };
  a.addEventListener("ZoomChange", w);
  const H = (u) => {
    e.commit("file/setShowFindDialog", !0);
  };
  a.addEventListener("OpenFindDialog", H);
  const v = (u) => {
    var Z, j;
    let z = ((Z = u.detail) == null ? void 0 : Z.formatRatio) || 0;
    z = z == 100 ? 99 : z;
    const k = ((j = u.detail) == null ? void 0 : j.pageIndex) || 0;
    e.commit("file/setLoadingRatio", z), e.commit("file/setPageCount", k);
  };
  a.addEventListener("DocumentLoading", v);
  const x = (u) => {
    var z;
    t.notifySecurityError(((z = u.detail) == null ? void 0 : z.action) || "");
  };
  a.addEventListener("SecurityError", x);
  const T = (u) => {
    QA(e, u.detail);
  };
  a.addEventListener("OutlineChange", T);
  const S = (u) => {
    u == null || u.detail, YA(e, u.detail);
  };
  a.addEventListener("OutlineSelectionChange", S);
  const C = (u) => {
    JA(e);
  };
  return a.addEventListener("ThumbnailChange", C), () => {
    a.removeEventListener("FileError", n), a.removeEventListener("DocumentReady", o), a.removeEventListener("EditorEnable", A), a.removeEventListener("EditorDisable", c), a.removeEventListener("LoadAllPageEnd", s), a.removeEventListener("ExportReady", i), a.removeEventListener("SelectionChange", d), a.removeEventListener("UndoRedoChange", m), a.removeEventListener("PagePositionChange", p), a.removeEventListener("ZoomChange", w), a.removeEventListener("OpenFindDialog", H), a.removeEventListener("DocumentLoading", v), a.removeEventListener("SecurityError", x), a.removeEventListener("OutlineChange", T), a.removeEventListener("OutlineSelectionChange", S);
  };
}
function jA(e, t) {
  if (!t) return;
  let a = t.paraFlag;
  e.commit("file/setParaFlag", a);
  let n = t.inTable;
  t.TableSelectChange && GA(e);
  let A = { diagonalDown: n, diagonalUp: n };
  e.commit("command/setEnabledList", {
    cmd: l.ParagraphBorder,
    enabledList: A
  }), e.commit("file/setIsInTable", n), e.commit("file/setTableStyleId", t.TableStyleId), e.commit("file/setParaStyleId", t.paraPStyle || t.paraRStyle), e.dispatch("menu/SetTableBarVisible", { value: n }), e.commit("file/setParaLineRule", t.paraLineRule), e.commit("file/setAsianFont", t.chineseFontName), e.commit("file/setWesternFont", t.westernFontName), e.commit("command/setState", { cmd: l.StrikeThrough, ui: { value: t.strikeoutType === "sngStrike" } }), t.strikeoutType === "sngStrike" ? e.commit("file/setStrikeThroughType", 1) : t.strikeoutType === "dblStrike" ? e.commit("file/setStrikeThroughType", 2) : e.commit("file/setStrikeThroughType", 0), e.commit("file/setEmphasisMark", t.emphasisMark), e.commit("file/setSmallCaps", t.smallCaps), e.commit("file/setAllCaps", t.allCaps), e.commit("file/setVanish", t.vanish), e.commit("command/setEnabled", {
    cmd: l.Copy,
    enabled: t.canCopy === !0
  });
  let c = [
    { cmd: l.Bold, key: "bold" },
    { cmd: l.FontColor, key: "fontColor" },
    { cmd: l.FontName, key: "fontName" },
    { cmd: l.FontSize, key: "fontSize", getVal: (s) => s ? String(s) : "" },
    { cmd: l.Italic, key: "italic" },
    { cmd: l.Underline, key: "underlineStyle" },
    { cmd: l.UnderlineColor, key: "underlineColor" },
    { cmd: l.Superscript, key: "vertAlign", getVal: (s) => s === "superscript" },
    { cmd: l.Subscript, key: "vertAlign", getVal: (s) => s === "subscript" },
    { cmd: l.TextHighlight, key: "highLight", getVal: (s) => s && String(s) === "none" ? "noFill" : String(s) },
    { cmd: l.CharacterBorder, key: "characterBorder" },
    { cmd: l.CharacterShading, key: "isHaveTextShading" },
    { cmd: l.ParagraphShading, key: "paraShadingColor" },
    { cmd: l.TableShading, key: "tableShading" },
    { cmd: l.ApplyStyle, key: "styleId" },
    { cmd: l.ApplyTableStyle, key: "tableStyleId" },
    { cmd: l.LineSpace, key: "paraLine" },
    { cmd: l.Bullet, key: "listNum" },
    { cmd: l.Numbering, key: "listNum" },
    { cmd: l.MultilevelList, key: "listLevel" },
    { cmd: l.ParaAlignHorizontal, key: "paraAlignHorizontal" }
  ];
  if (n) {
    let s = [
      { cmd: l.ShowTableDashedGrid, key: "ShowTableDashedGrid" },
      { cmd: l.CellWidth, key: "TableCellWidth", getVal: (i) => i != null ? Ye(i * 0.1) : null },
      { cmd: l.CellHeight, key: "TableCellHeight", getVal: (i) => i != null ? Ye(i * 0.1) : null },
      { cmd: l.CellAlignVertical, key: "TableCellAlign" },
      { cmd: l.CellMarginTop, key: "TableTcMarTop", getVal: (i) => i != null ? Ye(i * 0.1) : null },
      { cmd: l.CellMarginBottom, key: "TableTcMarBottom", getVal: (i) => i != null ? Ye(i * 0.1) : null },
      { cmd: l.CellMarginLeft, key: "TableTcMarLeft", getVal: (i) => i != null ? Ye(i * 0.1) : null },
      { cmd: l.CellMarginRight, key: "TableTcMarRight", getVal: (i) => i != null ? Ye(i * 0.1) : null },
      { cmd: l.CellSpacing, key: "TableCellSpacing", getVal: (i) => i != null ? Ye(i * 0.2) : null }
    ];
    c = c.concat(s);
  }
  c.forEach(({ cmd: s, key: i, getVal: d }) => {
    let m;
    d ? m = d(t[i]) : m = t[i], e.commit("command/setState", {
      cmd: s,
      ui: {
        value: m
      }
    });
  }), UA(e, t), n && WA(e, t), e.commit("command/setEnabled", { cmd: l.ApplyTableStyle, enabled: n === !0 }), e.commit("command/setEnabled", { cmd: l.ClearTableStyle, enabled: n === !0 }), e.commit("command/setEnabled", { cmd: l.TableShading, enabled: n === !0 }), e.commit("command/setEnabled", { cmd: l.TableBorder, enabled: n === !0 });
}
function Ye(e) {
  return Math.round(e * 100) / 100;
}
function UA(e, t) {
  let a = t.paraFlag;
  e.commit("file/setParaFlag", a), (a & oe.IsParaInTable) == oe.IsParaInTable, (a & oe.IsParaInTextBox) == oe.IsParaInTextBox, (a & oe.IsDrawingSelect) == oe.IsDrawingSelect, (a & oe.IsHaveTextShading) == oe.IsHaveTextShading;
  let n = (a & oe.DrawingIsAnchor) == oe.DrawingIsAnchor, o = (a & oe.DrawingIsInline) == oe.DrawingIsInline, A = (a & oe.DrawingIsGroupShape) == oe.DrawingIsGroupShape, c = (a & oe.DrawingIsPicture) == oe.DrawingIsPicture;
  (a & oe.DrawingIsTextbox) == oe.DrawingIsTextbox;
  let s = (a & oe.DrawingIsShape) == oe.DrawingIsShape, i = (a & oe.DrawingIsChartShape) == oe.DrawingIsChartShape;
  (a & oe.DrawingIsDiagramsDrawing) == oe.DrawingIsDiagramsDrawing;
  let d = [l.IncreaseFontSize, l.DecreaseFontSize, , l.ClearFormatting, l.ChangeCase, l.CharacterBorder], m = [l.Bold, l.Italic, l.Underline, l.StrikeThrough, l.Superscript, l.Subscript], p = [l.TextHighlight, l.FontColor, l.CharacterShading, l.OpenFontSettingsPanel], w = [l.Bullet, l.Numbering, l.MultilevelList, l.MultilevelList], H = [l.ParaAlignHorizontal, l.LineSpace, l.ParagraphShading, l.ParagraphBorder, l.OpenParagraphSettingsPanel];
  e.commit("command/setEnabled", { cmd: l.DecreaseIndent, enabled: !0 }), e.commit("command/setEnabled", { cmd: l.IncreaseIndent, enabled: !0 }), s ? (d.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !0 });
  }), m.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !0 });
  }), p.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !0 });
  }), w.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !0 });
  }), H.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !0 });
  }), e.commit("command/setEnabled", { cmd: l.ParagraphShading, enabled: !1 })) : c ? (d.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: o });
  }), m.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: o });
  }), p.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: o });
  }), w.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: o });
  }), H.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: o });
  }), o ? e.commit("command/setEnabled", { cmd: l.ParagraphShading, enabled: !1 }) : n && (e.commit("command/setEnabled", { cmd: l.FontColor, enabled: !0 }), e.commit("command/setEnabled", { cmd: l.ClearFormatting, enabled: !0 }))) : A ? (d.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !1 });
  }), m.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !1 });
  }), p.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !1 });
  }), w.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !1 });
  }), H.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !1 });
  }), e.commit("command/setEnabled", { cmd: l.FontColor, enabled: !0 }), e.commit("command/setEnabled", { cmd: l.ClearFormatting, enabled: !0 })) : i ? (d.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !0 });
  }), m.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !0 });
  }), p.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !0 });
  }), w.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: o });
  }), H.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: o });
  }), e.commit("command/setEnabled", { cmd: l.ChangeCase, enabled: !1 }), o ? e.commit("command/setEnabled", { cmd: l.ParagraphBorder, enabled: !1 }) : n && (e.commit("command/setEnabled", { cmd: l.CharacterBorder, enabled: !1 }), e.commit("command/setEnabled", { cmd: l.CharacterShading, enabled: !1 }))) : (d.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !0 });
  }), m.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !0 });
  }), p.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !0 });
  }), w.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !0 });
  }), H.forEach(function(v) {
    e.commit("command/setEnabled", { cmd: v, enabled: !0 });
  }));
}
function WA(e, t) {
  e.commit("file/setTableCanMergeCell", t.TableCanMergeCell), e.commit("file/setTableSplitCellMaxRow", t.TableSplitCellMaxRow), e.commit("file/setTableSplitCellNSelectRow", t.TableSplitCellNSelectRow), e.commit("file/setTableSplitCellNSelectCol", t.TableSplitCellNSelectCol), e.commit("command/setEnabled", {
    cmd: l.MergeCells,
    enabled: t.TableCanMergeCell
  });
  let a = { splitTableWithRow: t.TableCanSplitTableWithRow, splitTableWithCol: t.TableCanSplitTableWithCol };
  e.commit("command/setEnabledList", {
    cmd: l.SplitTable,
    enabledList: a
  });
}
function KA(e, t) {
  t && (e.commit("command/setCutAndCopyEndabled", t.canCopy === !0), e.commit("command/setFormatPaintEndabled", t.canCopy === !0));
}
function qA(e, t) {
  e.getters["panel/isOpen"] !== !1 && (e.commit("file/setRefreshRightPanel", !0), setTimeout(() => {
    e.commit("file/setRefreshRightPanel", !1);
  }, 10));
}
function GA(e) {
  e.commit("file/setRefreshTableStylePanel", !0), setTimeout(() => {
    e.commit("file/setRefreshTableStylePanel", !1);
  }, 10);
}
function QA(e, t) {
  e.getters["panel/isOpen"] !== !1 && (e.commit("file/setRefreshOutline", !0), setTimeout(() => {
    e.commit("file/setRefreshOutline", !1);
  }, 10));
}
function YA(e, t) {
  if (!t) return;
  let a = t.currentParaId;
  e.commit("file/setOutlineParaId", a);
}
function JA(e) {
  e.getters["panel/isOpen"] !== !1 && (e.commit("file/setThumbnailChange", !0), setTimeout(() => {
    e.commit("file/setThumbnailChange", !1);
  }, 10));
}
const ue = Symbol("CommandService");
class $A {
  constructor(t) {
    Le(this, "store");
    Le(this, "api");
    Le(this, "docReady");
    Le(this, "eventTarget");
    Le(this, "removeListeners");
    Le(this, "handlers");
    Le(this, "refreshers");
    Le(this, "securityErrorHandler");
    Le(this, "modeController");
    Le(this, "removeModeListener");
    this.store = t.store, this.api = t.api, this.docReady = !1, this.eventTarget = t.eventTarget ?? window, this.removeListeners = () => {
    }, this.handlers = {}, this.refreshers = {}, this.securityErrorHandler = () => {
    }, this.modeController = null, this.removeModeListener = () => {
    };
  }
  initApi(t) {
    var a, n;
    this.docReady = !1, this.store.commit("command/resetCommandState"), (a = this.removeListeners) == null || a.call(this), (n = this.removeModeListener) == null || n.call(this), this.api.initApi(t), this.bindDocumentMode(t), this.syncReadOnlyState(), this.removeListeners = XA(this.store, this, this.eventTarget);
  }
  initApp(t) {
    this.initApi(t);
  }
  destroy() {
    var t, a;
    (t = this.removeListeners) == null || t.call(this), (a = this.removeModeListener) == null || a.call(this), this.modeController = null, this.removeListeners = () => {
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
    this.docReady = !0, this.refresh(g.Init);
  }
  disableEditor() {
    this.docReady = !1, this.refresh(g.Init);
  }
  canRefreshCommand(t) {
    return this.docReady ? !0 : this.isReadOnly() && this.store.getters["command/loadEnd"] === !0 && Vt.has(t);
  }
  //refresheres
  registerHandler(t, a) {
    this.handlers[t], this.handlers[t] = a;
  }
  registerRefresher(t, a) {
    this.refreshers[t] = a;
  }
  refreshAll() {
    this.syncReadOnlyState(), this.refreshSome(Object.values(l));
  }
  refresh(t) {
    var n, o, A;
    this.syncReadOnlyState();
    const a = Object.values(l);
    for (const c of a) {
      const s = this.handlers[c];
      s && ((n = s.refresh) != null && n.has(t)) && ((A = (o = this.refreshers)[c]) == null || A.call(o, this));
    }
  }
  refreshSome(t) {
    var a, n;
    this.syncReadOnlyState();
    for (const o of t)
      (n = (a = this.refreshers)[o]) == null || n.call(a, this);
  }
  bindDocumentMode(t) {
    var a;
    this.modeController = gA(t), this.removeModeListener = ((a = this.modeController) == null ? void 0 : a.onChange((n) => {
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
  canRunInReadOnly(t, a) {
    var o;
    if (!Vt.has(t))
      return !1;
    if (t !== l.SearchReplaceWord || !a)
      return !0;
    const n = (o = a == null ? void 0 : a.value) == null ? void 0 : o.action;
    return n === "search" || n === "next" || n === "prev" || n === "focusEditor";
  }
  /** 执行命令：统一入口 */
  async run(t, a) {
    this.syncReadOnlyState();
    const n = this.handlers[t];
    if (!n) {
      console.error(`[CommandService] no handler registered for "${t}"`);
      return;
    }
    this.isReadOnly() && !this.canRunInReadOnly(t, a) || await this.store.dispatch("command/run", {
      cmd: t,
      param: a,
      fn: async (o) => {
        await n.run(this.api, o);
      }
    });
  }
}
const eo = { class: "global-basic-display-text count" }, to = /* @__PURE__ */ J({
  __name: "SearchContentDialog",
  emits: ["update:show"],
  setup(e, { emit: t }) {
    const a = Ae(ue), n = ie(), o = y(""), A = y(0), c = y(0), s = y(null), i = F(() => n == null ? void 0 : n.getters["file/showFindDialog"]);
    ne(i, (C) => {
      C && v();
    });
    function d(C) {
      const u = { value: C };
      a.run(l.SearchReplaceWord, u);
    }
    function m() {
      if (!o.value) {
        c.value = 0, A.value = 0;
        return;
      }
      d({
        action: "search",
        val: o.value
      }), H();
    }
    function p() {
      d({
        action: "next"
      }), H();
    }
    function w() {
      d({
        action: "prev"
      }), H();
    }
    function H() {
      var C, u;
      A.value = ((C = n == null ? void 0 : n.getters["command/getVal"](l.SearchReplaceWord)) == null ? void 0 : C.countNum) || 0, c.value = ((u = n == null ? void 0 : n.getters["command/getVal"](l.SearchReplaceWord)) == null ? void 0 : u.totalCount) || 0;
    }
    function v() {
      o.value = a.api.getSearchSelectedWord() || "", setTimeout(T, 100), m();
    }
    function x() {
      d({
        action: "focusEditor"
      }), o.value = "", c.value = 0, A.value = 0, n.commit("file/setShowFindDialog", !1);
    }
    function T() {
      var C;
      (C = s == null ? void 0 : s.value) == null || C.focus();
    }
    function S(C) {
      C || x();
    }
    return (C, u) => (V(), Y("div", null, [
      r(M(Da), {
        show: i.value,
        "onUpdate:show": S,
        title: C.$t("toolbar.start.search"),
        width: 300,
        "show-mask": !1,
        draggable: !0
      }, {
        action: h(() => [
          r(M(Be), {
            label: C.$t("toolbar.start.prev"),
            onClickButton: u[2] || (u[2] = (z) => w()),
            type: "standard"
          }, null, 8, ["label"]),
          r(M(Be), {
            label: C.$t("toolbar.start.next"),
            onClickButton: u[3] || (u[3] = (z) => p())
          }, null, 8, ["label"])
        ]),
        default: h(() => [
          r(M(Jl), {
            value: o.value,
            "onUpdate:value": u[0] || (u[0] = (z) => o.value = z),
            placeholder: C.$t("toolbar.start.findPlaceHolder"),
            onInput: u[1] || (u[1] = (z) => m()),
            onKeydown: We(p, ["enter"]),
            ref_key: "inputInstRef",
            ref: s
          }, {
            suffix: h(() => [
              ae("span", eo, ee(A.value) + "/" + ee(c.value), 1)
            ]),
            _: 1
          }, 8, ["value", "placeholder"])
        ]),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}), ao = /* @__PURE__ */ be(to, [["__scopeId", "data-v-c6f85f1e"]]), lo = "data:image/png;base64,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", Re = {
  width: 6673,
  image: lo
}, no = /* @__PURE__ */ J({
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
    isSelectEvent: { type: Boolean }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = ie(), n = Ae(ue), { standardColors: o, themeColors: A, ensureLoaded: c } = Fa(), s = y(!1), i = t, d = e, m = d.cmd ? F(() => a == null ? void 0 : a.getters["command/can"](d.cmd)) : y(!0), p = d.cmd ? F(() => a == null ? void 0 : a.getters["command/getVal"](d.cmd)) : F(() => d.defaultColor || ""), w = F(() => La(p.value)), H = F(() => a == null ? void 0 : a.getters["file/recentColors"](d.cmd)), v = F(
      () => Za(p.value) ?? void 0
    );
    function x(C) {
      if (a.commit("file/addRecentColors", { cmd: d.cmd, recentColor: C }), d.isSelectEvent) {
        i("select", C), d.cmd && a.commit("command/setState", { cmd: d.cmd, ui: { value: C } });
        return;
      }
      const u = { value: C };
      d.cmd && n.run(d.cmd, u);
    }
    function T() {
      const C = { value: "noFill" };
      d.cmd && n.run(d.cmd, C);
    }
    function S(C) {
      s.value = C, C && c();
    }
    return (C, u) => (V(), $(M(Va), {
      val: w.value,
      "standard-colors": M(o),
      "theme-colors": M(A),
      "recent-colors": H.value,
      showFill: e.showFill,
      "show-auto": e.showAuto,
      onSelect: x,
      onClearFill: T,
      onShow: S,
      "selected-color-pos": v.value
    }, {
      default: h(() => [
        r(M(Ea), {
          "resource-image": M(Re).image,
          disabled: !M(m),
          x: e.x,
          y: e.y,
          "image-width": M(Re).width,
          tooltip: e.tooltip,
          "sub-showing": s.value,
          "show-color-cube": !0,
          color: e.showFill ? w.value : w.value || "rgb(0, 0, 0)",
          "icon-name": e.iconName,
          onClick: u[0] || (u[0] = Pt(() => {
          }, ["stop"]))
        }, null, 8, ["resource-image", "disabled", "x", "y", "image-width", "tooltip", "sub-showing", "color", "icon-name"])
      ]),
      _: 1
    }, 8, ["val", "standard-colors", "theme-colors", "recent-colors", "showFill", "show-auto", "selected-color-pos"]));
  }
}), $a = /* @__PURE__ */ J({
  __name: "CommandEditableSelect",
  props: {
    cmd: {},
    options: {},
    width: {},
    menuWidth: {},
    type: {},
    validateInput: { type: Function }
  },
  setup(e) {
    const t = ie(), a = e, n = F(() => t == null ? void 0 : t.getters["command/can"](a.cmd)), o = F(() => t == null ? void 0 : t.getters["command/getVal"](a.cmd)), A = Ae(ue);
    function c(s) {
      const i = { value: s };
      A.run(a.cmd, i), t.commit("command/setState", {
        cmd: a.cmd,
        ui: { value: s }
      });
    }
    return (s, i) => (V(), $(M(Qt), {
      "model-value": o.value,
      "onUpdate:modelValue": c,
      options: e.options,
      disabled: !n.value,
      width: e.width,
      menuWidth: e.menuWidth,
      "validate-input": e.validateInput,
      type: e.type
    }, null, 8, ["model-value", "options", "disabled", "width", "menuWidth", "validate-input", "type"]));
  }
});
function el(e, t, a) {
  return function({ node: n, option: o }) {
    return a && (n.props = n.props || {}, o.key === t.value ? n.props.style = {
      ...n.props.style || {},
      backgroundColor: "var(--active-bg)"
    } : n.props.style = {
      ...n.props.style || {},
      backgroundColor: ""
    }), n;
  };
}
function tl(e, t, a) {
  return F(() => t.value ? e.value.map((n) => (n.key === a.value && n.noIcon && !n.icon ? n.icon = () => le(Ne, { name: "statusbar_continuous_side_by_side_16__clip_cell", size: 16 }) : n.key !== a.value && n.noIcon && n.icon && delete n.icon, n)) : [...e.value]);
}
function E1(e, t, a = 16) {
  return () => typeof e == "string" ? le(Ne, { name: e, size: t }) : le(Ne, { size: a, x: e, y: t, source: Re.image, imageWidth: Re.width });
}
const Ao = {
  key: 0,
  style: { margin: "0 4px", "font-size": "12px" }
}, oo = {
  key: 0,
  style: { margin: "0 4px" }
}, ro = /* @__PURE__ */ J({
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
  setup(e, { emit: t }) {
    const a = ie(), n = e, o = F(
      () => n.iconName ? { name: n.iconName } : {
        x: n.x,
        y: n.y,
        source: Re.image,
        imageWidth: Re.width
      }
    ), A = y(!1), c = y("default"), s = F(() => a == null ? void 0 : a.getters["command/can"](n.cmd)), i = Ae(ue), d = F(() => a == null ? void 0 : a.getters["command/getVal"](n.cmd)), m = tl(F(() => n.menuItems), A, d), p = F(() => n.isActiveOption ? el(n.menuItems, d, n.isActiveOption) : ({ node: u, option: z }) => u), w = {
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
    }, H = {
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
    }, x = F(() => A.value ? v : c.value === "hover" ? H : w);
    function T(u, z) {
      if (z.noTrigger)
        return;
      const k = { value: u };
      i.run(n.cmd, k);
    }
    function S(u) {
      A.value = u;
    }
    const C = F(() => {
      let u = {};
      return A.value ? (u = {
        backgroundColor: "var(--active-bg)"
      }, u) : (c.value === "hover" && (u = {
        backgroundColor: "var(--hover-bg)"
      }), u);
    });
    return (u, z) => {
      const k = _("n-button"), Z = _("n-icon"), j = _("n-button-group"), L = _("n-dropdown"), b = _("n-config-provider");
      return V(), $(b, { "theme-overrides": x.value }, {
        default: h(() => [
          r(L, {
            trigger: "click",
            size: "small",
            options: M(m),
            onSelect: T,
            "render-option": p.value,
            "on-update:show": S
          }, {
            default: h(() => [
              e.tooltip ? (V(), $(M(ct), { key: 0 }, {
                trigger: h(() => [
                  r(j, {
                    onMouseup: z[0] || (z[0] = (P) => c.value = "hover"),
                    onMouseleave: z[1] || (z[1] = (P) => c.value = "default")
                  }, {
                    default: h(() => [
                      r(k, {
                        class: "small-icon-btn",
                        disabled: !s.value,
                        style: we({ width: e.label ? "auto" : "22px" })
                      }, {
                        default: h(() => [
                          r(M(Ne), ma(o.value, { size: 16 }), null, 16),
                          e.label ? (V(), Y("span", Ao, ee(e.label), 1)) : Se("", !0)
                        ]),
                        _: 1
                      }, 8, ["disabled", "style"]),
                      r(k, {
                        class: "small-icon-btn-arrow",
                        disabled: !s.value,
                        style: we(C.value)
                      }, {
                        icon: h(() => [
                          r(Z, { size: "12" }, {
                            default: h(() => [
                              je(r(M(xt), null, null, 512), [
                                [Ue, A.value]
                              ]),
                              je(r(M($e), null, null, 512), [
                                [Ue, !A.value]
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
                default: h(() => [
                  Pe(" " + ee(e.tooltip), 1)
                ]),
                _: 1
              })) : (V(), $(j, {
                key: 1,
                onMouseup: z[2] || (z[2] = (P) => c.value = "hover"),
                onMouseleave: z[3] || (z[3] = (P) => c.value = "default")
              }, {
                default: h(() => [
                  r(k, {
                    class: "small-icon-btn",
                    disabled: !s.value,
                    style: we({ width: e.label ? "auto" : "22px" })
                  }, {
                    default: h(() => [
                      r(M(Ne), ma(o.value, { size: 16 }), null, 16),
                      e.label ? (V(), Y("span", oo, ee(e.label), 1)) : Se("", !0)
                    ]),
                    _: 1
                  }, 8, ["disabled", "style"]),
                  r(k, {
                    class: "small-icon-btn-arrow",
                    disabled: !s.value,
                    style: we(C.value)
                  }, {
                    icon: h(() => [
                      r(Z, { size: "12" }, {
                        default: h(() => [
                          je(r(M(xt), null, null, 512), [
                            [Ue, A.value]
                          ]),
                          je(r(M($e), null, null, 512), [
                            [Ue, !A.value]
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
}), io = /* @__PURE__ */ be(ro, [["__scopeId", "data-v-22a9f5de"]]), so = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAOVJREFUeAHtljEOgyAUhh+Nl+jQBM7A0rE9uR3bAa5Qtl6iCYXBlCAY8D1Y5E9M1IDf90AFgJGjh8U3pJQW8DFKKbFcfG5X/mV29ueX+SXChidoEGv/NSxwVylPtZ1yD3EVMEAmhDslM1l2j9s0GYEc/Px4GughUApvIlADJxfYgruv6+2PuM8ERCmonKf6kYxA7bCTCmDgaAEsHCVAAd8tQAXfJUAJrxaghlcJtIAXC7SC+6z+hG4tN73gSQGttegF98lOQQ94VqAXPCnQE+6zege21nPILKmYJKcgVXm40x0ZocwPaUT2rDPmQ6sAAAAASUVORK5CYII=", co = { class: "text-highlight-color-panel-selector" }, uo = { class: "global-basic-display-text action-text" }, ho = { class: "standard-row" }, po = ["onClick"], fo = /* @__PURE__ */ J({
  __name: "TextHighlightColorPalette",
  props: {
    customColors: { default: [
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
  setup(e, { emit: t }) {
    const { t: a, te: n } = ke(), o = e, A = t, c = y(o.val || "");
    function s(x) {
      let T = {
        background: x.hex ? x.hex : x
      };
      return x === c.value && (T.border = "1px solid white", T.outline = "1px solid red", T.width = "12px", T.height = "12px"), T;
    }
    function i(x) {
      if (typeof x == "string") {
        if (x === c.value) {
          A("select", "noFill");
          return;
        }
        x = ea[x];
      }
      A("select", typeof x == "string" ? v(x) : x);
    }
    function d() {
      A("select", "noFill");
    }
    function m(x) {
      const T = "toolbar.start.textHighlight." + ea[x];
      return n(T) === !1 ? a("colorPalette.defaultToolTip") : a(T);
    }
    function p(x) {
      const T = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(x);
      return T ? {
        r: parseInt(T[1], 16),
        g: parseInt(T[2], 16),
        b: parseInt(T[3], 16)
      } : null;
    }
    function w(x, T, S) {
      const C = (u) => u.toString(16).padStart(2, "0");
      return `#${C(x)}${C(T)}${C(S)}`.toUpperCase();
    }
    function H(x) {
      const T = x.match(/\d+/g);
      return !T || T.length < 3 ? null : {
        r: Number(T[0]),
        g: Number(T[1]),
        b: Number(T[2])
      };
    }
    function v(x) {
      const T = p(x) || H(x);
      return T ? w(T.r, T.g, T.b) : x;
    }
    return (x, T) => {
      const S = _("n-space");
      return V(), Y("div", null, [
        ae("div", co, [
          ae("div", {
            class: Ct(["none-fill", ["none-fill", { selected: c.value == "" }]]),
            onClick: d
          }, [
            r(S, { horizontal: "" }, {
              default: h(() => [
                ae("div", {
                  class: "button-icon",
                  style: we({ backgroundImage: `url(${M(so)})` })
                }, null, 4),
                ae("div", uo, ee(x.$t("toolbar.start.textHighlight.none")), 1)
              ]),
              _: 1
            })
          ], 2),
          ae("div", ho, [
            (V(!0), Y(et, null, ut(e.customColors, (C) => (V(), Y("div", { key: C }, [
              r(M(ct), null, {
                trigger: h(() => [
                  ae("span", {
                    class: "color-cell",
                    style: we(s(C)),
                    onClick: (u) => i(C)
                  }, null, 12, po)
                ]),
                default: h(() => [
                  Pe(" " + ee(m(C.hex ? C.hex : C)), 1)
                ]),
                _: 2
              }, 1024)
            ]))), 128))
          ])
        ])
      ]);
    };
  }
}), mo = /* @__PURE__ */ be(fo, [["__scopeId", "data-v-eb85f50f"]]), go = /* @__PURE__ */ J({
  __name: "TextHighlightColorPickerTrigger",
  props: {
    val: {},
    placement: { default: "bottom-start" },
    space: {},
    trigger: { default: "click" },
    to: { type: [Boolean, String], default: "body" }
  },
  emits: ["select", "show"],
  setup(e, { emit: t }) {
    const a = t, n = y(!1);
    function o(c) {
      a("show", !1), n.value = !1, a("select", c);
    }
    function A(c) {
      a("show", c);
    }
    return (c, s) => (V(), Y("div", null, [
      r(M(Ia), {
        trigger: e.trigger,
        placement: e.placement,
        show: n.value,
        "onUpdate:show": [
          s[0] || (s[0] = (i) => n.value = i),
          A
        ],
        "show-arrow": !1,
        space: e.space,
        to: e.to
      }, {
        trigger: h(() => [
          $l(c.$slots, "default")
        ]),
        default: h(() => [
          r(mo, {
            val: e.val,
            onSelect: o
          }, null, 8, ["val"])
        ]),
        _: 3
      }, 8, ["trigger", "placement", "show", "space", "to"])
    ]));
  }
}), vo = /* @__PURE__ */ J({
  __name: "CommandTextHighlightSmallButton",
  props: {
    cmd: {},
    tooltip: {},
    iconName: {},
    x: {},
    y: {},
    to: { type: [Boolean, String] }
  },
  setup(e) {
    const t = ie(), a = Ae(ue), n = y(!1), o = e, A = F(() => t == null ? void 0 : t.getters["command/can"](o.cmd)), c = F(() => t == null ? void 0 : t.getters["command/getVal"](o.cmd));
    function s(p, w) {
      return Object.keys(p).find((H) => p[H] === w);
    }
    const i = F(() => s(ea, c.value));
    function d(p) {
      const w = { value: p };
      a.run(o.cmd, w);
    }
    function m(p) {
      n.value = p;
    }
    return (p, w) => (V(), $(go, {
      val: i.value,
      to: e.to,
      onSelect: d,
      onShow: m
    }, {
      default: h(() => [
        r(M(Ea), {
          "resource-image": M(Re).image,
          disabled: !A.value,
          x: e.x,
          y: e.y,
          "image-width": M(Re).width,
          tooltip: e.tooltip,
          "sub-showing": n.value,
          "show-color-cube": !0,
          color: i.value,
          "icon-name": e.iconName,
          onClick: w[0] || (w[0] = Pt(() => {
          }, ["stop"]))
        }, null, 8, ["resource-image", "disabled", "x", "y", "image-width", "tooltip", "sub-showing", "color", "icon-name"])
      ]),
      _: 1
    }, 8, ["val", "to"]));
  }
}), bo = {
  common: {
    confirm: "Confirm",
    cancel: "Cancel",
    unit: {
      CM: "CM",
      MM: "MM"
    },
    httpsOnly: "Please use this feature in an HTTPS environment",
    clipboardShortcutTip: "Browser security restrictions blocked this button action. Please use the {shortcut} keyboard shortcut.",
    emptyFileUnsupported: "Opening 0KB empty files is not supported."
  },
  editorPopup: {
    miniToolbar: "Selection mini toolbar",
    contextMenu: "Selection context menu",
    alignment: "Paragraph alignment",
    lineSpacing: "Line spacing"
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
      undo: "Undo",
      redo: "Redo",
      copy: "Copy",
      paste: "Paste",
      cut: "Cut",
      formatPainter: "Format Painter",
      bold: "Bold",
      italic: "Italic",
      underline: {
        title: "Underline",
        moreUnderlines: "More Underlines"
      },
      strikeThrough: "StrikeThrough",
      superscript: "Superscript",
      subscript: "Subscript",
      textHighlight: {
        title: "Text Highlight",
        black: "Black",
        blue: "Blue",
        cyan: "Cyan",
        green: "Green",
        magenta: "Magenta",
        red: "Red",
        yellow: "Yellow",
        white: "White",
        darkBlue: "Dark Blue",
        darkCyan: "Dark Cyan",
        darkGreen: "Dark Green",
        darkMagenta: "Dark Magenta",
        darkRed: "Dark Red",
        darkYellow: "Dark Yellow",
        darkGray: "DarkGray",
        lightGray: "Light Gray",
        none: "None",
        HighContrastOnly: "High-contrast Only",
        StopHighlighting: "Stop Highlighting"
      },
      characterShading: "Character Shading",
      fontClolor: "Font Clolor",
      fontSettings: "Font Settings",
      decreaseIndent: "Reduce Indentation Amount",
      increaseIndent: "Increase Indentation Amount",
      decreaseFontSize: "Decrease Font Size",
      increaseFontSize: "Increase Font Size",
      changeCase: {
        title: "Change Case",
        Sentence: "Sentence case",
        Lowercase: "lowercase",
        Uppercase: "UPPERCASE",
        CapitalizeEachWord: "Capitalize Each Word",
        Toggle: "tOGGLE cASE",
        HalfWidth: "Half-width",
        FullWidth: "Full-width"
      },
      horizontalAlignLeft: "Align Left",
      horizontalAlignCenter: "Align Center",
      horizontalAlignRight: "Align Right",
      horizontalAlignJustify: "Align Justify",
      horizontalAlignDistribute: "Align Distribute",
      paragraphShading: "Paragraph Shading",
      border: {
        title: "Borders",
        type: {
          bottom: "Bottom Border",
          top: "Top Border",
          left: "Left Border",
          right: "Right Border",
          no: "No Border",
          all: "All Borders",
          outside: "Outside Borders",
          inside: "Inside Borders",
          insideHorizontal: "Inside Horizontal Border",
          insideVertical: "Inside Vertical Border",
          diagonalDown: "Diagonal Down Border",
          diagonalUp: "Diagonal Up Border"
        },
        style: {
          title: "Style",
          horizontalLine: "Horizontal Line",
          drawTable: "Draw Table",
          viewGridLines: "View GridLines"
        },
        borderColor: "边框颜色",
        borderStyle: "边框样式"
      },
      paragraphBorder: "Paragraph Border",
      paragraphSettings: "Paragraph Settings",
      styles: "Styles",
      styleGallery: "Open Style Gallery",
      clearFormattingFromStyles: "Clear Formatting",
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
      multilevelList: {
        title: "Multilevel List",
        none: "None"
      },
      lineSpace: "Line Space",
      lineSpacingOptions: "Line Spacing Options...",
      paraSymbol: "Show/Hide Edit Symbol",
      paraSymbolParagraphMarks: "Show/Hide Paragraph marks",
      paraSymbolPageBreak: "Show/Hide Page break",
      paraSymbolSectionBreak: "Show/Hide Section break",
      search: "Search",
      findPlaceHolder: "Please input search content",
      next: "Next",
      prev: "Prev",
      characterBorder: "Character Border",
      clearFormatting: "Clear All Formats"
    },
    insert: {
      title: "INSERT",
      separator: "Separator",
      insertPageSeparator: "Insert Page Separator",
      insertSectionSeparator: "Insert Section Separator",
      nextPage: "Next Page",
      continuousPage: "Continuous Page",
      evenPage: "Even Page",
      oddPage: "Odd Page",
      table: "Table",
      row: "Row",
      column: "Column",
      moreRowColumn: "More Row and Column",
      insertTable: "Insert Table"
    },
    layout: {
      title: "LAYOUT",
      paperOrientation: "Paper Orientation",
      paperHorizontal: "Horizontal",
      paperVertical: "Vertical",
      paperSize: "Paper Size",
      paperSizeLabel: {
        a4: "A4",
        a3: "A3",
        kai8: "8 Kai",
        kai16: "16 Kai",
        kai16Large: "Large 16 Kai",
        kai32: "32 Kai",
        kai32Large: "Large 32 Kai",
        letter3: "Size 3 envelope",
        letter5: "Size 5 envelope",
        letter6: "Size 6 envelope",
        letter7: "Size 7 envelope",
        letter9: "Size 7 envelope"
      },
      paperSetting: "Paper Setting"
    },
    review: {
      title: "Review",
      comment: {
        insert: "New Comment",
        delete: "Delete",
        deleteAllInDocument: "delete All Comments In Document",
        previous: "Previous Comment",
        next: "Next Comment",
        showHideComment: "Show/Hide Comments",
        contextual: "Contextual",
        commentPanel: "List"
      },
      trackChanges: {
        title: "Track Changes",
        previous: "Previous Change",
        next: "Next Change"
      },
      markUpStatus: {
        simple: "Simple MarkUp",
        all: "All MarkUp",
        no: "No MarkUp",
        original: "Original"
      },
      showMarkUpType: {
        title: "Show MarkUp",
        Annotation: "Annotation",
        InsertionsAndDeletions: "Insertions And Deletions",
        Formatting: "Formatting",
        Balloons: {
          title: "Ballons",
          showRevisonsInBallons: "Show Revisons In Ballons",
          showAllRevisonsInline: "Show All Revisons Inline",
          showOnlyFormattingInBallons: "Show Only Formatting In Ballons"
        },
        SpecificPeople: "Specific People",
        AllReviewers: "All Reviewers"
      },
      AcceptChange: {
        title: "Accept",
        AcceptAndMoveToNext: "Accept and Move to Next",
        AcceptThisChange: "Accept This Change",
        AcceptAllChangesShown: "Accept All Changes Shown",
        AcceptAllChanges: "Accept All Changes",
        AcceptAllChangesAndStopTracking: "Accept All Changes and Stop Tracking"
      },
      RejectChange: {
        title: "Reject",
        RejectAndMoveToNext: "Reject and Move to Next",
        RejectThisChange: "Reject This Change",
        RejectAllChangesShown: "Reject All Changes Shown",
        RejectAllChanges: "Reject All Changes",
        RejectAllChangesAndStopTracking: "Reject All Changes and Stop Tracking"
      },
      simplifiedToTraditional: "Simplified To Traditional",
      documentEncryption: "document Encryption"
    },
    view: {
      title: "View",
      notesMaster: "Notes Master",
      ruler: "Ruler",
      gridlines: "Gridlines",
      guides: "Guides",
      navigationPane: "Navigation Pane"
    },
    table: {
      tableLayoutitle: "Table Layout",
      tableStyleTitle: "TABLE DESIGN",
      border: "Border",
      shading: "Shading",
      borderAll: "All Borders",
      borderOutside: "Outside Borders",
      borderTop: "Top Border",
      borderBottom: "Bottom Border",
      borderLeft: "Left Border",
      borderDiagonalDown: "Diagonal Down Border",
      borderDiagonalUp: "Diagonal Up Border",
      borderInside: "Inside Borders",
      borderRight: "Right Border",
      borderNone: "No Border",
      borderInsideHorizontal: "Inside Horizontal Borders",
      borderInsideVertical: "Inside Vertical Borders",
      plainTables: "Plain Tables",
      gridTables: "Grid Tables",
      listTables: "List Tables",
      tableSettings: "Table Settings",
      clearTableStyle: "Clear Table Style",
      tableStyles: "Grid Table",
      tableStyleGallery: "Table Style Gallery",
      otherTableStyles: "List Table",
      headerRow: "Header Row",
      firstColumn: "First Column",
      totalRow: "Total Row",
      lastColumn: "Last Column",
      bandedRow: "Banded Rows",
      bandedColumn: "Banded Columns",
      styleOptions: "Table Style Options",
      showTableDashedGrid: "ShowTableDashedGrid",
      style: {},
      delete: {
        title: "Delete",
        cell: "Cell",
        column: "Column",
        row: "Row",
        table: "Table"
      },
      insert: {
        title: "Insert",
        above: "Insert row above",
        below: "Insert row below",
        left: "Insert column left",
        right: "Insert column right",
        insertCells: "Insert Cells"
      },
      mergeCells: "Merge cells",
      splitTable: {
        title: "Split Table",
        row: "Split by row",
        column: "Split by col"
      },
      splitCells: "Split cells",
      autoFit: {
        title: "AutoFit",
        windows: "AutoFit windows",
        contents: "AutoFit contents",
        transpose: "Transpose",
        fixedColumnWidth: "Fixed Column Width",
        distributeRows: "Distribute Rows Evenly",
        distributeCols: "Distribute Columns Evenly"
      },
      align: {
        top: "Align Top",
        bottom: "Align Bottom",
        center: "Align Center"
      },
      cellMarginsSettings: "Cell Margins",
      select: {
        title: "Select",
        cell: "Select Cell",
        column: "Select Column",
        row: "Select Row",
        table: "Select Table"
      }
    }
  },
  panels: {
    fontSettings: {
      title: "Font",
      chineseFont: "Chinese Font",
      westernFont: "Western Font",
      fontSize: "Font Size",
      fontStyle: {
        name: "Font Style",
        regular: "Regular",
        bold: "Bold",
        italic: "Italic",
        boldItalic: "Bold Italic"
      },
      alltext: {
        title: "All text",
        fontColor: "Font color",
        underline: "Underline style",
        underlineColor: "Underline color",
        none: "(none)",
        automatic: "Automatic",
        underlineType: {
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
        },
        emphasisMark: "Emphasis Mark",
        dotEmphasis: "Dot"
      },
      effects: {
        title: "Effects",
        strikethrough: "Strikethrough",
        doubleStrikethrough: "Double Strikethrough",
        superscript: "Superscript",
        subscript: "Subscript",
        smallCaps: "small Caps",
        allCaps: "all Caps",
        hide: "hide"
      },
      placeholder: "Select"
    },
    paragraphSettings: {
      title: "Paragraph Indentation and Spacing",
      placeholder: "Select",
      general: {
        title: "General",
        alignment: "Alignment",
        alignLeft: "Left",
        alignCenter: "Center",
        alignRight: "Right",
        alignJustify: "Justified",
        alignDistribute: "Distributed",
        outlineLevel: "Outline Level",
        bodyText: "Body Text",
        outlineLevelValue: "Level {level}",
        collapsed: "Collapsed by default"
      },
      indentation: {
        title: "缩进",
        leftIndent: "Left",
        rightIndent: "Right",
        inside: "Inside",
        outside: "Outside",
        specialIndent: "Special",
        specialIndentBy: "By",
        mirrorIndents: "Mirror indents",
        specialNone: "None",
        specialFirstLine: "First Line",
        specialHanging: "Hanging",
        autoAdjustRightIndent: "Automatically adjust right indent when document grid is defined"
      },
      spacing: {
        title: "Spacing",
        spacingBefore: "Before",
        spacingAfter: "After",
        lineSpacingRule: "Line Spacing",
        lineSpacing: "At",
        lineSingle: "Single",
        lineOnePointFive: "1.5 Lines",
        lineDouble: "Double",
        lineAtLeast: "At Least",
        lineExactly: "Exactly",
        lineMultiple: "Multiple",
        dontAddSpaceBetweenSameStyle: "Do not add space between paragraphs of the same style",
        alignToDocumentGrid: "Snap to grid when document grid is defined"
      },
      unitCharacter: "ch",
      unitLine: "line",
      unitPoint: "pt",
      unitMultiple: "x"
    },
    cellMarginsSettings: {
      title: "Table Options",
      defaultCellMargins: {
        title: "Default Cell Margins",
        top: "Top",
        bottom: "Bottom",
        left: "Left",
        right: "Right"
      },
      defaultCellSpacing: {
        title: "Default Cell Spacing",
        allowSpacingBetweenCells: "Allow Spacing Between Cells"
      },
      Options: {
        title: "Options",
        autoResizeToFitContents: "Automacally Resize To Fit Contents"
      }
    },
    comment: {
      title: "Comments",
      noCommmentInThisFile: "There are no comments in this file.",
      new: "New",
      items: "items",
      moreThreadActions: "More thread actions",
      linkToCommment: "Link to commment",
      deleteThread: "Delete thread",
      editCommment: "Edit commment",
      like: "Like",
      placeholder: "Enter comment content",
      send: "Send",
      cancel: "Cancel",
      reply: "Reply",
      resolve: "Resolve",
      cancelResolved: "Cancel resolved",
      resolved: "Resolved",
      edit: "Edit",
      reopen: "Reopen",
      delete: "Delete",
      moreReplies_pre: "",
      moreReplies: " more replies",
      startAConversation: "Start a conversation",
      anotherCommnentInProgress: "another commnent in progress"
    },
    view: {
      title: "Navigation",
      Headings: "Headings",
      Pages: "Pages",
      isLoading: "isLoading...",
      Results: "Results"
    }
  },
  statusBar: {
    fullscreen: "Full Screen",
    pageNum: "Page Num",
    pages: "Pages",
    pageViewSingle: "Single",
    pageViewMulti: "Multi",
    pageViewWide: "Wide"
  },
  dropDown: {
    table: {
      mergeCell: "Merge Cell",
      unmergeCell: "Unmerge Cell",
      insertRow: "Insert Row",
      insertCol: "Insert Col",
      deleteRow: "Delete Row",
      deleteCol: "Delete Col",
      deleteTable: "Delete Table"
    },
    outlineTree: {
      promote: "promote",
      demote: "demote",
      moveUp: "Move Up",
      moveDown: "Move Down",
      delete: "Delete",
      insertSameLevelBefore: "New Heading Before",
      insertSameLevelAfter: "New Heading After",
      insertNextLevelAfter: "New Subheading",
      showHeadingLevels: {
        title: "Show Heading Levels",
        showAll: "Show All",
        showHeadings1: "Show Headings 1",
        showHeadings2: "Show Headings 2",
        showHeadings3: "Show Headings 3",
        showHeadings4: "Show Headings 4",
        showHeadings5: "Show Headings 5",
        showHeadings6: "Show Headings 6",
        showHeadings7: "Show Headings 7",
        showHeadings8: "Show Headings 8",
        showHeadings9: "Show Headings 9"
      }
    }
  },
  dialogs: {
    paperSizeSet: {
      title: "Paper Setting",
      width: "Width",
      height: "Height",
      errorMessage: "The measurement must be between 0.26 cm and 55.87 cm"
    },
    insertTable: {
      title: "Insert Table",
      row: "Row",
      column: "Column",
      rowErrorMessage: "The number must be between 1 and 32767",
      columnErrorMessage: "The number must be between 1 and 63"
    },
    pageSelector: {
      title: "Jump To",
      jumpTo: "Jump to the specified page",
      pageCountError: "Page number is incorrect, please re-enter it."
    },
    deleteTableCells: {
      title: "Delete Cells",
      shiftCellsLeft: "shift cells left",
      shiftCellsUp: "shift cells up",
      deleteEntireRow: "Delete entire row",
      deleteEntireColumn: "Delete entire column"
    },
    insertTableCells: {
      title: "Insert Cells",
      shiftCellsRight: "Shift cells right",
      shiftCellsDown: "Shift cells down",
      insertEntireRow: "Insert entire row",
      insertEntireColumn: "Insert entire column"
    },
    splitCells: {
      rowsCount: "Number of rows:",
      colsCount: "Number of columns:",
      mergeCellsBeforeSplit: "Merge cells before split",
      rowErrorMessage_pre: "The number must be a divisor of ",
      rowErrorMessage: ".",
      columnErrorMessage: "The number must be between 1 and 63"
    }
  }
}, yo = _a(en, bo), al = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yo
}, Symbol.toStringTag, { value: "Module" })), wo = {
  common: {
    confirm: "确定",
    cancel: "取消",
    unit: {
      CM: "厘米",
      MM: "毫米"
    },
    httpsOnly: "请在https环境下使用该功能",
    clipboardShortcutTip: "受浏览器安全限制，无法通过按钮完成该操作，请使用快捷键 {shortcut}。",
    emptyFileUnsupported: "不支持打开 0KB 的空文件"
  },
  editorPopup: {
    miniToolbar: "所选内容快捷工具栏",
    contextMenu: "所选内容上下文菜单",
    alignment: "段落对齐",
    lineSpacing: "行距"
  },
  toolbar: {
    file: {
      title: "文件",
      export: "导出",
      exportDocument: "导出",
      exportPDF: "导出PDF",
      open: "打开",
      trackchange: "修订",
      revisionDisplayMode: "标记",
      revisionDisplayModeItems: {
        simple: "简单标记",
        original: "原始版本",
        allMarkUp: "所有标记",
        noMarkUp: "无标记"
      }
    },
    start: {
      title: "开始",
      undo: "撤销",
      redo: "重做",
      copy: "复制",
      paste: "粘贴",
      cut: "剪切",
      formatPainter: "格式刷",
      bold: "粗体",
      italic: "斜体",
      underline: {
        title: "下划线",
        moreUnderlines: "其他下划线"
      },
      strikeThrough: "删除线",
      superscript: "上标",
      subscript: "下标",
      textHighlight: {
        title: "文本突出显示",
        black: "黑色",
        blue: "蓝色",
        cyan: "青绿",
        green: "鲜绿",
        magenta: "粉红",
        red: "红色",
        yellow: "黄色",
        white: "白色",
        darkBlue: "深蓝",
        darkCyan: "青色",
        darkGreen: "绿色",
        darkMagenta: "紫罗兰",
        darkRed: "深红",
        darkYellow: "深黄",
        darkGray: "灰色-50%",
        lightGray: "灰色-25%",
        none: "无",
        HighContrastOnly: "仅限高对比度",
        StopHighlighting: "停止突出显示"
      },
      characterShading: "字符底纹",
      fontClolor: "字体颜色",
      fontSettings: "字体设置",
      decreaseIndent: "减少缩进量",
      increaseIndent: "增加缩进量",
      decreaseFontSize: "减小字号",
      increaseFontSize: "增大字号",
      changeCase: {
        title: "更改大小写",
        Sentence: "句首字母大写",
        Lowercase: "全部小写",
        Uppercase: "全部大写",
        CapitalizeEachWord: "每个单词首字母大写",
        Toggle: "切换大小写",
        HalfWidth: "半角",
        FullWidth: "全角"
      },
      horizontalAlignLeft: "左对齐",
      horizontalAlignCenter: "居中对齐",
      horizontalAlignRight: "右对齐",
      horizontalAlignJustify: "两端对齐",
      horizontalAlignDistribute: "分散对齐",
      paragraphShading: "段落底纹",
      border: {
        title: "边框",
        type: {
          bottom: "下框线",
          top: "上框线",
          left: "左框线",
          right: "右框线",
          no: "无框线",
          all: "所有框线",
          outside: "外侧框线",
          inside: "内部框线",
          insideHorizontal: "内部横框线",
          insideVertical: "内部竖框线",
          diagonalDown: "斜下框线",
          diagonalUp: "斜上框线"
        },
        style: {
          title: "样式",
          horizontalLine: "横线",
          drawTable: "绘制表格",
          viewGridLines: "查看网格线"
        },
        borderColor: "边框颜色",
        borderStyle: "边框样式"
      },
      style: {
        heading: "标题",
        annotation: "批注",
        header: "页眉",
        footer: "页脚",
        text: "文本",
        Normal: "正文",
        subject: "对象",
        footnote: "脚注",
        endnote: "尾注",
        BalloonText: "气球文字",
        Subtitle: "副标题",
        Title: "标题",
        Quote: "引用"
      },
      paragraphBorder: "段落边框",
      paragraphSettings: "段落设置",
      styles: "样式",
      styleGallery: "展开样式库",
      clearFormattingFromStyles: "清除格式",
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
      multilevelList: {
        title: "多级列表",
        none: "无"
      },
      lineSpace: "行间距",
      lineSpacingOptions: "行距选项...",
      paraSymbol: "显示/隐藏编辑标记",
      paraSymbolParagraphMarks: "显示/隐藏段落标记",
      paraSymbolPageBreak: "显示/隐藏分页符",
      paraSymbolSectionBreak: "显示/隐藏分节符",
      search: "搜索",
      findPlaceHolder: "请输入查找内容",
      next: "下一个",
      prev: "上一个",
      characterBorder: "字符边框",
      clearFormatting: "清除所有格式"
    },
    insert: {
      title: "插入",
      separator: "分页符",
      insertPageSeparator: "插入分页符",
      insertSectionSeparator: "插入分节符",
      nextPage: "下一页",
      continuousPage: "连续页",
      evenPage: "偶数页",
      oddPage: "奇数页",
      table: "表格",
      row: "行",
      column: "列",
      moreRowColumn: "更多行列",
      insertTable: "插入表格"
    },
    layout: {
      title: "布局",
      paperOrientation: "纸张方向",
      paperHorizontal: "横向",
      paperVertical: "纵向",
      paperSize: "纸张大小",
      paperSizeLabel: {
        a4: "A4",
        a3: "A3",
        kai8: "8开",
        kai16: "16开",
        kai16Large: "大16开",
        kai32: "32开",
        kai32Large: "大32开",
        letter3: "3号信封",
        letter5: "5号信封",
        letter6: "6号信封",
        letter7: "7号信封",
        letter9: "9号信封"
      },
      paperSetting: "页面设置"
    },
    review: {
      title: "审阅",
      comment: {
        insert: "插入批注",
        delete: "删除批注",
        deleteAllInDocument: "删除文档中的所有批注",
        previous: "上一条批注",
        next: "下一条批注",
        showHideComment: "显示/隐藏",
        contextual: "嵌入式",
        commentPanel: "批注窗格"
      },
      trackChanges: {
        title: "修订",
        accept: "接受",
        reject: "拒绝",
        previous: "上一条批修订",
        next: "下一条修订"
      },
      markUpStatus: {
        simple: "简单标记",
        all: "所有标记",
        no: "无标记",
        original: "原始版本"
      },
      showMarkUpType: {
        title: "显示标记",
        Annotation: "批注",
        InsertionsAndDeletions: "插入和删除",
        Formatting: "设置格式",
        Balloons: {
          title: "批注框",
          showRevisonsInBallons: "在批注框中显示修订",
          showAllRevisonsInline: "以嵌入方式显示所有修订",
          showOnlyFormattingInBallons: "仅在批注框中显示格式设置"
        },
        SpecificPeople: "特定人员",
        AllReviewers: "所有审阅者"
      },
      AcceptChange: {
        title: "接受",
        AcceptAndMoveToNext: "接受并移到下一处",
        AcceptThisChange: "接受此修订",
        AcceptAllChangesShown: "接受所有显示的修订",
        AcceptAllChanges: "接受所有修订",
        AcceptAllChangesAndStopTracking: "接受所有更改并停止修订"
      },
      RejectChange: {
        title: "拒绝",
        RejectAndMoveToNext: "拒绝并移到下一处",
        RejectThisChange: "拒绝此修订",
        RejectAllChangesShown: "拒绝所有显示的修订",
        RejectAllChanges: "拒绝所有修订",
        RejectAllChangesAndStopTracking: "拒绝所有更改并停止修订"
      },
      simplifiedToTraditional: "简转繁",
      documentEncryption: "文档加密"
    },
    view: {
      title: "视图",
      ruler: "标尺",
      gridlines: "网格线",
      guides: "参考线",
      navigationPane: "导航窗格"
    },
    table: {
      tableLayoutitle: "表格工具",
      tableStyleTitle: "表设计",
      border: "边框",
      shading: "底纹",
      borderAll: "所有框线",
      borderOutside: "外侧框线",
      borderTop: "上框线",
      borderBottom: "下框线",
      borderLeft: "左框线",
      borderRight: "右框线",
      borderNone: "无框线",
      borderDiagonalDown: "斜下框线",
      borderDiagonalUp: "斜上框线",
      borderInside: "内部框线",
      borderInsideHorizontal: "内部横框线",
      borderInsideVertical: "内部竖框线",
      plainTables: "普通表",
      gridTables: "网格表",
      listTables: "清单表",
      tableSettings: "表格设置",
      clearTableStyle: "清除表格样式",
      tableStyles: "网格表",
      tableStyleGallery: "表格样式库",
      otherTableStyles: "清单表",
      headerRow: "标题行",
      firstColumn: "第一列",
      totalRow: "汇总行",
      lastColumn: "最后一列",
      bandedRow: "镶边行",
      bandedColumn: "镶边列",
      styleOptions: "表格样式选项",
      showTableDashedGrid: "显示虚框",
      style: {
        Plain: "普通",
        Grid: "网格",
        Table: "表",
        Light: "浅色",
        Dark: "深色",
        Accent: "强调色",
        Colorful: "彩色",
        List: "清单"
      },
      delete: {
        title: "删除",
        cell: "单元格",
        column: "列",
        row: "行",
        table: "表格"
      },
      insert: {
        title: "插入",
        above: "在上方插入",
        below: "在下方插入",
        left: "在左侧插入",
        right: "在右侧插入",
        insertCells: "插入单元格"
      },
      mergeCells: "合并单元格",
      splitTable: {
        title: "拆分表格",
        row: "按行拆分",
        column: "按列拆分"
      },
      splitCells: "拆分单元格",
      autoFit: {
        title: "自动调整",
        windows: "根据窗口调整表格",
        contents: "根据内容调整表格",
        transpose: "行列互换",
        fixedColumnWidth: "固定列宽",
        distributeRows: "平均分布各行",
        distributeCols: "平均分布各列"
      },
      align: {
        top: "顶端对齐",
        bottom: "底端对齐",
        center: "垂直居中"
      },
      cellMarginsSettings: "单元格边距",
      select: {
        title: "选择",
        cell: "单元格",
        column: "列",
        row: "行",
        table: "表格"
      }
    }
  },
  panels: {
    fontSettings: {
      title: "字体",
      chineseFont: "中文字体",
      westernFont: "西文字体",
      fontSize: "字号",
      fontStyle: {
        name: "字形",
        regular: "常规",
        bold: "加粗",
        italic: "倾斜",
        boldItalic: "加粗倾斜"
      },
      alltext: {
        title: "所有文本",
        fontColor: "字体颜色",
        underline: "下划线线型",
        underlineColor: "下划线颜色",
        none: "(无)",
        automatic: "自动",
        underlineType: {
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
        },
        emphasisMark: "着重号",
        dotEmphasis: "着重号"
      },
      effects: {
        title: "效果",
        strikethrough: "删除线",
        doubleStrikethrough: "双删除线",
        superscript: "上标",
        subscript: "下标",
        smallCaps: "小型大写字母",
        allCaps: "全部大写字母",
        hide: "隐藏"
      },
      placeholder: "请选择"
    },
    paragraphSettings: {
      title: "缩进与间距",
      placeholder: "请选择",
      general: {
        title: "常规",
        alignment: "对齐方式",
        alignLeft: "左对齐",
        alignCenter: "居中",
        alignRight: "右对齐",
        alignJustify: "两端对齐",
        alignDistribute: "分散对齐",
        outlineLevel: "大纲级别",
        bodyText: "正文文本",
        outlineLevelValue: "{level} 级",
        collapsed: "默认情况下折叠"
      },
      indentation: {
        title: "缩进",
        leftIndent: "左侧",
        rightIndent: "右侧",
        inside: "内侧",
        outside: "外侧",
        specialIndent: "特殊格式",
        specialIndentBy: "度量值",
        specialNone: "无",
        specialFirstLine: "首行缩进",
        specialHanging: "悬挂缩进",
        mirrorIndents: "对称缩进",
        autoAdjustRightIndent: "如果定义了文档网格，则自动调整右缩进"
      },
      spacing: {
        title: "间距",
        spacingBefore: "段前",
        spacingAfter: "段后",
        lineSpacingRule: "行距",
        lineSpacing: "设置值",
        lineSingle: "单倍行距",
        lineOnePointFive: "1.5 倍行距",
        lineDouble: "双倍行距",
        lineAtLeast: "最小值",
        lineExactly: "固定值",
        lineMultiple: "多倍行距",
        dontAddSpaceBetweenSameStyle: "不要在相同样式的段落间增加间距",
        alignToDocumentGrid: "如果定义了文档网格，则对齐到网格"
      },
      unitCharacter: "字符",
      unitLine: "行",
      unitPoint: "磅",
      unitMultiple: "倍"
    },
    cellMarginsSettings: {
      title: "表格",
      defaultCellMargins: {
        title: "默认单元格边距",
        top: "上",
        bottom: "下",
        left: "左",
        right: "右"
      },
      defaultCellSpacing: {
        title: "默认单元格间距",
        allowSpacingBetweenCells: "允许调整单元格间距"
      },
      Options: {
        title: "选项",
        autoResizeToFitContents: "自动重调尺寸以适应内容"
      }
    },
    comment: {
      title: "批注",
      noCommmentInThisFile: "此文件中没有批注。",
      new: "新增",
      items: "项",
      moreThreadActions: "更多会话操作",
      linkToCommment: "链接到批注",
      deleteThread: "删除会话",
      editCommment: "编辑批注",
      like: "赞",
      placeholder: "请输入批注内容",
      send: "发送",
      cancel: "取消",
      reply: "回复",
      resolve: "解决",
      cancelResolved: "取消解决",
      resolved: "已解决",
      edit: "编辑",
      reopen: "重新打开",
      delete: "删除",
      moreReplies_pre: "还有",
      moreReplies: "个回复",
      startAConversation: "开始对话",
      anotherCommnentInProgress: "another commnent in progress"
    },
    view: {
      title: "导航",
      Headings: "目录",
      Pages: "页面",
      isLoading: "加载中...",
      Results: "查找和替换"
    }
  },
  statusBar: {
    fullscreen: "全屏",
    pageNum: "页码",
    pages: "页面",
    pageViewSingle: "单页",
    pageViewMulti: "多页",
    pageViewWide: "宽页"
  },
  dropDown: {
    table: {
      mergeCell: "合并单元格",
      unmergeCell: "取消合并单元格",
      insertRow: "插入",
      insertCol: "插入",
      deleteRow: "删除",
      deleteCol: "删除",
      deleteTable: "删除表格"
    },
    outlineTree: {
      promote: "升级",
      demote: "降级",
      moveUp: "上移",
      moveDown: "下移",
      delete: "删除",
      insertSameLevelBefore: "前方新增同级目录",
      insertSameLevelAfter: "后方新增同级目录",
      insertNextLevelAfter: "后方新增子目录",
      showHeadingLevels: {
        title: "显示目录层级",
        showAll: "显示全部",
        showHeadings1: "1级目录",
        showHeadings2: "2级目录",
        showHeadings3: "3级目录",
        showHeadings4: "4级目录",
        showHeadings5: "5级目录",
        showHeadings6: "6级目录",
        showHeadings7: "7级目录",
        showHeadings8: "8级目录",
        showHeadings9: "9级目录"
      }
    }
  },
  dialogs: {
    paperSizeSet: {
      title: "页面设置",
      width: "宽度",
      height: "高度",
      errorMessage: "度量值必须介于0.26厘米和55.87厘米之间"
    },
    insertTable: {
      title: "插入表格",
      row: "行",
      column: "列",
      rowErrorMessage: "数字必须介于1和32767之间",
      columnErrorMessage: "数字必须介于1和63之间"
    },
    pageSelector: {
      title: "跳转",
      jumpTo: "跳转到指定页码",
      pageCountError: "当前页码有误，请重新输入"
    },
    deleteTableCells: {
      title: "删除单元格",
      shiftCellsLeft: "右侧单元格左移",
      shiftCellsUp: "下方单元格上移",
      deleteEntireRow: "删除整行",
      deleteEntireColumn: "删除整列"
    },
    insertTableCells: {
      title: "插入单元格",
      shiftCellsRight: "活动单元格右移",
      shiftCellsDown: "活动单元格下移",
      insertEntireRow: "整行插入",
      insertEntireColumn: "整列插入"
    },
    splitCells: {
      rowsCount: "行数:",
      colsCount: "列数:",
      mergeCellsBeforeSplit: "拆分前合并单元格",
      rowErrorMessage_pre: "数字必须是",
      rowErrorMessage: "的约数",
      columnErrorMessage: "数字必须介于1和63之间"
    }
  }
}, xo = _a(tn, wo), ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xo
}, Symbol.toStringTag, { value: "Module" })), Co = /* @__PURE__ */ Object.assign({ "./en-US.ts": al, "./zh-CN.ts": ll }), Po = /* @__PURE__ */ Object.assign({ "./en-US.ts": al, "./zh-CN.ts": ll });
function So() {
  let e = {};
  return Sa(Co, e), Sa(Po, e), e;
}
function Sa(e, t) {
  for (let a in e)
    if (e[a].default) {
      let n = a.substr(a.lastIndexOf("/") + 1, 5);
      t[n] ? t[n] = {
        ...e[n],
        ...e[a].default
      } : t[n] = e[a].default;
    }
}
let dt = "zh-CN";
function ko(e) {
  return dt = e || dt, an({
    legacy: !1,
    locale: dt,
    messages: So(),
    globalInjection: !0
  });
}
function Mo(e) {
  return !!e.Selection.callFun("getSelectedText");
}
const To = /* @__PURE__ */ J({
  __name: "DocxEditorPopup",
  props: {
    eventTarget: {}
  },
  setup(e) {
    const t = Ae(ue), a = ie(), { t: n } = ke(), o = y([]), A = Ba("docx", dt), c = gt(Ne), s = gt($a), i = gt(vo), d = gt(no), m = gt(io), p = F(() => [
      { key: "left", label: n("toolbar.start.horizontalAlignLeft") },
      { key: "center", label: n("toolbar.start.horizontalAlignCenter") },
      { key: "right", label: n("toolbar.start.horizontalAlignRight") },
      { key: "justify", label: n("toolbar.start.horizontalAlignJustify") },
      { key: "distribute", label: n("toolbar.start.horizontalAlignDistribute") }
    ]), w = F(() => [
      { key: 1, label: "1.0" },
      { key: 1.15, label: "1.15" },
      { key: 1.5, label: "1.5" },
      { key: 2, label: "2.0" },
      { key: 2.5, label: "2.5" },
      { key: 3, label: "3.0" }
    ]);
    function H() {
      return Mo(t.api);
    }
    function v(b) {
      return a.getters["command/can"](b) === !0;
    }
    function x(b) {
      return a.getters["command/active"](b) === !0;
    }
    function T(b, P) {
      return t.run(b, P);
    }
    function S(b) {
      return T(b, { value: !x(b) });
    }
    function C(b) {
      return {
        component: c,
        props: b.iconName ? { name: b.iconName, size: b.size ?? 16 } : {
          x: b.x,
          y: b.y,
          size: b.size ?? 16,
          source: Re.image,
          imageWidth: Re.width
        }
      };
    }
    function u(b) {
      return {
        id: b.id,
        label: b.label,
        tooltip: b.label,
        icon: C(b),
        shortcut: b.shortcut,
        disabled: !v(b.command),
        active: b.toggle ? x(b.command) : void 0,
        closeOnTrigger: b.closeOnTrigger,
        onTrigger: () => b.toggle ? S(b.command) : T(b.command)
      };
    }
    async function z() {
      var b;
      (b = Xe) != null && b.length || await Na(), Xe && Xe.length !== o.value.length && (o.value = Xe.map(({ fullName: P }) => ({
        label: P,
        value: P
      })));
    }
    const k = F(() => ({
      ariaLabel: n("editorPopup.miniToolbar"),
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
                  class: "docx-popup-font-name",
                  control: {
                    component: s,
                    props: {
                      cmd: l.FontName,
                      options: o.value,
                      width: 154,
                      menuWidth: 154,
                      type: "font",
                      onClick: z
                    }
                  }
                },
                {
                  kind: "control",
                  id: "font-size",
                  control: {
                    component: s,
                    props: {
                      cmd: l.FontSize,
                      options: A,
                      width: 64,
                      menuWidth: 40,
                      validateInput: Oa
                    }
                  }
                },
                u({
                  id: "increase-font-size",
                  label: n("toolbar.start.increaseFontSize"),
                  command: l.IncreaseFontSize,
                  iconName: "Ribbon_word_text_add_16__clip_cell",
                  closeOnTrigger: !1
                }),
                u({
                  id: "decrease-font-size",
                  label: n("toolbar.start.decreaseFontSize"),
                  command: l.DecreaseFontSize,
                  iconName: "Ribbon_word_text_jian_16__clip_cell",
                  closeOnTrigger: !1
                })
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
              items: [
                u({
                  id: "bold",
                  label: n("toolbar.start.bold"),
                  command: l.Bold,
                  iconName: "Ribbon_word_bold_16__clip_cell",
                  toggle: !0,
                  closeOnTrigger: !1
                }),
                u({
                  id: "italic",
                  label: n("toolbar.start.italic"),
                  command: l.Italic,
                  iconName: "Ribbon_word_Italic_16__clip_cell",
                  toggle: !0,
                  closeOnTrigger: !1
                }),
                u({
                  id: "underline",
                  label: n("toolbar.start.underline.title"),
                  command: l.Underline,
                  iconName: "Ribbon_word_underline_16__clip_cell",
                  toggle: !0,
                  closeOnTrigger: !1
                })
              ]
            },
            {
              id: "colors",
              gap: 2,
              items: [
                {
                  kind: "control",
                  id: "text-highlight",
                  control: {
                    component: i,
                    props: {
                      cmd: l.TextHighlight,
                      iconName: "Ribbon_word_fill_color_16__clip_cell",
                      tooltip: n("toolbar.start.textHighlight.title"),
                      to: !1
                    }
                  }
                },
                {
                  kind: "control",
                  id: "font-color",
                  control: {
                    component: d,
                    props: {
                      cmd: l.FontColor,
                      iconName: "Ribbon_word_text_color_16__clip_cell",
                      tooltip: n("toolbar.start.fontClolor"),
                      to: !1
                    }
                  }
                }
              ]
            },
            {
              id: "paragraph",
              gap: 2,
              items: [
                {
                  kind: "control",
                  id: "alignment",
                  control: {
                    component: m,
                    props: {
                      cmd: l.ParaAlignHorizontal,
                      iconName: "Ribbon_word_align_left_16__clip_cell",
                      tooltip: n("editorPopup.alignment"),
                      menuItems: p.value,
                      isActive: !0,
                      isActiveOption: !0,
                      to: !1
                    }
                  }
                },
                {
                  kind: "control",
                  id: "line-spacing",
                  control: {
                    component: m,
                    props: {
                      cmd: l.LineSpace,
                      iconName: "Ribbon_word_line_spacing_16__clip_cell",
                      tooltip: n("editorPopup.lineSpacing"),
                      menuItems: w.value,
                      isActive: !0,
                      isActiveOption: !0,
                      to: !1
                    }
                  }
                },
                u({
                  id: "clear-formatting",
                  label: n("toolbar.start.clearFormatting"),
                  command: l.ClearFormatting,
                  iconName: "Ribbon_word_clear_16__clip_cell",
                  closeOnTrigger: !1
                })
              ]
            }
          ]
        }
      ]
    })), Z = typeof navigator < "u" && /Mac|iPhone|iPad|iPod/i.test(navigator.platform), j = (b) => Z ? `⌘${b}` : `Ctrl+${b}`, L = F(() => ({
      ariaLabel: n("editorPopup.contextMenu"),
      width: 246,
      quickActions: [
        u({
          id: "copy",
          label: n("toolbar.start.copy"),
          command: l.Copy,
          x: -1632,
          y: -56,
          shortcut: j("C")
        }),
        u({
          id: "cut",
          label: n("toolbar.start.cut"),
          command: l.Cut,
          iconName: "ribbon_word_cut_16__clip_cell",
          shortcut: j("X")
        }),
        u({
          id: "paste",
          label: n("toolbar.start.paste"),
          command: l.Paste,
          x: -72,
          y: -30,
          size: 24,
          shortcut: j("V")
        }),
        u({
          id: "format-painter-quick",
          label: n("toolbar.start.formatPainter"),
          command: l.FormatPainter,
          iconName: "Ribbon_word_geshishua_24__clip_cell",
          size: 24,
          toggle: !0
        })
      ],
      groups: [
        {
          id: "indent",
          items: [
            u({
              id: "decrease-indent",
              label: n("toolbar.start.decreaseIndent"),
              command: l.DecreaseIndent,
              iconName: "Ribbon_word_Decrease_Indent_16__clip_cell"
            }),
            u({
              id: "increase-indent",
              label: n("toolbar.start.increaseIndent"),
              command: l.IncreaseIndent,
              iconName: "Ribbon_word_Increase_Indent_16__clip_cell"
            })
          ]
        },
        {
          id: "settings",
          items: [
            u({
              id: "font-settings",
              label: n("panels.fontSettings.title"),
              command: l.OpenFontSettingsPanel,
              iconName: "Ribbon_word_clear_16__clip_cell",
              shortcut: j("D")
            }),
            u({
              id: "paragraph-settings",
              label: n("panels.paragraphSettings.title"),
              command: l.OpenParagraphSettingsPanel,
              iconName: "Ribbon_word_paragraph_mark_16__clip_cell"
            })
          ]
        },
        {
          id: "format",
          items: [
            u({
              id: "format-painter",
              label: n("toolbar.start.formatPainter"),
              command: l.FormatPainter,
              iconName: "Ribbon_word_geshishua_24__clip_cell",
              size: 24,
              toggle: !0
            })
          ]
        }
      ]
    }));
    return (b, P) => (V(), $(M(ln), {
      "event-target": e.eventTarget,
      "is-selection-expanded": H,
      "mini-toolbar": k.value,
      "context-menu": L.value
    }, null, 8, ["event-target", "mini-toolbar", "context-menu"]));
  }
}), Ho = /* @__PURE__ */ be(To, [["__scopeId", "data-v-842eaec9"]]), ka = ".doc,.docx", Ro = /* @__PURE__ */ J({
  __name: "edit",
  setup(e) {
    const t = ie(), { t: a } = ke(), n = Xa(), o = Ae(ue), A = Ae(aa, null), c = y(null), s = (A == null ? void 0 : A.eventTarget) || null, i = y(!1), d = y(0), m = y(0), p = F(() => {
      var L;
      return ((L = t.state.command) == null ? void 0 : L.readOnly) === !0;
    }), w = F(() => {
      var L;
      return ((L = t.state.command) == null ? void 0 : L.loadEnd) === !0;
    }), H = [
      { label: a("dropDown.table.mergeCell"), key: "mergeCell" },
      { label: a("dropDown.table.unmergeCell"), key: "unmergeCell" },
      { type: "divider", key: "d1" },
      { label: a("dropDown.table.insertRow"), key: "insRow" },
      { label: a("dropDown.table.insertCol"), key: "insCol" },
      { type: "divider", key: "d2" },
      { label: a("dropDown.table.deleteRow"), key: "delRow" },
      { label: a("dropDown.table.deleteCol"), key: "delCol" },
      { type: "divider", key: "d3" },
      { label: a("dropDown.table.deleteTable"), key: "delTable" }
    ];
    let v = [];
    function x() {
      var L, b;
      try {
        (b = (L = o.api.docApp) == null ? void 0 : L.destroy) == null || b.call(L);
      } catch {
      }
    }
    function T(L, b) {
      return L.map((P) => P.type === "divider" ? P : {
        ...P,
        disabled: b
      });
    }
    function S(L) {
      i.value = !1;
      const b = {
        value: {
          action: L
        }
      };
      switch (L) {
        case "insRow":
        case "insCol":
        case "delRow":
        case "delCol":
        case "delTable":
          o.run(l.TableOperations, b);
          break;
        case "mergeCell":
        case "unmergeCell":
          o.run(l.TableCellOperations, b);
          break;
      }
    }
    function C(L) {
      w.value === !0 && (L.preventDefault(), i.value = !1, o.api.isTable() && (v = T(H, p.value), Oe(() => {
        i.value = !0, d.value = L.clientX, m.value = L.clientY;
      })));
    }
    function u() {
      i.value = !1;
    }
    function z(L) {
      const b = {
        copy: "C",
        paste: "V",
        cut: "X"
      };
      return `${/Mac|iPhone|iPad|iPod/i.test(navigator.platform) ? "Command" : "Ctrl"}+${b[L] || "C/V/X"}`;
    }
    function k(L) {
      if (L === "https") {
        n.warning(a("common.httpsOnly"));
        return;
      }
      (L === "copy" || L === "paste" || L === "cut") && n.warning(
        a("common.clipboardShortcutTip", {
          shortcut: z(L)
        })
      );
    }
    function Z() {
      return new Promise((L) => {
        const b = document.createElement("input");
        b.type = "file", b.accept = ka, b.style.display = "none", b.addEventListener(
          "change",
          () => {
            var E;
            const P = ((E = b.files) == null ? void 0 : E[0]) || null;
            if (b.remove(), P && !on(P, ka)) {
              n.warning("不支持打开该文件类型"), L(null);
              return;
            }
            if (P && P.size <= 0) {
              n.warning(a("common.emptyFileUnsupported")), L(null);
              return;
            }
            L(P);
          },
          { once: !0 }
        ), b.addEventListener(
          "cancel",
          () => {
            b.remove(), L(null);
          },
          { once: !0 }
        ), document.body.appendChild(b), b.click();
      });
    }
    async function j() {
      var b;
      const L = await Z();
      if (!(!L || !c.value))
        try {
          t.dispatch("file/onOpening"), x(), (b = o.destroy) == null || b.call(o), c.value.innerHTML = "";
          const P = await ba({
            docId: `local-${Date.now()}`,
            file: L,
            fileName: L.name,
            user: A == null ? void 0 : A.user,
            widgetMode: A == null ? void 0 : A.widgetMode,
            mainDom: c.value,
            eventTarget: A == null ? void 0 : A.eventTarget,
            [ya]: {
              beforeRender: (E) => {
                o.initApi(E);
              }
            }
          });
          t.dispatch("file/onConnected", {
            title: document.title,
            docId: P.docId
          });
        } catch (P) {
          console.error("OpenDocument failed:", P), t.commit("file/setReady"), wa(
            "OpenDocumentFailed",
            void 0,
            A == null ? void 0 : A.eventTarget
          );
        }
    }
    return Lt(() => {
      o.setSecurityErrorHandler(k), o.api.setOpenFileHandler(j), A != null && A.mainDom && (A.mainDom.value = c.value), ba({
        docId: A == null ? void 0 : A.docId,
        file: A == null ? void 0 : A.file,
        fileUrl: A == null ? void 0 : A.fileUrl,
        fileName: A == null ? void 0 : A.fileName,
        user: A == null ? void 0 : A.user,
        widgetMode: A == null ? void 0 : A.widgetMode,
        mainDom: c.value,
        eventTarget: A == null ? void 0 : A.eventTarget,
        [ya]: {
          beforeRender: (L) => {
            o.initApi(L);
          }
        }
      }).then(({ docId: L }) => {
        t.dispatch("file/onConnected", {
          title: document.title,
          docId: L
        });
      }).catch((L) => {
        console.error("OpenDocument failed:", L), t.dispatch("file/onError", L), wa(
          "OpenDocumentFailed",
          void 0,
          A == null ? void 0 : A.eventTarget
        );
      });
    }), nn(() => {
      o.setSecurityErrorHandler(null);
    }), (L, b) => (V(), Y("div", {
      class: "main-container",
      onContextmenu: Pt(C, ["prevent"])
    }, [
      r(M(An), {
        trigger: "manual",
        show: i.value,
        x: d.value,
        y: m.value,
        options: M(v),
        onSelect: S,
        onClickoutside: u
      }, null, 8, ["show", "x", "y", "options"]),
      r(ao),
      ae("div", {
        ref_key: "mainRef",
        ref: c,
        class: "main"
      }, null, 512),
      r(Ho, { "event-target": M(s) }, null, 8, ["event-target"])
    ], 32));
  }
}), nl = Symbol("LayoutRefs");
function zo() {
  const e = Ae(nl);
  if (!e) throw new Error("LayoutRefs not provided");
  return e;
}
const Do = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAnlJREFUeAHFV79rFEEUfrOuGDEXFkFU7oojGoidlabTQsVStBEtPP8BxSaVcHuijVVIZedZpFRSClqk1M7KBE7lCg+iiByXhPzeyXxLBia782N382M/WO52l5nve9+8eW+WkcBo6+dTFkWh+BvQkYB1OeftXy/GWmw07DQZp5BKAI+2n3nEWYNKAvOONT1GvE7lIfCoZPjJB3cvV6gWHDcO+Npdja+8uFo/GV/Tc//tAnr9LXp956xxosFaRNemurQkfl2oBT7dGB+mm+OnYvL5xXW3ABkhBugwMuTR44kgNZEkvCLGXTp3QpAOx/cqPi2spMb4OhJMPtOopp4j6rdf+vElAaH3xLIhUogzodff1IrWCoAD778NxMQje55Nzv6Jl6giiJ5cP00N4YSNVCV/0O5p3/mmQa8+/qNbIiqQQblUD1KQZyEG4BbGmnLGKGCwazcihhsQ8ub+eWNuJIGEeymCcO0Y3/ZSRl0VyTTTqKWSyobvQgCSEW5hCSZn/+YXUJQcUPNnes7sgnMhi5CrMGV/JgGwbz/kgCn7nQJgPQTsB4gcSVxIwEGQ26yX0PqL6NUkygtsv7ZSLXMLyLrXk8CeR9R5uqVWABpJUeLKUL4jhlbARAYHfovk+iAqpOyean+AmMJLgOpligJEaKmfF5ZjAYCuMeEe5TvLmSElILnv1RasToiTExJVly+2M4NTAByQUFtwEvOLG9ZkhSNwIXcdqO6eB6H+oahipgnQ7WzrDBee3z5DLqQcwPrK5HIBIl3nAtQUmwvsQrPDqUSU/l0AAdk27KGAd8WnGbWoJLCIvWP4czHshBHnjxixOh0N+gj8R2tsagchpS3M0pXVDQAAAABJRU5ErkJggg==", ve = {
  FontSettings: "fontSettings",
  ParagraphSettings: "paragraphSettings",
  CellMarginsSettings: "cellMarginsSettings",
  CommentPanel: "commentPanel",
  NavigationPanel: "navigationPanel"
}, Fo = rn(), Eo = [
  {
    value: "a4",
    width: 21,
    height: 29.7
  },
  {
    value: "a3",
    width: 29.7,
    height: 42
  },
  {
    value: "kai8",
    width: 25.9,
    height: 36.7
  },
  {
    value: "kai16",
    width: 18.3,
    height: 25.9
  },
  {
    value: "kai16Large",
    width: 20.9,
    height: 28.4
  },
  {
    value: "kai32",
    width: 12.9,
    height: 18.3
  },
  {
    value: "kai32Large",
    width: 13.9,
    height: 20.2
  },
  {
    value: "letter3",
    width: 12.4,
    height: 17.5
  },
  {
    value: "letter5",
    width: 10.9,
    height: 21.9
  },
  {
    value: "letter6",
    width: 11.9,
    height: 22.9
  },
  {
    value: "letter7",
    width: 16.1,
    height: 22.8
  },
  {
    value: "letter9",
    width: 22.8,
    height: 32.3
  }
];
function Vo(e) {
  const t = Eo.find((a) => a.value === e);
  return t ? {
    width: t.width,
    height: t.height
  } : null;
}
const Lo = /* @__PURE__ */ J({
  __name: "MenuNavTab",
  props: {
    modelValue: {},
    tabs: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = y(null), o = t, A = F({
      get: () => a.modelValue,
      set: (c) => o("update:modelValue", c)
    });
    return ne(() => a.tabs, () => {
      Oe(() => {
        n.value && n.value.syncBarPosition();
      });
    }), (c, s) => {
      const i = _("n-tab-pane"), d = _("n-tabs");
      return V(), $(d, {
        value: A.value,
        "onUpdate:value": s[0] || (s[0] = (m) => A.value = m),
        ref_key: "tabsRef",
        ref: n,
        "justify-content": "center",
        type: "bar",
        size: "small",
        class: "toolbar-tabs"
      }, {
        default: h(() => [
          (V(!0), Y(et, null, ut(e.tabs, (m) => (V(), $(i, {
            key: m.name,
            name: m.name,
            tab: c.$t(m.label)
          }, null, 8, ["name", "tab"]))), 128))
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}), Zo = /* @__PURE__ */ be(Lo, [["__scopeId", "data-v-16ae6387"]]), Io = { style: { position: "relative" } }, _o = /* @__PURE__ */ J({
  __name: "UnitNumberInput",
  props: /* @__PURE__ */ Yt({
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
  emits: ["update:modelValue"],
  setup(e) {
    const t = ja(e, "modelValue"), a = y(0), n = y(!1), o = e;
    ne(() => t.value, (i) => {
      setTimeout(() => {
        if (n.value) {
          n.value = !1;
          return;
        }
        a.value++;
      }, 0);
    }), ne(() => o.unit, (i, d) => {
      i != d && a.value++;
    });
    function A(i) {
      isNaN(Number(i)) && (t.value = ""), t.value = Number(i);
    }
    function c(i) {
      const d = i.replace(new RegExp(`,|${o.unit}|\\s`, "g"), "").trim();
      return /^(\d|\-)+(\.(\d+)?)?$/.test(d) ? o.min !== void 0 && Number(d) <= o.min ? (t.value = o.min, o.min) : o.max !== void 0 && Number(d) >= o.max ? (t.value = o.max, o.max) : (t.value = Number(d), Number(d)) : (o.allowString || (t.value = 0), d === "" ? null : Number.NaN);
    }
    function s(i) {
      return i === null ? "" : `${i.toLocaleString("en-US")}${o.allowString && typeof t.value == "string" ? "" : o.unit}`;
    }
    return (i, d) => {
      const m = _("n-icon"), p = _("n-input");
      return V(), Y("div", Io, [
        typeof t.value == "number" ? (V(), $(M(Et), {
          "default-value": t.value,
          parse: c,
          class: "unit-input",
          format: s,
          disabled: e.disabled,
          size: "tiny",
          "button-placement": "right",
          step: e.step,
          min: e.min,
          max: e.max,
          precision: e.precision,
          key: a.value,
          onInput: d[0] || (d[0] = () => n.value = !0),
          style: we({ width: e.width + "px" })
        }, {
          "add-icon": h(() => [
            r(m, { size: 10 }, {
              default: h(() => [
                r(M(xt))
              ]),
              _: 1
            })
          ]),
          "minus-icon": h(() => [
            r(m, { size: 10 }, {
              default: h(() => [
                r(M($e))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["default-value", "disabled", "step", "min", "max", "precision", "style"])) : (V(), $(p, {
          key: 1,
          "default-value": t.value,
          class: "unit-input",
          style: we([{ width: "100px", height: "24px", "text-align": "center" }, { width: e.width + "px" }]),
          disabled: e.disabled,
          size: "tiny",
          "button-placement": "right",
          onInput: A
        }, {
          "add-icon": h(() => [
            r(m, { size: 10 }, {
              default: h(() => [
                r(M(xt))
              ]),
              _: 1
            })
          ]),
          "minus-icon": h(() => [
            r(m, { size: 10 }, {
              default: h(() => [
                r(M($e))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["default-value", "disabled", "style"]))
      ]);
    };
  }
}), Bo = /* @__PURE__ */ be(_o, [["__scopeId", "data-v-9a6c3486"]]), Oo = /* @__PURE__ */ J({
  __name: "WordRibbon",
  setup(e) {
    const t = ie(), a = Ae(ue), n = F(() => t == null ? void 0 : t.getters["file/title"]), o = F(() => t == null ? void 0 : t.getters["menu/activeTab"]), A = F(() => (t == null ? void 0 : t.getters["menu/tempTabs"]) || {}), c = Je(null), s = F(() => [...Object.values(qt), ...Object.values(A.value)]);
    ne(
      () => o.value,
      async (p) => {
        if (!p) {
          c.value = null;
          return;
        }
        let w = "";
        if (i(p) ? w = qt[p].component : w = A.value[p].component, !w) return;
        const H = await import("./assets/index-CyS-SRjS.js?t=1788405500779");
        c.value = H[w];
      },
      { immediate: !0 }
    );
    function i(p) {
      return p in qt;
    }
    function d(p) {
      if (i(p)) {
        let w = m();
        w ? t.commit("menu/setTempTabs", { ...w }) : t.commit("menu/setTempTabs", {});
      }
      Promise.resolve().then(() => {
        t.commit("menu/setActiveTab", p);
      });
    }
    function m() {
      return A.value || null;
    }
    return (p, w) => (V(), Y("div", null, [
      r(M(sn), {
        "document-title": n.value,
        "logo-src": M(Do),
        "command-service": M(a),
        "file-icon-names": {
          open: "Ribbon_Word_Open_24__clip_cell",
          export: "Ribbon_Word_export_24__clip_cell",
          pdf: "Ribbon_Word_export_pdf_24__clip_cell"
        },
        "undo-icon-name": "TopQuickToolbar_Undo_16__clip_cell",
        "redo-icon-name": "TopQuickToolbar_Redo_16__clip_cell",
        "show-export-pdf": !0
      }, {
        default: h(() => [
          r(M(Zo), {
            modelValue: o.value,
            "onUpdate:modelValue": d,
            tabs: s.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        _: 1
      }, 8, ["document-title", "logo-src", "command-service"]),
      ae("div", null, [
        (V(), $(dn(c.value), { class: "ribbon-content-container" }))
      ])
    ]));
  }
}), No = /* @__PURE__ */ J({
  __name: "FontGeneralProperty",
  setup(e) {
    const t = y([]), a = Ba("docx", dt), n = Ae(ue), { t: o } = ke(), A = ie(), c = y(!1), s = y(""), i = y(""), d = y("");
    ne(
      () => A.getters["panel/activePanel"],
      (S) => {
        S === "fontSettings" && p();
      },
      { immediate: !0 }
    );
    const m = F(() => A.getters["file/refreshRightPanel"]);
    ne(m, () => {
      p();
    }, { flush: "post" });
    function p() {
      s.value = A.getters["file/asianFont"], i.value = A.getters["file/westernFont"];
      let S = A.getters["command/getVal"](l.Bold), C = A.getters["command/getVal"](l.Italic);
      S && C ? d.value = "boldItalic" : S ? d.value = "bold" : C ? d.value = "italic" : d.value = "";
    }
    function w(S) {
      n.api.applyFontSettings({ chineseFont: S });
    }
    function H(S) {
      n.api.applyFontSettings({ westernFont: S });
    }
    async function v() {
      (Xe == null || Xe.length == 0) && await Na(), Xe && Xe.length !== t.value.length && (t.value = Xe.map(({ fullName: S }) => ({
        label: S,
        value: S
      })));
    }
    const x = F(() => [
      { label: o("panels.fontSettings.fontStyle.regular"), value: "" },
      { label: o("panels.fontSettings.fontStyle.bold"), value: "bold" },
      { label: o("panels.fontSettings.fontStyle.italic"), value: "italic" },
      { label: o("panels.fontSettings.fontStyle.boldItalic"), value: "boldItalic" }
    ]);
    function T(S) {
      n.api.applyFontSettings({ fontStyle: S });
    }
    return (S, C) => {
      const u = _("n-form-item"), z = _("n-select"), k = _("n-form"), Z = _("n-space");
      return V(), $(Z, {
        vertical: "",
        style: { width: "90%" }
      }, {
        default: h(() => [
          r(k, {
            "label-placement": "left",
            "label-align": "left",
            size: "small",
            disabled: c.value,
            "label-width": "80"
          }, {
            default: h(() => [
              r(u, {
                label: S.$t("panels.fontSettings.chineseFont"),
                onClick: v
              }, {
                default: h(() => [
                  r(M(Qt), {
                    options: t.value,
                    "model-value": s.value,
                    width: 170,
                    type: "font",
                    "onUpdate:modelValue": w,
                    size: "small",
                    maxHeight: 160
                  }, null, 8, ["options", "model-value"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(u, {
                label: S.$t("panels.fontSettings.fontStyle.name"),
                path: "textDirection"
              }, {
                default: h(() => [
                  r(z, {
                    value: d.value,
                    "onUpdate:value": [
                      C[0] || (C[0] = (j) => d.value = j),
                      T
                    ],
                    options: x.value,
                    size: "small",
                    style: { width: "170px" },
                    placeholder: S.$t("panels.fontSettings.placeholder")
                  }, null, 8, ["value", "options", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(u, {
                label: S.$t("panels.fontSettings.fontSize"),
                path: "textDirection"
              }, {
                default: h(() => [
                  r($a, {
                    cmd: M(l).FontSize,
                    options: M(a),
                    width: 170,
                    menuWidth: 60,
                    "validate-input": M(Oa)
                  }, null, 8, ["cmd", "options", "validate-input"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(u, {
                label: S.$t("panels.fontSettings.westernFont"),
                onClick: v
              }, {
                default: h(() => [
                  r(M(Qt), {
                    options: t.value,
                    "model-value": i.value,
                    width: 170,
                    type: "font",
                    "onUpdate:modelValue": H,
                    size: "small",
                    maxHeight: 160
                  }, null, 8, ["options", "model-value"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        _: 1
      });
    };
  }
}), Xo = ["onMousedown"], jo = /* @__PURE__ */ J({
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
    showToolTips: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const { t: a } = ke(), n = e, o = t, A = y(!1), c = y(null), s = y(null), i = y(null), d = {
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
        railInsetHorizontal: "0px 4px 4px 22px",
        borderRadius: 0,
        margin: "0px 0px 0px 0px"
      }
    };
    ne(
      () => n.modelValue,
      (u) => {
        if (u == null || u == null) c.value = null;
        else {
          const z = n.options.find((k) => k.value === String(u));
          c.value = z || null;
        }
      },
      { immediate: !0 }
    ), ne(
      () => n.options,
      (u, z) => {
        z.length == 0 && setTimeout(() => {
          s && s.value && i.value && s.value.scrollIntoView({ block: "nearest" });
        }, 100);
      }
    );
    const m = y(null), p = y(!1);
    function w(u) {
      "" + p.value;
    }
    function H() {
      var u;
      n.disabled || (A.value ? (A.value = !1, (u = m.value) == null || u.blur()) : (A.value = !0, x()), p.value = A.value);
    }
    function v(u) {
      var z;
      c.value = u, T(), A.value = !1, p.value = A.value, (z = m.value) == null || z.blur();
    }
    function x() {
      Oe(() => {
        var z, k, Z;
        (z = m.value) == null || z.focus();
        const u = (k = m.value) == null ? void 0 : k.inputElRef;
        (Z = u == null ? void 0 : u.select) == null || Z.call(u), s && s.value && i.value && s.value.scrollIntoView({ block: "nearest" });
      });
    }
    function T() {
      var Z;
      const u = (Z = c.value) == null ? void 0 : Z.value, z = n.options.find((j) => j.value === u), k = z ? z.value : u;
      o("update:modelValue", k), o("change", k);
    }
    function S(u, z = !1) {
      return u ? u.imgX === void 0 ? {} : {
        backgroundImage: `url(${Re.image})`,
        width: `${z ? 132 : 130}px`,
        height: "8px",
        backgroundPosition: `${(u.imgX ?? 0) * 2}px ${(u.imgY ?? 0) * 2}px`,
        transform: "scale(1,0.5)",
        backgroundSize: `${Re.width}px auto`,
        transformOrigin: "top left",
        margin: z ? "0px 4px 0px 10px" : "0px 30px 0px 0px",
        justifyContent: "space-between",
        border: "0px solid red"
      } : {};
    }
    function C(u, z = !1) {
      return u ? u.imgX !== void 0 ? { maxWidth: "60px" } : {
        width: `${z ? 140 : 130}px`,
        textAlign: "center",
        display: "block",
        margin: z ? "0px 4px 0px 10px" : "0px 30px 0px 0px",
        justifyContent: "space-between",
        border: "0px solid green"
      } : {};
    }
    return (u, z) => {
      const k = _("n-ellipsis"), Z = _("n-icon"), j = _("n-button"), L = _("n-config-provider");
      return V(), Y("div", null, [
        r(L, { "theme-overrides": d }, {
          default: h(() => [
            r(M(Ia), {
              show: p.value,
              "onUpdate:show": z[0] || (z[0] = (b) => p.value = b),
              onShow: w,
              trigger: "click",
              placement: "bottom-start",
              "show-arrow": !1,
              to: !1,
              style: { "max-width": "200px" }
            }, {
              trigger: h(() => [
                r(j, {
                  disabled: !1,
                  onClick: H,
                  class: "color-btn button-content",
                  style: we({ width: e.width + "px" })
                }, {
                  default: h(() => {
                    var b;
                    return [
                      ((b = c.value) == null ? void 0 : b.imgX) !== void 0 ? (V(), Y("span", {
                        key: 0,
                        style: we(S(c.value, !0))
                      }, null, 4)) : (V(), $(k, {
                        key: 1,
                        class: "global-basic-display-text label-text",
                        style: we(C(c.value, !0))
                      }, {
                        default: h(() => {
                          var P;
                          return [
                            Pe(ee((P = c.value) == null ? void 0 : P.label), 1)
                          ];
                        }),
                        _: 1
                      }, 8, ["style"])),
                      r(Z, {
                        class: "arrow",
                        size: "12"
                      }, {
                        default: h(() => [
                          je(r(M(xt), null, null, 512), [
                            [Ue, p.value]
                          ]),
                          je(r(M($e), null, null, 512), [
                            [Ue, !p.value]
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }),
                  _: 1
                }, 8, ["style"])
              ]),
              default: h(() => [
                r(M(Zt), {
                  ref_key: "scrollbarRef",
                  ref: i,
                  "max-height": e.maxHeight
                }, {
                  default: h(() => [
                    (V(!0), Y(et, null, ut(e.options, (b) => {
                      var P;
                      return V(), Y("div", {
                        key: b.value,
                        class: Ct(["global-basic-display-text global-menu-list-item item", { active: b.value === ((P = c.value) == null ? void 0 : P.value) }]),
                        onMousedown: Pt((E) => v(b), ["prevent"]),
                        ref_for: !0,
                        ref: (E) => {
                          var W;
                          b.value === ((W = c.value) == null ? void 0 : W.value) && (s.value = E);
                        }
                      }, [
                        b.imgX == null ? (V(), $(k, {
                          key: 0,
                          style: we([{ "max-width": "200px", "margin-left": "10px" }, C(b)])
                        }, {
                          default: h(() => [
                            Pe(ee(b.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["style"])) : (V(), Y(et, { key: 1 }, [
                          e.showToolTips ? (V(), $(M(ct), { key: 0 }, {
                            trigger: h(() => [
                              ae("div", {
                                class: "underline-img",
                                style: we(S(b))
                              }, null, 4)
                            ]),
                            default: h(() => [
                              Pe(" " + ee(b.label), 1)
                            ]),
                            _: 2
                          }, 1024)) : (V(), Y("div", {
                            key: 1,
                            class: "underline-img",
                            style: we(S(b))
                          }, null, 4))
                        ], 64))
                      ], 42, Xo);
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
}), Uo = /* @__PURE__ */ be(jo, [["__scopeId", "data-v-927a357f"]]), Wo = {
  key: 0,
  class: "global-basic-display-text label-text",
  style: { width: "160px", textAlign: "center" }
}, Ma = /* @__PURE__ */ J({
  __name: "ColorSmallDropDown",
  props: {
    cmd: {},
    tooltip: {},
    width: {},
    showFill: { type: Boolean },
    showAuto: { type: Boolean },
    defaultColor: {},
    recentColors: {},
    isSelectEvent: { type: Boolean }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = ie(), n = Ae(ue), { standardColors: o, themeColors: A, ensureLoaded: c } = Fa(), s = y(!1), i = t, d = e, m = d.cmd ? F(() => a == null ? void 0 : a.getters["command/can"](d.cmd)) : y(!0), p = F(() => a == null ? void 0 : a.getters["command/getVal"](d.cmd)), w = F(() => La(p.value)), H = F(() => a == null ? void 0 : a.getters["file/recentColors"](d.cmd)), v = F(
      () => Za(p.value) ?? void 0
    );
    function x(u) {
      if (a.commit("file/addRecentColors", { cmd: d.cmd, recentColor: u }), d.isSelectEvent) {
        i("select", u), d.cmd && a.commit("command/setState", { cmd: d.cmd, ui: { value: u } });
        return;
      }
      const z = { value: u };
      d.cmd && n.run(d.cmd, z);
    }
    function T() {
      const u = { value: "noFill" };
      d.cmd && n.run(d.cmd, u);
    }
    function S(u) {
      "" + p.value, p.value, s.value = u, u && c();
    }
    const C = F(() => ({
      background: `${w.value}`,
      display: "block",
      margin: "2px",
      padding: "0px",
      border: "0px solid red",
      cursor: "pointer",
      width: "156px",
      height: "20px"
    }));
    return (u, z) => {
      const k = _("n-icon"), Z = _("n-button");
      return V(), $(M(Va), {
        val: w.value,
        "standard-colors": M(o),
        "theme-colors": M(A),
        "recent-colors": H.value,
        showFill: e.showFill,
        "show-auto": e.showAuto,
        onSelect: x,
        onClearFill: T,
        onShow: S,
        "selected-color-pos": v.value,
        placement: "bottom-end"
      }, {
        default: h(() => [
          r(Z, {
            disabled: !M(m),
            class: "color-btn button-content",
            style: we({ width: e.width + "px" })
          }, {
            default: h(() => {
              var j;
              return [
                ((j = v.value) == null ? void 0 : j.colorType) === M(cn).AUTO ? (V(), Y("span", Wo, ee(u.$t("panels.fontSettings.alltext.automatic")), 1)) : (V(), Y("span", {
                  key: 1,
                  style: we(C.value)
                }, null, 4)),
                r(k, {
                  class: "arrow",
                  size: "12"
                }, {
                  default: h(() => [
                    r(M($e))
                  ]),
                  _: 1
                })
              ];
            }),
            _: 1
          }, 8, ["disabled", "style"])
        ]),
        _: 1
      }, 8, ["val", "standard-colors", "theme-colors", "recent-colors", "showFill", "show-auto", "selected-color-pos"]);
    };
  }
}), Ko = /* @__PURE__ */ J({
  __name: "FontAllTextProperty",
  setup(e) {
    const t = Ae(ue), { t: a } = ke(), n = ie(), o = y(!1), A = y(""), c = y("none"), s = y("true"), i = y([
      {
        label: a("panels.fontSettings.alltext.none"),
        value: "none"
      },
      {
        label: a("panels.fontSettings.alltext.underlineType.single"),
        value: "single",
        imgX: -160,
        imgY: -193
      },
      {
        label: a("panels.fontSettings.alltext.underlineType.double"),
        value: "double",
        imgX: -3040,
        imgY: -193
      },
      {
        label: a("panels.fontSettings.alltext.underlineType.heavy"),
        value: "thick",
        imgX: 0,
        imgY: -193
      },
      {
        label: a("panels.fontSettings.alltext.underlineType.dotted"),
        value: "dotted",
        imgX: -480,
        imgY: -193
      },
      {
        label: a("panels.fontSettings.alltext.underlineType.dottedHeavy"),
        value: "dottedHeavy",
        imgX: -640,
        imgY: -193
      },
      {
        label: a("panels.fontSettings.alltext.underlineType.dash"),
        value: "dash",
        imgX: -800,
        imgY: -193
      },
      {
        label: a("panels.fontSettings.alltext.underlineType.dashHeavy"),
        value: "dashedHeavy",
        imgX: -960,
        imgY: -193
      },
      {
        label: a("panels.fontSettings.alltext.underlineType.dashLong"),
        value: "dashLong",
        imgX: -1760,
        imgY: -193
      },
      {
        label: a("panels.fontSettings.alltext.underlineType.dashLongHeavy"),
        value: "dashLongHeavy",
        imgX: -1920,
        imgY: -193
      },
      {
        label: a("panels.fontSettings.alltext.underlineType.dotDash"),
        value: "dotDash",
        imgX: -2080,
        imgY: -193
      },
      {
        label: a("panels.fontSettings.alltext.underlineType.dotDashHeavy"),
        value: "dashDotHeavy",
        imgX: -1280,
        imgY: -193
      },
      {
        label: a("panels.fontSettings.alltext.underlineType.dotdotDash"),
        value: "dotDotDash",
        imgX: -2400,
        imgY: -193
      },
      {
        label: a("panels.fontSettings.alltext.underlineType.dotdotDashHeavy"),
        value: "dashDotDotHeavy",
        imgX: -2560,
        imgY: -193
      },
      /*  波浪线暂时不支持   */
      {
        label: a("panels.fontSettings.alltext.underlineType.wavy"),
        value: "wave",
        imgX: -1600,
        imgY: -193
      },
      {
        label: a("panels.fontSettings.alltext.underlineType.wavyHeavy"),
        value: "wavyHeavy",
        imgX: -3200,
        imgY: -193
      },
      {
        label: a("panels.fontSettings.alltext.underlineType.wavyDouble"),
        value: "wavyDouble",
        imgX: -2880,
        imgY: -193
      }
    ]);
    let d = !1;
    ne(
      () => n.getters["panel/activePanel"],
      (x) => {
        x === ve.FontSettings && p();
      },
      { immediate: !0 }
    );
    const m = F(() => n.getters["file/refreshRightPanel"]);
    ne(m, () => {
      n.getters["panel/activePanel"] === ve.FontSettings && p();
    }, { flush: "post" });
    function p() {
      d = !0;
      let T = (n.getters["file/paraFlag"] & oe.DrawingIsChartShape) == oe.DrawingIsChartShape;
      s.value = T === !1, c.value = n.getters["file/emphasisMark"], c.value === void 0 && (c.value = null), A.value = n.getters["command/getVal"](l.Underline);
      let C = n.getters["command/can"](l.Underline) === !0 && A.value != "none";
      n.commit("command/setEnabled", { cmd: l.UnderlineColor, enabled: C }), C === !1 && n.commit("command/setState", {
        cmd: l.UnderlineColor,
        ui: {
          value: null
        }
      }), d = !1;
    }
    const w = F(() => [
      { label: a("panels.fontSettings.alltext.none"), value: "none" },
      { label: a("panels.fontSettings.alltext.dotEmphasis"), value: "dot" }
    ]);
    function H(x) {
      d || t.api.applyFontSettings({ emphasisMark: x });
    }
    function v(x) {
      t.api.setUnderline(x);
    }
    return (x, T) => {
      const S = _("n-form-item"), C = _("n-select"), u = _("n-form"), z = _("n-space");
      return V(), $(z, {
        vertical: "",
        style: { width: "90%" }
      }, {
        default: h(() => [
          r(u, {
            "label-placement": "left",
            "label-align": "left",
            size: "small",
            disabled: o.value,
            "label-width": "80"
          }, {
            default: h(() => [
              r(S, {
                label: x.$t("panels.fontSettings.alltext.fontColor")
              }, {
                default: h(() => [
                  r(Ma, {
                    cmd: M(l).FontColor,
                    "show-auto": !0,
                    width: 170,
                    tooltip: x.$t("toolbar.start.fontClolor"),
                    class: "global-small-icon-dropdown-button",
                    "icon-name": "Ribbon_word_text_color_16__clip_cell"
                  }, null, 8, ["cmd", "tooltip"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(S, {
                label: x.$t("panels.fontSettings.alltext.underline")
              }, {
                default: h(() => [
                  r(Uo, {
                    modelValue: A.value,
                    "onUpdate:modelValue": [
                      T[0] || (T[0] = (k) => A.value = k),
                      v
                    ],
                    options: i.value,
                    width: 170,
                    type: "font",
                    size: "small",
                    showToolTips: !0
                  }, null, 8, ["modelValue", "options"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(S, {
                label: x.$t("panels.fontSettings.alltext.underlineColor"),
                path: "underlineColor"
              }, {
                default: h(() => [
                  r(Ma, {
                    cmd: M(l).UnderlineColor,
                    "show-auto": !0,
                    width: 170,
                    tooltip: x.$t("panels.fontSettings.alltext.underlineColor"),
                    "icon-name": "Ribbon_word_text_color_16__clip_cell"
                  }, null, 8, ["cmd", "tooltip"])
                ]),
                _: 1
              }, 8, ["label"]),
              je(r(S, {
                label: x.$t("panels.fontSettings.alltext.emphasisMark")
              }, {
                default: h(() => [
                  r(C, {
                    value: c.value,
                    "onUpdate:value": [
                      T[1] || (T[1] = (k) => c.value = k),
                      H
                    ],
                    options: w.value,
                    size: "small",
                    style: { width: "170px" },
                    placeholder: x.$t("panels.fontSettings.placeholder")
                  }, null, 8, ["value", "options", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]), [
                [Ue, s.value]
              ])
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        _: 1
      });
    };
  }
}), qo = { class: "custom-panel" }, Go = /* @__PURE__ */ J({
  __name: "FontEffectsProperty",
  setup(e) {
    const t = Ae(ue), { t: a } = ke(), n = ie(), o = y(!1), A = y(!1), c = F(() => n == null ? void 0 : n.getters["command/getVal"](l.Superscript)), s = F(() => n == null ? void 0 : n.getters["command/getVal"](l.Subscript)), i = y(!1), d = y(!1), m = y(!1);
    ne(
      () => n.getters["panel/activePanel"],
      (k) => {
        k === "fontSettings" && w();
      },
      { immediate: !0 }
    );
    const p = F(() => n.getters["file/refreshRightPanel"]);
    ne(p, () => {
      w();
    }, { flush: "post" });
    function w() {
      let k = n.getters["file/strikeThroughType"];
      k === 1 ? (o.value = !0, A.value = !1) : k === 2 ? (o.value = !1, A.value = !0) : (o.value = !1, A.value = !1), i.value = n.getters["file/smallCaps"], d.value = n.getters["file/allCaps"], m.value = n.getters["file/vanish"];
    }
    function H(k) {
      k && (A.value = !1), o.value = k, x();
    }
    function v(k) {
      k && (o.value = !1), A.value = k, x();
    }
    function x() {
      let k = 0;
      o.value ? k = 1 : A.value && (k = 2);
      let Z = [];
      k === 1 ? Z.push("strike") : k === 2 && Z.push("doubleStrike"), c.value === !0 ? Z.push("superscript") : s.value === !0 && Z.push("subscript"), i.value === !0 ? Z.push("smallCaps") : d.value === !0 && Z.push("allCaps"), m.value === !0 && Z.push("vanish"), t.api.applyFontSettings({ effects: Z });
    }
    function T(k) {
      t.api.setSuperscript(k);
    }
    function S(k) {
      t.api.setSubscript(k);
    }
    function C(k) {
      k && (d.value = !1), i.value = k, x();
    }
    function u(k) {
      k && (i.value = !1), d.value = k, x();
    }
    function z(k) {
      m.value = k, x();
    }
    return (k, Z) => {
      const j = _("n-checkbox"), L = _("n-gi"), b = _("n-grid");
      return V(), Y("div", qo, [
        r(b, {
          cols: 2,
          class: "checkbox-grid"
        }, {
          default: h(() => [
            r(L, null, {
              default: h(() => [
                r(j, {
                  checked: o.value,
                  "onUpdate:checked": Z[0] || (Z[0] = (P) => o.value = P),
                  label: k.$t("panels.fontSettings.effects.strikethrough"),
                  "on-update:checked": H
                }, null, 8, ["checked", "label"])
              ]),
              _: 1
            }),
            r(L, null, {
              default: h(() => [
                r(j, {
                  checked: i.value,
                  "on-update:checked": C,
                  label: k.$t("panels.fontSettings.effects.smallCaps")
                }, null, 8, ["checked", "label"])
              ]),
              _: 1
            }),
            r(L, null, {
              default: h(() => [
                r(j, {
                  checked: A.value,
                  "onUpdate:checked": Z[1] || (Z[1] = (P) => A.value = P),
                  label: k.$t("panels.fontSettings.effects.doubleStrikethrough"),
                  "on-update:checked": v
                }, null, 8, ["checked", "label"])
              ]),
              _: 1
            }),
            r(L, null, {
              default: h(() => [
                r(j, {
                  checked: d.value,
                  "on-update:checked": u,
                  label: k.$t("panels.fontSettings.effects.allCaps")
                }, null, 8, ["checked", "label"])
              ]),
              _: 1
            }),
            r(L, null, {
              default: h(() => [
                r(j, {
                  checked: c.value,
                  "on-update:checked": T,
                  label: k.$t("panels.fontSettings.effects.superscript")
                }, null, 8, ["checked", "label"])
              ]),
              _: 1
            }),
            r(L, null, {
              default: h(() => [
                r(j, {
                  checked: m.value,
                  "on-update:checked": z,
                  label: k.$t("panels.fontSettings.effects.hide")
                }, null, 8, ["checked", "label"])
              ]),
              _: 1
            }),
            r(L, null, {
              default: h(() => [
                r(j, {
                  checked: s.value,
                  "on-update:checked": S,
                  label: k.$t("panels.fontSettings.effects.subscript")
                }, null, 8, ["checked", "label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
}), Qo = /* @__PURE__ */ J({
  __name: "FontSettingsPropertyTab",
  setup(e) {
    return (t, a) => {
      const n = _("n-collapse-item"), o = _("n-scrollbar"), A = _("n-collapse");
      return V(), $(A, {
        "default-expanded-names": ["general", "allText", "effects"],
        style: { height: "100%" }
      }, {
        default: h(() => [
          r(o, null, {
            default: h(() => [
              r(n, {
                title: t.$t("panels.paragraphSettings.general.title"),
                name: "general",
                class: "collapse-item"
              }, {
                default: h(() => [
                  r(No)
                ]),
                _: 1
              }, 8, ["title"]),
              r(n, {
                title: t.$t("panels.fontSettings.alltext.title"),
                name: "allText",
                style: { border: "none" },
                class: "collapse-item"
              }, {
                default: h(() => [
                  r(Ko)
                ]),
                _: 1
              }, 8, ["title"]),
              r(n, {
                title: t.$t("panels.fontSettings.effects.title"),
                name: "effects",
                style: { border: "none" },
                class: "collapse-item"
              }, {
                default: h(() => [
                  r(Go)
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
}), Yo = /* @__PURE__ */ be(Qo, [["__scopeId", "data-v-02d9864a"]]), Jo = { style: { padding: "10px", height: "100%", position: "relative" } }, $o = { class: "title" }, er = /* @__PURE__ */ J({
  __name: "SetFontSettingsPanel",
  setup(e) {
    const t = ie();
    function a() {
      t.commit("panel/closePanel");
    }
    return (n, o) => {
      const A = _("n-space");
      return V(), Y("div", Jo, [
        r(A, { justify: "space-between" }, {
          default: h(() => [
            ae("div", $o, ee(n.$t("panels.fontSettings.title")), 1),
            r(M(Ne), {
              name: "Dialog_close_16__clip_cell",
              size: 14,
              class: "close-icon",
              onClick: a
            })
          ]),
          _: 1
        }),
        r(Yo)
      ]);
    };
  }
}), tr = /* @__PURE__ */ be(er, [["__scopeId", "data-v-a37347b6"]]), ar = /* @__PURE__ */ J({
  __name: "ParaGeneralProperty",
  setup(e) {
    const t = Ae(ue), { t: a } = ke(), n = ie(), o = y(!1), A = y(!1), c = F(() => n == null ? void 0 : n.getters["command/getVal"](l.ParaAlignHorizontal)), s = y(""), i = y(!1), d = F(() => [
      { label: a("panels.paragraphSettings.general.alignLeft"), value: "left" },
      { label: a("panels.paragraphSettings.general.alignCenter"), value: "center" },
      { label: a("panels.paragraphSettings.general.alignRight"), value: "right" },
      { label: a("panels.paragraphSettings.general.alignJustify"), value: "justify" },
      { label: a("panels.paragraphSettings.general.alignDistribute"), value: "distribute" }
    ]), m = F(() => [
      { label: a("panels.paragraphSettings.general.bodyText"), value: "bodyText" },
      ...Array.from({ length: 9 }, (S, C) => ({
        label: a("panels.paragraphSettings.general.outlineLevelValue", {
          level: C + 1
        }),
        value: String(C + 1)
      }))
    ]);
    let p = !1;
    ne(
      () => n.getters["panel/activePanel"],
      (S) => {
        S === ve.ParagraphSettings && H();
      },
      { immediate: !0 }
    );
    const w = F(() => n.getters["file/refreshRightPanel"]);
    ne(w, () => {
      H();
    }, { flush: "post" });
    function H() {
      var C, u;
      p = !0;
      const S = (u = (C = t == null ? void 0 : t.api) == null ? void 0 : C.getParagraphSettings) == null ? void 0 : u.call(C);
      s.value = S.outlineLevel, i.value = S.collapsed, p = !1;
    }
    function v(S) {
      t.api.setParaAlignHorizontal(S);
    }
    function x(S) {
      S === "bodyText" ? t.api.applyParagraphSettings({ outlineLevel: S }) : t.api.applyParagraphSettings({ outlineLevel: parseInt(S, 10) });
    }
    function T(S) {
      p || (i.value = S, t.api.applyParagraphSettings({ collapsed: S }));
    }
    return (S, C) => {
      const u = _("n-select"), z = _("n-form-item"), k = _("n-form"), Z = _("n-checkbox"), j = _("n-space");
      return V(), $(j, {
        vertical: "",
        style: { width: "90%" }
      }, {
        default: h(() => [
          r(k, {
            "label-placement": "left",
            "label-align": "left",
            size: "small",
            disabled: o.value,
            "label-width": 80
          }, {
            default: h(() => [
              r(z, {
                label: S.$t("panels.paragraphSettings.general.alignment")
              }, {
                default: h(() => [
                  r(u, {
                    value: c.value,
                    "onUpdate:value": [
                      C[0] || (C[0] = (L) => c.value = L),
                      v
                    ],
                    options: d.value,
                    style: { width: "170px" },
                    size: "small",
                    placeholder: S.$t("panels.paragraphSettings.placeholder")
                  }, null, 8, ["value", "options", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(z, {
                label: S.$t("panels.paragraphSettings.general.outlineLevel")
              }, {
                default: h(() => [
                  r(u, {
                    value: s.value,
                    "onUpdate:value": [
                      C[1] || (C[1] = (L) => s.value = L),
                      x
                    ],
                    options: m.value,
                    style: { width: "170px" },
                    size: "small",
                    placeholder: S.$t("panels.paragraphSettings.placeholder")
                  }, null, 8, ["value", "options", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }, 8, ["disabled"]),
          r(Z, {
            disabled: A.value,
            checked: i.value,
            "onUpdate:checked": [
              C[2] || (C[2] = (L) => i.value = L),
              T
            ]
          }, {
            default: h(() => [
              Pe(ee(S.$t("panels.paragraphSettings.general.collapsed")), 1)
            ]),
            _: 1
          }, 8, ["disabled", "checked"])
        ]),
        _: 1
      });
    };
  }
}), lr = { style: { position: "relative" } }, wt = /* @__PURE__ */ J({
  __name: "NumberInput",
  props: /* @__PURE__ */ Yt({
    width: { default: 120 },
    step: { default: 1 },
    disabled: { type: Boolean, default: !1 },
    min: { default: void 0 },
    max: { default: void 0 },
    precision: { default: 0 },
    allowString: { type: Boolean, default: !1 },
    unit: { default: "%" },
    tooltip: {},
    showUnit: { type: Boolean, default: !0 }
  }, {
    modelValue: { default: 0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Yt(["blur"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const a = ja(e, "modelValue"), n = t, o = y(!1), A = y(void 0), c = e, s = y(null), i = F({
      get() {
        return s.value !== null ? s.value : a.value;
      },
      set(H) {
        typeof H == "string" ? s.value = H === "" ? null : H : typeof H == "number" && !isNaN(H) && m(H);
      }
    });
    function d() {
      o.value = !0;
    }
    function m(H) {
      if (o.value) {
        a.value = p(H), s.value = null, o.value = !1, n("blur");
        return;
      }
      const v = a.value ?? 0, x = H < v, T = Math.round(v / c.step) * c.step;
      if (Math.abs(v - T) > 1e-10) {
        const S = x ? Math.floor(v / c.step) * c.step : Math.ceil(v / c.step) * c.step;
        a.value = p(S);
      } else
        a.value = p(H);
      s.value = null, n("blur");
    }
    function p(H) {
      return c.min !== void 0 && H < c.min ? c.min : c.max !== void 0 && H >= c.max ? (A.value = c.max, c.max) : (A.value = void 0, H);
    }
    function w(H) {
      return H === null ? "" : `${H.toFixed(c.precision)}`;
    }
    return ne(a, () => {
      s.value = null;
    }), (H, v) => (V(), Y("div", lr, [
      e.tooltip ? (V(), $(M(ct), { key: 0 }, {
        trigger: h(() => [
          r(M(Et), {
            value: i.value,
            "onUpdate:value": v[0] || (v[0] = (x) => i.value = x),
            class: "unit-input",
            format: w,
            disabled: e.disabled,
            size: "small",
            "button-placement": "both",
            step: e.step,
            min: e.min,
            max: A.value,
            precision: e.precision,
            onInput: d,
            style: we({ width: e.width + "px" })
          }, {
            suffix: h(() => [
              Pe(ee(e.unit), 1)
            ]),
            _: 1
          }, 8, ["value", "disabled", "step", "min", "max", "precision", "style"])
        ]),
        default: h(() => [
          Pe(" " + ee(e.tooltip), 1)
        ]),
        _: 1
      })) : (V(), $(M(Et), {
        key: 1,
        value: i.value,
        "onUpdate:value": v[1] || (v[1] = (x) => i.value = x),
        class: "unit-input",
        format: w,
        disabled: e.disabled,
        size: "small",
        "button-placement": "both",
        step: e.step,
        min: e.min,
        max: A.value,
        precision: e.precision,
        onInput: d,
        style: we({ width: e.width + "px" })
      }, Ua({ _: 2 }, [
        e.showUnit ? {
          name: "suffix",
          fn: h(() => [
            Pe(ee(e.unit), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["value", "disabled", "step", "min", "max", "precision", "style"]))
    ]));
  }
}), nr = /* @__PURE__ */ J({
  __name: "ParaIndentationProperty",
  setup(e) {
    const t = Ae(ue), { t: a } = ke(), n = ie(), o = y(!1), A = y(""), c = y(""), s = y(""), i = y(0), d = y(!1), m = y(!1), p = y(!1), w = F(() => [
      { label: a("panels.paragraphSettings.indentation.specialNone"), value: "none" },
      { label: a("panels.paragraphSettings.indentation.specialFirstLine"), value: "firstLine" },
      { label: a("panels.paragraphSettings.indentation.specialHanging"), value: "hanging" }
    ]);
    let H = !1;
    ne(
      () => n.getters["panel/activePanel"],
      (k) => {
        k === ve.ParagraphSettings && x();
      },
      { immediate: !0 }
    );
    const v = F(() => n.getters["file/refreshRightPanel"]);
    ne(v, () => {
      x();
    }, { flush: "post" });
    function x() {
      H = !0;
      const k = t.api.getOriParagraphSettings();
      if ("" + k.IndentFirstLineChars, k.IndentFirstLine === null && k.IndentFirstLineChars === void 0)
        s.value = null, i.value = null;
      else {
        const P = k.IndentFirstLineChars === 0 ? k.IndentFirstLine : Number(k.IndentFirstLineChars || 0) / 100;
        s.value = "none", P > 0 ? s.value = "firstLine" : P < 0 && (s.value = "hanging"), i.value = Math.round(Math.abs(P) * 10) / 10;
      }
      "" + s.value + i.value, A.value = k.IndentLeft, c.value = k.IndentRight, d.value = k.MirrorIndents, p.value = k.AdjustRightInd;
      let Z = n.getters["file/paraFlag"], j = n.getters["file/isInTable"], L = (Z & oe.DrawingIsAnchor) == oe.DrawingIsAnchor;
      (Z & oe.DrawingIsChartShape) == oe.DrawingIsChartShape, (Z & oe.DrawingIsShape) == oe.DrawingIsShape && L || j ? m.value = !0 : m.value = !1, H = !1;
    }
    function T(k) {
      "" + s.value + i.value, k == "none" ? i.value = null : (i.value === null || i.value < 1e-6) && (i.value = 2), t.api.applyParagraphSettings({ specialIndent: k, specialIndentBy: i.value });
    }
    function S(k) {
      "" + s.value + i.value, s.value == "none" && i.value > 1e-6 && (s.value = "firstLine"), t.api.applyParagraphSettings({ specialIndent: s.value, specialIndentBy: i.value });
    }
    function C(k, Z) {
      H || t.api.applyParagraphSettings({ [k]: Z });
    }
    function u() {
      "" + A.value, C("indentLeft", A.value);
    }
    function z() {
      "" + c.value, C("indentRight", c.value);
    }
    return (k, Z) => {
      const j = _("n-form-item"), L = _("n-select"), b = _("n-form"), P = _("n-checkbox"), E = _("n-space");
      return V(), $(E, {
        vertical: "",
        style: { width: "90%" }
      }, {
        default: h(() => [
          r(b, {
            "label-placement": "left",
            "label-align": "left",
            size: "small",
            disabled: o.value,
            "label-width": 80
          }, {
            default: h(() => [
              r(j, {
                label: d.value ? k.$t("panels.paragraphSettings.indentation.inside") : k.$t("panels.paragraphSettings.indentation.leftIndent")
              }, {
                default: h(() => [
                  r(wt, {
                    modelValue: A.value,
                    "onUpdate:modelValue": Z[0] || (Z[0] = (W) => A.value = W),
                    min: -316.8,
                    max: 316.8,
                    step: 0.5,
                    width: 170,
                    precision: 2,
                    disabled: !1,
                    onBlur: u,
                    onKeyup: We(u, ["enter"]),
                    unit: k.$t("panels.paragraphSettings.unitCharacter")
                  }, null, 8, ["modelValue", "unit"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(j, {
                label: d.value ? k.$t("panels.paragraphSettings.indentation.outside") : k.$t("panels.paragraphSettings.indentation.rightIndent")
              }, {
                default: h(() => [
                  r(wt, {
                    modelValue: c.value,
                    "onUpdate:modelValue": Z[1] || (Z[1] = (W) => c.value = W),
                    min: -316.8,
                    max: 316.8,
                    step: 0.5,
                    width: 170,
                    precision: 2,
                    disabled: !1,
                    onBlur: z,
                    onKeyup: We(z, ["enter"]),
                    unit: k.$t("panels.paragraphSettings.unitCharacter")
                  }, null, 8, ["modelValue", "unit"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(j, {
                label: k.$t("panels.paragraphSettings.indentation.specialIndent")
              }, {
                default: h(() => [
                  r(L, {
                    value: s.value,
                    "onUpdate:value": [
                      Z[2] || (Z[2] = (W) => s.value = W),
                      T
                    ],
                    options: w.value,
                    size: "small",
                    style: { width: "170px" },
                    placeholder: k.$t("panels.paragraphSettings.placeholder")
                  }, null, 8, ["value", "options", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(j, {
                label: k.$t("panels.paragraphSettings.indentation.specialIndentBy")
              }, {
                default: h(() => [
                  r(wt, {
                    modelValue: i.value,
                    "onUpdate:modelValue": Z[3] || (Z[3] = (W) => i.value = W),
                    min: 0,
                    max: 316.8,
                    step: 0.5,
                    width: 170,
                    precision: 1,
                    disabled: !1,
                    onBlur: S,
                    onKeyup: We(S, ["enter"]),
                    unit: k.$t("panels.paragraphSettings.unitCharacter")
                  }, null, 8, ["modelValue", "unit"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }, 8, ["disabled"]),
          r(P, {
            checked: d.value,
            "onUpdate:checked": [
              Z[4] || (Z[4] = (W) => d.value = W),
              Z[5] || (Z[5] = (W) => C("mirrorIndents", W))
            ],
            disabled: m.value
          }, {
            default: h(() => [
              Pe(ee(k.$t("panels.paragraphSettings.indentation.mirrorIndents")), 1)
            ]),
            _: 1
          }, 8, ["checked", "disabled"]),
          r(P, {
            checked: p.value,
            "onUpdate:checked": [
              Z[6] || (Z[6] = (W) => p.value = W),
              Z[7] || (Z[7] = (W) => C("autoAdjustRightIndent", W))
            ]
          }, {
            default: h(() => [
              Pe(ee(k.$t("panels.paragraphSettings.indentation.autoAdjustRightIndent")), 1)
            ]),
            _: 1
          }, 8, ["checked"])
        ]),
        _: 1
      });
    };
  }
}), Ar = /* @__PURE__ */ J({
  __name: "ParaSpacingProperty",
  setup(e) {
    const t = Ae(ue), { t: a } = ke(), n = ie(), o = y(!1), A = y(""), c = y(""), s = y(""), i = y(""), d = y(1), m = y(1), p = y(""), w = y(1), H = y(1), v = y(!1), x = y(0.06), T = y(132), S = y(!1), C = y(!1), u = [
      { label: a("panels.paragraphSettings.spacing.lineSingle"), value: "single" },
      {
        label: a("panels.paragraphSettings.spacing.lineOnePointFive"),
        value: "onePointFive"
      },
      { label: a("panels.paragraphSettings.spacing.lineDouble"), value: "double" },
      { label: a("panels.paragraphSettings.spacing.lineAtLeast"), value: "atLeast" },
      { label: a("panels.paragraphSettings.spacing.lineExactly"), value: "exactly" },
      { label: a("panels.paragraphSettings.spacing.lineMultiple"), value: "multiple" }
    ], z = [
      { label: a("panels.paragraphSettings.unitLine"), value: "line" },
      { label: a("panels.paragraphSettings.unitPoint"), value: "pt" }
    ];
    let k = !1;
    ne(
      () => n.getters["panel/activePanel"],
      (N) => {
        N === ve.ParagraphSettings && L();
      },
      { immediate: !0 }
    );
    const Z = F(() => n.getters["file/refreshRightPanel"]), j = F(() => n.getters["file/isInTable"]);
    ne(Z, () => {
      L();
    }, { flush: "post" });
    function L() {
      var Fe;
      k = !0;
      const N = (Fe = t == null ? void 0 : t.api) == null ? void 0 : Fe.getOriParagraphSettings();
      let I = N.SpacingBeforeLines, Q = N.SpacingAfterLines;
      I != null ? (s.value = "line", d.value = 1, A.value = I || 0) : (s.value = "pt", d.value = 6, A.value = N.SpacingBefore), Q != null ? (i.value = "line", m.value = 1, c.value = Q || 0) : (i.value = "pt", m.value = 6, c.value = N.SpacingAfter), w.value = n.getters["command/getVal"](l.LineSpace);
      let xe = n.getters["file/paraLineRule"];
      w.value === null ? p.value = null : p.value = P(xe, w.value), b(), (p.value == "atLeast" || p.value == "exactly" || p.value == "multiple") && (w.value = Math.round(w.value * 100) / 100), S.value = N.ContextualSpacing, C.value = N.SnapToGrid, k = !1;
    }
    function b() {
      w.value === null || p.value == "atLeast" || p.value == "exactly" ? (v.value = !0, H.value = 1, x.value = p.value == "exactly" ? 0.7 : 0, T.value = 1584) : (v.value = !1, H.value = 0.5, x.value = 0.06, T.value = 132);
    }
    function P(N, I) {
      let Q = "multiple";
      return N === 0 ? Q = "atLeast" : N === 2 ? Q = "exactly" : I === 1 ? Q = "single" : I === 1.5 ? Q = "onePointFive" : I === 2 && (Q = "double"), Q;
    }
    function E(N) {
      N == "atLeast" || N == "exactly" ? (w.value = 12, t.api.applyParagraphSettings({ lineSpacingRule: N, lineSpacing: w.value })) : N == "single" ? (w.value = 1, "" + w.value, t.api.applyParagraphSettings({ lineSpacingRule: 1, lineSpacing: w.value })) : N == "onePointFive" ? (w.value = 1.5, "" + w.value, t.api.applyParagraphSettings({ lineSpacingRule: 1, lineSpacing: w.value })) : N == "double" ? (w.value = 2, "" + w.value, t.api.applyParagraphSettings({ lineSpacingRule: 1, lineSpacing: w.value })) : (w.value = 3, t.api.applyParagraphSettings({ lineSpacingRule: 1, lineSpacing: w.value }));
    }
    function W(N) {
      "" + N + p.value, p.value == null ? t.api.applyParagraphSettings({ lineSpacingRule: "atLeast", lineSpacing: 1 }) : p.value == "atLeast" || p.value == "exactly" ? t.api.applyParagraphSettings({ lineSpacingRule: p.value, lineSpacing: N }) : (p.value = "multiple", t.api.applyParagraphSettings({ lineSpacingRule: 1, lineSpacing: N }));
    }
    function te() {
      "" + A.value, pe("spacingBefore", A.value);
    }
    function q() {
      "" + c.value, pe("spacingAfter", c.value);
    }
    function se(N) {
    }
    function re(N) {
    }
    function pe(N, I) {
      k || (N == "spacingBefore" ? I = String(I) + " " + s.value : N == "spacingAfter" && (I = String(I) + " " + i.value), t.api.applyParagraphSettings({ [N]: I }));
    }
    return (N, I) => {
      const Q = _("n-select"), xe = _("n-form-item"), Fe = _("n-input-number"), D = _("n-form"), O = _("n-checkbox"), X = _("n-space");
      return V(), $(X, {
        vertical: "",
        style: { width: "90%" }
      }, {
        default: h(() => [
          r(D, {
            "label-placement": "left",
            "label-align": "left",
            disabled: o.value,
            "label-width": 80
          }, {
            default: h(() => [
              r(xe, {
                label: N.$t("panels.paragraphSettings.spacing.spacingBefore")
              }, {
                default: h(() => [
                  r(wt, {
                    modelValue: A.value,
                    "onUpdate:modelValue": I[0] || (I[0] = (G) => A.value = G),
                    step: d.value,
                    width: 110,
                    disabled: !1,
                    onBlur: te,
                    onKeyup: We(te, ["enter"]),
                    showUnit: !1
                  }, null, 8, ["modelValue", "step"]),
                  r(Q, {
                    value: s.value,
                    "onUpdate:value": [
                      I[1] || (I[1] = (G) => s.value = G),
                      se
                    ],
                    options: z,
                    size: "small",
                    style: { width: "60px" },
                    placeholder: N.$t("panels.fontSettings.placeholder")
                  }, null, 8, ["value", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(xe, {
                label: N.$t("panels.paragraphSettings.spacing.spacingAfter")
              }, {
                default: h(() => [
                  r(wt, {
                    modelValue: c.value,
                    "onUpdate:modelValue": I[2] || (I[2] = (G) => c.value = G),
                    min: 0,
                    step: m.value,
                    width: 110,
                    disabled: !1,
                    onBlur: q,
                    onKeyup: We(q, ["enter"]),
                    showUnit: !1
                  }, null, 8, ["modelValue", "step"]),
                  r(Q, {
                    value: i.value,
                    "onUpdate:value": [
                      I[3] || (I[3] = (G) => i.value = G),
                      re
                    ],
                    options: z,
                    size: "small",
                    style: { width: "60px" },
                    placeholder: N.$t("panels.fontSettings.placeholder")
                  }, null, 8, ["value", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(xe, {
                label: N.$t("panels.paragraphSettings.spacing.lineSpacingRule")
              }, {
                default: h(() => [
                  r(Q, {
                    value: p.value,
                    "onUpdate:value": [
                      I[4] || (I[4] = (G) => p.value = G),
                      E
                    ],
                    options: u,
                    size: "small",
                    min: 0,
                    style: { width: "170px" },
                    placeholder: N.$t("panels.paragraphSettings.placeholder")
                  }, null, 8, ["value", "placeholder"])
                ]),
                _: 1
              }, 8, ["label"]),
              r(xe, {
                label: N.$t("panels.paragraphSettings.spacing.lineSpacing")
              }, {
                default: h(() => [
                  r(Fe, {
                    value: w.value,
                    "onUpdate:value": [
                      I[5] || (I[5] = (G) => w.value = G),
                      W
                    ],
                    "update-value-on-input": !1,
                    min: x.value,
                    max: T.value,
                    step: H.value,
                    "button-placement": "both",
                    size: "small",
                    style: { width: "170px" }
                  }, Ua({ _: 2 }, [
                    v.value ? {
                      name: "suffix",
                      fn: h(() => [
                        Pe(ee(N.$t("panels.paragraphSettings.unitPoint")), 1)
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["value", "min", "max", "step"])
                ]),
                _: 1
              }, 8, ["label"])
            ]),
            _: 1
          }, 8, ["disabled"]),
          r(O, {
            checked: S.value,
            "onUpdate:checked": [
              I[6] || (I[6] = (G) => S.value = G),
              I[7] || (I[7] = (G) => pe("dontAddSpaceBetweenSameStyle", G))
            ],
            disabled: j.value
          }, {
            default: h(() => [
              Pe(ee(N.$t("panels.paragraphSettings.spacing.dontAddSpaceBetweenSameStyle")), 1)
            ]),
            _: 1
          }, 8, ["checked", "disabled"]),
          r(O, {
            checked: C.value,
            "onUpdate:checked": [
              I[8] || (I[8] = (G) => C.value = G),
              I[9] || (I[9] = (G) => pe("alignToDocumentGrid", G))
            ]
          }, {
            default: h(() => [
              Pe(ee(N.$t("panels.paragraphSettings.spacing.alignToDocumentGrid")), 1)
            ]),
            _: 1
          }, 8, ["checked"])
        ]),
        _: 1
      });
    };
  }
}), or = /* @__PURE__ */ J({
  __name: "ParaSettingsPropertyTab",
  setup(e) {
    return (t, a) => {
      const n = _("n-collapse-item"), o = _("n-scrollbar"), A = _("n-collapse");
      return V(), $(A, {
        "default-expanded-names": ["general", "indentation", "spacing"],
        style: { height: "100%" }
      }, {
        default: h(() => [
          r(o, null, {
            default: h(() => [
              r(n, {
                title: t.$t("panels.paragraphSettings.general.title"),
                name: "general",
                class: "collapse-item"
              }, {
                default: h(() => [
                  r(ar)
                ]),
                _: 1
              }, 8, ["title"]),
              r(n, {
                title: t.$t("panels.paragraphSettings.indentation.title"),
                name: "indentation",
                class: "collapse-item"
              }, {
                default: h(() => [
                  r(nr)
                ]),
                _: 1
              }, 8, ["title"]),
              r(n, {
                title: t.$t("panels.paragraphSettings.spacing.title"),
                name: "spacing",
                class: "collapse-item"
              }, {
                default: h(() => [
                  r(Ar)
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
}), rr = /* @__PURE__ */ be(or, [["__scopeId", "data-v-58b59134"]]), ir = { style: { padding: "10px", height: "100%", position: "relative" } }, sr = { class: "title" }, dr = /* @__PURE__ */ J({
  __name: "SetParaSettingsPanel",
  setup(e) {
    const t = ie();
    function a() {
      t.commit("panel/closePanel");
    }
    return (n, o) => {
      const A = _("n-space");
      return V(), Y("div", ir, [
        r(A, { justify: "space-between" }, {
          default: h(() => [
            ae("div", sr, ee(n.$t("panels.paragraphSettings.title")), 1),
            r(M(Ne), {
              name: "Dialog_close_16__clip_cell",
              size: 14,
              class: "close-icon",
              onClick: a
            })
          ]),
          _: 1
        }),
        r(rr)
      ]);
    };
  }
}), cr = /* @__PURE__ */ be(dr, [["__scopeId", "data-v-1d2e1218"]]), ur = { class: "global-basic-display-text label-text" }, hr = /* @__PURE__ */ J({
  __name: "TextInputNumber",
  props: {
    label: {},
    cmd: {},
    disabled: { type: Boolean },
    isInputCommand: { type: Boolean, default: !0 },
    max: {},
    step: {}
  },
  setup(e) {
    const t = Ae(ue), a = ie(), n = e, o = F(() => a == null ? void 0 : a.getters["command/getVal"](n.cmd)), A = y(o.value), c = y(0);
    let s = null;
    ne(() => o.value, (d) => {
      d != A.value && (c.value++, A.value = d);
    }), ne(A, (d) => {
      n.isInputCommand && (s || d == o.value || (s = setTimeout(() => {
        t.run(n.cmd, { value: A.value }), clearTimeout(s), s = null;
      }, 500)));
    });
    function i() {
      n.isInputCommand || t.run(n.cmd, { value: A.value });
    }
    return (d, m) => {
      const p = _("n-space");
      return V(), $(p, {
        horizontal: "",
        class: "icon-input-number"
      }, {
        default: h(() => [
          ae("span", ur, ee(e.label), 1),
          (V(), $(Bo, {
            max: e.max,
            unit: "厘米",
            step: e.step,
            min: 0,
            disabled: e.disabled,
            modelValue: A.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => A.value = w),
            key: c.value,
            onFocusout: i,
            onKeyup: We(i, ["enter"])
          }, null, 8, ["max", "step", "disabled", "modelValue"]))
        ]),
        _: 1
      });
    };
  }
}), yt = /* @__PURE__ */ be(hr, [["__scopeId", "data-v-27c4a82b"]]), pr = /* @__PURE__ */ J({
  __name: "CellMarginsProperty",
  setup(e) {
    Ae(ue);
    const { t } = ke();
    return (a, n) => {
      const o = _("n-form-item"), A = _("n-form");
      return V(), $(A, {
        "label-placement": "left",
        "label-align": "left",
        size: "small",
        style: { width: "90%" }
      }, {
        default: h(() => [
          r(o, null, {
            default: h(() => [
              r(yt, {
                cmd: M(l).CellMarginTop,
                label: a.$t("panels.cellMarginsSettings.defaultCellMargins.top"),
                "is-input-command": !1,
                max: 55.87,
                step: 0.05
              }, null, 8, ["cmd", "label"])
            ]),
            _: 1
          }),
          r(o, null, {
            default: h(() => [
              r(yt, {
                cmd: M(l).CellMarginBottom,
                label: a.$t("panels.cellMarginsSettings.defaultCellMargins.bottom"),
                "is-input-command": !1,
                max: 55.87,
                step: 0.05
              }, null, 8, ["cmd", "label"])
            ]),
            _: 1
          }),
          r(o, null, {
            default: h(() => [
              r(yt, {
                cmd: M(l).CellMarginLeft,
                label: a.$t("panels.cellMarginsSettings.defaultCellMargins.left"),
                "is-input-command": !1,
                max: 55.87,
                step: 0.05
              }, null, 8, ["cmd", "label"])
            ]),
            _: 1
          }),
          r(o, null, {
            default: h(() => [
              r(yt, {
                cmd: M(l).CellMarginRight,
                label: a.$t("panels.cellMarginsSettings.defaultCellMargins.right"),
                "is-input-command": !1,
                max: 55.87,
                step: 0.05
              }, null, 8, ["cmd", "label"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), fr = /* @__PURE__ */ J({
  __name: "CellSpacingProperty",
  setup(e) {
    Ae(ue);
    const { t } = ke();
    ie();
    const a = y(!1);
    function n(o) {
      "" + o + a.value;
    }
    return (o, A) => {
      const c = _("n-checkbox"), s = _("n-form-item"), i = _("n-form");
      return V(), $(i, {
        "label-placement": "left",
        "label-align": "left",
        size: "small",
        style: { width: "90%" }
      }, {
        default: h(() => [
          r(s, {
            label: o.$t("panels.cellMarginsSettings.defaultCellSpacing.allowSpacingBetweenCells")
          }, {
            default: h(() => [
              r(c, {
                checked: a.value,
                "onUpdate:checked": [
                  A[0] || (A[0] = (d) => a.value = d),
                  n
                ]
              }, null, 8, ["checked"])
            ]),
            _: 1
          }, 8, ["label"]),
          r(s, null, {
            default: h(() => [
              r(yt, {
                cmd: M(l).CellSpacing,
                disabled: !a.value,
                "is-input-command": !1,
                max: 4.67,
                step: 0.05
              }, null, 8, ["cmd", "disabled"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), mr = /* @__PURE__ */ J({
  __name: "CellOptionsProperty",
  setup(e) {
    Ae(ue);
    const { t } = ke(), a = ie(), n = y(!1), o = y(!1);
    ne(
      () => a.getters["panel/activePanel"],
      (s) => {
        ve.CellMarginsSettings;
      },
      { immediate: !0 }
    );
    const A = F(() => a.getters["file/refreshRightPanel"]);
    ne(A, () => {
    }, { flush: "post" });
    function c(s, i) {
    }
    return (s, i) => {
      const d = _("n-checkbox"), m = _("n-form-item"), p = _("n-form");
      return V(), $(p, {
        "label-placement": "left",
        "label-align": "left",
        size: "small",
        disabled: n.value,
        style: { width: "90%" }
      }, {
        default: h(() => [
          r(m, {
            label: s.$t("panels.cellMarginsSettings.Options.autoResizeToFitContents")
          }, {
            default: h(() => [
              r(d, {
                checked: o.value,
                "onUpdate:checked": [
                  i[0] || (i[0] = (w) => o.value = w),
                  i[1] || (i[1] = (w) => void 0)
                ]
              }, null, 8, ["checked"])
            ]),
            _: 1
          }, 8, ["label"])
        ]),
        _: 1
      }, 8, ["disabled"]);
    };
  }
}), gr = /* @__PURE__ */ J({
  __name: "TableCellSettingsPanelTab",
  setup(e) {
    return (t, a) => {
      const n = _("n-collapse-item"), o = _("n-scrollbar"), A = _("n-collapse");
      return V(), $(A, {
        "default-expanded-names": ["defaultCellMargins", "defaultCellSpacing", "Options"],
        style: { height: "100%" }
      }, {
        default: h(() => [
          r(o, null, {
            default: h(() => [
              r(n, {
                title: t.$t("panels.cellMarginsSettings.defaultCellMargins.title"),
                name: "defaultCellMargins",
                class: "collapse-item"
              }, {
                default: h(() => [
                  r(pr)
                ]),
                _: 1
              }, 8, ["title"]),
              r(n, {
                title: t.$t("panels.cellMarginsSettings.defaultCellSpacing.title"),
                name: "defaultCellSpacing",
                class: "collapse-item"
              }, {
                default: h(() => [
                  r(fr)
                ]),
                _: 1
              }, 8, ["title"]),
              r(n, {
                title: t.$t("panels.cellMarginsSettings.Options.title"),
                name: "Options",
                class: "collapse-item"
              }, {
                default: h(() => [
                  r(mr)
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
}), vr = /* @__PURE__ */ be(gr, [["__scopeId", "data-v-e5a64f52"]]), br = { style: { padding: "10px", height: "100%", position: "relative" } }, yr = { class: "title" }, wr = /* @__PURE__ */ J({
  __name: "SetTableCellSettingsPanel",
  setup(e) {
    const t = ie();
    function a() {
      t.commit("panel/closePanel");
    }
    return (n, o) => {
      const A = _("n-space");
      return V(), Y("div", br, [
        r(A, { justify: "space-between" }, {
          default: h(() => [
            ae("div", yr, ee(n.$t("panels.cellMarginsSettings.title")), 1),
            r(M(Ne), {
              x: -16,
              y: -56,
              size: 14,
              class: "close-icon",
              source: M(Re).image,
              imageWidth: M(Re).width,
              onClick: a
            }, null, 8, ["source", "imageWidth"])
          ]),
          _: 1
        }),
        r(vr)
      ]);
    };
  }
}), xr = /* @__PURE__ */ be(wr, [["__scopeId", "data-v-3844a0a3"]]), Cr = { style: { padding: "10px", height: "100%", position: "relative" } }, Pr = ["onClick"], Sr = { class: "comment-content" }, kr = { style: { "font-weight": "700" } }, Mr = {
  key: 0,
  class: "text-resolve"
}, Tr = {
  key: 0,
  class: "text-date"
}, Hr = {
  key: 0,
  style: { margin: "5px 0px" }
}, Rr = { class: "text-wrapper" }, zr = {
  key: 1,
  style: { margin: "5px 0px" }
}, Dr = ["onClick"], Fr = { style: { "font-weight": "700", color: "brown" } }, Er = { class: "text-date" }, Vr = { style: { margin: "5px 0px" } }, Lr = { class: "text-wrapper" }, Zr = { style: { "font-weight": "700" } }, Ir = {
  key: 0,
  class: "text-date"
}, _r = {
  key: 0,
  style: { margin: "5px 0px" }
}, Br = { class: "text-wrapper" }, Or = {
  key: 1,
  style: { margin: "5px 0px" }
}, Nr = {
  key: 0,
  class: "btn-send"
}, Xr = { key: 1 }, jr = /* @__PURE__ */ J({
  __name: "CommentPanel",
  setup(e) {
    const { t } = ke(), a = ie(), n = y(""), o = Ae(ue), A = F(() => a == null ? void 0 : a.getters["command/getVal"](l.CommentUpdate)), c = F(() => a == null ? void 0 : a.getters["panel/commentId"]), s = y(""), i = y(""), d = y(""), m = y(""), p = y({}), w = y({});
    ne(() => c.value, (b) => {
      d.value = b;
    }), ne(() => A.value, (b) => {
      p.value = {}, w.value = {}, b.forEach((P) => {
        p.value[P.commentId] = "", w.value[P.commentId] = !1;
      });
    });
    const H = [
      {
        label: t("panels.comment.edit"),
        key: "edit"
      },
      {
        label: t("panels.comment.reply"),
        key: "reply"
      },
      {
        label: t("panels.comment.reopen"),
        key: "reopen"
      },
      {
        label: t("panels.comment.resolve"),
        key: "resolve"
      },
      {
        label: t("panels.comment.delete"),
        key: "delete"
      }
    ];
    function v(b) {
      var P = b == null ? void 0 : b.lastIndexOf(":"), E = b.substring(0, P).replace("T", " ");
      return E;
    }
    function x() {
      a.commit("panel/closePanel");
    }
    function T(b) {
    }
    function S(b) {
    }
    function C(b, P) {
      if ("" + b + d.value, b == "edit") {
        s.value = d.value, m.value = P;
        return;
      }
      b != "reply" && b != "delete";
    }
    function u(b, P) {
    }
    function z() {
      n.value = "";
    }
    function k() {
      n.value.trim() !== "" && (o.run(l.CommentUpdate, { value: { message: n.value, type: bt.COMMENT_CREATE, replyCommentId: null, commentId: null } }), n.value = "");
    }
    function Z(b, P, E) {
      E.trim() !== "" && (o.run(l.CommentUpdate, { value: { message: E, type: bt.COMMENT_UPDATE, replyCommentId: P, commentId: b } }), s.value = "");
    }
    function j(b) {
      p.value[b].trim() !== "" && (o.run(l.CommentUpdate, { value: { message: p.value[b], type: bt.COMMENT_ADD_REPLY, replyCommentId: null, commentId: b } }), p.value[b] = "");
    }
    function L(b) {
      b != d.value && (w.value[d.value] = !1, d.value = b, "" + b + w.value[d.value], o.run(l.CommentUpdate, { value: { message: "", type: bt.COMMENT_ACTIVE_CHANGE, replyCommentId: null, commentId: b } }));
    }
    return (b, P) => {
      const E = _("n-space"), W = _("n-button"), te = _("n-dropdown"), q = _("n-button-group"), se = _("n-input"), re = _("n-collapse-transition"), pe = _("n-tab-pane"), N = _("n-tabs");
      return V(), Y("div", Cr, [
        r(N, {
          type: "card",
          animated: "",
          class: "tabs",
          style: { height: "100%" }
        }, {
          default: h(() => [
            r(pe, {
              name: "shape",
              tab: b.$t("panels.comment.title"),
              class: "comment-pane"
            }, {
              default: h(() => [
                A.value.length > 0 ? (V(), $(M(Zt), {
                  key: 0,
                  class: "scrollbar",
                  "max-height": 700
                }, {
                  default: h(() => [
                    (V(!0), Y(et, null, ut(A.value, (I) => (V(), Y("div", {
                      key: I.commentId,
                      class: Ct(["comment-item", { active: d.value === I.commentId }]),
                      onClick: (Q) => L(I.commentId)
                    }, [
                      ae("div", Sr, [
                        ae("div", null, [
                          r(E, { justify: "space-between" }, {
                            default: h(() => [
                              r(E, null, {
                                default: h(() => [
                                  ae("div", kr, ee(I.author), 1),
                                  d.value === I.commentId && I.done === "1" ? (V(), Y("div", Mr, ee(b.$t("panels.comment.resolved")), 1)) : Se("", !0)
                                ]),
                                _: 2
                              }, 1024),
                              r(E, null, {
                                default: h(() => [
                                  d.value === I.commentId ? (V(), Y("div", Tr, ee(v(I.date)), 1)) : Se("", !0),
                                  r(q, null, {
                                    default: h(() => [
                                      r(M(ct), null, {
                                        trigger: h(() => [
                                          r(W, {
                                            class: "small-icon-btn-arrow",
                                            size: "tiny",
                                            disabled: !1,
                                            onClick: (Q) => (I.commentId, void 0)
                                          }, {
                                            icon: h(() => [
                                              r(M(Jt), { size: "12" }, {
                                                default: h(() => [
                                                  r(M(CA))
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        default: h(() => [
                                          Pe(" " + ee(b.$t("panels.comment.like")), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      r(M(ct), null, {
                                        trigger: h(() => [
                                          r(W, {
                                            class: "small-icon-btn-arrow",
                                            size: "tiny",
                                            disabled: !1,
                                            onClick: (Q) => (I.commentId, void 0)
                                          }, {
                                            icon: h(() => [
                                              r(M(Jt), { size: "12" }, {
                                                default: h(() => [
                                                  r(M($e))
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        default: h(() => [
                                          Pe(" " + ee(b.$t("panels.comment.resolve")), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      r(te, {
                                        options: H,
                                        size: "small",
                                        onSelect: C
                                      }, {
                                        default: h(() => [
                                          r(W, { size: "tiny" }, {
                                            default: h(() => [...P[4] || (P[4] = [
                                              Pe("...", -1)
                                            ])]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        s.value !== I.commentId ? (V(), Y("div", Hr, [
                          ae("div", Rr, ee(I.message), 1)
                        ])) : (V(), Y("div", zr, [
                          r(se, {
                            type: "text",
                            size: "tiny",
                            "default-value": I.message,
                            value: m.value,
                            "onUpdate:value": P[0] || (P[0] = (Q) => m.value = Q)
                          }, null, 8, ["default-value", "value"]),
                          r(E, {
                            horizontal: "",
                            style: { display: "flex", "justify-content": "flex-end", margin: "5px 0px" }
                          }, {
                            default: h(() => [
                              r(M(Be), {
                                label: b.$t("panels.comment.cancel"),
                                onClickButton: P[1] || (P[1] = (Q) => {
                                  s.value = "", m.value = "";
                                }),
                                type: "standard"
                              }, null, 8, ["label"]),
                              r(M(Be), {
                                label: b.$t("panels.comment.send"),
                                onClickButton: (Q) => (I.commentId, m.value, void 0)
                              }, null, 8, ["label", "onClickButton"])
                            ]),
                            _: 2
                          }, 1024)
                        ])),
                        I.replyLst.length > 1 && !w.value[I.commentId] ? (V(), Y("div", {
                          key: 2,
                          style: { margin: "5px 0px" },
                          class: "reply-count",
                          onClick: (Q) => w.value[I.commentId] = !0
                        }, ee(b.$t("panels.comment.moreReplies_pre")) + ee(I.replyLst.length - 1) + ee(b.$t("panels.comment.moreReplies")), 9, Dr)) : Se("", !0),
                        I.replyLst.length > 1 ? (V(), $(re, {
                          key: 3,
                          show: !!w.value[I.commentId]
                        }, {
                          default: h(() => [
                            (V(!0), Y(et, null, ut(I.replyLst.slice(0, I.replyLst.length - 1), (Q) => (V(), Y("div", {
                              key: Q.id,
                              style: { "margin-left": "20px", position: "relative" }
                            }, [
                              ae("div", null, [
                                ae("div", null, [
                                  r(E, { justify: "space-between" }, {
                                    default: h(() => [
                                      ae("div", Fr, ee(Q.author), 1),
                                      ae("div", Er, ee(v(Q.date)), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                ae("div", Vr, [
                                  ae("div", Lr, ee(Q.message), 1)
                                ])
                              ])
                            ]))), 128))
                          ]),
                          _: 2
                        }, 1032, ["show"])) : Se("", !0),
                        I.replyLst.length > 0 ? (V(), Y("div", {
                          key: I.replyLst[I.replyLst.length - 1].id,
                          style: { "margin-left": "20px", position: "relative" }
                        }, [
                          ae("div", null, [
                            ae("div", null, [
                              ae("div", Zr, ee(I.replyLst[I.replyLst.length - 1].author), 1),
                              d.value === I.commentId ? (V(), Y("div", Ir, ee(v(I.replyLst[I.replyLst.length - 1].date)), 1)) : Se("", !0)
                            ]),
                            s.value !== I.replyLst[0].commentId ? (V(), Y("div", _r, [
                              ae("div", Br, ee(I.replyLst[I.replyLst.length - 1].message), 1)
                            ])) : (V(), Y("div", Or, [
                              r(se, {
                                type: "text",
                                size: "tiny",
                                "default-value": I.replyLst[I.replyLst.length - 1].message,
                                value: i.value,
                                "onUpdate:value": P[2] || (P[2] = (Q) => i.value = Q)
                              }, null, 8, ["default-value", "value"]),
                              r(E, {
                                horizontal: "",
                                style: { display: "flex", "justify-content": "flex-end", margin: "5px 0px" }
                              }, {
                                default: h(() => [
                                  r(M(Be), {
                                    label: b.$t("panels.comment.cancel"),
                                    onClickButton: P[3] || (P[3] = (Q) => {
                                      s.value = "", i.value = "";
                                    }),
                                    type: "standard"
                                  }, null, 8, ["label"]),
                                  r(M(Be), {
                                    label: b.$t("panels.comment.send"),
                                    onClickButton: (Q) => Z(I.commentId, I.replyLst[I.replyLst.length - 1].commentId, i.value)
                                  }, null, 8, ["label", "onClickButton"])
                                ]),
                                _: 2
                              }, 1024)
                            ]))
                          ])
                        ])) : Se("", !0)
                      ]),
                      r(se, {
                        type: "text",
                        size: "tiny",
                        placeholder: b.$t("panels.comment.reply"),
                        value: p.value[I.commentId],
                        "onUpdate:value": (Q) => p.value[I.commentId] = Q,
                        class: "reply-input",
                        onKeyup: We((Q) => j(I.commentId), ["enter"])
                      }, null, 8, ["placeholder", "value", "onUpdate:value", "onKeyup"]),
                      d.value === I.commentId ? (V(), Y("div", Nr, [
                        r(E, {
                          horizontal: "",
                          style: { display: "flex", "justify-content": "flex-end" }
                        }, {
                          default: h(() => [
                            r(M(Be), {
                              label: b.$t("panels.comment.cancel"),
                              onClickButton: z,
                              size: "tiny",
                              type: "standard"
                            }, null, 8, ["label"]),
                            r(M(Be), {
                              label: b.$t("panels.comment.send"),
                              onClickButton: k,
                              size: "tiny"
                            }, null, 8, ["label"])
                          ]),
                          _: 1
                        })
                      ])) : Se("", !0)
                    ], 10, Pr))), 128))
                  ]),
                  _: 1
                })) : (V(), Y("div", Xr, ee(b.$t("panels.comment.noCommmentInThisFile")), 1))
              ]),
              _: 1
            }, 8, ["tab"])
          ]),
          _: 1
        }),
        r(M(Ne), {
          name: "Dialog_close_16__clip_cell",
          style: { position: "absolute", right: "10px", top: "10px" },
          size: 14,
          class: "close-icon",
          onClick: x
        })
      ]);
    };
  }
}), Ur = /* @__PURE__ */ be(jr, [["__scopeId", "data-v-aa9a2970"]]), Wr = /* @__PURE__ */ J({
  __name: "OutlineTree",
  setup(e) {
    const t = Ae(ue), { t: a } = ke(), n = ie(), o = y(), A = y([]), c = y([]), s = y([]), i = y([]), d = y([]);
    Xa();
    const m = y(!1), p = y(), w = y(!1), H = y(!1), v = [
      {
        label: a("dropDown.outlineTree.promote"),
        key: "promote",
        disabled: w
      },
      {
        label: a("dropDown.outlineTree.demote"),
        key: "demote",
        disabled: H
      },
      // {
      //   label: t('dropDown.outlineTree.moveUp'),
      //   key: 'moveUp',
      // },
      // {
      //   label: t('dropDown.outlineTree.moveDown'),
      //   key: 'moveDown',
      // },
      {
        label: a("dropDown.outlineTree.delete"),
        key: "delete"
      },
      {
        type: "divider",
        key: "d1"
      },
      {
        label: a("dropDown.outlineTree.insertSameLevelBefore"),
        key: "insertSameLevelBefore"
      },
      {
        label: a("dropDown.outlineTree.insertSameLevelAfter"),
        key: "insertSameLevelAfter"
      },
      {
        label: a("dropDown.outlineTree.insertNextLevelAfter"),
        key: "insertNextLevelAfter"
      },
      {
        type: "divider",
        key: "d2"
      },
      {
        label: a("dropDown.outlineTree.showHeadingLevels.title"),
        key: "showHeadingLevels",
        children: [
          { key: "-1", label: a("dropDown.outlineTree.showHeadingLevels.showAll") },
          { key: "1", label: a("dropDown.outlineTree.showHeadingLevels.showHeadings1") },
          { key: "2", label: a("dropDown.outlineTree.showHeadingLevels.showHeadings2") },
          { key: "3", label: a("dropDown.outlineTree.showHeadingLevels.showHeadings3") },
          { key: "4", label: a("dropDown.outlineTree.showHeadingLevels.showHeadings4") },
          { key: "5", label: a("dropDown.outlineTree.showHeadingLevels.showHeadings5") },
          { key: "6", label: a("dropDown.outlineTree.showHeadingLevels.showHeadings6") },
          { key: "7", label: a("dropDown.outlineTree.showHeadingLevels.showHeadings7") },
          { key: "8", label: a("dropDown.outlineTree.showHeadingLevels.showHeadings8") },
          { key: "9", label: a("dropDown.outlineTree.showHeadingLevels.showHeadings9") }
        ]
      }
    ], x = y(!1), T = y(4), S = tl(F(() => v), x, T), C = F(() => el(v, T, !0));
    function u(D) {
      x.value = D;
    }
    const z = y(0), k = y(0), Z = ({ option: D }) => D.label ? {
      onClick() {
        I(D.key);
      },
      onContextmenu(O) {
        p.value = D, w.value = d.value.includes(D.key, 0), H.value = !1, m.value = !0, z.value = O.clientX, k.value = O.clientY, O.clientX, O.clientY, O.preventDefault();
      }
    } : {
      class: "outline-empty-node"
    };
    function j({ option: D }) {
      return "toggleSelect";
    }
    ne(
      () => n.getters["panel/activePanel"],
      (D) => {
        D === ve.NavigationPanel && (q(), Oe(() => {
          A.value.length > 0 && s.value.length === 0 && se(T.value);
        }));
      },
      { immediate: !0 }
    );
    const L = F(() => n.getters["file/outlineParaId"]);
    function b(D) {
      const O = /* @__PURE__ */ new Set();
      function X(G) {
        G.forEach((me) => {
          O.add(me.key), me.children && X(me.children);
        });
      }
      return X(D), O;
    }
    ne(L, () => {
      if (n.getters["panel/activePanel"] === ve.NavigationPanel) {
        let O = n.getters["file/outlineParaId"];
        c.value = [O];
      }
    }, { flush: "post" });
    const P = F(() => n.getters["file/refreshOutline"]);
    ne(P, () => {
      let D = n.getters["panel/activePanel"];
      "" + D + P.value, D === ve.NavigationPanel && P.value === !0 && q();
    }, { flush: "post" });
    function E(D, O) {
      if (D.level === O) {
        var X = {
          label: D.text,
          key: D.id,
          children: W(D, O)
        };
        return X;
      } else {
        var X = {
          label: "",
          key: D.id + "__" + String(O),
          children: te(D, O + 1)
        };
        return X;
      }
    }
    function W(D, O) {
      for (var X = [], G = 0; G < D.children.length; G++) {
        var me = D.children[G], Ze = E(me, O + 1);
        X.push(Ze);
      }
      return X;
    }
    function te(D, O) {
      if (O > 10)
        return [];
      if (D.level === O) {
        var X = [], G = E(D, O);
        return X.push(G), X;
      } else {
        var X = [], G = E(D, O);
        return X.push(G), X;
      }
    }
    function q() {
      "" + T.value, A.value = [], d.value = [];
      let D = t.api.getOutlineTree();
      for (var O = 0; O < D.children.length; O++) {
        var X = D.children[O];
        X.level === 0 && d.value.push(X.id);
        var G = E(X, 0);
        A.value.push(G);
      }
      o.value = D, o.value, A.value, d.value, Oe(() => {
        const me = b(A.value), Ze = s.value.filter((tt) => me.has(tt));
        s.value = [...Ze];
      });
    }
    function se(D) {
      i.value = [];
      for (var O = 0; O < A.value.length; O++) {
        var X = A.value[O];
        re(X, 0);
      }
      s.value = i.value, s.value;
    }
    function re(D, O) {
      if (!(T.value > 0 && O >= T.value - 1)) {
        (T.value < 0 || T.value > 0 && O < T.value) && i.value.push(D.key);
        for (var X = 0; X < D.children.length; X++) {
          var G = D.children[X];
          re(G, O + 1);
        }
      }
    }
    function pe(D, O) {
      "" + D + p.value.key, m.value = !1;
      let X = parseInt(D);
      if (X === -1 || X > 0 && X < 10) {
        T.value = X, se();
        return;
      }
      t.api.actionOutlineTreeMenuItem(D, p.value.key);
    }
    function N() {
      m.value = !1;
    }
    function I(D) {
      t.api.goto(D);
    }
    const Q = {
      Dropdown: {
        fontSize: "8px",
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
    }, xe = {
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
    }, Fe = F(() => x.value ? xe : Q);
    return (D, O) => {
      const X = _("n-tree"), G = _("n-dropdown"), me = _("n-config-provider");
      return V(), $(me, { "theme-overrides": Fe.value }, {
        default: h(() => [
          r(M(Zt), {
            class: "scrollbar",
            "max-height": 720
          }, {
            default: h(() => [
              r(X, {
                "block-line": "",
                data: A.value,
                "node-props": Z,
                "selected-keys": c.value,
                "expanded-keys": s.value,
                "onUpdate:expandedKeys": O[0] || (O[0] = (Ze) => s.value = Ze),
                "default-expand-all": "",
                "override-default-node-click-behavior": j,
                selectable: ""
              }, null, 8, ["data", "selected-keys", "expanded-keys"]),
              r(G, {
                trigger: "manual",
                placement: "bottom-start",
                show: m.value,
                options: M(S),
                "render-option": C.value,
                "on-update:show": u,
                x: z.value,
                y: k.value,
                onSelect: pe,
                onClickoutside: N
              }, null, 8, ["show", "options", "render-option", "x", "y"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["theme-overrides"]);
    };
  }
}), Kr = /* @__PURE__ */ be(Wr, [["__scopeId", "data-v-4cd44e70"]]), qr = { class: "image-preview-container" }, Gr = { class: "thumbnail-container" }, Qr = ["onClick"], Yr = ["src", "id"], Jr = /* @__PURE__ */ J({
  __name: "PagesList",
  setup(e) {
    const t = Ae(ue), { t: a } = ke(), n = ie(), o = y(0.1), A = y([]), c = y([]), s = y(0), i = y(0), d = y(0), m = y(0), p = y(-1);
    function w(E, W) {
      let te = 0, q = null;
      return function(...se) {
        const re = this, pe = +/* @__PURE__ */ new Date();
        pe - te < W ? (q !== null && clearTimeout(q), q = window.setTimeout(function() {
          te = pe, E.apply(re, se);
        }, W)) : (te = pe, E.apply(re, ...se));
      };
    }
    const H = w(function(E) {
      var q;
      let W = ((q = E == null ? void 0 : E.target) == null ? void 0 : q.scrollTop) ?? 0;
      const te = document.getElementById("scrollableContainer");
      te && ("" + te.clientHeight, "" + te.scrollTop), u(W, !0);
    }, 150);
    Lt(() => {
      const E = document.getElementById("scrollableContainer");
      E && (E.addEventListener("scroll", H, !0), d.value = E.clientHeight, "" + d.value);
    }), Wa(() => {
      const E = document.getElementById("scrollableContainer");
      E && E.removeEventListener("scroll", H, !0);
    });
    let v = !1;
    ne(
      () => n.getters["panel/activePanel"],
      (E) => {
        E === ve.NavigationPanel && C();
      },
      { immediate: !0 }
    );
    const x = F(() => n.getters["file/currentPageNum"]), T = F(() => n.getters["file/thumbnailChange"]);
    function S() {
      for (const E of c.value)
        E.isLoaded = !1, E.img = "";
      i.value = -1, u(0, !1);
    }
    ne(T, (E) => {
      if (!E || n.getters["panel/activePanel"] !== ve.NavigationPanel || v) return;
      t.api.getPages().length !== c.value.length ? C() : S();
    }), ne(x, () => {
      "" + x.value;
      let E = n.getters["panel/activePanel"];
      "" + E + x.value, E === ve.NavigationPanel && j(x.value - 1);
    }, { flush: "post" });
    function C() {
      v = !0, c.value = [], A.value = t.api.getPages(), "" + A.value.length;
      for (let E = 0; E < A.value.length; E++) {
        const W = {
          index: E,
          w: A.value[E].w,
          h: A.value[E].h,
          isLoaded: !1,
          img: ""
        };
        c.value.push(W);
      }
      i.value = -1, u(0, !1), v = !1;
    }
    function u(E, W) {
      if ("" + E + i.value + d.value, i.value === E)
        return;
      let te = 0, q = -1;
      const se = 38;
      let re = 0;
      if (W === !0) {
        for (let N = 0; N < A.value.length; N++)
          if (re = re + A.value[N].h * 0.1 + se, !(re < E)) {
            te = N;
            break;
          }
        let pe = d.value;
        re = 0;
        for (let N = te; N < A.value.length; N++)
          if (re = re + A.value[N].h * 0.1 + se, !(re < pe)) {
            q = N;
            break;
          }
      } else
        q = A.value.length > 5 ? 5 : A.value.length - 1;
      if (m.value = te, p.value = q, "" + m.value + p.value, te > -1 && q >= te) {
        let pe = null;
        const N = q - te + 1;
        t.api.prepareThumbnails(te, N, pe).then(
          (Q) => {
            z(te, N);
          },
          (Q) => {
          }
        );
      }
      i.value = E;
    }
    function z(E, W) {
      for (let te = 0; te < W; te++) {
        let q = E + te;
        if (c.value[q].isLoaded === !1) {
          const re = t.api.getThumbnail(q).toDataURL("image/png");
          c.value[q].isLoaded = !0, c.value[q].img = re;
        }
      }
    }
    function k(E) {
      s.value = E, t.api.goToPage(E + 1);
    }
    const Z = y(null);
    async function j(E) {
      var W;
      await Oe(), (W = document.getElementById("page" + E)) == null || W.scrollIntoView({ block: "center" });
    }
    function L(E) {
      return {
        width: `${(E.w ?? 0) * 0.1}px`,
        height: `${(E.h ?? 0) * 0.1}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--primary-text)",
        fontSize: "12px"
      };
    }
    function b(E) {
      return {
        width: `${(E.w ?? 0) * 0.1}px`,
        height: "32px",
        textAlign: "center",
        display: "inline-block",
        color: "var(--primary-text)",
        fontSize: "14px",
        border: "0px solid red",
        margin: "0px 0px 6px 0px"
      };
    }
    const P = {
      Scrollbar: {
        scrollbarColor: "var(--active-bg)",
        railInsetHorizontal: "0px 4px 4px 22px",
        borderRadius: 0,
        margin: "0px 0px 0px 0px"
      }
    };
    return (E, W) => {
      const te = _("n-config-provider");
      return V(), $(te, { "theme-overrides": P }, {
        default: h(() => [
          r(M(Zt), {
            id: "scrollableContainer",
            ref_key: "scrollbarRef",
            ref: Z,
            class: "scrollbar",
            "max-height": 780,
            trigger: "none"
          }, {
            default: h(() => [
              ae("div", qr, [
                ae("div", Gr, [
                  (V(!0), Y(et, null, ut(c.value, (q) => (V(), Y("div", {
                    key: q.index,
                    class: Ct(["thumbnail-item", { active: s.value === q.index }]),
                    onClick: (se) => k(q.index)
                  }, [
                    ae("div", {
                      class: "thumbnail-content",
                      style: we({ width: q.w * o.value + "px", height: q.h * o.value + 38 + "px" })
                    }, [
                      je(ae("div", {
                        class: "img-content",
                        style: we(L(q))
                      }, ee(E.$t("panels.view.isLoading")), 5), [
                        [Ue, !q.isLoaded]
                      ]),
                      je(ae("img", {
                        src: q.img,
                        class: Ct(["img-content", ["img-content", { selected: q.index == s.value }]]),
                        id: "page" + q.index,
                        style: we({ width: q.w * o.value + "px", height: q.h * o.value + "px" })
                      }, null, 14, Yr), [
                        [Ue, q.isLoaded]
                      ]),
                      ae("div", {
                        class: "global-basic-display-text label-text",
                        style: we(b(q))
                      }, ee(q.index + 1), 5)
                    ], 4)
                  ], 10, Qr))), 128))
                ])
              ])
            ]),
            _: 1
          }, 512)
        ]),
        _: 1
      });
    };
  }
}), $r = /* @__PURE__ */ be(Jr, [["__scopeId", "data-v-ba8510b6"]]), ei = { style: { padding: "10px", height: "100%", position: "relative" } }, ti = /* @__PURE__ */ J({
  __name: "NavigationPanel",
  setup(e) {
    const t = y("Headings"), a = ie();
    function n() {
      a.commit("panel/closePanel"), a.commit("command/setState", {
        cmd: l.NavigationPanel,
        ui: { value: !1 }
      });
    }
    return (o, A) => {
      const c = _("n-tab-pane"), s = _("n-tabs");
      return V(), Y("div", ei, [
        r(s, {
          value: t.value,
          "onUpdate:value": A[0] || (A[0] = (i) => t.value = i),
          "default-value": "Headings",
          type: "card"
        }, {
          default: h(() => [
            r(c, {
              name: "Headings",
              tab: o.$t("panels.view.Headings"),
              "display-directive": "show:lazy"
            }, {
              default: h(() => [
                r(Kr)
              ]),
              _: 1
            }, 8, ["tab"]),
            r(c, {
              name: "Pages",
              tab: o.$t("panels.view.Pages"),
              "display-directive": "show:lazy"
            }, {
              default: h(() => [
                r($r)
              ]),
              _: 1
            }, 8, ["tab"])
          ]),
          _: 1
        }, 8, ["value"]),
        r(M(Ne), {
          name: "Dialog_close_16__clip_cell",
          style: { position: "absolute", right: "10px", top: "10px" },
          size: 14,
          class: "close-icon",
          onClick: n
        })
      ]);
    };
  }
}), ai = /* @__PURE__ */ be(ti, [["__scopeId", "data-v-88bc7141"]]), li = /* @__PURE__ */ J({
  __name: "RightPanelContent",
  setup(e) {
    const t = ie(), a = F(() => t.getters["panel/activePanel"]);
    return (n, o) => a.value === M(ve).FontSettings ? (V(), $(tr, { key: 0 })) : a.value === M(ve).ParagraphSettings ? (V(), $(cr, { key: 1 })) : a.value === M(ve).CellMarginsSettings ? (V(), $(xr, { key: 2 })) : a.value === M(ve).CommentPanel ? (V(), $(Ur, { key: 3 })) : a.value === M(ve).NavigationPanel ? (V(), $(ai, { key: 4 })) : Se("", !0);
  }
}), ni = { class: "zoom-wrapper" }, Ai = /* @__PURE__ */ J({
  __name: "CommandZoom",
  props: {
    cmd: {},
    modelValue: {},
    min: { default: 10 },
    max: { default: 500 },
    step: {},
    disabled: { type: Boolean },
    width: { default: 200 }
  },
  setup(e) {
    const t = ie(), a = e, n = F(() => t == null ? void 0 : t.getters["command/can"](a.cmd)), o = F(() => t == null ? void 0 : t.getters["command/getVal"](a.cmd)), A = Ae(ue);
    function c(s) {
      const i = { value: s };
      A.run(a.cmd, i), t.commit("command/setState", {
        cmd: l.Zoom,
        ui: {
          value: s
        }
      });
    }
    return (s, i) => (V(), Y("div", ni, [
      r(M(un), {
        modelValue: o.value,
        "onUpdate:modelValue": i[0] || (i[0] = (d) => o.value = d),
        onChange: c,
        min: e.min,
        max: e.max,
        width: e.width,
        disabled: !n.value
      }, null, 8, ["modelValue", "min", "max", "width", "disabled"]),
      r(M(hn), {
        modelValue: o.value,
        "onUpdate:modelValue": [
          i[1] || (i[1] = (d) => o.value = d),
          c
        ],
        disabled: !n.value,
        min: e.min,
        max: e.max
      }, null, 8, ["modelValue", "disabled", "min", "max"])
    ]));
  }
}), oi = /* @__PURE__ */ be(Ai, [["__scopeId", "data-v-59c756ed"]]), ri = /* @__PURE__ */ J({
  __name: "CommandPageSelectorButton",
  props: {
    disabled: { type: Boolean },
    cmd: {}
  },
  emits: ["open"],
  setup(e, { emit: t }) {
    const a = ie(), n = e, o = F(() => a == null ? void 0 : a.getters["file/currentPageCnt"]), A = F(() => a == null ? void 0 : a.getters["file/pageCount"]), c = F(() => a == null ? void 0 : a.getters["command/can"](n.cmd)), s = Ae(ue), i = t;
    function d(p) {
      const w = { value: p };
      s.run(n.cmd, w);
    }
    function m() {
      i("open", {
        callback: d,
        info: { currentPage: o.value, maxPage: A.value }
      });
    }
    return (p, w) => (V(), Y("div", null, [
      r(M(Be), {
        type: "quaternary",
        disabled: !c.value,
        onClickButton: m,
        class: "page-info-label",
        label: p.$t("statusBar.pages") + " : " + o.value + "/" + A.value
      }, null, 8, ["disabled", "label"])
    ]));
  }
}), ii = /* @__PURE__ */ be(ri, [["__scopeId", "data-v-0675a315"]]), si = { class: "switchGroup" }, di = /* @__PURE__ */ J({
  __name: "CommandPageViewSwitchGroup",
  props: {
    cmd: {}
  },
  setup(e) {
    const t = ie(), a = e, n = F(() => t == null ? void 0 : t.getters["command/can"](a.cmd)), o = F(() => t == null ? void 0 : t.getters["command/getVal"](a.cmd)), A = Ae(ue);
    function c(s) {
      const i = { value: s };
      A.run(a.cmd, i);
    }
    return (s, i) => (V(), Y("div", si, [
      r(M(Ft), {
        active: o.value === "single",
        disabled: !n.value,
        onClick: i[0] || (i[0] = (d) => c("single")),
        "icon-name": "statusbar_one_page_16__clip_cell",
        "button-size": 24,
        tooltip: s.$t("statusBar.pageViewSingle"),
        class: "global-medium-icon-button"
      }, null, 8, ["active", "disabled", "tooltip"]),
      r(M(Ft), {
        active: o.value === "multi",
        disabled: !n.value,
        onClick: i[1] || (i[1] = (d) => c("multi")),
        "icon-name": "statusbar_continuous_side_by_side_16__clip_cell",
        "button-size": 24,
        tooltip: s.$t("statusBar.pageViewMulti"),
        class: "global-medium-icon-button"
      }, null, 8, ["active", "disabled", "tooltip"]),
      r(M(Ft), {
        active: o.value === "wide",
        disabled: !n.value,
        onClick: i[2] || (i[2] = (d) => c("wide")),
        "icon-name": "statusbar_align_width_16__clip_cell",
        "button-size": 24,
        tooltip: s.$t("statusBar.pageViewWide"),
        class: "global-medium-icon-button"
      }, null, 8, ["active", "disabled", "tooltip"])
    ]));
  }
}), ci = /* @__PURE__ */ be(di, [["__scopeId", "data-v-5f30234f"]]), ui = { class: "custom-panel" }, hi = { class: "global-basic-display-text text" }, pi = /* @__PURE__ */ J({
  __name: "PageSelectorDialog",
  setup(e, { expose: t }) {
    const a = y(!1), n = y(!1), o = y(""), A = y(0), c = y(0), s = y(0);
    let i = null;
    function d(H) {
      const v = Number(H);
      if (H === "") {
        n.value = !1, o.value = "";
        return;
      }
      !isNaN(v) && v > 0 && v <= c.value ? (n.value = !1, o.value = "") : (n.value = !0, o.value = "error");
    }
    function m(H, v) {
      H && (A.value = H.currentPage, c.value = H.maxPage, s.value = H.currentPage), n.value = !1, o.value = "", i = v, a.value = !0;
    }
    function p() {
      s.value && (i && i({
        jumpePage: s.value
      }), a.value = !1);
    }
    function w() {
      a.value = !1;
    }
    return t({
      openPopover: m
    }), (H, v) => (V(), Y("div", null, [
      r(M(Da), {
        show: a.value,
        "onUpdate:show": v[1] || (v[1] = (x) => a.value = x),
        title: H.$t("dialogs.pageSelector.title"),
        width: 240
      }, {
        action: h(() => [
          r(M(Be), {
            label: H.$t("common.cancel"),
            onClickButton: w,
            type: "standard"
          }, null, 8, ["label"]),
          r(M(Be), {
            label: H.$t("common.confirm"),
            onClickButton: p
          }, null, 8, ["label"])
        ]),
        default: h(() => [
          ae("div", ui, [
            ae("div", hi, ee(H.$t("dialogs.pageSelector.jumpTo")), 1),
            r(M(pn), {
              "validation-status": o.value,
              feedback: n.value ? H.$t("dialogs.pageSelector.pageCountError") : ""
            }, {
              default: h(() => [
                r(M(fn), {
                  value: s.value,
                  "onUpdate:value": v[0] || (v[0] = (x) => s.value = x),
                  class: "custom-input-num",
                  precision: 0,
                  max: c.value,
                  onInput: d,
                  onKeydown: We(Pt(p, ["prevent"]), ["enter"])
                }, null, 8, ["value", "max", "onKeydown"])
              ]),
              _: 1
            }, 8, ["validation-status", "feedback"])
          ])
        ]),
        _: 1
      }, 8, ["show", "title"])
    ]));
  }
}), fi = /* @__PURE__ */ be(pi, [["__scopeId", "data-v-ed4a536e"]]), mi = { class: "status-bar" }, gi = { class: "left" }, vi = { class: "global-basic-display-text page-info-label" }, bi = { class: "spacer" }, yi = { class: "right" }, wi = /* @__PURE__ */ J({
  __name: "StatusBar",
  setup(e) {
    const t = ie(), a = F(() => t == null ? void 0 : t.getters["file/currentPageNum"]), n = F(() => t == null ? void 0 : t.getters["file/loadingRatio"]), o = F(
      () => t == null ? void 0 : t.getters["file/showLoadingProgressBar"]
    ), A = y(null), c = F(() => t == null ? void 0 : t.getters["command/loadEnd"]);
    function s(d) {
      var m;
      (m = A == null ? void 0 : A.value) == null || m.openPopover(
        {
          currentPage: d.info.currentPage,
          maxPage: d.info.maxPage
        },
        (p) => {
          d.callback(p.jumpePage);
        }
      );
    }
    function i() {
      vn(document.getElementById("main"), !0);
    }
    return (d, m) => (V(), Y("div", mi, [
      ae("div", gi, [
        ae("div", vi, ee(d.$t("statusBar.pageNum")) + " : " + ee(a.value), 1),
        r(M(mn), {
          vertical: !0,
          height: 12,
          margin: "0px"
        }),
        r(ii, {
          cmd: M(l).GoToPage,
          onOpen: s
        }, null, 8, ["cmd"])
      ]),
      ae("div", bi, [
        o.value ? (V(), $(M(gn), {
          key: 0,
          percentage: n.value,
          class: "progress-bar"
        }, null, 8, ["percentage"])) : Se("", !0)
      ]),
      ae("div", yi, [
        r(ci, {
          cmd: M(l).PageViewSwitch
        }, null, 8, ["cmd"]),
        r(oi, {
          cmd: M(l).Zoom,
          step: 1
        }, null, 8, ["cmd"]),
        r(M(Ft), {
          onClick: i,
          "icon-name": "statusbar_full_screen_16__clip_cell",
          "button-size": 24,
          tooltip: d.$t("statusBar.fullscreen"),
          class: "global-medium-icon-button",
          disabled: !c.value
        }, null, 8, ["tooltip", "disabled"])
      ]),
      r(fi, {
        ref_key: "PageSelectorDialogRef",
        ref: A
      }, null, 512)
    ]));
  }
}), xi = /* @__PURE__ */ be(wi, [["__scopeId", "data-v-bea3f618"]]), Ci = bn({
  components: [
    yn,
    wn,
    xn,
    Cn,
    Pn,
    Et,
    Sn,
    kn,
    Mn,
    Tn,
    Hn,
    Rn,
    zn,
    Dn,
    Fn,
    En,
    Vn,
    Ln,
    Zn,
    In,
    _n,
    Bn,
    On,
    Nn,
    Xn,
    jn,
    Un,
    Jt,
    Wn,
    Kn,
    qn,
    Gn,
    Qn,
    Yn,
    Jn,
    $n,
    Ha,
    eA,
    tA,
    vA,
    bA,
    yA,
    wA,
    BA
  ]
});
function Pi(e) {
  e.use(Ci);
}
function Si() {
  switch (dt) {
    case "zh-CN":
      return ga;
    case "en-US":
      return aA;
  }
  return ga;
}
function ki() {
  return {
    common: {
      primaryColor: "#0061CE",
      // 主色
      primaryColorHover: "#0061CE",
      // hover 主色
      primaryColorPressed: "#0061CE",
      // 按下色
      primaryColorSuppl: "#0061CE"
      // 补充主色
    }
  };
}
function Mi(e) {
  e.registerHandler(l.Bold, {
    run: (t, a) => t.setBold(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  });
}
function Ti(e) {
  e.registerHandler(l.Italic, {
    run: (t, a) => t.setItalic(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  });
}
const Hi = "fontSettingsPanel";
function Ri(e) {
  e.registerHandler(l.Underline, {
    run: (t, a) => {
      const n = a == null ? void 0 : a.value;
      if (n === Hi) {
        e.store.commit("panel/openPanel", ve.FontSettings);
        return;
      }
      t.setUnderline(typeof n == "string" ? n : void 0);
    },
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  });
}
function zi(e) {
  e.registerHandler(l.UnderlineColor, {
    run: (t, a) => t.setUnderlineColor(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  });
}
function Di(e) {
  e.registerHandler(l.Undo, {
    run: (t) => t.undo(),
    refresh: /* @__PURE__ */ new Set([g.Init, g.UndoRedoChange])
  }), e.registerRefresher(l.Undo, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.Undo,
      enabled: t.api.canUndo()
    });
  });
}
function Fi(e) {
  e.registerHandler(l.Redo, {
    run: (t) => t.redo(),
    refresh: /* @__PURE__ */ new Set([g.UndoRedoChange])
  }), e.registerRefresher(l.Redo, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.Redo,
      enabled: t.api.canRedo()
    });
  });
}
function Ei(e) {
  e.registerHandler(l.PagePositionChange, {
    run: (t, a) => {
    },
    refresh: /* @__PURE__ */ new Set([g.LoadPageEnd, g.PagePositionChange])
  }), e.registerRefresher(l.PagePositionChange, (t) => {
    if (!t.canRefreshCommand(l.PagePositionChange)) return;
    t.store.commit("command/setEnabled", {
      cmd: l.PagePositionChange,
      enabled: !0
    });
    const { pageNum: a, pageCnt: n, total: o } = t.api.getCurrentPagePosition();
    t.store.commit("file/setCurrentPageNum", a || 0), t.store.commit("file/setCurrentPageCnt", n || 0), t.store.commit("file/setPageCount", o || 0);
  });
}
function Vi(e) {
  e.registerHandler(l.GoToPage, {
    run: (t, a) => t.goToPage(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.GoToPage, (t) => {
    t.canRefreshCommand(l.GoToPage) && t.store.commit("command/setEnabled", {
      cmd: l.GoToPage,
      enabled: !0
    });
  });
}
function Li(e) {
  e.registerHandler(l.PageViewSwitch, {
    run: (t, a) => {
      t.switchPageView(a.value), e.store.commit("command/setState", {
        cmd: l.PageViewSwitch,
        ui: {
          value: a.value
        }
      });
    },
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.PageViewSwitch, (t) => {
    t.canRefreshCommand(l.PageViewSwitch) && (t.store.commit("command/setState", {
      cmd: l.PageViewSwitch,
      ui: {
        value: "single"
      }
    }), t.store.commit("command/setEnabled", {
      cmd: l.PageViewSwitch,
      enabled: !0
    }));
  });
}
function Zi(e) {
  e.registerHandler(l.Zoom, {
    run: (t, a) => t.setZoom(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.ZoomChange])
  }), e.registerRefresher(l.Zoom, (t) => {
    t.canRefreshCommand(l.Zoom) && (t.store.commit("command/setState", {
      cmd: l.Zoom,
      ui: {
        value: t.api.getZoom()
      }
    }), t.store.commit("command/setEnabled", {
      cmd: l.Zoom,
      enabled: !0
    }));
  });
}
function Ii(e) {
  e.registerHandler(l.Export, {
    run: async (t, a) => {
      await t.doExport("exportDocument");
    },
    refresh: /* @__PURE__ */ new Set([g.ExportReady])
  }), e.registerHandler(l.ExportPDF, {
    run: async (t, a) => {
      await t.doExport("exportPDF");
    },
    refresh: /* @__PURE__ */ new Set([g.ExportReady])
  }), e.registerRefresher(l.Export, (t) => {
    t.canRefreshCommand(l.Export) && t.store.commit("command/setEnabled", {
      cmd: l.Export,
      enabled: !0
    });
  }), e.registerRefresher(l.ExportPDF, (t) => {
    t.canRefreshCommand(l.ExportPDF) && t.store.commit("command/setEnabled", {
      cmd: l.ExportPDF,
      enabled: !0
    });
  });
}
function _i(e) {
  e.registerHandler(l.Open, {
    run: (t, a) => t.openFile(),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.Open, (t) => {
    t.canRefreshCommand(l.Open) && t.store.commit("command/setEnabled", {
      cmd: l.Open,
      enabled: !0
    });
  });
}
function Bi(e) {
  e.registerHandler(l.Copy, {
    run: (t) => t.copy()
  });
}
function Oi(e) {
  e.registerHandler(l.Paste, {
    run: (t) => t.paste(),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.Paste, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.Paste,
      enabled: !0
    });
  });
}
function Ni(e) {
  e.registerHandler(l.StrikeThrough, {
    run: (t, a) => t.setStrikeThrough(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  });
}
function Xi(e) {
  e.registerHandler(l.FontColor, {
    run: (t, a) => t.setFontColor(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  });
}
function ji(e) {
  e.registerHandler(l.FontName, {
    run: (t, a) => t.setFontName(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  }), e.registerRefresher(l.FontName, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.FontName,
      enabled: !0
    });
  });
}
function Ui(e) {
  e.registerHandler(l.FontSize, {
    run: (t, a) => t.setFontSize(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  }), e.registerRefresher(l.FontSize, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.FontSize,
      enabled: !0
    });
  });
}
function Wi(e) {
  e.registerHandler(l.DecreaseIndent, {
    run: (t) => t.decreaseIndent(),
    refresh: /* @__PURE__ */ new Set([g.Init])
  });
}
function Ki(e) {
  e.registerHandler(l.IncreaseIndent, {
    run: (t) => t.increaseIndent(),
    refresh: /* @__PURE__ */ new Set([g.Init])
  });
}
function qi(e) {
  e.registerHandler(l.DecreaseFontSize, {
    run: (t) => t.decreaseFontSize(),
    refresh: /* @__PURE__ */ new Set([g.Init])
  });
}
function Gi(e) {
  e.registerHandler(l.IncreaseFontSize, {
    run: (t) => t.increaseFontSize(),
    refresh: /* @__PURE__ */ new Set([g.Init])
  });
}
function Qi(e) {
  e.registerHandler(l.ChangeCase, {
    run: (t, a) => t.changeCase(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  });
}
function Yi(e) {
  e.registerHandler(l.Superscript, {
    run: (t, a) => t.setSuperscript(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  });
}
function Ji(e) {
  e.registerHandler(l.Subscript, {
    run: (t, a) => t.setSubscript(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  });
}
function $i(e) {
  e.registerHandler(l.TextHighlight, {
    run: (t, a) => t.setTextHighlight(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  });
}
function es(e) {
  e.registerHandler(l.CharacterShading, {
    run: (t, a) => t.setCharacterShading(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  });
}
function ts(e) {
  e.registerHandler(l.ParaAlignHorizontal, {
    run: (t, a) => t.setParaAlignHorizontal(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  });
}
function as(e) {
  e.registerHandler(l.Bullet, {
    run: (t, a) => t.setBullet(a.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function ls(e) {
  e.registerHandler(l.Numbering, {
    run: (t, a) => t.setNumbering(a.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function ns(e) {
  e.registerHandler(l.MultilevelList, {
    run: (t, a) => t.setMultilevelList(a.value),
    refresh: /* @__PURE__ */ new Set([])
  });
}
function As(e) {
  e.registerHandler(l.ParagraphShading, {
    run: (t, a) => {
      if (a.value != null) {
        let n = e.store.getters["file/isInTable"];
        a.value === "noFill" ? t.setParagraphShading(null) : t.setParagraphShading({ color: a.value, isInTable: n });
      } else
        t.setParagraphShading(a.value);
    },
    refresh: /* @__PURE__ */ new Set([
      g.Init,
      g.SelectionChange
    ])
  });
}
function os(e) {
  e.registerHandler(l.ParagraphBorder, {
    run: (t, a) => {
      let n = e.store.getters["file/isInTable"];
      t.setParagraphBorder({ type: a.value, isInTable: n });
    },
    refresh: /* @__PURE__ */ new Set([
      g.Init,
      g.SelectionChange
    ])
  });
}
function rs(e) {
  e.registerHandler(l.TableShading, {
    run: (t, a) => t.setTableShading(a.value),
    refresh: /* @__PURE__ */ new Set([
      g.Init,
      g.SelectionChange
    ])
  }), e.registerRefresher(l.TableShading, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.TableShading,
      enabled: !0
    });
  });
}
function is(e) {
  e.registerHandler(l.TableBorder, {
    run: (t, a) => t.setTableBorder(a.value),
    refresh: /* @__PURE__ */ new Set([
      g.Init,
      g.SelectionChange
    ])
  }), e.registerRefresher(l.TableBorder, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.TableBorder,
      enabled: !0
    });
  });
}
function ss(e) {
  e.registerHandler(l.ApplyStyle, {
    run: (t, a) => t.applyStyle(a.value),
    refresh: /* @__PURE__ */ new Set([
      g.Init,
      g.SelectionChange
    ])
  }), e.registerRefresher(l.ApplyStyle, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.ApplyStyle,
      enabled: !0
    });
  });
}
function ds(e) {
  e.registerHandler(l.ApplyTableStyle, {
    run: (t, a) => t.applyTableStyle(a.value),
    refresh: /* @__PURE__ */ new Set([
      g.Init,
      g.SelectionChange
    ])
  }), e.registerRefresher(l.ApplyTableStyle, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.ApplyTableStyle,
      enabled: !0
    });
  }), e.registerHandler(l.ClearTableStyle, {
    run: (t) => t.clearTableStyle(),
    refresh: /* @__PURE__ */ new Set([
      g.Init,
      g.SelectionChange
    ])
  }), e.registerRefresher(l.ClearTableStyle, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.ClearTableStyle,
      enabled: !0
    });
  });
}
function cs(e) {
  e.registerHandler(l.InsertTable, {
    run: (t, a) => t.insertTable(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.InsertTable, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.InsertTable,
      enabled: !0
    });
  });
}
function us(e) {
  e.registerHandler(l.InsertSeparator, {
    run: (t, a) => t.insertSeparator(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.InsertSeparator, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.InsertSeparator,
      enabled: !0
    });
  });
}
function hs(e) {
  e.registerHandler(l.SearchReplaceWord, {
    run: (t, a) => {
      if (!a) {
        e.store.commit("file/setShowFindDialog", !0);
        return;
      }
      const n = a.value;
      if (!n) return;
      switch (n.action) {
        case "search":
          t.searchWord(n.val), t.searchNext();
          break;
        case "next":
          t.searchNext();
          break;
        case "prev":
          t.searchPrevious();
          break;
        case "focusEditor":
          t.focusEditor();
          break;
      }
      const o = t.searchStatusInfo();
      e.store.commit("command/setState", {
        cmd: l.SearchReplaceWord,
        ui: {
          value: {
            countNum: o.countNum,
            totalCount: o.totalCount
          }
        }
      });
    },
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.SearchReplaceWord, (t) => {
    t.canRefreshCommand(l.SearchReplaceWord) && t.store.commit("command/setEnabled", {
      cmd: l.SearchReplaceWord,
      enabled: !0
    });
  });
}
function ps(e) {
  e.registerHandler(l.TableCellOperations, {
    run: (t, a) => t.doTableCellOperation(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.TableCellOperations, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.TableCellOperations,
      enabled: !0
    });
  });
}
function fs(e) {
  e.registerHandler(l.TableOperations, {
    run: (t, a) => t.doTableOperation(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.TableOperations, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.TableOperations,
      enabled: !0
    });
  });
}
function ms(e) {
  e.registerHandler(l.PaperOrientation, {
    run: (t, a) => t.doPaperOrientationAction(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.PaperOrientation, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.PaperOrientation,
      enabled: !0
    });
  });
}
function gs(e) {
  e.registerHandler(l.PaperSize, {
    run: (t, a) => t.doPaperSizeAction(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.PaperSize, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.PaperSize,
      enabled: !0
    });
  });
}
const vs = "paragraphSettingsPanel";
function bs(e) {
  e.registerHandler(l.LineSpace, {
    run: (t, a) => {
      if (a.value === vs) {
        e.store.commit("panel/openPanel", ve.ParagraphSettings);
        return;
      }
      t.setLineSpace(a.value), e.store.commit("command/setState", {
        cmd: l.LineSpace,
        ui: { value: a.value }
      });
    },
    refresh: /* @__PURE__ */ new Set([
      g.Init,
      g.SelectionChange
    ])
  });
}
function ys(e) {
  e.registerHandler(l.ParaSymbol, {
    run: (t, a) => {
      const n = e.store.getters["command/getVal"](l.ParaSymbol);
      switch (a.value) {
        case "ParagraphMarks":
          t.setParaSymbolParagraphMarks(!(n != null && n.ParagraphMarks)), n.ParagraphMarks = !(n != null && n.ParagraphMarks);
          break;
        case "PageBreak":
          t.setParaSymbolPageBreak(!(n != null && n.PageBreak)), n.PageBreak = !(n != null && n.PageBreak);
          break;
        case "SectionBreak":
          t.setParaSymbolSectionBreak(!(n != null && n.SectionBreak)), n.SectionBreak = !(n != null && n.SectionBreak);
          break;
      }
      e.store.commit("command/setState", {
        cmd: l.ParaSymbol,
        ui: {
          value: n
        }
      });
    },
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  }), e.registerRefresher(l.ParaSymbol, (t) => {
    t.canRefreshCommand(l.ParaSymbol) && (t.store.commit("command/setState", {
      cmd: l.ParaSymbol,
      ui: {
        value: {
          ParagraphMarks: t.api.getParaSymbolParagraphMarks(),
          PageBreak: t.api.getParaSymbolPageBreak(),
          SectionBreak: t.api.getParaSymbolSectionBreak()
        }
      }
    }), t.store.commit("command/setEnabled", {
      cmd: l.ParaSymbol,
      enabled: !0
    }));
  });
}
function ws(e) {
  e.registerHandler(l.TrackChange, {
    run: (t, a) => {
      t.setTrackChange(a.value), e.store.commit("command/setState", {
        cmd: l.TrackChange,
        ui: {
          value: e.api.getTrackChange()
        }
      });
    },
    refresh: /* @__PURE__ */ new Set([g.Init, g.LoadPageEnd])
  }), e.registerRefresher(l.TrackChange, (t) => {
    t.docReady && (t.store.commit("command/setState", {
      cmd: l.TrackChange,
      ui: {
        value: t.api.getTrackChange()
      }
    }), t.store.commit("command/setEnabled", {
      cmd: l.TrackChange,
      enabled: !0
    }));
  });
}
function xs(e) {
  e.registerHandler(l.RevisionDisplayMode, {
    run: (t, a) => t.setRevisionDisplayMode(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.RevisionDisplayMode, (t) => {
    t.docReady && (t.store.commit("command/setState", {
      cmd: l.RevisionDisplayMode,
      ui: {
        value: t.api.getRevisionDisplayMode()
      }
    }), t.store.commit("command/setEnabled", {
      cmd: l.RevisionDisplayMode,
      enabled: !0
    }));
  });
}
function Cs(e) {
  e.registerHandler(l.Cut, {
    run: (t) => t.cut(),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.Cut, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.Cut,
      enabled: !0
    });
  });
}
function Ps(e) {
  e.registerHandler(l.FormatPainter, {
    run: (t, a) => t.formatPainter(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  }), e.registerRefresher(l.FormatPainter, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.FormatPainter,
      enabled: !0
    });
  });
}
function Ss(e) {
  e.registerHandler(l.OpenFontSettingsPanel, {
    run: () => {
      e.store.commit("panel/openPanel", ve.FontSettings);
    },
    refresh: /* @__PURE__ */ new Set([
      g.Init,
      g.SelectionChange
    ])
  });
}
function ks(e) {
  e.registerHandler(l.OpenParagraphSettingsPanel, {
    run: () => {
      e.store.commit("panel/openPanel", ve.ParagraphSettings);
    },
    refresh: /* @__PURE__ */ new Set([
      g.Init,
      g.SelectionChange
    ])
  });
}
function Ms(e) {
  e.registerHandler(l.ApplyParagraphSettings, {
    run: (t, a) => t.applyParagraphSettings(a.value),
    refresh: /* @__PURE__ */ new Set([
      g.Init,
      g.SelectionChange
    ])
  }), e.registerRefresher(l.ApplyParagraphSettings, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.ApplyParagraphSettings,
      enabled: !0
    });
  });
}
function Ts(e) {
  e.registerHandler(l.CharacterBorder, {
    run: (t, a) => t.setCharacterBorder(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  });
}
function Hs(e) {
  e.registerHandler(l.ClearFormatting, {
    run: (t) => t.clearFormatting(),
    refresh: /* @__PURE__ */ new Set([g.Init])
  });
}
function Rs(e) {
  e.registerHandler(l.MarkUpStatus, {
    run: (t, a) => {
      t.setMarkUpStatus(a.value);
    },
    refresh: /* @__PURE__ */ new Set([g.Init, g.LoadPageEnd])
  }), e.registerRefresher(l.MarkUpStatus, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.MarkUpStatus,
      enabled: !0
    });
  });
}
function zs(e) {
  e.registerHandler(l.ShowMarkUpType, {
    run: (t, a) => {
      t.setShowMarkUpType(a.value);
    },
    refresh: /* @__PURE__ */ new Set([g.Init, g.LoadPageEnd])
  }), e.registerRefresher(l.ShowMarkUpType, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.ShowMarkUpType,
      enabled: !0
    });
  });
}
function Ds(e) {
  e.registerHandler(l.AcceptChange, {
    run: (t, a) => {
      t.acceptChange(a.value);
    },
    refresh: /* @__PURE__ */ new Set([g.Init, g.LoadPageEnd])
  }), e.registerRefresher(l.AcceptChange, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.AcceptChange,
      enabled: !0
    });
  });
}
function Fs(e) {
  e.registerHandler(l.RejectChange, {
    run: (t, a) => {
      t.rejectChange(a.value);
    },
    refresh: /* @__PURE__ */ new Set([g.Init, g.LoadPageEnd])
  }), e.registerRefresher(l.RejectChange, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.RejectChange,
      enabled: !0
    });
  });
}
function Es(e) {
  e.registerHandler(l.PreviousChange, {
    run: (t, a) => {
      t.previousChange(a.value);
    },
    refresh: /* @__PURE__ */ new Set([g.Init, g.LoadPageEnd])
  }), e.registerRefresher(l.PreviousChange, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.PreviousChange,
      enabled: !0
    });
  });
}
function Vs(e) {
  e.registerHandler(l.NextChange, {
    run: (t, a) => {
      t.nextChange(a.value);
    },
    refresh: /* @__PURE__ */ new Set([g.Init, g.LoadPageEnd])
  }), e.registerRefresher(l.NextChange, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.NextChange,
      enabled: !0
    });
  });
}
function Ls(e) {
  e.registerHandler(l.SimplifiedToTraditional, {
    run: (t, a) => t.simplifiedToTraditional(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  }), e.registerRefresher(l.SimplifiedToTraditional, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.SimplifiedToTraditional,
      enabled: !0
    });
  });
}
function Zs(e) {
  e.registerHandler(l.DocumentEncryption, {
    run: (t, a) => t.documentEncryption(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  }), e.registerRefresher(l.DocumentEncryption, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.DocumentEncryption,
      enabled: !0
    });
  });
}
function Is(e) {
  e.registerHandler(l.NavigationPanel, {
    run: (t, a) => {
      "" + a.value, a.value === !0 ? e.store.commit("panel/openPanel", ve.NavigationPanel) : e.store.commit("panel/closePanel"), e.store.commit("command/setState", {
        cmd: l.NavigationPanel,
        ui: { value: a.value }
      });
    },
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  }), e.registerRefresher(l.NavigationPanel, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.NavigationPanel,
      enabled: !0
    });
  });
}
function _s(e) {
  e.registerHandler(l.Ruler, {
    run: (t, a) => {
      t.setRuler(a.value);
    },
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.Ruler, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.Ruler,
      enabled: !0
    });
  });
}
function Bs(e) {
  e.registerHandler(l.ShowTableDashedGrid, {
    run: (t, a) => t.showTableDashedGrid(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  }), e.registerRefresher(l.ShowTableDashedGrid, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.ShowTableDashedGrid,
      enabled: !0
    });
  });
}
function Os(e) {
  e.registerHandler(l.TableDeleteOperations, {
    run: (t, a) => {
      t.tableDeleteOperations(a.value);
    },
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.TableDeleteOperations, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.TableDeleteOperations,
      enabled: !0
    });
  });
}
function Ns(e) {
  e.registerHandler(l.TableInsertOperations, {
    run: (t, a) => {
      t.tableInsertOperations(a.value);
    },
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.TableInsertOperations, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.TableInsertOperations,
      enabled: !0
    });
  });
}
function Xs(e) {
  e.registerHandler(l.MergeCells, {
    run: (t) => t.mergeCells(),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  });
}
function js(e) {
  e.registerHandler(l.SplitTable, {
    run: (t, a) => t.splitTable(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  }), e.registerRefresher(l.SplitTable, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.SplitTable,
      enabled: !0
    });
  });
}
function Us(e) {
  e.registerHandler(l.SplitCells, {
    run: (t, a) => t.splitCells(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.SplitCells, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.SplitCells,
      enabled: !0
    });
  });
}
function Ws(e) {
  e.registerHandler(l.AutoFit, {
    run: (t, a) => t.autoFit(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.AutoFit, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.AutoFit,
      enabled: !0
    });
  });
}
function Ks(e) {
  e.registerHandler(l.CellWidth, {
    run: (t, a) => t.setCellWidth(a.value * 10),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  }), e.registerRefresher(l.CellWidth, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.CellWidth,
      enabled: !0
    });
  });
}
function qs(e) {
  e.registerHandler(l.CellHeight, {
    run: (t, a) => t.setCellHeight(a.value * 10),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  }), e.registerRefresher(l.CellHeight, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.CellHeight,
      enabled: !0
    });
  });
}
function Gs(e) {
  e.registerHandler(l.CellAlignVertical, {
    run: (t, a) => t.setCellAlignVertical(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  }), e.registerRefresher(l.CellAlignVertical, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.CellAlignVertical,
      enabled: !0
    });
  });
}
function Qs(e) {
  e.registerHandler(l.OpenCellMarginsSettingsPanel, {
    run: () => {
      e.store.commit("panel/openPanel", ve.CellMarginsSettings);
    },
    refresh: /* @__PURE__ */ new Set([
      g.Init,
      g.SelectionChange
    ])
  }), e.registerRefresher(l.OpenCellMarginsSettingsPanel, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.OpenCellMarginsSettingsPanel,
      enabled: !0,
      force: !0
    });
  });
}
function Ys(e) {
  e.registerHandler(l.CellMarginTop, {
    run: (t, a) => t.setTableTcMar(void 0, void 0, a.value * 10, void 0),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  }), e.registerRefresher(l.CellMarginTop, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.CellMarginTop,
      enabled: !0
    });
  });
}
function Js(e) {
  e.registerHandler(l.CellMarginBottom, {
    run: (t, a) => t.setTableTcMar(void 0, void 0, void 0, a.value * 10),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  }), e.registerRefresher(l.CellMarginBottom, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.CellMarginBottom,
      enabled: !0
    });
  });
}
function $s(e) {
  e.registerHandler(l.CellMarginLeft, {
    run: (t, a) => t.setTableTcMar(a.value * 10, void 0, void 0, void 0),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  }), e.registerRefresher(l.CellMarginLeft, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.CellMarginLeft,
      enabled: !0
    });
  });
}
function e1(e) {
  e.registerHandler(l.CellMarginRight, {
    run: (t, a) => t.setTableTcMar(void 0, a.value * 10, void 0, void 0),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  }), e.registerRefresher(l.CellMarginRight, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.CellMarginRight,
      enabled: !0
    });
  });
}
function t1(e) {
  e.registerHandler(l.CellSpacing, {
    run: (t, a) => t.setTableCellSpacing(a.value * 10 / 2),
    refresh: /* @__PURE__ */ new Set([g.Init, g.SelectionChange])
  }), e.registerRefresher(l.CellSpacing, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.CellSpacing,
      enabled: !0
    });
  });
}
function a1(e) {
  e.registerHandler(l.TableSelect, {
    run: (t, a) => t.tableSelect(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.TableSelect, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.TableSelect,
      enabled: !0
    });
  });
}
function l1(e) {
  e.registerHandler(l.InsertComment, {
    // run: (api, param) => api.insertComment(param.value),
    run: (t, a) => {
      t.insertComment(a.value);
    },
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.InsertComment, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.InsertComment,
      enabled: !0
    });
  });
}
function n1(e) {
  e.registerHandler(l.CommentUpdate, {
    run: (t, a) => t.commentUpdate(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.CommentUpdate, (t) => {
    t.canRefreshCommand(l.CommentUpdate) && t.store.commit("command/setEnabled", {
      cmd: l.CommentUpdate,
      enabled: !0
    });
  });
}
function A1(e) {
  e.registerHandler(l.DeleteComment, {
    run: (t, a) => t.deleteComment(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.DeleteComment, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.DeleteComment,
      enabled: !0
    });
  });
}
function o1(e) {
  e.registerHandler(l.PreviousComment, {
    run: (t, a) => t.previousComment(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.PreviousComment, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.PreviousComment,
      enabled: !0
    });
  });
}
function r1(e) {
  e.registerHandler(l.NextComment, {
    run: (t, a) => t.nextComment(a.value),
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.NextComment, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.NextComment,
      enabled: !0
    });
  });
}
function i1(e) {
  e.registerHandler(l.ShowHideComment, {
    run: (t, a) => {
      let n = e.store.getters["command/getVal"](l.ShowHideComment);
      if ("" + a.value + n, a.type === Ja.SET) {
        e.store.commit("command/setState", {
          cmd: l.ShowHideComment,
          ui: { value: a.value }
        });
        let o = t.getAllComments(a.value);
        e.store.commit("command/setState", {
          cmd: l.CommentUpdate,
          ui: {
            value: o
          }
        });
      }
    },
    refresh: /* @__PURE__ */ new Set([g.Init])
  }), e.registerRefresher(l.ShowHideComment, (t) => {
    t.docReady && t.store.commit("command/setEnabled", {
      cmd: l.ShowHideComment,
      enabled: !0
    });
  });
}
function s1() {
  const e = Ae(ue);
  Mi(e), Ti(e), Ri(e), zi(e), Di(e), Fi(e), Ei(e), Vi(e), Li(e), Zi(e), Ii(e), _i(e), Bi(e), Oi(e), Ni(e), Xi(e), ji(e), Ui(e), Wi(e), Ki(e), qi(e), Gi(e), Qi(e), Yi(e), Ji(e), $i(e), es(e), ts(e), as(e), ls(e), ns(e), As(e), os(e), rs(e), is(e), ss(e), ds(e), cs(e), us(e), hs(e), fs(e), ps(e), ms(e), gs(e), bs(e), ys(e), ws(e), xs(e), Cs(e), Ps(e), Ss(e), ks(e), Ms(e), Ts(e), Hs(e), Rs(e), zs(e), Ds(e), Fs(e), Es(e), Vs(e), Ls(e), Zs(e), _s(e), Is(e), Bs(e), Os(e), Ns(e), Xs(e), js(e), Us(e), Ws(e), Ks(e), qs(e), Gs(e), Qs(e), Ys(e), Js(e), $s(e), e1(e), t1(e), a1(e), l1(e), n1(e), A1(e), r1(e), o1(e), i1(e);
}
const d1 = { class: "app-shell" }, c1 = { class: "app-stage" }, u1 = /* @__PURE__ */ J({
  __name: "App",
  setup(e) {
    const t = ie(), a = zo(), n = y(null), o = y(null), A = y(null), c = y(!0), s = y(null), i = y(null), d = y(!1), m = y(null), p = Ae(aa, null), w = Ae(ue, null), H = F(() => {
      var P;
      return ((P = p == null ? void 0 : p.uiOptions) == null ? void 0 : P.showTopBar) !== !1;
    }), v = F(() => {
      var P;
      return ((P = p == null ? void 0 : p.uiOptions) == null ? void 0 : P.showBottomBar) !== !1;
    }), x = F(() => t.getters["panel/isOpen"]), T = F(() => t.getters["panel/width"]), S = F(() => t.state.file.isReady);
    ne(S, (P) => {
      c.value = !P, P || (d.value = !1, m.value = null);
    }), ne(x, () => {
      b();
    }, { flush: "post" });
    const C = F(() => t == null ? void 0 : t.state.file.hasError);
    ne(C, (P) => {
      P && (c.value = !1);
    });
    const u = F(
      () => (t == null ? void 0 : t.getters["command/isRunning"](l.Export)) || (t == null ? void 0 : t.getters["command/isRunning"](l.ExportPDF))
    ), z = (P) => {
      var te, q, se;
      let E = (te = P == null ? void 0 : P.detail) == null ? void 0 : te.resolve, W = (q = P == null ? void 0 : P.detail) == null ? void 0 : q.reject;
      E && ((se = s == null ? void 0 : s.value) != null && se.openPopover) && s.value.openPopover(E, W, !0);
    }, k = (P) => {
      var E;
      (E = s == null ? void 0 : s.value) == null || E.closePopover();
    }, Z = () => {
      var P;
      (P = i == null ? void 0 : i.value) == null || P.openPopover();
    }, j = (P) => {
      var E;
      m.value = ((E = P == null ? void 0 : P.detail) == null ? void 0 : E.error) ?? (P == null ? void 0 : P.detail) ?? P, d.value = !0;
    }, L = (P) => {
      var te, q, se;
      let E = (te = P == null ? void 0 : P.detail) == null ? void 0 : te.resolve, W = (q = P == null ? void 0 : P.detail) == null ? void 0 : q.reject;
      E && ((se = s == null ? void 0 : s.value) != null && se.openPopover) && s.value.openPopover(E, W);
    };
    lA(() => {
      const P = (p == null ? void 0 : p.eventTarget) ?? window;
      s1(), P.addEventListener("FilePassWordError", z), P.addEventListener("FilePassWordOK", k), P.addEventListener("OpenDocumentFailed", Z), P.addEventListener("LicenseVerifyError", j), P.addEventListener("AskFilePassword", L);
    }), Wa(() => {
      const P = (p == null ? void 0 : p.eventTarget) ?? window;
      t.commit("file/clearError"), P.removeEventListener(
        "FilePassWordError",
        z
      ), P.removeEventListener("FilePassWordOK", k), P.removeEventListener(
        "OpenDocumentFailed",
        Z
      ), P.removeEventListener(
        "LicenseVerifyError",
        j
      ), P.removeEventListener(
        "AskFilePassword",
        L
      );
    }), Lt(() => {
      a.toolBarElm.value = n.value, a.editorElm.value = o.value, a.rightPanelElm.value = A.value;
    }), ne(A, (P) => {
      a.rightPanelElm.value = P, b();
    });
    function b() {
      Oe(() => {
        typeof window > "u" || window.requestAnimationFrame(() => {
          var P, E;
          (E = (P = w == null ? void 0 : w.api) == null ? void 0 : P.updateVisibleArea) == null || E.call(P), window.dispatchEvent(new Event("resize"));
        });
      });
    }
    return (P, E) => {
      const W = _("n-spin"), te = _("n-message-provider"), q = _("n-modal-provider"), se = _("n-config-provider");
      return V(), Y("div", d1, [
        r(se, {
          class: "app-provider",
          locale: M(Si)(),
          "theme-overrides": M(ki)()
        }, {
          default: h(() => [
            r(q, null, {
              default: h(() => [
                r(te, null, {
                  default: h(() => [
                    r(M(nA), {
                      ref_key: "dialogOpenFailedRef",
                      ref: i
                    }, null, 512),
                    r(M(AA), {
                      ref_key: "dialogCypherRef",
                      ref: s
                    }, null, 512),
                    ae("div", c1, [
                      r(W, {
                        class: "app-spin",
                        show: c.value || u.value,
                        fullscreen: "",
                        style: {
                          backgroundColor: "rgba(255, 255, 255, 0.5)"
                        }
                      }, {
                        default: h(() => [
                          r(M(oA), { id: "appContainer" }, {
                            top: h(() => [
                              H.value ? (V(), $(Oo, {
                                key: 0,
                                ref_key: "toolbarRef",
                                ref: n
                              }, null, 512)) : Se("", !0),
                              d.value ? (V(), $(M(iA), {
                                key: 1,
                                error: m.value
                              }, null, 8, ["error"])) : Se("", !0)
                            ]),
                            rightPanel: h(() => [
                              x.value ? (V(), $(M(rA), {
                                key: 0,
                                width: T.value
                              }, {
                                default: h(() => [
                                  ae("div", {
                                    ref_key: "rightPanelRef",
                                    ref: A,
                                    class: "right-panel-content"
                                  }, [
                                    r(li)
                                  ], 512)
                                ]),
                                _: 1
                              }, 8, ["width"])) : Se("", !0)
                            ]),
                            bottom: h(() => [
                              v.value ? (V(), $(M(xi), {
                                key: 0,
                                class: "status-bar"
                              })) : Se("", !0)
                            ]),
                            default: h(() => [
                              C.value ? Se("", !0) : (V(), $(Ro, {
                                key: 0,
                                ref_key: "editorRef",
                                ref: o,
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
}), h1 = '<svg style="position:absolute"><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Dialog_close_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-aba)"><path d="m4 4 8 8m0-8-8 8" stroke="#333" stroke-linecap="round"/></g><defs><clipPath id="docx-aba"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 32 32" id="docx-icon-Dialog_warning" xmlns="http://www.w3.org/2000/svg"><path d="M3.118 26.904 15.456 4.287a.665.665 0 0 1 .229-.211.602.602 0 0 1 .582 0c.09.05.169.122.229.21l12.387 22.618a.748.748 0 0 1 .046.722.672.672 0 0 1-.235.274c-.1.066-.215.1-.331.1H3.637a.593.593 0 0 1-.33-.1.672.672 0 0 1-.236-.274.749.749 0 0 1 .047-.722Z" fill="#F6B04A"/><path d="M17.5 24.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.099 20.4c.038.225.15.428.313.574.164.146.371.226.585.226.213 0 .42-.08.584-.226a.992.992 0 0 0 .314-.574l.599-7.8c-.001-.424-.16-.83-.44-1.13-.28-.3-.66-.47-1.057-.47a1.458 1.458 0 0 0-.602.148 1.55 1.55 0 0 0-.499.39c-.14.164-.247.357-.315.567-.068.21-.096.433-.081.655l.599 7.64Z" fill="#fff"/></symbol><symbol fill="none" viewBox="0 0 3 3" id="docx-icon-Ellipse_3" xmlns="http://www.w3.org/2000/svg"><circle cx="1.5" cy="1.5" r="1.5" fill="#000"/></symbol><symbol fill="none" viewBox="0 0 224 16" id="docx-icon-Frame_1000007236" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-aea)"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M.5.5h14v14H.5z"/><path stroke="#333" d="M0 7.5h15M7.5 15V0"/></g><g clip-path="url(#docx-aeb)" stroke="#333"><rect x="16.5" y=".5" width="14" height="14" rx=".5"/><path d="M16 7.5h15M23.5 15V0"/></g><g clip-path="url(#docx-aec)"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M32 7.5h15M39.5 15V0"/><rect x="32.5" y=".5" width="14" height="14" rx=".5" stroke="#333"/></g><g clip-path="url(#docx-aed)"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M48.5.5h14v14h-14z"/><path stroke="#333" stroke-linecap="round" d="M48.697 14.096 62.132.661"/></g><g clip-path="url(#docx-aee)"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M64.5.5h14v14h-14z"/><path stroke="#333" stroke-linecap="round" d="m65.404.661 13.435 13.435"/></g><g clip-path="url(#docx-aef)" stroke="#ACACAC" stroke-dasharray="1 1"><path d="M80.5.5h14v14h-14zM80 7.5h15M87.5 15V0"/></g><g clip-path="url(#docx-aeg)"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M96.5.5h14v14h-14z"/><path stroke="#333" d="M96 7.5h15"/></g><g clip-path="url(#docx-aeh)"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M112.5.5h14v14h-14zM112 7.5h15M119.5 15V0"/><path stroke="#333" d="M112 .5h15"/></g><g clip-path="url(#docx-aei)"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M128.5.5h14v14h-14zM128 7.5h15M135.5 15V0"/><path stroke="#333" d="M128 14.5h15"/></g><g clip-path="url(#docx-aej)"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M144.5.5h14v14h-14zM144 7.5h15M151.5 15V0"/><path stroke="#333" d="M158.5 15V0"/></g><g clip-path="url(#docx-aek)"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M160.5.5h14v14h-14zM160 7.5h15M167.5 15V0"/><path stroke="#333" d="M160.5 15V0"/></g><g clip-path="url(#docx-ael)"><path stroke="#ACACAC" stroke-dasharray="1 1" d="M176.5.5h14v14h-14zM183.5 15V0"/><path stroke="#333" d="M183.5 15V0"/></g><g clip-path="url(#docx-aem)"><g clip-path="url(#docx-aen)" stroke="#333"><path d="M192 1.5h16M192 10.5h3M205 10.5h3M196 10.5h8M195 14.5h3M191 14.5h3M206 14.5h2M199 14.5h6"/><path stroke-dasharray="2 2" d="M192 5.5h16"/></g></g><g clip-path="url(#docx-aeo)" stroke-linecap="round"><path d="m209.5 5.5 2-4 2 4M210 4.5h3M209.5 14.5l2-4 2 4M210 13.5h3" stroke="#333" stroke-linejoin="round"/><path stroke="#0061CE" d="M209.5 8.5h13"/><path d="M215.5 3.5h6M215.5 12.5h6" stroke="#333"/></g><defs><clipPath id="docx-aea"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-aeb"><path fill="#fff" transform="translate(16)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-aec"><path fill="#fff" transform="translate(32)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-aed"><path fill="#fff" transform="translate(48)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-aee"><path fill="#fff" transform="translate(64)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-aef"><path fill="#fff" transform="translate(80)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-aeg"><path fill="#fff" transform="translate(96)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-aeh"><path fill="#fff" transform="translate(112)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-aei"><path fill="#fff" transform="translate(128)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-aej"><path fill="#fff" transform="translate(144)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-aek"><path fill="#fff" transform="translate(160)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-ael"><path fill="#fff" transform="translate(176)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-aem"><path fill="#fff" transform="translate(192)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-aen"><path fill="#fff" transform="translate(192)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-aeo"><path fill="#fff" transform="translate(208)" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 240 16" id="docx-icon-Frame_1000007266" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-afa)"><path d="M14 6.5a.5.5 0 0 0 1 0h-1Zm-13.5 7H0a.5.5 0 0 0 .854.354L.5 13.5Zm3-3V10h-.207l-.147.146.354.354Zm4 .5a.5.5 0 0 0 0-1v1ZM2.5.5V1h10V0h-10v.5Zm12 2H14v4h1v-4h-.5Zm-14 0H0v8h1v-8H.5Zm0 8H0v3h1v-3H.5Zm0 3 .354.354 3-3L3.5 10.5l-.354-.354-3 3L.5 13.5Zm3-3v.5h4v-1h-4v.5Zm9-10V1A1.5 1.5 0 0 1 14 2.5h1A2.5 2.5 0 0 0 12.5 0v.5Zm-10 0V0A2.5 2.5 0 0 0 0 2.5h1A1.5 1.5 0 0 1 2.5 1V.5Z" fill="#333"/><path d="M9.5 11.5h6M12.5 14.5v-6" stroke="#0061CE" stroke-linecap="round"/></g><g clip-path="url(#docx-afb)"><g clip-path="url(#docx-afc)"><path d="M30 7.5a.5.5 0 0 0 1 0h-1Zm-13.5 6H16a.5.5 0 0 0 .854.354L16.5 13.5Zm3-3V10h-.207l-.147.146.354.354Zm5 .5a.5.5 0 0 0 0-1v1ZM18.5.5V1h10V0h-10v.5Zm12 2H30v5h1v-5h-.5Zm-14 0H16v8h1v-8h-.5Zm0 8H16v3h1v-3h-.5Zm0 3 .354.354 3-3-.354-.354-.354-.354-3 3 .354.354Zm3-3v.5h5v-1h-5v.5Zm9-10V1A1.5 1.5 0 0 1 30 2.5h1A2.5 2.5 0 0 0 28.5 0v.5Zm-10 0V0A2.5 2.5 0 0 0 16 2.5h1A1.5 1.5 0 0 1 18.5 1V.5Z" fill="#333"/><path d="M26.379 13.621 30.62 9.38m0 4.242L26.38 9.38" stroke="#0061CE" stroke-linecap="round"/></g></g><g clip-path="url(#docx-afd)"><g clip-path="url(#docx-afe)"><path d="M46 7.5a.5.5 0 0 0 1 0h-1Zm-11.5 7H34a.5.5 0 0 0 .854.354L34.5 14.5Zm3-3V11h-.207l-.147.146.354.354Zm3 .5a.5.5 0 0 0 0-1v1Zm-4-9.5V3h8V2h-8v.5Zm10 2H46v3h1v-3h-.5Zm-12 0H34v7h1v-7h-.5Zm0 7H34v3h1v-3h-.5Zm0 3 .354.354 3-3-.354-.354-.354-.354-3 3 .354.354Zm3-3v.5h3v-1h-3v.5Zm7-9V3A1.5 1.5 0 0 1 46 4.5h1A2.5 2.5 0 0 0 44.5 2v.5Zm-8 0V2A2.5 2.5 0 0 0 34 4.5h1A1.5 1.5 0 0 1 36.5 3v-.5Z" fill="#333"/><path d="M42.5.5h-8a2 2 0 0 0-2 2v7" stroke="#333" stroke-linecap="round"/><path d="M42.379 13.621 46.62 9.38m0 4.242L42.38 9.38" stroke="#0061CE" stroke-linecap="round"/></g></g><g clip-path="url(#docx-aff)"><g clip-path="url(#docx-afg)"><path d="M62 7.5a.5.5 0 0 0 1 0h-1Zm-13.5 6H48a.5.5 0 0 0 .854.354L48.5 13.5Zm3-3V10h-.207l-.147.146.354.354Zm3 .5a.5.5 0 0 0 0-1v1ZM50.5.5V1h10V0h-10v.5Zm12 2H62v5h1v-5h-.5Zm-14 0H48v8h1v-8h-.5Zm0 8H48v3h1v-3h-.5Zm0 3 .354.354 3-3-.354-.354-.354-.354-3 3 .354.354Zm3-3v.5h3v-1h-3v.5Zm9-10V1A1.5 1.5 0 0 1 62 2.5h1A2.5 2.5 0 0 0 60.5 0v.5Zm-10 0V0A2.5 2.5 0 0 0 48 2.5h1A1.5 1.5 0 0 1 50.5 1V.5Z" fill="#333"/><path d="M56.5 12.5h7m-4 3-3-3 3-3" stroke="#0061CE" stroke-linecap="round" stroke-linejoin="round"/></g></g><g clip-path="url(#docx-afh)"><g clip-path="url(#docx-afi)"><path d="M78 7.5a.5.5 0 0 0 1 0h-1Zm-13.5 6H64a.5.5 0 0 0 .854.354L64.5 13.5Zm3-3V10h-.207l-.147.146.354.354Zm3 .5a.5.5 0 0 0 0-1v1ZM66.5.5V1h10V0h-10v.5Zm12 2H78v5h1v-5h-.5Zm-14 0H64v8h1v-8h-.5Zm0 8H64v3h1v-3h-.5Zm0 3 .354.354 3-3-.354-.354-.354-.354-3 3 .354.354Zm3-3v.5h3v-1h-3v.5Zm9-10V1A1.5 1.5 0 0 1 78 2.5h1A2.5 2.5 0 0 0 76.5 0v.5Zm-10 0V0A2.5 2.5 0 0 0 64 2.5h1A1.5 1.5 0 0 1 66.5 1V.5Z" fill="#333"/><path d="M79.5 12.5h-7m4 3 3-3-3-3" stroke="#0061CE" stroke-linecap="round" stroke-linejoin="round"/></g></g><g clip-path="url(#docx-afj)"><path d="M92.5 7.5v-3l-4-3.945h-6a2 2 0 0 0-2 2V12.5a2 2 0 0 0 2 2h5.338m4.662-10h-3a1 1 0 0 1-1-1V.555" stroke="#333" stroke-linecap="round"/><path d="M91.526 14.5V14h-.288l-.144.25.432.25ZM89.5 10.552H89V14.5h1v-3.948h-.5Zm1.754 4.419.432.25.273-.47-.433-.251-.432-.25-.273.47.433.251Zm.272-.471v.5H94.5v-1h-2.974v.5Zm3.974-1h.5v-3h-1v3h.5Zm-1-4V9h-4v1h4v-.5Zm-5 1H89v.052h1V10.5h-.5Zm1-1V9a1.5 1.5 0 0 0-1.5 1.5h1a.5.5 0 0 1 .5-.5v-.5Zm5 1h.5A1.5 1.5 0 0 0 94.5 9v1a.5.5 0 0 1 .5.5h.5Zm-1 4v.5a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5v.5Zm-5 0H89c0 1.472 1.949 1.996 2.686.722l-.432-.251-.433-.25c-.225.389-.821.229-.821-.221h-.5Z" fill="#333"/><path d="M82.5 5.5h4M82.5 8.5h2" stroke="#333" stroke-linecap="round"/></g><g clip-path="url(#docx-afk)" stroke-linecap="round"><path d="M108.5 9.5v-5l-4-3.945h-6a2 2 0 0 0-2 2V12.5a2 2 0 0 0 2 2h5.338m4.662-10h-3a1 1 0 0 1-1-1V.555" stroke="#333"/><path d="m105.5 13.5 2 2 4-5" stroke="#0061CE" stroke-linejoin="round"/><path d="M98.5 5.5h4M98.5 8.5h2" stroke="#333"/></g><g clip-path="url(#docx-afl)"><path d="M124.5 7.5v-3l-4-3.945h-6a2 2 0 0 0-2 2V12.5a2 2 0 0 0 2 2h4m6-10h-3a1 1 0 0 1-1-1V.555M114.5 5.5h4M114.5 8.5h2" stroke="#333" stroke-linecap="round"/><circle cx="123.5" cy="12.5" r="3" stroke="#0061CE"/><path d="m125.5 11-3.797 3.078" stroke="#0061CE" stroke-linecap="round"/></g><g clip-path="url(#docx-afm)" stroke-linecap="round"><path d="M140.5 7.5v-3l-4-3.945h-6a2 2 0 0 0-2 2V12.5a2 2 0 0 0 2.001 2h4.999m5-10h-3a1 1 0 0 1-1-1V.555" stroke="#333"/><path d="M136.5 12.5h7m-4 3-3-3 3-3" stroke="#0061CE" stroke-linejoin="round"/><path d="M130.5 5.5h4M130.5 8.5h2" stroke="#333"/></g><g clip-path="url(#docx-afn)" stroke-linecap="round"><path d="M156.5 7.5v-3l-4-3.945h-6a2 2 0 0 0-2 2V12.5a2 2 0 0 0 2.001 2h4.999m5-10h-3a1 1 0 0 1-1-1V.555" stroke="#333"/><path d="M159.5 12.5h-7m4 3 3-3-3-3" stroke="#0061CE" stroke-linejoin="round"/><path d="M146.5 5.5h4M146.5 8.5h2" stroke="#333"/></g><g clip-path="url(#docx-afo)"><circle cx="162.5" cy="3.5" r=".5" fill="#333"/><circle cx="162.5" cy="7.5" r=".5" fill="#333"/><circle cx="162.5" cy="11.5" r=".5" fill="#333"/><path d="M164.5 3.5h9M164.5 7.5h9M164.5 11.5h3" stroke="#333" stroke-linecap="round"/><path d="M169.451 11.659c-.566-.647-.106-1.659.753-1.659h2.592c.859 0 1.319 1.012.753 1.659l-1.296 1.48a1.001 1.001 0 0 1-1.506 0l-1.296-1.48Z" fill="#333"/></g><g clip-path="url(#docx-afp)"><circle cx="178.5" cy="3.5" r=".5" fill="#0061CE"/><circle cx="178.5" cy="7.5" r=".5" fill="#0061CE"/><circle cx="178.5" cy="11.5" r=".5" fill="#0061CE"/><path d="M180.5 3.5h9M180.5 7.5h9M180.5 11.5h3" stroke="#0061CE" stroke-linecap="round"/><path d="M185.451 11.659c-.566-.647-.106-1.659.753-1.659h2.592c.859 0 1.319 1.012.753 1.659l-1.296 1.48a1.001 1.001 0 0 1-1.506 0l-1.296-1.48Z" fill="#0061CE"/></g><g clip-path="url(#docx-afq)"><path d="M206 7.5a.5.5 0 0 0 1 0h-1Zm-13.5 6h-.5a.5.5 0 0 0 .854.354l-.354-.354Zm3-3V10h-.207l-.147.146.354.354Zm4 .5a.5.5 0 0 0 0-1v1Zm-5-10.5V1h10V0h-10v.5Zm12 2h-.5v5h1v-5h-.5Zm-14 0h-.5v8h1v-8h-.5Zm0 8h-.5v3h1v-3h-.5Zm0 3 .354.354 3-3-.354-.354-.354-.354-3 3 .354.354Zm3-3v.5h4v-1h-4v.5Zm9-10V1a1.5 1.5 0 0 1 1.5 1.5h1a2.5 2.5 0 0 0-2.5-2.5v.5Zm-10 0V0a2.5 2.5 0 0 0-2.5 2.5h1a1.5 1.5 0 0 1 1.5-1.5V.5Z" fill="#333"/><path d="m200.5 12.5 2 2 4-5" stroke="#0061CE" stroke-linecap="round" stroke-linejoin="round"/></g><g clip-path="url(#docx-afr)"><g clip-path="url(#docx-afs)"><path d="M222 9.5a.5.5 0 0 0 1 0h-1Zm-13.5 4h-.5a.5.5 0 0 0 .854.354l-.354-.354Zm3-3V10h-.207l-.147.146.354.354Zm3 .5a.5.5 0 0 0 0-1v1Zm-4-10.5V1h10V0h-10v.5Zm12 2h-.5v7h1v-7h-.5Zm-14 0h-.5v8h1v-8h-.5Zm0 8h-.5v3h1v-3h-.5Zm0 3 .354.354 3-3-.354-.354-.354-.354-3 3 .354.354Zm3-3v.5h3v-1h-3v.5Zm9-10V1a1.5 1.5 0 0 1 1.5 1.5h1a2.5 2.5 0 0 0-2.5-2.5v.5Zm-10 0V0a2.5 2.5 0 0 0-2.5 2.5h1a1.5 1.5 0 0 1 1.5-1.5V.5Z" fill="#333"/><path d="m219.5 15-3-3M219.5 9l-3 3h5a2 2 0 0 1 2 2v2" stroke="#0061CE" stroke-linecap="round" stroke-linejoin="round"/></g></g><g clip-path="url(#docx-aft)"><g clip-path="url(#docx-afu)" stroke-linecap="round"><path d="m235.5 15.5 4-4m0 4-4-4" stroke="#0061CE"/><path d="M233.5 12.5h-7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6" stroke="#333"/></g></g><defs><clipPath id="docx-afa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afb"><path fill="#fff" transform="translate(16)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afc"><path fill="#fff" transform="translate(16)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afd"><path fill="#fff" transform="translate(32)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afe"><path fill="#fff" transform="translate(32)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-aff"><path fill="#fff" transform="translate(48)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afg"><path fill="#fff" transform="translate(48)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afh"><path fill="#fff" transform="translate(64)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afi"><path fill="#fff" transform="translate(64)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afj"><path fill="#fff" transform="translate(80)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afk"><path fill="#fff" transform="translate(96)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afl"><path fill="#fff" transform="translate(112)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afm"><path fill="#fff" transform="translate(128)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afn"><path fill="#fff" transform="translate(144)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afo"><path fill="#fff" transform="translate(160)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afp"><path fill="#fff" transform="translate(176)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afq"><path fill="#fff" transform="translate(192)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afr"><path fill="#fff" transform="translate(208)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afs"><path fill="#fff" transform="translate(208)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-aft"><path fill="#fff" transform="translate(224)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-afu"><path fill="#fff" transform="translate(224)" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 496 16" id="docx-icon-Frame_1000007275" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-aga)"><g clip-path="url(#docx-agb)"><path d="m11.257 15.438 4.243-4.243m0 4.242-4.243-4.242" stroke="#0061CE" stroke-linecap="round"/><path d="M9.5 14.5h-7a2 2 0 0 1-2-2v-11a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8" stroke="#333" stroke-linecap="round"/><path stroke="#333" d="M1 4.5h13M1 9.5h13.5"/><path stroke="#333" stroke-linecap="round" d="M4.5 14.5v-10M10.5 9.5v-5"/></g></g><g clip-path="url(#docx-agc)"><g clip-path="url(#docx-agd)"><path d="M24.5 12.5h7m-4 3-3-3 3-3" stroke="#0061CE" stroke-linecap="round" stroke-linejoin="round"/><path d="M23.5 14.5h-5a2 2 0 0 1-2-2v-11a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8" stroke="#333" stroke-linecap="round"/><path stroke="#333" d="M17 4.5h13"/><path d="M24.5 10a.5.5 0 0 0 0-1v1ZM17 9.5v.5h7.5V9H17v.5Z" fill="#333"/><path stroke="#333" stroke-linecap="round" d="M20.5 14.5v-10M26.5 7.5v-3"/></g></g><g clip-path="url(#docx-age)"><rect x="32.5" y=".5" width="14" height="5" rx=".5" stroke="#333"/><rect x="32.5" y="9.5" width="14" height="5" rx=".5" stroke="#333"/><path d="M33 7.5h14" stroke="#0061CE" stroke-linecap="round" stroke-dasharray="2 2"/><path d="M36.5 1v4M42.5 1v4M36.5 10v4M42.5 10v4" stroke="#333"/></g><g clip-path="url(#docx-agf)"><rect x="48.5" y="15.5" width="14" height="5" rx=".5" transform="rotate(-90 48.5 15.5)" stroke="#333"/><rect x="57.5" y="15.5" width="14" height="5" rx=".5" transform="rotate(-90 57.5 15.5)" stroke="#333"/><path d="M55.5 15V1" stroke="#0061CE" stroke-linecap="round" stroke-dasharray="2 2"/><path d="M49 11.5h4M49 5.5h4M58 11.5h4M58 5.5h4" stroke="#333"/></g><g clip-path="url(#docx-agg)" stroke-linecap="round"><path d="M64.5 8.5h4m-2 2-2-2 2-2M78.5 8.5h-4m2 2 2-2-2-2" stroke="#0061CE" stroke-linejoin="round"/><path d="M64.5 5.5v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3M78.5 5.5v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3" stroke="#333"/></g><g clip-path="url(#docx-agh)" stroke="#333"><rect x="85.5" y=".5" width="10" height="15" rx=".5"/><path stroke-linecap="round" d="M81.5.5h2M81.5 15.5h2"/><path d="M82.5 1v14"/></g><g clip-path="url(#docx-agi)" stroke="#333"><rect x="111.5" y="4.5" width="10" height="15" rx=".5" transform="rotate(90 111.5 4.5)"/><path stroke-linecap="round" d="M111.5.5v2M96.5.5v2"/><path d="M111 1.5H97"/></g><g clip-path="url(#docx-agj)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M125.5 3.5h-11M123.5 6.5h-7"/></g><g clip-path="url(#docx-agk)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M141.5 8.5h-11M139.5 11.5h-7M139.5 5.5h-7"/></g><g clip-path="url(#docx-agl)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M157.5 12.5h-11M155.5 9.5h-7"/></g><g clip-path="url(#docx-agm)"><g clip-path="url(#docx-agn)"><path d="m171.5 15.5 4-4m0 4-4-4" stroke="#0061CE" stroke-linecap="round"/><path d="M169.5 14.5h-8a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v8" stroke="#333" stroke-linecap="round"/><path d="M160 4.5h15.5M164.5 14V1" stroke="#333"/><path d="M170 10.5a.5.5 0 0 0 1 0h-1Zm.5 0h.5V1h-1v9.5h.5Z" fill="#333"/><path d="M160 10.5h10.5" stroke="#333"/></g></g><g clip-path="url(#docx-ago)"><g clip-path="url(#docx-agp)"><path d="m181.5 15.5 5-4m0 4-5-4" stroke="#0061CE" stroke-linecap="round"/><path d="M176.5 14.5v-11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11M188.5 14.5v-11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11" stroke="#333" stroke-linecap="round"/><rect x="182.5" y=".5" width="3" height="9" rx=".5" stroke="#333"/></g></g><g clip-path="url(#docx-agq)"><g clip-path="url(#docx-agr)"><path d="m207.5 10.5-4-4m4 0-4 4" stroke="#0061CE" stroke-linecap="round"/><path d="M206.5 15.5h-11a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h11M206.5 3.5h-11a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h11" stroke="#333" stroke-linecap="round"/><rect x="192.5" y="9.5" width="3" height="9" rx=".5" transform="rotate(-90 192.5 9.5)" stroke="#333"/></g></g><g clip-path="url(#docx-ags)"><g clip-path="url(#docx-agt)"><path d="M215.5 15.5v-11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11M220.5 15.5v-11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11" stroke="#333" stroke-linecap="round"/><rect x="208.5" y=".5" width="4" height="7" rx=".5" stroke="#333"/><path d="M210.5 15.5v-6m-2 4 2 2 2-2" stroke="#0061CE" stroke-linecap="round" stroke-linejoin="round"/></g></g><g clip-path="url(#docx-agu)"><g clip-path="url(#docx-agv)"><path d="M224.5 15.5v-11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11M229.5 15.5v-11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11" stroke="#333" stroke-linecap="round"/><rect x="235.5" y=".5" width="4" height="7" rx=".5" stroke="#333"/><path d="M237.5 15.5v-6m-2 4 2 2 2-2" stroke="#0061CE" stroke-linecap="round" stroke-linejoin="round"/></g></g><g clip-path="url(#docx-agw)"><g clip-path="url(#docx-agx)"><rect x="243.5" y=".5" width="10" height="3" rx=".5" stroke="#333"/><rect x="243.5" y="12.5" width="10" height="3" rx=".5" stroke="#333"/><rect x="240.5" y="6.5" width="7" height="3" rx=".5" stroke="#333"/><path stroke="#333" d="M248.5 0v4M248.5 12v4"/><path d="M255.5 8.5h-6m4 2 2-2-2-2" stroke="#0061CE" stroke-linecap="round" stroke-linejoin="round"/></g></g><g clip-path="url(#docx-agy)"><g clip-path="url(#docx-agz)"><path d="M270.5 15.5h-11a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h11M270.5 10.5h-11a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h11" stroke="#333" stroke-linecap="round"/><rect x="256.5" y="4.5" width="4" height="7" rx=".5" transform="rotate(-90 256.5 4.5)" stroke="#333"/><path d="M271.5 2.5h-6m4 2 2-2-2-2" stroke="#0061CE" stroke-linecap="round" stroke-linejoin="round"/></g></g><g clip-path="url(#docx-agA)"><g clip-path="url(#docx-agB)"><path d="M286.5 8.5h-11a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h11M286.5 3.5h-11a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h11" stroke="#333" stroke-linecap="round"/><rect x="272.5" y="15.5" width="4" height="7" rx=".5" transform="rotate(-90 272.5 15.5)" stroke="#333"/><path d="M287.5 13.5h-6m4 2 2-2-2-2" stroke="#0061CE" stroke-linecap="round" stroke-linejoin="round"/></g></g><g clip-path="url(#docx-agC)"><g clip-path="url(#docx-agD)" stroke="#333" stroke-linecap="round"><path d="M288.5 2.5h15M288.5 13.5h15M290.5 15.5V.5M301.5 15.5V.5"/></g></g><g clip-path="url(#docx-agE)"><path d="M308 1.5h-2.5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2.5M316 1.5h2.5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H316M305 6.5h3M305 10.5h3" stroke="#333"/><path stroke="#0061CE" d="M310 6.5h4M310 10.5h4"/><path stroke="#333" d="M316 6.5h3M316 10.5h3"/><rect x="309.5" y="1.5" width="5" height="14" rx=".5" stroke="#0061CE"/></g><g clip-path="url(#docx-agF)"><g clip-path="url(#docx-agG)"><path d="M320.5 12v2.5a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V12M320.5 4V1.5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1V4M325.5 15v-3M330.5 15v-3" stroke="#333"/><path stroke="#0061CE" d="M325.5 10V6M330.5 10V6"/><path stroke="#333" d="M325.5 4V1M330.5 4V1"/><path d="M320.5 10V6a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5Z" stroke="#0061CE"/></g></g><g clip-path="url(#docx-agH)"><g clip-path="url(#docx-agI)"><path d="M344.5 14.5h-7a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v9" stroke="#333" stroke-linecap="round"/><path d="M336 4.5h15M340.5 14V1" stroke="#333"/><path d="M347 7.5a.5.5 0 0 0 1 0h-1Zm.5 0h.5V1h-1v6.5h.5Z" fill="#333"/><path d="M336 10.5h8.5" stroke="#333" stroke-linecap="round"/><path d="M350.696 13h-1.936l-.151.188-1.109 1.386v-4.451L350.696 13Z" stroke="#0061CE"/></g></g><g clip-path="url(#docx-agJ)"><g clip-path="url(#docx-agK)"><path d="M359.5 14.5h-6a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v7" stroke="#333" stroke-linecap="round"/><path d="M352 4.5h15M356.5 14V1" stroke="#333"/><path d="M363 9a.5.5 0 0 0 1 0h-1Zm.5 0h.5V1h-1v8h.5Z" fill="#333"/><path d="M352 10.5h9.5" stroke="#333" stroke-linecap="round"/><path d="m364.714 14.346 2.786-3-1.714-1.846-2.786 3-1.5 1.615 1.286 1.385h.857l1.071-1.154ZM363 12.5l1.714 1.846" stroke="#0061CE" stroke-linecap="round" stroke-linejoin="round"/><path d="M361.5 15.5h6" stroke="#0061CE" stroke-linecap="round"/></g></g><g clip-path="url(#docx-agL)"><g clip-path="url(#docx-agM)"><rect x="368.5" y="3.5" width="15" height="9" rx=".5" stroke="#333"/><path stroke="#333" d="M368 6.5h15M368 9.5h15M373.5 3v9M378.5 7v6"/><path d="m375.5 1.5.858-.859a.2.2 0 0 1 .283 0l.859.86M375.5 14.5l.858.858a.2.2 0 0 0 .283 0l.859-.858" stroke="#0061CE" stroke-linecap="round"/></g></g><g clip-path="url(#docx-agN)"><path d="M385 .5h9a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 .5-.5ZM384 5.5h11M389.5 1v10" stroke="#333"/><path d="m398.5 3.5-1.859 1.859a.2.2 0 0 0 0 .282L398.5 7.5M387.5 14.5l1.858-1.859a.2.2 0 0 1 .283 0L391.5 14.5" stroke="#0061CE" stroke-linecap="round"/></g><g clip-path="url(#docx-agO)"><g clip-path="url(#docx-agP)"><path d="M401 .5h14a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 .5-.5Z" stroke="#333"/><path d="M405.5 1v14a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5ZM410.5 1v4M405 10.5h-4" stroke="#333"/><path d="m412.5 8.5.858-.859a.2.2 0 0 1 .283 0l.859.859M408.5 14.5l-.859-.858a.2.2 0 0 1 0-.283l.859-.859" stroke="#0061CE" stroke-linecap="round"/><path d="M413.5 8v4.5a1 1 0 0 1-1 1h-5" stroke="#0061CE"/></g></g><g clip-path="url(#docx-agQ)"><g clip-path="url(#docx-agR)" stroke="#333"><path d="M431.5 1v14a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5Z"/><path d="M416.5.5h4M416.5 15.5h4M416.5 10.5h4M416.5 5.5h4M423 5.5h8M423 10.5h8" stroke-linecap="round"/><path d="M418.5.5V15"/></g></g><g clip-path="url(#docx-agS)"><g clip-path="url(#docx-agT)" stroke="#333"><path d="M447 15.5h-14a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5Z"/><path d="M447.5.5v4M432.5.5v4M437.5.5v4M442.5.5v4M442.5 7v8M437.5 7v8" stroke-linecap="round"/><path d="M447.5 2.5H433"/></g></g><g clip-path="url(#docx-agU)" stroke-linecap="round"><path d="M454.5 8.5v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2Z" stroke="#333"/><path d="M457.5 4.5v-2a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2" stroke="#0061CE" stroke-linejoin="round"/></g><g clip-path="url(#docx-agV)"><path d="m467.499 4.5-2-2 2-2m-2 2h5.5a6.5 6.5 0 1 1 0 13h-4.5" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><g clip-path="url(#docx-agW)"><path d="m491.499 4.5 2-2-2-2m2 2h-5.5a6.5 6.5 0 1 0 0 13h4.5" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="docx-aga"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agc"><path fill="#fff" transform="translate(16)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agd"><path fill="#fff" transform="translate(16)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-age"><path fill="#fff" transform="translate(32)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agf"><path fill="#fff" transform="translate(48)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agg"><path fill="#fff" transform="translate(64)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agh"><path fill="#fff" transform="translate(80)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agi"><path fill="#fff" transform="translate(96)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agj"><path fill="#fff" transform="translate(112)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agk"><path fill="#fff" transform="translate(128)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agl"><path fill="#fff" transform="translate(144)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agm"><path fill="#fff" transform="translate(160)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agn"><path fill="#fff" transform="translate(160)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-ago"><path fill="#fff" transform="translate(176)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agp"><path fill="#fff" transform="translate(176)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agq"><path fill="#fff" transform="translate(192)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agr"><path fill="#fff" transform="rotate(-90 104 -88)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-ags"><path fill="#fff" transform="translate(208)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agt"><path fill="#fff" transform="translate(208)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agu"><path fill="#fff" transform="translate(224)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agv"><path fill="#fff" transform="translate(224)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agw"><path fill="#fff" transform="translate(240)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agx"><path fill="#fff" transform="translate(240)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agy"><path fill="#fff" transform="translate(256)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agz"><path fill="#fff" transform="rotate(-90 136 -120)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agA"><path fill="#fff" transform="translate(272)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agB"><path fill="#fff" transform="rotate(-90 144 -128)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agC"><path fill="#fff" transform="translate(288)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agD"><path fill="#fff" transform="translate(288)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agE"><path fill="#fff" transform="translate(304)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agF"><path fill="#fff" transform="translate(320)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agG"><path fill="#fff" transform="rotate(-90 168 -152)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agH"><path fill="#fff" transform="translate(336)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agI"><path fill="#fff" transform="translate(336)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agJ"><path fill="#fff" transform="translate(352)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agK"><path fill="#fff" transform="translate(352)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agL"><path fill="#fff" transform="translate(368)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agM"><path fill="#fff" transform="translate(368)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agN"><path fill="#fff" transform="translate(384)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agO"><path fill="#fff" transform="translate(400)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agP"><path fill="#fff" transform="translate(400)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agQ"><path fill="#fff" transform="translate(416)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agR"><path fill="#fff" transform="translate(416)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agS"><path fill="#fff" transform="translate(432)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agT"><path fill="#fff" transform="rotate(90 224 224)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agU"><path fill="#fff" transform="translate(448)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agV"><path fill="#fff" transform="translate(464)" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-agW"><path fill="#fff" transform="translate(480)" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-LeftFunction__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-aha)"><g clip-path="url(#docx-ahb)"><path d="M14.399 0h-12.8a1.6 1.6 0 0 0-1.6 1.6v12.8a1.6 1.6 0 0 0 1.6 1.6h12.8a1.6 1.6 0 0 0 1.6-1.6V1.6a1.6 1.6 0 0 0-1.6-1.6Z" fill="#237FDB"/><path d="M7.62 11.658a62.4 62.4 0 0 0-.459.128l.85 1.506h4.125l-1.652-2.93c-.695.435-1.597.864-2.813 1.28l-.05.016ZM6.866 3.95l-.692-1.225H2.05l1.857 3.291c.791-.824 1.806-1.531 2.96-2.066ZM2.193 12.842s.15-2.72 1.331-4.685c.992-2.07 3.615-3.803 6.59-4.301 0 0 2.5-.58 3.274-1.03 0 0 .843-.547.462.723 0 0-.504 1.228-2.06 2.026-.367.184-.64.226-.582.576.104.357.7.086.78.045.142-.117 1.521-.495.602.823-.924 1.364-1.484 2.602-5.071 3.83-2.391.655-3.343 1.024-4.728 2.28-.693.492-.598-.287-.598-.287Z" fill="#fff"/></g></g><defs><clipPath id="docx-aha"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-ahb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_Word_Open_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cwa)"><path d="M19.5 9.5v-3a2 2 0 0 0-2-2H11a1 1 0 0 0-1-1H5.5a1 1 0 0 0-1 1 2 2 0 0 0-2 2v12a2 2 0 0 0 2 2H19" stroke="#333"/><path d="m5.799 10.237-2.455 9A1 1 0 0 0 4.31 20.5h14.893a1 1 0 0 0 .975-.778l2.045-9a1 1 0 0 0-.975-1.222H6.764a1 1 0 0 0-.965.737Z" fill="#E6F6FF" stroke="#0061CE" stroke-linecap="round"/></g><defs><clipPath id="docx-cwa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_Word_export_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cda)" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 11.5v-6a2 2 0 0 0-2-2h-2m-4 17h-7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h2m0 0v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4m-9 0h9m-7 3h5" stroke="#333"/><path d="M13.502 16.5h7.999m-4.001 4 4-4-4-4" stroke="#0061CE"/></g><defs><clipPath id="docx-cda"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_Word_export_pdf_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cca)"><path d="M7.5 11a.5.5 0 1 1 0 1h-5a.5.5 0 0 1 0-1h5Z" fill="#0061CE"/><path d="M5.146 9.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.707l-2-2a.5.5 0 0 1 0-.707Z" fill="#0061CE"/><path d="M7.146 11.146a.5.5 0 0 1 .708.707l-2 2a.5.5 0 0 1-.708-.707l2-2Z" fill="#0061CE"/><path d="M12.5 18.113a.613.613 0 0 0-.613-.613H10.5v1.227h1.387a.613.613 0 0 0 .613-.614Zm1 0c0 .891-.722 1.614-1.613 1.614H10.5V21a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5h1.887c.89 0 1.613.722 1.613 1.613ZM17.5 19a1.5 1.5 0 0 0-1.5-1.5h-.5v3h.5a1.5 1.5 0 0 0 1.5-1.5Zm1 0a2.5 2.5 0 0 1-2.5 2.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a2.5 2.5 0 0 1 2.5 2.5ZM19.5 21v-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-1.5v1H22a.5.5 0 0 1 0 1h-1.5V21a.5.5 0 0 1-1 0ZM3 8.5v-4A2.5 2.5 0 0 1 5.5 2H15a.5.5 0 0 1 .354.146l4.5 4.5A.5.5 0 0 1 20 7v7.5a.5.5 0 0 1-1 0V7.207L14.793 3H5.5A1.5 1.5 0 0 0 4 4.5v4a.5.5 0 0 1-1 0Z" fill="#333"/><path d="M14 5.5v-3a.5.5 0 0 1 1 0v3A1.5 1.5 0 0 0 16.5 7h3a.5.5 0 0 1 0 1h-3A2.5 2.5 0 0 1 14 5.5ZM3 18.5v-4a.5.5 0 0 1 1 0v4A1.5 1.5 0 0 0 5.5 20h2a.5.5 0 0 1 0 1h-2A2.5 2.5 0 0 1 3 18.5Z" fill="#333"/></g><defs><clipPath id="docx-cca"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_Word_form_Cell_Margins_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cha)"><rect x="2.5" y="2.5" width="19" height="19" rx="1.5" stroke="#333"/><path d="M3 17.5h18M3 6.5h18M7.5 21V3M16.5 21V3" stroke="#0061CE"/></g><defs><clipPath id="docx-cha"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_Word_form_Merge_Cells_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cja)" stroke-linecap="round"><path d="M10.5 2.5h-6a2 2 0 0 0-2 2v5m11-7h6a2 2 0 0 1 2 2v5m-11 12h-6a2 2 0 0 1-2-2v-6m11 8h6a2 2 0 0 0 2-2v-6" stroke="#333"/><path d="M14.5 11.5h7m-4 3-3-3 3-3M9.5 11.5h-7m4 3 3-3-3-3" stroke="#0061CE" stroke-linejoin="round"/></g><defs><clipPath id="docx-cja"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_Word_form_Show_Grid_Guides_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cla)"><path d="M4 2.5h17A1.5 1.5 0 0 1 22.5 4v16a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20V4A1.5 1.5 0 0 1 4 2.5ZM3 16.5h19" stroke="#333"/><path stroke="#333" stroke-linecap="round" d="M8.5 21.5v-10M16.5 21.5v-10"/><path d="M4.5 8.5h3M10.5 8.5h4M17.5 8.5h3" stroke="#0061CE" stroke-linecap="round"/></g><defs><clipPath id="docx-cla"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_Word_form_autofit_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cga)"><path d="M4 5.5h16A1.5 1.5 0 0 1 21.5 7v10a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 17V7A1.5 1.5 0 0 1 4 5.5ZM3 9.5h19M3 14.5h19" stroke="#333"/><path d="M8.5 18.5v-13M15.5 18.5v-9" stroke="#333" stroke-linecap="round"/><path d="m9.5 3.5 2.5-1 2.5 1M9.5 20.5l2.5 1 2.5-1" stroke="#0061CE" stroke-linecap="round"/></g><defs><clipPath id="docx-cga"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_Word_form_clear_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cia)"><rect x="2.5" y="2.5" width="19" height="5" rx=".5" stroke="#333"/><path d="M2.5 21V3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v18a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5Z" stroke="#333"/><path d="m16.643 19.192 4.94-5.32a1 1 0 0 0 0-1.36l-2.064-2.223a1 1 0 0 0-1.466 0L13.214 15.5l-2.368 2.55a1 1 0 0 0 0 1.361l1.94 2.089H14.5l2.143-2.308ZM13.214 15.5l3.429 3.692M10.5 21.5h11" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 14.5h6.5" stroke="#333"/><path stroke="#0061CE" stroke-linecap="round" d="M4.5 11.5h2M4.5 17.5h2"/></g><defs><clipPath id="docx-cia"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_Word_form_selected_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cka)"><path d="M5.5 17.854V4.17a1 1 0 0 1 1.581-.813l11.09 7.922a1 1 0 0 1-.12 1.7l-3.801 1.976 2.204 4.58a1 1 0 0 1-.44 1.321l-1.724.896a1 1 0 0 1-1.362-.454l-2.178-4.525-3.789 1.968a1 1 0 0 1-1.461-.887Z" stroke="#333" stroke-linejoin="round"/></g><defs><clipPath id="docx-cka"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_Word_insert_form_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-coa)"><path d="M4 2.5h17A1.5 1.5 0 0 1 22.5 4v16a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20V4A1.5 1.5 0 0 1 4 2.5ZM3 7.5h19" stroke="#333"/><path d="M5.5 14.5h14M8.5 11.5v6M16.5 11.5v6" stroke="#0061CE" stroke-linecap="round"/></g><defs><clipPath id="docx-coa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_Word_insert_page_break_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cpa)" stroke-linecap="round"><path d="M20.5 21.5v-4a2 2 0 0 0-2-2h-13a2 2 0 0 0-2 2v4M3.5 2.5v5a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-5" stroke="#333"/><path d="M2.5 12.5h19" stroke="#0061CE"/></g><defs><clipPath id="docx-cpa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_Word_paper_orientation_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cxa)"><path d="M11.5 9.5V6.224a2 2 0 0 0-.464-1.28L9.6 3.22a2 2 0 0 0-1.537-.72H4.5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h1" stroke="#333" stroke-linecap="round"/><path d="M21.5 20v-4.47a1.5 1.5 0 0 0-.628-1.221l-2.142-1.53a1.5 1.5 0 0 0-.87-.279H10A1.5 1.5 0 0 0 8.5 14v6a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5Z" stroke="#333"/><path d="m15.5 2.5-2 2 2 2M17.5 8.5l2 2 2-2" stroke="#0061CE" stroke-linecap="round"/><path d="M14.5 4.5h3a2 2 0 0 1 2 2v3" stroke="#0061CE" stroke-linecap="round"/></g><defs><clipPath id="docx-cxa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_Word_paper_size_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cya)"><path d="M6 20V7a2 2 0 0 1 2-2h8.672l.197.01a2 2 0 0 1 1.217.576l2.328 2.328A2 2 0 0 1 21 9.328V20a2 2 0 0 1-1.796 1.99L19 22v-1a1 1 0 0 0 1-1V9.328a1 1 0 0 0-.293-.707l-2.328-2.328A1 1 0 0 0 16.672 6H8a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1v1l-.204-.01a2 2 0 0 1-1.785-1.786L6 20Zm13 1v1H8v-1h11Z" fill="#333"/><path d="M16 8.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 16 8.5Z" fill="#333"/><path d="M4.5 21a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1h2ZM4.5 5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1h2Z" fill="#0061CE"/><path d="M3 21.5v-16a.5.5 0 0 1 1 0v16a.5.5 0 0 1-1 0ZM20 1.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2ZM6 1.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Z" fill="#0061CE"/><path d="M20.5 3h-14a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1Z" fill="#0061CE"/></g><defs><clipPath id="docx-cya"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_Word_redo_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dca)"><path d="M16 7.5 18.5 5 16 2.5M18.5 5h-6.75a8.25 8.25 0 1 0 0 16.5h5.75" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="docx-dca"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_Word_undo_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dla)"><path d="M8 7.5 5.5 5 8 2.5M5.5 5h6.75a8.25 8.25 0 0 1 0 16.5H6.5" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="docx-dla"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_excle_border_fill_color_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bfa)" stroke="#333"><path d="M14.5 12V3.5a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2V12"/><path d="M12.5 12V4.5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1V12"/></g><defs><clipPath id="docx-bfa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_excle_fill_color_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bga)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.186 7.807 2 3.3 6.5a1.046 1.046 0 0 0 0 1.465l2.725 2.721c.42.419 1.048.419 1.468 0L12 6.186ZM4.5 2.5l2 2M3.5 6.5h8M14 9.857c0 .303-.105.594-.293.808A.941.941 0 0 1 13 11a.941.941 0 0 1-.707-.335A1.231 1.231 0 0 1 12 9.857c0-.914.85-.943 1-1.857.15.914 1 .943 1 1.857Z"/></g><defs><clipPath id="docx-bga"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_excle_no_color_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bha)" stroke-linecap="round"><path d="M10.5 2.5h-8v8m11-5v8h-8" stroke="#333"/><path d="m13.5 2.5-11 11" stroke="#E44137"/></g><defs><clipPath id="docx-bha"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_excle_no_fill_color_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bia)"><path d="m11 13.5-5.5 2" stroke="red" stroke-linecap="round"/><rect x="1.25" y="13.25" width="13.5" height="2.5" rx=".75" stroke="#C7CCD9" stroke-width=".5"/><path d="M12 6.186 7.807 2 3.3 6.5a1.046 1.046 0 0 0 0 1.465l2.725 2.721c.42.419 1.048.419 1.468 0L12 6.186ZM4.5 2.5l2 2M3.5 6.5h8M14 9.857c0 .303-.105.594-.293.808A.941.941 0 0 1 13 11a.941.941 0 0 1-.707-.335A1.231 1.231 0 0 1 12 9.857c0-.914.85-.943 1-1.857.15.914 1 .943 1 1.857Z" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="docx-bia"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_review_Simplified_Traditional_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bla)"><path d="M21.5 18.5h-7m4 3 3-3-3-3" stroke="#0061CE" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.5 4.5h4M3.5 4.5l2-2M7 13.5h4M12.5 4.5h4M12.5 4.5l2-2M16.5 14.9V8.5a2 2 0 0 0-2-2h-8m-3 14v-11M4 7l1 1" stroke="#333" stroke-linecap="round"/><path d="M8 9h4a1.5 1.5 0 0 1 1.5 1.5V16a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 16v-5.5A1.5 1.5 0 0 1 8 9Z" stroke="#333"/></g><defs><clipPath id="docx-bla"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_review_edit_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bja)"><path d="M19.5 11.5v-4l-5-5h-9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4m5-18v3a2 2 0 0 0 2 2h3" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><path d="m15.41 20.773-.728.727H12.5v-2.182l.727-.727 4.384-4.384a1 1 0 0 1 1.414 0l.768.768a1 1 0 0 1 0 1.414l-4.384 4.384Zm-2.183-2.182 2.182 2.182" stroke="#0061CE" stroke-linejoin="round"/><path stroke="#0061CE" stroke-linecap="round" d="M14.5 21.5h7"/></g><defs><clipPath id="docx-bja"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_review_password_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bka)"><path d="M19.5 9.5v-2l-5-5h-9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6m3-18v3a2 2 0 0 0 2 2h3" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 14.5h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.563 16a1.563 1.563 0 1 1 0 3.125 1.563 1.563 0 0 1 0-3.125Zm0 1a.562.562 0 1 0 0 1.125.562.562 0 0 0 0-1.125Z" fill="#333"/><path d="M17.5 19v1" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5 11c1.21 0 2.219.859 2.45 2h-1.037a1.5 1.5 0 0 0-2.826 0H15.05c.231-1.141 1.24-2 2.45-2Z" fill="#333"/></g><defs><clipPath id="docx-bka"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_three_arrow_left_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bma)"><path d="M5.2 4.9a.5.5 0 0 1 .6-.8l4 3a.5.5 0 1 1-.6.8l-4-3Z" fill="#666"/><path d="M5.2 4.9a.5.5 0 0 1 .6-.8l4 3a.5.5 0 1 1-.6.8l-4-3Z" fill="#000" fill-opacity=".2"/><path d="M5.2 4.9a.5.5 0 0 1 .6-.8l4 3a.5.5 0 1 1-.6.8l-4-3Z" fill="#000" fill-opacity=".2"/><path d="M5.2 4.9a.5.5 0 0 1 .6-.8l4 3a.5.5 0 1 1-.6.8l-4-3Z" fill="#000" fill-opacity=".2"/><path d="M5.2 4.9a.5.5 0 0 1 .6-.8l4 3a.5.5 0 1 1-.6.8l-4-3Z" fill="#000" fill-opacity=".2"/><path d="M5.2 10.1a.5.5 0 0 0 .6.8l4-3a.5.5 0 1 0-.6-.8l-4 3Z" fill="#666"/><path d="M5.2 10.1a.5.5 0 0 0 .6.8l4-3a.5.5 0 1 0-.6-.8l-4 3Z" fill="#000" fill-opacity=".2"/><path d="M5.2 10.1a.5.5 0 0 0 .6.8l4-3a.5.5 0 1 0-.6-.8l-4 3Z" fill="#000" fill-opacity=".2"/><path d="M5.2 10.1a.5.5 0 0 0 .6.8l4-3a.5.5 0 1 0-.6-.8l-4 3Z" fill="#000" fill-opacity=".2"/><path d="M5.2 10.1a.5.5 0 0 0 .6.8l4-3a.5.5 0 1 0-.6-.8l-4 3Z" fill="#000" fill-opacity=".2"/></g><defs><clipPath id="docx-bma"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_Character_Shading_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bsa)"><rect width="16" height="16" rx="2" fill="#D9D9D9"/><path d="m3.5 13.5 5-11 4 11M6 8.5h4.5" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="docx-bsa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_Decrease_Indent_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bya)" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 1.5h-12" stroke="#333"/><path d="M8.5 7.5h-7M4.5 4.5l-3 3M4.5 10.5 1.499 7.502" stroke="#0061CE"/><path d="M13.5 7.5h-2M13.5 13.5h-12" stroke="#333"/></g><defs><clipPath id="docx-bya"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_Increase_Indent_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cna)" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 1.5h-12M14.5 7.5h-2M14.5 13.5h-12" stroke="#333"/><path d="M2.147 7.5h7M6.5 4.5l2.647 3M6.5 10.5c.781-.781 1.866-2.219 2.647-3" stroke="#0061CE"/></g><defs><clipPath id="docx-cna"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_Italic_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cqa)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M12.667 2.667h-6M9.333 13.333h-6M10 2.667 6 13.333"/></g><defs><clipPath id="docx-cqa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_align_left_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bna)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5h-12M8.5 8.5h-7M13.5 13.5h-12"/></g><defs><clipPath id="docx-bna"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_align_right_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-boa)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5h-12M13.5 8.5h-7M13.5 13.5h-12"/></g><defs><clipPath id="docx-boa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_bold_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bpa)"><path d="M4 8h6a2.667 2.667 0 0 1 0 5.333H4.667A.667.667 0 0 1 4 12.667V3.333a.667.667 0 0 1 .667-.666h4.666a2.667 2.667 0 1 1 0 5.333" stroke="#333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="docx-bpa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_border_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bqa)"><g clip-path="url(#docx-bqb)" stroke="#333"><rect x=".5" y=".5" width="15" height="15" rx="1.5"/><path d="m3.5 12.5 5-9 4 9M6 8.5h4.5" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="docx-bqa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-bqb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_center_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bra)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5h-12M10.5 8.5h-6M13.5 13.5h-12"/></g><defs><clipPath id="docx-bra"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_clear_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bua)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M4.999 7 2.206 9.793a1 1 0 0 0 0 1.414L4.5 13.5h2l2.5-2.5m-4-4 6.5-6.5 4 4-6.5 6.5m-4-4 4 4M.499 15.5h15"/></g><defs><clipPath id="docx-bua"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_clear_16__clip_cell-1" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bta)" stroke-linecap="round"><path d="m.5 13.5 4-12 2.5 7M2.5 8.5H7" stroke="#333" stroke-linejoin="round"/><path d="m11 12 4.179-4-2.572-2.462-4.178 4-2.25 2.154 1.928 1.847h1.286L11 12ZM8.429 9.538 11 12" stroke="#0061CE" stroke-linejoin="round"/><path d="M6.5 14.5h9" stroke="#0754E6"/></g><defs><clipPath id="docx-bta"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_word_copy_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bwa)" stroke-linecap="round"><path d="M8.5 10.5v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2Z" fill="#E6F6FF" stroke="#0061CE"/><path d="M15.5 6.5v-2a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2" stroke="#333"/></g><defs><clipPath id="docx-bwa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_distributed_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bza)" stroke-linecap="round"><path d="M1.5 1.5v13M14.5 1.5v13M11.5 13.5h-7M11.5 9.5h-7" stroke="#333" stroke-linejoin="round"/><path d="m6.5 2.5-2 2 2 2M9.5 2.5l2 2-2 2" stroke="#0061CE"/></g><defs><clipPath id="docx-bza"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_down2_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-caa)"><path d="m.5 2.5 10 11M10.5 2.5l-10 11" stroke="#000" stroke-linecap="round"/><path d="M13.676 14.977h2.375V16h-3.727v-.422c0-.286.048-.543.145-.77a2.51 2.51 0 0 1 .363-.613c.146-.182.305-.342.477-.48.174-.14.34-.267.496-.38.164-.116.307-.228.43-.335.124-.107.229-.212.312-.316.086-.107.15-.214.191-.32a.97.97 0 0 0 .063-.348c0-.24-.068-.42-.203-.543-.136-.123-.343-.184-.621-.184-.482 0-.943.191-1.383.574v-1.086a2.968 2.968 0 0 1 1.648-.472c.284 0 .538.037.762.113.226.073.418.178.574.316.156.138.275.306.356.504.083.196.125.414.125.657 0 .257-.04.487-.122.687a2.04 2.04 0 0 1-.316.547c-.13.164-.281.315-.453.453-.172.135-.35.267-.535.395-.125.088-.246.177-.363.265a3.16 3.16 0 0 0-.305.258 1.35 1.35 0 0 0-.211.246.428.428 0 0 0-.078.23Z" fill="#0061CE"/></g><defs><clipPath id="docx-caa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_draw_table_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cba)"><g clip-path="url(#docx-cbb)"><path d="m8.5 5.5 4.293-4.293a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414L10.5 7.5m-2-2-1 1v2h2l1-1m-2-2 2 2" stroke="#0061CE" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.75 3H5v4h1v1H5v3h5v-1l1-1v2h3V8h-1.875l1.125-1H14v-.667l1-.889V13.5c0 .65-.197 1.257-.54 1.714-.342.457-.853.786-1.46.786H2.5A2.5 2.5 0 0 1 0 13.5V5c0-1.547 1.02-3 2.5-3h7.35l-1.1 1ZM1 13.5A1.5 1.5 0 0 0 2.5 15H4v-3H1v1.5ZM5 15h5v-3H5v3Zm6 0h2c.222 0 .46-.118.661-.386.2-.267.339-.66.339-1.114V12h-3v3ZM1 11h3V8H1v3Zm1.5-8C1.77 3 1 3.786 1 5v2h3V3H2.5Z" fill="#333"/></g></g><defs><clipPath id="docx-cba"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath><clipPath id="docx-cbb"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_fill_color_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cfa)"><path d="m11 13.5-5.5 2" stroke="red" stroke-linecap="round"/><rect x="1.25" y="13.25" width="13.5" height="2.5" rx=".75" stroke="#C7CCD9" stroke-width=".5"/><path d="m7 7 3 1.5M7 7l-.665-.498a2 2 0 0 1-.589-2.495L7.5.5M7 7l-2.5 4.5h4l1.5-3m0 0 .498.15a2 2 0 0 0 2.317-.934L13.5 6.5" stroke="#333" stroke-linecap="round"/></g><defs><clipPath id="docx-cfa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_fill_color_16__clip_cell-1" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cea)"><path d="m7 7 3 1.5M7 7l-.665-.498a2 2 0 0 1-.589-2.495L7.5.5M7 7l-2.5 4.5h4l1.5-3m0 0 .498.15a2 2 0 0 0 2.317-.934L13.5 6.5" stroke="#333" stroke-linecap="round"/></g><defs><clipPath id="docx-cea"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_word_geshishua_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cma)"><path d="M11.04 6.955c-.904-.349-1.54-1.175-1.54-2.14C9.5 3.538 10.62 2.5 12 2.5s2.5 1.037 2.5 2.316c0 1.008-.529 1.821-1.5 2.139M4.5 11.5s1 3 .04 5c-.474.988-1.466 2.22-2.349 3.215-.595.67-.128 1.785.769 1.785h13.257c.517 0 1.037-.095 1.446-.413.765-.595 1.964-1.929 2.305-4.587.513-4-.468-5-.468-5" stroke="#333"/><path d="M10.5 6.5a.5.5 0 0 1 .5.5v2H3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H7v1H3.5A1.5 1.5 0 0 1 2 10.5v-1A1.5 1.5 0 0 1 3.5 8H10V7a.5.5 0 0 1 .5-.5Zm3 0a.5.5 0 0 1 .5.5v1h6.5A1.5 1.5 0 0 1 22 9.5v1a1.5 1.5 0 0 1-1.5 1.5H17v-1h3.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H13V7a.5.5 0 0 1 .5-.5Z" fill="#333"/><path d="M15 16s.5 1.625-1 3.5-2.5 2-2.5 2" stroke="#666" stroke-linecap="round"/><path d="M15 16s.5 1.625-1 3.5-2.5 2-2.5 2" stroke="#000" stroke-opacity=".2" stroke-linecap="round"/><path d="M15 16s.5 1.625-1 3.5-2.5 2-2.5 2" stroke="#000" stroke-opacity=".2" stroke-linecap="round"/><path d="M15 16s.5 1.625-1 3.5-2.5 2-2.5 2" stroke="#000" stroke-opacity=".2" stroke-linecap="round"/><path d="M15 16s.5 1.625-1 3.5-2.5 2-2.5 2" stroke="#000" stroke-opacity=".2" stroke-linecap="round"/><path stroke="#0061CE" d="M8 11.5h8"/></g><defs><clipPath id="docx-cma"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_justify_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cra)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5h-12M13.5 8.5h-12M13.5 13.5h-12"/></g><defs><clipPath id="docx-cra"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_line_border_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-csa)"><rect x=".5" y=".5" width="14" height="15" rx="1.5" stroke="#333"/><rect x="3.5" y="3.5" width="8" height="9" rx="1.5" stroke="#0061CE"/></g><defs><clipPath id="docx-csa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_line_spacing_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cta)" stroke-linecap="round"><path d="M13.5 13.5h-6M13.5 8.5h-6M13.5 3.5h-6" stroke="#333" stroke-linejoin="round"/><path d="m5.5 3.5-2-2-2 2M5.5 12.5l-2 2-2-2M3.5 13.5v-11" stroke="#0061CE"/></g><defs><clipPath id="docx-cta"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_list_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cua)" stroke="#333"><path d="M5.5 7.5h8M5.5 12.5h8M5.5 2.5h8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="2.5" cy="2.5" r="1"/><circle cx="2.5" cy="7.5" r="1"/><circle cx="2.5" cy="12.5" r="1"/></g><defs><clipPath id="docx-cua"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_number_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cva)"><path d="M6.5 7.5h8M6.5 12.5h8M6.5 2.5h8" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.143 11c.472 0 .857.308.857.688v1.718c0 .38-.385.688-.857.688H2.107c-.059 0-.107-.039-.107-.086v-.516c0-.047.048-.086.107-.086H3.93c.118 0 .214-.077.214-.172v-.171c0-.095-.096-.172-.214-.172H2.107c-.059 0-.107-.039-.107-.086v-.516c0-.047.048-.086.107-.086H3.93c.118 0 .214-.077.214-.172v-.172c0-.094-.096-.171-.214-.171H2.107c-.059 0-.107-.04-.107-.086v-.516c0-.047.048-.086.107-.086h2.036Zm0-5c.472 0 .857.308.857.688v.515c0 .38-.385.688-.857.688H3.07c-.118 0-.214.077-.214.171v.172c0 .095.096.172.214.172h1.822c.059 0 .107.039.107.086v.516c0 .047-.048.086-.107.086H2.857c-.472 0-.857-.309-.857-.688v-.515c0-.38.385-.688.857-.688H3.93c.118 0 .214-.077.214-.172V6.86c0-.094-.096-.171-.214-.171H2.107c-.059 0-.107-.04-.107-.086v-.516C2 6.039 2.048 6 2.107 6h2.036ZM3.07.906c.473 0 .858.309.858.688v2.32c0 .047-.049.086-.108.086H3.18c-.06 0-.108-.039-.108-.086V1.766c0-.095-.096-.172-.214-.172h-.536c-.059 0-.107-.039-.107-.086V.992c0-.047.048-.086.107-.086h.75Z" fill="#333"/><path d="M4.143 11c.472 0 .857.308.857.688v1.718c0 .38-.385.688-.857.688H2.107c-.059 0-.107-.039-.107-.086v-.516c0-.047.048-.086.107-.086H3.93c.118 0 .214-.077.214-.172v-.171c0-.095-.096-.172-.214-.172H2.107c-.059 0-.107-.039-.107-.086v-.516c0-.047.048-.086.107-.086H3.93c.118 0 .214-.077.214-.172v-.172c0-.094-.096-.171-.214-.171H2.107c-.059 0-.107-.04-.107-.086v-.516c0-.047.048-.086.107-.086h2.036Zm0-5c.472 0 .857.308.857.688v.515c0 .38-.385.688-.857.688H3.07c-.118 0-.214.077-.214.171v.172c0 .095.096.172.214.172h1.822c.059 0 .107.039.107.086v.516c0 .047-.048.086-.107.086H2.857c-.472 0-.857-.309-.857-.688v-.515c0-.38.385-.688.857-.688H3.93c.118 0 .214-.077.214-.172V6.86c0-.094-.096-.171-.214-.171H2.107c-.059 0-.107-.04-.107-.086v-.516C2 6.039 2.048 6 2.107 6h2.036ZM3.07.906c.473 0 .858.309.858.688v2.32c0 .047-.049.086-.108.086H3.18c-.06 0-.108-.039-.108-.086V1.766c0-.095-.096-.172-.214-.172h-.536c-.059 0-.107-.039-.107-.086V.992c0-.047.048-.086.107-.086h.75Z" stroke="#333"/></g><defs><clipPath id="docx-cva"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_paragraph_mark_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-daa)" stroke="#333" stroke-linecap="round"><path d="m4.5 2.5-3 3 3 3M11.5 8.5l3 3-3 3"/><path d="M13.5 1.5v2a2 2 0 0 1-2 2H2M13.5 11.5h-11"/></g><defs><clipPath id="docx-daa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_paragraph_mark_16__clip_cell-1" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-cza)" stroke="#333" stroke-linecap="round"><path d="m4.5 2.5-3 3 3 3M11.5 8.5l3 3-3 3"/><path d="M13.5 1.5v2a2 2 0 0 1-2 2H2M13.5 11.5h-11"/></g><defs><clipPath id="docx-cza"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_word_past_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dba)"><path d="M5.5 4.5h.8a2 2 0 0 1 2-2h3.4a2 2 0 0 1 2 2h.8a2 2 0 0 1 2 2v3h-3a2 2 0 0 0-2 2v8h-6a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2Z" fill="#E6F6FF"/><path d="M6.3 4.5h-.8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h6v-8a2 2 0 0 1 2-2h3v-3a2 2 0 0 0-2-2h-.8m-7.4 0c0 .43.348.778.778.778h5.844c.43 0 .778-.348.778-.778m-7.4 0a2 2 0 0 1 2-2h3.4a2 2 0 0 1 2 2" stroke="#0061CE" stroke-linecap="round" stroke-linejoin="round"/><path d="m21.5 12.5-3-3h-5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7Zm-3-3v3h3" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="docx-dba"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_right_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dda)"><path d="m4.5 9.5 3 2 6-7" stroke="#333" stroke-linecap="round"/></g><defs><clipPath id="docx-dda"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 24 24" id="docx-icon-Ribbon_word_search_24__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dea)"><circle cx="11.5" cy="11.5" r="9" fill="#E6F6FF" stroke="#0061CE"/><path d="m18 18 3.5 3.5" stroke="#333" stroke-linecap="round"/></g><defs><clipPath id="docx-dea"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_strikethrough_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dfa)"><path d="M2.5 8.5h11" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.96 14.694a.5.5 0 0 1-.921-.389L3.86 10h1.087l-1.986 4.694Zm11-.389a.5.5 0 0 1-.921.39L11.053 10h1.087l1.82 4.305ZM8 1c.2 0 .383.12.46.305L10.87 7H9.784L8 2.783 6.216 7H5.13l2.409-5.695A.502.502 0 0 1 7.999 1Z" fill="#333"/></g><defs><clipPath id="docx-dfa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_text_a_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dga)"><path d="m.5 14.5 4-12 4 12M2.5 9.5h4" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5 6.5s1.625.5 2 2 0 3 0 4.5 1 1.5 1 1.5" stroke="#0061CE" stroke-linecap="round"/><path d="M12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" stroke="#0061CE"/></g><defs><clipPath id="docx-dga"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_text_add_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dha)" stroke-linecap="round"><path d="M.5 15.5 6 2.5l5.5 13M3.5 9.5h5" stroke="#333" stroke-linejoin="round"/><path stroke="#0061CE" d="M9.5 3.5h6M12.5 6.5v-6"/></g><defs><clipPath id="docx-dha"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_text_color_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dia)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 11.5 8 1.5l4.5 10M5.5 7.5h5"/></g><defs><clipPath id="docx-dia"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_text_jian_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dja)" stroke-linecap="round"><path d="M.5 15.5 6 2.5l5.5 13M3.5 9.5h5" stroke="#333" stroke-linejoin="round"/><path stroke="#0061CE" d="M9.5 3.5h6"/></g><defs><clipPath id="docx-dja"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_underline_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dka)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 2.5v5a4 4 0 1 0 8 0v-5M3.5 14.5h10"/></g><defs><clipPath id="docx-dka"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_up2_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dma)"><path d="m.5 2.5 10 11M10.5 2.5l-10 11" stroke="#000" stroke-linecap="round"/><path d="M13.676 4.977h2.375V6h-3.727v-.422c0-.286.048-.543.145-.77a2.51 2.51 0 0 1 .363-.613c.146-.182.305-.342.477-.48.174-.14.34-.267.496-.38.164-.116.307-.228.43-.335.124-.107.229-.212.312-.316.086-.107.15-.214.191-.32a.97.97 0 0 0 .063-.348c0-.24-.068-.42-.203-.543-.136-.123-.343-.184-.621-.184-.482 0-.943.191-1.383.574V.777a2.968 2.968 0 0 1 1.648-.472c.284 0 .538.037.762.113.226.073.418.178.574.316.156.138.275.306.356.504.083.196.125.414.125.657 0 .257-.04.487-.122.687a2.04 2.04 0 0 1-.316.547 2.87 2.87 0 0 1-.453.453c-.172.135-.35.267-.535.395-.125.088-.246.177-.363.265a3.16 3.16 0 0 0-.305.258 1.35 1.35 0 0 0-.211.246.428.428 0 0 0-.078.23Z" fill="#0061CE"/></g><defs><clipPath id="docx-dma"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-Ribbon_word_view_table_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dna)"><path d="M2 .5h11A1.5 1.5 0 0 1 14.5 2v12a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 14V2A1.5 1.5 0 0 1 2 .5Z" stroke="#333"/><path stroke="#0061CE" d="M1 5.5h13M4.5 15V1M10.5 15V1M1 10.5h13"/></g><defs><clipPath id="docx-dna"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 10 10" id="docx-icon-Status_bar_add_10__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-doa)"><path d="M8 6a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2h7Z" fill="#666"/><path d="M8 6a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2h7Z" fill="#000" fill-opacity=".2"/><path d="M8 6a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2h7Z" fill="#000" fill-opacity=".2"/><path d="M8 6a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2h7Z" fill="#000" fill-opacity=".2"/><path d="M8 6a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2h7Z" fill="#000" fill-opacity=".2"/><path d="M5.5 1.5a1 1 0 0 0-2 0v7a1 1 0 1 0 2 0v-7Z" fill="#666"/><path d="M5.5 1.5a1 1 0 0 0-2 0v7a1 1 0 1 0 2 0v-7Z" fill="#000" fill-opacity=".2"/><path d="M5.5 1.5a1 1 0 0 0-2 0v7a1 1 0 1 0 2 0v-7Z" fill="#000" fill-opacity=".2"/><path d="M5.5 1.5a1 1 0 0 0-2 0v7a1 1 0 1 0 2 0v-7Z" fill="#000" fill-opacity=".2"/><path d="M5.5 1.5a1 1 0 0 0-2 0v7a1 1 0 1 0 2 0v-7Z" fill="#000" fill-opacity=".2"/></g><defs><clipPath id="docx-doa"><path fill="#fff" d="M0 0h10v10H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 10 10" id="docx-icon-Status_bar_minus_10__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dpa)"><path d="M7 6a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2h4Z" fill="#666"/><path d="M7 6a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2h4Z" fill="#000" fill-opacity=".2"/><path d="M7 6a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2h4Z" fill="#000" fill-opacity=".2"/><path d="M7 6a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2h4Z" fill="#000" fill-opacity=".2"/><path d="M7 6a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2h4Z" fill="#000" fill-opacity=".2"/></g><defs><clipPath id="docx-dpa"><path fill="#fff" d="M0 0h10v10H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-TopQuickToolbar_Redo_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dua)"><path d="m11.499 4.5 2-2-2-2m2 2h-5.5a6.5 6.5 0 0 0 0 13h4.5" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="docx-dua"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-TopQuickToolbar_Undo_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dva)"><path d="m2.499 4.5-2-2 2-2m-2 2h5.5a6.5 6.5 0 0 1 0 13h-4.5" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="docx-dva"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 8 8" id="docx-icon-arrow" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 1.5v5M6.496 6.503 1.5 1.5M1.5 6.5h5" stroke="#ACACAC" stroke-linecap="round"/></symbol><symbol fill="none" viewBox="0 0 159 3" id="docx-icon-line" xmlns="http://www.w3.org/2000/svg"><path d="M3 0v3H0V0h3ZM9 0v3H6V0h3ZM15 0v3h-3V0h3ZM21 0v3h-3V0h3ZM27 0v3h-3V0h3ZM33 0v3h-3V0h3ZM39 0v3h-3V0h3ZM45 0v3h-3V0h3ZM51 0v3h-3V0h3ZM57 0v3h-3V0h3ZM63 0v3h-3V0h3ZM69 0v3h-3V0h3ZM75 0v3h-3V0h3ZM81 0v3h-3V0h3ZM87 0v3h-3V0h3ZM93 0v3h-3V0h3ZM99 0v3h-3V0h3ZM105 0v3h-3V0h3ZM111 0v3h-3V0h3ZM117 0v3h-3V0h3ZM123 0v3h-3V0h3ZM129 0v3h-3V0h3ZM135 0v3h-3V0h3ZM141 0v3h-3V0h3ZM147 0v3h-3V0h3ZM153 0v3h-3V0h3ZM159 0v3h-3V0h3Z" fill="#000"/></symbol><symbol fill="none" viewBox="0 0 154 1" id="docx-icon-line-1" xmlns="http://www.w3.org/2000/svg"><path d="M10 0v1H0V0h10ZM28 0v1H18V0h10ZM46 0v1H36V0h10ZM64 0v1H54V0h10ZM82 0v1H72V0h10ZM100 0v1H90V0h10ZM118 0v1h-10V0h10ZM136 0v1h-10V0h10ZM154 0v1h-10V0h10Z" fill="#000"/></symbol><symbol fill="none" viewBox="0 0 154 2" id="docx-icon-line-2" xmlns="http://www.w3.org/2000/svg"><path d="M10 0v2H0V0h10ZM28 0v2H18V0h10ZM46 0v2H36V0h10ZM64 0v2H54V0h10ZM82 0v2H72V0h10ZM100 0v2H90V0h10ZM118 0v2h-10V0h10ZM136 0v2h-10V0h10ZM154 0v2h-10V0h10Z" fill="#000"/></symbol><symbol fill="none" viewBox="0 0 159 1" id="docx-icon-line-3" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M0 0h24v1H0zM45 0h24v1H45zM90 0h24v1H90zM135 0h24v1h-24z"/></symbol><symbol fill="none" viewBox="0 0 160 1" id="docx-icon-line-4" xmlns="http://www.w3.org/2000/svg"><path d="M10 0v1H0V0h10ZM18 0v1h-4V0h4ZM32 0v1H22V0h10ZM40 0v1h-4V0h4ZM54 0v1H44V0h10ZM62 0v1h-4V0h4ZM76 0v1H66V0h10ZM84 0v1h-4V0h4ZM98 0v1H88V0h10ZM106 0v1h-4V0h4ZM120 0v1h-10V0h10ZM128 0v1h-4V0h4ZM142 0v1h-10V0h10ZM150 0v1h-4V0h4ZM160 0v1h-6V0h6Z" fill="#000"/></symbol><symbol fill="none" viewBox="0 0 158 1" id="docx-icon-line-5" xmlns="http://www.w3.org/2000/svg"><path d="M10 0v1H0V0h10ZM15 0v1h-2V0h2ZM20 0v1h-2V0h2ZM33 0v1H23V0h10ZM38 0v1h-2V0h2ZM43 0v1h-2V0h2ZM56 0v1H46V0h10ZM61 0v1h-2V0h2ZM66 0v1h-2V0h2ZM79 0v1H69V0h10ZM84 0v1h-2V0h2ZM89 0v1h-2V0h2ZM102 0v1H92V0h10ZM107 0v1h-2V0h2ZM112 0v1h-2V0h2ZM125 0v1h-10V0h10ZM130 0v1h-2V0h2ZM135 0v1h-2V0h2ZM148 0v1h-10V0h10ZM153 0v1h-2V0h2ZM158 0v1h-2V0h2Z" fill="#000"/></symbol><symbol fill="none" viewBox="0 0 160 2" id="docx-icon-line__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-awa)"><path d="M160 0v1.333H0V0h160Z" fill="#000"/></g><defs><clipPath id="docx-awa"><path fill="#fff" d="M0 0h160v2H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 160 2" id="docx-icon-line__clip_cell-1" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-aia)"><path d="M160 0v1H0V0h160Z" fill="#000"/></g><defs><clipPath id="docx-aia"><path fill="#fff" d="M0 0h160v2H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 158 2" id="docx-icon-line__clip_cell-10" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-aja)" fill="#000"><path d="M10 0v2H0V0h10ZM15 0v2h-2V0h2ZM20 0v2h-2V0h2ZM33 0v2H23V0h10ZM38 0v2h-2V0h2ZM43 0v2h-2V0h2ZM56 0v2H46V0h10ZM61 0v2h-2V0h2ZM66 0v2h-2V0h2ZM79 0v2H69V0h10ZM84 0v2h-2V0h2ZM89 0v2h-2V0h2ZM102 0v2H92V0h10ZM107 0v2h-2V0h2ZM112 0v2h-2V0h2ZM125 0v2h-10V0h10ZM130 0v2h-2V0h2ZM135 0v2h-2V0h2ZM148 0v2h-10V0h10ZM153 0v2h-2V0h2ZM158 0v2h-2V0h2Z"/></g><defs><clipPath id="docx-aja"><path fill="#fff" d="M0 0h158v2H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 159 2" id="docx-icon-line__clip_cell-11" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-aka)"><path d="M3.193 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42C7.272.331 7.78 0 8.506 0c.73 0 1.227.334 1.604.581.388.253.658.419 1.057.419.4 0 .673-.166 1.065-.42.38-.246.88-.58 1.608-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581C9.176 1.166 8.906 1 8.506 1c-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C1.058.413 2.092.023 3.162 0h.031Z" fill="#000"/><path d="M19.033 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.064.42-.38.246-.88.58-1.609.58-.73 0-1.226-.335-1.603-.581-.389-.253-.658-.419-1.058-.419-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C16.898.413 17.932.023 19.002 0h.031Z" fill="#000"/><path d="M34.873 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C32.738.413 33.772.023 34.842 0h.031Z" fill="#000"/><path d="M50.713 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.065-.42.38-.246.88-.58 1.608-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581-.389-.253-.658-.419-1.058-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.353.89a.5.5 0 0 1-.625-.782C48.578.413 49.612.023 50.681 0h.031Z" fill="#000"/><path d="M66.553 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.201-.345-1.545-.596C77.814 1.155 77.588 1 77.2 1c-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581-.389-.253-.659-.419-1.058-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.626-.782C64.42.413 65.453.023 66.522 0h.031Z" fill="#000"/><path d="M82.393 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.385-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.626-.782C80.26.413 81.293.023 82.362 0h.031Z" fill="#000"/><path d="M98.233 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.381-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782C96.1.413 97.132.023 98.202 0h.031Z" fill="#000"/><path d="M114.073 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z" fill="#000"/><path d="M129.913 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z" fill="#000"/><path d="M145.753 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.342-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.871-.696 1.905-1.086 2.975-1.109h.031Z" fill="#000"/><path d="M3.193 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42C7.272.331 7.78 0 8.506 0c.73 0 1.227.334 1.604.581.388.253.658.419 1.057.419.4 0 .673-.166 1.065-.42.38-.246.88-.58 1.608-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581C9.176 1.166 8.906 1 8.506 1c-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C1.058.413 2.092.023 3.162 0h.031Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.033 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.064.42-.38.246-.88.58-1.609.58-.73 0-1.226-.335-1.603-.581-.389-.253-.658-.419-1.058-.419-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C16.898.413 17.932.023 19.002 0h.031Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M34.873 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C32.738.413 33.772.023 34.842 0h.031Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M50.713 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.065-.42.38-.246.88-.58 1.608-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581-.389-.253-.658-.419-1.058-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.353.89a.5.5 0 0 1-.625-.782C48.578.413 49.612.023 50.681 0h.031Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M66.553 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.201-.345-1.545-.596C77.814 1.155 77.588 1 77.2 1c-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581-.389-.253-.659-.419-1.058-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.626-.782C64.42.413 65.453.023 66.522 0h.031Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M82.393 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.385-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.626-.782C80.26.413 81.293.023 82.362 0h.031Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M98.233 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.381-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782C96.1.413 97.132.023 98.202 0h.031Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M114.073 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M129.913 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M145.753 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.342-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.871-.696 1.905-1.086 2.975-1.109h.031Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="docx-aka"><path fill="#fff" d="M0 0h159v2H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 159 4" id="docx-icon-line__clip_cell-12" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-ala)"><g clip-path="url(#docx-alb)" fill="#000"><path d="M3.193 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42C7.272.331 7.78 0 8.506 0c.73 0 1.227.334 1.604.581.388.253.658.419 1.057.419.4 0 .673-.166 1.065-.42.38-.246.88-.58 1.608-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581C9.176 1.166 8.906 1 8.506 1c-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C1.058.413 2.092.023 3.162 0h.031Z"/><path d="M19.033 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.064.42-.38.246-.88.58-1.609.58-.73 0-1.226-.335-1.603-.581-.389-.253-.658-.419-1.058-.419-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C16.898.413 17.932.023 19.002 0h.031Z"/><path d="M34.873 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C32.738.413 33.772.023 34.842 0h.031Z"/><path d="M50.713 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.065-.42.38-.246.88-.58 1.608-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581-.389-.253-.658-.419-1.058-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.353.89a.5.5 0 0 1-.625-.782C48.578.413 49.612.023 50.681 0h.031Z"/><path d="M66.553 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.201-.345-1.545-.596C77.814 1.155 77.588 1 77.2 1c-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581-.389-.253-.659-.419-1.058-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.626-.782C64.42.413 65.453.023 66.522 0h.031Z"/><path d="M82.393 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.385-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.626-.782C80.26.413 81.293.023 82.362 0h.031Z"/><path d="M98.233 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.381-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782C96.1.413 97.132.023 98.202 0h.031Z"/><path d="M114.073 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z"/><path d="M129.913 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z"/><path d="M145.753 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.342-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.871-.696 1.905-1.086 2.975-1.109h.031ZM3.193 2c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.894-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.658.419 1.057.419.4 0 .673-.166 1.065-.42.38-.246.88-.58 1.608-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581C9.176 3.166 8.906 3 8.506 3c-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C1.058 2.413 2.092 2.023 3.162 2h.031Z"/><path d="M19.033 2c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.064.42-.38.246-.88.58-1.609.58-.73 0-1.226-.335-1.603-.581-.389-.253-.658-.419-1.058-.419-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782c.87-.696 1.904-1.086 2.974-1.109h.031Z"/><path d="M34.873 2c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782c.87-.696 1.904-1.086 2.974-1.109h.031Z"/><path d="M50.713 2c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.065-.42.38-.246.88-.58 1.608-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581-.389-.253-.658-.419-1.058-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.353.89a.5.5 0 0 1-.625-.782c.87-.696 1.904-1.086 2.974-1.109h.031Z"/><path d="M66.553 2c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.201-.345-1.545-.596C77.814 3.155 77.588 3 77.2 3c-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581-.389-.253-.659-.419-1.058-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.626-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z"/><path d="M82.393 2c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.385-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.626-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z"/><path d="M98.233 2c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.381-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782C96.1 2.413 97.132 2.023 98.202 2h.031Z"/><path d="M114.073 2c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z"/><path d="M129.913 2c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z"/><path d="M145.753 2c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.342-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.871-.696 1.905-1.086 2.975-1.109h.031Z"/></g></g><defs><clipPath id="docx-ala"><path fill="#fff" d="M0 0h159v4H0z"/></clipPath><clipPath id="docx-alb"><path fill="#fff" d="M0 0h159v4H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 160 3" id="docx-icon-line__clip_cell-13" xmlns="http://www.w3.org/2000/svg"><path d="M160 0v1H0V0h160ZM160 2v1H0V2h160Z" fill="#000"/></symbol><symbol fill="none" viewBox="0 0 161 4" id="docx-icon-line__clip_cell-14" xmlns="http://www.w3.org/2000/svg"><path d="M3.943.75c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.065-.42.38-.246.88-.58 1.608-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C1.808 1.163 2.842.773 3.912.75h.031Z" fill="#000"/><path d="M19.783.75c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.387-.253-.657-.419-1.057-.419-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782C17.65 1.163 18.683.773 19.753.75h.031Z" fill="#000"/><path d="M35.623.75c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.626-.782C33.49 1.163 34.523.773 35.593.75h.031Z" fill="#000"/><path d="M51.463.75c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.385-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782C49.33 1.163 50.362.773 51.432.75h.031Z" fill="#000"/><path d="M67.303.75c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.385-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.34.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782C65.17 1.163 66.202.773 67.272.75h.031Z" fill="#000"/><path d="M83.143.75c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.385-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.34.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782C81.01 1.163 82.042.773 83.112.75h.031Z" fill="#000"/><path d="M98.983.75c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.871-.696 1.905-1.086 2.975-1.109h.031Z" fill="#000"/><path d="M114.823.75c.773.03 1.264.35 1.646.6.379.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.342-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.871-.696 1.905-1.086 2.975-1.109h.031Z" fill="#000"/><path d="M130.663.75c.773.03 1.264.35 1.646.6.379.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.742 0-1.201-.345-1.545-.596-.342-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.359-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.871-.696 1.905-1.086 2.975-1.109h.031Z" fill="#000"/><path d="M146.503.75c.773.03 1.264.35 1.646.6.379.25.615.4.994.4.38 0 .651-.164 1.052-.42.386-.248.894-.58 1.621-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.566.404.955.404a.5.5 0 0 1 0 1c-.742 0-1.201-.345-1.545-.596-.342-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.359-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.871-.696 1.905-1.086 2.975-1.109h.031Z" fill="#000"/><path d="M160.899 2.25c0 .69-.559 1.25-1.25 1.25-1.005 0-1.638-.486-1.986-.74a2.29 2.29 0 0 0-.34-.224.362.362 0 0 0-.174-.036c-.152 0-.253.039-.656.3-.374.242-1.043.7-2.017.7-.975 0-1.642-.46-2.013-.703-.398-.26-.497-.297-.648-.297-.158 0-.272.044-.676.303-.364.233-1.039.697-1.996.697-.962 0-1.602-.455-1.955-.687-.33-.216-.478-.295-.717-.311-.649.022-1.301.262-1.88.725-.018.014-.038.026-.056.039l-.034.024a1.038 1.038 0 0 1-.059.036 1.205 1.205 0 0 1-.241.11l-.032.01-.068.018c-.018.004-.036.01-.054.013l-.084.012-.032.004a1.287 1.287 0 0 1-.094.005l-.028.002-.009-.001-.026-.001c-.984-.011-1.607-.487-1.951-.738a2.29 2.29 0 0 0-.34-.224.359.359 0 0 0-.174-.036c-.152 0-.253.039-.656.3-.373.242-1.043.7-2.016.7-.976 0-1.643-.46-2.014-.703-.398-.26-.496-.297-.647-.297-.159 0-.273.044-.677.303-.364.233-1.039.697-1.996.697-.962 0-1.602-.455-1.954-.687-.331-.216-.478-.295-.718-.311-.649.022-1.301.262-1.88.725-.014.011-.03.02-.045.03-.017.013-.033.026-.051.037l-.041.025a1.111 1.111 0 0 1-.253.117l-.032.01a1.287 1.287 0 0 1-.068.018c-.018.004-.036.01-.054.013l-.084.012-.032.004a1.26 1.26 0 0 1-.093.005l-.028.002-.01-.001-.026-.001c-.985-.011-1.608-.487-1.952-.738a2.318 2.318 0 0 0-.339-.224.342.342 0 0 0-.075-.026l-.098-.01c-.153 0-.253.039-.657.3-.373.242-1.043.7-2.016.7-.976 0-1.642-.46-2.014-.703-.398-.26-.496-.297-.647-.297-.159 0-.273.044-.677.303-.364.233-1.038.697-1.996.697-.962 0-1.602-.455-1.954-.687-.331-.216-.478-.295-.718-.311-.649.022-1.301.262-1.88.725l-.045.03c-.017.013-.033.026-.051.037l-.041.025a1.118 1.118 0 0 1-.145.076l-.018.007a1.159 1.159 0 0 1-.086.032l-.036.012c-.022.007-.045.012-.068.018-.018.004-.036.01-.054.013l-.084.012-.032.004a1.26 1.26 0 0 1-.093.005l-.028.002-.01-.001-.026-.001c-.985-.011-1.608-.487-1.951-.738a2.43 2.43 0 0 0-.339-.224.364.364 0 0 0-.174-.036c-.153 0-.254.038-.657.3-.374.242-1.043.7-2.016.7-.976 0-1.642-.46-2.014-.703-.299-.195-.429-.265-.539-.287l-.108-.01c-.159 0-.273.044-.677.303-.364.233-1.038.697-1.996.697-.962 0-1.601-.455-1.954-.687-.33-.216-.478-.295-.718-.311-.649.022-1.301.262-1.88.725l-.02.013a1.248 1.248 0 0 1-.125.084c-.018.01-.035.021-.053.03a1.238 1.238 0 0 1-.084.04l-.018.008a1.24 1.24 0 0 1-.093.035l-.026.008c-.024.008-.05.014-.074.02l-.05.012-.085.012-.032.004a1.254 1.254 0 0 1-.093.005l-.028.002-.01-.001-.026-.001c-.984-.011-1.608-.487-1.951-.738a2.358 2.358 0 0 0-.34-.224.362.362 0 0 0-.173-.036c-.153 0-.254.038-.657.3-.374.242-1.043.7-2.016.7-.976 0-1.642-.46-2.014-.703-.398-.26-.496-.297-.647-.297-.159 0-.272.044-.677.303-.364.233-1.038.697-1.996.697-.962 0-1.601-.455-1.954-.687-.33-.216-.478-.295-.718-.311-.649.022-1.301.262-1.88.725l-.02.013a1.25 1.25 0 0 1-.125.084c-.018.01-.035.021-.053.03a1.22 1.22 0 0 1-.084.04l-.017.008c-.03.013-.06.023-.09.033l-.034.011a1.213 1.213 0 0 1-.209.043l-.028.004a1.248 1.248 0 0 1-.093.005l-.028.002-.01-.001-.027-.001c-.984-.012-1.606-.488-1.95-.738a2.352 2.352 0 0 0-.34-.224.362.362 0 0 0-.173-.036c-.153 0-.254.038-.657.3-.374.242-1.043.7-2.016.7-.975 0-1.642-.46-2.013-.703-.398-.26-.497-.297-.648-.297-.158 0-.272.044-.677.303-.363.233-1.038.697-1.996.697-.962 0-1.601-.455-1.954-.687-.33-.216-.478-.295-.718-.311-.649.022-1.301.262-1.88.725l-.02.013a1.213 1.213 0 0 1-.125.084c-.017.01-.035.021-.053.03a1.243 1.243 0 0 1-.084.04l-.017.008c-.03.013-.06.023-.09.033l-.033.011-.069.018c-.018.004-.035.01-.053.013l-.088.012-.028.004a1.254 1.254 0 0 1-.093.005l-.028.002-.01-.001-.027-.001c-.984-.012-1.606-.488-1.95-.738a2.355 2.355 0 0 0-.339-.224.365.365 0 0 0-.175-.036c-.152 0-.253.039-.656.3-.373.242-1.042.7-2.016.7-.975 0-1.642-.46-2.013-.703-.398-.26-.497-.297-.648-.297-.158 0-.273.044-.677.303-.364.233-1.038.697-1.996.697-.961 0-1.602-.455-1.955-.687-.33-.216-.477-.295-.716-.311-.65.022-1.302.261-1.881.725l-.02.013a1.286 1.286 0 0 1-.129.086 1.238 1.238 0 0 1-.112.06l-.04.016a1.235 1.235 0 0 1-.087.033l-.034.011-.069.018c-.017.004-.035.01-.053.013l-.088.012-.027.004a1.249 1.249 0 0 1-.096.005l-.026.002-.01-.001-.026-.001c-.984-.011-1.607-.487-1.95-.738a2.343 2.343 0 0 0-.34-.224.363.363 0 0 0-.175-.036c-.152 0-.253.039-.656.3-.373.242-1.043.7-2.016.7-.976 0-1.643-.46-2.014-.703-.398-.26-.496-.297-.648-.297-.158 0-.272.044-.676.303-.364.233-1.039.697-1.996.697-.962 0-1.602-.455-1.954-.687-.33-.216-.478-.295-.718-.311-.65.022-1.301.262-1.88.725-.018.014-.038.026-.056.039l-.034.024c-.02.013-.039.025-.059.036a1.24 1.24 0 0 1-.241.11l-.032.01-.068.018c-.018.004-.036.01-.054.013l-.088.012-.027.004a1.257 1.257 0 0 1-.096.005l-.026.002-.01-.001-.026-.001c-.984-.011-1.607-.487-1.95-.738a2.34 2.34 0 0 0-.34-.224.362.362 0 0 0-.174-.036c-.153 0-.253.039-.657.3-.373.242-1.043.7-2.016.7-.976 0-1.642-.46-2.014-.703-.398-.26-.496-.297-.647-.297-.159 0-.273.044-.677.303-.364.233-1.039.697-1.996.697-.962 0-1.602-.455-1.954-.687-.33-.216-.478-.295-.718-.311-.649.022-1.3.262-1.88.725-.018.014-.037.026-.056.039l-.034.024-.058.036c-.017.01-.033.02-.05.028-.062.034-.126.06-.192.082l-.032.01-.068.018c-.018.004-.036.01-.054.013l-.084.012-.032.004a1.254 1.254 0 0 1-.093.005l-.028.002-.01-.001-.027-.001c-.984-.012-1.606-.488-1.95-.738a2.342 2.342 0 0 0-.34-.224.362.362 0 0 0-.173-.036c-.153 0-.253.039-.656.3-.374.242-1.043.7-2.017.7-.976 0-1.642-.46-2.014-.703-.398-.26-.496-.297-.647-.297-.159 0-.273.044-.677.303-.364.233-1.038.697-1.996.697-.962 0-1.601-.455-1.954-.687-.33-.216-.478-.295-.718-.311-.649.022-1.3.262-1.88.725A1.251 1.251 0 0 1 .47 1.273C1.46.481 2.65.027 3.896 0h.047l.03.001c.992.04 1.63.462 2.027.723.201.132.304.195.393.235a.419.419 0 0 0 .19.041c.131 0 .226-.033.648-.303C7.611.454 8.287 0 9.256 0l.18.005c.878.051 1.486.47 1.834.698.4.26.496.297.647.297l.11-.01c.112-.023.245-.094.547-.29.374-.242 1.043-.7 2.016-.7 1.005 0 1.64.486 1.987.74.109.08.184.13.242.167A5.601 5.601 0 0 1 19.736 0h.047l.03.001c.991.04 1.63.462 2.027.723.201.132.304.195.392.235a.42.42 0 0 0 .19.041c.132 0 .227-.033.65-.303C23.451.454 24.126 0 25.095 0c.975 0 1.642.46 2.014.703.399.26.496.297.647.297.153 0 .254-.039.657-.3.373-.242 1.042-.7 2.016-.7 1.005 0 1.639.486 1.987.74.109.08.184.13.242.167A5.602 5.602 0 0 1 35.576 0h.047l.03.001c.991.04 1.63.462 2.027.723.2.132.304.195.392.235a.42.42 0 0 0 .19.04c.132 0 .227-.032.65-.302C39.29.454 39.966 0 40.934 0c.976 0 1.643.46 2.015.703.399.26.496.297.647.297.152 0 .254-.039.657-.3.373-.242 1.042-.7 2.016-.7 1.004 0 1.639.486 1.987.74.108.08.184.13.242.167A5.602 5.602 0 0 1 51.416 0h.048l.03.001c.99.04 1.63.462 2.026.723.201.131.303.195.392.235a.422.422 0 0 0 .191.041c.131 0 .227-.033.649-.303C55.132.454 55.807 0 56.775 0c.976 0 1.643.46 2.015.703.398.26.496.296.646.296.153 0 .255-.038.658-.299.373-.242 1.043-.7 2.016-.7l.184.006c.899.054 1.476.496 1.803.734.109.08.184.13.243.167A5.601 5.601 0 0 1 67.256 0h.048l.029.001c.991.04 1.63.462 2.027.723.201.132.304.195.393.235a.42.42 0 0 0 .19.041c.131 0 .227-.033.649-.303C70.972.454 71.647 0 72.615 0c.976 0 1.644.46 2.016.703.398.26.495.296.645.296.153 0 .254-.038.657-.299.374-.242 1.043-.7 2.017-.7 1.005 0 1.638.486 1.986.74.11.08.185.13.244.167A5.601 5.601 0 0 1 83.096 0h.047l.03.001c.99.04 1.63.462 2.027.723.201.132.304.195.393.235a.42.42 0 0 0 .19.041c.131 0 .227-.033.649-.303C86.812.454 87.487 0 88.456 0c.976 0 1.643.46 2.015.703.398.26.495.297.646.297.153 0 .254-.039.656-.3.374-.242 1.043-.7 2.017-.7 1.005 0 1.638.486 1.986.74.11.08.185.13.243.167A5.603 5.603 0 0 1 98.936 0h.047l.03.001c.991.04 1.63.462 2.027.723.201.132.304.195.393.235a.415.415 0 0 0 .19.041l.098-.01c.101-.022.234-.09.55-.293.38-.243 1.056-.697 2.025-.697.976 0 1.643.46 2.014.703.399.26.496.297.647.297.153 0 .253-.039.656-.3.374-.242 1.043-.7 2.017-.7 1.005 0 1.638.486 1.986.74.109.08.185.13.243.167A5.606 5.606 0 0 1 114.776 0h.047l.03.001c.991.04 1.63.462 2.027.723.201.132.304.195.392.235a.422.422 0 0 0 .191.041c.131 0 .226-.033.648-.303.38-.243 1.056-.697 2.025-.697.976 0 1.642.46 2.014.703.399.26.496.297.647.297l.11-.01c.112-.023.244-.094.546-.29.374-.242 1.043-.7 2.017-.7 1.005 0 1.639.486 1.987.74.109.08.184.13.242.167A5.603 5.603 0 0 1 130.616 0h.047l.03.001c.991.04 1.629.462 2.027.723.201.132.304.195.392.235a.422.422 0 0 0 .191.041c.131 0 .226-.033.648-.303.38-.243 1.056-.697 2.025-.697l.179.005c.879.051 1.486.47 1.835.698.399.26.496.297.647.297l.11-.01c.112-.023.244-.094.547-.29.373-.242 1.042-.7 2.015-.7 1.005 0 1.64.486 1.988.74.108.08.184.13.242.167A5.6 5.6 0 0 1 146.456 0h.047l.03.001c.991.04 1.629.462 2.026.723.202.132.304.195.393.235a.423.423 0 0 0 .191.041c.131 0 .226-.033.648-.303.38-.243 1.056-.697 2.024-.697.976 0 1.643.46 2.015.703.399.26.496.297.646.297.153 0 .255-.039.658-.3.373-.242 1.042-.7 2.015-.7 1.005 0 1.64.486 1.988.74.179.131.265.189.339.224a.357.357 0 0 0 .173.036c.691 0 1.25.56 1.25 1.25Z" fill="#000"/></symbol><symbol fill="none" viewBox="0 0 160 4" id="docx-icon-line__clip_cell-2" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-aoa)"><path d="M160 0v3H0V0h160Z" fill="#000"/></g><defs><clipPath id="docx-aoa"><path fill="#fff" d="M0 0h160v4H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 160 2" id="docx-icon-line__clip_cell-3" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-apa)"><path d="M1 0v2H0V0h1Zm4 0v2H3V0h2Zm4 0v2H7V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm4 0v2h-2V0h2Zm3 0v2h-1V0h1Z" fill="#000"/></g><defs><clipPath id="docx-apa"><path fill="#fff" d="M0 0h160v2H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 156 2" id="docx-icon-line__clip_cell-4" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-aqa)" fill="#000"><path d="M6 0v2H0V0h6ZM16 0v2h-6V0h6ZM26 0v2h-6V0h6ZM36 0v2h-6V0h6ZM46 0v2h-6V0h6ZM56 0v2h-6V0h6ZM66 0v2h-6V0h6ZM76 0v2h-6V0h6ZM86 0v2h-6V0h6ZM96 0v2h-6V0h6ZM106 0v2h-6V0h6ZM116 0v2h-6V0h6ZM126 0v2h-6V0h6ZM136 0v2h-6V0h6ZM146 0v2h-6V0h6ZM156 0v2h-6V0h6Z"/></g><defs><clipPath id="docx-aqa"><path fill="#fff" d="M0 0h156v2H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 160 2" id="docx-icon-line__clip_cell-5" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-ara)" fill="#000"><path d="M10 0v2H0V0h10ZM18 0v2h-4V0h4ZM32 0v2H22V0h10ZM40 0v2h-4V0h4ZM54 0v2H44V0h10ZM62 0v2h-4V0h4ZM76 0v2H66V0h10ZM84 0v2h-4V0h4ZM98 0v2H88V0h10ZM106 0v2h-4V0h4ZM120 0v2h-10V0h10ZM128 0v2h-4V0h4ZM142 0v2h-10V0h10ZM150 0v2h-4V0h4ZM160 0v2h-6V0h6Z"/></g><defs><clipPath id="docx-ara"><path fill="#fff" d="M0 0h160v2H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 160 2" id="docx-icon-line__clip_cell-6" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-asa)" fill="#000"><path d="M10 0v2H0V0h10ZM18 0v2h-4V0h4ZM26 0v2h-4V0h4ZM40 0v2H30V0h10ZM48 0v2h-4V0h4ZM56 0v2h-4V0h4ZM70 0v2H60V0h10ZM78 0v2h-4V0h4ZM86 0v2h-4V0h4ZM100 0v2H90V0h10ZM108 0v2h-4V0h4ZM116 0v2h-4V0h4ZM130 0v2h-10V0h10ZM138 0v2h-4V0h4ZM146 0v2h-4V0h4ZM160 0v2h-10V0h10Z"/></g><defs><clipPath id="docx-asa"><path fill="#fff" d="M0 0h160v2H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 159 2" id="docx-icon-line__clip_cell-7" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-ata)" fill="#000"><path d="M3.193 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42C7.272.331 7.78 0 8.506 0c.73 0 1.227.334 1.604.581.388.253.658.419 1.057.419.4 0 .673-.166 1.065-.42.38-.246.88-.58 1.608-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581C9.176 1.166 8.906 1 8.506 1c-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C1.058.413 2.092.023 3.162 0h.031Z"/><path d="M19.033 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.064.42-.38.246-.88.58-1.609.58-.73 0-1.226-.335-1.603-.581-.389-.253-.658-.419-1.058-.419-.402 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C16.898.413 17.932.023 19.002 0h.031Z"/><path d="M34.873 0c.773.03 1.264.35 1.646.6.38.25.616.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.625-.782C32.738.413 33.772.023 34.842 0h.031Z"/><path d="M50.713 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.065-.42.38-.246.88-.58 1.608-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.2-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581-.389-.253-.658-.419-1.058-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.353.89a.5.5 0 0 1-.625-.782C48.578.413 49.612.023 50.681 0h.031Z"/><path d="M66.553 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.386-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 1 1 0 1c-.741 0-1.201-.345-1.545-.596C77.814 1.155 77.588 1 77.2 1c-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.603-.581-.389-.253-.659-.419-1.058-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.712 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.626-.782C64.42.413 65.453.023 66.522 0h.031Z"/><path d="M82.393 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .65-.164 1.053-.42.385-.248.893-.58 1.62-.58.73 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.74 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.4 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.657-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.647.325-2.353.89a.5.5 0 0 1-.626-.782C80.26.413 81.293.023 82.362 0h.031Z"/><path d="M98.233 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.381-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.83.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782C96.1.413 97.132.023 98.202 0h.031Z"/><path d="M114.073 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z"/><path d="M129.913 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.201.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.341-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.729 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.379.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.872-.696 1.905-1.086 2.975-1.109h.031Z"/><path d="M145.753 0c.773.03 1.264.35 1.646.6.38.25.615.4.994.4.38 0 .651-.164 1.053-.42.385-.248.893-.58 1.62-.58.729 0 1.227.334 1.604.581.388.253.657.419 1.057.419.4 0 .673-.166 1.064-.42.38-.246.88-.58 1.609-.58.741 0 1.2.345 1.545.596.341.249.567.404.955.404a.5.5 0 0 1 0 1c-.741 0-1.201-.345-1.545-.596-.342-.249-.567-.404-.955-.404-.401 0-.673.166-1.065.42-.38.246-.88.58-1.608.58-.73 0-1.226-.335-1.604-.581-.388-.253-.658-.419-1.057-.419-.403 0-.686.168-1.081.42-.38.244-.881.58-1.592.58-.713 0-1.18-.325-1.543-.563-.358-.235-.65-.414-1.124-.436-.831.022-1.648.325-2.354.89a.5.5 0 0 1-.625-.782c.871-.696 1.905-1.086 2.975-1.109h.031Z"/></g><defs><clipPath id="docx-ata"><path fill="#fff" d="M0 0h159v2H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 159 2" id="docx-icon-line__clip_cell-8" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-aua)" fill="#000"><path d="M0 0h24v2H0zM45 0h24v2H45zM90 0h24v2H90zM135 0h24v2h-24z"/></g><defs><clipPath id="docx-aua"><path fill="#fff" d="M0 0h159v2H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 160 3" id="docx-icon-line__clip_cell-9" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-ava)" fill="#000"><path d="M10 0v3H0V0h10ZM18 0v3h-4V0h4ZM32 0v3H22V0h10ZM40 0v3h-4V0h4ZM54 0v3H44V0h10ZM62 0v3h-4V0h4ZM76 0v3H66V0h10ZM84 0v3h-4V0h4ZM98 0v3H88V0h10ZM106 0v3h-4V0h4ZM120 0v3h-10V0h10ZM128 0v3h-4V0h4ZM142 0v3h-10V0h10ZM150 0v3h-4V0h4ZM160 0v3h-6V0h6Z"/></g><defs><clipPath id="docx-ava"><path fill="#fff" d="M0 0h160v3H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-other_arrow_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bda)" stroke="#fff" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12.667 3.333 8 8 3.333M12.667 8H3.333"/></g><defs><clipPath id="docx-bda"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 96 96" id="docx-icon-others_404_96__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bea)" stroke="#ACACAC" stroke-linecap="round" stroke-linejoin="round"><path d="M60 8H24a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V28L60 8Z" stroke-width="4"/><path d="M57 8v15a8 8 0 0 0 8 8h15" stroke-width="4"/><path d="M58 50 38 70M38 50l20 20" stroke-width="6"/></g><defs><clipPath id="docx-bea"><path fill="#fff" d="M0 0h96v96H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-ribbon_word_copy_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bva)" stroke-linecap="round"><path d="M6.5 8.5v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2Z" stroke="#333"/><path d="M9.5 4.5v-2a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2" stroke="#0061CE" stroke-linejoin="round"/></g><defs><clipPath id="docx-bva"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-ribbon_word_cut_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-bxa)"><circle cx="3.5" cy="12.5" r="3" stroke="#0061CE"/><circle cx="12.5" cy="12.5" r="3" stroke="#0061CE"/><path d="M13.873.833a.5.5 0 1 0-.746-.666L13.5.5l.373.333Zm-11-.666a.5.5 0 1 0-.746.666L2.5.5l.373-.333ZM5 10l.373.333 8.5-9.5L13.5.5l-.373-.333-8.5 9.5L5 10Zm6 0 .373-.333-8.5-9.5L2.5.5l-.373.333 8.5 9.5L11 10Z" fill="#333"/></g><defs><clipPath id="docx-bxa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-statusbar_align_width_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dqa)" stroke="#333" stroke-linecap="round"><path d="M2.5 8.5V1A.5.5 0 0 1 3 .5h10a.5.5 0 0 1 .5.5v7.5" stroke-linejoin="round"/><path d="m2.5 10.5-2 2 2 2M13.5 10.5l2 2-2 2M1.5 12.5h13"/><path d="M5.5 3.5h5m-5 3h3" stroke-linejoin="round"/></g><defs><clipPath id="docx-dqa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-statusbar_continuous_side_by_side_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dra)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 3.5h2m-2 3h2m-10 0h2m-4 8v-3h6v3m-4 0h2m4 0v-3h6v3m-4 0h2M.5.5h6v9h-6v-9Zm8 0h6v9h-6v-9ZM2.5 3.5h2"/></g><defs><clipPath id="docx-dra"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-statusbar_full_screen_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dsa)"><path d="m5.5 5.5-4-4m0 3v-3h3m10 3v-3h-3m3 0-4 4m0 5 4 4m-3 0h3v-3m-13 0v3h3m-3 0 4-4" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="docx-dsa"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 16 16" id="docx-icon-statusbar_one_page_16__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dta)" stroke="#333" stroke-linecap="round" stroke-linejoin="round"><path d="M14 .5H2a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V1a.5.5 0 0 0-.5-.5ZM4.5 4.5h7m-7 3h5"/></g><defs><clipPath id="docx-dta"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 8 4" id="docx-icon-word_vector_down__clip_cell" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dxa)" stroke-linecap="round"><path d="M8 0 4 4 0 0" stroke="#666"/><path d="M8 0 4 4 0 0" stroke="#000" stroke-opacity=".2"/><path d="M8 0 4 4 0 0" stroke="#000" stroke-opacity=".2"/><path d="M8 0 4 4 0 0" stroke="#000" stroke-opacity=".2"/><path d="M8 0 4 4 0 0" stroke="#000" stroke-opacity=".2"/></g><defs><clipPath id="docx-dxa"><path fill="#fff" d="M0 0h8v4H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 8 4" id="docx-icon-word_vector_down__clip_cell-1" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dwa)" stroke-linecap="round"><path d="M8 4 4 0 0 4" stroke="#666"/><path d="M8 4 4 0 0 4" stroke="#000" stroke-opacity=".2"/><path d="M8 4 4 0 0 4" stroke="#000" stroke-opacity=".2"/><path d="M8 4 4 0 0 4" stroke="#000" stroke-opacity=".2"/><path d="M8 4 4 0 0 4" stroke="#000" stroke-opacity=".2"/></g><defs><clipPath id="docx-dwa"><path fill="#fff" d="M0 0h8v4H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 10 8" id="docx-icon-word_vector_down_open" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#docx-dya)" stroke-linecap="round"><path d="M9 3 5 7 1 3" stroke="#666"/><path d="M9 3 5 7 1 3" stroke="#000" stroke-opacity=".2"/><path d="M9 3 5 7 1 3" stroke="#000" stroke-opacity=".2"/><path d="M9 3 5 7 1 3" stroke="#000" stroke-opacity=".2"/><path d="M9 3 5 7 1 3" stroke="#000" stroke-opacity=".2"/><path d="M1.5.5h7" stroke="#333"/></g><defs><clipPath id="docx-dya"><path fill="#fff" d="M0 0h10v8H0z"/></clipPath></defs></symbol><symbol fill="none" viewBox="0 0 6 3" id="docx-icon-多边形_40" xmlns="http://www.w3.org/2000/svg"><path d="M3 3 0 0h6L3 3Z" fill="#666"/><path d="M3 3 0 0h6L3 3Z" fill="#000" fill-opacity=".2"/><path d="M3 3 0 0h6L3 3Z" fill="#000" fill-opacity=".2"/><path d="M3 3 0 0h6L3 3Z" fill="#000" fill-opacity=".2"/><path d="M3 3 0 0h6L3 3Z" fill="#000" fill-opacity=".2"/></symbol><symbol fill="none" viewBox="0 0 6 3" id="docx-icon-多边形_41" xmlns="http://www.w3.org/2000/svg"><path d="M3 0 0 3h6L3 0Z" fill="#666"/><path d="M3 0 0 3h6L3 0Z" fill="#000" fill-opacity=".2"/><path d="M3 0 0 3h6L3 0Z" fill="#000" fill-opacity=".2"/><path d="M3 0 0 3h6L3 0Z" fill="#000" fill-opacity=".2"/><path d="M3 0 0 3h6L3 0Z" fill="#000" fill-opacity=".2"/></symbol></svg>';
function p1(e) {
  va("common", cA), va("docx", h1);
  let t = ko(e);
  const a = sA(u1);
  return a.use(dA({ appName: "docx" })), a.use(t), { app: a };
}
class f1 extends uA {
  get Document() {
    return this.getAPIComponent("Document");
  }
  get Paragraph() {
    return this.getAPIComponent("Paragraph");
  }
  get Table() {
    return this.getAPIComponent("Table");
  }
  get UndoRedo() {
    return this.getAPIComponent("UndoRedo");
  }
  get Selection() {
    return this.getAPIComponent("Selection");
  }
  get Finder() {
    return this.getAPIComponent("Finder");
  }
  get Styles() {
    return this.getAPIComponent("Styles");
  }
  get Outline() {
    return this.getAPIComponent("Outline");
  }
  get Thumbnail() {
    return this.getAPIComponent("Thumbnail");
  }
}
class m1 extends f1 {
}
const g1 = {
  0: "right",
  1: "left",
  2: "center",
  3: "justify",
  4: "distribute"
};
function v1(e) {
  return {
    alignment: g1[e.Jc ?? -1] || "left",
    outlineLevel: Number.isInteger(e.OutlineLvl) ? String(e.OutlineLvl + 1) : "bodyText",
    collapsed: e.Collapsed
  };
}
class b1 extends m1 {
  constructor() {
    super();
    Le(this, "openFileHandler");
  }
  setOpenFileHandler(a) {
    this.openFileHandler = a;
  }
  openFile() {
    var a;
    return (a = this.openFileHandler) == null ? void 0 : a.call(this);
  }
  async doExport(a) {
    switch (a) {
      case "exportDocument":
        await this.Document.callFun("exportDocument");
        break;
      case "exportPDF":
        await this.Document.callFun("exportPdf");
        break;
    }
  }
  copy() {
    return this.Document.callFun("copy");
  }
  paste() {
    return this.Document.callFun("paste");
  }
  undo() {
    this.UndoRedo.callFun("undo");
  }
  redo() {
    this.UndoRedo.callFun("redo");
  }
  canUndo() {
    return this.UndoRedo.callFun("canUndo");
  }
  canRedo() {
    return this.UndoRedo.callFun("canRedo");
  }
  setBold(a = !0) {
    this.Paragraph.callFun("setBold", a);
  }
  setItalic(a = !0) {
    this.Paragraph.callFun("setItalic", a);
  }
  setUnderline(a) {
    this.Paragraph.callFun("setUnderlineStyle", a);
  }
  setUnderlineColor(a) {
    const n = this.resolveColor(a);
    this.Paragraph.callFun("setUnderlineColor", n);
  }
  setStrikeThrough(a = !0) {
    this.Paragraph.callFun("setStrikeThrough", a);
  }
  setFontSize(a) {
    this.Paragraph.callFun("setFontSize", a), this.focusEditor();
  }
  decreaseIndent() {
    return this.Paragraph.callFun("decreaseIndent");
  }
  increaseIndent() {
    return this.Paragraph.callFun("increaseIndent");
  }
  decreaseFontSize() {
    return this.Paragraph.callFun("decreaseFontSize");
  }
  increaseFontSize() {
    return this.Paragraph.callFun("increaseFontSize");
  }
  changeCase(a) {
    return a == "sentenceCase" ? this.Paragraph.callFun("capitalizeFirstLetterOfEachSentence", a) : a == "lowercase" ? this.Paragraph.callFun("toLowerCase", a) : a == "uppercase" ? this.Paragraph.callFun("toUpperCase", a) : a == "capitalizeEachWord" ? this.Paragraph.callFun("capitalizeFirstLetterOfEachWord", a) : a == "toggleCase" ? this.Paragraph.callFun("switchCase", a) : a == "halfWidth" ? this.Paragraph.callFun("toHalfWidth", a) : a == "fullWidth" ? this.Paragraph.callFun("toFullWidth", a) : this.Paragraph.callFun("changeCase", a);
  }
  setSuperscript(a) {
    return this.Paragraph.callFun("setSuperscript", a);
  }
  setSubscript(a) {
    return this.Paragraph.callFun("setSubscript", a);
  }
  setTextHighlight(a) {
    return a === "noFill" && (a = "none"), this.Paragraph.callFun("setTextHighlight", a);
  }
  setCharacterShading(a = !0) {
    this.Paragraph.callFun("setCharacterShading", a);
  }
  getUnderlineStyleOptions() {
    return this.Paragraph.callFun("getUnderlineStyleOptions");
  }
  applyFontSettings(a) {
    return this.Paragraph.callFun("applyFontSettings", a);
  }
  getOriParagraphSettings() {
    return this.Paragraph.callFun("getParaPropertyDialogSettings");
  }
  getParagraphSettings() {
    const a = this.Paragraph.callFun("getParaPropertyDialogSettings");
    return a && v1(a);
  }
  getTableStyleCheckStatus() {
    let a = this.Table.callFun("getTableStyleCheckStatus");
    return a.bandedRow = !a.noHBand, a.bandedCol = !a.noVBand, a;
  }
  setListType(a) {
    switch (a) {
      case "bullet":
        return this.Paragraph.callFun("setBulletList");
      case "num":
        return this.Paragraph.callFun("setNumberedList");
    }
  }
  setTableStyleCheckStatus(a) {
    return a.noHBand = a.bandedRow != null ? !a.bandedRow : void 0, a.noVBand = a.bandedCol != null ? !a.bandedCol : void 0, this.Table.callFun("setTableStyleCheckStatus", a);
  }
  applyParagraphSettings(a) {
    return this.Paragraph.callFun("applyParagraphSettings", a);
  }
  updateVisibleArea() {
    return this.Document.callFun("updateVisibleArea");
  }
  setFontColor(a) {
    const n = this.resolveColor(a);
    this.Paragraph.callFun("setFontColor", n);
  }
  setParagraphShading(a) {
    if (a == null)
      return this.Paragraph.callFun("clearParaShading");
    const n = this.resolveColor(a.color);
    return this.Paragraph.callFun("setParaShading", n, a.isInTable);
  }
  setParagraphBorder(a) {
    return this.Paragraph.callFun("setParagraphBorder", a.type, a.isInTable);
  }
  setShowMarkUpType(a) {
  }
  acceptChange(a) {
  }
  rejectChange(a) {
  }
  simplifiedToTraditional() {
  }
  documentEncryption() {
  }
  setTableShading(a) {
    if (a == null)
      return this.Table.callFun("clearTableShading");
    const n = this.resolveColor(a);
    return this.Table.callFun("setTableShading", n);
  }
  setTableBorder(a) {
    return this.Table.callFun("setTableBorder", a);
  }
  getStyles(a, n, o) {
    return this.Paragraph.callFun("getParagraphStyles", a, n, o);
  }
  applyStyle(a) {
    return this.Paragraph.callFun("setStyleListStyle", a);
  }
  clearStyle() {
    return this.Paragraph.callFun("clearStyleListStyle");
  }
  getTableStyles(a, n) {
    return this.Table.callFun("getTableStyles", a, n);
  }
  applyTableStyle(a) {
    return this.Table.callFun("applyTableStyle", a);
  }
  clearTableStyle() {
    return this.Table.callFun("clearTableStyle");
  }
  setFontName(a) {
    this.Paragraph.callFun("setFontName", a), this.focusEditor();
  }
  toParagraphAlignment(a) {
    switch (a) {
      case "left":
        return "Left";
      case "center":
        return "Centered";
      case "right":
        return "Right";
      case "justify":
        return "Justified";
      case "distribute":
        return "Distributed";
      default:
        return a;
    }
  }
  setParaAlignHorizontal(a) {
    this.Paragraph.callFun("setAlignment", this.toParagraphAlignment(a));
  }
  setBullet(a) {
  }
  setNumbering(a) {
  }
  // 获取项目符号列表
  getBulletList(a, n, o) {
  }
  // 获取编号列表
  getNumberingList() {
  }
  getMultilevelList() {
  }
  setMultilevelList(a) {
  }
  insertTable(a) {
    const { rows: n, cols: o } = a;
    this.Table.callFun("insertTable", n, o);
  }
  toBreakType(a) {
    switch (a) {
      case "pageSeparator":
        return "Page";
      case "nextPage":
        return "SectionNext";
      case "continuousPage":
        return "SectionContinuous";
      case "evenPage":
        return "SectionEven";
      case "oddPage":
        return "SectionOdd";
      case "columnSeparator":
        return "Column";
      default:
        return a;
    }
  }
  insertSeparator(a) {
    return this.Selection.callFun("insertBreak", this.toBreakType(a));
  }
  getCurrentPagePosition() {
    return this.Document.callFun("getCurrentPagePosition");
  }
  goToPage(a) {
    return this.Document.callFun("goToPage", a || 1);
  }
  switchPageView(a) {
    return this.Document.callFun("setPageView", a || "single");
  }
  setZoom(a) {
    this.Document.callFun("setZoom", a);
  }
  setTrackChange(a) {
    this.Document.callFun("setTrackChange", a);
  }
  getTrackChange() {
    return this.Document.callFun("getTrackChange");
  }
  setRevisionDisplayMode(a) {
    this.Document.callFun("setRevisionDisplayMode", a);
  }
  getRevisionDisplayMode() {
    return this.Document.callFun("getRevisionDisplayMode");
  }
  getZoom() {
    return this.Document.callFun("getZoom");
  }
  setParaSymbolParagraphMarks(a) {
    this.Document.callFun("setShowParagraphMarks", a);
  }
  getParaSymbolParagraphMarks() {
    return this.Document.callFun("getShowParagraphMarks");
  }
  setParaSymbolPageBreak(a) {
    this.Document.callFun("setShowPageBreak", a);
  }
  getParaSymbolPageBreak() {
    return this.Document.callFun("getShowPageBreak");
  }
  setParaSymbolSectionBreak(a) {
    this.Document.callFun("setShowSectionBreak", a);
  }
  getParaSymbolSectionBreak() {
    return this.Document.callFun("getShowSectionBreak");
  }
  getSearchSelectedWord() {
    return this.Finder.callFun("getSelectText");
  }
  searchWord(a) {
    this.Finder.callFun("search", a);
  }
  searchNext() {
    this.Finder.callFun("selectNext");
  }
  searchPrevious() {
    this.Finder.callFun("selectPrevious");
  }
  searchStatusInfo() {
    return this.Finder.callFun("getSearchStatus");
  }
  focusEditor() {
    return this.Document.callFun("focusEditor");
  }
  getOutlineTree() {
    return this.Outline.callFun("getOutlineTree");
  }
  goto(a) {
    this.Outline.callFun("goto", a);
  }
  actionOutlineTreeMenuItem(a, n) {
    switch (a) {
      case "promote":
        this.Outline.callFun("promote", n);
        break;
      case "demote":
        this.Outline.callFun("demote", n);
        break;
      case "delete":
        this.Outline.callFun("goto", n), this.Outline.callFun("remove", n);
        break;
      case "insertSameLevelBefore":
        this.Outline.callFun("goto", n), this.Outline.callFun("insertSameLevelBefore", n);
        break;
      case "insertSameLevelAfter":
        this.Outline.callFun("goto", n), this.Outline.callFun("insertSameLevelAfter", n);
        break;
      case "insertNextLevelAfter":
        this.Outline.callFun("goto", n), this.Outline.callFun("insertNextLevelAfter", n);
        break;
    }
  }
  // 获取页面列表
  getPages() {
    return this.Thumbnail.callFun("getPages");
  }
  // 准备缩略图列表
  async prepareThumbnails(a, n, o) {
    return this.Thumbnail.callFun("prepareThumbnails", a, n, o);
  }
  // 获取页面缩略图
  getThumbnail(a) {
    return this.Thumbnail.callFun("getThumbnail", a);
  }
  setRuler(a) {
  }
  isTable() {
    return this.Table.callFun("isInTable");
  }
  showTableDashedGrid(a = !0) {
    this.Table.callFun("showTableDashedGrid", a);
  }
  tableDeleteOperations(a) {
    var A;
    let n = a.cmd, o = (A = a.input) == null ? void 0 : A.deleteType;
    if (n == "deleteCells" && (o == "shiftCellsLeft" || o == "shiftCellsUp")) {
      if (o == "shiftCellsLeft")
        return this.Table.callFun("removeCellShiftRightCellsLeft");
      if (o == "shiftCellsUp")
        return this.Table.callFun("removeCellShiftBelowCellsUp");
    }
    if (n == "deleteColumns" || o == "deleteEntireColumn")
      return this.Table.callFun("deleteColumns");
    if (n == "deleteRows" || o == "deleteEntireRow")
      return this.Table.callFun("deleteRows");
    if (n == "deleteTable")
      return this.Table.callFun("delete");
  }
  tableInsertOperations(a) {
    var A;
    let n = a.cmd, o = (A = a.input) == null ? void 0 : A.insertType;
    if (n == "insertCells" && (o == "shiftCellsRight" || o == "shiftCellsDown")) {
      if (o == "shiftCellsRight")
        return this.Table.callFun("insertCellShiftActiveCellsRight");
      if (o == "shiftCellsDown")
        return this.Table.callFun("insertCellShiftActiveCellsDown");
    }
    if (n == "above" || o == "insertEntireRow")
      return this.Table.callFun("addRows", "Before");
    if (n == "below")
      return this.Table.callFun("addRows", "End");
    if (n == "left" || o == "insertEntireColumn")
      return this.Table.callFun("addColumns", "Left");
    if (n == "right")
      return this.Table.callFun("addColumns", "End");
  }
  mergeCells() {
    return this.Table.callFun("mergeCells");
  }
  splitTable(a) {
    switch (a) {
      case "row":
        this.Table.callFun("splitTableWithRow");
        break;
      case "col":
        this.Table.callFun("splitTableWithColumn");
        break;
    }
  }
  splitCells(a) {
    const { rows: n, cols: o, splitBeforeMerge: A } = a;
    this.Table.callFun("splitCell", n, o, A);
  }
  autoFit(a) {
    switch (a) {
      case "windows":
        this.Table.callFun("tableAdjustByWindow");
        break;
      case "contents":
        this.Table.callFun("tableAdjustByContent");
        break;
      case "transpose":
        break;
      case "fixedColumnWidth":
        this.Table.callFun("setTableFixedColumnWidth");
        break;
      case "distributeRows":
        this.Table.callFun("distributeRows");
        break;
      case "distributeCols":
        this.Table.callFun("distributeColumns");
        break;
    }
  }
  setCellWidth(a) {
    this.Table.callFun("setCellWidth", a);
  }
  setCellHeight(a) {
    this.Table.callFun("setCellHeight", a);
  }
  setCellAlignVertical(a) {
    this.Table.callFun("setCellAlign", a);
  }
  // 设置表格边距, 无值为undefined
  setTableTcMar(a, n, o, A) {
    this.Table.setTableTcMar(a, n, o, A);
  }
  setTableCellSpacing(a) {
    this.Table.setTableCellSpacing(a);
  }
  tableSelect(a) {
    switch (a) {
      case "cell":
        this.Table.callFun("selectWholeCell");
        break;
      case "column":
        this.Table.callFun("selectWholeColumn");
        break;
      case "row":
        this.Table.callFun("selectWholeRow");
        break;
      case "table":
        this.Table.callFun("selectWholeTable");
        break;
    }
  }
  doTableOperation(a) {
    const { action: n } = a;
    switch (n) {
      case "delTable":
        this.Table.callFun("delete");
        break;
      case "insRow":
        this.Table.callFun("addRows");
        break;
      case "insCol":
        this.Table.callFun("addColumns");
        break;
      case "delRow":
        this.Table.callFun("deleteRows");
        break;
      case "delCol":
        this.Table.callFun("deleteColumns");
        break;
    }
  }
  doTableCellOperation(a) {
    const { action: n } = a;
    switch (n) {
      case "mergeCell":
        this.Table.callFun("mergeCells");
        break;
      case "unmergeCell":
        this.Table.callFun("unmergeCells");
        break;
    }
  }
  doPaperOrientationAction(a) {
    this.Document.callFun("setPageOrientation", a === "paperHorizontal" ? "Landscape" : "Portrait");
  }
  doPaperSizeAction(a) {
    typeof a == "string" && (a = Vo(a)), a && this.Document.callFun("setPageSize", a.width, a.height);
  }
  setLineSpace(a) {
    this.Paragraph.callFun("setLineSpacing", a);
  }
  cut() {
    return this.Document.callFun("cut");
  }
  formatPainter(a = !0) {
    this.Document.callFun("activeFormatPainterMultiple", a);
  }
  setCharacterBorder(a = !0) {
    return this.Paragraph.callFun("setCharacterBorder");
  }
  clearFormatting() {
    return this.Paragraph.callFun("clearFormatting");
  }
  // 批注
  commentUpdate(a) {
  }
  // 插入备注 未实现
  insertComment(a) {
  }
  deleteComment(a) {
  }
  previousComment() {
  }
  nextComment() {
  }
  getAllComments(a) {
    return [
      {
        author: "xia xu",
        authorId: "{FE908560-31F0-4AEC-DCAC-AEC3CEA6A4B0}",
        commentId: "{4ED9FFF7-9F8A-4C90-B59F-8F24400135A9}",
        date: "2026-08-11T01:51:36.709",
        message: "史书",
        done: "0",
        replyLst: [
          {
            author: "xia xu",
            authorId: "{FE908560-31F0-4AEC-DCAC-AEC3CEA6A4B0}",
            commentId: "{17D2FAE2-8CB9-458F-BD07-96E29B95D092}",
            date: "2026-08-11T01:51:42.751",
            message: "萨芬回复11111111111111111111111111111111111",
            done: "0"
          },
          {
            author: "Office SDK Dev App User",
            authorId: "{FE908560-31F0-4AEC-DCAC-AEC3CEA6A4B0}",
            commentId: "{20095A9C-5E12-48E0-A9EF-9CADBDB7E483}",
            date: "2026-08-11T05:47:03.519",
            message: "萨芬回复222222222222222222222222222222222222222222",
            done: "0"
          }
        ]
      },
      {
        author: "xia xu",
        authorId: "{FE908560-31F0-4AEC-DCAC-AEC3CEA6A4B0}",
        commentId: "{04F37792-0564-480E-B2DA-309F95D3D472}",
        date: "2026-08-11T01:53:11.040",
        message: "晚唐诗人",
        done: "1",
        replyLst: [
          {
            author: "Office SDK Dev App User",
            authorId: "{FE908560-31F0-4AEC-DCAC-AEC3CEA6A4B0}",
            commentId: "{17D2FAE2-8CB9-458F-BD07-96E29B95D092}",
            date: "2026-08-11T01:51:42.751",
            message: "晚唐诗人回复11111111111111111111111111111111111111",
            done: "1"
          },
          {
            author: "Office SDK Dev App User",
            authorId: "{FE908560-31F0-4AEC-DCAC-AEC3CEA6A4B0}",
            commentId: "{20095A9C-5E12-48E0-A9EF-9CADBDB7E483}",
            date: "2026-08-11T05:47:03.519",
            message: "晚唐诗人回复22222222222222222222222222222222",
            done: "1"
          },
          {
            author: "xia xu",
            authorId: "{FE908560-31F0-4AEC-DCAC-AEC3CEA6A4B0}",
            commentId: "{20095A9C-5E12-48E0-A9EF-9CADBDB7E483}",
            date: "2026-08-11T06:47:03.519",
            message: "晚唐诗人回复3333",
            done: "1"
          },
          {
            author: "xia xu",
            authorId: "{FE908560-31F0-4AEC-DCAC-AEC3CEA6A4B0}",
            commentId: "{20095A9C-5E12-48E0-A9EF-9CADBDB7E483}",
            date: "2026-08-11T08:47:03.519",
            message: "晚唐诗人回复4444",
            done: "1"
          }
        ]
      },
      {
        author: "xia xu",
        authorId: "{FE908560-31F0-4AEC-DCAC-AEC3CEA6A4B0} 1",
        commentId: "{37E35BD4-00E0-4440-AEFD-5502BA3F1EE9}",
        date: "2026-08-11T01:53:25.387",
        message: "小说",
        done: "0",
        replyLst: [
          {
            author: "Office SDK Dev App User",
            authorId: "{FE908560-31F0-4AEC-DCAC-AEC3CEA6A4B0}",
            commentId: "{17D2FAE2-8CB9-458F-BD07-96E29B95D092}",
            date: "2026-08-11T01:51:42.751",
            message: "小说回复111111",
            done: "0"
          }
        ]
      },
      {
        author: "Office SDK Dev App User",
        authorId: "office-sdk-dev-app-user",
        commentId: "{2FC0742A-46A1-42FE-BF58-FEEB139F09A3}",
        date: "2026-08-11T09:02:53.100",
        message: "新的凯撒解放了",
        done: "1",
        replyLst: []
      },
      {
        author: "Office SDK Dev App User",
        authorId: "office-sdk-dev-app-user",
        commentId: "bs_27811BEF",
        date: "2026-08-12T03:37:26.780Z",
        message: "阿斯蒂芬",
        done: "1",
        replyLst: []
      }
    ];
  }
  getShowHideCommentDisabled() {
    return !1;
  }
}
const y1 = {
  namespaced: !0,
  state: () => ({
    hasError: !1,
    isReady: !1,
    connected: !1,
    message: null,
    rawEvent: null,
    fileInfo: { title: "", docId: "" },
    currentPageNum: 0,
    currentPageCnt: 0,
    pageCount: 0,
    recentColors: {
      [l.FontColor]: [],
      [l.UnderlineColor]: [],
      [l.ParagraphShading]: []
    },
    showFindDialog: !1,
    loadingRatio: 0,
    showLoadingProgressBar: !0,
    refreshRightPanel: !1,
    isInTable: !1,
    paraFlag: 0,
    tableStyleId: "",
    paraStyleId: "",
    paraLineRule: "",
    refreshTableStylePanel: !1,
    asianFont: "",
    westernFont: "",
    strikeThroughType: 0,
    emphasisMark: "",
    smallCaps: !1,
    allCaps: !1,
    vanish: !1,
    tableCanMergeCell: !1,
    tableSplitCellMaxRow: 0,
    tableSplitCellNSelectRow: 0,
    tableSplitCellNSelectCol: 0,
    refreshOutline: !1,
    outlineParaId: "",
    thumbnailChange: !1
  }),
  getters: {
    title: (e) => e.fileInfo.title,
    currentPageNum: (e) => e.currentPageNum,
    currentPageCnt: (e) => e.currentPageCnt,
    pageCount: (e) => e.pageCount,
    recentColors: (e) => (t) => e.recentColors[t],
    showFindDialog: (e) => e.showFindDialog,
    loadingRatio: (e) => e.loadingRatio,
    showLoadingProgressBar: (e) => e.showLoadingProgressBar,
    refreshRightPanel: (e) => e.refreshRightPanel,
    refreshTableStylePanel: (e) => e.refreshTableStylePanel,
    isInTable: (e) => e.isInTable,
    paraFlag: (e) => e.paraFlag,
    tableStyleId: (e) => e.tableStyleId,
    paraStyleId: (e) => e.paraStyleId,
    paraLineRule: (e) => e.paraLineRule,
    asianFont: (e) => e.asianFont,
    westernFont: (e) => e.westernFont,
    strikeThroughType: (e) => e.strikeThroughType,
    emphasisMark: (e) => e.emphasisMark,
    smallCaps: (e) => e.smallCaps,
    allCaps: (e) => e.allCaps,
    vanish: (e) => e.vanish,
    tableCanMergeCell: (e) => e.tableCanMergeCell,
    tableSplitCellMaxRow: (e) => e.tableSplitCellMaxRow,
    tableSplitCellNSelectRow: (e) => e.tableSplitCellNSelectRow,
    tableSplitCellNSelectCol: (e) => e.tableSplitCellNSelectCol,
    refreshOutline: (e) => e.refreshOutline,
    outlineParaId: (e) => e.outlineParaId,
    thumbnailChange: (e) => e.thumbnailChange
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
    setCurrentPageNum(e, t) {
      e.currentPageNum = t;
    },
    setCurrentPageCnt(e, t) {
      e.currentPageCnt = t;
    },
    setPageCount(e, t) {
      e.pageCount = t;
    },
    addRecentColors(e, t) {
      typeof t.recentColor != "string" && (t.recentColor = t.recentColor.hex);
      let a = t.cmd;
      const n = e.recentColors[a].findIndex(
        (o) => o === t.recentColor
      );
      n !== -1 && e.recentColors[a].splice(n, 1), e.recentColors[a].unshift(t.recentColor), e.recentColors[a].length > 10 && (e.recentColors[a].length = 10);
    },
    setShowFindDialog(e, t) {
      e.showFindDialog = t;
    },
    setLoadingRatio(e, t) {
      e.loadingRatio = t;
    },
    setShowLoadingProgressBar(e, t) {
      e.showLoadingProgressBar = t;
    },
    setRefreshRightPanel(e, t) {
      e.refreshRightPanel = t;
    },
    setRefreshTableStylePanel(e, t) {
      e.refreshTableStylePanel = t;
    },
    setIsInTable(e, t) {
      e.isInTable = t;
    },
    setParaFlag(e, t) {
      e.paraFlag = t;
    },
    setTableStyleId(e, t) {
      e.tableStyleId = t;
    },
    setParaStyleId(e, t) {
      e.paraStyleId = t;
    },
    setParaLineRule(e, t) {
      e.paraLineRule = t;
    },
    setAsianFont(e, t) {
      e.asianFont = t;
    },
    setWesternFont(e, t) {
      e.westernFont = t;
    },
    setStrikeThroughType(e, t) {
      e.strikeThroughType = t;
    },
    setEmphasisMark(e, t) {
      e.emphasisMark = t;
    },
    setSmallCaps(e, t) {
      e.smallCaps = t;
    },
    setAllCaps(e, t) {
      e.allCaps = t;
    },
    setVanish(e, t) {
      e.vanish = t;
    },
    setTableCanMergeCell(e, t) {
      e.tableCanMergeCell = t;
    },
    setTableSplitCellMaxRow(e, t) {
      e.tableSplitCellMaxRow = t;
    },
    setTableSplitCellNSelectRow(e, t) {
      e.tableSplitCellNSelectRow = t;
    },
    setTableSplitCellNSelectCol(e, t) {
      e.tableSplitCellNSelectCol = t;
    },
    setRefreshOutline(e, t) {
      e.refreshOutline = t;
    },
    setOutlineParaId(e, t) {
      e.outlineParaId = t;
    },
    setThumbnailChange(e, t) {
      e.thumbnailChange = t;
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
function Gt() {
  return {
    [l.Copy]: { enabled: !1, running: !1 },
    [l.Paste]: { enabled: !1, running: !1 },
    [l.Undo]: { enabled: !1, running: !1 },
    [l.Redo]: { enabled: !1, running: !1 },
    [l.Bold]: {
      enabled: !1,
      running: !1,
      ui: {
        value: !1
      }
    },
    [l.Italic]: {
      enabled: !1,
      running: !1,
      ui: {
        value: !1
      }
    },
    [l.Underline]: {
      enabled: !1,
      running: !1,
      ui: {
        value: !1
      }
    },
    [l.UnderlineColor]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.StrikeThrough]: {
      enabled: !1,
      running: !1,
      ui: {
        value: !1
      }
    },
    [l.FontSize]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.DecreaseIndent]: {
      enabled: !1,
      running: !1
    },
    [l.IncreaseIndent]: {
      enabled: !1,
      running: !1
    },
    [l.DecreaseFontSize]: {
      enabled: !1,
      running: !1
    },
    [l.IncreaseFontSize]: {
      enabled: !1,
      running: !1
    },
    [l.ChangeCase]: {
      enabled: !1,
      running: !1
    },
    [l.Superscript]: {
      enabled: !1,
      running: !1,
      ui: {
        value: !1
      }
    },
    [l.Subscript]: {
      enabled: !1,
      running: !1,
      ui: {
        value: !1
      }
    },
    [l.TextHighlight]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.CharacterShading]: {
      enabled: !1,
      running: !1,
      ui: {
        value: !1
      }
    },
    [l.FontColor]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.FontName]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.ParaAlignHorizontal]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.Bullet]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.Numbering]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.MultilevelList]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.ParagraphShading]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.ParagraphBorder]: {
      enabled: !1,
      running: !1
    },
    [l.TableShading]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.TableBorder]: {
      enabled: !1,
      running: !1
    },
    [l.ApplyStyle]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.ApplyTableStyle]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.ClearTableStyle]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.Color]: {
      enabled: !1,
      running: !1,
      ui: {
        value: "0xFFFFFF"
      }
    },
    [l.Zoom]: {
      enabled: !1,
      running: !1,
      ui: {
        value: 100
      }
    },
    [l.Export]: {
      enabled: !1,
      running: !1
    },
    [l.ExportPDF]: {
      enabled: !1,
      running: !1
    },
    [l.Open]: {
      enabled: !1,
      running: !1
    },
    [l.GoToPage]: {
      enabled: !1,
      running: !1
    },
    [l.PagePositionChange]: {
      enabled: !1,
      running: !1
    },
    [l.PageViewSwitch]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.InsertTable]: {
      enabled: !1,
      running: !1
    },
    [l.InsertSeparator]: {
      enabled: !1,
      running: !1
    },
    [l.SearchReplaceWord]: {
      enabled: !1,
      running: !1,
      ui: {
        value: null
      }
    },
    [l.TableOperations]: {
      enabled: !1,
      running: !1
    },
    [l.TableCellOperations]: {
      enabled: !1,
      running: !1
    },
    [l.PaperOrientation]: {
      enabled: !1,
      running: !1
    },
    [l.PaperSize]: {
      enabled: !1,
      running: !1
    },
    [l.LineSpace]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.ParaSymbol]: {
      enabled: !1,
      running: !1,
      ui: {
        value: null
      }
    },
    [l.TrackChange]: {
      enabled: !1,
      running: !1,
      ui: {
        value: !1
      }
    },
    [l.RevisionDisplayMode]: {
      enabled: !1,
      running: !1
    },
    [l.Cut]: {
      enabled: !1,
      running: !1
    },
    [l.FormatPainter]: {
      enabled: !1,
      running: !1
    },
    [l.OpenFontSettingsPanel]: {
      enabled: !1,
      running: !1
    },
    [l.OpenParagraphSettingsPanel]: {
      enabled: !1,
      running: !1
    },
    [l.ApplyParagraphSettings]: {
      enabled: !1,
      running: !1
    },
    [l.CharacterBorder]: {
      enabled: !1,
      running: !1,
      ui: {
        value: !1
      }
    },
    [l.ClearFormatting]: {
      enabled: !1,
      running: !1
    },
    [l.MarkUpStatus]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.ShowMarkUpType]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.AcceptChange]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.RejectChange]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.PreviousChange]: {
      enabled: !1,
      running: !1
    },
    [l.NextChange]: {
      enabled: !1,
      running: !1
    },
    [l.SimplifiedToTraditional]: {
      enabled: !1,
      running: !1
    },
    [l.DocumentEncryption]: {
      enabled: !1,
      running: !1
    },
    [l.Ruler]: {
      enabled: !1,
      running: !1,
      ui: {
        value: !1
      }
    },
    [l.NavigationPanel]: {
      enabled: !1,
      running: !1,
      ui: {
        value: !1
      }
    },
    [l.ShowTableDashedGrid]: {
      enabled: !1,
      running: !1,
      ui: {
        value: !1
      }
    },
    [l.TableDeleteOperations]: {
      enabled: !1,
      running: !1
    },
    [l.TableInsertOperations]: {
      enabled: !1,
      running: !1
    },
    [l.MergeCells]: {
      enabled: !1,
      running: !1
    },
    [l.SplitTable]: {
      enabled: !1,
      running: !1
    },
    [l.SplitCells]: {
      enabled: !1,
      running: !1
    },
    [l.AutoFit]: {
      enabled: !1,
      running: !1
    },
    [l.CellWidth]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.CellHeight]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.CellAlignVertical]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.OpenCellMarginsSettingsPanel]: {
      enabled: !1,
      running: !1
    },
    [l.CellMarginTop]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.CellMarginBottom]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.CellMarginLeft]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.CellMarginRight]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.CellSpacing]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    },
    [l.TableSelect]: {
      enabled: !1,
      running: !1
    },
    // 批注
    [l.InsertComment]: {
      enabled: !1,
      running: !1
    },
    [l.CommentUpdate]: {
      enabled: !1,
      running: !1
    },
    [l.DeleteComment]: {
      enabled: !1,
      running: !1
    },
    [l.PreviousComment]: {
      enabled: !1,
      running: !1
    },
    [l.NextComment]: {
      enabled: !1,
      running: !1
    },
    [l.ShowHideComment]: {
      enabled: !1,
      running: !1,
      ui: {
        value: ""
      }
    }
  };
}
const w1 = {
  namespaced: !0,
  state: () => ({
    map: Gt(),
    readOnly: !1,
    loadEnd: !1,
    cutAndCopyEndabled: !1,
    formatPaintEndabled: !1
  }),
  getters: {
    can: (e) => (t) => {
      var a;
      return ((a = e.map[t]) == null ? void 0 : a.enabled) !== !0 ? !1 : e.readOnly ? e.loadEnd && Vt.has(t) : !0;
    },
    isRunning: (e) => (t) => {
      var a;
      return ((a = e.map[t]) == null ? void 0 : a.running) === !0;
    },
    active: (e) => (t) => {
      var n;
      const a = (n = e.map[t]) == null ? void 0 : n.ui;
      return !!a && a.value === !0;
    },
    enabledList: (e) => (t) => {
      var n;
      const a = (n = e.map[t]) == null ? void 0 : n.ui;
      return !!a && a.value;
    },
    getVal: (e) => (t) => {
      var n;
      const a = (n = e.map[t]) == null ? void 0 : n.ui;
      return !!a && a.value;
    },
    loadEnd: (e) => e.loadEnd,
    cutAndCopyEndabled: (e) => (t) => e.readOnly && Vt.has(t) ? !1 : e.cutAndCopyEndabled,
    formatPaintEndabled: (e) => e.readOnly ? !1 : e.formatPaintEndabled
  },
  mutations: {
    resetCommandState(e) {
      e.map = Gt(), e.readOnly = !1, e.loadEnd = !1;
    },
    setLoadEnd(e, t) {
      e.loadEnd = t;
    },
    setReadOnly(e, t) {
      e.readOnly = t;
    },
    setEnabled(e, t) {
      e.loadEnd == !1 && t.force !== !0 && (t.enabled = !1), e.map[t.cmd].enabled = t.enabled;
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
      const a = e.map[t.cmd];
      if (!a) return;
      const n = t.ui;
      if (n === void 0) {
        a.ui = void 0;
        return;
      }
      a.ui = { ...a.ui ?? {}, ...n };
    },
    clearState(e, t) {
      const a = Gt()[t.cmd];
      a && (e.map[t.cmd] = JSON.parse(JSON.stringify(a)));
    },
    setCutAndCopyEndabled(e, t) {
      e.cutAndCopyEndabled = t, e.map[l.Cut].enabled = t, e.map[l.Copy].enabled = t;
    },
    setFormatPaintEndabled(e, t) {
      e.formatPaintEndabled = t, e.map[l.FormatPainter].enabled = t;
    }
  },
  actions: {
    async run({ commit: e, getters: t }, a) {
      const { cmd: n, fn: o, param: A } = a;
      if (t.can(n)) {
        e("setRunning", { cmd: n, running: !0 });
        try {
          await o(A);
        } finally {
          e("setRunning", { cmd: n, running: !1 });
        }
      }
    }
  }
}, x1 = {
  namespaced: !0,
  state: () => ({
    activeTab: $t.Start,
    selectedElement: Ya.Nil,
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
    }
  },
  mutations: {
    setActiveTab(e, t) {
      e.activeTab = t;
    },
    setTempTabs(e, t) {
      e.tempTabs = t;
    }
  },
  actions: {
    SetTableBarVisible({ commit: e, state: t }, a) {
      let n = null;
      if (a.value)
        t.tempTabs[vt.TableLayout] || t.tempTabs[vt.TableStyle] || e("setTempTabs", NA);
      else {
        let o = t.activeTab;
        e("setTempTabs", {}), (o === vt.TableLayout || o === vt.TableStyle) && (n = $t.Start);
      }
      n && Promise.resolve().then(() => {
        e("setActiveTab", n);
      });
    }
  }
};
function Al() {
  return hA({
    modules: {
      file: y1,
      menu: x1,
      command: w1,
      panel: Fo
    }
  });
}
Al();
function C1(e) {
  return typeof e == "object" && e !== null && typeof e.addEventListener == "function" && typeof e.removeEventListener == "function" && typeof e.dispatchEvent == "function";
}
function P1(e) {
  var a;
  const t = (a = e.widgetMountContext) == null ? void 0 : a.eventTarget;
  return e.eventTarget ?? (C1(t) ? t : void 0);
}
function S1(e) {
  var t;
  return (t = e.widgetMountContext) == null ? void 0 : t.uiOptions;
}
function k1(e) {
  const t = Al();
  t.commit("panel/initPanel", pA(S1(e)));
  const { app: a } = p1(e.lang);
  Pi(a), a.use(t);
  const n = new b1(), o = new mA(n);
  a.provide(fA, o);
  const A = new $A({
    store: t,
    api: n,
    eventTarget: P1(e)
  });
  return a.provide(ue, A), a.provide(nl, {
    toolBarElm: Je(null),
    navigateBarElm: Je(null),
    editorElm: Je(null),
    rightPanelElm: Je(null),
    bottomBarElm: Je(null)
  }), e.widgetMountContext && a.provide(aa, e.widgetMountContext), {
    app: a,
    api: n,
    commandService: A,
    store: t
  };
}
function M1(e) {
  return e ?? window.lang ?? window.navigator.language;
}
function T1(e) {
  return new Promise((t, a) => {
    var A;
    const n = (A = e.state) == null ? void 0 : A.file;
    if (n != null && n.isReady) {
      t();
      return;
    }
    if (n != null && n.hasError) {
      a(new Error(n.message ?? "document load failed"));
      return;
    }
    const o = e.watch(
      (c) => {
        var s, i, d;
        return {
          isReady: !!((s = c.file) != null && s.isReady),
          hasError: !!((i = c.file) != null && i.hasError),
          message: ((d = c.file) == null ? void 0 : d.message) ?? null
        };
      },
      (c) => {
        if (c.isReady) {
          o(), t();
          return;
        }
        c.hasError && (o(), a(new Error(c.message ?? "document load failed")));
      }
    );
  });
}
function ta(e, t, a) {
  const n = {
    docId: (a == null ? void 0 : a.docId) ?? "",
    file: a == null ? void 0 : a.file,
    fileUrl: a == null ? void 0 : a.fileUrl,
    fileName: a == null ? void 0 : a.fileName,
    user: a == null ? void 0 : a.user,
    uiOptions: a == null ? void 0 : a.uiOptions,
    widgetMode: a == null ? void 0 : a.widgetMode,
    mainDom: Je(null),
    eventTarget: (a == null ? void 0 : a.eventTarget) ?? window
  }, { app: o, api: A, commandService: c, store: s } = k1({
    lang: M1(t),
    eventTarget: a == null ? void 0 : a.eventTarget,
    widgetMountContext: n
  }), i = T1(s);
  o.mount(e);
  async function d() {
    var m, p;
    await ((p = (m = A.docApp) == null ? void 0 : m.destroy) == null ? void 0 : p.call(m)), c.destroy(), o.unmount();
  }
  return {
    app: o,
    api: A,
    commandService: c,
    store: s,
    ready: i,
    destroy: d,
    close: d,
    unmount: d
  };
}
const H1 = ta, V1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ta,
  mount: H1,
  mountDocxApp: ta
}, Symbol.toStringTag, { value: "Module" }));
export {
  ue as C,
  OA as D,
  Zo as M,
  ve as R,
  Bo as U,
  no as _,
  l as a,
  io as b,
  $a as c,
  vo as d,
  dt as e,
  tl as f,
  el as g,
  Ja as h,
  Re as i,
  V1 as m,
  Eo as p,
  E1 as r,
  GA as u
};
