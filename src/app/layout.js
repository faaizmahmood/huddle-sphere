export const metadata = {
  title: 'Huddle Sphere | Co-Working Space',
  description: 'Huddle Sphere is a modern co-working space that fosters creativity, collaboration, and innovation. Book your desk or office today!',
  keywords: 'co-working space, office space, creative workspace, book office, Huddle Sphere, flexible workspace, innovation hub',
  author: 'Huddle Sphere',

  openGraph: {
    title: 'Huddle Sphere | Co-Working Space',
    description: 'Huddle Sphere offers a collaborative, flexible, and inspiring workspace for individuals and teams. Discover our modern office spaces and services today!',
    url: 'https://www.huddlesphere.com',
    image: 'https://www.huddlesphere.com/og-image.jpg',
    siteName: 'Huddle Sphere',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Huddle Sphere | Co-Working Space',
    description: 'Book your desk or office at Huddle Sphere, the best co-working space for professionals, freelancers, and entrepreneurs.',
    image: 'https://www.huddlesphere.com/twitter-card.jpg',
    site: '@HuddleSphere',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        {/* Add metadata for SEO */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph Meta Tags for social media sharing */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:site" content={metadata.twitter.site} />

        {/* Link to a favicon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
