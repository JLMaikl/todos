import styles from './card.module.css';

const Card = ({ item, handleChange }) => {
  return (
    <li className={styles.cardItem}>
      <p className="title">{item.item}</p>      
      <input type="checkbox" checked={item.isChecking} onChange={() => handleChange(item)} />
    </li>
  );
};

export default Card;