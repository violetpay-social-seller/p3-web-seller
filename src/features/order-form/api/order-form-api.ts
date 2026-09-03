import { getJson, sendJson } from "@/lib/api/client";
import { ApiError } from "@/lib/api/types";
import type {
  CreateOrderFormInput,
  OrderForm,
} from "@/features/order-form/model/order-form-api-types";

export const createOrderForm = (input: CreateOrderFormInput) =>
  sendJson<OrderForm>("/seller/order-forms", "POST", input);

export async function getActiveOrderForm() {
  try {
    return await getJson<OrderForm>("/seller/order-forms/active");
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return null;
    }

    throw error;
  }
}

export const updateOrderForm = (
  templateId: string,
  input: CreateOrderFormInput,
) => sendJson<OrderForm>(`/seller/order-forms/${templateId}`, "PATCH", input);
