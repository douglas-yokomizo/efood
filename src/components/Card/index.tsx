import star from '../../assets/images/star-icon.png'
import { Button } from "../Button"
import { Tag } from '../Tag';
import { CardContainer, CardHeader, CardInfo, Description, Score } from './styles'

type CardProps = {
  image: string;
  title: string;
  description: string;
  score: number;
  spotlight: string;
  category: string
}

const Card = ({ title, description, score, image, spotlight, category }: CardProps) => {
  return (
    <CardContainer>
      <img src={image} alt={title} />
      <Tag spotlight={spotlight} category={category} />
      <CardInfo>
        <CardHeader>
          <h3>{title}</h3>
          <Score>
            <span>{score}</span>
            <img src={star} alt={title} />
          </Score>
        </CardHeader>
        <Description>{description}</Description>
        <Button name="info" >Saiba mais</Button>
      </CardInfo>
    </CardContainer>
  )
}

export { Card }
