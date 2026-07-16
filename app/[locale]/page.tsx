import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  ArrowRight,
  Bell,
  Check,
  Globe,
  Languages,
  Loader,
  Lock,
  Pen,
  Plus,
  Star,
  Users,
  XCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

const footerColumns = [
  {
    title: "PRODUCT",
    links: ["Features", "Pricing", "Compare", "Setup Guide", "Service Status"],
  },
  {
    title: "RESOURCES",
    links: ["Help Center", "Migration", "Domain Setup", "Security"],
  },
  {
    title: "COMPANY",
    links: ["About", "Contact", "Privacy Policy", "Terms"],
  },
];

export default function page() {
  return (
    <div>
      <div className="min-h-screen h-full bg-accent flex flex-col">
        <div className="h-16 w-full border-b">
          <div className="container mx-auto h-16 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h1 className="text-2xl font-bold text-foreground whitespace-nowrap">
                Marrow<span className="text-primary italic">mail</span>
              </h1>
              <Link
                href={"#"}
                className="text-muted-foreground hover:text-primary"
              >
                Features
              </Link>
              <Link
                href={"#"}
                className="text-muted-foreground hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href={"#"}
                className="text-muted-foreground hover:text-primary"
              >
                Compare
              </Link>
              <Link
                href={"#"}
                className="text-muted-foreground hover:text-primary"
              >
                FAQ
              </Link>
              <Link
                href={"#"}
                className="text-muted-foreground hover:text-primary"
              >
                Support
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={"#"}
                className={buttonVariants({ variant: "ghost", size: "lg" })}
              >
                Sign in
              </Link>
              <Link
                href={"#"}
                className={buttonVariants({ variant: "default", size: "lg" })}
              >
                Get my business email
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 py-22">
          <div className="container mx-auto flex flex-col gap-1.5">
            <div>
              <div className="px-3 py-1.5 border rounded-2xl bg-background text-muted-foreground inline-flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                AVAILABLE NOW - PAY WITH MOBILE MONEY
              </div>
            </div>
            <h1 className="text-7xl leading-normal font-bold text-foreground">
              Your business deserves better than a Gmail address.
            </h1>
            <p className="text-3xl leading-normal text-muted-foreground">
              Professional business email with your own domain, AI-powered
              tools, high inbox deliverability, and a focus on privacy. All in
              one place and setup in minutes.
            </p>
            <div className="flex items-center mt-1.5 gap-3">
              <Link
                href={"#"}
                className={buttonVariants({ variant: "default", size: "lg" })}
              >
                Get my business email
                <ArrowRight />
              </Link>
              <Link
                href={"#"}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                See pricing
              </Link>
            </div>
            <div className="mt-22 relative p-1.5 rounded-2xl bg-background flex-col border shadow w-full space-y-1.5">
              <div className="pl-3 flex gap-3 items-center">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="text-sm flex-1 text-muted-foreground flex bg-input rounded-2xl px-3 py-1.5 gap-3 items-center">
                  <Globe size={16} />
                  <span>https://mail.your-domain.com</span>
                </div>
              </div>
              <Image
                src={"/screenshot-inbox.png"}
                alt="hero"
                width={1920}
                height={1080}
                className="w-full! h-auto! rounded-2xl"
              />
              <div className="absolute scale-105 inset-0 bg-linear-to-t from-accent via-accent/50 to-accent/0 pointer-events-none flex items-end">
                <div className="py-6 border-y px-12 w-full grid grid-cols-4 bg-accent">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-foreground text-4xl font-bold line-clamp-1">
                      98.80%
                    </span>
                    <span className="text-lg text-muted-foreground line-clamp-1">
                      Email land in inbox, not spam.
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-foreground text-4xl font-bold line-clamp-1">
                      10,000+
                    </span>
                    <span className="text-lg text-muted-foreground line-clamp-1">
                      Active mailboxes worldwide.
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-foreground text-4xl font-bold line-clamp-1">
                      2,500 XAF
                    </span>
                    <span className="text-lg text-muted-foreground line-clamp-1">
                      Per mailbox / month.
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-foreground text-4xl font-bold line-clamp-1">
                      SMEs
                    </span>
                    <span className="text-lg text-muted-foreground line-clamp-1">
                      Built for small budgets.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-22">
        <div className="container px-6 mx-auto">
          <div className="space-y-3 ">
            <div className="text-muted-foreground">POSITIONING</div>
            <div className="text-5xl leading-normal max-w-5xl w-full font-bold text-balance">
              Look professional every time you hit send.
            </div>
            <div className="text-muted-foreground text-lg max-w-5xl w-full text-balance">
              When a client receives an email from a free address, it changes
              how they perceive the business. A custom domain builds trust
              before the conversation starts.
            </div>
            <div className="flex flex-col lg:flex-row gap-3 mt-6">
              <div className="bg-muted border flex-1 rounded-2xl p-6 space-y-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <XCircle />
                  <div className="text-lg font-medium">THE WRONG WAY</div>
                </div>
                <div className="p-6 py-3 border rounded-xl bg-background">
                  <span className="text-lg">ccovicator2019@gmail.com</span>
                </div>
                <div className="text-base font-medium  text-muted-foreground">
                  &quot;Is this a real business ?&quot; - the question evry
                  prospect quietly asks.
                </div>
              </div>
              <div className="bg-primary/10 border relative border-primary overflow-hidden flex-1 rounded-2xl p-6 flex flex-col space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <Check />
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground rounded-bl-2xl p-2 px-4">
                    THE MARROWMAIL WAY
                  </div>
                  <div className="text-lg font-medium">CUSTOM DOMAIN</div>
                </div>
                <div className="p-6 py-3 border border-primary rounded-xl bg-background">
                  <span className="text-lg">victor@yourcompany.com</span>
                </div>
                <div className="text-base font-medium  text-primary">
                  Trust, before the conversation even starts.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-22 mt-22 bg-accent">
        <div className="container px-6 mx-auto">
          <div className="space-y-3 ">
            <div className="text-muted-foreground">FEATURES</div>
            <div className="lg:flex items-end justify-between">
              <div className="text-5xl leading-normal flex-1 font-bold text-balance">
                Everything you need to communicate professionally.
              </div>
              <div className="text-muted-foreground text-lg max-w-xl w-full">
                Native productivity utilies built into the inbox - no add-ons,
                no entreprise complexity.
              </div>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3 mt-12">
              <div className="bg-background shadow border rounded-2xl p-6 space-y-6">
                <Button size="icon-lg" variant={"secondary"}>
                  <Loader />
                </Button>
                <div className="space-y-1">
                  <h3 className="font-semibold text-2xl">AI Email Summaries</h3>
                  <p className="text-muted-foreground text-lg">
                    Catch up on long email conversations instantly with
                    AI-generated summaries.
                  </p>
                </div>
              </div>
              <div className="bg-background shadow border rounded-2xl p-6 space-y-6">
                <Button size="icon-lg" variant={"default"}>
                  <Pen />
                </Button>
                <div className="space-y-1">
                  <h3 className="font-semibold text-2xl">
                    AI Rewrite Assistant
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Turn rough drafts into polished professional emails in
                    seconds.
                  </p>
                </div>
              </div>
              <div className="bg-background shadow border rounded-2xl p-6 space-y-6">
                <Button size="icon-lg" variant={"secondary"}>
                  <Languages />
                </Button>
                <div className="space-y-1">
                  <h3 className="font-semibold text-2xl">
                    Built-in Translation
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Read and reply to emails across languages directly from your
                    inbox.
                  </p>
                </div>
              </div>
              <div className="bg-background shadow border rounded-2xl p-6 space-y-6">
                <Button size="icon-lg" variant={"default"}>
                  <Bell />
                </Button>
                <div className="space-y-1">
                  <h3 className="font-semibold text-2xl">
                    Follow-up Reminders
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Get reminded when clients haven&apos;t replied so
                    opportunities never go cold.
                  </p>
                </div>
              </div>
              <div className="bg-background shadow border rounded-2xl p-6 space-y-6">
                <Button size="icon-lg" variant={"secondary"}>
                  <Lock />
                </Button>
                <div className="space-y-1">
                  <h3 className="font-semibold text-2xl">Private & Secure</h3>
                  <p className="text-muted-foreground text-lg">
                    Encrypted email. No ad targeting. No using your
                    conversations for training.
                  </p>
                </div>
              </div>
              <div className="bg-background shadow border rounded-2xl p-6 space-y-6">
                <Button size="icon-lg" variant={"default"}>
                  <Users />
                </Button>
                <div className="space-y-1">
                  <h3 className="font-semibold text-2xl">
                    Free Role-based Adrdresses
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Create support@, sales@, info@, at no extra cost - up to 10
                    of them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-22">
        <div className="container px-6 mx-auto space-y-12">
          <div className="space-y-3 text-center">
            <div className="text-muted-foreground">COMPARE</div>
            <div className="text-5xl leading-normal flex-1 font-bold text-balance">
              Why businesses choose MarrowMail.
            </div>
            <div className="text-muted-foreground text-lg max-w-xl w-full mx-auto">
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
                <div className="text-lg font-bold text-primary-foreground">
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
                <div className="text-lg font-bold text-foreground line-clamp-1">
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
                <div className="text-lg font-bold text-foreground line-clamp-1">
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
                <div className="text-lg font-bold text-primary-foreground">
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
                <div className="text-lg font-bold text-foreground">
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
                <div className="text-lg font-bold text-foreground">
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
      <div className="py-22 mt-22 bg-accent">
        <div className="container px-6 mx-auto">
          <div className="space-y-3 text-center">
            <div className="text-muted-foreground">TESTIMONIALS</div>
            <div className="text-5xl leading-normal flex-1 font-bold w-full mx-auto">
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
                <p className="text-foreground text-lg leading-relaxed line-clamp-4">
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
      <div className="py-22 bg-muted">
        <div className="container px-6 mx-auto">
          <div className="lg:flex items-center justify-between gap-12">
            <div className="space-y-3 max-w-md">
              <div className="text-muted-foreground">RELIABILITY</div>
              <div className="text-5xl leading-normal font-bold text-balance">
                Email infrastructure you can depend on.
              </div>
              <div className="text-muted-foreground text-lg text-balance">
                Your email is one of the most important parts of your business
                communication. MarrowMail is built to keep it reliable, secure,
                and professional.
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mt-6 lg:mt-0">
              {[
                "98.80% inbox delivery rate",
                "Spam & phishing protection",
                "Guided setup & migration support",
                "Secure encrypted email delivery",
                "Reliable cloud infrastructure",
                "Human customer support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-22">
        <div className="container px-6 mx-auto">
          <div className="space-y-3 text-center">
            <div className="text-muted-foreground">PRICING</div>
            <div className="text-5xl leading-normal font-bold text-balance">
              Simple pricing. Everything included.
            </div>
            <div className="text-muted-foreground text-lg max-w-xl w-full mx-auto">
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
                    <span className="text-6xl font-bold text-primary">
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
              <div className="border-t pt-6 text-muted-foreground text-lg">
                Professional business email with AI-powered tools, secure
                hosting, and flexible payments. Everything you need to
                communicate professionally — in one price.
              </div>
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  INCLUDED WITH EVERY MAILBOX
                </div>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    "Your own branded email address",
                    "10 GB secure storage",
                    "Built-in translation tools",
                    "Encrypted email security",
                    "Guided setup experience",
                    "Up to 10 free role-based addresses",
                    "AI summaries & email rewriting",
                    "Follow-up reminders",
                    "High inbox delivery",
                  ].map((item) => (
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
      <div className="py-22 bg-muted">
        <div className="container px-6 mx-auto">
          <div className="space-y-3 text-center">
            <div className="text-muted-foreground">FAQ</div>
            <div className="text-5xl leading-normal font-bold text-balance">
              Frequently asked.
            </div>
          </div>
          <Accordion
            defaultValue={["mobile-money"]}
            className="max-w-3xl w-full mx-auto mt-12"
          >
            {faqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value}>
                <AccordionTrigger className="**:data-[slot=accordion-trigger-icon]:hidden py-6 hover:no-underline">
                  <span className="text-lg font-semibold text-foreground">
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
      <div className="bg-secondary py-22 text-center">
        <div className="container px-6 mx-auto space-y-6">
          <div className="text-secondary-foreground/60">GET STARTED</div>
          <div className="text-secondary-foreground max-w-4xl w-full mx-auto text-6xl leading-normal font-bold text-balance">
            Your business deserves to look professional.
          </div>
          <div className="text-secondary-foreground/70 text-lg max-w-2xl w-full mx-auto text-balance">
            Join thousands of businesses already using MarrowMail to build
            trust, communicate better, and grow faster.
          </div>
          <div>
            <Button size="lg" className="mt-3">
              Get my business email today <ArrowRight />
            </Button>
          </div>
          <div className="text-secondary-foreground/50 text-sm">
            SETUP IN MINUTES · PAY WITH MOBILE MONEY · CANCEL ANYTIME
          </div>
        </div>
      </div>
      <div className="bg-accent">
        <div className="container px-6 mx-auto py-16">
          <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">
            <div className="space-y-4 max-w-sm">
              <h2 className="text-2xl font-bold text-foreground">
                Marrow<span className="text-primary italic">mail</span>
              </h2>
              <p className="text-muted-foreground">
                Premium, lightweight business email built for modern SMEs and
                professionals. Pay how you actually pay.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex bg-background items-center gap-2 px-3 py-1 border rounded-full text-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                  Orange Money
                </span>
                <span className="inline-flex bg-background items-center gap-2 px-3 py-1 border rounded-full text-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  MTN MoMo
                </span>
                <span className="inline-flex bg-background items-center gap-2 px-3 py-1 border rounded-full text-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  Local cards
                </span>
              </div>
            </div>
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <div className="text-muted-foreground text-sm">
                  {column.title}
                </div>
                <div className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <Link
                      key={link}
                      href={"#"}
                      className="text-foreground hover:text-primary"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} MarrowMail. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
