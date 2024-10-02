import React from 'react';
const App = (props) => {
    return (
        <div>
            <h1>Заголовок - {props.header}</h1>
            <div>Описание - {props.description}</div>
        </div>
    )
};
export default App;