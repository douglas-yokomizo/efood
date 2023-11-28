import * as S from "./styles"

export type TagProps = {
  destacado: boolean,
  tipo: string
}

const Tag = ({ destacado, tipo }: TagProps) => {

  const getTipo = (tipo: string) => {
    return tipo.charAt(0).toUpperCase() + tipo.slice(1)
  }

  return (
    <>
      <S.TagStyled>
        <S.TagSpotlight destacado={destacado}>
          Destaque da semana
        </S.TagSpotlight>
        <div>
          {getTipo(tipo)}
        </div>
      </S.TagStyled>
    </>
  )
}

export { Tag }
