
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';


export const metadata = {
  title: 'Co-Remotly | Co-Working Space',
  description: 'Co-Remotly is a modern co-working space that fosters creativity, collaboration, and innovation. Book your desk or office today!',
  keywords: 'co-working space, office space, creative workspace, book office, Co-Remotly, flexible workspace, innovation hub',
  author: 'Co-Remotly',

  openGraph: {
    title: 'Co-Remotly | Co-Working Space',
    description: 'Co-Remotly offers a collaborative, flexible, and inspiring workspace for individuals and teams. Discover our modern office spaces and services today!',
    url: 'https://www.co-remotely.com/',
    image: 'https://www.co-remotely.com//og-image.jpg',
    siteName: 'Co-Remotly',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Co-Remotly | Co-Working Space',
    description: 'Book your desk or office at Co-Remotly, the best co-working space for professionals, freelancers, and entrepreneurs.',
    image: 'https://www.co-remotely.com/twitter-card.jpg',
    site: '@Co-Remotly',
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

        {/* <!--====== font awsome======= --> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        {/* <!--====== font awsome======= --> */}


        {/* Google Search Console tag */}

        <meta name="google-site-verification" content="gx5Z-pTig_1jv0HFkF_EPaR4YLy5gS0m9vpQoYPs5yQ" />

        {/* Google Search Console tag */}


        <link rel="icon" type="image/x-icon" href="./icon/fav_icon.png" />


      </head>
      <body>{children}</body>
    </html>
  )
}
