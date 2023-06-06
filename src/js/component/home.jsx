import React from "react";
import {useState, useEffect} from "react";


const Home = () => {
	const [counter, setCounter] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const seconds= new Date().getSeconds();
      const changeSeconds = Array.from(String(seconds), Number);

      while (changeSeconds.length < 6) {
        changeSeconds.unshift(0);
      }
      setCounter(changeSeconds);
    }, 1000);
      return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex bg-dark justify-content-center mx-5 mt-5" id="mainCard">
      <i className="far fa-clock fa-lg text-white pt-3"></i>
      {counter.map((num, i) => (
        <div key={i} className="card bg-dark text-white" id="numCards">
          <div className="card-body p-0 d-flex justify-content-center align-items-center">
            {num}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home
