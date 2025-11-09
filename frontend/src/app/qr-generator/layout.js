export const metadata = {
  title: 'QR Code Generator - Free QR Code Maker | Handy Helper',
  description: 'Generate QR codes for free. Create QR codes for URLs, text, contact info, and more. Customizable QR code generator with instant download. QR code generator, QR code maker, free QR code, QR code creator, generate QR code, QR code online, QR code tool, QR code scanner.',
  keywords: 'QR code generator, QR code maker, free QR code, QR code creator, generate QR code, QR code online, QR code tool, QR code scanner',
}

export default function QRLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "QR Code Generator",
    "description": "Free QR code generator for URLs, text, and contact info",
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

