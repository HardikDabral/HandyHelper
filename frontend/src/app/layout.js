import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/layout/ClientLayout'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata = {
  title: {
    default: 'Handy Helper Tools - Free Online Calculators & Utility Tools',
    template: '%s | Handy Helper Tools'
  },
  description: 'Handy Helper Tools offers free online calculators – BMI, EMI, age, percentage, loan, and more. Accurate, reliable, and completely free utility tools. Handy helper tools, online calculator, free tools, BMI calculator, EMI calculator, age calculator, percentage calculator, utility tools, web calculator, math tools, financial calculator, unit converter, online tools, free calculator.',
  keywords: 'handy helper tools, online calculator, free tools, BMI calculator, EMI calculator, age calculator, percentage calculator, utility tools, web calculator, math tools, financial calculator, unit converter, online tools, free calculator',
  authors: [{ name: 'Handy Helper Tools Team' }],
  creator: 'Handy Helper Tools',
  publisher: 'Handy Helper Tools',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app/' : 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app/' : 'http://localhost:3000',
    siteName: 'Handy Helper Tools',
    title: 'Handy Helper Tools - Free Online Calculators & Utility Tools',
    description: 'Free online calculators and utility tools for everyday use. Fast, accurate, and free.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Handy Helper Tools - Free Online Calculators & Utility Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handy Helper Tools - Free Online Calculators & Utility Tools',
    description: 'Handy Helper Tools offers free online calculators – BMI, EMI, age, percentage, loan, and more. Accurate, reliable, and completely free utility tools.',
    images: ['/og-image.jpg'],
    creator: '@handyhelpertools',
    site: '@handyhelpertools',
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'utility tools',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#B8E3E9' },
    { media: '(prefers-color-scheme: dark)', color: '#0B2E33' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  applicationName: 'Handy Helper Tools',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Handy Helper Tools',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  other: {
    'msapplication-TileColor': '#B8E3E9',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Handy Helper Tools",
    "description": "Free online calculators and utility tools for everyday use. BMI calculator, EMI calculator, age calculator, and 30+ more tools.",
    "url": "https://handy-helper.vercel.app",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    },
    "featureList": [
      "BMI Calculator",
      "EMI Calculator",
      "Age Calculator",
      "Percentage Calculator",
      "QR Code Generator",
      "Language Translator",
      "Meme Generator",
      "Countdown Timer"
    ]
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Handy Helper Tools",
    "url": "https://handy-helper.vercel.app",
    "logo": "https://handy-helper.vercel.app/logo.png",
    "description": "Free online calculators and utility tools",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "handyhelpertoolscalculator@gmail.com",
      "contactType": "customer service"
    }
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
