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
  label: string;
  slug: OrderFormCategorySlug;
};

export const orderFormCategories: OrderFormCategory[] = [
  { apiCategory: "SIZE", label: "사이즈", slug: "size" },
  { apiCategory: "SHAPE", label: "모양", slug: "shape" },
  { apiCategory: "CAKE_FLAVOR", label: "케이크 맛", slug: "cake-flavor" },
  { apiCategory: "CAKE_DESIGN", label: "케이크 디자인", slug: "cake-design" },
  { apiCategory: "PACKAGING", label: "포장방식", slug: "packaging" },
  {
    apiCategory: "OTHER_REQUEST",
    label: "기타 요청사항",
    slug: "other-request",
  },
];

export function getOrderFormCategory(slug: string) {
  return orderFormCategories.find((category) => category.slug === slug);
}
