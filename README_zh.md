# Mia - 基于 Astro & Tailwindcss & MDX & Rough Notation 的主题

[English](README.md) | [中文](README_zh.md)

Mia 旨在简约而强大，集成了 Astro、MDX 和 Rough Notation 的功能。无论你是开发者、作家，还是仅仅喜欢简洁高效的设计，这个主题都非常适合你。

![Mia Theme Preview](public/theme-preview.png)

## 开始使用

安装依赖：

```bash
npm install
```

运行并访问 http://localhost:4321。

```bash
npn run dev
```

构建应用：

```bash
npm run build
```

然后你会看到生成的 `dist` 文件夹，可以使用以下命令在本地预览:

```bash
npm run preview
```

## 主题配置

更新 `src/config.ts` 文件来配置主题：

- **SITE_FAVICON**：网站的 favicon
- **SITE_LOGO**：网站的 logo
- **SITE_TITLE**：网站的标题
- **SITE_DESCRIPTION**：网站的描述
- **MENUS**：网站的菜单
- **FOOTER_CONTENT**：页脚的内容
- **GOOGLE_GTAG**：Google Tag Manager ID

## 主题集成

- @astrojs/mdx: https://docs.astro.build/en/guides/markdown-content/
- @astrojs/rss: https://docs.astro.build/en/guides/rss/
- @astrojs/sitemap: https://docs.astro.build/en/guides/integrations-guide/sitemap/
- @astrojs/tailwind: https://docs.astro.build/en/guides/integrations-guide/tailwind/
- rough-notation: https://roughnotation.com/

## 许可证

- [MIT](https://github.com/infinity-ooo/astro-theme-mia/blob/main/LICENSE)
