export const metadata = {
  title: 'Expense Splitter - Split Bills & Expenses | Handy Helper',
  description: 'Split bills and expenses among friends easily. Free expense splitter calculator for restaurants, trips, and shared costs.',
  keywords: ['expense splitter', 'bill splitter', 'split bills', 'expense calculator', 'bill calculator', 'cost splitter', 'shared expenses', 'split cost'],
}

export default function ExpenseLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Expense Splitter",
    "description": "Free bill and expense splitter calculator",
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

