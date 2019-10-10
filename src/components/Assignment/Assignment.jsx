import React, { useState } from 'react';
import styles from './Assignment.module.css'

const Assignment = props => {
   //hook for holding state of card flip
   //deconstructing array, first item holds state, second item can update state
   let [viewFront, setViewFront] = useState(true);
   //flips card by reversing state
   function flipCard() {
      setViewFront(!viewFront);
   }
   if(viewFront) {
      return(
         <ul onClick={flipCard}>
            <li>{props.assignment.title}</li>
            <li>{props.assignment.dueDate}</li>
         </ul>
      ) 
   } else {
      return (
         <ul onClick={flipCard}>
         <li>{props.assignment.details}</li>
         <li>{props.assignment.dueDate}</li>
      </ul>
      )
   }
}



export default Assignment;