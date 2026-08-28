export const onboardingKeys = {
  all: ["seller-onboarding"] as const,
  current: () => [...onboardingKeys.all, "current"] as const,
};
