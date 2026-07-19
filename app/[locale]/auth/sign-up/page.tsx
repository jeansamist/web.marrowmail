import { SignUpForm } from "@/components/forms/sign-up.form";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="max-w-xl w-full h-full mx-auto py-22 space-y-6">
      <div className="w-full">
        <div className="text-xl sm:text-2xl lg:text-3xl leading-normal font-bold">
          Create your account.
        </div>
        <div className="text-muted-foreground text-xs sm:text-sm lg:text-base w-full">
          Fill in the form below or use thirth part service.
        </div>
      </div>
      <div className="flex gap-3 w-full flex-wrap">
        <Button variant={"outline"} className={"flex-1"} size={"lg"}>
          <img
            src="/google.svg"
            alt=""
            data-icon="inline-start"
            className="size-4"
          />
          Continue with Google
        </Button>
        <Button variant={"outline"} className={"flex-1"} size={"lg"}>
          <img
            src="/github.svg"
            alt=""
            data-icon="inline-start"
            className="size-4"
          />
          Continue with Github
        </Button>
      </div>
      <div className="flex gap-3 items-center w-full">
        <div className="h-px bg-border flex-1"></div>
        <div className="text-muted-foreground">OR</div>
        <div className="h-px bg-border flex-1"></div>
      </div>
      <div className="w-full">
        <SignUpForm />
      </div>
    </div>
  );
}
