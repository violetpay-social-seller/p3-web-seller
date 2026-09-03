import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrderForm } from "@/features/order-form/api/order-form-api";
import { storeKeys } from "@/features/store/keys";

export function useCreateOrderFormMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createOrderForm,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: storeKeys.managementStatus() }),
  });
}
