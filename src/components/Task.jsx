import React, { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { Flex, Typography } from "antd";

const Task = ({ task }) => {
  const [changeIcon, setChangeIcon] = useState(false);
  return (
    <div style={{ borderBottom: "0.1px solid", padding: "0.5rem" }}>
      <Flex align="center">
        {/* {changeIcon ? <CiCircleCheck /> : <FaRegCircle />} */}
        <div
          style={{
            border: "1px solid",
            borderRadius: "50%",
            height: "1rem",
            width: "1rem",
            textAlign: "center",
            marginRight: "1rem",
          }}
          onMouseOver={() => setChangeIcon(true)}
          onMouseOut={() => setChangeIcon(false)}
        >
          {changeIcon ? <>&#x2713;</> : ""}
        </div>

        <Typography.Text>{task.content}</Typography.Text>
        {task.description && (
          <Typography.Text>{task.description}</Typography.Text>
        )}
      </Flex>
    </div>
  );
};

export default Task;
