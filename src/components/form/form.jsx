import styles from './form.module.css';
import { useRef, useEffect } from 'react';

const Form = ({ handleSubmit, item, setItem }) => {
  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.focus();
  }, [item]);

  return (
    <form className={styles.todosForm} onSubmit={handleSubmit}>
      <div className={styles.formControl}>
        <input
          type="text"
          className={styles.input}
          ref={searchInput}
          placeholder="What needs to be done?"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit" className={styles.submitBtn}>
          edit
        </button>
      </div>
    </form>
  );
};

export default Form;
