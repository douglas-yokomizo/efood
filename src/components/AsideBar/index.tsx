import { useDispatch, useSelector } from "react-redux"
import { Formik, Field } from 'formik';
import * as Yup from 'yup'
import { RootReducer } from "../../store"
import { close, remove } from "../../store/reducers/cart"
import { Button } from "../Button"
import * as S from './styles'
import trash from '../../assets/images/lixeira-de-reciclagem 1.png'
import { useState } from "react"

export const AsideBar = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const [view, setView] = useState('cart')

  const continueWithDelivery = () => {
    items.length > 0 ?
      setView('delivery') :
      alert('Adicione items ao carrinho')
  }

  const continueWithPayment = () => {
    setView('payment')
  }

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

  const validationSchema = Yup.object({
    customer: Yup.string().min(5, 'O nome precisa ter pelo menos 5 caracteres').required('Campo Obrigatório'),
    address: Yup.string().required('Campo Obrigatório'),
    city: Yup.string().required('Campo Obrigatório'),
    cep: Yup.string().min(9, 'Digite o CEP completo').max(10).required('Campo Obrigatório'),
    homeNumber: Yup.string().required('Campo Obrigatório'),
    apartment: Yup.string(),
    cardOwner: Yup.string().min(5, 'Insira o nome como consta no cartão').required('Campo Obrigatório'),
    cardNumber: Yup.string().min(16, 'Número inválido').required('Campo Obrigatório'),
    cardCode: Yup.string().min(3, 'Número inválido').required('Campo Obrigatório'),
    monthDue: Yup.string().required('Campo Obrigatório'),
    yearDue: Yup.string().required('Campo Obrigatório')
  });

  return (
    <S.AsideContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {view === 'cart' && (
          <>
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
            <Button name="add" onClick={continueWithDelivery}>Continuar com a entrega</Button>
          </>
        )}
        {view === 'delivery' && (
          <>
            <S.FormsTitles>Entrega</S.FormsTitles>
            <Formik
              initialValues={{
                customer: '',
                address: '',
                city: '',
                cep: '',
                homeNumber: '',
                apartment: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <S.StyledForm>
                  <label htmlFor="customer">
                    <p>Quem irá receber</p>
                    <Field name="customer" type="text" />
                    {errors.customer && touched.customer ?
                      <div>{errors.customer}</div> : null}
                  </label>
                  <label htmlFor="address">
                    <p>Endereço</p>
                    <Field name="address" type="text" />
                    {errors.address && touched.address ?
                      <div>{errors.address}</div> : null}
                  </label>
                  <label htmlFor="city">
                    <p>Cidade</p>
                    <Field name="city" type="text" />
                    {errors.city && touched.city ?
                      <div>{errors.city}</div> : null}
                  </label>
                  <div>
                    <label htmlFor="cep">
                      <p>CEP</p>
                      <Field name="cep" type="text" />
                      {errors.cep && touched.cep ?
                        <div>{errors.cep}</div> : null}
                    </label>
                    <label htmlFor="homeNumber">
                      <p>Número</p>
                      <Field name="homeNumber" type="text" />
                      {errors.homeNumber && touched.homeNumber ?
                        <div>{errors.homeNumber}</div> : null}
                    </label>
                  </div>
                  <label htmlFor="apartment">
                    <p>Complemento</p>
                    <Field name="apartment" type="text" />
                    {errors.apartment && touched.apartment ?
                      <div>{errors.apartment}</div> : null}
                  </label>
                  <Button first="first" name="add" onClick={continueWithPayment}>Continuar com o pagamento</Button>
                  <Button name="add" onClick={() => setView('cart')}>Voltar para o carrinho</Button>
                </S.StyledForm>
              )}
            </Formik>
          </>
        )}
        {view === 'payment' && (
          <>
            <S.FormsTitles>Pagamento - Valor a pagar <span>{formataPreco(getCartTotal())}</span></S.FormsTitles>
            <Formik
              initialValues={{
                cardOwner: '',
                cardNumber: '',
                cardCode: '',
                monthDue: '',
                yearDue: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <S.StyledForm>
                  <label htmlFor="cardOwner">
                    <p>Nome no cartão</p>
                    <Field name="cardOwner" type="text" />
                    {errors.cardOwner && touched.cardOwner ?
                      <div>{errors.cardOwner}</div> : null}
                  </label>
                  <S.CardNumber style={{ gap: '30px' }}>
                    <label htmlFor="cardNumber" style={{ width: '95%' }}>
                      <p>Número do cartão</p>
                      <Field name="cardNumber" type="text" />
                      {errors.cardNumber && touched.cardNumber ?
                        <div>{errors.cardNumber}</div> : null}
                    </label>
                    <label htmlFor="cardCode">
                      <p>CVV</p>
                      <Field name="cardCode" type="text" />
                      {errors.cardCode && touched.cardCode ?
                        <div>{errors.cardCode}</div> : null}
                    </label>
                  </S.CardNumber>
                  <div>
                    <label htmlFor="monthDue">
                      <p>Mês de vencimento</p>
                      <Field name="monthDue" type="text" />
                      {errors.monthDue && touched.monthDue ?
                        <div>{errors.monthDue}</div> : null}
                    </label>
                    <label htmlFor="yearDue">
                      <p>Ano de vencimento</p>
                      <Field name="yearDue" type="text" />
                      {errors.yearDue && touched.yearDue ?
                        <div>{errors.yearDue}</div> : null}
                    </label>
                  </div>
                  <Button first="first" name="add" onClick={continueWithPayment}>Finalizar pagamento</Button>
                  <Button name="add" onClick={() => setView('delivery')}>Voltar para a edição de endereço</Button>
                </S.StyledForm>
              )}
            </Formik>
          </>
        )}
      </S.SideBar>
    </S.AsideContainer>
  )

}
