import axios from 'axios'
import * as yup from 'yup'
import { useFormik } from 'formik'

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
  const onSubmit = (values) => {}

  const formik = useFormik({
    onSubmit,
    validationSchema: yup.object().shape({
      name: yup.string().required('Esqueceu de dizer seu nome :)'),
      email: yup
        .string()
        .required('Sem seu e-mail, não consigo te enviar novidades :)')
        .email('E-mail inválido'),
    }),
    initialValues: {
      name: '',
      email: '',
    },
  })

  return (
    <form className="p-4 text-white flex flex-col md:flex-1 md:max-w-sm">
      <Input
        type="text"
        name="name"
        placeholder="Digite seu nome"
        value={formik.values.name}
        error={formik.touched.name && formik.errors.name}
        onChange={formik.setFieldValue}
      />
      <Input
        type="text"
        name="email"
        placeholder="Informe seu melhor e-mail"
        value={formik.values.email}
        error={formik.touched.email && formik.errors.email}
        onChange={formik.setFieldValue}
      />
      <Button onClick={formik.handleSubmit}>Me avise!</Button>
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
