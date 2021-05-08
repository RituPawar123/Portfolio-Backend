import React, { useState } from "react";
import { connect } from "react-redux";
import { updateAge } from "../redux/actions/actions";
import { Link } from "react-router-dom";

const UpdateAge = (props) => {
  const [nameIndex, setNameIndex] = useState(0);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setNameIndex(event.target.value);
  };

  const handleSubmit = (event) => {
    props.updateAge(nameIndex, age);
    event.preventDefault();
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <select
              className="select-name"
              value={nameIndex}
              onChange={handleChange}
            >
              {props.users.map((user, index) => (
                <option value={index} key={index}>
                  {user.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              id="ageField"
              value={age}
              onChange={(event) => {
                setAge(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <input type="submit" className="btn-submit" value="Update Age" />
          </div>
        </form>
        <Link to="/user" className="d-flex">
          <button className="link">User</button>
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { users: state.age };
};

const mapDispatchToProps = (dispach) => {
  return { updateAge: (nameIndex, age) => dispach(updateAge(nameIndex, age)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAge);
