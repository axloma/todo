import { useState,useEffect } from "react";


function clock(){
    const [timex,settime] = useState(new Date());

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

    return(
        <div className="clock">
            <p className="time">
             {formatTime()}
            </p>
        </div>
    )

}
export default clock