import { Col, Container, Row } from 'react-bootstrap';
import styles from './WeekView.module.css';
import DayCol from '../DayCol/DayCol';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function WeekView({tasks, setSelectedTask}) {
    return <div className={styles.container}>
            <Row>
                {DAYS.map((day) => {
                    return (<Col key={day}><DayCol day={day} tasks={tasks} setSelectedTask={setSelectedTask}/></Col>)
                })}
            </Row>
        </div>
}