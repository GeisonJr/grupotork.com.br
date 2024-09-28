export type Element = HTMLDivElement
export type Attributes = React.HTMLAttributes<Element>

export interface Props {
  children?: Attributes['children']
  className?: Attributes['className']
  style?: Attributes['style']
  id?: Attributes['id']
  isCol?: boolean
}
