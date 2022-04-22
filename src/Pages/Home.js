import React from "react";
import CTwo from "../Components/CTwo";
import Prospects from "../Components/Prospects";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="row m-5">
        <h3 className="col-sm-8"> Add a new User!!!</h3>
        <div className="col-sm-4">
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/form");
            }}
          >
            Add
          </button>
        </div>
      </div> 
        <div  ><Prospects /></div>
        <div  >  <CTwo /></div>
    </div>
  );
};
export default Home;
