import React, { useContext } from 'react'
import { store } from '../App'

function Context(){
    const [count] = useContext(store)
    return(
        <>
        This is the context { count }

        </>
    )
}
export { Context }