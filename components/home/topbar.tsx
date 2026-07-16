"use client";

import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Compare", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Support", href: "#" },
];

export function Topbar() {
  return (
    <div className="h-16 w-full border-b">
      <div className="container px-6 mx-auto h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground whitespace-nowrap">
            Marrow<span className="text-primary italic">mail</span>
          </h1>
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
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

        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="lg:hidden" />}
          >
            <Menu />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="flex flex-col gap-8 p-6 pt-10">
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.label}
                    render={<Link href={link.href} />}
                    className="text-lg text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <SheetClose
                  render={<Link href={"#"} />}
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })}
                >
                  Sign in
                </SheetClose>
                <SheetClose
                  render={<Link href={"#"} />}
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                  })}
                >
                  Get my business email
                  <ArrowRight />
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
