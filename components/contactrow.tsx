interface Info {
  name: string;
  value: string;
  url: string;
}

export default function Contact (info: Info) {
  return (
    <tr>
      <td className="text-right p-4 border-r border-gray-700 dark:border-gray-200 text-gray-900 dark:text-gray-100">{info.name}</td>
      <td className="text-left p-4 text-Blue-500 dark:text-Blue-400"><a href={info.url} target="_blank" rel="noopener" className="hover:underline">{info.value}</a></td>
    </tr>
  )
}