import { execSync } from 'node:child_process'

const getGitCommitInfo = () => {
  const stdout = execSync('git show -s --format="%h@%ci" HEAD')
  const [hash, date] = stdout.toString().trim().split('@')
  return { hash, date }
}

export default function Footer() {
  const { hash, date } = getGitCommitInfo()
  return (
    <footer>
      <p>© object1037</p>
      <p className="commit-info">
        <a href={`https://github.com/object1037/homepage/tree/${hash}`}>
          {hash}
        </a>{' '}
        @ <time dateTime={date}>{date}</time>
      </p>
    </footer>
  )
}
