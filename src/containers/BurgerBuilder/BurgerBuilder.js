import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Aux';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
class BurgerBuilder extends Component {
    state = {
        ingridients:{
            salad:0,
            cheese:0,
            meat:0,
            bacon:0
        }       
    }
    render(){
        return(
            <Aux>
                <Burger ingridients={this.state.ingridients} />
                <BurgerControls />
            </Aux>
        );
    }
}
export default BurgerBuilder;