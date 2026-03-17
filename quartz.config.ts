import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Exalted: A Era da Ascensão",
    pageTitleSuffix: " — Wiki",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "pt-BR",
    baseUrl: "gustavorodarte.github.io/exalted-wiki",
    ignorePatterns: ["private", "templates", "Templates", ".obsidian", "Inbox", "CLAUDE.md"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Cinzel",
        body: "Lora",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf6ef",
          lightgray: "#e8e0d4",
          gray: "#a89f91",
          darkgray: "#3d3529",
          dark: "#1a1510",
          secondary: "#8b6914",
          tertiary: "#b8860b",
          highlight: "rgba(184, 134, 11, 0.12)",
          textHighlight: "#ffd70044",
        },
        darkMode: {
          light: "#0f0d0a",
          lightgray: "#2a2520",
          gray: "#6b5f52",
          darkgray: "#d4c9b8",
          dark: "#f0e6d3",
          secondary: "#d4a017",
          tertiary: "#b8860b",
          highlight: "rgba(212, 160, 23, 0.10)",
          textHighlight: "#d4a01744",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages disabled to speed up build
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
