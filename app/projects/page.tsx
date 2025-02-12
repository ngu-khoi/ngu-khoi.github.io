import Image from "next/image"
import Link from "next/link"
import { api, type Project } from "@/app/lib/api"

async function getProjects() {
	return api.getProjects()
}

export default async function ProjectsPage() {
	const projects = await getProjects()

	return (
		<div className="min-h-screen bg-zinc-900 text-foreground font-poppins">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Header with Back Button */}
				<div className="flex items-center justify-between mb-12">
					<Link
						href="/"
						className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors"
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
						<div
							key={project.id}
							className="group bg-zinc-800/50 rounded-lg p-6 hover:bg-zinc-800/70 transition-all duration-200 flex flex-col"
						>
							<div className="flex-grow">
								{project.imageSrc && (
									<div className="relative h-48 mb-6 overflow-hidden rounded-lg bg-zinc-900">
										<Image
											src={project.imageSrc}
											alt={project.title}
											fill
											className="object-cover transition-transform duration-200 group-hover:scale-105"
										/>
									</div>
								)}
								<h3 className="text-xl font-semibold mb-2">
									{project.title}
								</h3>
								<p className="text-sm text-zinc-400 mb-3">
									{project.subtitle}
								</p>
								<p className="text-sm text-zinc-300">
									{project.description}
								</p>
							</div>
							<div className="flex gap-4 mt-6 pt-6 border-t border-zinc-700/50">
								{project.link && (
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-foreground hover:text-foreground/80 transition-colors"
									>
										visit →
									</a>
								)}
								{project.github && (
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-foreground hover:text-foreground/80 transition-colors"
									>
										github →
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
