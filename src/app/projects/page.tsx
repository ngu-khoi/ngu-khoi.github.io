"use client"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import ProjectCard from "../../components/ProjectCard"
import { getProjects, Project } from "../../api/mockApi"
import styles from "./Projects.module.css"
import Link from "next/link"

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
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>my projects</h1>
			<div className={styles.flexContainer}>
				<Link href="/" className={styles.button}>
					Back to Home
				</Link>
				<p>
					<i>
						there's a fake loading to test some states and effects
					</i>
				</p>
			</div>
			{loading ? (
				<div className={styles.loadingContainer}>
					<div className={styles.loadingSpinner}></div>
					<p>Loading projects...</p>
				</div>
			) : (
				<ul className={styles.projectList}>
					{projects.map((project) => (
						<ProjectCard key={project.id} {...project} />
					))}
				</ul>
			)}
		</div>
	)
}

export default Projects
