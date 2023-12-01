"use client";
import styles from "./CreateTask.module.css";
import { useState } from "react";

function CreateTask() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [dueDate, setDueDate] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('Daily');


  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleFrequencyChange  = (event) => {
    setSelectedFrequency(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    const taskName = document.getElementById('task_name').value;
    const taskDetails = document.getElementById('task_details').value;
    const dueDate = document.getElementById('task_due').value;
    const frequency = document.getElementById('frequency').value;

    const formData = {
        taskName,
        taskDetails,
        dueDate,
        frequency
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
            placeholder="What needs to be completed?."
          />
          <label htmlFor="Details">Details</label>
          <input
            id="task_details"
            type="text"
            name="name_field2"
            placeholder="What needs to be completed?."
          /><label htmlFor="Details">Due Date</label>
          <input
            id="task_due"
            type="date"
            name="name_field2"
            value={dueDate}
            onChange={handleDueDateChange}
          />
          <label htmlFor="Frequency">Frequency</label>
          <select id="frequency" value={selectedFrequency} onChange={handleFrequencyChange}>
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
