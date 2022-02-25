import { useRoutes } from 'react-router';
import routes from '.';

function RouteElement() {
  const element = useRoutes(routes);
  return element;
}

export default RouteElement;
