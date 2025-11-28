import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PageEndPoints } from "./constants/endpoints"
import { Login } from "./pages/login/Login"
import Home from "./pages/home/Home"
import { Join } from "./pages/join/Join"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageEndPoints.HOME} element={<Home />} />
        <Route path={PageEndPoints.LOGIN} element={<Login />} />
        <Route path={PageEndPoints.JOIN} element={<Join />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
