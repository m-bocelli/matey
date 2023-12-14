'use client';
import { useEffect, useState } from "react";
import CreateTask from "../components/CreateTaskForm/CreateTask";
import WeekView from "../components/WeekView/WeekView";
import styles from './page.module.css';
import { UserAuth } from "../js/AuthContext";
import Button from "../components/Button/Button";

export default function TasksPage() {
    const {userData, bearerToken} = UserAuth();
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState();

    useEffect(() => {
        if (userData) {
            fetch(`http://localhost:2001/houses/${userData.house}/tasks`, {
                headers: {Authorization: `Bearer ${bearerToken}`}
            })
            .then((res) => res.json())
            .then((data) => setTasks(data))
            .catch((err) => console.error('Failed to fetch tasks', err));
        }
    }, [userData]);

    const completeTask = () => {
        fetch(`http://localhost:2001/tasks/${selectedTask.id}?houseId=${userData.house}&userId=${userData.id}`, {
            method: 'DELETE',
            headers: {Authorization: `Bearer ${bearerToken}`}
        })
        .then(() => window.location.href = '/tasksPage')
    }

    const renderView = () => {
        if (userData && tasks.length > 0) {
            return (<> 
                        <WeekView tasks={tasks} setSelectedTask={setSelectedTask}/>
                        <CreateTask houseId={userData.house} />
                    </>
            );
        } else if (userData) {
            return <CreateTask houseId={userData.house}/>
        } else {
            return <h2>Loading...</h2>
        }
    }

    return (
        <div className={styles.container}>
            {renderView()}
            <h2>Selected task</h2>
            {selectedTask &&
                <div>
                    <h3>{selectedTask.name}</h3>
                    <p>{selectedTask.desc}</p>
                    <p>Points: {selectedTask.points}</p>
                    <Button onClick={completeTask}>Complete</Button>
                </div>
            }
        </div>
        );
}
