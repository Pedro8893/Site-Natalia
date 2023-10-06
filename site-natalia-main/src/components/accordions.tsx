import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { accordions } from '@/config/accordions'

export const Accordions = () =>  {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-fit text-center text-rose700 space-y-2 mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Perguntas frequentes</h2>
        <div className='bg-rose700 h-[3px] w-4/5 mx-auto' />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Accordion type="single" collapsible className="w-full">
          {accordions.map((accordion) => (
              <AccordionItem value={accordion.question} key={accordion.answer}>
                <AccordionTrigger className='text-rose800'>{accordion.question}</AccordionTrigger>
                <AccordionContent>
                  {accordion.answer}
                </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
