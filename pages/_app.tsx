import { useEffect, useRef } from 'react'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

//  TODO: replace with custom fonts (visby-cf, bluu-next', ibm-plex-mono)
import '@fontsource/sora/latin-400.css'
import '@fontsource/sora/latin-500.css'
import '@fontsource/sora/latin-600.css'
import '@fontsource/sora/latin-700.css'
import '@fontsource/ibm-plex-mono/latin-300.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-500.css'
import '@fontsource/ibm-plex-mono/latin-600.css'
import '@fontsource/ibm-plex-mono/latin-700.css'
import '@/styles/tailwind.css'
import 'focus-visible'

// TODO: understand what this does
function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  {
    /*  TODO: root layout base */
  }
  return (
    <>
      {/* This is the background for the content container */}
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white  ring-1 ring-neutral-5 dark:bg-neutralDark-1  dark:ring-neutralDark-5" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
