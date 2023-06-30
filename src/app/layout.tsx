import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Teste Leadster',
  description: 'Teste prático para a vaga de desenvolvedor front-end na Leadster',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
