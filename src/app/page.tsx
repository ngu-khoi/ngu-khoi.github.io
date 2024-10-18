"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"
import MarkdownContent from "../components/MarkdownContent"
import styles from "./Home.module.css"

const Home = () => {
	const router = useRouter()

	return (
		<div className={styles.pageContainer}>
			<div className={styles.container}>
				<div className={styles.bannerContainer}>
					<Image
						src="/images/KoiFishPondBanner.avif"
						alt="Koi Fish Pond Banner"
						width={640}
						height={200}
						className={styles.banner}
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
								<button
									className={styles.button}
									onClick={() =>
										window.open(
											"https://www.linkedin.com/in/ngu-khoi/",
											"_blank"
										)
									}
								>
									<Image
										src="/images/linkedin.svg"
										alt="LinkedIn"
										width={24}
										height={24}
									/>
								</button>
								<button
									className={styles.button}
									onClick={() =>
										window.open(
											"https://github.com/ngu-khoi",
											"_blank"
										)
									}
								>
									<Image
										src="/images/github.svg"
										alt="GitHub"
										width={24}
										height={24}
									/>
								</button>
								<button
									className={styles.button}
									onClick={() =>
										window.open(
											"https://www.instagram.com/khoi.anh.nguyen/",
											"_blank"
										)
									}
								>
									<Image
										src="/images/instagram.svg"
										alt="Instagram"
										width={24}
										height={24}
									/>
								</button>
								<button
									className={styles.button}
									onClick={() => router.push("/projects")}
								>
									Projects
								</button>
							</div>
						</nav>
						<div className={styles.content}>
							<div className={styles.about}>
								<MarkdownContent
									content={`
PS: this website is under construction (╯°□°)╯︵ ┻━┻

I'm a junior and working on my concurrent CS Master's at Harvard, focusing on:

- High impact projects
- Built [Delilah](https://www.delilah.ai/) and [PlanFlux](https://planflux.com/) during gap year, helping 500k students apply to college and processing numerous documents for insurance companies
- Applied AI, leveraging ChatGPT
- Serverless functions (Azure Functions, AWS Lambda) and making systems rapidly scalable
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
