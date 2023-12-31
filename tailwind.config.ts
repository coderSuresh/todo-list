import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bright-blue': 'var(--bright-blue)',
        'bg': 'var(--bg)',
        'divider': 'var(--divider)',
        'card-bg': 'var(--card-bg)',
        'grayish-text': 'var(--grayish-text)',
        'text-color': 'var(--text-color)',
        'text-hovered': 'var(--text-hovered)',
      },
      backgroundImage: {
        'check-bg': 'linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));',
        'desktop-dark': 'url("/images/bg-desktop-dark.jpg")',
        'mobile-dark': 'url("/images/bg-mobile-dark.jpg")',
        'desktop-light': 'url("/images/bg-desktop-light.jpg")',
        'mobile-light': 'url("/images/bg-mobile-light.jpg")',
      },
      content: {
        'tick': 'url("/images/icon-check.svg")',
      }
    },
  },
  plugins: [],
}
export default config
