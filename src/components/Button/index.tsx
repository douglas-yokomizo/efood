import { ButtonStyled } from "./styles";

export type ButtonProps = {
  name: 'info' | 'add';
  children: string
}

const Button = ({ name, children }: ButtonProps) => {
  return (
    <>
      <ButtonStyled name={name} >
        {children}
      </ButtonStyled>
    </>
  )
}

export { Button }
