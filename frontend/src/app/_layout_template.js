// Template for updating layout files
// Copy this pattern to each layout file

export const metadata = {
  title: 'PAGE_TITLE | Handy Helper',
  description: 'PAGE_DESCRIPTION',
  keywords: 'PAGE_KEYWORDS',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/ROUTE_PATH',
  },
  openGraph: {
    title: 'PAGE_TITLE | Handy Helper',
    description: 'PAGE_DESCRIPTION_SHORT',
    url: '/ROUTE_PATH',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'PAGE_NAME' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PAGE_TITLE | Handy Helper',
    description: 'PAGE_DESCRIPTION_SHORT',
    images: ['/og-image.jpg'],
  },
}

export default function Layout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "PAGE_NAME",
    "description": "PAGE_DESCRIPTION_SHORT",
    "url": `${baseUrl}/ROUTE_PATH`,
    "applicationCategory": "CATEGORY",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "PAGE_NAME", "item": `${baseUrl}/ROUTE_PATH` }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      {children}
    </>
  )
}

