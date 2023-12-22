import axios from "axios";
import { SERVER_BASE_URL } from "../config/config";

export const _createEmployee = async (payload) => {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await axios({
      method: "post",
      url: `${SERVER_BASE_URL}/employee`,
      data: payload,
      headers,
    });
    return response;
  } catch (err) {
    console.log({ err });
  }
};

export const _getAllEmployees = async () => {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await axios({
      method: "get",
      url: `${SERVER_BASE_URL}/employee/all`,
      headers,
    });
    return response;
  } catch (err) {
    console.log({ err });
  }
};

export const _getEmployee = async (id) => {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await axios({
      method: "get",
      url: `${SERVER_BASE_URL}/employee/${id}`,
      headers,
    });
    return response;
  } catch (err) {
    console.log({ err });
  }
};

export const _updateEmployee = async (id, payload) => {
  const headers = {
    "Content-Type": "application/json",
  };

  console.log({ payload });
  try {
    const response = await axios({
      method: "put",
      url: `${SERVER_BASE_URL}/employee/${id}`,
      headers,
      data: payload,
    });
    return response;
  } catch (err) {
    console.log({ err });
  }
};

export const _deleteEmployee = async (id) => {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await axios({
      method: "delete",
      url: `${SERVER_BASE_URL}/employee/${id}`,
      headers,
    });
    return response;
  } catch (err) {
    console.log({ err });
  }
};
