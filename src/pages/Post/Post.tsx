import Markdown from 'react-markdown'
import { PostHeader } from './Components/PostHeader/PostHeader'
import { ContentContainer, PostContainer } from './styles'
import remarkGfm from 'remark-gfm'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../api/axios'
import { useParams } from 'react-router'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type PostData = {
  title: string
  user: {
    username: string
    githubURL: string
  }
  comments: number
  createdAt: string
  url: string
  body: string
}

export function Post() {
  const [post, setPost] = useState<PostData>({
    body: '',
    comments: 0,
    createdAt: '',
    user: {
      githubURL: '',
      username: '',
    },
    title: '',
    url: '',
  })

  const { id } = useParams()

  const SearchForPost = useCallback(async () => {
    const response = await api.get(`/repos/degui1/Github-blog/issues/${id}`)

    const newPost: PostData = {
      title: response.data.title,
      comments: response.data.comments,
      createdAt: formatDistanceToNow(new Date(response.data.created_at), {
        locale: ptBR,
        addSuffix: true,
      }),
      url: response.data.html_url,
      body: response.data.body,
      user: {
        username: response.data.user.login,
        githubURL: response.data.user.html_url,
      },
    }

    setPost(newPost)
  }, [id])

  useEffect(() => {
    SearchForPost()
  }, [SearchForPost])

  return (
    <PostContainer>
      <PostHeader
        comments={post.comments}
        githubURL={post.user.githubURL}
        title={post.title}
        username={post.user.username}
        createdAt={post.createdAt}
      />

      <ContentContainer>
        <Markdown remarkPlugins={[remarkGfm]}>{post.body}</Markdown>
      </ContentContainer>
    </PostContainer>
  )
}
