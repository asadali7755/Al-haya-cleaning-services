import { services } from "@/data/services";

interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export function validateContactForm(data: unknown): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data || typeof data !== "object") {
    return { valid: false, errors: { form: "Invalid form data." } };
  }

  const form = data as Record<string, unknown>;

  // Name
  const name = typeof form.name === "string" ? form.name.trim() : "";
  if (!name) {
    errors.name = "Name is required.";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (name.length > 100) {
    errors.name = "Name must be under 100 characters.";
  }

  // Email
  const email = typeof form.email === "string" ? form.email.trim() : "";
  if (!email) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  // Phone
  const phone = typeof form.phone === "string" ? form.phone.trim() : "";
  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!/^[+]?[\d\s()-]{7,20}$/.test(phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  // Service
  const service = typeof form.service === "string" ? form.service.trim() : "";
  if (!service) {
    errors.service = "Please select a service.";
  } else if (!services.some((s) => s.slug === service)) {
    errors.service = "Please select a valid service.";
  }

  // Message
  const message = typeof form.message === "string" ? form.message.trim() : "";
  if (!message) {
    errors.message = "Message is required.";
  } else if (message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (message.length > 1000) {
    errors.message = "Message must be under 1000 characters.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
