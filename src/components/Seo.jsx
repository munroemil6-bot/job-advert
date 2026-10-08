import { useEffect } from 'react'

const siteUrl = 'https://jm-studio-seven.vercel.app'

export default function Seo({ title, description, path, noIndex = false }) {
  useEffect(() => {
    const canonicalUrl = new URL(path, siteUrl).toString()
    document.title = title

    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`)

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    }

    setMeta('name', 'description', description)
    setMeta('name', 'robots', noIndex ? 'noindex, follow' : 'index, follow')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)
  }, [description, noIndex, path, title])

  return null
}
