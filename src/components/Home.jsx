import React, { useEffect, useRef, useState } from "react";
import { _deleteEmployee, _getAllEmployees } from "../network/employee";
import Employee from "./Employee";
import { createSearchParams, useNavigate } from "react-router-dom";
import "./style.css";

const Home = () => {
  const [allEmployee, setAllEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadAllEmployee();
  }, []);

  const loadAllEmployee = () => {
    _getAllEmployees()
      .then((res) => {
        setAllEmployee(res.data.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const editEmployee = (employeeId) => {
    navigate({
      pathname: "/employee",
      search: createSearchParams({
        id: employeeId,
      }).toString(),
    });
  };

  const deleteEmployee = (employeeId) => {
    _deleteEmployee(employeeId)
      .then((res) => {
        loadAllEmployee();
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const addEmployee = () => {
    navigate("/employee");
  };

  return (
    <>
      .
      <button className="add-employee-btn" onClick={() => addEmployee()}>
        Add New Employee
      </button>
      <h3>Employees Data</h3>
      <hr></hr>
      <div className="employee-data-con">
        {allEmployee.map((employee) => (
          <>
            <div className="employee-details-con">
              <h2>{employee?.name}</h2>
              <button onClick={() => editEmployee(employee._id)}>Edit</button>
              <button onClick={() => deleteEmployee(employee._id)}>
                Delete
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
