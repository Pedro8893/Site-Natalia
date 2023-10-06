import { services } from '@/config/services'

export const Services = () => {
  return (
    <div className="bg-blue500 py-16 sm:py-24" id='telemedicina'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-fit text-center text-rose700 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Telemedicina</h2>
          <div className='bg-rose700 h-[3px] w-4/5 mx-auto' />
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-full">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {services.map((services) => (
              <div key={services.name} className="relative pl-16 text-slate-100">
                <dt className="text-base font-semibold leading-7 ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                    <services.icon className="h-10 w-10 text-rose-200" aria-hidden="true" />
                  </div>
                  {services.name}
                </dt>
                <dd className="mt-2 text-base leading-7">{services.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
