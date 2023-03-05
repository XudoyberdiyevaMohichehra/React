import { useState } from "react";

const Hooks =()=>{
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState('webbrain')
  const [data, setData] = useState({
    count:1,
    title:'web'
  })
//   console.log(count);
  const plus=()=>{
    setCount(()=>count + 1 ,()=>{
       console.log(count);
    })
  }
    return(
       <div style={{ flex: 1 }}>
        <h1>Hooks Component</h1>
        <h1>Count:{count}</h1>
        <h1>Title:{data.title}</h1>
        <input type="text" value={data.title} onChange={({target})=>setData({...data,title:target.value})} />
        <button onClick={plus}>+</button>
       </div>
    )
}

export default Hooks;











