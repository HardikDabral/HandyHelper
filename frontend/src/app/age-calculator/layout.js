export const metadata = {
  title: 'Age Calculator - Calculate Your Exact Age | Handy Helper',
  description: 'Calculate your exact age in years, months, days, hours, and minutes. Free age calculator from date of birth. Find your age in different units instantly. Age calculator, calculate age, date of birth calculator, age in days, age in months, how old am I, birthday calculator, age finder, free age calculator.',
  keywords: 'age calculator, calculate age, date of birth calculator, age in days, age in months, how old am I, birthday calculator, age finder, free age calculator',
}

export default function AgeLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Age Calculator",
    "description": "Free age calculator from date of birth",
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

