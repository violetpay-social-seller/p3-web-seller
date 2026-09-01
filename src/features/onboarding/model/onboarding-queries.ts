import { useQuery } from "@tanstack/react-query";
import { getCurrentOnboarding } from "@/features/onboarding/api/onboarding-api";
import { onboardingKeys } from "@/features/onboarding/api/onboarding-keys";

export function useCurrentOnboardingQuery(enabled = true) {
  return useQuery({
    queryKey: onboardingKeys.current(),
    queryFn: getCurrentOnboarding,
    enabled,
  });
}
