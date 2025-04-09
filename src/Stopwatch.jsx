import { useState,useEffect,useRef  ,createContext,useContext} from "react";
import Todolist from "./tasks";
// import { UserContext } from "./tasks";

export const UserContext = createContext();


function StropWatch(props){
// const task = useContext(UserContext);

const [isRunning,setIsrunning] = useState(false)
const [eltime,setEl] = useState(0)
// const intervalid = useRef(null)
const starttimeref = useRef(0)
const  [minx,setMinx] = useState(0)
const [time ,setTime] = useState(1)
const [h,seth] =useState([1,2,3,4,5,6,7,8,9,10])
const [done,setDone] = useState(false)
const checkref = useRef(false)

function checkitem(){

    console.log(done,"STATUS")
//     if(minx >= time){
//    setDone(true)
//     }
}
useEffect(()=>{

    setMinx(Math.floor(eltime / (1000 ) % 60))
    // console.log(minx,"DU")
    // console.log(h)
    if(minx >= time){
        setIsrunning(false)
        setDone(true)
        console.log(done)
        // checkref.current.checked = true
        // checkref.current.style.backgroundColor = "yellow";
        // checkref.current.style.color = "green";
        // checkitem()
        
 
    }
} ,[minx,eltime,done])

useEffect(()=>{
    let intervalid =null;    
if(isRunning){
     intervalid = setInterval(() => {
        setEl(Date.now()-starttimeref.current);          
        // console.log(minx,"CU")
    }, 10);
    
}

//clean 
const cleanUp = ()=> clearInterval(intervalid)
return cleanUp;
// return() => {clearInterval(intervalid.current)}

},[isRunning])

function start(){
    starttimeref.current = Date.now() - eltime
    setIsrunning(true)
    // console.log(starttimeref)
    // console.log(Date.now())
}

function stop(){

    setIsrunning(false)
}

function rest(){
    setEl(0);
    setIsrunning(false);
    setDone(false)
    // checkref.current.checked = false;
}
//TODO sit time to study 
function study(e){

    console.log(e.target.value)
    setTime(e.target.value)
}

function  formattime(){
    let hours = Math.floor(eltime / (1000 * 60 * 60))
    let min = Math.floor(eltime / (1000 * 60 ) % 60)
    let sec = Math.floor(eltime / (1000 ) % 60)
    let mils = Math.floor((eltime % 1000)/10 )

    hours = hours <= 9 ?  "0" + hours : hours % 12;
    min = min <= 9 ?  "0" + min : min;
    sec = sec <= 9 ?  "0" + sec : sec ;

    
    return `${hours}:${min}:${sec}:${mils}`
}

const hell = "THIS IS TRY "
return(
    <>
    <UserContext.Provider value={eltime} >
    <div className="stopwatch" >
                                  {/* {task} */}
        <p className="timex" >{formattime() }</p>
        <button className="start" onClick={start}>start</button>
        <button className="stop" onClick={stop}>stop</button>
        <button className="rest" onClick={rest}>rest</button>
        <select name="t" id="t" onChange={(e)=>study(e)} className="STUDYO">
            <option value={1} >study for </option>
        {
            h.map((i,index)=>
             
                    <option value={i} key={index} >{i}</option>
  
            )
        }
        </select>
        <input type="checkbox" name="" id=""   ref={checkref} onChange={checkitem} className="done" checked={done} disabled/>
                
   
    </div>
    </UserContext.Provider>
   
    </>
)
}

export default StropWatch