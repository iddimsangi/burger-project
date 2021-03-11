import React from 'react';
import classes from './Burger.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';
const burger = (props) =>{
    let transformedIngrdients = Object.keys(props.ingridients).map(igKey =>{
        return [...Array(props.ingridients[igKey])].map((_, i)=>{
            return <BurgerIngridient key={igKey + i} type={igKey}/>
        })    
    }).reduce((arr, el)=>{
        return arr.concat(el);
    }, []);
if(transformedIngrdients.length === 0){
    transformedIngrdients = <p>please start add ingridients</p>
}
    console.log(transformedIngrdients);
    return(
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />
           {transformedIngrdients}
            <BurgerIngridient type="bread-bottom" />
        </div>
    );
}
export default burger;