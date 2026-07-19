import { Bell, Languages, Loader, Lock, Pen, Users } from "lucide-react";

import { Reveal } from "@/components/motion-primitives/reveal";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Loader,
    variant: "secondary" as const,
    title: "AI Email Summaries",
    description:
      "Catch up on long email conversations instantly with AI-generated summaries.",
  },
  {
    icon: Pen,
    variant: "default" as const,
    title: "AI Rewrite Assistant",
    description:
      "Turn rough drafts into polished professional emails in seconds.",
  },
  {
    icon: Languages,
    variant: "secondary" as const,
    title: "Built-in Translation",
    description:
      "Read and reply to emails across languages directly from your inbox.",
  },
  {
    icon: Bell,
    variant: "default" as const,
    title: "Follow-up Reminders",
    description:
      "Get reminded when clients haven't replied so opportunities never go cold.",
  },
  {
    icon: Lock,
    variant: "secondary" as const,
    title: "Private & Secure",
    description:
      "Encrypted email. No ad targeting. No using your conversations for training.",
  },
  {
    icon: Users,
    variant: "default" as const,
    title: "Free Role-based Adrdresses",
    description:
      "Create support@, sales@, info@, at no extra cost - up to 10 of them.",
  },
];

export function Features() {
  return (
    <div id="features" className="py-22 mt-22 bg-accent">
      <div className="container px-6 mx-auto">
        <div className="space-y-3 ">
          <div className="text-muted-foreground">FEATURES</div>
          <div className="lg:flex items-end justify-between">
            <Reveal className="flex-1 text-3xl sm:text-4xl lg:text-5xl leading-normal font-bold text-balance">
              Everything you need to communicate professionally.
            </Reveal>
            <Reveal
              delay={0.2}
              className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-xl w-full"
            >
              Native productivity utilies built into the inbox - no add-ons,
              no entreprise complexity.
            </Reveal>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3 mt-12">
            {features.map((feature, index) => (
              <Reveal
                key={feature.title}
                delay={(index % 3) * 0.1}
                className="bg-background shadow border rounded-2xl p-6 space-y-6"
              >
                <Button size="icon-lg" variant={feature.variant}>
                  <feature.icon />
                </Button>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
