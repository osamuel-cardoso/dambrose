'use client'

import { useBlurReveal } from '@/hooks/use-blur-reveal'

type BlurRevealProps = {
	children: React.ReactNode
	className?: string
	as?: keyof JSX.IntrinsicElements
	duration?: number
	delay?: number
	ease?: string
	start?: string
	blur?: string
}

export function BlurReveal({
	children,
	className = '',
	as: Tag = 'div',
	duration,
	delay,
	ease,
	start,
	blur,
}: BlurRevealProps) {
	const ref = useBlurReveal<HTMLElement>({ duration, delay, ease, start, blur })

	return (
		<Tag ref={ref as React.Ref<HTMLElement>} className={className}>
			{children}
		</Tag>
	)
}
