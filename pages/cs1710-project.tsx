import { useEffect } from "react"

export default function CS1710Project() {
	useEffect(() => {
		// Fetch and inject the HTML content from the raw GitHub content
		fetch(
			"https://raw.githubusercontent.com/ngu-khoi/prediction-market-visualization/main/app/index.html"
		)
			.then((response) => response.text())
			.then((html) => {
				// Create a new div and set its innerHTML to the fetched content
				const container = document.createElement("div")
				container.innerHTML = html

				// Replace the current body content with the fetched content
				document.body.innerHTML = container.innerHTML

				// Load and execute any scripts from the original page
				const scripts = Array.from(
					container.getElementsByTagName("script")
				)
				scripts.forEach((script) => {
					const newScript = document.createElement("script")
					if (script.src) {
						newScript.src = script.src
					} else {
						newScript.textContent = script.textContent
					}
					document.body.appendChild(newScript)
				})
			})
	}, [])

	return <div id="app-container"></div>
}
