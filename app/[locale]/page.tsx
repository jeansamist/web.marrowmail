import { Comparison } from "@/components/home/comparison";
import { Cta } from "@/components/home/cta";
import { Faq } from "@/components/home/faq";
import { Features } from "@/components/home/features";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { Positioning } from "@/components/home/positioning";
import { Pricing } from "@/components/home/pricing";
import { Reliability } from "@/components/home/reliability";
import { Testimonials } from "@/components/home/testimonials";
import { Topbar } from "@/components/home/topbar";

export default function page() {
  return (
    <div>
      <div className="min-h-screen h-full bg-accent flex flex-col">
        <Topbar />
        <Hero />
      </div>
      <Positioning />
      <Features />
      <Comparison />
      <Testimonials />
      <Reliability />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
