import { useEffect } from "react"
import { goToLogin } from "../router/Coordinator"
import { useNavigate } from "react-router-dom"


const useProtectedPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token || token === undefined){
            goToLogin(navigate)
        }
    }, [navigate])
}

export default useProtectedPage; 