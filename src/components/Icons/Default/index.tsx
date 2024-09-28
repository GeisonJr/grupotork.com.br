import { forwardRef } from 'react'
import { Element, Props } from './types'

const Default = forwardRef<Element, Props>((props, ref) => {
  return (
    <svg
      fill={'none'}
      height={'1rem'}
      viewBox={'0 0 24 24'}
      width={'1rem'}
      {...props}
      ref={ref}
    />
  )
})

Default.displayName = 'Default'

export {
  Default
}
