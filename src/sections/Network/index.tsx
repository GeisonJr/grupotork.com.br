import Container from '@/components/Container'
import { dictionaries } from '@/dictionaries'
import Image from 'next/image'

export default function Network() {

	/* Dictionary */
	const dict = dictionaries['pt']

	return (
		<>
			<Container
				className={'bg-center bg-cover bg-fixed bg-no-repeat relative'}
				style={{ backgroundImage: 'url(/assets/banner.jpg)' }}
				id={'network'}
			>
				<div className={'absolute bg-black bg-opacity-60 inset-0'} />
				<div className={'flex flex-col gap-10 relative'}>
					<Row>
						<Title text={dict.companies.spxFlow.title} />
						<Title text={dict.companies.somosTork.title} />
						<Title text={dict.companies.torkExpress.title} />
						<Title text={dict.companies.rioGardenMall.title} />
						<Title text={dict.companies.powerTeam.title} />
					</Row>
					<Row>
						<Link href={'https://www.spxflow.com/'}>
							<Image
								src={'/assets/logos/spx-flow.png'}
								alt={'SPX Flow'}
								height={200}
								width={200}
							/>
						</Link>
						<Link href={'https://www.somostork.com.br/'}>
							<Image
								src={'/assets/logos/somos-tork.svg'}
								alt={'Somos Tork'}
								height={200}
								width={200}
							/>
						</Link>
						<Link href={'https://www.torkexpress.com.br/'}>
							<Image
								src={'/assets/logos/tork-express.svg'}
								alt={'Tork Express'}
								height={200}
								width={200}
							/>
						</Link>
						<Link href={'https://www.riogardenmall.com.br/'}>
							<Image
								src={'/assets/logos/rio-garden-mall.png'}
								alt={'Rio Garden Mall'}
								height={200}
								width={200}
							/>
						</Link>
						<Link href={'https://www.powerteam.com/'}>
							<Image
								src={'/assets/logos/power-team.png'}
								alt={'Power Team'}
								height={200}
								width={200}
							/>
						</Link>
					</Row>
				</div>
			</Container>
		</>
	)
}

function Link({ children, href }: { children: React.ReactNode, href: string }) {
	return (
		<a
			className={'self-center'}
			href={href}
			target={'_blank'}
		>
			{children}
		</a>
	)
}

function Row({ children }: { children: React.ReactNode }) {
	return (
		<div className={'flex flex-1 gap-10'}>
			{children}
		</div>
	)
}

function Title({ text }: { text: string }) {
	return (
		<p className={'flex flex-1 font-bold justify-center text-white text-lg text-center uppercase'}>
			{text}
		</p>
	)
}
