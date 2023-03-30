import { allPosts } from 'contentlayer/generated'

import { Container } from '@/components/container'
import { TwitterIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '@/components/social-icons'
import { Article, Newsletter, Photos, SocialLink, Resume } from '@/app/ui'

export const metadata = {
  title: 'George Bockari - Software engineer, podcaster, and amateur astronaut',
  description:
    'I’m George, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.',
}

const HomePage = () => {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Software engineer, ponderer, shaver of yaks.</h1>
          <p className="mt-6 text-base text-neutral-11 dark:text-neutralDark-11 ">
            I’m George, a software designer and entrepreneur based in New York City. I’m the founder and CEO of
            Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="https://twitter.com/bitwhys" aria-label="Follow on Twitter" icon={TwitterIcon} />
            <SocialLink href="https://instagram.com/bitwhys" aria-label="Follow on Instagram" icon={InstagramIcon} />
            <SocialLink href="https://github.com/bitwhys" aria-label="Follow on GitHub" icon={GitHubIcon} />
            <SocialLink href="https://linkedin.com/in/gbockari" aria-label="Follow on LinkedIn" icon={LinkedInIcon} />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {allPosts.slice(0, 4).map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomePage
