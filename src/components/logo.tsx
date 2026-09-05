import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  /** "auto" follows the current color theme; "dark"/"light" force a variant. */
  variant?: "auto" | "dark" | "light";
}

export function LogoMark({ className, variant = "auto" }: LogoMarkProps) {
  if (variant !== "auto") {
    const src = variant === "dark" ? "/brand/mark-dark.png" : "/brand/mark-light.png";
    return (
      <span className={cn("relative block shrink-0", className)}>
        <Image src={src} alt="" fill className="object-contain" sizes="32px" />
      </span>
    );
  }

  return (
    <span className={cn("relative block shrink-0", className)}>
      <Image
        src="/brand/mark-dark.png"
        alt=""
        fill
        className="object-contain dark:hidden"
        sizes="32px"
      />
      <Image
        src="/brand/mark-light.png"
        alt=""
        fill
        className="hidden object-contain dark:block"
        sizes="32px"
      />
    </span>
  );
}

interface LogoProps {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  taglineClassName?: string;
  showTagline?: boolean;
  variant?: "auto" | "dark" | "light";
}

export function Logo({
  className,
  markClassName,
  wordmarkClassName,
  taglineClassName,
  showTagline = false,
  variant = "auto",
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark variant={variant} className={cn("h-8 w-8", markClassName)} />
      <div className="flex flex-col leading-none gap-1">
        <span
          className={cn(
            "font-sans font-extrabold tracking-[0.08em] text-lg",
            wordmarkClassName,
          )}
        >
          ARG&nbsp;TECH
        </span>
        {showTagline && (
          <span
            className={cn(
              "text-[11px] font-medium text-muted-foreground tracking-wide",
              taglineClassName,
            )}
          >
            Smart Farming. Sustainable Future.
          </span>
        )}
      </div>
    </div>
  );
}
