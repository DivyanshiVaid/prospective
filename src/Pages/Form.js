import React from "react";
import { FormGroup, Button, Label, Input } from "reactstrap";

const Form = () => {
  return (
    <div className=" d-flex justify-content-center m-5" >
      <div className="card w-50 p-3 border rounded align-center">
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="Name"
            placeholder="Name"
            type="text"
          />
          <Label for="exampleEmail">Name</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="DoB"
            placeholder="DoB"
            type="date"
          />
          <Label for="exampleEmail">DOB</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="country"
            placeholder="Country"
            type="text"
          />
          <Label for="exampleEmail">Country</Label>
        </FormGroup>{" "}
        {/* <FormGroup floating>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
          />
          <Label for="examplePassword">Password</Label>
        </FormGroup>{" "} */}
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default Form;
