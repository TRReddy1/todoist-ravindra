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
    <Space direction="vertical" align="center">
      <EditProject project={project} />
      <FavoriteProject
        project={project}
        setClicked={setPopoverVisible}
        onHidePopover={handleHidePopover}
      />
      <DeleteProject project={project} />
    </Space>
  );

  return (
    <Space wrap>
      <Popover
        content={content}
        trigger="click"
        placement="bottomRight"
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
