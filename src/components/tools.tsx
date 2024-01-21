import { Section } from '@/components/Section'
import { Card } from '@/components/Card'

export function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-8">
        {children}
      </ul>
    </Section>
  )
}

export function Tool({ title, href }: { title?: string; href?: string }) {
  return (
    <Card as="li">
      <Card.Title href={href}>{title}</Card.Title>
    </Card>
  )
}
