export const metadata = {
  title: 'Free Online Calculators & Tools - Handy Helper',
  description: 'Discover powerful free calculators and tools: BMI calculator, EMI calculator, age calculator, percentage calculator, QR generator, language translator, and 30+ more utility tools. Fast, accurate, and completely free.',
  keywords: [
    'free online calculators',
    'BMI calculator',
    'EMI calculator',
    'age calculator',
    'percentage calculator',
    'QR code generator',
    'language translator',
    'meme generator',
    'countdown timer',
    'utility tools',
    'online tools',
    'free calculators',
    'handy helper tools',
    'calculator tools',
    'productivity tools'
  ],
  openGraph: {
    title: 'Free Online Calculators & Tools - Handy Helper',
    description: 'Discover powerful free calculators and tools: BMI calculator, EMI calculator, age calculator, and 30+ more utility tools.',
    type: 'website',
  },
}

export default function LandingPageLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Handy Helper Tools",
    "url": "https://handy-helper.vercel.app",
    "description": "Free online calculators and utility tools",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://handy-helper.vercel.app/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  )
}

