import { Star } from "lucide-react";

import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { Reveal } from "@/components/motion-primitives/reveal";

const testimonials = [
  {
    quote:
      "Switching to MarrowMail took less than ten minutes. Our client emails finally match our domain, and support has been fast every time we needed it.",
    fullName: "Amara Nkeng",
    role: "Founder, Nkeng Consulting",
    initials: "AN",
  },
  {
    quote:
      "The built-in AI tools save my team hours every week. We write better replies faster, and paying with Mobile Money means no more card headaches.",
    fullName: "Didier Fotso",
    role: "Operations Lead, Fotso Logistics",
    initials: "DF",
  },
  {
    quote:
      "We moved five role-based inboxes over from Google Workspace and cut our email bill by more than half without losing any features we actually used.",
    fullName: "Grace Etoundi",
    role: "CEO, Etoundi Boutique",
    initials: "GE",
  },
  {
    quote:
      "Our clients used to ask if we were a real company when they saw our Gmail address. That question stopped the day we switched to MarrowMail.",
    fullName: "Paul Mbarga",
    role: "Managing Director, Mbarga & Partners",
    initials: "PM",
  },
  {
    quote:
      "Setup was genuinely guided, not just documentation. Someone actually helped us verify our domain and we were sending branded emails the same day.",
    fullName: "Solange Kamga",
    role: "Founder, Kamga Beauty Supplies",
    initials: "SK",
  },
  {
    quote:
      "The translation feature is a lifesaver for us. We reply to French and English clients from the same inbox without switching tools.",
    fullName: "Herve Talla",
    role: "Sales Manager, Talla Imports",
    initials: "HT",
  },
  {
    quote:
      "Paying with Orange Money instead of hunting for a card that works internationally saved us so much friction every renewal.",
    fullName: "Chantal Ngo",
    role: "Owner, Ngo Fashion House",
    initials: "CN",
  },
  {
    quote:
      "We run support@, sales@, and info@ on one plan. On our old provider each of those would have been a separate paid seat.",
    fullName: "Yannick Fouda",
    role: "Operations Director, Fouda Logistics",
    initials: "YF",
  },
  {
    quote:
      "Inbox delivery has been rock solid. Our invoices and follow-ups actually land in the primary tab instead of getting buried in spam.",
    fullName: "Brenda Assoua",
    role: "Finance Lead, Assoua Consulting",
    initials: "BA",
  },
  {
    quote:
      "The AI rewrite tool turns my rushed drafts into something I'm not embarrassed to send to clients. It reads like I had more time than I did.",
    fullName: "Roland Ebong",
    role: "Freelance Architect",
    initials: "RE",
  },
  {
    quote:
      "Migrating our domain over was the part I dreaded most, and it ended up being the easiest step. Everything else just worked from day one.",
    fullName: "Diane Mbah",
    role: "Co-founder, Mbah & Co",
    initials: "DM",
  },
  {
    quote:
      "Follow-up reminders alone have probably saved us two or three deals that would have gone cold waiting on a reply.",
    fullName: "Serge Njoya",
    role: "Business Development Lead, Njoya Group",
    initials: "SN",
  },
  {
    quote:
      "Knowing our conversations aren't used for ad targeting or training matters to us. Client trust is the whole business.",
    fullName: "Larissa Enow",
    role: "Principal, Enow Legal Advisory",
    initials: "LE",
  },
];

const testimonialsRow1 = testimonials.slice(0, 7);
const testimonialsRow2 = testimonials.slice(7);

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="w-xs sm:w-[380px] rounded-2xl border bg-background p-6 space-y-6">
      <div className="flex gap-1 text-primary">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary" />
        ))}
      </div>
      <p className="text-foreground text-sm sm:text-base leading-relaxed line-clamp-4">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-2">
        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center shrink-0">
          {testimonial.initials}
        </div>
        <div>
          <div className="text-foreground font-medium">
            {testimonial.fullName}
          </div>
          <div className="text-sm text-muted-foreground line-clamp-1">
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="py-22 mt-22 bg-accent">
      <div className="container px-6 mx-auto">
        <div className="space-y-3 text-center">
          <div className="text-muted-foreground">TESTIMONIALS</div>
          <Reveal className="text-3xl sm:text-4xl lg:text-5xl leading-normal font-bold w-full mx-auto">
            Businesses are already making the switch.
          </Reveal>
        </div>
      </div>
      <Reveal delay={0.2} className="mt-12 space-y-6">
        <InfiniteSlider gap={24} speed={40} speedOnHover={12} className="py-2">
          {testimonialsRow1.map((testimonial) => (
            <TestimonialCard key={testimonial.fullName} testimonial={testimonial} />
          ))}
        </InfiniteSlider>
        <InfiniteSlider
          gap={24}
          speed={40}
          speedOnHover={12}
          reverse
          className="hidden lg:block py-2"
        >
          {testimonialsRow2.map((testimonial) => (
            <TestimonialCard key={testimonial.fullName} testimonial={testimonial} />
          ))}
        </InfiniteSlider>
      </Reveal>
    </div>
  );
}
