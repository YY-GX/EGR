import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeCitation from "rehype-citation";

import react from "@astrojs/react";

import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://yy-gx.github.io",
  base: "/EGR",
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeKatex,
      [
        rehypeCitation,
        {
          bibliography: "bibliography.bib",
          linkCitations: true,
        },
      ],
    ],
  },
  integrations: [
    icon(),
    astroExpressiveCode({
      styleOverrides: {
        borderRadius: "0.5rem",
        borderWidth: "0",
        codeBackground: ({ theme }) =>
          `var(--color-muted)`,
        frames: {
          shadowColor: "transparent",
        },
      },
      themeCssSelector: (theme) =>
        theme.type === "dark" ? `[data-theme="dark"]` : `[data-theme="light"]`,
    }),
    mdx(),
    react(),
  ],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Source Serif 4",
      cssVariable: "--font-source-serif",
      weights: ["200 900"],
      styles: ["normal", "italic"],
      fallbacks: ["Georgia", "Times New Roman", "serif"],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      weights: ["400 700"],
      fallbacks: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
    },
  ],
  image: {
    responsiveStyles: true,
  },
});
