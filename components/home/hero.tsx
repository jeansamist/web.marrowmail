import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

const stats = [
  { value: "98.80%", label: "Email land in inbox, not spam." },
  { value: "10,000+", label: "Active mailboxes worldwide." },
  { value: "2,500 XAF", label: "Per mailbox / month." },
  { value: "SMEs", label: "Built for small budgets." },
];

export function Hero() {
  return (
    <div className="flex-1 py-22">
      <div className="container px-6 mx-auto flex flex-col gap-1.5">
        <div>
          <div className="px-3 py-1.5 border rounded-2xl bg-background text-xs md:text-base text-muted-foreground inline-flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
            AVAILABLE NOW - PAY WITH MOBILE MONEY
          </div>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-normal font-bold text-foreground">
          Your business deserves better than a Gmail address.
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl leading-normal text-muted-foreground">
          Professional business email with your own domain, AI-powered tools,
          high inbox deliverability, and a focus on privacy. All in one place
          and setup in minutes.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center mt-1.5 gap-3">
          <Link
            href={"/auth/sign-up"}
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Get my business email
            <ArrowRight />
          </Link>
          <Link
            href={"#pricing"}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            See pricing
          </Link>
        </div>
        <div className="mt-6 sm:mt-22 relative p-1.5 rounded-2xl bg-background flex-col border shadow w-full space-y-1.5">
          <div className="hidden pl-3 md:flex gap-3 items-center">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="text-sm flex-1 text-muted-foreground flex bg-input rounded-2xl px-3 py-1.5 gap-3 items-center">
              <Globe size={16} />
              <span className="line-clamp-1">https://mail.your-domain.com</span>
            </div>
          </div>
          <Image
            src={"/screenshot-inbox.png"}
            alt="hero"
            width={1920}
            height={1080}
            className="w-full! h-auto! rounded-2xl"
          />
          <div className="sm:absolute scale-105 inset-0 bg-linear-to-t from-accent via-accent/50 to-accent/0 pointer-events-none flex items-end">
            <div className="py-4 sm:py-6 border-y px-4 sm:px-6 lg:px-12 w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 sm:gap-y-6 bg-accent">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1.5">
                  <span className="text-foreground text-2xl sm:text-3xl lg:text-4xl font-bold line-clamp-1">
                    {stat.value}
                  </span>
                  <span className="text-sm sm:text-base lg:text-lg text-muted-foreground line-clamp-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
