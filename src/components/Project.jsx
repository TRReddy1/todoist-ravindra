import { Button, Flex } from "antd";
import React, { useState } from "react";
import ProjectPopover from "./ProjectPopover";
import { useNavigate } from "react-router-dom";

const Project = ({ project }) => {
  const [isDispaly, setIsDisplay] = useState(false);

  const navigate = useNavigate();

  const handleOver = () => {
    setIsDisplay(true);
  };
  const handleLeave = () => {
    setIsDisplay(false);
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      style={{
        backgroundColor: isDispaly ? "#faf8f7" : "white",
      }}
      onMouseOver={handleOver}
      onMouseLeave={handleLeave}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // border: "solid",
          width: "96%",
          padding: "0.5rem",
          cursor: "pointer",
        }}
        onClick={() => navigate(`/projects/${project.id}`)}
      >
        # {project.name}
      </div>
      <ProjectPopover project={project} show={isDispaly} />
    </Flex>
  );
};

export default Project;
