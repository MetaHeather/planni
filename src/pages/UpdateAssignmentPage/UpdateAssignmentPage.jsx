
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DateTime } from 'luxon'
import assignmentService from '../../utils/assignmentService'
import styles from './UpdateAssignmentPage.module.css';
import Nav from '../../components/Nav/Nav';
import ButtonLink from '../../components/ButtonLink/ButtonLink';


function UpdateAssignmentPage(props) {

    let [assignment, setAssignment] = useState(null);

    let {id} = useParams();
    useEffect(() => {
       assignmentService.getOneAssignment(id)
       .then(setAssignment);
    },[id]);

    function handleUpdateAssignment(newAssignmentData){
       props.handleUpdateAssignment(newAssignmentData)
    }

    return(
        <div className={styles.layout}>
            <Nav user={props.user} />
            <div className={styles.updatePage}>
                {assignment ? 
                    <UpdateAssignmentForm 
                        assignment={assignment}
                        handleUpdateAssignment={handleUpdateAssignment}
                    /> 
                    : 
                        "Loading..."
                    }
            </div>
        </div>
    )
}

function UpdateAssignmentForm(props) {
    let [title, setTitle] = useState(props.assignment.title);
    let [details, setDetails] = useState(props.assignment.details);
    let [dueDate, setDueDate] = useState(props.assignment.dueDate);

    let date = DateTime.fromISO(dueDate).toLocal().toISO({ includeOffset: false })

    function handleUpdateAssignment(){
        props.handleUpdateAssignment({title, details, dueDate, _id: props.assignment._id})
     }

    return (
        <>
            <h1 className={styles.updateHeader}>Update Assignment</h1>
            <label>Title: <input onChange={ evt => setTitle(evt.target.value)} value={title} type="text"/></label>
            <label>Details: <textarea onChange={ evt => setDetails(evt.target.value)} value={details}/></label>
            <label>Due: <input onChange={ evt => setDueDate(evt.target.value)} value={date} type="datetime-local"/></label>
            <button onClick={handleUpdateAssignment}>Save</button>
        </>    
    )
}



export default UpdateAssignmentPage;