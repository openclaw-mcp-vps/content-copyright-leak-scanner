import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CopyGuard – Detect Unauthorized Use of Your Content',
  description: 'Scan the web for unauthorized copies of your blog posts, course content, and marketing materials using AI similarity detection.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="76f9ad1b-1c05-40d3-a98f-6338d5da2ee1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
