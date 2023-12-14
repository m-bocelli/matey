import TaskItem from '../TaskItem/TaskItem';
import styles from './DayCol.module.css';
import { useState, useEffect } from 'react';

export default function DayCol({day, tasks, setSelectedTask}) {
    const [daysTasks, setDaysTasks] = useState();

    useEffect(() => {
        setDaysTasks(tasks.filter((task) => task.due.toLowerCase() === day.toLowerCase()));
    }, [tasks])

    return (
        <div className={styles.container}>
            <h2>{day}</h2>
            {daysTasks && daysTasks.map((task) => <TaskItem key={task.id} task={task} setSelectedTask={setSelectedTask}/>)}
        </div>
    );
}