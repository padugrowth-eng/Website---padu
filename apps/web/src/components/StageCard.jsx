
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ProcessList from './ProcessList.jsx';
import OutputList from './OutputList.jsx';
import { cn } from '@/lib/utils.js';

export default function StageCard({ 
  stageNumber, 
  title, 
  description, 
  processList, 
  outputList, 
  isExpanded, 
  onToggle 
}) {
  return (
    <div 
      className={cn(
        "border border-border rounded-2xl bg-card overflow-hidden transition-all duration-300",
        isExpanded ? "ring-1 ring-primary/30 shadow-lg shadow-primary/5" : "hover:border-primary/30"
      )}
    >
      <button 
        onClick={onToggle} 
        className="w-full text-left p-6 md:p-8 flex items-start md:items-center justify-between gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-1">
          <span className="text-4xl md:text-5xl font-light text-primary/40 font-mono shrink-0">
            {stageNumber}
          </span>
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground line-clamp-2 md:line-clamp-none text-balance">
              {description}
            </p>
          </div>
        </div>
        <div className="shrink-0 mt-2 md:mt-0">
          <ChevronDown 
            className={cn(
              "w-6 h-6 text-muted-foreground transition-transform duration-300", 
              isExpanded && "rotate-180 text-primary"
            )} 
          />
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 md:p-8 pt-0 border-t border-border/50 grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
                  Process
                </h4>
                <ProcessList items={processList} />
              </div>
              <div className="bg-secondary/50 p-6 md:p-8 rounded-xl border border-border/50">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
                  Key Outputs
                </h4>
                <OutputList items={outputList} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
