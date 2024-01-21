import { useId } from 'react'
import {Card} from "@/components/Card";

export function Section({
  title,
    subTitle,
  children,
}: {
  title?: string
  subTitle?: string
  children: React.ReactNode
}) {
  let id = useId()

  return (
    <section
      aria-labelledby={id}
      className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-x-2 gap-y-8 md:grid-cols-4">
    <div className='grid-cols-1 gap-y-3'>
      <h2
          id={id}
          className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
      >
        {title}
      </h2>
      {subTitle && <Card.SubTitle >
        {subTitle}
      </Card.SubTitle>}
    </div>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}
