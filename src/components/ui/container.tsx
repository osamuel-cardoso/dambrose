export function Container({
	className = '',
	children,
}: {
	className?: string
	children: React.ReactNode
}) {
	return (
		<div className={`mx-auto w-full max-w-[85em] px-[1.25em] md:px-[2.5em] ${className}`}>
			{children}
		</div>
	)
}
