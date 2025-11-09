export const metadata = {
  title: 'EMI Calculator - Free Loan EMI Calculator | Handy Helper',
  description: 'Calculate your loan EMI (Equated Monthly Installment) for home loans, car loans, and personal loans. Free EMI calculator with interest rate, loan amount, and tenure calculations. EMI calculator, loan EMI, home loan calculator, car loan EMI, personal loan calculator, loan calculator, monthly EMI, free EMI calculator.',
  keywords: 'EMI calculator, loan EMI, home loan calculator, car loan EMI, personal loan calculator, EMI calculation, loan calculator, monthly EMI, free EMI calculator, loan interest calculator',
}

export default function EMILayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "EMI Calculator",
    "description": "Free loan EMI calculator for home, car, and personal loans",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
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

