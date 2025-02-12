import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

export const metadata: Metadata = {
	title: "khoi nguyen",
	description: "cs @ harvard university, swe and entrepreneur",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem={true}
					disableTransitionOnChange
				>
					{children}
					<DarkModeToggle />
					<Analytics />
					<SpeedInsights />
				</ThemeProvider>
			</body>
		</html>
	)
}
