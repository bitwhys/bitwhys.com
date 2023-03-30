import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { formatDate } from '@/lib/utils'
import { Prose } from '@/components/prose'
import { ArrowLeftIcon } from '@/app/articles/[slug]/ui'
import { allPosts } from 'contentlayer/generated'
import { notFound, usePathname } from 'next/navigation'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}
export async function generateMetadata({ params }): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  const { title, description, slug } = post
  // const ogImage = image ? `https://leerob.io${image}` : `https://leerob.io/api/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      // publishedTime,
      url: `https://leerob.io/blog/${slug}`,
      // images: [
      //   {
      //     url: ogImage,
      //   },
      // ],
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   title,
    //   description,
    //   images: [ogImage],
    // },
  }
}
const ArticlePage = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params.slug)
  if (!post) {
    return notFound()
  }
  return (
    <>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <button
              type="button"
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 font-heading text-4xl  font-bold text-neutral-12 dark:text-neutralDark-12 sm:text-5xl">
                  {post.title}
                </h1>
                <time
                  dateTime={post.date}
                  className="order-first flex items-center text-base text-neutral-9 dark:text-neutralDark-9"
                >
                  <span className="h-4 w-0.5 rounded-full bg-neutral-7 dark:bg-neutralDark-7" />
                  <span className="ml-3">{formatDate(post.date)}</span>
                </time>
              </header>
              <Prose className="mt-8" content={post.body.html} />
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ArticlePage
