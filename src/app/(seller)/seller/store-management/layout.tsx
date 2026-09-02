import { SellerAuthGuard } from "@/features/auth/ui/seller-auth-guard";

export default function StoreManagementLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SellerAuthGuard>{children}</SellerAuthGuard>;
}
