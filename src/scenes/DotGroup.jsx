import { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function DotGroup({ selectedPage, setSelectedPage }) {
  const selectedStyle = 'relative bg-fucsia before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-fucsia before:left-[-50%] before:top-[-50%]'



  //////////////

  useEffect(() => {
    const handleScroll = () => {
      // to obtain the vertical position:
      const homeSection = document.getElementById('home').offsetTop;
      const skillsSection = document.getElementById('skills').offsetTop;
      const projectsSection = document.getElementById('projects').offsetTop;
      const contactSection = document.getElementById('contact').offsetTop;

      // it determines the actual scroll position 
      const scrollPosition = window.scrollY;

      //it compares the scroll position with the sections position 
      if (scrollPosition >= homeSection && scrollPosition < skillsSection) {
        setSelectedPage('home');
      } else if (scrollPosition >= skillsSection && scrollPosition < projectsSection) {
        setSelectedPage('skills');
      } else if (scrollPosition >= projectsSection && scrollPosition < contactSection) {
        setSelectedPage('projects');
      } else if (scrollPosition >= contactSection) {
        setSelectedPage('contact');
      }
    };

    //when the component mounts - it adds the event listener 
    window.addEventListener('scroll', handleScroll);

    //it removes the event listener when component unmount 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setSelectedPage]);

  /////////////////






  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
      <AnchorLink
        href='#home'
        className={`${selectedPage === 'home' ? selectedStyle : 'bg-grey'}
        w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('home')}
      />
      <AnchorLink
        href='#skills'
        className={`${selectedPage === 'skills' ? selectedStyle : 'bg-grey'}
        w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('skills')}
      />
      <AnchorLink
        href='#projects'
        className={`${selectedPage === 'projects' ? selectedStyle : 'bg-grey'}
        w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('projects')}
      />
      <AnchorLink
        href='#contact'
        className={`${selectedPage === 'contact' ? selectedStyle : 'bg-grey'}
        w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('contact')}
      />

    </div>
  )
}
