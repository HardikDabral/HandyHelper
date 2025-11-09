export const metadata = {
  title: 'Countdown Timer - Free Online Countdown | Handy Helper',
  description: 'Create countdown timers for events, deadlines, and special moments. Free online countdown timer with customizable alerts and notifications.',
  keywords: ['countdown timer', 'timer', 'countdown', 'event timer', 'deadline timer', 'countdown clock', 'online timer', 'free timer'],
}

export default function CountdownLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Countdown Timer",
    "description": "Free online countdown timer",
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

