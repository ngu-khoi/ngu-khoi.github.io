"use client"

import { useState, useRef, useEffect } from "react"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"

interface CustomTooltipProps {
	content: React.ReactNode
	children: React.ReactNode
}

export const CustomTooltip = ({ content, children }: CustomTooltipProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

	const handleHover = (shouldShow: boolean) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}

		if (shouldShow) {
			setIsOpen(true)
		} else {
			timeoutRef.current = setTimeout(() => {
				setIsOpen(false)
			}, 150)
		}
	}

	const handleToggle = () => {
		setIsOpen((prev) => !prev)
	}

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}
		}
	}, [])

	return (
		<TooltipProvider>
			<Tooltip open={isOpen}>
				<TooltipTrigger asChild>
					<span
						className="underline cursor-pointer"
						onClick={handleToggle}
						onMouseEnter={() => handleHover(true)}
						onMouseLeave={() => handleHover(false)}
					>
						{children}
					</span>
				</TooltipTrigger>
				<TooltipContent
					className="max-w-[300px] text-sm"
					onPointerDownOutside={() => handleHover(false)}
					onMouseEnter={() => handleHover(true)}
					onMouseLeave={() => handleHover(false)}
				>
					{content}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
