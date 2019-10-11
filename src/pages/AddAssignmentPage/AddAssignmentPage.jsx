import React, { useState } from 'react';
import styles from './AddAssignmentPage.module.css'
import Nav from '../../components/Nav/Nav'

function AddAssignmentPage(props) {
    let [title, setTitle] = useState();
    let [details, setDetails] = useState();
    let [dueDate, setDueDate] = useState();

    function saveAssignment(){
        props.handleCreateAssignment({title, details, dueDate})
    }

    return(
        <div className={styles.layout}>
            <Nav user={props.user} />
            <div className={styles.createPage}>
                <h1 className={styles.createHeader}>Create Assignment</h1>
                <label>Title: <input onChange={ evt => setTitle(evt.target.value)} value={title} type="text"/></label>
                <label>Details: <textarea onChange={ evt => setDetails(evt.target.value)} value={details}/></label>
                <label>Due: <input onChange={ evt => setDueDate(evt.target.value)}value={dueDate} type="datetime-local"/></label>
                <button onClick={saveAssignment}>Save</button>
            </div>
        </div>
    )
}



export default AddAssignmentPage;