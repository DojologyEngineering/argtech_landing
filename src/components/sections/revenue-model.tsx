"use client";

import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { useContent } from "@/lib/i18n/context";
import type { Content } from "@/lib/i18n/en";

type Stream = Content["revenueModel"]["streams"][number];

export function RevenueModel() {
  const { revenueModel, ui } = useContent();

  const rows: { label: string; render: (s: Stream) => ReactNode }[] = [
    {
      label: ui.feeLabel,
      render: (s) => (
        <span className="font-heading font-semibold text-primary">{s.fee}</span>
      ),
    },
    { label: ui.weGetLabel, render: (s) => s.weGet },
    { label: ui.farmerGetsLabel, render: (s) => s.farmerGets },
  ];

  return (
    <section id="partners" className="border-y border-border/70 bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <ScrollReveal className="mb-14 flex max-w-xl flex-col gap-4">
          <span className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
            {revenueModel.eyebrow}
          </span>
          <h2 className="font-heading text-3xl leading-tight font-semibold text-balance text-foreground md:text-4xl">
            {revenueModel.heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr>
                  <th scope="col" className="w-36 border-b border-border p-4" />
                  {revenueModel.streams.map((stream) => (
                    <th
                      key={stream.title}
                      scope="col"
                      className="border-b border-border p-4 align-top"
                    >
                      <span className="mb-1.5 inline-block w-fit rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-muted-foreground uppercase">
                        {stream.phase}
                      </span>
                      <span className="font-heading block text-base font-semibold text-foreground">
                        {stream.title}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-border last:border-0">
                    <th
                      scope="row"
                      className="p-4 text-xs font-bold tracking-wide text-muted-foreground uppercase align-top"
                    >
                      {row.label}
                    </th>
                    {revenueModel.streams.map((stream) => (
                      <td
                        key={stream.title}
                        className="p-4 align-top text-[13px] leading-relaxed text-foreground"
                      >
                        {row.render(stream)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
