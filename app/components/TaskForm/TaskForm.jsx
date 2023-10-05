"use client";
import { Form } from "react-bootstrap";
import styles from "./TaskForm.module.css";
import { useState } from "react";


function TaskForm() {
    const [taskName, setTaskName] = useState(''); // Add state for taskName
    const [renderedTask, setRenderedTask] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    // Use taskName directly from state
    setRenderedTask(taskName);
    setTaskName(''); // Optionally, you can clear the input field
  };
      
  return (
    <>
    <div className={styles.component_area}>
    <div className={styles.Form_Group}>
        <h1 className={styles.task_header}>Create Task</h1>
      <Form>
        <Form.Group>
          <Form.Label>Task Name:</Form.Label>
          <Form.Control
            className="control"
            type="input"
            id = "task-name"
            placeholder="What needs to be completed?"
            value={taskName} // Use the value from state
            onChange={(e) => setTaskName(e.target.value)}
          />

          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <br></br>
        <div className={styles.checkboxes}>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Daily" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Weekly" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Monthly" />
        </Form.Group>
        </div>
        <Form.Group className="task">
          <Form.Label>Details:</Form.Label>
          <Form.Control
            className="control"
            type="input"
            placeholder="Describe further"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </Form>
    </div>
    <button className={styles.pin_button} onClick={handleSubmit}>PIN TASK TO BOARD</button>
    </div>
    <h2 className={styles.to_do}>To Do:</h2>
      {renderedTask && (
        <div className={styles.rendered_task}>
          <p>{renderedTask}</p>
        </div>
      )}

    </>
  );
}

export default TaskForm;
