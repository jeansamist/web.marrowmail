import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const includedItems = [
  "Your own branded email address",
  "10 GB secure storage",
  "Built-in translation tools",
  "Encrypted email security",
  "Guided setup experience",
  "Up to 10 free role-based addresses",
  "AI summaries & email rewriting",
  "Follow-up reminders",
  "High inbox delivery",
];

export function Pricing() {
  return (
    <div className="py-22">
      <div className="container px-6 mx-auto">
        <div className="space-y-3 text-center">
          <div className="text-muted-foreground">PRICING</div>
          <div className="text-3xl sm:text-4xl lg:text-5xl leading-normal font-bold text-balance">
            Simple pricing. Everything included.
          </div>
          <div className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-xl w-full mx-auto">
            One plan. No tiers. No &quot;AI add-on&quot; upsells. Cancel any
            time.
          </div>
        </div>
        <div className="max-w-2xl w-full mx-auto mt-12 rounded-2xl border border-primary shadow bg-background overflow-hidden">
          <div className="bg-primary text-primary-foreground text-xs px-6 py-2 flex flex-wrap items-center justify-between gap-2">
            <span>★ CORE PLAN — RECOMMENDED FOR EVERY BUSINESS SIZE</span>
            <span>NO CONTRACTS · CANCEL ANYTIME</span>
          </div>
          <div className="p-8 space-y-6">
            <div className="space-y-6">
              <div>
                <div className="text-sm text-muted-foreground">CORE PLAN</div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
                    2,500
                  </span>
                  <div className="text-sm text-muted-foreground pb-1">
                    <div>CFA</div>
                    <div>PER MAILBOX / MO</div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">PAY WITH</div>
                <div className="flex gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 border rounded-full text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                    Orange Money
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 border rounded-full text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    MTN MoMo
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 border rounded-full text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    Local cards
                  </span>
                </div>
              </div>
            </div>
            <div className="border-t pt-6 text-muted-foreground text-sm sm:text-base lg:text-lg">
              Professional business email with AI-powered tools, secure
              hosting, and flexible payments. Everything you need to
              communicate professionally — in one price.
            </div>
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">
                INCLUDED WITH EVERY MAILBOX
              </div>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {includedItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Button size="lg" className="w-full">
              Get my business email <ArrowRight />
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              SETUP IN MINUTES · NO CARD REQUIRED TO START
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
