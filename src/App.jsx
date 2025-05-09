import Home from './Home';
import Menu from './features/menu/Menu';
import Cart from './features/cart/Cart';
import Order from './features/order/Order';
import CreateOrder from './features/orders/CreateOrder';
import { createBroswerRouter, RouterProvider }  from 'react-router-dom';


const router = createBroswerRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path:'/cart',
    element: <Cart />,
  },
  {
    path:'/order/new',
    element:<CreateOrder />,
  },
  {
     path:'/order/:orderID',
    element:<Order />,
  }
])

function App() {
 
  return <RouterProvider router={router} />;
}

export default App
