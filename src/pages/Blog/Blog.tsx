import { Card } from '../../components/Card/Card'
import { Profile } from './components/Profile/Profile'
import { ArticleContainer, BlogContainer, PostsContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />

      <PostsContainer>
        <form>
          <label htmlFor="input-github">
            <h4>Publicações</h4>
            <span>6 pubs</span>
          </label>
          <input type="text" id="input-github" placeholder="Buscar conteúdo" />
        </form>

        <ArticleContainer>
          {Array.from({ length: 10 }).map((_, i) => {
            return <Card key={i} />
          })}
        </ArticleContainer>
      </PostsContainer>
    </BlogContainer>
  )
}
