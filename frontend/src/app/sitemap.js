export default function sitemap() {
  const baseUrl = 'https://handy-helper.vercel.app'
  
  const routes = [
    '',
    '/landing-page',
    '/about',
    '/login',
    '/bmi-calculator',
    '/emi-calculator',
    '/age-calculator',
    '/percentage-calculator',
    '/qr-generator',
    '/language-translator',
    '/meme-generator',
    '/countdown-timer',
    '/color-picker',
    '/base64-tool',
    '/calorie-calculator',
    '/day-counter',
    '/decision-maker',
    '/discount-calculator',
    '/expense-splitter',
    '/gpa-calculator',
    '/gst-calculator',
    '/image-resizer',
    '/interest-calculator',
    '/json-formatter',
    '/math-solver',
    '/pomodoro',
    '/random-name-picker',
    '/salary-calculator',
    '/sleep-calculator',
    '/stopwatch',
    '/tip-calculator',
    '/todo-list',
    '/water-intake-calculator',
    '/wifi-speed-test',
    '/word-counter',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' || route === '/landing-page' ? 1.0 : 0.8,
  }))
}

