export const metadata = {
  title: 'Calorie Calculator - Daily Calorie Needs Calculator | Handy Helper',
  description: 'Calculate your daily calorie needs based on age, gender, weight, height, and activity level. Free calorie calculator for weight loss, maintenance, or gain. Calorie calculator, daily calories, calorie needs, BMR calculator, TDEE calculator, calorie intake, weight loss calculator, calorie counter.',
  keywords: 'calorie calculator, daily calories, calorie needs, BMR calculator, TDEE calculator, calorie intake, weight loss calculator, calorie counter',
}

export default function CalorieLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calorie Calculator",
    "description": "Free daily calorie needs calculator",
    "applicationCategory": "HealthApplication",
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

