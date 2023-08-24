import { useContext } from 'react'

import CardIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    return <button className={classes.button} onClick = {props.onClick}>
        <spam className = {classes.icon}>
            <CardIcon />
        </spam>
        <spam>Your Cart</spam>
        <spam className = {classes.badge}>
            {numberOfCartItems}
        </spam>
    </button>
}

export default HeaderCartButton; 