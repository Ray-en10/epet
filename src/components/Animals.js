import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "./Animals.css";
import { ToastContainer, toast } from "react-toastify";



function Animals() {
  const [animals, setAnimals] = useState([]);
  const { hash } = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [selectedAdoptionAnimal, setSelectedAdoptionAnimal] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");




  const togglePopup = (content) => {
    setShowPopup(!showPopup);
    setPopupContent(content);
  };

  useEffect(() => {
    const id = hash.replace("#", "");
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  useEffect(() => {
    fetch("http://localhost/php-react/Project/Aff/affall.php")
      .then((res) => res.json())
      .then((data) => setAnimals(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email ||!phone ||!text) {
      window.alert("All fields are required");
      return;
    }
    fetch("http://localhost/php-react/Project/Add/adopt.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        text,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success("your form has been send");
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
      <ToastContainer/>
      <div className="Animalpage">
        <section>
          <h1 className="app_prod3">Here is all the available animals</h1>
          <div className="pageanim">
            <h2 className="sectitle">DOGs</h2>
            <div className="anim" id="Dogs">
              {animals.map((animal, index) => {
                if (animal.type === "dog" && index < 10) {
                  return (
                    <div className="animal" key={animal.id}>
                      <h2>{animal.name}</h2>
                      <img
                        className="animalimg"
                        alt={animal.name}
                        src={animal.image}
                      />
                      <p>Owner : {animal.owner}</p>
                      <p>Race : {animal.race}</p>
                      <p>Age : {animal.age} Years</p>
                      <div className="description">
                        <p className={showPopup ? "expanded" : ""}>
                          Story : {animal.description}
                        </p>
                        <div className="complexe">
                          {animal.description.length > 10 && (
                            <button
                              className="button5"
                              onClick={() => togglePopup(animal)}
                            >
                              See More
                            </button>
                          )}
                          <button
                            className="button5"
                            onClick={() => {
                              setSelectedAdoptionAnimal(animal);
                            }}
                          >
                            Adopt Now
                          </button>
                        </div>
                      </div>
                      <div>
                        <br />
                      </div>
                      <h5>{animal.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
              {showPopup && (
                <div className="popup">
                  <div className="popup-content">
                    <button className="close-popup" onClick={togglePopup}>
                      x
                    </button>
                    <br />
                    {popupContent && (
                      <div className="popshiish">
                        <h2>{popupContent.name}</h2>
                        <img
                          className="popup-image"
                          alt={popupContent.name}
                          src={popupContent.image}
                        />
                        <p>
                          Owner : {popupContent.owner}
                          <br />
                          Race: {popupContent.race}
                          <br />
                          Age: {popupContent.age} Years
                          <br />
                          Description: {popupContent.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {selectedAdoptionAnimal && (
                <div className="popup"onSubmit={handleSubmit}>
                  <div className="popup2-content">
                    <button
                      className="close-popup"
                      onClick={() => setSelectedAdoptionAnimal(null)}
                    >
                      x
                    </button>
                    <br />
                    <h2>Adoption Details</h2><br/>
                    <div className="secpop">
                    <span>
                      <img
                          className="popup2-image"
                          alt={selectedAdoptionAnimal.image}
                          src={selectedAdoptionAnimal.image}
                        />
                      <h5>Animal: {selectedAdoptionAnimal.type} <br /></h5>
                      <h5>Owner: {selectedAdoptionAnimal.owner} <br /></h5>
                      <h5>Animal name: {selectedAdoptionAnimal.name}</h5>
                    </span>
                    </div>
                    <h6>Fill this form with your personnel information</h6>
                    <form >
                      <div>
                        <label >Your Name:</label>
                        <input type="text"className="feedback-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        required/>
                      </div>
                      <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="feedback-input"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         required/>
                      </div>
                      <div>
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" className="feedback-input"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required/>
                      </div> 
                      <div>
                        <label htmlFor="reason">Why are you adopting?</label>
                        <input type="textarea" className="feedback-input" 
                         value={text}
                         onChange={(e) => setText(e.target.value)}
                         required/>
                      </div>
                      <button type="submit" className="button5">Submit</button>
                    </form>
                  </div>
                </div>
              )}
            </div>
            <h2 className="sectitle">CATs</h2>
            <div className="anim" id="Cats">
              {animals.map((animal, index) => {
                if (animal.type === "cat" && index < 10) {
                  return (
                    <div className="animal" key={animal.id}>
                      <h2>{animal.name}</h2>
                      <img
                        className="animalimg"
                        alt={animal.name}
                        src={animal.image}
                      />
                      <p>Owner : {animal.owner}</p>
                      <p>Race : {animal.race}</p>
                      <p>Age : {animal.age} Years</p>
                      <div className="description">
                        <p className={showPopup ? "expanded" : ""}>
                          Story : {animal.description}
                        </p>
                        {animal.description.length > 10 && (
                          <button
                            className="seemorebut"
                            onClick={() => togglePopup(animal)}
                          >
                            See More
                          </button>
                        )}
                      </div>
                      <div>
                        <br />
                      </div>
                      <h5>{animal.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
              {showPopup && (
                <div className="popup">
                  <div className="popup-content">
                    <button className="close-popup" onClick={togglePopup}>
                      x
                    </button>
                    <br />
                    {popupContent && (
                      <div className="popshiish">
                        <h2>{popupContent.name}</h2>
                        <img
                          className="popup-image"
                          alt={popupContent.name}
                          src={popupContent.image}
                        />
                        <p>
                          Owner : {popupContent.owner}
                          <br />
                          Race: {popupContent.race}
                          <br />
                          Age: {popupContent.age} Years
                          <br />
                          Description: {popupContent.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <h2 className="sectitle">PIGs</h2>
            <div className="anim" id="Pigs">
              {animals.map((animal, index) => {
                if (animal.type === "pig" && index < 10) {
                  return (
                    <div className="animal" key={animal.id}>
                      <h2>{animal.name}</h2>
                      <img
                        className="animalimg"
                        alt={animal.name}
                        src={animal.image}
                      />
                      <p>Owner : {animal.owner}</p>
                      <p>Race : {animal.race}</p>
                      <p>Age : {animal.age} Years</p>
                      <div className="description">
                        <p className={showPopup ? "expanded" : ""}>
                          Story : {animal.description}
                        </p>
                        {animal.description.length > 10 && (
                          <button
                            className="seemorebut"
                            onClick={() => togglePopup(animal)}
                          >
                            See More
                          </button>
                        )}
                      </div>
                      <div>
                        <br />
                      </div>
                      <h5>{animal.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
              {showPopup && (
                <div className="popup">
                  <div className="popup-content">
                    <button className="close-popup" onClick={togglePopup}>
                      x
                    </button>
                    <br />
                    {popupContent && (
                      <div className="popshiish">
                        <h2>{popupContent.name}</h2>
                        <img
                          className="popup-image"
                          alt={popupContent.name}
                          src={popupContent.image}
                        />
                        <p>
                          Owner : {popupContent.owner}
                          <br />
                          Race: {popupContent.race}
                          <br />
                          Age: {popupContent.age} Years
                          <br />
                          Description: {popupContent.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <h2 className="sectitle">MONKEYs</h2>
            <div className="anim" id="Monkeys">
              {animals.map((animal, index) => {
                if (animal.type === "monkey" && index < 10) {
                  return (
                    <div className="animal" key={animal.id}>
                      <h2>{animal.name}</h2>
                      <img
                        className="animalimg"
                        alt={animal.name}
                        src={animal.image}
                      />
                      <p>Owner : {animal.owner}</p>
                      <p>Race : {animal.race}</p>
                      <p>Age : {animal.age} Years</p>
                      <div className="description">
                        <p className={showPopup ? "expanded" : ""}>
                          Story : {animal.description}
                        </p>
                        {animal.description.length > 10 && (
                          <button
                            className="seemorebut"
                            onClick={() => togglePopup(animal)}
                          >
                            See More
                          </button>
                        )}
                      </div>
                      <div>
                        <br />
                      </div>
                      <h5>{animal.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
              {showPopup && (
                <div className="popup">
                  <div className="popup-content">
                    <button className="close-popup" onClick={togglePopup}>
                      x
                    </button>
                    <br />
                    {popupContent && (
                      <div className="popshiish">
                        <h2>{popupContent.name}</h2>
                        <img
                          className="popup-image"
                          alt={popupContent.name}
                          src={popupContent.image}
                        />
                        <p>
                          Owner : {popupContent.owner}
                          <br />
                          Race: {popupContent.race}
                          <br />
                          Age: {popupContent.age} Years
                          <br />
                          Description: {popupContent.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <h2 className="sectitle">BIRDs</h2>
            <div className="anim" id="Birds">
              {animals.map((animal, index) => {
                if (animal.type === "bird" && index < 10) {
                  return (
                    <div className="animal" key={animal.id}>
                      <h2>{animal.name}</h2>
                      <img
                        className="animalimg"
                        alt={animal.name}
                        src={animal.image}
                      />
                      <p>Owner : {animal.owner}</p>
                      <p>Race : {animal.race}</p>
                      <p>Age : {animal.age} Years</p>
                      <div className="description">
                        <p className={showPopup ? "expanded" : ""}>
                          Story : {animal.description}
                        </p>
                        {animal.description.length > 10 && (
                          <button
                            className="seemorebut"
                            onClick={() => togglePopup(animal)}
                          >
                            See More
                          </button>
                        )}
                      </div>
                      <div>
                        <br />
                      </div>
                      <h5>{animal.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
              {showPopup && (
                <div className="popup">
                  <div className="popup-content">
                    <button className="close-popup" onClick={togglePopup}>
                      x
                    </button>
                    <br />
                    {popupContent && (
                      <div className="popshiish">
                        <h2>{popupContent.name}</h2>
                        <img
                          className="popup-image"
                          alt={popupContent.name}
                          src={popupContent.image}
                        />
                        <p>
                          Owner : {popupContent.owner}
                          <br />
                          Race: {popupContent.race}
                          <br />
                          Age: {popupContent.age} Years
                          <br />
                          Description: {popupContent.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <h2 className="sectitle">HAMSTERs</h2>
            <div className="anim" id="Hamsters">
              {animals.map((animal, index) => {
                if (animal.type === "hamster" && index < 10) {
                  return (
                    <div className="animal" key={animal.id}>
                      <h2>{animal.name}</h2>
                      <img
                        className="animalimg"
                        alt={animal.name}
                        src={animal.image}
                      />
                      <p>Owner : {animal.owner}</p>
                      <p>Race : {animal.race}</p>
                      <p>Age : {animal.age} Years</p>
                      <div className="description">
                        <p className={showPopup ? "expanded" : ""}>
                          Story : {animal.description}
                        </p>
                        {animal.description.length > 10 && (
                          <button
                            className="seemorebut"
                            onClick={() => togglePopup(animal)}
                          >
                            See More
                          </button>
                        )}
                      </div>
                      <div>
                        <br />
                      </div>
                      <h5>{animal.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
              {showPopup && (
                <div className="popup">
                  <div className="popup-content">
                    <button className="close-popup" onClick={togglePopup}>
                      x
                    </button>
                    <br />
                    {popupContent && (
                      <div className="popshiish">
                        <h2>{popupContent.name}</h2>
                        <img
                          className="popup-image"
                          alt={popupContent.name}
                          src={popupContent.image}
                        />
                        <p>
                          Owner : {popupContent.owner}
                          <br />
                          Race: {popupContent.race}
                          <br />
                          Age: {popupContent.age} Years
                          <br />
                          Description: {popupContent.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Animals;
