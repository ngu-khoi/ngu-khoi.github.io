import Image from "next/image"
import Link from "next/link"
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/icons"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Home() {
	return (
		<div className="min-h-screen font-poppins">
			{/* Main Content Container */}
			<div className="max-w-4xl mx-auto">
				{/* Banner Image */}
				<div className="w-full h-[150px] relative overflow-hidden rounded-b-lg">
					<div className="absolute inset-0 -mt-20">
						<Image
							src="/images/KoiFishPondBanner.avif"
							alt="Banner"
							fill
							className="object-cover"
							priority
						/>
					</div>
				</div>

				{/* Content Section */}
				<section className="px-4 sm:px-6 lg:px-8 mt-8">
					<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
						{/* Profile Image */}
						<div className="relative w-36 h-36">
							<div className="w-full h-full rounded-full border-2 overflow-hidden shadow-md">
								<div className="relative w-full h-full">
									<Image
										src="/images/Harvard-Khoi-Nguyen.jpg"
										alt="Khoi Nguyen"
										fill
										className="object-cover scale-150 translate-x-1"
										priority
									/>
								</div>
							</div>
						</div>

						{/* Name and Navigation */}
						<div className="flex-grow">
							<div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
								<div className="text-center sm:text-left">
									<h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
										khoi nguyen
									</h1>
									<div className="text-xs text-muted-foreground mt-2">
										website under construction (╯°□°)╯︵ ┻━┻
									</div>
								</div>
								<Menubar className="backdrop-blur-sm">
									<MenubarMenu>
										<MenubarTrigger className="cursor-pointer select-none rounded-sm px-3 py-1 text-sm font-medium outline-none hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
											<Link
												href="/projects"
												className="text-sm font-bold"
											>
												projects
											</Link>
										</MenubarTrigger>
									</MenubarMenu>
									<MenubarMenu>
										<MenubarTrigger className="cursor-pointer select-none rounded-sm px-3 py-1 text-sm font-medium outline-none hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
											<a
												href="https://github.com/ngu-khoi"
												target="_blank"
												rel="noopener noreferrer"
												aria-label="GitHub Profile"
											>
												<GitHubIcon className="w-6 h-6" />
											</a>
										</MenubarTrigger>
									</MenubarMenu>
									<MenubarMenu>
										<MenubarTrigger className="cursor-pointer select-none rounded-sm px-3 py-1 text-sm font-medium outline-none hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
											<a
												href="https://www.linkedin.com/in/ngu-khoi/"
												target="_blank"
												rel="noopener noreferrer"
												aria-label="LinkedIn Profile"
											>
												<LinkedInIcon className="w-6 h-6" />
											</a>
										</MenubarTrigger>
									</MenubarMenu>
									<MenubarMenu>
										<MenubarTrigger className="cursor-pointer select-none rounded-sm px-3 py-1 text-sm font-medium outline-none hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
											<a
												href="https://www.instagram.com/khoi.anh.nguyen/"
												target="_blank"
												rel="noopener noreferrer"
												aria-label="Instagram Profile"
											>
												<InstagramIcon className="w-6 h-6" />
											</a>
										</MenubarTrigger>
									</MenubarMenu>
								</Menubar>
							</div>
						</div>
					</div>
				</section>

				{/* About Section */}
				<section id="about" className="py-8 px-4 sm:px-6 lg:px-8">
					<div className="max-w-2xl mx-auto space-y-4">
						<h2 className="text-2xl font-bold tracking-tight">
							about
						</h2>
						<div className="space-y-4">
							<p>I LOVE BUILDING BUTTONS</p>
							<p>
								studying cs at{" "}
								<TooltipProvider>
									<Tooltip delayDuration={200}>
										<TooltipTrigger asChild>
											<span className="underline cursor-pointer">
												harvard
											</span>
										</TooltipTrigger>
										<TooltipContent className="max-w-[300px] text-sm">
											<p className="leading-relaxed">
												taken some hard classes. part of
												currier house, poker club, and
												prod 2.0
											</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>{" "}
								(&apos;25.5)
							</p>
							<p>
								swe intern at{" "}
								<TooltipProvider>
									<Tooltip delayDuration={200}>
										<TooltipTrigger asChild>
											<span className="underline cursor-pointer">
												openai
											</span>
										</TooltipTrigger>
										<TooltipContent className="max-w-[300px] text-sm">
											<p className="leading-relaxed">
												we&apos;ll see what team im on
												soon
											</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>{" "}
								(summer 2025, inaugural cohort)
							</p>
							<p>
								co-founded and took a leave for{" "}
								<TooltipProvider>
									<Tooltip delayDuration={200}>
										<TooltipTrigger asChild>
											<span className="underline cursor-pointer">
												delilah
											</span>
										</TooltipTrigger>
										<TooltipContent className="max-w-[300px] text-sm">
											<p className="leading-relaxed">
												our intern made{" "}
												<a
													href="https://kolly.ai"
													target="_blank"
													rel="noopener noreferrer"
													className="underline hover:opacity-80 transition-colors"
												>
													kolly
												</a>
												{", "}a sleeker and more modern
												&quot;daughter&quot; of delilah,
												check it out!
											</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
								{", "}
								the first ever ai college consultant (acquired,
								&apos;23-&apos;24)
							</p>
							<p>former 3x top 500 valorant player (radiant)</p>
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
					<div className="max-w-2xl mx-auto text-center text-sm text-muted-foreground">
						© {new Date().getFullYear()} Khoi Nguyen. All rights
						reserved.
					</div>
				</footer>
			</div>
		</div>
	)
}
