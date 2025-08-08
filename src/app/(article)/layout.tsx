import React from "react";
import ArticleHeader from "@/components/local/article/ArticleHeader";

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ArticleHeader />
      {children}
    </div>
  );
}
