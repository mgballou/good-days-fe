import * as authAPI from './auth-api'

export async function register(data){
    try {
        const newUser = await authAPI.registerUser(data)
        return newUser 
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

export async function login(data){
    try {
        const user = await authAPI.loginUser(data)
        return user 
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}