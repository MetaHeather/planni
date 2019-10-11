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
         <div className={styles.assignmentCard} onClick={flipCard}>
            <ul>
               <li>Title: {props.assignment.title}</li>
               <li >Due Date: {props.assignment.dueDate}</li>
            </ul>
         </div>
      ) 
   } else {
      return (
         <div className={`${styles.assignmentCard} ${styles.assignmentCard_back}` } onClick={flipCard}>
            <ul >
               <li>Details:</li>
               <li>{props.assignment.details}</li>
            </ul>
         </div>
      )
   }
}



export default Assignment;