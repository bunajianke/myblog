---
home: true
modules:
  - BannerBrand
  - Blog
  # - MdContent
  - Footer
bannerBrand:
  bgImage: '/bg.svg'
  title: 相遇小站
  description: 倾听、感受、思考。
  tagline: 学而不思则罔，高效输入和有效输出是转化知识的策略，从笔记到文章，尽归于此。
  buttons:
    - { text: 笔记, link: '/myblog/categories/notes/1/' }
    # - { text: Default Style, link: '/docs1/style-default-api/introduce', type: 'plain' }
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco' }
blog:
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/recoluan' }
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
---

## 快速开始

**npx**

```bash
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
```

**npm**

```bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
```

**yarn**

```bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
```
