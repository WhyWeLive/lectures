import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "n.sitnik » lectures",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Оценки', link: 'https://docs.google.com/spreadsheets/d/1xxeCTJi8izWnlL7Sj7V7IsI_seSdxxM_iuTFLYrecw8/edit?usp=sharing' },
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/whywelive' }
    ]
  },
  markdown: {
    container: {
      tipLabel: 'Совет',
      warningLabel: 'Предупреждение',
      dangerLabel: 'Особое внимание',
      infoLabel: 'Информация',
      detailsLabel: 'Подробная информация'
    }
  }
})
