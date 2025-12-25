import './App.css'
import {coursesTitleArray} from "./arrays/coursesTitleArray.ts";

function App() {
  return (
    <>
      {
        coursesTitleArray.map((value, index) => <li key={index}>{value}</li>)
      }
    </>
  )
}

export default App
