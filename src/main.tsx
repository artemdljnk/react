import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.tsx";
import {UsersPagesJP} from "./pages/users/UsersPagesJP.tsx";
import {UsersPagesDJ} from "./pages/users/UsersPagesDJ.tsx";
import {PostsPagesJP} from "./pages/posts/PostsPagesJP.tsx";
import {PostsPagesDJ} from "./pages/posts/PostsPagesDJ.tsx";
import {CommentsPagesJP} from "./pages/comments/CommentsPagesJP.tsx";
import {CommentsPagesDJ} from "./pages/comments/CommentsPagesDJ.tsx";

const routes = createBrowserRouter([
    {path: '/', element: <App/>, children:[
            {path: 'users', children:[
                    {path: 'jsonplaceholder', element: <UsersPagesJP/>}
                ]},
            {path: 'users', children:[
                    {path: 'dummyjson', element: <UsersPagesDJ/>}
                ]},
            {path: 'posts', children:[
                    {path: 'jsonplaceholder', element: <PostsPagesJP/>}
                ]},
            {path: 'posts', children:[
                    {path: 'dummyjson', element: <PostsPagesDJ/>}
                ]},
            {path: 'comments', children:[
                    {path: 'jsonplaceholder', element: <CommentsPagesJP/>}
                ]},
            {path: 'comments', children:[
                    {path: 'dummyjson', element: <CommentsPagesDJ/>}
                ]},
        ]}
])
createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>)
