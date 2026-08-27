import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type OptionListProps = {
  className?: string;
  name: string;
  options: Array<{ description?: string; label: string; value: string }>;
  value?: string;
};

export function OptionList({
  className,
  name,
  options,
  value,
}: OptionListProps) {
  return (
    <div
      className={cn(
        "divide-y divide-seller-border rounded-seller-card border border-seller-border",
        className,
      )}
    >
      {options.map((option) => (
        <label
          className="flex cursor-pointer items-center gap-3 p-3"
          key={option.value}
        >
          <input
            className="peer sr-only"
            defaultChecked={option.value === value}
            name={name}
            type="radio"
            value={option.value}
          />
          <span className="flex size-5 items-center justify-center rounded-full border border-seller-border peer-checked:border-seller-primary peer-checked:bg-seller-primary">
            <Check
              aria-hidden="true"
              className="size-3.5 text-white opacity-0 peer-checked:opacity-100"
            />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-medium">{option.label}</span>
            {option.description ? (
              <span className="block text-xs text-seller-muted">
                {option.description}
              </span>
            ) : null}
          </span>
        </label>
      ))}
    </div>
  );
}
