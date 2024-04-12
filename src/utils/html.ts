export const styledHtml = (css: string, html: string) => {
  return `
    <style>${css}</style>
    ${html}
  `
}
