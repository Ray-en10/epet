import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Sign.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Navbar";
import {  useSignIn } from "react-auth-kit";


function Sign() {
  //sing up
  
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  //console.log(data)
  const submitForm = (e) => {
    e.preventDefault();
    if (!(data.password && data.password.length >= 4))
      alert("Password is either null or its length is less than 4");
    if (
      data.name.length === 0 ||
      data.email.length === 0 ||
      (data.password && data.password.length >= 4)
    ) {
      const choice = document.querySelector('input[name="choice"]:checked');
      if (!choice) {
        alert("Please select an option");
        return;
      }
  
      const sendData = {
        name: data.name,
        email: data.email,
        password: data.password,
        choice: choice.value // Get the selected radio button value
      };
      console.log(sendData);
  
      // Determine the appropriate endpoint based on the radio button value
      const endpoint =
        sendData.choice === "Adopting"
          ? "http://localhost/php-react/Project/insert.php" // Endpoint for the first database
          : "http://localhost/php-react/Project/insert2.php"; // Endpoint for the other database
  
      axios
        .post(endpoint, sendData)
        .then((result) => {
          if (result.data.status === "invalid") {
            alert("Invalid User");
          } else {
            document.getElementById("signIn").click();
            toast.success("Account has been successfully created!", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        });
    }
  };
  

  //sign in
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (name === "admin" && password === "admin12") {
      toast.success("Welcome " + name);
      setTimeout(function () {
        navigate("/Adminpage");
        window.location.reload();
      }, 2000);
    } else if (name === "admin" && password !== "admin12") {
      toast.error("ADMIN PASSWORD IS WRONG", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      fetch("http://localhost/php-react/Project/compare.php", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          password: password,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((response) => {
          if (response.userExists) {
            if (response.passwordMatch) {
              toast.success("Welcome " + name);
              setTimeout(function () {
                signIn({ token: response.data.token, tokenType: "Bearer", authState: { name: name } });
                navigate("/");
                window.location.reload();
              }, 2000);
              console.log(response);
            } else {
              toast.error("Password incorrect");
              console.log(response);
            }
          } else {
            toast.error("User does not exist");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error:", error.message);
        });
    }
  };
  
  //slide effect
  useEffect(() => {
    const signInBtn = document.getElementById("signIn");
    const signUpBtn = document.getElementById("signUp");
    const fistForm = document.getElementById("form1");
    const secondForm = document.getElementById("form2");
    const container = document.querySelector(".container");

    signInBtn.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });

    signUpBtn.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    fistForm.addEventListener("submit", (e) => e.preventDefault());
    secondForm.addEventListener("submit", (e) => e.preventDefault());
  }, []);
  return (
    <div>
      <Navbar />
      <div className="formsign">
        <ToastContainer />
        <div className="container right-panel-active">
          <div className="container__form container--signup">
            <form onSubmit={submitForm} className="formsignup_in" id="form1">
              <h2 className="form__title">Create Account</h2>
              <input
                type="text"
                placeholder="User"
                className="input"
                name="name"
                onChange={handleChange}
                value={data.name}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="input"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="input"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
              />
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    className="input"
                    name="choice"
                    value="Adopting"
                    required
                  />
                  Adopting 
                </label>
                <label>
                  <input
                    type="radio"
                    className="input"
                    name="choice"
                    value="Donate"
                    required
                  />
                  Donate
                </label>
              </div><br/>
              <button className="btn">Sign Up</button>
            </form>
          </div>

          <div className="container__form container--signin">
            <form onSubmit={handleSubmit} className="formsignup_in" id="form2">
              <h2 className="form__title">Sign In</h2>
              <input
                type="text"
                placeholder="User name"
                className="input"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              
              <button className="btn">Sign In</button>
            </form>
          </div>

          <div className="container__overlay">
            <div className="overlay">
              <div className="overlay__panel overlay--left">
                <button className="btn" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay__panel overlay--right">
                <button className="btn" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sign;
