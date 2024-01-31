import React, { useState } from "react";
import { Button, Dropdown, Flex, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../api";
import { fetchedTasks, taskAdded } from "./features/tasksSlice";
import { FaCaretDown } from "react-icons/fa";

const AddTask = ({ projectId }) => {
  const [showBox, setShowBox] = useState(false);
  const projects = useSelector((state) => state.projects);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState(null);
  const [desc, setDesc] = useState("");
  // const [projectName, setProjectName] = useState("");
  const [selected, setSelected] = useState({ id: null, name: "" });

  const items = projects.map((p) => {
    return {
      label: p.name,
      key: p.id,
    };
  });

  const onClick = (e) => {
    const found = projects.find((p) => p.id === e.key);
    // setProjectName(found.name);
    setSelected({ id: e.key, name: found.name });
    // console.log(selected.id && selected.name);
  };

  const handleClick = () => {
    addTask(selected.id ? selected.id : projectId, taskName, desc).then(
      (res) => {
        dispatch(taskAdded(res));
        dispatch(fetchedTasks({ id: projectId, res: tasks }));
      }
    );
    setTaskName("");
    setDesc("");
  };

  return (
    <div>
      <Button
        style={{ width: "6rem", display: showBox ? "none" : "block" }}
        type="text"
        onClick={() => setShowBox(true)}
      >
        + Add Task
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
                Add task
              </Button>
            </div>
          </Flex>
        </Flex>
      )}
    </div>
  );
};

export default AddTask;
