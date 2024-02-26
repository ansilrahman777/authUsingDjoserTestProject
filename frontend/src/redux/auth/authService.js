import axios from 'axios'

const BACKEND_DOMAIN="http://127.0.0.1:8000"
const REGISTER_URL=  `${BACKEND_DOMAIN}/api/users/`
// const LOGIN_URL=  `${BACKEND_DOMAIN}/api/jwt/create/`
// const ACTIVATE_URL=  `${BACKEND_DOMAIN}/api/users/activation/`

const register = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(REGISTER_URL, userData, config)

    return response.data
}


const authService = {register}
export default authService