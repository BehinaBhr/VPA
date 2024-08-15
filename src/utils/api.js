import axios from "axios";
import { BASE_URL } from "./constant-variables";

const fetchData = async (path) => {
  const response = await axios.get(path);
  return response.data;
};

// Fetch all links grouped by group_name
const fetchLinks = async () => {
  return fetchData(`${BASE_URL}/api/links`);
};

export { fetchLinks };
