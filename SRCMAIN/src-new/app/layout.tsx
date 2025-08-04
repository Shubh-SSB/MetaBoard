import type { Metadata } from "next";
import "../styles/index.css";
import "../styles/app.css";
// import "../styles/metarule-css.css";

import { Suspense } from "react";
import LoadingWithDelay from "./loadingDelay";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<LoadingWithDelay />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
