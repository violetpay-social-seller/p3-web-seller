export type UserRole = "BUYER" | "SELLER" | "OPERATOR";
export type UserStatus = "ACTIVE" | "WITHDRAWN" | "BANNED";

export type UserSync = {
  registered: boolean;
  registrationRequired: boolean;
  role: UserRole | null;
  status: UserStatus | null;
  nextRoute: string;
};

export type UserProfile = {
  userId: string;
  email: string;
  name: string;
  role: UserRole;
  status: UserStatus;
  nextRoute: string;
};

export type UpdateUserProfileInput = Pick<UserProfile, "email" | "name">;
