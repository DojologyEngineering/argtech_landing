"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Press } from "@/components/motion/press";
import { useContent } from "@/lib/i18n/context";

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const { ui } = useContent();
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
    <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8">
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
              <h3 className="text-lg font-bold text-foreground">{ui.messageSent}</h3>
              <p className="max-w-xs text-sm text-muted-foreground">
                {ui.messageSentBody}
              </p>
            </div>
            <Press>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setStatus("idle")}
                className="mt-1"
              >
                {ui.sendAnotherMessage}
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
                <Label htmlFor="contact-name">{ui.formName}</Label>
                <Input
                  id="contact-name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder={ui.formNamePlaceholder}
                  className="h-10"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-email">{ui.formEmail}</Label>
                <Input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder={ui.formEmailPlaceholder}
                  className="h-10"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-subject">{ui.formSubject}</Label>
              <Input
                id="contact-subject"
                required
                value={form.subject}
                onChange={update("subject")}
                placeholder={ui.formSubjectPlaceholder}
                className="h-10"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-message">{ui.formMessage}</Label>
              <Textarea
                id="contact-message"
                required
                value={form.message}
                onChange={update("message")}
                placeholder={ui.formMessagePlaceholder}
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
                {status === "submitting" ? ui.sending : ui.sendMessage}
              </Button>
            </Press>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
