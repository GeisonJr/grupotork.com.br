import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Grupo Tork',
	description: 'Grupo Tork Landing Page',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang={'pt-BR'}>
			<body className={inter.className}>
				{children}
			</body>
		</html>
	)
}
