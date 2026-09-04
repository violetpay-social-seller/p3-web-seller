import { SellerAuthGuard } from "@/features/auth/ui/seller-auth-guard";
import { NoticeInitializer } from "@/features/notice/ui/notice-initializer";

export default function NoticeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SellerAuthGuard>
      <NoticeInitializer>{children}</NoticeInitializer>
    </SellerAuthGuard>
  );
}
