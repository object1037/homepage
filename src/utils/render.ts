import reset from '../styles/reset.css?inline'

const resetSheet = new CSSStyleSheet()
resetSheet.replaceSync(reset)

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
    shadow.adoptedStyleSheets = [resetSheet, sheet]
  }
  shadow.innerHTML = html
}
