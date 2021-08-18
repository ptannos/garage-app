import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="menu">
      <Link to="/my-garage">My Garage</Link>
      <p>Store Item</p>
      <p>Find Item</p>
    </div>
  );
};

export default Home;
