"use client";

import { ReactNode } from "react";
import { QueryClientProvider as RQProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./query-client";

export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <RQProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </RQProvider>
  );
};
