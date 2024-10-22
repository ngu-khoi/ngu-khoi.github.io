import React from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./ProjectCard.module.css"

interface ProjectCardProps {
	id: number
	name: string
	imageSrc: string
	link: string
	description: string
	github: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	id,
	name,
	imageSrc,
	link,
	description,
	github,
}) => {
	return (
		<li className={styles.card}>
			<div className={styles.imageContainer}>
				<Image
					src={imageSrc}
					alt={name}
					layout="fill"
					objectFit="cover"
					className={styles.image}
				/>
			</div>
			<div className={styles.content}>
				<h3 className={styles.title}>{name}</h3>
				<p className={styles.description}>{description}</p>
				<div className={styles.buttonContainer}>
					{github && (
						<Link
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.button}
						>
							<Image
								src="/images/github.svg"
								alt="GitHub"
								width={24}
								height={24}
							/>
						</Link>
					)}
					{link && (
						<Link
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.button}
						>
							<Image
								src="/images/website.svg"
								alt="Website"
								width={24}
								height={24}
							/>
						</Link>
					)}
				</div>
			</div>
		</li>
	)
}

export default ProjectCard
