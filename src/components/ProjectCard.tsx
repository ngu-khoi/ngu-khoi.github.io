import React from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./ProjectCard.module.css"

interface ProjectCardProps {
	id: number
	title: string
	subtitle: string
	imageSrc: string
	link: string
	description: string
	github: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	id,
	title,
	subtitle,
	imageSrc,
	link,
	description,
	github,
}) => {
	return (
		<li className={styles.card}>
			<div className={styles.imageContainer}>
				{imageSrc !== "" ? (
					<Image
						src={imageSrc}
						alt={title}
						layout="fill"
						objectFit="cover"
						className={styles.image}
					/>
				) : (
					<div className={styles.noImage}>no image yet!</div>
				)}
			</div>
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<h4 className={styles.subtitle}>{subtitle}</h4>
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
