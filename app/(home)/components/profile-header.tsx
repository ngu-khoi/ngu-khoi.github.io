import Image from "next/image"
import Link from "next/link"
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"

export const ProfileHeader = () => {
	return (
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
							<SocialLinks />
						</Menubar>
					</div>
				</div>
			</div>
		</section>
	)
}

const SocialLinks = () => (
	<>
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
					href="https://x.com/ngu_khoi"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="X (Twitter) Profile"
				>
					<XIcon className="w-6 h-6" />
				</a>
			</MenubarTrigger>
		</MenubarMenu>
	</>
)
