import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/font.css";
import { ScreenContextProvider } from "@/context/ScreenContext";
import { YoutTubeContextProvider } from "@/context/YoutubeData";

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
        <YoutTubeContextProvider>

        <ScreenContextProvider>{children}</ScreenContextProvider>
        </YoutTubeContextProvider>
      </body>
    </html>
  );
}
