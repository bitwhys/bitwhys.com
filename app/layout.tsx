import '@/styles/tailwind.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import clsx from 'clsx'
import { bluuNextFont, visbyFont, geliatFont, ibmPlexMono } from '@/styles/fonts'

const AppLayout = ({ children }) => (
  <>
    <div className="fixed inset-0 flex justify-center sm:px-8">
      <div className="flex w-full max-w-7xl lg:px-8">
        <div className="w-full bg-white  ring-1 ring-neutral-5 dark:bg-neutralDark-1  dark:ring-neutralDark-5" />
      </div>
    </div>
    <div className="relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </>
)

const RootLayout = ({ children }) => (
  <html
    className={clsx(geliatFont.variable, ibmPlexMono.variable, bluuNextFont.variable, 'h-full', 'antialiased')}
    lang="en"
  >
    <body className="relative flex h-full flex-col bg-neutral-1 font-medium text-neutral-12 dark:bg-black dark:text-neutralDark-12">
      <AppLayout>{children}</AppLayout>
    </body>
  </html>
)

export default RootLayout
