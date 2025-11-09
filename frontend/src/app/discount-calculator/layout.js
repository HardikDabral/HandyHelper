export const metadata = {
  title: 'Discount Calculator - Calculate Discounts & Savings | Handy Helper',
  description: 'Calculate discounts, sale prices, and savings instantly. Free discount calculator for percentage off, final price, and amount saved.',
  keywords: ['discount calculator', 'sale calculator', 'percentage off', 'discount price', 'savings calculator', 'price calculator', 'discount tool', 'sale price'],
}

export default function DiscountLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Discount Calculator",
    "description": "Free discount and savings calculator",
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

