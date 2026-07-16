import { Star } from "lucide-react";

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
];

export function Testimonials() {
  return (
    <div className="py-22 mt-22 bg-accent">
      <div className="container px-6 mx-auto">
        <div className="space-y-3 text-center">
          <div className="text-muted-foreground">TESTIMONIALS</div>
          <div className="text-3xl sm:text-4xl lg:text-5xl leading-normal flex-1 font-bold w-full mx-auto">
            Businesses are already making the switch.
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.fullName}
              className="rounded-2xl border bg-background p-6 space-y-6"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary" />
                ))}
              </div>
              <p className="text-foreground text-sm sm:text-base lg:text-lg leading-relaxed line-clamp-4">
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
          ))}
        </div>
      </div>
    </div>
  );
}
