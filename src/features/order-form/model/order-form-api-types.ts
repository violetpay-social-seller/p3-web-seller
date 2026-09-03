import type { OrderFormCategory } from "@/features/order-form/model/order-form-categories";
import type { OrderFormDraftOptionType } from "@/features/order-form/model/order-form-draft";

export type OrderFormOptionInput = {
  active: boolean;
  inputType: OrderFormDraftOptionType;
  label: string;
  price: number | null;
  priceLabel: string | null;
  settings: string | null;
  sortOrder: number;
  value: string;
};

export type OrderFormOptionGroupInput = {
  label: string;
  options: OrderFormOptionInput[];
  required: boolean;
  selectionType: "SINGLE" | "MULTI";
  sortOrder: number;
};

export type OrderFormCategoryGroupInput = {
  category: OrderFormCategory["apiCategory"];
  description: string | null;
  optionGroups: OrderFormOptionGroupInput[];
  sortOrder: number;
  title: string;
};

export type CreateOrderFormInput = {
  groups: OrderFormCategoryGroupInput[];
  name: string;
};

export type OrderForm = {
  active: boolean;
  createdAt: string;
  id: string;
  name: string;
  storeId: string;
  updatedAt: string;
};
