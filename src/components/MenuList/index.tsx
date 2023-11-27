import { MenuItem } from "../../types/api"
import { MenuItemCard } from "../Card"
import * as S from "./styles"

interface MenuProps {
  items: MenuItem[]
}

export const MenuList = ({ items }: MenuProps) => {
  return (
    <>
      <S.MenuListContainer className="container">
        {items.map(item => (
          <MenuItemCard item={item} key={item.id} />
        ))}
      </S.MenuListContainer>
    </>
  )
}
