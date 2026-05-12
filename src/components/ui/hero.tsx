import Image from 'next/image'
import hero from '@/images/Rectangle 34624408.png'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

export function Hero() {
	return (
		<section className="w-full bg-ecru-white">
			{/* ── Image ──────────────────────────────────────────── */}
			<Container>
				<RevealImage
					className="w-[85%] md:w-full h-64 md:h-auto overflow-hidden bg-bison-hide"
					start="top 95%"
				>
					<Image
						src={hero}
						alt="Dr. Michael Dambrose — Lifelong Medicine"
						className="w-full h-full object-cover"
					/>
				</RevealImage>
			</Container>

			{/* ── Content strip ──────────────────────────────────── */}
			<Container className="flex flex-col gap-[1.5em] pt-[2em] pb-[2.5em] md:flex-row md:items-center md:justify-between md:pt-[1.125em] md:pb-[2.5em]">
				<h1 className="font-display text-5xl md:text-6xl text-gray-olive leading-[1.15]">
					Lifelong care that <em className="font-display italic">knows</em> you.
				</h1>
				<p className="text-gray-olive uppercase leading-relaxed tracking-tight text-sm md:text-xs max-w-[28.875em]">
					Discover a private medical practice built on personal oversight and continuity across
					every stage of life.
				</p>
			</Container>
		</section>
	)
}
