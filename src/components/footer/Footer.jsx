import styles from'./Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>
                <span className={styles.titleText}>MARKETPLACE</span><span className={styles.dot}></span>
            </div>
        </div>
    );
}

export default Footer;