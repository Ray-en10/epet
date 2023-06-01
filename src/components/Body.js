import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Body.css";
import nems from "../assets/nems.png";

function Body() {
  const { hash } = useLocation();
  const [animals, setAnimals] = useState([]);
  const [products, setProducts] = useState([]);
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
  useEffect(() => {
    fetch("http://localhost/php-react/Project/Aff/affprod.php")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="body">
      <div className="page" id="page">
        <div className="sec1img">
          <div className="dark-overlay">
            <h1 className="text">Donate & Adopt a New Friend</h1>
            <p className="text2">Cute Animal</p>
          </div>
          <img
            className="imgpage"
            src="https://tractive.com/blog/wp-content/uploads/2017/10/cats-and-dogs.jpg"
            alt="Main"
          />
        </div>

        <div className="part1">
          <div className="text-container">
            <h1 className="about1">ABOUT</h1>
            <br />
            <div className="line"></div>
            <br />
            <p className="undertitle">
              Our website connects animals with loving homes and donors who
              support animal shelters and rescues.Browse adoptable animals from various organizations and make
              donations to support their care.
              Our goal is to make it easy for more animals to find their forever
              homes and receive the care they need.
              Join us in improving the lives of animals in need!
            </p>
          </div>
          <div className="sec2_img">
            <img className="imgpage2" src={nems} alt="imgpage2" />
          </div>
        </div>
        <div className="part2">
          <h1 className="p2text">Animals</h1>
          <br />
          <div className="line2"></div>
          <br />
          <div className="image-grid">
            <div className="sec2img">
              <div className="dark-overlay">
                <Link to="/Animals" className="seemore">
                  <h1 className="text">CATS</h1>
                </Link>
              </div>
              <img
                className="img-grid-item"
                src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/thumbs/800x531/142774.jpg"
                alt="Main"
              />
            </div>
            <div className="sec2img">
              <div className="dark-overlay">
                <Link to="/Animals" className="seemore">
                  <h1 className="text">DOGS</h1>
                </Link>
              </div>
              <img
                className="img-grid-item"
                src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
                alt="Main"
              />
            </div>
            <div className="sec2img">
              <div className="dark-overlay">
                <Link to="/Animals" className="seemore">
                  <h1 className="text">PIGS</h1>
                </Link>
              </div>
              <img
                className="img-grid-item"
                src="https://www.rd.com/wp-content/uploads/2021/03/GettyImages-586714878.jpg"
                alt="Main"
              />
            </div>
          </div>
          <br />
          <div className="image-grid2">
            <div className="sec2img">
              <div className="dark-overlay">
                <Link to="/Animals" className="seemore">
                  <h1 className="text">MONKEYS</h1>
                </Link>
              </div>
              <img
                className="img-grid-item"
                src="https://wildlifesos.org/wp-content/uploads/2021/12/Monkey-Featured.jpg"
                alt="Main"
              />
            </div>
            <div className="sec2img">
              <div className="dark-overlay">
                <Link to="/Animals" className="seemore">
                  <h1 className="text">BIRDS</h1>
                </Link>
              </div>
              <img
                className="img-grid-item"
                src="https://exoticdirect.co.uk/wp-content/uploads/2023/02/ED-ARTICLE-IMAGES-41.png"
                alt="Main"
              />
            </div>
            <div className="sec2img">
              <div className="dark-overlay">
                <Link to="/Animals" className="seemore">
                  <h1 className="text">HAMSTERS</h1>
                </Link>
              </div>
              <img
                className="img-grid-item"
                src="https://www.humanesociety.org/sites/default/files/2021-06/hamster-540188.jpg"
                alt="Main"
              />
            </div>
          </div>
        </div>
        <div className="part3">
          <h1 className="p2text">NEW ARRIVAL</h1>
          <br />
          <div className="line3"></div>
          <br />
          <div className="image-grid3">
          <div className="anim">
              {animals.map((animal, index) => {
                if (index < 12) {
                  return (
                    <div className="animalaff" key={animal.id}>
                      <h2>{animal.name}</h2>
                      <img
                        className="animalimg"
                        alt={animal.name}
                        src={animal.image}
                      />
                      <p>Owner : {animal.user_name}<br/>
                         Race : {animal.race}<br/>
                         Age : {animal.age} Years</p>
                      <div>
                        <br />
                      </div>
                      <h5>{animal.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
        <div className="part3">
          <h1 className="p3text">OUR PRODUCTS</h1>
          <br />
          <div className="line3"></div>
          <br />
          <div >
          <div className="anim">
              {products.map((product, index) => {
                if (index < 12) {
                  return (
                    <div className="prod2" key={product.id} >
                      <Link to='/Store'className="prodbod" >
                      <h2>{product.name}</h2>
                      <img
                        className="prodimg"
                        alt={product.name}
                        src={product.image}
                      />
                      <p className="prixx bold">Price : {product.price} </p><br/>
                      <div>
                        <br />
                      </div>
                      <h5>{product.Name}</h5>
                      </Link>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
