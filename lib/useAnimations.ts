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
    if (!startOnView) {
      startedRef.current = true;
    }
  }, [startOnView]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !startOnView) return;

    const observer = getSharedObserver(0.3);
    callbacks.set(el, () => {
      if (startedRef.current) return;
      startedRef.current = true;

      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const newCount = Math.floor(eased * end);
        setCount(newCount);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    });
    observer.observe(el);

    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, [startOnView, end, duration]);

  return { count, ref, start: useCallback(() => {}, []) };
}

// ====== Mouse parallax (throttled for performance) ======
export function useMouseParallax(intensity = 0.02) {
  const posRef = useRef({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Skip on mobile/tablet — no mouse, saves CPU
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return;
    // Skip if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = {
        x: (e.clientX - window.innerWidth / 2) * intensity,
        y: (e.clientY - window.innerHeight / 2) * intensity,
      };

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          setPosition({ ...posRef.current });
          rafRef.current = null;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [intensity]);

  return position;
}

// ====== Parallax scroll effect (throttled) ======
export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const scrolled = window.innerHeight - rect.top;
          if (scrolled > 0) setOffset(scrolled * speed);
        }
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed]);

  return { ref, offset };
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

    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
      timersRef.current.forEach(clearTimeout);
    };
  }, [count, staggerDelay, threshold]);

  return { ref, visibleItems };
}
