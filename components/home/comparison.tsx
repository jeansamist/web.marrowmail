import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const comparisonFeatures = [
  {
    label: "Starting price",
    marrowmail: "2,500 CFA/mo",
    google: "6,000 CFA/mo",
    microsoft: "7,500 CFA/mo",
  },
  {
    label: "Setup experience",
    marrowmail: "Simple & guded",
    google: "Complex & technical",
    microsoft: "Complex & technical",
  },
  {
    label: "Built-in AI tools",
    marrowmail: "Included",
    google: "Not included",
    microsoft: "Not included",
  },
  {
    label: "Role-based emails",
    marrowmail: "Up to 10 free",
    google: "Extra cost per user",
    microsoft: "Extra cost per user",
  },
  {
    label: "Payment options",
    marrowmail: "Mobile Money + cards",
    google: "Cards only",
    microsoft: "Cards only",
  },
  {
    label: "Focus",
    marrowmail: "Email first productivity",
    google: "Full office suite",
    microsoft: "Full office suite",
  },
];

export function Comparison() {
  return (
    <div className="py-22">
      <div className="container px-6 mx-auto space-y-12">
        <div className="space-y-3 text-center">
          <div className="text-muted-foreground">COMPARE</div>
          <div className="text-3xl sm:text-4xl lg:text-5xl leading-normal flex-1 font-bold text-balance">
            Why businesses choose MarrowMail.
          </div>
          <div className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-xl w-full mx-auto">
            Built for professional comunnication - without the entreprise
            clutter.
          </div>
        </div>
        <div className="hidden xl:flex w-full border border-primary shadow rounded-2xl bg-muted/5">
          <div className="max-w-xl w-full">
            <div className="p-6 h-[105.6px]">
              <div className="text-sm text-muted-foreground">FEATURE</div>
            </div>
            {comparisonFeatures.map((feature) => (
              <div
                key={feature.label}
                className="px-6 py-4 border-t text-foreground"
              >
                {feature.label}
              </div>
            ))}
            <div className="h-16 border-t border-primary"></div>
          </div>
          <div className="flex-1 border-x border-primary bg-primary/10">
            <div className="p-6 bg-primary h-[105.6px]">
              <div className="text-sm text-primary-foreground/80">
                OUR PICK
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-bold text-primary-foreground">
                MarrowMail
              </div>
            </div>
            {comparisonFeatures.map((feature) => (
              <div
                key={feature.label}
                className="px-6 py-4 border-t text-foreground font-semibold line-clamp-1"
              >
                {feature.marrowmail}
              </div>
            ))}
            <div className="h-16 border-t border-primary px-6 flex items-center">
              <Button className={"w-full"}>
                Get my email <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <div className="p-6 h-[105.6px]">
              <div className="text-sm text-muted-foreground">COMPETITOR</div>
              <div className="text-sm sm:text-base lg:text-lg font-bold text-foreground line-clamp-1">
                Google Workspace
              </div>
            </div>
            {comparisonFeatures.map((feature) => (
              <div
                key={feature.label}
                className="px-6 py-4 border-t text-muted-foreground line-clamp-1"
              >
                {feature.google}
              </div>
            ))}
            <div className="h-16 border-t border-t-primary"></div>
          </div>
          <div className="flex-1">
            <div className="p-6 h-[105.6px]">
              <div className="text-sm text-muted-foreground">COMPETITOR</div>
              <div className="text-sm sm:text-base lg:text-lg font-bold text-foreground line-clamp-1">
                Microsoft 365
              </div>
            </div>
            {comparisonFeatures.map((feature) => (
              <div
                key={feature.label}
                className="px-6 py-4 border-t text-muted-foreground line-clamp-1"
              >
                {feature.microsoft}
              </div>
            ))}
            <div className="h-16 border-t border-t-primary"></div>
          </div>
        </div>

        <div className="flex xl:hidden flex-col gap-4">
          <div className="rounded-2xl border-2 border-primary bg-primary/10 overflow-hidden">
            <div className="p-6 bg-primary">
              <div className="text-sm text-primary-foreground/80">
                OUR PICK
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-bold text-primary-foreground">
                MarrowMail
              </div>
            </div>
            <div className="divide-y divide-primary/20">
              {comparisonFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="px-6 py-3 flex items-center justify-between gap-3"
                >
                  <span className="text-sm text-muted-foreground">
                    {feature.label}
                  </span>
                  <span className="text-foreground font-semibold text-right">
                    {feature.marrowmail}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-6 pt-2">
              <Button className={"w-full"}>
                Get my email <ArrowRight />
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border bg-muted/5 overflow-hidden">
            <div className="p-6">
              <div className="text-sm text-muted-foreground">COMPETITOR</div>
              <div className="text-sm sm:text-base lg:text-lg font-bold text-foreground">
                Google Workspace
              </div>
            </div>
            <div className="divide-y">
              {comparisonFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="px-6 py-3 flex items-center justify-between gap-3"
                >
                  <span className="text-sm text-muted-foreground">
                    {feature.label}
                  </span>
                  <span className="text-foreground text-right">
                    {feature.google}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-muted/5 overflow-hidden">
            <div className="p-6">
              <div className="text-sm text-muted-foreground">COMPETITOR</div>
              <div className="text-sm sm:text-base lg:text-lg font-bold text-foreground">
                Microsoft 365
              </div>
            </div>
            <div className="divide-y">
              {comparisonFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="px-6 py-3 flex items-center justify-between gap-3"
                >
                  <span className="text-sm text-muted-foreground">
                    {feature.label}
                  </span>
                  <span className="text-foreground text-right">
                    {feature.microsoft}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-muted-foreground">
          Competitor pricing converted to CFA for comparison. Actual pricing
          varies by plan and exchange rate.
        </div>
      </div>
    </div>
  );
}
