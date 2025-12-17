import Navbar from '../components/Navbar'
import PageTransition from '../components/PageTransition'
import InitialLoader from '../components/InitialLoader'
import CustomCursor from '../components/CustomCursor'
import './globals.css'

export const metadata = {
  title: 'Portfolio Project',
  description: 'A Next.js portfolio application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <InitialLoader />
        <Navbar />
        <main>
          <PageTransition>
            {children}
          </PageTransition>
        </main>
      </body>
    </html>
  )
}

