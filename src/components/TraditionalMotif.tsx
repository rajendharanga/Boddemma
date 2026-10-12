import React from 'react';
import { motion } from 'motion/react';

export const SacredLotusDivider: React.FC<{ label?: string; light?: boolean }> = ({
  label,
  light = false,
}) => {
  const strokeColor = light ? '#E8B83F' : '#B84232';
  const textColor = light ? 'text-[#E8B83F]' : 'text-[#B84232]';
  const lineColor = light ? 'bg-[#E8B83F]/30' : 'bg-[#B84232]/25';

  return (
    <div className="flex items-center justify-center gap-4 my-4 select-none" aria-hidden="true">
      <div className={`h-[1px] flex-1 max-w-[140px] ${lineColor}`} />
      <div className="flex items-center gap-2.5">
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 4C23 11 28 15 28 22C28 26.4183 24.4183 30 20 30C15.5817 30 12 26.4183 12 22C12 15 17 11 20 4Z"
            stroke={strokeColor}
            strokeWidth="1.8"
            fill="#E8B83F"
            fillOpacity="0.25"
          />
          <path
            d="M20 30C12 30 5 24 4 16C10 17 14 21 16 27"
            stroke={strokeColor}
            strokeWidth="1.6"
          />
          <path
            d="M20 30C28 30 35 24 36 16C30 17 26 21 24 27"
            stroke={strokeColor}
            strokeWidth="1.6"
          />
          <circle cx="20" cy="34" r="2" fill={strokeColor} />
        </svg>
        {label && (
          <span className={`text-xs uppercase tracking-[0.22em] font-bold ${textColor}`}>
            {label}
          </span>
        )}
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 4C23 11 28 15 28 22C28 26.4183 24.4183 30 20 30C15.5817 30 12 26.4183 12 22C12 15 17 11 20 4Z"
            stroke={strokeColor}
            strokeWidth="1.8"
            fill="#E8B83F"
            fillOpacity="0.25"
          />
          <path
            d="M20 30C12 30 5 24 4 16C10 17 14 21 16 27"
            stroke={strokeColor}
            strokeWidth="1.6"
          />
          <path
            d="M20 30C28 30 35 24 36 16C30 17 26 21 24 27"
            stroke={strokeColor}
            strokeWidth="1.6"
          />
          <circle cx="20" cy="34" r="2" fill={strokeColor} />
        </svg>
      </div>
      <div className={`h-[1px] flex-1 max-w-[140px] ${lineColor}`} />
    </div>
  );
};

export const ToranamTopBorder: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="w-full h-3 bg-repeat-x overflow-hidden flex items-center"
      style={{
        background:
          'repeating-linear-gradient(90deg, #B84232 0px, #B84232 16px, #E8B83F 16px, #E8B83F 32px, #315D38 32px, #315D38 48px)',
      }}
    />
  );
};

export const SmoothReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
