import Information from './pages/Information';
import Home from './pages/Home';

export const ROUTES_PATH = {
    DEFAULT: '/',
    INFORMATION: '/information',

}

const routes = [ 
    {
        path: ROUTES_PATH.DEFAULT,
        element: <Home/>,
    },
    {
        path: ROUTES_PATH.INFORMATION,
        element: <Information/>,
    }
];

export default routes;