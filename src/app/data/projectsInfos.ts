import { ProjectInfo } from '../types/types'

export const projectsInfos: ProjectInfo[] = [
  {
    projectTitle: 'Talenthub',
    projectDescription:
      'A full-stack application helping the </SALT> sales team match our database of developers with available jobs in Stockohlm pulled from the jobtechdev API.',
    projectImageLink:
      'https://github.com/lups-tech/.github/raw/main/jobtech.gif',
    projectUrl: 'https://job-matches.vercel.app/',
    projectGithubUrl: 'https://github.com/lups-tech',
    projectTechStacks: [
      'TypeScript',
      'React',
      'Vite',
      '.NET',
      'TailwindCSS',
      'MUI',
      'Auth0',
      'Supabase',
    ],
    featuredTechStacks: ['TypeScript'],
  },
  {
    projectTitle: 'CityFinder',
    projectDescription:
      'A simple game to test your geography skills',
    projectImageLink:
      'cityfinderImage.png',
    projectUrl: 'https://city-finder-fltwwrqhd-chrisobrien88.vercel.app/',
    projectGithubUrl: 'https://github.com/chrisobrien88/cityFinder',
    projectTechStacks: [
      'TypeScript',
      'React',
      'MUI',
      'GoogleMapsAPI'
    ],
    featuredTechStacks: ['TypeScript'],
  },
 
]