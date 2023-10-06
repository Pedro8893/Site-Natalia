'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { navigation } from '@/config/navigation'
import Link from 'next/link'
import Image from 'next/image'


export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-blue700">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-10 w-auto" src="/logo.png" alt="" quality={100} width={400} height={40} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-9 ">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-slate-100 hover:text-rose700 hover:bg-blue300/60 transition-all duration-300 px-2 py-1 rounded-md scroll-smooth">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="https://api.whatsapp.com/send?phone=5511948000013" className="text-sm font-semibold leading-6 text-gray-900 bg-rose700 px-2 py-1 rounded-md ">
            Agendar consulta 
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image className="h-10 w-auto" src="/logo.png" alt="" quality={100} width={400} height={40} />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  text-slate-100 hover:text-rose700 hover:bg-blue300/60 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7  text-gray-900 bg-rose700 "
                >
                  Agendar consulta
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
