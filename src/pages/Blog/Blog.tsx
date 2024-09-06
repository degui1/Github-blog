import { useEffect, useState } from 'react'
import { Card } from '../../components/Card/Card'
import { Profile } from './components/Profile/Profile'
import { ArticleContainer, BlogContainer, PostsContainer } from './styles'
import { api } from '../../api/axios'

type Post = {
  id: number
  title: string
  body: string
  created_at: string
  number: string
}

export function Blog() {
  const [posts, setPosts] = useState<Post[]>([])

  async function SearchForPosts(query?: string) {
    const response = await api.get(
      `search/issues?q=${query || ''}%20repo:${'degui1'}/${'Github-blog'}`,
    )

    console.log(response)

    setPosts(response.data.items)
  }

  useEffect(() => {
    SearchForPosts()
  }, [])

  return (
    <BlogContainer>
      <Profile />

      <PostsContainer>
        <form>
          <label htmlFor="input-github">
            <h4>Publicações</h4>
            <span>{posts.length} publicações</span>
          </label>
          <input type="text" id="input-github" placeholder="Buscar conteúdo" />
        </form>

        <ArticleContainer>
          {posts.map((post) => {
            return <Card key={post.id} post={post} />
          })}
        </ArticleContainer>
      </PostsContainer>
    </BlogContainer>
  )
}
