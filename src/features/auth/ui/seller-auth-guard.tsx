"use client";

import { useEffect } from "react";
import { hasCognitoSession } from "@/features/auth/model/cognito";

type SellerAuthGuardProps = {
  children: React.ReactNode;
};

export function SellerAuthGuard({ children }: SellerAuthGuardProps) {
  useEffect(() => {
    if (!hasCognitoSession()) {
      window.location.replace("/seller");
    }
  }, []);

  return children;
}
