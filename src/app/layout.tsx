import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Ivan Telles',
    default:
      'Ivan Telles - Software Developer at Mahalo Technologies Inc.\n',
  },
  description:
    'I’m Ivan Telles, a software developer based in Norwalk, California. I’m currently a software developer at Mahalo Technologies Inc, where we are  building a multi-tenant mobile banking app serving 20+ unique credit unions. It\'s a fully customizable app that can be configured to match any credit union needs from customizing the theme of the app to configuring what vendor handles wire transfers via an admin dashboard.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
