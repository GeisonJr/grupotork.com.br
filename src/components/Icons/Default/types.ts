export type Element = SVGSVGElement
export type Attributes = React.SVGAttributes<Element>

export interface PropertiesOptional {
	// ...
}

export interface PropertiesRequired {
	// ...
}

export type Props = Attributes & PropertiesRequired & PropertiesOptional
