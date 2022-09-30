import { Icon } from './Icon'
import clsx from 'clsx'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export const HeroHeader = () => {
  const [shrink, setShrink] = useState(false)
  const [ref, InView] = useInView({
    threshold: 1,
    onChange: () => {
      setShrink(InView)
    },
  })

  const keywords = ['Web', 'EEIC23', 'UTokyo', 'Pokopea']
  const starts = [0.02819, 0.66443, 0.28491, 0.15905, 0.06189]
  const circleStyle = [
    'absolute',
    'border',
    'border-gray-200',
    'rounded-full',
    'aspect-square',
    'animate-[spin_24s_linear_infinite]',
    'transition-all',
    'duration-700',
  ]
  const wrapperStyle = [
    'flex',
    'fixed',
    'max-w-4xl',
    'max-h-[700px]',
    'justify-center',
    'items-center',
    'transition-all',
    'duration-700',
    'z-50',
  ]
  const expandStyle = ['w-full', 'h-full']
  const shrinkStyle = ['w-40', 'h-36']

  return (
    <header>
      <div ref={ref} className="h-px" />
      <div
        className={clsx(
          'flex items-center transition-all duration-700 bg-white',
          shrink ? 'h-36' : 'h-screen'
        )}
      >
        <div
          className={clsx(wrapperStyle, shrink ? shrinkStyle : expandStyle)}
          style={{ clipPath: 'view-box' }}
        >
          {keywords.map((keyword, index) => (
            <div
              key={keyword}
              className={clsx(
                circleStyle,
                shrink ? 'opacity-0' : 'opacity-100'
              )}
              style={{
                animationDelay: `-${starts[index] * 24}s`,
                height: `${shrink ? 0 : ((index + 2) / 6) * 100 + 5}%`,
              }}
            >
              <span
                className={clsx(
                  'absolute bg-white left-1/2 -translate-x-1/2 -translate-y-3 px-3 font-extralight text-gray-400 transition-all duration-700',
                  shrink ? 'text-[0px]' : 'text-base'
                )}
              >
                {keyword}
              </span>
            </div>
          ))}
          <Icon
            className={clsx(
              'stroke-gray-500 dark:stroke-gray-400 transition-all duration-700 max-h-40',
              shrink ? 'h-24 w-24 justify-self-start' : 'h-1/5'
            )}
          />
        </div>
        <div
          className={clsx(
            'fixed max-h-[700px] max-w-4xl w-full items-center transition-all duration-700 -translate-y-px bg-white',
            shrink ? 'h-36' : 'h-screen'
          )}
        >
          <h1
            className={clsx(
              'absolute font-semibold transition-all duration-700',
              shrink
                ? 'top-1/2 left-full -translate-x-[calc(100%+2rem)] -translate-y-1/2 text-gray-600'
                : 'top-[58%] left-1/2 -translate-x-1/2 text-gray-500'
            )}
          >
            object1037
          </h1>
        </div>
      </div>
    </header>
  )
}
