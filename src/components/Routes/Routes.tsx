import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../../pages/Dashboard";
import { ContentsPacks } from "../../pages/ContentsPacks";
import { Input } from "../../pages/Input";
import { useNavigation, prefixRoute } from "../../utils/utils.routing";
import { ROUTES } from "../../constants";

export const Routes = () => {
  useNavigation();

  return (
    <Switch>
      <Route exact path={prefixRoute(ROUTES.Dashboard)} component={Dashboard} />
      <Route exact path={prefixRoute(ROUTES.ContentsPacks)} component={ContentsPacks} />
      <Route exact path={prefixRoute(ROUTES.Input)} component={Input} />
    </Switch>
  );
};
