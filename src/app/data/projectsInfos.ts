import { ProjectInfo } from "../types/types";

export const projectsInfos: ProjectInfo[] = [
  {
    projectTitle: "Talenthub",
    projectBriefDescription: "Helping connect devs to jobs in Sweden",
    projectDescription:
      "A team project to create a full-stack application that assists the </SALT> sales team to match our database of developers with available jobs in Sweden (pulled from the jobtechdev API).",
    projectImageLink: "salthubmockup.png",
    projectUrl: "https://job-matches.vercel.app/",
    projectGithubUrl: "https://github.com/lups-tech",
    projectTechStacks: [
      "TypeScript",
      "React",
      "Vite",
      ".NET",
      "TailwindCSS",
      "MUI",
      "Auth0",
      "Supabase",
    ],
    featuredTechStacks: ["TypeScript"],
  },
  {
    projectTitle: "CityFinder",
    projectBriefDescription:
      "Give your georgraphy skills a workout with this quick city guessing game",
    projectDescription:
      "A 3 day project to create a simple game using React, MUI and the Google Map API to test users geography skills. It was great fun making use of the Google Map API and figuring out how to remove the country names, roads and city labels - not really what Google had in mind!",
    projectImageLink: "cityfindermockup.png",
    projectUrl: "https://city-finder-fltwwrqhd-chrisobrien88.vercel.app/",
    projectGithubUrl: "https://github.com/chrisobrien88/cityFinder",
    projectTechStacks: ["TypeScript", "React", "MUI", "GoogleMapsAPI"],
    featuredTechStacks: ["Google Maps API"],
  },
  {
    projectTitle: "JoinTheQ",
    projectBriefDescription:
      "No more standing around. JoinTheQ lets you lineup without actually lining up",
    projectDescription:
      "A 2 week team project. We designed and developed an app that users could use to join a virtual queue for a restaurant or other business. The main page shows resturants in your area with details about how many people are in the queue, the estimated waiting time and distance from your current location.",
    projectImageLink: "jointheqmockup.png",
    projectUrl: "https://join-the-queue-client.onrender.com/",
    projectGithubUrl: "https://github.com/chrisobrien88/Join-The-Queue",
    projectTechStacks: [
      "MongoDb",
      "Express",
      "React",
      "Google Maps API",
      "Redux",
      "Auth0",
    ],
    featuredTechStacks: ["Auth0"],
  },
];
