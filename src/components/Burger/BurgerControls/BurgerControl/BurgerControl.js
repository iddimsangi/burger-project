import React from 'react';
import classes from './BurgerControl.css';
const burgerControl = (props) =>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.Label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);
export default burgerControl;