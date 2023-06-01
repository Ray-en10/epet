import React, { useState } from "react";
import "../Add/add.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar";

function Addform() {
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [race, setRace] = useState("");
  const [age, setAge] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !owner ||
      !email ||
      !phone ||
      !name ||
      !type ||
      !race ||
      !age ||
      !color ||
      !description ||
      !image
    ) {
      window.alert("All fields are required");
      return;
    }
    fetch("http://localhost/php-react/Project/Add/formadd.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        owner,
        email,
        phone,
        name,
        type,
        race,
        age,
        color,
        description,
        image,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success("your animal has been add it");
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
      <div className="containerfor" id="form2" onSubmit={handleSubmit}>
        <form id="contact">
          <h3>Here you can your animal for adoption</h3>
          <h4>Fill this form with your personnel information</h4>
          <fieldset>
            <input
              className="feedback-input"
              placeholder="Your Name"
              type="text"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <input
              className="feedback-input"
              placeholder="Your Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <input
              className="feedback-input"
              placeholder="Your Phone number"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </fieldset>
          <h4>Fill this form with your animal information</h4>
          <fieldset>
            <input
              className="feedback-input"
              placeholder="Your Pet Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <label>
              Choose an animal:
              <select onChange={(e) => setType(e.target.value)}>
                <option value="">Select an animal</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="pig">Pig</option>
                <option value="monkeys">Monkeys</option>
                <option value="hamsters">Hamsters</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <input
              className="feedback-input"
              placeholder="Race"
              type="text"
              value={race}
              onChange={(e) => setRace(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <input
              className="feedback-input"
              placeholder="Age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <input
              className="feedback-input"
              placeholder="Your Pet Color"
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <input
              className="feedback-input"
              placeholder="Write his story"
              type="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <input
              className="feedback-input"
              placeholder="Image"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <button
              className="subbut"
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Addform;
