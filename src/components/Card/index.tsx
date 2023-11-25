import { Link } from 'react-router-dom';
import star from '../../assets/images/star-icon.png'
import { Tag } from '../Tag';
import { ButtonStyled } from '../Button/styles';
import { Button } from '../Button';
import * as S from './styles'
import { Restaurant } from '../../types/api';

export interface CardProps extends Restaurant {
  isrestaurant: boolean
}

const Card = ({ titulo, descricao, avaliacao, capa, destacado, tipo, isrestaurant, id }: CardProps) => {

  const getDescricao = (descricao: string) => {
    if (descricao.length > 248 && isrestaurant) {
      return descricao.slice(0, 245) + '...'
    } else if (!isrestaurant) {
      return descricao.slice(0, 132) + '...'
    } else {
      return descricao
    }
  }

  if (isrestaurant) {
    return (
      <S.CardContainer isrestaurant={isrestaurant}>
        <img src={capa} alt={titulo} />
        <Tag destacado={destacado as boolean} tipo={tipo as string} />
        <S.CardInfo isrestaurant={isrestaurant}>
          <S.CardHeader>
            <h3>{titulo}</h3>
            <S.Score>
              <span>{avaliacao}</span>
              <img src={star} alt={titulo} />
            </S.Score>
          </S.CardHeader>
          <S.Description isrestaurant={isrestaurant}>{getDescricao(descricao)}</S.Description>
          <ButtonStyled name="info" >
            <Link to={`/details/${id}`}>Saiba Mais</Link>
          </ButtonStyled>
        </S.CardInfo>
      </S.CardContainer>
    )
  } else {
    return (
      <S.CardContainer isrestaurant={isrestaurant}>
        <img src={capa} alt={titulo} />
        <S.CardInfo isrestaurant={isrestaurant}>
          <h3>{titulo}</h3>
          <S.Description isrestaurant={isrestaurant}>{getDescricao(descricao)}</S.Description>
          <Button name='add' >Adicionar ao carrinho</Button>
        </S.CardInfo>
      </S.CardContainer>
    )

  }
}

export { Card }
