import cover from '../../assets/cover.svg'
import { CoverContainer } from './styles'

export function Cover() {
  return (
    <CoverContainer>
      <img src={cover} alt="logo" />
    </CoverContainer>
  )
}
