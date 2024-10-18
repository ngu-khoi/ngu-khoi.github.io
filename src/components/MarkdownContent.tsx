import React from "react"
import ReactMarkdown from "react-markdown"
import styles from "./MarkdownContent.module.css"

interface MarkdownContentProps {
	content: string
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
	return (
		<div className={styles.content}>
			<ReactMarkdown
				components={{
					a: ({ node, ...props }) => (
						<a className={styles.link} {...props} />
					),
				}}
			>
				{content}
			</ReactMarkdown>
		</div>
	)
}

export default MarkdownContent
