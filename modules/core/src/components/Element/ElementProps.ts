import { BoxSize } from '../../attributes/BoxSize'
import { List } from '../../attributes/generics/List'
import { Map } from '../../attributes/generics/Map'
import { Size } from '../../attributes/Size'
import { Tag } from '../../types/Tag'

export interface ElementProps {
  _debug?: boolean
  as?: Tag
  width?: Size
  height?: Size
  margin?: BoxSize
  padding?: BoxSize
  classes?: List<string>
  styles?: Map<string>
}
