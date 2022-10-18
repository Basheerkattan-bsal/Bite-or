import React, { Fragment } from 'react';
import bite from '../../img/bite2-header1.png';
import video from '../../img/table.mp4';
import classes from './Header.module.css';
import HeaderButton from './HeaderButton';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        
        <div className={classes.text}>
        <h1>
          BITE.order{' '}
        </h1>
          <span>
            <img className={classes.logo} src={bite} alt="teeth" />
          </span>
        </div>
        <HeaderButton />
      </header>
      <div className={classes['main-display']}>
        <div>
          <video loop autoPlay muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
