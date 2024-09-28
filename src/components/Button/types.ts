import type { MouseEventHandler } from 'react'

export type Element = HTMLButtonElement
export type Attributes = React.ButtonHTMLAttributes<Element>

interface PropertiesOptional {
	children?: React.ReactNode
	disabled?: Element['disabled']
	tabIndex?: number
	tabStop?: boolean
	onClick?: MouseEventHandler<Element>
}

export interface PropertiesRequired {
	// ...
}

export type Props = Attributes & PropertiesRequired & PropertiesOptional
