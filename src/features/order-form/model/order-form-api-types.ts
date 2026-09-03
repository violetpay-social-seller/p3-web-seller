import type { OrderFormCategory } from "@/features/order-form/model/order-form-categories";
import type { OrderFormDraftOptionType } from "@/features/order-form/model/order-form-draft";

export type OrderFormOptionInputType = OrderFormDraftOptionType | "TEXT";

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
  groups: OrderFormCategoryGroup[];
  id: string;
  name: string;
  optionGroups: OrderFormOptionGroup[];
  storeId: string;
  updatedAt: string;
};

export type OrderFormOption = {
  active: boolean;
  id: string;
  inputType: OrderFormOptionInputType;
  label: string;
  price: number | null;
  priceLabel: string | null;
  settings: string | null;
  sortOrder: number;
  value: string;
};

export type OrderFormOptionGroup = {
  categoryGroupId: string;
  id: string;
  label: string;
  options: OrderFormOption[];
  required: boolean;
  selectionType: "SINGLE" | "MULTI";
  sortOrder: number;
};

export type OrderFormCategoryGroup = {
  category: OrderFormCategory["apiCategory"];
  description: string | null;
  id: string;
  optionGroups: OrderFormOptionGroup[];
  sortOrder: number;
  title: string;
};
