import { Default } from '../Default'
import { Props } from '../Default/types'

function Linkedin(props: Props) {
  const { className, ...rest } = props

  return (
    <Default {...rest} viewBox={'0 0 40 40'}>
      <path
        className={className}
        clipRule={'evenodd'}
        d={'M40.147 0V40H0.146973V0H40.147ZM6.30769 34.2857H12.2363H12.2452V15.1964H6.30769V34.2857ZM5.83447 9.15179C5.83447 11.0446 7.37019 12.5893 9.27197 12.5893C11.1738 12.5893 12.7095 11.0536 12.7095 9.15179C12.7095 7.25893 11.1648 5.71429 9.27197 5.71429C7.37019 5.71429 5.83447 7.25893 5.83447 9.15179ZM28.5309 34.2857H34.4595V23.8214C34.4595 18.6786 33.3434 14.7232 27.3434 14.7232C24.4595 14.7232 22.522 16.3036 21.7273 17.8036H21.647V15.1964H15.9595V34.2857H21.888V24.8393C21.888 22.3482 22.3613 19.9375 25.4505 19.9375C28.4863 19.9375 28.5309 22.7857 28.5309 25V34.2857Z'}
        fillRule={'evenodd'}
      />
    </Default>
  )
}

Linkedin.displayName = 'Linkedin'

export {
  Linkedin
}
