
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AddTask = ({onAddTask, setAllTasksComplete}) => {
    const [task, setTask] = useState("");
    // const [taskList, setTaskList] = useState([]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onAddTask(task);
        //setTaskList([...taskList, task]); // Corrected setTaskList
        setTask(""); // Clear input field after submitting
        setAllTasksComplete(false);
        i
    }

    return (
        <>
            <Box component="form" onSubmit={onSubmitHandler}>
                <TextField required id="newTask" value={task} helperText="Add an email to your list" onChange={(e) => setTask(e.target.value)}/> {/* Added value attribute */}
            </Box>
        </>
    );
}

export default AddTask;