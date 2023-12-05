function About() {
  return (
    <>
      <div
        style={{ marginTop: "15rem", width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              alt="about"
              src="https://www.shutterstock.com/image-photo/web-development-coding-programming-internet-260nw-1141706672.jpg"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
              Empower your business with our streamlined IT services. From
              cutting-edge solutions to responsive support, we're your partner
              in navigating the digital landscape. Elevate efficiency, enhance
              security, and embrace innovation with our tailored IT expertise.
              Let's turn challenges into opportunities – your success, our
              priority.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
