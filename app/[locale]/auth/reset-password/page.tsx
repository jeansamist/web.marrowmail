import { ResetPasswordForm } from "@/components/forms/reset-password.form";
import {
  getI18n,
  getStaticParams,
  setStaticParamsLocale,
} from "@/lib/i18n/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";

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
    title: t("auth.resetPassword.meta.title"),
    description: t("auth.resetPassword.meta.description"),
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ email?: string; resetPasswordToken?: string }>;
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const { email, resetPasswordToken } = await searchParams;

  if (!email || !resetPasswordToken) {
    redirect(`/${locale}/auth/sign-in`);
  }

  const t = await getI18n();
  return (
    <div className="max-w-xl w-full mx-auto py-22 space-y-6">
      <div className="w-full">
        <div className="text-xl sm:text-2xl lg:text-3xl leading-normal font-bold">
          {t("auth.resetPassword.page.title")}
        </div>
        <div className="text-muted-foreground text-xs sm:text-sm lg:text-base w-full">
          {t("auth.resetPassword.page.description")}
        </div>
      </div>
      <div className="w-full">
        <ResetPasswordForm
          email={email}
          resetPasswordToken={resetPasswordToken}
        />
      </div>
    </div>
  );
}
