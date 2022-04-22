import React, { useEffect, useState } from "react";
import { FormGroup, Button, Label, Input } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../Redux/Actions/prospectsAction";
import { connect } from "react-redux";

const EditProspects = ({ EditUser, ProspectsData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(ProspectsData.find((element) => (element.id) === (id))
  );

  useEffect(() => {
      if(ProspectsData.length>0) {
        let resultC2 = ProspectsData.filter(obj => {
          return obj.id === id
        })
        setUser(resultC2[0])
      }
  }, [id])
  const [error, setError] = useState({
    errorName: "",
    errorDob: "",
  });
  const validation = () => {
    let { errorName, errorDob } = error;
    if (!user.name) {
      errorName = "This field is required!";
    }
    if (!user.dob) {
      errorDob = "This field is required!";
    }
    if (!user.country) {
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
      ...user,
      id: user.id,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (validation()) {   
    EditUser(user)
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
            value={user.name}
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
            value={user.dob}
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
            value={user.country}
            onChange={(e) => {
              userDetails(e);
              setError({ ...error, errorName: "" });
            }}
          />
          <Label for="exampleEmail">Country</Label>
        </FormGroup>
        <span style={{ color: "red" }}>{error.errorName}</span>
        <Button type="submit">Update</Button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ProspectsData: state.prospectsReducer.initialState,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    EditUser: (data) => dispatch(editUser(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProspects);
