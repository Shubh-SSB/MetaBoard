import type { Metadata } from "next";
import "../styles/index.css";
import "../styles/app.css";
import { Footer, Header } from "@/components/global";
// import "../styles/metarule-css.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
