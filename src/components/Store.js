import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Store.css";
import Footer from "./Footer";

function Store() {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const togglePopup = (content) => {
    setShowPopup(!showPopup);
    setPopupContent(content);
  };

  useEffect(() => {
    fetch("http://localhost/php-react/Project/Aff/affprod.php")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <Navbar />
      <section>
        <div className="prodpage">
          <div className="anim">
            {products.map((product, index) => {
              if (index < 10) {
                return (
                  <div className="prod" key={product.id}>
                    <h2>{product.name}</h2>
                    <img
                      className="prodimg"
                      alt={product.name}
                      src={product.image}
                    />
                    <div className="description">
                      <p className={showPopup ? "expanded" : ""}>
                        Story : {product.description}
                      </p>
                      <div className="buttonss">
                      {product.description.length > 10 && (
                        <button
                          className="seemorebut2"
                          onClick={() => togglePopup(product)}
                        >
                          See More
                        </button>
                      )}
                      <button className="seemorebut2">
                        Buy Now
                      </button>
                      </div>
                    </div>
                    <div>
                      <br />
                    </div>
                    <h5>{product.Name}</h5>
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
                        <b class ="bold">Description: </b> {popupContent.description}
                        <br />
                        <b class ="bold"> Price: </b> {popupContent.price}
                        <br />
                        <button className="seemorebut2">
                        Buy Now
                      </button>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Store;
