import { useQuery } from "@tanstack/react-query";
import { getActiveOrderForm } from "@/features/order-form/api/order-form-api";
import { orderFormKeys } from "@/features/order-form/model/order-form-keys";
import { toOrderFormDraftSnapshot } from "@/features/order-form/model/order-form-response";

export function useActiveOrderFormQuery() {
  return useQuery({
    queryFn: getActiveOrderForm,
    queryKey: orderFormKeys.active(),
    select: toOrderFormDraftSnapshot,
  });
}
