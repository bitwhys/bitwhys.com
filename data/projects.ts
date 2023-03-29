import logoShadowBox from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import { ReactElement } from 'react'

export type ProjectInfo = {
  name: string
  description: string
  link: {
    href: string
    label: string
  }
  logo: string
  caseStudy?: boolean
}
const projects: Array<ProjectInfo> = [
  {
    name: 'RTTYB',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'https://rttyb.cr8iv.io', label: 'rttyb.cr8iv.io' },
    logo: logoPlanetaria,
  },
  {
    name: 'Shadow Box',
    description:
      'Web component that provides full control of your browser extension ui.',
    link: { href: '#', label: 'github.com' },
    logo: logoShadowBox,
  },
  {
    name: 'Spreads Not Spreadsheets',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: 'https://spreadsnotspreadsheets.com', label: 'case study' },
    logo: logoHelioStream,
    caseStudy: true,
  },
  {
    name: 'UI Patterns',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: 'https://patterns.cr8iv.io', label: 'patterns.cr8iv.io' },
    logo: logoCosmos,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'case study' },
    logo: logoOpenShuttle,
    caseStudy: true,
  },
]

export default projects
