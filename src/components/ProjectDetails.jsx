import { Breadcrumb, Button, Flex, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProjects, getTasks } from "../api";
import { fetchedTasks } from "./features/tasksSlice";
import Task from "./Task";
import AddTask from "./AddTask";

const ProjectDetails = () => {
  const [projectName, setProjectName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  //   name = name.replace("-", " ").trim();
  //   console.log(name && id);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    getProjects().then((res) =>
      setProjectName(() => res.find((p) => p.id === id).name)
    );
    getTasks().then((res) => dispatch(fetchedTasks({ id, res })));
  }, [id]);

  return (
    <>
      <Flex vertical>
        <Flex
          style={{
            backgroundColor: "white",
            width: "89.5vw",
            padding: "1.5rem",
          }}
          justify="space-between"
        >
          <Breadcrumb style={{ cursor: "pointer" }}>
            <Breadcrumb.Item onClick={() => navigate("/")}>
              My Projects /
            </Breadcrumb.Item>
          </Breadcrumb>
          <div>hello</div>
        </Flex>
        <Content
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Flex vertical style={{ width: "50%" }} gap={16}>
            <Typography.Title level={2}>{projectName}</Typography.Title>
            {tasks &&
              tasks.map((task) => {
                return <Task key={task.id} task={task} />;
              })}
            <AddTask projectId={id} />
          </Flex>
        </Content>
      </Flex>
    </>
  );
};

export default ProjectDetails;
