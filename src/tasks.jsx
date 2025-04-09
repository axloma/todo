import React, {useState, useContext,createContext, useRef} from "react";
import Clock from "./clock";
// import Main from "../server/connect.cjs"
import StropWatch from "./Stopwatch";
import { UserContext } from "./Stopwatch";
// export const UserContext = createContext();
import axios from "axios";
// const apiurl = "http://127.0.0.1:3000"
const apiurl = "http://c704-41-68-20-237.ngrok-free.app"

function Todolist(props){
    const hell = useContext(UserContext)

const [tasks,settasks] = useState([])
const [newtask,setnewtask] =useState("")
const [isloading,setisloading] = useState(false)
const fref = useRef(null)
const refr = useRef()

const handletaskinput = (e)=>{

    setnewtask(e.target.value)
}
const fitem = async()=>{
    try{

        const {data} = await axios.get(apiurl)
        console.log(data)
        setisloading(true)
        settasks([])
        setTimeout(() => {
            
            console.log(data)
            data.forEach(Element =>{
                // settasks(Element.name)
                settasks(t => [...t ,Element.name])
                console.log(Element.name)
                fref.current.style.display = "none";
            })
            setisloading(false)
            return data
        },2000);
    }catch (error){
        console.log(error)
    }

}
const addtask = ()=>{
    if(newtask.trim() !== ""){
    settasks(t =>[...t,newtask])
    setnewtask("")
    }
}
const deltask = async(index,task) => {
    const {data } = await axios.delete(`${apiurl}/${task}`)
    console.log(data)
    settasks(tasks.filter((_,i) => i !== index ))

}
const save = async (task)=>{
    try {

        const {data} = await axios.post(`${apiurl}/add`,{name: task,completed:true,Ts:0})
        // console.log(task)
        console.log(data)
    
 
    }catch(error) {
        console.log(error,"ERROR")
    }
}

const mvtup =(index)=>{
    const utasks = [...tasks];
    if(index > 0){
   [utasks[index],utasks[index -1]]=
   [utasks[index -1],utasks[index]];
    settasks(utasks)
}
}
const mvtdown =(e,index)=>{
    const utasks = [...tasks];
    e.preventDefault();
    if(index < tasks.length - 1){
        [utasks[index],utasks[index +1]]=
        [utasks[index +1],utasks[index]];
        // e.currentTarget = e.currentTarget +1
      console.log(e.currentTarget,"CURRENT")
        // [e.current,e.current+1]=[e.current +1,e.current]
        // const i = utasks.indexOf(index);
        // console.log("IND",i)
         settasks(utasks)
        //  refr.current = refr.current -1;
        //  refr[i].current.style.backgroundColor = "yellow";

     }

}
function swaplist(e,index){
    // e.preventDefault();
    // console.log(e.currentTarget,"CURRENT")
    // console.log(e.target,"TARGET")
    // console.log(e)
    // console.log(e.parent)
    // // let index = indexOf(e.target)
    // console.log(e.target.closest('li'),"INDEX")
    // e.clientX += 100;
    // console.log(e.target)
    // console.log(e.target.parent)
    // const index = [...tasks].findIndex(item => item === e.target)
    // console.log("INDEX",index)
    // console.log(e)
    // console.log(e.target.__reactFiber$0r265lhcsv9 ,"A")
    // console.log(e.target.__reactFiber$7zlw7lhyrv,"B")
    // console.log(e.FiberNode,"C");
    // console.log(e.target.second,"x")
    // // e.target.index = 1;
    // console.log(e.target,"D");
    // e = 0;
    // const ustask = [...tasks]
    // ustask.splice(e)
    // settasks(ustask)
}


    return (
        <>
        
        <div className="taskcontainer">
            <h2 className="TODO">TODO</h2>
            { isloading &&  <p>is loading ...</p>}
            <button className="fetch" onClick={()=>fitem()} ref={fref}>fetch</button>

        <input type="text" value={newtask} onChange={(e)=>handletaskinput(e)}/>
        <button onClick={addtask}>addtask</button>
        <ul className="tasks">
            
{tasks.map((task,index) =>
    
<li key={index} ref={refr} onClick={swaplist}>
   <span> {task}</span>
   {/* <UserContext.Provider value={task} > */}
   
   {/* </UserContext.Provider> */}
   <div className="btnbox">
<button onClick={()=> mvtup(index)} id={index}>⬆️</button>
<button onClick={(e)=>mvtdown(e,index)}>⬇️</button>
<button onClick={()=>deltask(index,task)}className="delbtn">🗑</button>
<button className="Save" onClick={()=>save(task)}>✅</button>
</div>
</li>



)}
        </ul>

        </div>
       
        </>
    );
}
export default Todolist