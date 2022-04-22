import React from "react";
import pageNotFound from "../Assests/Images/PageNotFound.jpg";

const PageNotFound = () => {
  return (
    <div>
      <h2 className="display-4 text-center mt-5">Page Not Found!!!!</h2>
      <div className="ms-5 rounded">
          <img src={pageNotFound} alt="" width="95%"/>
      </div>
    </div>
  );
};

export default PageNotFound;
