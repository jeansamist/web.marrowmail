"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCurrentLocaleUrl } from "@/lib/i18n/client";
import { cn } from "@/lib/utils";
import { Globe, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type DomainCase = "case-1" | "case-2";

export default function Page() {
  const router = useRouter();
  const { currentLocaleUrl } = useCurrentLocaleUrl();
  const [selectedCase, setSelectedCase] = useState<DomainCase>();

  function handleContinue() {
    if (!selectedCase) return;
    router.push(currentLocaleUrl(`/onboarding/${selectedCase}`));
  }

  return (
    <div className="h-screen bg-accent w-full flex flex-col">
      <div className="h-16 w-full border-b bg-white">
        <div className="container px-6 mx-auto h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground whitespace-nowrap">
              Marrow<span className="text-primary italic">mail</span>
            </h1>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="container space-y-6">
          <div className="space-y-1 text-center">
            <div className="font-semibold">
              Welcome to Marrow<span className="text-primary italic">mail</span>
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl leading-normal font-bold">
              Let&apos;s set up your business email
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm lg:text-base w-full">
              First, tell us about your domain situation so we can tailor the
              setup for you.
            </div>
          </div>
          <div className="max-w-2xl w-full mx-auto grid md:grid-cols-2 gap-3">
            <Card
              role="button"
              tabIndex={0}
              aria-pressed={selectedCase === "case-1"}
              onClick={() => setSelectedCase("case-1")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedCase("case-1");
                }
              }}
              className={cn(
                "w-full shadow-sm transition-colors cursor-pointer hover:ring-primary/40",
                selectedCase === "case-1" && "ring-2 ring-primary bg-primary/5",
              )}
            >
              <CardContent className="space-y-3">
                <Button
                  variant={selectedCase === "case-1" ? "default" : "outline"}
                  size={"icon-lg"}
                  tabIndex={-1}
                >
                  <Globe />
                </Button>
                <div className="font-bold">I already have a domain</div>
                <div className="text-xs text-muted-foreground">
                  Connect your existing domain (e.g.
                  <span className="font-medium text-foreground">
                    mybusiness.com
                  </span>
                  ) and verify ownership via DNS.
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded bg-primary"></div>
                    <div className="text-xs text-muted-foreground">
                      Verify with a TXT record
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded bg-primary"></div>
                    <div className="text-xs text-muted-foreground">
                      Keep your registrar
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded bg-primary"></div>
                    <div className="text-xs text-muted-foreground">
                      We route your email traffic
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card
              role="button"
              tabIndex={0}
              aria-pressed={selectedCase === "case-2"}
              onClick={() => setSelectedCase("case-2")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedCase("case-2");
                }
              }}
              className={cn(
                "w-full shadow-sm transition-colors cursor-pointer hover:ring-primary/40",
                selectedCase === "case-2" && "ring-2 ring-primary bg-primary/5",
              )}
            >
              <CardContent className="space-y-3">
                <Button
                  variant={selectedCase === "case-2" ? "default" : "outline"}
                  size={"icon-lg"}
                  tabIndex={-1}
                >
                  <Search />
                </Button>
                <div className="font-bold">I don&apos;t have a domain yet</div>
                <div className="text-xs text-muted-foreground">
                  Search for and register a new domain (e.g.
                  <span className="font-medium text-foreground">
                    mybusiness.com
                  </span>
                  ) right from Marrowmail.
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded bg-primary"></div>
                    <div className="text-xs text-muted-foreground">
                      Search available domains
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded bg-primary"></div>
                    <div className="text-xs text-muted-foreground">
                      Register in one click
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded bg-primary"></div>
                    <div className="text-xs text-muted-foreground">
                      We handle DNS setup for you
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-2xl w-full mx-auto flex justify-end">
            <Button
              size={"lg"}
              className={cn(
                "w-full",
                !selectedCase &&
                  "opacity-50 pointer-events-none cursor-not-allowed",
              )}
              disabled={!selectedCase}
              onClick={handleContinue}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
