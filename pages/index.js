import { Logo } from '~/components/Logo'
import { SocialLinks } from '~/components/SocialLinks'

const Topbar = () => (
  <div className="p-2 md:p-8 flex justify-between items-center">
    <Logo className="md:hidden" color="#FFF" height={50} icon />
    <Logo className="hidden md:block" color="#FFF" height={50} />
    <SocialLinks />
  </div>
)

const Hero = () => (
  <div
    className="bg-cover"
    style={{ backgroundImage: 'url(/img/bg-hero.png)' }}
  >
    <Topbar />
  </div>
)

export default function Home() {
  return (
    <Hero />
    // <About />
    // <Community />
    // <Footer />
  )
}
