import { Default } from '../Default'
import { Props } from '../Default/types'

function DeviceMobile(props: Props) {
  const { className, ...rest } = props

  return (
    <Default {...rest}>
      <path
        className={className}
        d={'M10.25 5.25C10.25 4.83579 10.5858 4.5 11 4.5H13C13.4142 4.5 13.75 4.83579 13.75 5.25C13.75 5.66421 13.4142 6 13 6H11C10.5858 6 10.25 5.66421 10.25 5.25Z'}
      />
      <path
        className={className}
        d={'M12 19.5C12.5523 19.5 13 19.0523 13 18.5C13 17.9477 12.5523 17.5 12 17.5C11.4477 17.5 11 17.9477 11 18.5C11 19.0523 11.4477 19.5 12 19.5Z'}
      />
      <path
        className={className}
        clipRule={'evenodd'}
        d={'M4 2.75C4 1.7835 4.7835 1 5.75 1H18.25C19.2165 1 20 1.7835 20 2.75V21.25C20 22.2165 19.2165 23 18.25 23H5.75C4.7835 23 4 22.2165 4 21.25V2.75ZM5.75 2.5C5.61193 2.5 5.5 2.61193 5.5 2.75V21.25C5.5 21.3881 5.61193 21.5 5.75 21.5H18.25C18.3881 21.5 18.5 21.3881 18.5 21.25V2.75C18.5 2.61193 18.3881 2.5 18.25 2.5H5.75Z'}
        fillRule={'evenodd'}
      />
    </Default>
  )
}

DeviceMobile.displayName = 'DeviceMobile'

export {
  DeviceMobile
}
