import styled from 'styled-components'
import { device } from '../../styles/devices'

export const CoverContainer = styled.header`
  max-height: 296px;
  height: 100%;
  width: 100%;

  display: inline-block;

  img {
    max-height: 296px;
    width: 100%;
    object-fit: cover;
  }

  user-select: none;

  @media ${device.laptop} {
    display: none;
  }
`
