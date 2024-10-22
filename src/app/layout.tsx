import "../styles/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Khoi Nguyen",
	description:
		"Personal portfolio and projects of Khoi Nguyen, a CS student at Harvard focusing on Applied AI.",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
