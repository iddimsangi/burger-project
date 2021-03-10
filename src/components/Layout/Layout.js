import React from 'react';
import classes from './Layout.css';
import Aux from '../../hoc/Aux';
const layout = (props) =>(
    <Aux>
            <div>
            Toolbar, SideDrawer and BackDrop
            </div>
            <main className={classes.Container}>
                {props.children}
            </main>
    </Aux>

);
export default layout;