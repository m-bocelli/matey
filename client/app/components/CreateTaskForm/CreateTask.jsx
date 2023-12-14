"use client";
import styles from "./CreateTask.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import MinimizedTask from "./MinimizedTask";

export default function CreateTask({houseId}) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [dueDay, setDueDay] = useState("Monday");
  const [points, setPoints] = useState("");
  const [isFormMinimized, setIsFormMinimized] = useState(false);

  const openForm = () => {
    setIsFormVisible(true);
  };

  const minimizeForm = () => {
    setIsFormVisible(false);
    setIsFormMinimized(true);
  };

  const closeForm = () => {
    setTaskName("");
    setTaskDesc("");
    setPoints();
    setDueDay("Monday");
    setIsFormVisible(false);
  };

  const handleDayChange = (event) => {
    setDueDay(event.target.value);
  };

  // COMMENT: This function, handleSubmit, is where the POST request code will go.
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: taskName,
      desc: taskDesc,
      due: dueDay,
      points: points,
    };

      try {
          const response = await fetch(`http://localhost:2001/tasks?houseId=${houseId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          const res = await response.json();
          window.location.href = '/tasksPage';
          console.log('Server Response:', res);
      } catch (error) {
          console.error('Error:', error);
      }
  };

  return (
    <>
      <button className={styles.create_task_button} onClick={openForm}>
        + CREATE TASK
      </button>
      {isFormVisible ? (
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.entire_form}>
          <div className={styles.form_buttons}>
            <button className={styles.close_form} onClick={closeForm}>
              <FontAwesomeIcon
                icon={faX}
                size="lg"
                style={{ color: "lightseagreen" }}
              />
            </button>
            <button className={styles.minimize_form} onClick={minimizeForm}>
              <FontAwesomeIcon
                icon={faWindowMinimize}
                size="lg"
                style={{ color: "lightseagreen" }}
              />
            </button>
          </div>
          <div className={styles.new_task}>New Task</div>
          
            <label htmlFor="task_name">Task Name </label>
            <input
              id="task_name"
              type="text"
              placeholder="Char limit: 30."
              maxLength={30}
              required
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <label htmlFor="task_desc">Description</label>
            <input
              id="task_desc"
              type="text"
              placeholder="What needs to be completed?"
              maxLength={250}
              required
              value={taskDesc}
              onChange={(e) => setTaskDesc(e.target.value)}
            />
            <label htmlFor="task_points">Points</label>
            <input
              id="task_points"
              type="number"
              placeholder="How much is this task worth?"
              maxLength={10}
              required
              value={points}
              onChange={(e) => setPoints(e.target.value)}
            />
            <label htmlFor="task_day">Due Day</label>
            <select
              id="task_day"
              value={dueDay}
              onChange={handleDayChange}
              required
            >
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">sunday</option>
            </select>

            <div className={styles.submit_button_area}>
              <input type="submit" value="+ Create Task" />
            </div>
          </div>
        </form>
       ) : 
      isFormMinimized ? ( 
        <MinimizedTask setIsFormMinimized={setIsFormMinimized} setIsFormVisible={setIsFormVisible}></MinimizedTask>
      ) : null} 
    </>
  );
}