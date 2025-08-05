import type { MetaData } from '../../lib/types'
import Footer from '../components/footer'
import Header from '../components/header'

export const metaData: MetaData = {
  title: 'object1037.dev',
  description: "object1037's homepage",
}

export default function Index() {
  return (
    <>
      <Header heading="object1037" />
      <main>
        <section>
          <h2>About</h2>
          <p>
            I'm object1037, a master's student at the University of Tokyo's
            Graduate School of Information Science and Technology(M1,{' '}
            <a href="https://www.i.u-tokyo.ac.jp/edu/course/ice/index_e.shtml">
              ICE
            </a>
            ).
          </p>
        </section>
        <section>
          <h2>Interests</h2>
          <ul>
            <li>Web</li>
            <li>Design</li>
            <li>
              <a href="https://www.youtube.com/@pokopea">Pokopea</a>
            </li>
            <li>Keyboard</li>
          </ul>
        </section>
        <section>
          <h2>Links</h2>
          <ul>
            <li>
              <a href="https://blog.object1037.dev">Blog</a>
            </li>
            <li>
              <a href="https://github.com/object1037">GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com/object1037">Twitter</a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
