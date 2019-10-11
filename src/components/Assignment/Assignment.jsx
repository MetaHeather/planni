import React, { useState } from 'react';
import styles from './Assignment.module.css'
import ButtonLink from '../../components/ButtonLink/ButtonLink'

const Assignment = props => {
   //hook for holding state of card flip
   //deconstructing array, first item holds state, second item can update state
   let [viewFront, setViewFront] = useState(true);

   //flips card by reversing state
   function flipCard() {
      setViewFront(!viewFront);
   }

   function handleDeleteAssignment(){
      props.handleDeleteAssignment(props.assignment._id)
   }

   let date = new Date(props.assignment.dueDate);
   if(viewFront) {
      return(
         <div className={styles.assignmentCard} onClick={flipCard}>
            <ul>
               <li>Title: {props.assignment.title}</li>
               <li >Due Date: {date.toLocaleString()}</li>
            </ul>
         </div>
      ) 
   } else {
      return (
         <div className={`${styles.assignmentCard} ${styles.assignmentCard_back}` } onClick={flipCard}>
            <ul >
               <li>Details:</li>
               <li>{props.assignment.details}</li>
               <ButtonLink to={`/assignment/${props.assignment._id}/edit`} className={styles.greenButton}>Edit</ButtonLink>
               <ButtonLink onClick={handleDeleteAssignment} className={styles.greenButton}>Delete</ButtonLink>
            </ul>
         </div>
      )
   }
}



export default Assignment;