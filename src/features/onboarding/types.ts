export type SellerOnboardingStatus =
  "PENDING" | "HELD" | "APPROVED" | "REJECTED";

export type SellerOnboardingInput = {
  storeName: string;
  phoneNumber: string;
  address: string;
  snsLink?: string | null;
};

export type SellerOnboarding = {
  id: string;
  status: SellerOnboardingStatus;
  createdAt: string;
};

export type CurrentSellerOnboarding = SellerOnboarding &
  SellerOnboardingInput & {
    rejectionReason: string | null;
    reviewedAt: string | null;
  };
