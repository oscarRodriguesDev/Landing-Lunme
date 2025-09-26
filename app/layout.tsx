import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lunme - Plataforma para Psicólogos',
  description: 'A Lunme conecta psicólogos e pacientes com tecnologia de ponta. Consultas por vídeo chamada, agendamento online e relatórios inteligentes com IA.',
  generator: 'Lunme.app',
  keywords: ['psicologia', 'plataforma para psicólogos', 'consulta online', 'telepsicologia', 'atendimento psicológico', 'Lunme'],
  authors: [{ name: 'Lunme' }],
  openGraph: {
    title: 'Lunme - Plataforma para Psicólogos',
    description: 'Facilitando consultas psicológicas online com IA, agendamento e relatórios inteligentes.',
    url: 'https://lunme.app',
    siteName: 'Lunme',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
