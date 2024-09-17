import axios from "axios";
import { BASE_URL } from "./constant-variables";

const token = localStorage.getItem("access_token");

const fetchData = async (path) => {
  const response = await axios.get(path);
  return response.data;
};

const putData = async (path, data) => {
  await axios.put(path, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

const postData = async (path, data) => {
  await axios.post(path, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

const deleteData = async (path) => {
  await axios.delete(path, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

////////////////////////////////////////////////////////////////

// Fetch all groups
const fetchGroups = async () => {
  return fetchData(`${BASE_URL}/api/groups`);
};

// Fetch a single group by ID
const fetchGroup = async (groupId) => {
  return fetchData(`${BASE_URL}/api/groups/${groupId}`);
};

// Fetch a group of links by group_id
const fetchGroupedLink = async (groupId) => {
  return fetchData(`${BASE_URL}/api/groups/${groupId}/links`);
};

const createGroup = async (groupData) => {
  return postData(`${BASE_URL}/api/groups`, groupData);
};

const updateGroup = async (groupId, groupData) => {
  await putData(`${BASE_URL}/api/groups/${groupId}`, groupData);
};

const deleteGroup = async (groupId, setHasError) => {
  try {
    return deleteData(`${BASE_URL}/api/groups/${groupId}`);
  } catch {
    setHasError(true);
  }
};

////////////////////////////////////////////////////////////////

// Fetch a single link by ID
const fetchLink = async (linkId) => {
  return fetchData(`${BASE_URL}/api/links/${linkId}`);
};

const createLink = async (linkData) => {
  return postData(`${BASE_URL}/api/links`, linkData);
};

const updateLink = async (linkId, linkData) => {
  return putData(`${BASE_URL}/api/links/${linkId}`, linkData);
};

const deleteLink = async (linkId, setHasError) => {
  try {
    return deleteData(`${BASE_URL}/api/links/${linkId}`);
  } catch {
    setHasError(true);
  }
};

////////////////////////////////////////////////////////////////

// Fetch all albums
const fetchAlbums = async () => {
  return fetchData(`${BASE_URL}/api/albums`);
};

// Fetch a single album by ID
const fetchAlbum = async (albumId) => {
  return fetchData(`${BASE_URL}/api/albums/${albumId}`);
};

const createAlbum = async (albumData) => {
  return postData(`${BASE_URL}/api/albums`, albumData);
};

const updateAlbum = async (albumId, albumData) => {
  return putData(`${BASE_URL}/api/albums/${albumId}`, albumData);
};

const deleteAlbum = async (albumId, setHasError) => {
  try {
    return deleteData(`${BASE_URL}/api/albums/${albumId}`);
  } catch {
    setHasError(true);
  }
};

////////////////////////////////////////////////////////////////

// Fetch upcoming events
const fetchUpcomingEvents = async () => {
  return fetchData(`${BASE_URL}/api/events/upcoming`);
};

// Fetch past events
const fetchPastEvents = async () => {
  return fetchData(`${BASE_URL}/api/events/past`);
};

// Fetch all events
const fetchEvents = async () => {
  return fetchData(`${BASE_URL}/api/events`);
};

// Fetch a single event by ID
const fetchEvent = async (eventId) => {
  return await fetchData(`${BASE_URL}/api/events/${eventId}`);
};

const updateEvent = async (eventId, eventData) => {
  return putData(`${BASE_URL}/api/events/${eventId}`, eventData);
};

const createEvent = async (eventData) => {
  return postData(`${BASE_URL}/api/events/`, eventData);
};

const deleteEvent = async (eventId, setHasError) => {
  try {
    return deleteData(`${BASE_URL}/api/events/${eventId}`);
  } catch {
    setHasError(true);
  }
};

////////////////////////////////////////////////////////////////

const login = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/api/admin/login`, credentials);
  return response.data
};

const logout = async () => {
  await axios.post(`${BASE_URL}/api/admin/logout`);
};

export {
  fetchGroups,
  fetchGroup,
  fetchGroupedLink,
  createGroup,
  updateGroup,
  deleteGroup,
  fetchLink,
  createLink,
  updateLink,
  deleteLink,
  fetchAlbums,
  fetchAlbum,
  createAlbum,
  updateAlbum,
  deleteAlbum,
  fetchUpcomingEvents,
  fetchPastEvents,
  fetchEvents,
  fetchEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  login,
  logout,
};
