import { Plus } from "lucide-react";

import { Reveal } from "@/components/motion-primitives/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    value: "mobile-money",
    question: "Can I pay with Mobile Money?",
    answer:
      "Yes — MarrowMail supports Orange Money and MTN MoMo payments alongside local bank cards. No USD card required.",
  },
  {
    value: "existing-domain",
    question: "Can I use my existing domain name?",
    answer:
      "Yes. Point your domain's DNS records to MarrowMail and we'll walk you through verification in minutes — no migration required.",
  },
  {
    value: "setup-time",
    question: "How long does setup take?",
    answer:
      "Most businesses are up and running in under 15 minutes, from signup to sending your first branded email.",
  },
  {
    value: "role-based",
    question: "What are role-based email addresses?",
    answer:
      "Role-based addresses like support@, sales@, or info@ let your team share one professional inbox without buying extra seats.",
  },
  {
    value: "secure",
    question: "Is my email secure?",
    answer:
      "Every mailbox is encrypted in transit and at rest, with spam and phishing protection included by default.",
  },
  {
    value: "technical-experience",
    question: "Do I need technical experience?",
    answer:
      "None. The guided setup walks you through domain verification and mailbox creation step by step — no IT team required.",
  },
];

export function Faq() {
  return (
    <div id="faq" className="py-22 bg-muted">
      <div className="container px-6 mx-auto">
        <div className="space-y-3 text-center">
          <div className="text-muted-foreground">FAQ</div>
          <Reveal className="text-3xl sm:text-4xl lg:text-5xl leading-normal font-bold text-balance">
            Frequently asked.
          </Reveal>
        </div>
        <Accordion
          defaultValue={["mobile-money"]}
          className="max-w-3xl w-full mx-auto mt-12"
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value}>
              <AccordionTrigger className="**:data-[slot=accordion-trigger-icon]:hidden py-6 hover:no-underline">
                <span className="text-sm sm:text-base lg:text-lg font-semibold text-foreground">
                  {faq.question}
                </span>
                <span className="group-aria-expanded/accordion-trigger:bg-primary group-aria-expanded/accordion-trigger:border-primary ml-4 flex size-8 shrink-0 items-center justify-center rounded-full border border-muted-foreground/30 text-muted-foreground">
                  <Plus className="group-aria-expanded/accordion-trigger:hidden size-4" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
