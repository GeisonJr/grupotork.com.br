import { forwardRef } from 'react'
import type { Element, Props } from './types'

const Button = forwardRef<Element, Props>(({ children, ...props }, ref) => {
	return (
		<button
			onClick={props.onClick}
			{...props}
			ref={ref}
		>
			{children}
		</button>
	)
})

Button.displayName = 'Button'

export default Button
