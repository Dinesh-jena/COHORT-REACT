import React, { useState } from "react";

const App = () => {
  const [Dinesh, setDinesh] = useState([
    { name: "Dinesh Jena", age: 20 },
    { name: "Dinesh Jena", age: 20 },
    { name: "Dinesh Jena", age: 20 },
  ]);

  function SubmitHandler() {
    let copytodo = [...Dinesh];
    copytodo.pop();
    setDinesh(copytodo);
  }

  return (
    <div>
      {Dinesh.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.age}</p>
          </div>
        );
      })}

      <button onClick={SubmitHandler}>Delete</button>
      <br />
      <br />
      <br />
      <input type="text" />
      <br />
      <br />
      <button>Add Todo</button>
    </div>
  );
};

export default App;
