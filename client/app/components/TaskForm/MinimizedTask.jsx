import React from "react";
import styles from "./CreateTask.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import { style } from "d3";

const MinimizedTask = () => {
  return (
    <div className={styles.collapsed_form}>
      New Task
      <button className={styles.expand_button_area}>
      <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} size={"md"} style={{color: "#2b2d42"}}/>
      </button>
    </div>
  );
};

export default MinimizedTask;
