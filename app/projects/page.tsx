import Image from 'next/image'
import { Card } from '@/components/card'
import { SimpleLayout } from '@/components/simple-layout'
import { projects } from '@/data'
import { LinkIcon } from '@/app/projects/ui'

export const metadata = {
  title: 'Projects - George Bockari',
  description: 'Things I’ve made trying to put my dent in the universe.',
}
const ProjectsPage = () => (
  <>
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="inline-flex w-full items-center space-x-4">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={project.logo} alt="" className="h-8 w-8" unoptimized />
              </div>
              {project.caseStudy && (
                <span className="inline-flex items-center rounded-full border px-2.5  py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-700/70 ">
                  case study
                </span>
              )}
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="group-hover:text-brand-500 relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  </>
)
export default ProjectsPage
