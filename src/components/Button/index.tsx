import { ButtonStyled } from "./styles";

export type ButtonProps = {
  name: 'info' | 'add';
  children: string | JSX.Element | number;
  onClick?: () => void;
}

const Button = ({ name, children, onClick }: ButtonProps) => {
  return (
    <>
      <ButtonStyled name={name} onClick={onClick}>
        {children}
      </ButtonStyled>
    </>
  )
}

export { Button }
