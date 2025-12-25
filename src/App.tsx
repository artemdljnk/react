import './App.css'
import {Menu} from "./components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

export default function App() {
  return (
    <div>
        <Menu/>
        <hr/>
        <Outlet/>
    </div>
  )
}
