import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  completeRegistration,
  syncCurrentUser,
  updateCurrentUser,
} from "@/features/auth/api";
import { authKeys } from "@/features/auth/keys";

export function useSyncCurrentUserMutation() {
  return useMutation({ mutationFn: syncCurrentUser });
}

export function useCompleteRegistrationMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: completeRegistration,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: authKeys.all }),
  });
}

export function useUpdateCurrentUserMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: authKeys.all }),
  });
}
