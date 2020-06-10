import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";

//Router 생성
const LoggedInRoutes = () => (
    <>
    <Route exact path="/" component={Feed} ></Route>
    </>
);    

const LoggedOutRoutes = () => (
    <>
    <Route exact path="/" component={Auth}/>
    </>
);    

const AppRouter = ({ isLoggedIn }) => (    
      <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>    
);    

AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
