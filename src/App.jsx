import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Resume from "./Resume"

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/resume" element={<Resume />} />
   </Routes>
  )
}

export default App
