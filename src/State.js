import React, {useState} from "react";
const initialState = ()=>{
    return 0;
};
const State = (props)=> {
    const [click, setClick]= useState(initialState());
    const [isClicked, setIsClicked]=useState(false)
    const handlerSetClick = ()=>{
        setClick(click+1);
        setIsClicked(isClicked);
    }
    return(
        <div>
            <button onClick={()=>{handlerSetClick();}} type="button">Click</button>
            <button onClick={()=>setIsClicked(!isClicked)} type="button">{isClicked?'Скрыть строку':'Показать строку'}</button>
            <p>{click}</p>
            {isClicked&&
            <p>Кнопка была нажата</p>
            }  
        </div>
    )
}
export default State