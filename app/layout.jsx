import { workSans } from "./ui/fonts";
import "@styles/globals.css";

export const metadata = {
  title: "FAQ Accordion",
  description: "Frontend Mentor challenge to build a FAQ Accordion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} max-w-[90rem] bg-slate-400 px-6 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
