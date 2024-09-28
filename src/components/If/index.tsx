import { Props } from './types'

function If({ condition, children }: Props) {
  if (!condition)
    return null

  return children
}

export default If
