import { CssBoxSize, CssSize, StyleObject } from '@mantra-ui/core'
import { css, customElement, html, LitElement, property } from 'lit-element'
import { styleMap } from 'lit-html/directives/style-map'
import { FlexAlign } from '../../attributes/FlexAlign/FlexAlign'
import { FlexBasis } from '../../attributes/FlexBasis/FlexBasis'
import { FlexDirection } from '../../attributes/FlexDirection/FlexDirection'
import { FlexJustify } from '../../attributes/FlexJustify/FlexJustify'
import { FlexLineAlign } from '../../attributes/FlexLineAlign/FlexLineAlign'
import { FlexSize } from '../../attributes/FlexSize/FlexSize'
import { FlexWrap } from '../../attributes/FlexWrap/FlexWrap'

@customElement('mantra-flex')
export class Flex extends LitElement {
  static get styles() {
    return css`
      :host div {
        border: 1px solid black;
        box-sizing: border-box;
      }
    `
  }

  // @property({ type: String })
  // as: string = 'div'

  @property({ type: Boolean })
  inline?: boolean

  @property({ type: String, converter: FlexDirection.parse })
  direction?: FlexDirection.Type

  @property({ type: Boolean })
  row?: boolean

  @property({ type: Boolean })
  column?: boolean

  @property({ type: Boolean })
  reverse?: boolean

  @property({ type: String, converter: FlexJustify.parse })
  justify?: FlexJustify.Type

  // @property({ type: Boolean })
  // start: boolean = false
  //
  // @property({ type: Boolean })
  // end: boolean = false
  //
  // @property({ type: Boolean })
  // center: boolean = false
  //
  // @property({ type: Boolean })
  // spaceBetween: boolean = false
  //
  // @property({ type: Boolean })
  // spaceAround: boolean = false
  //
  // @property({ type: Boolean })
  // spaceEvenly: boolean = false

  @property({ type: String, converter: FlexAlign.parse })
  align?: FlexAlign.Type

  @property({ type: String, converter: FlexWrap.parse })
  wrap?: FlexWrap.Type

  @property({ type: String, converter: FlexLineAlign.parse })
  lines?: FlexLineAlign.Type

  @property({ type: String, converter: FlexAlign.parse })
  self?: FlexAlign.Type

  @property({ type: Number })
  order?: number

  @property({ type: Number, converter: FlexSize.parse })
  grow?: FlexSize.Type

  @property({ type: Number, converter: FlexSize.parse })
  shrink?: FlexSize.Type

  @property({ type: String, converter: FlexBasis.parse })
  basis?: FlexBasis.Type

  @property({ type: String, converter: CssSize.parse })
  width?: CssSize.Type

  @property({ type: String, converter: CssSize.parse })
  height?: CssSize.Type

  @property({ type: String, converter: CssBoxSize.parse })
  margin?: CssBoxSize.Type

  @property({ type: String, converter: CssBoxSize.parse })
  padding?: CssBoxSize.Type

  @property({ type: String, converter: StyleObject.parse })
  styles?: StyleObject.Type

  render() {
    const styles = {
      display: this.inline ? 'inline-flex' : 'flex',
      flexDirection: FlexDirection.toCss(this.direction, {
        row: this.row,
        column: this.column,
        reverse: this.reverse
      }),
      justifyContent: FlexJustify.toCss(this.justify),
      alignItems: FlexAlign.toCss(this.align),
      alignSelf: FlexAlign.toCss(this.self),
      order: this.order !== undefined ? String(this.order) : 'unset',
      flexGrow: FlexSize.toCss(this.grow),
      flexShrink: FlexSize.toCss(this.shrink),
      flexBasis: FlexBasis.toCss(this.basis),
      margin: CssBoxSize.toCss(this.margin),
      padding: CssBoxSize.toCss(this.padding),
      width: CssSize.toCss(this.width),
      height: CssSize.toCss(this.height),
      ...this.styles
    }
    return html`
      <div style=${styleMap(styles)}>
        <slot />
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mantra-flex': Flex
  }
}
