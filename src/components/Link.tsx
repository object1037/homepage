import { ComponentPropsWithoutRef } from 'react'

export const Link = (props: ComponentPropsWithoutRef<'a'>) => {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      className="border-b border-gray-350 dark:border-gray-600 hover:border-gray-800 dark:hover:border-gray-200 transition"
      {...props}
    />
  )
}
