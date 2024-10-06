import React, {useState} from 'react';
import './App.css';
import UserList from './UserList';
import MyComponent from './MyComponent';

const styles ={
  width: "50%",
  height: "60px",
  display: "block",
  backgroundColor: "#ccfff0"
}
export default function App() {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      <input style={styles} value={value} onChange={event => setValue(event.target.value)} type="text"></input>
      <button style={styles} onClick={ event => setValue("") } type="button">Очистить</button>
      <UserList/>
      <MyComponent prop1={styles.width} prop2={'props-2'}/>
    </div>
  );
};
