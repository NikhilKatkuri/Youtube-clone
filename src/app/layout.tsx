import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/font.css";
import { ScreenContextProvider } from "@/context/ScreenContext";

export const metadata: Metadata = {
  title: "Youtube-nik",
  description: "Developed by Nikhil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScreenContextProvider>{children}</ScreenContextProvider>
      </body>
    </html>
  );
}
