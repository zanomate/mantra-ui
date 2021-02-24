import { AttributeConverter } from '../types/AttributeConverter'
import { StringConverter } from './base/String'
import { List, listConverter } from './generics/List'

export type Classes = List<string>

export const ClassesConverter: AttributeConverter<Classes> = listConverter(StringConverter)
