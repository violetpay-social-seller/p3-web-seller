import { NoticeInitializer } from "@/features/notice/ui/notice-initializer";

export default function NoticeLayout({
  children,
}: LayoutProps<"/seller/notice">) {
  return <NoticeInitializer>{children}</NoticeInitializer>;
}
