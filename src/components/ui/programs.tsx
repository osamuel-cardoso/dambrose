import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { Container } from '@/components/ui/container'
import { RevealImage } from '@/components/ui/reveal-image'

type ProgramCard = {
	tag: string
	description: string
	ctaLabel: string
	ctaHref: string
	ctaBg: string
	image?: StaticImageData | string
	imageAlt?: string
}

const CARDS: ProgramCard[] = [
	{
		tag: "ALMA by Dr. D'Ambrose",
		description:
			'A primary care program focused on diagnosis, treatment, urgent care, and ongoing health management.',
		ctaLabel: 'EXPLORE ALMA',
		ctaHref: '/alma',
		ctaBg: 'bg-indian-khaki',
		imageAlt: 'ALMA program',
	},
	{
		tag: "PRAEVA by Dr. D'Ambrose",
		description:
			'A longevity-focused program designed to anticipate risk, improve wellness, and preserve vitality.',
		ctaLabel: 'EXPLORE PRAEVA',
		ctaHref: '/praeva',
		ctaBg: 'bg-william',
		imageAlt: 'PRAEVA program',
	},
]

export function Programs() {
	return (
		<section className="w-full bg-ecru-white py-[4em] md:py-[7em]">
			<Container>
				{/* ── Header ───────────────────────────────────────────── */}
				<div className="flex flex-col gap-[2em] md:grid md:grid-cols-12 md:gap-[1em] md:items-start">
					<p className="md:col-span-3 font-body text-xs text-olive-haze uppercase tracking-wide">
						PROGRAMS
					</p>
					<div className="md:col-span-6 flex flex-col gap-[2em]">
						<h2 className="font-display text-3xl md:text-5xl text-olive-haze leading-tight">
							Access prevention, treatment, and renewal in one continuous path.
						</h2>
						<p className="font-body text-sm text-rangitoto">
							DAMBROSE offers a physician-led approach shaped around individual health goals, from
							prevention to renewal.
						</p>
					</div>
				</div>

				{/* ── Cards ────────────────────────────────────────────── */}
				<div className="mt-[4em] md:mt-[7em] grid grid-cols-1 md:grid-cols-2 gap-[2em] md:gap-[0.5em]">
					{CARDS.map((card) => (
						<div key={card.tag} className="flex flex-col">
							{/* Image */}
							<RevealImage className="w-full aspect-[10/9] overflow-hidden bg-bison-hide">
								{card.image && (
									<Image
										src={card.image}
										alt={card.imageAlt ?? ''}
										className="w-full h-full object-cover"
									/>
								)}
							</RevealImage>

							{/* Info */}
							<div className="mt-[2em] flex flex-col gap-[1.5em]">
								<span className="font-body text-xs text-olive-haze uppercase tracking-wide">
									{card.tag}
								</span>
								<p className="font-body text-sm text-rangitoto">{card.description}</p>
							</div>

							{/* CTA */}
							<a
								href={card.ctaHref}
								className={`mt-[2em] self-start inline-flex items-center rounded-[2px] px-[1em] py-[0.625em] font-body text-xs text-ecru-white uppercase ${card.ctaBg}`}
							>
								{card.ctaLabel}
							</a>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}
