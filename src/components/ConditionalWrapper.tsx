"use client";

import { usePathname } from "next/navigation";

interface ConditionalWrapperProps {
  children: React.ReactNode;
}

export default function ConditionalWrapper({ children }: ConditionalWrapperProps) {
  const pathname = usePathname();
  const isArticleDetailPage = pathname?.startsWith('/articles/') && pathname !== '/articles';

  return (
    <div className={`${!isArticleDetailPage ? 'pt-20' : ''} flex-1`}>
      {children}
    </div>
  );
}
