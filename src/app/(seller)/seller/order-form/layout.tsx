import { SellerAuthGuard } from "@/features/auth/ui/seller-auth-guard";
import { OrderFormInitializer } from "@/features/order-form/ui/order-form-initializer";

export default function OrderFormLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SellerAuthGuard>
      <OrderFormInitializer>{children}</OrderFormInitializer>
    </SellerAuthGuard>
  );
}
