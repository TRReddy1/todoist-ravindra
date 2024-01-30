import React, { useState } from "react";
import { Button, Dropdown, Flex, Input, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit3 } from "react-icons/fi";
import { updateTask } from "../api";
import { taskUpdated } from "./features/tasksSlice";

const EditTask = ({ task, showBox, setShowBox }) => {
  // const [showBox, setShowBox] = useState(false);
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState(task.content);
  const [desc, setDesc] = useState(task.description ? task.description : "");

  const menuItems = projects.map((p) => {
    return <Menu.Item key={p.id}>{p.name}</Menu.Item>;
  });

  const handleClick = () => {
    updateTask(task.id, taskName, desc).then((res) =>
      dispatch(taskUpdated({ id: task.id, res: res }))
    );
    setShowBox(false);
    setTaskName("");
    setDesc("");
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Button
        size="small"
        type="text"
        // onClick={() => setShowBox(true)}
        style={{ display: showBox ? "none" : "block" }}
      >
        <FiEdit3 />
      </Button>

      {showBox && (
        <Flex
          vertical
          gap={"0.5rem"}
          style={{
            border: " 1px solid grey",
            borderRadius: "1rem",
            padding: "1rem",
          }}
        >
          <Input
            variant="borderless"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <Input
            variant="borderless"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <hr />
          <Flex justify="space-between">
            <Dropdown trigger="click" overlay={<Menu>{menuItems}</Menu>}>
              <Button>projects</Button>
            </Dropdown>
            <div>
              <Button
                onClick={() => setShowBox(false)}
                style={{ marginRight: "1rem" }}
              >
                cancel
              </Button>
              <Button type="primary" disabled={!taskName} onClick={handleClick}>
                save
              </Button>
            </div>
          </Flex>
        </Flex>
      )}
    </div>
  );
};

export default EditTask;
