import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/homepage/Home';
import Shop from './pages/shop/Shop';
import Pages from './pages/pagespage/Pages';
import Featured from './pages/featured/Featured'
import Blog from './pages/blog/blog'
import Detail from './pages/detailpage/Detail';
import { Provider } from 'react-redux';
import { Store } from './Store';
import Checkout from './pages/checkout/Checkout';

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/pages",
        element:<Pages/>
      },
      {
        path:"/featured",
        element:<Featured/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/detail",
        element:<Detail/>
      },
      {
        path:"/checkout",
        element:<Checkout/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
     <RouterProvider router={router}/>
  </Provider>
);



