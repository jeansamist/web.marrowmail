import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
            <div className="mt-6 relative p-1.5 rounded-2xl bg-background flex-col border shadow w-full space-y-1.5">
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
              <div className="absolute scale-105 inset-0 bg-linear-to-t from-accent via-accent/50 to-accent/0 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
