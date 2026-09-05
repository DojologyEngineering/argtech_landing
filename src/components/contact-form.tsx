"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Press } from "@/components/motion/press";

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  // NOTE: no backend wired up yet — this only simulates a send.
  // Point this at a real endpoint (API route, Resend, Formspree, etc.) before launch.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 700);
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center gap-4 py-16 text-center"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-accent"
            >
              <CheckCircle2 className="h-7 w-7 text-accent-foreground" />
            </motion.div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-foreground">Message sent</h3>
              <p className="max-w-xs text-sm text-muted-foreground">
                Thanks for reaching out — we&apos;ll get back to you shortly.
              </p>
            </div>
            <Press>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setStatus("idle")}
                className="mt-1"
              >
                Send another message
              </Button>
            </Press>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jane Doe"
                  className="h-10"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="jane@farm.com"
                  className="h-10"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-subject">Subject</Label>
              <Input
                id="contact-subject"
                required
                value={form.subject}
                onChange={update("subject")}
                placeholder="Piloting on a 200-acre operation"
                className="h-10"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea
                id="contact-message"
                required
                value={form.message}
                onChange={update("message")}
                placeholder="Tell us a bit about your fields and what you're looking for..."
                className="min-h-32"
              />
            </div>

            <Press className="self-start">
              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="h-11 px-7 text-[15px] font-semibold"
              >
                {status === "submitting" ? "Sending…" : "Send message"}
              </Button>
            </Press>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
