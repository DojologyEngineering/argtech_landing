// Pulsing "live" indicator. Takes its colour from the surrounding text.
export function LiveDot({ className = "" }: { className?: string }) {
  return (
    <span className={`relative flex h-2 w-2 shrink-0 ${className}`} aria-hidden>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-70 motion-reduce:animate-none" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
    </span>
  );
}
