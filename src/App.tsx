import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PageEndPoints } from "./constants/endpoints"
import Home from "./pages/home/Home"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageEndPoints.HOME} element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
