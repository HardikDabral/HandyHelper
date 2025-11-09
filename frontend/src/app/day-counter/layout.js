export const metadata = {
  title: 'Day Counter - Calculate Days Between Dates | Handy Helper',
  description: 'Count the exact number of days between any two dates. Free day counter calculator for dates, events, and deadlines.',
  keywords: ['day counter', 'days between dates', 'date calculator', 'day calculator', 'count days', 'date difference', 'days calculator', 'calendar calculator'],
}

export default function DayCounterLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Day Counter",
    "description": "Free day counter calculator for dates",
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

