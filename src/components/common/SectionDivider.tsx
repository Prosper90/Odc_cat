interface SectionDividerProps {
  variant?: 'gradient' | 'dots' | 'simple';
  className?: string;
}

export default function SectionDivider({ variant = 'gradient', className = '' }: SectionDividerProps) {
  if (variant === 'dots') {
    return (
      <div className={`flex justify-center items-center py-8 ${className}`}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#FF8800] rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-[#FF8800] to-[#FF6600] rounded-full"></div>
          <div className="w-2 h-2 bg-[#FF6600] rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (variant === 'simple') {
    return (
      <div className={`py-6 ${className}`}>
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(255,136,0,0.3)] to-transparent"></div>
        </div>
      </div>
    );
  }

  // Default gradient variant
  return (
    <div className={`relative py-12 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,136,0,0.1)] to-transparent"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[rgba(255,136,0,0.5)]"></div>
          <div className="px-6">
            <div className="w-4 h-4 bg-gradient-to-r from-[#FF8800] to-[#FF6600] rounded-full shadow-lg animate-pulse"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[rgba(255,136,0,0.5)]"></div>
        </div>
      </div>
    </div>
  );
}