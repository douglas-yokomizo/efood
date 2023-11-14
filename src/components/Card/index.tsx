import { Link } from 'react-router-dom';
import star from '../../assets/images/star-icon.png'
import { Tag } from '../Tag';
import { CardContainer, CardHeader, CardInfo, Description, Score } from './styles'
import { ButtonStyled } from '../Button/styles';
import { Button } from '../Button';

export type CardProps = {
  image: string;
  title: string;
  description: string;
  score?: number;
  spotlight?: string;
  category?: string;
  type: 'restaurant' | 'product'
}

const Card = ({ title, description, score, image, spotlight, category, type }: CardProps) => {
  if (type === 'restaurant') {
    return (
      <CardContainer type={type}>
        <img src={image} alt={title} />
        <Tag spotlight={spotlight as string} category={category as string} />
        <CardInfo type={type}>
          <CardHeader>
            <h3>{title}</h3>
            <Score>
              <span>{score}</span>
              <img src={star} alt={title} />
            </Score>
          </CardHeader>
          <Description type={type}>{description}</Description>
          <ButtonStyled name="info" >
            <Link to='/details'>Saiba Mais</Link>
          </ButtonStyled>
        </CardInfo>
      </CardContainer>
    )
  } else {
    return (
      <CardContainer type={type}>
        <img src={image} alt={title} />
        <CardInfo type={type}>
          <h3>{title}</h3>
          <Description type={type}>{description}</Description>
          <Button name='add' >Adicionar ao carrinho</Button>
        </CardInfo>
      </CardContainer>
    )

  }
}

export { Card }
