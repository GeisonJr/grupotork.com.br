import Container from '@/components/Container'
import If from '@/components/If'
import { dictionaries } from '@/dictionaries'
import Contact from '@/sections/Contact'
import Extra from '@/sections/Extra'
import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import Network from '@/sections/Network'
import { Fragment } from 'react'

export default function About() {

	/* Dictionary */
	const dict = dictionaries['pt']

	return (
		<>
			<Header />
			<Container
				className={'bg-center bg-cover bg-no-repeat flex justify-center relative'}
				style={{ backgroundImage: 'url(/assets/facade.jpg)' }}
				id={'about'}
			>
				<div className={'absolute bg-black bg-opacity-60 inset-0'} />
				<div className={'p-5 relative'}>
					<p className={'text-white text-2xl font-bold'}>
						{dict.about.title}
					</p>
				</div>
			</Container>
			<Container className={'bg-white flex justify-center'}>
				<div className={'flex gap-10'}>
					<iframe
						className={'aspect-video flex-1 self-center'}
						src={'https://www.youtube.com/embed/-ADkurB2-LI?autoplay=1&controls=0&loop=1&rel=0'}
						title={'Grupo Tork | Video Institucional 2020'}
					/>
					<div className={'flex-1 self-center'}>
						{dict.about.description.map((item, index, array) => (
							<Fragment key={index}>
								<p className={'text-blue_ligth'}>
									{item}
								</p>
								<If condition={index < array.length - 1}>
									<br />
								</If>
							</Fragment>
						))}
					</div>
				</div>
			</Container >
			<Network />
			<Extra />
			<Contact />
			<Footer />
		</>
	)
}
