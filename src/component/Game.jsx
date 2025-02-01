import React from 'react'
function Game(){
const [game,setPlay] = React.useState("")
const [days,setDay] = React.useState("");
    const play = ["Cricket","Football","Hockey"]
    const day = ["weekned","weekday"]

return(
    <> 
    <div>
        {
            play.map((item)=>(
                <div>
              
                <input type = "radio" value = {item} name = "play" onChange = {(e)=>setPlay(e.target.value)}/>
                <label>{item}</label>
                </div>

            ))
        }

        <h1>Day </h1>
        {
            day.map((item)=>(
                <div>
              
                <input type = "radio" value = {item} name = "day" onChange = {(e)=>setDay(e.target.value)}/>
                <label>{item}</label>
                </div>

            ))
        }

        <h1>Game is {game} on {days}</h1>
    </div>
    </>
)
}
export { Game }