import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createOrderForm,
  updateOrderForm,
} from "@/features/order-form/api/order-form-api";
import type { CreateOrderFormInput } from "@/features/order-form/model/order-form-api-types";
import { orderFormKeys } from "@/features/order-form/model/order-form-keys";
import { storeKeys } from "@/features/store/model/store-keys";

type SaveOrderFormVariables = {
  input: CreateOrderFormInput;
  templateId: string | null;
};

export function useSaveOrderFormMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ input, templateId }: SaveOrderFormVariables) =>
      templateId ? updateOrderForm(templateId, input) : createOrderForm(input),
    onSuccess: (orderForm) => {
      queryClient.setQueryData(orderFormKeys.active(), orderForm);
      return queryClient.invalidateQueries({
        queryKey: storeKeys.managementStatus(),
      });
    },
  });
}
