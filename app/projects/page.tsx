import Image from "next/image"
import Link from "next/link"
import { api, type Project } from "@/lib/api"
import { GitHubIcon, WorldIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card"

async function getProjects() {
	return api.getProjects()
}

export default async function ProjectsPage() {
	const projects = await getProjects()

	return (
		<div className="min-h-screen font-poppins">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Header with Back Button */}
				<div className="flex items-center justify-between mb-12">
					<Link
						href="/"
						className="flex items-center gap-2 hover:opacity-80 transition-colors"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M10 19l-7-7m0 0l7-7m-7 7h18"
							/>
						</svg>
						<span className="text-sm font-medium">back home</span>
					</Link>
					<h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
						projects
					</h1>
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.map((project: Project) => (
						<Card
							key={project.id}
							className="group bg-background/50 hover:bg-background/70 transition-all duration-200 flex flex-col"
						>
							{/* Image Section */}
							<div className="px-6 pt-6">
								{project.imageSrc ? (
									<div className="relative h-40 overflow-hidden rounded-lg">
										<Image
											src={project.imageSrc}
											alt={project.title}
											fill
											className="object-cover"
										/>
									</div>
								) : (
									<div className="relative h-40 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
										no image here!
									</div>
								)}
							</div>

							<CardHeader>
								<CardTitle className="text-xl font-semibold">
									{project.title}
								</CardTitle>
								<CardDescription className="text-sm text-muted-foreground">
									{project.subtitle}
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-grow">
								<p className="text-sm">{project.description}</p>
							</CardContent>
							{(project.link || project.github) && (
								<CardFooter className="pt-4 border-t">
									<div className="flex gap-4">
										{project.link && (
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm hover:opacity-80 transition-colors"
											>
												visit →
											</a>
										)}
										{project.github && (
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm hover:opacity-80 transition-colors"
											>
												github →
											</a>
										)}
									</div>
								</CardFooter>
							)}
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}
