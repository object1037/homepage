interface Info {
  name: string;
  value: string;
}

export default function Row (info: Info) {
  return (
    <tr>
      <td className="text-right p-4 border-r border-gray-700 dark:border-gray-200 text-gray-900 dark:text-gray-100">{info.name}</td>
      <td className="text-left p-4 text-gray-900 dark:text-gray-100">{info.value}</td>
    </tr>
  )
}