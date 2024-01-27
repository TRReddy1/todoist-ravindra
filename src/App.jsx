import { Button, Flex, Input, Layout, Menu, Space, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { BsLayoutSidebar, BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "./api";
import { fetchedProjects } from "./components/features/projectsSlices";
import Project from "./components/Project";
import AddProject from "./components/AddProject";
import { FaChevronDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [arrowClick, setArrowClick] = useState(false);
  const [favoritesArr, setFavoritesArr] = useState(false);

  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    getProjects().then((res) => dispatch(fetchedProjects(res)));
  }, []);

  return (
    <>
      <Layout style={{ width: "100wh", height: "100vh" }}>
        {/* <Header>Header</Header> */}
        <Layout>
          <Sider collapsed={collapsed} style={{ backgroundColor: "#faf8f7" }}>
            {/* <BsLayoutSidebar onClick={() => setCollapsed(!collapsed)} /> */}
            <Space direction="vertical">
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "5.9rem",
                    // justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.3rem",
                    backgroundColor: "RGB(248 188 170)",
                  }}
                >
                  <div> Favorites </div>
                  <div>
                    <Button
                      type="text"
                      size="small"
                      onClick={() => setFavoritesArr(!favoritesArr)}
                    >
                      {favoritesArr ? (
                        <FaChevronDown size={14} />
                      ) : (
                        <FaAngleRight size={14} />
                      )}
                    </Button>
                  </div>
                </div>
                {arrowClick &&
                  projects.map((project) => {
                    return <Project key={project.id} project={project} />;
                  })}
              </div>

              {/* for projects */}

              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "3rem",
                    // justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.3rem",
                    backgroundColor: "RGB(248 188 170)",
                  }}
                >
                  <div> My Projects </div>
                  <div>
                    <AddProject name={<FaPlus size={14} />} />
                    <Button
                      type="text"
                      size="small"
                      onClick={() => setArrowClick(!arrowClick)}
                    >
                      {arrowClick ? (
                        <FaChevronDown size={14} />
                      ) : (
                        <FaAngleRight size={14} />
                      )}
                    </Button>
                  </div>
                </div>
                {arrowClick &&
                  projects.map((project) => {
                    return <Project key={project.id} project={project} />;
                  })}
              </div>
            </Space>
          </Sider>
          <Content
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
            }}
            className="container"
          >
            <Flex vertical gap="small" style={{ width: "50%" }}>
              <Typography.Title level={2}>My Projects</Typography.Title>
              <Typography.Text>Free plan</Typography.Text>
              <Input prefix={<CiSearch />} placeholder="search projects" />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <select name="project">
                  <option value="one"> Active Projects </option>
                </select>

                <AddProject name={"+ Add Project"} />
              </div>
              <Typography.Text>{projects.length} projects</Typography.Text>
              {projects.map((project) => {
                return <Project key={project.id} project={project} />;
              })}
            </Flex>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
