import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  DetailsContainer,
  IconsContainer,
  ImageContainer,
  ProfileContainer,
} from './styles'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <ImageContainer>
        <img src="https://github.com/degui1.png" alt="" />
      </ImageContainer>

      <DetailsContainer>
        <section>
          <h1>Guilherme Goncalves</h1>

          <a href="">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </section>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi
          voluptates nulla dolorum, excepturi quaerat est rem porro molestiae
          reprehenderit, sunt tempora animi inventore illo illum quia maiores
          labore aliquid.
        </p>

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
    </ProfileContainer>
  )
}
