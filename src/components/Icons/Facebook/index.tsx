import { Default } from '../Default'
import { Props } from '../Default/types'

function Facebook(props: Props) {
  const { className, ...rest } = props

  return (
    <Default {...rest} viewBox={'0 0 40 40'}>
      <path
        className={className}
        d={'M40.1469 0V40L27.7452 39.9911V24.5089H32.9416L33.7184 18.4732H27.7363V14.6161C27.7363 12.8661 28.2184 11.6786 30.7273 11.6786H33.9238V6.27679C33.3702 6.20536 31.4773 6.03571 29.263 6.03571C24.6559 6.03571 21.4952 8.84821 21.4952 14.0179V18.4732H16.2809V24.5089H21.4952V40L0.146973 39.9911V0H40.1469Z'}
      />
    </Default>
  )
}

Facebook.displayName = 'Facebook'

export {
  Facebook
}
