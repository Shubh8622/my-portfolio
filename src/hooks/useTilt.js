import { useEffect, useRef } from 'react';

export function useTilt() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const height = el.clientHeight || 1;
    const width = el.clientWidth || 1;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x - width / 2) / width) * 10;
      const rotateX = ((height / 2 - y) / height) * 10;

      el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
      el.classList.add('is-tilting');
    };

    const reset = () => {
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
      el.classList.remove('is-tilting');
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', reset);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', reset);
    };
  }, []);

  return ref;
}

