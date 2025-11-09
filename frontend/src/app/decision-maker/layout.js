export const metadata = {
  title: 'Decision Maker - Random Choice Picker | Handy Helper',
  description: 'Make decisions easily with our random choice picker. Flip a coin, pick random options, or use our decision maker tool for quick choices. Decision maker, random picker, coin flip, random choice, decision tool, random selector, choice picker, decision helper.',
  keywords: 'decision maker, random picker, coin flip, random choice, decision tool, random selector, choice picker, decision helper',
}

export default function DecisionLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Decision Maker",
    "description": "Free random choice picker and decision tool",
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

