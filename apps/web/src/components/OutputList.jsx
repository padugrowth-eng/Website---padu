
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function OutputList({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-foreground">
          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <span className="leading-relaxed font-medium text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
}
