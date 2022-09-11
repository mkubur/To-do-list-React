import React from "react";
import OneTask from "./OneTask";

const TaskList = props => {
    if (!props.t)
        return <div></div>
    const taskArray = props.t;
    const allTasks = []
    for (let i = 0 ; i < taskArray.length ; i++){
        allTasks.push(<OneTask key={i} mytask={taskArray[i]} removeItem={props.removeItem}> </OneTask>)
    }

    return <div className="ui relaxed divided list">{allTasks}</div>

}

export default TaskList;