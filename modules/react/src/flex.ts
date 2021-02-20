/* eslint-disable import/no-duplicates */
import { FlexAlign, FlexDirection, FlexJustify } from '@mantra-ui/flex'
import { createElement, FC } from 'react'

export { FlexAlign, FlexDirection, FlexJustify }

export interface FlexProps {
  inline?: boolean
  direction?: FlexDirection.Type
  row?: boolean
  column?: boolean
  reverse?: boolean
  justify?: FlexJustify.Type
  align?: FlexAlign.Type
}

export const Flex: FC<FlexProps> = props => {
  return createElement('mantra-flex', props)
}
