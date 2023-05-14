import { getUserToken } from "./auth-token"       

const BASE_URL = process.env.REACT_APP_DAYS_URL


export async function index(){
    try {
        const options = {

            method: 'GET',
            headers: {

                "Authorization": `bearer ${getUserToken()}`
            }
        }
        const response = await fetch(BASE_URL, options)
        
        if(response.ok){
            return response.json()
        } else {
            throw new Error("Invalid Request")
        }
        
    } catch (error) {
        console.log(error)
        return error
        
    }
}

export async function create(data){
    try {
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${getUserToken()}`
            },
            body: JSON.stringify(data)
        } 

        const response = await fetch(BASE_URL, options)
        
        if(response.ok){
            return response.json()
        } else {
            throw new Error("Invalid POST Request")
        }

    } catch(error){
        console.log(error)
        return error
    }
}


export async function detail(id){
    try {
        const options = {
            method: 'GET',
            headers: {
                "Authorization": `bearer ${getUserToken()}`
            }
        } 
        const url = `${BASE_URL}/${id}`
        const response = await fetch(url, options)
        
        if(response.ok){
            return response.json()
        } else {
            throw new Error("Invalid Request")
        }
        
    } catch (error) {
        console.log(error)
        return error
    }
    
    
    

}

export async function update(id, data){
    try {
        console.log(data)
        const options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${getUserToken()}`
            },
            body: JSON.stringify(data)
        } 
        const url = `${BASE_URL}/${id}`
        console.log(url)
        const response = await fetch(url, options)
        console.log(response)

        if(response.ok){
            return response.json()
        } else {
            throw new Error("Invalid Request")
        }
        
    } catch (error) {
        console.log(error)
        return error
        
    }
}