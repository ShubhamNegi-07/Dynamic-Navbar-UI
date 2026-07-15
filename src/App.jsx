import Navbar from "./components/Navbar"
import Work from "./pages/Work"
import About from "./pages/About"
import Playground from "./pages/Playground"
import Resource from "./pages/Resource"

import {Routes, Route} from "react-router-dom"
const App = () => {
  return (
    <>
    <Navbar/> 
    <Routes>
      <Route path= '/' element={<Work />}/>
      <Route path= '/about' element={<About />}/>
      <Route path= '/playground' element={<Playground />}/>
      <Route path= '/resource' element={<Resource />}/>
    </Routes>
    </>
  )
}

export default App