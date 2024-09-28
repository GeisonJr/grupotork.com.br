import Container from '@/components/Container'
import Icons from '@/components/Icons'
import { dictionaries } from '@/dictionaries'

export default function Services() {

	/* Dictionary */
	const dict = dictionaries['pt']

	const className: string = 'fill-white'

	return (
		<Container
			className={'bg-white'}
			id={'services'}
			isCol
		>
			<h2 className={'font-mono text-blue_ligth font-bold w-full text-center text-3xl uppercase'}>
				{dict.services.title}
			</h2>
			<Row>
				<Item data={dict.services.service1}>
					<Icons.Stopwatch
						className={className}
						height={40}
						width={40}
					/>
				</Item>
				<Item data={dict.services.service2}>
					<Icons.Milestone
						className={className}
						height={40}
						width={40}
					/>
				</Item>
				<Item data={dict.services.service3}>
					<Icons.Tools
						className={className}
						height={40}
						width={40}
					/>
				</Item>
				<Item data={dict.services.service4}>
					<Icons.MortarBoard
						className={className}
						height={40}
						width={40}
					/>
				</Item>
			</Row>
			<Row>
				<Item data={dict.services.service5}>
					<Icons.Gear
						className={className}
						height={40}
						width={40}
					/>
				</Item>
				<Item data={dict.services.service6}>
					<Icons.Package
						className={className}
						height={40}
						width={40}
					/>
				</Item>
				<Item data={dict.services.service7}>
					<Icons.Beaker
						className={className}
						height={40}
						width={40}
					/>
				</Item>
			</Row>
		</Container>
	)
}

function Item({ children, data }: {
	children: React.ReactNode
	data: {
		title: string
	}
}) {
	return (
		<li className={'flex flex-1 flex-col flex-wrap gap-2 items-center w-min'}>
			<div className={'bg-blue_ligth p-4 rounded-full'}>{children}</div>
			<h3 className={'font-bold font-mono text-blue_ligth text-center uppercase'}>
				{data.title}
			</h3>
		</li>
	)
}

function Row({ children }: { children: React.ReactNode }) {
	return (
		<ul className={'flex'}>
			{children}
		</ul>
	)
}
