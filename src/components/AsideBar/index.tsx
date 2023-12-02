import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { close, remove } from "../../store/reducers/cart"

import { Button } from "../Button"
import * as S from './styles'
import trash from '../../assets/images/lixeira-de-reciclagem 1.png'

export const AsideBar = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getCartTotal = () => {
    return items.reduce((prev, curr) => {
      return (prev += curr.preco)
    }, 0)
  }

  return (
    <S.AsideContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <ul>
          {items.map((item) => (
            <S.CartItemContainer>
              <S.CartItem>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{formataPreco(item.preco)}</span>
                </div>
              </S.CartItem>
              <img src={trash} alt="Ícone de lixo" onClick={() => removeItem(item.id)} />
            </S.CartItemContainer>
          ))}
        </ul>
        <h4>Valor total <span>{formataPreco(getCartTotal())}</span></h4>
        <Button name="add">Continuar com a entrega</Button>
      </S.SideBar>
    </S.AsideContainer>
  )
}
