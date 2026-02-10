'use client';

import { useTheme } from 'next-themes';

export function ThemeDebug() {
  const { theme, resolvedTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded text-xs z-50 font-mono">
      <div>Theme: {theme || 'undefined'}</div>
      <div>Resolved: {resolvedTheme || 'undefined'}</div>
      <div>UA: {typeof navigator !== 'undefined' && navigator.userAgent.includes('Edg') ? 'Edge' : 'Other'}</div>
      <div>HTML class: {typeof document !== 'undefined' ? document.documentElement.className : 'SSR'}</div>
    </div>
  );
}
