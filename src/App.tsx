import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PageEndPoints } from "./constants/endpoints"
import { Login } from "./pages/login/Lgoin"
import Home from "./pages/home/Home"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageEndPoints.HOME} element={<Home />} />
        <Route path={PageEndPoints.LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
