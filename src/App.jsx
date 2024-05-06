import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Registration from "./pages/Registration"
import Success from "./pages/Success"

function App() {
 return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  </BrowserRouter>
 )
}

export default App
