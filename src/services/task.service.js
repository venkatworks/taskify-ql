const axios = require('axios');
const API_BASE_URL = "http://localhost:8080/v1";

exports.getAllTasks = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/task`);
  return data;
};

exports.getTaskById = async (id) => {
  const { data } = await axios.get(`${API_BASE_URL}/task/${id}`);
  return data;
};

exports.createTask = async (task) => {
  const { data } = await axios.post(`${API_BASE_URL}/task`, task);
  return data;
};

exports.updateTask = async (_id, updates) => {
  const { data } = await axios.put(`${API_BASE_URL}/task/${_id}`, updates);
  return data;
};

exports.deleteTask = async (id) => {
  const res = await axios.delete(`${API_BASE_URL}/task/${id}`);
  return res.status === 200;
};