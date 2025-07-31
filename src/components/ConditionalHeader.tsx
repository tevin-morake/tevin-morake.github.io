"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ConditionalHeader() {
  const pathname = usePathname();
  const isArticleDetailPage = pathname?.startsWith('/articles/') && pathname !== '/articles';

  if (isArticleDetailPage) {
    return null;
  }

  return <Header />;
}
