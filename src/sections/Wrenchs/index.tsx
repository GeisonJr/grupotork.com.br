import Container from '@/components/Container'

export default function Wrenches() {

  return (
    <>
      <Container
        className={'bg-center bg-contain h-[120px]'}
        style={{ backgroundImage: 'url(/assets/wrenches.png)' }}
        id={'wrenches'}
      >
      </Container>
    </>
  )
}
