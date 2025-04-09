import { useState,useEffect } from "react";
// import axios from "axios";
// import { set } from "mongoose";
// import { MongoClient } from "mongodb";
// import  {main} from '../server/connect.jsx'

// let allell = main() ;
function clock(){
    const [timex,settime] = useState(new Date());
    const [items,setItems] = useState([]);
    
    useEffect(()=>{
       const intervalid = setInterval(() => {
            settime(new Date());
            console.log("ADDED TIME")
        }, 1000)
        const cleanUp = ()=> clearInterval(intervalid)
        return cleanUp;

    },[])


function addzero(number){
        return(number < 10 ? "0":"" ) + number

    }

        function formatTime(){
            let hours = timex.getHours();
            let minute = timex.getMinutes();
            let sec = timex.getSeconds();
            let meridiem = hours <= 12 ? "AM" :"PM"
            hours = hours % 12 || 12;
            return `${addzero(hours)}:${addzero(minute)}:${addzero(sec)}:${meridiem} `
        }
        // console.log("ALL ELEMENT FROM CONNECTION",allell)
    return(
        <>
        <div className="clock">
            <p className="time">
             {formatTime()}
            </p>
         
        </div>
           <div className="items">
            {/* {items._id} */}
          
           {items.map((i,index) => 
               <li key={index}>{i._id}{i.name}{items.length}{index}</li> 
              
               
           ) }
       </div>
   </>
        
    )

}
export default clock