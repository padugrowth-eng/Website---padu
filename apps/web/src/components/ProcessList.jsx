
import React from 'react';

export default function ProcessList({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-4 text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2.5 shrink-0" />
          <span className="leading-relaxed text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
}
