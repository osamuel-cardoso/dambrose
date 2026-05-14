import { BlurReveal } from '@/components/ui/blur-reveal'

export function Foundation() {
	return (
		<section
			className="w-full pt-[6em] md:pt-[12em] pb-0 flex flex-col justify-end items-center h-[60vh] md:h-auto"
			style={{ backgroundColor: '#ae4000' }}
		>
			{/* ── Card ─────────────────────────────────────────── */}
			<BlurReveal className="relative w-[85%] md:w-[46em] aspect-[3/2] bg-rangoon-green flex items-center justify-center p-[1.25em]">
				{/* Corner labels */}
				<span className="absolute top-[1em] left-[1.25em] font-body text-xs text-ecru-white/60 uppercase tracking-widest">
					Lifelong
				</span>
				<span className="absolute top-[1em] right-[1.25em] font-body text-xs text-ecru-white/60 uppercase tracking-widest">
					Medicine
				</span>
				<span className="absolute bottom-[1em] left-[1.25em] font-body text-xs text-ecru-white/60 uppercase tracking-widest">
					Deep Dive
				</span>
				<span className="absolute bottom-[1em] right-[1.25em] font-body text-xs text-ecru-white/60 uppercase tracking-widest">
					Dambrose
				</span>

				{/* Center label */}
				<span className="font-body text-xs text-ecru-white/60 uppercase tracking-widest">
					Foundation
				</span>
			</BlurReveal>

			{/* ── Teal block ───────────────────────────────────── */}
			<div
				className="w-[14em] md:w-[18.5em] h-[12em] md:h-[18em] -mt-[0.5em]"
				style={{
					background: 'linear-gradient(to bottom, #728b8b 0%, #b2b9a9 100%)',
				}}
			/>
		</section>
	)
}
