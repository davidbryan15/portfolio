import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/NotFound';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
]);

export default routes;
