import { workSans } from "./ui/fonts";
import "@styles/globals.css";

export const metadata = {
  title: "FAQ Accordion",
  description: "Frontend Mentor challenge to build a FAQ Accordion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid h-svh place-items-center  bg-slate-400 md:h-screen">
        <main
          className={`${workSans.className} max-w-[90rem] px-6 antialiased`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
