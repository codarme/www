import { Logo } from '~/components/Logo'
import { SocialLinks } from '~/components/SocialLinks'

const Topbar = () => (
  <div className="container p-2 md:p-8 flex justify-between items-center">
    <Logo className="md:hidden" color="#FFF" height={50} icon />
    <Logo className="hidden md:block" color="#FFF" height={50} />
    <SocialLinks />
  </div>
)

const Button = ({ ...props }) => (
  <button {...props} className="p-3 rounded-md bg-green t" />
)

const Input = ({ ...props }) => (
  <input
    {...props}
    className="p-3 mb-3 bg-gunmetal opacity-75 rounded-md md:p-4 md:mb-4"
  />
)

const Presentation = () => (
  <div className="flex-1 p-4 sm:text-left text-lightGray">
    <h1 className="text-2xl sm:text-3xl md:text-4xl">
      Desenvolvendo software de <span className="text-green">verdade</span>
    </h1>
    <p>
      Seja avisado das próximas turmas do curso de Full Stack mais completo e
      com quem tem experiência.
    </p>
  </div>
)

const Form = () => {
  return (
    <form className="p-2 flex-1 text-white flex flex-col">
      <Input type="text" />
      <Input type="text" />
      <Button>Me avise!</Button>
    </form>
  )
}

const Jumbotron = () => (
  <div className="container p-2 flex flex-col md:flex-row md md:p-4 lg:p-10">
    <Presentation />
    <Form />
  </div>
)

const Hero = () => (
  <div
    className="bg-cover"
    style={{ backgroundImage: 'url(/img/bg-hero.png)' }}
  >
    <Topbar />
    <Jumbotron />
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
