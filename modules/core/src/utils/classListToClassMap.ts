import { List } from '../attributes/generics/List'

export interface ClassListAsClassMap {
  [className: string]: true
}

export const classListToClassMap = (list: List<string> = []): ClassListAsClassMap => (
  list.reduce<ClassListAsClassMap>(
    (res, className) => {
      res[className] = true
      return res
    },
    {}
  )
)
