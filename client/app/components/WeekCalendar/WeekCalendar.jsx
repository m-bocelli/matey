"use client";
import styles from "./WeekCalendar.module.css";


const daysOfWeek = [
  { day: 'Monday', color: '#FFD700' },
  { day: 'Tuesday', color: '#FFA07A' },
  { day: 'Wednesday', color: '#90EE90' },
  { day: 'Thursday', color: '#ADD8E6' },
  { day: 'Friday', color: '#FFC0CB' },
  { day: 'Saturday', color: '#98FB98' },
  { day: 'Sunday', color: '#D8BFD8' },
];

function DayBox(props) {
  const { day, color } = props;

  return (
    <div
      style={{
        backgroundColor: color,
        padding: '3px',
        width: 'auto',
        textAlign: 'center',
        borderRadius: '5px',
        fontSize: '18px',
        color: 'var(--space-cadet)',
        fontWeight: 'bold'
      }}
    >
      {day}
    </div>
  );
}

function WeekCalendar() {
  return (
    <>
    <br></br>
    <br></br>
    <div className={styles.calendar}>
      {daysOfWeek.map((dayInfo, index) => (
        <DayBox key={index} day={dayInfo.day} color={dayInfo.color} />
      ))}
    </div>
    </>
  );
}

export default WeekCalendar;
