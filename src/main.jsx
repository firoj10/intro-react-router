import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contac from './Contacts/Contac';
import About from './Abouts/About';
import ErrorPage from './Errors/Error-page';
import Home from './Home/Home';
import Frist from './Frist/Frist';
import Friends from './Friends/Friends';
import FriendDetail from './FriendDetail/FriendDetail';
import Posts from './Posts/Posts';
import PostDetails from './PostDetails/PostDetails';


// const router = createBrowserRouter([
// {
//   path: '/',
//   element: <App></App>,
//   errorElement: <ErrorPage></ErrorPage>,
// },
// {
//   path: '/about',
//   element: <About></About>
// },
// {
//   path: '/contact',
//   element:  <Contac></Contac>
// }
// ])



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Frist></Frist>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader: () =>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "friend/:friendId",
        element: <FriendDetail></FriendDetail>,
        loader: ({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: "posts",
        element: <Posts></Posts>,
        loader: () =>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: "pot/:potId",
        element: <PostDetails></PostDetails>,
        loader: ({params}) =>fetch(`https://jsonplaceholder.typicode.com/posts/${params.potId}`)
      },
      {
        path: "contact",
        element: <Contac></Contac>
      },
      {
        path: '*',
        element: <div>4444444444444444444444444444444444444</div>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
