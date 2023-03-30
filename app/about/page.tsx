import Image from 'next/image'

import { Container } from '@/components/container'
import { TwitterIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '@/components/social-icons'
import portraitImage from '@/images/portrait.png'
import { MailIcon, SocialLink } from '@/app/about/ui'

export const metadata = {
  title: 'About - George Bockari',
  description: 'I’m George Bockari. I live in Atlanta, where I build on the modern web.',
}
const AboutPage = () => (
  <>
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">
            I’m George Bockari. I live in Atlanta, where I build on the modern web.
          </h1>
          <div className="mt-6 space-y-7 text-base text-neutral-11 dark:text-neutralDark-11">
            <p>
              I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old,
              just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.
            </p>
            <p>
              The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak
              tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three,
              and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit.
            </p>
            <p>
              I spent the next few summers indoors working on a rocket design, while I recovered from the multiple
              surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s
              Blackberry into orbit and was able to transmit a photo back down to our family computer from space.
            </p>
            <p>
              Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits
              you can assemble at home so that the next generation of kids really <em>can</em> make it to orbit — from
              the comfort of their own backyards.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/bitwhys" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://www.instagram.com/bitwhys/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://www.github.com/bitwhys" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/gbockari" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:george@pcr8iv.io"
              icon={MailIcon}
              className="mt-8 border-t border-neutral-5 pt-8 dark:border-neutralDark-5"
            >
              george@cr8iv.io
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  </>
)
export default AboutPage
