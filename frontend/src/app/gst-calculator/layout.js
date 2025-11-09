export const metadata = {
  title: 'GST Calculator - Calculate GST Amount & Price | Handy Helper',
  description: 'Calculate GST (Goods and Services Tax) amounts and total prices. Free GST calculator for different tax rates with accurate calculations. GST calculator, GST tool, tax calculator, GST amount, GST price, tax calculator, GST rate, goods and services tax.',
  keywords: 'GST calculator, GST tool, tax calculator, GST amount, GST price, tax calculator, GST rate, goods and services tax',
}

export default function GSTLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "GST Calculator",
    "description": "Free GST tax calculator",
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

