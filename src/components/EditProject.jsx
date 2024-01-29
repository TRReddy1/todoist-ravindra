import React, { useState } from "react";
import { Button, Flex, Input, Modal, Switch } from "antd";
import { useDispatch } from "react-redux";
import { FiEdit3 } from "react-icons/fi";
import { editProject } from "../api";
import { projectEdited } from "./features/projectsSlices";

const EditProject = ({ project }) => {
  const [projectName, setprojectName] = useState(project.name);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    editProject(project.id, projectName).then((res) =>
      dispatch(projectEdited({ id: project.id, res: res }))
    );
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* <Button onClick={showModal}>+ Add Project</Button>
       */}
      <Button
        onClick={showModal}
        type="text"
        style={{ width: "13rem", textAlign: "left" }}
      >
        <FiEdit3 />
        <span style={{ marginLeft: "1rem" }}> Edit</span>
      </Button>
      <Modal
        closeIcon={false}
        title="Edit"
        open={isModalOpen}
        onOk={handleOk}
        okText={"save"}
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

export default EditProject;
