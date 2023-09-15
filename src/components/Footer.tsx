import LogoAisia from '../assets/icons/logo-asia.svg';
import YoutubeIcon from '../assets/icons/YOUTUBE.svg';
import FacebookIcon from '../assets/icons/FACEBOOK.svg';
import LinkedinIcon from '../assets/icons/LINKEDIN.svg';

const Footer = () => {
  return (
    <footer>
      <div className="bg-main-bg pt-7.5 lg:pt-10 pb-12.5 lg:pb-15">
        <div className="w-360 max-w-full mx-auto">
          <div className="px-4 lg:p-0 lg:mx-15 xl:mx-19 2xl:mx-22">
            <a className="w-[94px] current" href="/">
              <img src={LogoAisia} />
            </a>

            <nav className="mt-7.5 flex flex-col gap-7.5 sm:flex-row sm:justify-between">
              <div className="flex gap-7.5 max-w-md lg:max-w-full flex-wrap xl:gap-18.75 2xl:gap-25 text-h3 font-lato">
                <section>
                  <h3 className="uppercase">Information</h3>
                  <ul className="mt-2.5">
                    <li>
                      <a href="/about-us/mission">Our mission</a>
                    </li>
                    <li>
                      <a href="/about-us/our-team" className="current">
                        Our team
                      </a>
                    </li>
                    <li>
                      <a href="/about-us/achievement">Achievement</a>
                    </li>
                    <li>
                      <a href="/about-us/achievement/papers-and-projects">Publications</a>
                    </li>
                    <li>
                      <a href="/contact">Contact us</a>
                    </li>
                    <li>
                      <a href="/sign-in">Sign in</a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="uppercase">Services &amp; Solutions</h3>
                  <ul className="mt-2.5">
                    <li>
                      <a href="/services-and-solutions">Design AI/ML Systems</a>
                    </li>
                    <li>
                      <a href="/services-and-solutions">R&amp;D Products</a>
                    </li>
                    <li>
                      <a href="/services-and-solutions">AI/ML Solutions</a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="uppercase">Featured Courses</h3>
                  <ul className="mt-2.5">
                    <li>
                      <a href="/courses/FDE02/fundamental-data-engineering">Fundamental Data Engineering</a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="uppercase">Blogs</h3>
                  <ul className="mt-2.5">
                    <li>
                      <a href="/posts">Index</a>
                    </li>
                    <li>
                      <a href="/events">Events</a>
                    </li>
                  </ul>
                </section>
              </div>

              <div>
                <h3 className="uppercase sm:text-right">Follow us</h3>
                <address className="flex gap-4 mt-4">
                  <a href="https://www.facebook.com/aisia.lab" target="”_blank”">
                    <img src={FacebookIcon} />
                  </a>

                  <a href="https://www.youtube.com/@ntbinhptnk" target="”_blank”">
                    <img src={YoutubeIcon} />
                  </a>

                  <a href="https://www.linkedin.com/company/aisia-lab/" target="”_blank”">
                    <img src={LinkedinIcon} />
                  </a>
                </address>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
