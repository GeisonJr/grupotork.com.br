import { Props } from './types'

function Container(props: Props) {

  const { className, isCol, ...rest } = props

  return (
    <section
      {...rest}
      className={'flex justify-center p-10 w-full ' + className}>
      <div className={'flex flex-1 gap-10 max-w-7xl ' + (isCol ? 'flex-col' : 'flex-row')}>
        {props.children}
      </div>
    </section>
  )
}

export default Container
