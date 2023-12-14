import { ProjectInfo } from '../types/types'

export const projectsInfos: ProjectInfo[] = [
  {
    projectTitle: 'Talenthub',
    projectDescription:
      'A team project to create a full-stack application that assists the </SALT> sales team to match our database of developers with available jobs in Stockohlm (pulled from the jobtechdev API).',
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
      'A 3 day project to create a simple game using React, MUI and the Google Map API to test users geography skills. It was great fun making use of the Google Map API and figuring out how to remove the country names, roads and city labels - not really what Google had in mind!',
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