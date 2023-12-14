import React from "react";
import styles from "./CreateTask.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";

const MinimizedTask = ({setIsFormMinimized, setIsFormVisible}) => {
  const expandForm = () => {
    setIsFormMinimized(false);
    setIsFormVisible(true);
  }

  return (
    <div className={styles.collapsed_form}>
      New Task
      <button className={styles.expand_button_area} onClick={expandForm}>
      <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} size={"md"} style={{color: "#2b2d42"}}/>
      </button>
    </div>
  );
};

export default MinimizedTask;
