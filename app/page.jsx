import Banner from '@/components/Banner'
import ContactPage from '@/components/ContactPage'
import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner />
      <NavBar />
      <ContactPage />

    </main>
  )
}
