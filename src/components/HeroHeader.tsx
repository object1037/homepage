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
  const starts = [0.728, 0.443, 0.089, 0.885]
  const circleStyle = [
    'absolute',
    'border',
    'border-gray-200',
    'dark:border-gray-700',
    'rounded-full',
    'aspect-square',
    'animate-[spin_24s_linear_infinite]',
  ]
  const wrapperStyle = [
    'flex',
    'fixed',
    'max-w-4xl',
    'max-h-[700px]',
    'justify-center',
    'items-center',
    'z-50',
  ]
  const expandStyle = ['w-full', 'h-full']
  const shrinkStyle = ['w-36 sm:w-40', 'h-28 sm:h-36']
  const transitionStyle = [
    'transition-all',
    'duration-500',
    'motion-reduce:transition-none',
  ]

  return (
    <header>
      <div ref={ref} className="h-px" />
      <div
        className={clsx(
          'flex items-center bg-gray-50 dark:bg-gray-900',
          transitionStyle,
          shrink ? 'h-28 sm:h-36' : 'h-screen'
        )}
      >
        <div
          className={clsx(
            wrapperStyle,
            transitionStyle,
            shrink ? shrinkStyle : expandStyle
          )}
          style={{ clipPath: 'view-box' }}
        >
          {keywords.map((keyword, index) => (
            <div
              key={keyword}
              className={clsx(
                circleStyle,
                transitionStyle,
                shrink ? 'opacity-0' : 'opacity-100'
              )}
              style={{
                animationDelay: `-${starts[index] * 24}s`,
                height: `${shrink ? 0 : ((index + 2) / 6) * 100 + 5}%`,
              }}
            >
              <span
                className={clsx(
                  'absolute left-1/2 -translate-x-1/2 -translate-y-3 px-3 font-extralight text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900',
                  transitionStyle,
                  shrink ? 'text-[0px]' : 'text-base'
                )}
              >
                {keyword}
              </span>
            </div>
          ))}
          <Icon
            className={clsx(
              'max-h-40 dark:stroke-gray-400',
              transitionStyle,
              shrink
                ? 'h-20 w-20 sm:h-24 sm:w-24 justify-self-start stroke-gray-700 dark:stroke-gray-200'
                : 'h-1/5 stroke-gray-600 dark:stroke-gray-350'
            )}
          />
        </div>
        <div
          className={clsx(
            'fixed max-h-[700px] max-w-4xl w-full items-center -translate-y-px bg-gray-50 dark:bg-gray-900',
            transitionStyle,
            shrink ? 'h-28 sm:h-36' : 'h-screen'
          )}
        >
          <h1
            className={clsx(
              'absolute font-semibold',
              transitionStyle,
              shrink
                ? 'top-1/2 left-full -translate-x-[calc(100%+2rem)] -translate-y-1/2 text-gray-700 dark:text-gray-200'
                : 'top-[58%] left-1/2 -translate-x-1/2 text-gray-600 dark:text-gray-350'
            )}
          >
            object1037
          </h1>
        </div>
      </div>
    </header>
  )
}
