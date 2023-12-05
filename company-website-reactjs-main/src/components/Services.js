// import Card from "./Card";
// function Services() {
//   return (
//     <div className="container services">
//         <h2 className="main-title text-center">SERVICES</h2>
//         <div className="card-cover">
//             <div className="col-md-12">
//                 <div className="row">
//                     <div className="col-md-4 mb-2">
//                         <Card title="Web Development" img="card1.png" text="Morbi eget neque risus. Duis erat quam, porta quis enim id, venenatis blandit nunc. " />
//                     </div>
//                     <div className="col-md-4 mb-2">
//                     <Card title="E-Commerce Services" img="card2.png" text="Maecenas dictum efficitur felis non gravida. Vestibulum vitae ante luctus, accumsan mi vitae, pretium metus." />
//                     </div>
//                     <div className="col-md-4 mb-2">
//                     <Card title="Cyber Security" img="card3.png" text="Phasellus suscipit nibh at nisi finibus vestibulum sit amet vitae massa. Suspendisse non est eget elit pulvinar consectetur nec non sapien." />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// }
// export default Services;


import React from "react";
import Card from "./Card";

function Services() {
  return (
    <div className="container services">
      <h2 className="main-title text-center">SERVICES</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card
                title="Web Development"
                img="https://www.shutterstock.com/image-photo/web-development-coding-programming-internet-260nw-1141706672.jpg"
                text="Unlock the potential of your business with our web development expertise. We design and build modern, user-friendly websites that leave a lasting impression. Elevate your online presence, engage your audience, and achieve your business goals. Let's bring your vision to life on the web!."
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="E-Commerce Services"
                img="https://www.shutterstock.com/image-photo/web-development-coding-programming-internet-260nw-1141706672.jpg"

                text="Transform your business with our straightforward e-commerce solutions. We create easy-to-navigate online stores, ensuring a seamless shopping experience for your customers. Let us handle the technicalities while you focus on growing your business. Elevate your online presence effortlessly with our simplified e-commerce services."
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Cyber Security"
                img="https://www.shutterstock.com/image-photo/web-development-coding-programming-internet-260nw-1141706672.jpg"


                text="Guard your business against digital threats with our cybersecurity services. We provide robust solutions to secure your sensitive data, defend against cyberattacks, and ensure a resilient digital environment. Trust us to fortify your online presence, safeguarding your business and customer trust. Shield your data, shield your success – with our comprehensive cybersecurity expertise."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

