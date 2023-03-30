import { Container } from '@/components/container'

export type SimpleLayoutProps = {
  title: string
  intro: string
  children?: React.ReactNode
}
export function SimpleLayout({ title, intro, children }: SimpleLayoutProps) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="font-heading text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mt-6 text-base text-neutral-11 dark:text-neutralDark-11">{intro}</p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
