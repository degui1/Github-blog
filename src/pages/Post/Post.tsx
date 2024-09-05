import Markdown from 'react-markdown'
import { PostHeader } from './Components/PostHeader/PostHeader'
import { ContentContainer, PostContainer } from './styles'
import remarkGfm from 'remark-gfm'

const markdown = '# Hi, *Pluto*!'

export function Post() {
  return (
    <PostContainer>
      <PostHeader />

      <ContentContainer>
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
      </ContentContainer>
    </PostContainer>
  )
}
