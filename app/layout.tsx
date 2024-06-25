import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryClientProvider } from "@/lib/react-query/query-client-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat AI Bundle",
  description: "AI를 내 마음대로 사용해보세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <h1 className="blind">Chat AI Bundle</h1>
        <QueryClientProvider>
          <main>{children}</main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
