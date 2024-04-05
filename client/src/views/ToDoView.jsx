import React, {useState} from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import AddTask from "../components/AddTask";
import ToDo from "../components/ToDo";
import PuppyPhoto from "../components/PuppyPhoto";

const ToDoView = () => {
    const [tasks, setTasks] = useState([]);
    const [allTasksComplete, setAllTasksComplete] = useState(false);

    const addTask = (task) => {
        setTasks([...tasks, {text: task, completed: false}]);
    }

    const checkAllCompleted = () => {
        const completed = tasks.every((task) => task.completed);
        setAllTasksComplete(completed);
    }

    const isTaskComplete = (idx) => {
        const updatedTasks = [...tasks];
        updatedTasks[idx].completed = !updatedTasks[idx].completed;
        setTasks(updatedTasks);
        checkAllCompleted();
      }

    return (
    <>
        <Grid container spacing={6} sx={{m:1}}>
            <Grid item sx={4}>
                <Paper>
                    <AddTask onAddTask={addTask} setAllTasksComplete={setAllTasksComplete} />
                    <ToDo tasks={tasks} setTasks={setTasks} isTaskComplete={isTaskComplete} />
                </Paper>
            </Grid>
            <Grid item sx={8}>
                <Paper>
                    {allTasksComplete && <PuppyPhoto />}
                </Paper>
            </Grid>
        </Grid>
    </>
        )
};

export default ToDoView;
