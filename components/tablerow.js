export default function Row ({name, value}) {
  return (
    <tr>
      <td className="text-right p-4 border-r border-gray-800">{name}</td>
      <td className="text-left p-4">{value}</td>
    </tr>
  )
}