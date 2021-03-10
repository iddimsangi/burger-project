import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Aux';
class BurgerBuilder extends Component {
    state = {
        ingridients:{
            salad:1,
            cheese:1,
            meat:2,
            bacon:1
        }       
    }
    render(){
        return(
            <Aux>
                <Burger ingridients={this.state.ingridients} />
                <div>Burger build control</div>
            </Aux>
        );
    }
}
export default BurgerBuilder;