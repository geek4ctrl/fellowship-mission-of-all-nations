import ContactClientComponent from './components/ContactClientComponent'
import FooterClientComponent from './components/FooterClientComponent'
import HeroClientComponent from './components/HeroClientComponent'
import TeamClientComponent from './components/TeamClientComponent'

export default function Home() {
  return (
    <>
      <HeroClientComponent />
      <TeamClientComponent />
      <ContactClientComponent />
      <FooterClientComponent />
    </>
  )
}
