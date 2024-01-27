import React from "react";
import { Button, Popover, Space } from "antd";
import { TfiMore } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import AddProject from "./AddProject";
import DeleteProject from "./DeleteProject";
import EditProject from "./EditProject";

const ProjectPopover = ({ project, show }) => {
  const content = (
    <div
      style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
    >
      <EditProject project={project} />
      <Button type="text" block>
        <CiHeart />
        Add to Favorites
      </Button>
      <DeleteProject projectId={project.id} />
    </div>
  );

  return (
    <Space wrap>
      <Popover content={content} trigger="click">
        <TfiMore style={{ display: show ? "block" : "none" }} />
      </Popover>
    </Space>
  );
};
export default ProjectPopover;
