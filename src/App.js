import React, {useState} from 'react';
import './App.css';
import UserList from './UserList';
import MyComponent from './MyComponent';
import State from './State';
import AnotherComponent from './AnotherComponent';
import Lesson16 from './Lesson16';

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
      <State/>
      <AnotherComponent/>
      <Lesson16 items={['item-0, item-1, item-2']}/>
    </div>
  );
};
