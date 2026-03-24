import { COUPLE } from "@/content/events";
import { cn } from "@/lib/utils";

type HashtagMarkProps = {
  className?: string;
  /** Extra classes for the emphasised T and S (inherits colour from parent by default) */
  emphasisClassName?: string;
};

/**
 * Renders the wedding hashtag with **T** and **S** visually emphasised.
 */
export function HashtagMark({ className, emphasisClassName }: HashtagMarkProps) {
  return (
    <span
      className={cn("inline", className)}
      aria-label={COUPLE.hashtag}
    >
      #
      <span
        className={cn(
          "font-extrabold text-[1.07em] tracking-normal",
          emphasisClassName,
        )}
      >
        T
      </span>
      housandtimesye
      <span
        className={cn(
          "font-extrabold text-[1.07em] tracking-normal",
          emphasisClassName,
        )}
      >
        S
      </span>
    </span>
  );
}
