'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const listVariants = {
	hidden: {},
	visible: {
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.06,
		},
	},
	exit: {
		transition: { staggerChildren: 0.03, staggerDirection: -1 },
	},
}

const itemVariants = {
	hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
	visible: {
		opacity: 1,
		filter: 'blur(0px)',
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
	},
	exit: {
		opacity: 0,
		filter: 'blur(8px)',
		y: -8,
		transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
	},
}

const LINKS = [
	{ label: 'Home', href: '/', active: true },
	{ label: 'Services', href: '/services' },
	{ label: 'Alma', href: '/alma', italic: true },
	{ label: 'Praeva', href: '/praeva', italic: true },
	{ label: 'B2B', href: '/b2b' },
	{ label: 'About us', href: '/about' },
	{ label: 'About Dr. Michael', href: '/about-dr-michael' },
	{ label: 'Lifelong Medicine', href: '/lifelong-medicine' },
	{ label: 'Membership', href: '/membership' },
	{ label: 'Contact', href: '/contact' },
]

export function MobileNav() {
	const [open, setOpen] = useState(false)

	return (
		<>
			{/* ── Trigger ─────────────────────────────────────── */}
			<button
				type="button"
				aria-label={open ? 'Close navigation' : 'Open navigation'}
				onClick={() => setOpen(true)}
				className="flex flex-col items-start justify-center gap-[0.3125em] w-[2.5em] h-[2.5em] md:w-[3em] md:h-[3em]"
			>
				<span className="block w-[1.0625em] h-px bg-gray-olive" />
				<span className="block w-[1.0625em] h-px bg-gray-olive" />
				<span className="block w-[1.0625em] h-px bg-gray-olive" />
			</button>

			{/* ── Overlay ─────────────────────────────────────── */}
			<AnimatePresence>
				{open && (
					<motion.div
						className="fixed inset-0 z-50 flex flex-col"
						initial={{ clipPath: 'inset(0 0 100% 0)' }}
						animate={{ clipPath: 'inset(0 0 0% 0)' }}
						exit={{ clipPath: 'inset(0 0 100% 0)' }}
						transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
					>
						{/* Top bar */}
						<div className="bg-ecru-white px-[1.25em] py-[1.25em]">
							<button
								type="button"
								aria-label="Close navigation"
								onClick={() => setOpen(false)}
								className="w-[3em] h-[3em] rounded-full bg-rangoon-green flex items-center justify-center"
							>
								<svg
									width="20"
									height="7"
									viewBox="0 0 20 7"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path d="M0 0H20V0.923077H0V0Z" fill="#F2F1E3" />
									<path d="M0 5.53854H20V6.46162H0V5.53854Z" fill="#F2F1E3" />
								</svg>
							</button>
						</div>

						{/* Nav links */}
						<nav className="flex-1 bg-ecru-white px-[1.25em] pt-[1.5em] pb-[2em] overflow-y-auto">
							<motion.ul
								className="flex flex-col"
								variants={listVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
							>
								{LINKS.map((link) => (
									<motion.li key={link.href} variants={itemVariants}>
										<a
											href={link.href}
											onClick={() => setOpen(false)}
											className={`font-display text-4xl leading-tight text-olive-haze block py-[0.2em] ${
												link.active ? 'border-b border-rangoon-green w-fit' : ''
											} ${link.italic ? 'italic' : ''}`}
										>
											{link.label}
										</a>
									</motion.li>
								))}
							</motion.ul>
						</nav>

						{/* Bottom section */}
						<div
							className="px-[1.25em] pt-[2em] pb-[1.5em] flex flex-col gap-[1.5em]"
							style={{
								background: 'linear-gradient(to bottom, #383f39 0%, #222009 50%, #0a0a0a 100%)',
							}}
						>
							{/* Social + copyright */}
							<div className="flex flex-col gap-[2em]">
								<div className="flex items-center gap-4">
									<SocialIcon label="Facebook">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="currentColor"
											aria-hidden="true"
										>
											<path d="M16 8a8 8 0 1 0-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.616-1.304 1.249V8h2.219l-.355 2.313H9.25v5.59A8.002 8.002 0 0 0 16 8Z" />
										</svg>
									</SocialIcon>
									<SocialIcon label="Instagram">
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
											<rect
												x="1.5"
												y="1.5"
												width="13"
												height="13"
												rx="3.5"
												stroke="currentColor"
												strokeWidth="1.2"
											/>
											<circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.2" />
											<circle cx="11.5" cy="4.5" r="0.75" fill="currentColor" />
										</svg>
									</SocialIcon>
									<SocialIcon label="WhatsApp">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="currentColor"
											aria-hidden="true"
										>
											<path d="M11.2 7.65c-.06-.03-.12-.06-.18-.08-.1-1.77-1.05-2.78-2.63-2.79h-.02c-.94 0-1.72.4-2.2 1.14l1.04.71c.36-.53.88-.66 1.18-.66.45 0 .8.13 1.01.4.16.19.26.45.3.78a5.3 5.3 0 0 0-1.42-.03c-1.42.16-2.33.94-2.27 1.94.03.5.3.94.75 1.23.38.24.88.36 1.4.33.69-.04 1.23-.28 1.6-.72.28-.33.46-.76.54-1.3.32.2.56.45.7.76.23.53.24 1.4-.47 2.1-.62.62-1.37.89-2.35.9-1.1-.01-1.93-.36-2.48-.92C4.36 10.9 4.1 9.88 4.1 8s.26-2.9.8-3.54c.55-.57 1.39-.91 2.48-.93 1.1.01 1.95.36 2.5.93.27.28.47.63.6 1.04l1.1-.29c-.17-.57-.45-1.06-.83-1.46C10 3 8.87 2.54 7.42 2.53h-.02C5.95 2.54 4.84 3 4.1 3.75c-.72.74-1.09 1.87-1.1 3.38V8.87c.01 1.51.38 2.64 1.1 3.38.75.75 1.86 1.21 3.3 1.22h.02c1.23-.01 2.18-.37 2.98-1.16.97-.97 1-2.3.6-3.2-.28-.64-.78-1.16-1.48-1.5l-.3.04Zm-.54 2.21c-.05.65-.49 1.37-1.66 1.44-.55.03-.98-.14-1.14-.24a.65.65 0 0 1-.31-.5c-.03-.42.3-.73.99-.81.09-.01.17-.01.26-.01.35 0 .68.04 1 .1l.03.01c-.04.01-.1.01-.17.01Z" />
										</svg>
									</SocialIcon>
								</div>
								<p className="font-body text-xs text-opal uppercase tracking-tight">
									© DAMBROSE® 2026, All Rights Reserved
								</p>
							</div>

							{/* Legal links */}
							<div className="flex flex-col gap-[0.5em]">
								<a
									href="/terms"
									className="font-body text-sm text-opal/80 uppercase tracking-tight"
								>
									Terms &amp; Conditions
								</a>
								<a
									href="/privacy"
									className="font-body text-sm text-opal/80 uppercase tracking-tight"
								>
									Privacy Policy
								</a>
								<p className="font-body text-xs text-opal/40 uppercase tracking-tight">
									All Rights Reserved © 2025
								</p>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
	return (
		<button
			type="button"
			aria-label={label}
			className="w-[3em] h-[3em] rounded-full border border-opal/30 flex items-center justify-center text-opal"
		>
			{children}
		</button>
	)
}
