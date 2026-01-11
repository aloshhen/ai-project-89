import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Calendar, User, Mail, Phone } from 'lucide-react'

function ReservationForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Имя обязательно'),
    phone: Yup.string().required('Телефон обязателен'),
    email: Yup.string().email('Некорректный email').required('Email обязателен'),
    date: Yup.date().required('Дата обязательна')
  })

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values)
    // Здесь будет логика отправки данных
    setSubmitting(false)
  }

  return (
    <section id="reservation" className="py-24 bg-bar-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Бронирование <span className="text-bar-accent">Столика</span></h2>
        
        <Formik
          initialValues={{ name: '', phone: '', email: '', date: '', guests: 2 }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="max-w-xl mx-auto bg-bar-primary p-8 rounded-xl">
              <div className="mb-4 relative">
                <User className="absolute left-3 top-3 text-bar-accent" />
                <Field
                  name="name"
                  placeholder="Ваше имя"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-bar-secondary text-white"
                />
                {errors.name && touched.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
              </div>

              <div className="mb-4 relative">
                <Phone className="absolute left-3 top-3 text-bar-accent" />
                <Field
                  name="phone"
                  placeholder="Телефон"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-bar-secondary text-white"
                />
                {errors.phone && touched.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
              </div>

              <div className="mb-4 relative">
                <Mail className="absolute left-3 top-3 text-bar-accent" />
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-bar-secondary text-white"
                />
                {errors.email && touched.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
              </div>

              <div className="mb-4 relative">
                <Calendar className="absolute left-3 top-3 text-bar-accent" />
                <Field
                  name="date"
                  type="date"
                  placeholder="Дата бронирования"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-bar-secondary text-white"
                />
                {errors.date && touched.date && <div className="text-red-500 text-sm mt-1">{errors.date}</div>}
              </div>

              <div className="mb-4">
                <Field
                  name="guests"
                  as="select"
                  className="w-full px-4 py-3 rounded-lg bg-bar-secondary text-white"
                >
                  {[1,2,3,4,5,6].map(num => (
                    <option key={num} value={num}>Гостей: {num}</option>
                  ))}
                </Field>
              </div>

              <button
                type="submit"
                className="w-full bg-bar-accent text-white py-3 rounded-lg hover:bg-bar-accent/90 transition"
              >
                Забронировать
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default ReservationForm