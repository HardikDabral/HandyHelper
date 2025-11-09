export const metadata = {
  title: 'BMI Calculator - Free Body Mass Index Calculator | Handy Helper',
  description: 'Calculate your Body Mass Index (BMI) for free. Supports metric and imperial units. Get instant BMI results, weight category, and healthy weight range recommendations.',
  keywords: ['BMI calculator', 'body mass index', 'BMI tool', 'health calculator', 'weight calculator', 'BMI metric', 'BMI imperial', 'free BMI calculator', 'BMI chart', 'healthy weight'],
}

export default function BMILayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "BMI Calculator",
    "description": "Free Body Mass Index calculator supporting metric and imperial units",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Metric BMI calculation",
      "Imperial BMI calculation",
      "Weight category classification",
      "Healthy weight range recommendations"
    ]
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

