import Container from '@/components/Container'
import Icons from '@/components/Icons'
import If from '@/components/If'
import { dictionaries } from '@/dictionaries'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Contact() {

	/* Dictionary */
	const dict = dictionaries['pt']

	return (
		<>
			<Container
				className={'bg-white'}
				id={'info'}
			>
				<div className={'flex flex-col gap-10'}>
					<Column>
						<Item data={dict.info.emergency}>
							<Icons.Clock
								className={'fill-white'}
								height={30}
								width={30}
							/>
						</Item>
						<Item data={dict.info.phone}>
							<Icons.Hash
								className={'fill-white'}
								height={30}
								width={30}
							/>
						</Item>
					</Column>
					<Column>
						<Item data={dict.info.cellPhone}>
							<Icons.DeviceMobile
								className={'fill-white'}
								height={30}
								width={30}
							/>
						</Item>
						<Item data={dict.info.chat}>
							<Icons.CommentDiscussion
								className={'fill-white'}
								height={30}
								width={30}
							/>
						</Item>
					</Column>
					<Column>
						<Item data={dict.info.email}>
							<Icons.Mail
								className={'fill-white'}
								height={30}
								width={30}
							/>
						</Item>
						<Item data={dict.info.address}>
							<Icons.Location
								className={'fill-white'}
								height={30}
								width={30}
							/>
						</Item>
					</Column>
				</div>
			</Container>
		</>
	)
}

function Column({ children }: { children: React.ReactNode }) {
	return (
		<div className={'flex flex-1 gap-10 justify-evenly'}>
			{children}
		</div>
	)
}

function Item({ children, data }: {
	children?: React.ReactNode
	data: {
		title: string
		options: {
			link: string
			text: string
		}[]
	}
}) {
	return (
		<div className={'flex flex-1 flex-col font-mono gap-2 text-blue_ligth'}>
			<div className={'flex flex-col gap-2 items-center'}>
				<div
					className={'bg-blue_ligth p-5 rounded-full w-min'}
					title={data.title}
				>
					{children}
				</div>
				<p className={'font-bold text-blue_ligth'}>
					{data.title}
				</p>
			</div>
			<div className={'flex gap-5 justify-center items-center'}>
				<div className={'gap-15 text-center'}>
					{data.options.map((option, index, array) => {
						return (
							<Fragment key={index}>
								<Link
									className={'hover:underline'}
									href={option.link}
								>
									{option.text}
								</Link>
								<If condition={index < array.length - 1}>
									<br />
								</If>
							</Fragment>
						)
					})}
				</div>
			</div>
		</div >
	)
}
