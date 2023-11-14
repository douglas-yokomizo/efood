import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { LogoStyled } from './styles'

export const Logo = () => {
  return (
    <Link to='/'>
      <LogoStyled src={logo} alt="eFood Logo" />
    </Link>
  )
}
