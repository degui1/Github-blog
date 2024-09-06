import styled from 'styled-components'
import { device } from '../../styles/devices'

export const CardContainer = styled.section`
  max-width: 416px;
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;

  border: 2px solid transparent;

  cursor: pointer;
  transition: border 0.2s;

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    line-height: 160%;
    gap: 1rem;

    h2 {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      font-weight: regular;
    }
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  @media ${device.laptop} {
    max-width: 100vw;
  }
`
