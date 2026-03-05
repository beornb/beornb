import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Beorn Bishop - Professional Portfolio',
    short_name: 'Beorn Bishop',
    description: 'Professional portfolio and freelance services for Beorn Bishop.',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/logo/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
