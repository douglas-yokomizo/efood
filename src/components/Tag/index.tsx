import * as S from "./styles"

export type TagProps = {
  destacado: boolean,
  tipo: string
}

const Tag = ({ destacado, tipo }: TagProps) => {
  return (
    <>
      <S.TagStyled>
        <S.TagSpotlight destacado={destacado}>
          Destaque da semana
        </S.TagSpotlight>
        <div>
          {tipo}
        </div>
      </S.TagStyled>
    </>
  )
}

export { Tag }
