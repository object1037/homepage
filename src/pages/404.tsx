import { Icon } from '../components/Icon'
import Head from 'next/head'

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <main className="flex justify-center items-center h-dscreen overflow-hidden">
        <div className="flex justify-center items-center relative max-w-4xl max-h-[700px] h-full">
          <Icon className="h-1/5 max-h-40 stroke-gray-700 dark:stroke-gray-200" />
          <h1 className="absolute top-[58%] text-3xl font-extrabold text-gray-700 dark:text-gray-200">
            404
          </h1>
          <svg
            viewBox="0 0 350 350"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute h-full animate-[spin_60s_linear_infinite]"
            aria-hidden="true"
          >
            <path
              id="arc1"
              fill="none"
              d="M 25 175 A 150 150 0 0 1 325 175 A 150 150 0 0 1 25 175"
            />
            <path
              id="arc2"
              fill="none"
              d="M 65 175 A 110 110 0 0 1 285 175 A 110 110 0 0 1 65 175"
            />
            <path
              id="arc3"
              fill="none"
              d="M 105 175 A 70 70 0 0 1 245 175 A 70 70 0 0 1 105 175"
            />
            <text className="text-xs fill-gray-500 dark:fill-gray-400">
              <textPath textLength="271%" href="#arc1">
                {[...Array(50)].map(() => '4')}
              </textPath>
              <textPath textLength="200%" href="#arc2">
                {[...Array(50)].map(() => '0')}
              </textPath>
              <textPath textLength="156%" href="#arc3">
                {[...Array(50)].map(() => '4')}
              </textPath>
            </text>
          </svg>
        </div>
      </main>
    </>
  )
}

export default Custom404
