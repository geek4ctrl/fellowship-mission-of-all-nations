import ContactClientComponent from './components/ContactClientComponent'
import FooterClientComponent from './components/FooterClientComponent'
import HeroClientComponent from './components/HeroClientComponent'
import ServiceClientComponent from './components/ServicesClientComponent'
import TeamClientComponent from './components/TeamClientComponent'

export default function Home() {
  return (
    <>
      <div className="animate-fade-in">
        <HeroClientComponent />
      </div>
      <div className="animate-fade-in delay-200">
        <ServiceClientComponent />
      </div>
      <div className="animate-fade-in delay-400">
        <TeamClientComponent />
      </div>
      <div className="animate-fade-in delay-600">
        <ContactClientComponent />
      </div>
      <div className="animate-fade-in delay-800">
        <FooterClientComponent />
      </div>
    </>
  )
}
