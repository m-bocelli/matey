import TaskForm from "../components/TaskForm/TaskForm";
import WeekCalendar from "../components/WeekCalendar/WeekCalendar";

export default function TasksPageUI() {
    return (
        <>
            <WeekCalendar></WeekCalendar>
           <TaskForm></TaskForm>
           </>
        );
}
