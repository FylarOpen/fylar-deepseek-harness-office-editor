import { getBuildTimestampSync } from "./manifestLoader.js?t=1788405500779";

const compatScripts = [
  ["zepto", "./vendor/zepto.min.js?t=1788405500779"],
  ["XRegExp", "./vendor/xregexp-all-min.js?t=1788405500779"]
];

const runtimeScope = typeof globalThis !== "undefined" ? globalThis : window;

function canInstallCompatGlobals() {
  return typeof document !== "undefined" && typeof window !== "undefined";
}

function hasCompatGlobal(name) {
  if (name === "zepto") {
    return Boolean(runtimeScope.$);
  }
  return Boolean(runtimeScope[name]);
}

function appendBuildTimestamp(url) {
  const timestamp = getBuildTimestampSync();
  if (!timestamp) {
    return url;
  }
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}t=${timestamp}`;
}

function installClassicScript(relativeUrl) {
  const baseUrl = new URL(relativeUrl, import.meta.url).href;
  const scriptUrl = appendBuildTimestamp(baseUrl);
  const existing = document.querySelector(`script[data-office-sdk-compat-src="${baseUrl}"]`);
  if (existing) {
    if (existing.dataset.officeSdkCompatLoaded === "true") {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`failed to load compat runtime script: ${scriptUrl}`)), {
        once: true
      });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = false;
    script.dataset.officeSdkCompatSrc = baseUrl;
    script.addEventListener("load", () => {
      script.dataset.officeSdkCompatLoaded = "true";
      resolve();
    }, { once: true });
    script.addEventListener("error", () => reject(new Error(`failed to load compat runtime script: ${scriptUrl}`)), {
      once: true
    });
    document.head.appendChild(script);
  });
}

if (canInstallCompatGlobals()) {
  for (const [globalName, relativeUrl] of compatScripts) {
    if (!hasCompatGlobal(globalName)) {
      await installClassicScript(relativeUrl);
    }
  }

  runtimeScope.jQuery ??= runtimeScope.$;
}

export {};
