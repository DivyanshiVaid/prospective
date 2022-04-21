import React, { useState } from "react";
import { FormGroup, Button, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Redux/Actions/prospectsAction";
import { connect } from "react-redux";

const Form = ({AddUser,Data}) => {
  const navigate = useNavigate();
  const [User, setUser] = useState({
    id: new Date().getTime()+"",
    name: "",
    dob: "",
    country: "",
  });

  const [error, setError] = useState({
    errorName: "",
    errorDob: "",
  });
  const validation = () => {
    let { errorName, errorDob } = error;
    if (!User.name) {
      errorName = "This field is required!";
    }
    if (!User.dob) {
      errorDob = "This field is required!";
    }
    if (!User.country) {
      errorName = "This field is required!";
    }
    if (errorName || errorDob) {
      setError({ errorName, errorDob });
      return false;
    }
    return true;
  };

  // id:new Date().getTime()+"" id:Data.length+1
  const onInputChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (validation()) {
      User.status=false;
      AddUser(User)
      navigate("/");
    }
  };
  return (
    <div className=" d-flex justify-content-center m-5">
      <form
        className="card w-50 p-3 border rounded align-center"
        onSubmit={handleSubmit}
      >
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="name"
            value={User.name}
            placeholder="Name"
            type="text"
            onChange={(e) => {
              onInputChange(e);
              setError({ ...error, errorName: "" });
            }}
          />
          <Label for="exampleEmail">Name</Label>
        </FormGroup>
        <span style={{ color: "red" }}>{error.errorName}</span>
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="dob"
            placeholder="DoB"
            type="text"
            value={User.dob}
            onChange={(e) => {
              onInputChange(e);
              setError({ ...error, errorDob: "" });
            }}
          />
          <Label for="exampleEmail">DOB</Label>
        </FormGroup>
        <span style={{ color: "red" }}>{error.errorDob}</span>
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="country"
            placeholder="Country"
            type="text"
            value={User.country}
            onChange={(e) => {
              onInputChange(e);
              setError({ ...error, errorName: "" });
            }}
          />
          <Label for="exampleEmail">Country</Label>
        </FormGroup>
        <span style={{ color: "red" }}>{error.errorName}</span>
        <Button type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    Data:state.prospectsReducer.initialState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    AddUser: (data) => dispatch(addUser(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
