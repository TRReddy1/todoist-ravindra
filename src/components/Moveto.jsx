import React from "react";
import { Dropdown, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { IoListOutline } from "react-icons/io5";
import { addTask, deleteTask } from "../api";
import { taskDeleted } from "./features/tasksSlice";

const Moveto = ({ task }) => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const items = projects.map((p) => {
    return {
      label: p.name,
      key: p.id,
    };
  });

  const onClick = (e) => {
    if (task.project_id !== e.key) {
      deleteTask(task.id).then((res) => {
        dispatch(taskDeleted(task.id));
        addTask(e.key, task.content, task.description);
      });
    }
  };

  return (
    <div style={{ width: "13rem" }}>
      <Dropdown
        menu={{
          items,
          onClick,
          selectable: true,
        }}
        trigger={"click"}
        placement="bottom"
      >
        <Button type="text" block style={{ textAlign: "left" }}>
          <IoListOutline />
          <span style={{ marginLeft: "1rem" }}>Move to...</span>
        </Button>
      </Dropdown>
    </div>
  );
};

export default Moveto;
