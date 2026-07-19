import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion-primitives/reveal";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <div className="bg-secondary py-22 text-center">
      <div className="container px-6 mx-auto space-y-6">
        <div className="text-secondary-foreground/60">GET STARTED</div>
        <Reveal className="max-w-4xl w-full mx-auto text-secondary-foreground text-4xl sm:text-5xl lg:text-6xl leading-normal font-bold text-balance">
          Your business deserves to look professional.
        </Reveal>
        <Reveal
          delay={0.2}
          className="text-secondary-foreground/70 text-sm sm:text-base lg:text-lg text-balance max-w-2xl w-full mx-auto"
        >
          Join thousands of businesses already using MarrowMail to build
          trust, communicate better, and grow faster.
        </Reveal>
        <Reveal delay={0.3}>
          <Button size="lg" className="mt-3">
            Get my business email today <ArrowRight />
          </Button>
        </Reveal>
        <div className="text-secondary-foreground/50 text-sm">
          SETUP IN MINUTES · PAY WITH MOBILE MONEY · CANCEL ANYTIME
        </div>
      </div>
    </div>
  );
}
