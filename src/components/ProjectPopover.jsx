import React, { useState } from "react";
import { Button, Popover, Space } from "antd";
import { TfiMore } from "react-icons/tfi";
import AddProject from "./AddProject";
import DeleteProject from "./DeleteProject";
import EditProject from "./EditProject";
import FavoriteProject from "./FavoriteProject";

const ProjectPopover = ({ project, show }) => {
  const [popoverVisible, setPopoverVisible] = useState(true);

  const handleHidePopover = () => {
    setPopoverVisible(false);
  };

  const content = (
    // <div
    //   style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
    // >
    <Space direction="vertical" align="center">
      <EditProject project={project} />
      <FavoriteProject
        project={project}
        setClicked={setPopoverVisible}
        onHidePopover={handleHidePopover}
      />
      <DeleteProject projectId={project.id} />
    </Space>
    // </div>
  );

  return (
    <Space wrap>
      <Popover
        content={content}
        trigger="click"
        // open={popoverVisible}
        // onOpenChange={(open) => setPopoverVisible(open)}
      >
        <TfiMore
          style={{
            display: show ? "block" : "none",
            cursor: "pointer",
            marginRight: "0.3rem",
          }}
        />
      </Popover>
    </Space>
  );
};
export default ProjectPopover;
