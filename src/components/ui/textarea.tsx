import { type TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error = false, ...props }, ref) => (
    <textarea
      aria-invalid={error || undefined}
      className={cn(
        "min-h-28 w-full resize-y rounded-seller-control border bg-white px-3 py-3 text-seller-body outline-none placeholder:text-seller-muted focus:border-seller-primary focus:ring-2 focus:ring-seller-primary/10 disabled:cursor-not-allowed disabled:bg-seller-secondary",
        error ? "border-seller-danger" : "border-seller-border",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);

Textarea.displayName = "Textarea";
