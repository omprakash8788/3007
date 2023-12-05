import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">3007</h1>
                <p className="footer-text">
                  We are a dynamic IT software company dedicated to transforming
                  ideas into innovative digital solutions. With a focus on
                  cutting-edge technology, we deliver bespoke software that
                  empowers businesses to thrive in the digital era. Our expert
                  team is committed to excellence, ensuring seamless
                  integration, robust security, and user-friendly experiences.
                  Partner with us to elevate your digital presence and propel
                  your business towards unprecedented success.
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                    <Link
                      spy={true}
                      smooth={true}
                      duration={1000}
                      to="headerbg"
                    >
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      {" "}
                      Services{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about-scroll"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      About Us{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" spy={true} smooth={true} duration={1000}>
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#">burhankcd@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#"> Burhan #3265</Link>
                  </li>
                  <li>
                    <Link to="#">0212 444 44 44</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/darkleas"
                    >
                      {" "}
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/burhankocadag0"
                    >
                      {" "}
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/burhan-kocada%C4%9F-49a3331a5/"
                    >
                      {" "}
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop">
        <i className="fas fa-level-up-alt"></i>
      </button>
    </footer>
  );
}
export default Footer;
