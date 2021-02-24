import { css, CSSResultArray, CSSResultOrNative, customElement, html, LitElement, property } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import { ifDefined } from 'lit-html/directives/if-defined'
import { styleMap } from 'lit-html/directives/style-map'
import { ElementProps } from './ElementProps'
import { BooleanConverter } from '../../attributes/base/Boolean'
import { StringConverter } from '../../attributes/base/String'
import { BoxSize, BoxSizeConverter } from '../../attributes/BoxSize'
import { Classes, ClassesConverter } from '../../attributes/Classes'
import { boxAsBoxMap } from '../../attributes/generics/Box'
import { Size, SizeConverter, sizeToCss } from '../../attributes/Size'
import { Styles, StylesConverter } from '../../attributes/Styles'
import { Tag } from '../../types/Tag'
import { classListToClassMap } from '../../utils/classListToClassMap'

@customElement('mantra-element')
export class Element extends LitElement implements ElementProps {
  static get styles(): CSSResultOrNative | CSSResultArray {
    return css`
      :host div {
        box-sizing: border-box;
      }

      ._debug {
        border: 1px dashed red !important;
      }
    `
  }

  @property({ converter: BooleanConverter, reflect: true })
  _debug: boolean = false

  @property({ converter: StringConverter })
  as: Tag = Tag.DIV

  @property({ converter: SizeConverter, reflect: true })
  width?: Size

  @property({ converter: SizeConverter, reflect: true })
  height?: Size

  @property({ converter: BoxSizeConverter, reflect: true })
  margin?: BoxSize

  @property({ converter: BoxSizeConverter, reflect: true })
  padding?: BoxSize

  @property({ converter: ClassesConverter, reflect: true, attribute: 'class' })
  classes?: Classes

  @property({ converter: StylesConverter, reflect: true, attribute: 'style' })
  styles?: Styles

  getClassAttribute(additionalClasses?: Classes) {
    return {
      _debug: this._debug,
      ...(this.classes && classListToClassMap(this.classes)),
      ...(additionalClasses && classListToClassMap(additionalClasses))
    }
  }

  getStyleAttribute(additionalStyle?: Styles) {
    const marginMap = boxAsBoxMap(this.margin)
    const paddingMap = boxAsBoxMap(this.padding)

    return {
      ...(this.width !== undefined && { width: sizeToCss(this.width) }),
      ...(this.height !== undefined && { height: sizeToCss(this.height) }),
      ...(marginMap?.top !== undefined && { marginTop: sizeToCss(marginMap.top) }),
      ...(marginMap?.left !== undefined && { marginLeft: sizeToCss(marginMap.left) }),
      ...(marginMap?.right !== undefined && { marginRight: sizeToCss(marginMap.right) }),
      ...(marginMap?.bottom !== undefined && { marginBottom: sizeToCss(marginMap.bottom) }),
      ...(paddingMap?.top !== undefined && { paddingTop: sizeToCss(paddingMap.top) }),
      ...(paddingMap?.left !== undefined && { paddingLeft: sizeToCss(paddingMap.left) }),
      ...(paddingMap?.right !== undefined && { paddingRight: sizeToCss(paddingMap.right) }),
      ...(paddingMap?.bottom !== undefined && { paddingBottom: sizeToCss(paddingMap.bottom) }),
      ...additionalStyle,
      ...this.styles
    }
  }

