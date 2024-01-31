import React, { useState } from "react";
import { Button, Modal } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteProject } from "../api";
import { projectDeleted } from "./features/projectsSlices";
import { removedFavorite } from "./features/favoritesSlice";
import { useNavigate } from "react-router-dom";

const DeleteProject = ({ project }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    deleteProject(project.id).then((res) => {
      navigate("/");
      if (res === 204) {
        dispatch(projectDeleted(project.id));
        dispatch(removedFavorite(project));
      }
    });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        type="text"
        onClick={showModal}
        danger
        style={{ width: "13rem", textAlign: "left" }}
      >
        <RiDeleteBin6Line />
        <span style={{ marginLeft: "1rem" }}> Delete</span>
      </Button>
      <Modal
        title="Delete?"
        open={isModalOpen}
        onOk={handleOk}
        okText="delete"
        okType="danger"
        onCancel={handleCancel}
      >
        <p>
          This will permanently delete and all its tasks. This cant be undone.
        </p>
      </Modal>
    </>
  );
};

export default DeleteProject;
