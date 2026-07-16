import Link from "next/link";

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

export function Footer() {
  return (
    <div className="bg-accent">
      <div className="container px-6 mx-auto py-16">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">
          <div className="space-y-4 max-w-sm">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
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
  );
}
