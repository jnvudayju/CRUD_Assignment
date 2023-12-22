import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./style.css";
import {
  _createEmployee,
  _getEmployee,
  _updateEmployee,
} from "../network/employee";

const Employee = () => {
  const [employeeForm, setEmployeeForm] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    salary: "",
  });
  const [searcParams] = useSearchParams();
  const navigate = useNavigate();
  const [mode, setMode] = useState("save");

  useEffect(() => {
    const id = searcParams.get("id");

    if (id) {
      loadEmployeeData(id);
      setMode("update");
    }
  }, []);

  const loadEmployeeData = (employeeId) => {
    _getEmployee(employeeId)
      .then((res) => {
        console.log({ res });
        setEmployeeForm(res.data.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeForm({ ...employeeForm, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (mode === "save") {
      _createEmployee(employeeForm)
        .then((res) => {
          setEmployeeForm({
            name: "",
            email: "",
            phone: "",
            designation: "",
            salary: "",
          });
          navigate("/home");
        })
        .catch((err) => {
          console.log({ err });
        });
    } else {
      _updateEmployee(searcParams.get("id"), employeeForm)
        .then((res) => {
          setEmployeeForm({
            name: "",
            email: "",
            phone: "",
            designation: "",
            salary: "",
          });
          navigate("/home");
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  };

  return (
    <>
      <div className="form-con">
        <h2>Employee Form</h2>
        <form onSubmit={handleFormSubmit} className="employee-form">
          <div className="input-con">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={employeeForm.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-con">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={employeeForm.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-con">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={employeeForm.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-con">
            <label>Designation:</label>
            <input
              type="text"
              name="designation"
              value={employeeForm.designation}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-con">
            <label>Salary:</label>
            <input
              type="text"
              name="salary"
              value={employeeForm.salary}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button type="submit">{mode.toUpperCase()}</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Employee;
