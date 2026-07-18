import { createServerFn } from "@tanstack/react-start";
import { formPayloadSchema, type FormPayload } from "./form-schemas";

function getEnv(name: string): string | undefined {
  if (typeof process !== "undefined" && process.env[name]) {
    return process.env[name];
  }

  const meta = import.meta as ImportMeta & {
    env?: Record<string, string | undefined>;
  };

  return meta.env?.[name];
}

export const submitFormFn = createServerFn({
  method: "POST",
})
  .validator((data: FormPayload) => formPayloadSchema.parse(data))
  .handler(async ({ data }) => {
    const parsed = data;

    const scriptUrl = getEnv("GOOGLE_SCRIPT_URL");
    const secret = getEnv("GOOGLE_SCRIPT_SECRET");

    if (!scriptUrl || !secret) {
      throw new Error(
        "Form service is not configured yet. Please call us at +91 95892 08322."
      );
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...parsed,
        secret,
      }),
      redirect: "follow",
    });

    let result: {
      success?: boolean;
      error?: string;
    };

    try {
      result = await response.json();
    } catch {
      throw new Error(
        "Unable to save your form. Please try again or call us directly."
      );
    }

    if (!response.ok || !result.success) {
      throw new Error(result.error ?? "Failed to submit form.");
    }

    return {
      success: true as const,
    };
  });