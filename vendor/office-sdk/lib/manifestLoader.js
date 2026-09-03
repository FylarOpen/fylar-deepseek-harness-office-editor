let n = null, i = null;
async function r() {
  if (n === null)
    try {
      const t = new URL(
        /* @vite-ignore */
        "./manifest.json",
        import.meta.url
      ).href, e = await fetch(t, {
        cache: "no-cache"
      });
      if (!e.ok) {
        n = {};
        return;
      }
      n = await e.json();
    } catch {
      n = {};
    }
}
function s() {
  return i || (i = r()), i;
}
function a() {
  return n == null ? void 0 : n.buildTimestamp;
}
function u(t) {
  const e = a();
  if (!e)
    return t;
  const o = t.includes("?") ? "&" : "?";
  return `${t}${o}t=${e}`;
}
function f() {
  return s();
}
function c() {
  return n == null ? void 0 : n.buildTimestamp;
}
export {
  u as appendBuildTimestamp,
  a as getBuildTimestamp,
  c as getBuildTimestampSync,
  f as preloadManifest
};
