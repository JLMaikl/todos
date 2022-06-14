import Card from '../card/card';

const List = ({ list = [], checked, handleChange }) => {

  if(!list.length) return null;

  return (
    <ul>
      {list.map((item) => (
        <Card
          key={item.id}
          item={item}
          checked={checked}
          handleChange={handleChange}          
        />
      ))}
    </ul>
  );
};

export default List;