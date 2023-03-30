import { SimpleLayout } from '@/components/simple-layout'
import { Article } from '@/app/articles/ui'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Articles - George Bockari',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export const generateStaticParams = async () => {
  const paths = allPosts.map((post) => ({ params: { slug: post.slug } }))
  return allPosts.map((post) => ({ slug: post.slug }))
}

const ArticlePage = () => (
  <>
    <SimpleLayout
      title="Writing on software design, company building, and the aerospace industry."
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {allPosts.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  </>
)
export default ArticlePage
