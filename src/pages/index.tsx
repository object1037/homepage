import Head from 'next/head'
import { HeroHeader } from '../components/HeroHeader'
import { FiGithub, FiTwitter } from 'react-icons/fi'
import { Link } from '../components/Link'
import { LargeLink } from '../components/LargeLink'

const IndexPage = () => {
  const listStyle = 'space-y-4 list-disc list-inside'

  return (
    <>
      <Head>
        <title>object1037</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="object1037's homepage" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@object1037" />
        <meta property="og:url" content="https://object1037.dev" />
        <meta property="og:title" content="object1037" />
        <meta property="og:description" content="object1037's homepage" />
        <meta property="og:image" content="https://icon.object1037.dev/png" />
        <link rel="canonical" href="https://object1037.dev" />
      </Head>
      <HeroHeader />
      <div className="flex flex-col justify-between min-h-screenWithoutHeader sm:min-h-[calc(100vh-9rem)] px-8 pt-28 pb-12 sm:pb-24">
        <main className="space-y-12">
          <article>
            <h2>About</h2>
            <p className="leading-relaxed">
              I&apos;m object1037, a student at the University of Tokyo(B2,{' '}
              <Link href="https://www.ee.t.u-tokyo.ac.jp/">EEIC</Link>). Born on
              the 9th April 2002.
            </p>
          </article>
          <article>
            <h2>Interests</h2>
            <ul className={listStyle}>
              <li>Web</li>
              <li>Design</li>
              <li>
                <Link href="https://www.youtube.com/@pokopea">Pokopea</Link>
              </li>
              <li>Keyboard</li>
            </ul>
          </article>
          <article>
            <h2>Links</h2>
            <ul className={listStyle}>
              <li>
                <Link href="https://blog.object1037.dev">Blog</Link>
              </li>
              <li>
                <Link href="https://twitter.com/object1037">Twitter</Link>
              </li>
              <li>
                <Link href="https://github.com/object1037">GitHub</Link>
              </li>
            </ul>
          </article>
        </main>
        <footer className="flex justify-between items-center mt-24">
          <div className="flex gap-x-5 sm:gap-x-4">
            <LargeLink
              href="https://twitter.com/object1037"
              aria-label="link to my Twitter account"
            >
              <FiTwitter />
            </LargeLink>
            <LargeLink
              href="https://github.com/object1037"
              aria-label="link to my GitHub account"
            >
              <FiGithub />
            </LargeLink>
          </div>
          <small className="text-gray-500 dark:text-gray-400 text-xs">
            &copy; 2023 object1037
          </small>
        </footer>
      </div>
    </>
  )
}

export default IndexPage
