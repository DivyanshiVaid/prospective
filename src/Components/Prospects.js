import React,{useState} from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, addUserInC2,clearProspects } from "../Redux/Actions/prospectsAction";

const Prospects = ({ DeleteUser, userData, AddUserInC2,ClearProspects }) => {
  const navigate = useNavigate();
  const editUser = (id) => {
    navigate(`/editprospects/${id}`);
  };

  return (
    <div>
      <h4 className="shadow">Prospects</h4>
      <div>
        <table className="table table-primary table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Dob</th>
              <th scope="col">Country</th>
              <th scope="col">status</th>
              <th scope="col">Actions</th>            
            </tr>
          </thead>
          <tbody>
            {userData &&
              userData.map((el, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{el.name}</td>
                    <td>{el.dob}</td>
                    <td>{el.country}</td>
                    {/* <td><button onClick={(e)=>{}{el.status===true? "active":"inactive"}</button></td> */}
                    {/* <td>{el.status===true? "active":"inactive"}</td> */}
                    <td>
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => {
                          AddUserInC2(el);
                          ClearProspects(el)
                        }}
                      >
                        Add to C2
                      </button>
                      <button
                        className="btn btn-primary me-2"
                        onClick={(e) => {
                          editUser(el.id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          DeleteUser(el.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.prospectsReducer.initialState,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddUserInC2: (data) => dispatch(addUserInC2(data)),
    ClearProspects:(data)=>dispatch(clearProspects(data)),
    DeleteUser: (id) => dispatch(deleteUser(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Prospects);
