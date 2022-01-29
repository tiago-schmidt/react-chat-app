import Style from "./Style"

export function renderStyle(style: Style): string {
  const {
    flexDirection,
    alignItems,
    justifyContent,
    marginBottom,
    marginRight,
    marginLeft,
    marginTop,
    margin,
    paddingBottom,
    paddingRight,
    paddingLeft,
    paddingTop,
    padding,
    backgroundColor,
    backgroundImg,
    backgroundSize,
    borderBottom,
    borderRight,
    borderLeft,
    borderTop,
    borderRadius,
    border,
    color,
    height,
    width,
    fontSize,
    fontWeight,
    outline,
    cursor,
    display,
    maxWidth,
    maxHeight,
    textAlign,
  } = style

  return `
    ${display ? `display: ${display};` : ''}
    ${flexDirection ? `flex-direction: ${flexDirection};` : ''}
    ${alignItems ? `align-items: ${alignItems};` : ''}
    ${justifyContent ? `justify-content: ${justifyContent};` : ''}
    ${fontSize ? `font-size: ${fontSize};` : ''}
    ${fontWeight ? `font-weight: ${fontWeight};` : ''}
    ${textAlign ? `text-align: ${textAlign};` : ''}
    ${cursor ? `cursor: ${cursor};` : ''}
    ${outline ? `outline: ${outline};` : ''}
    ${width ? `width: ${width};` : ''}
    ${maxWidth ? `max-width: ${maxWidth};` : ''}
    ${height ? `height: ${height};` : ''}
    ${maxHeight ? `max-height: ${maxHeight};` : ''}
    ${color ? `color: ${color};` : ''}
    ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
    ${backgroundImg ? `background-image: url(${backgroundImg});` : ''}
    ${backgroundSize ? `background-size: ${backgroundSize};` : ''}
    ${borderBottom ? `border-bottom: ${borderBottom};` : ''}
    ${borderRight ? `border-right: ${borderRight};` : ''}
    ${borderLeft ? `border-left: ${borderLeft};` : ''}
    ${borderTop ? `border-top: ${borderTop};` : ''}
    ${borderRadius ? `border-radius: ${borderRadius};` : ''}
    ${border ? `border: ${border};` : ''}
    ${margin ? `margin: ${margin};` : ''}
    ${marginBottom ? `margin-bottom: ${marginBottom};` : ''}
    ${marginRight ? `margin-right: ${marginRight};` : ''}
    ${marginLeft ? `margin-left: ${marginLeft};` : ''}
    ${marginTop ? `margin-top: ${marginTop};` : ''}
    ${padding ? `padding: ${padding};` : ''}
    ${paddingBottom ? `padding-bottom: ${paddingBottom};` : ''}
    ${paddingRight ? `padding-right: ${paddingRight};` : ''}
    ${paddingLeft ? `padding-left: ${paddingLeft};` : ''}
    ${paddingTop ? `padding-top: ${paddingTop};` : ''}
  `
}