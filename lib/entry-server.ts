import { renderToStaticMarkup } from 'react-dom/server'

export const render = async (url: string) => {
  const fileName = url === '/' ? '/index.tsx' : `${url}.tsx`
  const comps = import.meta.glob<{ default: () => React.ReactNode }>(
    '../src/pages/**/*.tsx',
    { eager: true },
  )
  const match = comps[`../src/pages${fileName}`]

  const [page, status] =
    match === undefined
      ? [await import('../src/pages/404.tsx').then((mod) => mod.default()), 404]
      : [match.default(), 200]

  const appHtml = renderToStaticMarkup(page)

  return { appHtml, status }
}

export type Render = typeof render
