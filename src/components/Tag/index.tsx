import { TagSpotlight, TagStyled } from "./styles"

export type TagProps = {
  spotlight: string,
  category: string
}

const Tag = ({ spotlight, category }: TagProps) => {
  return (
    <>
      <TagStyled>
        <TagSpotlight spotlight={spotlight}>
          Destaque da semana
        </TagSpotlight>
        <div>
          {category}
        </div>
      </TagStyled>
    </>
  )
}

export { Tag }
