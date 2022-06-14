import { useState, useEffect } from 'react';
import styles from './todo.module.css';
import List from '../list/list';
import Form from '../form/form';
import Button from '../button/button';


const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Todo = () => {  
  const [ item , setItem ] = useState('');
  const [ list, setList ] = useState(getLocalStorage());
  const [ checked, setChecked ] = useState(false);
  const [ counter, setCounter ] = useState(0);  
    
  const handleSubmit = (e) => {    
    e.preventDefault();   

    const newItem = {
      item,
      isChecking: false,
      id: new Date().getTime(),      
    };    

    if (item.length) {
      setList([...list, newItem]);
    }    
    localStorage.setItem('list', JSON.stringify(list));  
    setCounter(counter + 1);
    setItem('');
  }

  const handleChange = ({ id }) => {     
    setChecked(!checked);   
    setList(list.map(item => {
      if (item.id === id) {
        return { ...item, isChecking: !item.isChecking };
      } else {
        return item;
      }
    }));       
  };

  const getAllList = () => {    
    setList(getLocalStorage());
  };

  const getActiveList = () => {
    const newList = getLocalStorage();
    setList(newList.filter((item) => item.isChecking !== true));
  };

  const getCompletedList = () => {
    const newList = getLocalStorage();
    setList(newList.filter((item) => item.isChecking === true));
  };

  const getClearList = () => {
    setList([]);
    setCounter(0);
    localStorage.setItem('list', JSON.stringify([])); 
  };

  useEffect(() => {      
    if (list.length >= counter) {      
      localStorage.setItem('list', JSON.stringify(list));     
    }   
  }, [list, counter]);

  return (
    <div>
      <h1 className={styles.title}>todos</h1>
      <Form handleSubmit={handleSubmit} item={item} setItem={setItem} />
      {list.length > 0 && <List list={list} checked={checked} handleChange={handleChange} />}
      <div className={styles.buttonBlock}>
        <Button title={'All'} getTypeAction={getAllList} />
        <Button title={'Active'} getTypeAction={getActiveList} />
        <Button title={'Completed'} getTypeAction={getCompletedList} />
        <Button title={'Clear todos'} getTypeAction={getClearList} />
      </div>
    </div>
  );
};

export default Todo;