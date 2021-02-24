import { AttributeConverter } from '../types/AttributeConverter'
import { StringConverter } from './base/String'
import { Map, mapConverter } from './generics/Map'

export type Styles = Map<string>

export const StylesConverter: AttributeConverter<Styles> = mapConverter(StringConverter)
