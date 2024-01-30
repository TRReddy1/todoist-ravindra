import axios from "axios";
import { v4 } from "uuid";

const token = "8b2c490f4c4e1646e7aca027222a2168819851d8";

export const getProjects = async () => {
  const res = await axios
    .get("https://api.todoist.com/rest/v2/projects", {
      headers: `Authorization: Bearer ${token}`,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return res;
};

export const addProject = async (name) => {
  const res = await axios
    .post(
      "https://api.todoist.com/rest/v2/projects",
      {
        name: `${name}`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Request-Id": v4(),
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return res;
};

export const editProject = async (id, name) => {
  const res = await axios
    .post(
      `https://api.todoist.com/rest/v2/projects/${id}`,
      {
        name: `${name}`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Request-Id": v4(),
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return res;
};

export const deleteProject = async (id) => {
  const res = await axios
    .delete(`https://api.todoist.com/rest/v2/projects/${id}`, {
      headers: `Authorization: Bearer ${token}`,
    })
    .then((res) => res.status)
    .catch((err) => console.log(err));
  return res;
};

// deleteProject(2327500658);

export const addProjectToFav = async (id, value) => {
  const res = await axios
    .post(
      `https://api.todoist.com/rest/v2/projects/${id}`,
      {
        is_favorite: `${value}`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Request-Id": v4(),
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return res;
};

export const getTasks = async () => {
  const res = await axios
    .get(`https://api.todoist.com/rest/v2/tasks`, {
      headers: `Authorization: Bearer ${token}`,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return res;
};

export const addTask = async (id, name, desc) => {
  const res = await axios
    .post(
      `https://api.todoist.com/rest/v2/tasks`,
      {
        project_id: `${id}`,
        content: `${name}`,
        description: `${desc}`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Request-Id": v4(),
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return res;
};

export const deleteTask = async (id) => {
  const res = await axios
    .delete(`https://api.todoist.com/rest/v2/tasks/${id}`, {
      headers: `Authorization: Bearer ${token}`,
    })
    .then((res) => res.status)
    .catch((err) => console.log(err));
  return res;
};

export const updateTask = async (id, name, desc) => {
  const res = await axios
    .post(
      `https://api.todoist.com/rest/v2/tasks/${id}`,
      {
        content: `${name}`,
        description: `${desc}`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Request-Id": v4(),
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return res;
};

export const changeTaskStatus = async (id) => {
  // console.log(typeof id);
  const res = await axios
    .post(
      `https://api.todoist.com/rest/v2/tasks/${id}/close`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return res;
};
