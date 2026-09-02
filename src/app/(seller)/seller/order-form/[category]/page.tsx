import { notFound } from "next/navigation";
import { getOrderFormCategory } from "@/features/order-form/model/order-form-categories";
import { OrderFormCategoryScreen } from "@/features/order-form/ui/order-form-category-screen";

type OrderFormCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export default async function OrderFormCategoryPage({
  params,
}: OrderFormCategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getOrderFormCategory(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <OrderFormCategoryScreen category={category.slug} title={category.label} />
  );
}
