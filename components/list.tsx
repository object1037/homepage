export default function List({
  listArr,
}: {
  listArr: (string | JSX.Element)[]
}) {
  return (
    <ul className="list-inside list-disc flex flex-col space-y-4">
      {listArr.map((content) => {
        let key: string
        if (typeof content === 'string') {
          key = content
        } else {
          key = content.props.url
        }

        return <li key={key}>{content}</li>
      })}
    </ul>
  )
}
