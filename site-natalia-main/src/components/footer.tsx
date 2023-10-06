import { navigation } from '@/config/navigation'
import Link from 'next/link'


export const Footer = () =>  {
  return (
    <footer className="bg-blue500">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-slate-100 hover:text-rose700 transition-all duration-300">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 ELO Júnior Engenharias e Arquitetura.
        </p>
      </div>
    </footer>
  )
}
