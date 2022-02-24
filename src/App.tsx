import { HashRouter, useRoutes } from "react-router-dom";
import routes from "./router";

function RouteElement() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <div className="app">
      <HashRouter>
        <RouteElement />
      </HashRouter>
    </div>
  );
}

export default App;
