import { Default } from '../Default'
import { Props } from '../Default/types'

function Organization(props: Props) {
  const { className, ...rest } = props

  return (
    <Default {...rest}>
      <path
        className={className}
        d={'M7.25 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM6.5 9.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM7.25 5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM10 12.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM10.75 8.5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM10 5.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM14.25 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM13.5 9.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM14.25 5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z'}
      />
      <path
        className={className}
        clipRule={'evenodd'}
        d={'M3 20a2 2 0 0 0 2 2h3.75a.75.75 0 0 0 .75-.75V19h3v2.25c0 .414.336.75.75.75H17c.092 0 .183-.006.272-.018a.758.758 0 0 0 .166.018H21.5a2 2 0 0 0 2-2v-7.625a2 2 0 0 0-.8-1.6l-1-.75a.75.75 0 1 0-.9 1.2l1 .75a.5.5 0 0 1 .2.4V20a.5.5 0 0 1-.5.5h-2.563c.041-.16.063-.327.063-.5V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v17Zm2 .5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v17a.5.5 0 0 1-.5.5h-3v-2.25a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75v2.25H5Z'}
        fillRule={'evenodd'}
      />
    </Default>
  )
}

Organization.displayName = 'Organization'

export {
  Organization
}
