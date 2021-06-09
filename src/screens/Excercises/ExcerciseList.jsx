import React from "react";

export default function Exercises() {
  const petsData = {
    dogs: [
      {
        name: "Sr. Peabody",
        age: "5",
      },
      {
        name: "Solovino",
        age: "10",
      },
    ],
    cats: [
      {
        name: "Misifu",
        age: "1",
      },
      {
        name: "Nefermishi",
        age: "5",
      },
    ],
  };

  const buildLIPets = (pet) => (
    <>
      <div className="card-header">{pet[0]}</div>
      <ul className="list-group list-group-flush">
        {pet[1].map(({ name, age }, i) => (
          <li key={i} className="list-group-item">
            Name : {name} , Age : {age}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            {Object.entries(petsData).map(buildLIPets)}
          </div>
        </div>
      </div>
    </div>
  );
}
