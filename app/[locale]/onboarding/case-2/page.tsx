import { OnboardingRegisterDomainForm } from "@/components/forms/onboarding-register-domain.form";
import { OnboardingProvider } from "@/contexts/onboarding.context";
import { getI18n, getStaticParams, setStaticParamsLocale } from "@/lib/i18n/server";

export function generateStaticParams() {
  return getStaticParams();
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const t = await getI18n();

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="h-16 w-full border-b">
        <div className="container px-6 mx-auto h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground whitespace-nowrap">
              Marrow<span className="text-primary italic">mail</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="container max-w-2xl space-y-6">
          <div>
            <div className="text-xl sm:text-2xl lg:text-3xl leading-normal font-bold">
              {t("onboarding.steps.domain.title")}
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm lg:text-base w-full">
              {t("onboarding.steps.domain.description")}
            </div>
          </div>
          <OnboardingProvider steps={[{ title: "", description: "" }]}>
            <OnboardingRegisterDomainForm />
          </OnboardingProvider>
        </div>
      </div>
    </div>
  );
}
