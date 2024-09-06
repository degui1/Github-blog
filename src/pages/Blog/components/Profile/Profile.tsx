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
import { useEffect, useState } from 'react'
import { api } from '../../../../api/axios'

type ProfileInformation = {
  name: string
  bio: string
  avatarURL: string
  company: string
  username: string
  followers: number
  link_github: string
}

export function Profile() {
  const [profileInformation, setProfileInformation] =
    useState<ProfileInformation>({
      username: '',
      avatarURL: '',
      bio: '',
      company: '',
      followers: 0,
      name: '',
      link_github: '',
    })
  useEffect(() => {
    const fn = async () => {
      const profileResponse = await api.get('/users/degui1')

      setProfileInformation({
        avatarURL: profileResponse.data.avatar_url,
        bio: profileResponse.data.bio,
        company: profileResponse.data.company,
        followers: profileResponse.data.followers,
        name: profileResponse.data.name,
        username: profileResponse.data.login,
        link_github: profileResponse.data.html_url,
      })
    }

    fn()
  }, [])

  return (
    <ProfileContainer>
      <ImageContainer>
        <img src="https://github.com/degui1.png" alt="" />
      </ImageContainer>

      <DetailsContainer>
        <section>
          <h1>{profileInformation.name}</h1>

          <a
            href={profileInformation.link_github}
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </section>

        <p>{profileInformation.bio}</p>

        <IconsContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {profileInformation.username}
          </span>

          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {profileInformation.company}
          </span>

          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {profileInformation.followers} seguidores
          </span>
        </IconsContainer>
      </DetailsContainer>
    </ProfileContainer>
  )
}
