import { motion } from 'framer-motion'
import LineGradient from '../components/LineGradient'

const container = {
  hidden: {
    transition: { staggerChildren: 0.2 }
  }
}

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

function Project ({ title, toPage }) {
  const overlayStyles = 'absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-emerald-100  z-30 flex flex-col justify-center items-center text-center p-16 text-emerald-950'
  const projectTitle = title.split(' ').join('-').toLowerCase()

  return (
    <motion.div variants={projectVariant} className='relative'>
      <div className={overlayStyles}>
        <p className='text-2xl font-poppins'>{title}</p>
        <a href={toPage}>See</a>
      </div>
      <img src={`../../public/assets/${projectTitle}.jpg`} alt={projectTitle} />
    </motion.div>
  )
}

export default function Projects () {
  return (
    <section id='projects' className='pt-48 pb-48 '>
      {/* HEADINGS */}

      <motion.div
        className='md:w-2/4 mx-auto text-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div>
          <p className='font-montserrat font-semibold text-4xl'>
            MY<span className='text-fucsia'>PROJECTS</span>
          </p>
          <div className='flex justify-center mt-3 mb-8'>
            <LineGradient width='w-1/3' />
          </div>
        </div>

      </motion.div>

      {/* PROJECTS SECTION  */}
      <div className='flex justify-center'>
        <motion.div
          className='sm:grid sm:grid-cols-3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* ROW N.1 */}
          <Project title='Project 1' toPage='https://www.google.com' />
          <Project title='Project 1' />
          <Project title='Project 1' />

          {/* //ROW N.2 */}
          <Project title='Project 1' />
          <Project title='Project 1' />
          <Project title='Project 1' />

        </motion.div>
      </div>
    </section>
  )
}
