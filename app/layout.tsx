import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxSnap – Auto-Categorize Receipts for Freelancers",
  description: "Upload receipts and get AI-powered expense categorization for tax filing. Built for independent contractors and freelancers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="96d57876-d7f8-44b4-a3ca-b8387d8d1b6a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
