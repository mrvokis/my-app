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
  color: 'blue',
  fontSize: '30px'

}
export default function App() {
  const [number, setNumber] = useState(0);
  useEffect(()=> {
    setNumber(Math.random()*1000)
  },[])
  return (
    <div className="App">
      <h1 className='red big'>Привет число!</h1>
      <div style={styles}>Я число-{number}</div>
    </div>
  );
};
