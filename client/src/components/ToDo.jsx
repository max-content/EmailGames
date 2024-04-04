import React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios"

const ToDo = ({ tasks, isTaskComplete }) => {

    return (
        <>
            <Box component="div">
                {tasks.map((task, idx) => (
                    <div key={idx}>
                        <Checkbox checked={task.completed} onChange={() => isTaskComplete(idx)} />
                        <span style={{textDecoration: task.completed ? "line-through" : "none"}}> {task.text} </span>
                    </div>
                ))}
            </Box>
        </>
    );
};

export default ToDo;
