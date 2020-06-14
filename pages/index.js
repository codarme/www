import { Topbar } from '~/components/Topbar'
import { Button } from '~/components/Button'
import { Input } from '~/components/Input'

const Presentation = () => (
  <div className="p-3 text-lightGray md:flex-1">
    <h1 className="p-1 text-3xl md:text-4xl lg:text-5xl">
      Desenvolvendo software de <span className="text-green">verdade</span>
    </h1>
    <p className="p-1 leading-loose xl:text-1xl">
      Seja avisado das próximas turmas do curso de Full Stack mais completo e
      com quem tem experiência.
    </p>
  </div>
)

const Form = () => {
  return (
    <form className="p-4 text-white flex flex-col md:flex-1 md:max-w-sm">
      <Input type="text" placeholder="Digite seu nome" />
      <Input type="text" placeholder="Informe seu melhor e-mail" />
      <Button>Me avise!</Button>
    </form>
  )
}

const Jumbotron = () => (
  <div className="max-w-5xl container p-2 flex-1 flex flex-col justify-center md:flex-row md:items-center md:p-4 lg:p-10">
    <Presentation />
    <Form />
  </div>
)

const Hero = () => (
  <div
    className="bg-cover flex flex-1 flex-col"
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
