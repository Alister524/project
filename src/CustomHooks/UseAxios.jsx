import { useState } from "react";

export const useAxios = (func) =>{
    const [isLoad, setIsLoad] = useState(false)
    const [error, setError] = useState('')
    
    const newAxios = async (...args) =>{
        try {
            setIsLoad(true)
            await func(...args)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoad(false)
        }
    }
    return [newAxios, isLoad, error]
}