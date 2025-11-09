export const metadata = {
  title: 'Percentage Calculator - Calculate Percentages | Handy Helper',
  description: 'Calculate percentages, find percentage of numbers, and percentage change. Free percentage calculator with multiple calculation modes. Percentage calculator, percent calculator, calculate percentage, percentage tool, percent tool, percentage finder, percent converter.',
  keywords: 'percentage calculator, percent calculator, calculate percentage, percentage tool, percent tool, percentage finder, percent converter',
}

export default function PercentageLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Percentage Calculator",
    "description": "Free percentage calculator",
    "applicationCategory": "UtilityApplication",
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

