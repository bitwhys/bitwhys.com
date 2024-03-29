import Link from 'next/link'
import clsx from 'clsx'
import React, { ReactNode } from 'react'

// Types
type CardCtaProps = {
  children: ReactNode
}

type CardDescriptionProps = {
  children: string
}
type CardProps = {
  //  FIXME: restrict to valid HTML Element types
  as?: any
  className?: string
  children: ReactNode
}
type CardLinkProps = {
  children: ReactNode
  [prop: string]: any
}
type CardTitleProps = {
  //    FIXME: restrict to valid heading types
  as?: any
  href: string
  children: ReactNode
}
type CardEyebrowProps = {
  as?: any
  decorate?: boolean
  className?: string
  children: ReactNode
  [prop: string]: any
}
function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Card({ as: Component = 'div', className, children }: CardProps) {
  return <Component className={clsx(className, 'group relative flex flex-col items-start')}>{children}</Component>
}

Card.Link = function CardLink({ children, ...props }: CardLinkProps) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 transition group-hover:scale-100 group-hover:bg-neutral-2 dark:group-hover:bg-neutralDark-2 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

Card.Title = function CardTitle({ as: Component = 'h2', href, children }: CardTitleProps) {
  return (
    <Component className="font-heading text-lg tracking-wide text-neutral-12 dark:text-neutralDark-12">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Description = function CardDescription({ children }: CardDescriptionProps) {
  return <p className="relative z-10 mt-2 text-sm text-neutral-11 dark:text-neutralDark-11">{children}</p>
}

Card.Cta = function CardCta({ children }: CardCtaProps) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-brand-9 dark:text-brandDark-9"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
}

Card.Eyebrow = function CardEyebrow({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}: CardEyebrowProps) {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-neutral-9 dark:text-neutralDark-9',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
          <span className="h-4 w-0.5 rounded-full bg-neutral-6 dark:bg-neutralDark-6" />
        </span>
      )}
      {children}
    </Component>
  )
}
