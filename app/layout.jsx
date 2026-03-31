import './globals.css'

export const metadata = {
  title: 'Raining Pomskies',
  description: 'Quality pomsky puppies raised in the heart of Oklahoma',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
