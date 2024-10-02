import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
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
