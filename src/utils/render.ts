export const render = ({
  shadow,
  html,
  css,
}: {
  shadow: ShadowRoot | null
  html: string
  css?: string
}) => {
  if (!shadow) return
  if (css) {
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(css)
    shadow.adoptedStyleSheets = [sheet]
  }
  shadow.innerHTML = html
}
