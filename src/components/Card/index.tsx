import { Link } from 'react-router-dom';
import star from '../../assets/images/star-icon.png'
import { Tag } from '../Tag';
import { ButtonStyled } from '../Button/styles';
import { Button } from '../Button';
import * as S from './styles'

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
      <S.CardContainer type={type}>
        <img src={image} alt={title} />
        <Tag spotlight={spotlight as string} category={category as string} />
        <S.CardInfo type={type}>
          <S.CardHeader>
            <h3>{title}</h3>
            <S.Score>
              <span>{score}</span>
              <img src={star} alt={title} />
            </S.Score>
          </S.CardHeader>
          <S.Description type={type}>{description}</S.Description>
          <ButtonStyled name="info" >
            <Link to='/details'>Saiba Mais</Link>
          </ButtonStyled>
        </S.CardInfo>
      </S.CardContainer>
    )
  } else {
    return (
      <S.CardContainer type={type}>
        <img src={image} alt={title} />
        <S.CardInfo type={type}>
          <h3>{title}</h3>
          <S.Description type={type}>{description}</S.Description>
          <Button name='add' >Adicionar ao carrinho</Button>
        </S.CardInfo>
      </S.CardContainer>
    )

  }
}

export { Card }
