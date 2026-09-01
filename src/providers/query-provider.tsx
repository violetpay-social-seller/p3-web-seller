"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { setCognitoTokenProvider } from "@/features/auth/model/cognito";
import { ApiError } from "@/lib/api/types";

setCognitoTokenProvider();

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30_000,
            retry: (failureCount, error) =>
              !(
                error instanceof ApiError &&
                [401, 403, 404].includes(error.status)
              ) && failureCount < 2,
          },
          mutations: { retry: false },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
