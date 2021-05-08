import React from "react";
import { connect } from "react-redux";
import { addUser } from "../redux/actions/actions";

const ViewUserAge = (props) => {
  return (
    <>
      <div className="container">
        <ul>
          {props.users.map((user, index) => (
            <li key={index} className="d-inline">
              <span className="name-span">{user.name}</span>
              <span className="age-span">{user.age}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { users: state.age };
};

const mapDispatchToProps = (dispach) => {
  return { addUser: (username) => dispach(addUser(username)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewUserAge);