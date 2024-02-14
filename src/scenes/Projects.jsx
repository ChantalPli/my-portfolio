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

function Project({ title, toPage }) {
  const overlayStyles = 'absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-emerald-100  z-30 flex flex-col justify-center items-center text-center p-16 text-emerald-950'
  // const projectTitle = title.split(' ').join('-').toLowerCase()
  const projectTitle = title.split(' ').join('-').toLowerCase()

  return (
    <motion.div variants={projectVariant} className='relative'>
      <div className={overlayStyles}>
        <p className='text-2xl font-poppins'>{title}</p>
        <a href={toPage} target='_blank' rel='noreferrer'>See</a>
      </div>
      <img src={`/assets/${projectTitle}.jpg`} alt={projectTitle} />
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id='projects' className='pt-28 pb-48'>
      {/* HEADINGS */}

      <motion.div
        // className='md:w-2/4 mx-auto text-center'
        className='flex justify-center w-full mb-7'
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
            MY<span className='text-fucsia'> PROJECTS</span>
          </p>
          <div className='flex justify-center mt-3 mb-12'>
            <LineGradient width='w-[150px]' />
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
          <Project title='Music app' toPage='https://music-app-project-pilia.netlify.app/' />
          <Project title='Luxury estate' toPage='https://mern-luxury-estate-chantal.onrender.com/' />
          <Project title='Gym app' toPage='https://gym-app-chantal-trc.netlify.app/' />

          {/* //ROW N.2 */}
          <Project title='Youtube clone' toPage='https://youtube-clone-app-chantaltrc.netlify.app/' />
          <Project title='Snake game' toPage='https://statuesque-cupcake-91ccbd.netlify.app/' />
          <Project title='Geography quiz' toPage='https://stellar-sundae-0a2f98.netlify.app/' />

        </motion.div>
      </div>
    </section>
  )
}
