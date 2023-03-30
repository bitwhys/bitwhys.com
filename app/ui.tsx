import { Card } from '@/components/card'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/button'
import resume from '@/data/resume'
import Image from 'next/image'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import clsx from 'clsx'

export const MailIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
      className="fill-neutral-5 stroke-neutral-8 dark:fill-neutralDark-5 dark:stroke-neutralDark-8"
    />
    <path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" className="stroke-neutral-8 dark:stroke-neutralDark-8" />
  </svg>
)

export const BriefcaseIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
      className="fill-neutral-5 stroke-neutral-8 dark:fill-neutralDark-5 dark:stroke-neutralDark-8"
    />
    <path
      d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
      className="stroke-neutral-8 dark:stroke-neutralDark-8"
    />
  </svg>
)

export const ArrowDownIcon = (props) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
    <path
      d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Article = ({ article }) => (
  <Card as="article">
    <Card.Title href={`/articles/${article.slug}`}>{article.title}</Card.Title>
    <Card.Eyebrow as="time" dateTime={article.date} decorate>
      {formatDate(article.date)}
    </Card.Eyebrow>
    <Card.Description>{article.description}</Card.Description>
    <Card.Cta>Read article</Card.Cta>
  </Card>
)

export const SocialLink = ({ icon: Icon, ...props }) => (
  <Link className="group -m-1 p-1" {...props}>
    <Icon className="h-6 w-6 fill-neutral-8 transition group-hover:fill-neutral-10 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
  </Link>
)

export const Newsletter = () => (
  <form action="/_pages_/thank-you" className="rounded-2xl border border-neutral-6 p-6 dark:border-neutralDark-6">
    <h2 className="flex text-sm font-semibold">
      <MailIcon className="h-6 w-6 flex-none" />
      <span className="ml-3">Stay up to date</span>
    </h2>
    <p className="mt-2 text-sm text-neutral-11 dark:text-neutralDark-11">
      Get notified when I publish something new, and unsubscribe at any time.
    </p>
    <div className="mt-6 flex">
      <input
        type="email"
        placeholder="Email address"
        aria-label="Email address"
        required
        className="min-w-0 flex-auto appearance-none rounded-md
          border border-neutral-7 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-overlay-5 placeholder:text-neutral-9 focus:border-brand-8
          focus:outline-none focus:ring-4 focus:ring-brand-7 dark:border-neutralDark-6 dark:bg-neutralDark-2 dark:text-neutralDark-11
          dark:placeholder:text-neutralDark-9 dark:focus:border-brand-8 dark:focus:ring-brand-7 sm:text-sm"
      />
      <Button type="submit" className="ml-4 flex-none">
        Join
      </Button>
    </div>
  </form>
)

export const Resume = () => (
  <div className="rounded-2xl border border-neutral-6 p-6 dark:border-neutralDark-6">
    <h2 className="dark: flex text-sm  font-semibold">
      <BriefcaseIcon className="h-6 w-6 flex-none" />
      <span className="ml-3">Work</span>
    </h2>
    <ol className="mt-6 space-y-4">
      {resume.map((role, roleIndex) => (
        <li key={roleIndex} className="flex gap-4">
          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="w-full flex-none text-sm font-semibold">{role.company}</dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-neutral-9 dark:text-neutralDark-9">{role.title}</dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs text-neutral-9 dark:text-neutralDark-9"
              aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end}`}
            >
              <time dateTime={role.start.dateTime ?? role.start}>{role.start.label ?? role.start}</time>{' '}
              <span aria-hidden="true">—</span>{' '}
              <time dateTime={role.end.dateTime ?? role.end}>{role.end.label ?? role.end}</time>
            </dd>
          </dl>
        </li>
      ))}
    </ol>
    <Button href="#" variant="secondary" className="group mt-6 w-full">
      Download CV
      <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
    </Button>
  </div>
)

export const Photos = () => {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 ',
              'sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
