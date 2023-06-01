import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";


function Usersall() {
    // Define state variables using useState hook
    const [user, setUser] = useState([]);
    const [user2, setUser2] = useState([]);
  
    // Fetch user data from the specified URL using the useEffect hook
    useEffect(() => {
      fetch("http://localhost/php-react/Project/Admin/users.php")
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((error) => console.error(error));
    }, []);
  
    // Fetch user add data from the specified URL using the useEffect hook
    useEffect(() => {
      fetch("http://localhost/php-react/Project/Admin/usersadd.php")
        .then((res) => res.json())
        .then((data) => setUser2(data))
        .catch((error) => console.error(error));
    }, []);
  
    // Render the component JSX
    return (
      <div>
        <Navbar />
        <section>
          <div className="pageprod">
            <div className="alltab">
              <h2 className="tabtitle">Users Accounts</h2> <br />
              <div className="tab">
                <table className="table table-striped table-class">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                {user.map((use) => (
                  <tr key={use.id}>
                    <td>{use.name}</td>
                    <td>{use.email}</td>
                    <td>{use.type}</td>
                  </tr>
                ))}
                {user2.map((use) => (
                  <tr key={use.id}>
                    <td>{use.name}</td>
                    <td>{use.email}</td>
                    <td>{use.type}</td>
                  </tr>
                ))}
              </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Usersall;
  