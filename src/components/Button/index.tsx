import { ButtonStyled } from "./styles";

export type ButtonProps = {
  name: 'info' | 'add';
  children: string | JSX.Element | number;
  onClick?: () => void;
  first?: string
}

const Button = ({ name, children, onClick, first }: ButtonProps) => {
  return (
    <>
      <ButtonStyled name={name} onClick={onClick} first={first}>
        {children}
      </ButtonStyled>
    </>
  )
}

export { Button }
