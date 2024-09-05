import styled from 'styled-components'
import { device } from '../../../../styles/devices'

export const PostHeaderContainer = styled.header`
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2.5rem;
  max-width: 864px;
  width: 100%;
  min-height: 10.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin-top: calc(0px - 6.625rem);

  nav {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      font-size: 0.9rem;
      font-weight: bold;
      line-height: 160%;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.blue};
      }

      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  }

  @media ${device.laptop} {
    margin-top: 0;
    border-radius: 0;
  }
`

export const DetailsContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const IconsContainer = styled.footer`
  margin-top: auto;
  display: flex;

  font-size: 1rem;
  line-height: 160%;
  color: ${(props) => props.theme['base-subtitle']};

  span {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: baseline;
  }

  display: flex;
  gap: 1.5rem;
  align-items: baseline;
`
