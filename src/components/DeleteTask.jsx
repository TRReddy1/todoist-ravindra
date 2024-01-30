import React, { useState } from "react";
import { Button, Modal } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteTask } from "../api";
import { taskDeleted } from "./features/tasksSlice";

const DeleteTask = ({ task }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    deleteTask(task.id).then((res) => {
      if (res === 204) {
        dispatch(taskDeleted(task.id));
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
          Are you sure you want to delete<strong> {task.content}</strong>
        </p>
      </Modal>
    </>
  );
};

export default DeleteTask;
