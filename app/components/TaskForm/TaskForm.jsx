"use client";
import { Form } from "react-bootstrap";
import styles from "./TaskForm.module.css";

export default function TaskForm() {
  return (
    <>
    <div className={styles.component_area}>
    <div className={styles.Form_Group}>
        <h1 className={styles.task_header}>Create Task</h1>
      <Form>
        <Form.Group>
          <Form.Label>Task Name:</Form.Label>
          <div className={styles.task_name}>
          <Form.Control
            className="control"
            type="input"
            placeholder="What needs to be completed?"
          />
          </div>
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
    <button className={styles.pin_button}>PIN TASK TO BOARD</button>
    </div>

    </>
  );
}
