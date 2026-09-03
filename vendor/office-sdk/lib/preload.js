import { preloadManifest as m, appendBuildTimestamp as c } from "./manifestLoader.js?t=1788405500779";
function o(r) {
  const e = import.meta.url;
  return new URL(r, e).href;
}
function p(r) {
  const e = import.meta.url, l = new URL(r, e).href;
  return c(l);
}
const h = [
  {
    fileName: "UI.js",
    href: o("./UI.js?t=1788405500779"),
    rel: "modulepreload"
  },
  {
    fileName: "UI.runtime.js",
    href: o("./UI.runtime.js?t=1788405500779"),
    rel: "modulepreload"
  },
  {
    fileName: "ApiBase.js",
    href: o("./ApiBase.js?t=1788405500779"),
    rel: "modulepreload"
  },
  {
    fileName: "index_browser.js",
    href: o("./index_browser.js?t=1788405500779"),
    rel: "modulepreload"
  },
  {
    fileName: "office.core.js",
    href: o("./office.core.js?t=1788405500779"),
    rel: "modulepreload"
  },
  {
    fileName: "office.locale.js",
    href: o("./office.locale.js?t=1788405500779"),
    rel: "modulepreload"
  },
  {
    fileName: "compat-globals.js",
    href: o("./compat-globals.js?t=1788405500779"),
    rel: "modulepreload"
  },
  {
    fileName: "locale-assets/locale.js",
    href: o("./locale-assets/locale.js?t=1788405500779"),
    rel: "modulepreload"
  },
  {
    fileName: "worker/index.js",
    href: o("./worker/index.js"),
    rel: "modulepreload"
  },
  {
    fileName: "worker/wasm/bootloader.js",
    href: o("./worker/wasm/bootloader.js"),
    rel: "modulepreload"
  },
  {
    fileName: "vendor/zepto.min.js",
    href: o("./vendor/zepto.min.js?t=1788405500779"),
    rel: "preload",
    as: "script"
  },
  {
    fileName: "vendor/xregexp-all-min.js",
    href: o("./vendor/xregexp-all-min.js?t=1788405500779"),
    rel: "preload",
    as: "script"
  },
  {
    fileName: "style.css",
    href: o("./style.css?t=1788405500779"),
    rel: "preload",
    as: "style"
  }
], w = [
  {
    fileName: "mountDocxApp.js",
    href: o("./mountDocxApp.js?t=1788405500779"),
    rel: "modulepreload"
  },
  {
    fileName: "mountXlsxApp.js",
    href: o("./mountXlsxApp.js?t=1788405500779"),
    rel: "modulepreload"
  },
  {
    fileName: "mountPptxApp.js",
    href: o("./mountPptxApp.js?t=1788405500779"),
    rel: "modulepreload"
  }
], s = /* @__PURE__ */ new Map();
let t = null, i = null;
function d() {
  return typeof document < "u";
}
function j() {
  var e, l;
  return t ?? (d() ? (t = !!((l = (e = document.createElement("link").relList) == null ? void 0 : e.supports) != null && l.call(e, "modulepreload")), t) : (t = !1, t));
}
function k(r) {
  return Array.from(document.querySelectorAll("link")).some((e) => e.href !== r ? !1 : e.rel === "modulepreload" || e.rel === "preload" || e.rel === "stylesheet");
}
function y(r) {
  return Array.from(document.scripts).some((e) => e.src === r);
}
function N(r, e) {
  return !!(k(e) || r.as === "script" && y(e));
}
function A(r, e) {
  return N(r, e) ? Promise.resolve() : new Promise((l, n) => {
    const a = document.createElement("link");
    a.rel = r.rel, a.href = e, a.dataset.officeSdkPreload = r.fileName, r.as && (a.as = r.as), r.rel === "modulepreload" && (a.crossOrigin = "anonymous"), a.addEventListener("load", () => l(), { once: !0 }), a.addEventListener(
      "error",
      () => n(new Error(`failed to preload ${r.fileName}`)),
      { once: !0 }
    ), (document.head ?? document.documentElement).appendChild(a);
  });
}
async function f(r) {
  if (typeof fetch != "function")
    return;
  const e = await fetch(r, {
    mode: "cors",
    credentials: "same-origin"
  });
  if (!e.ok && e.status !== 0)
    throw new Error(`failed to preload ${r}: ${e.status}`);
}
function x(r) {
  const e = p(r.fileName), l = `${r.rel}:${e}`;
  if (s.has(l))
    return s.get(l);
  const n = (async () => {
    if (d()) {
      if (r.rel === "modulepreload" && !j()) {
        await f(e);
        return;
      }
      try {
        await A(r, e);
      } catch {
        await f(e);
      }
    }
  })().catch((a) => {
    `${r.fileName}`;
  });
  return s.set(l, n), n;
}
async function u(r) {
  await Promise.all(r.map((e) => x(e)));
}
function P(r) {
  return new Promise((e) => {
    if (typeof window < "u" && "requestIdleCallback" in window) {
      window.requestIdleCallback(
        () => {
          r().finally(e);
        },
        { timeout: 1200 }
      );
      return;
    }
    setTimeout(() => {
      r().finally(e);
    }, 150);
  });
}
function b() {
  return i || (i = (async () => {
    await m(), await u(h), d() && await P(() => u(w));
  })()), i;
}
const g = b();
export {
  g as default,
  b as preloadOfficeSdk,
  g as preloadTask
};
