import './globals.css'

export const metadata = {
  title: 'OrderMachine - Simplify Ordering for Every Table',
  description: 'Replace chaotic paper orders and manual entry with one simple system. Scan, order, done.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
} 