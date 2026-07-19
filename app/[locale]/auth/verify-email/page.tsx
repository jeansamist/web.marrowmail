import { VerifyEmailForm } from "@/components/forms/verify-email.form";
import {
  getI18n,
  getStaticParams,
  setStaticParamsLocale,
} from "@/lib/i18n/server";
import { Metadata } from "next";

export function generateStaticParams() {
  return getStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const t = await getI18n();
  return {
    title: t("auth.verifyEmail.meta.title"),
    description: t("auth.verifyEmail.meta.description"),
  };
}
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ email?: string }>;
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const { email } = await searchParams;
  const t = await getI18n();
  return (
    <div className="max-w-xl w-full mx-auto py-22 space-y-6">
      <div className="w-full">
        <div className="text-xl sm:text-2xl lg:text-3xl leading-normal font-bold">
          {t("auth.verifyEmail.page.title")}
        </div>
        {email && (
          <div className="text-muted-foreground text-xs sm:text-sm lg:text-base w-full">
            {t("auth.verifyEmail.sent")}{" "}
            <strong className="font-semibold text-foreground underline">
              {email}
            </strong>
            {t("auth.verifyEmail.checkInbox")}
          </div>
        )}
      </div>
      <div className="w-full">
        <VerifyEmailForm email={email ?? ""} />
      </div>
    </div>
  );
}
