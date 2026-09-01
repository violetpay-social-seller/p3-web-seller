import { OnboardingForm } from "@/features/onboarding/ui/onboarding-form";
import { OnboardingHeader } from "@/features/onboarding/ui/onboarding-header";

export function SellerOnboardingScreen() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[390px] flex-col bg-surface-default text-text-primary">
      <OnboardingHeader />
      <OnboardingForm />
    </main>
  );
}
