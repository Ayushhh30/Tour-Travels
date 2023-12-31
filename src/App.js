import React, { useState } from "react";
import Tour from "./components/Tour";
import data from "./data.js";


const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btnWhite" onClick={() => setTours(data)}>
          Refresh 
        </button>
      </div>
    );
  }
  
  return (
    <div className="app">
      <Tour tours={tours} removeTours={removeTour}></Tour>
    </div>
  )
};

export default App;
