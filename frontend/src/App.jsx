import Header from './Components/User/Header/Header'
import RegisterPage from './Pages/RegisterPage'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App