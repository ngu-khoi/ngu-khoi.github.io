import projectsData from '../data/projects.json'

export interface Project {
  id: number
  title: string
  subtitle: string
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