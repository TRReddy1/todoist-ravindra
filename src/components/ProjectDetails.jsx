import { Breadcrumb, Button, Flex, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTasks } from "../api";
import { fetchedTasks } from "./features/tasksSlice";
import Task from "./Task";
import AddTask from "./AddTask";

const ProjectDetails = () => {
  const { id } = useParams();
  //   name = name.replace("-", " ").trim();
  //   console.log(name && id);

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    getTasks().then((res) => dispatch(fetchedTasks({ id, res })));
  }, []);

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
          <Breadcrumb
            items={[
              {
                href: "/",
                title: "My projects",
              },
            ]}
          />
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
            <Typography.Title level={2}>{id}</Typography.Title>
            {tasks.map((task) => {
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
