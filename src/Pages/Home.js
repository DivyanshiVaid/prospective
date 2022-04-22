import React from "react";
import CTwo from "../Components/CTwo";
import Prospects from "../Components/Prospects";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar p-3 mb-2 rounded header">
        <h3 className=""> Add a new User!!!</h3>
        <div className="">
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              navigate("/form");
            }}
          >
            Add
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="shadow p-3 mb-5 rounded">
            <Prospects />
          </div>
          <hr />
          <div className="shadow p-3 mb-3 rounded3" >
            <CTwo />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
