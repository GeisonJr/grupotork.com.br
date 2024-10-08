import { Default } from '../Default'
import { Props } from '../Default/types'

function Clock(props: Props) {
  const { className, ...rest } = props

  return (
    <Default {...rest}>
      <path
        className={className}
        d={'M12.5 7.25C12.5 6.83579 12.1642 6.5 11.75 6.5C11.3358 6.5 11 6.83579 11 7.25V12.75C11 13.0191 11.1442 13.2677 11.3779 13.4012L14.8779 15.4012C15.2375 15.6067 15.6957 15.4817 15.9012 15.1221C16.1067 14.7625 15.9817 14.3043 15.6221 14.0988L12.5 12.3148V7.25Z'}
      />
      <path
        className={className}
        clipRule={'evenodd'}
        d={'M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12Z'}
        fillRule={'evenodd'}
      />
    </Default>
  )
}

Clock.displayName = 'Clock'

export {
  Clock
}
