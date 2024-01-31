import React, { useState } from "react";
import { Button, Dropdown, Flex, Input, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit3 } from "react-icons/fi";
import { updateTask } from "../api";
import { taskUpdated } from "./features/tasksSlice";
import { FaCaretDown } from "react-icons/fa";
import { addTask, deleteTask } from "../api";
import { taskDeleted } from "./features/tasksSlice";

const EditTask = ({ task, showBox, setShowBox }) => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState(task.content);
  const [desc, setDesc] = useState(task.description ? task.description : "");
  const [selected, setSelected] = useState({ id: null, name: "" });

  const handleClick = () => {
    if (selected.id === null) {
      updateTask(task.id, taskName, desc).then((res) =>
        dispatch(taskUpdated({ id: task.id, res: res }))
      );
      setShowBox(false);
      setTaskName("");
      setDesc("");
    } else {
      deleteTask(task.id).then((res) => {
        dispatch(taskDeleted(task.id));
        addTask(selected.id, taskName, desc);
      });
      setShowBox(false);
      setTaskName("");
      setDesc("");
      setSelected({ id: null, name: "" });
    }
  };

  const items = projects.map((p) => {
    return {
      label: p.name,
      key: p.id,
    };
  });

  const onClick = (e) => {
    const found = projects.find((p) => p.id === e.key);
    setSelected({ id: e.key, name: found.name });
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
            <Dropdown
              menu={{
                items,
                onClick,
                selectable: true,
              }}
              trigger={"click"}
              placement="bottom"
            >
              <Button type="text">
                {selected.name === "" ? "My Projects" : selected.name}
                <FaCaretDown style={{ marginLeft: "1rem" }} />
              </Button>
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
