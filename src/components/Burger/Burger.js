import React from 'react';
import classes from './Burger.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';
const burger = (props) =>{
    const transformedIngrdients = Object.keys(props.ingridients).map(igKey =>{
        return [...Array(props.ingridients[igKey])].map((_, i)=>{
            return <BurgerIngridient key={igKey + i} type={igKey}/>
        });
    });
    return(
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />
           {transformedIngrdients}
            <BurgerIngridient type="bread-bottom" />
        </div>
    );
}
export default burger;