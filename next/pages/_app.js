import '../styles/globals.css'
import style from '../styles/Home.module.css'
import React, { useState } from 'react';




function MyApp(){

function countini (){
  return 4

}
 const [count, setdaw] = useState(countini())

 function decrementCount () {
   setdaw(prev => prev - 1)
 }
 function incrementCount () {
  setdaw(prev => prev + 1)
}
return (

  <div   className={style.container1}>
  <button onClick={decrementCount} className={style.button1}>-</button>
  <span className={style.button1}>{count}</span>
  <button onClick={incrementCount} className={style.button1}>+</button>
  </div>
)
}

export default MyApp