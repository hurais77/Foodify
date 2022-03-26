import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals1.jpg';
import classes from './Header.module.css';
import foodify from '../../assets/Foodify.png';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={foodify} />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
