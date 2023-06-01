import React, { useState } from "react";
import Navbar from "../Navbar";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "../Add/add.css";

function Addprod() {
  const AddaccUrl = "http://localhost/php-react/Project/Admin/addprod.php";

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categorie, setCategorie] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !categorie || !image || !price) {
      window.alert("All fields are required");
      return;
    }
    fetch(AddaccUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, categorie, image, price }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success("Product has been added");
        setTimeout(function () {
          window.location.reload();
        }, 2500);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="conatineradd">
      <form className="formProdadd" id="form2" onSubmit={handleSubmit}>
        <h2 className="form__title">ADD Product</h2>
        <input
          type="text"
          placeholder="Name"
          className="input"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          className="input"
          name="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="categorie"
          className="input"
          name="categorie"
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          className="input"
          name="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          className="input"
          name="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        /><br/>
        <button className="btn3" type="submit">
          ADD
        </button>
        <Link className="buttop" to="/Product">
        <button className="btn3">Back to the Product list</button>
      </Link>
      </form>
      
      </div>
    </div>
  );
}

export default Addprod;
