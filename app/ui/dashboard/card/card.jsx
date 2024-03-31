import styles from './card.module.css'
import {MdAttachMoney} from "react-icons/md";

const Card = () => {
    return (
        <div className={styles.container}>
            <MdAttachMoney />
            <div className={styles.texts}>
                <span className={styles.title}>Your Revenue</span>
                <span className={styles.number}>Rs. 2,273</span>
                <span className={styles.detail}>
                    <span className={styles.positive}>12%</span> more than yesterday.
                </span>
            </div>
        </div>
    );
}

export default Card;