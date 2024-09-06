import { useNavigate } from 'react-router'
import { CardContainer } from './styles'
import { limitString } from '../../utils/limitString'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface CardProps {
  post: {
    title: string
    body: string
    created_at: string
    number: string
  }
}

export function Card({
  post: { body, created_at: CreatedAt, number, title },
}: CardProps) {
  const navigate = useNavigate()

  const distanceFromNow = formatDistanceToNow(CreatedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <CardContainer
      onClick={() => {
        navigate(`/post/${number}`)
      }}
    >
      <div>
        <h2>{title}</h2>
        <span>{distanceFromNow}</span>
      </div>
      <p>{limitString(body)}</p>
    </CardContainer>
  )
}
