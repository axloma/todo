import React, {useState} from "react";
import Clock from "./clock";

function Todolist(){

const [tasks,settasks] = useState(["eat","drink","sleep"])
const [newtask,setnewtask] =useState("")

const handletaskinput = (e)=>{

    setnewtask(e.target.value)
}
const addtask = ()=>{
    if(newtask.trim() !== ""){
    settasks(t =>[...t,newtask])
    setnewtask("")
    }
}
const deltask = (index) => {

    settasks(tasks.filter((_,i) => i !== index ))

}

const mvtup =(index)=>{
    const utasks = [...tasks];
    if(index > 0){
   [utasks[index],utasks[index -1]]=
   [utasks[index -1],utasks[index]];
    settasks(utasks)
}
}
const mvtdown =(index)=>{
    const utasks = [...tasks];

    if(index < tasks.length - 1){
        [utasks[index],utasks[index +1]]=
        [utasks[index +1],utasks[index]];
         settasks(utasks)
     }

}


    return (
        <>
        <div className="taskcontainer">
            <h2>TODO</h2>
        <input type="text" value={newtask} onChange={(e)=>handletaskinput(e)}/>
        <button onClick={addtask}>addtask</button>
        <ul className="tasks">
{tasks.map((task,index) =>
<li key={index}>
   <span> {task}</span>
<button onClick={()=> mvtup(index)}>up</button>
<button onClick={()=>mvtdown(index)}>down</button>
<button onClick={()=>deltask(index)}className="delbtn">del</button>

</li>



)}
        </ul>

        </div>
        </>
    );
}
export default Todolist