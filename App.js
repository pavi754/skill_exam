import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import Menu from "./components/menu";
import Aboutus from "./components/about";
import Nopage from "./components/nopage";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
const App=()=>{
  return(
    <><BrowserRouter>
    <Routes>
    
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<Aboutus />} />
          <Route path="Menu" element={<Menu/>} />
          <Route path="nopage" element={<Nopage />} />
        </Route>
      
      </Routes></BrowserRouter></>
    
  )
}
export default App;