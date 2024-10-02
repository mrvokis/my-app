import React, {useEffect, useState} from 'react';
import './App.css';
const styles ={
  width: "50%",
  height: "60px",
  display: "block",
  backgroundColor: "#ccfff0"
}
export default function App() {
  const [value, setValue] = useState();
  return (
    <div className="App">
      <input style={styles} value={value} onChange={event => setValue(event.target.value)} type="text"></input>
      <button style={styles} onClick={ event => setValue("") } type="button">Очистить</button>
    </div>
  );
};
