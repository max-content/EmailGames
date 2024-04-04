import React, {useState} from "react";
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
        <AddTask onAddTask={addTask} setAllTasksComplete={setAllTasksComplete} />
        <ToDo tasks={tasks} setTasks={setTasks} isTaskComplete={isTaskComplete} />
        {allTasksComplete && <PuppyPhoto />}
    </>
        )
};

export default ToDoView;
