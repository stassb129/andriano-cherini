import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenis() {
  return instance;
}

export function scrollToTop(immediate = true) {
  if (instance) instance.scrollTo(0, { immediate, force: true });
  else window.scrollTo(0, 0);
}

export function lockScroll(locked: boolean) {
  if (!instance) {
    document.documentElement.style.overflow = locked ? "hidden" : "";
    return;
  }
  if (locked) instance.stop();
  else instance.start();
}

/* The intro (preloader) plays once per session; hero animations wait for it. */
const INTRO_EVENT = "ac:intro-done";
let introDone = false;

export function markIntroDone() {
  introDone = true;
  window.dispatchEvent(new Event(INTRO_EVENT));
}

export function onIntroDone(cb: () => void) {
  if (introDone) {
    cb();
    return () => {};
  }
  window.addEventListener(INTRO_EVENT, cb, { once: true });
  return () => window.removeEventListener(INTRO_EVENT, cb);
}
