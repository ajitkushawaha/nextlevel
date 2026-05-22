// app/layout.tsx (or app/layout.js if using JS)

import type React from 'react'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
// Defer Swiper CSS loading - not critical for initial render
import 'swiper/css'
import 'swiper/css/pagination'
import { SessionProvider } from 'next-auth/react'
import SessionWrapper from '@/components/wrapper/SessionWrapper'
import { Toaster } from '@/components/ui/toaster'
import { SpeedInsights } from '@vercel/speed-insights/next'
import ScriptInjection from '@/components/seo/ScriptInjection'
import HeadScripts from '@/components/seo/HeadScripts'
import MetaTags from '@/components/seo/MetaTags'
import DynamicFavicon from '@/components/seo/DynamicFavicon'
import FaviconLinks from '@/components/seo/FaviconLinks'
import ResourceHints from '@/components/seo/ResourceHints'
import { fetchCompanySettingsForScripts } from '@/lib/companySettings'
export const metadata: Metadata = {
  title: 'Visa Services | Visa4 – Apply Online Easily',
  description:
    'Get fast, reliable visa services with Visa4. Apply online for tourist, business, and student visas with expert support.',
  keywords: [
    'visa services',
    'apply visa online',
    'tourist visa',
    'business visa',
    'Visa4 visa',
  ],
  icons: {
    // Primary favicon - must be ICO format for best search engine compatibility
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon_io/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicon_io/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    // Shortcut icon - important for search engines
    shortcut: '/favicon.ico',
    // Apple touch icon
    apple: [
      {
        url: '/favicon_io/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/favicon_io/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'Visa4',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
}

// Export viewport separately (Next.js 13+ requirement)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1e40af',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Fetch company settings for scripts
  const settings = await fetchCompanySettingsForScripts()

  return (
    <html lang="en">
      <body
        className="no-scrollbar"
        style={{
          fontFamily:
            '"Segoe UI", Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        }}
      >
        {/* Resource Hints - Preconnect and DNS prefetch for critical domains */}
        <ResourceHints />
        {/* Explicit Favicon Links for Search Engines */}
        <FaviconLinks />
        {/* Dynamic Favicon - Uses company logo from settings */}
        <DynamicFavicon />
        {/* Meta Tags - Injected client-side */}
        <MetaTags googleSiteVerification={settings.googleSiteVerification} />
        {/* Head Scripts - Injected via Next.js Script component */}
        <HeadScripts googleAnalyticsHead={settings.googleAnalyticsHead} />
        <SessionWrapper>
          {children}
          <Toaster />
      
          {/* Google Analytics Body Script */}
     
        </SessionWrapper>
        {/* KwickLingo Chat Widget */}
       
        <Script
          id="pwa-register"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/service-worker.js').then(
                    function(registration) {
                      console.log('PWA ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('PWA ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
