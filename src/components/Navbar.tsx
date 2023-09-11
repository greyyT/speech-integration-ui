import AisiaLogo from '@/assets/icons/logo-asia.svg';
import { useState } from 'react';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="fixed md:relative flex justify-center left-0 right-0 z-30 shadow-nav bg-white">
      <nav className="flex justify-between items-center w-360 max-w-full h-16 md:h-15 mx-5 lg:mx-15 xl:mx-19 2xl:mx-22">
        <a href="https://aisia.vn/">
          <img src={AisiaLogo} alt="" />
        </a>
        <div className="flex items-center relative h-full">
          <div onClick={toggleMenu} className="w-12 h-full flex items-center lg:hidden z-40 cursor-pointer menu-toggle">
            <div className="menu-icon w-12 h-[5px] bg-black rounded-3xl relative before:absolute before:w-12 before:h-[5px] before:bg-black before:rounded-3xl before:bottom-[14px] after:absolute after:w-12 after:h-[5px] after:bg-black after:rounded-3xl after:top-[14px] transition-colors duration-100"></div>
          </div>
          <div className="modal opacity-0 lg:modal--remove pointer-events-none lg:pointer-events-auto lg:h-full">
            <div className="absolute lg:position-unset right-5 top-16 bg-white rounded-l-sm rounded-br-sm lg:rounded-none flex flex-col lg:flex-row lg:gap-7.5 text-black font-lato leading-text lg:h-full">
              <a
                className="flex whitespace-nowrap items-center px-7.5 py-4 lg:p-0 lg:h-full"
                href="https://aisia.vn/about-us/"
              >
                About Us
              </a>
              <a
                className="flex whitespace-nowrap items-center px-7.5 py-4 lg:p-0 lg:h-full"
                href="https://aisia.vn/services-and-solutions"
              >
                Services & Solutions
              </a>
              <a
                className="flex whitespace-nowrap items-center px-7.5 py-4 lg:p-0 lg:h-full"
                href="https://aisia.vn/courses"
              >
                Courses
              </a>
              <a
                className="flex whitespace-nowrap items-center px-7.5 py-4 lg:p-0 lg:h-full"
                href="https://aisia.vn/posts"
              >
                Blog
              </a>
              <a
                className="flex whitespace-nowrap items-center px-7.5 py-4 lg:p-0 lg:h-full"
                href="https://aisia.vn/events"
              >
                Events
              </a>
              <a
                className="flex whitespace-nowrap items-center px-7.5 py-4 lg:p-0 lg:h-full"
                href="https://aisia.vn/contact"
              >
                Contact us
              </a>
              <a className="flex whitespace-nowrap items-center px-7.5 py-4 lg:p-0 lg:h-full text-primary" href="#">
                Speech Integration
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
