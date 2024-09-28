import Icons from '@/components/Icons'
import { dictionaries } from '@/dictionaries'

export default function Footer() {

	/* Dictionary */
	const dict = dictionaries['pt']

	return (
		<footer className={'bg-blue_ligth flex items-center justify-center p-5'}>
			<div className={'flex gap-10 justify-between max-w-7xl w-full'}>
				<ul className={'flex gap-5 text-white'}>
					<li className={'h-fit w-fit'}>
						<a
							href={'https://www.facebook.com/torkexpress/'}
							target={'_blank'}
						>
							<Icons.Facebook
								className={'fill-white'}
								viewBox={'0 0 40 40'}
								height={20}
								width={20}
							/>
						</a>
					</li>
					<li className={'h-fit w-fit'}>
						<a
							href={'https://www.instagram.com/torkexpress/'}
							target={'_blank'}
						>
							<Icons.Instagram
								className={'fill-white'}
								viewBox={'0 0 40 40'}
								height={20}
								width={20}
							/>
						</a>
					</li>
					<li className={'h-fit w-fit'}>
						<a
							href={'https://www.linkedin.com/company/tork-express/'}
							target={'_blank'}
						>
							<Icons.Linkedin
								className={'fill-white'}
								viewBox={'0 0 40 40'}
								height={20}
								width={20}
							/>
						</a>
					</li>
				</ul>
				<p className={'text-sm text-white'}>
					{`${dict.footer.copyrigth.title} | ${dict.footer.powered.title} `}
					<a
						className={'hover:underline'}
						href={'https://geison.dev/'}
						target={'_blank'}
					>
						{dict.footer.author.title}
					</a>
				</p>
			</div>
		</footer>
	)
}
