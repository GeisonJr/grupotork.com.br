'use client'

import Button from '@/components/Button/Button'
import Container from '@/components/Container'
import Icons from '@/components/Icons'
import { dictionaries } from '@/dictionaries'
import { useRouter } from 'next/navigation'

export default function Extra() {

	/* Dictionary */
	const dict = dictionaries['pt']

	const className = 'fill-white'

	return (
		<>
			<Container
				className={'bg-blue_ligth'}
				id={'contact'}
			>
				<Item
					data={dict.contact.workWithUs}
					link={'/work-with-us'}
				>
					<Icons.Organization
						className={className}
						height={50}
						width={50}
					/>
				</Item>
				<Item
					data={dict.contact.newsletter}
					link={'/newsletter'}
				>
					<Icons.Megaphone
						className={className}
						height={50}
						width={50}
					/>
				</Item>
			</Container>
		</>
	)
}

function Item({ children, data, link }: {
	children: React.ReactNode
	data: {
		title: string
		description: string
		button: {
			title: string
		}
	}
	link: string
}) {
	const router = useRouter()

	return (
		<div className={'flex flex-1 flex-col gap-5 items-center text-center'}>
			{children}
			<h3 className={'font-bold text-2xl text-white uppercase'}>
				{data.title}
			</h3>
			<p className={'text-white'}>
				{data.description}
			</p>
			<Button
				onClick={() => {
					router.push(link)
				}}
			>
				<div className={'bg-white flex gap-2 px-4 py-2 rounded-full'}>
					<p className={'text-blue_ligth'}>
						{data.button.title}
					</p>
				</div>
			</Button>
		</div >
	)
}
