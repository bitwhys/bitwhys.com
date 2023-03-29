import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'

type RoleDuration = string | number | { label: string; dateTime: number }

type ResumeInfo = {
  company: string
  title: string
  logo: string
  start: RoleDuration
  end: RoleDuration
}

const resume: Array<ResumeInfo> = [
  {
    company: 'Planetaria',
    title: 'CEO',
    logo: logoPlanetaria,
    start: '2019',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Airbnb',
    title: 'Product Designer',
    logo: logoAirbnb,
    start: '2014',
    end: '2019',
  },
  {
    company: 'Facebook',
    title: 'iOS Software Engineer',
    logo: logoFacebook,
    start: '2011',
    end: '2014',
  },
  {
    company: 'Starbucks',
    title: 'Shift Supervisor',
    logo: logoStarbucks,
    start: '2008',
    end: '2011',
  },
]
export default resume
