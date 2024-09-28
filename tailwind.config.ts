import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/sections/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			blue_ligth: '#1284b5',
			black: '#000',
			white: '#fff',
			red: '#f00'
		},
	},
	plugins: [],
}

export default config
