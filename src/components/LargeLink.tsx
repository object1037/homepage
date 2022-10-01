import { ComponentPropsWithoutRef } from 'react'

export const LargeLink = (props: ComponentPropsWithoutRef<'a'>) => {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      className="text-3xl p-3 sm:p-4 hover:text-gray-400 dark:hover:text-gray-500 transition"
      {...props}
    />
  )
}
