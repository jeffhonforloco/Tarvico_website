type Appearance = 'light' | 'dark'

const storageKey = 'tarvico-appearance'
const systemQuery = '(prefers-color-scheme: dark)'
const changeEvent = 'tarvico-appearance-change'
let sessionPreference: Appearance | null = null

function isAppearance(value: unknown): value is Appearance {
  return value === 'light' || value === 'dark'
}

// Resolve the first paint before React hydrates the static page.
export const appearanceBootstrap = `(() => {
  let saved;
  try { saved = localStorage.getItem(${JSON.stringify(storageKey)}); } catch {}
  document.documentElement.dataset.theme =
    saved === 'dark' || saved === 'light' ? saved :
    matchMedia(${JSON.stringify(systemQuery)}).matches ? 'dark' : 'light';
})();`

export function getAppearance(): Appearance {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export function getServerAppearance(): Appearance {
  return 'light'
}

export function subscribeToAppearance(listener: () => void) {
  const system = window.matchMedia(systemQuery)
  const sync = () => {
    let saved: string | null = null
    try { saved = localStorage.getItem(storageKey) } catch {}
    document.documentElement.dataset.theme = sessionPreference ??
      (isAppearance(saved) ? saved : system.matches ? 'dark' : 'light')
    listener()
  }
  const onStorage = (event: StorageEvent) => {
    if (event.key !== storageKey && event.key !== null) return
    sessionPreference = null
    sync()
  }

  system.addEventListener('change', sync)
  window.addEventListener('storage', onStorage)
  window.addEventListener(changeEvent, listener)
  sync()
  return () => {
    system.removeEventListener('change', sync)
    window.removeEventListener('storage', onStorage)
    window.removeEventListener(changeEvent, listener)
  }
}

export function toggleAppearance() {
  const next = getAppearance() === 'dark' ? 'light' : 'dark'
  sessionPreference = next
  try { localStorage.setItem(storageKey, next) } catch {}
  document.documentElement.dataset.theme = next
  window.dispatchEvent(new Event(changeEvent))
}
