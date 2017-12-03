import React from 'react';

let Lane = ({tasks, laneProgressLevel, updateState}) => {
    let laneTasks = tasks.filter( task => task.progressLevel === laneProgressLevel ).map(task => {
        return (
            <div className="task" key={task.id}>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <button onClick={()=> {updateState(task.id, task.progressLevel)}}>Promote</button>
            </div>

        )
    })

    return (
        <div className="Lane">
            <h2 className="lane-header">{laneProgressLevel.toUpperCase()}</h2>
            {laneTasks}
        </div>
    )
};

export default Lane;