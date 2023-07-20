import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import LineGradient from '../components/LineGradient'
import SocialMediaIcons from '../components/SocialMediaIcons'

export default function Contact () {
  const {
    register,
    trigger,
    formState: { errors }
  } = useForm()

  const onSubmit = async (e) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <section id='contact' className='pt-28 pb-48 '>

      {/* HEADING */}
      <motion.div
        className='flex justify-center w-full'
        // className='md:w-2/4 mx-auto text-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
      >
        <div>
          <p className='font-montserrat font-semibold text-4xl mb-5'>
            CONTACT<span className='text-fucsia'> ME</span>
          </p>
          <div className='flex justify-center mb-8'>
            <LineGradient width='w-1/2' />
          </div>
        </div>
      </motion.div>

      {/* FORM */}
      <div className='md:flex md:justify-between gap-16 mt-5'>
        <motion.div
          className='basis-1/4 flex justify-center'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <SocialMediaIcons />
        </motion.div>

        <motion.div
          className='basis-4/5 mt-10md:mt-0'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <form target='_blank' onSubmit={onSubmit} action='https://formsubmit.co/c69b1729edd22953ba1a27284c8dff1f' method='POST'>

            <input
              className='w-full bg-emerald-200  text-blue-700 font-semibold placeholder:bg-opaque-black p-3'
              type='text'
              placeholder='NAME'
              {...register('name', {
                required: true,
                maxLength: 100
              })}
            />
            {errors.name && (
              <p className='text-red mt-1'>
                {errors.name.type === 'required' && 'This field is required'}
                {errors.name.type === 'maxLength' && 'Max length is 100 characters'}
              </p>
            )}

            <input
              className='w-full bg-emerald-200 text-blue-700 font-semibold placeholder:bg-opaque-black p-3 mt-5'
              type='text'
              placeholder='EMAIL'
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })}
            />
            {errors.email && (
              <p className='text-red mt-1'>
                {errors.email.type === 'required' && 'This field is required'}
                {errors.email.type === 'pattern' && 'Invalid email address'}
              </p>
            )}

            <textarea
              className='w-full bg-emerald-200  text-blue-700 font-semibold placeholder:bg-opaque-black p-3 mt-5'
              type='message'
              placeholder='MESSAGE'
              rows='4'
              cols='50'
              {...register('message', {
                required: true,
                maxLength: 2000
              })}
            />
            {errors.message && (
              <p className='text-red mt-1'>
                {errors.message.type === 'required' && 'This field is required'}
                {errors.message.type === 'maxLength' && 'Msx length is 2000 characters'}
              </p>
            )}

            <button
              type='submit'
              className='p-5 bg-orange-500 font-semibold text-blue mt-5 hover:bg-pink-600 hover:text-white transition duration-500'
            >SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
