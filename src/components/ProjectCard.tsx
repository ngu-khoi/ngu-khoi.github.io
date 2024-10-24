import React, { useMemo } from "react"
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
	const cardColor = useMemo(() => {
		const initialSeed =
			id * 1000 + Math.floor(Date.now() / (1000 * 60 * 60 * 24)) // Change color daily
		let seed = initialSeed
		const random = () => {
			seed = (seed * 9301 + 49297) % 233280
			return seed / 233280
		}
		const hue = Math.floor(random() * 360)
		const excludedHues = [180, 210, 240, 270, 300] // Exclude blues and purples
		const adjustedHue =
			excludedHues.reduce(
				(acc, excluded) => (acc >= excluded ? acc + 30 : acc),
				hue
			) % 360
		return `hsl(${adjustedHue}, 60%, 60%)`
	}, [id])

	return (
		<li
			className={styles.card}
			style={{ "--card-bg-color": cardColor } as React.CSSProperties}
		>
			<div className={styles.imageContainer}>
				{imageSrc !== "" ? (
					<Image
						src={imageSrc}
						alt={title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
						className={styles.image}
					/>
				) : (
					<div className={styles.noImage}>no image yet!</div>
				)}
			</div>
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
				<div className={styles.bottomContent}>
					<span className={styles.languages}>{subtitle}</span>
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
			</div>
		</li>
	)
}

export default ProjectCard
