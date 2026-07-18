import { useState } from "react";
import { toast } from "sonner";
import type { FormPayload } from "@/lib/form-schemas";
import { submitFormFn } from "@/lib/submit-form";
import { openWhatsAppForForm } from "@/lib/whatsapp";

export function useSubmitForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const submit = async (payload: FormPayload) => {
    setIsSubmitting(true);

    try {
      await submitFormFn({
        data: payload,
      });

      setIsSuccess(true);

      openWhatsAppForForm(payload);

      toast.success("Form submitted!", {
        description:
          "Your details are saved. WhatsApp is open — tap Send to notify our team.",
      });

      return true;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";

      toast.error("Could not submit form", {
        description: message,
      });

      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => setIsSuccess(false);

  return {
    submit,
    isSubmitting,
    isSuccess,
    reset,
  };
}