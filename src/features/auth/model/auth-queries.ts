import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/features/auth/api/auth-api";
import { authKeys } from "@/features/auth/api/auth-keys";

export function useCurrentUserQuery(enabled = true) {
  return useQuery({
    queryKey: authKeys.profile(),
    queryFn: getCurrentUser,
    enabled,
  });
}
