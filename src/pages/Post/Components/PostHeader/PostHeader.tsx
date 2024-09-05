import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faChevronLeft,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { DetailsContainer, IconsContainer, PostHeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <nav>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </NavLink>
        <a href="">
          GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </nav>

      <DetailsContainer>
        <h1>JavaScript data types and data structure</h1>

        <IconsContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            degui1
          </span>

          <span>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </span>

          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            degui1
          </span>
        </IconsContainer>
      </DetailsContainer>
    </PostHeaderContainer>
  )
}
