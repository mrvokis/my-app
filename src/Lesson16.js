import React, {useState} from "react";
const Lesson16 = (props)=> {
    const [item, setItem] = useState(props.items)
    const addItem = (localItem)=>{
        setItem([...item, localItem])
    }
        return(
        <div>
            <ul>
                {item.map((el, index)=>{
                    return(<li key ={index}>{el}</li>)
                })}
            </ul>
            <button onClick={()=>{addItem('item-3')}}>Add item</button>
        </div>
    )
}
export default Lesson16