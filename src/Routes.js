import React from 'react';
import { Redirect, Route } from 'react-router';

const isUserAuthenticated = () => !!localStorage.getItem('accessToken');

function prepareRedirect() {
  return props => {
    const redirectOptions = {
      pathname: '/', // TODO - obsługa sytuacji z błędem autoryzacji
      state: { from: props.location },
    };
    return <Redirect to={redirectOptions} />;
  };
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  let toRender;
  if (isUserAuthenticated()) {
    toRender = props => <Component {...props} />;
  } else {
    toRender = prepareRedirect();
  }
  return <Route {...rest} render={toRender} />;
};

export const Routes = props => {
  const { routes } = props;
  if (routes) {
    let publicRoutes, privateRoutes;
    if (routes.public) {
      publicRoutes = routes.public.map((options, key) => (
        <Route {...options} key={key} />
      ));
    }
    if (routes.private) {
      privateRoutes = routes.private.map((options, key) => (
        <PrivateRoute {...options} key={key} />
      ));
    }
    return (
      <React.Fragment>
        {publicRoutes}
        {privateRoutes}
      </React.Fragment>
    );
  }
  return <></>;
};
