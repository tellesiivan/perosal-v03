import clsx from 'clsx'

export function Pteal({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx(className, 'pteal dark:pteal-invert')} {...props} />
  )
}
