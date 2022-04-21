import React, { useEffect, useState } from "react";
import { FormGroup, Button, Label, Input } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../Redux/Actions/prospectsAction";
import { connect } from "react-redux";

const Form = ({ EditUser, ProspectsData,CTwoData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [User, setUser] = useState(
    {
      id: new Date().getTime()+"",
      name: "abc",
      dob: " 01-01-2000",
      country: "India",
      status: false,
    }
  );

  useEffect(()=>{
    console.log("id",id)
    console.log("ProspectsData",ProspectsData)
    console.log("CTwoData",CTwoData)
    if(CTwoData.length>0){

      var result = CTwoData.filter(obj => {
        return obj.id === id
      })
      debugger
      setUser(result[0])
      console.log("result",result)
    }
    else{
      var result = ProspectsData.filter(obj => {
        return obj.id === id
      })
      debugger
      setUser(result[0])
      console.log("result",result)
    }

    // CTwoData?CTwoData:ProspectsData.find((element) => (element.id) === (id))

  },[id])
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
  const userDetails = (e) => {
    setUser({
      ...User,
      id: User.id,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (validation()) {
      EditUser(User);
      navigate("/");
    }
  };
  console.log(User);
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
              userDetails(e);
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
              userDetails(e);
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
              userDetails(e);
              setError({ ...error, errorName: "" });
            }}
          />
          <Label for="exampleEmail">Country</Label>
        </FormGroup>
        <span style={{ color: "red" }}>{error.errorName}</span>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ProspectsData: state.prospectsReducer.initialState,
    CTwoData:state.prospectsReducer.secondState
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    EditUser: (data) => dispatch(editUser(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
