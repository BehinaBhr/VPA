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

// Fetch a single link by ID
const fetchLink = async (linkId) => {
  return fetchData(`${BASE_URL}/api/links/${linkId}`);
};

const createLink = async (linkData) => {
  await axios.post(`${BASE_URL}/api/links`, linkData);
};

const updateLink = async (linkId, linkData) => {
  await axios.put(`${BASE_URL}/api/links/${linkId}`, linkData);
};

const deleteLink = async (linkId, setHasError) => {
  try {
    await axios.delete(`${BASE_URL}/api/links/${linkId}`);
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
  await axios.post(`${BASE_URL}/api/albums`, albumData);
};

const updateAlbum = async (albumId, albumData) => {
  await axios.put(`${BASE_URL}/api/albums/${albumId}`, albumData);
};

const deleteAlbum = async (albumId, setHasError) => {
  try {
    await axios.delete(`${BASE_URL}/api/albums/${albumId}`);
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
  await axios.put(`${BASE_URL}/api/events/${eventId}`, eventData);
};

const createEvent = async (eventData) => {
  await axios.post(`${BASE_URL}/api/events/`, eventData);
};

const deleteEvent = async (eventId, setHasError) => {
  try {
    await axios.delete(`${BASE_URL}/api/events/${eventId}`);
  } catch {
    setHasError(true);
  }
};

export {
  fetchLinks,
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
};
