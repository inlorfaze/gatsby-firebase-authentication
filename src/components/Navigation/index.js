import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import * as routes from '../../constants/routes';
import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
 <div className="nav">
        <Link className="logo" to={routes.LANDING}>polytalent</Link>

        <Link to={routes.HOME}>Home</Link>

        <Link to={routes.ACCOUNT}>Account</Link>

        <SignOutButton />
  </div>
);

const NavigationNonAuth = () => (
  <div className="nav">
  <Link className="logo" to={routes.LANDING}>polytalent</Link>

  <ul className="nav-list">

    <li>
      <Link to={routes.ABOUT}>Learn More</Link>
    </li>
    <li>
      <Link to={routes.SIGN_IN}>Join</Link>
    </li>
  </ul>
  </div>
);

export default Navigation;
