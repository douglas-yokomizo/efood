import { TagSpot, TagStyled } from "./styles"

export type TagProps = {
  spotlight: string,
  category: string
}

const Tag = ({ spotlight, category }: TagProps) => {
  return (
    <>
      <TagStyled>
        <TagSpot spotlight={spotlight}>
          Destaque da semana
        </TagSpot>
        <div>
          {category}
        </div>
      </TagStyled>
    </>
  )
}

export { Tag }