  renderTag(additionalClasses?: Classes, additionalStyle?: Styles) {
    const classAttr = ifDefined(classMap(this.getClassAttribute(additionalClasses)))
    const styleAttr = ifDefined(styleMap(this.getStyleAttribute(additionalStyle)))
    switch (this.as) {
      case Tag.A:
        return html`<a class=${classAttr} style=${styleAttr}>
          <slot />
        </a>`
      case Tag.ABBR:
        return html`<abbr class=${classAttr} style=${styleAttr}>
          <slot />
        </abbr>`
      case Tag.ADDRESS:
        return html`
          <address class=${classAttr} style=${styleAttr}>
            <slot />
          </address>`
      // case Tag.AREA: return html`<area class=${classAttr} style=${styleAttr}><slot /></area>`
      case Tag.ARTICLE:
        return html`
          <article class=${classAttr} style=${styleAttr}>
            <slot />
          </article>`
      case Tag.ASIDE:
        return html`
          <aside class=${classAttr} style=${styleAttr}>
            <slot />
          </aside>`
      case Tag.AUDIO:
        return html`
          <audio class=${classAttr} style=${styleAttr}>
            <slot />
          </audio>`
      case Tag.B:
        return html`<b class=${classAttr} style=${styleAttr}>
          <slot />
        </b>`
      case Tag.BASE:
        return html`
          <base class=${classAttr} style=${styleAttr}>
          <slot /></base>`
      case Tag.BDO:
        return html`<bdo class=${classAttr} style=${styleAttr}>
          <slot />
        </bdo>`
      case Tag.BLOCKQUOTE:
        return html`
          <blockquote class=${classAttr} style=${styleAttr}>
            <slot />
          </blockquote>`
      case Tag.BODY:
        return html`
          <body class=${classAttr} style=${styleAttr}>
          <slot />
          </body>`
      case Tag.BR:
        return html`<br class=${classAttr} style=${styleAttr}>
        <slot /></br>`
      case Tag.BUTTON:
        return html`
          <button class=${classAttr} style=${styleAttr}>
            <slot />
          </button>`
      case Tag.CANVAS:
        return html`
          <canvas class=${classAttr} style=${styleAttr}>
            <slot />
          </canvas>`
      case Tag.CAPTION:
        return html`
          <caption class=${classAttr} style=${styleAttr}>
            <slot />
          </caption>`
      case Tag.CITE:
        return html`<cite class=${classAttr} style=${styleAttr}>
          <slot />
        </cite>`
      case Tag.CODE:
        return html`<code class=${classAttr} style=${styleAttr}>
          <slot />
        </code>`
      case Tag.COL:
        return html`
          <col class=${classAttr} style=${styleAttr}>
          <slot /></col>`
      case Tag.COLGROUP:
        return html`
          <colgroup class=${classAttr} style=${styleAttr}>
            <slot />
          </colgroup>`
      // case Tag.COMMAND: return html`<command class=${classAttr} style=${styleAttr}><slot /></command>`
      case Tag.DATALIST:
        return html`
          <datalist class=${classAttr} style=${styleAttr}>
            <slot />
          </datalist>`
      case Tag.DD:
        return html`
          <dd class=${classAttr} style=${styleAttr}>
            <slot />
          </dd>`
      case Tag.DEL:
        return html`
          <del class=${classAttr} style=${styleAttr}>
            <slot />
          </del>`
      case Tag.DETAILS:
        return html`
          <details class=${classAttr} style=${styleAttr}>
            <slot />
          </details>`
      case Tag.DFN:
        return html`<dfn class=${classAttr} style=${styleAttr}>
          <slot />
        </dfn>`
      case Tag.DIV:
        return html`
          <div class=${classAttr} style=${styleAttr}>
            <slot />
          </div>`
      case Tag.DL:
        return html`
          <dl class=${classAttr} style=${styleAttr}>
            <slot />
          </dl>`
      case Tag.DT:
        return html`
          <dt class=${classAttr} style=${styleAttr}>
            <slot />
          </dt>`
      case Tag.EM:
        return html`<em class=${classAttr} style=${styleAttr}>
          <slot />
        </em>`
      case Tag.EMBED:
        return html`
          <embed class=${classAttr} style=${styleAttr}>
          <slot /></embed>`
      case Tag.FIELDSET:
        return html`
          <fieldset class=${classAttr} style=${styleAttr}>
            <slot />
          </fieldset>`
      case Tag.FIGCAPTION:
        return html`
          <figcaption class=${classAttr} style=${styleAttr}>
            <slot />
          </figcaption>`
      case Tag.FIGURE:
        return html`
          <figure class=${classAttr} style=${styleAttr}>
            <slot />
          </figure>`
      case Tag.FOOTER:
        return html`
          <footer class=${classAttr} style=${styleAttr}>
            <slot />
          </footer>`
      case Tag.FORM:
        return html`
          <form class=${classAttr} style=${styleAttr}>
            <slot />
          </form>`
      case Tag.H1:
        return html`
          <h1 class=${classAttr} style=${styleAttr}>
            <slot />
          </h1>`
      case Tag.H2:
        return html`
          <h2 class=${classAttr} style=${styleAttr}>
            <slot />
          </h2>`
      case Tag.H3:
        return html`
          <h3 class=${classAttr} style=${styleAttr}>
            <slot />
          </h3>`
      case Tag.H4:
        return html`
          <h4 class=${classAttr} style=${styleAttr}>
            <slot />
          </h4>`
      case Tag.H5:
        return html`
          <h5 class=${classAttr} style=${styleAttr}>
            <slot />
          </h5>`
      case Tag.H6:
        return html`
          <h6 class=${classAttr} style=${styleAttr}>
            <slot />
          </h6>`
      // case Tag.HEAD: return html`<head class=${classAttr} style=${styleAttr}><slot /></head>`
      case Tag.HEADER:
        return html`
          <header class=${classAttr} style=${styleAttr}>
            <slot />
          </header>`
      case Tag.HR:
        return html`
          <hr class=${classAttr} style=${styleAttr}>
          <slot /></hr>`
      // case Tag.HTML: return html`<html class=${classAttr} style=${styleAttr}><slot /></html>`
      case Tag.I:
        return html`<i class=${classAttr} style=${styleAttr}>
          <slot />
        </i>`
      case Tag.IFRAME:
        return html`
          <iframe class=${classAttr} style=${styleAttr}>
            <slot />
          </iframe>`
      // case Tag.IMG: return html`<img class=${classAttr} style=${styleAttr}><slot /></img>`
      case Tag.INPUT:
        return html`<input class=${classAttr} style=${styleAttr}>
        <slot /></input>`
      case Tag.INS:
        return html`
          <ins class=${classAttr} style=${styleAttr}>
            <slot />
          </ins>`
      case Tag.KBD:
        return html`<kbd class=${classAttr} style=${styleAttr}>
          <slot />
        </kbd>`
      case Tag.LABEL:
        return html`<label class=${classAttr} style=${styleAttr}>
          <slot />
        </label>`
      case Tag.LEGEND:
        return html`
          <legend class=${classAttr} style=${styleAttr}>
            <slot />
          </legend>`
      case Tag.LI:
        return html`
          <li class=${classAttr} style=${styleAttr}>
            <slot />
          </li>`
      case Tag.LINK:
        return html`
          <link class=${classAttr} style=${styleAttr}>
          <slot /></link>`
      case Tag.MAP:
        return html`
          <map class=${classAttr} style=${styleAttr}>
            <slot />
          </map>`
      case Tag.MARK:
        return html`
          <mark class=${classAttr} style=${styleAttr}>
            <slot />
          </mark>`
      case Tag.MENU:
        return html`
          <menu class=${classAttr} style=${styleAttr}>
            <slot />
          </menu>`
      case Tag.META:
        return html`
          <meta class=${classAttr} style=${styleAttr}>
          <slot /></meta>`
      // case Tag.METER: return html`<meter class=${classAttr} style=${styleAttr}><slot /></meter>`
      case Tag.NAV:
        return html`
          <nav class=${classAttr} style=${styleAttr}>
            <slot />
          </nav>`
      case Tag.NOSCRIPT:
        return html`
          <noscript class=${classAttr} style=${styleAttr}>
            <slot />
          </noscript>`
      case Tag.OBJECT:
        return html`
          <object class=${classAttr} style=${styleAttr}>
            <slot />
          </object>`
      case Tag.OL:
        return html`
          <ol class=${classAttr} style=${styleAttr}>
            <slot />
          </ol>`
      // case Tag.OPTGROUP: return html`<optgroup class=${classAttr} style=${styleAttr}><slot /></optgroup>`
      case Tag.OPTION:
        return html`
          <option class=${classAttr} style=${styleAttr}>
            <slot />
          </option>`
      case Tag.OUTPUT:
        return html`
          <output class=${classAttr} style=${styleAttr}>
            <slot />
          </output>`
      case Tag.P:
        return html`
          <p class=${classAttr} style=${styleAttr}>
            <slot />
          </p>`
      // case Tag.PARAM: return html`<param class=${classAttr} style=${styleAttr}><slot /></param>`
      case Tag.PRE:
        return html`
          <pre class=${classAttr} style=${styleAttr}><slot /></pre>`
      case Tag.PROGRESS:
        return html`
          <progress class=${classAttr} style=${styleAttr}>
            <slot />
          </progress>`
      case Tag.Q:
        return html`<q class=${classAttr} style=${styleAttr}>
          <slot />
        </q>`
      case Tag.RP:
        return html`
          <rp class=${classAttr} style=${styleAttr}>
            <slot />
          </rp>`
      case Tag.RT:
        return html`
          <rt class=${classAttr} style=${styleAttr}>
            <slot />
          </rt>`
      case Tag.RUBY:
        return html`
          <ruby class=${classAttr} style=${styleAttr}>
            <slot />
          </ruby>`
      case Tag.S:
        return html`<s class=${classAttr} style=${styleAttr}>
          <slot />
        </s>`
      case Tag.SAMP:
        return html`<samp class=${classAttr} style=${styleAttr}>
          <slot />
        </samp>`
      case Tag.SCRIPT:
        return html`
          <script class=${classAttr} style=${styleAttr}><slot /></script>`
      case Tag.SECTION:
        return html`
          <section class=${classAttr} style=${styleAttr}>
            <slot />
          </section>`
      case Tag.SELECT:
        return html`<select class=${classAttr} style=${styleAttr}>
          <slot />
        </select>`
      case Tag.SMALL:
        return html`<small class=${classAttr} style=${styleAttr}>
          <slot />
        </small>`
      case Tag.SOURCE:
        return html`
          <source class=${classAttr} style=${styleAttr}>
          <slot /></source>`
      case Tag.SPAN:
        return html`<span class=${classAttr} style=${styleAttr}><slot /></span>`
      case Tag.STRONG:
        return html`<strong class=${classAttr} style=${styleAttr}>
          <slot />
        </strong>`
      // case Tag.STYLE: return html`<style class=${classAttr} style=${styleAttr}><slot /></style>`
      case Tag.SUB:
        return html`<sub class=${classAttr} style=${styleAttr}>
          <slot />
        </sub>`
      case Tag.SUP:
        return html`<sup class=${classAttr} style=${styleAttr}>
          <slot />
        </sup>`
      case Tag.TABLE:
        return html`
          <table class=${classAttr} style=${styleAttr}>
            <slot />
          </table>`
      case Tag.TBODY:
        return html`
          <tbody class=${classAttr} style=${styleAttr}>
          <slot />
          </tbody>`
      case Tag.TD:
        return html`
          <td class=${classAttr} style=${styleAttr}>
            <slot />
          </td>`
      case Tag.TEXTAREA:
        return html`<textarea class=${classAttr} style=${styleAttr}><slot /></textarea>`
      case Tag.TFOOT:
        return html`
          <tfoot class=${classAttr} style=${styleAttr}>
          <slot />
          </tfoot>`
      case Tag.TH:
        return html`
          <th class=${classAttr} style=${styleAttr}>
            <slot />
          </th>`
      case Tag.THEAD:
        return html`
          <thead class=${classAttr} style=${styleAttr}>
          <slot />
          </thead>`
      case Tag.TIME:
        return html`
          <time class=${classAttr} style=${styleAttr}>
            <slot />
          </time>`
      case Tag.TITLE:
        return html`<title class=${classAttr} style=${styleAttr}><slot /></title>`
      case Tag.TR:
        return html`
          <tr class=${classAttr} style=${styleAttr}>
            <slot />
          </tr>`
      // case Tag.TRACK: return html`<track class=${classAttr} style=${styleAttr}><slot /></track>`
      case Tag.U:
        return html`<u class=${classAttr} style=${styleAttr}>
          <slot />
        </u>`
      case Tag.UL:
        return html`
          <ul class=${classAttr} style=${styleAttr}>
            <slot />
          </ul>`
      case Tag.VAR:
        return html`<var class=${classAttr} style=${styleAttr}>
          <slot />
        </var>`
      case Tag.VIDEO:
        return html`
          <video class=${classAttr} style=${styleAttr}>
            <slot />
          </video>`
      case Tag.WBR:
        return html`
          <wbr class=${classAttr} style=${styleAttr}>
            <slot />
          </wbr>`
      default:
        return html`
          <div class=${classAttr} style=${styleAttr}>
            <slot />
          </div>`
    }
  }

  render() {
    return this.renderTag()
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mantra-element': Element
  }
}
