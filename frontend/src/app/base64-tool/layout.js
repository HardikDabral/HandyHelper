export const metadata = {
  title: 'Base64 Encoder/Decoder - Free Base64 Tool | Handy Helper',
  description: 'Encode and decode Base64 strings for free. Convert text to Base64 and Base64 to text instantly. Free online Base64 encoder and decoder tool. Base64 encoder, base64 decoder, base64 converter, base64 tool, encode base64, decode base64, base64 online, base64 string.',
  keywords: 'base64 encoder, base64 decoder, base64 converter, base64 tool, encode base64, decode base64, base64 online, base64 string',
}

export default function Base64Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Base64 Encoder/Decoder",
    "description": "Free Base64 encoder and decoder tool",
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

