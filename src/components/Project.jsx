import { Button } from "antd";
import React, { useState } from "react";
import ProjectPopover from "./ProjectPopover";

const Project = ({ project }) => {
  const [isDispaly, setIsDisplay] = useState(false);

  const handleOver = () => {
    setIsDisplay(true);
  };
  const handleLeave = () => {
    setIsDisplay(false);
  };

  return (
    <Button
      type="text"
      block
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      onMouseOver={handleOver}
      onMouseLeave={handleLeave}
    >
      # {project.name}
      <ProjectPopover project={project} show={isDispaly} />
    </Button>
  );
};

export default Project;
