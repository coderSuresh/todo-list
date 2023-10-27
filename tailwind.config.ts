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
        'check-bg': 'var(--check-bg)',
        'bg': 'var(--bg)',
        'card-bg': 'var(--card-bg)',
        'grayish-text': 'var(--grayish-text)',
        'text-color': 'var(--text-color)',
      },
      backgroundImage: {
        'desktop-dark': 'url("/images/bg-desktop-dark.jpg")',
        'mobile-dark': 'url("/images/bg-mobile-dark.jpg")',
        'desktop-light': 'url("/images/bg-desktop-light.jpg")',
        'mobile-light': 'url("/images/bg-mobile-light.jpg")',
      },
    },
  },
  plugins: [],
}
export default config
