import type { MetaData } from '../../lib/types'

export const metaData: MetaData = {
  title: '404 Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function Index() {
  return (
    <div>
      <h1>404 NOT FOUND</h1>
    </div>
  )
}
