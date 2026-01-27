/// <reference types="vite/client" />
import * as React from "react";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";
import appCss from "@/styles/app.css?url";
import { seo } from "@/utils/seo";
import Edges from "@/components/layout/Edges";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import { settingsService } from "@/api/client";
import { SettingKey } from "@reactforums/core";

const queryClient = new QueryClient();

// const faviconUrl = settingsService.getByName(SettingKey.FaviconUrl);
// const seoTitle = settingsService.getByName(SettingKey.SiteMetaTitle);
// const seoDescription = settingsService.getByName(
//   SettingKey.SiteMetaDescription,
// );

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      // ...seo({
      //   title: `${seoTitle?.value}`,
      //   description: `${seoDescription?.value}`,
      // }),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        // href: `${faviconUrl?.value}`,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        src: "/customScript.js",
        type: "text/javascript",
      },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Edges>{children}</Edges>
          <Footer />
          <TanStackRouterDevtools position="bottom-right" />
          <Scripts />
        </QueryClientProvider>
      </body>
    </html>
  );
}
