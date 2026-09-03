import { sendJson } from "@/lib/api/client";
import type {
  CreateOrderFormInput,
  OrderForm,
} from "@/features/order-form/model/order-form-api-types";

export const createOrderForm = (input: CreateOrderFormInput) =>
  sendJson<OrderForm>("/seller/order-forms", "POST", input);
