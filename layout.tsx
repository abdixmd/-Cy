
import './globals.css'

export const metadata = {
  title: 'CyberAI Dashboard',
  description: 'AI-Driven Ethical Cybersecurity Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
