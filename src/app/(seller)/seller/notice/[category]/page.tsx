import { notFound } from "next/navigation";
import { getNoticeCategory } from "@/features/notice/model/notice-categories";
import { NoticeCategoryScreen } from "@/features/notice/ui/notice-category-screen";

type NoticeCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export default async function NoticeCategoryPage({
  params,
}: NoticeCategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getNoticeCategory(categorySlug);

  if (!category) {
    notFound();
  }

  return <NoticeCategoryScreen category={category} />;
}
