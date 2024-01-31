import React, { useState } from "react";
import { Button, Flex, Input, Modal, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../api";
import { projectAdded } from "./features/projectsSlices";
import { addedFavorites } from "./features/favoritesSlice";

const AddProject = ({ name }) => {
  const [projectName, setprojectName] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeHandler = (e) => {
    if (e) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (!isFavorite) {
      addProject(projectName, false).then((res) => {
        dispatch(projectAdded(res));
        // dispatch(removedFavorite(res));
      });
      setprojectName("");
      setIsModalOpen(false);
    } else {
      addProject(projectName, true).then((res) => {
        dispatch(projectAdded(res));
        dispatch(addedFavorites(res));
      });
      setprojectName("");
      setIsModalOpen(false);
    }
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
        okType="primary"
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
            <Switch onChange={changeHandler} /> Add to Favorites
          </div>
        </Flex>
      </Modal>
    </>
  );
};

export default AddProject;
