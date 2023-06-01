import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar';


export default function Adoptf() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch("http://localhost/php-react/Project/Aff/adoptaff.php")
          .then((res) => res.json())
          .then((data) => setAnimals(data))
          .catch((error) => console.error(error));
      }, []);
  return (
    <div>
      <Navbar/>
      <section>
          <div className="pageprod">
            <div className="alltab">
              <h2 className="tabtitle">Here Is All The Requests</h2> <br />
              <div className="tab">
                <table className="table table-striped table-class">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Text</th>
                    </tr>
                  </thead>
                  <tbody>
                {animals.map((animal) => (
                  <tr key={animal.id}>
                    <td>{animal.yourname}</td>
                    <td>{animal.email}</td>
                    <td>{animal.phone}</td>
                    <td>{animal.text}</td>
                  </tr>
                ))}
              </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
