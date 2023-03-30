import Link from 'next/link'

import { Container } from '@/components/container'

function NavLink({ href, children }) {
  return (
    <Link href={href} className="transition hover:text-brand-10 dark:hover:text-brandDark-10">
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-neutral-5 pb-16 pt-10 dark:border-neutralDark-5">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/speaking">Speaking</NavLink>
                <NavLink href="/uses">Uses</NavLink>
              </div>
              <p className="text-sm text-neutral-9 dark:text-neutralDark-9">
                &copy; {new Date().getFullYear()} George Bockari. All rights reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
