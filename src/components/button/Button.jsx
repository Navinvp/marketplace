import styles from './Button.module.css';

const Button = ({label, clickHandler = () => {}, fill=false}) => {
    const cssClasses = `${styles.button} ${fill ? styles.fill : ''}`;

    return (
        <button onClick={clickHandler} className={cssClasses}>{label}</button>
    );
}

export default Button;