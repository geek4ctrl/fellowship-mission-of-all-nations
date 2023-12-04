import ContactClientComponent from './components/ContactClientComponent'
import FooterClientComponent from './components/FooterClientComponent'
import HeroClientComponent from './components/HeroClientComponent'
import ServiceClientComponent from './components/ServicesClientComponent'
import TeamClientComponent from './components/TeamClientComponent'

export default function Home() {
  return (
    <>
      <HeroClientComponent />
      <ServiceClientComponent />
      <TeamClientComponent />
      <ContactClientComponent />
      <FooterClientComponent />
    </>
  )
}
