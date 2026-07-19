import { Check } from "lucide-react";

import { Reveal } from "@/components/motion-primitives/reveal";

const includedItems = [
  "98.80% inbox delivery rate",
  "Spam & phishing protection",
  "Guided setup & migration support",
  "Secure encrypted email delivery",
  "Reliable cloud infrastructure",
  "Human customer support",
];

export function Reliability() {
  return (
    <div id="support" className="py-22 bg-muted">
      <div className="container px-6 mx-auto">
        <div className="lg:flex items-center justify-between gap-12">
          <div className="space-y-3 max-w-md">
            <div className="text-muted-foreground">RELIABILITY</div>
            <Reveal className="text-3xl sm:text-4xl lg:text-5xl leading-normal font-bold text-balance">
              Email infrastructure you can depend on.
            </Reveal>
            <Reveal
              delay={0.2}
              className="text-muted-foreground text-sm sm:text-base lg:text-lg text-balance"
            >
              Your email is one of the most important parts of your business
              communication. MarrowMail is built to keep it reliable, secure,
              and professional.
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mt-6 lg:mt-0">
            {includedItems.map((item, index) => (
              <Reveal
                key={item}
                delay={(index % 2) * 0.1}
                className="flex items-center gap-3"
              >
                <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span className="text-foreground">{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
