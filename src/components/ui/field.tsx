import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type FieldProps = {
  children: ReactNode;
  className?: string;
  description?: string;
  error?: string;
  htmlFor?: string;
  label: string;
  required?: boolean;
};

export function Field({
  children,
  className,
  description,
  error,
  htmlFor,
  label,
  required = false,
}: FieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label
        className="flex items-center gap-1 text-seller-body font-medium"
        htmlFor={htmlFor}
      >
        {label}
        {required ? (
          <span aria-hidden="true" className="text-seller-danger">
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? <p className="text-xs text-seller-danger">{error}</p> : null}
      {!error && description ? (
        <p className="text-xs text-seller-muted">{description}</p>
      ) : null}
    </div>
  );
}
