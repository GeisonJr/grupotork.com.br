import Contact from '@/sections/Contact'
import Extra from '@/sections/Extra'
import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import Network from '@/sections/Network'
import Services from '@/sections/Services'
import Wrenches from '@/sections/Wrenchs'

export default function Home() {

	return (
		<main className='flex flex-col'>
			<Header />
			<Services />
			<Network />
			<Extra />
			<Contact />
			<Wrenches />
			<Footer />
		</main>
	)
}
