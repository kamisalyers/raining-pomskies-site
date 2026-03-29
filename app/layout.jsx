import './globals.css'

export const metadata = {
  title: 'Raining Pomskies',
  description: 'Quality Pomsky Puppies Raised in the Heart of Oklahoma',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
