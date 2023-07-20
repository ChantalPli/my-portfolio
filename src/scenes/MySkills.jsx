import { motion } from 'framer-motion'
import useMediaQuery from '../hooks /useMediaQuery'
import LineGradient from '../components/LineGradient'

export default function MySkills () {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')

  const techs = [
    {
      id: 1,
      src: '../../public/assets/html-icon1.png',
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: '../../public/assets/css-icon1.png',
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: '../../public/assets/js-icon.png',
      title: 'JAVASCRIPT',
      style: 'shadow-lime-400'
    },
    {
      id: 4,
      src: '../../public/assets/react-icon.webp',
      title: 'REACT',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: '../../public/assets/mongodb.webp',
      title: 'MONGODB',
      style: 'shadow-emerald-400'
    },
    {
      id: 6,
      src: '../../public/assets/nodejs-icon.png',
      title: 'NODEJS',
      style: 'shadow-orange-300'
    },
    {
      id: 7,
      src: '../../public/assets/bootstrap-icon.png',
      title: 'BOOTSTRAP',
      style: 'shadow-purple-500'
    },
    {
      id: 8,
      src: '../../public/assets/tailwind-icon.webp',
      title: 'TAILWIND',
      style: 'shadow-blue-200'
    },
    {
      id: 9,
      src: '../../public/assets/materialui.png',
      title: 'MATERIALUI',
      style: 'shadow-blue-700'
    }
  ]

  return (
    <section id='skills' className='pt-10 pb-24'>
      {/* HEADER SECTION  */}
      <div className='md:flex md:justify-center md:gap-16 mt-20'>

        <motion.div
          // className='flex justify-center w-full text-center'
          className='mx-auto text-center'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <p className='font-montserrat font-semibold text-4xl'>
            MY<span className='text-fucsia'> SKILLS</span>
          </p>

          <div className='flex justify-center mt-3 mb-8'>
            <LineGradient width='w-[150px]' />
          </div>

        </motion.div>

      </div>

      {/* SKILLS */}
      <div className='md:flex md:justify-center mt-5 gap-32'>

        <motion.div
          className='md:w-5/6 mt-16 md:mt-0'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <div className='relative w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 h-full '>

            {
            techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt={title} className='w-14 mx-auto' />
                <p className='pt-4 text-xs'>{title}</p>
              </div>

            ))
          }

          </div>

        </motion.div>
      </div>
    </section>
  )
}
