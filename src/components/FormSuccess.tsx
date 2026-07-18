import { CheckCircle2 } from "lucide-react";

type FormSuccessProps = {
  title?: string;
  description?: string;
  onReset?: () => void;
  resetLabel?: string;
};

export function FormSuccess({
  title = "Thank you!",
  description = "Your details are saved. If WhatsApp opened, tap Send to notify our team. We'll contact you shortly.",
  onReset,
  resetLabel = "Submit another response",
}: FormSuccessProps) {
  return (
    <div className="rounded-3xl bg-card border border-border p-8 sm:p-12 shadow-[var(--shadow-soft)] text-center">
      <div className="mx-auto h-14 w-14 blob bg-[var(--mint)] flex items-center justify-center">
        <CheckCircle2 className="h-7 w-7 text-foreground" />
      </div>
      <h3 className="mt-5 text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-muted-foreground max-w-md mx-auto">{description}</p>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="mt-5 text-sm font-bold text-primary hover:underline"
        >
          {resetLabel}
        </button>
      )}
    </div>
  );
}
