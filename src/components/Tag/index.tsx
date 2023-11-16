import * as S from "./styles"

export type TagProps = {
  spotlight: string,
  category: string
}

const Tag = ({ spotlight, category }: TagProps) => {
  return (
    <>
      <S.TagStyled>
        <S.TagSpotlight spotlight={spotlight}>
          Destaque da semana
        </S.TagSpotlight>
        <div>
          {category}
        </div>
      </S.TagStyled>
    </>
  )
}

export { Tag }
