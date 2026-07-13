import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Globe, XCircle } from "lucide-react";
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
                    <span className="text-foreground text-4xl font-bold">
                      98.80%
                    </span>
                    <span className="text-lg text-muted-foreground">
                      Email land in inbox, not spam.
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-foreground text-4xl font-bold">
                      10,000+
                    </span>
                    <span className="text-lg text-muted-foreground">
                      Active mailboxes worldwide.
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-foreground text-4xl font-bold">
                      2,500 XAF
                    </span>
                    <span className="text-lg text-muted-foreground">
                      Per mailbox / month.
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-foreground text-4xl font-bold">
                      SMEs
                    </span>
                    <span className="text-lg text-muted-foreground">
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
            <div className="flex gap-3">
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
    </div>
  );
}
