// pages/index.tsx
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@packages/api";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:5000/trpc",
    }),
  ],
});
