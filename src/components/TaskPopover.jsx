import React, { useState } from "react";
import { Button, Popover, Space } from "antd";
import { TfiMore } from "react-icons/tfi";
import DeleteTask from "./DeleteTask";
import Moveto from "./Moveto";

const TaskPopover = ({ task }) => {
  const content = (
    <Space direction="vertical" align="center">
      <Moveto task={task} />
      <DeleteTask task={task} />
    </Space>
  );

  return (
    <Space wrap>
      <Popover content={content} trigger="click" placement="bottomLeft">
        <Button type="text" size="small">
          <TfiMore />
        </Button>
      </Popover>
    </Space>
  );
};

export default TaskPopover;
