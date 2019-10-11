import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonLink.module.css'

function ButtonLink(props) {
    //removes other class names from props so it doesn't override
    //the one in <Link />
    let {className, ...otherProps} = props;
    let classNames = [styles.buttonLink];
    //create a list of potential classes, if there are class names in props
    //this will push them into the classNames array
    if (className) {
        classNames.push(className)
    }
    return(
        //takes array of classNames and makes a space deliniated string
        <Link className={classNames.join(' ')} {...otherProps}/>
    )
}

export default ButtonLink;