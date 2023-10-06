import { features } from '@/config/features'
import Image from 'next/image'

// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Features = () => {
  return (
    <div className="bg-white" id='aboutUs'>
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-fit text-center text-rose700 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Sobre mim </h2>
          <div className='bg-rose700 h-[3px] w-4/5 mx-auto' />
        </div>

        <div className="mt-16 space-y-20">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={
                classNames(
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row',
                  "flex flex-col gap-x-8 gap-y-16 lg:gap-x-16 items-center" 
                )
              }
            >
              <div className='mt-6 lg:mt-0 md:flex-1'>
                <h3 className="text-lg sm:text-2xl md:text-3xl font-medium text-rose700">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-500 whitespace-pre-line text-justify">{feature.description}</p>
              </div>

              <div className='md:flex-1' >
                <div className="md:aspect-h-3 md:aspect-w-5 overflow-hidden rounded-lg bg-gray-100 shadow-md drop-shadow-xl shadow-slate-300">
                  <Image src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" width={500} height={500} />
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
