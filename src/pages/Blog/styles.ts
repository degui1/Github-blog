import styled from 'styled-components'
import { device } from '../../styles/devices'

export const BlogContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const PostsContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 4.5rem;
  gap: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    margin-bottom: 1rem;

    label {
      display: flex;
      justify-content: space-between;
    }

    input {
      padding: 0.75rem 1rem;
      border-radius: 5px;
      border: 1px solid ${(props) => props.theme['base-border']};
      background-color: ${(props) => props.theme['base-input']};
      font-size: 1rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-text']};

      &::placeholder {
        color: ${(props) => props.theme['base-label']};
      }

      &:focus {
        border: 1px solid ${(props) => props.theme['base-label']};
      }
    }
  }

  @media ${device.laptopL} {
    padding: 0 1rem;
  }
`

export const ArticleContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`
