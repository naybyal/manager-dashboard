import styles from './attendance.module.css'
import {MdSupervisedUserCircle} from "react-icons/md";

const Attendance = () => {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24} />
            <div className={styles.texts}>
                <span className={styles.title}>Your Attendance - April 2024</span>
                <span className={styles.number}><span className={styles.positive}>1</span>/30</span>
                <span className={styles.detail}>
                    You took <span className={styles.positive}> 0</span> leaves so far.
                </span>
            </div>
        </div>
    );
}

export default Attendance;