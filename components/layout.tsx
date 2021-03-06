import {MDXProvider} from '@mdx-js/react'

function H1 ({children}) {
  return (
    <h1 className="text-5xl my-10">{children}</h1>
  )
}

function H2 ({children}) {
  return (
    <h2 className="text-4xl my-6">{children}</h2>
  )
}

function P ({children}) {
  return (
    <div className="text-base my-4">{children}</div>
  )
}

const components = {
  h1: H1,
  h2: H2,
  p: P,
}

export default function Layout({ children }) {
  return (
    <MDXProvider components={components}>
      <div className="flex flex-col w-5/6 mx-auto">{children}</div>
    </MDXProvider>
  )
}