import React, { useState } from "react";
import { Button, Flex, Input, Modal, Switch } from "antd";
import { useDispatch } from "react-redux";
import { addProject } from "../api";
import { projectAdded } from "./features/projectsSlices";

const AddProject = ({ name }) => {
  const [projectName, setprojectName] = useState(null);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    addProject(projectName).then((res) => dispatch(projectAdded(res)));
    setprojectName("");
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        type="text"
        size={name === "+ Add Project" ? "large" : "small"}
        onClick={showModal}
      >
        {name}
      </Button>
      <Modal
        closeIcon={false}
        title="Add Project"
        open={isModalOpen}
        onOk={handleOk}
        okText={"Add"}
        onCancel={handleCancel}
      >
        <Flex vertical gap="small">
          <div>
            <strong>name</strong>
            <Input
              type="text"
              value={projectName}
              onChange={(e) => setprojectName(e.target.value)}
            />
          </div>
          <div>
            <strong>color</strong>
            <Input />
          </div>
          <div>
            <Switch /> Add to Favorites
          </div>
        </Flex>
      </Modal>
    </>
  );
};

export default AddProject;
