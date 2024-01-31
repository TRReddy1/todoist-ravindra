import React, { useState } from "react";
import { Flex, Typography, Button, notification } from "antd";
import TaskPopover from "./TaskPopover";
import EditTask from "./EditTask";
import { FiEdit3 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { taskCompleted } from "./features/tasksSlice";
import { changeTaskStatus } from "../api";

const Task = ({ task }) => {
  const [changeIcon, setChangeIcon] = useState(false);
  const [editing, setEditing] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const [api, context] = notification.useNotification();
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setShowMore(false);
  };

  const openNotification = (placement) => {
    api.info({
      message: ` Task Completed`,
      placement,
    });
  };

  const handleStatus = () => {
    changeTaskStatus(task.id).then((res) => dispatch(taskCompleted(task.id)));
    openNotification("bottomLeft");
  };

  return (
    <div
      style={{
        borderBottom: "0.1px solid",
        padding: "0.5rem",
      }}
      onMouseOver={() => setShowMore(true)}
      onMouseLeave={() => setShowMore(false)}
    >
      <Flex align="center" justify="space-between">
        {editing ? null : (
          <Flex>
            {context}
            <div
              style={{
                border: "1px solid",
                borderRadius: "50%",
                height: "1rem",
                width: "1rem",
                textAlign: "center",
                marginRight: "1rem",
                cursor: "pointer",
              }}
              onMouseOver={() => setChangeIcon(true)}
              onMouseOut={() => setChangeIcon(false)}
              onClick={handleStatus}
            >
              {changeIcon ? <>&#x2713;</> : ""}
            </div>
            <div style={{ marginTop: "-0.3rem" }}>
              <Typography.Text>{task.content}</Typography.Text>
              {task.description && (
                <Typography.Paragraph
                  style={{ fontSize: "0.8rem", margin: "0", padding: "0" }}
                >
                  {task.description}
                </Typography.Paragraph>
              )}
            </div>
          </Flex>
        )}
        {editing ? (
          <EditTask
            onCancel={handleCancelEdit}
            task={task}
            showBox={editing}
            setShowBox={setEditing}
          />
        ) : (
          <>
            <Flex
              style={{
                padding: "0",
                margin: "-0.5rem",
                marginRight: "1rem",
                display: showMore ? "block" : "none",
              }}
            >
              <Button size="small" type="text" onClick={handleEditClick}>
                <FiEdit3 />
              </Button>
              <TaskPopover task={task} />
            </Flex>
          </>
        )}
      </Flex>
    </div>
  );
};

export default Task;
