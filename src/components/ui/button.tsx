import type { ComponentProps } from 'react'
import { tv, type VariantProps } from '@/lib/tv'

const button = tv({
	base: [
		'inline-flex items-center justify-center gap-2',
		'font-medium leading-none whitespace-nowrap',
		'rounded-md border border-transparent',
		'transition-all duration-200',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
		'disabled:pointer-events-none disabled:opacity-50',
		'cursor-pointer select-none',
	],
	variants: {
		variant: {
			solid: 'bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500',
			outline:
				'border-border-strong bg-transparent text-fg hover:bg-bg-subtle focus-visible:ring-brand-500',
			ghost: 'bg-transparent text-fg hover:bg-bg-subtle focus-visible:ring-brand-500',
			destructive: 'bg-error-500 text-white hover:bg-red-600 focus-visible:ring-error-500',
		},
		size: {
			sm: 'h-8 px-3 text-sm',
			md: 'h-10 px-4 text-sm',
			lg: 'h-12 px-6 text-base',
			icon: 'h-10 w-10',
		},
	},
	defaultVariants: {
		variant: 'solid',
		size: 'md',
	},
})

type ButtonVariants = VariantProps<typeof button>

type ButtonProps = ComponentProps<'button'> & ButtonVariants

export function Button({ variant, size, className, ...props }: ButtonProps) {
	return <button className={button({ variant, size, className })} {...props} />
}
