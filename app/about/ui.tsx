import type { FC, SVGProps, ReactNode } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

export type SocialLinkProps = {
  className?: string
  href: string
  icon: FC<SVGProps<SVGSVGElement>>
  children: ReactNode
}
export const SocialLink = ({ className, href, children, icon: Icon }: SocialLinkProps) => (
  <li className={clsx(className, 'flex')}>
    <Link
      href={href}
      className="group flex text-sm font-medium text-neutral-10 transition hover:text-brand-9 dark:text-neutralDark-10  dark:hover:text-brandDark-9"
    >
      <Icon className="group-hover:fill-brand-500 h-6 w-6 flex-none fill-zinc-500 transition" />
      <span className="ml-4">{children}</span>
    </Link>
  </li>
)

export const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
    />
  </svg>
)
