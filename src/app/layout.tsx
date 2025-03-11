import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const gilroy = localFont({
  src: [
    {
      path: "./fonts/InterVariable.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/CalSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});
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
      <body className={`${gilroy.className}`}
      >
        {children}
      </body>
    </html>
  );
}
