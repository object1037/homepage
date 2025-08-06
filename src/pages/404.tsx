import type { MetaData } from '../../lib/types'
import Footer from '../components/footer'
import Icon from '../components/icon'

export const metaData: MetaData = {
  title: '404 Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function Index() {
  return (
    <>
      <main id="transition">
        <Icon />
        <h1>404 NOT FOUND</h1>
      </main>
      <Footer />
    </>
  )
}
