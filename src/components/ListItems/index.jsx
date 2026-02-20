import { useEffect, useState } from 'react';

function ListItems() {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState([]);

  const addItem = () => {
    setItems((prev) => [...prev, value]);
  };

  // Лишние перерисовки при изменении массива items
  // useEffect(() => {
  //   console.log('Компонент ListItems обновлен');
  // }, [items]);

  useEffect(() => {
    console.log('Компонент ListItems обновлен');
  }, []);

  return (
    <>
      <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={addItem} style={{ marginLeft: '1rem' }}>
        Добавить
      </button>

      <ul>
        {items.map((item) => (
          <li key={crypto.randomUUID()}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListItems;
