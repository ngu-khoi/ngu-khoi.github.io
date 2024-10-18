import React from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./ProjectCard.module.css"

interface ProjectCardProps {
	id: number
	name: string
	imageSrc: string
	link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	id,
	name,
	imageSrc,
	link,
}) => {
	return (
		<li className={styles.card}>
			<Link
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className={styles.link}
			>
				<Image
					src={imageSrc}
					alt={name}
					width={200}
					height={150}
					className={styles.image}
				/>
				<h3 className={styles.title}>{name}</h3>
			</Link>
		</li>
	)
}

export default ProjectCard
