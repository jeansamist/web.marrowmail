import { ForgotPasswordForm } from "@/components/forms/forgot-password.form";
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
    title: t("auth.forgotPassword.meta.title"),
    description: t("auth.forgotPassword.meta.description"),
  };
}
export default async function page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const t = await getI18n();
  return (
    <div className="max-w-xl w-full mx-auto py-22 space-y-6">
      <div className="w-full">
        <div className="text-xl sm:text-2xl lg:text-3xl leading-normal font-bold">
          {t("auth.forgotPassword.page.title")}
        </div>
        <div className="text-muted-foreground text-xs sm:text-sm lg:text-base w-full">
          {t("auth.forgotPassword.page.description")}
        </div>
      </div>
      <div className="w-full">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
