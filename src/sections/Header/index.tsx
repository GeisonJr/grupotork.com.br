import { dictionaries } from '@/dictionaries'
import Image from 'next/image'

export default function Header() {

	/* Dictionary */
	const dict = dictionaries['pt']

	return (
		<header className={'backdrop-blur-[16px] flex items-center justify-center p-5 shadow-lg'}>
			<div className={'flex gap-10 justify-between max-w-7xl w-full'}>
				<section className={'self-center'}>
					<Image
						alt={'Grupo Tork Logo'}
						src={'/assets/logos/grupo-tork.svg'}
						height={61}
						width={125}
					/>
				</section>
				<nav className={'self-center'}>
					<ul className={'flex gap-5 text-blue_ligth'}>
						<li>
							<a
								className={'hover:underline'}
								href={'/#home'}
								target={'_self'}
							>
								{dict.menu.home.title}
							</a>
						</li>
						<li>
							<a
								className={'hover:underline'}
								href={'/about'}
								target={'_self'}
							>
								{dict.menu.about.title}
							</a>
						</li>
						<li>
							<a
								className={'hover:underline'}
								href={'/#products'}
								target={'_self'}
							>
								{dict.menu.products.title}
							</a>
						</li>
						<li>
							<a
								className={'hover:underline'}
								href={'/#services'}
								target={'_self'}
							>
								{dict.menu.services.title}
							</a>
						</li>
						<li>
							<a
								className={'hover:underline'}
								href={'/#contact'}
								target={'_self'}
							>
								{dict.menu.contact.title}
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
