import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { RootReducer } from "../../store"
import { clear, close, remove } from "../../store/reducers/cart"
import { Button } from "../Button"
import * as S from './styles'
import trash from '../../assets/images/lixeira-de-reciclagem 1.png'
import { usePurchaseMutation } from "../../services/api";

export const AsideBar = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [view, setView] = useState('cart')
  const [purchase, { data }] = usePurchaseMutation()

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

  const clearCart = () => {
    dispatch(clear())
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

  const form = useFormik({
    initialValues: {
      customer: '',
      address: '',
      city: '',
      cep: '',
      homeNumber: '',
      apartment: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      monthDue: '',
      yearDue: '',
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit: async (values) => {
      try {
        await purchase({
          products: items.map((item) => ({
            id: item.id,
            price: item.preco
          })),
          delivery: {
            receiver: values.customer,
            address: {
              city: values.city,
              description: values.address,
              number: Number(values.homeNumber),
              zipCode: values.cep,
              complement: values.apartment
            }
          },
          payment: {
            card: {
              name: values.cardOwner,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.monthDue),
                year: Number(values.yearDue)
              }
            }
          }
        }).unwrap();
        setView('confirmation');

      } catch (error) {
        <h3>Pedido não concluído, tente novamente</h3>
      }
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

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
            <S.StyledForm>
              <S.InputGroup>
                <label htmlFor="customer">Quem irá receber</label>
                <input type="text" id="customer" name="customer" value={form.values.customer} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('customer') ? 'error' : ''} />  {checkInputHasError('customer') && <div className="error-message">{form.errors.customer}</div>}
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="address">Endereço</label>
                <input type="text" id="address" name="address" value={form.values.address} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('address') ? 'error' : ''} />
                {checkInputHasError('address') && <div className="error-message">{form.errors.address}</div>}
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input type="text" id="city" name="city" value={form.values.city} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('city') ? 'error' : ''} />
                {checkInputHasError('city') && <div className="error-message">{form.errors.city}</div>}
              </S.InputGroup>
              <div className="cep-number">
                <S.InputGroup>
                  <label htmlFor="cep">CEP</label>
                  <input type="text" id="cep" name="cep" value={form.values.cep} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('cep') ? 'error' : ''} />
                  {checkInputHasError('cep') && <div className="error-message">{form.errors.cep}</div>}
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="homeNumber">Número</label>
                  <input type="text" id="homeNumber" name="homeNumber" value={form.values.homeNumber} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('homeNumber') ? 'error' : ''} />
                  {checkInputHasError('homeNumber') && <div className="error-message">{form.errors.homeNumber}</div>}
                </S.InputGroup>
              </div>
              <S.InputGroup>
                <label htmlFor="apartment">Complemento</label>
                <input type="text" id="apartment" name="apartment" value={form.values.apartment} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('city') ? 'error' : ''} />
                {checkInputHasError('apartment') && <div className="error-message">{form.errors.apartment}</div>}
              </S.InputGroup>
              <Button name="add" first="first" onClick={continueWithPayment}>
                Continuar com o pagamento
              </Button>
              <Button name="add" onClick={() => setView('cart')}>
                Voltar para o carrinho
              </Button>
            </S.StyledForm>
          </>
        )}
        {view === 'payment' && (
          <>
            <S.FormsTitles>
              Pagamento - Valor a pagar {formataPreco(getCartTotal())}
            </S.FormsTitles>
            <S.StyledForm onSubmit={form.handleSubmit}>
              <S.InputGroup>
                <label htmlFor="cardOwner">Nome no cartão</label>
                <input type="text" id="cardOwner" name="cardOwner" value={form.values.cardOwner} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('cardOwner') ? 'error' : ''} />  {checkInputHasError('cardOwner') && <div className="error-message">{form.errors.cardOwner}</div>}
              </S.InputGroup>
              <div className="card-code">
                <S.InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input type="text" id="cardNumber" name="cardNumber" value={form.values.cardNumber} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('cardNumber') ? 'error' : ''} />
                  {checkInputHasError('cardNumber') && <div className="error-message">{form.errors.cardNumber}</div>}
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cardCode">CVV</label>
                  <input type="text" id="cardCode" name="cardCode" value={form.values.cardCode} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('cardCode') ? 'error' : ''} />
                  {checkInputHasError('cardCode') && <div className="error-message">{form.errors.cardCode}</div>}
                </S.InputGroup>
              </div>
              <div className="cep-number">
                <S.InputGroup>
                  <label htmlFor="monthDue">Mês de vencimento</label>
                  <input type="text" id="monthDue" name="monthDue" value={form.values.monthDue} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('monthDue') ? 'error' : ''} />
                  {checkInputHasError('monthDue') && <div className="error-message">{form.errors.monthDue}</div>}
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="yearDue">Ano de vencimento</label>
                  <input type="text" id="yearDue" name="yearDue" value={form.values.yearDue} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('yearDue') ? 'error' : ''} />
                  {checkInputHasError('yearDue') && <div className="error-message">{form.errors.yearDue}</div>}
                </S.InputGroup>
              </div>
              <Button type="submit" onClick={() => { form.handleSubmit }} name="add" first="first" >
                Finalizar pagamento
              </Button>
              <Button name="add" onClick={continueWithDelivery}>
                Voltar para a edição de endereço
              </Button>
            </S.StyledForm>
          </>
        )}
        {view === 'confirmation' && (
          <>
            <S.FormsTitles>Pedido realizado - {data.orderId}</S.FormsTitles>
            <S.ConfirmationMessage>
              Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
            </S.ConfirmationMessage>
            <br />
            <S.ConfirmationMessage>
              Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
            </S.ConfirmationMessage>
            <br />
            <S.ConfirmationMessage>
              Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
            </S.ConfirmationMessage>
            <br />
            <S.ConfirmationMessage>
              Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </S.ConfirmationMessage>
            <Button first="first" name="add" onClick={() => { closeCart(), clearCart(), setView('cart') }}>Concluir</Button>
          </>
        )}
      </S.SideBar>
    </S.AsideContainer >
  )
}
