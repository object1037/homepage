export default function Row ({name, value}) {
  return (
    <tr>
      <td className="text-right p-4 border-r border-gray-700 dark:border-gray-200 text-gray-900 dark:text-gray-100">{name}</td>
      <td className="text-left p-4 text-gray-900 dark:text-gray-100">{value}</td>
    </tr>
  )
}