export default function List({
  listArr
}: {
  listArr: (string | JSX.Element)[]
}) {
  return (
    <ul className="list-inside list-disc mx-auto flex flex-col space-y-4">
      {listArr.map((content) => {
        return <li key={String(content)}>{content}</li>
      })}
    </ul>
  )
}