import { Section } from '@/components/section'
import { Card } from '@/components/card'

export type ToolsSectionProps = {
  children: React.ReactNode
  title: string
}
export const ToolsSection = ({ children, title }: ToolsSectionProps) => (
  <Section title={title}>
    <ul role="list" className="space-y-16">
      {children}
    </ul>
  </Section>
)

export type ToolProps = {
  title: string
  href?: string
  children: string
}
export const Tool = ({ title, href, children }: ToolProps) => (
  <Card as="li">
    <Card.Title as="h3" href={href}>
      {title}
    </Card.Title>
    <Card.Description>{children}</Card.Description>
  </Card>
)
