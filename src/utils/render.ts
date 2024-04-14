import reset from '../styles/reset.css?inline'

const resetSheet = new CSSStyleSheet()
resetSheet.replaceSync(`@layer reset {${reset}}`)
document.adoptedStyleSheets = [resetSheet]

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
  shadow.adoptedStyleSheets = [resetSheet]
  if (css) {
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(css)
    shadow.adoptedStyleSheets.push(sheet)
  }
  shadow.innerHTML = html
}
