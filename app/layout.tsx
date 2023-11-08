import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const josefin_sans = Josefin_Sans(
  {
    subsets: ['latin'],
    weight: ['400', '700']
  }
)

export const metadata: Metadata = {
  title: 'Todo List',
  description: 'A simple todo list app built with Next.js, Tailwindcss, TypeScript, and MongoDB by developer codersuresh.',
}

const RootLayout = ({ children }: ChildrenProps) => {
  return (
    <html lang="en">

      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fff" />
      </head>
      
      <body className={josefin_sans.className}>
        {children}
        <Script src="/utils/toggleDarkMode.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}

export default RootLayout