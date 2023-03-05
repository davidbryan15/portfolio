import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import About from './pages/About';
import NotFound from './pages/NotFound';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'about',
        element: <About />
      }
    ]
  },
]);

export default routes;
