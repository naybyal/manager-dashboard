import styles from './rightbar.module.css'
import Image from 'next/image'
import Harassment from '/public/abuse.png'
import {MdEmergencyRecording} from "react-icons/md";
const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image className={styles.bg} src={Harassment} alt="" fill/>
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}>🚨 Report Abuse!</span>
                    <h3>Facing harassment from a customer?</h3>
                    <span>Record the instance</span>
                    <div className={styles.buttons}>
                        <button className={styles.button}>
                            <MdEmergencyRecording/>Start Recording
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Rightbar;