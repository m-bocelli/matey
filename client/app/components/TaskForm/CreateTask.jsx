"use client";
import styles from "./CreateTask.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import MinimizedTask from "./MinimizedTask";

function CreateTask() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [dueDate, setDueDate] = useState("");
  const [selectedFrequency, setSelectedFrequency] = useState("Daily");
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFormMinimized, setIsFormMinimized] = useState(false);

  const openForm = () => {
    setIsFormVisible(true);
  };

  const minimizeForm = () => {
    setIsFormVisible(false);
    setIsFormMinimized(true);
  };

  //const expandForm = () {
  //setIsFormMinimized(!isFormMinimized);
  //};

  const closeForm = () => {
    setIsFormVisible(false);
  };

  const expandForm = () => {
    setIsFormVisible(true);
    setIsFormMinimized(false);
  }

  const handleFrequencyChange = (event) => {
    setSelectedFrequency(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  // COMMENT: This function, handleSubmit, is where the POST request code will go.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const taskName = document.getElementById("task_name").value;
    const taskDetails = document.getElementById("task_details").value;
    const dueDate = document.getElementById("task_due").value;
    const [isCompleted, setIsCompleted] = useState(false);

    let pointsValue = 0;
    if (frequency === "weekly") {
      pointsValue = 15;
    } else if (frequency === "monthly") {
      pointsValue = 25;
    } else if (frequency === "daily") {
      pointsValue = 5;
    }

    const formData = {
      taskName,
      taskDetails,
      dueDate: dueDate,
      frequency: selectedFrequency,
      pointsValue,
      isCompleted, // This will be initially false when task form is submitted, later toggled to true if all roomies verify
    };

    // COMMENT: this chunk is where we'd put the api endpoint
    //
    //   try {
    //     const response = await fetch('URL', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(formData),
    //     });

    //     const result = await response.json();
    //     console.log('Server Response:', result);

    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
  };

  return (
    <>
      <button className={styles.pin_button} onClick={openForm}>
        + CREATE TASK
      </button>
      {isFormVisible ? (
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
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="task_name">Task Name </label>
          <input
            id="task_name"
            type="text"
            name="name_field1"
            placeholder="Char limit: 30."
            maxLength={30}
          />
          <label htmlFor="Details">Details</label>
          <input
            id="task_details"
            type="text"
            name="name_field2"
            placeholder="What needs to be completed?."
            maxLength={250}
          />
          <label htmlFor="Details">Due Date</label>
          <input
            id="task_due"
            type="date"
            name="name_field2"
            value={dueDate}
            onChange={handleDueDateChange}
          />
          <label htmlFor="Frequency">Frequency</label>
          <select
            id="frequency"
            value={selectedFrequency}
            onChange={handleFrequencyChange}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="daily">Daily</option>
          </select>

          <div className={styles.submit_button}>
            <input type="submit" value="+ Create Task" />
          </div>
        </form>
      </div> ) : 
      isFormMinimized ? ( 
        <MinimizedTask></MinimizedTask>
      ) : null} 
    </>
  );
}
export default CreateTask;
