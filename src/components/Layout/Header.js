/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Fragment } from "react";
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCardButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeal</h1>
                <HeaderCartButton onClick = {props.onShowCart}/>
            </header>
            <div className = {classes['main-image']}> 
                <img src = {mealsImage} alt = "A image of food table "/>
            </div>
        </Fragment>
    )
}

export default Header;