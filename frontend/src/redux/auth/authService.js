import axios from 'axios'

const BACKEND_DOMAIN="http://127.0.0.1:8000"
const REGISTER_URL=  `${BACKEND_DOMAIN}/api/users/`
const LOGIN_URL=  `${BACKEND_DOMAIN}/api/jwt/create/`
const ACTIVATE_URL=  `${BACKEND_DOMAIN}/api/users/activation/`


//User Register
const register = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(REGISTER_URL, userData, config)

    return response.data
}

//User Login
const login = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(LOGIN_URL, userData, config)
    if(response.data){
        localStorage.setItem("user",JSON.stringify(response.data))
    }

    return response.data
}

//User Logout
const logout = () => {
 
    return localStorage.removeItem("user")
     
}

//Activate User
const activate = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(ACTIVATE_URL, userData, config)

    return response.data
}


const authService = {register,login,logout,activate}
export default authService