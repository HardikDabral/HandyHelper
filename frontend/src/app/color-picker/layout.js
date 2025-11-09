export const metadata = {
  title: 'Color Picker - Free Color Picker Tool | Handy Helper',
  description: 'Pick colors and convert between HEX, RGB, HSL formats. Free online color picker tool with color codes and palette generator.',
  keywords: ['color picker', 'color tool', 'HEX color', 'RGB color', 'HSL color', 'color converter', 'color palette', 'color codes'],
}

export default function ColorLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Color Picker",
    "description": "Free color picker and converter tool",
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

