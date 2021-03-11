import React from 'react';
import classes from './BurgerControls.css';
import BurgerControl from './BurgerControl/BurgerControl';
const controls =[
    {label:'salad', type:'Salad'},
    {label:'cheese', type:'Cheese'},
    {label:'meat', type:'Meat'},
    {label:'bacon', type:'Bacon'},
]
const burgerControls = (props) =>(
    <div className={classes.BuildControls}>
        {controls.map(ctr =>{
            return <BurgerControl key={ctr.label} label={ctr.label} />
        })}
    </div>
);
export default burgerControls;