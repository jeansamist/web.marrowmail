import { Check, XCircle } from "lucide-react";

import { Reveal } from "@/components/motion-primitives/reveal";

export function Positioning() {
  return (
    <div className="pt-22">
      <div className="container px-6 mx-auto">
        <div className="space-y-3 ">
          <div className="text-muted-foreground">POSITIONING</div>
          <Reveal className="text-3xl sm:text-4xl lg:text-5xl leading-normal max-w-5xl w-full font-bold text-balance">
            Look professional every time you hit send.
          </Reveal>
          <Reveal
            delay={0.2}
            className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-5xl w-full text-balance"
          >
            When a client receives an email from a free address, it changes how
            they perceive the business. A custom domain builds trust before the
            conversation starts.
          </Reveal>
          <div className="flex flex-col lg:flex-row gap-3 mt-6">
            <Reveal className="bg-muted border flex-1 rounded-2xl p-6 space-y-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <XCircle />
                <div className="text-sm sm:text-base lg:text-lg font-medium">
                  THE WRONG WAY
                </div>
              </div>
              <div className="p-6 py-3 border rounded-xl bg-background">
                <span className="text-sm sm:text-base lg:text-lg">
                  ccovicator2019@gmail.com
                </span>
              </div>
              <div className="text-base font-medium  text-muted-foreground">
                &quot;Is this a real business ?&quot; - the question evry
                prospect quietly asks.
              </div>
            </Reveal>
            <Reveal
              delay={0.1}
              className="bg-primary/10 border relative border-primary overflow-hidden flex-1 rounded-2xl p-6 flex flex-col space-y-6"
            >
              <div className="flex items-center gap-3 text-primary">
                <Check />
                <div className="text-xs absolute top-0 right-0 bg-primary text-primary-foreground rounded-bl-2xl p-2 px-4">
                  THE MARROWMAIL WAY
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-medium">
                  CUSTOM DOMAIN
                </div>
              </div>
              <div className="p-6 py-3 border border-primary rounded-xl bg-background">
                <span className="text-sm sm:text-base lg:text-lg">
                  victor@yourcompany.com
                </span>
              </div>
              <div className="text-base font-medium  text-primary">
                Trust, before the conversation even starts.
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
