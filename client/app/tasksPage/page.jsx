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
            fetch(`https://matey.onrender.com/houses/${userData.house}/tasks`, {
                headers: {Authorization: `Bearer ${bearerToken}`}
            })
            .then((res) => res.json())
            .then((data) => setTasks(data))
            .catch((err) => console.error('Failed to fetch tasks', err));
        }
    }, [userData]);

    const completeTask = () => {
        fetch(`https://matey.onrender.com/tasks/${selectedTask.id}?houseId=${userData.house}&userId=${userData.id}`, {
            method: 'DELETE',
            headers: {Authorization: `Bearer ${bearerToken}`}
        })
        .then(() => window.location.href = '/tasksPage')
    }

    const renderView = () => {
        if (userData && userData.house && tasks.length > 0) {
            return (<> 
                        <WeekView tasks={tasks} setSelectedTask={setSelectedTask}/>
                        <CreateTask houseId={userData.house} />
                        {selectedTask &&
                        <div className={styles.selected_container}>
                            <h2>Selected task</h2>
                            <div>
                                <h3>{selectedTask.name}</h3>
                                <p>{selectedTask.desc}</p>
                                <p>Points: {selectedTask.points}</p>
                                <Button onClick={completeTask}>Complete</Button>
                            </div>
                        </div>}
                    </>
            );
        } else if (userData && userData.house) {
            return <CreateTask houseId={userData.house}/>
        } else if (userData) {
            return <Button onClick={() => window.location.href = '/manageHouse'}>Manage House</Button>
        } else {
            return <h2>Loading...</h2>
        }
    }

    return (
        <div className={styles.container}>
            {renderView()}
        </div>
        );
}
