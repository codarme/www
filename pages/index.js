import axios from 'axios'
import * as yup from 'yup'
import { useFormik } from 'formik'

import { Topbar } from '~/components/Topbar'
import { Button } from '~/components/Button'
import { Input } from '~/components/Input'

import Congratulation from './congratulation.svg'
import Email from './email.svg'

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

const Form = ({ onSuccess }) => {
  const onSubmit = async (data) => {
    try {
      await axios({
        method: 'POST',
        url: '/api/notify-me',
        data,
      })

      onSuccess()
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    onSubmit,
    validationSchema: yup.object().shape({
      name: yup.string().required('Esqueceu de dizer seu nome :D'),
      email: yup
        .string()
        .required('Sem e-mail, não consigo te enviar as novidades, hehe')
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
        disabled={formik.isSubmitting}
      />
      <Input
        type="text"
        name="email"
        placeholder="Informe seu melhor e-mail"
        value={formik.values.email}
        error={formik.touched.email && formik.errors.email}
        onChange={formik.setFieldValue}
        disabled={formik.isSubmitting}
      />
      <Button onClick={formik.handleSubmit} disabled={formik.isSubmitting}>
        {(formik.isSubmitting && 'Deixa eu anotar aqui...') || 'Me avise!'}
      </Button>
    </form>
  )
}

const Congratulations = () => (
  <div className="p-4 bg-gunmetal rounded-lg text-white text-center flex flex-col md:flex-1 md:max-w-sm">
    <h3 className="p-4 text-xl text-green font-bold">
      <Congratulation height={30} className="inline px-6" />
      <span>Parabéns!</span>
      <Congratulation height={30} className="inline px-6" />
    </h3>

    <p className="p-4 font-bold leading-loose md:max-w-sm">
      Esse foi um passo importante para você melhorar cada vez mais como
      desenvolvedor!
    </p>

    <p className="p-4 flex items-center justify-center">
      <Email height={25} className="fill-current inline px-3" color="white" />
      <span>Verifique seu e-mail</span>
    </p>
  </div>
)

const Jumbotron = () => {
  const [formSubmitted, setSubmitted] = React.useState(false)

  return (
    <div className="max-w-5xl container p-2 flex-1 flex flex-col justify-center md:flex-row md:items-center md:p-4 lg:p-10">
      <Presentation />
      {formSubmitted ? (
        <Congratulations />
      ) : (
        <Form onSuccess={() => setSubmitted(true)} />
      )}
    </div>
  )
}

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
  return <Hero />
}
