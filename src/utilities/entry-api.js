const DAYS_URL = process.env.REACT_APP_DAYS_URL  
const ENTRIES_URL = process.env.REACT_APP_ENTRIES_URL

export async function create(id, data){
    const url = `${DAYS_URL}/${id}/entries`
    

    try {
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        } 

        const response = await fetch(url, options)
        
        if(response.ok){
            return response.json()
        } else {
            throw new Error("Invalid POST Request")
        }

    } catch(error){
        console.log(error)
        return err
    }
}

export async function destroy(id){
    try {
        const options = {
            method: 'DELETE'
        } 
        const url = `${ENTRIES_URL}/${id}`
        const response = await fetch(url, options)
        
        
        if(response.ok){
            return response.json()
        } else {
            throw new Error("Invalid Request")
        }
    } catch(error){
        console.log(error)
        return error
    }
}