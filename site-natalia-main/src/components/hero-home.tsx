import Image from 'next/image'
import Link from 'next/link'

export const HeroHome = () => {
  return(
    <div className="relative isolate bg-blue500" id='home'>
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 lg:py-6">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-start">
          <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl lg:mt-10">
            <h1 className="text-4xl font-bold tracking-tight text-rose700 sm:text-6xl">
            Dra.Natalia Melo
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-slate-100 sm:max-w-md lg:max-w-none">
            Seja bem-vindo ao site, a intenção dele é que você me conheça, toda minha formação e experiência. Aqui você tem contato com meu WhatsApp Business com uma secretária (Marcilene) 24 hs para responder você e tirar suas dúvidas. Agende uma consulta comigo! 
            </p>
            <div className="mt-10 flex items-center gap-x-6">
            <Link href="https://api.whatsapp.com/send?phone=5511948000013"className="text-sm font-semibold leading-6 text-gray-900 bg-rose700 px-2 py-1 rounded-md ">
              Agendar consulta 
            </Link>
            </div>
          </div>
          <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <div className="relative">
                <Image
                  src="/hero-1.jpeg"
                  alt=""
                  width={300}
                  height={400}
                  className="aspect-[3/4] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="relative">
                <Image
                  src="/hero-2.jpeg"
                  alt=""
                  width={300}
                  height={400}
                  className="aspect-[3/4] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative">
                <Image
                  src="/hero-3.jpeg"
                  alt=""
                  width={300}
                  height={400}
                  className="aspect-[3/4] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <div className="relative">
                <Image
                  src="/hero-4.jpeg"
                  alt=""
                  width={300}
                  height={400}
                  className="aspect-[3/4] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative">
                <Image
                  src="/hero-5.jpeg"
                  alt=""
                  width={300}
                  height={400}
                  className="aspect-[3/4] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}