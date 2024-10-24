"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import MarkdownContent from "../components/MarkdownContent"
import styles from "./Home.module.css"

const Home = () => {
	return (
		<div className={styles.pageContainer}>
			<div className={styles.container}>
				<div className={styles.bannerContainer}>
					<Image
						src="/images/KoiFishPondBanner.avif"
						alt="Koi Fish Pond Banner"
						fill
						sizes="(max-width: 900px) 100vw, 900px"
						className={styles.banner}
						priority
					/>
				</div>
				<div className={styles.mainContent}>
					<Image
						src="/images/KhoiHeadshot.JPG"
						alt="Khoi Headshot"
						width={150}
						height={150}
						className={styles.headshot}
					/>
					<div className={styles.rightContent}>
						<nav className={styles.navbar}>
							<span className={styles.logo}>khoi nguyen</span>
							<div className={styles.buttons}>
								<Link
									href="https://www.linkedin.com/in/ngu-khoi/"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.button}
								>
									<Image
										src="/images/linkedin.svg"
										alt="LinkedIn"
										width={24}
										height={24}
									/>
								</Link>
								<Link
									href="https://github.com/ngu-khoi"
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
								<Link
									href="https://www.instagram.com/khoi.anh.nguyen/"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.button}
								>
									<Image
										src="/images/instagram.svg"
										alt="Instagram"
										width={24}
										height={24}
									/>
								</Link>
								<Link
									href="/projects"
									className={styles.button}
								>
									Projects
								</Link>
							</div>
						</nav>

						<div className={styles.content}>
							<div className={styles.about}>
								<MarkdownContent
									content={`
*PS: this website is under construction (╯°□°)╯︵ ┻━┻*

I'm a junior and working on my concurrent CS Master's at Harvard, focusing on:
- Built [Delilah](https://www.delilah.ai/) and [PlanFlux](https://planflux.com/) during gap year, helping 500k students apply to college and processing numerous documents for insurance companies respectively
- Applied AI, leveraging LLMs and other generative models
- Serverless infrastructure (Azure Functions, AWS Lambda) and making systems efficient and rapidly scalable
									`}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
