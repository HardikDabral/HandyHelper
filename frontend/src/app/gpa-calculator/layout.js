export const metadata = {
  title: 'GPA Calculator - Grade Point Average Calculator | Handy Helper',
  description: 'Calculate your GPA (Grade Point Average) easily. Free GPA calculator for students with weighted and unweighted GPA calculations.',
  keywords: ['GPA calculator', 'grade point average', 'GPA tool', 'GPA converter', 'calculate GPA', 'student GPA', 'academic calculator', 'grade calculator'],
}

export default function GPALayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "GPA Calculator",
    "description": "Free Grade Point Average calculator",
    "applicationCategory": "EducationApplication",
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

