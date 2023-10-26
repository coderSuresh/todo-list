import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo List',
  description: 'A simple todo list app built with Next.js, Tailwindcss, TypeScript, and MongoDB by developer codersuresh.',
}

const RootLayout = ({ children }: ChildrenProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout