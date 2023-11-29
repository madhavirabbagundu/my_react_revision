import React from 'react'

function ChildComponent(){
    return(
        <>
        this is the first component
        <Second/>
        </>
    )
}

function Second(){
    return(
        <>
        <div>
            THis is the setp1 
        </div>
        <div>
            THis is the setp2
        </div>
        <div>
            THis is the setp3 
        </div>
        <div>
            THis is the setp4 
        </div>
        </>
    )
}
export { ChildComponent }