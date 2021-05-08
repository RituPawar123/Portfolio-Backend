import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addUser, addUserInAge } from "../redux/actions/actions";

const AddUser = (props) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    props.addUser(username);
    props.addUserInAge(username);
    setUsername("");
    event.preventDefault();
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="nameField">Username</label>
            <input
              type="text"
              id="nameField"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <input type="submit" className="btn-submit" value="Add User" />
          </div>
        </form>

        <Link to="/age" className="d-flex">
          <button className="link">Age</button>
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { users: state };
};

const mapDispatchToProps = (dispach) => {
  return {
    addUser: (username) => dispach(addUser(username)),
    addUserInAge: (username) => dispach(addUserInAge(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
