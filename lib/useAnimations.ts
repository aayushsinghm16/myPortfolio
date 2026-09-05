'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

// ====== Scroll-triggered reveal animation ======
// Uses a single shared observer per threshold for better performance
const observerCache = new Map<number, IntersectionObserver>();
const callbacks = new Map<Element, (visible: boolean) => void>();

function getSharedObserver(threshold: number): IntersectionObserver {
  if (observerCache.has(threshold)) return observerCache.get(threshold)!;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cb = callbacks.get(entry.target);
          if (cb) {
            cb(true);
            observer.unobserve(entry.target);
            callbacks.delete(entry.target);
          }
        }
      });
    },
    { threshold, rootMargin: '50px' }
  );

  observerCache.set(threshold, observer);
  return observer;
}

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if already in viewport (above fold)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = getSharedObserver(threshold);
    callbacks.set(el, setIsVisible);
    observer.observe(el);

    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, [threshold]);

  return { ref, isVisible };
}

// ====== Animated counter (optimized: fewer re-renders) ======
export function useCounter(end: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;

    const startAnim = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      // Respect reduced-motion: jump straight to the final value (never animate from 0)
      if (typeof window !== 'undefined' &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setCount(end);
        return;
      }

      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };

    if (!startOnView) { startAnim(); return; }
    if (!el) return;

    // Already visible on mount -> start immediately rather than waiting on an observer that may never fire
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) { startAnim(); return; }

    const observer = getSharedObserver(0.3);
    callbacks.set(el, startAnim);
    observer.observe(el);

    // No scroll fallback here on purpose: the two branches above (already-in-viewport,
    // then the shared observer) cover every case, and a per-instance scroll listener
    // calling getBoundingClientRect() forces a synchronous layout flush on every frame.
    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, [startOnView, end, duration]);

  return { count, ref, start: useCallback(() => {}, []) };
}

// ====== Mouse parallax ======
// Writes the transform straight to the node inside rAF. Returning state here would
// reconcile the entire consuming component on every pointer frame to move one element.
export function useMouseParallax<T extends HTMLElement = HTMLDivElement>(intensity = 0.02) {
  const ref = useRef<T>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // No pointer to track on touch devices, and honour reduced-motion.
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = {
        x: (e.clientX - window.innerWidth / 2) * intensity,
        y: (e.clientY - window.innerHeight / 2) * intensity,
      };
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const el = ref.current;
        if (el) {
          const { x, y } = posRef.current;
          // translate3d keeps this on the compositor instead of triggering layout.
          el.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
        }
        rafRef.current = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [intensity]);

  return ref;
}

// ====== Stagger children (optimized: batch state updates) ======
export function useStaggerReveal(count: number, staggerDelay = 100, threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(count).fill(false));
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if already in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisibleItems(new Array(count).fill(true));
      return;
    }

    const observer = getSharedObserver(threshold);
    callbacks.set(el, () => {
      for (let i = 0; i < count; i++) {
        const timer = setTimeout(() => {
          setVisibleItems(prev => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * staggerDelay);
        timersRef.current.push(timer);
      }
    });
    observer.observe(el);

    const timers = timersRef.current;
    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
      timers.forEach(clearTimeout);
    };
  }, [count, staggerDelay, threshold]);

  return { ref, visibleItems };
}
