"use client"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import ProjectCard from "../../components/ProjectCard"
import { getProjects, Project } from "../../api/mockApi"
import styles from "./Projects.module.css"

const Projects = () => {
	const router = useRouter()
	const [projects, setProjects] = useState<Project[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getProjects()
			.then((data) => {
				setProjects(data)
				setLoading(false)
			})
			.catch((error) => {
				console.error("Error fetching projects:", error)
				setLoading(false)
			})
	}, [])

	if (loading) {
		return (
			<div className={styles.loadingContainer}>
				<div className={styles.loadingSpinner}></div>
				<p>Loading projects...</p>
			</div>
		)
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>My Projects</h1>
			<ul className={styles.projectList}>
				{projects.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</ul>
			<div className={styles.buttonContainer}>
				<button className="button" onClick={() => router.push("/")}>
					Back to Home
				</button>
			</div>
		</div>
	)
}

export default Projects
