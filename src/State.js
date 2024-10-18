import React, {useEffect, useState} from "react";
const initialState = ()=>{
    return 0;
};
const State = (props)=> {
    const [click, setClick]= useState(initialState());
    const [isClicked, setIsClicked]=useState(false);
    const [x,setX] = useState(1);
    useEffect(()=> {
        document.body.addEventListener('mousemove',(event)=> {
            setX(window.event.clientX);
        })
    },[])
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
            <div>
                Координата мыши X - {x}
            </div>
        </div>
    )
}
export default State