import { Logo } from '~/components/Logo'

// const SocialLinks = () => <div className="text-white">Social Links</div>

const Topbar = () => (
  <div className="p-2 flex justify-between  items-center">
    <Logo className="md:hidden" color="#FFF" height={50} icon />
    <Logo className="hidden md:block" color="#FFF" height={50} />
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
