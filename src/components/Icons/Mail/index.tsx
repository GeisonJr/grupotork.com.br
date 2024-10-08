import { Default } from '../Default'
import { Props } from '../Default/types'

function Mail(props: Props) {
  const { className, ...rest } = props

  return (
    <Default {...rest}>
      <path
        className={className}
        clipRule={'evenodd'}
        d={'M1.75 3C0.783502 3 0 3.7835 0 4.75V18.75C0 19.7165 0.783502 20.5 1.75 20.5H22.25C23.2165 20.5 24 19.7165 24 18.75V4.75C24 3.7835 23.2165 3 22.25 3H1.75ZM1.5 4.75C1.5 4.61193 1.61193 4.5 1.75 4.5H22.25C22.3881 4.5 22.5 4.61193 22.5 4.75V5.60157L12.1399 12.6016C12.0554 12.6587 11.9446 12.6587 11.86 12.6016L1.5 5.6016V4.75ZM1.5 7.41191V18.75C1.5 18.8881 1.61193 19 1.75 19H22.25C22.3881 19 22.5 18.8881 22.5 18.75V7.41187L12.9797 13.8445C12.3878 14.2445 11.6122 14.2445 11.0202 13.8445L1.5 7.41191Z'}
        fillRule={'evenodd'}
      />
    </Default>
  )
}

Mail.displayName = 'Mail'

export {
  Mail
}
