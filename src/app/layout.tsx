import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fellowship Mission of All Nations - A Place of Worship, Fellowship, and Service',
  description: 'Join Fellowship Mission of All Nations, a welcoming church community in South Africa devoted to worship, fellowship, and service. Experience spiritual growth, community connection, and God\'s boundless love.',
  keywords: ['Fellowship Mission of All Nations', 'church', 'worship', 'fellowship', 'South Africa church', 'Christian community', 'spiritual growth', 'prayer', 'bible study', 'church services'],
  authors: [{ name: 'Fellowship Mission of All Nations' }],
  creator: 'Fellowship Mission of All Nations',
  publisher: 'Fellowship Mission of All Nations',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fellowship-mission.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Fellowship Mission of All Nations - A Place of Worship, Fellowship, and Service',
    description: 'Join our welcoming church community devoted to worship, fellowship, and service. Experience spiritual growth and God\'s boundless love.',
    url: 'https://fellowship-mission.org',
    siteName: 'Fellowship Mission of All Nations',
    images: [
      {
        url: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1699170099/z26ls5vhnz8sf0x6d5jp.jpg',
        width: 1200,
        height: 630,
        alt: 'Fellowship Mission of All Nations Church Community',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fellowship Mission of All Nations',
    description: 'A welcoming church community devoted to worship, fellowship, and service.',
    images: ['https://res.cloudinary.com/dhqvb8wbn/image/upload/v1699170099/z26ls5vhnz8sf0x6d5jp.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Theme toggle logic
  // This is a simple implementation using localStorage and a button
  // For a more robust solution, consider using context or a library
        return (
          <html lang="en" className="scroll-smooth">
            <head>
              {/* Favicon */}
              <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
              <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
              <link rel="manifest" href="/site.webmanifest" />
              
              {/* Theme Color */}
              <meta name="theme-color" content="#6366f1" media="(prefers-color-scheme: light)" />
              <meta name="theme-color" content="#312e81" media="(prefers-color-scheme: dark)" />
              
              {/* Viewport */}
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
              
              {/* Additional Meta Tags */}
              <meta name="format-detection" content="telephone=no" />
              <meta httpEquiv="x-ua-compatible" content="ie=edge" />
              
              {/* Preconnect to external domains for performance */}
              <link rel="preconnect" href="https://res.cloudinary.com" />
              <link rel="dns-prefetch" href="https://res.cloudinary.com" />
            </head>
            <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
              {children}
              
              {/* Structured Data for SEO */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Church',
                    name: 'Fellowship Mission of All Nations',
                    description: 'A welcoming church community devoted to worship, fellowship, and service.',
                    url: 'https://fellowship-mission.org',
                    logo: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1699170099/z26ls5vhnz8sf0x6d5jp.jpg',
                    image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1699170099/z26ls5vhnz8sf0x6d5jp.jpg',
                    '@id': 'https://fellowship-mission.org',
                    telephone: '+27-786-593-260',
                    address: {
                      '@type': 'PostalAddress',
                      addressCountry: 'ZA',
                      addressLocality: 'South Africa',
                    },
                    openingHoursSpecification: [
                      {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: 'Tuesday',
                        opens: '18:00',
                        closes: '20:00',
                        description: 'Hour of Power and Intercession',
                      },
                      {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: 'Friday',
                        opens: '09:30',
                        closes: '12:30',
                        description: 'Learning Thy Word',
                      },
                      {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: 'Friday',
                        opens: '18:00',
                        closes: '20:30',
                        description: 'Healing, Deliverance, Restoration, Prophecy',
                      },
                    ],
                    sameAs: [
                      // Add your social media URLs here
                      // 'https://facebook.com/fellowshipmission',
                      // 'https://twitter.com/fellowshipmission',
                      // 'https://instagram.com/fellowshipmission',
                    ],
                  }),
                }}
              />
              
              {/* Theme initialization script */}
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    (function() {
                      try {
                        var theme = localStorage.getItem('theme');
                        if (theme === 'dark') {
                          document.documentElement.classList.add('dark');
                        } else {
                          document.documentElement.classList.remove('dark');
                        }
                      } catch(e) {}
                    })();
                  `,
                }}
              />
            </body>
          </html>
        )
}
