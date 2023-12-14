import styles from './TaskItem.module.css';
import { useState } from 'react';

export default function TaskItem ({task, setSelectedTask}) {
    const [showDesc, setShowDesc] = useState(false);

    const completeTask = () => {

    }

    return (
        <>
            <div className={styles.container} onClick={()=>setSelectedTask(task)}>
                    <p>
                        {task.name}
                    </p>
            </div>
        </>
    );
}