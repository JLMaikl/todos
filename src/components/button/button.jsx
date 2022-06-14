import styles from './button.module.css';

const Button = ({ title, getTypeAction }) => {
  return (
    <button className={styles.btn} onClick={getTypeAction}>
      {title}
    </button>
  );
};

export default Button;