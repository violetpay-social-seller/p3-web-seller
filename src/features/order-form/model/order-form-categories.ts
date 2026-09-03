export type OrderFormCategorySlug =
  | "size"
  | "shape"
  | "cake-flavor"
  | "cake-design"
  | "packaging"
  | "other-request";

export type OrderFormCategory = {
  apiCategory:
    | "SIZE"
    | "SHAPE"
    | "CAKE_FLAVOR"
    | "CAKE_DESIGN"
    | "PACKAGING"
    | "OTHER_REQUEST";
  apiTitle: string;
  label: string;
  required: boolean;
  slug: OrderFormCategorySlug;
};

export const orderFormCategories: OrderFormCategory[] = [
  {
    apiCategory: "SIZE",
    apiTitle: "사이즈",
    label: "사이즈",
    required: true,
    slug: "size",
  },
  {
    apiCategory: "SHAPE",
    apiTitle: "모양",
    label: "모양",
    required: true,
    slug: "shape",
  },
  {
    apiCategory: "CAKE_FLAVOR",
    apiTitle: "케이크맛",
    label: "케이크 맛",
    required: true,
    slug: "cake-flavor",
  },
  {
    apiCategory: "CAKE_DESIGN",
    apiTitle: "케이크 디자인",
    label: "케이크 디자인",
    required: false,
    slug: "cake-design",
  },
  {
    apiCategory: "PACKAGING",
    apiTitle: "포장 방식",
    label: "포장 방식",
    required: true,
    slug: "packaging",
  },
  {
    apiCategory: "OTHER_REQUEST",
    apiTitle: "기타 요청사항",
    label: "기타 요청사항",
    required: false,
    slug: "other-request",
  },
];

export function getOrderFormCategory(slug: string) {
  return orderFormCategories.find((category) => category.slug === slug);
}
