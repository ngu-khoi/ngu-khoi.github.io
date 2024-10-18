import projectsData from '../data/projects.json'

export interface Project {
  id: number
  name: string
  imageSrc: string
  link: string
}

export const getProjects = (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projectsData)
    }, 500) // 500ms delay
  })
}