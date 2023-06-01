import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Product.css";

function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost/php-react/Project/Aff/affprod.php")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, []);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log("id to be deleted:", id);
      fetch("http://localhost/php-react/Project/Delete/delete.php", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
        .then((res) => {
          console.log("Response from server:", res);
          return res.json();
        })
        .then((data) => {
          console.log("Data from server:", data);
          if (data.message === "Record deleted successfully") {
            toast.success("Product has been deleted", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setProduct(product.filter((product) => product.id !== id));
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      <Navbar />
      <section>
        <div className="pageadd">
          <h1 className="tabtitle">Here is All the Products</h1>
          <div className="tab">
            <table className="table table-striped table-class">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Categorie</th>
                  <th>Imageurl</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {product.map((products) => (
                  <tr key={products.id}>
                    <td>{products.name}</td>
                    <td
                      style={{
                        width: "500px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "500px",
                      }}
                    >
                      {products.description}
                    </td>
                    <td>{products.categorie}</td>
                    <td
                      style={{
                        width: "80px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "100px",
                      }}
                    >
                      {products.image}
                    </td>
                    <td>{products.price}</td>
                    <td>
                      <Link
                        className="lin4"
                        onClick={() => handleDelete(products.id)}
                      >
                        <FontAwesomeIcon className="iconcol2" icon={faTrash}size="2x" color="red"/>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>

              <Link className="lin2" to="/Addprod"><br/>
                <button className="btn3" >ADD</button>
              </Link>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
