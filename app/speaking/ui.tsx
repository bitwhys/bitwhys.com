import { Section } from '@/components/section'
import { Card } from '@/components/card'

export type SpeakingSectionProps = {
  title: string
  children: React.ReactNode
}
export const SpeakingSection = ({ children, title }: SpeakingSectionProps) => (
  <Section title={title}>
    <div className="space-y-16">{children}</div>
  </Section>
)

export type AppearanceProps = {
  title: string
  description: string
  event: string
  cta: string
  href?: string
}
export const Appearance = ({ title, description, event, cta, href }: AppearanceProps) => (
  <Card as="article">
    <Card.Title as="h3" href={href}>
      {title}
    </Card.Title>
    <Card.Eyebrow decorate>{event}</Card.Eyebrow>
    <Card.Description>{description}</Card.Description>
    <Card.Cta>{cta}</Card.Cta>
  </Card>
)
