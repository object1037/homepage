export default function ELink({
  displayName,
  url
}: {
  displayName: string,
  url: string
}) {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank" className="text-3xl text-center mx-auto text-Blue-500 dark:text-Blue-300 hover:underline">{displayName}</a>
  )
}