import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router/dom";
import {createBrowserRouter} from "react-router";
import {MainLayout} from "./layouts/MainLayout.tsx";
import {Users} from "./pages/Users.tsx";
import {Posts} from "./pages/Posts.tsx";
import {Comments} from "./pages/Comments.tsx";
import {Products} from "./pages/Products.tsx";

const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {path: "/users", element: <Users/>},
            {path: "/posts", element: <Posts/>},
            {path: "/comments", element: <Comments/>},
            {path: "/products", element: <Products/>}
        ]}
])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>)
