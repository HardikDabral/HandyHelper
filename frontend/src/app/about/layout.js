export const metadata = {
  title: 'About Us - Tools Calculator Team & Mission',
  description: 'Learn about Tools Calculator - our mission to provide free, accurate online calculators and tools. Meet our team, understand our values, and discover what makes us special.',
  keywords: [
    'about tools calculator',
    'tools calculator team',
    'calculator company',
    'online tools mission',
    'free calculator service',
    'calculator company values',
    'tools calculator story',
    'calculator platform about'
  ],
  openGraph: {
    title: 'About Us - Tools Calculator Team & Mission',
    description: 'Learn about Tools Calculator - our mission to provide free, accurate online calculators and tools. Meet our team and understand our values.',
    url: 'https://toolscalculator.com/about',
    type: 'website',
    images: [
      {
        url: '/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Tools Calculator - Our Team and Mission',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Tools Calculator Team & Mission',
    description: 'Learn about Tools Calculator - our mission to provide free, accurate online calculators and tools.',
    images: ['/about-og-image.jpg'],
  },
  alternates: {
    canonical: '/about',
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
}

export default function AboutLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F5F7F8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Tools Calculator",
            "url": "https://toolscalculator.com",
            "logo": "https://toolscalculator.com/logo.png",
            "description": "Free online calculators and tools for everyday calculations",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "New Delhi",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-7834964514",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://toolscalculator.com",
              "mailto:handyhelpertoolscalculator@gmail.com"
            ],
            "foundingDate": "2024",
            "areaServed": "Worldwide",
            "serviceType": "Online Calculator Tools",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Calculator Tools",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "BMI Calculator",
                    "description": "Calculate Body Mass Index"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "EMI Calculator",
                    "description": "Calculate loan EMI"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Age Calculator",
                    "description": "Calculate age in different units"
                  }
                }
              ]
            }
          })
        }}
      />
      {children}
    </div>
  )
}