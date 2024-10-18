import projectsData from '../data/projects.json'

export interface Project {
  id: number
  name: string
  imageSrc: string
  link: string
	description: string
	github: string
}

export const getProjects = (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projectsData)
    }, 150) // 500ms delay
  })
}