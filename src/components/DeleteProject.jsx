import React, { useState } from "react";
import { Button, Modal } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteProject } from "../api";
import { projectDeleted } from "./features/projectsSlices";

const DeleteProject = ({ projectId }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    deleteProject(projectId).then((res) => {
      if (res === 204) {
        dispatch(projectDeleted(projectId));
      }
    });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="text" onClick={showModal} danger block>
        <RiDeleteBin6Line /> Delete
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
          This will permanently delete project 4 and all its tasks. This cant be
          undone.
        </p>
      </Modal>
    </>
  );
};

export default DeleteProject;
