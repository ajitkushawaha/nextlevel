'use client'

import { useEffect } from 'react'

export default function DynamicFavicon() {
  useEffect(() => {
    const updateFavicon = async () => {
      try {
        // Fetch company logo from settings
        const response = await fetch('/api/public/company-logo')
        if (response.ok) {
          const data = await response.json()
          const logoUrl = data.success && data.data?.logoUrl

          if (logoUrl) {
            // Update all favicon links
            const updateOrCreateLink = (
              rel: string,
              href: string,
              sizes?: string,
              type?: string
            ) => {
              const selector = sizes
                ? `link[rel="${rel}"][sizes="${sizes}"]`
                : `link[rel="${rel}"]`
              const link = document.querySelector(selector) as HTMLLinkElement
              if (link) {
                link.href = href
                if (type) link.type = type
              } else {
                const newLink = document.createElement('link')
                newLink.rel = rel
                newLink.href = href
                if (sizes) newLink.sizes = sizes
                if (type) newLink.type = type
                document.head.appendChild(newLink)
              }
            }

            // Update main favicon (16x16 and 32x32)
            updateOrCreateLink('icon', logoUrl, '16x16', 'image/png')
            updateOrCreateLink('icon', logoUrl, '32x32', 'image/png')
            updateOrCreateLink('icon', logoUrl) // Default icon

            // Update apple touch icon
            updateOrCreateLink(
              'apple-touch-icon',
              logoUrl,
              '180x180',
              'image/png'
            )

            // Update Android Chrome icons
            updateOrCreateLink('icon', logoUrl, '192x192', 'image/png')
            updateOrCreateLink('icon', logoUrl, '512x512', 'image/png')
          }
        }
      } catch (error) {
        // Fallback to default favicon files if API fails
        console.error('Error fetching company logo for favicon:', error)
        // Keep default favicon_io files as fallback
      }
    }

    updateFavicon()
  }, [])

  return null
}
