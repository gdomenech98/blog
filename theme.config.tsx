import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Gerard Domenech</span>,
  nextThemes: {
    defaultTheme: 'light',
    forcedTheme: 'light'
  },
  darkMode: false,
  project: {
    link: 'https://github.com/gdomenech98/blog',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/gdomenech98/blog',
  footer: {
    text: 'Gerard Domenech Blog',
  },
  useNextSeoProps() {
    return {
      titleTemplate: 'Blog-%s'
    }
  }
}

export default config
