import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

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
      <body className={`${jakarta.className}`}>
        {children}
      </body>
    </html>
  )
}
