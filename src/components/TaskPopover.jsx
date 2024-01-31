import React, { useState } from "react";
import { Button, Popover, Space } from "antd";
import { TfiMore } from "react-icons/tfi";
import DeleteTask from "./DeleteTask";
import Moveto from "./Moveto";

const TaskPopover = ({ task }) => {
  //   const [popoverVisible, setPopoverVisible] = useState(true);

  //   const handleHidePopover = () => {
  //     setPopoverVisible(false);
  //   };

  const content = (
    <Space direction="vertical" align="center">
      {/* <EditProject project={project} />
      <FavoriteProject
        project={project}
        setClicked={setPopoverVisible}
        onHidePopover={handleHidePopover}
      />
      <DeleteProject projectId={project.id} /> */}
      <Moveto task={task} />
      <DeleteTask task={task} />
    </Space>
  );

  return (
    <Space wrap>
      <Popover content={content} trigger="click" placement="bottomLeft">
        <Button type="text" size="small">
          <TfiMore
          //   style={{
          //     display: show ? "block" : "none",
          //     cursor: "pointer",
          //     marginRight: "0.3rem",
          //   }}
          />
        </Button>
      </Popover>
    </Space>
  );
};

export default TaskPopover;
