import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as menuLoader} from './features/menu/Menu';
import Cart from './features/cart/Cart';
import Order from './features/order/Order';
import CreateOrder from './features/order/CreateOrder';
import AppLayout from './ui/AppLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    element:<AppLayout />, 
    errorElement: <Error />, 
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path:'/cart',
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path:'/order/new',
        element:<CreateOrder />,
        errorElement: <Error />,
      },
      {
        path:'/order/:orderId',
        element:<Order />,
        errorElement: <Error />,
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App
