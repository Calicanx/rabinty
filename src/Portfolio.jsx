import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import bg from './assets/denis-pavlovic-NVu_zR3-aQQ-unsplash.webp'
import react from './assets/science.webp'
import js from'./assets/js.webp'
import figma from './assets/figma.webp'
import php from './assets/php.webp'
import css from './assets/css-3.webp'
import wallet from './assets/wallet(1).webp'
import consult from './assets/consultation.webp'
import monitor from './assets/monitor.webp'
import code from './assets/pankaj-patel-4oAFasAPftg-unsplash.webp'
import upwork from './assets/pngwing.com(3).webp'
import fiverr from './assets/pngwing.com(4).webp'
import down from './assets/down-arrow.webp'
import previous from './assets/previous.webp'
import next from './assets/next.webp'
import feature from './assets/smartmockups_llumf7xh.webp'
import twitter from './assets/twitter (1).webp'
import linkedin from './assets/linkedin.webp'
import github from './assets/github.webp'
import logo from './assets/Logo.svg'
import menu from './assets/menu.webp'


import "./Portfolio.css";

export default function Portfolio () {

  const form = useRef();


  const submitForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('message sent successfully...');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    };

  return (
    <div className="portfolio">
      <img className="rectangle-102" src={bg} />

        <Link to='/'>
          <img className="logo" src={logo}/>
        </Link>

        <img className="rectangle-108" src={menu}/>

        <div className="frame-158">
          <Link className="about" to='/about'>
            About
          </Link>

          <Link className="projects" to='/projects'>
            Projects
          </Link>

          <a className="contact" href='#contact'>
            Contact
          </a>
        </div>

      <div className="hello-i-am-rabin-front-end-developer">
        Hello, <br />I am Rabin,
        <br />
        Front End Developer
      </div>

      <div className="currently-located-in-kenya-i-love-building-interactive-digital-experiences-on-the-web">
        Currently located in Kenya, I love building interactive, digital
        experiences on the web
      </div>

      <a href='#contact'><button className="frame-161">
       Get in touch
      </button></a>

      <div className="frame-163">
      <div className="skills-tools">&lt;Skills &amp; Tools/&gt;</div>

        <div className="for-a-more-detailed-overview-please-feel-free-to-check-the-tools-that-were-used-per-project-basis">
          For a more detailed overview, please feel free to check the tools that
          were used <Link className='link' to='/projects'>per-project-basis.</Link>
        </div>
      </div>

      <img className="rectangle-83" src={code} />

      <div className="frame-175">
        <div className="rectangle-85"></div>

        <div className="frame-170">
          <div className="_100">100+</div>

          <div className="completed-projects">Completed projects</div>
        </div>
      </div>

      <div className="frame-173">
        <div className="rectangle-852"></div>

        <div className="frame-1702">
          <div className="_50">50+</div>

          <div className="clients">Clients</div>
        </div>
      </div>

      <div className="frame-168">
        <div className="frame-165">
          <img className="rectangle-84" src={wallet} />

          <div className="frame-164">
            <div className="reasonable-flexible-prices-for-clients">
              Reasonable &amp; Flexible prices for clients
            </div>

            <div className="for-a-more-detailed-overview-please-feel-free-to-check-the-tools-that-we">
            Our prices are fair and can be adjusted to suit your specific requirements.
            </div>
          </div>
        </div>

        <div className="frame-166">
          <img className="rectangle-84" src={consult} />

          <div className="frame-164">
            <div className="elaborating-ideas-in-a-discussion">
              Elaborating ideas in a discussion
            </div>

            <div className="for-a-more-detailed-overview-please-feel-free-to-check-the-tools-that-we">
            Unlocking creativity through insightful discussions that enrich ideas and foster collaboration.
            </div>
          </div>
        </div>

        <div className="frame-167">
          <img className="rectangle-84" src={monitor} />

          <div className="frame-164">
            <div className="full-range-of-design-motion-services">
              Full range of design &amp; motion services
            </div>

            <div className="for-a-more-detailed-overview-please-feel-free-to-check-the-tools-that-we">
            Comprehensive design & motion solutions tailored to elevate your brand and captivate your audience.
            </div>
          </div>
        </div>
      </div>

      <div className="frame-169">
        <div className="_07">04+</div>

        <div className="years-experience">Years Experience</div>
      </div>

      <div className="frame-188">
        <div className="rectangle-85"></div>

        <div className="frame-195">
          <div className="top-rated-freelancer">Top rated freelancer</div>

          <div className="frame-189">
            <img className="rectangle-98" src={upwork} />

            <img className="rectangle-99" src={fiverr} />
          </div>
        </div>
      </div>

      <img className="rectangle-86" src={down} />

      <div className="frame-178">
        <div className="featured-projects">Featured projects</div>

        <div className="created-as-part-of-the-learning-process-the-goal-was-to-build-modern-progressive-responsive-web-applications-to-find-out-more-details-about-a-specific-project-please-click-on-it">
          Created as part of the learning process, the goal was to build
          modern, progressive &amp; responsive web applications.
          <br />
          <br />
          To find out more details about a specific project, please click on it.
        </div>
      </div>

      <div className="let-s-get-in-touch">Let’s get in touch!</div>

      <div className="frame-181">
        <div className=''>
          <Link to='/projects'>
            <img className="rectangle-87" src={feature} />
          </Link>
        </div>
        <div className="frame-180">
          <img className="rectangle-89" src={previous} />

          <div className="frame-179">
            <div className="ellipse-30"></div>

            <div className="ellipse-30"></div>

            <div className="ellipse-30"></div>

            <div className="ellipse-30"></div>

            <div className="ellipse-30"></div>
          </div>

          <img className="rectangle-90" src={next} />

        </div>
      </div>

      <div className="either-by-email-or-through-social-media">
        Either by email or through social media
      </div>

      <Link to='/'>
        <img className="rectangle-91" src={logo}></img>
      </Link>

      <div className="frame-182">
        <Link to='https://twitter.com/rabinty'>
          <img className="rectangle-92" src={twitter} />
        </Link>

        <Link to='https://linkedin/rabinty'>
          <img className="rectangle-93" src={linkedin} />
        </Link>

        <Link to='https://linkedin.com/rabinty'>
          <img className="rectangle-94" src={github} />
        </Link>
      </div>

      <form ref={form} onSubmit={submitForm} className="frame-185" id='contact'>
        <div className="frame-184">
          <div className="name">Name</div>

          <input name='name' type='text' placeholder='Enter your name' className="rectangle-95"/>

          <div className="email">Email</div>

          <input name='email' type='text' placeholder='Enter your email' className="rectangle-96"/>

          <div className="message">Message</div>

          <textarea name='message' type='text' placeholder='Message' className="rectangle-97"></textarea>
        </div>

        <input type='submit' name='submit' className="frame-183"/>
      </form>

      <div className="_2023-rabin-all-rights-reserved">
        © 2023 Rabin. All rights reserved.
      </div>

      <div className="frame-193">
        <div className="rectangle-85"></div>

        <div className="frame-192">
          <svg
            className="frame-191"
            width="275"
            height="40"
            viewBox="0 0 275 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5 0L41.9903 13.8197H56.5211L44.7654 22.3607L49.2557 36.1803L37.5 27.6393L25.7443 36.1803L30.2346 22.3607L18.4789 13.8197H33.0097L37.5 0Z"
              fill="white"
            />
            <path
              d="M87.5 0L91.9903 13.8197H106.521L94.7654 22.3607L99.2557 36.1803L87.5 27.6393L75.7443 36.1803L80.2346 22.3607L68.4789 13.8197H83.0097L87.5 0Z"
              fill="white"
            />
            <path
              d="M137.5 0L141.99 13.8197H156.521L144.765 22.3607L149.256 36.1803L137.5 27.6393L125.744 36.1803L130.235 22.3607L118.479 13.8197H133.01L137.5 0Z"
              fill="white"
            />
            <path
              d="M187.5 0L191.99 13.8197H206.521L194.765 22.3607L199.256 36.1803L187.5 27.6393L175.744 36.1803L180.235 22.3607L168.479 13.8197H183.01L187.5 0Z"
              fill="white"
            />
            <path
              d="M237.5 0L241.99 13.8197H256.521L244.765 22.3607L249.256 36.1803L237.5 27.6393L225.744 36.1803L230.235 22.3607L218.479 13.8197H233.01L237.5 0Z"
              fill="white"
            />
          </svg>

          <div className="_40-client-reviews">40+ Client reviews</div>
        </div>
      </div>

      <div className="frame-196">
        <img className="rectangle-103" src={react} />

        <img className="rectangle-104" src={js} />

        <img className="rectangle-105" src={figma} />

        <img className="rectangle-106" src={php} />

        <img className="rectangle-107" src={css} />
      </div>
    </div>
  );
};
