export default function List({
  listArr
}: {
  listArr: string[]
}) {
  return (
    <ul className="list-inside list-disc mx-auto flex flex-col space-y-4">
      {listArr.map((content) => {
        return <li key={content}>{content}</li>
      })}
    </ul>
  )
}