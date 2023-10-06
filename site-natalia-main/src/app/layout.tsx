import { Header } from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Dra.Natalia Melo',
  description: 'Dra. Natalia Melo é cardiologista dedicada a proporcionar cuidados cardíacos com precisão e responsabilidade para você. Experiência em cardiologia clínica e tratamento de doenças do coração, empenhada em oferecer serviços médicos personalizados e abrangentes aos seus pacientes, desde check-up, dor no peito, pressão alta, até doenças complexas como Amiloidose e problemas em válvulas cardíacas.',
}

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
          {children}
        <Footer />
        </body>
    </html>
  )
}


export default RootLayout