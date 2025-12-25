import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router/dom";
import {createBrowserRouter} from "react-router";
import {MainLayout} from "./layouts/MainLayout.tsx";
import {UsersJP} from "./pages/UsersJP.tsx";
import {UsersDJ} from "./pages/UsersDJ.tsx";
import {PostsJP} from "./pages/PostsJP.tsx";
import {PostsDJ} from "./pages/PostsDJ.tsx";
import {CommentsJP} from "./pages/CommentsJP.tsx";

const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {path: '/users', children: [
                    {path: 'jsonplaceholder', element: <UsersJP/>},
                    {path: 'dummyjson', element: <UsersDJ/>},
                ]},
            {path: '/posts', children: [
                    {path: 'jsonplaceholder', element: <PostsJP/>},
                    {path: 'dummyjson', element: <PostsDJ/>},
                ]},
            {path: '/comments', children: [
                    {path: 'jsonplaceholder', element: <CommentsJP/>}
                ]}
        ]}
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routes}/>
)
