import styled from 'styled-components'

export const BlogContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const PostsContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 864px;
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
`

export const ArticleContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
