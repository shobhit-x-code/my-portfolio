"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to send your message right now.");
      }

      form.reset();
      setStatus("success");
      setMessage("Your message has been sent.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Unable to send your message right now.",
      );
    }
  }

  return (
    <section id="contact" className="py-18 sm:py-24">
      <>
        <SectionHeading
          eyebrow="Contact"
          title="Send me a message."
          description="Have a project, role, or collaboration in mind? Share a few details and I will get back to you soon."
        />

        <div className="mx-auto mt-14 flex max-w-4xl flex-col items-center px-6 text-center sm:px-8">
          <form className="motion-card w-full max-w-3xl" onSubmit={handleSubmit}>
            <div className="grid gap-x-8 gap-y-8 text-left md:grid-cols-2">
              <label className="block">
                <span className="type-label-medium block text-brand-2">Your name *</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="type-para motion-field mt-4 block w-full border-0 border-b border-white/18 bg-transparent pb-3 text-white outline-none transition placeholder:text-white/35 focus:border-brand-1"
                />
              </label>

              <label className="block">
                <span className="type-label-medium block text-brand-2">Your email *</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="type-para motion-field mt-4 block w-full border-0 border-b border-white/18 bg-transparent pb-3 text-white outline-none transition placeholder:text-white/35 focus:border-brand-1"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="type-label-medium block text-brand-2">Your message *</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Enter your message"
                  className="type-para motion-field mt-4 block w-full resize-none border-0 border-b border-white/18 bg-transparent pb-3 text-white outline-none transition placeholder:text-white/35 focus:border-brand-1"
                />
              </label>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="type-button motion-button inline-flex min-h-14 items-center justify-center rounded-full bg-brand-1 px-8 py-4 text-bg-1 transition duration-200 hover:bg-brand-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {message ? (
                <p
                  className={`type-para ${
                    status === "success" ? "text-brand-2" : "text-[#ff8f8f]"
                  }`}
                >
                  {message}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </>
    </section>
  );
}
