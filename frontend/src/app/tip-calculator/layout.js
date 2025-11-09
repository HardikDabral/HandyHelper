export const metadata = {
  title: 'Tip Calculator - Calculate Tips & Gratuity | Handy Helper',
  description: 'Calculate tips for services easily. Free tip calculator with percentage options and split bill functionality. Tip calculator, gratuity calculator, restaurant tip calculator, service tip tool.',
  keywords: 'tip calculator, gratuity calculator, tip tool, calculate tip, restaurant tip, service tip, tip percentage, tip splitter, free tip calculator, gratuity tool',
}

export default function TipLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Tip Calculator",
    "description": "Free tip and gratuity calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {children}
    </>
  )
}

