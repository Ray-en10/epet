import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { ToastContainer } from 'react-toastify';


function Animal() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch("http://localhost/php-react/Project/Aff/affall.php")
          .then((res) => res.json())
          .then((data) => setAnimals(data))
          .catch((error) => console.error(error));
      }, []);
  return (
    <div>
      <Navbar/>
      <ToastContainer />
      <section>
          <div className="pageprod">
            <div className="alltab">
              <h2 className="tabtitle">Here Is All The Animals</h2> <br />
              <div className="tab">
                <table className="table table-striped table-class">
                  <thead>
                    <tr>
                      <th>Owner</th>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Race</th>
                      <th>Age</th>
                    </tr>
                  </thead>
                  <tbody>
                {animals.map((animal) => (
                  <tr key={animal.id}>
                    <td>{animal.user_name}</td>
                    <td>{animal.name}</td>
                    <td>{animal.type}</td>
                    <td>{animal.race}</td>
                    <td>{animal.age}</td>
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

export default Animal
