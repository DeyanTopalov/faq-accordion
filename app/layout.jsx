import { workSans } from "./ui/fonts";
import "@styles/globals.css";
import BackgroundPattern from "@components/background_pattern";
import { Metadata } from "next";

export const metadata = {
  title: "FAQ Accordion",
  description: "Frontend Mentor challenge to build a FAQ Accordion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.ico" sizes="any" />
      </head>
      <body className="relative grid h-svh  place-items-center bg-clr-light-pink md:h-screen">
        <div className="absolute top-0 -z-10 w-full object-cover">
          <BackgroundPattern />
        </div>
        <main
          className={`${workSans.className} max-w-[90rem] px-6 antialiased`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
