import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { isAuth } from '../../redux/auth/authSelectors';
import { Switch, Route } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';
import PublicRoute from '../publicRoute/PublicRoute';
import PrivateRoute from '../privateRoute/PrivateRoute';
import healthSelectors from '../../redux/health/healthSelectors';
import LoaderSpinner from '../loader/Loader';
import NotFound from '../../pages/notFound/NotFound';

const Main = () => {
  const isAuthFlag = useSelector(isAuth);
  const dailyRate = useSelector(healthSelectors.getDailyRate);
  const history = useHistory();

  useEffect(() => {
    dailyRate && isAuthFlag && history.push('/diary');
  }, [dailyRate]);


  return (
    <>
      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          {mainRoutes.map(route => {

            if (route.isPrivate) {
              return (
                < PrivateRoute
                  {...route}
                  key={route.path}
                  dailyRate={dailyRate}
                  isAuth={isAuthFlag}
                />
              );
            }
            if (!route.isPrivate) {
              return (
                <PublicRoute {...route}
                  key={route.path}
                  dailyRate={dailyRate}
                  isAuth={isAuthFlag}
                />
              )
            }

          })}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Main;
