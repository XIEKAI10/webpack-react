import React, { lazy, Suspense } from "react";
import {
  Router,
  Route,
  Switch,
  Redirect,
  withRouter,
  Link
} from "react-router-dom";
import config from "./index.js";
import history from '../utils/history';





const renderRoutes = routes => {
  if (!Array.isArray(routes)) {
    return null;
  }

  return (
    <Switch>
      {routes.map((route, index) => {
        if (route.redirect) {
          console.log(Redirect)
          return (
            <Redirect
              key={route.path || index}
              exact={route.exact}
              strict={route.strict}
              from={route.path}
              to={route.redirect}  
            />
          );
        }

        return (
          <Route
            key={route.path || index}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={() => {
              const renderChildRoutes = renderRoutes(route);
              if (route.component) {
                return (
                  // <Suspense fallback={<LoadingPage />}>
                    <route.component route={route}>
                      {renderChildRoutes}
                    </route.component>
                  // </Suspense>
                );
              }
              return renderChildRoutes;
            }}
          />
        );
      })}
    </Switch>
  );
};

const AppRouter = () => {
  return <Router history={history}>{renderRoutes(config)}</Router>;
};

export default AppRouter;
