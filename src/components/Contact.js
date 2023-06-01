import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar";
import './Body.css'
import Footer from "./Footer";
function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost/php-react/Project/formadd.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success("your question has been send");
        setTimeout(function () {
          window.location.reload();
        }, 4000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <section className="part2">
        <div className="form-main">
          <div id="form-div">
            <form className="form" id="form1" onSubmit={handleSubmit}>
              <input
                type="text"
                className="feedback-input"
                name="name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                className="feedback-input"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <textarea
                type="text"
                className="feedback-input"
                name="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Comment"
                required
              />
              <div className="submit">
                <button className="submitcom" type="submit">
                  <span>envoyer</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="Contact">
          <h1 className="title2">
            Contact Form FilZoo
            <br />
            Animal Adoption 
          </h1>
          <p className="undertitle2">
            Use this form to contact us
            <br />
            if you have any questions.
          </p>
        </div>

      </section>
      <section className="section2">
      <h2 className="section-heading text-uppercase">Our Location</h2>
      <div className="location">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12785.711775826701!2d10.2699248!3d36.7603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd49fa15643927%3A0xad64c8c462b52435!2sInstitut%20Sup%C3%A9rieur%20des%20Etudes%20Technologiques%20de%20Rades!5e0!3m2!1sfr!2stn!4v1683846280381!5m2!1sfr!2stn"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        </section>
      <Footer />
    </div>
  );
}

export default Contact;
