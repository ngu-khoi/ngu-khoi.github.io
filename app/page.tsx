"use client"

import Image from "next/image"
import { CustomTooltip } from "@/components/ui/custom-tooltip"
import { ProfileHeader } from "./(home)/components/profile-header"

export default function Home() {
	return (
		<div className="min-h-screen font-poppins">
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

				<ProfileHeader />

				{/* About Section */}
				<section
					id="about"
					className="py-8 px-4 sm:px-6 lg:px-8 space-y-16"
				>
					<div className="max-w-2xl mx-auto space-y-4">
						<h2 className="text-2xl font-bold tracking-tight">
							about
						</h2>
						<div className="space-y-4">
							<p>I LOVE BUILDING BUTTONS</p>
							<p>
								studying cs at{" "}
								<CustomTooltip
									content={
										<p className="leading-relaxed">
											was doing concurrent masters, but
											now graduating early instead. part
											of currier house, poker club, and
											prod 2.0
										</p>
									}
								>
									harvard
								</CustomTooltip>{" "}
								(&apos;25.5)
							</p>
							<p>
								swe intern at{" "}
								<CustomTooltip
									content={
										<p className="leading-relaxed">
											we&apos;ll see what team im on soon
										</p>
									}
								>
									openai
								</CustomTooltip>{" "}
								(summer 2025, inaugural cohort)
							</p>
							<p>
								co-founded and took a leave for{" "}
								<CustomTooltip
									content={
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
									}
								>
									delilah
								</CustomTooltip>
								{", "}
								the first ever ai college consultant (acquired,
								&apos;23-&apos;24)
							</p>
							<p>former 3x top 500 valorant player (radiant)</p>
						</div>
					</div>

					<div className="max-w-2xl mx-auto space-y-4">
						<h2 className="text-2xl font-bold tracking-tight">
							what&apos;s on my radar
						</h2>
						<p>ai productivity coach. adhd has plagued us</p>
						<p>
							social media scheduler from my buddy{" "}
							<a
								href="https://raunak.io/"
								target="_blank"
								rel="noopener noreferrer"
								className="underline hover:opacity-80 transition-colors"
							>
								raunak
							</a>
						</p>
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
