import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks /useMediaQuery'

function Link ({ page, selectedPage, setSelectedPage }) {
  const lowerCasePage = page.toLowerCase()

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? 'text-yellow' : ''}
    hover:text-green-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default function Navbar ({ isTopOfPage, selectedPage, setSelectedPage }) {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isAboveSmallScreens = useMediaQuery('(min-width:768px)')
  const navbarBackground = isTopOfPage ? '' : 'bg-green'

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className='flex items-center justify-between mx-auto w-5/6'>
        <h4 className='font-oswald text-3xl font-bold'>CPT</h4>

        {/* {DESKTOP NAV} */}
        {isAboveSmallScreens
          ? (
            <div className='flex justify-between gap-16 font-poppins text-sm font-semibold'>
              <Link
                page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Skills'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Projects'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Contact '
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            )
          : (
            <button
              className='rounded-full bg-pink-600 p-2'
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img alt='menu-i' src='../../public/assets/menu-icon.svg' />
            </button>
            )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className='fixed right-0 bottom-0 h-full bg-pink-600 w-[300px]'>
            {/* CLOSE ICON */}
            <div className='flex justify-endp-12'>
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt='close-i' src='../../public/assets/close-icon.svg' className='mx-8 mt-8' />
              </button>
            </div>

            {/* MENU ITEMS  */}
            <div className='flex flex-col gap-10 ml-[33%] text-2xl text-white'>

              <Link
                page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Skills'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Projects'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Contact'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />

            </div>
          </div>
        )}
      </div>

    </nav>
  )
}
