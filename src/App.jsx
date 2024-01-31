import { Button, Flex, Input, Layout, Menu, Space, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
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
import { fetchedFavorites } from "./components/features/favoritesSlice";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [arrowClick, setArrowClick] = useState(false);
  const [favoritesArr, setFavoritesArr] = useState(false);

  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    getProjects().then((res) => {
      dispatch(fetchedProjects(res));
      dispatch(fetchedFavorites(res));
    });
  }, []);

  const favorites = useSelector((state) => state.favorites);
  return (
    <>
      <Layout style={{ width: "100wh", height: "100vh" }}>
        <Layout>
          <Sider style={{ backgroundColor: "#faf8f7" }}>
            <Space direction="vertical">
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "5.9rem",
                    alignItems: "center",
                    padding: "0.3rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "RGB(248 188 170)",
                    marginTop: "10rem",
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
                {favoritesArr &&
                  favorites.map((project) => {
                    return <Project key={project.id} project={project} />;
                  })}
              </div>

              {/* for projects */}

              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "3rem",
                    alignItems: "center",
                    padding: "0.3rem",
                    borderRadius: "0.5rem",
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
          <Routes>
            <Route
              path="/"
              element={
                <Content
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "white",
                    padding: "3rem",
                  }}
                  className="container"
                >
                  <Flex vertical gap="small" style={{ width: "50%" }}>
                    <Typography.Title level={2}>My Projects</Typography.Title>
                    <Typography.Text>Free plan</Typography.Text>
                    <Input
                      prefix={<CiSearch />}
                      placeholder="search projects"
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <AddProject name={"+ Add Project"} />
                    </div>
                    <Typography.Text>
                      {projects.length} projects
                    </Typography.Text>
                    {projects.map((project) => {
                      return <Project key={project.id} project={project} />;
                    })}
                  </Flex>
                </Content>
              }
            ></Route>
            <Route path="/projects/:id" element={<ProjectDetails />}></Route>
          </Routes>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
