import { Box, boxConverter } from './generics/Box'
import { Size, SizeConverter } from './Size'

export type BoxSize = Box<Size>

export const BoxSizeConverter = boxConverter(SizeConverter)
