// Footer.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Footer = ({ triggerAnimation }) => {
  const envelopeRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    setAnimate(true);
    setTimeout(() => setAnimate(false), 3000);

    // Scroll to #contact
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    // Open mail client after delay
    setTimeout(() => {
      window.location.href = "mailto:Jinadbstefan@gmail.com";
    }, 600);
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contact') {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 3000);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className='text-[14px]'>
      <div className="container-f">
        <div className="row-f">
          <div className="foot1">
            <h1>Let's Build Something Great!</h1>
            <p>Have a project in mind or want to collaborate? Feel free to reach out!</p>

            <div className="foot2" onClick={handleEmailClick}>
              <a
  href="#contact"
  className={`foot2 ${animate ? 'pop-animation' : ''}`}
  onClick={(e) => {
    e.preventDefault();

    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      window.location.href = "mailto:Jinadbstefan@gmail.com";
    }, 600);
  }}
>
  <span></span>
  <span></span>
  Say Hello
  <i
    className={`fa-solid fa-envelope ${animate ? 'pop-animation' : ''}`}
    ref={envelopeRef}
  ></i>
</a>

            </div>
          </div>

          <div className="foot3">
  <h3>See My Work</h3>
  <ul>
    <li><a href="https://zedxoriginal.com/" target="_blank" rel="noopener noreferrer">Zedx</a></li>
    <li><Link to="/">Have</Link></li> {/* Internal route — this is fine */}
    <li><Link to="/">React Job</Link></li>
    <li><a href="http://localhost:5173/" target="_blank" rel="noopener noreferrer">Culture & Style</a></li>
  </ul>
</div>

          <section id='contact' className="foot4">
  <h3>Follow Me</h3>
  <ul>
    <li><Link to="/" className="hover:text-red-300"><i className="fa-brands fa-instagram"></i></Link></li>
    <li><a href="https://x.com/JinadBstefan" target="_blank" rel="noopener noreferrer" className="hover:text-teal-200"><i className="fa-brands fa-x-twitter"></i></a></li>
    <li><a href="https://www.linkedin.com/in/thagreat/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><i className="fa-brands fa-linkedin-in"></i></a></li>
    <li><a href="https://github.com/bigboy-dgreat/ThaGreat" target="_blank" rel="noopener noreferrer" className="hover:text-black"><i className="fa-brands fa-github"></i></a></li>
  </ul>
</section>
        </div>
        <hr />
        <p className='copy'>ThaGreat &copy; 2025</p>
      </div>
    </div>
  );
};

export default Footer;
