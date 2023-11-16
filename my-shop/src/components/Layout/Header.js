import { Fragment } from "react";
import mealsImage from "../../asserts/meals.jpg";
import classes from '../Layout/Header.module.css';
import HeaderCartButton from "./HeaderCartButton";


const Header= props=>{
return (
    <Fragment>
<header className={classes.header}>
    <h1>React Meals</h1>
    <HeaderCartButton onClick={props.onShowCart}/>
    {/* <button className={classes['cart-btn']}>Cart</button> */}
    
</header>

<div className={classes['main-image']}> 
    <img src={mealsImage}/>
    </div>
 
    </Fragment>
);
}
export default Header;