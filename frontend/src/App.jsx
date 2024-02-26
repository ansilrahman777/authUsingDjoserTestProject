import RegisterPage from './Pages/RegisterPage'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Router>
      <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App