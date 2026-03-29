"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function validateClient(): FormErrors {
    const errs: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    }
    if (!formData.service) {
      errs.service = "Please select a service.";
    }
    if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    if (formData.message.length > 1000) {
      errs.message = "Message must be under 1000 characters.";
    }
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clientErrors = validateClient();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }
    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else if (data.errors) {
        setErrors(data.errors);
        setStatus("idle");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12 px-6 rounded-2xl" style={{ backgroundColor: "var(--bg-surface)" }}>
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          Thank You!
        </h3>
        <p style={{ color: "var(--text-secondary)" }}>
          We&apos;ve received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971545567799";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-700 dark:text-red-400 font-medium">Something went wrong.</p>
            <p className="text-red-600 dark:text-red-400 text-sm">
              Please try again or{" "}
              <a href={whatsappUrl} className="underline font-medium" target="_blank" rel="noopener noreferrer">
                contact us via WhatsApp
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Full Name"
          id="name"
          type="text"
          value={formData.name}
          onChange={(v) => setFormData((p) => ({ ...p, name: v }))}
          error={errors.name}
          required
        />
        <FormField
          label="Email Address"
          id="email"
          type="email"
          value={formData.email}
          onChange={(v) => setFormData((p) => ({ ...p, email: v }))}
          error={errors.email}
          required
        />
        <FormField
          label="Phone Number"
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(v) => setFormData((p) => ({ ...p, phone: v }))}
          error={errors.phone}
          placeholder="+971 545 567 799"
          required
        />
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>
            Service Required <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => setFormData((p) => ({ ...p, service: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg border outline-none transition-colors focus:ring-2 focus:ring-gold/50"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: errors.service ? "#ef4444" : "var(--border-color)",
              color: "var(--text-primary)",
            }}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className="text-red-500 text-sm mt-1">{errors.service}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
          className="w-full px-4 py-3 rounded-lg border outline-none transition-colors focus:ring-2 focus:ring-gold/50 resize-vertical"
          style={{
            backgroundColor: "var(--bg-surface)",
            borderColor: errors.message ? "#ef4444" : "var(--border-color)",
            color: "var(--text-primary)",
          }}
          placeholder="Tell us about your cleaning needs..."
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          "Sending..."
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

function FormField({
  label,
  id,
  type,
  value,
  onChange,
  error,
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border outline-none transition-colors focus:ring-2 focus:ring-gold/50"
        style={{
          backgroundColor: "var(--bg-surface)",
          borderColor: error ? "#ef4444" : "var(--border-color)",
          color: "var(--text-primary)",
        }}
        placeholder={placeholder}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}
