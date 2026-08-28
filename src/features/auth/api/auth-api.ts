import { getJson, sendJson } from "@/lib/api/client";
import type {
  UpdateUserProfileInput,
  UserProfile,
  UserRole,
  UserSync,
} from "@/features/auth/model/types";

export const syncCurrentUser = () =>
  sendJson<UserSync>("/auth/me/sync", "POST");

export const completeRegistration = (role: Exclude<UserRole, "OPERATOR">) =>
  sendJson<UserSync>("/auth/me/registration", "POST", {
    role: role.toLowerCase(),
  });

export const getCurrentUser = () => getJson<UserProfile>("/auth/me");

export const updateCurrentUser = (input: UpdateUserProfileInput) =>
  sendJson<UserProfile>("/auth/me", "PATCH", input);
