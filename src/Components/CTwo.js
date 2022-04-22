import React from "react";
import { connect } from "react-redux";
import dataNotFound from "../Assests/Images/noData.jpg";
import { useNavigate } from "react-router-dom";
import { deleteUserFromC2 } from "../Redux/Actions/prospectsAction";

const CTwo = ({ finalDetails, deleteTheUser }) => {
  const navigate = useNavigate();
  const editUser = (id) => {
    navigate(`/editc2/${id}`);
  };
  return (
    <div>
      <h2 className="">C-2</h2>
      <div>
        {finalDetails.length ? (
          <table className="table table-primary table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Dob</th>
                <th scope="col">Country</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {finalDetails &&
                finalDetails.map((el, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{el.name}</td>
                      <td>{el.dob}</td>
                      <td>{el.country}</td>
                      <td>{el.status === true ? "active" : "inactive"}</td>
                      <td>
                        <button
                          className="btn btn-primary me-2"
                          onClick={() => {
                            editUser(el.id);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteTheUser(el.id);
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
        ) : (
          <div className="image">
            <img src={dataNotFound} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    finalDetails: state.prospectsReducer.secondState,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTheUser: (id) => dispatch(deleteUserFromC2(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CTwo);
