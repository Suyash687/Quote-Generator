import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");
    
  const fetchData = () => {
  
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
        console.log("error occured maybe net gaya");
      });
  };
  useEffect(() => {
    fetchData();
  });

 
  return (
    <>
      <div className="container">
        <div className="card">
          <h3>{advice}</h3>
          <button onClick={fetchData}>Get quote</button>
          
        </div>
        
      </div>
    </>
  );
};

export default App;
