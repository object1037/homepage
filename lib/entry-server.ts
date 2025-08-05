import { renderToStaticMarkup } from 'react-dom/server'
import type { MetaData } from './types.ts'

type PageComponent = {
  metaData: MetaData
  default: () => React.JSX.Element
}

export const render = async (fileName: string) => {
  const comps = import.meta.glob<PageComponent>('../src/pages/**/*.tsx', {
    eager: true,
  })
  const match = comps[`../src/pages${fileName}`]

  const [page, meta, status] =
    match === undefined
      ? await import('../src/pages/404.tsx').then((mod) => {
          return [mod.default(), mod.metaData, 404] as const
        })
      : [match.default(), match.metaData, 200]

  const appHtml = renderToStaticMarkup(page)

  return { appHtml, meta, status }
}

export type Render = typeof render

if (import.meta.hot) {
  import.meta.hot.accept()
}
