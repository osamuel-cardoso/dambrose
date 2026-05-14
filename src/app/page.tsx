import { Header } from '@/components/ui/header'
import { Hero } from '@/components/ui/hero'
import { Features } from '@/components/ui/features'
import { Foundation } from '@/components/ui/foundation'
import { Programs } from '@/components/ui/programs'

export default function HomePage() {
	return (
		<>
			<Header />
			<Hero />
			<Programs />
			<Features />
			<Foundation />
		</>
	)
}
