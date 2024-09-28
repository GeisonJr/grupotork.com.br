import Container from '@/components/Container'
import { dictionaries } from '@/dictionaries'
import Contact from '@/sections/Contact'
import Extra from '@/sections/Extra'
import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import Network from '@/sections/Network'

export default function Newsletter() {

	/* Dictionary */
	const dict = dictionaries['pt']

	return (
		<>
			<Header />
			<Container
				id={'newsletter'}
			>
				<form>
					<label htmlFor={'email'}>
						{/* {dict.newsletter.email} */}
					</label>
					<input
						id={'email'}
						name={'email'}
						type={'email'}
					/>
					<button>
						{/* {dict.newsletter.submit} */}
					</button>
				</form>
			</Container >
			<Network />
			<Extra />
			<Contact />
			<Footer />
		</>
	)
}
