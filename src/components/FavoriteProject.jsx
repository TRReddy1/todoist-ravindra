import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { LuHeartOff } from "react-icons/lu";
import { addedFavorites, removedFavorite } from "./features/favoritesSlice";
import { addProjectToFav } from "../api";
import { setFavorites } from "./features/projectsSlices";

const FavoriteProject = ({ project, onHidePopover }) => {
  const dispatch = useDispatch();

  const addHandler = () => {
    addProjectToFav(project.id, true).then((res) => {
      dispatch(addedFavorites(res));
      dispatch(setFavorites(project.id));
    });
    onHidePopover();
  };

  const removeHandler = () => {
    addProjectToFav(project.id, false).then((res) => {
      dispatch(removedFavorite(res));
      dispatch(setFavorites(project.id));
    });
    onHidePopover();
  };

  return (
    <>
      {project.is_favorite ? (
        <Button
          type="text"
          style={{ width: "13rem", textAlign: "left" }}
          onClick={removeHandler}
        >
          <LuHeartOff />
          <span style={{ marginLeft: "1rem" }}> Remove from favorites</span>
        </Button>
      ) : (
        <Button
          type="text"
          style={{ width: "13rem", textAlign: "left" }}
          onClick={addHandler}
        >
          <CiHeart />
          <span style={{ marginLeft: "1rem" }}> Add to favorites</span>
        </Button>
      )}
    </>
  );
};

export default FavoriteProject;
