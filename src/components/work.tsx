import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { imageSize } from 'image-size'

export default function Work({
  title,
  src,
  alt,
  publications,
  links,
  children,
}: {
  title: string
  src: string
  alt: string
  publications?: [refNode: React.ReactNode, doi?: string, video?: string][]
  links?: [label: string, href: string][]
  children?: React.ReactNode
}) {
  const webpSrc = src.replace(/\.[^.]+$/, '.webp')
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const buffer = readFileSync(
    resolve(__dirname, `../../public/images/${webpSrc}`),
  )
  const dimensions = imageSize(buffer)

  return (
    <article>
      <picture>
        <source type="image/webp" srcSet={`/images/${webpSrc}`} />
        <img
          loading="lazy"
          decoding="async"
          src={`/images/${src}`}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
        />
      </picture>
      <h2>{title}</h2>
      {children}
      {links && (
        <section>
          <h3>Links</h3>
          <ul>
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </section>
      )}
      {publications && (
        <section>
          <h3>Publications</h3>
          <ul>
            {publications.map(([refNode, doi, video]) => (
              <li key={refNode?.toString()}>
                <span className="refNode">{refNode}</span>
                {doi && (
                  <span className="doi">
                    <a href={`https://doi.org/${doi}`}>[DOI: {doi}]</a>
                  </span>
                )}
                {video && (
                  <span className="video">
                    <a href={video}>[Video]</a>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}
