import React, { useEffect, useState } from "react";
import { Button, Dropdown, Flex, Input, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../api";
import { taskAdded } from "./features/tasksSlice";

const AddTask = ({ projectId }) => {
  const [showBox, setShowBox] = useState(false);
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState(null);
  const [desc, setDesc] = useState(null);

  const menuItems = projects.map((p) => {
    return <Menu.Item key={p.id}>{p.name}</Menu.Item>;
  });

  const handleClick = () => {
    addTask(projectId, taskName, desc).then((res) => dispatch(taskAdded(res)));
    setTaskName("");
    setDesc("");
  };

  //   console.log(items);
  return (
    <div>
      <Button
        style={{ width: "6rem" }}
        type="text"
        onClick={() => setShowBox(true)}
      >
        + Add Task
      </Button>

      {showBox && (
        <div>
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
          <Flex>
            <Dropdown trigger="click" overlay={<Menu>{menuItems}</Menu>}>
              <Button>projects</Button>
            </Dropdown>
            <div>
              <Button onClick={() => setShowBox(false)}>cancel</Button>
              <Button type="primary" disabled={!taskName} onClick={handleClick}>
                Add task
              </Button>
            </div>
          </Flex>
        </div>
      )}
    </div>
  );
};

export default AddTask;
