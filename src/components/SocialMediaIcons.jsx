import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function SocialMediaIcons() {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>

      <a
        className='hover:opacity-50 transition duration-500 '
        href='https://www.linkedin.com/in/chantal-pilia-983387237/'
        target='_blank'
        rel='noreferrer'
      >
        <FaLinkedin className='text-2xl' />
      </a>

      <a
        className='hover:opacity-50 transition duration-500'
        href='https://github.com/ChantalPli'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub className='text-2xl' />
      </a>

      <a
        className='hover:opacity-50 transition duration-500'
        href='mailto:chantal.trc@gmail.com'
        target='_blank'
        rel='noreferrer'
      >
        <MdEmail className='text-2xl' />
      </a>

    </div>
  )
}
