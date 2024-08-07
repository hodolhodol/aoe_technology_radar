// Layout.tsx
import Head from "next/head";
import { FC, ReactNode } from "react";

// Head 컴포넌트를 추가
import styles from "./Layout.module.css";

import { Footer } from "@/components/Footer/Footer";
import { Logo } from "@/components/Logo/Logo";
import { Navigation } from "@/components/Navigation/Navigation";
import { cn } from "@/lib/utils";

export type LayoutClass = "default" | "full";

interface LayoutProps {
  children: ReactNode;
  layoutClass?: LayoutClass;
}

export const Layout: FC<LayoutProps> = ({
  children,
  layoutClass = "default",
}) => {
  return (
    <div id="layout" className={cn(styles.layout, styles[layoutClass])}>
      <Head>
        {/* 직접 Google Fonts 가져오기 */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
      </Head>
      <header className={cn(styles.container, styles.header)}>
        <Logo />
        <Navigation />
      </header>
      <main className={cn(styles.content)}>{children}</main>
      <footer className={cn(styles.container, styles.footer)}>
        <Footer />
      </footer>
    </div>
  );
};
