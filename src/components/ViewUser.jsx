import React from "react";
import { connect } from "react-redux";
import { addUser } from "../redux/actions/actions";

const ViewUser = (props) => {
  return (
    <>
      <div className="container">
        <ul>
          {props.users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { users: state.user };
};

const mapDispatchToProps = (dispach) => {
  return { addUser: (username) => dispach(addUser(username)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewUser);