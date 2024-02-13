import useMediaQuery from '../hooks /useMediaQuery'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SocialMediaIcons from '../components/SocialMediaIcons'

export default function Landing({ setSelectedPage }) {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')

  return (
    <section id='home' className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'>

      {/* IMAGE SECTION */}
      <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
        {isAboveMediumScreens
          ? (
            <div
              className='relative z-0 ml-20 before:absolute before:-top-8 before:-left-8  before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-fucsia before:z-[-1]'
            >
              <img
                alt='profile'
                className='hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[600px]]'
                src='../../public/assets/profile_picture3.jpeg'
              />
            </div>
          )
          : (
            <img
              alt='profile'
              className='hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[600px]]'
              src='../../public/assets/profile_picture3.jpeg'
            />
          )}
      </div>

      {/* MAIN SECTION  */}
      <div className='z-30 basis-2/5 mt-9 '>
        {/* HEADING */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <p className='text-8xl font-semibold font-oswald  z-10 text-center md:text-start text-fucsia'>
            CHANTAL {' '}
            <span className='xs:relative xs:text-yellow xs:font-semibold z-20 text-8xl'>PILIA TRANCHERO</span>
          </p>

          <h2 className='mt-10 mb-7 text-3xl font-lato font:poppins text-center md:text-start'>WEB DEVELOPER</h2>
        </motion.div>

        {/* CALL TO ACTION */}
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <AnchorLink
            className='bg-gradient-rainbow text-white rounded-sm py-3 px-7 font-semibold hover:bg-green hover:text-pink-900 transition duration-500 hover:ring-  ring-pink-400'
            onClick={() => setSelectedPage('contact')}
            href='#contact'
          >
            Contact me
          </AnchorLink>
        </motion.div>

        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  )
}
