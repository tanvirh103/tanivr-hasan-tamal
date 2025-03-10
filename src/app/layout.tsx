import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanvir Hasan Tamal",
  description: "This is a protfolio of Tanvir Hasan Tamal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
