import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Harshil Shah - Cloud & AI Innovator',
  description: 'MSc IT graduate specializing in Cloud Computing, AI/ML, automation, and innovative bot development. Creating cutting-edge solutions that bridge technology and user experience.',
  keywords: 'Harshil Shah, Cloud Computing, AI, Machine Learning, Bot Development, Automation, Full Stack Developer, MSc IT',
  authors: [{ name: 'Harshil Shah' }],
  creator: 'Harshil Shah',
  publisher: 'Harshil Shah',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harshilshah.dev',
    title: 'Harshil Shah - Cloud & AI Innovator',
    description: 'MSc IT graduate specializing in Cloud Computing, AI/ML, automation, and innovative bot development.',
    siteName: 'Harshil Shah Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshil Shah - Cloud & AI Innovator',
    description: 'MSc IT graduate specializing in Cloud Computing, AI/ML, automation, and innovative bot development.',
    creator: '@harshilshah',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00FFFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="msapplication-TileColor" content="#000111" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}