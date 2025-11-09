export const metadata = {
  title: 'Word Counter - Count Words & Characters | Handy Helper',
  description: 'Count words, characters, sentences, and paragraphs in your text. Free word counter tool with detailed statistics. Word counter, character counter, word count, text counter, word tool, character count, word analyzer, text analyzer.',
  keywords: 'word counter, character counter, word count, text counter, word tool, character count, word analyzer, text analyzer',
}

export default function WordCounterLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Word Counter",
    "description": "Free word and character counter tool",
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

