import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createOnboarding,
  resubmitOnboarding,
} from "@/features/onboarding/api/onboarding-api";
import { onboardingKeys } from "@/features/onboarding/api/onboarding-keys";

function invalidateCurrentOnboarding(
  queryClient: ReturnType<typeof useQueryClient>,
) {
  return queryClient.invalidateQueries({ queryKey: onboardingKeys.all });
}

export function useCreateOnboardingMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createOnboarding,
    onSuccess: () => invalidateCurrentOnboarding(queryClient),
  });
}

export function useResubmitOnboardingMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: resubmitOnboarding,
    onSuccess: () => invalidateCurrentOnboarding(queryClient),
  });
}
