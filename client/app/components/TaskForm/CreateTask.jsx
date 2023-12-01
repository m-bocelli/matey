"use client";
import styles from "./CreateTask.module.css";
import { useState, useEffect } from "react";

function CreateTask() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const taskName = document.getElementById('task_name').value;
    const taskDetails = document.getElementById('task_details').value;
    const taskThing = document.getElementById('task_thing').value;

    const formData = {
        taskName,
        taskDetails,
        taskThing,
      };

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
    // };
  

  return (
    <>
    <button className={styles.pin_button} onClick={toggleForm}>
          PIN TASK TO BOARD
        </button>
    {isFormVisible && ( <div className={styles.entire_form}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="task_name">Enter Task: </label>
          <input
            id="task_name"
            type="text"
            name="name_field1"
            value="What needs to be completed?."
          />
          <label htmlFor="Details">Details</label>
          <input
            id="task_details"
            type="text"
            name="name_field2"
            value="What needs to be completed?."
          /><label htmlFor="Details">Due Date</label>
          <input
            id="task_due"
            type="text"
            name="name_field2"
            value={today}
          />
          <label htmlFor="Frequency">Frequency</label>
          <select id="frequency" value={selectedPriority} onChange={handlePriorityChange}>
              <option value="weekly">Weekly</option>
              <option value="montly">Monthly</option>
              <option value="daily">Daily</option>
            </select>
          <div className="submit-button">
            <input type="submit" value="OK" />
          </div>
        </form>
      </div>)}
      </>

  );
    
}
export default CreateTask;
