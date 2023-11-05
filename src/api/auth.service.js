import axios from 'axios'

export const userAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

export function signUp(){
    const res =  userAPI.post('/auth/signup')
    return res.data;
}
