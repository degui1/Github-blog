import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { DetailsContainer, IconsContainer, PostHeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

interface PostHeaderProps {
  githubURL: string
  title: string
  username: string
  createdAt: string
  comments: number
}

export function PostHeader({
  comments,
  createdAt,
  githubURL,
  title,
  username,
}: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <nav>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </NavLink>
        <a href={githubURL}>
          GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </nav>

      <DetailsContainer>
        <h1>{title}</h1>

        <IconsContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {username}
          </span>

          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {createdAt}
          </span>

          <span>
            <FontAwesomeIcon icon={faComment} />
            {comments} comentários
          </span>
        </IconsContainer>
      </DetailsContainer>
    </PostHeaderContainer>
  )
}
